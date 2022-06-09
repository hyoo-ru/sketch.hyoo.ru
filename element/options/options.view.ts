namespace $.$$ {

	export class $hyoo_sketch_element_options extends $.$hyoo_sketch_element_options {

		option_list(next?: string[]) {
			const list = this.state().sub('option_list').list(next)
			return (list.length ? list : this.option_list_default()).map( val => String(val) )
		}

		option_current(next?: string) {
			return String( this.state().sub('option_current').value(next) ?? this.option_list()[0] ?? '' )
		}

		option_dict() {
			return this.option_list().reduce(( dict, val ) => {
				dict[val] = val
				return dict
			}, {})
		}

		rows() {
			const list = this.option_list()
			return [...list, ''].map( (_, i) => this.Row(i) )
		}

		row_sub(index: number) {
			return [
				... this.option_list()[index] ? [this.Row_clear(index)] : [],
				this.Row_string(index),
			]
		}

		option_row(index: number, next?: string) {
			if (next === undefined) {
				return this.option_list()[index] ?? ''
			}
			let list = this.option_list().slice()
			list[index] = next
			
			if (!next) {
				list.splice(index, 1)
			}
			this.option_list( list )

			return next
		}

		option_clear(index: number) {
			this.option_row(index, '')
		}

		duplicate(elem: $hyoo_sketch_element) {
			const element = elem ?? super.duplicate()
			const obj = new $hyoo_sketch_element_options
			obj.element = $mol_const(element)

			obj.option_list(this.option_list())
			obj.option_current(this.option_current())

			return element
		}

	}

}
