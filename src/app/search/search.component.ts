import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchStr = '';
  minLength = 3;
  isLoaded = false;
  user: any;

  constructor(private service: UsersService) {
  }

  ngOnInit(): void {
  }

  handlerChange(): void {
    if (this.minLength <= this.searchStr.length) {
      this.service.getUser(this.searchStr)
        .subscribe(user => {
            this.user = user;
            this.isLoaded = true;
          },
          error => {
            this.isLoaded = false;
          });
    }
  }
}
