import { RichText, InnerBlocks } from '@wordpress/block-editor';

export default function save( props ) {
	const { attributes, className } = props;
	return (
		<section className={ className }>
			<div className="title">
				<RichText.Content tagName="h2" value={ attributes.contentHeading } />
				<RichText.Content tagName="h4" value={ attributes.contentTitle } />
			</div>
			<div className="content">
				{ /* <RichText.Content
					// className="copy"
					tagName="p"
					value={ attributes.contentCopy }
					// multiline="p"
				/> */ }
				<InnerBlocks.Content />
			</div>
		</section>
	);
}
