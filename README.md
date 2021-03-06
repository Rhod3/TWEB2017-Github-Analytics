# TWEB2017-Github-Analytics
This repository contains the client side of the TWEB2017 Github Analytics project, which in our case focuses on the commit messages of a user.

You can access the main client page on the dedicated [Github.io page](https://rhod3.github.io/TWEB2017-Github-Analytics/).

If you're from the TWEB course, you can find a small report [here](https://github.com/Rhod3/TWEB2017-Github-Analytics/blob/master/report/report.md).

## What does the code do ?
It displays data from a json file uploaded by the [agent / crawler](https://github.com/Rhod3/TWEB2017-Github-Analytics-Server) running on [Heroku](https://www.heroku.com/).

## What does it display ?
Basically, you can select a user from a pool of already processed users. A few stats will then be displayed:
* A summary of how many words are contained in your commit message. A graph also displays the average number of words you put per commit message, sorted by language.
* A word cloud of all the commit messages from the user.

## How can I run it locally ?
To run the client side locally, you just have to fork this repo and setup your Github.io page to use the ressource of the *docs/* folder.

## I don't see my Github username on your website, can I add it ?
For now, you can only do it in an non user-friendly way: you'll have to do it with a pull request.

The PR will contain only one modification: adding your name in the [*docs/data/data.json*](https://github.com/Rhod3/TWEB2017-Github-Analytics/blob/master/docs/data/data.json) file, like so:
```
{
  "YOUR_USERNAME": {},
  ...
  ..
  .
}
```
Your username will then appear on the website once I accept the PR and the agent has runned at least once, which happen once a day.
