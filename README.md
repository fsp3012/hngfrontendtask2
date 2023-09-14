**MovieBox React Application**
- MovieBox is a React-based web application that allows users to explore and search for movies. This documentation provides instructions on how to set up and run the project locally.

**Prerequisites**
- Before you begin, ensure you have met the following requirements:
- Node.js installed on your machine.
- Git installed on your machine.
- The Movie Database (TMDb) API key. You'll need this to fetch movie data.

**Getting Started**
- Clone the Repository
- Open your terminal.
- Navigate to the directory where you want to clone the project repository.
- Run the following command to clone the repository:
- git clone <https://github.com/fsp3012/hngfrontendtask1>

**Install Dependencies**
- Navigate to the project's root directory in your terminal:
- cd hngfrontendtask2
- Install the project's dependencies using npm:
- npm install

**API Key Setup**
- To fetch movie data from The Movie Database (TMDb) API, you need to set up your API key:
- Visit the TMDb website and create an account if you haven't already.
- Obtain an API key from TMDb.
- Replace the api_key value in the Axios requests in your code with your actual API key. Look for lines like this:
- `https://api.themoviedb.org/3/movie/${id}?api_key=YOUR_API_KEY`
- Replace YOUR_API_KEY with your TMDb API key.

**Start the Development Server**
- Now you can start the development server to run your React application:
- npm run dev
