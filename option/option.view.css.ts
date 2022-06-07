namespace $.$$ {

	const { px, rem } = $mol_style_unit
	const { calc } = $mol_style_func

	$mol_style_define( $.$hyoo_sketch_option , {

		alignItems: 'center',

		margin: 0,
		padding: 0,

		flex: {
			wrap: 'nowrap',
		},

		Name: {
			margin: {
				right: $mol_gap.space,
			},
			flex: {
				basis: rem(5),
			},
		},

	} )

}
