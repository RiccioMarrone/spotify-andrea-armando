import React from "react";
import { RootState } from "../../store/store";
import { useSelector, useDispatch } from "react-redux";
import ErrorPage from "../atoms/ErrorPage";
import WorkInProgress from "../atoms/WorkInProgress";

const Dashboard: React.FC = () => {
  return <WorkInProgress />;
};

export default Dashboard;
