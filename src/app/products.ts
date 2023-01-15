export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
  }
  
  export const products = [
    {
      id: 1,
      name: 'Blue Eyes Dragon Egg',
      price: 799,
      description: 'A legendary dragon that takes pride in its enormous power.'
    },
    {
      id: 2,
      name: 'Drogon Dragon Egg',
      price: 699,
      description: 'Drogon is one of the three dragons born in the wastelands beyond Lhazar, along with his brothers Rhaegal and Viserion'
    },
    {
      id: 3,
      name: 'Smaug Dragon Egg',
      price: 299,
      description: 'Smaug, considered the last “great” dragon to exist in Middle-earth, is a fire drake (another term for fire-breathing dragon.)'
    }
  ];
  
  