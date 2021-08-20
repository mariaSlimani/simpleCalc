import React , {useState} from 'react';
import './App.css';
import ToggleButton from '../Component/Toggle';
import Calculator from '../Component/Calculator';
const Checked = () => <span role="img" aria-label="moon">🌜</span>;
const UnChecked = () => <span role="img" aria-label="moon">🌞</span>;
function App ()
{
  let [mode,setState]=useState({stat:false, leMode :"Light"});
  function changeMode(state)
  {
    let mMode;
    if (state)
    {
      document.querySelector(".main").style="background-color:black";
      document.querySelector(".title").style="color:#F2709C";
      mMode="Dark";
      }
    else
    {
      document.querySelector(".main").style="background-color:white";
      document.querySelector(".title").style="color:#9041D7";
      mMode ="Light";
    }

    setState({stat:state,leMode:mMode});
  }
    return (
    <div className="main">
      <h1 className="title">Welcome to SimpleCalc!</h1>
      <ToggleButton onChange={state =>changeMode(state)} icons={{checked: <Checked />, unchecked: <UnChecked />}}/>
      <Calculator calcMode={mode.leMode}/>
    </div>

  );
}

export default App;
