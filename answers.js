/*  Author: C. Tejeda
    Date: 10.27.2023
    Purpose: Week 4/Day3 Lecture - Arrays, Loops, and Conditional Reps
             Learning Objectives: -Practice with Arrays -Practice with Loops -Practice with Conditionals */


/* Review - Part 1: HTML & CSS */
/* HTML Intro (tags, content, attributes, semantic HTML) 
    HTML(Hypertext Markup Language) is the backbone of a web page - browser will read it in a  text file & interpret it
    Tags (<tag>(opening)</tag>(closing)) have content between the tags that serves another function 
        - tells the browser how the page needs to be displayed
        - all html documents must have the <html></html> tags
        - all html documents must have the <body></body> tag
            - this is where the main content of the website will be (i.e., like the body of an emial)
        - disadvantage is the tags are verbose, requiring both an opening and closing tag
    Attributes are what appear w/in the tags
    Semantic html refers to choosing tags, not for how they display but for what function they perform
*/

/* HTML Elements (headers, navigation, lists, sections, etc.) and Media (images, audio, videos)
    <header></header> (header tag) usually the company's logo - the first tag w/in the body - <h1> goes here usually
    <footer></footer> (footer tag) displays at the bottom of the web page - last tag w/in the body 
    <main></main> (main tag) is the main content of the web page - ie, the search engine for google 
        -goes after the header, w/in the body
        -holds content such as <p> tags and <h2>, <a>, etc.
    <nav></nav> (navigation tag) usually seen at the top of the document w/in the <header> tag for the navigation through the website (navigation bar)
        -tells document there's navigation but the links still need put in
        -different from hyperlinks
    <aside></aside> - used for adds a lot - related to the article sometimes
    <article></article> content
    <section></section> is to dileniate sections 
    <div></di> & <span></span> are placeholders of sorts - divs used a lot before HTML 5 
        -span is used for something that needs set apart but not need it's own section
    To include images, audio, & video:
        <img src /> is used to display images - self closing tag
        <audio src></audio> is used to play audio
            -this tag includes a controls attribute
            -includes an autoplay option
        <video></video> is used to display video
            -also includes controls
            -also includes autopay 
*/

/* CSS Intro (including css files in HTML, elements)
    CSS is used to make the website look pretty
    CSS stands for cascading style sheets - defines the style of the website following a set of rules
        -to use CSS, a <head></head> (head tag) is needed w/in the <html> tag but outside the <body> tag
            -this <head> tag is different than the <header> tag
            -contains meta information about the page & is used to tell the browser how to use the document (like instructions)
        <link /> is used to link the html document to the stylesheet - this tag is similar to an anchor tag
    adds style to the html tags using a selector, such as h1 for the h1 tag in the html document
        -a property it can have would be the color attribute to give the property a value - text color 
*/

/* Part II: JavaScript Reps
Write a for loop that will log the numbers 1 through 20.*/ 
// for(let i=1; i<=20; i++){
//     console.log(i)
// }

/*Write a for loop that will log only the even numbers in 0 through 200.*/
// for(let i=0; i<=200; i++){
//     console.log(i++)
// }

/* Fizz Buzz
Write a javascript application that logs all numbers from 1 - 100.
If a number is divisible by 3 log "Fizz" instead of the number.
If a number is divisible by 5 log "Buzz" instead of the number.
If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number. */
// for(let i=1; i<=100; i++){
//     if(i%5==0 && i%3==0)    console.log(i + 'FizzBuzz')
//     else if(i%3==0)  console.log(i + ' Fizz')
//     else if(i%5==0) console.log(i + ' Buzz')
//     else    console.log(i)
// }

/* Wild Wild Life
Use the following arrays to answer the questions below (name,species ,age, hometown): 
You should be modifying the elements by accessing them. It is up to you which methods to use. */
// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

//1. Plantee just had her birthday; change Plantee's array to reflect her being a year older.
// plantee[2] = 5001
// console.log(plantee)

//2. Change Wolfy's hometown from "Yukon Territory" to "Gotham City".
// wolfy[3] = "Gotham City"
// console.log(wolfy)

//3. Give D'Art a second hometown by adding "Hawkins"
// dart.push("Hawkins")
// console.log(dart)

//4. Porgee decides that Wolfy can't be named "Wolfy" anymore. Remove "Wolfy" from the wolfyarray and replace it with "Gameboy".
// wolfy.splice(0, 1, "Gameboy")
// console.log(wolfy)


/* Yell at the Ninja Turtles
Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
Use a for of loop(not a typo - try it out! Try a for ofloop) to call toUpperCase()on each of them and print out the result. */
// const turtles = ['Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']
// for(let x of turtles){
//     console.log(x.toUpperCase())
// }


/* Methods, Revisited - Here is a list of favMovies: */
// const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

// Console log: the index of Titanic
// console.log(favMovies.indexOf("Titanic"))


/* Do the following and console.log the final results (I have included some thought questions, you don't have to write out an answer for those marked as such):*/

//1. use the .sortmethod Thought question: what did this do to the array? Did it permanently alter it?
// console.log(favMovies.sort())
//this method sorts the elements in an array in ascending order, by default - this list was sorted alphabetically - this method returns a reference to the original array, it did not change the original

//2. Use the method pop
// console.log(favMovies.pop())
//The pop method removes the last element of the array - in this instance, the pop method removed the last element and the console log displayed what was removed

//3. push"Guardians of the Galaxy"
// favMovies.push("Guardians of the Galaxy")
// console.log(favMovies)

//4. Reverse the array
// const reversed = favMovies.reverse()
// console.log(reversed)

//5. Use the shift method
// favMovies.shift()
// console.log(favMovies)

//6. unshift- what does it return?
// console.log(favMovies.unshift())
// 19 is returned

