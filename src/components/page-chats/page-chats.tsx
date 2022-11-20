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
            {state.topics.map(topic=>
              <ion-item href={"/chat/"+topic} key={topic}>
                <ion-label>{topic} is following you</ion-label>
              </ion-item>
            )}
          </ion-list>
        </ion-content>
        <ion-fab slot="fixed" vertical="bottom" horizontal="end">
          <ion-fab-button onClick={this.onClickAdd}>
            <ion-icon src={add}></ion-icon>
          </ion-fab-button>
        </ion-fab>
      </Fragment>
    );
  }

  onClickAdd(_:any){
    const count = state.topics.length + 1
    // todo add modal to set name
    // https://ionicframework.com/docs/api/modal
    const name = `Topic ${count}`
    sendMessage(name, `I created ${name}`)
  }

}
