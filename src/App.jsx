import './App.css';
import elephant from "./images/elephant.jpeg";

const imageData = ()=>{
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

function App() {
  // code here
  const imageDataArr =  imageData();
  return(
    <>
    <div>
      {imageDataArr.map((item)=>{
        return <img key={item.id} src={item.img} alt={item.id}/>
      })}
      </div>
    </>
  )
}

export default App;