//7. splice "Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) 
//      Thought question: did this permanently alter our array?
// console.log(favMovies.indexOf("Django Unchained"))
// favMovies.splice(3, 1, "Avatar")
// console.log(favMovies)
// the contents of the original array were altered, permanently altering the array

//8. slice the last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it)
//      Thought question: did this permanently alter our array?
// store the value of your slice in a variable, console.log it
//      Thought question: what is going on here?
// console.log your final results
// console.log(favMovies.length)
// const split = favMovies.slice(9, 19)
// console.log(split.length)
// this method does not change the original array, not altering it permanently
// the original array's elements are copied, from a starting point to an ending point & then displayed in console log

//9. After running the above tasks, console.log the index of "Fast and Furious" 
//      We removed it from the array, what value do we get when we look for the index of something that is not in the array?
// console.log(favMovies.indexOf("Fast and Furious"))
// -1 was returned when the fast and furious was console logged 

//10. Thought question: that we declared the variable favMovieswith const, and yet, we were allowed to change the array. Weird? Should we have used let? 
// b/c the variable is not the array itself, just a reference point to where the array is stored in memory



/* Where is Waldo 
With the following multi-dimensional array */
// const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
// ["Lucinda", "Jacc", "Neff", "Snoop"],
// ["Petunia", ["Baked Goods", "Waldo"]]];

// Remove Eggbert (hint look at the slice/splice method(s))
// whereIsWaldo.splice(1,1)
// console.log(whereIsWaldo[1])

// Change "Neff" to "No One"
// whereIsWaldo[2].splice(2, 1, "No One")
// console.log(whereIsWaldo[2][2])
// console.log(whereIsWaldo)

// Access and console.log "Waldo"
// console.log(whereIsWaldo[3][1][1])

/* Excited Kitten
Write code that logs "Love me, pet me! HSSSSSS!" 20 times.
For every even number in your loop, log "...human...why you taking pictures of me?...", 
"...the catnip made me do it...", or "...why does the red dot always get away..." at random. */
// const words = [' ...human.... why are you taking pictures of me?...', ' ... the catnip made me do it ...', ' ...why does the red dot always get']
// for(let i=1; i<=20; i++){
//     if(i%2==0) console.log(i + words[Math.floor(Math.random() * words.length)])
//     else    console.log(i)    
// }

/* Find the Median
Find the median number in the following nums array, then console.log that number.
hint if you check the length of the array / 2, you might get not get a whole number. In which case, look into Math.floor( // something ) */
// const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];

// nums.sort()
// console.log(nums.unshift())
// console.log(nums[12])
// I think 12 was a good index to use if whole numbers were necessary



/* Return of the Closets
Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript. 
Use this data to answer the following questions. */
// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "Per Scholas hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
//   ];

// Thom's closet is more complicated. Check out this nested data structure!!
// const thomsCloset = [
//     [
//       // These are Thom's shirts
//       "grey button-up",
//       "dark grey button-up",
//       "light blue button-up",
//       "blue button-up",
//     ],[
//       // These are Thom's pants
//       "grey jeans",
//       "jeans",
//       "PJs"
//     ],[
//       // Thom's accessories
//       "wool mittens",
//       "wool scarf",
//       "raybans"
//     ]
//   ];

/* Alien Attire
Kristyn's left shoe has traveled through time and space and turned up in Thom's accessories drawer! Remove Kristyn's shoe from the array and save it to the variable kristynsShoe. 
Use that variable to add Kristyn's lost shoe to Thom's accessories array.*/
// let kristynsShoe = kristynsCloset.shift()
// console.log(kristynsCloset)
// thomsCloset[2].push(kristynsShoe)
// console.log(thomsCloset)

/*Dress Us Up
Modify your code to put together 3 separate outfits for Kristyn and Thom. Put the output in a sentence to tell us what we'll be wearing. Mix and match! */
// const krisoutfits1 = [kristynsCloset[0], kristynsCloset[2], kristynsCloset[3]]
// const krisoutfits2 = [thomsCloset[0][1], thomsCloset[1][1], kristynsCloset[5]]
// const krisoutfits3 = [thomsCloset[2][3], kristynsCloset[1], thomsCloset[1][2]]

// console.log('Kristyn will wear ' + krisoutfits1.join(", ") + ' today')
// console.log('Kristyns outfit for tomorrow will be ' + krisoutfits2.join(", "))
// console.log('Kristyns outfit for the day after tomorrow will be ' + krisoutfits3.join(", "))

// const thomsoutfits1 = [thomsCloset[2][3], kristynsCloset[4], thomsCloset[1][0]]
// const thomsoutfits2 = [kristynsCloset[0], thomsCloset[1][2], kristynsCloset[1]]
// const thomsoutfits3 = [thomsCloset[2][0], thomsCloset[2][1], thomsCloset[2][2]]

// console.log('Thoms outfit for today is ' + thomsoutfits1.join(", "))
// console.log('Thoms outfit for tomorrow will be ' + thomsoutfits2.join(", "))
// console.log('Thoms outfit for the day after tomorrow will be ' + thomsoutfits3.join(", "))

/* Dirty Laundry - Continue looking at the closet arrays:
Time to do laundry - loop through Kristyn's closet and log the sentence "WHIRR: Now washing (item)" for each item in the array.*/
// krisoutfits1.forEach(function(outfit){
//     console.log('WHIIRRR: Now washing ' + outfit)
// })

/*Inventory 
Thom wants to do inventory on his closet. Using bracket notation, log the arrays containing all of Thom's shirts, pants, and accessories. */
// console.log("Shirts: " + thomsCloset[0].join(", "))
// console.log("Pants: " + thomsCloset[1].join(", "))
// console.log("Accessories: " + thomsCloset[2].join(", "))





































