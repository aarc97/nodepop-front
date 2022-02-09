import React, { useState, useEffect } from 'react';

import Advert from '../advert/advert.component';
import './adverts-list.styles.css';

import { getAllAdverts } from '../../utils/api/adverts';

const AdvertsList = () => {
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    //token
    const getAdverts = async () => {
      const adverts_request = await getAllAdverts();
      const { adverts } = adverts_request;
      setAdverts(adverts);
    };
    getAdverts();
  }, []);

  return (
    <div className="adverts-preview">
      <h1 className="title">Adverts</h1>
      <div className="advert-list">
        {adverts.map((advert) => (
          <Advert key={advert.id} {...advert}></Advert>
        ))}
      </div>
    </div>
  );
};
export default AdvertsList;
