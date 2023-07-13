import { data } from "../db/data";

export const initialState = {
  data: data.meetups,
  filteredData: [...data.meetups],
  filterBy: "",
  searchBy: "",
};

export const dataReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "EVENT_TYPE":
      return {
        ...state,
        filteredData: state?.data?.filter(({ eventType }) =>
          payload === "Both" ? state?.data : eventType === payload
        ),
      };
    case "PAYMENT":
      return {
        ...state,
        data: state?.data?.map((event) =>
          event.id === payload ? { ...event, isPaid: true } : event
        ),
      };
    case "SEARCH":
      console.log(state.data);
      console.log(payload)
      return {
        ...state,
        filteredData:
          state?.data?.filter(({ title, eventTags }) =>
            title.toLowerCase().includes(payload.toLowerCase())
           || eventTags.includes(payload.toLowerCase()))
      };
    default:
      return state;
  }
};
