import { Component, Input, OnInit, AfterViewInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

declare let FB;

@Component({
    selector: 'facebook-widget',
    templateUrl: './index.html',
    styleUrls: ['./component.css']
})
export class FacebookWidgetComponent implements OnInit {
    @Input() postInfo: any;
    postId: string;
    postUrl: string;
    constructor(@Inject(DOCUMENT) private document: Document) {}
    ngOnInit() {
        let pagePostId: string = this.postInfo.post_id.split('_');
        this.postId = pagePostId[1];
        this.postUrl = `https://www.facebook.com/${pagePostId[0]}/posts/${pagePostId[1]}/`;
    }
    render() {
        let container = this.document.getElementById(this.postId);
        if (!container.getElementsByTagName('fb:post').length) {
            let fbEl = this.document.createElement('fb:post');
            fbEl.setAttribute('href', this.postUrl);
            container.appendChild(fbEl);
            FB.XFBML.parse(container);
        }
    }
}
