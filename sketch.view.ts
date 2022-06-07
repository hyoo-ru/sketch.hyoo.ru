namespace $.$$ {

	export class $hyoo_sketch extends $.$hyoo_sketch {

		arg() {
			const dict = this.$.$mol_state_arg.dict()

			return {
				project: dict.project,
				page: dict.page,
			}
		}

		project_opened() {
			return this.domain().project( this.arg().project )
		}

		page_opened() {
			return this.domain().page( this.arg().page )
		}

		pages() {
			// const demo_pages = this.demo_pages()
			// if (demo_pages.length) {
			// 	return demo_pages.map( id => this.Demo_page(id) )
			// }

			return [
				this.Projects(),
				... this.arg().project ? [this.Project()] : [],
				... this.arg().page ? [
					this.Palette(),
					this.Editor(),
					this.Option_page(),
				] : [],
			]
		}

		// @ $mol_mem
		// Element_options() {
		// 	return this.Element_focused_options()!
		// }

		// demo_page_title(id: string) {
		// 	return this.domain().page(id).name()
		// }

		// demo_page_width(id: string) {
		// 	return this.domain().page(id).model_frame().width()
		// }

		// demo_page_elements(id: string) {
		// 	const page = this.domain().page(id)
		// 	return page.elements().filter(obj => obj.type() !== 'frame').map( obj => {
		// 		const element = this.Demo_element(obj.id()) 
		// 		element.preview = $mol_const(true)
		// 		return element
		// 	} )
		// }

	}

}
