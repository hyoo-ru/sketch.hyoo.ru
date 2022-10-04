namespace $ {

	export class $hyoo_sketch_element extends $hyoo_sketch_entity {
		
		@ $mol_mem
		page(next?: $hyoo_sketch_page) {
			const id = this.state().sub('page', $hyoo_crowd_reg).value(next && next.id())!
			return this.domain().page( id as $mol_int62_string )
		}

		@ $mol_mem
		name( next?: string ) {
			return this.state().sub( 'name', $hyoo_crowd_reg ).str( next )
		}

		@ $mol_mem
		type( next?: string ) {
			return this.state().sub( 'type', $hyoo_crowd_reg ).str( next ) || 'base'
		}

		@ $mol_action
		duplicate() {
			const obj = this.domain().element_new( this.page().id() )
			obj.type( this.type() )
			obj.page( this.page() )
			obj.name( this.name() )

			return obj
		}
	}
	
}
