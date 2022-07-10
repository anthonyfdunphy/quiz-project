# Quiz Website - Project

![alt text](https://i.imgur.com/5EmYwqe.png)

This website was created for the second milestone project as part of the Code Institute course.

For the live link - please click [here](https://anthonyfdunphy.github.io/quiz-project/)

## Concept

The user will be brought to a homepage which will give the user the option to start the game. On click, the quiz will begin and the webpage will change. The user will select an answer from 4 possible answers. The style of the button will change colour to indicate a correct or incorrect answer. The user will lose a point for every wrong answer selected.

When the quiz is completed, the user is given the option to restart the game, click on the button which brings the user to the high scores page or save the score they have to the high scores page.

---------------

## Technologies utilised in this project

- **HTML**: Website structure was developed using the HTML language
- **CSS**: Styling of the page was with CSS using an external stylesheet - linked to from the main HTML page
- **Javascript**: Website structure was developed using the HTML language
- **Github**: Source code of the website is hosted on the my Github repo - push and commited sent to from Gitpod when developing the site

# UX/UI Design

The sites design was wireframed with drawing shown below. The design would consist of a landing/homepage, the user would be greeted with a start button. Once this button was clicked, the user would have a question revealed with a series of possible answers available to them.

![alt text](https://i.imgur.com/HJqxPG9.jpeg)

My design consisted of 3 seperate linear gradient background - the main background, the correct answer background and the wrong answer background.

### Main body background
![alt text](https://i.imgur.com/CUQeRIP.png)

### Correct background
![alt text](https://i.imgur.com/ThfHfFd.png)

### Wrong background
![alt text](https://i.imgur.com/Kbg96h7.png)

## User Goals
1. The website must be responsive - the CSS and HTML code must be able to hide, resize, shrink/enlarge, or move any of the content to adjust for the appropriate screen size.
2. The navigation of the site must be easy. The user should see that the site has a natural flow to it which is intuitive.
3. The aim is that the correct and incorrect answers should be displayed clearly for the user.
4. The user must be able to keep track of their score which is placed in a scoreboard at the end.

## User stories
From a first-time user perspective
1. As a first-time user, I want to be able to play the game without lengthly guides or instructions.
2. As a first-time user, I want to see how I progressing with my score tally.
3. As a first-time user, I want to be given a visual prompt when I have made the right or wrong guess.
4. As a first-time user, I want to be able to restart the quiz after I complete it.

First-time user perspective fulfillment
1. The user with greeted with a basic UI design where they are given the single option to click a 'start button'. This allow for little confusion or prompts needing to be given to a first-time user. 

![alt text](https://i.imgur.com/lRliB9H.png)

2. The user is given a clear score total at the bottom of the div container which shows the total score they have achieved so far.

![alt text](https://i.imgur.com/AHNjGdx.png)

3. The background color of the body changes color depending on which answer a user selects. If the answer if correct, the background is a green gradient, if the answer is wrong, the background gradient is red. Below is an example of a user selecting an incorrect answer. This fulfils the visual prompt a first time user would need.

![alt text](https://i.imgur.com/LxJSBNT.png)

4. At the end of the quiz, the user is given a restart button which allows them to restart the game from the beginning.

![alt text](https://i.imgur.com/11IZn3Z.png)

## Fonts

I decided to use Helvetica Neue for entirety of the font usage on this project.

![alt text](https://i.imgur.com/Mtx2jwS.jpg) 


### Deployment

The steps I followed for deploying to Github were as follow:

1. Navigate to github.com in my browser
2. Log into my account using my user credentials
3. Create a new repository
4. User Gitpod edit the files
5. Created a HTML file, a CSS file and a Javascript - some of which sat within an assets folder which helped for organising the file structure


### Device and Cross-Browser Testing
The quiz has been tested by playing it through on a range of browsers and devices. I used the online tool LambdaTest to check different browser version on different operating system.

### Validator Testing

#### Lighthouse

I used Google's open-source, automated tool for improving the performance, quality, and correctness of your web apps. I got the following results from my website review using this tool.

Lighthouse on index.html

![alt text](https://i.imgur.com/U7GTMBq.png)

Lighthouse on highscore.html

![alt text](https://i.imgur.com/me1vWEQ.png)

#### JSHint

The Javascript code used on my site was validated using the website JSHint. I found this site to be helpful as it showed some of the error which had cropped up in my code - most of which being missing semicolon's. I found the JSHint tool useful as it also helped me identify older functions I had written at the inception of this project which were now unused.

For my script.js javascript file, I got the following results:

![alt text](https://i.imgur.com/rotx3If.png)

For my highScoreScript.js javascript file, I got the following results:

![alt text](https://i.imgur.com/48CGS4s.png)

I recieved one warning which was in reference to the function saveUserScore. This function is called from the script.js file which runs most of the game. I could have made it a global function but after consulting with the Code Institue tutors, they mentioned that this was not neccessary. 

#### HTML validator

I checked the HTML code for the index page and the highscore page. No errors were shown on either of the html pages - below are screenshots of both page results:

Index.html
![alt text](https://i.imgur.com/EBXiack.png)

Highscore.html
![alt text](https://i.imgur.com/oLLTWoY.png)

#### Jigsaw CSS validator

I used the online tool Jigsaw CSS to validate the code for my stylsheets for my quiz project. Below are the screenshots of both error free codes submitted:

Index.html
![alt text](https://i.imgur.com/W8dQacc.png)

Highscore.html
![alt text](https://i.imgur.com/YpRhSbd.png)

## Credits



I was helped greatly by the Javascript programming video on the Youtube channel - WebDevSimplified. I found this [video](https://www.youtube.com/watch?v=riDzcEQbX6k&t=494s&ab_channel=WebDevSimplified) the most useful for getting a grounding on game development using Javascript.



