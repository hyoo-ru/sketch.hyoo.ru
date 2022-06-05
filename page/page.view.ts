namespace $.$$ {

	export class $hyoo_sketch_page extends $.$hyoo_sketch_page {

		domain() {
			return this.page().domain()
		}

		element(id: string) {
			return this.domain().element(id)
		}

		element_frame() {
			const res = this.page().elements().find( obj => obj.type() === 'frame' )!
			if (!res) {
				throw new Promise(()=>{}) // Loading
			}
			return res
		}

		element_add(type: $hyoo_sketch_element_type) {
			const obj = this.domain().element( $mol_guid() )
			obj.type(type)
			this.page().elements( [...this.page().elements(), obj] )
		}

		@ $mol_mem_key
		Element_switch(id: string) {
			const type = this.element(id).type()
			switch(type) {
				case 'text': return this.Element_text(id)
				case 'button': return this.Element_button(id)
				case 'string': return this.Element_string(id)
				case 'link': return this.Element_link(id)
				default: return this.Element(id)
			}
		}

		@ $mol_mem
		elements() {
			const filter = this.page().elements().filter( obj => obj.type() !== 'frame' )
			return filter.map( obj => this.Element_switch( obj.id() ) )
		}

		@ $mol_mem
		element_focused(id?: string) {
			return this.$.$mol_state_arg.value('focus', id) ?? ''
		}

		@ $mol_mem_key
		handle_focused(id: string, next?: boolean) {
			if (next !== undefined) {
				if (next) this.element_focused(id)
				return true
			}
			return id === this.element_focused()
		}

		element_frame_handle_focused(next?: boolean) {
			return this.handle_focused(this.element_frame().id(), next)
		}

		@ $mol_mem
		Element_options() {
			const id = this.element_focused()
			if (!id) return null

			return this.Element_switch(id).Options()
		}

		focus() {
			this.$.$mol_state_arg.value('focus', null)
		}

		focused() {
			return this.$.$mol_state_arg.value('focus') === null
		}

		element_delete() {
			const id = this.element_focused()

			if (id) {
				const list = this.page().elements()
				this.page().elements( list.filter( obj => obj.id() !== id ) )
			}
		}

		page_preview(next?: boolean) {
			if (next === undefined) {
				return this.page().id() === this.$.$mol_state_arg.value('page_preview')
			}

			this.$.$mol_state_arg.value('page_preview', next === true ? this.page().id() : null)

			return next
		}

		mode() {
			return this.page_preview() ? 'preview' : 'editor'
		}

		project_demo_pages() {
			return [ this.page().id() ].join(',')
		}

	}

}
