import { Component, OnInit } from '@angular/core';
import { faBell, faCircle, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Cards } from 'src/app/interfaces/card';
import { UserSave } from '../Shared/user.model';
@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
  faFacebook = faFacebook;
  faBell = faBell
  faCircle = faQuestionCircle
  faInstagram = faInstagram

  constructor(private userModel : UserSave) { }

  ngOnInit(): void {
  }

  public onClick(): void{
    console.log(this.userModel)
  }

}
