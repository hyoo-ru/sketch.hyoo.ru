namespace $.$$ {

	const { px, per } = $mol_style_unit

	$mol_style_define( $.$hyoo_sketch_page, {

		Body: {
			alignItems: 'center',
		},

		Content: {
			position: 'relative',
			width: per(100),
			height: per(100),
			justifyContent: 'center',
			padding: $mol_gap.block,
		},

		Head: {
			justifyContent: 'flex-start',
		},

		Side_left: {
			position: 'absolute',
			top: 0,
			left: 0,
		}


	} )

}
