import { Link, useLocation, useParams } from 'react-router-dom';
import './Navbar.scss'
import { useDispatch } from 'react-redux';
import { filterProductsByParam } from '../../Store/Slices/ProductsSlice';

export const Navbar = () => {
  const dispatch = useDispatch()

  // const location = useLocation()
  // const path = location.pathname;

  // const onMalePage = path === '/products/man'
  // const onFemalePage = path === '/products/woman'

  return (
    <ul className='navbar'>
      <div>
        <li>
          <Link
            to='/products/man'
            className='navbar'
            onClick={() => dispatch(filterProductsByParam('man'))}
          >
            Man
          </Link>
        </li>

        <li>
          <Link
            to='/products/woman'
            className='navbar'
            onClick={() => dispatch(filterProductsByParam('woman'))}

          >
            Woman
          </Link>
        </li>
      </div>

    </ul>

  )
};
