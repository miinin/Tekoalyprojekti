# AIvan - Pelin Toimintalogiikka ja Arkkitehtuurikuvaus

Tämä asiakirja kuvaa "AIvan" -oppimispelin teknisen ja pelillisen toimintalogiikan. Peli on kehitetty Reactilla (Vite) ja se toimii opetus- ja tietokilpailualustana peruskoululaisille ja lukiolaisille tekoälyn oppimiseen. Pääpaino on näyttävässä ja responsiivisessa visuaalisuudessa, epälineaarisessa etenemisessä sekä yhteistyöpelaamisen (Co-op) tukemisessa.

---

## 1. Yleiskatsaus ja Tavoite
**Kohde:** Opettaa pelaajille tekoälyn toimintaa hauskalla, visuaalisella ja sitouttavalla tavalla peliympäristössä (Road trip / Autotalli -teema).
**Lajityyppi:** Koulutuksellinen tietokilpailu, valinnanvapaus (non-linear progression), keräilymekaniikka (kerroskakku/tuunaus).
**Valuutta:** "Kipinät" (Sparks). Kipinöitä tienataan ratkaisemalla kysymyksiä, ja niillä voidaan ostaa päivityksiä Autoon (AIvan) tai Autotalliin.

---

## 2. Käyttöliittymät ja Noodit (Reititys)
Pelin navigaatio pohjautuu \`HashRouteriin\` (\`react-router-dom\`), mikä tekee siitä tukevan staattisissa julkaisuympäristöissä, kuten GitHub Pagesissa tai Firebase Hostingissa ilman serveripuolen konfigurointia.

### 2.1. Aula (Lobby.jsx) - \`/\`
- **Yksinpeli:** Pelaaja voi aloittaa täysin alusta tai jatkaa lokaalia viimeksi tallennettua peliä.
- **Moninpeli (Co-op):** Pelaajat voivat luoda "pelihuoneen". 
  - Huone generoidaan kahdesta suomenkielisestä sanasta koostuvalla liittymiskoodilla (esim. "Metsä Joki").
  - Toinen pelaaja voi syöttää tämän koodin omaan laitteeseensa ja astua sisään yhteiseen pelitilaan. 
  - Yhdessä pelatessa kaikki pelaajat kerryttävät yhteistä pelikassaa (Kipinät), ja ostetut auton palaset näkyvät kaikilla huoneessa (integraatio valmis Firebase Realtime Database -laajennukselle, nyt toimii yhteisellä selaimesineelllä).
- **Asetukset:** Skaalautuvat asetuspaneelit (Mockup).

### 2.2. Maailmankartta (Roadmap.jsx) - \`/roadmap\`
- Pelaajia ei pakoteta pelaamaan opetusmoduuleja lineaarisesti järjestyksessä.
- **Visuaalinen karttamoottori:** Koko näkymän taustalla on suuri käsin piirretty karttakuva (\`map-bg.jpg\`).
- Kategorien reittipisteet ("Pinssit") sijaitsevat absoluuttisilla \`x, y\` -koordinaateilla kartan päällä.
- **Teema-alueet:**
  1. *Tekoälyn perusteet* (Metsä)
  2. *Konepellin alla* (Viidakko)
  3. *Tekoäly arjessamme* (Satama)
  4. *Etiikka ja turvallisuus* (Lumivuori)
  5. *Tekoälyn käyttötaidot* (Linna)
- Napin painallus vie suoraan kyseisen moduulin kysymyksiin.

### 2.3. Tietovisa ja Palaute (Quiz.jsx) - \`/quiz/:categoryId\`
- Modulaarinen opetusmoottori, joka hakee annetun ID:n (1-5) perusteella JSON-pohjaiset kysymykset moduulista \`src/data/questions.js\`.
- **Kysymystyypit:** Mukautuvat kysymystyypit (Jailbreak, Hallusinaatio, Tekoäly/Ihminen jne.) värikoodatuilla visuaalisilla ikoneillaEduks.fin ilmeen hengessä.
- Vastausten valinta käynnistää reaaliaikaisen palautteen (\`explanation\`) – virheistä ohjataan rakentavasti, oikeista vastauksista palkitaan Kipinä-määrällä, joka siirretään \`store.js\`:n kautta saldoon.

### 2.4. Autotallin Tuunaus (Garage.jsx) - \`/garage\`
Pelin todellinen kannustin. Garage jakautuu vahvaan, joustavaan 3-palstaiseen (Grid) arkkitehtuuriin.
- **Vasemmalle sivustalle:** Autotalliin (ympäristöön) hankittavat lisälaitteet (Kvanttisorvi, Botti).
- **Keskelle:** Massiivinen kerroskakkumallinen (Paper Doll) näkymä autosta ja miljööstä (70 % näyttötilasta resoluutiosta riippuen).
- **Oikealle sivustalle:** Auton päivitysosat (Turbo, Vanteet, Tutka).

**Visuaalinen "Paperinukke" -kerrosmekaniikka:**
Auto näyttäytyy staattisena kuvana (ei perinteinen 3D). Kun pelaaja ostaa osan, se lyödään pinoon:
1. \`z-index: 0\` -> Autotallin taustaympäristö (\`autotalli1-base.png\`)
2. \`z-index: 1\` -> Perusvarusteltu AIvan (\`van1-base.png\`)
3. \`z-index: 2-X\` -> Läpinäkyvien PNG-kerrosten pino. Esim. kun pelaaja ostaa Kvanttitutkan (ID \`u2\`), ohjelma lataa dynaamisesti kuvan \`layer-u2.png\` tarkasti samojen koordinaattien päälle kankaalle. Kuvan täytetty pikseli napsahtaa autossa oikealle kohdalle.
Kaikkien näiden osien asemointi pysyy 100% varmasti ehjänä responsiivisesta ruutukoosta riippumatta, sillä CSS-moottori hyödyntää kaikissa esineissä absoluuttista paikoitusta ja \`object-fit: contain\` -liittoa.

---

## 3. Tiedon ja Tilanhallinta (store.js)
Koska tulevaisuudessa siirrymme ehkä pelkästä moninpeli-identaatiosta oikeaan tietokantaan, pelitila on abstraktoitu erilliseen kerrokseen \`src/services/store.js\`.
- \`getRoomCode()\`: Kertoo ollaanko lokaalissa yksinpelissä vai tietyssä kimppahuoneessa. Ominaisuus lukitsee pelitilan avaimen nimiavaruuteen (namespace), esim. avain \`aivan_items_metsä-joki\`.
- \`getSparks() & spendSparks()\`: Hallinnoi asynkronisesti ("leikisti") budjetin tarkistamista ennen myyntiä.
- \`getPurchasedItems() & purchaseItem()\`: Pitää yllä taulukkoa (Array) pelaajan/ryhmän ostamista objekteista. \`Garage.jsx\` päivittää kerroksensa ("Kerrokset päälle", painikkeet lukkoon "ASENNETTU") reaaliajassa selaamalla tätä taulukkoa.

---

## 4. Jatkokehitys ja Tulevaisuus
- **Tasonnousut:** Mahdollisuus laajentaa Autotalliin tasomekaniikka, missä riittävän hankinnan jälkeen koko auton peruskuva (\`van1-base.png\`) muuttuu isoksi modernimmaksi koneeksi (esim. \`van2-base.png\`), jolloin kaikki omat \`layer-X.png\` lisäosat ladataankin uutta koria vasten tehdyistä kansioista.
- **Aito reaaliaikaisuus:** \`store.js\`:n laajentaminen Firebase Realtime Databasella on pelkkä \`get/set\` -metodien reititys tietokantaputken läpi, jolloin eri päätteissä olevat IP-osoitteet näkevät karttuvien pisteiden (Kipinöiden) kasvun ja ostetut auton osat sekunnin viiveellä.
- **Tehtäväkartta:** Kysymyshahmot/kohtaamiset ("Bossit") voidaaan avata erillisinä eventteinä tietyillä kartan koordinaateilla osana tarinan kaarta.
