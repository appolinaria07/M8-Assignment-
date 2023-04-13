//STEP 1
// let favorite_movies = ['Lord of the Rings', 'Terminal', 'The Pursuit of Happines', 'Life is Beautiful', 'Star Wars']
// console.log(favorite_movies[1])

//STEP 2
// let movies = new Array(5)
// movies[0] = 'Lord of the Rings'
// movies[1] = 'Terminal'
// movies[2] = 'The Pursuit of Happines'
// movies[3] = 'Life is Beautiful'
// movies[4] = 'Star Wars'
// console.log(movies[0])

//STEP 3 
// let movies = new Array(5)
// movies[0] = 'Lord of the Rings'
// movies[1] = 'Terminal'
// movies[2] = 'The Pursuit of Happines'
// movies[3] = 'Life is Beautiful'
// movies[4] = 'Star Wars'

// movies.splice(2,0, 'Missisipi is Burning')
// console.log(movies.length)

//STEP 4
// let movies = []
// movies[0] = 'Lord of the Rings'
// movies[1] = 'Terminal'
// movies[2] = 'The Pursuit of Happines'
// movies[3] = 'Life is Beautiful'
// movies[4] = 'Star Wars'
// delete movies[0]
// console.log(movies)

//STEP 5
// let movies = []
// movies[0] = 'Lord of the Rings'
// movies[1] = 'Terminal'
// movies[2] = 'The Pursuit of Happines'
// movies[3] = 'Life is Beautiful'
// movies[4] = 'Star Wars'
// movies[5] = 'Missisipi Burning'
// movies[6] = 'The Last Samurai'
// for (let i in movies) {
//     console.log(movies[i])
// }

//STEP 6
// let movies = []
// movies[0] = 'Lord of the Rings'
// movies[1] = 'Terminal'
// movies[2] = 'The Pursuit of Happines'
// movies[3] = 'Life is Beautiful'
// movies[4] = 'Star Wars'
// movies[5] = 'Missisipi Burning'
// movies[6] = 'The Last Samurai'
// for (let movie of movies){
//     console.log(movie)
// }

//STEP 7
// let movies = []
// movies[0] = 'Lord of the Rings'
// movies[1] = 'Terminal'
// movies[2] = 'The Pursuit of Happines'
// movies[3] = 'Life is Beautiful'
// movies[4] = 'Star Wars'
// movies[5] = 'Missisipi Burning'
// movies[6] = 'The Last Samurai'
// movies.sort()
// for (let movie of movies){
//     console.log(movie)
// }

//STEP 8
// let movies = []
// movies[0] = 'Lord of the Rings'
// movies[1] = 'Terminal'
// movies[2] = 'The Pursuit of Happines'
// movies[3] = 'Life is Beautiful'
// movies[4] = 'Star Wars'
// movies[5] = 'Missisipi Burning'
// movies[6] = 'The Last Samurai'

// let leastFavMovies = ['I See You', 'Taxi', 'Spartacus']

// console.log('Movies I like:\n\n')
// for (let movie of movies) {
//     console.log(movie)
// }
// console.log('\n\n')
// console.log('Movies I regret watching: \n\n')
// for (let movie of leastFavMovies) {
//     console.log(movie)
// }

//STEP 9
// let favMovies = []
// favMovies[0] = 'Lord of the Rings'
// favMovies[1] = 'Terminal'
// favMovies[2] = 'The Pursuit of Happines'
// favMovies[3] = 'Life is Beautiful'
// favMovies[4] = 'Star Wars'
// favMovies[5] = 'Missisipi Burning'
// favMovies[6] = 'The Last Samurai'

// let leastFavMovies = ['I See You', 'Taxi', 'Spartacus']
// let movies = favMovies.concat(leastFavMovies)
// console.log(movies.sort().reverse())

//STEP 10
// let favMovies = []
// favMovies[0] = 'Lord of the Rings'
// favMovies[1] = 'Terminal'
// favMovies[2] = 'The Pursuit of Happines'
// favMovies[3] = 'Life is Beautiful'
// favMovies[4] = 'Star Wars'
// favMovies[5] = 'Missisipi Burning'
// favMovies[6] = 'The Last Samurai'

// let leastFavMovies = ['I See You', 'Taxi', 'Spartacus']
// let movies = favMovies.concat(leastFavMovies)
// console.log(movies.pop())

//STEP 11
// let favMovies = []
// favMovies[0] = 'Lord of the Rings'
// favMovies[1] = 'Terminal'
// favMovies[2] = 'The Pursuit of Happines'
// favMovies[3] = 'Life is Beautiful'
// favMovies[4] = 'Star Wars'
// favMovies[5] = 'Missisipi Burning'
// favMovies[6] = 'The Last Samurai'

// let leastFavMovies = ['I See You', 'Taxi', 'Spartacus']
// let movies = favMovies.concat(leastFavMovies)
// console.log(movies.shift())

//STEP 12
// let movies = ['Lord of the Rings', 'Terminal', 'The Pursuit of Happines', 'Life is Beautiful', 'Star Wars', 'Missisipi Burning', 'The Last Samurai', 'I See You', 'Taxi', 'Spartacus']
// movies[movies.indexOf('Taxi')] = 'Aviator'
// movies[movies.indexOf('Spartacus')] = 'The God Father'
// movies[movies.indexOf('I See You')] = 'Doctor Patch'
// console.log(movies)

//STEP 13
// let movies = [
//                 ['Awakenings', 1],
//                 ['The Lord of the Rings', 2],
//                 ['Doctor Patch', 3],
//                 ['Life is Beautiful', 4],
//                 ['Star Wars', 5]
// ]
// movies.forEach(movie => {
//     let favMovies = movie.filter(item =>{
//         return typeof item === 'string'
//     })
//     console.log(favMovies)
// })

//STEP 14
// let employees = ['Adam Smith', 'Mark Jones', 'Charles Perkins', 'Amanda Rally', 'Jill Schults']
// const showEmployee = function(param) {
//     let emplStr = param.reduce((prev, current) => 
//         prev.toUpperCase() + '\n' + current.toUpperCase(), 'Employees: \n\n'
//     )
//     console.log(emplStr)
// }

// showEmployee(employees)

//STEP 15
// const newArr = [58, '', 'abcd', true, null, false, 0]
// const filterValues = function(paramArr) {
//     let value = paramArr.filter(item => 
//         item !== null && item !== false && item !== '' && item !== 0
//     )
//     console.log(value)
// }
// filterValues(newArr)

//STEP 16
// const newArr = [1, 5, 34, 98, 214, 3, 8, 654]
// const returnRandItem = function(paramArr) {
//     const indx = Math.floor(Math.random() * (paramArr.length) + 0)
//     console.log(paramArr[indx])
// }
// returnRandItem(newArr)

//STEP 17
// const numArr = [1, -5, 34, 98, 97, -4, 3, -8]
// const largeNum = function(paramArr) {
//     paramArr.sort((x,y) => x-y)
//     console.log(paramArr.pop())
// }
// largeNum(numArr)

