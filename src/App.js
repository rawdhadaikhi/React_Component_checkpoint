
import './App.css';
import './imgs/style.css';

import ProfilePhoto from './component/PhotoProfile';
import ShowFullName from './component/FullName';
import Myaddress from './component/Address';


function App() {
  return (
    <div className="App">
      <ShowFullName/>
      {/* {ShowFullName()} */}
     <ProfilePhoto/>
    <Myaddress/>

    </div>
  );
}

export default App;
