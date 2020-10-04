import snabbdom, { Fragment } from '@servicenow/ui-renderer-snabbdom';
import * as icons from './iconSet';

const { createElementFromNode } = snabbdom;

export default (state, { updateProperties, dispatch }) => {
	const { something } = state.properties;

	//┌─────────────────────────────────────────────────────────────
	//! Scoped Constants
	//└─────────────────────────────────────────────────────────────
	const { icon, size, spin } = state.properties;
	const BASE_FONT_SIZE = 16;
	const ICON_SIZES = {
		sm: 12,
		md: 16,
		lg: 24,
		xl: 32,
	};

	const getFaIcon = () => {
		const wrapper = document.createElement('SPAN'),
			iconSize = ICON_SIZES[size],
			iconRems = iconSize / BASE_FONT_SIZE,
			iconName = camelize(icon || '');

		if (!iconName || !icons[iconName]) {
			return null;
		}

		const { viewBox, template } = icons[iconName];

		wrapper.innerHTML = `<svg
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			viewBox="${viewBox}"
			style="width: ${iconRems}rem; height: ${iconRems}rem; fill: currentColor;"
			${spin ? 'class="-spin"' : ''}>
				${template}
			</svg>
		`;

		const vnode = createElementFromNode(wrapper);

		return vnode.children[0];
	};

	const camelize = (str) => {
		return str.replace(/^([A-Z])|[\s-_]+(\w)/g, function(match, p1, p2) {
			return p2 ? p2.toUpperCase() : p1.toLowerCase();
		});
	};

	return (
		<Fragment>{getFaIcon()}</Fragment>
	);
};
