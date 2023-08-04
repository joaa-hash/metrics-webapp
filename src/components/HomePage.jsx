import '../styling/HomePage.css';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { updateSelected } from '../redux/details/detailsSlice';
import { BsArrowRightCircle } from 'react-icons/bs';
import map_mexico from '../assets/map_mexico.png'

const HomePage = () => {
  const dispatch = useDispatch();
  const numOfCitiesFromStore = useSelector((state)=>state.navigaton[0].citiesToRender);
  const statesInCountry = useSelector((state) => {
    const result = []
    const cities = state.weather.mexico.states
    if (numOfCitiesFromStore) {
      if ( numOfCitiesFromStore > cities.length) {return cities};
      for(let i = 0; i<numOfCitiesFromStore; i++) {
        result.push(cities[i]);
      };
      return result;
    }
    return cities;
  });
  console.log('statesInCountry-------->',statesInCountry);

  const eventHandler = (cityName) => {
    dispatch(updateSelected(cityName));
  };

  return (
    <>
      <section className="continent">
        <img src={map_mexico} alt="continents picture" />
        <div className="cont-header">
          <h1>Mexico</h1>
          <span>6958 views</span>
        </div>
      </section>
      <section className="countries-section">
        <h2>STATS BY CITY</h2>
        <ul className="countries-ul">
          {statesInCountry.map((state) => {
            const { latitude, longitude, state:cityName} = state;
            return (
              <li key={state.state} className="country">
                <NavLink to="/details" onClick={()=>eventHandler(cityName)}>
                  <BsArrowRightCircle />
                </NavLink>
                <img src={state.img} alt={state.imgAlt} />
                <NavLink to="/details" onClick={()=>eventHandler(cityName)}>
                  <h3 className='city-name'>{cityName}</h3>
                </NavLink>
                <span>{`coords: Lat${latitude}, Long${longitude}`}</span>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};
export default HomePage;
