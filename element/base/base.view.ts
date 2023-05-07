namespace $.$$ {

	export class $hyoo_sketch_element_base extends $.$hyoo_sketch_element_base {

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
			return this.state().sub('width', $hyoo_crowd_reg).numb(next) || this.width_default()
		}

		height(next?: number) {
			return this.state().sub('height', $hyoo_crowd_reg).numb(next) || this.height_default()
		}

		top(next?: number) {
			return this.state().sub('top', $hyoo_crowd_reg).numb(next) || this.top_default()
		}

		left(next?: number) {
			return this.state().sub('left', $hyoo_crowd_reg).numb(next) || this.left_default()
		}

		order(next?: number) {
			return this.state().sub('order', $hyoo_crowd_reg).numb(next) || this.order_default()
		}

		order_string() {
			return this.order().toString()
		}

		duplicate(elem?: $hyoo_sketch_element) {
			const element = elem ?? this.element().duplicate()
			const obj = new this.$.$hyoo_sketch_element_base
			obj.element = $mol_const(element)

			obj.width( this.width() )
			obj.height( this.height() )
			obj.top( this.duplicate_top_shift() ? this.top() + this.height() + this.page().grid() : this.top() )
			obj.left( this.left() )
			obj.order( this.order() )

			return element
		}

		duplicate_event() {
			const element = this.duplicate()
			this.page().element_add(element)
			// this.$.$mol_state_arg.value('selected', element.id())
		}

		copy() {
			const element = this.duplicate()
			this.$.$mol_state_session.value('copy', element.id())
		}

		paste() {
			const element_id = $mol_int62_string_ensure( this.$.$mol_state_session.value('copy') )
			if (!element_id) return
			const element = this.domain().element(element_id)
			this.page().element_add(element)
		}

		delete(event: KeyboardEvent) {
			event.preventDefault()
			this.page().element_delete( this.element() )
			this.$.$mol_state_arg.value('selected', null)
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
