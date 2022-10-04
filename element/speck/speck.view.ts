namespace $.$$ {

	export class $hyoo_sketch_element_speck extends $.$hyoo_sketch_element_speck {

		speck_value(next?: string) {
			return String(this.state().sub('speck_value', $hyoo_crowd_reg).value(next) ?? this.speck_value_default())
		}

		duplicate(elem?: $hyoo_sketch_element) {
			const element = elem ?? super.duplicate()
			const obj = new $hyoo_sketch_element_speck
			obj.element = $mol_const(element)

			obj.speck_value(this.speck_value())

			return element
		}

		min_height() {
			return 10 as any // typings bug
		}

	}

}
