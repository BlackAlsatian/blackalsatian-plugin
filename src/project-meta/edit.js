import { TextControl, PanelBody, CheckboxControl } from '@wordpress/components';
import { InspectorControls } from '@wordpress/block-editor';

export default function Edit( props ) {
	const {
		attributes: { url, year, featured },
		setAttributes,
		className,
	} = props;

	console.log( url );
	console.log( year );
	console.log( featured );
	return (
		<div className={ className }>
			{
				<InspectorControls>
					<PanelBody>
						<TextControl
							label="Project URL"
							defaultValue={ url }
							onChange={ url => {
								setAttributes( { url } );
							} }
						/>
						<TextControl
							label="Project year"
							defaultValue={ year }
							onChange={ year => {
								setAttributes( { year } );
							} }
						/>
						<CheckboxControl
							label="Is featured"
							help="Is this a featured project?"
							defaultChecked={ featured }
							onChange={ featured => {
								setAttributes( { featured } );
							} }
						/>
					</PanelBody>
				</InspectorControls>
			}
			<p>Click here to bring up the panel for additional fields.</p>
		</div>
	);
}
