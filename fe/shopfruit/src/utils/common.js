//featured products images
import thitbo from '../assets/users/images/features/thit-bo.jpg';
import chuoi from '../assets/users/images/features/chuoi.jpg';
import duahau from '../assets/users/images/features/dua-hau.jpg';
import khoaitay from '../assets/users/images/features/khoai-tay.jpg';
import oi from '../assets/users/images/features/oi.jpg';
export const featuredProducts = {
    all: {
        title: 'Toàn bộ',
        products: [
            {
                img: thitbo,
                name: 'Thịt bò nạc',
                price: 20000,
            },
            {
                img: chuoi,
                name: 'Chuối',
                price: 14000,
            },
            {
                img: duahau,
                name: 'Dưa hấu',
                price: 70000,
            }, {

                img: khoaitay,
                name: 'Khoai tây',
                price: 16000,
            },

            {
                img: oi,
                name: 'Ổi',
                price: 12000,
            }

        ]
    },
    freshMeat: {
        title: 'Thịt tươi',
        products: [
            {
                img: thitbo,
                name: 'Thịt bò nạc',
                price: 20000,
            }

        ]
    },
    fruits: {
        title: 'Trái cây',
        products: [
            {
                img: chuoi,
                name: 'Chuối',
                price: 14000,
            },
            {
                img: duahau,
                name: 'Dưa hấu',
                price: 70000,
            },

            {
                img: oi,
                name: 'Ổi',
                price: 12000,
            }
        ]
    },
    fastFood: {
        title: 'Thức ăn nhanh',
        products: [
            {

                img: khoaitay,
                name: 'Khoai tây',
                price: 16000,
            },
        ]
    }

};