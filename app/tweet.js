import template from './tweet.hbs!text';

const makeHtml = Handlebars.compile(template);

export default class Tweet {
  constructor({ text, user: { screen_name: screenName }}) {
    this.text = text;
    this.screenName = screenName;
  }

  render() {
    return makeHtml(this);
  }
}
