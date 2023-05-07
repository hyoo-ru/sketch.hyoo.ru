namespace $.$$ {

	export class $hyoo_sketch_element_date extends $.$hyoo_sketch_element_date {

		Element() {
			return (this as any)[ this.type() ]() as $mol_view
		}

		formated_date() {
			return this.date().toString(this.format())
		}

		date(next?: $mol_time_moment) {
			const str = this.state().sub('date_value', $hyoo_crowd_reg).value(next && next.toString())
			return new $mol_time_moment( str ? String(str) : undefined )
		}

		type(next?: string) {
			return String( this.state().sub('date_type', $hyoo_crowd_reg).value(next) ?? this.type_default() )
		}

		format(next?: string) {
			return String( this.state().sub('date_format', $hyoo_crowd_reg).value(next) ?? this.format_default() )
		}

		duplicate(elem?: $hyoo_sketch_element) {
			const element = elem ?? super.duplicate()
			const obj = new $hyoo_sketch_element_date
			obj.element = $mol_const(element)

			obj.date(this.date())
			obj.type(this.type())
			obj.format(this.format())
			
			return element
		}

	}

}
