import { Component, ElementRef, ViewChild } from '@angular/core';
// Import the CloudinaryModule.
import { CloudinaryModule } from '@cloudinary/ng';
// Import the Cloudinary classes.
import { Cloudinary, CloudinaryVideo } from '@cloudinary/url-gen';
import { fill } from "@cloudinary/url-gen/actions/resize";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";
import { Gravity } from "@cloudinary/url-gen/qualifiers";
import { AutoFocus } from "@cloudinary/url-gen/qualifiers/autoFocus";
import Player from '@vimeo/player';
import { FlowbiteConfigService } from '../../services/flowbite-config.service';
import { NavbarComponent } from "../navbar/navbar.component";
@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CloudinaryModule, NavbarComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {
  vid!: CloudinaryVideo;
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;
  videoStarted = false;
  constructor(private flowbiteService: FlowbiteConfigService) { }
  ngOnInit(): void {
    this.flowbiteService.loadFlowbite(flowbite => {
      // Your custom code here
      console.log('Flowbite loaded', flowbite);
    });
  }
  ngAfterViewInit() {
    // No additional setup required for native video element
  }

  onVideoCanPlay() {
    // This event is triggered when the browser can start playing the video
  }

  onVideoPlay() {
    this.videoStarted = true;
  }
}
