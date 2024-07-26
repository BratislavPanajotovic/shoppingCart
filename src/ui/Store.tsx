import { useState, useEffect } from "react";
import Loader from "./Loader";

const API_URL = "https://fakestoreapi.com/products";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export async function getStore(): Promise<Product[]> {
  const res = await fetch(API_URL);

  if (!res.ok) throw new Error("Failed getting store");

  const data: Product[] = await res.json();
  return data;
}

export function Store() {
  const [items, setItems] = useState<Product[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getStore();
        setItems(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      }
    }
    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="w-full">
      <h1 className="text-3xl font-bold text-center my-8">Store</h1>
      {items ? (
        <div className="w-full px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="border p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 flex flex-col"
              >
                <div className="relative w-full h-60 overflow-hidden rounded-t-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col flex-grow">
                  <h2 className="text-xl font-bold mb-2 truncate">
                    {item.title}
                  </h2>
                  <p className="text-gray-700 mb-4 flex-grow truncate">
                    {item.description}
                  </p>
                  <p className="text-green-700 font-semibold mb-2">
                    ${item.price}
                  </p>
                  <div className="flex items-center">
                    <p className="text-yellow-500 font-bold">
                      {item.rating.rate}
                    </p>
                    <p className="text-gray-600 ml-2">
                      ({item.rating.count} reviews)
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Store;
