import { Component, Fragment, h, Prop } from '@stencil/core';

@Component({
  tag: 'page-chat',
  styleUrl: 'page-chat.css',
  // shadow: true,
})
export class PageChat {
  @Prop() name: string

  normalize(name: string): string {
    name = name || ''
    return name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase();
  }

  render() {
    return (
      <Fragment>
        <ion-header>
          <ion-toolbar color="primary">
            <ion-buttons slot="start">
              <ion-back-button defaultHref="/tab/notice"></ion-back-button>
            </ion-buttons>
            <ion-title>chat about {this.name}</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content fullscreen class="ion-padding">
          <ion-card>
            <ion-card-header>
              <h1>
                {this.normalize(this.name)}
              </h1>
            </ion-card-header>
            <ion-card-content>
              <p>
                This name is passed in through a route param!
              </p>
            </ion-card-content>
          </ion-card>
        </ion-content>
      </Fragment>
    );
  }

}
