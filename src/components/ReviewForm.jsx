import { useState } from "react";

import {
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../firebase";

import { FaStar } from "react-icons/fa";

function ReviewForm() {

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(5);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !message) {
      setStatus("error");

      setTimeout(() => {
        setStatus("");
      }, 3000);

      return;
    }

    try {

      setLoading(true);

      await addDoc(collection(db, "reviews"), {
        name,
        message,
        rating,
        createdAt: serverTimestamp(),
      });

      setStatus("success");

      setTimeout(() => {
        setStatus("");
      }, 3000);

      setName("");
      setMessage("");
      setRating(5);

    } catch (error) {

      console.error(error);

      setStatus("error");

      setTimeout(() => {
        setStatus("");
      }, 3000);

    }

    setLoading(false);
  };

  return (
    <section id="reviews" className="review-form-section">

      {/* ===== POPUP ===== */}
      {status && (
        <div className={`popup ${status}`}>
          {status === "success" ? (
            <h3>⭐ Review Submitted Successfully!</h3>
          ) : (
            <h3>❌ Failed To Submit Review</h3>
          )}
        </div>
      )}

      <h2 className="review-form-title">
        Share Your Experience
      </h2>

      <form
        className="review-form"
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          placeholder="Write your feedback..."
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <div className="rating-stars">

          {[1, 2, 3, 4, 5].map((star) => (

            <FaStar
              key={star}
              className={
                star <= rating
                  ? "star active"
                  : "star"
              }
              onClick={() => setRating(star)}
            />

          ))}

        </div>

        <button type="submit" disabled={loading}>

          {
            loading
              ? "Submitting..."
              : "Submit Review"
          }

        </button>

      </form>

    </section>
  );
}

export default ReviewForm;