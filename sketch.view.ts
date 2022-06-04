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

		pages() {
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

		// options() {
		// 	const id = this.element_focused()
		// 	if (!id) return []

		// 	return [
		// 		this.Element(id, this.element_type(id)!).Options(),
		// 	]
		// }

	}

}
