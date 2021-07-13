import data from "./data.json";

export const getProducts = () => {
  return data;
};

export default function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  } else {
    const products = getProducts();
    res.status(200).json(products);
  }
}
