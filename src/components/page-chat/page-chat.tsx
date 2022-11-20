import { Component, Fragment, h, Prop } from '@stencil/core';
import { sendOutline } from 'ionicons/icons';
import state, { sendMessage } from '../../global/store';

@Component({
  tag: 'page-chat',
  styleUrl: 'page-chat.css',
  // shadow: true,
})
export class PageChat {
  @Prop() topic: string

  textInput!: HTMLIonTextareaElement

  normalize(name: string): string {
    name = name || ''
    return name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();
  }

  render() {
    const topic = decodeURIComponent(this.topic)
    return (
      <Fragment>
        <ion-header>
          <ion-toolbar color="primary">
            <ion-buttons slot="start">
              <ion-back-button defaultHref="/tab/notice"></ion-back-button>
            </ion-buttons>
            <ion-title>Chat about {topic}</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content fullscreen class="ion-padding">
          <ion-list lines="none">
            {(state.messages[topic]||[]).map(({ author, text }) => {
              return <ion-item><b>{author}: </b>{text}</ion-item>
            })}
          </ion-list>
        </ion-content>
        <ion-footer>
          <ion-card>
            <ion-card-content>
              <ion-grid>
                <ion-row>
                  <ion-col size="11"><ion-textarea ref={(el) => this.textInput = el as HTMLIonTextareaElement} placeholder="Enter message here"></ion-textarea></ion-col>
                  <ion-col size="auto"><ion-button shape="round" onClick={this.send.bind(this)}>
                    <ion-icon src={sendOutline}> </ion-icon>
                  </ion-button></ion-col>
                </ion-row>
              </ion-grid>
            </ion-card-content>
          </ion-card>
        </ion-footer>
      </Fragment>
    );
  }

  send() {
    const value = this.textInput.value
    if (value.length > 0) {
      sendMessage(decodeURIComponent(this.topic), value)
      this.textInput.value = ''
    }
  }
}
