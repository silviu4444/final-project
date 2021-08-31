import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private authService: AuthService) {}

  @Input() matDrawerRef: MatDrawer;
  isAuthenticated = false;
  private userSub: Subscription;

  ngOnInit() {
    this.userSub = this.authService.user$.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
  }

  onToggleSidebar() {
    this.matDrawerRef.toggle();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
