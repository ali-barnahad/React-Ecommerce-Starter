import { FC, useEffect, useState } from "react";
import RatingStar from "./RatingStar";
import { ReviewItem } from "../models/ReviewItem";

// Vordefinierte Bewertungen
const reviews: ReviewItem[] = [
  {
    username: "ali1999",
    rating: 5,
    review:
      "The product is nice. I got the delivery on time. I am using it for the last four months. My experience with this product is very good.",
  },
  {
    username: "hbingley1",
    rating: 4,
    review:
      "I am satisfied with the value for money of the product. Everything seems nice but the delivery time seems a bit delayed",
  },
  {
    username: "rshawe2",
    rating: 3,
    review:
      "I found the product not long lasting. The quality also seemed a bit downgraded. I don't think it's value for money.",
  },
  {
    username: "yraigatt3",
    rating: 4,
    review:
      "The product is nice. I got the delivery on time. I am using it for the last four months. My experience with this product is very good.",
  },
  {
    username: "kmeus4",
    rating: 3,
    review:
      "The quality could have been better. I feel like wasting my money. I should have been more careful while buying it.",
  },
  {
    username: "dpettegre6",
    rating: 5,
    review:
      "The product is nice. I got the delivery on time. I am using it for the last four months. My experience with this product is very good.",
  },
  {
    username: "ggude7",
    rating: 4,
    review:
      "I am satisfied with the value for money of the product. Everything seems nice but the delivery time seems a bit delayed",
  },
  {
    username: "nloiterton8",
    rating: 3,
    review:
      "I found the product not long lasting. The quality also seemed a bit downgraded. I don't think it's value for money.",
  },
  {
    username: "umcgourty9",
    rating: 4,
    review:
      "The product is nice. I got the delivery on time. I am using it for the last four months. My experience with this product is very good.",
  },
  {
    username: "rhallawellb",
    rating: 3,
    review:
      "The quality could have been better. I feel like wasting my money. I should have been more careful while buying it.",
  },
];

// Funktion zur Erstellung einer zufälligen Bewertungsliste
const getShuffledArr = () => {
  const arr: ReviewItem[] = [];
  const start = Math.floor(Math.random() * 4); // Startindex für die zufällige Auswahl von Bewertungen
  for (let index = start; index < start + 5; index++) {
    arr.push(reviews[index % reviews.length]); // Bewertungen zyklisch hinzufügen, um eine Liste mit 5 Bewertungen zu erhalten
  }
  return arr;
};

// Definition der Reviews-Komponente
const Reviews: FC<{ id: number }> = ({ id }) => {
  const [items, setItems] = useState<ReviewItem[]>([]);

  // Beim Laden der Komponente eine neue zufällige Liste von Bewertungen erstellen
  useEffect(() => {
    const _arr = getShuffledArr();
    setItems(_arr);
  }, [id]);

  // Die Komponente rendern
  return (
    <div className="px-2">
      <h1 className="text-2xl font-semibold mb-2">Reviews</h1>
      <div className="space-y-2">
        {items?.map(({ username, rating, review }) => (
          <div key={username} className="leading-4" data-test="review-item">
            <h3 className="font-semibold text-md">{username}</h3>
            <RatingStar rating={rating} />
            <p className="text-sm leading-4">{review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews; // Reviews-Komponente exportieren
