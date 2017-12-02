# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

Running Locally:

set up node first:
./bin/webpack-dev-server

then run rails normally
rails s

Deploying to Heroku
Precompile assets and push to master:
```rm -rf ./public/assets && mkdir public/assets && rake assets:precompile && git add -A && git ci -am "heroku push"```

Then push to heroku master:
```git push heroku master```
