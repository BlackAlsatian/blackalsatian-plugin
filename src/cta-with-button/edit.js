import { RichText, InspectorControls, InnerBlocks } from '@wordpress/block-editor';
import {
	ColorPalette,
	RadioControl,
	PanelBody,
	PanelRow,
	TextControl,
} from '@wordpress/components';

export default function Edit( props ) {
	const {
		attributes: {
			title,
			heading,
			// contentCopy,
			buttonName,
			buttonUrl,
			buttonBackgroundColor,
			option,
			color,
		},
		setAttributes,
		className,
	} = props;
	const colors = [
		{
			name: 'Black',
			slug: 'black',
			color: '#111827',
		},
		{
			name: 'White',
			slug: 'white',
			color: '#ffffff',
		},
		{
			name: 'Yellow',
			slug: 'yellow',
			color: '#f5df4d',
		},
		{
			name: 'Red',
			slug: 'red',
			color: '#E71D36',
		},
		{
			name: 'Blue',
			slug: 'blue',
			color: '#2EC4B6',
		},
	];
	const fontColors = [
		{
			name: 'Black',
			slug: 'black',
			color: '#111827',
		},
		{
			name: 'White',
			slug: 'white',
			color: '#ffffff',
		},
	];

	return (
		<section className={ className }>
			{
				<InspectorControls>
					<PanelBody title="CTA Block Settings" initialOpen={ true }>
						<PanelRow>
							<h3>Font Colour</h3>
							<ColorPalette
								colors={ fontColors }
								value={ color }
								onChange={ value => {
									return setAttributes( { color: value } );
								} }
							/>
						</PanelRow>
						<PanelRow>
							<h3>Button Colour</h3>
							<ColorPalette
								colors={ colors }
								value={ buttonBackgroundColor }
								onChange={ value => {
									return setAttributes( {
										buttonBackgroundColor: value,
									} );
								} }
							/>
						</PanelRow>
						<PanelRow>
							<RadioControl
								label="CTA Type"
								help="Is this CTA just a button, or should a form also be added?"
								selected={ option }
								options={ [
									{ label: 'No Button', value: 'none' },
									{ label: 'Button Only', value: 'btnonly' },
									{ label: 'Lead', value: 'lead' },
									{ label: 'Quote', value: 'quote' },
									{ label: 'Contact', value: 'contact' },
								] }
								onChange={ value => {
									setAttributes( { option: value } );
								} }
							/>
						</PanelRow>
						<PanelRow>
							<TextControl
								label="Button URL"
								placeholder="Enter CTA URL, eg. /the-url/"
								defaultValue={ buttonUrl }
								onChange={ buttonUrl => {
									setAttributes( { buttonUrl } );
								} }
							/>
						</PanelRow>
					</PanelBody>
				</InspectorControls>
			}
			<div
				className="title"
				style={ {
					color: color,
				} }
			>
				<RichText
					tagName="h3"
					placeholder={ 'Enter heading...' }
					value={ heading }
					onChange={ value => {
						return setAttributes( { heading: value } );
					} }
					allowedFormats={ [ 'core/bold', 'core/italic', 'core/strikethrough', 'core/color' ] }
				/>
				<RichText
					tagName="h4"
					placeholder="Enter title, eg., Our Mission..."
					value={ title }
					onChange={ value => {
						return setAttributes( { title: value } );
					} }
					allowedFormats={ [ 'core/bold', 'core/italic', 'core/strikethrough', 'core/color' ] }
				/>
			</div>
			<div
				className="content"
				style={ {
					color: color,
				} }
			>
				<InnerBlocks />
				{ /* <RichText
					tagName="p"
					placeholder="Enter content here..."
					value={ contentCopy }
					onChange={ val => setAttributes( { contentCopy: val } ) }
				/> */ }
				<RichText
					tagName="a"
					placeholder={ 'Enter CTA...' }
					value={ buttonName }
					onChange={ value => {
						return setAttributes( { buttonName: value } );
					} }
					style={ {
						backgroundColor: buttonBackgroundColor,
						color: '#ffffff',
						padding: '0.5rem 0.8rem',
						border: '0',
					} }
				/>
			</div>
		</section>
	);
}
