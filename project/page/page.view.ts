namespace $.$$ {

	export class $hyoo_sketch_project_page extends $.$hyoo_sketch_project_page {

		user() {
			return this.domain().user()
		}

		pages() {
			return this.project().pages().map( obj => this.Row( obj.id() ) )
		}

		page_id(id: $mol_int62_string) {
			return id
		}

		page_name(id: $mol_int62_string) {
			return this.domain().page( id ).name()
		}

		project_name(next?: $mol_int62_string) {
			return this.project().name(next)
		}

		page_add() {
			const obj = this.domain().page_new( this.project().id() )
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

		page_copy(id: $mol_int62_string) {
			const page = this.domain().page(id)
			const copy = page.duplicate()
			this.project().page_add(copy)
		}

		editor_list() {
			return [...this.project().land().lords()].map( id => this.Editor_link(id) )
		}

		editor_id(id: $mol_int62_string) {
			return id
		}

		editor_name(id: $mol_int62_string) {
			if (id === '0_0') return super.editor_name(id)
			return this.domain().person(id).name()
		}

		editor_fill_all() {
			this.editor_add_id('0_0')
		}

		editor_add_filled() {
			return this.editor_add_id().length > 0
		}

		editor_add_submit() {
			const peer = this.editor_add_id() as $mol_int62_string

			this.project().land().level(peer, $hyoo_crowd_peer_level.mod)
			for (const page of this.project().pages()) {
				page.land().level(peer, $hyoo_crowd_peer_level.mod)
				
				for (const element of page.elements()) {
					element.land().level(peer, $hyoo_crowd_peer_level.mod)
				}
			}
			
			this.editor_add_id('')
		}

	}

}
