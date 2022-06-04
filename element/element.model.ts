namespace $ {
	
	export class $hyoo_sketch_element_model extends $mol_object2 {
		
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

		type( next?: string ) {
			return String( this.state().sub( 'type' ).value( next ) ?? '' )
		}
		
		width( next?: number ) {
			return Number( this.state().sub( 'number' ).value( next ) ?? 100 )
		}

		height( next?: number ) {
			return Number( this.state().sub( 'height' ).value( next ) ?? 50 )
		}

		x( next?: number ) {
			const result = Number( this.state().sub( 'x' ).value( next ) ?? 0 )
			console.log({ next, val: result })
			return result
		}

		y( next?: number ) {
			return Number( this.state().sub( 'y' ).value( next ) ?? 0 )
		}

		z( next?: number ) {
			return Number( this.state().sub( 'z' ).value( next ) ?? 0 )
		}
	}
	
}
