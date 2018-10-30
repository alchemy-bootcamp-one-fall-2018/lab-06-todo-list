let task = [
    {
        name: 'Apple',
        color: 'red',
        image: 'apple.png'
    },
    {
        name: 'Banana',
        color: 'yellow',
        image: 'banana.png'
    }
];

function saveFruits() {
    localStorage.setItem('fruits', JSON.stringify(fruits));
}

const fruitsApi = {
    getAll() {
        const json = localStorage.getItem('fruits');
        if(json) {
            fruits = JSON.parse(json);
        }
        return fruits;
    },
    add(fruit) {
        // 1. add to our array
        fruits.push(fruit);
        // 2. save array to localStorage
        saveFruits();
    },
    remove(fruit) {
        const index = fruits.indexOf(fruit);
        if(index !== -1) {
            fruits.splice(index, 1);
            saveFruits();
        }
    }
};

export default fruitsApi;