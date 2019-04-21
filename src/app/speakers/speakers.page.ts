import { Component, OnInit } from '@angular/core';

import { SpeakersService } from '../speakers.service';

@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.page.html',
  styleUrls: ['./speakers.page.scss'],
})
export class SpeakersPage implements OnInit {
  public speakers: Array<{
    avatar: string;
    city: string;
    company: string;
    description: string;
    name: string;
    section: string;
    title: string;
  }> = [];

  constructor(public speakersService: SpeakersService) {}

  ngOnInit() {
    this.speakers = this.speakersService.getAll();
  }
}
