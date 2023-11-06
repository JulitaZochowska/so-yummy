
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import './SubscribeFormFooter.styled.css'; // Dodaj import pliku CSS

const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isValidEmail = (email) => {
    const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return regex.test(email);
  };

  const handleSubmit = (event) => {
        event.preventDefault();
    
        if (email === "") {
          toast.error("Please enter your email");
        } else if (!isValidEmail(email)) {
          toast.error("Please enter a valid email");
        } else {
          const data = {
            email: email,
          };
    
          fetch('/api/send-email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
            .then((response) => {
              if (response.ok) {
                setIsSubmitted(true);
                toast.success("Email sent successfully!");
              } else {
                toast.error("An error occurred while sending the email.");
              }
            })
            .catch((error) => {
              console.error("Error sending the email:", error);
              toast.error("An error occurred while sending the email.");
            });
        }
      };

  return (
    <div>
      <ToastContainer />
      <form className="SubForm">
        
          <div className="FormFrame">
            <h3 className="SubTitle">Subscribe to our Newsletter</h3>
            <p className="SubText">Subscribe to our newsletter. Stay in touch with the latest news and special offers.</p>
            <div className="InputBox">
              <svg className="InputIcon" xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18" fill="none">
                <path d="M3 1H19C19.5299 1.00158 20.0377 1.2128 20.4125 1.58753C20.7872 1.96227 20.9984 2.47005 21 3V15C20.9984 15.5299 20.7872 16.0377 20.4125 16.4125C20.0377 16.7872 19.5299 16.9984 19 17H3C2.47005 16.9984 1.96227 16.7872 1.58753 16.4125C1.2128 16.0377 1.00158 15.5299 1 15V3C1.00158 2.47005 1.2128 1.96227 1.58753 1.58753C1.96227 1.2128 2.47005 1.00158 3 1V1Z" stroke="#FAFAFA" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21 3L11 10L1 3" stroke="#FAFAFA" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <input
                type="email"
                id="email"
                name="email"
                className="SubInput"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setIsEmailValid(isValidEmail(event.target.value));
                }}
                placeholder="Enter your current email"
              />
            </div>
            
            <button
              type="submit"
              disabled={!isEmailValid || email === ""}
              onClick={handleSubmit}
              className="FormBtn"
            >
              Subscribe
            </button>
          </div>
        
      </form>
    </div>
  );
};

export default SubscribeForm;
