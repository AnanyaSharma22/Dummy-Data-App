import { Component, OnInit } from '@angular/core';
import { DummyDataService } from '../dummydata/dummydata.service';

@Component({
  selector: 'app-dummydata',
  templateUrl: './dummydata.component.html',
  styleUrls: ['./dummydata.component.css']
})
export class DummydataComponent implements OnInit {

  records:any;
  record:any;
  constructor(
    private dummyDataService: DummyDataService,
  ) { }

  ngOnInit() {
    this.getDummyData();
  }

  getDummyData(){
    return this.dummyDataService.getData()
        .subscribe(response => {
          this.records = response['data'];
        })
  }

  dummyDetail(id){
    return this.dummyDataService.getDataDetail(id)
      .subscribe(response => {
        this.record = response['data'];
      })
  }

  deleteData(id){
    return this.dummyDataService.deleteData(id)
      .subscribe(response => {
        this.getDummyData();
      })
  }

}
