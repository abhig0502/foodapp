import React, { useState, lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./src/components/Header";
import Body from "./src/components/Body";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from "react-router-dom";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./Error";
import { useLocation } from "react-router-dom";
import { DominosImageOnHomePageURL } from "./src/utils/constants";
import RestrauntMenu from "./src/components/RestaurantMenu";
import Shimmer from "./src/components/shimmer";
// import Shimmer from "./src/components/shimmer";
// import Grocery from "./src/components/grocery";

const Grocery = lazy(() => import("./src/components/grocery"));

const AppLayout = () => {
  const [listofrestraunts, setlistofrestraunts] = useState([]);
  const [filteredListOfRestraunts, setFilteredListOfRestraunts] = useState([]);
  const location = useLocation();
  const restrauntsprops = {
    listofrestraunts,
    setlistofrestraunts,
    filteredListOfRestraunts,
    setFilteredListOfRestraunts,
  };
  return (
    <div className="app">
      <Header restrauntsprops={restrauntsprops} />

      {/* <Body restrauntsprops={restrauntsprops} /> */}
      {location.pathname === "/" ? (
        <Body restrauntsprops={restrauntsprops} />
      ) : (
        <Outlet />
      )}
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/Grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <RestrauntMenu />, 
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />); // is router a defined keyword?

// const props = {
//   property1: [1, 2, 3, 23, 4],
//   property2: "abhinav",
// };

// const props2 = [
//   "abhinav",
//   1324,
//   "asdf234",
// ];
// console.log(["hello world", {...props},...props2]);
// // console.log([...props2]);
