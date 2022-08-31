import Sidebar from './sidebar';
import Header from './header';
import { Fragment } from 'react';

function App() {

  return (
    <Fragment>
      <Sidebar />
      <Header />
      <div className='w-32 h-32 bg-red-600'>
        ss
      </div>
    </Fragment>
  );
}

export default App;