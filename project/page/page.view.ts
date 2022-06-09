namespace $.$$ {

	export class $hyoo_sketch_project_page extends $.$hyoo_sketch_project_page {

		domain() {
			return this.project().domain()
		}

		user() {
			return this.domain().user()
		}

		pages() {
			return this.project().pages().map( obj => this.Row( obj.id() ) )
		}

		page_id(id: string) {
			return id
		}

		page_name(id: string) {
			return this.domain().page( id ).name()
		}

		project_name(next?: string) {
			return this.project().name(next)
		}

		page_add() {
			const obj = this.domain().page( $mol_guid() )
			obj.name( this.page_name_default() )
			this.project().page_add( obj )
		}

		project_pin(next?: boolean) {
			const pinned = this.user().projects().indexOf( this.project() ) !== -1

			if ( next === undefined ) return pinned

			if ( next ) {
				this.user().project_add( this.project() )
			} else {
				this.user().project_delete( this.project() )
			}

			return next
		}

		page_copy(id: string) {
			const page = this.domain().page(id)
			const copy = page.duplicate()
			this.project().page_add(copy)
		}

	}

}
