import { UpgradeAdapter } from '@angular/upgrade';
import { Phone } from './core/phone/phone.service';
import { AppModule } from './app.module';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { PhoneDetailComponent } from './phone-detail/phone-detail.component';

declare var angular: any;
let upgradeAdapter = new UpgradeAdapter(AppModule);

upgradeAdapter.upgradeNg1Provider('$routeParams');

var provider = upgradeAdapter.downgradeNg2Provider(Phone);
angular.module('core.phone')
    .factory('phone', upgradeAdapter.downgradeNg2Provider(Phone));

angular.module('phoneList')
    .directive(
        'phoneList',
        upgradeAdapter.downgradeNg2Component(PhoneListComponent) as angular.IDirectiveFactory
    );

angular.module('phoneDetail')
    .directive(
        'phoneDetail',
        upgradeAdapter.downgradeNg2Component(PhoneDetailComponent) as angular.IDirectiveFactory
    );

upgradeAdapter.bootstrap(document.documentElement, ['phonecatApp']).ready((ref) => {
    let phone: Phone = ref.ng1Injector.get('phone');
});;
