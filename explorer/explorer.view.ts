namespace $.$$ {

	type Item = $hyoo_sketch_explorer_item
	
	export class $hyoo_sketch_explorer extends $.$hyoo_sketch_explorer {

		@ $mol_mem
		rows() {
			return [
				this.Header(),
				... this.item_file_add_checked() || this.item_folder_add_checked() ? [this.Item_add()] : [],
				this.Content(),
				this.Log_draging(),
				this.Log_droping(),
			]
		}

		@ $mol_mem
		item_add_sub() {
			return [
				... this.item_file_add_checked() ? [this.Item_add_file_icon()] : [this.Item_add_expand_icon()],
				this.Item_add_name(),
				this.Item_add_confirm(),
			]
		}

		@ $mol_mem
		item_file_add_checked( next?: boolean ) {
			return next ?? false
		}

		@ $mol_action
		item_add_confirm() {
			const val = this.item_add_name()

			if (val) {
				const item = this.item_list().Item($mol_guid())
				item.name(val)

				if (this.item_folder_add_checked()) item.kid_ids([])
			}

			this.item_file_add_checked(false)
			this.item_folder_add_checked(false)
		}

		@ $mol_mem
		items_root() {
			return this.item_list().Root().kids().map(obj => this.Item(obj))
		}
		Item( obj: Item ) {
			return this.item_kids_has(obj) ? this.Item_folder(obj) : this.Item_file(obj)
		}

		
		@ $mol_mem
		item_draging( obj?: Item | null ) {
			return obj
		}
		@ $mol_mem
		item_droping( obj?: Item | null ) {
			return obj
		}
		item_drag_start( obj: Item, event: DragEvent ) {
			this.item_draging(obj)
		}
		item_drag_end( obj: Item ) {
			this.item_draging(null)
		}
		@ $mol_mem
		item_draging_text() {
			return JSON.stringify(this.item_draging()?.data() ?? {})
		}
		@ $mol_mem
		item_droping_text() {
			return JSON.stringify(this.item_droping()?.data() ?? {})
		}
		@ $mol_mem_key
		item_folder_drop_status( obj: Item , next = 'ready' as 'ready' | 'drag' ) {
			if (next === 'drag') this.item_droping(obj)
			if (next === 'ready' && obj.id() === this.item_droping()?.id()) this.item_droping(null)
			return next
		}
		@ $mol_mem
		item_folder_auto_open() {
			if (!this.item_droping()) return false
			return new $mol_after_timeout( 400 , () => this.Item_folder(this.item_droping()).expanded(true) )
		}

		
		item_id( obj: Item ) {
			return obj.id().toString()
		}
		item_title( obj: Item ) {
			return obj.name()
		}
		item_content( obj: Item ) {
			return obj.kids().map(obj => this.Item(obj))
		}
		item_kids_has(obj: Item) {
			return obj.kids_has()
		}
				
		transfer_adopt( transfer : DataTransfer ) {
			const id = transfer.getData( "text/plain" )
			if( !id ) return
			return this.item_list().Item(id)
		}
		receive_folder( anchor: Item, item: Item ) {
			item.parent(anchor)
		}
		receive_before( anchor: Item, item: Item ) {
			// if (anchor.kids_has()) item.parent(anchor)
			item.move(anchor, true)
		}
		receive( item: Item ) {
			console.log('receive')
			const root = this.item_list().Root()
			item.parent(root)
			console.log({ item, root, data: this.item_list().data() })
		}

		item_drop_enabled( obj: Item ) {
			// const draging = this.item_draging()

			// const into_himself = obj.id() === draging?.id() || obj.id() === draging?.parent().id()
			// const cyclic = this.item_list().is_nested(obj, draging!) 

			// const enabled = obj.kids_has() && !into_himself && cyclic
			// return enabled
			return true
		}
		root_drop_enabled() {
			return true
			// const draging = this.item_draging()

			// const from_root_to_root = Boolean( draging && draging.parent().id() === '' )

			// const enabled = !from_root_to_root
			// return enabled
		}

		auto() {
			this.item_folder_auto_open()
		}
	}
}
/*
	1) Добавить два режима работы:
		- важна только структуру, итемы переносятся только в папки, содержимое папок сортируется автоматически
		- важна структура и порядок, предыдущий пункт + ручная сортировка перетаскиванием
*/
