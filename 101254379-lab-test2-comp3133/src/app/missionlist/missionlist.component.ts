import { Component, OnInit } from '@angular/core';
import { SpacexapiService } from '../network/spacexapi.service';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {

  data: any;

  constructor(private spacexapiService: SpacexapiService) {
    this.spacexapiService.getData().subscribe(data => {
      console.log(data);
      this.data = data;
    });
  }

  ngOnInit(): void {
  }

  goToDetails(details: any) {
    this.spacexapiService.details = details;
  }

}
