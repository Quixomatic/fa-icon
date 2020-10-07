import snabbdom, { Fragment } from '@servicenow/ui-renderer-snabbdom';

const { createElementFromNode } = snabbdom;

export default (state, { updateProperties, dispatch }) => {
	//┌─────────────────────────────────────────────────────────────
	//! Scoped Constants
	//└─────────────────────────────────────────────────────────────
	const { icon: iconName, size, spin, def } = state.properties;
	const BASE_FONT_SIZE = 16;
	const ICON_SIZES = {
		sm: 12,
		md: 16,
		lg: 24,
		xl: 32,
	};

	const camelize = (str) => {
		return str.replace(/^([A-Z])|[\s-_]+(\w)/g, function(match, p1, p2) {
			return p2 ? p2.toUpperCase() : p1.toLowerCase();
		});
	};

	const getAsyncIcon = () => {
		try {
			const formattedName = camelize(`fa-${iconName}`);
			import(`@fortawesome/free-solid-svg-icons/${formattedName}`).then((module) => {
				dispatch('SET_DEF', module.definition);
			});

			return;
		} catch (e) {
			return;
		}
	};

	const getFaIcon = () => {
		const wrapper = document.createElement('SPAN');
		const iconSize = ICON_SIZES[size];
		const iconRems = iconSize / BASE_FONT_SIZE;
		const formattedName = camelize(`fa-${iconName}`);

		if (!def && !iconName) {
			return null;
		}

		let localDef = {};

		if (def) {
			localDef = {
				...def,
			};
		} else if (iconName) {
			getAsyncIcon();
		}

		const { icon } = localDef;

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
