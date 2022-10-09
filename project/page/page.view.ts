namespace $.$$ {

	export class $hyoo_sketch_project_page extends $.$hyoo_sketch_project_page {

		user() {
			return this.domain().user()
		}

		person(id: $mol_int62_string) {
			return this.domain().person(id)
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
			const list = this.project().authors()
			return list.filter( obj => obj.id() !== '0_0' ).map( obj => this.Editor_link(obj.id()) )
		}

		editor_id(id: $mol_int62_string) {
			return id
		}

		editor_add_bid() {
			if (this.project().access_public()) return this.label_allowed_anyone()
			return this.editor_add_id() ? super.editor_add_bid() : ''
		}

		editor_fill_all() {
			this.editor_add_id('0_0')
		}

		editor_add_submit_enabled() {
			return this.editor_add_id().length > 0 && this.project().access_public() === false
		}

		editor_add_rows() {
			return [
				this.Editor_add_bar(),
				... this.project().access_public() ? [] : [this.Editor_fill_all()]
			]
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
