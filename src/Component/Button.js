import React from 'react';
import './Button.css';

class Button extends React.Component {

componentDidMount ()
{
  const element =document.querySelectorAll(".button")[this.props.properties.id-1];
if (this.props.mode==="Light")
{
    const classT = this.props.properties.type+"L"
  element.classList.add(classT);

  if (this.props.properties.value === '=')
  {
    element.classList.add("resultL");
    element.classList.forEach(theme =>{
      if (theme==="resultD")
      {
          element.classList.remove("resultD");
      }
    });
  }
  if (this.props.properties.value === '%')
  {
    element.classList.add("pourL");
    element.classList.forEach(theme =>{
      if (theme==="pourD")
      {
          element.classList.remove("pourD");
      }
    });
  }

  element.classList.forEach(theme =>{
   if (theme==="numberD")
    {
        element.classList.remove("numberD");
    }
    else if (theme==="operatorD")
    {
        element.classList.remove("operatorD");
    }
    else if (theme==="editD")
    {
        element.classList.remove("editD");
    }
  });
}
else
{
  const classT = this.props.properties.type+"D"
element.classList.add(classT);

if (this.props.properties.value === '=')
{
  element.classList.add("resultD");
  element.classList.forEach(theme =>{
    if (theme==="resultL")
    {
        element.classList.remove("resultL");
    }
  });
}
if (this.props.properties.value === '%')
{
  element.classList.add("pourD");
  element.classList.forEach(theme =>{
    if (theme==="pourL")
    {
        element.classList.remove("pourL");
    }
  });
}
element.classList.forEach(theme =>{
  if (theme==="numberL")
  {
      element.classList.remove("numberL");
  }
  else if (theme==="operatorL")
  {
      element.classList.remove("operatorL");
  }
  else if (theme==="editL")
  {
      element.classList.remove("editL");
  }
});
}
if (this.props.properties.spaceAmount!==1)
{
  element.classList.add("bt");
}
element.addEventListener('click',  this.props.clickB);
}
componentDidUpdate ()
{
    const element =document.querySelectorAll(".button")[this.props.properties.id-1];
  if (this.props.mode==="Light")
  {
      const classT = this.props.properties.type+"L"
    element.classList.add(classT);

    if (this.props.properties.value === '=')
    {
      element.classList.add("resultL");
      element.classList.forEach(theme =>{
        if (theme==="resultD")
        {
            element.classList.remove("resultD");
        }
      });
    }
    if (this.props.properties.value === '%')
    {
      element.classList.add("pourL");
      element.classList.forEach(theme =>{
        if (theme==="pourD")
        {
            element.classList.remove("pourD");
        }
      });
    }

    element.classList.forEach(theme =>{
     if (theme==="numberD")
      {
          element.classList.remove("numberD");
      }
      else if (theme==="operatorD")
      {
          element.classList.remove("operatorD");
      }
      else if (theme==="editD")
      {
          element.classList.remove("editD");
      }
    });
  }
  else
  {
    const classT = this.props.properties.type+"D"
  element.classList.add(classT);

  if (this.props.properties.value === '=')
  {
    element.classList.add("resultD");
    element.classList.forEach(theme =>{
      if (theme==="resultL")
      {
          element.classList.remove("resultL");
      }
    });
  }
  if (this.props.properties.value === '%')
  {
    element.classList.add("pourD");
    element.classList.forEach(theme =>{
      if (theme==="pourL")
      {
          element.classList.remove("pourL");
      }
    });
  }
  element.classList.forEach(theme =>{
    if (theme==="numberL")
    {
        element.classList.remove("numberL");
    }
    else if (theme==="operatorL")
    {
        element.classList.remove("operatorL");
    }
    else if (theme==="editL")
    {
        element.classList.remove("editL");
    }
  });
}
  if (this.props.properties.spaceAmount!==1)
  {
    element.classList.add("bt");
  }
}

render ()
{
  const value = this.props.properties.value;
   return(
      <div className="button">
      {value}
      </div>

  );}

}
export default Button;
