import { Component, OnInit } from '@angular/core';
import {LoginService} from "../login/login.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[LoginService]

})

export class HomeComponent implements OnInit {
    public currentUser: any;
    users : any ;

    constructor(private _loginService : LoginService) {
    }

    ngOnInit() {

      let user =JSON.parse(localStorage.getItem('currentUser'));
      this.currentUser = user.name;
        /*this.users = this.currentUser;*/
    }

    cook(){
              this._loginService.cook().subscribe(resVideoData =>{
                console.log(resVideoData);
                },error => {
                   /* this.alertService.error(error);*/
                }
            );
    }

    /*
    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }
      */
}