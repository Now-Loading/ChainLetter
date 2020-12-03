# Welcome to Chain Letter

Chain Letter is Now Loading's first collaborative project! This app will be used as a creative writing tool for writers and readers. 

## Writers
Writers can start their own story chain or add a link to an existing chain. You can only write up to 240 characters per link and you can only link off other user's links. You can add a link to any link within an existing chain (not just the end of the chain). 

## Readers
Readers will start at the beginning of any story. If there are multiple links branching from one link in the story chain, they will they will have the ability to choose which link they'd like to move to or be directed to a random link of all the possible links from their current link.

## Setting up Your Environment
Before you can run the project there are a couple pieces of software you need to have installed first. 

### Install Firebase CLI
In your terminal, run the following commands:
```
# install firebase cli
npm i firebase-tools -g
```

### Install Java JDK
You may need to install the Java JDK if you haven't already. A really quick way to check if you have it installed is by going into your terminal and running the following command
```
java
```
If you receive a bunch of instructions on how to use it, you have it installed and can move to the next step. If you get an error, then download the latest java JDK [here](https://www.oracle.com/java/technologies/javase-jdk15-downloads.html). Be sure to pick the package related to your OS within the table of available downloads.

Once downloaded, run the file to install. Follow the instructions in the install wizard.

### Windows: Add Java to your PATH
If you're working on a windows machine, you'll have to follow this additional step. After you've installed the JDK, You'll have to add it to your PATH. First, let's find the jdk you just installed. In a window explorer, type `C:\Program Files\Java` in the address bar and hit enter. From there open the latest version of the jdk (or the only folder if there's just one), then open the `bin` folder. Click on the address bar to highlight the path and copy the address. (Keep this window up in case you have to copy it again).

Now, in the windows menu, search "System Variables" and select the first search result. Click on "Environment Variables" at the bottom of the new window. In the next window, under "System Variables", select the row with the variable name of "Path" and click on "Edit". In the last window (I promise!) Click the "New" button and paste the address you copied from the jdk folder. Finally, hit OKAY in all the windows until you close out of System Properties.

### Windows Powershell: Allow Signed scripts to Run
If you're using Windows Powershell as your terminal, you'll have to make sure you set the appropriate Execution Policy.

In the start menu, search for "PowerShell", right click the first option and select Run as Administrator. When powershell opens, run the following command
```
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```
You can close out of powershell, now.

## Install the Project
Now that you've got your environment all setup let's get started with installing the app!
### Forking
In order to contribute to this repository, you must fork your own version of the repo. What forking does is creates a copy of the repo and hosts it in your personal account. So instead of working on github.com/Now-Loading/ChainLetter, you'll be working on github.com/YourName/ChainLetter. You'll still be able to merge your additions to the main repo, so don't worry.

On this page if you're reading this from github, click on the fork button somewhere at the top right corner of the page. When it's finished, it will redirect you to the newly forked repo. Once there, click the green code button and copy the url. You'll use this url to clone your repo like you would any repo.

After you've cloned your repo to your local machine, go ahead and navigate into your new project directory and run an `npm i` to install all the necessary node packages for the project.

### Setting up the Now-Loading Remote Alias
Whenever new changes are added to branches on Now Loading's repo, those changes are not passed down to everyone else's repo. In order to update your branches with the latest changes from Now Loading, we'll need to setup a second remote alias. Just like you call `origin` to grab changes from your own repo, we're going to call `nowloading` to grab changes from Now Loading's repo.

To do this, move into your chainletter directory in your terminal and run the following:
```
git remote add nowloading https://github.com/Now-Loading/ChainLetter.git
```
Now, when you want to get the latest changes made on any branch in Now Loading's repo, say you want to get the most up-to-date version of the `develop` branch, you just have to run this
```
git pull nowloading develop
```

### Getting the .env file
Finally, you'll want to include the .env file. Add a new file to the root directory of the project and name it `.env.development`. Then navigate [here](https://github.com/Now-Loading/secret-files/blob/main/.env.development). Copy and paste the contents of that file in github into your new `.env.development` file.

## Running the Project
After you done all that grueling installation (especially if you're on windwows 😫) You're ready to run the project!

### Firebase
Firebase acts as our backend. During development, you will be running an emulated version of our backend. In order to do this, you just have to start up the emulators from the firebase directory.

Go into the firebase directory from the project's root directory on your terminal, then run the emulators, like so:
```
# move to the firebase directory
cd ./firebase

# run the emulators
firebase emulators:start
```
You should now be able to navigate to http://localhost:9097 to view the Firebase UI. There you can add a User that you'll use to log into the app.

Keep this terminal running and open a new terminal window to run the frontend.

### Frontend
In a new terminal window, make sure you're in the project's root directory. Once there, just do an `npm run start` to get the app running. 

Once the app is running, you can view it on http://localhost:3001. Once on the homepage, try logging into the app using the credentials you entered in the Firebase UI Users table. You should see a logout and a plus sign after entering the correct credentials. 

And that's it! you're done! You should only have to follow the "Running the Project" steps again whenever you want to run the application.

## Contributing

### Branch Naming
When you're working on an issue, please format your branch names as such:
```
[bugfix | feature]/[# of issue]_Name-of-branch
```
For instance, if I were going to work on a bugfix for issue number 45 that deals with fixing an error we're getting on validating email inputs, I'd create a new branch from develop like so:
```
# move to develop branch (the branch im branching from)
git checkout develop

# make sure I have the latest updates from nowloading
git pull nowloading develop

# make my new bugfix branch
git branch bugfix/45_Email-Validation-Error

# checkout my new branch
git checkout bugfix/45_Email-Validation-Error
```

### Pull Requests
When you've finished working on a bugfix or feature, push it up to your remote repo.
```
# Say I'm ready to push up my bugfix
# only add the -u if this is your first time pushing up your branch
git push -u origin bugfix/45_Email-Validation-Error
```
Then go to the nowLoading chainletter github page. You should see an option to create a new Pull Request for the branch you just pushed up somewhere at the top of the page. Click on the green button to start  your PR. 

In the PR description, make sure you link what issues your PR is resolving/fixing by typing in 

"resolves #45" or
"fixes #45"

Of course changing 45 to whatever number your issue is.

Also add a brief description of what you did to fix or resolve the issue, paste any screenshots if necessary, and write out any additional info you think might be pertinent to reviewers. If you wish to start the PR but not submit it, on the green Submit Review button, click the dropdown and select "Create Draft".

When  you're ready to publish the PR, Add me to the reviewers list and label it as Request for Review. Then click on the Ready for Review button towards the bottom of the page.

### Assign Issues
The issues tab on this project will continually be maintained. Peruse the issues page to find any issues you'd like to work on. Issues marked "good first issue" are a good start if you're not sure what to work on. Please post a message in the Now Loading Discord server if you're unsure where to start or if you have any questions with a particular issue.

### Pair Programming
Some issues will be labeled Pair Programming to indicate a good task to program with a fellow NL member, however you may pair program with someone on any task you want. If you wish to pair program with someone on a certain task, let us know on the NL Discord and be sure to assign both the programmers that will work on the task. 

## More to Come
This README file will continue to develop as we make progress on the project. Some issues will include making additions to this very file. 
