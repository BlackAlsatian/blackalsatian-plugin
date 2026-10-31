import { TextControl, TextareaControl, PanelBody } from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';

export default function Edit( props ) {
	const {
		attributes: { subheading, subtitle, intro },
		setAttributes,
		className,
	} = props;

	console.log( subheading );
	console.log( subtitle );
	console.log( intro );
	return (
		<div className={ className }>
			{
				<InspectorControls>
					<PanelBody>
						<TextControl
							label="Sub Heading"
							defaultValue={ subheading }
							onChange={ subheading => {
								setAttributes( { subheading } );
							} }
						/>
						<TextControl
							label="Sub Title"
							defaultValue={ subtitle }
							onChange={ subtitle => {
								setAttributes( { subtitle } );
							} }
						/>
						<TextareaControl
							label="Page Intro"
							help="A short intro to the page"
							defaultValue={ intro }
							onChange={ intro => {
								setAttributes( { intro } );
							} }
						/>
					</PanelBody>
				</InspectorControls>
			}
			<p>Click here to bring up the panel for additional fields.</p>
		</div>
	);
}
