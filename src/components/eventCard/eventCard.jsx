import { useNavigate } from "react-router";
import { day, month } from "../../db/days";
import cardCSS from "./event.module.css";
export const EventCard = ({ data }) => {
  const { id, title, eventStartTime, eventThumbnail, eventType } = data;
  const eventDate = new Date(eventStartTime);
  const date = eventDate.getDate();
  const eDay = day[eventDate.getDay()];
  const eMonth = month[eventDate.getMonth()];
  const hours = eventDate.getHours();
  const minutes = eventDate.getMinutes();
  const seconds = eventDate.getSeconds();
  const formattedHours = (hours % 12 || 12).toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");
  const amPm = hours < 12 ? "AM" : "PM";
  const eTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds} ${amPm}`;
  const year = eventDate.getFullYear();
  const navigate = useNavigate();
  return (
    <div className={cardCSS.card} onClick={() => navigate(`/event/${id}`)}>
      ;
      <div
        className={cardCSS.header}
        style={{ backgroundImage: `url(${eventThumbnail})` }}
      >
        <span className={cardCSS.chip}>{eventType}</span>
      </div>
      <div className={cardCSS.cardFooter}>
        <p>
          {eDay} {eMonth} {date} {year} .{eTime} IST
        </p>
        <h2>{title}</h2>
      </div>
    </div>
  );
};
