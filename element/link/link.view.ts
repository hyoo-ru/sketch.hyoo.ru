namespace $.$$ {

	export class $hyoo_sketch_element_link extends $.$hyoo_sketch_element_link {

		Element() {
			const action = this.Nav().nav_actions()[0]

			return action?.type === 'external' ? this.Link_external() : this.Link_internal()
		}

		click(event: PointerEvent) {
			event.preventDefault()
			this.Nav().nav_click_handler()
		}

		link_hint(next?: string) {
			return String( this.state().sub('link_hint', $hyoo_crowd_reg).value(next) ?? super.link_hint() )
		}

		// @ $mol_mem
		// link_arg() {
		// 	const action = this.Nav().nav_action()
		// 	const target_page = this.Nav().nav_target_page()
		// 	const target_link = this.Nav().nav_target_link()

		// 	let link = [] as string[]

		// 	const pages = this.Nav().nav_pages()

		// 	if (action === 'open') {
		// 		link = [...pages.filter(id => id !== target_page), target_page]
		// 	}

		// 	if (action === 'close') {
		// 		link = pages.filter( id => id !== target_page )
		// 	}

		// 	if (action === 'replace') {
		// 		link = pages.map( id => id === this.page().id() ? target_page : id )
		// 	}

		// 	console.log({ link })

		// 	return {
		// 		[this.Nav().nav_pages_param()]: link.join(','),
		// 	}
		// }

		@ $mol_mem
		link_uri() {
			const action = this.Nav().nav_actions()[0]
			return action?.type === 'external' ? action.target_link : '#'
		}

		duplicate(elem?: $hyoo_sketch_element) {
			const element = elem ?? super.duplicate()
			const obj = new $hyoo_sketch_element_link
			obj.element = $mol_const(element)

			obj.link_hint(this.link_hint())

			this.Text().duplicate(element)
			this.Nav().duplicate(element)

			return element
		}

	}

}
