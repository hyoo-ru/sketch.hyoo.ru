namespace $.$$ {

	export class $hyoo_sketch_page_list extends $.$hyoo_sketch_page_list {

		domain() {
			return this.project().domain()
		}

		user() {
			return this.domain().user()
		}

		pages() {
			return this.project().pages().map( obj => this.Page( obj.id() ) )
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
			obj.name( 'Page' )
			obj.project( this.project() )

			const frame = this.domain().element( $mol_guid() )
			frame.type('frame')
			obj.elements( [ frame ] )

			this.project().pages( [...this.project().pages() , obj] )
		}

		project_pin(next?: boolean) {
			const pinned = this.user().projects().indexOf( this.project() ) !== -1

			if ( next === undefined ) return pinned

			if ( next ) {
				this.user().projects( [ ...this.user().projects() , this.project() ] )
			} else {
				this.user().projects( this.user().projects().filter( obj => obj !== this.project() ) )
			}

			return next
		}

	}

}
