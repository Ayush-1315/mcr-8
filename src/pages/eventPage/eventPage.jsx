import { useParams } from "react-router";
import { useData } from "../../context/dataContext";

import pageCSS from "./eventPage.module.css";
import { useState } from "react";
import { Modal } from "../../components/modal/modal";
import { Form } from "../../components/form/form";

export const EventPage = () => {
  const { eventId } = useParams();
  const { dataState } = useData();
  const event = dataState?.data?.find(({ id }) => id === eventId);
  const [showModal,setShowModal]=useState(false)
  console.log(event);
  document.title = `Meetup | ${event?.title}`;
  return (
    <div className={pageCSS.container}>
        {showModal && <Modal children={<Form title={"Complete your RVSP"}/>} onModalClose={()=>setShowModal(false)}/>}
      <div className={pageCSS.details}>
        <h1>{event.title}</h1>
        <div className={pageCSS.hostDetails}>
          <p>Hosted By:</p>
          <p className={pageCSS.host}>{event?.hostedBy}</p>
        </div>
        <div>
          <img
            src={event?.eventThumbnail}
            alt={event.title}
            className={pageCSS.image}
          />
        </div>
        <h2>Details</h2>
        <p>{event?.eventDescription}</p>
        <div>
          <h2>Additional Information:</h2>
          <p>
            <span className={pageCSS.boldText}>Dress Code</span>{" "}
            {event?.additionalInformation?.dressCode}
          </p>
          <p>
            <span className={pageCSS.boldText}>Age Restrictions</span>{" "}
            {event?.additionalInformation?.ageRestrictions}
          </p>
        </div>
        <div>
          <h2>Event Tags</h2>
          {event?.eventTags?.map((tag, index) => (
            <span className={pageCSS.chip} key={index}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className={pageCSS?.moreInfo}>
        <div className={pageCSS?.time}>
          <span className="material-symbols-outlined">pace</span>
          <div>
            <p>{event?.eventStartTime}</p>
            <p>{event?.eventEndTime}</p>
          </div>
        </div>
        <div className={pageCSS?.location}>
          <span className="material-symbols-outlined">location_on</span>
          <div>
            <p>{event?.location}</p>
            <p>{event?.address}</p>
          </div>
        </div>
        <div className={pageCSS.speakers}>
            <h2>Speakers: {`(${event?.speakers?.length})`}</h2>
            <div>
                {event?.speakers?.map((speaker,index)=><div className={pageCSS?.speakerProfile} key={index}>
                    <img src={speaker?.image} alt={speaker?.name} />
                    <h3>{speaker?.designation}</h3>
                    <p>{speaker?.name}</p>
                </div>)}
            </div>
        </div>
        <button disabled={event?.isPaid} onClick={()=>setShowModal(true)}>{event?.isPaid?"Already RVSPed":"RVSP"}</button>
      </div>
    </div>
  );
};
