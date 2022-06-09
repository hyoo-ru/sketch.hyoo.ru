namespace $.$$ {

	export class $hyoo_sketch_element_nav extends $.$hyoo_sketch_element_nav {

		@ $mol_mem
		project_pages() {
			const pages = this.page().project().pages()

			const dict = pages.reduce( (dict, page) => {
				dict[page.id()] = page.name()
				return dict
			} , {} )

			return dict
		}


		nav_options() {
			const action = this.nav_action()

			if (action === 'none') return [ this.Nav_action_option() ]

			return [
				this.Nav_action_option(),
				... action === 'external' ? [ this.Nav_target_link_option() ] : [ this.Nav_target_page_option() ],
			]
		}

		nav_action(next?: string) {
			return String( this.state().sub('nav_action').value(next) ?? super.nav_action() )
		}

		nav_target_page(next?: string) {
			return String( this.state().sub('nav_target_page').value(next) ?? super.nav_target_page() )
		}

		nav_target_link(next?: string) {
			return String( this.state().sub('nav_target_link').value(next) ?? super.nav_target_link() )
		}

		nav_pages(next?: string[]) {
			return ( this.$.$mol_state_arg.value(this.nav_pages_param(), next && next.join(',')) ?? '' ).split(',')
		}

		nav_page_close(id: string) {
			return this.nav_pages( this.nav_pages().filter( id2 => id2 !== id ) )
		}

		nav_page_open(id: string) {
			return this.nav_pages( [ ... this.nav_page_close(id), id ] )
		}

		nav_page_replace(id: string) {
			const index = this.nav_pages().indexOf( this.page().id() )
			if (index === -1) return this.nav_pages()

			const next = this.nav_pages()
			next.splice( index, 1, id )
			return this.nav_pages( next )
		}

		duplicate(elem: $hyoo_sketch_element) {
			const element = elem ?? super.duplicate()
			const obj = new $hyoo_sketch_element_nav
			obj.element = $mol_const(element)

			obj.nav_action(this.nav_action())
			obj.nav_target_page(this.nav_target_page())
			obj.nav_target_link(this.nav_target_link())

			return element
		}

	}

}
