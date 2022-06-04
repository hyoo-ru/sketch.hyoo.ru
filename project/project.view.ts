namespace $.$$ {

	export class $hyoo_sketch_project extends $.$hyoo_sketch_project {

		project_add() {
			const obj = this.person().domain().project( $mol_guid() )
			obj.name('New project')
			this.person().projects( [... this.person().projects(), obj] )
		}

		projects() {
			return this.person().projects().map( obj => this.Project( obj.id() ) )
		}

		project_id(id: string) {
			return id
		}

		project_name(id: string) {
			return this.person().domain().project( id ).name()
		}

	}

}
