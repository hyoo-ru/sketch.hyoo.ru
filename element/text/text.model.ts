namespace $ {
	
	export class $hyoo_sketch_element_text_model extends $hyoo_sketch_element_model {
		
		text(next?: string) {
			return String( this.state().sub('text').value(next) ?? 'Text' )
		}
		
	}
	
}
