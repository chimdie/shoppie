const data = require("../data.json");

export const getProducts = () => {
  return data;
};

export default function handler(req, res) {
  const products = getProducts();
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]); // Allow only GET request
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  } else {
    res.status(200).json(products);
  }
}
