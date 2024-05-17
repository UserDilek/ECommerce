import { Injectable,Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { threadId } from 'worker_threads';
import { coerceStringArray } from '@angular/cdk/coercion';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient:HttpClient,@Inject("baseUrl") private baseUrl:string) {

  }

  private url(request:Partial<RequestParameters>):string{
    return `${request.baseUrl ? request.baseUrl :this.baseUrl}/${request.controller}${request.action ? `/${request.action}` :""}${request.queryString ? `?${request.queryString}` : ""}` ;

  }

  get<T>(request:Partial<RequestParameters>,id?:string):Observable<T> {
      let url:string;
      url =  request.fullEndPoint ? request.fullEndPoint:  this.url(request); // şurada id ile ilgili bir çalıima yapmak gerekiyorsa burda yapmak gerekiyor.
      return this.httpClient.get<T>(url);
   }

   post<T>(request:Partial<RequestParameters> , body:T):Observable<T>{
    let url :string;
    url =  request.fullEndPoint ? request.fullEndPoint:  this.url(request);
    console.log("dilek")
    return this.httpClient.post<T>(url,body,{headers:request.headers});
   }

   delete<T>(request:Partial<RequestParameters> ,id:string){
      let url:string;
      url =  request.fullEndPoint ? request.fullEndPoint:  this.url(request);
      if (request.fullEndPoint)
        url = request.fullEndPoint;
      else
        url = `${this.url(request)}/${id}${request.queryString ? `?${request.queryString}` : ""}`;
        return this.httpClient.delete<T>(url);
   }


}




export class RequestParameters{
  controller?:string;
  action?:string;
  headers?:HttpHeaders;
  queryString?:string;
  baseUrl?:string
  fullEndPoint?:string // kendi uygulammaız dışında bir yere istek atabiliriz. bunun sonucuda başka bir baseurl gelebilir. O yüzden bunu burda düşünmemeiz gerekir.
}
