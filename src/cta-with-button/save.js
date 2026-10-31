import { RichText, InnerBlocks } from '@wordpress/block-editor';

export default function save( props ) {
	const {
		attributes: {
			title,
			heading,
			color,
			// contentCopy,
			buttonName,
			buttonUrl,
			buttonBackgroundColor,
		},
		className,
	} = props;
	return (
		<section className={ className }>
			<div
				className="title"
				style={ {
					color: color,
				} }
			>
				<RichText.Content tagName="h3" value={ heading } />
				<RichText.Content tagName="h4" value={ title } />
			</div>
			<div
				className="content"
				style={ {
					color: color,
				} }
			>
				<InnerBlocks.Content />
				{ /* <RichText.Content tagName="p" value={ contentCopy } /> */ }
				<RichText.Content
					tagName="a"
					value={ buttonName }
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
