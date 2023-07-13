import { data } from "../db/data";

export const initialState = { 
    data:data.meetups,
    filteredData:[...data.meetups],
    filterBy:""
};

export const dataReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "EVENT_TYPE":
        return {...state,filteredData:state?.data?.filter(({eventType})=>payload==="Both"?state?.data:eventType===payload)}
    case "PAYMENT":
      return{...state,data:state?.data?.map((event)=>event.id===payload?{...event,isPaid:true}:event)}
    default:
      return state;
  }
};
