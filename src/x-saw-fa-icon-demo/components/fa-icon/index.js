import { createCustomElement } from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';

import styles from './styles.scss';
import view from './view';
import actions from './actions';

createCustomElement('x-saw-fa-icon', {
	renderer: { type: snabbdom },
	view,
	properties: {},
	styles,
	...actions,
});
