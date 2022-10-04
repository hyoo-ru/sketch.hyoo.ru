namespace $.$$ {

	export class $hyoo_sketch_element_image extends $.$hyoo_sketch_element_image {

		image_link(next?: string) {
			return String( ( this.state().sub('image_link', $hyoo_crowd_reg).value(next) ?? this.image_link_default() ) || this.image_link_placeholder() )
		}

		image_round(next?: boolean) {
			return Boolean( this.state().sub('image_round', $hyoo_crowd_reg).value(next) ?? false )
		}

		round() {
			return this.image_round() ? '50%' : 'unset'
		}

		image_link_placeholder() {
			return `http://placehold.jp/${this.width()}x${this.height()}.png`
		}

		duplicate(elem: $hyoo_sketch_element) {
			const element = elem ?? super.duplicate()
			const obj = new $hyoo_sketch_element_image
			obj.element = $mol_const(element)

			obj.image_link( this.image_link() )

			return element
		}

	}

}
