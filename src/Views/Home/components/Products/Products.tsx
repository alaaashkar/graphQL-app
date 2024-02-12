import { useSelector } from 'react-redux';
import './Products.scss'
import { RootState } from '../../../../Store/Store';
import { Link } from 'react-router-dom';


export const Products = () => {
  const filteredProducts = useSelector((state: RootState) => state.products.filteredProducts);


  return (
    <div className='products'>
      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>
            <div className='first'>
              <Link to={`/products/${product.id}`}>
                <img src={product.image} alt={product.title} />
              </Link>
            </div>


            <div className='second'>
              <p>{product.title}</p>
              <p>{product.price}$</p>
            </div>

          </li>
        ))}
      </ul>
    </div >
  );
};
