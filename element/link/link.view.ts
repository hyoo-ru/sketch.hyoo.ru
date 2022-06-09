namespace $.$$ {

	export class $hyoo_sketch_element_link extends $.$hyoo_sketch_element_link {

		link_sub() {
			return [
				... this.Icon().icon_name() ? [ this.Icon().Icon() ] : [],
				this.link_title(),
			]
		}

		link_hint(next?: string) {
			return String( this.state().sub('link_hint').value(next) ?? super.link_hint() )
		}

		link_title(next?: string) {
			return String( this.state().sub('link_title').value(next) ?? super.link_title() )
		}


	}

}
