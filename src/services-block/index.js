import { registerBlockType } from '@wordpress/blocks';

import Edit from './edit';
import save from './save';

registerBlockType( 'blackalsatian/services-block', {
	title: 'Services',
	description: 'Placeholder for services component',
	category: 'blackalsatian-blocks',
	icon: 'admin-tools',
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
