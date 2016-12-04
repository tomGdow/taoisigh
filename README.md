
### taoisigh

A single-page application created with AngularJS displaying data on Irish [taoisigh](https://en.wikipedia.org/wiki/Taoiseach) obained from [https://dowapi.tomgdow.com/taoisigh](https://dowapi.tomgdow.com/taoisigh)

In other words, a Ruby-on-Rails API returns JSON data which is dynamically displayed in tabular form in a separate application generated with AngularJS. The application structure is based on [Angular Seed](https://github.com/angular/angular-seed)

### Deployment

[https://tomgdow.github.io/taoisigh](https://tomgdow.github.io/taoisigh)

### Application struture 

<pre>
.
├── html
│   ├── navbar.html
│   ├── tablep.html
│   └── templates
│       ├── template1.html
│       ├── template2.html
│       └── template3.html
├── index.html
├── javascripts
│   └── angular
│       ├── ng_controllers.js
│       ├── ng_directives.js
│       ├── ng_filters.js
│       ├── ng_routes.js
│       ├── ng_services.js
│       
├── README.md
└── stylesheets
    ├── app.css
    ├── app.css.map
    ├── app.scss
    ├── functions.scss
    ├── home.scss
    ├── mixins.scss
    ├── navbar.scss
    └── variables.scss

</pre>
## Notes

The error 'No Access-Control-Allow-Origin header is present on the requested resource' was 
fixed by changing 'http' to 'https' in the function 'retrieveJson()'
(/javascripts/angular/ng_services.js) in **the gh-pages branch** of the application

    angular.version.full    # from browser console
>"1.5.8"
