import { TextControl, PanelBody } from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';

export default function Edit( props ) {
	const {
		attributes: { author, role, company },
		setAttributes,
		className,
	} = props;

	console.log( author );
	console.log( role );
	console.log( company );
	return (
		<div className={ className }>
			{
				<InspectorControls>
					<PanelBody>
						<TextControl
							label="Author name"
							defaultValue={ author }
							onChange={ author => {
								setAttributes( { author } );
							} }
						/>
						<TextControl
							label="Role in company"
							defaultValue={ role }
							onChange={ role => {
								setAttributes( { role } );
							} }
						/>
						<TextControl
							label="Company"
							defaultValue={ company }
							onChange={ company => {
								setAttributes( { company } );
							} }
						/>
					</PanelBody>
				</InspectorControls>
			}
			<p>Click here to bring up the panel for additional fields.</p>
		</div>
	);
}
