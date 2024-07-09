import { FC, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { addCategories, addProducts } from "../redux/features/productSlice";
import ProductCard from "../components/ProductCard";
import { Product, ProductData } from "../models/Product";
import { Category } from "../models/ProductSlice";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const AllProducts: FC = () => {
  const dispatch = useAppDispatch();
  const query = useQuery();
  const searchQuery = query.get("search") || "";
  const [category, setCategory] = useState("all");
  const sortRef = useRef<HTMLSelectElement>(null);
  const [currentProducts, setCurrentProducts] = useState<Product[]>([]);
  const allProducts = useAppSelector(
    (state) => state.productReducer.allProducts
  );
  const allCategories = useAppSelector(
    (state) => state.productReducer.categories
  );

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://dummyjson.com/products?limit=100");
      const data: ProductData = await response.json();
      console.log("Fetched products:", data.products); // Debugging log
      dispatch(addProducts(data.products));
    };

    const fetchCategories = async () => {
      const response = await fetch("https://dummyjson.com/products/categories");
      const data: Category[] = await response.json();
      console.log("Fetched categories:", data); // Debugging log
      dispatch(addCategories(data));
    };

    if (allProducts.length === 0) fetchProducts();
    if (allCategories.length === 0) fetchCategories();
  }, [allProducts, allCategories, dispatch]);

  useEffect(() => {
    let filteredProducts = allProducts;
    if (category !== "all") {
      filteredProducts = filteredProducts.filter(
        (pro) => pro.category === category
      );
    }
    if (searchQuery) {
      filteredProducts = filteredProducts.filter((pro) =>
        pro.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    setCurrentProducts(filteredProducts);
  }, [category, searchQuery, allProducts]);

  const sortProducts = (sortValue: string) => {
    if (sortValue === "asc") {
      setCurrentProducts(
        [...currentProducts].sort((a, b) => {
          const aPrice =
            a.price - (a.price * (a.discountPercentage ?? 0)) / 100;
          const bPrice =
            b.price - (b.price * (b.discountPercentage ?? 0)) / 100;
          return aPrice - bPrice;
        })
      );
    } else if (sortValue === "desc") {
      setCurrentProducts(
        [...currentProducts].sort((a, b) => {
          const aPrice =
            a.price - (a.price * (a.discountPercentage ?? 0)) / 100;
          const bPrice =
            b.price - (b.price * (b.discountPercentage ?? 0)) / 100;
          return bPrice - aPrice;
        })
      );
    } else {
      setCurrentProducts([...currentProducts].sort((a, b) => a.id - b.id));
    }
  };

  return (
    <>
      <div className="container mx-auto min-h-[83vh] p-4 font-karla">
        <div className="grid grid-cols-5 gap-1">
          <div className="col-span-1">
            <h1 className="font-bold mb-2">Categories</h1>
            <div className="space-y-1">
              {allCategories.map((_category: Category, index) => (
                <div
                  key={index}
                  className={`cursor-pointer hover:text-blue-500 ${
                    _category.slug === category ? "text-blue-500" : ""
                  }`}
                  onClick={() => {
                    setCategory(_category.slug);
                    if (sortRef && sortRef.current)
                      sortRef.current.value = "default";
                    sortProducts("default");
                  }}
                >
                  {_category.name}
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-4 space-y-4 ml-8">
            <div className="flex items-center justify-between ml-4">
              <div className="flex items-center space-x-2 text-lg">
                <span>Products</span>
                <span> {">"} </span>
                <span className="font-bold">{category}</span>
              </div>
              <select
                ref={sortRef}
                className="border border-black rounded p-1"
                onChange={(e) => sortProducts(e.target.value)}
                title="Sort products by price"
              >
                <option value="default">Default</option>
                <option value="asc">Price (low to high)</option>
                <option value="desc">Price (high to low)</option>
              </select>
            </div>
            <div className="grid gap-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1">
              {currentProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProducts;
