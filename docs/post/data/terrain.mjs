import { Geometry } from '@sveltejs/gl';
import { memoize } from '@sveltejs/gl/internal/utils.mjs';

export default memoize(() => {
	return new Geometry({
		position: {
			data: new Float32Array(

			    .flat(Infinity)),
			size: 3
		},

		normal: {
			data: new Float32Array(


			    .flat(Infinity)),
			size: 3
		},

		uv: {
			data: new Float32Array(


			    .flat(Infinity)),
			size: 2
		}
	}, {
		index: new Uint32Array(


		)
	});
});