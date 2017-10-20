import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public query: string;
  public queryString: string;
  public bookList;
  title = "bookList";
}

ngOnInit () {

}

Array<books> = [
  {title: 'His Dark Materials',
  author: 'Phillip Pulman',
  published: '1995-2000',
  thumbnail: url(''),
  notes: "His Dark Materials is a trilogy consisting of The Golden Compass, The Subtle Knife, and The Ember Spyglass. The Golden Compass was made into a film in 2007 starring Nicole Kidman and Daniel Craig."
  }
  {title: '1984',
  author: 'George Orwell',
  published: 'June 8th, 1949',
  thumbnail: url(''),
  notes: "1984 is a story about a dystopian society. It was written in 1949 and ended up being quite prophetic."
  }
]
