import { useEffect } from "react";

import Advert from "../advert/advert.component";
import "./adverts-list.styles.css";

import { fetchAdverts } from "../../store/adverts/adverts.thunk";
import { useSelector, useDispatch } from "react-redux";
import { deleteAdvert } from "../../store/adverts/adverts.thunk";
import CreateAdvertForm from "../forms/advert/create-advert-form.component";

const AdvertsList = () => {
  const adverts = useSelector((state) => state.adverts.adverts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdverts());
  }, []);

  const onDelete = (id) => {
    dispatch(deleteAdvert(id));
  };

  return (
    <div className='adverts-preview'>
      <CreateAdvertForm />
      <div className='adverts-list'>
        <h1 className='title'>Adverts</h1>
        <div className='advert-list'>
          {adverts.map((advert) => (
            <Advert key={`${advert.id}`} data={advert} onDelete={onDelete} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default AdvertsList;
