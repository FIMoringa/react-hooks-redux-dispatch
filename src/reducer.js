let initialState = { count: 2 };

function reducer(state = initialState, action) {
	const { type } = action;

	switch (type) {
		case 'increment':
			return { count: state.count + 1 };
		case 'decrement':
			return { count: state.count - 1 };
		default:
			return state;
	}
}

const render = () => {
	document.body.textContent = initialState.count;
};

function dispatch(action) {
	initialState = reducer(initialState, action);
	render();
}

dispatch({ type: 'increment' });
dispatch({ type: 'decrement' });
