import { useEffect, useState } from "react";

import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../firebase";

import { FaStar } from "react-icons/fa";

function Reviews() {
  const [reviews, setReviews] = useState([]);

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(5);

  /* FETCH REVIEWS */

  useEffect(() => {
    const q = query(
      collection(db, "reviews"),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const reviewsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setReviews(reviewsData);
    });

    return () => unsubscribe();
  }, []);

  /* SUBMIT REVIEW */

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !message) return;

    try {
      await addDoc(collection(db, "reviews"), {
        name,
        message,
        rating,
        createdAt: serverTimestamp(),
      });

      setName("");
      setMessage("");
      setRating(5);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="reviews-section">

      <h2 className="reviews-title">
        Customer Reviews
      </h2>

      {/* REVIEW FORM */}

      <form
        className="review-form"
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <textarea
          placeholder="Write your review..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        {/* STAR RATING */}

        <div className="star-rating">

          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              className={
                rating >= star
                  ? "star active"
                  : "star"
              }
              onClick={() => setRating(star)}
            />
          ))}

        </div>

        <button type="submit">
          Submit Review
        </button>

      </form>

      {/* REVIEWS SLIDER */}

      <div className="reviews-slider">

        <div className="reviews-track">

          {[...reviews, ...reviews].map((review, index) => (

            <div
              className="review-card"
              key={index}
            >

              <div className="review-stars">

                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}

              </div>

              <p className="review-message">
                "{review.message}"
              </p>

              <h4 className="review-name">
                — {review.name}
              </h4>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Reviews;