import { Component, OnInit } from '@angular/core';
import { SpacexapiService } from '../network/spacexapi.service';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {

  details: any;

  constructor(private spacexapiService: SpacexapiService) {
    this.details = this.spacexapiService.details;
  }

  ngOnInit(): void {
  }

}
