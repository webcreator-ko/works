import React from "react";
import headerStyles from "@/components/header.module.scss";
import { getImageProps } from "next/image";

function getBackgroundImage(srcSet = "") {
 const imageSet = srcSet
  .split(", ")
  .map((str) => {
   const [url, dpi] = str.split(" ");
   return `url("${url}") ${dpi}`;
  })
  .join(", ");
 return `image-set(${imageSet})`;
}

const Header = () => {
 const {
  props: { srcSet },
 } = getImageProps({
  alt: "",
  width: 2557,
  height: 1198,
  src: "/fukuoka.png",
 });
 const backgroundImage = getBackgroundImage(srcSet);

 return (
  <header className={headerStyles.wrap} style={{ backgroundImage }}>
   <h1>
    WEB CREATOR
    <br />
    KO
   </h1>
   <h2 className={headerStyles.leftFixed} data-text="Portfolio">
    Portfolio
   </h2>
   <div className={headerStyles.rect} />
  </header>
 );
};

export default Header;
