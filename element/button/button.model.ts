namespace $ {
	
	export class $hyoo_sketch_element_button_model extends $mol_object2 {
		
		static from(element: $hyoo_sketch_element_model) {
			const obj = new this
			obj.element = $mol_const(element)
			return obj
		}

		element(): $hyoo_sketch_element_model {
			throw new Error('Not defined')
		}

		domain() {
			return this.element().domain()
		}

		state() {
			return this.element().state()
		}

		title(next?: string) {
			return String( this.state().sub('title').value(next) ?? 'Button' )
		}

		button_type(next?: 'major' | 'minor') {
			const res = String( this.state().sub('button_type').value(next) ?? 'major' )
			return (res as typeof next)!
		}

		action(next?: 'none' | 'open' | 'replace' | 'close' | 'external') {
			const res = String( this.state().sub('action').value(next) ?? 'none' )
			return (res as typeof next)!
		}

		target_page(next?: string) {
			return String( this.state().sub('target_page').value(next) ?? '' )
		}

		target_link(next?: string) {
			return String( this.state().sub('target_link').value(next) ?? 'https://mol.hyoo.ru' )
		}

		icon_name(next?: string) {
			return String( this.state().sub('icon_name').value(next) ?? '' )
		}
		
	}
	
}
