import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  // shadow: true,
})
export class AppRoot {
  render() {
    return (
      <ion-app>
        <ion-router useHash={true}>
          <ion-route-redirect from="/" to="/tab/chats"></ion-route-redirect>
          <ion-route url="/tab" component="app-tabs">
            <ion-route url="/chats" component="tab-chats">
              <ion-route component="page-chats"></ion-route>
            </ion-route>
            <ion-route url="/settings" component="tab-settings">
              <ion-route component="page-settings"></ion-route>
            </ion-route>
          </ion-route>
          <ion-route url="/chat/:topic" component="page-chat"></ion-route>
        </ion-router>
        <ion-nav></ion-nav>
      </ion-app>
    )
  }
}
