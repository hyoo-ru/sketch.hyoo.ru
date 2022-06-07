namespace $.$$ {

	export class $hyoo_sketch_element_text extends $.$hyoo_sketch_element_text {

		padding_style() {
			if (this.padding() === 'none') return '0px'

			return `var(--mol_gap_${this.padding()})`
		}

		text(next?: string) {
			return String( this.state().sub('text_content').value(next) ?? super.text() )
		}

		padding(next?: string) {
			return String( this.state().sub('text_padding').value(next) ?? super.padding() )
		}

		align_ver(next?: string) {
			return String( this.state().sub('text_align_ver').value(next) ?? super.align_ver() )
		}

		align_hor(next?: string) {
			return String( this.state().sub('text_align_hor').value(next) ?? super.align_hor() )
		}

		// size(next?: string) {
		// 	ret
		// }

	}

}
