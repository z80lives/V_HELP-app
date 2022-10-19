import {Component, Input} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {Menu} from "primeng/menu";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  @Input('menu') menu!: Menu;

  @Input('navItems') navItems : {label: string; routerLink: string}[] = [
    {label: "Home", routerLink: '/dashboard/'},
    {label: "Schools", routerLink: "/dashboard/schools"},
    {label: "Admin", routerLink: "/dashboard/admin"},
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}
