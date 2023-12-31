import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filter from "./components/Filters/Filter";
import Card from "./components/Cards/Card";
import React, { useState, useEffect} from 'react';
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Episodes from "./Pages/Episodes";
import Location from "./Pages/Location";
import CardDetails from "./components/Cards/CardDetails";



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />

        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:id" element={<CardDetails />} />

        <Route path="/location" element={<Location />} />
        <Route path="/location/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  );
}
const Home = () => {
  let [pageNumber, setPageNumber ] = useState(1);
  let [search, setSearch] = useState(" ");
  let [status, updateStatus] = useState("");
  let [gender, updateGender] = useState("");
  let [species, updateSpecies] = useState("");
  let [fetchedData, updateFetchedData] = useState([]);
  let {info , results} = fetchedData;
  
  
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
  useEffect(()=>{
    (async function(){
      let data = await fetch(api).then(res=> res.json())
      updateFetchedData(data);
    })()
  },[api])




  return (
    <div className="App">
      <h1 className="text-center mb-3">Characters</h1>
      <Search  setPageNumber={setPageNumber} setSearch={setSearch}/>
      <div className="container">
        <div className="row">
        <Filter
            pageNumber={pageNumber}
            status={status}
            updateStatus={updateStatus}
            updateGender={updateGender}
            updateSpecies={updateSpecies}
            setPageNumber={setPageNumber}
          />
          <div className="col-lg-8 col-12"> 
            <div className="row"> <Card page="/" results= {results}/> </div>
          </div>
        </div>
      </div>
      <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber}/>
    </div> 
  );
}

export default App;
