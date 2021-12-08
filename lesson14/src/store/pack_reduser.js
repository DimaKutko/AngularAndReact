const defaultState = {
    pack: 0,
};

const packReduser = (state = defaultState, action) => {
  switch (action.type) {
    case "GET":
      return { ...state, pack: state.pack + action.payload };
    case "SEND":
      return { ...state, pack: state.pack + action.payload };
    default:
      return state;
  }
};

export default packReduser;
