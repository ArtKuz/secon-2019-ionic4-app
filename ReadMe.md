SECON 2019
==========

Демонстрационное мобильное приложение для доклада на [SECON 2019](https://2019.secon.ru/).


```
npm i -g cordova ionic
npm i
```

##Запуск
```
ionic serve
```

##Dev режим
```
ionic serve # сборка и запуск проекта в браузере
ionic serve -b # сборка и запуск проекта без открытия браузера
```

***

##Развёртка под Android
[Скачать Android Studio](https://developer.android.com/studio/)  

Зайти в настройки -> *Appearance & Behavior -> System Settings -> Android SDK*  

**SDK Platforms** - выкачивать все Android SDK (все галки).  
**SDK Tools** - галка возле *Android SDK Tools*  

##Проект
```
ionic cordova platform add android
ionic cordova platform add ios
ionic cordova prepare
```

***
##Prod build
```
ionic cordova build android --prod --release
```
