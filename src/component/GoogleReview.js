import React from "react";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    review: "Amazing experience! Highly recommend.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Smith", 
    review: "Great service and friendly staff.",
    rating: 4,
  },
  {
    id: 3,
    name: "Michael Johnson",
    review: "Loved it! Will come back again.",
    rating: 5,
  },
  {
    id: 4,
    name: "Emily Brown",
    review: "Good experience but can be improved.",
    rating: 3,
  },
  {
    id: 5,
    name: "David Wilson",
    review: "Fantastic! Exceeded expectations.",
    rating: 5,
  },
];

const GoogleReview = () => {
  return (
    <div className="review-container">
      <div className="google-review">
        <h2 style={{ textAlign: "center" }}>Google Review</h2>
      </div>
      <div className="review-slider">
        {reviews.map((review) => (
          <div key={review.id} className="review-card">
            <h3>{review.name}</h3>
            <p>"{review.review}"</p>
            <p>⭐ {review.rating}/5</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoogleReview;
