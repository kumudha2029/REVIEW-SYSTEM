// src/data/reviews.js

export const reviews = [
  {
    id: 1,
    name: "Ravi",
    rating: 5,
    text: "Great product, fast delivery!",
    platform: "Amazon",
    sentiment: "positive",
  },
  {
    id: 2,
    name: "Priya",
    rating: 2,
    text: "Packaging was damaged",
    platform: "Flipkart",
    sentiment: "negative",
  },
  {
    id: 3,
    name: "Arun",
    rating: 4,
    text: "Good quality overall",
    platform: "Website",
    sentiment: "positive",
  },

  // --- Added Reviews ---
  ...Array.from({ length: 50 }, (_, i) => {
    const platforms = ["Amazon", "Flipkart", "Website"];
    const sentiments = ["positive", "negative", "neutral"];

    const randomSentiment =
      sentiments[Math.floor(Math.random() * sentiments.length)];

    const texts = {
      positive: [
        "Excellent quality!",
        "Loved the product",
        "Worth the price",
        "Very satisfied",
      ],
      negative: [
        "Poor packaging",
        "Not as expected",
        "Delayed delivery",
        "Bad experience",
      ],
      neutral: [
        "Average product",
        "Okay experience",
        "Nothing special",
        "Decent quality",
      ],
    };

    return {
      id: i + 4,
      name: `User ${i + 4}`,
      rating:
        randomSentiment === "positive"
          ? 4 + Math.floor(Math.random() * 2)
          : randomSentiment === "negative"
          ? 1 + Math.floor(Math.random() * 2)
          : 3,
      text:
        texts[randomSentiment][
          Math.floor(Math.random() * texts[randomSentiment].length)
        ],
      platform: platforms[Math.floor(Math.random() * platforms.length)],
      sentiment: randomSentiment,
    };
  }),
];