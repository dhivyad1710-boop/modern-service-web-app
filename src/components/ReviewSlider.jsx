import { useEffect, useState } from "react";

import {
  collection,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";

import { db } from "../firebase";

import { FaStar } from "react-icons/fa";

function ReviewSlider() {

  const [reviews, setReviews] = useState([]);

  useEffect(() => {

    const q = query(
      collection(db, "reviews"),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {

      const reviewData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setReviews(reviewData);

    });

    return () => unsubscribe();

  }, []);

  return (

    <section className="review-slider-section">

      <h2 className="review-slider-title">
        What Customers Say
      </h2>

      <div className="review-slider">

        <div className="review-track">

          {[...reviews, ...reviews].map((review, index) => (

            <div
              className="review-card"
              key={index}
            >

              <div className="review-stars">

                {[...Array(review.rating || 5)].map((_, i) => (
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

export default ReviewSlider;