import React, { useEffect, useRef, useState } from "react";
import "./feedback.css";
import StarIcon from "@mui/icons-material/Star";
import { serverUrl } from "../../utils/index.js";
import axios from "axios";

function FeedBack() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [starsCount, setStarsCount] = useState(0);
  const [message, setMessage] = useState("");

  const [refresh, setRefresh] = useState(false);

  const clearMessage = () => {
    setMessage("");
  };

  setTimeout(() => {
    clearMessage();
  }, 3000);

  useEffect(() => {
    const fetchFeedBacks = async () => {
      const res = await axios.get(`${serverUrl}feedbacks`);
      setFeedbacks(res.data);
    };
    fetchFeedBacks();
  }, [refresh]);

  const addFeedback = async (e) => {
    e.preventDefault();
    const data = {
      fullName: fullName.current.value,
      stars: starsCount,
      description: description.current.value,
    };
    setMessage("תודה נפרסם את תגובתך בהמשך");
   

    try {
      await axios.post(`${serverUrl}feedbacks`, data);
      setRefresh((prev) => !prev);
      fullName.current.value = "";
      description.current.value = "";
      
    } catch (error) {
      console.log(error);
    }
  };

  const getNumberOfStars = (number) => {
    setStarsCount(number);
  };

  let fullName = useRef();
  let description = useRef();

  

  


  const multElement = (length,element)=>{
    let elements = [];
    for(let i = 0 ; i < length ; i++){
       elements.push(element);
    }
    return elements

  }
  return (
    <div className="feedback-body">
      <div className="feedback-form-container">
        <form className="form">
          <h3 style={{color:"#902D3C"}}>הוסף חוות דעת על המקום</h3>
          <input
            className="form-input"
            placeholder="שם מלא"
            ref={fullName}
          />
          <h3 style={{color:"#902D3C"}}>דרג לפי כוכבים</h3>

          <div className="feedback-stars">
            <div className="star-option" onClick={() => getNumberOfStars(1)}>
              <span>1</span>
              <StarIcon style={{ color: "gold" }} />
            </div>
            <div className="star-option" onClick={() => getNumberOfStars(2)}>
              <span>2</span>
              <StarIcon style={{ color: "gold" }} />
            </div>
            <div className="star-option" onClick={() => getNumberOfStars(3)}>
              <span>3</span>
              <StarIcon style={{ color: "gold" }} />
            </div>
            <div className="star-option" onClick={() => getNumberOfStars(4)}>
              <span>4</span>
              <StarIcon style={{ color: "gold" }} />
            </div>
            <div className="star-option" onClick={() => getNumberOfStars(5)}>
              <span>5</span>
              <StarIcon style={{ color: "gold" }} />
            </div>
          </div>
          <h3 style={{color:"#902D3C"}}>כתוב לנו</h3>
          <textarea
            className="feedback-description"
            ref={description}
            
          />
          <button className="form-button" onClick={addFeedback}>
            שלח
          </button>
        </form>
      </div>
      <span className="message">{message}</span>
      <h2 className="feedbacks-title">מה לקוחות אמרו עלינו</h2>
      <div className="feedbacks-container">
        {feedbacks.map((feedback) => {
          return (
            <div className="feedback-card">
              <span className="feedback-card-content">{feedback.fullName}</span>
              <img
                className="card-img"
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
              />
              <div className="stars-container">
             {multElement(feedback.stars, <StarIcon style={{ color: "gold" }} className="star" />)}
             
              </div>
              <span className="feedback-card-desc">{feedback.description}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FeedBack;
