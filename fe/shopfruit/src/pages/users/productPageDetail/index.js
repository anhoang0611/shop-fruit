import React from 'react';
import Breadcrumb from '../theme/breadcrumb';
import "./style.scss";

const ProductPageDetail = () => {

    return (
        <>
            <Breadcrumb name='Chi tiết sản phẩm' />
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-6'>
                        Hình Ảnh
                    </div>


                    <div className='col-lg-6'>
                        <div className='row'>
                            Chi tiết sản phẩm
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductPageDetail;
