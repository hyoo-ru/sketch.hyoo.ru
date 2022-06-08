namespace $.$$ {

	export class $hyoo_sketch_element_input extends $.$hyoo_sketch_element_input {

		Element() {
			const type = this.input_type()

			return this[ type ]() as $mol_view
		}

		input_number(next?: number) {
			return Number( this.input_text( String(next) ) )
		}

		input_type(next?: string) {
			return String( this.state().sub('input_type').value(next) ?? super.input_type() )
		}

		input_hint(next?: string) {
			return String( this.state().sub('input_hint').value(next) ?? super.input_hint() )
		}

		input_text(next?: string) {
			return String( this.state().sub('input_text').value(next) ?? super.input_text() )
		}

		input_enabled(next?: string) {
			return String( this.state().sub('input_enabled').value(next) ?? super.input_enabled() )
		}

		input_enabled_bool() {
			return this.input_enabled() === 'on'
		}

	}

}
