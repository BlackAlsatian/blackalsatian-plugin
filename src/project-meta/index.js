import { registerBlockType } from '@wordpress/blocks';

import Edit from './edit';
import save from './save';

registerBlockType( 'blackalsatian/project-meta', {
	title: 'Project Meta',
	description: 'Project meta data',
	category: 'blackalsatian-blocks',
	icon: 'admin-links',
	supports: {
		// Removes support for an HTML mode.
		html: false,
	},
	attributes: {
		url: {
			type: 'string',
			source: 'meta',
			meta: 'projectUrl',
		},
		year: {
			type: 'string',
			source: 'meta',
			meta: 'projectYear',
		},
		featured: {
			type: 'boolean',
			source: 'meta',
			meta: 'projectFeatured',
		},
	},
	edit: Edit,
	save,
} );
