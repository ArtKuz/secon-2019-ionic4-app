import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SpeakersService } from '../speakers.service';

@Component({
  selector: 'app-speaker',
  templateUrl: './speaker.page.html',
  styleUrls: ['./speaker.page.scss'],
})
export class SpeakerPage implements OnInit {
  public speaker: {
    avatar: string;
    city: string;
    company: string;
    description: string;
    name: string;
    section: string;
    title: string;
  };

  constructor(private activatedRoute: ActivatedRoute,
              public speakersService: SpeakersService) { }

  ngOnInit() {
    this.activatedRoute
      .params.subscribe(params => {
        this.speaker = this.speakersService.get(params.id);
    });
  }
}
