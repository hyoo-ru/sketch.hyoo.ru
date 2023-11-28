namespace $ {

	const item = (id: string, parent = '', kids?: string[]): $hyoo_sketch_explorer_item_dto => ({ id, name: id, parent, kids })

	const dict = {
		a: item('a', '', ['aa', 'ab']),
			aa: item('aa', 'a'),
			ab: item('ab', 'a'),
		b: item('b', '', ['ba', 'bb']),
			ba: item('ba', 'b'),
			bb: item('bb', 'b'),
		d: item('d'),
	}

	const items = Object.values(dict)

	$mol_test( {

		'creation and deletion'() {
			// List without data
			const list_clear = new $hyoo_sketch_explorer_item_list([])
			const a = list_clear.Item('a')
			$mol_assert_like( list_clear.all_ids(), ['a'] )
			$mol_assert_like( list_clear.Root().kids(), [a] )

			// List with data
			const list = new $hyoo_sketch_explorer_item_list( items )
			$mol_assert_like( list.all_ids(), items.map(obj => obj.id) )

			const e = list.Item('e') // Creation
			$mol_assert_ok( list.all_ids().includes(e.id()) )

			list.drop(e)
			$mol_assert_not( list.all_ids().includes(e.id()) )
		},

		'parenting'() {
			const list = new $hyoo_sketch_explorer_item_list( items )

			// Add e inside b
			const e = list.Item('e')
			const b = list.Item(dict.b.id)

			e.parent(b)
			$mol_assert_equal(e.parent().id(), b.id())
			$mol_assert_ok(b.kid_ids().includes(e.id()))

			// Move e inside root
			const root = list.Root()
			e.parent(root)
			$mol_assert_equal(e.parent().id(), '')
			$mol_assert_ok(list.Root().kids().map(obj => obj.id()).includes(e.id()))


			// Move e inside a
			const a = list.Item(dict.a.id)
			e.parent(a)
			$mol_assert_equal(e.parent().id(), a.id())
			$mol_assert_ok(a.kid_ids().includes(e.id()))
			$mol_assert_not(b.kid_ids().includes(e.id()))

			// Move e to roots
			e.parent(root)
			$mol_assert_equal(e.parent().id(), '')
			$mol_assert_ok(root.kid_ids().includes(e.id()))
			$mol_assert_not(a.kid_ids().includes(e.id()))

			// Move a inside b
			a.parent(b)
			$mol_assert_equal(a.parent().id(), b.id())
			$mol_assert_not(root.kid_ids().includes(a.id()))
			$mol_assert_ok(b.kid_ids().includes(a.id()))
		},

		'subtree deletion'() {
			const list = new $hyoo_sketch_explorer_item_list( items )
			const a = list.Item(dict.a.id)
			const b = list.Item(dict.b.id)

			b.parent(a)
			list.drop(a)
			$mol_assert_like(list.all_ids(), [dict.d.id])
		},

		'position moving'() {
			// Move d before aa
			const list = new $hyoo_sketch_explorer_item_list( items )

			const aa = list.Item(dict.aa.id)
			const ab = list.Item(dict.ab.id)
			const d = list.Item(dict.d.id)
			const root = list.Item('')

			d.move(aa, true)
			$mol_assert_not(root.kid_ids().includes(d.id()))
			$mol_assert_like(aa.parent().kid_ids(), [d.id(), aa.id(), ab.id()])

			// Move d after aa
			d.move(aa)
			$mol_assert_like(aa.parent().kid_ids(), [aa.id(), d.id(), ab.id()])

			// Move d after ab
			d.move(ab)
			$mol_assert_like(aa.parent().kid_ids(), [aa.id(), ab.id(), d.id()])

			// Moving root items
			const list1 = new $hyoo_sketch_explorer_item_list( [] )
			const x = list1.Item('x')
			const y = list1.Item('y')
			const z = list1.Item('z')
			$mol_assert_like(list1.Root().kid_ids(), ['x', 'y', 'z'])
			x.move(z)
			$mol_assert_like(list1.Root().kid_ids(), ['y', 'z', 'x'])
		},

		'wrong parenting'() {
			const list = new $hyoo_sketch_explorer_item_list( items )
			const d = list.Item(dict.d.id)

			const self_parent = () => d.parent(d)
			$mol_assert_fail(self_parent)

			const root = list.Item('')
			const root_parent = () => root.parent(d)
			$mol_assert_fail(root_parent)

			const a = list.Item(dict.a.id)
			const b = list.Item(dict.b.id)
			b.parent(a)
			const cicle_parent = () => a.parent(b)
			$mol_assert_fail(cicle_parent)
		}

	} )

}
