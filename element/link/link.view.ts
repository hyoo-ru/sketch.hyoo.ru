namespace $.$$ {

	export class $hyoo_sketch_element_link extends $.$hyoo_sketch_element_link {

		@ $mol_mem
		model() {
			return this.$.$hyoo_sketch_element_link_model.from(this.element())
		}

		options() {
			const action = this.action()

			return [
				... super.options(),
				this.Title_field(),
				this.Action_field(),
				... action === 'open' || action === 'replace' ? [ this.Page_field() ] : [],
				... action === 'external' ? [ this.Link_field() ] : [],
			]
		}

		nope(event: Event) {
			event.preventDefault()
			event.stopPropagation()
		}

		@ $mol_mem
		project_pages() {
			const pages = this.element().page().project().pages()
			const filter = pages.filter( obj => obj.id() !== this.element().page().id() )
			const dict = filter.reduce( (dict, page) => {
				dict[page.id()] = page.name()
				return dict
			} , {} )
			console.log({ pages, filter, dict })
			return dict
		}

		demo(next?: string[]) {
			return ( this.$.$mol_state_arg.value('demo', next && next.join(',')) ?? '' ).split(',')
		}

		click_preview(event: Event) {
			event.preventDefault()
			event.stopPropagation()

			if (this.preview() === false || !this.demo().length) return

			const pages = this.demo()
			const page_current = this.element().page().id()

			if (this.action() === 'close') {
				this.demo( pages.filter( id => id !== page_current ) )
			}

			if (this.action() === 'open' && this.target_page()) {
				this.demo([...pages, this.target_page()])
			}

			if (this.action() === 'replace' && this.target_page()) {
				const next = pages.slice()
				next.splice( pages.indexOf(page_current) , 1 , this.target_page() )
				this.demo( next )
			}

			if (this.action() === 'external' && this.target_link()) {
				$mol_dom_context.open(this.target_link(), '_blank')
			}
		}

	}

}
