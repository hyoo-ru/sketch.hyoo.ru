namespace $.$$ {

	export class $hyoo_sketch_element_map extends $.$hyoo_sketch_element_map {


	}

	export class $hyoo_sketch_element_map_my extends $.$hyoo_sketch_element_map_my {

		@ $mol_mem
		api( next? : any , force? : $mol_mem_force ) : any {
			
			const ymaps = $mol_map_yandex.api() as any
			($mol_wire_sync( this ) as any).wait_ready( ymaps )

			const api = new ymaps.Map( this.dom_node() , {
				center : [ 0 , 0 ] ,
				zoom : 0 ,
			} , {
				autoFitToViewport: 'always',
			} )

			api.copyrights.add( $mol_geo_search_attribution );

			api.controls.remove( 'fullscreenControl' )
			api.controls.remove( 'typeSelector' )

			api.events.add( [ 'actionend' ] , ( event : any )=> {
				new $mol_after_tick( $mol_fiber_root( ()=> {
					(this as any).update( event ) 
				} ) )
			} )

			return api
		}

	}

}
