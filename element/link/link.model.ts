namespace $ {
	
	export class $hyoo_sketch_element_link_model extends $mol_object2 {

		static from(element: $hyoo_sketch_element_model) {
			const obj = new this
			obj.element = $mol_const(element)
			return obj
		}

		element(): $hyoo_sketch_element_model {
			throw new Error('Not defined')
		}

		domain() {
			return this.element().domain()
		}

		state() {
			return this.element().state()
		}
		
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
