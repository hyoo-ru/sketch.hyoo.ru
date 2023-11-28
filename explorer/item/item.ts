namespace $ {

	export type $hyoo_sketch_explorer_item_id = string | number

	type Id = $hyoo_sketch_explorer_item_id
	
	export interface $hyoo_sketch_explorer_item_dto {
		id: Id
		name: string
		parent: Id // '' for root items
		kids?: Id[]
	}

	export class $hyoo_sketch_explorer_item_list extends $mol_store<$hyoo_sketch_explorer_item_dto[]> {

		constructor(
			data_default : $hyoo_sketch_explorer_item_dto[] = []
		) {
			super()
			const root = {
				id: '',
				name: '',
				parent: '',
				kids: data_default.filter(obj => obj.parent === '').map(obj => obj.id)
			}
			this.data_default = [root, ...data_default]
		}

		@ $mol_mem
		all() {
			return this.data().filter(obj => obj.id !== '').map(obj => this.Item(obj.id))
		}

		@ $mol_mem
		all_ids() {
			return this.all().map(obj => obj.id())
		}

		@ $mol_mem_key
		Item(id: Id) {
			let index = this.data().findIndex(obj => obj.id === id)

			if (index === -1) {
				const item = { id, name: '', parent: '' }
				const list = this.data().map(obj => {
					if (obj.id === '') return { ...obj, kids: [...obj.kids!, id] }
					return obj
				})
				this.data( [ ... list, item ] )
				index = this.data().length - 1
			}

			const obj = this.sub( index, new $hyoo_sketch_explorer_item(this.data()[index]) )
			obj.List = $mol_const(this)
			return obj
		}

		@ $mol_mem
		Root() {
			return this.Item('')
		}

		@ $mol_action
		drop(item: $hyoo_sketch_explorer_item) {
			this.unlink(item.parent(), item)

			const drop_ids: Id[] = []

			const find_sub_tree_ids = (item: $hyoo_sketch_explorer_item) => {
				drop_ids.push(item.id())

				for (const kid of item.kids()) {
					find_sub_tree_ids(kid)
				}
			}
			find_sub_tree_ids(item)

			this.data( this.data().filter(obj => !drop_ids.includes(obj.id)) )
		}

		@ $mol_action
		unlink(parent: $hyoo_sketch_explorer_item, kid: $hyoo_sketch_explorer_item) {
			// if (parent.id() === '' || kid.id() === '') return
			parent.kid_ids( parent.kid_ids().filter(id => id !== kid.id()) )
			kid.value( 'parent', '' )
		}

		@ $mol_action
		link(parent: $hyoo_sketch_explorer_item, kid: $hyoo_sketch_explorer_item) {
			parent.kid_ids( [...parent.kid_ids(), kid.id()] )
			kid.value('parent', parent.id())
		}

		@ $mol_mem_key
		is_nested(anchor: $hyoo_sketch_explorer_item, target: $hyoo_sketch_explorer_item) {
			if (anchor.id() === target.id()) return true
			for (const item of anchor.kids()) {
				if (this.is_nested(item, target)) return true
			}
			return false
		}
	
	}
	
	export class $hyoo_sketch_explorer_item extends $mol_store<$hyoo_sketch_explorer_item_dto> {

		List(): $hyoo_sketch_explorer_item_list {
			throw new Error('Not defiend')
		}

		id() {
			return this.value('id')
		}

		@ $mol_mem
		name(next?: string) {
			return this.value('name', next) ?? ''
		}

		@ $mol_mem
		parent(next?: $hyoo_sketch_explorer_item) {
			const prev_id = this.value('parent')
			const prev = this.List().Item(prev_id)

			if (next === undefined) return prev

			if (this.List().is_nested(this, next)) {
				throw new Error(`${this}.parent(): Cyclic link ${this.id()}-...-${next.id()}`)
			}
			if (this.id() === '') {
				throw new Error(`${this}.parent(): Root item cannot change parent`)
			}

			this.List().unlink(prev, this)
			this.List().link(next, this)
			return next
		}

		is_root() {
			return this.id() === this.List().Root().id()
		}

		kids_has() {
			return !!this.value('kids')
		}

		@ $mol_mem
		kid_ids(next?: Id[]) {
			return this.value('kids', next) ?? []
		}

		@ $mol_mem
		kids() {
			return this.kid_ids().map(id => this.List().Item(id))
		}

		@ $mol_action
		move(anchor: $hyoo_sketch_explorer_item, before = false) {
			this.parent(anchor.parent())

			const kids = anchor.parent().kid_ids()
			let index = kids.findIndex(id => id === anchor.id()) + (!before ? 1 : 0)
			const next = [... kids.slice(0, index), this.id(), ... kids.slice(index, -1)]
			anchor.parent().kid_ids(next)
		}

	}


}
