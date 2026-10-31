import { registerBlockType } from '@wordpress/blocks';
// const { registerBlockType } = wp.blocks;

import Edit from './edit';
import save from './save';

registerBlockType( 'blackalsatian/cta-with-button', {
	title: 'CTA w Button',
	description: 'A CTA section with a button',
	category: 'blackalsatian-blocks',
	icon: 'controls-volumeon',
	keywords: [ 'cta', 'call to action', 'calltoation' ],
	supports: {
		html: false,
		align: [ 'full' ],
		anchor: true,
	},
	attributes: {
		title: {
			type: 'string',
			source: 'text',
			selector: 'h4',
		},
		heading: {
			type: 'string',
			source: 'text',
			selector: 'h3',
		},
		// contentCopy: {
		// 	type: 'html',
		// 	source: 'children',
		// 	selector: 'p',
		// },
		buttonName: {
			type: 'string',
			source: 'html',
			selector: 'a',
		},
		buttonUrl: {
			type: 'string',
			// source: 'attribute',
			// attribute: 'value',
		},
		buttonBackgroundColor: {
			type: 'string',
			default: '#111827',
		},
		option: {
			type: 'string',
			default: 'btnonly',
		},
		color: {
			type: 'string',
			default: '#111827',
		},
	},
	edit: Edit,
	save,
} );
