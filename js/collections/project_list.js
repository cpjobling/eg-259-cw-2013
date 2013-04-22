// js/collections/project_list.js
app = app || {};

// The `ProjectList` is the list of available projects that is loaded at the start of the
// app.
app.ProjectList = Backbone.Collection.extend({
    // The Pmodel is `Project`
    model: app.Project,
    
    // In this version of the client, we will save all of the project items 
    // in [HTML5 local storage](http://docs.webplatform.org/wiki/apis/web-storage/Storage/localStorage)
    // under the `"app name s-number-project-list"` namespace.
    localStorage: new Backbone.LocalStorage('pselctr-123456-project-list'),

    // The URL represents the RESTful endpoint for the client-server app. It's only a placeholder
    // for now but all client-side URLs (for example as defined in the router) will be prefixed
    // with this string.
    url: '/projects'
});

// In this version, we create projects from the provided test data 
app.projectList = new app.ProjectList(app.data);