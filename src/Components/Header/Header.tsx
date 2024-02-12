import logo from '../../Assets/logo-shopify.jpg'
import './Header.scss'
import { faSearch, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { ChangeEvent, useEffect, useState } from 'react';
import { filterProductsByParam, filterProductsBySearch } from '../../Store/Slices/ProductsSlice';
import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';
import { Link } from 'react-router-dom';


export const Header = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  const [search, setSearch] = useState("");
  const dispatch = useDispatch()

  dispatch(filterProductsBySearch(search))

  useEffect(() => {
    if (window.innerWidth > 1200) {
      setIsMenuClicked(false);
    };

    const handleResize = () => {
      if (window.innerWidth > 1200) {
        setIsMenuClicked(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const debouncedSearch = debounce((e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
  }, 500)

  console.log(search);



  return (
    <header>
      <div>
        <Link
          onClick={() => dispatch(filterProductsByParam(''))}
          to='/'>
          <img className='logo' src={logo} alt="logo" />
        </Link>

      </div>

      <div className='searchbar-container'>
        <input
          type="search"
          onChange={debouncedSearch}
          placeholder='Search...' />

        <FontAwesomeIcon className='search-icon' icon={faSearch} />
      </div>

      {isMenuClicked ? (
        <FontAwesomeIcon
          icon={faXmark}
          onClick={() => setIsMenuClicked(prev => !prev)}
          className='menu-icon'
        />

      ) : (
        <FontAwesomeIcon
          onClick={() => setIsMenuClicked(prev => !prev)}
          className='menu-icon'
          icon={faBars} />

      )}

      {isMenuClicked && (
        <div className='menu-toggle'>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className='searchbar-container mobile'>
              <input
                type="search"
                onChange={e => setSearch(e.target.value)}
                placeholder='Search...' />

              <FontAwesomeIcon className='search-icon' icon={faSearch} />
            </div>
          </div>
        </div>
      )}

    </header>
  )
};
