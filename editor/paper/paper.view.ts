namespace $.$$ {

	export class $hyoo_sketch_editor_paper extends $.$hyoo_sketch_editor_paper {

		person(id: $mol_int62_string) {
			return this.page().domain().person(id)
		}

		background_size() {
			return `${this.grid()}px ${this.grid()}px`
		}

		pointer_down() {
			this.selected( true )
		}

		pointer_enter(e: PointerEvent) {
			const node = this.dom_node() as HTMLElement
			const rect = node.getBoundingClientRect()

			const move = (event: PointerEvent) => {
				this.cursor_sync(event.clientX - rect.left, event.clientY - rect.top, this.page().id())
			}

			const leave = (event: PointerEvent) => {
				this.cursor_sync(0, 0, null)
				node.onpointermove = null
				node.onpointerleave = null
				node.releasePointerCapture(e.pointerId)
			}

			node.onpointermove = move
			node.onpointerleave = leave
			node.setPointerCapture(e.pointerId)
		}

		@ $mol_action
		cursor_sync(x: number, y: number, page: $mol_int62_string | null) {
			this.page().domain().user().cursor_position({ x, y, page })
		}

		@ $mol_mem
		cursors() {
			return this.page().project().authors()
				.filter( obj =>
					obj.id() !== this.page().domain().user().id()
					&& !!obj.cursor_position()
					&& obj.cursor_position()!.page === this.page()?.id()
				)
				.map( person => this.Cursor(person.id()) )
		}


	}

}
