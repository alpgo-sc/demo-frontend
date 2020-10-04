import { Component } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

interface MenuGroupItem {
  title: string;
  icon: string;
  menuItemList: MenuItem[];
}

interface MenuItem {
  label: string;
  routerLink: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  isCollapsed = false;

  param = { value: 'world' };

  LANGUAGE_LIST = ['en', 'zh-Hans'];

  menuItemGroup: MenuGroupItem[] = [
    {
      title: 'Dashboard',
      icon: 'dashboard',
      menuItemList: [
        {
          label: 'Welcome Demo',
          routerLink: '/welcome',
        },
      ],
    },
  ];

  constructor(private translate: TranslateService) {}

  switchLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
    location.reload();
  }
}
