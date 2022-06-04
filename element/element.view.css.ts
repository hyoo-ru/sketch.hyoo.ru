namespace $.$$ {

	const { px, per } = $mol_style_unit

	$mol_style_define( $hyoo_sketch_element , {

		position: 'absolute',
		cursor: 'pointer',
		border: {
			width: px(1),
			style: 'dotted',
		},
		userSelect: 'none',

		'@': {
			hyoo_sketch_element__focused: {
				'true': {
					border: {
						style: 'solid',
					},
				},
			},
		},

		Position: {
			position: 'absolute',
			right: px(5),
			bottom: px(0),
		},

		Options: {
			$mol_form_field: {
				flex: {
					direction: 'row',
					wrap: 'nowrap',
				},
			},
		},

		Resize: {
			cursor: 'nwse-resize',
		},

		transitionProperty: 'height, width, top, left',
		transitionDuration: '.1s',

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
