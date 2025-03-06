import React from "react";
import { useAppSelector } from "../store/hooks";
import { useIsMobile } from "../utils/useIsMobile";
import Mobile from "./Mobile";
import Desktop from "./Desktop";

const JobListFilterContainer: React.FC = () => {
  const jobstate = useAppSelector((state) => state.jobList);
  const { tab, commonFilteredJobOptions } = jobstate || {};
  const { isMobile } = useIsMobile();
  return (
    <div>
      <h1>JobListFilterContainer</h1>
      {isMobile ? <Mobile /> : <Desktop />}
    </div>
  );
};

export default JobListFilterContainer;
