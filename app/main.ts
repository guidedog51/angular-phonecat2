import { UpgradeAdapter } from '@angular/upgrade';
import { Phone } from './core/phone/phone.service';
import { AppModule } from './app.module';

declare var angular: any;
let upgradeAdapter = new UpgradeAdapter(AppModule);

var provider = upgradeAdapter.downgradeNg2Provider(Phone);
angular.module('core.phone')
    .factory('phone', upgradeAdapter.downgradeNg2Provider(Phone));

upgradeAdapter.bootstrap(document.documentElement, ['phonecatApp']).ready((ref) => {
    let phone: Phone = ref.ng1Injector.get('phone');
});;
