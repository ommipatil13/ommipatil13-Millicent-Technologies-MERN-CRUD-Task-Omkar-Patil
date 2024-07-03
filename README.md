# ommipatil13-Millicent-Technologies-MERN-CRUD-Task-Omkar-Patil

Tech Stack - React.js , Node.js , NestJs , MongoDB , TailwindCss

Frontend: ReactJs, TailwindCss
Backend: NestJs
DataBase: MongoDB

How to set up and run the project

There are 2 folders backend and frontend.

I have not included the node_modules in this repository so you have to install them.

For frontend node_modules -
cd frontend
npm install

For backend node_modules -
cd backend
npm install

After that you have to put mongoDB connection string link in backend .local.env file
backend > .local.env > MONGO_URL

Now start the backend -
cd backend
npm run start:dev

Now start the Frontend i.e. Client -
cd client
npm run dev

Now open any browser and go to this link - http://localhost:5173/
















1. Initialize a new project
First, create a new directory for your project and navigate into it using your terminal or command prompt:

bash
Copy code
mkdir my-vite-project
cd my-vite-project
2. Initialize npm
Initialize npm in your project directory if you haven't already:

bash
Copy code
npm init -y
This creates a package.json file with default settings.

3. Install Vite
Install Vite globally using npm (or yarn, if you prefer):

bash
Copy code
npm install -g create-vite
4. Create a Vite project
Use Vite to scaffold a new project. Choose your preferred framework (Vue, React, or vanilla JavaScript):

For Vue.js:
bash
Copy code
create-vite my-vue-app --template vue
For React:
bash
Copy code
create-vite my-react-app --template react
For Vanilla JavaScript:
bash
Copy code
create-vite my-js-app --template vanilla
Replace my-vue-app, my-react-app, or my-js-app with your preferred project name.

5. Navigate to your project
After the project is scaffolded, navigate into your project directory:

bash
Copy code
cd my-vue-app
# or
cd my-react-app
# or
cd my-js-app
6. Run the development server
Start the development server:

bash
Copy code
npm run dev
or if you're using yarn:

bash
Copy code
yarn dev
