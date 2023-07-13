const initalData = {};

export const initialState = { ...initalData };

export const dataReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "":
      console.log(payload);
      break;
    default:
      return state;
  }
};
