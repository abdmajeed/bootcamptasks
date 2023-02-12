import Card from './components/Card';

import { useState } from 'react';


  
function App() {

  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4"><Card type='Free' amt='0' user ='Single user' storage='5GB' className='text-muted' /></div>
          <div className="col-lg-4"><Card type='plus' amt='9' user={<strong>5 Users</strong>} storage='50GB' className='fa-li' />
          </div><div className="col-lg-4"><Card type='PRO' amt='49' user={<strong>Unlimited Users</strong>} storage='150GB' className='fa-li' />
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
