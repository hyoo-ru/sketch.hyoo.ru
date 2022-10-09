namespace $.$$ {

	export class $hyoo_sketch_person_avatar extends $.$hyoo_sketch_person_avatar {

		name_content() {
			return [
				this.name(),
				... this.person().online() ? [this.Online()] : []
			]
		}

	}

}
