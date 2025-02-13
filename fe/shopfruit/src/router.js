import { Routes, Route } from "react-router-dom";

//router
import Homepages from "./pages/users/homePage";
import ProfilePage from "./pages/users/profilePage";
import { ROUTERS } from "./utils/router";

//theme
import MasterLayout from "./pages/users/theme/layout";
import ProductPage from "./pages/users/productPage";
// import ProfilePage from "./pages/users/profilePage";


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
            path: ROUTERS.USER.PRODUCT,
            component: <ProductPage />
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

const RouterCustom = () => {
    return renderUserRoutes();
}

export default RouterCustom;