# The Matching Games
Welcome to "The Matching Games", the home of matching games! "The Matching Games" is a home for picture matching games that not only provides hours of entertainment but also enhances cognitive skills and memory in a fun and interactive way. Whether you're a young explorer seeking adventure or a parent looking for an engaging and educational activity for your child, this game is made to bring joy and excitement to players of all ages. 

![Image](resources/all-devices-black.png)

![Static Badge](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Static Badge](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Static Badge](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Static Badge](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)
![Static Badge](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
***
**Contents**
- [The Matching Games](#the-matching-games)
  - [User Stories](#user-stories)
    - [New User](#new-user)
    - [Returning User](#returning-user)
  - [Features](#features)
    - [Existing Features](#existing-features)
    - [Future Features](#future-features)
  - [Wire-frames](#wire-frames)
  - [UX Design](#ux-design)
    - [Intuitive Gameplay](#intuitive-gameplay)
    - [Simple User Interface](#simple-user-interface)
    - [Typography](#typography)
    - [Colour Scheme](#colour-scheme)
    - [Interactive Elements](#interactive-elements)
    - [Visual Feedback](#visual-feedback)
    - [Progress Tracking](#progress-tracking)
    - [Responsive Design](#responsive-design)
***
## User Stories
### New User
1.	I would like to see how fast I can complete the game.
2.	I would like to know how many moves it took me to complete the game.
3.	I would like to know how to play the picture matching games.

### Returning User
1.	I would like to be able to reset the game and aim for faster times.
2.	I would like to see if I can complete the game with less moves. 
3.  I would like to be able to play the game across on different devices. 
***
## Features
Within the game I have used Object-Oriented Programming (OOP) so that the game can accept different data sets to have different themes per game. This means that the game is structured around objects, which are instances of classes that contain data and methods. The use of OOP allows for greater flexibility and modularity in the code, making it easier to add new features or modify existing ones and making unit testing easier. By accepting different data sets, the game can be customized to suit different themes, such as sports, animals, or movies. This makes it more engaging and enjoyable for players who have different interests and preferences.
### Existing Features
- Instructions & Gameplay *(See figure 1 below)*      
Description: This section provides a detailed explanation of how to play the matching memory games.  
Functionality: Refer to this section if you're new to the game or need a refresher on the rules and objectives.
- Game Selection Boxes *(See figure 2 below)*               
Description: This is where the game is selected to be played.                    
Functionality: Click on this box to start the selected game.
- Guess box *(See figure 3 below)*             
Description: This box keeps track of the total number of moves you make during the game.  
Functionality: Every time two game images are selected the count in this box will increase, allowing you to see how many moves you took to complete the game.
- Match Box *(See figure 3 below)*        
Description: The Match box keeps track of the number of correct matches you make during the game.  
Functionality: Whenever you successfully match two identical images, the count in this box will increase. Challenge yourself to get the highest number of matches!
- Time Box  *(See figure 3 below)*  
Description: The Time box measures the time it takes for you to complete the game.  
Functionality: The timer starts when you begin the game and stops when you successfully match all the pairs. Try to beat your own time record or challenge your friends to see who can complete the game the fastest.

![Image](resources/features-images.png)                   

### Future Features
- Custom Grid Size  
Description: The ability for players to select a different number of squares in the grid.  
Functionality: This feature will allow you to customize the game's difficulty by choosing the grid size that suits your skill level. Whether you want a quick and easy game or a challenging experience, you'll have the option to tailor the grid to your preference.
- Additional Games   
Description: Additional games for different themes.  
Functionality: Additional themes could be added to the homepage so that players could play an image matching game with a different theme and data set.
***
## Wire-frames
[Mobile Homepage](resources/wireframes/mobile-homepage.png)    
[Mobile Game Page](resources/wireframes/mobile-game-page.png)    
[Tablet Homepage](resources/wireframes/tablet-homepage.png)   
[Tablet Game Page](resources/wireframes/tablet-game-page.png)        
[Desktop Homepage](resources/wireframes/desktop-homepage.png)             
[Desktop Game Page](resources/wireframes/desktop-game-page.png)             

[Mobile Game Page](resources/wireframes/matching-marvel-mobile.png)  
[Tablet Game Page](resources/wireframes/matching-marvel-tablet.png)  
[Desktop Game Page](resources/wireframes/matching-marvel-desktop.png)  
***
## UX Design
The user experience (UX) design of Matching Marvel will focus on creating an engaging and informative platform for children to explore the world of Marvel while also providing entertaining game. 
### Intuitive Gameplay
Magic Marvel offers a user-friendly experience that's easy to grasp for players of all ages. The primary goal of the game is to match identical images hidden beneath the squares. Here's how we've crafted the user experience to ensure an enjoyable gaming session.
### Simple User Interface
Magic Marvel boasts a clean and straightforward user interface. Upon launching the game, you'll be greeted by a comic style background that sets the tone for your adventure. The grid of 16 squares takes center stage, and each square holds the potential for a magical discovery.
### Typography
The font Bangers will be used for the website name to infuse a sense of playfulness and excitement to engage a younger audience. For section headings, Boogaloo will be used. A font that adds character and liveliness to the page, ensuring that each section feels engaging and enjoyable. The fallback for both bangers and boogaloo will be cursive. To maintain optimal readability and accessibility for our young audience, I have selected Quicksand as our body text font. Its clean and straightforward sans-serif style ensures that the content is easy to read and comprehend. The fallback for quicksand will be sans-serif. These fonts, all sourced from Google Fonts, work to create an online environment that celebrates the Marvel Universe while prioritizing a positive user experience.  

![image](resources/bangers.png)  
![image](resources/boogaloo.png)
![image](resources/quicksand.png)
### Colour Scheme
The color choices for the website about were carefully selected to create a vibrant and engaging visual experience. #D30010 will be the background color for the no match box with its bright red hue, while #FFBE0B will serve as the background colour for the header and match box as it adds a playful touch of sunshine yellow, reflecting the joy and excitement of the marvel universe. The soft and inviting #FFFFFF serves as the background color for the rules and instructions section, providing a clean and harmonious backdrop for content. #048BA8 will be the background colour for the time box. Lastly, #000000 introduces contrast, grounding the design and ensuring readability.

![image](resources/matching%20marvel-colours.png)
### Interactive Elements
To make your journey more engaging, we've incorporated interactive elements that respond seamlessly to your actions. Tap or click on a square to reveal the image beneath it. The animations and transitions have been designed to provide a good sensory experience.
### Visual Feedback
The game offers intuitive visual feedback to keep you informed throughout your exploration. When you uncover two matching images, they'll remain visible. Conversely, if your selections do not match, the squares will return to their hidden state.
### Progress Tracking
Magic Marvel features a progress tracker that keeps you informed about your performance. A score counter and a timer are readily visible, helping you measure your progress and challenge yourself to improve. Compete with your friends or simply try to beat your own best time!
### Responsive Design
Matching Marvel is designed with a responsive layout, ensuring that the website adapts seamlessly to different devices and screen sizes. Whether accessed from a desktop, tablet, or mobile device, users will have a consistent and optimized experience.
