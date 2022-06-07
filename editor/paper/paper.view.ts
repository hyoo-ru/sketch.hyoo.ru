namespace $.$$ {

	export class $hyoo_sketch_editor_paper extends $.$hyoo_sketch_editor_paper {

		background_size() {
			return `${this.grid()}px ${this.grid()}px`
		}

		pointer_down() {
			this.focused( true )
		}

	}

}
