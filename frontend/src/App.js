import './App.css';
import React, {useState, useEffect} from 'react';
import ReactPlayer from 'react-player';


function App() {
  const [data, setData] = useState([{}])
  useEffect(() => {
    fetch("/link").then(
      res => res.json()
    ).then(
      data => {
        setData(data)
        console.log(data)
      }
    )
  }, []);
 
  return (
    
    <div className='App'>
      <ReactPlayer 
      width='480px'
      height = '240px'
      controls 
      url= {data.link[0]}
      onReady = {() => console.log('onReady callback')}
      onStart = {() => console.log('onStart callback')}
      onPause = {() => console.log('onPause callback')}
      onEnded = {() => console.log('onEnded callback')}
      onError = {() => console.log('onError callback')}
      />
      <ReactPlayer 
      width='480px'
      height = '240px'
      controls 
      url= {data.link[1]}
      onReady = {() => console.log('onReady callback')}
      onStart = {() => console.log('onStart callback')}
      onPause = {() => console.log('onPause callback')}
      onEnded = {() => console.log('onEnded callback')}
      onError = {() => console.log('onError callback')}
      />
    </div>
    
   
  );
}
export default App;
