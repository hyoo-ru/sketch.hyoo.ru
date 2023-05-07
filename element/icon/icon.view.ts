namespace $.$$ {

	export class $hyoo_sketch_element_icon extends $.$hyoo_sketch_element_icon {

		icon_path() {
			const name = this.icon_name().trim()
			if (!name || !name.startsWith('$mol_icon_')) {
				return this.Not_found_icon().path()
			}

			// if (this.$[ name ]) {
			// 	return ( new ( this.$[ name ] as typeof $mol_icon ) ).path()
			// }

			const base = 'https://raw.githubusercontent.com/nin-jin/mol_icon/master'
			const path = name.replace('$mol_icon', '').split('_')
			const uri = `${base}/${path.join('/')}/${path.slice(-1)[0]}.view.tree`

			try {
				const str = this.$.$mol_fetch.text( uri )
				const tree = this.$.$mol_tree2_from_string( str )
				const norm = this.$.$mol_view_tree2_normalize( tree )
				const path = norm.select(name, '$mol_icon', 'path', null).kids[0].text()
				return path
			} catch(error) {
				if (error instanceof Promise) this.$.$mol_fail_hidden(error)
				return this.Not_found_icon().path()
			}
		}

		icon_name(next?: string) {
			return String( this.state().sub('icon_name', $hyoo_crowd_reg).value(next) ?? super.icon_name() )
		}

		duplicate(elem?: $hyoo_sketch_element) {
			const element = elem ?? super.duplicate()
			const obj = new $hyoo_sketch_element_icon
			obj.element = $mol_const(element)

			obj.icon_name( this.icon_name() )

			return element
		}

	}

}
