// js/views/project_list_view.js
app = app || {};

// ### The (initial) project list view
// Acts as the navigation for browsing projects and selecting
// projects for sorting
app.ProjectListView = Backbone.View.extend({
// Extracted from original dummy project view
    tagName: 'ul',
    id: 'p-list',
    template: _.template($('#project-list').html()),

// Initialize the view by assigning events to content and initializing
// the template
    initialize: function () {
        this.collection.bind('all', this.render, this);
    },


// Renders each element of the list -- creates a menu
    render: function (eventName) {
        var template = this.template,
                  el = this.$el,
          collection = this.collection;

        $("#p-list").empty();

        collection.each(function (project) {
            $("#p-list").append(template(project.toJSON()));
        });

        return this;
    }
});