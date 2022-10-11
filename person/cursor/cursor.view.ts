namespace $.$$ {

	export class $hyoo_sketch_person_cursor extends $.$hyoo_sketch_person_cursor {

		@ $mol_mem
		position_set() {
			const node = this.dom_node() as HTMLElement
			const pos = this.person().cursor_position()

			node.style.left = pos!.x + 'px'
			node.style.top = pos!.y + 'px'
		}

		auto() {
			this.position_set()
		}

	}

}
