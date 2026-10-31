import { RichText } from '@wordpress/block-editor';

export default function Edit( props ) {
	const {
		attributes: { heroFontColor, heroTitle, heroIntro },
		setAttributes,
		className,
	} = props;
	return (
		<section className={ className }>
			<RichText
				tagName="h1"
				style={ { color: heroFontColor } }
				className="hero-header"
				value={ heroTitle }
				onChange={ val => setAttributes( { heroTitle: val } ) }
				placeholder="Add page title..."
			/>
			<RichText
				tagName="p"
				style={ { color: heroFontColor } }
				className="hero-intro"
				value={ heroIntro }
				onChange={ val => setAttributes( { heroIntro: val } ) }
				placeholder="Add page intro text..."
			/>
		</section>
	);
}
