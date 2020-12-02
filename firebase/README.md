# Setting up your local server
This process should be a breeze as firebase tries to make it as easy as possible for users to get their server setup. Follow along with these instructions before you run `npm run start` on the app itself.

## Download Firebase CLI
In your terminal, run the following
```
# this will install firebase tools globally on your machine
npm install -g firebase-tools
```
Let that process and once it's finished you're done with this step!

## Run your Emulators
From the project's root directory, navigate into the firebase folder and run the emulators.
```
# navigate into firebase folder
cd ./firebase

# run all emulators for this project
firebase emulators:start
```

## Go to the Emulator UI and add a user
With your emulators running, navigate to http://localhost:8091 to view the firestore emulator UI. Here you can navigate to the Auth window and Add a user. The only required fields are the email and password fields towards the bottom. fill those in and click Save.

You will be able to log into Chain-Letter with this user once you've started up the app! That's it for firebase. Once we start adding data to the database, I'll add more instructions for that to here.

## Setup your .env file
In the root directory, you should see a `tmp.env.development` file. rename the file by removing the `tmp` part of the name. it should just look like `.env.development` now.

Go back to the instructions on the root directory's README file to run the app.