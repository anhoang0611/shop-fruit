import './style.scss';
import {memo} from 'react';


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

export default memo(Quantity);
