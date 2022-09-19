import { Component, OnInit } from '@angular/core';
import { JwtAuthService } from 'src/app/services/jwt-auth.service';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {

  constructor(public jwtAuthService: JwtAuthService) { }

  ngOnInit(): void {
  }


}
