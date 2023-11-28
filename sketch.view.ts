namespace $.$$ {

	class Module extends $mol_object {

		id(): string {
			throw new Error('Not defined')
		}

		@ $mol_mem
		name(next?: string) {
			return ''
		}

		@ $mol_mem
		sub(next?: Module[] | null) {
			return next ?? null
		}
		
	}

	export class $hyoo_sketch extends $.$hyoo_sketch {

		@ $mol_mem
		items(next?: $hyoo_sketch_explorer_item_dto[]) {
			console.log({ next })
			return next ?? [
				{ id: '', name: '', parent: '', kids: ['a', 'd', '1', '2', '3'] },
				{ id: 'a', name: 'a', parent: '', kids: ['b'] },
				{ id: 'b', name: 'b', parent: 'a', kids: ['c'] },
				{ id: 'c', name: 'c', parent: 'b', kids: ['4'] },
				{ id: 'd', name: 'd', parent: '', kids: [] },
				{ id: '1', name: '1', parent: '' },
				{ id: '2', name: '2', parent: '' },
				{ id: '3', name: '3', parent: '' },
				{ id: '4', name: '4', parent: 'c' },
			]
		}
		
		@ $mol_mem_key
		module(id: string) {
			return Module.make({ id: $mol_const(id) })
		}

		@ $mol_mem
		project() {
			const obj = this.module('project')
			obj.name('Project 1')
			return obj
		}

		project_name() {
			return this.project().name()
		}
		
	}
}
