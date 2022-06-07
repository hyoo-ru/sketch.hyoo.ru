namespace $ {

	export class $hyoo_sketch_element_meta extends $mol_object2 {

		domain(): $hyoo_sketch_domain {
			return this.$.$mol_fail( new Error( 'Not defined' ) )
		}

		state(): $mol_state_shared {
			return this.$.$mol_fail( new Error( 'Not defined' ) )
		}

		name( next?: string ) {
			return String( this.state().sub( 'name' ).value( next ) ?? '' )
		}

		type( next?: string ) {
			return String( this.state().sub( 'type' ).value( next ) ?? '' )
		}

	}

	export class $hyoo_sketch_element extends $mol_object2 {
		
		id(): string {
			return this.$.$mol_fail( new Error( 'Not defined' ) )
		}
		
		domain(): $hyoo_sketch_domain {
			return this.$.$mol_fail( new Error( 'Not defined' ) )
		}
		
		@ $mol_mem
		state() {
			return this.domain().state().doc( 'element' ).doc( this.id() )
		}

		page(next?: $hyoo_sketch_page) {
			const id = this.state().sub('page').value(next && next.id())!
			return this.domain().page( String(id) )
		}

		@ $mol_mem
		meta() {
			const obj = new $hyoo_sketch_element_meta
			obj.state = $mol_const( this.state() )
			obj.domain = $mol_const( this.domain() )
			return obj
		}

		duplicate() {
			return this
		}
	}
	
}
