namespace $ {
	export type $hyoo_sketch_element_nav_action_type = 'open' | 'close' | 'replace' | 'external'
	export type $hyoo_sketch_element_nav_action_data = {
		type: $hyoo_sketch_element_nav_action_type
		source_page: string
		target_page: string
		target_link: string
	}
}
