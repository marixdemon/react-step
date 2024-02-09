const Step = (props) => {
	return (
		<div className="step">
			<input
				type="number"
				onChange={(e) => props.stepMethod(+e.target.value)}
			/>
		</div>
	);
};

export default Step;
