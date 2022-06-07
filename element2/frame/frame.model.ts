namespace $ {
	
	export class $hyoo_sketch_element2_frame_model extends $mol_object2 {
		
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

		width(next?: number) {
			return Number( this.state().sub('width').value(next) ?? '340' )
		}

		height(next?: number) {
			return Number( this.state().sub('height').value(next) ?? '640' )
		}

		grid(next?: number) {
			return Number( this.state().sub('grid').value(next) ?? '8' )
		}
		
	}
	
}
