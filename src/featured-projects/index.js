import { registerBlockType } from '@wordpress/blocks';

import Edit from './edit';
import save from './save';

registerBlockType( 'blackalsatian/featured-projects', {
	title: 'Projects',
	description: 'Featured projects to go here',
	category: 'blackalsatian-blocks',
	icon: 'clipboard',
	supports: {
		// Removes support for an HTML mode.
		html: false,
		align: [ 'full' ],
	},
	attributes: {
		align: {
			type: 'string',
			default: 'full',
		},
	},
	edit: Edit,
	save,
} );
