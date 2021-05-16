import bcrypt from 'bcryptjs';
const data = {  
    users: [
        {
          name: 'Nagendranath',
          email: 'nagendranathyr@gmail.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: true,
        },
        {
          name: 'RNS',
          email: 'user@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: false,
        },
      ],
    products: [ 
        {
            name: 'Nike Slim Shirt',
            category: 'Shirts',
            image: '/images/p1.jpg',
            price: 1200,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product'
        },
        {
            name: 'Adidas Fit Shirt',
            category: 'Shirts',
            image: '/images/p2.jpg',
            price: 1000,
            countInStock: 10,
            brand: 'Adidas',
            rating: 4,
            numReviews: 10,
            description: 'high quality product'
        },
        {
            name: 'US POLO ASSN Free Shirt',
            category: 'Shirts',
            image: '/images/p3.jpg',
            price: 2200,
            countInStock: 10,
            brand: 'US POLO ASSN',
            rating: 4.8,
            numReviews: 12,
            description: 'high quality product'
        },
        {
            name: 'Nike Slim Pant',
            category: 'Pants',
            image: '/images/p4.jpg',
            price: 1300,
            countInStock: 10,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 14,
            description: 'high quality product'
        },
        {
            name: 'Cherokee Slim Pant',
            category: 'Pants',
            image: '/images/p5.jpg',
            price: 900,
            countInStock: 10,
            brand: 'Cherokee',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality product'
        },
        {
            name: 'Adidas Fit Pant',
            category: 'Pants',
            image: '/images/p6.jpg',
            price: 1500,
            countInStock: 0,
            brand: 'Adidas',
            rating: 4.9,
            numReviews: 18,
            description: 'high quality product'
        }
    ]
}

export default data;