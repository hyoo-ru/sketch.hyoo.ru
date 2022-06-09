namespace $.$$ {

	export class $hyoo_sketch_element_switch extends $.$hyoo_sketch_element_switch {

		duplicate(elem?: $hyoo_sketch_element) {
			const element = elem ?? super.duplicate()

			this.Option_list().duplicate(element)

			return element
		}

	}

}
