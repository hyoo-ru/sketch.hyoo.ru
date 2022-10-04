namespace $.$$ {

	export class $hyoo_sketch_palette extends $.$hyoo_sketch_palette {

		rows() {
			return this.type_list().map( type => this.Row(type) )
		}	

		row_title(type: string) {
			return type
		}

		@ $mol_mem_key
		Element_base(element: $hyoo_sketch_element) {
			const obj = new $hyoo_sketch_element_base
			obj.element = $mol_const(element)
			return obj
		}

		@ $mol_mem
		highest_top() {
			const copy = this.page().elements().slice()
			const top_list = copy.map( obj => this.Element_base(obj).top() + this.Element_base(obj).height() )
			const sort = top_list.sort( (a, b) => b - a )
			return sort[0]
		}

		element_add(type: string) {
			const obj = this.domain().element_new( this.page().id() )
			obj.type( type )
			this.Element_base(obj).top( this.highest_top() + this.page().grid() )
			this.Element_base(obj).left( this.page().grid() )
			this.page().element_add( obj )
			this.$.$mol_state_arg.value('selected', obj.id())
		}

	}

}
