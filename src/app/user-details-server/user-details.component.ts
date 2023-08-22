import {Component, OnInit, Input, OnChanges} from '@angular/core';
import {UserServerService} from '../user-server.service';
import {User} from '../user.model';

@Component({
  selector: 'app-user-details-server',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsServerComponent implements OnChanges {
  @Input()
  userId?: number;

  user: User = {} as User;

  constructor(private userServer: UserServerService) {}

  ngOnChanges() {
    if (this.userId) {
      this.userServer.getUser(this.userId)
        .subscribe( user => this.user = user);
    }
  }
}
