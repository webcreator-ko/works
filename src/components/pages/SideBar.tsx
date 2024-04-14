import React from "react";
import sidebar from "./sidebar.module.scss";
import Footer from "./Footer";
import Categories from "./Categories";
import Search from "./Search";

const SideBar = () => {
 return (
  <aside className={sidebar.wrap}>
   <Categories />
   <Search />
   <footer className={sidebar.footer}>&copy; 2024 GPT Trends</footer>
  </aside>
 );
};

export default SideBar;
