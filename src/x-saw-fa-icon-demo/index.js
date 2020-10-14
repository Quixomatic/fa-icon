import { createCustomElement } from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';

import styles from './css/styles.scss';
import view from './view';
import actions from './actions';

import { getNanoID } from './constants';

createCustomElement('x-saw-fa-icon-demo', {
	renderer: { type: snabbdom },
	view,
	initialState: {
		instanceID: getNanoID(),
		iconsArray: [],
		inputValue: null,
	},
	properties: {
		fixedLayout: {
			default: false,
		},
		debug: {
			default: false,
		},
	},
	styles,
	...actions,
});
