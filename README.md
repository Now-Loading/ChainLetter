# Welcome to Chain Letter

Chain Letter is Now Loading's first collaborative project! This app will be used as a creative writing tool for writers and readers. 

## Writers
Writers can start their own story chain or add a link to an existing chain. You can only write up to 240 characters per link and you can only link off other user's links. You can add a link to any link within an existing chain (not just the end of the chain). 

## Readers
Readers will start at the beginning of any story. If there are multiple links branching from one link in the story chain, they will they will have the ability to choose which link they'd like to move to or be directed to a random link of all the possible links from their current link.

## Developers

### Install and Run
Once you've forked this repo, clone the newly forked repo in your terminal at whatever directory you want to store this project in. Then run the following commands:
```
# navigate into newly created folder
cd ./chainletter
# install all node modules for this project
npm i
```

Next you'll want to include the .env file. Add a new file to the root directory of the project and name it `.env.development`. Then navigate [here](https://github.com/Now-Loading/secret-files/blob/main/.env.development). Copy and paste the contents of that file in github into your new `.env.development` file. 

You'll want to run your firebase emulators to get a server running before continuing to the next step. You can do that by reading the firebase instructions in the README.md file [here](https://github.com/Now-Loading/ChainLetter/tree/develop/firebase).

After you've gotten your firebase emulators running and a user added to the auth table, go back to the root directory of the project and run the app!
```
# navigate to the root folder from the firebase folder
cd ../

# run the app
npm run start
```

Once on the home page, you should be able to confirm you've gotten your servers set up properly by logging in as the user you created in the auth table.
### Assign Issues
The issues tab on this project will continually be maintained. Peruse the issues page to find any issues you'd like to work on. Issues marked "good first issue" are a good start if you're not sure what to work on. Please post a message in the Now Loading Discord server if you're unsure where to start or if you have any questions with a particular issue.

### Pair Programming
Some issues will be labeled Pair Programming to indicate a good task to program with a fellow NL member, however you may pair program with someone on any task you want. If you wish to pair program with someone on a certain task, let us know on the NL Discord and be sure to assign both the programmers that will work on the task. 

## More to Come
This README file will continue to develop as we make progress on the project. Some issues will include making additions to this very file. 
