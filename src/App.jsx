import './App.css'
import useFetch from './useFetch'

function App() {

  const { data, loading, error, handleRequest } = useFetch("https://jsonplaceholder.typicode.com/users")

  return (
    <>

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

    </>
  )
}

export default App
