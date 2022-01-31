import './App.css';
import JSONDATA from './MOCK_DATA.json'
import Tweet from "./tweet";
import {useState} from "react";

function App() {
    //Using State
    const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className="App">
        <h1>Akif's Live Search</h1>
        <input className='input-field' type="text" placeholder="Search"
               onChange={event =>
               {setSearchTerm(event.target.value)}
        }/>
         {/*Writing Javascript here*/}

        {
            //This function will print each and every JSON data to index.html

            JSONDATA.filter((val)=>{
              if(searchTerm == "") {
                  return val;
              }
              else if(val.first_name.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
              }

            }).map((val,key) => {
                return (
                    <div>
                        <Tweet fname={val.first_name}
                               gender={val.gender}
                               email={val.email}
                        />

                    </div>
                );
            })
        }



    </div>
  );
}

export default App;
