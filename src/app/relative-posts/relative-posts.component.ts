import { Component, OnInit, Input, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '../store';

@Component({
    selector: 'app-relative-posts',
    templateUrl: './relative-posts.component.html',
    styleUrls: ['./relative-posts.component.scss']
})
export class RelativePostsComponent {
    newPost: {title: string, content: string} = {title: '', content: ''};
    items: Array<any> = new Array<any>();
    constructor(private http: HttpClient, private store: Store) {
        let message = store.getMessage();
        this.http.get(`https://f9omw56ceh.execute-api.us-east-2.amazonaws.com/beta_3?q=account`) //${message.message}
        .subscribe((data) => {
            this._buildItems(data);
        });
    }
    _buildItems(data) {
        this.items = data.hits.hit.map((hit) => {
            return {
                title: hit.fields.title[0],
                content: hit.fields.content[0]
            };
        });
    }
    submitNewArticle(event) {
        event.preventDefault();
        let body = [
            {
                type: 'add',
                id: this.makeid(),
                fields: {
                    title: this.newPost.title,
                    content: this.newPost.content
                }
            }
        ];
        this.http.post('https://f9omw56ceh.execute-api.us-east-2.amazonaws.com/beta_3', body)
            .subscribe((result) => {
                this.store.disposeOverlay();
            });
    }
    makeid() {
        let text = '';
        let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 5; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }
}
