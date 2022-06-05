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

		project(next?: $hyoo_sketch_project_model) {
			const id = this.state().sub('project').value(next && next.id())
			return id ? this.domain().project( String(id) ) : null
		}
		
	}
	
}
