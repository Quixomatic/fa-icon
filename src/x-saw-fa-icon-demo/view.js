import { Fragment } from '@servicenow/ui-renderer-snabbdom';

import './components/fa-icon';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default (state, { updateState, updateProperties, dispatch }) => {
	const { instanceID, iconsArray, inputValue } = state;
	const { fixedLayout, debug } = state.properties;

	const handleInput = (e) => {
		const { target } = e;
		const { value } = target;

		dispatch('SET_INPUT_VALUE', { value });
	};

	const handleMouseUp = (e) => {
		document.execCommand('copy');
	};

	const camelize = (str) => {
		return str.replace(/^([A-Z])|[\s-_]+(\w)/g, function(match, p1, p2) {
			return p2 ? p2.toUpperCase() : p1.toLowerCase();
		});
	};

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
				<div className="inner-header">
					<div className="header-inner">
						<div className="search-icon-container">
							<nowcomponents-fa-icon def={faSearch} size="lg" />
						</div>
						<input value={inputValue} on-input={handleInput} placeholder="Search..." />
					</div>
				</div>
				<div className="inner-body">
					<div className="body-icons">
						{iconsArray
							.filter(
								(iconObj) => !inputValue || inputValue === '' || iconObj.iconName.indexOf(inputValue) !== -1
							)
							.map((iconObj, idx) => {
								return (
									<div className="icon-container">
										<div className="icon-body">
											<nowcomponents-fa-icon def={iconObj} size="xl" />
										</div>
										<div className="icon-footer">
											<span on-mouseup={handleMouseUp}>{iconObj.iconName}</span>
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
