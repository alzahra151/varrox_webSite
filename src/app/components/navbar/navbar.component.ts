import { Component, HostListener } from '@angular/core';
import { FlowbiteConfigService } from '../../services/flowbite-config.service';
import { MegaMenuModule } from 'primeng/megamenu';
import { MegaMenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MegaMenuModule,
    CommonModule,
    ButtonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(private flowbiteService: FlowbiteConfigService) { }
  items: MegaMenuItem[] | undefined;
  nav: HTMLElement | null = null;
  isScrolled: boolean = false

  ngOnInit() {
    this.items = [
      {
        label: 'Company',
        root: true,
        items: [
          [
            {
              items: [
                { label: 'Features', icon: 'pi pi-list', subtext: 'Subtext of item' },
                { label: 'Customers', icon: 'pi pi-users', subtext: 'Subtext of item' },
                { label: 'Case Studies', icon: 'pi pi-file', subtext: 'Subtext of item' }
              ]
            }
          ],
          [
            {
              items: [
                { label: 'Solutions', icon: 'pi pi-shield', subtext: 'Subtext of item' },
                { label: 'Faq', icon: 'pi pi-question', subtext: 'Subtext of item' },
                { label: 'Library', icon: 'pi pi-search', subtext: 'Subtext of item' }
              ]
            }
          ],
          [
            {
              items: [
                { label: 'Community', icon: 'pi pi-comments', subtext: 'Subtext of item' },
                { label: 'Rewards', icon: 'pi pi-star', subtext: 'Subtext of item' },
                { label: 'Investors', icon: 'pi pi-globe', subtext: 'Subtext of item' }
              ]
            }
          ],
          [
            {
              items: [{ image: 'https://primefaces.org/cdn/primeng/images/uikit/uikit-system.png', label: 'GET STARTED', subtext: 'Build spectacular apps in no time.' }]
            }
          ]
        ]
      },
      {
        label: 'Resources',
        root: true
      },
      {
        label: 'Contact',
        root: true
      }
    ];
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const megaMenuLinks = document.querySelectorAll('#mega-menu-full a');
    if (this.nav) {
      // Check if scroll position is greater than 0
      if (window.scrollY > 0) {
        // Add a class to change background color
        this.nav.classList.add('scrolled');
        this.isScrolled = true
      } else {
        // Remove the class if scroll position is back to top
        this.nav.classList.remove('scrolled');
        this.isScrolled = false
      }
    }
  }
  ngAfterViewInit() {
    // Select the navigation element after view initialization
    this.nav = document.getElementById('main-nav');
  }
}
