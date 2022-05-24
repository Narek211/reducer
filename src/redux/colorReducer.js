const initialState = {
  color: '',
};

export const colorReducer = (state = initialState, { type, inputColor }) => {
  switch (type) {
      case 'Change_Color':
          return { color: inputColor }
    default:
      return state;
  }
};
