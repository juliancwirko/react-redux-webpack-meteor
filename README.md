## React demo app with Webpack, Redux and Meteor as backend only

This is just a standard React - Redux app based on [my boilerplate](https://github.com/juliancwirko/react-boilerplate). It uses Meteor, but only as a backend. So you need to run both apps.

How to start:

- clone the repo
- go to the `meteor-backend` folder and run `npm install` and then `meteor -p 9000`
- go to the `react-client-app` and in another terminal window run `npm install` and then `npm start`

The React app will start on `localhost:3000` and it will connect to the Meteor backend on `localhost:9000`

For production you should be able to bundle client app and use static files from public folder. Read more [here](https://github.com/juliancwirko/react-boilerplate). You also need to host your Meteor app somewhere and you should change connection host in `react-client-app/app/asteroid/asteroid.js` file.

I use [Asteroid](https://github.com/mondora/asteroid) here as my DDP client.

### Why?

I like Meteor as a backend and for DDP, but not so much for its React integration and build system. I like Webpack and all tools around. I also like separation and Redux usage here. With such structure I am able to switch to another backend very quickly.

**But first of all this is also demo repo for blog post which will be published on my blog soon.**

I you have any suggestions, go ahead!