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
			if (this.editing() === false) return

			event.stopPropagation()
			this.selected( true )
			
			const left = this.left()
			const top = this.top()
			const node = this.Editor().dom_node() as HTMLElement

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
			const node = this.Resize().dom_node() as HTMLElement

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
			return Number(this.state().sub('width').value(next) || super.width())
		}

		height(next?: number) {
			return Number(this.state().sub('height').value(next) || super.height())
		}

		top(next?: number) {
			return Number(this.state().sub('top').value(next) || super.top())
		}

		left(next?: number) {
			return Number(this.state().sub('left').value(next) || super.left())
		}

		order(next?: number) {
			return Number(this.state().sub('order').value(next) || super.order())
		}

		duplicate() {
			const element = this.element().duplicate()
			const obj = new this.$.$hyoo_sketch_element_base
			obj.element = $mol_const(element)

			obj.width( this.width() )
			obj.height( this.height() )
			obj.top( this.top() + this.height() + this.page().grid() )
			obj.left( this.left() )
			obj.order( this.order() )

			return obj
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