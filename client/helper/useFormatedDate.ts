import moment from "moment";
import React from "react";

const useFormatedDate = () => {
  const formatDate = (date: string) => {
    return moment(new Date(date)).format("DD MMMM YYYY");
  };
  return { formatDate };
};

export default useFormatedDate;
