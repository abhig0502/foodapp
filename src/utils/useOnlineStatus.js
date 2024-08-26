import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  //check if online
  const [onlineStatus, setOnlineStatus] = useState(true);
  useEffect(() => {
    // console.log("inside useEffect");
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
      // console.log("i am inside offline");
    });
   
    window.addEventListener("online", () => {
      setOnlineStatus(true);
      // console.log("i am inside online");
    });
  }, []);
  return onlineStatus;
};
export default useOnlineStatus;
