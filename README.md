# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: Fahad Ali

Time spent: 15 hours spent in total

Link to project: (insert your link here, should start with https://glitch.com...)

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [x] Buttons use a pitch (frequency) other than the ones in the tutorial
- [x] More than 4 functional game buttons
- [x] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [x] Player only loses after 3 mistakes (instead of on the first mistake)
- [x] Game button appearance change goes beyond color (e.g. add an image)
- [x] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] List anything else that you can get done to improve the app!
  - [x] Added html homepage
  - [x] Added how to play html page

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
http://g.recordit.co/ixeJinKCLh.gif <br>
http://g.recordit.co/Lmiedpwcly.gif <br>
http://g.recordit.co/qXLqvwopV4.gif <br>
http://g.recordit.co/ixeJinKCLh.gif

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.
   I used outside resources like Github, stackoverflow, youtube, and the linkes provided in the prework assessment.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)
   I think one of the most difficult challenges I encountered in creating this project was the timer and decrementing the amount of time it took for the program to display the next Clue.
   On the scale from 1- 10 would be a difficulty of 7.
   One of the reasons at the beginning of implementing both methods was that I was unable to grasp the idea of where to implement the functions and where to call them.
   Although I had a general idea of how to program the code to use a timer and how to decrement the time for the next clue.
   I was unable to understand where I would use the function/ call the function. After creating a pseudocode for both functions,
   I was able to understand the general idea of how both functions would run.
   Although I used outside sources like stack overflow to get a basic idea of the syntax and structure of the get interval and clear interval.
   This helped me with understanding how timers work in JavaScript and how I would also code the frontend of the timer in html.
   I also had issues with resetting the timer each time the user finished the current turn and issues with displaying the timer in html.
   I think most of this was trial and error and seeing how things each code worked helped tremendously until I was able to get the desired outcome.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)
   This project was a great starter for me. I never had experience with html, CSS, or JavaScript. I think one of the questions I had with this project is how this prework would help me if I get selected in the program. This project was very time consuming, but I didn't mind because it was very entertaining and challenging. Another question I have is when I would be able to use database and storing any user data inputted on a website. Although the prework didn’t require any user feedback, I think it would of be a great option to add to the website nonetheless. 

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)
   If I had more hours to work on this project, I would certainly make it more spicery than it currently is right now. Some of the features I added were a timer, giving users three strikes, and speeding up the time it took for the next clue to be played or displayed. However, I could certainly make it more interesting if I had more time. I think one of the features I would have added was levels of difficult. Like creating three buttons easy, medium, and high where the current version would be placed as the highest difficult and the bare minimum of this project as the easiest difficult. In the medium difficulty I would have just kept the speed and number of buttons the same but removed the timer. Another feature I wanted to implement was making a button where the images and the button would swap with each other making the game more challenging and fun. I think this would have been doable if I had more time to submit the project.

## Interview Recording URL Link

[My 5-minute Interview Recording] https://www.loom.com/share/cd724383381a4a0eafc17eba4e4c46b4

## License

    Copyright Fahad Ali

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
