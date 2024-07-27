import { useState } from "react";
import { Copyright } from "@material-ui/icons";
import "./contact.scss";

export default function Contact() {

    const [currMessage, setMessage] = useState(false);
    const submitHandler = (submit) => {
        submit.preventDefault();
        setMessage(true);
    }

  return (
    <div className="contact" id="contact">
      <div className="container">
        <div className="left-container">
            <img src="Assets/contact.jpg" alt="Contact Me" />
        </div>
        <div className="right-container">
            <h2>Contact Me</h2>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder="Email" />
                <textarea placeholder="Message"></textarea>
                <button type="submit">Submit</button>
                {currMessage && <span>I will reply ASAP!</span>}
            </form>
        </div>
      </div>
      <div className="footer">
          <Copyright className="footer-icon" /><span> Nathanael, 2021</span>
      </div>
    </div>
  );
}
