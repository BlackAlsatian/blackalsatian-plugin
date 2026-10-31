import { registerBlockType } from '@wordpress/blocks';
// import { __ } from "@wordpress/i18n";

import Edit from './edit';
import save from './save';

registerBlockType( 'blackalsatian/hero-block', {
	title: 'Hero Block',
	description: 'Hero block for Black Alsatian website.',
	category: 'blackalsatian-blocks',
	icon: 'money',
	// keywords: ['hero'],
	supports: {
		html: false,
		align: [ 'left' ],
		anchor: true,
	},
	attributes: {
		// alignment: {
		//   type: 'string',
		//   default: 'left'
		// },
		heroTitle: {
			type: 'string',
			source: 'text',
			selector: 'h1',
		},
		heroIntro: {
			type: 'string',
			source: 'text',
			selector: 'p',
		},
		heroFontColor: {
			type: 'string',
			default: '#ffffff',
		},
	},
	edit: Edit,
	save,
} );
