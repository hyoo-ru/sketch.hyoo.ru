namespace $ {
	
	export class $hyoo_sketch_element_link_model extends $mol_object2 {

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
		
		hint(next?: string) {
			return String( this.state().sub('hint').value(next) ?? 'This is link' )
		}

		title(next?: string) {
			return String( this.state().sub('title').value(next) ?? 'Link' )
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
		
	}
	
}
