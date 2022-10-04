namespace $.$$ {

	export class $hyoo_sketch_element_textarea extends $.$hyoo_sketch_element_textarea {

		text(next?: string) {
			return this.state().sub('textarea_text', $hyoo_crowd_text).text(next)
		}

		hint(next?: string) {
			return String( this.state().sub('textarea_hint', $hyoo_crowd_reg).value(next) ?? '' )
		}

		duplicate(elem?: $hyoo_sketch_element) {
			const element = elem ?? super.duplicate()
			const obj = new $hyoo_sketch_element_textarea
			obj.element = $mol_const(element)

			obj.text(this.text())
			obj.hint(this.hint())

			return element
		}

	}

}
