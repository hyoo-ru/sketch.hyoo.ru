namespace $.$$ {

	export class $hyoo_sketch_option_page extends $.$hyoo_sketch_option_page {

		@ $mol_mem
		keys() {
			return Object.keys( this.Options() )
		}

		@ $mol_mem
		items() {
			if (!this.keys().length) return []

			return this.keys().map( key => this.Tab(key) )
		}

		tab_title(key: string) {
			return key
		}

		tab_rows(key: string) {
			return this.Options()[key] as $mol_view[]
		}

	}

}
