'use strict'

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели', '');
        while(personalMovieDB.count === '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели', '');
        }
    },
    showMyDB: function () {
    if (!personalMovieDB.privat) {
        console.log(personalMovieDB)
    }
},
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимы жанр под номером ${i}`);
            if (genre === '' || genre === null) {
                console.log('Вы ввели некорректные данные или не ввели их вообще');
                i--;
            }
            {personalMovieDB.genres[i - 1] = genre;}
        }
        personalMovieDB.genres.forEach((item, i) => console.log(`Любимый жанр ${i+1} - это ${item}`));
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько вы оцените его?', '');
            if (a != null && b != null && a !== '' && b !== '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('DOne');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('просмотрено мало фильмов')
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классный зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман!')
        } else {
            console.log('Ошибка')
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        }  {
            personalMovieDB.privat = true;
        }
    }
};





// 'use strict';

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function () {
//         console.log('Test');
//     }
// };
//
// const {border, bg} = options.colors;

// const arr = [1, 2, 3, 6, 8];
//
// arr.forEach(function (item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });



// const newArr = arr.reduce((acc, el) => acc + el, 0)
// console.log(newArr);


// const newStr = 'Hello';
//
// for (let letter of newStr) {
//     console.log(letter)
// }
//
// const hello = newStr.split('');
// console.log(hello)

// const newArr = ['h', 'e', 'l', 'l', 'o'];
//
// const newString = newArr.join('');
// console.log(newString)
// console.log(typeof newString)

// const arr = [2, 13, 26, 8 , 10];
//
// // console.log(arr.sort((a, b) => a - b))
// const newArr = arr.sort((a, b) => b - a);
// console.log(newArr);
//
// console.log(arr);

// let a = 5,
//     b = a;
//
// b = b + 5;
// console.log(b);
// console.log(a);
//
// const obj = {
//     a: 5,
//     b: 1
// };
//
// const copy = obj;
//
// copy.a = 10;
// console.log(copy);
// console.log(obj);

// function copy (mainObj) {
//     let objCopy = {};
//     for( let key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }
//
// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);
// newNumbers.a = 10;
// console.log(newNumbers);
// console.log(numbers);

// const newObj  = {...numbers};
// newObj.c.y = 10;
// console.log(newObj);
// console.log(numbers);


// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();
//
// newArray[1] = 'skdjfhskdfh';
// console.log(newArray);
// console.log(oldArray);
//
// const video = ['youtube', 'vimeo', 'rutube'];
// const blogs = ['wordpress', 'livejournal', 'blogger'];
//
// const internet = [...video, ...blogs, 'vk', 'facebook'];
// console.log(internet);
//
// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
//
// const num =[2, 5, 7];
//
// log(...num);


// const newObj = {
//     x: {
//         one: 1,
//         two: 2
//     },
//     y: {
//         three: 3,
//         four: 4
//     }
// };
//
// const copyOfObj = JSON.parse(JSON.stringify(newObj));
//
// copyOfObj.x.one = 20;
// console.log(copyOfObj);
// console.log(newObj);

// let str = 'some';
// let strObj = new String(str);
//
// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1, 2, 3]);
//
// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function () {
//         console.log('Hello');
//     }
// };
//
// const john = Object.create(soldier);
//
// // const john = {
// //     health: 100
// // };
//
// // john.__proto__ = soldier;
//
// // Object.setPrototypeOf(john, soldier);
//
// john.sayHello();