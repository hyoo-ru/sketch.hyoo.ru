namespace $.$$ {

	const { px, per } = $mol_style_unit

	$mol_style_define( $.$hyoo_sketch_element_base , {

		position: 'absolute',
		transition: 'none',
		outline: 'none',

		flex: {
			grow: 1,
		},

		Resize: {
			position: 'absolute',
			right: px(0),
			bottom: px(0),
			alignItems: 'center',
			justifyContent: 'center',
			cursor: 'nwse-resize',
			$mol_icon: {
				width: px(24),
				height: px(24),
				margin: 0,
			},
		},

		Editor: {
			width: per(100),
			height: per(100),
		},

		Element: {
			width: per(100),
			height: per(100),
		},

		'@': {
			hyoo_sketch_element_base_selected: {
				'true': {
					border: {
						style: 'solid',
						color: $mol_theme.current,
					},
				},
			},
			hyoo_sketch_element_base_editing: {
				'true': {
					Element: {
						pointerEvents: 'none',
					},
					border: {
						width: px(1),
						style: 'dotted',
						color: $mol_theme.control,
					},
					cursor: 'pointer',
					userSelect: 'none',
					boxSizing: 'content-box',
				},
			},
		},

	} )

}
