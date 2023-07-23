const productImages = {

    // //WOMEN

    'Sweatpants': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQszDtVyAQozqliKHam7HfBMMxJINagq0Exyg&usqp=CAU',
  
    'Leather Pants': 'https://pictures-kenya.jijistatic.com/40196155_NjIwLTkzMC0zZGRkZWNmYTE4LTE.webp',

    'Jumpsuit': 'https://lulabridal.com/cdn/shop/files/kamora-jumpsuit-burgundy-custom-size-wedding-273.webp',

    'Evening Gown': 'https://i.etsystatic.com/36443295/r/il/23eb0a/4955098877/il_fullxfull.4955098877_9iq0.jpg',
 
    'Ankle Boots': 'https://images.yaoota.com/o8HKtU1MKHSqLYOhpGaHN6FykUY=/trim/fit-in/500x500/filters:quality(80)/yaootaweb-production-ke/media/crawledproductimages/681a9552345d6bcd8351cd9f4483655937abca69.jpg',

    'High Heel Sandals': 'https://images.bewakoof.com/utter/content/2899/content_1.jpg',
 
    'Tote Bag': 'https://m.media-amazon.com/images/I/71Y-HIaFEWL._AC_UY1000_.jpg',

    'Clutch': 'https://m.media-amazon.com/images/I/910VXNiPx6L.jpg',


    // //MEN
    'Leather Jacket':'https://www.mrporter.com/cms/ycm/resource/blob/1412138/91edd48ea6b18b893a35654bc579d6a5/image-mobile-data.jpg',
    
    'Sneakers': 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/20/7902031/1.jpg',

    'Wristwatch': 'https://media.neimanmarcus.com/f_auto,q_auto:low,ar_4:5,c_fill,dpr_2.0,w_456/01/nm_4372084_100000_m',

    'Dress Shirt':'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/71/222537/1.jpg',

    'Chinos':'https://i.pinimg.com/originals/72/02/0b/72020be88d879770cc2da653a3053f25.jpg',

    'Hoodie':'https://ke.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/20/639892/1.jpg',

    'Loafers': 'https://images.bewakoof.com/utter/content/2830/content_blue_loafers_for_men_fashion_2018.jpg',

    'Polo Shirt': 'https://hips.hearstapps.com/hmg-prod/images/hlh110122lifestyle003-1664380770.jpg',

    // //KIDS FASHION
    'Romper':'https://asherkids.co.ke/wp-content/uploads/2020/09/warm-romper.jpeg',

    'T-shirt': 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/99/7968111/1.jpg',

    'Jeans': 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/32/846103/1.jpg',

    'Dress': 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/37/834052/1.jpg',

    'Polo-Shirt': 'https://www.rlmedia.io/is/image/PoloGSI/s7-1264387_lifestyle?$plpDeskRF$',

    'Onesies': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShMmVeG-W6TmRSFbo5MOqZIXiyLC_QcZTlPw&usqp=CAU',

    'Sweater': 'https://5.imimg.com/data5/DT/BK/WM/SELLER-64329850/kids-girls-sweater-500x500.jpg',

    'Skirt': 'https://ke.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/63/586465/1.jpg?9630',

};

export default function getProductImage(productName) {
    return productImages[productName];
}