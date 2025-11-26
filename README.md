# Group-5-Quiz-Game-App
This is the repository for the final project of our front-end development course. It is a quiz-game-app that is based on _The Tower_ boss from a game called _The Typing of the Dead_. The name of this website is _Trivia Bonanza_ while the name of the game it hosts is _Type or Perish!_

## Prerequisite
If you are going to host this application locally, don't forget to run _npm install_.

## Available Scripts

In the project directory, you can run:

### **`npm start`**

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### **`npm run build`**

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### **`Project Structure`**
- **src**
  - **components**
    - AboutCard : the cards used in About page
    - AnswerInput : component for grabbing the answers from the player
    - ChoicesList: component to display the choices players have to answer
    - ErrorBoundary : component to display UI when error is caught
    - Feedback : component used to display feedback to players (right or wrong!)
    - Footer : footer component
    - Header : header component
    - Progress : progress bar in Game page
    - QuestionPrompt : component used to display the questions for the players to answer
    - Timer : component to display the time left
  - **_context_** : provides data and funcitonality to the game page
  - **_data_** : where the original type or perish! questions lie
  - **_images_** : images of the developers
  - **_pages_**
    - About : About us page
    - GamePage : Page to let players game in
    - Home : home page / initial page
    - Leaderboard : leaderboard page to display a list of top players
    - NotFoundPage : not found page to catch non-existent routes
    - AddQuestion : add question page to allow players to add their own custom questions
  - **_App.css_** : the external stylesheet of the applcation
  - **_App.js_** : where the application starts

### `Additional Notes`
- There is a projectBrief document in this repo that you can read for the entire approaches, challenges, and React concepts used to develop this application.
- Currently, this application is hosted on the internet using CloudFlare.

### `Suggestions`
- If you have any suggestions on the UI/UX, gameplay, bugs, or adding other pages, you can use the issues tool.
