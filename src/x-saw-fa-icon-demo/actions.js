import { actionTypes } from '@servicenow/ui-core';

import * as icons from './components/fa-icon/iconSet';

const { COMPONENT_BOOTSTRAPPED } = actionTypes;

export default {
	actionHandlers: {
		[COMPONENT_BOOTSTRAPPED]: ({ dispatch, state, updateState }) => {
			const iconsArray = Object.keys(icons);

			updateState({
				iconsArray,
			});
		},
	},
};
