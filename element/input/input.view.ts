namespace $.$$ {

	export class $hyoo_sketch_element_input extends $.$hyoo_sketch_element_input {

		Element() {
			const type = this.input_type()

			return this[ type ]() as $mol_view
		}

		input_type(next?: string) {
			return String( this.state().sub('input_type').value(next) ?? super.input_type() )
		}

	}

}
