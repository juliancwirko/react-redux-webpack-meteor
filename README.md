## Demo: React, Webpack, Redux and Meteor as a backend only

You can read article about it: 
- [React with Webpack + Meteor as a backend](http://julian.io/react-with-webpack-meteor-as-a-backend/)

This is just a standard React - Redux app based on [my boilerplate](https://github.com/juliancwirko/react-boilerplate). It uses Meteor, but only as a backend. So you need to run both apps.

**This is really awesome that I needed only one file to create realtime backend for a custom React app! Thanks to Meteor!**

How to start:

- if you don't have Meteor install it: `curl https://install.meteor.com/ | sh`
- clone the repo
- go to the `meteor-backend` folder and run `npm install` and then `meteor -p 9000`
- go to the `react-client-app` and in another terminal window run `npm install` and then `npm start`
- you can bundle React app and use it as a standard css, html and js static files it will still be able to connect to the Meteor backend which should be running (hosted somewhere). You can bundle the files by running: `npm run build` in the `react-client-app` folder. The files will land in `react-client-app/public` folder. It allows you to host your client files on a very basic hosting which can serve static files. Also you can use one Meteor instance as a backend for many React apps. Of course it should be used wisely ;)

The React app will start on `localhost:3000` and it will connect to the Meteor backend on `localhost:9000`. (Meteor backend isn't secured - just demo).

For production you should be able to bundle client app and use static files from public folder. Read more [here](https://github.com/juliancwirko/react-boilerplate). You also need to host your Meteor app somewhere and you should change connection host in `react-client-app/app/asteroid/asteroid.js` file.

I use [Asteroid](https://github.com/mondora/asteroid) here as my DDP client.

### Why?

I like Meteor as a backend and for DDP, but not so much for its React integration and build system. It is good, but I have a feeling that it's missing something. It isn't elastic. I like Webpack and all tools around it. I also like separation and Redux usage here. I can use my custom React configuration with Meteor backend and still have my realtime updates where I want. What is more important I can configure backend in minutes. Also with such structure I am able to switch to another backend very quickly.

If you have any suggestions, go ahead!

### Tests (not complete)

Check out tests. Go to the `react-client-app` and tun `npm test`.
