namespace $.$$ {

	const { px } = $mol_style_unit

	$mol_style_define( $.$hyoo_sketch_element_button , {

		Button: {
			flex: {
				grow: 1,
			},
			justifyContent: 'center',
		},

		Icon_control: {
			$mol_icon: {
				width: px(40),
				height: px(40),
				padding: $mol_gap.block,
			},
			maxHeight: px(40),
			alignItems: 'center',
		},

		Icon_search: {
			padding: 0,
		},

	} )

}
