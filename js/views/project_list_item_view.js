// js/views/project_list_item_view.js

var app = app || {};

// ### The project list item view
// Renders a single project item
app.ProjectListItemView = Backbone.View.extend({
    // Extracted from original dummy project view
    tagName: 'li',
    
    // Cache the template function for a single item.
    template: _.template($('#project-list-item').html()),

    // The DOM events specific to an item
    events: {

    },
    
    // Initialize the view by assigning events to content and initializing
    // the template
    initialize: function () {
        this.listenTo(this.model, 'change', this.render);
    },

    render: function() {
        console.log('rendering project list item view');
        this.$el.html( this.template( this.model.toJSON() ) );
        return this;
    },

});
