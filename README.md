# pusher-jspm-es6

An example repository that demonstrates how to use [jspm](http://jspm.io) to write ES2015 applications today.

This app uses the [Pusher-JS](https://github.com/pusher/pusher-js) library to display tweets in real time and depends on Handlebars and jQuery to do so.

# Running the app
- `git clone git@github.com:pusher-community/pusher-jspm-es6.git`
- `cd pusher-jspm-es6`
- `npm install`
- `./node_modules/.bin/jspm install`

You'll then need to run the app on a server, using something like [live-server](https://www.npmjs.com/package/live-server).

You should then run the [Twitter Pusher streamer](https://github.com/pusher-community/pusher-twitter-streamer) so that the application gets tweets to render.
