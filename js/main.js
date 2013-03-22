// # PSELECTR
// -- a User Interface for Selecting Projects
//
// To see the formatted version of this open [/docs/main.html](/docs/main.html).

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
// Each project has an `_id`, `title`, `discipline`, `supervisor`
// (another object), and a `description`.
    {
        _id: 1,
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
        _id: 2,
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
        _id: 3,
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
        _id: 4,
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
        _id: 5,
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
        _id: 6,
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
        _id: 7,
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
        _id: 8,
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
        _id: 9,
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
        _id: 10,
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
        _id: 11,
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
        _id: 12,
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
        _id: 13,
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

    // Find a project that matches the given id. Assumes each data object has a field
    // called '_id'
    var find_by_id = function(data,id) {
        for (var i = 0; i < data.length; i++) {
            obj = data[i];
            // do properties of object match the arguments?
            if (obj._id == id) {
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
