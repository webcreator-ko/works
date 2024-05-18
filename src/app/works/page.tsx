import React from "react";
import pageStyles from "./page.module.scss";
import Work from "@/components/pages/works/work";

const page = () => {
 return (
  <div className={pageStyles.wrap}>
   <Work />
  </div>
 );
};

export default page;
