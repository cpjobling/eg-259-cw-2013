// js/views/project_view.js
app = app || {} ;

// ## The Detail View
// Rendered to right of list
app.ProjectView = Backbone.View.extend({

    className: "span8",
    tagName: "div",

    initialize: function () {
        this.template = _.template($('#project-show').html());
        this.model = this.options.model;
        this.render();
    },

    render: function () {
        $('.span8').remove();
        $(this.el).html(this.template(this.model.toJSON()));
        console.log(this.el);
        $('.row-fluid').append(this.el);
        return this;
    },

});