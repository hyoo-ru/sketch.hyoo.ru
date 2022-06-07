namespace $.$$ {

	export class $hyoo_sketch_palette extends $.$hyoo_sketch_palette {

		domain() {
			return this.page().domain()
		}

		rows() {
			return this.type_list().map( type => this.Row(type) )
		}	

		row_title(type: string) {
			return type
		}

		element_add(type: string) {
			const obj = this.domain().element( $mol_guid() )
			obj.type( type )
			this.page().element_add( obj )
		}

	}

}
