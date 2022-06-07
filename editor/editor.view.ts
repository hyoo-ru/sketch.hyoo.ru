namespace $.$$ {

	export class $hyoo_sketch_editor extends $.$hyoo_sketch_editor {

		element(id: string) {
			return this.domain().element(id)
		}

		@ $mol_mem_key
		Element(id: string) {
			const type = this.element(id).type()
			const obj = this[ `Element_${type}` ](id)
			
			obj.element = () => this.element(id)
			obj.grid = () => this.grid()
			obj.selected = (next?: any) => this.element_selected(id, next)
			obj.editing = () => this.editing()
			
			return obj
		}

		elements() {
			return this.page().elements().map( obj => this.Element( obj.id() ) )
		}

		page_name(next?: string) {
			return this.page().name(next)
		}

		editor_title() {
			return `${this.project().name()} - ${this.page().name()}`
		}

		@ $mol_mem
		selected(id?: string) {
			return this.$.$mol_state_arg.value('selected', id) ?? ''
		}

		paper_selected(next?: boolean) {
			return this.element_selected( this.page().id(), next )
		}

		@ $mol_mem_key
		element_selected(id: string, next?: boolean) {
			if (this.preview()) return false

			if (next !== undefined) {
				if (next) this.selected(id)
				return true
			}
			return id === this.selected()
		}

		Options() {
			if (this.paper_selected() || !this.selected()) {
				return {
					'page': this.Page_options(),
				}
			}

			if (this.selected()) {
				return this.Element( this.selected() ).Options()
			}

			return {}
		}

		editing() {
			return !this.preview()
		}


	}

	// export class $hyoo_sketch_page extends $.$hyoo_sketch_page {

	// 	domain() {
	// 		return this.page().domain()
	// 	}

	// 	element(id: string) {
	// 		return this.domain().element(id)
	// 	}

	// 	element_frame() {
	// 		return this.page().element_frame()
	// 	}

	// 	element_add(type: $hyoo_sketch_element_type) {
	// 		const obj = this.domain().element( $mol_guid() )
	// 		obj.type(type)
	// 		obj.page(this.page())
	// 		this.page().elements( [...this.page().elements(), obj] )
	// 	}

	// 	@ $mol_mem_key
	// 	Element_switch(id: string) {
	// 		const type = this.element(id).type()
	// 		switch(type) {
	// 			case 'frame': return this.Element_frame_refactor_frame_pls(id)
	// 			case 'text': return this.Element_text(id)
	// 			case 'button': return this.Element_button(id)
	// 			case 'string': return this.Element_string(id)
	// 			case 'link': return this.Element_link(id)
	// 			default: return this.Element(id)
	// 		}
	// 	}

	// 	@ $mol_mem
	// 	elements() {
	// 		const filter = this.page().elements().filter( obj => obj.type() !== 'frame' )
	// 		return filter.map( obj => this.Element_switch( obj.id() ) )
	// 	}

	// 	@ $mol_mem
	// 	element_focused(id?: string) {
	// 		return this.$.$mol_state_arg.value('focus', id) ?? ''
	// 	}

	// 	@ $mol_mem_key
	// 	handle_focused(id: string, next?: boolean) {
	// 		if (next !== undefined) {
	// 			if (next) this.element_focused(id)
	// 			return true
	// 		}
	// 		return id === this.element_focused()
	// 	}

	// 	element_frame_handle_focused(next?: boolean) {
	// 		return this.handle_focused(this.element_frame().id(), next)
	// 	}

	// 	@ $mol_mem
	// 	Element_options() {
	// 		const id = this.element_focused()
	// 		if (!id) return null

	// 		return this.Element_switch(id).Options()
	// 	}

	// 	focus() {
	// 		this.$.$mol_state_arg.value('focus', null)
	// 	}

	// 	focused() {
	// 		return this.$.$mol_state_arg.value('focus') === null
	// 	}

	// 	element_delete() {
	// 		const id = this.element_focused()

	// 		if (id) {
	// 			const list = this.page().elements()
	// 			this.page().elements( list.filter( obj => obj.id() !== id ) )
	// 		}
	// 	}

	// 	page_preview(next?: boolean) {
	// 		if (next === undefined) {
	// 			return this.page().id() === this.$.$mol_state_arg.value('page_preview')
	// 		}

	// 		this.$.$mol_state_arg.value('page_preview', next === true ? this.page().id() : null)

	// 		return next
	// 	}

	// 	mode() {
	// 		return this.page_preview() ? 'preview' : 'editor'
	// 	}

	// 	project_demo_pages() {
	// 		return [ this.page().id() ].join(',')
	// 	}

	// }

}
