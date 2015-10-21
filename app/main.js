import Handlebars from 'handlebars';
import $ from 'jquery';

import Tweet from './tweet';
import { subscribe } from './pusher';

const channel = subscribe('tweets');

channel.bind('new-tweet', (data) => {
  const tweet = new Tweet(data);
  $('body').prepend(tweet.render());
});
