// js/views/home_view.js

var app = app || {};

// ### The Home View
// Serves as a container for the top-level template
app.HomeView = Backbone.View.extend({
    
    // attach view to the body element.     
    el: '#app',

    // The template is the container for the entire app.
    // It is defined in the `<script id="item-home">` element.    
    template: _.template($('#item-home').html()),

    initialize: function () {
        this.render();
    },

    // The render function for this view. Returns the DOM
    // that represents the whole view, but does not cause
    // the browser to insert into the DOM just yet.
    render: function() {
        console.log('Rendering home view');
        // `$el` is the jQuery version of the current view's element
        // that is the `<div id="app">` tag.
        var el = this.$el
    
        // Clear the element then append the contents of the template.
        el.empty();
        el.append(this.template());

        // Create a view for the list of projects 
        var availableProjectsListView = new app.ProjectListView({collection: app.Projects});

        // Replace the `<ul id="p-list"></ul>` element, with the rendered list
        $("#p-list").append(availableProjectsListView.render().el);

        // return `this`, allows method chaining later
        return this;
    }
});