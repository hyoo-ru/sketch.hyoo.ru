namespace $.$$ {

	const { px } = $mol_style_unit

	$mol_style_define( $.$hyoo_sketch_editor_paper , {

		boxSizing: 'content-box',

		background: {
			color: $mol_theme.back,
		},

		border: {
			width: px(1),
			style: 'solid',
			color: $mol_theme.control,
		},

		// '@': {
		// 	hyoo_sketch_editor_paper_focused: {
		// 		'true': {
		// 			border: {
		// 				style: 'solid',
		// 				color: $mol_theme.current,
		// 			},
		// 		},
		// 	},
		// },

	} )

}
