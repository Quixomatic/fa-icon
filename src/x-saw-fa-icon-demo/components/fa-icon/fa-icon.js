import { createCustomElement } from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';

import styles from './styles.scss';
import view from './view';
import actions from './actions';

createCustomElement('fa-icon', {
	renderer: { type: snabbdom },
	view,
	properties: {
		def: {
			default: null,
		},
		icon: {
			default: null,
		},
		size: {
			default: 'md',
		},
		spin: {
			default: false,
		},
	},
	styles,
	...actions,
});
