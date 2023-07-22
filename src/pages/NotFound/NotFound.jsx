import {Link} from 'react-router-dom'
import './notfound.css'
import {FaHome} from 'react-icons/fa'
const NotFound = () => {
  return (
    <div className="not-found">
        <h2>404</h2>
        <p>Page not found</p>
    <Link to='/' className='btn'>
Go back <FaHome style={{'verticalAlign':'middle', 'fontSize': '2rem'}} />
    </Link>
    </div>
  )
}

export default NotFound