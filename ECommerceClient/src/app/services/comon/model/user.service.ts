import { Injectable } from '@angular/core';
import { HttpClientService } from '../../common/http-client.service';
import { Create_User } from '../../../Contracts/User/Creaete_User';
import { User } from '../../../Contracts/User';
import { Observable } from 'rxjs';
import { firstValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

   constructor(private HttpClientService:HttpClientService) { }

    async Create(user:User):Promise<Create_User>{
      console.log(user);
      const observableCreateUser: Observable<Create_User | User> = await this.HttpClientService.post({
        controller:"User"
      },user);

      return await firstValueFrom(observableCreateUser) as Create_User;

    }

}
