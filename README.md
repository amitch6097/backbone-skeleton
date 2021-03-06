# Socialocation
Social Media Viewer by Andrew Mitchell @ 2020 Spaces: https://powerful-bayou-69488.herokuapp.com/

## Introduction
An introductory onboarding app, created using the primary stack of 2020, including:
* Backbone
* RequireJS
* Typescript
* Less
* Grunt

The application uses the following free APIs:
* Google Maps API
* Twitter API
* Instagram API

### Installing

-Install npm.
-From the projects root directory, run these commands:

```
npm install
```
```
bower install
```
```
grunt build
```

Next, you will need to get API parameters for both the Twitter API and Instagram API
* [Twitter Developer](https://developer.twitter.com/en.html) - Twitter developer Website
* [Instagram Developer](https://www.instagram.com/developer/) - Instagram developer Website

Following this you will need to create a .env file in the root project folder with the following parameters which corresponding to the API parameters you received.

```
TWITTER_CONSUMER_KEY=?
TWITTER_CONSUMER_SECRET=?
TWITTER_ACCESS_TOKEN=?
TWITTER_ACCESS_TOKEN_SECRET=?

INSTAGRAM_CLIENT_ID=?
INSTAGRAM_CLIENT_SECRET=?
INSTAGRAM_REDIRECT_URI=?
INSTAGRAM_ACCESS_TOKEN=?
```

Finally run the production build with the following command
```
npm start
```
Navigate to http://localhost:3000

### Installing - Detailed

This appliation requires npm. To install npm, go to https://www.npmjs.com/get-npm and follow the instructions. If you are unsure if you have npm, enter the command
```
npm -v
```
Next run
 ```
 npm install
 ```
to fetch all the packages required for the app.

Once installed, in the command line, install bower using the command
```
npm install bower
```
Next to install all of the front end dependencies run
```
bower install
```

Finally, create a production build by using running
```
grunt build
```

Run "npm start" This will start the application's server, pointing it to localhost:3000.
Navigate to localhost:3000 in your browser to run the application.

If you wish to modify the code, edit the files in the "src" folders. These will be MUCH more readable. Once you are satisfied with the changes, rebuild the application using the "grunt build" command. If you want to run the server using the src code, you can launch a server based off of the src files directly by running "npm start-src".

### Useage
 When the app first opens, it will choose a Grand Rapids, MI as an initial location.  From here you will be able to change the location by entering a address or lat,lng combination in the middle input box and pressing submit.  Additionally you can scroll in the map.

 Tweets and Instagram pictures will populate the panels as the map location changes to showcase the current represented clusters on the map.  Clusters can be clicked on to display a popup view that opnly shows instagrams and tweets in that cluster location.

 Both panels can be hidden or paused.  Hiding a panel will remove it from the view.  Pausing a panel will stop the populating of api data to the view.
