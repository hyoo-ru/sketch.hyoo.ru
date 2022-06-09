namespace $.$$ {

	export class $hyoo_sketch_element_header extends $.$hyoo_sketch_element_header {

		title(next?: string) {
			return String(this.state().sub('header_title').value(next) ?? this.title_default())
		}

		title_default() {
			return this.page().name() ?? super.title_default()
		}

		duplicate(elem?: $hyoo_sketch_element) {
			const element = elem ?? super.duplicate()
			const obj = new $hyoo_sketch_element_header
			obj.element = $mol_const(element)

			obj.title(this.title())

			return element
		}

	}

}
