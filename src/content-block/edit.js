import { RichText, InnerBlocks } from '@wordpress/block-editor';

export default function Edit( props ) {
	const { attributes, setAttributes, className } = props;

	return (
		<section className={ className }>
			<div className="title">
				<RichText
					tagName="h2"
					placeholder="Enter heading..."
					value={ attributes.contentHeading }
					onChange={ val => setAttributes( { contentHeading: val } ) }
				/>
				<RichText
					tagName="h4"
					placeholder="Enter title, eg., Our Mission..."
					value={ attributes.contentTitle }
					onChange={ val => setAttributes( { contentTitle: val } ) }
				/>
			</div>
			<div className="content">
				<InnerBlocks />
				{ /* <RichText
					// className="copy"
					tagName="p"
					placeholder="Enter content here..."
					value={ attributes.contentCopy }
					onChange={ val => setAttributes( { contentCopy: val } ) }
					// multiline="p"
				/> */ }
			</div>
		</section>
	);
}
