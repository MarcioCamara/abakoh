import { Injectable } from '@angular/core';
import {
  faDribbble,
  faFacebookSquare,
  faInstagram,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faAddressCard, faCircleUp } from '@fortawesome/free-regular-svg-icons';
import {
  faBriefcase,
  faCartShopping,
  faGamepad,
  faMobileScreen,
  faRectangleAd,
} from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root',
})
export class IconsService {
  icons = {
    facebook: faFacebookSquare,
    x: faXTwitter,
    instagram: faInstagram,
    dribbble: faDribbble,
    addressCard: faAddressCard,
    gamepad: faGamepad,
    mobile: faMobileScreen,
    briefcase: faBriefcase,
    cartShopping: faCartShopping,
    rectangleAd: faRectangleAd,
    up: faCircleUp,
  };
}
