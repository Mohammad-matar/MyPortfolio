import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './Pages/Home';
import Dashboard from "./Dashboard/personal";
import { Helmet } from "react-helmet";
import './App.css';

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Matarov's Porftolio</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="testing icons and titles" />
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
