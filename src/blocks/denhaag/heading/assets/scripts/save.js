import { RichText } from '@wordpress/block-editor';
import classNames from 'classnames';

export default function Save( { attributes } ) {
	/**
	 * Return string of classNames which updates based on the variation.
	 *
	 * @type {string}
	 * @private
	 */
	const _CLASSES = classNames( {
		[ `utrecht-heading-${ attributes.appearance }` ]:
			!! attributes.appearance,
		'sr-only': !! attributes.srOnly,
	} );

	return (
		<RichText.Content
			value={ attributes.content }
			tagName={ `h${ attributes.level }` }
			className={ _CLASSES }
		/>
	);
}
