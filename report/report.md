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
* *Extra effort has been put in the UI/UX.*
    * The data are displayed in a nice chart and a wonderful cloud of words. The bootstrap template has been cleaned of unnecessary feature and works well on both desktop and mobile platforms.
* *Extra effort has been put in the depth of the analysis
(“you are not just sorting developers per commit
count”).*
    * The data we extract from our API calls require a bit of processing so that we only have interesting informations in the file we upload on the client repo.
* *Extra effort has been put to make the app “sticky”
and/or “viral”. There is something about it that makes
it particularly original, fun. Or there is something that
will make people come back to it.*
    * The core of our website, commit messages, is a common topic amongst developpers. Should they be long and descriptive or short and simple ? While we don't provide an answer to that, we allow developpers to come and take a look at the length and content of the average commit message from a handful of users.

## What could be improved ?
* The handling of new user to analyse.
    * Right now the only way is through pull requests, which is not really user-friendly. A better way to handle new user would be with a dedicated express.js server that would provide a few endpoints. It would register new user request, and the agent / crawler would ask if there is any new user to process.
* Only update the not already crawled data.
    * Every time the agent / crawler is awoken, it fetches all users commit from the beginning. A better way to handle the update would be to store a timestamp for each repositories a user has collaborated in. The agent could then use the *since* parameter of the [query](https://developer.github.com/v3/repos/commits/#list-commits-on-a-repository) to only update the not already processed commits.
* Better error handling
    * Error handling in the agent is kind of approximative as this was our first Javascript project. For now, it should handle the most common error, but it will probably crash it encounters a new one.

## Github API Rate Limit
One the main problem we faced during this little project is how much query we have to do to the Github API. 

The first idea we had forced us to query each commit to get the stats for the add/deleted/modified lines. This killed our rate-limit really quickly, sometimes reaching the limit even when the agent didn't had finished with one user.

We didn't like that, so we changed what we wanted to show to the user. The agent doesn't have to query each commit anymore. Nonetheless, if we reach the API rate-limit in one update, the superagent-throttle is here to protect us from receiving an error.
