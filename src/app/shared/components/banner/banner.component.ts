import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  styleUrls: ['banner.component.scss'],
  templateUrl: 'banner.component.html'
})
export class BannerComponent {
  @Input() private image: string;
  @Input() private revealMonster: boolean;
}
