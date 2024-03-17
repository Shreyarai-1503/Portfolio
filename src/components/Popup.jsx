import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import "./popup.css";

const Popup = ({ trigger }) => {
  return (
    <div className="popUp">
      <div className="icon">
        <IoIosCheckmarkCircleOutline size={70} />
      </div>
      <h2>Thank you!</h2>
      <h4>Your message is sent successfully</h4>
      <button className="close" onClick={() => trigger(false)}>
        Close
      </button>
    </div>
  );
};

export default Popup;
