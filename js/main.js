// # PSELECTR
// -- *a web app for selecting Undergraduate Projects*
//
// This file has been documented in [Markdown](http://daringfireball.net/projects/markdown/) 
// using Jeffrey Ashkenas's *Docco* system.
// To see the formatted version of this file open [/docs/main.html](/docs/main.html).
// To generate your own copy of the documentation you will need to install [node.js](http://nodejs.org/)
// and the [docco package](http://jashkenas.github.com/docco/). See the docco docs for instructions.

// ## The Program
$(document).ready(function () {
    app.PSelectr = new app.AppRouter();
    Backbone.history.start();
});

// ## Table of Contents
//
// ### Models and Data
// * Models: [js/models/project.js](project.html)
// * Data: [js/data/data.js](data.html)
//
// ### Collections
// * Collections: [js/collections/project_list.js](project_list.html)
//
// ### Views
// * [js/views/home_view.js](home_view.html)
// * [js/views/project_view.js](project_view.html)
// * [js/views/project_list_view.js](project_list_view.html)
// * [js/views/project_list_item_view.js](project_list_item_view.html)
//
// ### Routers
// * [js/views/app_router.js](app_router.html)
//
// ### Main
// * [js/main.js -- this file](main.html)
//
// ## Suggestions
//
//   * Maintain a seperate list of projects that have been selected. It is very easy to
//     move a project from the `ProjectList` to the `SelectedProjectList`
//   * The project `id` is the key to finding and retrieving project descriptions.
//   * Don't add any attributes to `Project`, keep state information in the collections.
//   * Only the `SelectedProjectList` will be stored when the submit button is pressed.

