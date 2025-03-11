import { useEffect } from 'react';
import ListCard from './listcard';
import ListTile from './listtile';
import styles from './beerlist.module.css';

export default function BeerList({ beers, type, action }) {
  // const action = useCallback(() => {
  //   console.warn('Button was clicked');
  // }, []);

  useEffect(() => {
    console.log('use effect ran in beerlist');
    //only when it is first added to the DOM
  }, []);

  if (type == 'list') {
    return (
      <ul className={styles.list}>
        {beers.map((beer) => (
          <ListTile key={beer.uid} info={beer} action={action} />
        ))}
      </ul>
    );
  } else {
    return (
      <div className={styles.grid}>
        {beers.map((beer) => (
          <ListCard key={beer.uid} info={beer} action={action} />
        ))}
      </div>
    );
  }
}
