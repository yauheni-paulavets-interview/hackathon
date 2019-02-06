import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  counts;
  negativeFeedbackList = [];
  positiveFeedbackList = [];
  neutralFeedbackList = [];
  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    const socket = new WebSocket('wss://irq38ulvlb.execute-api.us-east-2.amazonaws.com/beta_0');

    // Connection opened
    socket.addEventListener('open', (event) => {
      console.log('connection opened');
      debugger
    });
    socket.addEventListener('error', (event) => {
      debugger
    });

    // Listen for messages
    socket.addEventListener('message', (event) => this.handleNewMessage(event));

    this.fetchFeed().subscribe((data: Array<any>) => {
      console.log('fetched', data);
      this.negativeFeedbackList = data.filter((item) => {
        return item.intention === 'NEGATIVE';
      }).map((item) => this.deserialize(item));
      this.positiveFeedbackList = data.filter((item) => {
        return item.intention === 'POSITIVE';
      }).map((item) => this.deserialize(item));
      this.neutralFeedbackList = data.filter((item) => {
        return item.intention === 'NEUTRAL';
      }).map((item) => this.deserialize(item));
    }, (err) => {
      debugger
    });
  }
  fetchFeed() {
    return this.http.get('https://xsbemao9i2.execute-api.us-east-2.amazonaws.com/default/fetchFeedFromDDB');
  }
  deserialize(data) {
    return {
      intention: data.intention,
      author: data.user_name,
      timestamp: data.id,
      message: data.post
    };
  }
  handleNewMessage(event) {
    const newMessage = JSON.parse(event.data);
    this[`${newMessage.intention.toLowerCase()}FeedbackList`].splice(0, 0, JSON.parse(event.data));
    debugger
  }
}
