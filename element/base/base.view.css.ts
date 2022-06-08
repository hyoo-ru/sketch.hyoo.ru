namespace $.$$ {

	const { px, per } = $mol_style_unit

	$mol_style_define( $.$hyoo_sketch_element_base , {

		Editor: {
			position: 'absolute',
			transition: 'none',
			outline: 'none',
			border: {
				width: px(1),
				style: 'dotted',
				color: $mol_theme.control,
			},
			cursor: 'pointer',
			userSelect: 'none',
			boxSizing: 'content-box',
			'@': {
				hyoo_sketch_element_base_selected: {
					'true': {
						border: {
							style: 'solid',
							color: $mol_theme.current,
						},
					},
				},
			}
		},

		Preview: {
			position: 'absolute',
		},

		Element: {
			width: per(100),
			height: per(100),
		},

		Resize: {
			position: 'absolute',
			right: px(0),
			bottom: px(0),
			alignItems: 'center',
			justifyContent: 'center',
			cursor: 'nwse-resize',
			width: px(24),
			height: px(24),
		},

		Resize_icon: {
			width: px(24),
			height: px(24),
			margin: 0,
		},

	} )

}
