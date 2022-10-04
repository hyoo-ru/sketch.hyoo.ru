namespace $.$$ {

	export class $hyoo_sketch_element_text extends $.$hyoo_sketch_element_text {

		text_sub() {
			return [
				... this.Icon().icon_name() ? [this.Icon().Icon()] : [],
				this.text(),
			]
		}

		padding_style() {
			if (this.padding() === 'none') return '0px'

			return `var(--mol_gap_${this.padding()})`
		}

		text(next?: string) {
			return String( this.state().sub('text_content', $hyoo_crowd_reg).value(next) ?? this.text_default() )
		}

		padding(next?: string) {
			return String( this.state().sub('text_padding', $hyoo_crowd_reg).value(next) ?? this.padding_default() )
		}

		align_ver(next?: string) {
			return String( this.state().sub('text_align_ver', $hyoo_crowd_reg).value(next) ?? this.align_ver_default() )
		}

		align_hor(next?: string) {
			return String( this.state().sub('text_align_hor', $hyoo_crowd_reg).value(next) ?? this.align_hor_default() )
		}

		size(next?: string) {
			return String( this.state().sub('text_size', $hyoo_crowd_reg).value(next) ?? this.size_default() )
		}

		duplicate(elem?: $hyoo_sketch_element) {
			const element = elem ?? super.duplicate()
			const obj = new $hyoo_sketch_element_text
			obj.element = $mol_const(element)

			obj.text(this.text())
			obj.padding(this.padding())
			obj.align_ver(this.align_ver())
			obj.align_hor(this.align_hor())
			obj.size(this.size())

			this.Icon().duplicate(element)

			return element
		}

	}

}
