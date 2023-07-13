import { useParams } from "react-router"
import { useData } from "../../context/dataContext";

export const EventPage=()=>{
    const {eventId}=useParams();
    const {dataState}=useData();
    const event=dataState?.data?.find(({id})=>id===eventId);
    console.log(event)
    return <>Event</>
}