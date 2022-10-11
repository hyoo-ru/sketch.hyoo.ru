namespace $.$$ {

	export class $hyoo_sketch extends $.$hyoo_sketch {

		person(id: $mol_int62_string) {
			return this.domain().person(id)
		}
		
		arg() {
			const dict = this.$.$mol_state_arg.dict()

			return {
				project: dict.project as $mol_int62_string,
				page: dict.page as $mol_int62_string,
				person: dict.person as $mol_int62_string,
			}
		}

		project_opened() {
			return this.domain().project( this.arg().project )
		}

		page_opened() {
			return this.domain().page( this.arg().page )
		}

		person_opened() {
			return this.domain().person( this.arg().person )
		}

		pages() {
			const demo_pages = this.$.$mol_state_arg.value('demo')?.split(',') ?? []
			if (demo_pages.length) {
				return demo_pages.map( id => this.Demo_page(id) )
			}

			return [
				this.Projects(),
				... this.arg().person ? [this.Person()] : [], 
				... this.arg().project ? [this.Project()] : [],
				... this.arg().page ? [
					this.Palette(),
					this.Editor(),
					this.Option_page(),
				] : [],
			]
		}

		demo_page_title(id: $mol_int62_string) {
			return this.domain().page(id).name()
		}

		demo_page_width(id: $mol_int62_string) {
			return this.domain().page(id).width()
		}

		demo_page_elements(id: $mol_int62_string) {
			const page = this.domain().page(id)
			return page.elements().map( obj => {
				const element = this.Element(obj.id()) 
				element.editing = $mol_const(false)
				return element.Preview()
			} )
		}

	}

}
