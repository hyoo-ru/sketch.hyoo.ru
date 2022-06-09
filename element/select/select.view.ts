namespace $.$$ {

	export class $hyoo_sketch_element_select extends $.$hyoo_sketch_element_select {

		Element() {
			return this[ this.select_type() ]() as $mol_view
		}

		select_type(next?: string) {
			return String( this.state().sub('select_type').value(next) ?? this.select_type_default() )
		}

		duplicate(elem?: $hyoo_sketch_element) {
			const element = elem ?? super.duplicate()
			const obj = new $hyoo_sketch_element_select
			obj.element = $mol_const(element)

			obj.select_type(this.select_type())
			this.Option_list().duplicate(element)

			return element
		}

	}

}
