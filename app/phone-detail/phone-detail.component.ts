import { Component, Inject } from '@angular/core';
import { Phone, PhoneData } from '../core/phone/phone.service';
@Component({
  moduleId: module.id,
  selector: 'phone-detail',
  templateUrl: 'phone-detail.template.html',
})
export class PhoneDetailComponent {
  phone: PhoneData;
  mainImageUrl: string;
  constructor(@Inject('$routeParams') 
                  $routeParams: angular.route.IRouteParamsService,
              phone: Phone) {
    phone.get($routeParams['phoneId']).subscribe(phone => {
      //append app folder to this data
      phone.images.forEach(function (item, index, imageArr) {
        imageArr[index] = 'app/' + item;
      });

      this.phone = phone;

      this.setImage(phone.images[0]);
    });
  }
  setImage(imageUrl: string) {
    this.mainImageUrl = imageUrl;
  }
}
