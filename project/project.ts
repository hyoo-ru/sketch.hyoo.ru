namespace $ {
	
	export class $hyoo_sketch_project extends $mol_object2 {
		
		id(): string {
			return this.$.$mol_fail( new Error( 'Not defined' ) )
		}
		
		domain(): $hyoo_sketch_domain {
			return this.$.$mol_fail( new Error( 'Not defined' ) )
		}
		
		@ $mol_mem
		state() {
			return this.domain().state().doc( 'project' ).doc( this.id() )
		}
		
		name( next?: string ) {
			return String( this.state().sub( 'name' ).value( next ) ?? '' )
		}
		
		pages( next?: $hyoo_sketch_page[]) {
			const ids = this.state().sub('pages').list( next && next.map( obj => obj.id() ) )
			return ids.map( id => this.domain().page( String(id) ) )
		}

		@ $mol_action
		page_add( obj: $hyoo_sketch_page ) {
			this.pages( [... this.pages(), obj] )
			obj.project( this )
		}

		@ $mol_action
		page_delete( obj: $hyoo_sketch_page ) {
			this.pages( this.pages().filter( obj2 => obj2.id() !== obj.id() ) )
		}

		@ $mol_action
		page_duplicate( obj: $hyoo_sketch_page ) {
			const copy = obj.duplicate()
			this.page_add( copy )
		}
		
	}
	
}
