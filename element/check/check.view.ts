namespace $.$$ {

	export class $hyoo_sketch_element_check extends $.$hyoo_sketch_element_check {

		Element() {
			return (this as any)[ this.check_type() ]() as $mol_view
		}

		check_type(next?: string) {
			return String( this.state().sub('check_type', $hyoo_crowd_reg).value(next) ?? this.check_type_default() )
		}

		check_title(next?: string) {
			return String( this.state().sub('check_title', $hyoo_crowd_reg).value(next) ?? this.check_title_default() )
		}

		check_checked(next?: boolean) {
			return Boolean( this.state().sub('check_checked', $hyoo_crowd_reg).value(next) ?? this.check_checked_default() )
		}

		duplicate(elem?: $hyoo_sketch_element) {
			const element = elem ?? super.duplicate()
			const obj = new $hyoo_sketch_element_check
			obj.element = $mol_const(element)

			obj.check_type(this.check_type())
			obj.check_title(this.check_title())
			obj.check_checked(this.check_checked())

			this.Icon().duplicate(element)

			return element
		}

		check_options() {
			const type = this.check_type()
			return [
				this.Check_type_option(),
				this.Check_checked_option(),
				... type === 'Check_box' ? [ this.Check_title_option() ] : this.icon_options(),
			]
		}
		

	}

}
