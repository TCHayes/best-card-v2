const initialState = {
  cards: [
    {
      "_id": "58d032e5a8b6d65f52851127",
      "name": "Chase Freedom Unlimited",
      "categories": {
        "gas": 0.0225,
        "groceries": 0.0225,
        "restaurants": 0.0225,
        "travel": 0.0225,
        "other": 0.0225
      }
    },
    {
      "_id": "58d032e5a8b6d65f52851128",
      "name": "Amex Blue Cash Preferred",
      "categories": {
        "gas": 0.03,
        "groceries": 0.06,
        "restaurants": 0.01,
        "travel": 0.01,
        "other": 0.01
      }
    },
    {
      "_id": "58d032e5a8b6d65f52851129",
      "name": "Chase Freedom",
      "categories": {
        "gas": 0.03,
        "groceries": 0.01,
        "restaurants": 0.01,
        "travel": 0.01,
        "other": 0.01
      }
    },
    {
      "_id": "58d032e5a8b6d65f5285112a",
      "name": "Discover It",
      "categories": {
        "gas": 0.05,
        "groceries": 0.01,
        "restaurants": 0.01,
        "travel": 0.01,
        "other": 0.01
      }
    },
    {
      "_id": "58d032e5a8b6d65f5285112b",
      "name": "Chase Sapphire Reserve",
      "categories": {
        "gas": 0.015,
        "groceries": 0.015,
        "restaurants": 0.045,
        "travel": 0.045,
        "other": 0.015
      }
    }
  ]
}

export default (state = initialState, action) => {
  return state;
}
