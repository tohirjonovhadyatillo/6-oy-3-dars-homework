import React from "react";
import Styles from './index.module.css'

function Car(proms) {
  const {car} = proms;
  return <div className={Styles.car}>
    {car}
  </div>;
}

export default Car;
