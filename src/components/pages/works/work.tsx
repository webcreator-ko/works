import React from "react";
import workStyles from "./work.module.scss";
import Image from "next/image";
const Work = () => {
 return (
  <section className={workStyles.wrap}>
   <h2>YOMcoma</h2>
   <div className={workStyles.inner}>
    <div className={workStyles.imageFrame}>
     <Image src="/yomcoma.png" fill alt="" />
    </div>
   </div>
  </section>
 );
};

export default Work;
