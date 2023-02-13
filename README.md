# NC-News-Front-End

This is the front-end project for the NC-News back-end API. It is a Reddit-inspired website where users can view and interact with articles, topics, and post comments. The front end is built using React, with Axios for making API requests, and Reach Router for client-side routing.

This project was created as part of a one-week solo sprint while I was a student at Northcoders.

You can try out a live version of the app at [here](https://abi-frontend.onrender.com).

## Installation

To install the app locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/NC-News-Front-End.git`
2. Install dependencies: `npm install`
4. Start the app: `npm start`
5. The app should be running on `http://localhost:3000`

## Usage

The app has the following main pages:

- Home Splash page welcoming the user
- Articles Displays a list of all articles, and allows filtering articles by topic. Also allows user to sort articles by votes and comments (Most/Least first) as well as date created (Earliest/Latest first)
- Articles/:topic Displays articles filtered by topic
- Articles/:topic/:article_id Displays the details of specified article, including its comments and an input method to create new comments.

## Dependencies

This project requires the following dependencies:

- `axios`: for making API requests
- `react`: for building the UI
- `react-dom`: for rendering the UI
- `react-router-dom`: for client-side routing
- `prop-types`: for defining prop types
- `tailwindcss`: for styling the UI

These dependencies are included in the `package.json` file and will be installed automatically with `npm install`.

## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b your-branch-name`
3. Make your changes and commit them: `git commit -m "your commit message"`
4. Push to the branch: `git push origin your-branch-name`
5. Create a pull request

## License

This project is licensed under the MIT license. See the `LICENSE` file for details.
