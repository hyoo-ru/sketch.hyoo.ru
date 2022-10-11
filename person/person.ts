namespace $ {

	export class $hyoo_sketch_person extends $hyoo_sketch_entity {
		
		@ $mol_mem
		name( next?: string ) {
			return this.state().sub( 'title', $hyoo_crowd_reg ).str( next )
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

		@ $mol_mem
		current() {
			return this.domain().user().id() === this.id()
		}

		@ $mol_mem
		online() {
			const moment = this.online_time()
			if( !moment ) return false
			
			const now = this.$.$mol_state_time.now( 5_000 )
			console.log({ moment: moment.toString(), now, r: now - moment.valueOf() })
			return ( now - moment.valueOf() < 5_000 )
		}
		
		@ $mol_mem
		online_time() {
			const stamp = this.land().clock_data.last_stamp()
			return stamp ? new $mol_time_moment( stamp ) : null
		}
		
		@ $mol_mem
		cursor_position(next?: { x: number, y: number, page: $mol_int62_string | null }) {
			return this.state().sub( 'cursor_postion', $hyoo_crowd_reg ).value(next) as typeof next
		}
	}
	
}
