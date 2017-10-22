# TWEB Evaluation
## Mandatory
* *The app is online and publicly available (e.g. on heroku)*
    * Yes, see on the [Github.io page](https://rhod3.github.io/TWEB2017-Github-Analytics/)
* *Someone arriving on the app, without prior knowledge of the project, understands what it is about and can use it.*
    * Yes, Readme in both the agent and client repository, and the website is self-explanatory.
* *The app uses a nice visual template.*
    * It's a subjectiv opinion, but yes.
* *There is a repo with a README.md file that explains what the project is about, how to run it locally and how to build it.*
    * Yes, both repo have a Readme.
* *The build process invokes a linter. The linter is happy with the quality of your code (no error).*
    * Yes, the linter dependencies are in the *package.json*.
* *The app fetches data from GitHub and presents it in the UI.*
    * Yes.
* *The app works (no crash, no obvious problem in the interactivity, etc.)*
    * Yes.

## Optional
* Extra effort has been put in the UI/UX.
    * The data are displayed in a nice chart and a wonderful cloud of words
* Extra effort has been put in the depth of the analysis
(“you are not just sorting developers per commit
count”).
    * 

## What could be improved ?
* The handling of new user to analyse.
* Only update the not already crawled data.
* Better error handling

## Github API Rate Limit
One the main problem we faced during this little project is how much query we have to do to the Github API.
* First, we have to fetch all the collaborated repo of a user
* Then, for each repo, we fetch all the commit from our user.