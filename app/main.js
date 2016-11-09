"use strict";
var upgrade_1 = require('@angular/upgrade');
var phone_service_1 = require('./core/phone/phone.service');
var app_module_1 = require('./app.module');
var phone_list_component_1 = require('./phone-list/phone-list.component');
var upgradeAdapter = new upgrade_1.UpgradeAdapter(app_module_1.AppModule);
var provider = upgradeAdapter.downgradeNg2Provider(phone_service_1.Phone);
angular.module('core.phone')
    .factory('phone', upgradeAdapter.downgradeNg2Provider(phone_service_1.Phone));
angular.module('phoneList')
    .directive('phoneList', upgradeAdapter.downgradeNg2Component(phone_list_component_1.PhoneListComponent));
upgradeAdapter.bootstrap(document.documentElement, ['phonecatApp']).ready(function (ref) {
    var phone = ref.ng1Injector.get('phone');
});
;
//# sourceMappingURL=main.js.map