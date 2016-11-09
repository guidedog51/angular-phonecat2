// import { Phone, PhoneData } from '../core/phone/phone.service';
// declare var angular: any;
//
// class PhoneListController {
//   phones: PhoneData[];
//   orderProp: string;
//   static $inject = ['phone'];
//   constructor(phone: Phone) {
//     phone.query().subscribe(phones => {
//       this.phones = phones;
//     });
//     this.orderProp = 'age';
//     console.log('PhoneListController Constructor')
//   }
// }
// angular.
// module('phoneList').
// component('phoneList', {
//   templateUrl: 'app/phone-list/phone-list.template.html',
//   controller: PhoneListController
// });

import { Component } from '@angular/core';
import { Phone, PhoneData } from '../core/phone/phone.service';
@Component({
    moduleId: module.id,
    selector: 'phone-list',
    templateUrl: 'phone-list.template.html'
})
export class PhoneListComponent {
    phones: PhoneData[];
    query: string;
    orderProp: string;


    getPhones(): PhoneData[] {
        return this.sortPhones(this.filterPhones(this.phones));
    }
    private filterPhones(phones: PhoneData[]) {
        if (phones && this.query) {
            return phones.filter(phone => {
                let name = phone.name.toLowerCase();
                let snippet = phone.snippet.toLowerCase();
                return name.indexOf(this.query) >= 0 || snippet.indexOf(this.query) >= 0;
            });
        }
        return phones;
    }
    private sortPhones(phones: PhoneData[]) {
        if (phones && this.orderProp) {
            return phones
                .slice(0) // Make a copy
                .sort((a, b) => {
                    if (a[this.orderProp] < b[this.orderProp]) {
                        return -1;
                    } else if ([b[this.orderProp] < a[this.orderProp]]) {
                        return 1;
                    } else {
                        return 0;
                    }
                });
        }
        return phones;
    }
    
    constructor(phone: Phone) {
        phone.query().subscribe(phones => {
            this.phones = phones;
        });
        this.orderProp = 'age';
    }
}
