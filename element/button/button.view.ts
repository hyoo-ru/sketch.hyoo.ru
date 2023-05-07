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
			const actions = this.Nav().nav_actions()
			for (const action of actions) {
				if (action.type === 'open' && action.target_page) {
					this.Nav().nav_page_open( action.target_page )
				}

				if (action.type === 'close') {
					this.Nav().nav_page_close( action.target_page || this.page().id() )
				}

				if (action.type === 'replace' && action.source_page && action.target_page) {
					this.Nav().nav_page_replace( action.source_page, action.target_page )
				}

				if (action.type === 'external') {
					$mol_dom_context.open(action.target_link ?? 'example.com', '_blank')
				}
			}
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
