import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { DummyDataService } from '../dummydata/dummydata.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-addeditdummydata',
  templateUrl: './addeditdummydata.component.html',
  styleUrls: ['./addeditdummydata.component.css']
})
export class AddeditdummydataComponent implements OnInit {
  addEditForm: FormGroup;
  record:any;
  constructor(
    private formBuilder: FormBuilder,
    private dummyDataService: DummyDataService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.addEditForm = this.formBuilder.group({
      name: [''],
      salary: [''],
      age: [''],
    });
  }

  ngAfterViewInit() {
    this.dummyDataService.getDataDetail(this.route.snapshot.params.id)
      .subscribe(response => {
        this.record = response['data'];
        this.setEditForm(this.record);
      });
  }
  setEditForm(data){
    this.addEditForm.setValue({
      name: data.name,
      salary: data.salary,
      age: data.age
    })
  }

  save(){
    this.onSubmit();
  }

  onSubmit() {
    const value = this.addEditForm.value;
    if (this.addEditForm.valid) { 
      if(this.route.snapshot.params.id){
        this.dummyDataService.updateData(value, this.route.snapshot.params.id)
        .subscribe(
          data => {
            this.router.navigate(['/dummydata']);
          }
        )
      } else{
        this.dummyDataService.createData(value)
        .subscribe(
          data => {
            this.router.navigate(['/dummydata']);
          }
        )
      }                                                  
      
    }
  }

}
