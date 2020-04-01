![Tip Calculator Image](https://github.com/TiffanyDonner/tipping-calculator-in-swedish/blob/master/assets/images/tipHeading.PNG)
# Tip Calculator for Swedes
A big question I often get from my Swedish friends when they are traveling to the USA is... 
How do we know how much to tip at a restaurant?
As a former bartender, I feel that tipping is more of a feeling than a number. This calculator not only uses math
to help give you a solution but helps you decided how you feel about the percentage of the bill you are leaving. 
Also, why you are leaving a tip at all...

[View Live Demo Here](https://tiffanydonner.github.io/tipping-calculator-in-swedish/)

## UX
The ideal user of this application is a Swedish tourist in the United States.
- The user needs clarification of "why and how" to leave a tip for a server in a restaurant while they are abroad.

This application allows the user quick access and utilizes a wizard workflow to navigate a user through each step easily so they are not overwhelmed. 

For the purpose of this project, the application will be in English however, the final result will be translated into Swedish.

### User Stories
In Sweden we do not tip, so why do I need to leave a tip when I travel to America? | As a tourist in the US, I know I need to tip, but I often get confused about how much... | When traveling on business I need a calculator that can separate the bill.
-----------------------------------------------------------------------------------|----------------------------------------------------------------------------------------- | -------------------------------------------------------------------------
![Why Tip](https://github.com/TiffanyDonner/tip-calculator-project-final/blob/master/assets/images/billAmount.PNG "Why Tip Image") | ![What to Tip](https://github.com/TiffanyDonner/tip-calculator-project-final/blob/master/assets/images/tipPercentage.PNG "What to Tip Image") | ![How Many People](https://github.com/TiffanyDonner/tip-calculator-project-final/blob/master/assets/images/sharingBill.PNG "Number of People Image")

### Wireframes
![Website Plan](https://github.com/TiffanyDonner/tipping-calculator-in-swedish/blob/master/assets/images/tipCalculatorWireframesFinal.PNG "Wireframes Image")

## Features
The Tip Calculator takes out the guesswork and the math by walking the user through 4 simple steps. 
 
### Existing Features
- Each tab contains an explanation or description of what each form is requesting.
- Wizard with current page navigation so the user knows how long the survey is.
- User can easily move back and forth to change their answers

### Features Left to Implement
- Translating the application to Swedish
- Information button for each tab

## Technologies Used
- [HTML](https://www.w3.org/html/)
- [CSS](https://www.w3.org/Style/CSS/Overview.en.html)
    - The project uses **HTML** to simplify DOM manipulation.
- [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
    - The project uses **Javascript** to calculate and navigate the application.

## Testing
Tested CSS in w3 (2) errors found and corrected:
1. Bad value: Can not include (2) fonts in one attribute link... | is not allowed.
    - Corrected by dividing up the (2) fonts into separate links in Head.
2. Element navigation not allowed as child of element div in this context.
    - Changed the navigation tag to nav.

W3C CSS Validator results: No errors found!

W3 Link Validator results: Links, Valid links! Anchors, Found 13 anchors. Valid anchors! Checked 1 document in 7.18 seconds.

W3C Internationalization Checker
1. (5) "<b>" tags without class
    - Added the HTML class of totals. Since they related to the totals on the final tab.

## User Testing
During testing, the users found the application easy to get to and navigate through. Very straight forward.
- The users were instructed. To open the link and check that the layout matched the provided image of the correct layout of the application. And to comment on any differences.
- Next, the user was read the introduction on each page, and to input a fictitious dining experience into the fields as they navigated.
- They were asked to send feedback on:
    1. Whether or not the descriptions were clear on what information the application was asking for.
            - One user found the Total Per Person on the last tab a bit confusing. I proceeded to update the description on the Number of People tab.
    2. Did they find the application hard to navigate? Do the buttons work? Was it easy to tell where you were in the process? Do the calculations work?
            - Users found the application easy to navigate
    3. Would it be something they would use in the future and why?
            - One user thought it was a "fun idea"
            - Another said they would use it in the future and they don't even live in Sweden.
                    -Will be keeping an English version
    4. What was their overall impression?
            - Clean
            - Simple
            - Great!

### Devices Tested
✓ The site is accessible to everyone on all devices.
✓ Both Windows and Apple computers in:
    - Chrome
    - Firefox
    - Microsoft Edge
✓ Samsung:
    - Galaxy S9
    - Galaxy S9 Plus
    - Galaxy S5 Note
✓ Caterpillar Android Device
✓ Apple:
    -iPhone 11
    -iPhone 10

## GitHub Deployment with GitHub Pages

### Create a new [repository](https://github.com/TiffanyDonner/tipping-calculator-in-swedish/). 
1. In the upper right corner use the + to bring down the menu. And select Repository.
2. Select your account from the owner dropdown menu.
3. Give your repository a name and optional description.
4. Choose the repository's visibility and initialize this repository with a README.
5. Click Create Repository

### Create Your Website
1. In GitHub navigate to your repository.
2. Click on the green Gitpod button to open your development environment.
3. Create an index.html in the root with what you want to be displayed on the main page of your site.
4. Push your files and folders while updating git by adding files with commit messages to keep you organized through development.

### Deployment to GitHub Pages
1. In GitHub, navigate to Settings. Within Settings, navigate to the Source section under Github Pages. 
2. From the dropdown menu, selected master branch and then clicked Save. 
3. Git hub creates a [link](https://tiffanydonner.github.io/tipping-calculator-in-swedish/) to where the site is hosted/published.

### Updating
1. Any updates that are committed and push to GitHub will be updated to GitHub Pages.

## Credits
Background Image:
https://www.pickpik.com/overhead-shot-plates-food-dinner-setting-76669

Javascript Tip Calculator - Carolyn Hemmings (CodePen)
https://codepen.io/cphemm/pen/reNwWd

How TO - Form with Multiple Steps (w3 Schools):
https://www.w3schools.com/howto/howto_js_form_steps.asp