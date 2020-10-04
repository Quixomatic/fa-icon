import { Fragment } from '@servicenow/ui-renderer-snabbdom';

import './components/fa-icon';

export default (state, { updateState, updateProperties, dispatch }) => {
	const { instanceID } = state;
	const { fixedLayout, debug } = state.properties;

	return (
		<div
			class={{
				'fa-icon-demo-container': true,
				'fixed-layout': true,
				[`instance-${instanceID}`]: true,
				'is-debug': debug,
			}}
		>
			<span>Test</span>
		</div>
	);
};
