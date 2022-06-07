namespace $.$$ {

	export class $hyoo_sketch_project_list extends $.$hyoo_sketch_project_list {

		domain() {
			return this.person().domain()
		}

		project_add() {
			const obj = this.domain().project( $mol_guid() )
			obj.name( this.project_name_default() )
			this.person().project_add( obj )
		}

		projects() {
			return this.person().projects().map( obj => this.Project( obj.id() ) )
		}

		project_id(id: string) {
			return id
		}

		project_name(id: string) {
			return this.domain().project( id ).name()
		}

	}

}
