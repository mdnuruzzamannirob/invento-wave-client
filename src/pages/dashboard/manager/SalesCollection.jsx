import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useFetchSecure from "../../../hooks/useFetchSecure";
import { Helmet } from "react-helmet-async";
import { HashLoader } from "react-spinners";
import Button from "../../../components/shared/Button";
import { useState } from "react";
import { RiSearch2Fill } from "react-icons/ri";

const SalesCollection = () => {
  const [search, setSearch] = useState("");
  const { user } = useAuth();

  const {
    data: productData,
    refetch,
    isLoading,
    isPending,
  } = useFetchSecure(
    `api/product/${user?.email}?search=${search}`,
    `"productData",
    ${user?.email}`
  );

  const handleSearch = (e) => {
    e.preventDefault();
    refetch();
  };

  refetch();
  if (isLoading || isPending) {
    return (
      <p className="h-screen flex items-center justify-center">
        <HashLoader color="#0ea5e9" />
      </p>
    );
  }

  return (
    <>
      <Helmet>
        <title>Sales Collection - Invento Wave</title>
      </Helmet>
      <div>
        <h3 className="font-semibold mb-5">Dashboard/Sales Collection</h3>
        <div className="flex flex-col-reverse sm:flex-row justify-around items-center mt-10 gap-5">
          <h3 className="text-lg font-medium text-black/80">
            Total Product :{" "}
            <span className="badge badge-lg bg-sky-500 text-white">
              {productData?.length}
            </span>
          </h3>

          <form onSubmit={handleSearch} className="flex items-center">
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              className="px-3 py-1 outline-none rounded-md rounded-r-none text-start border-white"
              placeholder="Search..."
            />
            <button
              type="submit"
              className="btn btn-sm rounded-l-none bg-pink-600 hover:bg-pink-700 text-white border-none whitespace-nowrap"
            >
              <RiSearch2Fill />
              Search
            </button>
          </form>
        </div>
        <div className="overflow-x-auto mt-5 sm:mt-10 mb-20 ">
          <table className="table text-center">
            <thead>
              <tr>
                <th></th>
                <th>Products Image</th>
                <th>Products Name</th>
                <th>Products Quantity</th>
                <th>Products Code</th>
                <th>Discount</th>
                <th>Selling Price</th>
                <th>Sold to Customer</th>
              </tr>
            </thead>
            <tbody>
              {productData?.map((data, index) => (
                <tr key={data._id} className="hover">
                  <th>{index + 1}</th>
                  <td className="flex items-center justify-center">
                    <img
                      className="w-44 h-32 rounded-md object-cover"
                      src={data?.productImage}
                      alt=""
                    />
                  </td>
                  <td className="font-medium">{data?.productName}</td>
                  <td
                    className={data.productQuantity === 0 ? "text-red-600" : ""}
                  >
                    {data?.productQuantity}
                  </td>
                  <td className="font-medium">{data?.productCode}</td>
                  <td className="font-medium">{data?.discountPercent}%</td>
                  <td className="font-medium">${data?.sellingPrice}</td>
                  <td>
                    {data?.productQuantity > 0 ? (
                      <Link
                        to={`/dashboard/sales-Collection/checkout/${data._id}`}
                      >
                        <Button>Sold</Button>
                      </Link>
                    ) : (
                      <Button disabled={true}>Sold Out</Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default SalesCollection;
