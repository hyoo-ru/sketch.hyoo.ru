namespace $.$$ {

	export class $hyoo_sketch_element_markdown extends $.$hyoo_sketch_element_markdown {

		text(next?: string) {
			return this.state().sub('markdown_text', $hyoo_crowd_text).text(next) || this.text_default()
		}

		duplicate(elem?: $hyoo_sketch_element) {
			const element = elem ?? super.duplicate()
			const obj = new $hyoo_sketch_element_markdown
			obj.element = $mol_const(element)

			obj.text(this.text())

			return element
		}

	}

}
