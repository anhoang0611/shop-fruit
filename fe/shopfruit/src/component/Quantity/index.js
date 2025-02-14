import { formatter } from '../../utils/formatter';
import { AiOutlineEye, AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './style.scss';
import { generatePath } from 'react-router-dom';
import { ROUTERS } from '../../utils/router';


const Quantity = ({ hasAddToCart = true }) => {
    return (
        <div className='quantity-container'>
            <div className='quantity'>
                <span className='quantity-btn'>-</span>
                <input type='number' defaultValue={1} />
                <span className='quantity-btn'>+</span>

            </div>
            {
                hasAddToCart && (
                    <button type='submit' className='button-submit'>Thêm vào giỏ hàng</button>
                )
            }
        </div>

    )
}

export default Quantity;
