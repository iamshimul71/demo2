import logo from './logo.svg';
import './App.css';
import ReactPlayer from 'react-player';

function App() {
  const on = { played: 0.12, playedSeconds: 11.3, loaded: 0.34, loadedSeconds: 16.7 }
  return (
    <div  className="App">

      
      
     <div >
     <ReactPlayer onProgress={on} controls url='https://www.youtube.com/watch?v=ysz5S6PUM-U'></ReactPlayer>
     </div>
     <h1 >Demo Test My Freelance Project</h1><br /><br />
    </div>
  );
}

export default App;
