import { registerBlockType } from '@wordpress/blocks';
// import { __ } from '@wordpress/i18n';

// import './style.scss';

import Edit from './edit';
import save from './save';

registerBlockType( 'blackalsatian/testimonials-block', {
	title: 'Testimonials',
	description:
		'Just provides a placeholder to indicate the app where to render testimonials',
	category: 'blackalsatian-blocks',
	icon: 'testimonial',
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
