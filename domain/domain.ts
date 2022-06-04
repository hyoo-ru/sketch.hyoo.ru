namespace $ {
	
	export class $hyoo_sketch_domain extends $mol_object2 {
		
		@ $mol_mem
		state() {
			return new this.$.$mol_state_shared
		}
		
		@ $mol_mem
		user() {
			let id = this.$.$mol_store_local.value( 'user' ) as string | null
			if( !id ) {
				id = Math.random().toString( 16 ).slice( 2 )
				new $mol_after_tick( ()=> this.$.$mol_store_local.value( 'user', id ) )
			}
			
			return this.person( id )
		}
		
		@ $mol_mem_key
		person( id: string ) {
			const obj = new $hyoo_sketch_person_model
			obj.id = $mol_const( id )
			obj.domain = $mol_const( this )
			return obj
		}

		@ $mol_mem_key
		element( id: string ) {
			const obj = new $hyoo_sketch_element_model
			obj.id = $mol_const( id )
			obj.domain = $mol_const( this )

			switch(obj.type()) {
				case 'text': return this.element_text(id)
				case 'button': return this.element_button(id)
				case 'string': return this.element_string(id)
				case 'link': return this.element_link(id)
				default: return obj
			}
		}

		@ $mol_mem_key
		element_text( id: string ) {
			const obj = new $hyoo_sketch_element_text_model
			obj.id = $mol_const( id )
			obj.domain = $mol_const( this )
			obj.type('text')
			return obj
		}

		@ $mol_mem_key
		element_button( id: string ) {
			const obj = new $hyoo_sketch_element_button_model
			obj.id = $mol_const( id )
			obj.domain = $mol_const( this )
			obj.type('button')
			return obj
		}

		@ $mol_mem_key
		element_string( id: string ) {
			const obj = new $hyoo_sketch_element_string_model
			obj.id = $mol_const( id )
			obj.domain = $mol_const( this )
			obj.type('string')
			return obj
		}

		@ $mol_mem_key
		element_link( id: string ) {
			const obj = new $hyoo_sketch_element_link_model
			obj.id = $mol_const( id )
			obj.domain = $mol_const( this )
			obj.type('link')
			return obj
		}

		@ $mol_mem_key
		page( id: string ) {
			const obj = new $hyoo_sketch_page_model
			obj.id = $mol_const( id )
			obj.domain = $mol_const( this )
			return obj
		}

		@ $mol_mem_key
		project( id: string ) {
			const obj = new $hyoo_sketch_project_model
			obj.id = $mol_const( id )
			obj.domain = $mol_const( this )
			return obj
		}
		
	}
	
}
