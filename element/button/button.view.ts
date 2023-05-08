namespace $.$$ {

	export class $hyoo_sketch_element_button extends $.$hyoo_sketch_element_button {

		@ $mol_mem
		Element() {
			const button = this.button_type() === 'major' ? this.Button_major() : this.Button_minor()
			return button as $mol_button
		}

		button_type(next?: string) {
			return this.state().sub('button_type', $hyoo_crowd_reg).str(next) || super.button_type()
		}

		click() {
			this.Nav().nav_click_handler()
		}

		duplicate(elem?: $hyoo_sketch_element) {
			const element = elem ?? super.duplicate()
			const obj = new $hyoo_sketch_element_button
			obj.element = $mol_const(element)

			obj.button_type(this.button_type())

			this.Text().duplicate(element)
			this.Nav().duplicate(element)

			return element
		}

	}

}
