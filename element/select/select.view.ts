namespace $.$$ {

	export class $hyoo_sketch_element_select extends $.$hyoo_sketch_element_select {

		Element() {
			return this[ this.select_type() ]() as $mol_view
		}

		select_type(next?: string) {
			return String( this.state().sub('select_type').value(next) ?? this.select_type_default() )
		}

		select_option_list(next?: string[]) {
			const list = this.state().sub('select_option_list').list(next) ?? []
			return list.map( val => String(val) )
		}

		@ $mol_mem
		select_option_rows() {
			const list = this.select_option_list()
			return [...list, ''].map( (_, i) => this.Select_option_row(i) )
		}

		@ $mol_mem_key
		select_option_row(index: number, next?: string) {
			if (next === undefined) {
				return this.select_option_list()[index] ?? ''
			}
			let list = this.select_option_list().slice()
			list[index] = next
			
			if (!next) {
				list.splice(index, 1)
			}
			this.select_option_list( list )

			return next
		}

		@ $mol_mem
		select_option_dict() {
			return this.select_option_list().reduce(( dict, val ) => {
				dict[val] = val
				return dict
			}, {})
		}

		select_option_clear(index: number) {
			this.select_option_row(index, '')
		}

		clear_sub(index: number) {
			return this.select_option_list()[index] ? [this.Clear_icon(index)] : []
		}

		duplicate(elem?: $hyoo_sketch_element) {
			const element = elem ?? super.duplicate()
			const obj = new $hyoo_sketch_element_select
			obj.element = $mol_const(element)

			obj.select_type(this.select_type())
			obj.select_option_list(this.select_option_list())

			return element
		}

	}

}
