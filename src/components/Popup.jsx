import { Link } from "react-router-dom";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import "./popup.css";

const Popup = ({ trigger }) => {

  return (
    trigger && (
      <div className="popUp">
        <div className="icon">
          <IoIosCheckmarkCircleOutline size={70} />
        </div>
        <h2>Thank you!</h2>
        <h4>Your message is sent successfully</h4>
        <Link to="/" className="close">
          Close
        </Link>
      </div>
    )
  );
};

export default Popup;
