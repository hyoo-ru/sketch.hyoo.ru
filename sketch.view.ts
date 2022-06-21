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

		@ $mol_mem_key
		css_var_define([selector, key]: [string, string], next: string) {
			const root = document.querySelector(selector)! as HTMLElement
			if (root) root.style.setProperty(key, next, 'important')
			return next
		}

		@ $mol_mem
		theme_set() {
			const project = this.project_opened()
			const keys = [
				'back',
				'text',
				'field',
				'card',
				'hover',
				'line',
				'shade',
				'control',
				'current',
				'special',
				'focus',
			]
			for(const key of keys) {
				const val = project[`theme_${key}`]().trim()
				if (!val) continue
				this.css_var_define(['[mol_theme]', `--mol_theme_${key}`], val)
			}
			this.css_var_define(['[mol_theme="$mol_theme_accent"]', `--mol_theme_back`], project.theme_accent_back())
			this.css_var_define(['[mol_theme="$mol_theme_accent"]', `--mol_theme_hover`], project.theme_accent_hover())
		}

		auto() {
			this.theme_set()
		}

	}

}
