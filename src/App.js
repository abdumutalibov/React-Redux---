import './App.css'
import Likes from './Likes'
import Comments from './Comments'
import Title from './Title'
function App() {

  return (
    <div className='App'>
   
      <div className='wrap'>
        <div className='card'>
          <div className='card-image'>
            <img src='https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/2.jpg'/>
            <Title/>
            <Likes />
          </div>
          <Comments/>
        </div>
      </div>
    </div>
    )
  }
  
  
export default App