import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.page.html',
  styleUrls: ['./camera.page.scss'],
})
export class CameraPage implements OnInit {
  picture: string;

  constructor(public actionSheetController: ActionSheetController,
              private camera: Camera,
              private webview: WebView) { }

  ngOnInit() {
  }

  async onCamera() {
    const options: CameraOptions = {
      quality: 100,
      targetWidth: 800,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA,
      correctOrientation: true,
    };

    const actionSheet = await this.actionSheetController.create({
      buttons: [
        {
          text: 'Камера',
          handler: () => {
            this.camera
              .getPicture(options)
              .then((imageData) => {
                this.picture = this.webview.convertFileSrc(imageData);
              }, () => {});
          }
        },
        {
          text: 'Галерея',
          handler: () => {
            options.sourceType = this.camera.PictureSourceType.PHOTOLIBRARY;
            this.camera
              .getPicture(options)
              .then((imageData) => {
                this.picture = this.webview.convertFileSrc(imageData);
              }, () => {});
          }
        },
        {
          text: 'Отмена',
          role: 'cancel',
        },
      ],
    });
    await actionSheet.present();
  }
}
