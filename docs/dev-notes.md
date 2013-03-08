# Development Notes

Some preliminaries. If you haven't already, set [my repo](https://github.com/cpjobling/eg-259-cw-2013.git) as your "upstream" so that you can
download these notes (and any updates to the code).

    git remote add upstream https://github.com/cpjobling/eg-259-cw-2013.git

Then fetch and merge the latest updates:

    git fetch upstream
    git merge upstream/master

As we will be using Backbone.js, it will be a good idea to have access to the [Backbone.js
documentation](http://backbonejs.org/) to hand.

It would also be good to download a developer version of Backbone.js and its dependencies. I suggest
that we store these in ``js/vendor`` in your forked copy of the project.

Now let's think about these questions.

## Models

* What models will we need?
* What attributes will the models have?
* How can create some data to work with?

I suggest that we use the drop-in replacement for ``Backbone.sync()`` [backbone-localstorage.js](https://github.com/jeromegn/Backbone.localStorage). This will avoid the need to have a RESTful api at this stage of development. All the project and project selections data will be stored in the browser using [HTML5 Web Storage](http://docs.webplatform.org/wiki/tutorials/offline_storage). We can just load our dummy data into the appropriate collections when our App starts, and any changes we make will be persisted, locally, in the browser. Later, when we build a server, we can replace local storage by RESTful server storage by removing the library from the application.

## Collections

* What collections will we need?

## Views

* What views will we need?

## Templates

* What templates will we need?

## Router

* What are our application routes?

## Events

* What events will we need?

## What can we achieve today?
