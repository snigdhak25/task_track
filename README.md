Loom Video : 
https://drive.google.com/file/d/1zljmM6UnPdxxiq7MPIKWusPC46w9QMVm/view?usp=drive_link

Installation
Clone or Create the Project:
bash

Collapse

Wrap

Copy
npx create-react-app task-tracker
cd task-tracker
Replace Files:
Copy the provided src/, public/, and package.json files into your project.
Install Dependencies:
bash

Collapse

Wrap

Copy
npm install
Add Tailwind CSS:
Included via CDN in public/index.html for simplicity. For production, consider installing it via npm:
bash

Collapse

Wrap

Copy
npm install -D tailwindcss
npx tailwindcss init
Usage
Run the App:
bash

Collapse

Wrap

Copy
npm start
Opens at http://localhost:3000.
Interact:
Add a task by typing in the input and clicking "Add".
Edit a task by clicking the pencil icon (✏️), updating the text, and clicking "Update".
Delete a task by clicking the dustbin icon (🗑️).
Tasks persist across page reloads via localStorage.
License
This project is open-source and available under the MIT License.
