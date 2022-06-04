namespace $.$$ {

	export class $hyoo_sketch extends $.$hyoo_sketch {

		user() {
			return this.domain().user()
		}

		project_opened() {
			return this.$.$mol_state_arg.value('project')
		}

		project() {
			return this.domain().project( this.project_opened()! )
		}

		page_opened() {
			return this.$.$mol_state_arg.value('page')
		}

		page() {
			return this.domain().page( this.page_opened()! )
		}

		demo_pages() {
			const str = this.$.$mol_state_arg.value('demo')
			if (!str) return []
			return str.split(',')
		}

		pages() {
			const demo_pages = this.demo_pages()
			if (demo_pages.length) {
				return demo_pages.map( id => this.Demo_page(id) )
			}

			return [
				this.Projects_page(),
				... this.project_opened() ? [this.Pages_page()] : [],
				... this.page_opened() ? [this.Frame_page()] : [],
				... this.page_opened() ? [this.Option_page()] : [],
			]
		}

		options() {
			return this.element_focused_options() ?? this.Frame_page().Options()
		}

		demo_page_title(id: string) {
			return this.domain().page(id).name()
		}

		demo_page_height(id: string) {
			return this.domain().page(id).height()
		}

		demo_page_width(id: string) {
			return this.domain().page(id).width()
		}

		demo_page_elements(id: string) {
			const page = this.domain().page(id)
			return page.elements().map( obj => {
				const element = this.Demo_element(obj.id()) 
				element.preview = $mol_const(true)
				return element
			} )
		}

	}

}
