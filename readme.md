The purpose for this overwolf app is to give an idea on how you can 
unit-test your overwolf-apps using mocha, chai and sinon.

[Mocha](https://mochajs.org/) is a beautiful Testrunner.
[Chai](http://chaijs.com/) is a nice expectation / assertion library.
[Sinon](http://sinonjs.org/) is a great tool to create spies, stubs and mocks to enable you to test functionalities in Isolation from its dependencies.

Since there is no way to get the overwolf-object out of the Client (afaik)
and there is no officially maintained test-double for it, let's bring our unit-tests into the client.

I hope for some interested developers to collaborate or at least discuss 
on this so that we might find some better ways to automatically test our overwolf-apps.
Manual testing is ok for simple apps, but as soon as they get more elaborated
and depend on ingame events etc. manual testing is a big pain due to the nature 
of the client and the lack of development tools like client simulation functionalities.

Maybe there are even some cool tools out there I don't know about, then please 
tell me and Im willing to contribute to those.

## Usage
1) Install this app in Overwolf (If you're ready to unit-test I assume you know how to install a custom unpacked app)

2) Get your sources and tests into this app
This is the tricky part...

You have 2 options here:
The more comfortable option is to replace ```generated/all.js``` With the JS you want to test
and ```generated/all.test.js``` with your tests. 

To do so you might want to use a task-runner of your choice like grunt/gulp 
and integrate this step somehow into your build-process 
if you have one, so you don't have to think about it everytime you want to run tests.

Option 2 includes some manual work:
Change ```runner/Testrunner.html``` to include your source- and test-files by hand
where the comments tell you to.

## Goals
#### (not saying any of those will happen)

- raise awareness about the importance to have tools on hand to make testing overwolf-apps easier
- Tinker with other ways to unit-test overwolf-apps
- figure out how to add auto-reload to the testrunner-window on file-change
- Create a yeoman generator that generates this app and a gulp-task to update sources / tests
- improve unit-testing workflow in overwolf (thinking about a karma-launcher or sth - might not be possible atm anyways)
- Find some smarter people to think about ways to integrate e2e testing