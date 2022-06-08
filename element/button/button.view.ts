namespace $.$$ {

	export class $hyoo_sketch_element_button extends $.$hyoo_sketch_element_button {

		@ $mol_mem
		Element() {
			const button = this.button_type() === 'major' ? this.Button_major() : this.Button_minor()
			return button as $mol_button
		}

		button_title(next?: string) {
			return String( this.state().sub('button_title').value(next) ?? super.button_title() )
		}

		button_type(next?: string) {
			return String( this.state().sub('button_type').value(next) ?? super.button_type() )
		}

	}

}
