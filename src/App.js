
import { BrowserRouter } from 'react-router-dom';
// import RegisterFreelancer from './Components/index/registerFreelancer';
import RegisterUser from './Components/index/registerUser';

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <RegisterFreelancer/> */}
        <RegisterUser/>
      </BrowserRouter>
      


    </div>
    
  );
}

export default App;
