import { Routes, Route, useLocation } from "react-router-dom";


//router
import Homepages from "./pages/users/homePage";
import ProfilePage from "./pages/users/profilePage";
import ShoppingCartPage from "./pages/users/shoppingCartPage";
import CheckoutPage from "./pages/users/checkoutPage";

import { ROUTERS, ADMIN_PATH } from "./utils/router";
import LoginAdPage from "./pages/admins/loginPage";

//theme
import MasterLayout from "./pages/users/theme/layout";
import ProductPage from "./pages/users/productPage";
import ProductPageDetail from "./pages/users/productPageDetail";

import MasterAdLayout from "./pages/admins/theme/masterAdLayout";

const renderUserRoutes = () => {
    const userRoutes = [
        {
            path: ROUTERS.USER.HOME,
            component: <Homepages />
        },
        {
            path: ROUTERS.USER.PROFILE,
            component: <ProfilePage />
        },
        {
            path: ROUTERS.USER.PRODUCTS,
            component: <ProductPage />
        },
        {
            path: ROUTERS.USER.PRODUCT,
            component: <ProductPageDetail />
        },
        {
            path: ROUTERS.USER.SHOPPING_CART,
            component: <ShoppingCartPage />
        },
        {
            path: ROUTERS.USER.CHECKOUT,
            component: <CheckoutPage />
        }

    ]

    const adminRoutes = [
        {
            path: ROUTERS.ADMIN.LOGIN,
            component: <LoginAdPage />
        }
    ]

    return (
        <MasterLayout>
            <Routes>
                {
                    userRoutes.map((item, key) => (
                        <Route key={key} path={item.path} element={item.component} />
                    ))
                }
            </Routes>
        </MasterLayout>
    )
}

const renderAdminRoutes = () => {
    const adminRoutes = [
        {
            path: ROUTERS.ADMIN.LOGIN,
            component: <LoginAdPage />
        }
    ]


    return (
        <MasterAdLayout>
            <Routes>
                {
                    adminRoutes.map((item, key) => (
                        <Route key={key} path={item.path} element={item.component} />
                    ))
                }
            </Routes>
        </MasterAdLayout>
    )
}

const RouterCustom = () => {
    const location = useLocation();
    const isAdminRouters = location.pathname.startsWith(ADMIN_PATH)

    return isAdminRouters ? renderAdminRoutes() : renderUserRoutes();
};

export default RouterCustom;