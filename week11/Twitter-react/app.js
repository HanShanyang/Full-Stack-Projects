import React from 'react';
import ReactDOM from 'react-dom';

class Twitter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data:[]};
    this.loadTweetsFromServer = this.loadTweetsFromServer.bind(this);
    this.handleTweetSubmit = this.handleTweetSubmit.bind(this);
  }
  loadTweetsFromServer() {
    $.get(this.props.url, (data) => {
        this.setState({data:data});
      }
    );
  }
  handleTweetSubmit(author, text) {
    const tweet = { author, text };
  
    // POST to add tweet to database
    $.post(this.props.url, tweet, (data) => {
        // this.setState({ data });
        loadTweetsFromServer();
      }
    );
  }
  componentDidMount() {
    this.loadTweetsFromServer();
  }
  render() {
    return (
      <div className="twitter">
        <h1>Tweets</h1>
        <TweetForm handleTweetSubmit={this.handleTweetSubmit}/>
        <TweetList tweets={this.state.data}/>
      </div>
    );
  }
}

class TweetForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault(); // normally after we submit form, it will refresh page

    const author = this.refs.author.value;
    const text = this.refs.text.value;
    
    alert("You have submited a from" + author + text);
    this.props.handleTweetSubmit(author, text)

    this.refs.author.value = '';
    this.refs.text.value = '';
  }
  render() {
    return (      
      <form className="TweetForm" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Author Name" ref="author" />
        <input type="text" placeholder="Tweet" ref="text" />
        <button type="submit" className="btn btn-primary">Tweet</button>
      </form>
    );
  }
}

class TweetList extends React.Component {
  
  render() {

    const tweetData = this.props.tweets;
    const nodes = tweetData.map((tweet) => 
      <Tweet author={tweet.author} text = {tweet.text}/> 
    );

    return (
      <div className="tweetList">
        { nodes }
      </div>
    );
  }
}

class Tweet extends React.Component {
  render() {
    return (
      <div className="tweet">
           <h2>{ this.props.text }</h2> 
          <span> --- { this.props.author }</span> 
      </div>
    );
  }
}

ReactDOM.render(
  <Twitter url="tweets.json"/>,
  document.getElementById('tweets')
);
