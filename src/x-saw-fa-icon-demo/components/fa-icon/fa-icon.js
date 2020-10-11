import { createCustomElement } from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';

import styles from './styles.scss';
import view from './view';
import actions from './actions';

import { prefix } from './constants';

const componentName = `${prefix && prefix != '' ? prefix.toLowerCase() + '-' : ''}fa-icon`;

createCustomElement(componentName, {
	renderer: { type: snabbdom },
	view,
	properties: {
		def: {
			default: null,
		},
		size: {
			default: 'md',
		},
		spin: {
			default: false,
		},
		componentId: {
			default: null,
		},
	},
	styles,
	...actions,
});
