import { useEffect, useState } from 'react';
import Top from "./component/Top";
import Recipe from "./component/Recipe";
import Axios from "axios";
import './App.css';

function App() {
  const [mysearch, setMysearch] = useState("chiken");
  const [myrecipes, setMyrecipes] = useState([]);

  //this can be better placed in the environment variables

  const APP_ID = "a33a1147";
  const APP_KEY = "3ab33a91b4cbf0c55f37572ff7fd0593";

  useEffect(() => {
    getMyrecipes();
  }, []);

  //get constant function
  const getMyrecipes = async () => {
    const res = await Axios.get(`https://api.edamam.com/search?q=${mysearch}&app_id=${APP_ID}&app_key=${APP_KEY}`)

    setMyrecipes(res.data.hits)

    console.log(res.data)
  }

  const onInputChange = (e) => {
    setMysearch(e.target.value);
    //console.log(e.target.value);
  }

  const onSearchClick = () => {
      getMyrecipes();
  }

  return (
    <div className="App">
          <Top mysearch = {mysearch} onInputChange = {onInputChange} onSearchClick = {onSearchClick}>

          </Top>
          <div className = "container">
              <Recipe myrecipes = {myrecipes}  />
          </div>
    </div>
  );
}

export default App;
