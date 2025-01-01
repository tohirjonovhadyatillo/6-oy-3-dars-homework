import React from 'react';
import styles from './index.module.css';
import Car from '../Car';
import Address from '../Address'

function User(props) {
  const { user } = props;
  console.log(user);

  return (
    <div className={styles.card}>
      <img src={user.image} alt="" />
      <h3>
        {user.firstName} {user.lastName}
      </h3>
      <h3 className={styles.ageEmail}>
        {user.age} {user.email}
      </h3>
      <Address address={user.address} />
      {user.cars.length > 0 && user.cars.map((car, index) => {
        return <Car key={index} car={car} />;
      })}
      {!user.cars.length && <p>Mashina mavjud emas</p>}
    </div>
  );
}

export default User;
