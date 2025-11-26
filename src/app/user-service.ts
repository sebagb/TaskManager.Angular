import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly base = 'http://localhost:8080/member';

  public async register(username: string, password: string): Promise<Response> {
    const url = `${this.base}/register`
    const request = new Request(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "username": username,
        "password": password,
      }),
    });
    const data = await fetch(request);
    return data;
  }
}
