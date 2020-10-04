import { Fragment } from '@servicenow/ui-renderer-snabbdom';
import * as icons from './components/fa-icon/iconSet';

import './components/fa-icon';

export default (state, { updateState, updateProperties, dispatch }) => {
	const { instanceID, iconsArray } = state;
	const { fixedLayout, debug } = state.properties;

	console.log(icons);

	return (
		<div
			class={{
				'fa-icon-demo-container': true,
				'fixed-layout': true,
				[`instance-${instanceID}`]: true,
				'is-debug': debug,
			}}
		>
			<div className="container-inner">
				<div className="inner-header"></div>
				<div className="inner-body">
					{iconsArray.map(iconName => {
						return (
							<div className="icon-container">
								<div className="icon-body">
									<fa-icon icon={iconName} size="xl" />
								</div>
								<div className="icon-footer">{iconName}</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
