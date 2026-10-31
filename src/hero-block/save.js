import { RichText } from '@wordpress/block-editor';

export default function save( props ) {
	const {
		attributes: { heroTitle, heroIntro, heroFontColor },
		className,
	} = props;
	return (
		<section className={ className }>
			<RichText.Content
				tagName="h1"
				style={ { color: heroFontColor } }
				className="hero-header"
				value={ heroTitle }
			/>
			<RichText.Content
				tagName="p"
				style={ { color: heroFontColor } }
				className="hero-intro"
				value={ heroIntro }
			/>
		</section>
	);
}
