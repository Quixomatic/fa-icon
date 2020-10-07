import { Fragment } from '@servicenow/ui-renderer-snabbdom';

import './components/fa-icon';

export default (state, { updateState, updateProperties, dispatch }) => {
	const { instanceID, iconsArray } = state;
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
			<div className="container-inner">
				<div className="inner-header"></div>
				<div className="inner-body">
					<div className="body-icons">
						{iconsArray.map((iconObj, idx) => {
							return (
								<div className="icon-container">
									<div className="icon-body">
										{idx % 2 === 0 ? (
											//! You can either load icons directly with a definition object
											//! ie import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
											<fa-icon def={iconObj} size="xl" />
										) : (
											//! Or  you can dynamically load the icon with its name.
											//! ie icon={'arrow-right'}
											<fa-icon icon={iconObj.iconName} size="xl" />
										)}
									</div>
									<div className="icon-footer">
										<span>{iconObj.iconName}</span>
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
