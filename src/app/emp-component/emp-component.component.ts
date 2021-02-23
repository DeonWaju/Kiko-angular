import { Component, OnInit } from '@angular/core';
import {RecordsService} from '../records.service'

@Component({
  selector: 'app-emp-component',
  templateUrl: './emp-component.component.html',
  styleUrls: ['./emp-component.component.css'],
  providers: [RecordsService]
})
export class EmpComponentComponent implements OnInit {

  infoReceived1: String[] = [];
  infoReceived2: String[] = [];
  infoReceived3: String[] = [];

  getInfoReceived1() {
    return this.infoReceived1 = this.recordsService.getInfo1()
  }

  getInfoReceived2() {
    return this.infoReceived2 = this.recordsService.getInfo2()
  }

  getInfoReceived3() {
    return this.infoReceived3 = this.recordsService.getInfo3()
  }



  constructor(private recordsService: RecordsService) { }

  ngOnInit(): void {
  }

}
