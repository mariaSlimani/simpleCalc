import React from 'react';
import './Screen.css';

class Screen extends React.Component 
{
  componentDidUpdate ()
  {

    if (this.props.mode==="Light")
    {
        document.querySelector(".screen").classList.forEach(element =>{
          if (element==="screenD")
          {
              document.querySelector(".screen").classList.remove("screenD");
          }
        });

          document.querySelector(".screen").classList.add("screenL");
    }
    else
    {
      document.querySelector(".screen").classList.forEach(element =>{
        if (element==="screenL")
        {
            document.querySelector(".screen").classList.remove("screenL");
        }
      });

        document.querySelector(".screen").classList.add("screenD");
    }
  }
  render(){

    return(
      <div className="screen screenL">
      <div className="onScreen">
        {this.props.formul}
      </div>
      <div className="onScreen">
        {this.props.res}
      </div>
      </div>

  );
}
}
export default Screen;
