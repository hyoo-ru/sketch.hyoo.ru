namespace $.$$ {

	const { per, rem } = $mol_style_unit
	const { calc } = $mol_style_func

	$mol_style_define( $hyoo_sketch , {

		Projects: {
			flex: {
				shrink: 0,
				basis: rem(25),
			},
		},

		Project: {
			flex: {
				shrink: 0,
				basis: rem(15),
			},
		},

		Editor: {
			flex: {
				shrink: 0,
				basis: calc( '100% - 35rem' ),
			},
		},

		// Option: {
		// 	flex: {
		// 		shrink: 0,
		// 		basis: rem(20),
		// 	},
		// },

	} ) 

}
