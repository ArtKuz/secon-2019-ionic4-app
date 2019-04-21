import { Component, OnInit } from '@angular/core';

import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions } from '@ionic-native/camera-preview/ngx';

@Component({
  selector: 'app-camera2',
  templateUrl: './camera2.page.html',
  styleUrls: ['./camera2.page.scss'],
})
export class Camera2Page implements OnInit {

  cameraPreviewOpts: CameraPreviewOptions = {
    x: 0,
    y: 0,
    width: window.screen.width,
    height: window.screen.height,
    camera: 'rear',
    tapPhoto: true,
    previewDrag: true,
    toBack: true,
    alpha: 1,
  };

  pictureOpts: CameraPreviewPictureOptions = {
    width: 1280,
    height: 1280,
    quality: 85,
  };

  picture: string;

  constructor(private cameraPreview: CameraPreview) { }

  ngOnInit() {
    this.startCamera();
  }

  startCamera() {
    this.cameraPreview
      .startCamera(this.cameraPreviewOpts)
      .then((res) => {
        console.log(res);
        this.cameraPreview.show();
      }, (err) => {
        console.log(err);
      });
  }

  takePicture() {
    this.cameraPreview
      .takePicture(this.pictureOpts)
      .then((imageData) => {
        this.picture = 'data:image/jpeg;base64,' + imageData;
      }, (err) => {
        console.log(err);
      });
  }
}
