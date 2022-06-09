namespace $.$$ {

	export class $hyoo_sketch_element_image extends $.$hyoo_sketch_element_image {

		image_link(next?: string) {
			return String( this.state().sub('image_link').value(next) ?? super.image_link() )
		}

	}

}
