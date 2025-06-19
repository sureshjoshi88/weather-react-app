import Weather from './component/Weather'
import './App.css'
import GithubSearch from './component/GithubSearch'

function App() {

  return (
   <>
   <div className='grid grid-cols-2 gap-2 p-1'>
   <Weather/>
   <GithubSearch/>

   </div>
   </>
  )
}

export default App
