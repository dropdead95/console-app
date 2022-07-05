const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько вы оцените его?', '');
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('DOne');
    } else {
        console.log('error');
        i--;
    }
}



if (personalMovieDB.count < 10) {
    console.log('просмотрено мало фильмов')
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классный зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман!')
} else {
    console.log('Ошибка')
}

console.log(personalMovieDB);

