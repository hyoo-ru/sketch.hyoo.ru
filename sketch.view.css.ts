namespace $.$$ {

	const { per, rem, px } = $mol_style_unit
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

		Palette: {
			flex: {
				shrink: 0,
				basis: rem(10),
			},
		},

		Editor: {
			flex: {
				shrink: 0,
				basis: calc( '100% - 45rem' ),
			},
		},

		Option_page: {
			flex: {
				shrink: 0,
				basis: rem(20),
			},
		},

	} ) 

}
