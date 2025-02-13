import { formatter } from '../../utils/formatter';
import { AiOutlineEye, AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './style.scss';
import { generatePath } from 'react-router-dom';
import { ROUTERS } from '../../utils/router';


import thitbo from '../../assets/users/images/features/thit-bo.jpg';
import chuoi from '../../assets/users/images/features/chuoi.jpg';
import duahau from '../../assets/users/images/features/dua-hau.jpg';
import khoaitay from '../../assets/users/images/features/khoai-tay.jpg';
import oi from '../../assets/users/images/features/oi.jpg';

const ProductCard = ({ img, name, price }) => {
    return (
        <>

            <div className='featured-item'>
                <div className='featured-item-img' style={{ backgroundImage: `url(${img})` }}>
                    <ul className='featured-item-img-hover'>
                        <li>
                            <AiOutlineEye />
                        </li>
                        <li>
                            <AiOutlineShoppingCart />
                        </li>
                    </ul>

                </div>

                <div className='featured-item-text'>
                    <h6>
                        <Link to={generatePath(ROUTERS.USER.PRODUCT, { id: 1 })}>{name}</Link>
                    </h6>
                    <h5>{formatter(price)}</h5>
                </div>


            </div>

        </>

    )
}

export default ProductCard;
