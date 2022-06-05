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

		element_frame() {
			const element = this.elements().find( obj => obj.type() === 'frame' )
			if (!element) throw new Promise(()=>{}) // Data not loaded now
			return element
		}

		model_frame() {
			return this.$.$hyoo_sketch_element_frame_model.from(this.element_frame())
		}

		project(next?: $hyoo_sketch_project_model) {
			const id = this.state().sub('project').value(next && next.id())
			return id ? this.domain().project( String(id) ) : null
		}
		
	}
	
}
