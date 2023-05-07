namespace $ {
	
	export class $hyoo_sketch_page extends $hyoo_sketch_entity {
		
		@ $mol_mem
		project(next?: $hyoo_sketch_project) {
			const id = this.state().sub('project', $hyoo_crowd_reg).value(next && next.id())
			return this.domain().project( id as $mol_int62_string )
		}
		
		@ $mol_mem
		name( next?: string ) {
			return this.state().sub( 'name', $hyoo_crowd_reg ).str( next )
		}

		@ $mol_mem
		width( next?: number ) {
			return this.state().sub( 'width', $hyoo_crowd_reg ).numb( next ) || 340
		}

		@ $mol_mem
		height( next?: number ) {
			return this.state().sub( 'height', $hyoo_crowd_reg ).numb( next ) || 640
		}

		@ $mol_mem
		grid( next?: number ) {
			return this.state().sub( 'grid', $hyoo_crowd_reg ).numb( next ) || 8
		}

		@ $mol_mem
		elements_node() {
			return this.state().sub( 'elements', $hyoo_crowd_list )
		}

		@ $mol_mem
		elements( next?: $hyoo_sketch_element[]) {
			const ids = this.elements_node().list( next && next.map( obj => obj.id() ) )
			return ids.map( id => this.domain().element( id as $mol_int62_string ) )
		}

		@ $mol_action
		element_add( obj: $hyoo_sketch_element ) {
			this.elements_node().add( obj.id() )
			obj.page(this)
		}

		@ $mol_action
		element_delete( obj: $hyoo_sketch_element ) {
			this.elements_node().drop( obj.id() )
		}

		@ $mol_action
		duplicate() {
			const page_copy = this.domain().page_new( this.project().id() )

			const editor = new $hyoo_sketch_editor
			editor.page = $mol_const(this)

			for (const obj of this.elements()) {
				const element = editor.Element(obj.id())
				element.duplicate_top_shift = $mol_const(false)
				const element_copy = element.duplicate()
				page_copy.element_add(element_copy)
			}

			page_copy.width( this.width() )
			page_copy.height( this.height() )
			page_copy.grid( this.grid() )
			page_copy.name( this.name() + '*' )
			return page_copy
		}

	}
	
}
