import Pusher from 'pusher-js'

const PUSHER_KEY = 'cb90c828c6c74b59af33';

const pusher = new Pusher(PUSHER_KEY);

export function subscribe(channelName) {
  return pusher.subscribe(channelName);
}
