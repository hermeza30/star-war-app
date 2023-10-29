import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTER_UTIL } from 'src/app/constants';
import { RouterUtil } from 'src/app/interfaces';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [RouterModule],
})
export class NavbarComponent {
  public PATH: RouterUtil = ROUTER_UTIL;
}
