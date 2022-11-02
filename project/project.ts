namespace $ {
	
	export class $hyoo_sketch_project extends $hyoo_sketch_entity {
		
		@ $mol_mem
		name( next?: string ) {
			return this.state().sub( 'name', $hyoo_crowd_reg ).str( next )
		}

		@ $mol_mem
		pages_node() {
			return this.state().sub( 'pages', $hyoo_crowd_list )
		}
		
		@ $mol_mem
		pages( next?: $hyoo_sketch_page[]) {
			const ids = this.pages_node().list( next && next.map( obj => obj.id() ) )
			return ids.map( id => this.domain().page( id as $mol_int62_string ) )
		}

		@ $mol_action
		page_add( obj: $hyoo_sketch_page ) {
			this.pages_node().add( obj.id() )
			obj.project( this )
		}

		@ $mol_action
		page_delete( obj: $hyoo_sketch_page ) {
			this.pages_node().drop( obj.id() )
		}

		@ $mol_action
		page_duplicate( obj: $hyoo_sketch_page ) {
			const copy = obj.duplicate()
			this.page_add( copy )
		}

		@ $mol_mem
		editors() {
			return [...this.land().peers()]
		}

		@ $mol_mem
		authors() {
			const set = this.land().authors()
			for (const page of this.pages()) {
				page.land().authors().forEach( id => set.add(id) )
				for (const element of page.elements()) {
					element.land().authors().forEach( id => set.add(id) )
				}
			}
			return [...set].map( id => this.domain().person(id) )
		}

		@ $mol_mem
		access_public() {
			return this.editors().findIndex( id => id === '0_0' ) !== -1
		}

		
	}
	
}
