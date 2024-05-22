import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lesson } from '../models/lesson';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  apiUrl = "https://localhost:44390/api/Lessons/add";
  constructor(private httpClient: HttpClient) { }


  addLesson(lesson:Lesson):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl,lesson)
  }
}
