import { Component, Fragment, h } from '@stencil/core';
import { add } from 'ionicons/icons';
import state, { sendMessage } from '../../global/store';

@Component({
  tag: 'page-chats',
  styleUrl: 'page-chats.css',
  // shadow: true,
})
export class PageChats {
  render() {
    return (
      <Fragment>
        <ion-header>
          <ion-toolbar color="primary">
            <ion-title>Chats</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <ion-list>
            {Object.keys(state.messages).map(topic =>
              <ion-item href={"#/chat/" + encodeURIComponent(topic)} key={topic}>
                <ion-label>{topic}</ion-label>
              </ion-item>
            )}
          </ion-list>
        </ion-content>
        <ion-fab slot="fixed" vertical="bottom" horizontal="end">
          <ion-fab-button onClick={askForTitle}>
            <ion-icon src={add}></ion-icon>
          </ion-fab-button>
        </ion-fab>
      </Fragment>
    );
  }
}

async function askForTitle() {
  const alert = document.createElement('ion-alert');
  alert.header = 'Please enter the name of your topic';
  alert.buttons = [
    {
      text: 'Cancel',
      role: 'cancel',
    },
    {
      text: 'Create',
      role: 'confirm',
      handler: ({["0"]:name})=> {
        if (name.length >= 1) {
          sendMessage(name, `I created ${name}`)
          alert.dismiss()
        }
      },
    },
  ];
  alert.inputs = [
    {
      placeholder: 'Topic name',
      attributes: {
        maxlength: 24
        , minlength: 3
      }
    },
  ];

  document.body.appendChild(alert);
  await alert.present();
}