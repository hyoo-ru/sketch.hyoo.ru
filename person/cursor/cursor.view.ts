namespace $.$$ {

	export class $hyoo_sketch_person_cursor extends $.$hyoo_sketch_person_cursor {

		@ $mol_mem
		position_set() {
			const { clientHeight, clientWidth } = $mol_dom_context.document.documentElement
			const node = this.dom_node() as HTMLElement
			const pos = this.person().cursor_position()

			node.style.left = ( pos!.x ) * clientWidth + 'px'
			node.style.top = ( pos!.y )* clientHeight + 'px'
		}

		auto() {
			this.position_set()
		}

	}

}
