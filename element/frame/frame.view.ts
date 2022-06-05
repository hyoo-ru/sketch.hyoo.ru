namespace $.$$ {

	export class $hyoo_sketch_element_frame extends $.$hyoo_sketch_element_frame {

		@ $mol_mem
		model() {
			return this.$.$hyoo_sketch_element_frame_model.from(this.element())
		}

		grid_step() {
			return `${this.grid()}px ${this.grid()}px`
		}

		mode() {
			return this.preview() ? 'preview' : 'editor'
		}

		pointer_down() {
			this.focused(true)
		}

	}

}
