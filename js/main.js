// # PSELECTR
// -- *a web app for selecting Undergraduate Projects*
//
// This file has been documented in [Markdown](http://daringfireball.net/projects/markdown/) 
// using Jeffrey Ashkenas's *Docco* system.
// To see the formatted version of this file open [/docs/main.html](/docs/main.html).
// To generate your own copy of the documentation you will need to install [node.js](http://nodejs.org/)
// and the [docco package](http://jashkenas.github.com/docco/). See the docco docs for instructions.

// ## The Program
// Wrap entire program as a self calling anonymous function and pass
// the jquery object `jQuery` as shorthand `$`. This ensures that
// jQuery will be available in the scope of our program.
(function($){

// ## The data
// Here we define some dummy data that we can work with while we are
// developing the client-side behaviour. Eventually, the source of this
// data will be a restful API that will return the JSon to us.
    data = [
// The array `data` is an array of *projects*.
// Each project has an `id`, `title`, `discipline`, `supervisor`
// (another object), and a `description`.
    {
        id: 1,
        title: 'Project 1',
        discipline: 'ICCT',
        supervisor: {
            name: 'Dr Chris P. Jobling',
            email: 'C.P.Jobling@Swansea.ac.uk',
            centre: {
                name: 'Multidisciplinary Nanotechnology Centre',
                code: 'MNC'
            }
        },
        description: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan, felis nec euismod bibendum, tellus mi hendrerit risus, vitae luctus lorem dolor eu libero. Morbi a hendrerit libero. Nullam ac pharetra ante. Nam accumsan eros vitae enim bibendum egestas. Proin malesuada diam et augue ultricies a accumsan quam lacinia. Integer non nulla id purus pretium ultrices. Praesent non magna ac ante consequat convallis. Morbi elementum velit sit amet diam interdum quis egestas felis porta. Nullam et nisi massa. Donec ut tellus erat, quis aliquam dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus viverra tempus venenatis. Aenean euismod mollis leo, a ultricies lacus euismod sed. Nunc hendrerit dui non mauris pellentesque vitae eleifend nunc elementum. Praesent viverra euismod mauris vel mollis. Sed vel est est.</p><p>Mauris scelerisque dapibus nisi. Fusce ut mi eget leo tincidunt fermentum. Sed dapibus consequat tortor, quis dapibus purus tincidunt quis. Nulla vitae felis dignissim nisl ultricies ornare vitae eu purus. Integer nec sapien sed metus mollis cursus sed tincidunt tortor. Curabitur sagittis, augue eu tristique ultricies, magna velit elementum nibh, in rhoncus diam mi at sapien. Nam sed diam ut lorem feugiat malesuada. Nunc porta ullamcorper erat vitae faucibus. Sed vehicula ipsum et lectus sagittis vel lacinia neque mattis. Maecenas consectetur dui eu nisi auctor pharetra. Donec lobortis enim et sem pulvinar quis blandit nisl consequat. Quisque ligula tellus, sagittis vel accumsan vulputate, congue sit amet nulla. Proin mattis, purus ultrices molestie faucibus, ante quam venenatis turpis, vel porta turpis nisl sit amet arcu. Sed ullamcorper hendrerit faucibus. Pellentesque et est eu elit euismod varius. Proin adipiscing dolor non mi consequat lacinia dictum mauris scelerisque.</p>"
    },
//   We have provided thirteen of them!
    {
        id: 2,
        title: 'Project 2',
        discipline: 'ICCT',
        supervisor: {
            name: 'Dr Chris P. Jobling',
            email: 'C.P.Jobling@Swansea.ac.uk',
            centre: {
                name: 'Multidisciplinary Nanotechnology Centre',
                code: 'MNC'
            }
        },
        description: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan, felis nec euismod bibendum, tellus mi hendrerit risus, vitae luctus lorem dolor eu libero. Morbi a hendrerit libero. Nullam ac pharetra ante. Nam accumsan eros vitae enim bibendum egestas. Proin malesuada diam et augue ultricies a accumsan quam lacinia. Integer non nulla id purus pretium ultrices. Praesent non magna ac ante consequat convallis. Morbi elementum velit sit amet diam interdum quis egestas felis porta. Nullam et nisi massa. Donec ut tellus erat, quis aliquam dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus viverra tempus venenatis. Aenean euismod mollis leo, a ultricies lacus euismod sed. Nunc hendrerit dui non mauris pellentesque vitae eleifend nunc elementum. Praesent viverra euismod mauris vel mollis. Sed vel est est.</p><p>Mauris scelerisque dapibus nisi. Fusce ut mi eget leo tincidunt fermentum. Sed dapibus consequat tortor, quis dapibus purus tincidunt quis. Nulla vitae felis dignissim nisl ultricies ornare vitae eu purus. Integer nec sapien sed metus mollis cursus sed tincidunt tortor. Curabitur sagittis, augue eu tristique ultricies, magna velit elementum nibh, in rhoncus diam mi at sapien. Nam sed diam ut lorem feugiat malesuada. Nunc porta ullamcorper erat vitae faucibus. Sed vehicula ipsum et lectus sagittis vel lacinia neque mattis. Maecenas consectetur dui eu nisi auctor pharetra. Donec lobortis enim et sem pulvinar quis blandit nisl consequat. Quisque ligula tellus, sagittis vel accumsan vulputate, congue sit amet nulla. Proin mattis, purus ultrices molestie faucibus, ante quam venenatis turpis, vel porta turpis nisl sit amet arcu. Sed ullamcorper hendrerit faucibus. Pellentesque et est eu elit euismod varius. Proin adipiscing dolor non mi consequat lacinia dictum mauris scelerisque.</p>"
    },
    {
        id: 3,
        title: 'Project 3',
        discipline: 'ICCT',
        supervisor: {
            name: 'Dr Chris P. Jobling',
            email: 'C.P.Jobling@Swansea.ac.uk',
            centre: {
                name: 'Multidisciplinary Nanotechnology Centre',
                code: 'MNC'
            }
        },
        description: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan, felis nec euismod bibendum, tellus mi hendrerit risus, vitae luctus lorem dolor eu libero. Morbi a hendrerit libero. Nullam ac pharetra ante. Nam accumsan eros vitae enim bibendum egestas. Proin malesuada diam et augue ultricies a accumsan quam lacinia. Integer non nulla id purus pretium ultrices. Praesent non magna ac ante consequat convallis. Morbi elementum velit sit amet diam interdum quis egestas felis porta. Nullam et nisi massa. Donec ut tellus erat, quis aliquam dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus viverra tempus venenatis. Aenean euismod mollis leo, a ultricies lacus euismod sed. Nunc hendrerit dui non mauris pellentesque vitae eleifend nunc elementum. Praesent viverra euismod mauris vel mollis. Sed vel est est.</p><p>Mauris scelerisque dapibus nisi. Fusce ut mi eget leo tincidunt fermentum. Sed dapibus consequat tortor, quis dapibus purus tincidunt quis. Nulla vitae felis dignissim nisl ultricies ornare vitae eu purus. Integer nec sapien sed metus mollis cursus sed tincidunt tortor. Curabitur sagittis, augue eu tristique ultricies, magna velit elementum nibh, in rhoncus diam mi at sapien. Nam sed diam ut lorem feugiat malesuada. Nunc porta ullamcorper erat vitae faucibus. Sed vehicula ipsum et lectus sagittis vel lacinia neque mattis. Maecenas consectetur dui eu nisi auctor pharetra. Donec lobortis enim et sem pulvinar quis blandit nisl consequat. Quisque ligula tellus, sagittis vel accumsan vulputate, congue sit amet nulla. Proin mattis, purus ultrices molestie faucibus, ante quam venenatis turpis, vel porta turpis nisl sit amet arcu. Sed ullamcorper hendrerit faucibus. Pellentesque et est eu elit euismod varius. Proin adipiscing dolor non mi consequat lacinia dictum mauris scelerisque.</p>"
    },
    {
        id: 4,
        title: 'Project 4',
        discipline: 'ICCT',
        supervisor: {
            name: 'Dr Chris P. Jobling',
            email: 'C.P.Jobling@Swansea.ac.uk',
            centre: {
                name: 'Multidisciplinary Nanotechnology Centre',
                code: 'MNC'
            }
        },
        description: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan, felis nec euismod bibendum, tellus mi hendrerit risus, vitae luctus lorem dolor eu libero. Morbi a hendrerit libero. Nullam ac pharetra ante. Nam accumsan eros vitae enim bibendum egestas. Proin malesuada diam et augue ultricies a accumsan quam lacinia. Integer non nulla id purus pretium ultrices. Praesent non magna ac ante consequat convallis. Morbi elementum velit sit amet diam interdum quis egestas felis porta. Nullam et nisi massa. Donec ut tellus erat, quis aliquam dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus viverra tempus venenatis. Aenean euismod mollis leo, a ultricies lacus euismod sed. Nunc hendrerit dui non mauris pellentesque vitae eleifend nunc elementum. Praesent viverra euismod mauris vel mollis. Sed vel est est.</p><p>Mauris scelerisque dapibus nisi. Fusce ut mi eget leo tincidunt fermentum. Sed dapibus consequat tortor, quis dapibus purus tincidunt quis. Nulla vitae felis dignissim nisl ultricies ornare vitae eu purus. Integer nec sapien sed metus mollis cursus sed tincidunt tortor. Curabitur sagittis, augue eu tristique ultricies, magna velit elementum nibh, in rhoncus diam mi at sapien. Nam sed diam ut lorem feugiat malesuada. Nunc porta ullamcorper erat vitae faucibus. Sed vehicula ipsum et lectus sagittis vel lacinia neque mattis. Maecenas consectetur dui eu nisi auctor pharetra. Donec lobortis enim et sem pulvinar quis blandit nisl consequat. Quisque ligula tellus, sagittis vel accumsan vulputate, congue sit amet nulla. Proin mattis, purus ultrices molestie faucibus, ante quam venenatis turpis, vel porta turpis nisl sit amet arcu. Sed ullamcorper hendrerit faucibus. Pellentesque et est eu elit euismod varius. Proin adipiscing dolor non mi consequat lacinia dictum mauris scelerisque.</p>"
    },
    {
        id: 5,
        title: 'Project 5',
        discipline: 'ICCT',
        supervisor: {
            name: 'Dr Chris P. Jobling',
            email: 'C.P.Jobling@Swansea.ac.uk',
            centre: {
                name: 'Multidisciplinary Nanotechnology Centre',
                code: 'MNC'
            }
        },
        description: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan, felis nec euismod bibendum, tellus mi hendrerit risus, vitae luctus lorem dolor eu libero. Morbi a hendrerit libero. Nullam ac pharetra ante. Nam accumsan eros vitae enim bibendum egestas. Proin malesuada diam et augue ultricies a accumsan quam lacinia. Integer non nulla id purus pretium ultrices. Praesent non magna ac ante consequat convallis. Morbi elementum velit sit amet diam interdum quis egestas felis porta. Nullam et nisi massa. Donec ut tellus erat, quis aliquam dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus viverra tempus venenatis. Aenean euismod mollis leo, a ultricies lacus euismod sed. Nunc hendrerit dui non mauris pellentesque vitae eleifend nunc elementum. Praesent viverra euismod mauris vel mollis. Sed vel est est.</p><p>Mauris scelerisque dapibus nisi. Fusce ut mi eget leo tincidunt fermentum. Sed dapibus consequat tortor, quis dapibus purus tincidunt quis. Nulla vitae felis dignissim nisl ultricies ornare vitae eu purus. Integer nec sapien sed metus mollis cursus sed tincidunt tortor. Curabitur sagittis, augue eu tristique ultricies, magna velit elementum nibh, in rhoncus diam mi at sapien. Nam sed diam ut lorem feugiat malesuada. Nunc porta ullamcorper erat vitae faucibus. Sed vehicula ipsum et lectus sagittis vel lacinia neque mattis. Maecenas consectetur dui eu nisi auctor pharetra. Donec lobortis enim et sem pulvinar quis blandit nisl consequat. Quisque ligula tellus, sagittis vel accumsan vulputate, congue sit amet nulla. Proin mattis, purus ultrices molestie faucibus, ante quam venenatis turpis, vel porta turpis nisl sit amet arcu. Sed ullamcorper hendrerit faucibus. Pellentesque et est eu elit euismod varius. Proin adipiscing dolor non mi consequat lacinia dictum mauris scelerisque.</p>"
    },
    {
        id: 6,
        title: 'Project 6',
        discipline: 'ICCT',
        supervisor: {
            name: 'Prof. Tom Chen',
            email: 'T.M.Chen@Swansea.ac.uk',
            centre: {
                name: 'Multidisciplinary Nanotechnology Centre',
                code: 'MNC'
            }
        },
        description: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan, felis nec euismod bibendum, tellus mi hendrerit risus, vitae luctus lorem dolor eu libero. Morbi a hendrerit libero. Nullam ac pharetra ante. Nam accumsan eros vitae enim bibendum egestas. Proin malesuada diam et augue ultricies a accumsan quam lacinia. Integer non nulla id purus pretium ultrices. Praesent non magna ac ante consequat convallis. Morbi elementum velit sit amet diam interdum quis egestas felis porta. Nullam et nisi massa. Donec ut tellus erat, quis aliquam dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus viverra tempus venenatis. Aenean euismod mollis leo, a ultricies lacus euismod sed. Nunc hendrerit dui non mauris pellentesque vitae eleifend nunc elementum. Praesent viverra euismod mauris vel mollis. Sed vel est est.</p><p>Mauris scelerisque dapibus nisi. Fusce ut mi eget leo tincidunt fermentum. Sed dapibus consequat tortor, quis dapibus purus tincidunt quis. Nulla vitae felis dignissim nisl ultricies ornare vitae eu purus. Integer nec sapien sed metus mollis cursus sed tincidunt tortor. Curabitur sagittis, augue eu tristique ultricies, magna velit elementum nibh, in rhoncus diam mi at sapien. Nam sed diam ut lorem feugiat malesuada. Nunc porta ullamcorper erat vitae faucibus. Sed vehicula ipsum et lectus sagittis vel lacinia neque mattis. Maecenas consectetur dui eu nisi auctor pharetra. Donec lobortis enim et sem pulvinar quis blandit nisl consequat. Quisque ligula tellus, sagittis vel accumsan vulputate, congue sit amet nulla. Proin mattis, purus ultrices molestie faucibus, ante quam venenatis turpis, vel porta turpis nisl sit amet arcu. Sed ullamcorper hendrerit faucibus. Pellentesque et est eu elit euismod varius. Proin adipiscing dolor non mi consequat lacinia dictum mauris scelerisque.</p>"
    },
    {
        id: 7,
        title: 'Project 7',
        discipline: 'ICCT',
        supervisor: {
            name: 'Prof. Tom Chen',
            email: 'T.M.Chen@Swansea.ac.uk',
            centre: {
                name: 'Multidisciplinary Nanotechnology Centre',
                code: 'MNC'
            }
        },
        description: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan, felis nec euismod bibendum, tellus mi hendrerit risus, vitae luctus lorem dolor eu libero. Morbi a hendrerit libero. Nullam ac pharetra ante. Nam accumsan eros vitae enim bibendum egestas. Proin malesuada diam et augue ultricies a accumsan quam lacinia. Integer non nulla id purus pretium ultrices. Praesent non magna ac ante consequat convallis. Morbi elementum velit sit amet diam interdum quis egestas felis porta. Nullam et nisi massa. Donec ut tellus erat, quis aliquam dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus viverra tempus venenatis. Aenean euismod mollis leo, a ultricies lacus euismod sed. Nunc hendrerit dui non mauris pellentesque vitae eleifend nunc elementum. Praesent viverra euismod mauris vel mollis. Sed vel est est.</p><p>Mauris scelerisque dapibus nisi. Fusce ut mi eget leo tincidunt fermentum. Sed dapibus consequat tortor, quis dapibus purus tincidunt quis. Nulla vitae felis dignissim nisl ultricies ornare vitae eu purus. Integer nec sapien sed metus mollis cursus sed tincidunt tortor. Curabitur sagittis, augue eu tristique ultricies, magna velit elementum nibh, in rhoncus diam mi at sapien. Nam sed diam ut lorem feugiat malesuada. Nunc porta ullamcorper erat vitae faucibus. Sed vehicula ipsum et lectus sagittis vel lacinia neque mattis. Maecenas consectetur dui eu nisi auctor pharetra. Donec lobortis enim et sem pulvinar quis blandit nisl consequat. Quisque ligula tellus, sagittis vel accumsan vulputate, congue sit amet nulla. Proin mattis, purus ultrices molestie faucibus, ante quam venenatis turpis, vel porta turpis nisl sit amet arcu. Sed ullamcorper hendrerit faucibus. Pellentesque et est eu elit euismod varius. Proin adipiscing dolor non mi consequat lacinia dictum mauris scelerisque.</p>"
    },
    {
        id: 8,
        title: 'Project 8',
        discipline: 'ICCT',
        supervisor: {
            name: 'Prof. Tom Chen',
            email: 'T.M.Chen@Swansea.ac.uk',
            centre: {
                name: 'Multidisciplinary Nanotechnology Centre',
                code: 'MNC'
            }
        },
        description: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan, felis nec euismod bibendum, tellus mi hendrerit risus, vitae luctus lorem dolor eu libero. Morbi a hendrerit libero. Nullam ac pharetra ante. Nam accumsan eros vitae enim bibendum egestas. Proin malesuada diam et augue ultricies a accumsan quam lacinia. Integer non nulla id purus pretium ultrices. Praesent non magna ac ante consequat convallis. Morbi elementum velit sit amet diam interdum quis egestas felis porta. Nullam et nisi massa. Donec ut tellus erat, quis aliquam dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus viverra tempus venenatis. Aenean euismod mollis leo, a ultricies lacus euismod sed. Nunc hendrerit dui non mauris pellentesque vitae eleifend nunc elementum. Praesent viverra euismod mauris vel mollis. Sed vel est est.</p><p>Mauris scelerisque dapibus nisi. Fusce ut mi eget leo tincidunt fermentum. Sed dapibus consequat tortor, quis dapibus purus tincidunt quis. Nulla vitae felis dignissim nisl ultricies ornare vitae eu purus. Integer nec sapien sed metus mollis cursus sed tincidunt tortor. Curabitur sagittis, augue eu tristique ultricies, magna velit elementum nibh, in rhoncus diam mi at sapien. Nam sed diam ut lorem feugiat malesuada. Nunc porta ullamcorper erat vitae faucibus. Sed vehicula ipsum et lectus sagittis vel lacinia neque mattis. Maecenas consectetur dui eu nisi auctor pharetra. Donec lobortis enim et sem pulvinar quis blandit nisl consequat. Quisque ligula tellus, sagittis vel accumsan vulputate, congue sit amet nulla. Proin mattis, purus ultrices molestie faucibus, ante quam venenatis turpis, vel porta turpis nisl sit amet arcu. Sed ullamcorper hendrerit faucibus. Pellentesque et est eu elit euismod varius. Proin adipiscing dolor non mi consequat lacinia dictum mauris scelerisque.</p>"
    },
    {
        id: 9,
        title: 'Project 9',
        discipline: 'ICCT',
        supervisor: {
            name: 'Prof. Tom Chen',
            email: 'T.M.Chen@Swansea.ac.uk',
            centre: {
                name: 'Multidisciplinary Nanotechnology Centre',
                code: 'MNC'
            }
        },
        description: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan, felis nec euismod bibendum, tellus mi hendrerit risus, vitae luctus lorem dolor eu libero. Morbi a hendrerit libero. Nullam ac pharetra ante. Nam accumsan eros vitae enim bibendum egestas. Proin malesuada diam et augue ultricies a accumsan quam lacinia. Integer non nulla id purus pretium ultrices. Praesent non magna ac ante consequat convallis. Morbi elementum velit sit amet diam interdum quis egestas felis porta. Nullam et nisi massa. Donec ut tellus erat, quis aliquam dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus viverra tempus venenatis. Aenean euismod mollis leo, a ultricies lacus euismod sed. Nunc hendrerit dui non mauris pellentesque vitae eleifend nunc elementum. Praesent viverra euismod mauris vel mollis. Sed vel est est.</p><p>Mauris scelerisque dapibus nisi. Fusce ut mi eget leo tincidunt fermentum. Sed dapibus consequat tortor, quis dapibus purus tincidunt quis. Nulla vitae felis dignissim nisl ultricies ornare vitae eu purus. Integer nec sapien sed metus mollis cursus sed tincidunt tortor. Curabitur sagittis, augue eu tristique ultricies, magna velit elementum nibh, in rhoncus diam mi at sapien. Nam sed diam ut lorem feugiat malesuada. Nunc porta ullamcorper erat vitae faucibus. Sed vehicula ipsum et lectus sagittis vel lacinia neque mattis. Maecenas consectetur dui eu nisi auctor pharetra. Donec lobortis enim et sem pulvinar quis blandit nisl consequat. Quisque ligula tellus, sagittis vel accumsan vulputate, congue sit amet nulla. Proin mattis, purus ultrices molestie faucibus, ante quam venenatis turpis, vel porta turpis nisl sit amet arcu. Sed ullamcorper hendrerit faucibus. Pellentesque et est eu elit euismod varius. Proin adipiscing dolor non mi consequat lacinia dictum mauris scelerisque.</p>"
    },
    {
        id: 10,
        title: 'Project 10',
        discipline: 'ICCT',
        supervisor: {
            name: 'Prof. Tom Chen',
            email: 'T.M.Chen@Swansea.ac.uk',
            centre: {
                name: 'Multidisciplinary Nanotechnology Centre',
                code: 'MNC'
            }
        },
        description: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan, felis nec euismod bibendum, tellus mi hendrerit risus, vitae luctus lorem dolor eu libero. Morbi a hendrerit libero. Nullam ac pharetra ante. Nam accumsan eros vitae enim bibendum egestas. Proin malesuada diam et augue ultricies a accumsan quam lacinia. Integer non nulla id purus pretium ultrices. Praesent non magna ac ante consequat convallis. Morbi elementum velit sit amet diam interdum quis egestas felis porta. Nullam et nisi massa. Donec ut tellus erat, quis aliquam dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus viverra tempus venenatis. Aenean euismod mollis leo, a ultricies lacus euismod sed. Nunc hendrerit dui non mauris pellentesque vitae eleifend nunc elementum. Praesent viverra euismod mauris vel mollis. Sed vel est est.</p><p>Mauris scelerisque dapibus nisi. Fusce ut mi eget leo tincidunt fermentum. Sed dapibus consequat tortor, quis dapibus purus tincidunt quis. Nulla vitae felis dignissim nisl ultricies ornare vitae eu purus. Integer nec sapien sed metus mollis cursus sed tincidunt tortor. Curabitur sagittis, augue eu tristique ultricies, magna velit elementum nibh, in rhoncus diam mi at sapien. Nam sed diam ut lorem feugiat malesuada. Nunc porta ullamcorper erat vitae faucibus. Sed vehicula ipsum et lectus sagittis vel lacinia neque mattis. Maecenas consectetur dui eu nisi auctor pharetra. Donec lobortis enim et sem pulvinar quis blandit nisl consequat. Quisque ligula tellus, sagittis vel accumsan vulputate, congue sit amet nulla. Proin mattis, purus ultrices molestie faucibus, ante quam venenatis turpis, vel porta turpis nisl sit amet arcu. Sed ullamcorper hendrerit faucibus. Pellentesque et est eu elit euismod varius. Proin adipiscing dolor non mi consequat lacinia dictum mauris scelerisque.</p>"
    },
    {
        id: 11,
        title: 'Project 11',
        discipline: 'ICCT',
        supervisor: {
            name: 'Dr Jason Jones',
            email: 'J.W.Jones@Swansea.ac.uk',
            centre: {
                name: 'Civil and Computational Engineering Centre',
                code: 'C2EC'
            }
        },
        description: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan, felis nec euismod bibendum, tellus mi hendrerit risus, vitae luctus lorem dolor eu libero. Morbi a hendrerit libero. Nullam ac pharetra ante. Nam accumsan eros vitae enim bibendum egestas. Proin malesuada diam et augue ultricies a accumsan quam lacinia. Integer non nulla id purus pretium ultrices. Praesent non magna ac ante consequat convallis. Morbi elementum velit sit amet diam interdum quis egestas felis porta. Nullam et nisi massa. Donec ut tellus erat, quis aliquam dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus viverra tempus venenatis. Aenean euismod mollis leo, a ultricies lacus euismod sed. Nunc hendrerit dui non mauris pellentesque vitae eleifend nunc elementum. Praesent viverra euismod mauris vel mollis. Sed vel est est.</p><p>Mauris scelerisque dapibus nisi. Fusce ut mi eget leo tincidunt fermentum. Sed dapibus consequat tortor, quis dapibus purus tincidunt quis. Nulla vitae felis dignissim nisl ultricies ornare vitae eu purus. Integer nec sapien sed metus mollis cursus sed tincidunt tortor. Curabitur sagittis, augue eu tristique ultricies, magna velit elementum nibh, in rhoncus diam mi at sapien. Nam sed diam ut lorem feugiat malesuada. Nunc porta ullamcorper erat vitae faucibus. Sed vehicula ipsum et lectus sagittis vel lacinia neque mattis. Maecenas consectetur dui eu nisi auctor pharetra. Donec lobortis enim et sem pulvinar quis blandit nisl consequat. Quisque ligula tellus, sagittis vel accumsan vulputate, congue sit amet nulla. Proin mattis, purus ultrices molestie faucibus, ante quam venenatis turpis, vel porta turpis nisl sit amet arcu. Sed ullamcorper hendrerit faucibus. Pellentesque et est eu elit euismod varius. Proin adipiscing dolor non mi consequat lacinia dictum mauris scelerisque.</p>"
    },
    {
        id: 12,
        title: 'Project 12',
        discipline: 'ICCT',
        supervisor: {
            name: 'Dr Jason Jones',
            email: 'J.W.Jones@Swansea.ac.uk',
            centre: {
                name: 'Civil and Computational Engineering Centre',
                code: 'C2EC'
            }
        },
        description: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan, felis nec euismod bibendum, tellus mi hendrerit risus, vitae luctus lorem dolor eu libero. Morbi a hendrerit libero. Nullam ac pharetra ante. Nam accumsan eros vitae enim bibendum egestas. Proin malesuada diam et augue ultricies a accumsan quam lacinia. Integer non nulla id purus pretium ultrices. Praesent non magna ac ante consequat convallis. Morbi elementum velit sit amet diam interdum quis egestas felis porta. Nullam et nisi massa. Donec ut tellus erat, quis aliquam dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus viverra tempus venenatis. Aenean euismod mollis leo, a ultricies lacus euismod sed. Nunc hendrerit dui non mauris pellentesque vitae eleifend nunc elementum. Praesent viverra euismod mauris vel mollis. Sed vel est est.</p><p>Mauris scelerisque dapibus nisi. Fusce ut mi eget leo tincidunt fermentum. Sed dapibus consequat tortor, quis dapibus purus tincidunt quis. Nulla vitae felis dignissim nisl ultricies ornare vitae eu purus. Integer nec sapien sed metus mollis cursus sed tincidunt tortor. Curabitur sagittis, augue eu tristique ultricies, magna velit elementum nibh, in rhoncus diam mi at sapien. Nam sed diam ut lorem feugiat malesuada. Nunc porta ullamcorper erat vitae faucibus. Sed vehicula ipsum et lectus sagittis vel lacinia neque mattis. Maecenas consectetur dui eu nisi auctor pharetra. Donec lobortis enim et sem pulvinar quis blandit nisl consequat. Quisque ligula tellus, sagittis vel accumsan vulputate, congue sit amet nulla. Proin mattis, purus ultrices molestie faucibus, ante quam venenatis turpis, vel porta turpis nisl sit amet arcu. Sed ullamcorper hendrerit faucibus. Pellentesque et est eu elit euismod varius. Proin adipiscing dolor non mi consequat lacinia dictum mauris scelerisque.</p>"
    },
    {
        id: 13,
        title: 'Project 13',
        discipline: 'ICCT',
        supervisor: {
            name: 'Dr K.S. (Joseph) Kim',
            email: 'K.S.Kim@Swansea.ac.uk',
            centre: {
                name: 'Multidisciplinary Nanotechnology Centre',
                code: 'MNC'
            }
        },
        description: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent accumsan, felis nec euismod bibendum, tellus mi hendrerit risus, vitae luctus lorem dolor eu libero. Morbi a hendrerit libero. Nullam ac pharetra ante. Nam accumsan eros vitae enim bibendum egestas. Proin malesuada diam et augue ultricies a accumsan quam lacinia. Integer non nulla id purus pretium ultrices. Praesent non magna ac ante consequat convallis. Morbi elementum velit sit amet diam interdum quis egestas felis porta. Nullam et nisi massa. Donec ut tellus erat, quis aliquam dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus viverra tempus venenatis. Aenean euismod mollis leo, a ultricies lacus euismod sed. Nunc hendrerit dui non mauris pellentesque vitae eleifend nunc elementum. Praesent viverra euismod mauris vel mollis. Sed vel est est.</p><p>Mauris scelerisque dapibus nisi. Fusce ut mi eget leo tincidunt fermentum. Sed dapibus consequat tortor, quis dapibus purus tincidunt quis. Nulla vitae felis dignissim nisl ultricies ornare vitae eu purus. Integer nec sapien sed metus mollis cursus sed tincidunt tortor. Curabitur sagittis, augue eu tristique ultricies, magna velit elementum nibh, in rhoncus diam mi at sapien. Nam sed diam ut lorem feugiat malesuada. Nunc porta ullamcorper erat vitae faucibus. Sed vehicula ipsum et lectus sagittis vel lacinia neque mattis. Maecenas consectetur dui eu nisi auctor pharetra. Donec lobortis enim et sem pulvinar quis blandit nisl consequat. Quisque ligula tellus, sagittis vel accumsan vulputate, congue sit amet nulla. Proin mattis, purus ultrices molestie faucibus, ante quam venenatis turpis, vel porta turpis nisl sit amet arcu. Sed ullamcorper hendrerit faucibus. Pellentesque et est eu elit euismod varius. Proin adipiscing dolor non mi consequat lacinia dictum mauris scelerisque.</p>"
    }
    ];
    
    // ## Define models and collections
    // The `Project` represents an indivdual project. This should be read-only in this app.
    // Expect to display project titles in the project list (*master* view) and descriptions 
    // in the detail view, but your users will not need to edit the project information.  
    var Project = Backbone.Model.extend({
        // Add any additional code you need here
    });
    
    // The `ProjectList` is the list of available projects that is loaded at the start of the
    // app.
    var ProjectList = Backbone.Collection.extend({
        // The model is `Project`
        model: Project,
        
        // In this version of the client, we will save all of the project items 
        // in [HTML5 local storage](http://docs.webplatform.org/wiki/apis/web-storage/Storage/localStorage)
        // under the `"app name s-number-project-list"` namespace.
        localStorage: new Backbone.LocalStorage('pselctr-123456-project-list'),

        // The URL represents the RESTful endpoint for the client-server app. It's only a placeholder
        // for now but all client-side URLs (for example as defined in the router) will be prefixed
        // with this string.
        url: '/api/projects'
    });

    // In this version, we create projects from the provided test data 
    var projectList = new ProjectList(data);
    // and check that it is loaded correctly
    console.log(projectList);
    console.log(projectList.get(10).get('title'));
    
// ## What's next
// We recommend that you start with the easy bit first:
//
// * Create a list view/list item template for the project list
// * Create a detail view/detail template for an individual project
// * Create a home view that has the master and detail view
// * Create a router so that when user clicks on a link in the listview,
//   the corresponding detail view is shown.
//
// This will be quite similar to the example shown in the lecture on Backbone.js.
// 
// Once this is complete you can move on to satisfy the [rest of the specification](https://github.com/cpjobling/eg-259-cw-2013#the-task).
//
// ## Suggestions
//
//   * Maintain a seperate list of projects that have been selected. It is very easy to
//     move a project from the `ProjectList` to the `SelectedProjectList`
//   * The project `id` is the key to fiding and retrieving project descriptions.
//   * Don't add any attributes to `Project`, keep state information in the collections.
//   * Only the `SelectedProjectList` will be stored when the submit button is pressed.

    // We developed this code in an earlier interation to illustrate jQuety/
    // As you will be developing a Backbone.js app consisting of models, collections,
    // views and templates, you can probably discard the rest of this code ....
    
    // Find a project that matches the given id. Assumes each data object has a field
    // called 'id'
    var find_by_id = function(data,id) {
        for (var i = 0; i < data.length; i++) {
            obj = data[i];
            // do properties of object match the arguments?
            if (obj.id == id) {
                return obj;
            }
            // if we get to here, no match was found
        }
        console.warn("find_by_id - couldn't find object with _id: " + id);
    }

    // Find project that shares id of clicked link
    $('a.project').click(function(event) {
        event.preventDefault();
        var link = $(this).attr('href');
        var id = (link.match(/^\/projects\/(.*)$/))[1];
        project = find_by_id(data, id);
        console.log(project);
    });

// Close the anonymous function, and call it passing `jQuery` as the argument.
})(jQuery);
