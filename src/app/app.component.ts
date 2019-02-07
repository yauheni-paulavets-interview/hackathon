import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { RelativePostsComponent } from './relative-posts/relative-posts.component';

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
  constructor(private http: HttpClient, private overlay: Overlay) {

  }

  ngOnInit(): void {
    const socket = new WebSocket('wss://irq38ulvlb.execute-api.us-east-2.amazonaws.com/beta_0');

    // Connection opened
    socket.addEventListener('open', (event) => {
      console.log('connection opened');
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
      message: data.post,
      isNew: false
    };
  }
  handleNewMessage(event) {
    const newMessage = {...JSON.parse(event.data), ...{isNew: true}};
    const list = this[`${newMessage.intention.toLowerCase()}FeedbackList`];

    list.forEach((item) => {
      item.isNew = false;
    });
    list.splice(0, 0, newMessage);
  }

  showOverlay(card) {
    const config = new OverlayConfig();

    config.positionStrategy = this.overlay.position()
      .global();

    config.hasBackdrop = true;

    const overlayRef = this.overlay.create(config);

    overlayRef.backdropClick().subscribe(() => {
      overlayRef.dispose();
    });

    const userProfilePortal = new ComponentPortal(RelativePostsComponent);

    overlayRef.attach(userProfilePortal);
  }
}
