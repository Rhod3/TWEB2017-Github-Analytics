# TWEB2017-Github-Analytics
This repository contains the client side of the TWEB2017 Github Analytics project, which in our case focuses the commit messages of a user.

You can access the main client page on the dedicated [Github.io page](https://rhod3.github.io/TWEB2017-Github-Analytics/).

## What does the code do ?
It displays data from a json file uploaded by the [agent / crawler](https://github.com/Rhod3/TWEB2017-Github-Analytics-Server) running on [Heroku](https://www.heroku.com/).

## What does it display ?
Basically, you can select a user from a pool of already processed users. A few stats will then be displayed:
* A summary of how many words are contained in your commit message. A graph also displays the mean of how much words you put per commit message, sorted by language.
* A word cloud of all the commit messages from the user.

## How can I run it locally ?
To run the client side locally, you just have to fork this repo and setup your Github.io page to use the ressource of the *docs/* folder.

## I don't see my Github username