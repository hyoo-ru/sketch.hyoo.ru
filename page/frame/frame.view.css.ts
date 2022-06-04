namespace $.$$ {

	const { px } = $mol_style_unit

	$mol_style_define( $.$hyoo_sketch_page_frame, {

		Body: {
			padding: $mol_gap.block,
			alignItems: 'center',
		},

		Content: {
			position: 'relative',
			border: {
				style: 'solid',
				width: px(1),
				color: 'transparent',
			},
			'@': {
				hyoo_sketch_page_frame__focused: {
					'true': {
						border: {
							color: 'black',
						},
					},
				},
			},
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
