namespace $.$$ {

	export class $hyoo_sketch_element_link extends $.$hyoo_sketch_element_link {

		pages() {
			return this.project().pages().reduce( (dict, page) => {
				dict[page.id()] = page.name()
				return dict
			} , {} )
		}

	}

}
