const data = require('../data.json')

export const getProdCat = (category) => {
  const products = data.filter((prod) => prod.category === category);
  return products;
};

export default function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);// Allow only GET request
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  } else {
    const products = getProdCat(req.query.category);
    res.status(200).json(products);
  }
}
