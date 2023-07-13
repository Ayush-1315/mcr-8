import { createContext,useContext, useReducer } from "react";
import { initialState,dataReducer } from "../utils/dataReducer";

const DataContext=createContext();

export const DataProvider=({children})=>{
    const [dataState,dispatch]=useReducer(dataReducer,initialState);
    return <DataContext.Provider value={{dataState,dispatch}}>
        {children}
    </DataContext.Provider>
}

export const useData=()=>useContext(DataContext);