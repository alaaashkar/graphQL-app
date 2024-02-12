import { useSelector } from 'react-redux';
import './Products.scss'
import { useParams } from 'react-router';
import { RootState } from '../../Store/Store';

export const Products = () => {
  const { productId } = useParams()

  const products = useSelector((state: RootState) => state.products.products)

  const foundProduct = products.find(product => product.id === Number(productId))


  return (
    <div className='products-page'>
      <div className='left-side'>
        <img src={foundProduct?.image} alt="" />
      </div>

      <div className='right-side'>
        <h1>{foundProduct?.title}</h1>
      </div>

    </div>
  )

};
