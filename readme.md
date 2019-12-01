# DragNDrop

A list repositioning tool wrapped in a angularjs service, example included

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#Deployment) for notes on how to deploy the project on a live system.

* clone the repository
* run npm install
* run node .
* open the link on the console

### Prerequisites

For this module, you will need a working AngularJS projects

### Installing

* Copy either the minified or the pretty version in dist folder
* import the script in your html root
* be happy

## Deployment

In a angularjs project, all you need to do is push the module name into the requires property of the target module

```
angular.module('*YourModuleName*').requires.push('DragNDrop');
```

Then, in your html template, you can create a directive that will contain the list and optionally the object that contains the elements of the list

```
<ul list-drag model="dataObject">
    <li ng-repeat="item in dataObject"></li>
</ul>
```

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* **ytfox** - *Initial work* - [xXxYtfoxXx](https://github.com/xXxYtfoxXx)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
