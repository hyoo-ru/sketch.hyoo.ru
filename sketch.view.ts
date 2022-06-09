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
			const demo_pages = this.$.$mol_state_arg.value('demo')?.split(',') ?? []
			if (demo_pages.length) {
				return demo_pages.map( id => this.Demo_page(id) )
			}

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

		demo_page_title(id: string) {
			return this.domain().page(id).name()
		}

		demo_page_width(id: string) {
			return this.domain().page(id).width()
		}

		demo_page_elements(id: string) {
			const page = this.domain().page(id)
			return page.elements().map( obj => {
				const element = this.Element(obj.id()) 
				element.editing = $mol_const(false)
				return element.Preview()
			} )
		}

		@ $mol_mem
		theme_hue() {
			const val = this.project_opened().theme_hue()
			const root = document.querySelector(":root")! as HTMLElement
			root.style.setProperty("--mol_theme_hue", `${val}deg`)
		}

		auto() {
			this.theme_hue()
		}

	}

}
