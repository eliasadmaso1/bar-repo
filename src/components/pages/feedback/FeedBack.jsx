import React, { useEffect, useState } from "react";
import "./feedback.css";
import StarIcon from "@mui/icons-material/Star";
import { serverUrl } from "../../utils/index.js";
import axios from "axios";

function FeedBack() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [starsCount, setStarsCount] = useState(0);

  useEffect(() => {
    const fetchFeedBacks = async () => {
      const res = await axios.get(`${serverUrl}feedbacks`);
      setFeedbacks(res.data);
    };
    fetchFeedBacks();
  }, []);

  const addFeedback = async (e) => {
    e.preventDefault();
    const data = {
      fullName: values.fullName,
      stars: starsCount,
      description: values.description,
    };

    try {
      await axios.post(`${serverUrl}feedbacks`, data);
    } catch (error) {
      console.log(error);
    }
  };

  const getNumberOfStars = (number) => {
    setStarsCount(number);
  };

  const [values, setValues] = useState({
    fullName: "",
    description: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };



  return (
    <div className="feedback-body">
      <div className="feedback-form-container">
        <form className="form">
          <h3>הוסף חוות דעת על המקום</h3>
          <input
            className="form-input"
            placeholder="שם מלא"
            onChange={handleChange}
            name="fullName"
          />
          <h3>דרג לפי כוכבים</h3>

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
          <h3>כתוב לנו</h3>
          <textarea
            className="feedback-description"
            name="description"
            onChange={handleChange}
          />
          <button
            className="form-button"
            onClick={addFeedback}
          >
            שלח
          </button>
        </form>
      </div>
      <h2 className="feedbacks-title">מה לקוחות אמרו עלינו</h2>
      <div className="feedbacks-container">
        <div className="feedback-card">
          <span className="feedback-card-content">אליאס אדמסו</span>
          <img className="card-img" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"/>
          <div className="stars-container">
            <StarIcon style={{ color: "gold" }} className="star" />
            <StarIcon style={{ color: "gold" }} className="star" />
            <StarIcon style={{ color: "gold" }} className="star" />
            <StarIcon style={{ color: "gold" }} className="star" />
            <StarIcon style={{ color: "gold" }} className="star" />
          </div>
          <span className="feedback-card-desc">חוויה נהדרת ושירות נעים, אלכוהול איכותי במחירים זולים ואווירה כיפית מאוד</span>
        </div>

        <div className="feedback-card">
          <span className="feedback-card-content">אליאס אדמסו</span>
          <img className="card-img" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"/>

          <div className="stars-container">
            <StarIcon style={{ color: "gold" }} className="star" />
            <StarIcon style={{ color: "gold" }} className="star" />
            <StarIcon style={{ color: "gold" }} className="star" />
            <StarIcon style={{ color: "gold" }} className="star" />
            <StarIcon style={{ color: "gold" }} className="star" />
          </div>
          <span className="feedback-card-desc">חוויה נהדרת ושירות נעים, אלכוהול איכותי במחירים זולים ואווירה כיפית מאוד</span>
        </div>

        <div className="feedback-card">
          <span className="feedback-card-content">אליאס אדמסו</span>
          <img className="card-img" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"/>

          <div className="stars-container">
            <StarIcon style={{ color: "gold" }} className="star" />
            <StarIcon style={{ color: "gold" }} className="star" />
            <StarIcon style={{ color: "gold" }} className="star" />
            <StarIcon style={{ color: "gold" }} className="star" />
            <StarIcon style={{ color: "gold" }} className="star" />
          </div>
          <span className="feedback-card-desc">חוויה נהדרת ושירות נעים, אלכוהול איכותי במחירים זולים ואווירה כיפית מאוד</span>
        </div>
      </div>
    </div>
  );
}

export default FeedBack;
