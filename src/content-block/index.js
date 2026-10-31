import { registerBlockType } from '@wordpress/blocks';

import Edit from './edit';
import save from './save';

registerBlockType( 'blackalsatian/content-block', {
	title: 'Content Block',
	description: 'Main content for page',
	category: 'blackalsatian-blocks',
	icon: 'format-aside',
	keywords: [ 'content' ],
	supports: {
		// html: false,
		align: [ 'full' ],
	},
	attributes: {
		contentTitle: {
			// type: 'string',
			source: 'text',
			selector: 'h4',
		},
		contentHeading: {
			// type: 'string',
			source: 'text',
			selector: 'h2',
		},
		// contentCopy: {
		// 	// type: 'string',
		// 	source: 'children',
		// 	selector: 'p',
		// },
	},
	edit: Edit,
	save,
} );
