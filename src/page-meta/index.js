import { registerBlockType } from '@wordpress/blocks';

import Edit from './edit';
import save from './save';

registerBlockType( 'blackalsatian/page-meta', {
	title: 'Page Meta',
	description: 'Page extra fields.',
	category: 'blackalsatian-blocks',
	icon: 'nametag',
	supports: {
		// Removes support for an HTML mode.
		html: false,
	},
	attributes: {
		subheading: {
			type: 'string',
			source: 'meta',
			meta: 'pagesubheading',
		},
		subtitle: {
			type: 'string',
			source: 'meta',
			meta: 'pagesubtitle',
		},
		intro: {
			type: 'string',
			source: 'meta',
			meta: 'pageintro',
		},
	},
	edit: Edit,
	save,
} );
