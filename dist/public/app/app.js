"use strict";function getParameterByName(a){a=a.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var b=new RegExp("[\\?&]"+a+"=([^&#]*)"),c=b.exec(location.search);return null===c?"":decodeURIComponent(c[1].replace(/\+/g," "))}angular.module("marktplaatsIacVerkoopApp",["ngCookies","ngResource","ngSanitize","ui.router","ui.bootstrap","youtube-embed","angulartics","angulartics.google.tagmanager.custom","ngEqualizer"]).config(["$stateProvider","$urlRouterProvider","$locationProvider",function(a,b,c){b.otherwise("/")}]).config(["$analyticsProvider",function(a){a.virtualPageviews(!1)}]).run(["$rootScope","$state",function(a,b){a.$on("$stateChangeError",function(a,c,d,e,f,g){b.go("main.home")})}]).filter("replaceComma",function(){return function(a){return a?a.split(",").join("."):void 0}}),angular.module("marktplaatsIacVerkoopApp").controller("HomeCtrl",["$scope","$state","$analytics","checkVehicle","carInformation","$location",function(a,b,c,d,e,f){function g(c,e){d(c,e).then(function(){a.hasErrors=!1,b.go("main.search",{license:c,mileage:e?e:0})})["catch"](function(){a.hasErrors=!0})}c.pageTrack("/"),a.license=getParameterByName("licensePlate")||"",a.submitLicense=g,a.hasErrors=!1}]),angular.module("marktplaatsIacVerkoopApp").config(["$stateProvider",function(a){a.state("main.home",{url:"/",templateUrl:"app/main/home/home.html",controller:"HomeCtrl",resolve:{resetCarInformation:["$q","carInformation",function(a,b){b.reset()}]}})}]),angular.module("marktplaatsIacVerkoopApp").controller("MainCtrl",["$scope","carInformation","checkVehiclePrice",function(a,b,c){a.carInformation=b,a.result={licensePlate:b.licensePlate,sellUrl:"https://www.marktplaats.nl/syi/91/plaatsAdvertentie.html?bucket=&origin=HEADER&licensePlate="+b.licensePlate};var d=angular.element;d(".icon-social").delegate(".facebook","click",function(a){a.preventDefault();var b=d(this).closest(".row"),c=b.find(".sold-cars__title").text(),e=b.find(".sold-cars__descr").text(),f=b.find("sold-cars-item").attr("youtube-id");FB.ui({method:"feed",link:"https://developers.facebook.com/docs/reference/dialogs/",picture:"http://img.youtube.com/vi/"+f+"/0.jpg",name:c,caption:"Het geheim van de dealer",description:e})})}]),angular.module("marktplaatsIacVerkoopApp").config(["$stateProvider",function(a){a.state("main",{url:"","abstract":!0,templateUrl:"app/main/main.html",controller:"MainCtrl"})}]),angular.module("marktplaatsIacVerkoopApp").controller("SearchCtrl",["$scope","carInformation","$analytics","selligent","$location","checkVehiclePrice",function(a,b,c,d,e,f){c.pageTrack("/search");var g=b.data;a.result={licensePlate:b.licensePlate,mileage:b.mileage,brand:g.vehicle.make_name,model:g.vehicle.model_name,averagePrice:g.averagePrice,year:g.vehicle.vehicle_reg_year,sellUrl:"https://www.marktplaats.nl/syi/91/plaatsAdvertentie.html?bucket=&origin=HEADER&licensePlate="+b.licensePlate},a.fact={modelTimesSeen:g.views.model,averageDays:g.vehicle.days_to_sell,brandTimesSeen:g.views.make}}]),angular.module("marktplaatsIacVerkoopApp").config(["$stateProvider",function(a){a.state("main.search",{url:"/:license/:mileage",templateUrl:"app/main/search/search.html",controller:"SearchCtrl",resolve:{licenseResult:["carInformation","$stateParams",function(a,b){return a.getResultsForLicense(b.license,b.mileage)}]}})}]),angular.module("marktplaatsIacVerkoopApp").service("carInformation",["checkVehicle","checkVehiclePrice",function(a,b){function c(b,c){return e.licensePlate=b,e.mileage=c,a(b,c).then(function(a){e.data=a})}function d(){e.data=void 0}var e={data:void 0,licensePlate:"",mileage:0,getResultsForLicense:c,reset:d};return e}]),angular.module("marktplaatsIacVerkoopApp").service("checkVehicle",["$q","$http","checkVehiclePrice",function(a,b,c){return function(d,e){var f=a.defer();return b.jsonp("http://www.marktplaatsautoverkoper.nl/sellyourcar/api/vehicle?callback=JSON_CALLBACK&lpn="+d).success(function(a){a.success?c(d,e).then(function(b){a.content.averagePrice=b,f.resolve(a.content)}):f.reject()}),f.promise}}]),angular.module("marktplaatsIacVerkoopApp").service("checkVehiclePrice",["$q","$http",function(a,b){return function(c,d){var e=a.defer();return b.jsonp("http://www.marktplaats.nl/auto-s/vraagprijsadvies.jsonp?licensePlate="+c+"&mileage="+d+"&callback=JSON_CALLBACK").success(function(a){a.valid&&a.value>-1?e.resolve(a.value):e.resolve(0)}),e.promise}}]),angular.module("marktplaatsIacVerkoopApp").directive("findMore",function(){return{templateUrl:"components/find-more/find-more.html",restrict:"EA",link:function(a,b,c){}}}),angular.module("marktplaatsIacVerkoopApp").directive("footer",function(){return{templateUrl:"components/footer/footer.html",restrict:"EA",link:function(a,b,c){}}}),function(a){a.module("angulartics.google.tagmanager.custom",["angulartics"]).config(["$analyticsProvider",function(a){a.registerPageTrack(function(a){var b=window.dataLayer=window.dataLayer||[];b.push({event:"eventPush",pageName:"CARS_VERKOPEN2015"})}),a.registerEventTrack(function(a,b){var c=window.dataLayer=window.dataLayer||[];b=b||{},c.push({event:"eventPush",pageName:"CARS_VERKOPEN2015",e_category:location.pathname+location.hash.substring(2),e_action:a})})}])}(angular),angular.module("marktplaatsIacVerkoopApp").directive("header",function(){return{templateUrl:"components/header/header.html",restrict:"EA",link:function(a,b,c){}}}),angular.module("marktplaatsIacVerkoopApp").directive("jumbo",function(){return{templateUrl:"components/jumbo/jumbo.html",restrict:"EA",transclude:!0,scope:{showOverlay:"="}}}),angular.module("marktplaatsIacVerkoopApp").directive("licensePlate",function(){return{templateUrl:"components/license-plate/license-plate.html",restrict:"EA",scope:{ngModel:"=",editable:"="},replace:!0,link:function(a,b,c){}}}),angular.module("marktplaatsIacVerkoopApp").directive("mpButton",function(){return{templateUrl:"components/mp-button/mp-button.html",restrict:"EA",transclude:!0,replace:!0,link:function(a,b,c){}}}),angular.module("marktplaatsIacVerkoopApp").directive("news",function(){return{templateUrl:"components/news/news.html",restrict:"EA",link:function(a,b,c){}}}),angular.module("marktplaatsIacVerkoopApp").directive("panel",function(){return{templateUrl:"components/panel/panel.html",restrict:"EA",transclude:!0,scope:{title:"@"},link:function(a,b,c){}}}),angular.module("marktplaatsIacVerkoopApp").directive("resultbox",function(){return{templateUrl:"components/resultbox/resultbox.html",restrict:"EA",scope:{result:"=",averagePrice:"=",fact:"="}}}),angular.module("marktplaatsIacVerkoopApp").directive("searchbox",function(){return{templateUrl:"components/searchbox/searchbox.html",restrict:"EA",controller:["$scope",function(a){}]}}),angular.module("marktplaatsIacVerkoopApp").service("selligent",["$q","$http",function(a,b){function c(a){a=a.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var b=new RegExp("[\\?&]"+a+"=([^&#]*)"),c=b.exec(location.search);return null===c?void 0:decodeURIComponent(c[1].replace(/\+/g," "))}function d(a,b){var c="http://marktplaats.emsecure.net/optiext/optiextension.dll?ID="+b;return c+="&P1="+a.licensePlate,c+="&P2="+a.mileage,c+="&P3="+a.averagePrice,c+="&P4="+a.brand,c+="&P5="+a.model,c+="&P6="+a.year,c+="&P7=",c+="&P8="+a.modelTimesSeen,c+="&P9="+a.brandTimesSeen,c+="&P0="+a.averageDays,c+="&PA="}return function(a){var b=c("EXTID");if("undefined"!=typeof b){a.mileage=a.mileage?a.mileage:"";var e=d(a,b);return e}}}]),angular.module("marktplaatsIacVerkoopApp").directive("sellingent",function(){return{template:'<img ng-src="{{pixelUrl}}" />',restrict:"EA",scrope:{result:"=",averagePrice:"=",fact:"="},controller:["$scope","selligent",function(a,b){a.pixelUrl=b(angular.extend(a.result,a.fact))}]}}),angular.module("marktplaatsIacVerkoopApp").directive("soldCarsItem",function(){return{templateUrl:"components/sold-cars-item/sold-cars-item.html",restrict:"EA",scope:{title:"@",youtubeId:"@"},link:function(a,b,c){}}}),angular.module("marktplaatsIacVerkoopApp").directive("soldCars",function(){return{templateUrl:"components/sold-cars/sold-cars.html",restrict:"EA",link:function(a,b,c){b.find(".icon-social-twitter").each(function(){var a=$(this).closest(".row"),b=a.find(".sold-cars__descr").text(),c=encodeURIComponent(b),d=a.find("sold-cars-item").attr("youtube-id"),e="https://twitter.com/share?url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D"+d+"&text="+c+"&hashtags=Marktplaats";$(this).attr("href",e)})}}}),angular.module("marktplaatsIacVerkoopApp").directive("tipsFirst",function(){return{templateUrl:"components/tips-first/tips-first.html",restrict:"EA",link:function(a,b,c){}}}),angular.module("marktplaatsIacVerkoopApp").directive("tipsItem",function(){return{templateUrl:"components/tips-item/tips-item.html",restrict:"EA",scope:{title:"@",youtubeId:"@"},link:function(a,b,c){}}}),angular.module("marktplaatsIacVerkoopApp").directive("tips",function(){return{templateUrl:"components/tips/tips.html",restrict:"EA",link:function(a,b,c){}}}),angular.module("marktplaatsIacVerkoopApp").run(["$templateCache",function(a){a.put("app/main/home/home.html","<searchbox></searchbox>"),a.put("app/main/main.html",'<header></header><jumbo show-overlay=carInformation.data><div class=container-main><div class=row><div ng-class="{ \'col-sm-12\': carInformation.data }" class=main-container><panel class=header-panel><ui-view></ui-view></panel><panel title="Het geheim van een goede auto-advertentie" class=panel-tips-first><tips-first></tips-first></panel><panel title="Verkooptips van onze experts" class="panel-tips panel-bg"><tips></tips></panel><panel class=panel-news><news></news></panel><panel title="Ontdek hoe andere gebruikers hun auto succesvol verkochten" class="panel-sold-cars panel-bg"><sold-cars></sold-cars></panel><panel title="Ontdek hoe andere gebruikers hun auto succesvol verkochten" class=panel-find-more><find-more></find-more></panel></div></div></div></jumbo><footer></footer>'),a.put("app/main/search/search.html",'<div class=main-header><div class=searchbox><div class="row searchbox-facts"><h1>Je auto verkopen? <span>Ontdek de waarde van je auto.</span></h1>><p>Bereken eenvoudig de waarde van je auto en plaats vervolgens je auto advertentie binnen 2 minuten. Ontdekt hoe vergelijkbare auto\'s gemiddeld verkocht worden op Marktplaats. Je auto verkopen? Het begint op Marktplaats.</p></div><form class=searchbox-form ng-submit=submitLicense(license)><div class=searchbox-form__row><div class=searchbox-form__license><div class=searchbox-form__label>Kenteken</div><license-plate ng-model=result.licensePlate editable=true></license-plate><div class=searchbox-form__error ng-show=hasErrors>Geen auto gevonden met het bovenstaande kenteken.</div></div><div class=searchbox-form__mileage><div class=searchbox-form__label>Kilometers (optioneel)</div><input class=mileage__input ng-model=result.mileage editable="true"></div><div class=searchbox-form__button><mp-button ng-click="submitLicense(license, mileage)">Bereken waarde</mp-button></div></div><div class=searchbox-form__link><div><a href=http://www.marktplaats.nl/c/auto-s/c91.html class=searchbox-form__msg target=_blank>Of plaats je auto direct op Marktplaats</a></div></div></form></div><sellingent result=result average-price=averagePrice fact=fact></sellingent><resultbox result=result average-price=averagePrice fact=fact></resultbox></div>'),a.put("components/find-more/find-more.html","<div class=find-more><div class=find-more__item><div class=find-more__descr>Ook je auto verkopen?</div><div class=searchbox-form__button><mp-button href=https://www.marktplaats.nl/syi/plaatsAdvertentie.html>Plaats nu je advertentie</mp-button></div></div></div>"),a.put("components/footer/footer.html",'<div class=footer><div class=container><div class=footer__policy>Marktplaats is niet aansprakelijk voor (gevolg)schade die voortkomt uit het gebruik van deze site, dan wel uit fouten of ontbrekende functionaliteiten op deze site. Copyright © 2015 eBay International AG. Alle rechten voorbehouden. <img src=http://statisch.marktplaats.com/html/gaervoor/images/ebay-logo.png alt="" class="pull-right"></div></div></div>'),a.put("components/header/header.html",'<div class=header><div class=header__inner><div class=container><img src=http://statisch.marktplaats.com/html/gaervoor/images/marktplaats-logo@2x.png alt="" width="174"></div></div></div>'),a.put("components/jumbo/jumbo.html","<div class=jumbo><div class=jumbo__overlay ng-show=showOverlay></div><ng-transclude></ng-transclude></div>"),a.put("components/license-plate/license-plate.html",'<div class=license-plate><input class=license-plate__input ng-model=ngModel ng-show="editable"><div class=license-plate__input ng-hide=editable>{{ngModel}}</div></div>'),a.put("components/mp-button/mp-button.html",'<a href="" class=mp-button analytics-on><ng-transclude></ng-transclude></a>'),a.put("components/news/news.html",'<div class=news><div class=news-logo></div><div class=news__items><div class=row><div class="col-sm-4 news__item"><div class=news__pic><img src=../assets/images/car-toyota.jpg alt=Toyota height=255 width=385></div><div class=news__title>Aankooptips occasions: Toyota Auris Sports</div><div class=news__descr>Nov 25 2015 | Steffert Stienstra | De tweede generatie Renault Scénic kwam in 2003 op de markt. Technisch is het model gebaseerd op de Renault Mégane. De midi-MPV Scénic biedt genoeg plaats voor vijf personen tijdens een..</div></div><div class="col-sm-4 news__item"><div class=news__pic><img src=../assets/images/car-merc.jpg alt=Mercedes height=255 width=385></div><div class=news__title>Review: Mercedes-AMG C63 S Coupé [VIDEO]</div><div class=news__descr>Nov 25 2015 | Waar de vorige Mercedes-AMG C63 de beschikking had over het brute atmosferische 6,2-literblok, krijgt de nieuwe generatie een 4,0-literblok met twee turbo´s. Maar is dat net zo lekker? Motorblok De vori ....</div></div><div class="col-sm-4 news__item"><div class=news__pic><img src=../assets/images/car-hyundai.jpg alt=Hundai height=255 width=385></div><div class=news__title>Aankooptips occasions: Hyundai i10 (2007-2014) [VIDEO]</div><div class=news__descr>Nov 23 2015 | De Hyundai i10 werd in 2007 geïntroduceerd als vervanger van de Hyundai Atos. In 2014 is de tweede generatie i10 op de markt gekomen en dat maakt de eerste generatie misschien een interessante occasi ...</div></div></div></div></div>'),a.put("components/panel/panel.html","<div class=mp-panel><div class=mp-panel__heading ng-bind-html=title></div><div class=mp-panel__body><ng-transclude></ng-transclude></div></div>"),a.put("components/resultbox/resultbox.html",'<section class=resultbox><div class="resultbox-details container"><div class=row><div class=col-sm-12><div class=resultbox-details__data><div>Merk: {{result.brand}}</div><div>Model: {{result.model}}</div><div>Bouwjaar: {{result.year}}</div></div></div></div><div class=row><div class=col-xs-12><div class=row><div class=col-sm-7><div class="facts__fact facts__fact--price">De gemiddelde vraagprijs is <strong class=no-wrap><span ng-show="result.averagePrice === 0">onbekend</span> <span ng-show="result.averagePrice > 0">&euro; {{(result.averagePrice/100) | number:0 | replaceComma}},00*</span></strong></div><div class="facts__fact facts__fact--model">Dit model wordt <strong>{{fact.modelTimesSeen | number:0 | replaceComma}} x per dag</strong> bekeken</div><div class="facts__fact facts__fact--average">Deze auto wordt gemiddeld in <strong>{{fact.averageDays}} dagen</strong> verkocht</div><div class="facts__fact facts__fact--brand">Dit merk wordt <strong>{{fact.brandTimesSeen | number:0 | replaceComma}} x per dag</strong> bekeken</div></div><div class=col-sm-4><div class=resultbox-statistics__action><div class=resultbox-statistics__callout></div><div class=resultbox-statistics__button><mp-button ng-href={{result.sellUrl}}>Plaats advertentie</mp-button></div></div></div></div></div></div></div></section><div class="row small-add" ng-show="result.averagePrice > 0 container"><div class=col-sm-12><p><small>* Dit is slechts een gemiddelde vraagprijs, u bepaalt natuurlijk zelf wat de beste prijs is voor uw auto. Aan de gemiddelde vraagprijs kunnen geen rechten worden ontleend.</small></p></div></div>'),a.put("components/searchbox/searchbox.html",'<div class="main-header home"><div class=searchbox><div class="row searchbox-facts"><h1>Je auto verkopen? <span>Ontdek de waarde van je auto.</span></h1><p>Bereken eenvoudig de waarde van je auto en plaats vervolgens je auto advertentie binnen 2 minuten. Ontdekt hoe vergelijkbare auto\'s gemiddeld verkocht worden op Marktplaats. Je auto verkopen? Het begint op Marktplaats.</p></div><form class=searchbox-form ng-submit=submitLicense(license)><div class=searchbox-form__row><div class=searchbox-form__license><div class=searchbox-form__label>Kenteken</div><license-plate ng-model=license editable=true></license-plate><div class=searchbox-form__error ng-show=hasErrors>Geen auto gevonden met het bovenstaande kenteken.</div></div><div class=searchbox-form__mileage><div class=searchbox-form__label>Kilometers (optioneel)</div><input class=mileage__input ng-model=mileage editable="true"></div><div class=searchbox-form__button><mp-button ng-click="submitLicense(license, mileage)">Bereken waarde</mp-button></div></div><div class=searchbox-form__link><div><a href=http://www.marktplaats.nl/c/auto-s/c91.html class=searchbox-form__msg target=_blank>Of plaats je auto direct op Marktplaats</a></div></div></form><div class="searchbox-facts container"><div class=col-xs-4><div class=searchbox-fact equalizer=fact><div class=searchbox-fact__text><span class=searchbox-fact__icon></span> 1 miljoen unieke bezoekers per maand</div></div></div><div class=col-xs-4><div class=searchbox-fact equalizer=fact><div class=searchbox-fact__text><span class=searchbox-fact__icon></span> 50% krijgt een goed bod binnen 3 dagen</div></div></div><div class=col-xs-4><div class=searchbox-fact equalizer=fact><div class=searchbox-fact__text><span class=searchbox-fact__icon></span> 30% verkoopt de auto zelfs binnen 1 dag!</div></div></div></div></div></div>'),a.put("components/sold-cars-item/sold-cars-item.html","<div class=sold-cars-item><div class=sold-cars-item__video><youtube-video video-id=youtubeId player-width=\"'100%'\" player-height=\"'100%'\"></youtube-video></div></div>"),a.put("components/sold-cars/sold-cars.html",'<div class=sold-cars><div class=sold-cars__items><div class=row><div class=col-sm-12><div class="sold-cars__wrapper1 col-sm-6"><sold-cars-item youtube-id=3mGmMYS2o78></sold-cars-item></div><div class="sold-cars__wrapper2 col-sm-6"><div class=sold-cars__title>Tips van de verkopers</div><div class=sold-cars__descr>Hoe lezen mensen advertenties op Marktplaats? Hoe bouwt u een goede advertentie op en hoe komt u tot de juiste prijs? Is het verstandig om alleen positieve punten te vernoemen? Hoe presenteert u zichzelf als een echte autoverkoper?</div><div class=sold-cars__names><div class="name col-sm-4">Joris Groen</div><div class="surname col-sm-8">Martijn van der Rest</div></div><div class=sold-cars__names><div class="name col-sm-4">Buyerminds</div><div class="surname col-sm-8">Sales manager bij Vallei Auto Groep</div></div><div class=sold-cars__pic></div><div class=sold-cars__share_wrapper><div class="social-media-wrapper name col-sm-12"><div class=social-media><span class=sold-cars__share>Deel de verkooptips met uw vrienden:</span><!-- facebook --> <a href=# target=_blank class="icon-social icon-social-facebook" data-id=social_vrk-auto-fb>F</a><!-- twitter --> <a href=# class="icon-social icon-social-twitter" data-id=social_vrk-auto-fb>T</a><!-- google plus --> <a href="https://plus.google.com/share?url={http://www.geheimvandedealer.nl}" class="icon-social icon-social-google" data-id=social_vrk-auto-fb onclick="window.open(this.href,\'\', \'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600\');return false">G</a></div></div></div></div></div></div><div class=row><div class=col-sm-12><div class="sold-cars__wrapper1 col-sm-6"><div class=sold-cars__title>Tips van de verkopers</div><div class=sold-cars__descr>Hoe lezen mensen advertenties op Marktplaats? Hoe bouwt u een goede advertentie op en hoe komt u tot de juiste prijs? Is het verstandig om alleen positieve punten te vernoemen? Hoe presenteert u zichzelf als een echte autoverkoper?</div><div class=sold-cars__names><div class="name col-sm-4">Joris Groen</div><div class="surname col-sm-8">Martijn van der Rest</div></div><div class=sold-cars__names><div class="name col-sm-4">Buyerminds</div><div class="surname col-sm-8">Sales manager bij Vallei Auto Groep</div></div><div class=sold-cars__pic></div><div class=sold-cars__share_wrapper><div class="social-media-wrapper name col-sm-12"><div class=social-media><span class=sold-cars__share>Deel de verkooptips met uw vrienden:</span><!-- facebook --> <a class="icon-social icon-social-facebook" data-type=facebook data-url="" data-title="" data-description="">F</a><!-- twitter --> <a class="icon-social icon-social-twitter" data-type=twitter data-url="" data-via="" data-description="">T</a><!-- google plus --> <a href="https://plus.google.com/share?url={http://www.geheimvandedealer.nl}" class="icon-social icon-social-google" data-id=social_vrk-auto-fb onclick="window.open(this.href,\'\', \'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600\');return false">G</a></div></div></div></div><div class="sold-cars__wrapper2 col-sm-6"><sold-cars-item youtube-id=3mGmMYS2o78></sold-cars-item></div></div></div><div class=row><div class=col-sm-12><div class="sold-cars__wrapper1 col-sm-6"><sold-cars-item youtube-id=3mGmMYS2o78></sold-cars-item></div><div class="sold-cars__wrapper2 col-sm-6"><div class=sold-cars__title>Tips van de verkopers</div><div class=sold-cars__descr>Hoe lezen mensen advertenties op Marktplaats? Hoe bouwt u een goede advertentie op en hoe komt u tot de juiste prijs? Is het verstandig om alleen positieve punten te vernoemen? Hoe presenteert u zichzelf als een echte autoverkoper?</div><div class=sold-cars__names><div class="name col-sm-4">Joris Groen</div><div class="surname col-sm-8">Martijn van der Rest</div></div><div class=sold-cars__names><div class="name col-sm-4">Buyerminds</div><div class="surname col-sm-8">Sales manager bij Vallei Auto Groep</div></div><div class=sold-cars__pic></div><div class=sold-cars__share_wrapper><div class="social-media-wrapper name col-sm-12"><div class=social-media><span class=sold-cars__share>Deel de verkooptips met uw vrienden:</span><!-- facebook --> <a class="icon-social icon-social-facebook" data-type=facebook data-url="" data-title="" data-description="">F</a><!-- twitter --> <a class="icon-social icon-social-twitter" data-type=twitter data-url="" data-via="" data-description="">T</a><!-- google plus --> <a href="https://plus.google.com/share?url={http://www.geheimvandedealer.nl}" class="icon-social icon-social-google" data-id=social_vrk-auto-fb onclick="window.open(this.href,\'\', \'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600\');return false">G</a></div></div></div></div></div></div></div></div>'),a.put("components/tips-first/tips-first.html",'<div class="tips-first container"><div class=tips__items><div class=row><div class="col-sm-5 tips-first__wrapper"><tips-item title="Goede foto’s maken" youtube-id=95B99inuohs></tips-item><tips-item-descr>Een goede foto verkoopt de auto bijna vanzelf. Maar hoe maak je simpel en snel goede foto’s van je auto? Een gerenommeerde autofotograaf deelt zijn beste tips.</tips-item-descr></div><div class="col-sm-5 tips-first__wrapper"><tips-item title="Pakkende advertentieteksten" youtube-id=3mGmMYS2o78></tips-item><tips-item-descr>Hoe breng je je auto zo goed mogelijk onder de aandacht bij 1 miljoen autokopers? Ontdek wat belangrijk is aan een goede advertentietekst.</tips-item-descr></div></div></div></div>'),a.put("components/tips-item/tips-item.html","<div class=tips-item><div class=tips-item__video><youtube-video video-id=youtubeId player-width=\"'100%'\" player-height=\"'100%'\"></youtube-video></div><div class=tips-item__title>{{title}}</div></div>"),a.put("components/tips/tips.html",'<div class="tips container"><div class=tips__text>Een team van experts nam gedurende een aantal weken autoadvertenties onder handen. Een gratis service om mensen die hun auto écht snel kwijt moeten, een handje te helpen. Ontdek hoe we van gewone mensen topverkopers maakten en leer zelf de geheimen van de dealer.</div><div class=tips__items><div class=row><div class="col-sm-5 tips__wrapper"><tips-item youtube-id=3mGmMYS2o78></tips-item><div class=tips-item-descr>Hoe bouwt u een goede advertentie op en hoe komt u tot de juiste prijs?</div></div><div class="col-sm-5 tips__wrapper"><tips-item youtube-id=95B99inuohs></tips-item><div class=tips-item-descr>Hoe komt u simpel en snel tot een goede foto van uw auto?</div></div></div><div class=row><div class="col-sm-5 tips__wrapper"><tips-item youtube-id=uOnjioduu-M></tips-item><div class=tips-item-descr>Wat is belangrijk aan een goede advertentietekst?</div></div><div class="col-sm-5 tips__wrapper"><tips-item youtube-id=otsmPoDZbXY></tips-item><div class=tips-item-descr>Hoe valt u op tussen andere autoadvertenties op Marktplaats?</div></div></div></div></div>')}]);