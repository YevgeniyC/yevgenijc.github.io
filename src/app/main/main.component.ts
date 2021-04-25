import { Component, OnInit } from '@angular/core';
import * as data from '../../static-data/skills';
import * as data_interests from '../../static-data/interest';
import * as data_tools from '../../static-data/tools';
import * as data_jobExp from '../../static-data/job-exp';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  data: any;
  objData: any[] = [];
  sortedData: any[] = [];
  interests: any[];
  tools: any[];
  jobExp: any[];
  constructor() {
    this.interests = [];
    this.tools = [];
    this.jobExp = [];
  }

  ngOnInit(): void {
    this.data = data.skills;
    this.interests = data_interests.interest;
    this.tools = data_tools.tools;
    this.jobExp = data_jobExp.jobExp;
    console.log(this.jobExp);
    for (let i = 0; i < this.data.length; i++) {
      const tempData = this.data[i];
      const objKey = Object.keys(tempData).toString();
      if (tempData.hasOwnProperty(objKey)) {
        this.objData.push(tempData[objKey]);
      }
    }

    for (let i = 0; i < this.objData.length; i++) {
      for (let j = 0; j < this.objData.length; j++) {
        if (this.objData[i].level > this.objData[j].level) {
          const temp = this.objData[j];
          this.objData[j] = this.objData[i];
          this.objData[i] = temp;
        }
      }
    }
  }
}
