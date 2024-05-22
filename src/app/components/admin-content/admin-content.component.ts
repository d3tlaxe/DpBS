import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Lesson } from '../../models/lesson';
import { LessonFormModel } from '../../models/lessonFormModel';
import { Console } from 'node:console';
import { LessonService } from '../../services/lesson.service';

@Component({
  selector: 'app-admin-content',
  templateUrl: './admin-content.component.html',
  styleUrl: './admin-content.component.css'
})
export class AdminContentComponent implements OnInit {

  addLessonForm : FormGroup;


  constructor(private formbuilder:FormBuilder, 
    private httpClient: HttpClient,
    private lessonService:LessonService){

  }

  ngOnInit(): void {
    this.createAddLessonForm();
  }

  createAddLessonForm(){
    this.addLessonForm = this.formbuilder.group({
      name:["", Validators.required],
      period:["", Validators.required],
      credit:["", Validators.required],
      lessonHour:["", Validators.required],
      capacity:["", Validators.required],
      isImperative:["", Validators.required],
      prelector:["", Validators.required]
    })
  }



  createLessonModel(){
    
    
    if(this.addLessonForm.valid){
      let lessonFormModel:LessonFormModel= Object.assign({}, this.addLessonForm.value)
      console.log(lessonFormModel.period);

      let lesson:Lesson = {Name:" ", Period: 0, Credit: 0, LessonHour: 0, Capacity: 0, isImperative:true};

      lesson.Name = lessonFormModel.name;
      lesson.Period = this.getPeriod(lessonFormModel);
      lesson.Credit = lessonFormModel.credit;
      lesson.LessonHour = lessonFormModel.lessonHour;
      lesson.Capacity = lessonFormModel.capacity;
      lesson.isImperative = this.getImperative(lessonFormModel);



      console.log(lesson.LessonHour);


      this.lessonService.addLesson(lesson).subscribe(response =>{
        console.log(response.message);
        console.log(lesson.LessonHour);
      })
      //return lesson;
      console.log("Ben burada ders bastım " + lesson.Name);
    }else{
      console.log("Lütfen Tüm Alanları Doldurunuz");
      //return null;
    }
  }


  getPeriod(formModel:LessonFormModel){

    let periodInt:number;
    if(formModel.period == "1. Sınıf Güz Dönemi"){
      periodInt = 1;
      
    }else if(formModel.period == "1. Sınıf Bahar Dönemi"){
      periodInt = 2;
      
    }else if(formModel.period == "2. Sınıf Güz Dönemi"){
      periodInt = 3;
      
    }else if(formModel.period == "2. Sınıf Bahar Dönemi"){
      periodInt = 4;
      
    }else if(formModel.period == "3. Sınıf Güz Dönemi"){
      periodInt = 5;
      
    }else if(formModel.period == "3. Sınıf Bahar Dönemi"){
      periodInt = 6;
      
    }else if(formModel.period == "4. Sınıf Güz Dönemi"){
      periodInt = 7;
      
    }else if(formModel.period == "4. Sınıf Bahar Dönemi"){
      periodInt = 8;
      
    }
    return periodInt;
  }


  getImperative(formModel:LessonFormModel){

    let Imperative:boolean;
    if(formModel.isImperative == "Zorunlu Ders"){
      Imperative = true;
      
    }else if(formModel.isImperative == "Seçmeli Ders"){
      Imperative = false;
      
    }
    return Imperative;
  }


}
