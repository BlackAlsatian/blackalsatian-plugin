import { registerBlockType } from '@wordpress/blocks';

import Edit from './edit';
import save from './save';

registerBlockType( 'blackalsatian/latest-posts', {
	title: 'Latest Posts',
	description: 'Placeholder for latest posts',
	category: 'blackalsatian-blocks',
	icon: 'welcome-write-blog',
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
