# INF 651 Group 5: Quiz Game App

This is the repository for the final project of our front-end development course. It is a quiz-game app that is based on _The Tower_ boss from a game called _The Typing of the Dead_. The name of this website is "Trivia Bonanza" while the name of the game it hosts is _Type or Perish!_

## Live Demo

**[Play Trivia Bonanza](https://group-5-quiz-game-app.pages.dev/)**

Here you can try out the live version of _Type or Perish!_ hosted on Cloudflare Pages.

## Features

- **Interactive Gameplay**: Answer questions by typing your responses against the clock
- **Timer**: Race against time to answer questions before time runs out
- **Progress Tracking**: Visually progress bar shows how you're doing in the quiz
- **Leaderboard**: Compete with other players and see top scores
- **Custom Questions**: Add your own custom questions to the game
- **Responsive**: Works seamlessly across different devices
- **Real-time Feedback**: Instant feedback on correct and incorrect answers

## Tech Stack

- **ReactJS** - Frontend framework
- **React Router** - Client-side routing
- **Create React App** - Build tool

## Get Started

### Prerequisites

- **Node.js**
- **npm** (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/TANGHuyming/Group-5-Quiz-Game-App.git
   cd Group-5-Quiz-Game-App
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) (or actual port number) in your browser to play the game!

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

## Project Structure
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
  - **_context_** : provides data and functionality to the game page
  - **_data_** : where the original type or perish! questions lie
  - **_images_** : images of the developers
  - **_pages_**
    - About : About us page
    - GamePage : Page to let players game in
    - Home : home page / initial page
    - Leaderboard : leaderboard page to display a list of top players
    - NotFoundPage : not found page to catch non-existent routes
    - AddQuestion : add question page to allow players to add their own custom questions
  - **_App.css_** : the external stylesheet of the application
  - **_App.js_** : where the application starts

## Deployment

This application is currently hosted online using Cloudflare. To deploy your own version:

1. Build the production version:
   ```bash
   npm run build
   ```

2. The `build` folder contains the optimized static files ready for deployment.

3. You can deploy to platforms like Cloudflare Pages, Netlify, Vercel, or GitHub Pages.

## Additional Notes

- There is a ProjectBrief document in this repo that you can read for the entire approaches, challenges, and React concepts used to develop this application.

## Contributing

If you have any suggestions on the UI/UX, gameplay, bugs, or adding other pages, you can:
- Open an issue using the [GitHub Issues](https://github.com/TANGHuyming/Group-5-Quiz-Game-App/issues) tool
- Fork the repository and submit a pull request