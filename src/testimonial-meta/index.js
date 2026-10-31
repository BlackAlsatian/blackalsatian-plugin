import { registerBlockType } from '@wordpress/blocks';

import Edit from './edit';
import save from './save';

registerBlockType( 'blackalsatian/testimonial-meta', {
	title: 'Testimonial Meta',
	description: 'Testimonial extra fields.',
	category: 'blackalsatian-blocks',
	icon: 'admin-users',
	supports: {
		// Removes support for an HTML mode.
		html: false,
	},
	attributes: {
		author: {
			type: 'string',
			source: 'meta',
			meta: 'testimonialAuthor',
		},
		role: {
			type: 'string',
			source: 'meta',
			meta: 'testimonialRole',
		},
		company: {
			type: 'string',
			source: 'meta',
			meta: 'testimonialCompany',
		},
	},
	edit: Edit,
	save,
} );
