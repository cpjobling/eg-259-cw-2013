// js/views/project_list_view.js

var app = app || {};

// ### The (initial) project list view
// Acts as the navigation for browsing projects and selecting
// projects for sorting
app.ProjectListView = Backbone.View.extend({
// Extracted from original dummy project view
    tagName: 'ul',
    id: 'p-list',
    
// Initialize the view by assigning events to content and initializing
// the template
    initialize: function () {
        this.collection.bind('all', this.render, this);
        this.listenTo(app.Projects, 'reset', this.addAll);
        this.render();
    },

    render: function() {
        this.addAll();
        return this;
    },

    addOne: function(project) {
        var view = new app.ProjectListItemView({ model: project});
        $('#p-list').append( view.render().el );
    },

    addAll: function() {
        $("#p-list").empty();
        app.Projects.each(this.addOne, this);
    }
});