import { useCallback, useState, useEffect } from 'react';
import './App.css';
import BeerList from './components/beerlist';
import Loader from './components/loader';
import Header from './components/header';

// https://random-data-api.com/api/v2/beers?size=4

function App() {
  const [beers, setBeers] = useState(null);
  //null meaning NO DATA is the default value.
  //beers will become an array after we fetch the data
  const [isLoading, setIsLoading] = useState(true);
  const [errMessage, setErrMessage] = useState(null);
  const [numBeers, setNumBeers] = useState(5);
  const [listMode, setListMode] = useState('list');
  const [keyword, setKeyword] = useState(() => getLocal());

  useEffect(() => {
    getData();
    // setKeyword(() => getLocal());
    //other func
    //other func
  }, [numBeers]);
  // [] - run useEffect function when component loads
  // [errMessage] - run useEffect when component loads AND if errMessage changes
  // [numBeers] - if setNumBeers() is called and it changes the number, then useEffect calls getData() again

  async function getData() {
    setErrMessage(null);
    try {
      let url = `https://random-data-api.com/api/v2/beers?size=${numBeers}`;
      let response = await fetch(url);
      if (!response.ok) throw new Error('The beer was bad');
      setIsLoading(false); //good or bad, hide the spinner
      let data = await response.json();
      setBeers(data); //save the fetched data in a state variable
    } catch (err) {
      setErrMessage(err.message); //for ANY error tell the user
      setIsLoading(false); //good or bad hide the spinner
    }
  }

  function msg(message) {
    //pure function. Same input => same output
    //no side effects
    //does not rely on any variable/object outside of the function
    return message.toUpperCase();
  }

  function processForm(formData) {
    console.log('thanks for submitting');
    console.log([...formData.entries()]);
    console.log(formData.get('search'));

    saveLocal(formData.get('search'));
  }

  function saveLocal(keyword) {
    localStorage.setItem('SearchThingyMaBob', keyword);
  }
  function getLocal() {
    return localStorage.getItem('SearchThingyMaBob') ?? '';
    //if localStorage returns null, make this an empty string
  }

  const action = useCallback(() => {
    //save a function to prevent it being recreated each time App() is run
    //this will protect components using this function from being unnecessarily rerendered too
    //the dependency array is a trigger for when we will recreate this function
    console.warn('clicked on a button');
    //TODO: REMOVE FROM ARRAY OF BEERS...
  }, []);
  //if the dependency array is empty, then keep this function the same as long as App is on the screen.
  //we are only calling useCallback on the first render of App()

  function toggle() {
    //change between grid and list
    setListMode(listMode == 'list' ? 'grid' : 'list');
  }
  function numRandomNumberOfBeers() {
    let num = Math.floor(Math.random() * 20) + 1; //1 - 20
    setNumBeers(num); //this will change numBeers and trigger App rerending, and trigger useEffect
  }

  return (
    <>
      <Header action={processForm} strKeyword={keyword} />
      <div className="main">
        {isLoading && <Loader />}

        {errMessage && <h2>{errMessage}</h2>}

        {beers && beers.length == 0 && <p>No beers found</p>}

        {beers && beers.length > 0 && (
          <>
            <button onClick={toggle}>Toogle Display</button>
            <button onClick={numRandomNumberOfBeers}>Get New Beer</button>
            <BeerList beers={beers} type={listMode} action={action} />
          </>
        )}
      </div>
    </>
  );
}
//changing BeerList.beers or BeerList.type will rerender <BeerList/>

export default App;

/*
<ListCard info={info} action={action} />
      <ListTile info={info} action={action} />
*/
