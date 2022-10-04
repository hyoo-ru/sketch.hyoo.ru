namespace $ {
	
	export class $hyoo_sketch_person extends $hyoo_sketch_entity {
		
		@ $mol_mem
		name( next?: string ) {
			return this.state().sub( 'name', $hyoo_crowd_reg ).str( next )
		}
		
		@ $mol_mem
		avatar( next?: string ) {
			return this.state().sub( 'avatar', $hyoo_crowd_reg ).str( next )
		}

		@ $mol_mem
		projects_node() {
			return this.state().sub( 'projects', $hyoo_crowd_list )
		}

		@ $mol_mem
		projects( next?: $hyoo_sketch_project[]) {
			const ids = this.projects_node().list( next && next.map( obj => obj.id() ) )
			return ids.map( id => this.domain().project( id as $mol_int62_string ) )
		}

		@ $mol_action
		project_add( obj: $hyoo_sketch_project ) {
			this.projects_node().add( obj.id() )
		}

		@ $mol_action
		project_delete( obj: $hyoo_sketch_project ) {
			this.projects_node().drop( obj.id() )
		}
		
	}
	
}
