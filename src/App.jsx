import Weather from './component/Weather'
import './App.css'
import GithubSearch from './component/GithubSearch'

function App() {

  return (
   <>
   <div className='grid grid-cols-2'>
   <Weather/>
   <GithubSearch/>

   </div>
   </>
  )
}

export default App
