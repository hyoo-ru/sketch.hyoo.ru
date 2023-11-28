namespace $.$$ {

	const drag_shadow = `0 -1px 0 0px ${ $mol_theme.focus }, 0 1px 0 0px ${ $mol_theme.focus }, -1px 0 0 0px ${ $mol_theme.focus }, 1px 0 0 0px ${ $mol_theme.focus }`
	
	$mol_style_define( $hyoo_sketch_explorer, {
		
		Title: {
			padding: $mol_gap.block,
		},
		
		Header: {
			alignItems: 'center',
			justifyContent: 'space-between',
		},
		
		Item_folder: {
			Trigger: {
				padding: {
					top: 0,
					bottom: 0,
					right: 0,
				},
			},
			Content: {
				margin: {
					left: '1rem',
				},
				boxShadow: `inset 1px 0 0 0 ${ $mol_theme.line }`,
			},
		},

		Item_folder_label: {
			'@': {
				mol_drop_status: {
					drag: {
						boxShadow: drag_shadow,
					},
				},
			},
		},

		Items_root: {
			'@': {
				mol_drop_status: {
					drag: {
						boxShadow: drag_shadow,
					},
				},
			},
		},

		Item_file_drop: {
			'@': {
				mol_drop_status: {
					drag: {
						boxShadow: `0 -1px 0 0px ${ $mol_theme.focus }`,
					},
				},
			},
		},

		Item_add: {
			padding: {
				left: $mol_gap.block,
			},
			alignItems: 'center',
			gap: $mol_gap.space,
		},
		
	} )
	
}
