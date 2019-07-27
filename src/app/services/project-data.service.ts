import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


const projectUrl = `${environment.BaseUrl}project`
const TaskUrl = `${environment.BaseUrl}task`
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

  DeleteProject(ID: string): Observable<any> {
    return this.H.delete(`${projectUrl}/${ID}`)
  }

  UpdateTask(ID: string, Status: string): Observable<any> {
    let params = new HttpParams()
    params = params.append("ID", ID)
    params = params.append("Status", Status)
    return this.H.put(TaskUrl, params )
  }
}
