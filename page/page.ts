namespace $ {
	
	export class $hyoo_sketch_page extends $mol_object2 {
		
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

		width( next?: number ) {
			return Number( this.state().sub( 'width' ).value( next ) ?? 340 )
		}

		height( next?: number ) {
			return Number( this.state().sub( 'height' ).value( next ) ?? 640 )
		}

		grid( next?: number ) {
			return Number( this.state().sub( 'grid' ).value( next ) ?? 8 )
		}

		elements( next?: $hyoo_sketch_element[]) {
			const ids = this.state().sub('elements').list( next && next.map( obj => obj.id() ) )
			return ids.map( id => this.domain().element( String(id) ) )
		}

		@ $mol_action
		element_add( obj: $hyoo_sketch_element ) {
			this.elements( [ ... this.elements() , obj ] )
			obj.page(this)
		}

		@ $mol_action
		element_delete( obj: $hyoo_sketch_element ) {
			this.elements( this.elements().filter( obj2 => obj2.id() !== obj.id() ) )
		}

		@ $mol_action
		element_duplicate( obj: $hyoo_sketch_element ) {
			const copy = obj.duplicate()
			this.element_add( obj )
		}

		@ $mol_action
		duplicate() {
			const obj = this.domain().page( $mol_guid() )
			this.elements().map( elem => obj.element_duplicate( elem ) )
			obj.width( this.width() )
			obj.height( this.height() )
			obj.grid( this.grid() )
			obj.name( this.name() + '*' )
			return obj
		}

		project(next?: $hyoo_sketch_project) {
			const id = this.state().sub('project').value(next && next.id())
			return this.domain().project( String(id) )
		}
		
	}
	
}
