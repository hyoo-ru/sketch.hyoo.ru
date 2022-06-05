namespace $.$$ {

	export class $hyoo_sketch_element_link extends $.$hyoo_sketch_element_link {

		@ $mol_mem
		model() {
			return this.$.$hyoo_sketch_element_link_model.from(this.element())
		}

		pages() {
			return this.project().pages().reduce( (dict, page) => {
				dict[page.id()] = page.name()
				return dict
			} , {} )
		}

		nope(event: Event) {
			event.preventDefault()
			event.stopPropagation()
		}

	}

}
