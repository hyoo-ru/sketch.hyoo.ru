namespace $ {
	
	export class $hyoo_sketch_page_model extends $mol_object2 {
		
		id(): string {
			return this.$.$mol_fail( new Error( 'Not defined' ) )
		}
		
		domain(): $hyoo_sketch_domain {
			return this.$.$mol_fail( new Error( 'Not defined' ) )
		}
		
		@ $mol_mem
		state() {
			return this.domain().state().doc( 'page' ).doc( this.id() )
		}
		
		name( next?: string ) {
			return String( this.state().sub( 'name' ).value( next ) ?? '' )
		}
		
		elements( next?: $hyoo_sketch_element_model[]) {
			const ids = this.state().sub('elements').list( next && next.map( obj => obj.id() ) )
			return ids.map( id => this.domain().element( String(id) ) )
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
