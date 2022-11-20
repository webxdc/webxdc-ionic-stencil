import { getMode } from '@ionic/core';
import { Component, h } from '@stencil/core';

import { chatbubbles, chatbubblesOutline, settings, settingsOutline } from 'ionicons/icons'

@Component({
  tag: 'app-tabs',
  styleUrl: 'app-tabs.css',
  // shadow: true,
})
export class AppTabs {

  render() {
    return (
      <ion-tabs>
        <ion-tab tab="tab-chats">
          <ion-nav></ion-nav>
        </ion-tab>
        <ion-tab tab="tab-settings">
          <ion-nav></ion-nav>
        </ion-tab>
        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="tab-chats">
            <ion-icon src={getMode() == 'ios' ? chatbubblesOutline: chatbubbles}></ion-icon>
            <ion-label>Chats</ion-label>
          </ion-tab-button>
          <ion-tab-button tab="tab-settings">
            <ion-icon src={getMode() == 'ios' ? settingsOutline : settings}></ion-icon>
            <ion-label>Settings</ion-label>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    );
  }

}
