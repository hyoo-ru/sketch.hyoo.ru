namespace $ {
	
	export class $hyoo_sketch_element_string_model extends $hyoo_sketch_element_model {
		
		hint(next?: string) {
			return String( this.state().sub('hint').value(next) ?? 'Type here' )
		}

		value(next?: string) {
			return String( this.state().sub('value').value(next) ?? '' )
		}
		
	}
	
}
