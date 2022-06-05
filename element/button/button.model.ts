namespace $ {
	
	export class $hyoo_sketch_element_button_model extends $mol_object2 {
		
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

		title(next?: string) {
			return String( this.state().sub('title').value(next) ?? 'Button' )
		}
		
	}
	
}
