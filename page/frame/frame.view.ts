namespace $.$$ {

	export class $hyoo_sketch_page_frame extends $.$hyoo_sketch_page_frame {

		domain() {
			return this.page().domain()
		}

		element(id: string) {
			return this.domain().element(id)
		}

		element_text_add() {
			const obj = this.domain().element_text( $mol_guid() )
			this.page().elements( [...this.page().elements(), obj] )
		}

		element_button_add() {
			const obj = this.domain().element_button( $mol_guid() )
			this.page().elements( [...this.page().elements(), obj] )
		}

		element_string_add() {
			const obj = this.domain().element_string( $mol_guid() )
			this.page().elements( [...this.page().elements(), obj] )
		}

		element_link_add() {
			const obj = this.domain().element_link( $mol_guid() )
			this.page().elements( [...this.page().elements(), obj] )
		}

		@ $mol_mem_key2
		Element_switch(id: string, type: string) {
			switch(type) {
				case 'text': return this.Element_text(id)
				case 'button': return this.Element_button(id)
				case 'string': return this.Element_string(id)
				case 'link': return this.Element_link(id)
				default: return this.Element(id)
			}
		}

		elements() {
			return this.page().elements().map( obj => this.Element_switch( obj.id(), obj.type() ) )
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

		@ $mol_mem
		Element_options() {
			const id = this.element_focused()
			if (!id) return null

			return this.Element_switch(id, this.element(id).type()).Options()
		}

		grid_step() {
			return `${this.grid()}px ${this.grid()}px`
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

	}

}
