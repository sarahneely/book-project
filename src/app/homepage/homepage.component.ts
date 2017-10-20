import { Component, OnInit } from '@angular/core';

import { Books } from '../resources/books';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  bookList: Array<Books>
  public query: string;
  public queryString: string;
  title = "bookList";
  constructor() { }



  ngOnInit() {
    this.bookList = [
      {
      title: 'His Dark Materials',
      author: 'Phillip Pulman',
      published: '1995-2000',
      thumbnail: '',
      notes: "His Dark Materials is a trilogy consisting of The Golden Compass, The Subtle Knife, and The Ember Spyglass. The Golden Compass was made into a film in 2007 starring Nicole Kidman and Daniel Craig."
    },
      {title: '1984',
      author: 'George Orwell',
      published: 'June 8th, 1949',
      thumbnail: '',
      notes: "1984 is a story about a dystopian society. It was written in 1949 and ended up being quite prophetic."
    },

  ]}

  // getBooks(): void {
  //   this.bookList(this.queryString)
  //       .subscribe(result=> {
  //       this.bookList = result.data.children;
  //       console.log('this.bookList', this.bookList);
  //       this.bookList.forEach(post=> {
  //         post.data.created = post.data.created * 1000;
  //       })
  //     })
  //   }

}
