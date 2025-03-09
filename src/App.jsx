import { useCallback } from 'react';
import './App.css';
import ListCard from './components/listcard';
import ListTile from './components/listtile';

const info = {
  uid: crypto.randomUUID(),
  title: 'Title',
  subtitle: 'SubTitle',
  content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur aut pariatur officiis numquam ex, aperiam ullam eligendi iste aspernatur ut esse sint impedit. Corrupti consectetur perferendis, culpa nisi, accusamus perspiciatis debitis porro facere velit voluptatum totam repudiandae officia sapiente iure?`,
  btn: 'Click',
};

// https://random-data-api.com/api/v2/beers?size=4

function App() {
  const action = useCallback(() => {
    console.warn('clicked on a button');
  }, [info]);

  return (
    <div className="main">
      <ListCard info={info} action={action} />
      <ListTile info={info} action={action} />
    </div>
  );
}

export default App;
