## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Project dir](#project-dir)
* [TODO: Future Improvements](#future)

## General info
Rep for projects built during Next Level Week from RocketSeat.
Language of the project is in Brazilian Portuguese [pt-br].
	
## Technologies
Project is created with:
* Node version: v12.14.0
* Yarn version: v1.22.4
	
## Setup
To run this project, install it locally using npm, first initiate server, then run either mobile or web version:

```
$ cd ../server
$ yarn
$ cd ../mobile || cd ../web 
$ yarn
$ yarn start
```


## Project dir

### (local server)
    (src)
        |--- controllers
        |    |---ClassesController.ts
        |    |---ConnectionsController.ts
        |---database
        |        |---migrations
        |        |        |---00_create_users.ts
        |        |        |---01_create_classes.ts
        |        |        |---02_create_class_schedule.ts
        |        |        |---03_create_connection.ts
        |        |
        |        |---connection.ts
        |        |---database.sqlite (run knex:migrate to generate this file)
        |
        |---utils
        |        |---convertHourToMinutes.ts
        |---routes.ts
        |---server.ts
    knexfile.ts (make knex understand typescript)
    package.json


### (mobile)
    (src)
    |--- @types
    |--- assets
    |       |---images
    |              |---icons
    |---components
            |---PageHeader
            |---TeacherItem
    |---pages
            |---Favourites
            |---GiveClasses
            |---Landing
            |---TeacherList
    |---routes
            |---AppStack.tsx
            |---StudyTabs.tsx
    |---services
            |---api.ts

    package.json
    App.tsx

### (web)

    (public)
        |---index.html
    (src)
        |--- assets
        |       |---images
        |       |      |---icons
                |---styles
                        |---global.css
        |---components
                |---PageHeader
                |---TeacherItem
                |---Textarea
                |---Select
                |---Input
        |---pages
                |---Landing
                |---TeacherForm
                |---TeacherList
        |---routes
                |---AppStack.tsx
                |---StudyTabs.tsx
        |---services
                |---api.ts
        react-app-env.d.ts
        routes.tsx
        package.json
        App.tsx

## TODO: Future Improvements
- context API
- favourites on database
- connections doesn't refresh