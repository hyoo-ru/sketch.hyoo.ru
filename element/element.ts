namespace $ {

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
			console.log(1)
			const id = this.state().sub('page').value(next && next.id())!
			return this.domain().page( String(id) )
		}

		name( next?: string ) {
			return String( this.state().sub( 'name' ).value( next ) ?? '' )
		}

		type( next?: string ) {
			return String( this.state().sub( 'type' ).value( next ) ?? 'base' )
		}

		duplicate() {
			const obj = this.domain().element( $mol_guid() )
			obj.type( this.type() )
			obj.page( this.page() )
			obj.name( this.name() )

			return obj
		}
	}
	
}
