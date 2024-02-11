namespace $.$$ {

	export class $hyoo_sketch_editor extends $.$hyoo_sketch_editor {

		element(id: $mol_int62_string) {
			return this.domain().element(id)
		}

		grid_str(next?: string) {
			return String(this.grid(next === undefined ? next : Number(next)))
		}

		@ $mol_mem_key
		Element(id: $mol_int62_string) {
			const type = this.element(id).type()
			const obj = (this as any)[ `Element_${type}` ](id) as $hyoo_sketch_element_base
			
			obj.element = () => this.element(id)
			obj.grid = () => this.grid()
			obj.selected = (next?: any) => this.element_selected(id, next)
			obj.editing = () => this.editing()
			
			return obj
		}

		element_render( obj: $hyoo_sketch_element_base ) {
			return this.preview() ? obj.Preview() : obj.Editor()
		}

		@ $mol_mem
		elements() {
			return this.page().elements().map( obj => this.element_render(this.Element( obj.id() )) )
		}

		page_name(next?: string) {
			return this.page().name(next)
		}

		editor_title() {
			return `${this.project().name()} - ${this.page().name()}`
		}

		@ $mol_mem
		selected(id?: $mol_int62_string) {
			return (this.$.$mol_state_arg.value('selected', id) ?? '') as $mol_int62_string
		}

		paper_selected(next?: boolean) {
			return this.element_selected( this.page().id(), next )
		}

		@ $mol_mem_key
		element_selected(id: $mol_int62_string, next?: boolean) {
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
					'delete': this.Delete_options(),
				}
			}

			if (this.selected()) {
				return this.Element( this.selected() ).Options()
			}

			return {}
		}

		@ $mol_mem
		preview(next?: boolean) {
			return this.$.$mol_state_arg.value('preview', next ? '' : null) === ''
		}

		editing() {
			return !this.preview()
		}

		page_current_id() {
			return this.page().id()
		}

		project_name(next?: string) {
			return this.project().name(next)
		}

		page_delete() {
			this.project().page_delete(this.page())
			this.$.$mol_state_arg.value('page', null)
		}

	}

}
