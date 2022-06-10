namespace $ {
	
	export class $hyoo_sketch_project extends $mol_object2 {
		
		id(): string {
			return this.$.$mol_fail( new Error( 'Not defined' ) )
		}
		
		domain(): $hyoo_sketch_domain {
			return this.$.$mol_fail( new Error( 'Not defined' ) )
		}
		
		@ $mol_mem
		state() {
			return this.domain().state().doc( 'project' ).doc( this.id() )
		}
		
		name( next?: string ) {
			return String( this.state().sub( 'name' ).value( next ) ?? '' )
		}
		
		pages( next?: $hyoo_sketch_page[]) {
			const ids = this.state().sub('pages').list( next && next.map( obj => obj.id() ) )
			return ids.map( id => this.domain().page( String(id) ) )
		}

		theme_hue( next?: number ) {
			return Number( this.state().sub('theme_hue').value( next ) ?? 210 )
		}

		theme_back( next?: string ) {
			return String( this.state().sub('theme_back').value( next ) ?? '' )
		}

		theme_text( next?: string ) {
			return String( this.state().sub('theme_text').value( next ) ?? '' )
		}

		theme_field( next?: string ) {
			return String( this.state().sub('theme_field').value( next ) ?? '' )
		}

		theme_card( next?: string ) {
			return String( this.state().sub('theme_card').value( next ) ?? '' )
		}

		theme_hover( next?: string ) {
			return String( this.state().sub('theme_hover').value( next ) ?? '' )
		}

		theme_line( next?: string ) {
			return String( this.state().sub('theme_line').value( next ) ?? '' )
		}
		
		theme_shade( next?: string ) {
			return String( this.state().sub('theme_shade').value( next ) ?? '' )
		}

		theme_control( next?: string ) {
			return String( this.state().sub('theme_control').value( next ) ?? '' )
		}

		theme_current( next?: string ) {
			return String( this.state().sub('theme_current').value( next ) ?? '' )
		}

		theme_special( next?: string ) {
			return String( this.state().sub('theme_special').value( next ) ?? '' )
		}

		theme_focus( next?: string ) {
			return String( this.state().sub('theme_focus').value( next ) ?? '' )
		}

		theme_accent_back( next?: string ) {
			return String( this.state().sub('theme_accent_back').value( next ) ?? '' )
		}

		theme_accent_hover( next?: string ) {
			return String( this.state().sub('theme_accent_hover').value( next ) ?? '' )
		}

		@ $mol_action
		page_add( obj: $hyoo_sketch_page ) {
			this.pages( [... this.pages(), obj] )
			obj.project( this )
		}

		@ $mol_action
		page_delete( obj: $hyoo_sketch_page ) {
			this.pages( this.pages().filter( obj2 => obj2.id() !== obj.id() ) )
		}

		@ $mol_action
		page_duplicate( obj: $hyoo_sketch_page ) {
			const copy = obj.duplicate()
			this.page_add( copy )
		}
		
	}
	
}
