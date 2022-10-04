namespace $.$$ {

	export class $hyoo_sketch_project_list extends $.$hyoo_sketch_project_list {

		@ $mol_action
		project_add() {
			const obj = this.domain().project_new()
			obj.name( this.project_name_default() )
			this.person().project_add( obj )
		}

		@ $mol_mem
		projects() {
			return this.person().projects().map( obj => this.Project( obj.id() ) )
		}

		project_id(id: $mol_int62_string) {
			return id
		}

		project_name(id: $mol_int62_string) {
			return this.domain().project( id ).name()
		}
		
		yard() {
			return this.domain().yard()
		}

	}

}
