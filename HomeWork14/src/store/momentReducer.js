const defaultState = {
  moments: [],
};

const ADD_MOMENT = "ADD_MOMENT";
const ADD_COMMENT = "ADD_COMMENT";
const REMOVE_MOMENT = "REMOVE_TODO";

export const momentReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_MOMENT:
      return { ...state, moments: [...state.moments, action.payload] };

    case REMOVE_MOMENT:
      return {
        ...state,
        moments: state.moments.filter((moment) => moment.id !== action.payload),
      };
    case ADD_COMMENT:
      var i = state.moments.findIndex((m) => m.id == action.payload.id);
      var upd = {
        id: state.moments[i].id,
        title: state.moments[i].title,
        comment: action.payload.comment,
      };
      return {
        ...state,
        moments: [
          upd,
          ...state.moments.filter((moment) => moment.id != action.payload.id),
        ],
      };
    default:
      return state;
  }
};

export const addMomentAction = (payload) => ({ type: ADD_MOMENT, payload });
export const addCommentAction = (payload) => ({ type: ADD_COMMENT, payload });
export const removeMomentAction = (payload) => ({
  type: REMOVE_MOMENT,
  payload,
});
