export const ADMIN_PATH = "/quan-tri";

export const ROUTERS = {
  USER: {
    HOME: "/",
    PROFILE: "/profile",
    PRODUCTS: "/san-pham",
    PRODUCT: "/san-pham/chi-tiet/:id",
    SHOPPING_CART: "/gio-hang",
    CHECKOUT: "/thanh-toan",
  },
  ADMIN: {
    LOGIN: `${ADMIN_PATH}/dang-nhap`,
    ORDER: `${ADMIN_PATH}/dat-hang`,
  },
};
