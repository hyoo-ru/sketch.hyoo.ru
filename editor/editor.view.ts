namespace $.$$ {

	export class $hyoo_sketch_editor extends $.$hyoo_sketch_editor {

		element(id: string) {
			return this.domain().element(id)
		}

		@ $mol_mem_key
		Element(id: string) {
			const type = this.element(id).type()
			const obj = this[ `Element_${type}` ](id) as $hyoo_sketch_element_base
			
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
					'theme': this.Theme_options(),
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

		project_theme_hue(next?: number) {
			return this.project().theme_hue(next)
		}

	}

}
