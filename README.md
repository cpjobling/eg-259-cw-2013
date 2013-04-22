# EG-259 Web Applications Technology (2012-2013)

## Coursework 1 - Project Selctr (UI)

### Deadline

12.03 pm Friday 19 April 2013

### Background

One of my administration roles within the College of Engineering is Coordinator of Level 3 Research Projects. This involves the annual collection of project titles from staff and the distribution of these to students for selection.

This years coursework will be to develop a Single Page App (SPA) to help students with their project selection. The first part will be to develop the selection and ordering application. The second part will be to add authentication and storage of selections using a so-called RESTful API. Any really good solutions will be considered for incorporation in the real project selection process this year.

### The Task

A prototype, implemented as a traditional document-oriented HTML app accessible through [index.html](https://github.com/cpjobling/eg-259-cw-2013/blob/master/index.html) on the [GitHub project repository](https://github.com/cpjobling/eg-259-cw-2013), has been provided. By opening this page in a web browser and selecting "Project 5" in the various views you will get an idea of what is required. We can divide the work into several phases:

1. A **master detail view** of the projects. A list of project titles (a suitable JavaScript array of data objects is provided in the file [js/main.js](https://github.com/cpjobling/eg-259-cw-2013/blob/master/js/main.js)) is displayed in the left-hand column. When the user clicks on a title, the detail is displayed in the right-hand column. This should happen without a page refresh.
2. Implement a **project selection feature**. The students select projects they are interested in either using a checkbox as per the prototype or by some other mechanism, e.g. a double-click on the project title. The selection should be acknowledged by changing the colour of the selected project. This should be reversible, so checking (or double-clicking) an already selected project should change it to unselected and return the colour to the default. Note that user interface changes are most easiliy effected by adding or removing of CSS classes from the elements concerned.
3. Implement a **selection sorter control**. Once a set of at least 5 projects have been selected, students can use the *Order selected projects* button to go into sort mode (See [order.html](https://github.com/cpjobling/eg-259-cw-2013/blob/master/order.html) in the prototype). Either on a separate view (or perhaps on the the same view above the list of selected projects) the student can use some mechanism to sort the selected projects into the desire order with most prefered at the top. It still be possible to select and view the details of the projects in this mode. Any mechanism you like can be used for this sorting procedure providing that the sorted list of project ids is available as an ordered list that can be stored and recalled later. You will probably need a separate *selected projects* model, probably containing a JavaScript array of project ids, for this.
4. Implement a **project submission and confirmation view**. Once the list is complete, a submit project selection button should be available, which returns the user to a confirmation view (see [receipt.html](https://github.com/cpjobling/eg-259-cw-2013/blob/master/receipt.html) in the supplied prototype. This view will have a "New selection" button that takes the user the original selection view. This view probably should have the original list at the top and the remaining unselected projects at the bottom as shown in the dummy [new-selection.html](https://github.com/cpjobling/eg-259-cw-2013/blob/master/new-selection.html) page.

Important Note: **It is not required that the data goes anywhere when the submit button is pressed. This feature will be added as part of Coursework 2.**

Various variations and enhancements are possible. Here are some suggestions and some implementation notes:

* Drag-and-drop selection will be more challenging than some other methods
* The selection and sorting could be done on the same page, perhaps with selected projects moving into a sort region as they are selected. 
* You could use a filter button to show only non-selected projects, or selected projects, or only projects by a certain supervisor, or research centre, etc.
* You could implement a search feature (challenging)
* Double-click is not an action that you can perform on a mobile device!

Some marks will be available to reward such enhancements.

### The Starting Template

As distributed, this is a dummy app. It behaves somewhat like I want the final app
to behave but it uses traditional server fetches to change the contents of the pages (or *views*). In the
final app, the first coursework requires that you get user interface to
work as a Single Page App (SPA) using JavaScript to react to the page
and redraw just the parts that need to change. 

The second coursework will build upon this app to allow the download of
data in a JSON format from a Restful API and the upload of student selections, also in JSON, via an Ajax call.

The styles and basic JavaScript dependencies have been set up for you, but you may customise them if you wish.

### Recommended Approach

You should fork this repository (you will need a GitHub account) then clone a local copy. You should set the "upstream" repository to <https://github.com/cpjobling/eg-259-cw-2013>. Full instructions are given here: <https://help.github.com/articles/fork-a-repo>. On a Mac, the easiest way to do this is from a Terminal window. On a Windows machine, you should download and install the [GitHub for Windows](http://windows.github.com/) client and use the GitHub (command line) shell. 



For the implementation we would recommend the use of a so-called Model View Controller (MVC) framework. We shall study one of these, probably Backbone.js, in class. You could implement the client app using pure  "*vanilla*" JavaScript or even jQuery, but you will probably find that the coupling of your code to the DOM and the chaining of complex event handlers that would result, may well make the code more complex than it needs to be.

For more on MVC libraries and examples of their use, please visit the [TodoMVC](http://addyosmani.github.com/todomvc/) site.

### Running the Application

The application will run from a local filesystem, but it is more realistic to run it in a browser over an HTTP connection.

If you have [Python](Deploying your App as an EG-259-VM Submodule) installed on your development system (Python is already instaled on Mac and most Linux distributions), you can load the application in your browser by using the built-in server. See [Using the Built-in Server](#using-the-built-in-server) for details.

You can also install your forked version of the project into your copy of the [EG-259 Virtual Machine](https://github.com/cpjobling/eg-259-vm). See [Deploying your App as an EG-259-VM Submodule](#deploying-your-app-as-an-eg-259-vm-submodule) for a recipe for this.

#### Using the Built-in Server

The application as distributed contains a simple web server implemented using Python's ``SimpleHttpServer`` class. Running

``
./bin/server
``

from the top-level directory will start an HTTP server (which only serves static files) that is listening to port 3000. Connecting to <http://localhost:3000> will load *index.html* in your browser and any changes that you make can be instantling applied by refreshing the browser.

For windows users, executing the command file ``.\bin\server.bat`` from the Command Prompt will have the same affect.

#### Deploying your App as an EG-259-VM Submodule

You can of course deploy your version of the Web App by copying the source files into the ``web`` folder (or one of its subfolders) on your copy of the EG-259 Virtual Machine. You can enjoy the benefits of this along with version control by using Git Submodules. The set-up is quite straightforward.

Simply chose a URL where you wish your app to be. I suggest something like ``/pselectr_student_number``. Go to the your copy of ``eg-259-vm`` and clone your fork of this project as a submodule.

    $ ~/eg-259-vm> git submodule add git:/github.com:your_github_user_name/eg-235-cw-2013.git web/pselectr_student_number

This command will create a new folder ``eg-259-vm/web/pselectr_student_number`` in your web space, initialize a git repository, download a copy of the cloned ``eg-259-cw-2013`` repository from GitHub, checkout the master branch and make a record of this repository as a submodule of your copy of the ``eg-259-vm project``. 

You will now have an independent Git repository inside your copy of the EG-259 virtual machine which allows you to develop and version control your web app indepdentantly of the ``eg-259-vm`` repository. You will want to check-in the changed ``.gitmodules`` file (note that this file name starts with a period, and so is hidden on Mac and Linux machines) which you can do by issuing these commands:

    $ ~/eg-259-vm/web> git add ../.gitmodules
    $ ~/eg-259-vm/web> git commit -m "Add eg-259-cw-2013 as submodule"

You can continue to pull changes from <http://github.com/cpjobling/eg-259-vm> independently of any changes you make to the new repository in ``eg-259-vm/web/pselectr_student_number``. Furthermore, after issuing the ``vagrant up`` command, your web app will appear at URL <http://localhost:4567/pselectr_student_number>, and even better, any changes that you make locally will be automatically updated in the browser on refresh.

Lastly, if you ever need to sync your submodule changes from the ``eg-259-vm`` folder run the commands:

    $ ~/eg-259-vm> git pull
    $ ~/eg-259-vm> git submodule update
    
The first time you do this, Git will incorporate any changes from <http://github.com/cpjobling/eg-259-vm> and clone the original code for *this* repository as submodule ``web/eg-259/webapp``. Thus <http://localhost:4567/eg-259/webapp> is a copy of the static version of the coursework site that you can use for reference. Thereafter, it will update ``web/eg-259/webapp`` and pull any changes that you have made to your copy of the coursework that have been pushed to GitHub. After this initial setup, as your changes will be recorded in the local submodule anyway, the ``submodule update`` command will only be useful for setting up ``eg-259-vm`` on a different machine or in a different folder.

For more information about Git Submodules see [Git Tools - Submodules](http://git-scm.com/book/en/Git-Tools-Submodules) [7]. For more on use of Git for version control, we recommend that you spend 30 minutes to work through the on-line [Try Git](http://try.github.com/levels/1/challenges/1) tutorial [8], and thereafter refer to the [Pro Git Book](http://git-scm.com/book) [7].

### Submission and Assessment

The easiest way to submit your solution will be to fork my version of the app and send me a pull request when you wish to submit your version of the final code.

The *only* resources that will be assessed will be your version of *index.html* plus your versions of *main.js* and *main.css* and any additional images and resources that you add to the project. You will not need to use the other HTML pages that I have provided, and they should be removed from your project when their functionality has been replaced by the equivalent SPA feature.

for this exercise there are 15% of the 25% available for Coursework in EG-259. An additional 5%  will be awarded for successfully creating the RESTful API for the back-end and 5% is awarded to your engagement with PeerWise.

**Your assistance in coming up with a [fair marking scheme](assessment-criteria.md) would be appreciated**.

### References

1. Addy Osmani, Developing Backbone.js Applications, O'Reilly, 2013 (Estimated). E-book URL: [addyosmani.github.io/backbone-fundamentals/](http://addyosmani.github.io/backbone-fundamentals/). 
2. Addy Osmani and Sindre Sorhus, *TodoMVC*. The same Web App implemented using a range of JavaScript MVC frameworks for the purposes of comparison and evaluation. URL: <http://addyosmani.github.com/todomvc/>.
3. Backbone.js, A popular and compact JavaScript MVC framework. URL: <http://backbonejs.org/>.
4. jQuery, a popular JavaScript library which gives a more pleasant API to the DOM and cross-browser support. URL: <http://jquery.com/>
5. (Twitter) Bootstrap - a popular and widely used CSS and JavaScript framework for creating responsive web apps. Originally developed by engineers at Twitter. Now maintained and supported as an open source project. URL: <http://twitter.github.com/bootstrap/>.
6. HTML5 Boiler Plate - a starter pack for web apps. URL: <http://html5boilerplate.com/>
7. Initializr - an interactive tool for creating boilerplate HTML5 projects. Currently supports HTML5 Bolier Plate and Bootstrap. Used as a starting point for this repository. URL: <http://www.initializr.com/>
8. Scott Chacon, *Pro Git*, Apress, 2009. Available on-line for free in various formats at URL <http://git-scm.com/book>.
9. *Try Git*, Free on-line game-like interactive tutorial created by [codeschool.com](http://www.codeschool.com) for GitHub. URL: <http://try.github.com/levels/1/challenges/1>.

