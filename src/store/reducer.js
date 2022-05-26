function reducer(state, action) {
  switch (action.type) {
    case "SEARCH": {
      return { ...state, results: action.payload };
    }
    default: {
      return state;
    }
  }
}

export default reducer;
