import React, { useEffect } from "react";
import { getTicketDetailsByTicketIDApiCall } from "../../redux/APIs/taskApis";
import { useDispatch, useSelector } from "react-redux";
// import "./LandingPage.css"; // Import custom CSS

const Dashboard = () => {
  const dispatch = useDispatch();
  const ticketDetails = useSelector((state) => state);

  console.log("ticketDetails", ticketDetails.getTicketDetailsByTicketIDData);

  useEffect(() => {
    dispatch(getTicketDetailsByTicketIDApiCall());
  }, [dispatch]);

  return (
    <div className="landing-wrapper ">
      <div className="container text-center">
        <div className="row justify-content-center">Dashboard Page</div>
      </div>
    </div>
  );
};

export default Dashboard;
