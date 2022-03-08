# Northcoders News

Northcoders News is a social news aggregation, web content rating, and discussion website.

Northcoders News has articles which are divided into topics. Each article has user curated ratings and can be up or down voted using the API. Users can also add comments about an article.

This sprint should consolidate your understanding of making a [C.R.U.D](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) application from a front end perspective.

## BE Endpoints

The project currently has the following endpoints:

- `GET /api` - responds with a JSON representation of all the available endpoints of the API
- `GET /api/topics` - responds with an array of topic objects, each of which should have the properties: slug, description
- `GET /api/articles/:article_id` - responds with an article object by id containing the correct article properties
- `PATCH /api/articles/:article_id` - request body accepts an object in the form { inc_votes: newVote }, responds with article containing incremented/decremented votes
- `GET /api/users` - responds with an array of objects, each object with the sole property 'username'
- `GET /api/articles` - responds with an array of article objects, each object with the correct properties
- `GET /api/articles/:article_id/comments` - responds with an array of comments, each containing the correct properties
- `POST /api/articles/:article_id/comments` - responds with comment newly added to the article by id
- `DELETE /api/comments/:comment_id` - responds with comment newly added to the article by id

## Kanban

### Link to your Trello Board here: https://trello.com/b/cEYt2hYP

To keep track of the tasks involved in this project we're going to use a kanban board. Ensure that you work on one _ticket_ at time. You can click on the ticket to find out more information about what is required for the feature. A ticket is not considered complete unless both the happy path and errors response are handled and there is a basic structure to your styling.

**We suggest you work through the tickets from top to bottom.**

## Git Branching and Pull Requests

You will be working on each ticket on a new **branch**.

To create and switch to a new git branch use the command:

```
git checkout -b <new branch name>
```

This will create a branch and move over to that branch. (Omit the `-b` flag if you wish to switch to an already existing branch).

We recommend that you name the branch something that clearley shows the ticket you are working on. eg. `fe-ncnews-display-articles`

When pushing the branch to git hub ensure that you make reference to the branch you are pushing to on the remote.

```
git push origin <branch name>
```

From github you can make a pull request and share the link and ticket number on your `nchelp` with a zoom link for you to demo your feature. A tutor will swing by to review your code. Ensure that you keep your trello up to date whilst you await the PR approval.

Once a pull request been accepted be sure to switch back to the main branch and pull down the updated changes.

```
git checkout main

git pull origin main
```

You can tidy up your local branches once they have been pull into main by deleting them:

```
git branch -D <local branch>
```

## Important

This sprint is among the ones we'll ask you to complete in order to put you forward for jobs. Put a little bit of love into it! :) <3
