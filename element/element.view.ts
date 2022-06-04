namespace $.$$ {

	export class $hyoo_sketch_element extends $.$hyoo_sketch_element {

		/* 
		прилипание к сеткет
		если х или у на границе сетки, то для сдвижения нужно перетянуть его на несколько пикслей
		несколько пикселей - это порог

		узнать на границе или нет
		если да, то сдвижине от границы должно превысит порог, чтобы оно сдвинулось
		
		*/
		pointer_down(event: PointerEvent) {
			event.preventDefault()
			event.stopPropagation()

			this.focused( true )

			const original_x = this.x()
			const original_y = this.y()
			const original_mouse_x = event.pageX
			const original_mouse_y = event.pageY
			const grid_step = this.grid_step()

			const move = (e: PointerEvent) => {
				const x = original_x + (e.pageX - original_mouse_x)
				const y = original_y + (e.pageY - original_mouse_y)

				const x_near = grid_step * Math.round( x / grid_step )
				const y_near = grid_step * Math.round( y / grid_step )
				
				this.x(x_near)
				this.y(y_near)
			}

			function stopResize(e: PointerEvent) {
				window.removeEventListener('pointermove', move)
				window.removeEventListener('pointerup', stopResize)
			}

			window.addEventListener('pointermove', move)
			window.addEventListener('pointerup', stopResize)
		}

		resize_start(event: PointerEvent) {
			event.preventDefault()
			event.stopPropagation()

			const original_width = this.width();
			const original_height = this.height();
			const original_mouse_x = event.pageX;
			const original_mouse_y = event.pageY;
			const grid_step = this.grid_step()

			const resize = (e: PointerEvent) => {
				e.preventDefault()
				e.stopPropagation()
				const width = original_width + (e.pageX - original_mouse_x);
				const height = original_height + (e.pageY - original_mouse_y)
				const w_near = grid_step * Math.round( width / grid_step )
				const h_near = grid_step * Math.round( height / grid_step )
				this.width(w_near)
				this.height(h_near)
			}

			function stopResize(e: PointerEvent) {
				e.preventDefault()
				e.stopPropagation()
				window.removeEventListener('pointermove', resize)
				window.removeEventListener('pointerup', stopResize)
			}

			window.addEventListener('pointermove', resize)
			window.addEventListener('pointerup', stopResize)
		}

		z_string() {
			return String( this.z() )
		}

	}

}
