namespace $.$$ {

	export class $hyoo_sketch_element2_button extends $.$hyoo_sketch_element2_button {

		@ $mol_mem
		model() {
			return this.$.$hyoo_sketch_element2_button_model.from(this.element())
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
				this.Type_field(),
				this.Title_field(),
				this.Icon_field(),
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

		@ $mol_mem
		Button() {
			const obj = this.button_type() === 'major' ? new this.$.$mol_button_major : new this.$.$mol_button_minor
			
			obj.click = () => this.click()
			obj.title = () => this.title()
			obj.sub = () => this.button_sub()
			
			return obj as $mol_button
		}


		icon(name: string) {
			if ( name.startsWith('$mol_icon_') && this.$[ name ] ) {
				return new ( this.$[ name ] as typeof $mol_icon )
			}
			return new $mol_icon
		}

		@ $mol_mem
		Button_icon() {
			return this.icon( this.icon_name() )
		}

		@ $mol_mem
		Icon_preview() {
			return this.icon( this.icon_name() )
		}

		@ $mol_mem
		icon_control() {
			return [
				this.Icon_preview(),
				this.Icon_name(),
				this.Icon_search(),
			]
		}

		@ $mol_mem
		button_sub() {
			return [
				... this.icon_name() ? [ this.Button_icon() ] : [],
				this.title(), 
			]
		}

	}

}
