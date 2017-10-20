# TWEB2017-Github-Analytics

This repository contains the client side of the TWEB2017 Github Analytics project. 

## What does the code do ?

It displays data from a json file uploaded by the [agent / crawler](https://github.com/Rhod3/TWEB2017-Github-Analytics-Server) running on heroku.

## What does it display ?
Basically, you can select a user from a pool of already processed users. A few stats will be displayed:
* A summary of added, deleted and total modified lines for your commits. You'll also see a graph: it contains the number of modified lines per commit sorted by language.
* A summary of how many words are contained in your commit message. A graph also displays the mean of how much words you put per commit message, sorted by language.

## What could be improved ?
* The handling of new user to analyse.
* Only update the not already crawled data.
* Better error handling

## Github API Rate Limit
One the main problem we faced during this little project is how much query we have to do to the Github API.
* First, we have to fetch all the collaborated repo of a user
* Then, for each repo, we fetch all the commit from our user.