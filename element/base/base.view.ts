namespace $.$$ {

	export class $hyoo_sketch_element_base extends $.$hyoo_sketch_element_base {

		state() {
			return this.element().state()
		}

		switch() {
			return this.editing() ? [this.Editor()] : [this.Element()]
		}

		grid_near(value: number) {
			const grid = this.grid()
			return grid * Math.round( value / grid )
		}

		pointer_down(event: PointerEvent) {
			event.stopPropagation()
			this.selected( true )
			
			const left = this.left()
			const top = this.top()
			const node = this.dom_node() as HTMLElement

			const move = (e: PointerEvent) => {
				this.left( this.grid_near( left + (e.pageX - event.pageX) ) )
				this.top( this.grid_near( top + (e.pageY - event.pageY) ) )
			}

			const move_stop = (e: PointerEvent) => {
				node.onpointermove = null
				node.onpointerup = null
				node.releasePointerCapture(event.pointerId)
			}

			node.onpointermove = move
			node.onpointerup = move_stop
			node.setPointerCapture(event.pointerId)
		}

		resize_start(event: PointerEvent) {
			event.stopPropagation()

			const width = this.width();
			const height = this.height();
			const node = this.dom_node() as HTMLElement

			const resize = (e: PointerEvent) => {
				this.width( this.grid_near( width + (e.pageX - event.pageX) ) )
				this.height( this.grid_near( height + (e.pageY - event.pageY) ) )
			}

			function resize_stop(e: PointerEvent) {
				node.onpointermove = null
				node.onpointerup = null
				node.releasePointerCapture(event.pointerId)
			}

			node.onpointermove = resize
			node.onpointerup = resize_stop
			node.setPointerCapture(event.pointerId)
		}

		width(next?: number) {
			return this.element().width(next) || super.width()
		}

		height(next?: number) {
			return this.element().height(next) || super.height()
		}

		top(next?: number) {
			return this.element().top(next) || super.top()
		}

		left(next?: number) {
			return this.element().left(next) || super.left()
		}

		duplicate(event: KeyboardEvent) {
			const copy = this.element().duplicate()
			this.page().element_add(copy)
			return copy
		}

		delete(event: KeyboardEvent) {
			event.preventDefault()
			this.page().element_delete( this.element() )
		}

		move_up(event: KeyboardEvent) {
			event.preventDefault()
			this.top( this.top() - this.page().grid() )
		}

		move_down(event: KeyboardEvent) {
			event.preventDefault()
			this.top( this.top() + this.page().grid() )
		}

		move_left(event: KeyboardEvent) {
			event.preventDefault()
			this.left( this.left() - this.page().grid() )
		}

		move_right(event: KeyboardEvent) {
			event.preventDefault()
			this.left( this.left() + this.page().grid() )
		}

	}

}
