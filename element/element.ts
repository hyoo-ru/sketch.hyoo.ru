namespace $ {

	export class $hyoo_sketch_element extends $mol_object2 {
		
		id(): string {
			return this.$.$mol_fail( new Error( 'Not defined' ) )
		}
		
		domain(): $hyoo_sketch_domain {
			return this.$.$mol_fail( new Error( 'Not defined' ) )
		}
		
		@ $mol_mem
		state() {
			return this.domain().state().doc( 'element' ).doc( this.id() )
		}

		page(next?: $hyoo_sketch_page) {
			const id = this.state().sub('page').value(next && next.id())!
			return this.domain().page( String(id) )
		}

		name( next?: string ) {
			return String( this.state().sub( 'name' ).value( next ) ?? '' )
		}

		type( next?: string ) {
			return String( this.state().sub( 'type' ).value( next ) ?? '' )
		}

		width(next?: number) {
			return Number(this.state().sub('width').value(next) ?? 0)
		}

		height(next?: number) {
			return Number(this.state().sub('height').value(next) ?? 0)
		}

		top(next?: number) {
			return Number(this.state().sub('top').value(next) ?? 0)
		}

		left(next?: number) {
			return Number(this.state().sub('left').value(next) ?? 0)
		}

		order(next?: number) {
			return Number(this.state().sub('order').value(next) ?? 0)
		}

		duplicate() {
			const obj = this.domain().element( $mol_guid() )
			obj.page( this.page() )
			obj.name( this.name() + '*' )
			obj.type( this.type() )
			obj.width( this.width() )
			obj.height( this.height() )
			obj.top( this.top() )
			obj.left( this.left() )
			obj.order( this.order() )
			return obj
		}
	}
	
}
