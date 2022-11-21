import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';

const Card = (props) => {
  return (
    <section className="card">
      <div className="card--img">
        <img src={props.imageUrl} alt="" />
      </div>
      <div className="card--location">
        <FontAwesomeIcon className="card--location-pin" icon={faLocationPin} />
        <span className="card--country">{props.location}</span>
        <span><a href={props.googleMapsUrl} className="card--map">View on Google Maps</a></span>
        <h1 className="card--title">{props.title}</h1>
        <p className="card--build-date">{props.startDate} - {props.endDate}</p>
        <p className="card--location-info">{props.description}</p>
      </div>
    </section>
  );
}
 
export default Card;