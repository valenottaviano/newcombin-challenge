import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Fragment } from 'react/cjs/react.production.min';
import Home from './pages/Home';
import Information from './pages/Information'

function App() {
  return (
    <Fragment>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600&family=Poppins:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet"/> 
      </head>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/information' element={<Information/>}/>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
