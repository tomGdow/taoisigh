
### taoisigh

A single-page application created with AngularJS displaying data on Irish [taoisigh](https://en.wikipedia.org/wiki/Taoiseach)f obained from [https://dowapi.tomgow.com/taoisigh](https://dowapi.tomgow.com/taoisigh)

The application structure is based on [Angular Seed](https://github.com/angular/angular-seed)

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
│       └── vendor
│           ├── angular-route.js
│           └── angular-sanitize.js
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

    Angular.version.full    # (from Browser console)

> "1.5.6"

### Log (Basic Rails/AngularJS App)

  Clone the repository and check out the 'rails-ng-basic' branch

       git clone https://github.com/tomGdow/rails-with-angularjs-one.git
       git checkout rails-ng-basic
       cd rorangular
       rails s
       localhost:3000   # from browser

  To generate a Rails/AngularJS app based on 'rails-ng-basic' 

1.    Generate a new rails app 

      `rails new <app-name>`

      Or, with postgreSQL as database:

      `rails new <app-name> -d postgresql` 

      (Here, 'rorangular', with postgreSQL) 

2.    Add the [angular-rails](https://rubygems.org/gems/angularjs-rails/) gem to Gemfile
3.    Add the [pry](https://github.com/rweng/pry-rails) gem to Gemfile (development branch) [optional]
4.    Generate a 'home' controller with a single action called 'index'

                                     `rails generate controller Home index`

5.    Copy the 'angular' directory to app/assets/javascripts
6.    Replace (with the version given here) app/assets/javascripts/application.js
7.    Replace the 'stylesheets' directory in app/assets/stylesheets (optional)
8.    Replace the 'home' directory in app/views/
9.    Remove everything except '<%= yield %>' from app/views/layouts/application.html.erb
10.    Route to 'home#index (config/routes.rb)

11.    Add routes for 'template1.html.erb' and 'template2.html.erb' (config/routes.rb)

 To continue beyond the basic app, add the following scaffold (or equivalent)
      to implement CRUD functionality: 

      rails generate scaffold Product name:string description:text price:float


