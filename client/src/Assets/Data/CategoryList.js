export const categories = [
    {name: 'Vegetables', imageName: 'veg', hasSubCategory: false},
    {name: 'Fruits', imageName: 'fruits', hasSubCategory: false},
    {name: 'Staples', imageName: 'staples', hasSubCategory: true, list: ['Rice', 'Pulses', 'Flours', 'Spices', 'Dry Fruits', 'Salt & Sugar']},
    {name: 'Packaged Food', imageName: 'pack', hasSubCategory: true, list: ['Cereals', 'Noodles & Pasta', 'Chocolates', 'Ready To Cook', 'Jams & Honey', 'Pickles', 'Ketchups & Spreads']},
    {name: 'Snacks', imageName: 'snacks', hasSubCategory: true, list: ['Biscuits', 'Chips & Snacks', 'Tea & Coffee', 'Juices', 'Soft Drinks', 'Squash']},
    {name: 'Dairy', imageName: 'dairy', hasSubCategory: true, list: ['Milk', 'Curd & Yogurt', 'Eggs', 'Paneer & Cheese']}
];