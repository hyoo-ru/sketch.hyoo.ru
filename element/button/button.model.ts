namespace $ {
	
	export class $hyoo_sketch_element_button_model extends $hyoo_sketch_element_model {
		
		title(next?: string) {
			return String( this.state().sub('title').value(next) ?? 'Button' )
		}
		
	}
	
}
