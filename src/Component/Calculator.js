import React, {useState,useEffect} from 'react';
import './Calculator.css';
import Screen from './Screen';
import Button from './Button';
import {ButtonList} from './Buttons';
import './Screen.css';
function Calculator (props)
{
  let res = 0;
  let [state,setState]=useState({pressed : [] ,formula: [], result:0,mode:props.calcMode});

  function evaluat (formula)
  {
    let form = formula.join("").replace("%","/100");
    return Function('"use strict";return (' + form + ')')();
  }

 function onButtonClick (event)
    {
      let press = Array.from(state.pressed);
      let form = Array.from(state.formula);
      let bt = ButtonList.find((item) => {
          return item.value===event.target.textContent;
      });
      if ((press.length===0)&&(state.result!==0))
      {
        form.push(state.result);
        press.push ({
          id : 20,
          type : 'number',
          value : state.result,
          spaceAmount :1
        })
      }

      switch (bt.value)
      {
        case "CE":
          if (press.length>0)
          {
            press.pop();
            form.pop();
          }
          if (press.length===0)
          {
            press=[];
            form =[];
            res=0;
          }
          break;
        case "C":
          press=[];
          form =[];
          res=0;
          break;
        case "=":
          if(press.length>0)
            {

                if((press[press.length-1].type==="operator")&&(press[press.length-1].value!=="%"))
              {
                if (press[press.length-1].value==="/")
                {
                  alert("SyntaxError");
                  res=0;
                  press=[];
                  form=[];
                  break;
                }
                else
                {
                  press.push('0');
                  form.push('0');
              }
              }
              res = evaluat(form);
              press = [];
              form =[];
          }
          else
          {
            res = 0;
            press = [];
              form =[];
          }
          break;
        default :
          let inf =0;
          if((press.length===0)&&(bt.type==="operator"))
          {
            press.push('0');
            form.push('0');
          }
          if(press.length>0)
            {
              if((press[press.length-1].type==="operator")&&(bt.type==="operator"))
              {
                if (press[press.length-1].value==="/")
                {
                  alert("Can't devide by 0");
                  inf=1;
                }
                else if (press[press.length-1].value==="%")
                {

                }
                else
                {
                  press.push('0');
                  form.push('0');
                }
              }
              else if ((press[press.length-1].value==="/")&&(bt.value==="0"))
              {
                alert("Can't devide by 0");
                inf=1;
              }
              if((press[press.length-1].value==="%")&&(bt.type==="number"))
              {
                press.push('*');
                form.push('*');
              }
          }
          if (inf===0)
            {
              press.push(bt);
              form.push(bt.value);
          }
          else
          {
            res=0;
            form = [];
            press = [];
          }

            break;
      }


      state.pressed=Array.from(press);
      state.formula=Array.from(form);
     state.result=res;
    setState({pressed:Array.from(press) ,formula:Array.from(form) ,result:res,mode:props.calcMode});
    }


useEffect(()=>{
  console.log("sup bish");
  if(props.calcMode==="Light")
  {
    document.querySelector(".calculator").classList.add("calcL");
    document.querySelector(".calculator").classList.forEach(theme =>{
      if (theme==="calcD")
      {
          document.querySelector(".calculator").classList.remove("calcD");
      }
    });
  }
  else
  {
    document.querySelector(".calculator").classList.add("calcD");
    document.querySelector(".calculator").classList.forEach(theme =>{
      if (theme==="calcL")
      {
          document.querySelector(".calculator").classList.remove("calcL");
      }
    });
  }
});
  return(
      <div className="calculator calcL">
        <Screen formul={state.formula} res={state.result} mode={props.calcMode}/>
        <div className="calcBody">
        {
          ButtonList.map(button =>{
            return(<Button key={button.id} properties={button} clickB={onButtonClick} mode={props.calcMode}/>)
          })
        }
        </div>
      </div>
  );
}
export default Calculator;
