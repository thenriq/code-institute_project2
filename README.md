# The Mastermind game

***The Mastermind Game***  is a code-breaking game. The objective is to break the code auto-generated by the computer within 6 attempts.

It is based on the board game "Mastermind", where the code to be broken is a sequence of colors.

In this version, the code to be broken is a sequence of 4 digits, from 0 to 9.

This is a pure entertainment game and a challenge for those who like to solve puzzles.

The Mastermind game is a fully responsive javascrip logic games, which will guide the player towards breaking the secret code number.

![Responsive Mockup](assets/images/mastermind_mockup.png)

## Features

### Existing features

- __Page Header and The Mastermind game logo__

    - On a nice purple background, the game logo can be seeing in highlight, making it easy to see right at top of the page

![Logo](/assets/images/mastermind_logo.png)

- __The Game Area__

    - This is the section where user will interact with the game. The auto-tab feature makes it easy to fill in all the values for the guess. 
    - These fields will only accept numbers as input
    
![Input fields](/assets/images/mastermind_input_fields.png)

<br>  

- __The Control Session__

    - This session contains instructions on how to play the game. Also, we can see very clear the color assignment rules, followed by the control buttons

    ![Control Session](/assets/images/mastermind_control_session.png)

   - The control buttons can be used to run the game or to reset it
   - The game can also be run by pressing ENTER on the keyboard


![Control Buttons](/assets/images/mastermind_control_buttons.png)

- __Running the game__

    Once the game runs, the numbers inputted by user will show the color accordingly with its position and the prior inputs will be disabled.
    - GREEN, if the number belongs to the code and if is in the right position;
    - ORANGE, if the number belongs to the code but on a different position
    - RED, if the number does not belong to the code

    ![Input fields](/assets/images/mastermind_input_color.png)

- __End of the game__

    The game will finish when the user breaks the code or when the user runs out of guesses.
    -  **Winning the game**:
       
       All numbers were set to green by the game:
    
       ![Input fields](/assets/images/mastermind_winner_color.png)

       - Next, a pop-up message will show:

       ![Winner message](/assets/images/mastermind_winner_message.png)
    
    - **Losing the game**:
        
        User run out of guesses (reached 6 guessing rows)

        ![Input fields](/assets/images/mastermind_out_of_guesses.png)

        - Next, a pop-up message will show:

        ![Loser message](/assets/images/mastermind_loser_message.png)

        - Then, regardless of what user chooses, another pop-up message will reveal the code:

        ![Code reveal](/assets/images/mastermind_code_review.png)

<br>

### Features left to be implemented

- When the game finishes, whether user wins or not, the user will be informed on the right side panel, instead of using pop-up messages

<br>

## Testing

- Tests were performed in different browsers: Chrome, Opera and Safari.
- I confirm that the game works and the result will be correct.
- I can confirm that, no matter which browse, all elements will be fully readable and easy to understand.
- I tested it through lighthouse in devtools and the colors and fonts chosen are easy to read.

![Code reveal](/assets/images/lighthouse_test.png)

- I used devtools device toolbar to ensure this project is fully responsive, looks good and works on all standard screen sizes

## Validator testing
- HTML
    - No errors found when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fthenriq.github.io%2Fcode-institute_project2%2F)

- CSS
    - No errors were found when passing through the official  [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fthenriq.github.io%2Fcode-institute_project2%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=pt-BR)

- JavaScript
    - No errors were found when passing through the official [Jshint validator](https://jshint.com/)
        - The following metrics were returned:
        - There are 12 functions in this file.
        - Function with the largest signature take 2 arguments, while the median is 0.
        - Largest function has 27 statements in it, while the median is 4.
        - The most complex function has a cyclomatic complexity value of 11 while the median is 2.

### Bugs

#### Fixed Bugs

   - **CSS not applying if using *autofill***. If "autofill form" is used, the CSS applied to the input box will be the "*internal-autofill*, instead of what was coded in the CSS file. To overturn that, I've disabled the auto-complete form on these input fields, by adding "autocomplete='off'" to the input html tags

#### Unfixed Bugs

   - No other bugs were found

## Deployment

- The site was deployed to GitHub pages. The steps to deploy are as follows:
    - In the GitHub repository, navigate to the Settings tab;
    - Under "Code and automation" (left panel), click on "Pages";
    - Under "Builds and deployment", from the dropdown menu, select the Master Branch;
    - Once the master branch has been selected, the page provided the link to the completed website.

<br>

The live link can be found here - [The Mastermind Game](https://thenriq.github.io/code-institute_project2/)


## Credits 
### Content

- The code to make the social media links was taken from the CI [Love Running](https://thenriq.github.io/love-running/) project.
- The icons in the header and in the right side of page were taken from [Font Awesome](https://fontawesome.com/)
- Instructions on how to set field input to one digit only was taken from [Stackoverflow](https://stackoverflow.com/questions/42067911/input-field-restrict-to-one-digit)
- Steps on how to achieve auto-tab in the fields were taken from [Developer Mozilla](https://developer.mozilla.org/en-US/docs/Web/API/Event/srcElement)

<br>