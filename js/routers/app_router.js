// js/routers/app_router.js

var app = app || {};

// ### The Router
app.AppRouter = Backbone.Router.extend({

    routes: {
        "": "home",
        "projects/:id" : "show"
    },

    home: function () {
        new app.HomeView();
    },

    show: function(id) {
// Seem to have to reconstruct HomeView to allow "deep-linking"
        new app.HomeView();            
        this.toggleStyles(id);
        project = app.Projects.get(id);
        new app.ProjectView({model: project});
    },
// Toggle styles ... uses jQuery to find element(s) that were selected and
// remove the "selected" class, then add the "selected" class to the button
// that is selected
    toggleStyles: function(e) {
        $(".project.btn.btn-info").removeClass("btn-info");
        $('a[href$="projects/' + e + '"]').addClass("btn-info");
    }
});
