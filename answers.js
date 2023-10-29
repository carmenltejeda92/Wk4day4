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
const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

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




































