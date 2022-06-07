namespace $.$$ {

	const { px, rem } = $mol_style_unit
	const { calc } = $mol_style_func

	$mol_style_define( $.$hyoo_sketch_option , {

		alignItems: 'center',

		margin: {
			left: $mol_gap.block,
			right: $mol_gap.block,
		},

		Name: {
			margin: {
				right: $mol_gap.space,
			},	
		},

		// Control: {
		// 	$mol_number: {
		// 		maxWidth: rem(7),
		// 	},

		// 	$mol_string: {
		// 		maxWidth: rem(12),
		// 	},

		// 	$mol_switch: {
		// 		margin: {
		// 			left: $mol_gap.space,
		// 		},
		// 		$mol_check: {
		// 			alignItems: 'center',
		// 		},
		// 	},

		// },

	} )

}
