namespace $ {

	export class $hyoo_sketch_entity extends $mol_object {

		id(): $mol_int62_string {
			return '0_0'
		}

		head(): $mol_int62_string {
			return '0_0'
		}
		
		domain(): $hyoo_sketch_domain {
			throw new Error('Not defined')
		}

		@ $mol_mem
		state(): $hyoo_crowd_struct {
			return this.domain().yard().land( this.id() ).node( this.head(), $hyoo_crowd_struct )
		}

	}

}
