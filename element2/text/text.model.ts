namespace $ {
	
	export class $hyoo_sketch_element2_text_model extends $mol_object2 {

		static from(element: $hyoo_sketch_element2_model) {
			const obj = new this
			obj.element = $mol_const(element)
			return obj
		}

		element(): $hyoo_sketch_element2_model {
			throw new Error('Not defined')
		}

		domain() {
			return this.element().domain()
		}

		state() {
			return this.element().state()
		}
		
		text(next?: string) {
			return String( this.state().sub('text').value(next) ?? 'Text' )
		}
		
	}
	
}
