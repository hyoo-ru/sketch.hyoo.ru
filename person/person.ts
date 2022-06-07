namespace $ {
	
	export class $hyoo_sketch_person extends $mol_object2 {
		
		id(): string {
			return this.$.$mol_fail( new Error( 'Not defined' ) )
		}
		
		domain(): $hyoo_sketch_domain {
			return this.$.$mol_fail( new Error( 'Not defined' ) )
		}
		
		@ $mol_mem
		state() {
			return this.domain().state().doc( 'person' ).doc( this.id() )
		}
		
		name( next?: string ) {
			return String( this.state().sub( 'name' ).value( next ) ?? '' )
		}
		
		avatar( next?: string ) {
			return String( this.state().sub( 'avatar' ).value( next ) ?? '' )
		}

		projects( next?: $hyoo_sketch_project[]) {
			const ids = this.state().sub('projects').list( next && next.map( obj => obj.id() ) )
			return ids.map( id => this.domain().project( String(id) ) )
		}

		@ $mol_action
		project_add( obj: $hyoo_sketch_project ) {
			this.projects( [...this.projects(), obj] )
		}

		@ $mol_action
		project_delete( obj: $hyoo_sketch_project ) {
			this.projects( this.projects().filter( obj2 => obj2.id() !== obj.id() ) )
		}
		
	}
	
}
