# My first GitHub action
I used this repository to explore GitHub actions.

I created a simple react app that displays the current day and time and then I wrote some basic tests for it.

I then created 3 GitHub actions using yaml files:

- First one was a simple Hello World, it runs on every push to the main branch and it just display a Hello World string
- Second one runs on every pull request. It runs npm test to make sure that all tests still pass, if they don't it will display an error and the developer will be suggested NOT to merge the branch to main until the issues are fixed.
- Third one runs on every push to the main branch, and it is a deployment action. I set-up a project on Firebase and added the firebase token to the GitHub secrets of my project. I then created a script in yaml that runs on every push to the main branch (including merging from a pull request). The action install all dependencies, builds the project and then it authenticates on firebase using the secret token and it runs the command `firebase deploy` to deploy the latest changes to code that is hosted on firebase.
