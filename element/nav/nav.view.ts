namespace $.$$ {

	type Action_type = 'open' | 'close' | 'replace' | 'external'
	type Action = {
		type: Action_type,
		source_page: string,
		target_page: string,
		target_link: string,
	}

	export class $hyoo_sketch_element_nav extends $.$hyoo_sketch_element_nav {

		@ $mol_mem
		project_pages() {
			const pages = this.page().project().pages()

			const dict = pages.reduce( (dict, page) => {
				dict[page.id()] = `${page.name()} ${page.id() === this.page().id() ? '<--' : ''}`
				return dict
			} , {} as any )

			return dict
		}

		@ $mol_mem
		nav_options() {
			return [
				this.Nav_action_add_option(),
				... this.nav_actions().map((_, index) => this.Nav_action(index))
			]
		}

		@ $mol_mem
		nav_actions_node() {
			return this.state().sub('nav_actions', $hyoo_crowd_list)
		}

		@ $mol_mem
		nav_actions(next?: Action[]) {
			return this.nav_actions_node().list(next) as Exclude<typeof next, undefined>
		}

		@ $mol_action
		nav_action_add() {
			this.nav_actions_node().add({} as any)
		}

		@ $mol_action
		nav_action_drop(id: number) {
			this.nav_actions_node().cut(id)
		}

		@ $mol_mem_key
		nav_action_value<Key extends keyof Action>({ id, key } : { id: number, key: Key }, next?: string) {
			const list = this.nav_actions()
			const item = list[id] ?? {}

			if (next === undefined) {
				return item[ key ]
			}

			this.nav_actions([
				... list.slice( 0, id ),
				{ ... item, [ key ]: next },
				... list.slice( id + 1 ),
			])

			return next as Action[Key]
		}

		nav_action_type(id: number, next?: string) {
			return this.nav_action_value({ id, key: 'type' }, next) ?? 'none'
		}

		nav_action_source_page(id: number, next?: string) {
			return this.nav_action_value({ id, key: 'source_page' }, next) ?? ''
		}

		nav_action_target_page(id: number, next?: string) {
			return this.nav_action_value({ id, key: 'target_page' }, next) ?? ''
		}

		nav_action_target_link(id: number, next?: string) {
			return this.nav_action_value({ id, key: 'target_link' }, next) ?? ''
		}

		nav_pages(next?: string[]) {
			return ( this.$.$mol_state_arg.value(this.nav_pages_param(), next && next.join(',')) ?? '' ).split(',')
		}

		nav_page_close(id: string) {
			return this.nav_pages( this.nav_pages().filter( id2 => id2 !== id ) )
		}

		nav_page_open(id: string) {
			return this.nav_pages( [ ... this.nav_page_close(id), id ] )
		}

		nav_page_replace(source_id: string, target_id: string) {
			return this.nav_pages( this.nav_pages().map( id => {
				if (id === source_id) return target_id
				if (id === target_id) return source_id
				return id
			} ) )
		}

		duplicate(elem: $hyoo_sketch_element) {
			const element = elem ?? super.duplicate()
			const obj = new $hyoo_sketch_element_nav
			obj.element = $mol_const(element)

			// obj.nav_action(this.nav_action())
			// obj.nav_target_page(this.nav_target_page())
			// obj.nav_target_link(this.nav_target_link())

			return element
		}

	}

	export class $hyoo_sketch_element_nav_action extends $.$hyoo_sketch_element_nav_action {

		rows() {
			const type = this.type()

			return [
				this.Drop(),
				this.Type_label(),
				... type === 'external' ? [this.Link_label()] : [
					... type === 'replace' ? [this.Source_page_label(), this.Target_page_label()] : [this.Target_page_label()]
				],
			]
		}

	}
}
