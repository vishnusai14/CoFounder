# CoFounder

#Command Used To run Program

Step 1 :
  Download The Source Code and Un Zip It
  
Step 2 : 
  Open Command Prompt(Any Other Terminal is also Preferred) and navigate to client folder (cd client)
  
Step 3 :
  Type #npm install (Make Sure You Have Download NPM and Node.js) and Once install is done type #npm start to Start The FrontEnd App on 3000
  
Step 4 :
  Come back To Previous Folder(cd ..) and run #npm install
  
Step 5 :
   Now Type #npm run devStart to start the backend on 8080
   
Step 6 :
  This app requires some information some .env file. Create a .env file and fills up the credentials Like Your DBNAME, DBPASSWORD, GMAIL, GMAIL_PASSWORD, JWT_SECRET, NODE_ENV
   
#Building Up The App

#To Serve The React-APP as a Staic File 

#Make Sure You installed all the dependencies

Step 1 :
  Go to client Folder and type #npm run build or #npm run winbuild(For Windows User)
  
Step 2 :
  After The Build is Completed, Go to .env file and add NODE_ENV=development
