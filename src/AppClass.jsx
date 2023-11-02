import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component{
  
  imageData = ()=>{
    let data = [
      {
        id:1,
        img:elephant
      },
      {
        id:2,
        img:elephant
      },
      {
        id:3,
        img:elephant
      },
      {
        id:4,
        img:elephant
      }
    ]
    return data;
  }

  // code here
  render(){
  const imageDataArr =  this.imageData();
    return(
      <>
        <div>
          {imageDataArr.map((item)=>{
            return <img key={item.id} src={item.img} alt={item.id} />
          })}
          </div>
      </>
    )
  }
}
