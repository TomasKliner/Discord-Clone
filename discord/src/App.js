import Sidebar from './sidebar';
import Header from './header';
import { Fragment } from 'react';
import Rooms from "./rooms"

function App() {

  return (
    <Fragment>
      <Header />
      <div className='flex'>
        <Sidebar />

        <div className='bg-neutral-600 h-screen w-full flex'>
          <Rooms />
        </div>

      </div>
    </Fragment>
  );
}

export default App;