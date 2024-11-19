import  { useEffect, useRef, useState } from "react";
import useCustomAPI from "../Hook/useCustomAPI";
import useDebounce from "../Hook/useDebounce";

const ProductList = () => {
  const [search, setSearch] = useState("");
  const isFeatched = useRef(false);

  const debounceSearch = useDebounce(search, 500)
  const hendleSearch = (e: any) => {
    let searchData = e.target.value;
    setSearch(searchData);
    console.log(searchData);
  };

  const { response, loading, error, featchApi } = useCustomAPI<[]>({
    url: "https://fakestoreapi.com/products",
    method: "GET",
  });
  

  const filteredProducts = response?.filter((item: any) =>
    item.category.toLowerCase().includes(debounceSearch.toLowerCase())
  );

  useEffect(() => {
    if (isFeatched.current) return;
    isFeatched.current = true;
    featchApi();
  }, []);

  

  return (
    <div className="w-full px-3 py-4 flex justify-center items-center ">
      <div className="w-[30%] border px-3 py-4 rounded ">
        <input
          type="text"
          value={search}
          className="w-full  focus:outline-none focus:border-sky-500 focus:ring-1 border border-teal-400 hover:border-teal-400 rounded  px-2 py-1"
          placeholder="search"
          onChange={(e) => hendleSearch(e)}
        />
       

        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div className="text-red-500">Failed to load products</div>
        ) : (
          <div className="w-full flex flex-col px-2 py-4 gap-2">
            {filteredProducts?.map((item:any) => (
              <div
                key={item.id}
                className="w-full border rounded text-start px-2 py-2"
              >
                <p>{item.category}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
