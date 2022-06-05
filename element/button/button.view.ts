namespace $.$$ {

	export class $hyoo_sketch_element_button extends $.$hyoo_sketch_element_button {

		@ $mol_mem
		model() {
			return this.$.$hyoo_sketch_element_button_model.from(this.element())
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

		demo(next?: string[]) {
			return ( this.$.$mol_state_arg.value('demo', next && next.join(',')) ?? '' ).split(',')
		}

		click() {
			if (this.preview() === false || !this.demo().length) return

			const pages = this.demo()
			const page_current = this.element().page().id()

			if (this.action() === 'close') {
				this.demo( pages.filter( id => id !== page_current ) )
			}

			if (this.action() === 'open' && this.page()) {
				this.demo([...pages, this.page()])
			}

			if (this.action() === 'replace' && this.page()) {
				const next = pages.slice()
				next.splice( pages.indexOf(page_current) , 1 , this.page() )
				this.demo( next )
			}

			if (this.action() === 'external' && this.link()) {
				$mol_dom_context.open(this.link(), '_blank')
			}
		}

	}

}
