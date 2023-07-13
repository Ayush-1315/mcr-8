import { EventCard } from "../../components/eventCard/eventCard";
import { useData } from "../../context/dataContext"

import homeCSS from "./home.module.css";

export const Home=()=>{
    document.title="Meetup | Home"
    const {dataState, dispatch}=useData();
    console.log(dataState)
    return <>
    <div className={homeCSS.header}>
    <h2>Meetup Events</h2>
    <select name="type" id="type" defaultValue={0} onChange={(e)=>dispatch({type:"EVENT_TYPE",payload:e.target.value})}>
        <option value="0" disabled>Select EventType</option>
        <option value="Online">Online</option>
        <option value="Offline">Offline</option>
        <option value="Both">Both</option>
    </select>
    </div>
    <div className={homeCSS.cardContainer}>
        {dataState?.filteredData?.length===0?<h2>Nothing Matches your Search</h2>:dataState?.filteredData?.map((event,index)=><EventCard data={event} key={index}/>)}
    </div>
    </>
}