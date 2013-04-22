// js/views/project_view.js
var app = app || {} ;

// ## The Detail View
// Rendered to right of list
app.ProjectView = Backbone.View.extend({

    className: "span8",
    tagName: "div",

    template: _.template($('#project-show').html()),

    initialize: function () {
        this.model = this.options.model;
        this.render();
    },

    render: function () {
        $('.span8').remove();
        $(this.el).html(this.template(this.model.toJSON()));
        $('.row-fluid').append(this.el);
        return this;
    },

});