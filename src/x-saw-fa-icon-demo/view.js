import { Fragment } from '@servicenow/ui-renderer-snabbdom';

import './components/fa-icon';

export default (state, { updateState, updateProperties, dispatch }) => {
	const { instanceID, iconsArray } = state;
	const { fixedLayout, debug } = state.properties;

	const getDashedName = (name) => {
		return name.replace(/\.?([A-Z]+)/g, '-$1').toLowerCase().replace(/^-/, "")
	}

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
					<div className="body-icons">
						{iconsArray.map(iconName => {
							return (
								<div className="icon-container">
									<div className="icon-body">
										<fa-icon icon={iconName} size="xl" />
									</div>
									<div className="icon-footer">
										<span>{getDashedName(iconName)}</span>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};
