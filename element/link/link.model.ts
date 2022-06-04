namespace $ {
	
	export class $hyoo_sketch_element_link_model extends $hyoo_sketch_element_model {
		
		hint(next?: string) {
			return String( this.state().sub('hint').value(next) ?? 'This is link' )
		}

		title(next?: string) {
			return String( this.state().sub('title').value(next) ?? 'Link' )
		}

		href(next?: string) {
			return String( this.state().sub('href').value(next) ?? 'https://mol.hyoo.ru' )
		}

		page(next?: string) {
			return String( this.state().sub('page').value(next) ?? '' )
		}

		
	}
	
}
