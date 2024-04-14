import React from "react";
import categoriesStyles from "./categories.module.scss";
import { fetchComWP } from "@/libs/fetchComWP";
import { FetchType } from "@/types/fetchType";
import { CategoryType } from "@/types/categoryType";

const Categories = async () => {
 const data = await fetchComWP<CategoryType[]>({
  method: FetchType.Get,
  endpoint: `/categories?per_page=100&_fields=id,count,name`,
 });

 return (
  <div className={categoriesStyles.wrap}>
   <h3>Categories</h3>
   <ul>
    {data.map((e) => {
     // 未分類は表示しない
     if (e.id === 1) return;
     return (
      <li key={e.id}>
       <a href={`/categories/${e.id}`}>
        <h4>{e.name}</h4>(<span>{e.count}</span>)
       </a>
      </li>
     );
    })}
   </ul>
  </div>
 );
};

export default Categories;
