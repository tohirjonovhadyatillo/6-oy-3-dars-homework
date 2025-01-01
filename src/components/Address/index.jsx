import React from 'react';
import Styles from './index.module.css'

function Address({ address }) {
  return (
    <div>
      <p className={Styles.address}>Region: {address.region}</p>
      <p className={Styles.address}>ZIP Code: {address.zip}</p>
    </div>
  );
}

export default Address;
