// class Rectangle {
//     constructor(width, height, color) {
//         this.width = width;
//         this.height = height;
//         this.color = color;
//     }

//     area() {
//         const area = this.width * this.height;
//         return area; 
//     }

//     paint() {
//         console.log(`Painting with color ${this.color}`);
//     }
// }

// const rect = new Rectangle(2, 4)
// const area = rect.area();
// console.log(area)




// const map = new Map();
// map.set('name', 'Harkirat');
// map.set('age', 30);
// console.log(map.get('name'));




//returns an object of the promise class
// function setTimeoutPromisified(ms){
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// function callback() {
//     console.log("3 seconds have passed");
// }

// setTimeoutPromisified(3000).then(callback)


function waitFor3S(resolve) {
    setTimeout(resolve, 3000)
}

function main() {
    console.log("main is called");
}

waitFor3S(main);