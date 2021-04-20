import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bug } from './Bug';

@Injectable({
  providedIn: 'root'
})
export class BugService {
  update(bug: Bug, id: string) {
    return this.http.put('http://localhost:8082/bug'+'/'+id, bug, {
      headers: { "content-type": 'application/json' }

    });
  }

  constructor(private http: HttpClient) { }
  //Create Bug
  save(bug: Bug) {
    return this.http.post('http://localhost:8082/bug', bug, {
      headers: { "content-type": 'application/json' },
      responseType:"text"
    });
  }
  // View All Bugs
  getAllBugs(){
    return this.http.get('http://localhost:8082/bug')
  }

  //Get Bug by name
  getBugName(bugname:string  ){
    return this.http.get('http://localhost:8082/bug/name'+'/'+bugname);
  }
  //Get Bug by status
  getBugStatus(bugstatus:string  ){
    return this.http.get('http://localhost:8082/bug/status'+'/'+bugstatus);
  }
}
