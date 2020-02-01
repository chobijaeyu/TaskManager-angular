import { Injectable } from '@angular/core';
import { WebSocketSubject, webSocket } from 'rxjs/websocket';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private wsUrl = `${environment.BaseUrl}ws`
  private socket$: WebSocketSubject<string>

  constructor() {
  }

  createws() {
    return this.socket$ = WebSocketSubject.create(this.wsUrl)
  }

}
