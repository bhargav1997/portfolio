# Portfolio Website

This is a portfolio website project built with React. Follow the steps below to set up and run the project.

## Prerequisites

Before you start, ensure you have the following installed on your machine:

-  Node.js
-  npm (Node Package Manager)
-  Backend project (set up and running)

## Backend Setup

1. Clone the backend project repository.
2. Follow the instructions in the backend project's README file to set it up and run it.

### Running the Backend

To run the backend project, follow the instructions in the backend README file.

```bash
cd Backend
npm install
```

Setup the .env file


```env
DBUSER=<your_username>
DBPWD=<your_password>
DBHOST=<your_host>
ORIGIN=http://localhost:3000
```

```bash
npm run dev
```

## Frontend Setup

1. Clone this repository.
2. Navigate to the project directory.

```bash
cd Portfolio
```

3. Set up the `.env` file with the following content:

```bash
REACT_APP_API_BASE_URL=http://localhost:<port_number>/api
```

Replace `<port_number>` with the port number your backend server is running on.

4. Install the project dependencies:

```bash
npm install
```

5. Start the development server:

```bash
npm start
```

The application should now be running on `http://localhost:3000`.

## Additional Information

-  Ensure the backend server is running before starting the frontend development server.
-  If you encounter any issues, check the console for error messages and ensure all dependencies are installed correctly.


Special thanks to [Soumyajit4419](https://github.com/soumyajit4419) for the inspiration and guidance in building this portfolio. Your work has been a great resource and motivation!

