import './App.css'
import useFetch from './useFetch'
import fetchData from './FetchData'
import { Suspense } from 'react'

 //  const { data, loading, error, handleRequest } = useFetch("https://jsonplaceholder.typicode.com/users")


  /*
  
      <div className='App'>
        <button onClick={handleRequest}>Cancel</button>
        <div className='card'>
          <ul>
            {error && <li>Error: {error}</li>}
            {loading && <li>Loading...</li>}
            {data?.map((user) => (<li key={user.id}>{user.name}</li>))}
          </ul>
        </div>
      </div>
      */


const apiData = fetchData("https://jsonplaceholder.typicode.com/users")


function App() {
  
  const data = apiData.read()

 
  return (
    <>
      <div className='App'>
        <Suspense fallback={<div>Loading...</div>}>
          <ul className='card'>
            {data?.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        </Suspense>
      </div>
    </>
  )
}

export default App
