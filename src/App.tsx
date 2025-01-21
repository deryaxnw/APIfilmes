import List from './components/MovieList/List'
import Navbar from './components/Navbar/Navbar'
import { StorageContext } from './service/StorageContext'

function App() {


  return (
    <>
    <Navbar/>

    <StorageContext>
      <List/>
    </StorageContext>
    </>
  )
}

export default App
