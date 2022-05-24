import { MINUS, PLUS } from "./types";

const initialState = {
  count: 0,
};

export const counterReducer = (state = initialState, { type }) => {
  switch (type) {
    case PLUS:
        return { count: state.count + 1 };
    case MINUS:
        return { count: state.count - 1 };
    default:
      return state;
  }
};
