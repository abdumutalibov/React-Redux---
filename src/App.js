import { useSelector } from 'react-redux';

import './App.css'
import Likes from './Likes'
import Comments from './Comments'
import Title from './Title'
import Spin from './Spin'
function App() {
  const error = useSelector(state => state.appReducer.error);
console.log('error >>> ',error);
  return (
    <div className='App'>
      <div className='wrap'>
   <Spin/>
        <div className='card'>
          {error && (
            <div className='error-message'>
              {error}
            </div>
          )}
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