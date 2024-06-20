import './Main.css';
import '../interfaces/interface';
import { card } from '../interfaces/interface';

function Main() {
  const card: card = {
    13: 'туз',
    12: 'король',
    11: 'королева',
    10: 'валет',
    9: 9,
    8: 8,
    7: 7,
    6: 6,
    5: 5,
    4: 4,
    3: 3,
    2: 2,
    1: 1,
  };

  return (
    <>
      <div className='main'></div>
    </>
  );
}

export default Main;
