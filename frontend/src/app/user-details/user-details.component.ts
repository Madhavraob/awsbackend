import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'
// import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserService } from "app/services/user.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  currentUserId: string;
  @Output() dummmy: EventEmitter<any> = new EventEmitter();
  
  useList = [{ name: 'madhav', city: 'hyd', role: 'admin' },
  { name: 'jagadish', city: 'us', role: 'usr' },
  { name: 'manoj', city: 'us', role: 'usr' }];

  name = 'madhav';
  email: string = 'mad@mad.com';
  city: string = 'london';
  postalcode: number = 12345;
  id: number;

  constructor(private _router: Router, private _activatedRouter: ActivatedRoute,
    private _userService: UserService) { }

  ngOnInit() {
    this._activatedRouter.params.subscribe((params: Params) => {
      let currentUserId = params['username'];
      this._userService.getUser(currentUserId).subscribe((userResponse) => {
        this.name = userResponse.name;
        this.email = userResponse.email;
        this.city = userResponse.city;
        this.postalcode = userResponse.postalcode;
        this.id = userResponse.id;
      })

    })
  }

  dealList() {
    this._router.navigate(['/directives']);
    // this.dummmy.emit('this.currentUserName');
  }

}
