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
        'click [type="checkbox"]': 'selectProject'
    },
    
    // Initialize the view by assigning events to content and initializing
    // the template
    initialize: function () {
        this.listenTo(this.model, 'change', this.render);
    },

    render: function() {
        this.$el.html( this.template( this.model.toJSON() ) );
        return this;
    },

    selectProject: function() {
        // extract checkbox element
        $checkbox = this.$('[type="checkbox"]');
        // get the associated project id
        p_id = $checkbox.val();
        if ($checkbox.prop('checked')) {
            alert('Project ' + p_id + '  selected');
            // TODO: change class of associated button
            // add project with id=p_id to selected projects list
        }
        else {
            alert('Project ' + p_id + '  de-selected');
            //  was previously selected, restore style
            //  remove selected project from selected project list
        }
        // make order button depend on number of selected projects
    }

});
