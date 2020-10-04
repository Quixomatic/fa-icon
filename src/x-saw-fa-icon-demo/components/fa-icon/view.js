import snabbdom, { Fragment } from '@servicenow/ui-renderer-snabbdom';

const { createElementFromNode } = snabbdom;

export default (state, { updateProperties, dispatch }) => {
	//┌─────────────────────────────────────────────────────────────
	//! Scoped Constants
	//└─────────────────────────────────────────────────────────────
	const { size, spin, def } = state.properties;
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
			iconRems = iconSize / BASE_FONT_SIZE;

		if (!def) {
			return null;
		}

		const { icon } = def;

		if (!icon) {
			return null;
		}

		const viewBox = `0 0 ${icon[0]} ${icon[1]}`;
		const svgPathData = icon[4];

		wrapper.innerHTML = `<svg
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
			viewBox="${viewBox}"
			style="width: ${iconRems}rem; height: ${iconRems}rem; fill: currentColor;"
			${spin ? 'class="-spin"' : ''}>
			<path xmlns="http://www.w3.org/2000/svg" d="${svgPathData}"></path>
			</svg>
		`;

		const vnode = createElementFromNode(wrapper);

		return vnode.children[0];
	};

	return <Fragment>{getFaIcon()}</Fragment>;
};
