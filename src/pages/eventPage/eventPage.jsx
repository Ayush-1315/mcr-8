import { useParams } from "react-router";
import { useData } from "../../context/dataContext";

import pageCSS from "./eventPage.module.css";

export const EventPage = () => {
  const { eventId } = useParams();
  const { dataState } = useData();
  const event = dataState?.data?.find(({ id }) => id === eventId);
  console.log(event);
  document.title=`Meetup | ${event?.title}`
  return (
    <div className={pageCSS.container}>
      <div className={pageCSS.details}>
        <h1>{event.title}</h1>
        <div className={pageCSS.hostDetails}>
          <p>Hosted By:</p>
          <p className={pageCSS.host}>{event?.hostedBy}</p>
        </div>
        <div>
          <img src={event?.eventThumbnail} alt={event.title} className={pageCSS.image}/>
        </div>
        <h2>Details</h2>
        <p>{event?.eventDescription}</p>
        <div>
            <h2>Additional Information:</h2>
            <p><span className={pageCSS.boldText}>Dress Code</span> {event?.additionalInformation?.dressCode}</p>
            <p><span className={pageCSS.boldText}>Age Restrictions</span> {event?.additionalInformation?.ageRestrictions}</p>
        </div>
        <div>
            <h2>Event Tags</h2>
            {event?.eventTags?.map((tag,index)=><span className={pageCSS.chip} key={index}>{tag}</span>)}
        </div>
      </div>
      <div className={pageCSS?.moreInfo}>

      </div>
    </div>
  );
};
