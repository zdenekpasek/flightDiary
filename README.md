# Letecký deník / Flight Diary

## Klientská část

## Popis

- Aplikace pro evidenci leteckých záznamů bezpilotních prostředků
- React Native

## Instalace a instrukce pro lokální spustění pro Windows

1. Stáhnout a nainstalovat LTS verzi Node.js https://nodejs.org/en/download/
2. Naklonovat nebo stáhnout zip soubor projektu
3. Projekt ideálně extrahovat/naklonovat do adresáře uživatele C:\Users\YourUserName director (Expo a React Native můžou mít problém s cestami na ploše, stažených soubourech atd.)
4. V terminálu/příkazové rádce přejít do tohoto projektu, musíte se nacházet v souboru, který obsahuje package.json
5. Pokud jste ve správné složce - npm install
6. Následně nainstalujte expo-cli nástroje - npm install expo-cli --global
7. Po nainstalování všech dependencí - npm start
8. Pokud se vyskytne problém - 'expo-cli' is not recognized as an internal or external command..., je třeba přidat NPM do systémových proměnných
9. Přidat %USERPROFILE%\AppData\Roaming\npm

![enviroment](https://user-images.githubusercontent.com/45901583/101211475-88428100-3677-11eb-9327-b3f606ce339e.PNG)

10. Otevřít znovu terminál/příkazový řádek, přejít do složky projektu a zkusit znovu npm start
11. Mělo by se otevřít okno v prohlížeci a QR kód v terminálu

![npmstart](https://user-images.githubusercontent.com/45901583/101211781-01da6f00-3678-11eb-8a01-95c92852c32c.PNG)

12. Nejjednoduší je testování na fyzickém zařízení, kdy je třeba si stahnout aplikaci Expo
    (android: https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en&gl=US)
    (iOS: https://apps.apple.com/us/app/expo-client/id982107779)

13. Mít puštený server
14. Naskenovat přes fotoaparát zařízení QR kód - otevře se aplikace Expo a stáhne se Javascript bundle
15. Další možností je testování na emulátoru - vyžaduje platformově závislý software (xCode, Android Studio), nainstalované a spuštené virtuální zařízení. Následně přes metro bundler - Run on Android device/emulator

![metroBundler](https://user-images.githubusercontent.com/45901583/101212891-c5a80e00-3679-11eb-8bcd-e61bc481fc08.PNG)

16. Poslední částí je instalace ngrok - npm i ngrok
17. V složce projektu - ngrok http 3000
18. Forwarding adresu zkopírovat do src/services/api/fdApi.js (Pozor, adresa vyprší po 8 hodinách)

![ngrok](https://user-images.githubusercontent.com/45901583/101216244-75cc4580-367f-11eb-9b12-327a05f8d2cb.PNG)

![fdapi](https://user-images.githubusercontent.com/45901583/101216343-a1e7c680-367f-11eb-9691-80cfc2a9542a.PNG)

19. Pro kompletní lokální fungování je tedy potřeba mít puštený server, v dalším terminálu ve složce projektu ngrok na portu 3000 a mít zkopírovanou aktuální forwarding adresu v projektu, a jako poslední npm start ve složce projektu

20. Nutné je také mít k dispozici API klíč openWeatherApi, který musí být ve složce v rootu pod souborem .env ve formátu API_KEY_W = klíč
    Klíč si můžete vygenerovat vlastní nebo po vyžádání poskytnu svůj
    z bezpečnostních důvodu není verzován

## Instalace a instrukce pro lokální spustění pro macOS

1. Stáhnout a nainstalovat LTS verzi Node.js https://nodejs.org/en/download/
2. Naklonovat nebo stáhnout zip soubor projektu
3. Projekt ideálně přesunout do adresáře uživatele - mv flightDiary ~/ (Expo a React Native můžou mít problém s cestami na ploše, stažených soubourech atd.)
4. V terminálu přejít do tohoto projektu, musíte se nacházet v souboru, který obsahuje package.json - cd ~/flightDiary
5. Pokud jste ve správné složce - npm install
6. Můžete být vyzvání pro nainstalování expo CLI globálně

<img width="339" alt="expocli" src="https://user-images.githubusercontent.com/45901583/101214117-c3df4a00-367b-11eb-9ad1-07ad8d23c97a.png">

7. Po provedení tohoto příkazu mohou přijít problémy s právy

<img width="699" alt="prava" src="https://user-images.githubusercontent.com/45901583/101214256-ff7a1400-367b-11eb-85ff-654e3785569b.png">

8. Jedno z řešení je zkusit instalaci přes sudo, které ovšem může vést k dalším problémům s právy

- sudo npm install --unsafe-perm -g expo-cli

9. Další řešení je podle návodu NPM

- vytvořte novou globalni instalacni cestu - mkdir ~/.npm-global

10. Následně tento příkaz - npm config set prefix '~/.npm-global'
11. Dále příkaz - ps -o comm= \$\$ ten určí jaký shell používáte
12. Pokud využíváte zsh - nano ~/.zshrc a pokud bash - nano ~/.bash_profile
13. Do tohoto souboru přidejte - export PATH=~/.npm-global/bin:\$PATH

<img width="718" alt="nano" src="https://user-images.githubusercontent.com/45901583/101214843-fd648500-367c-11eb-92a3-6c05def18e7e.png">

14. Zavřete a znovu otevřete terminál a přejdete do složky s projektem
15. Nainstalujte globálne expo-cli tools do nové cesty - npm install expo-cli --global
16. npm start
17. Mělo by se otevřít okno v prohlížeci a QR kód v terminálu

![npmstart](https://user-images.githubusercontent.com/45901583/101211781-01da6f00-3678-11eb-8a01-95c92852c32c.PNG)

18. Nejjednoduší je testování na fyzickém zařízení, kdy je třeba si stahnout aplikaci Expo
    (android: https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en&gl=US)
    (iOS: https://apps.apple.com/us/app/expo-client/id982107779)

19. Mít puštený server
20. Naskenovat přes fotoaparát zařízení QR kód - otevře se aplikace Expo a stáhne se Javascript bundle
21. Další možností je testování na emulátoru - vyžaduje platformově závislý software (xCode, Android Studio), nainstalované a spuštené virtuální zařízení. Následně přes metro bundler - Run on Android device/emulator

![metroBundler](https://user-images.githubusercontent.com/45901583/101212891-c5a80e00-3679-11eb-8bcd-e61bc481fc08.PNG)

22. Poslední částí je instalace ngrok - npm i ngrok
23. V složce projektu - ngrok http 3000
24. Forwarding adresu zkopírovat do src/services/api/fdApi.js

![ngrok](https://user-images.githubusercontent.com/45901583/101216244-75cc4580-367f-11eb-9b12-327a05f8d2cb.PNG)

![fdapi](https://user-images.githubusercontent.com/45901583/101216343-a1e7c680-367f-11eb-9691-80cfc2a9542a.PNG)

25. Pro kompletní lokální fungování je tedy potřeba mít puštený server, v dalším terminálu ve složce projektu ngrok na portu 3000 a mít zkopírovanou aktuální forwarding adresu v projektu, a jako poslední npm start ve složce projektu

26. Nutné je také mít k dispozici API klíč openWeatherApi, který musí být ve složce v rootu pod souborem .env ve formátu API_KEY_W = klíč
    Klíč si můžete vygenerovat vlastní nebo po vyžádání poskytnu svůj
    z bezpečnostních důvodu není verzován
