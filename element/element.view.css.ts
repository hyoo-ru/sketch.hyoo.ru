namespace $.$$ {

	const { px, per } = $mol_style_unit

	$mol_style_define( $hyoo_sketch_element , {

		position: 'absolute',

		transitionProperty: 'height, width, top, left',
		transitionDuration: '.1s',

		Resizer: {
			position: 'absolute',
			right: px(5),
			bottom: px(0),
			cursor: 'nwse-resize',
		},

		Options: {
			$mol_form_field: {
				flex: {
					// direction: 'row',
					// wrap: 'nowrap',
				},
			},
		},

		Editor: {
			flex: {
				grow: 1,
			},
			cursor: 'pointer',
			border: {
				width: px(1),
				style: 'dotted',
				color: $mol_theme.control,
			},
			userSelect: 'none',

			'@': {
				hyoo_sketch_element_focused: {
					'true': {
						border: {
							style: 'solid',
							color: $mol_theme.current,
						},
					},
				},
			},
		},

		Wrap: {
			flex: {
				grow: 1,
			},

			'>': {
				$mol_view: {
					flex: {
						grow: 1,
					},
					width: per(100),
				},
			},
		},

	} ) 

}
