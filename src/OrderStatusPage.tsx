import useOrders from "../src/graphql/hooks/useOrders";
//import { useAppSelector } from "../src/app/hooks";
import { useLocation, useNavigate } from "react-router-dom";
import { CheckIcon } from "@heroicons/react/24/outline";
import moment from "moment";
import * as R from "ramda";
//import numeral from "numeral";
//import { Accordion } from "@mantine/core";
//import { useEffect, useState } from "react";
import search from "../src/assets/no-results.png";
///import Loader from "../StoreFront/components/Loader";
const OrderStatusPage = () => {
  // const { shop } = useAppSelector((state: { shop: any; }) => state?.shop);
  //  const { userInfo } = useAppSelector((state: { auth: any; }) => state.auth);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const trackingCode = searchParams.get("trackingCode");
  const { order, error, loading } = useOrders({
    filter: {
      tracking_code: {
        eq: trackingCode,
      },
    },
  });
  const navigate = useNavigate();
  if (loading) {
    return <div>{/* <Loader/> */}</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  //   function classNames(...classes: string[]) {
  //     return classes.filter(Boolean).join(' ')
  //   }
  //   const price = order?.order_total! - order?.delivery_amount!;
  const subtotal = order?.order_total! - order?.delivery_amount!;
  console.log(subtotal);

  function getCurrency() {
    let currency;

    if (order?.country === "GH") {
      currency = "GHS";
    } else {
      currency = "NG";
    }

    return currency;
  }

  const currency = getCurrency();
  console.log(currency);

  return (
    <div>
      {/* <div className=" max-w-2xl pb-24 pt-8 sm:px-6 sm:pt-16 lg:max-w-7xl lg:px-48"> */}

      {order ? (
        <main className=" flex w-full  py-16 sm:px-6 sm:py-24 ">
          {/* <div className="float-right text-orange-500 pb-16 hover:cursor-pointer"
        onClick={()=>navigate("/Orders")}
        >Track another order</div> */}
          {/* <h1 className="text-3xl font-bold tracking-tight text-gray-900">Order Details</h1> */}
          <div
            className="lg:w-8/12 px-2 lg:px-0  mx-auto bg-white"
            key={order?.id}
          >
            <dl>
              {/* <dt className="text-gray-500">Order number&nbsp;</dt> */}
              <dd className="font-medium text-gray-900">
                {" "}
                <span className="text-gray-400 font-light">Order number: </span>
                {order?.cart_number}
              </dd>
              <dd className=" text-base font-normal text-gray-900">
                {" "}
                <span className="text-gray-400 font-light text-sm">
                  Order date:{" "}
                </span>{" "}
                {moment(order?.createdAt).format("Do MMM, YYYY")}
              </dd>
            </dl>
            <hr className="bg-gray-400 mt-2" />

            <div className="">
              {order?.orderItems?.map((orderitem: any) => (
                <div key={orderitem?.id} className="flex flex-col  text-sm ">
                  <div className="lg:mt-12 mb-12 lg:ml-12   lg:mb-24 flex flex-col lg:flex-row  ">
                    {orderitem?.history?.map((history: any) => (
                      <div className="-mb-12 lg:-ml-12" key={history?.id}>
                        <div className="flex flex-row space-x-4 lg:flex-col space-y-4 -ml-1 ">
                          <div className=" text-xs hidden lg:flex lg:ml-4 -mt-3 text-green-500">
                            {history?.status} &nbsp;{" "}
                          </div>
                          <div className="flex flex-row ">
                            <div className="w-6 h-6  bg-green-500 rounded-full   lg:mt-0.5 flex items-center justify-center">
                              <CheckIcon className="w-4 h-3 text-white" />
                            </div>
                            <div className="w-1 h-24 -ml-3.5 lg:-ml-0  mt-5 lg:h-1 lg:w-48 lg:mt-3  bg-green-500     border-2  border-green-500"></div>
                          </div>
                          <div className="text-xs -mt-3 hidden lg:flex ">
                            <time dateTime={history?.created_at}>
                              {moment(history?.created_at).format(
                                "Do MMM, YYYY"
                              )}
                            </time>
                          </div>
                          <div className="flex flex-col space-y-1 pt-3">
                            <div className=" text-xs flex lg:hidden -mt-3 text-green-500">
                              {history?.status} &nbsp;{" "}
                            </div>
                            <div className="text-xs -mt-3 lg:hidden ">
                              <time dateTime={history?.created_at}>
                                {moment(history?.created_at).format(
                                  "Do MMM, YYYY"
                                )}
                              </time>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-row justify-between ">
                    <div className=" flex flex-row lg:justify-between space-x-2 lg:space-x-8 overflow-hidden rounded-lg ">
                      <div className="pt-4">
                        <img
                          src={orderitem?.product?.avatar}
                          alt={orderitem?.product?.title}
                          className="object-cover  shadow-lg border-gray-300 rounded-lg   w-24 h-24 lg:w-32 lg:h-32 object-center "
                        />
                      </div>

                      <div className="flex flex-col w-1/2 h-32 py-6 mt-2  space-y-2">
                        <div className=" text-xs lg:text-lg w-32  lg:w-full font-medium">
                          {orderitem?.product?.title}
                        </div>
                        {/* <div className="text-xs lg:text-sm">{orderitem?.product?.title}</div> */}
                      </div>
                    </div>
                    <div className="py-6 mt-1 h-32 flex flex-col space-y-2">
                      <div className="font-medium text-base">
                        {currency}{" "}
                        {R.sum([
                          orderitem?.price!,
                          orderitem?.profitAdded!,
                        ]).toString()}{" "}
                      </div>
                      <div className="text-sm">Qty: {orderitem?.quantity}</div>
                    </div>
                  </div>

                  <hr className=" bg-gray-400 lg:mt-8 mb-4" />

                  <div className="">
                    <dl className="grid grid-cols-1 gap-y-8  border-gray-200  sm:grid-cols-2 sm:gap-x-6 sm:py-6 ">
                      <div>
                        <dt className="font-medium text-gray-900">
                          Order Summary
                        </dt>
                        <dd className="mt-3 space-y-2 text-gray-500">
                          <div className="flex flex-row w-64 justify-between">
                            <div>Items:</div>
                            <div>{order?.orderItems?.length}</div>
                          </div>
                          <div className="flex flex-row  w-64 justify-between">
                            <div>Subtotal:</div>
                            <div>
                              {currency} {subtotal}{" "}
                            </div>
                          </div>
                          <div className="flex flex-row  w-64 justify-between">
                            <div>Delivery : </div>
                            <div>
                              {currency} {order?.delivery?.price}
                            </div>
                          </div>
                          <div className="flex flex-row  w-64 justify-between">
                            <div>Total: </div>
                            <div>
                              {currency} {order?.order_total}
                            </div>
                          </div>
                        </dd>
                      </div>
                    </dl>

                    <div></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      ) : (
        <div className="flex flex-col items-center justify-center m-auto py-24 space-y-2">
          <div>
            <img src={search} className="w-24 h-24 lg:w-64 -lg:h-54 " alt="" />
          </div>
          <div className="text-3xl font-normal text-center">
            Oops! Tracking Code Not found
          </div>
          <div className="text-center">
            Sorry we couldn't find any search results. Please check your input
            and try again or contact us for more information about this issue.
          </div>
          <div
            onClick={() => navigate("/")}
            className="px-2 text-center pb-1 bg-pink-600 hover:cursor-pointer text-white rounded-lg"
          >
            Go back
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderStatusPage;
