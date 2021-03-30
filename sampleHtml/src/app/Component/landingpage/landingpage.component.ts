import { Component, OnInit } from '@angular/core';
import { faBell, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { UserService } from 'src/app/Services/auth.service';
import { ACCESS_TOKEN, CURRENT_USER } from 'src/app/Utilities/UtilsRegex';
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

  constructor(private userService : UserService) { }

  ngOnInit(): void {
  }

  public onClick(): void{
    console.log(this.userService.currentUser);
    localStorage.getItem(ACCESS_TOKEN)
    console.log(localStorage.getItem(ACCESS_TOKEN));
    console.log(localStorage.getItem(CURRENT_USER))
  }

  get getName() :string{
    const user = JSON.parse(localStorage.getItem(CURRENT_USER))
    if(user.username != null){
      return "hello " + user.username
    }
    return null
  }

}
