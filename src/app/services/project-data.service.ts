import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


const projectUrl = `${environment.BaseUrl}project`
@Injectable({
  providedIn: 'root'
})
export class ProjectDataService {

  constructor(private H: HttpClient) { }

  NewProject(data: any): Observable<any> {
    return this.H.post(projectUrl, data)
  }

  GetProjectlist(): Observable<any> {
    return this.H.get(projectUrl)
  }

  GetOneProject(ID: string): Observable<any> {
    let _tasktUrl = `${projectUrl}/${ID}`
    return this.H.get(_tasktUrl)
  }
}
