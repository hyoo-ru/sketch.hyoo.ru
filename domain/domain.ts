namespace $ {
	
	export class $hyoo_sketch_domain extends $mol_object2 {
		
		@ $mol_mem
		static yard() {
			return new this.$.$hyoo_sync_client
		}

		yard() {
			return $hyoo_sketch_domain.yard()
		}
		
		@ $mol_mem
		user() {
			return this.person( this.yard().peer().id )
		}
		
		@ $mol_mem_key
		person( id: $mol_int62_string ) {
			return $hyoo_sketch_person.make({ id: $mol_const(id), domain: $mol_const(this) })
		}

		@ $mol_mem_key
		element( id: $mol_int62_string ) {
			return $hyoo_sketch_element.make({ id: $mol_const(id), domain: $mol_const(this) })
		}

		@ $mol_action
		element_new( page: $mol_int62_string ) {
			const project_land = this.yard().land( this.page(page).project().id() )
			const land = this.yard().land_grab( [...project_land.peers()], [...project_land.authors()] )
			return this.element( land.id() )
		}

		@ $mol_mem_key
		page( id: $mol_int62_string ) {
			return $hyoo_sketch_page.make({ id: $mol_const(id), domain: $mol_const(this) })
		}

		@ $mol_action
		page_new( project: $mol_int62_string ) {
			const project_land = this.yard().land( project )
			const land = this.yard().land_grab( [...project_land.peers()], [...project_land.authors()] )
			return this.page( land.id() )
		}

		@ $mol_mem_key
		project( id: $mol_int62_string ) {
			return $hyoo_sketch_project.make({ id: $mol_const(id), domain: $mol_const(this) })
		}

		@ $mol_action
		project_new() {
			return this.project( this.yard().land_grab().id() )
		}
		
	}
	
}
