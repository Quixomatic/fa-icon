import { actionTypes } from '@servicenow/ui-core';
import * as Icons from '@fortawesome/free-solid-svg-icons';

const { COMPONENT_BOOTSTRAPPED } = actionTypes;

export default {
	actionHandlers: {
		SET_INPUT_VALUE: ({ action, updateState }) => {
			action.stopPropagation();

			const { payload } = action;
			const { value } = payload;

			updateState({
				inputValue: value,
			});
		},
		[COMPONENT_BOOTSTRAPPED]: ({ dispatch, state, updateState }) => {
			const iconsArray = Object.keys(Icons)
				.filter((key) => key !== 'fas' && key !== 'prefix')
				.map((icon) => Icons[icon]);

			updateState({
				iconsArray: [...iconsArray],
			});
		},
	},
};
