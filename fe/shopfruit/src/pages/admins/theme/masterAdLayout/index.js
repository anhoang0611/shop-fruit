import React, { memo } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../../../common/footer';
import { ROUTERS } from '../../../../utils/router';

const MasterAdLayout = ({ children, ...props }) => {
    const location = useLocation();
    const isLoginPage = location.pathname.startsWith(ROUTERS.ADMIN.LOGIN)
    return (
        <div {...props}>
            {children}
            {!isLoginPage && <Footer />}
        </div>
    )
}

export default memo(MasterAdLayout);
