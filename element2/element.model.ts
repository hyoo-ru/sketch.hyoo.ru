namespace $ {

	export type $hyoo_sketch_element2_type = 'none' | 'frame' | 'text' | 'button' | 'string' | 'link'
	
	export class $hyoo_sketch_element2_model extends $mol_object2 {
		
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

		page(next?: $hyoo_sketch_page_model) {
			const id = this.state().sub('page').value(next && next.id())!
			return this.domain().page( String(id) )
		}

		type( next?: $hyoo_sketch_element2_type ) {
			const str = String( this.state().sub( 'type' ).value( next ) ?? 'none' )
			return (str as typeof next)!
		}
		
		width( next?: number ) {
			return Number( this.state().sub( 'number' ).value( next ) ?? 312 )
		}

		height( next?: number ) {
			return Number( this.state().sub( 'height' ).value( next ) ?? 40 )
		}

		x( next?: number ) {
			return Number( this.state().sub( 'x' ).value( next ) ?? 0 )
		}

		y( next?: number ) {
			return Number( this.state().sub( 'y' ).value( next ) ?? 0 )
		}

		z( next?: number ) {
			return Number( this.state().sub( 'z' ).value( next ) ?? 0 )
		}
	}
	
}
