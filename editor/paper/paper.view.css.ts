namespace $.$$ {

	const { px, per } = $mol_style_unit

	$mol_style_define( $.$hyoo_sketch_editor_paper , {

		boxSizing: 'content-box',
		position: 'relative',

		background: {
			color: $mol_theme.back,
		},

		border: {
			width: px(1),
			style: 'solid',
			color: $mol_theme.control,
		},

		Content: {
			width: per(100),
			height: per(100),
		},

		Cursors: {
			zIndex: 1,
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
