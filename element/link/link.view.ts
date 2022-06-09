namespace $.$$ {

	export class $hyoo_sketch_element_link extends $.$hyoo_sketch_element_link {

		Element() {
			const action = this.Nav().nav_action()

			return action === 'external' || action === 'none' ? this.Link_external() : this.Link_internal()
		}

		link_sub() {
			return [
				... this.Icon().icon_name() ? [ this.Icon().Icon() ] : [],
				this.link_title(),
			]
		}

		link_hint(next?: string) {
			return String( this.state().sub('link_hint').value(next) ?? super.link_hint() )
		}

		link_title(next?: string) {
			return String( this.state().sub('link_title').value(next) ?? super.link_title() )
		}

		@ $mol_mem
		link_arg() {
			const action = this.Nav().nav_action()
			const target_page = this.Nav().nav_target_page()
			const target_link = this.Nav().nav_target_link()

			let link = [] as string[]

			const pages = this.Nav().nav_pages()

			if (action === 'open') {
				link = [...pages.filter(id => id !== target_page), target_page]
			}

			if (action === 'close') {
				link = pages.filter( id => id !== target_page )
			}

			if (action === 'replace') {
				link = pages.map( id => id === this.page().id() ? target_page : id )
			}

			console.log({ link })

			return {
				[this.Nav().nav_pages_param()]: link.join(','),
			}
		}

		@ $mol_mem
		link_uri() {
			return this.Nav().nav_action() === 'external' ? this.Nav().nav_target_link() : '#'
		}

	}

}
