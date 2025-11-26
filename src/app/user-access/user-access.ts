import { Component, inject } from '@angular/core';
import { UserService } from '../user-service';

@Component({
  selector: 'app-user-access',
  imports: [],
  templateUrl: './user-access.html',
  styleUrl: './user-access.css',
})
export class UserAccess {
  private service = inject(UserService);
  public message: string | undefined;

  public register(username: string, password: string) {
    this.service.register(username, password)
      .then(response => {
        this.message = response.status.toString();
      });
  }

  public login(username: string, password: string) {

  }
}
