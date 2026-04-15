export const categories = [
  {
    "id": "perusteet",
    "name": "Tekoälyn perusteet",
    "subcategories": [
      {
        "id": "perusteet_1",
        "name": "Mikä ihmeen tekoäly?",
        "questions": [
          {
            "id": "perusteet_1_q1",
            "type": "true_false",
            "question": "AI vanin kojelaudassa asuu pieni oikea keksijä, joka vastaa kaikkiin kysymyksiin.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Tekoäly ei ole oikea elävä ihminen tai olento, vaan ihmisen koodaama erikoisohjelma. Se asuu laitteissa koodin muodossa!"
          },
          {
            "id": "perusteet_1_q2",
            "type": "multiple_choice",
            "question": "Mikä tekoäly oikeastaan on?",
            "options": [
              "Taikuutta autotallissa",
              "Elävä robottieläin",
              "Koodattu ohjelma",
              "Avaruudesta tullut kone"
            ],
            "correctAnswer": "Koodattu ohjelma",
            "explanation": "Tekoäly ei ole taikuutta, vaan se on ihmisten suunnittelema ja koodaama erikoisohjelma, joka suorittaa sille annettuja tehtäviä."
          },
          {
            "id": "perusteet_1_q3",
            "type": "scenario",
            "question": "SKENAARIO: Olet automatkalla ja kysyt puhelimesi ääniavustajalta reittiä huvipuistoon. Kaverisi takapenkillä huutaa: \"Vau, puhelimen sisällä on taikuri!\" Mitä vastaat hänelle?",
            "options": [
              "Niin on, se osaa taikoa reitin!",
              "Ei, se on koodattu ohjelma.",
              "Se on taikuutta ja tiedettä.",
              "Puhelimessa asuu pieni robotti."
            ],
            "correctAnswer": "Ei, se on koodattu ohjelma.",
            "explanation": "Ääniavustaja käyttää tekoälyä, joka on ihmisten tekemä ohjelma, ei taikuutta tai taikuri."
          },
          {
            "id": "perusteet_1_q4",
            "type": "drag_drop",
            "question": "Järjestä, miten AI vanin tekoäly oikeasti syntyy ja toimii, ensimmäisestä askeleesta viimeiseen.",
            "correctAnswer": {
              "Ihmiset keksivät hyvän idean": "1. vaihe",
              "Koodarit kirjoittavat ohjelman": "2. vaihe",
              "Tekoäly ladataan auton tietokoneeseen": "3. vaihe",
              "Auto osaa etsiä reitit koodin avulla": "4. vaihe"
            },
            "explanation": "Koska tekoäly ei synny taikaiskusta, ihmisen täytyy ensin keksiä idea ja koodata se valmiiksi ohjelmaksi.",
            "draggables": [
              "Ihmiset keksivät hyvän idean",
              "Koodarit kirjoittavat ohjelman",
              "Tekoäly ladataan auton tietokoneeseen",
              "Auto osaa etsiä reitit koodin avulla"
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "perusteet_1_q5",
            "type": "spot_the_ai",
            "question": "Mikä näistä autotallin tai auton asioista käyttää todennäköisimmin tekoälyä?",
            "options": [
              "Mekaaninen jakoavain",
              "Perinteinen polkupyörä",
              "Reittejä ehdottava navigaattori",
              "Puhjennut autonrengas"
            ],
            "correctAnswer": "Reittejä ehdottava navigaattori",
            "explanation": "Navigaattori käyttää tietokoneohjelmaa eli tekoälyä laskeakseen nopeimman reitin. Muut ovat perinteisiä tavaroita ilman koodia."
          },
          {
            "id": "perusteet_1_q6",
            "type": "reverse_prompt",
            "question": "Auton tekoälyradio soittaa tällaisen laulun: \"Auto kulkee, kumit laulaa, tekoäly karttaa kantaa!\" Millä kehotteella (promptilla) tämä saatiin aikaan?",
            "options": [
              "Kirjoita pitkä uutinen nopeasta autosta.",
              "Tee todella surullinen runo sateesta.",
              "Keksi lyhyt ja iloinen riimi automatkasta.",
              "Kerro yksityiskohtaisesti kuinka moottori korjataan."
            ],
            "correctAnswer": "Keksi lyhyt ja iloinen riimi automatkasta.",
            "explanation": "Tekoäly ei toimi omasta tahdostaan, vaan se suorittaa täsmälleen ihmisen sille antaman ohjeen eli promptin mukaisen tehtävän."
          },
          {
            "id": "perusteet_1_q7",
            "type": "multiple_choice",
            "question": "Kun tekoäly antaa sinulle vastauksen tai ajaa AI vania, kuka sen alun perin on opettanut ja koodannut tekemään niin?",
            "options": [
              "Toinen tekoäly",
              "Tietokone ihan itse",
              "Ihminen",
              "Taikuri"
            ],
            "correctAnswer": "Ihminen",
            "explanation": "Tekoäly on aina ihmisen koodaama erikoisohjelma. Se ei osaa tehdä yhtään mitään ilman, että ihminen on sen ensin rakentanut."
          },
          {
            "id": "perusteet_1_q8",
            "type": "true_false",
            "question": "Tekoälyn toiminta on puhdasta taikuutta, jota edes sen keksijät ja koodarit eivät ymmärrä.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Tekoäly ei ole taikuutta. Se perustuu koodiin, jonka fiksut asiantuntijat ovat huolellisesti kirjoittaneet tietokoneelle."
          },
          {
            "id": "perusteet_1_q9",
            "type": "drag_drop",
            "question": "Yhdistä asiat oikeisiin laatikoihin sen perusteella, mitä ne oikeasti ovat.",
            "draggables": [
              "Tekoäly",
              "Ihminen",
              "Taikasauva"
            ],
            "dropZones": [
              "Koodattu ohjelma",
              "Elävä olento",
              "Taikuutta"
            ],
            "correctAnswer": {
              "Tekoäly": "Koodattu ohjelma",
              "Ihminen": "Elävä olento",
              "Taikasauva": "Taikuutta"
            },
            "explanation": "Muista tärkeä sääntö: tekoäly on vain koodattu ohjelma, ei koskaan taikuutta tai oikea elävä olento!"
          },
          {
            "id": "perusteet_1_q10",
            "type": "multiple_choice",
            "question": "Voiko AI vanin tekoäly olla sinulle oikea, elävä ystävä?",
            "options": [
              "Kyllä, se on täysin elossa",
              "Ei, se on vain ohjelma",
              "Kyllä, jos sille paljon juttelee",
              "Ei, koska se on vain hidas auto"
            ],
            "correctAnswer": "Ei, se on vain ohjelma",
            "explanation": "Vaikka tekoäly voi jutella kivasti ja auttaa tehtävissä, se on silti vain tietokoneohjelma, ei koskaan elävä olento."
          },
          {
            "id": "perusteet_1_q11",
            "type": "scenario",
            "question": "SKENAARIO: AI vanin näyttö menee yhtäkkiä pimeäksi ja radio lakkaa kuulumasta. Pikkuveljesi pelästyy ja luulee, että auton henki karkasi. Miten rauhoitat hänet?",
            "options": [
              "Kerron, että tekoäly taisi vain mennä unille.",
              "Sanon, että ohjelma taisi kaatua tai virta loppua.",
              "Alan etsiä karannutta henkeä heti autotallista.",
              "Soitan heti poliisille, koska henki on kadonnut."
            ],
            "correctAnswer": "Sanon, että ohjelma taisi kaatua tai virta loppua.",
            "explanation": "Koska tekoäly on vain tietokoneohjelma, sillä ei ole sielua tai henkeä. Se tarvitsee toimiakseen vain sähköä ja koodia."
          },
          {
            "id": "perusteet_1_q12",
            "type": "true_false",
            "question": "Ensimmäiset tekoälyt syntyivät aivan itsekseen autotallin perällä lojuneista vanhoista varaosista.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Ohjelmat eivät synny itsekseen. Tekoäly on aina ihmisen rakentama ja koodaama erikoisohjelma."
          },
          {
            "id": "perusteet_1_q13",
            "type": "drag_drop",
            "question": "Järjestä asiat elävästä olennosta keksittyyn taikuuteen. Aseta tekoäly oikealle paikalleen näiden väliin!",
            "correctAnswer": {
              "Oikea ihminen (Elävä olento)": "1. vaihe",
              "Tekoäly (Koodattu ohjelma)": "2. vaihe",
              "Lentävä matto (Taikuutta)": "3. vaihe"
            },
            "explanation": "Ihminen on elävä olento, tekoäly on tietokoneella toimiva ohjelma, ja lentävät matot ovat olemassa vain saduissa ja taikuudessa.",
            "draggables": [
              "Oikea ihminen (Elävä olento)",
              "Tekoäly (Koodattu ohjelma)",
              "Lentävä matto (Taikuutta)"
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe"
            ]
          },
          {
            "id": "perusteet_1_q14",
            "type": "spot_the_ai",
            "question": "Yksi näistä tavoista ohjata ja liikuttaa AI vania käyttää tekoälyä. Mikä se on?",
            "options": [
              "Kääntämällä mekaanista rattia omilla käsillä.",
              "Painaen kaasupoljinta oikealla jalalla.",
              "Auton tietokone väistää estettä kameroilla ja koodilla.",
              "Vetämällä käsijarrusta voimakkaasti alamäessä."
            ],
            "correctAnswer": "Auton tietokone väistää estettä kameroilla ja koodilla.",
            "explanation": "Kun tietokoneohjelma on koodattu tekemään itsenäisiä päätöksiä (kuten väistämään estettä), kyseessä on tekoäly. Muut ovat ihmisen tekemiä mekaanisia toimintoja."
          },
          {
            "id": "perusteet_1_q15",
            "type": "reverse_prompt",
            "question": "Tekoälyavustaja vastasi kuskille näin: \"Hei! Olen ihmisen tekemä tietokoneohjelma, jonka tarkoitus on auttaa sinua!\" Mikä seuraavista oli ihmisen antama ohje (prompt)?",
            "options": [
              "Kerro, mikä on paras lempiruokasi.",
              "Selitä lyhyesti, mikä ihme sinä oikein olet.",
              "Tee taikatemppu taikasauvalla.",
              "Kuka voitti jalkapallopelin eilen illalla?"
            ],
            "correctAnswer": "Selitä lyhyesti, mikä ihme sinä oikein olet.",
            "explanation": "Tekoäly vastaa kysymykseen rehellisesti: se ei ole taikuri tai ihminen, vaan koodattu ohjelma, jonka tarkoitus on auttaa meitä."
          }
        ]
      },
      {
        "id": "perusteet_2",
        "name": "Ihmisäly vs. tekoäly",
        "questions": [
          {
            "id": "perusteet_2_q1",
            "type": "true_false",
            "question": "AI vanin navigaattori on ollut päällä koko päivän. Sille pitää antaa välillä tauko, jotta se ei väsy ja tule vihaiseksi.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Tekoäly on tietokoneohjelma, jolla ei ole tunteita. Se ei väsy, kyllästy tai suutu, vaikka se tekisi töitä kellon ympäri!"
          },
          {
            "id": "perusteet_2_q2",
            "type": "multiple_choice",
            "question": "Puhutte autossa siitä, kuinka kivaa perillä huvipuistossa tulee olemaan. Miten tekoäly suhtautuu tähän automatkaan?",
            "options": [
              "Se odottaa innolla tulevia laitteita",
              "Se laskee ahkerasti nopeinta reittiä",
              "Se pelkää hurjia vuoristoratoja",
              "Se toivoo saavansa ison hattaran"
            ],
            "correctAnswer": "Se laskee ahkerasti nopeinta reittiä",
            "explanation": "Ihmisillä on tunteita ja mielikuvitusta, mutta tekoäly on nopea laskukone. Se ei tunne iloa tai pelkoa, vaan keskittyy suorittamaan tehtäväänsä."
          },
          {
            "id": "perusteet_2_q3",
            "type": "scenario",
            "question": "SKENAARIO: Olette ajaneet pitkään ja alat keksiä takapenkillä hauskoja vitsejä ohikiitävistä autoista. Pyydät auton tekoälyä mukaan leikkiin. Miten tekoälyn \"mielikuvitus\" eroaa sinun mielikuvituksestasi?",
            "options": [
              "Tekoäly osaa nauraa vitsille oikeasti",
              "Tekoäly keksii asioita omasta päästään",
              "Tekoälyllä on täydellinen huumorintaju",
              "Tekoäly vain yhdistelee oppimaansa tietoa"
            ],
            "correctAnswer": "Tekoäly vain yhdistelee oppimaansa tietoa",
            "explanation": "Ihmisellä on aito mielikuvitus. Tekoäly taas \"keksii\" vitsejä vain yhdistelemällä sanoja ja sääntöjä, joita ihmiset ovat sille aiemmin syöttäneet."
          },
          {
            "id": "perusteet_2_q4",
            "type": "drag_drop",
            "question": "Yhdistä ominaisuudet oikeisiin laatikoihin sen mukaan, kuuluvatko ne ihmiselle vai tekoälylle.",
            "draggables": [
              "Tuntee iloa matkasta",
              "Laskee sekunnissa satoja reittejä",
              "Tylsistyy takapenkillä",
              "Ei tarvitse koskaan yöunia"
            ],
            "dropZones": [
              "Ihminen",
              "Tekoäly"
            ],
            "correctAnswer": {
              "Tuntee iloa matkasta": "Ihminen",
              "Laskee sekunnissa satoja reittejä": "Tekoäly",
              "Tylsistyy takapenkillä": "Ihminen",
              "Ei tarvitse koskaan yöunia": "Tekoäly"
            },
            "explanation": "Ihmiset tuntevat ja väsyvät. Tekoäly on väsymätön laskukone, jolla ei ole lainkaan omia tunteita tai tarpeita."
          },
          {
            "id": "perusteet_2_q5",
            "type": "drag_drop",
            "question": "Järjestä ratkaisijat sen mukaan, kuka laskee valtavan matikkalaskun (esim. 5432 x 897) nopeimmin. Aloita nopeimmasta!",
            "correctAnswer": {
              "Tietokoneen tekoäly": "1. vaihe",
              "Aikuinen laskimen kanssa": "2. vaihe",
              "Lapsi ruutupaperin kanssa": "3. vaihe"
            },
            "explanation": "Tekoäly ja tietokoneet ovat valtavan nopeita laskemaan numeroita. Ihmisen aivot ovat loistavat luovuudessa, mutta suurissa laskuissa kone on salamannopea voittaja.",
            "draggables": [
              "Tietokoneen tekoäly",
              "Aikuinen laskimen kanssa",
              "Lapsi ruutupaperin kanssa"
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe"
            ]
          },
          {
            "id": "perusteet_2_q6",
            "type": "spot_the_ai",
            "question": "Kumpi näistä automatkan lauluntekijöistä on todennäköisimmin tekoäly? Etsi vaihtoehto, josta puuttuu aito tunne ja elämänkokemus.",
            "options": [
              "'Tämä laulu kertoo siitä, kun söimme jäätelöä ja minua nauratti!'",
              "'Laulu aiheesta jäätelö. Jäätelö on kylmä jälkiruoka, joka sulaa nopeasti.'",
              "'Muistatko kun lauloimme tätä biisiä ukkosen aikana? Oli vähän jännää!'",
              "'Olin tosi surullinen kun eväsleipäni putosi maahan kuralätäkköön.'"
            ],
            "correctAnswer": "'Laulu aiheesta jäätelö. Jäätelö on kylmä jälkiruoka, joka sulaa nopeasti.'",
            "explanation": "Tekoäly pystyy luettelemaan faktoja jäätelöstä nopeasti, mutta se ei voi muistella asioita, tuntea makua tai kokea iloa ja surua kuten ihminen."
          },
          {
            "id": "perusteet_2_q7",
            "type": "reverse_prompt",
            "question": "Auton ääniavustaja sanoo: \"Voi ei, onpa todella harmillista, että sataa vettä. Olen niin pahoillani puolestanne!\" Millä kehotteella (promptilla) tekoäly saatiin sanomaan näin?",
            "options": [
              "Kerro meille sääennuste seuraavalle tunnille.",
              "Laske kuinka paljon vettä sataa millimetreinä.",
              "Esitä, että olet surullinen sateisen sään vuoksi.",
              "Keksi iloinen laulu sateenvarjoista ja lätäköistä."
            ],
            "correctAnswer": "Esitä, että olet surullinen sateisen sään vuoksi.",
            "explanation": "Tekoäly ei oikeasti ole pahoillaan sateesta, koska se ei tunne sääliä. Se kuitenkin osaa hienosti matkia surullista puhetta, jos siltä pyydetään sitä promptilla!"
          },
          {
            "id": "perusteet_2_q8",
            "type": "true_false",
            "question": "Pysähdytte huoltoasemalle tauolle. Auton tekoäly on ahkeroinut reittien kanssa monta tuntia, joten sillekin kannattaa ostaa oma hampurilainen.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Toisin kuin ihminen, tekoäly ei tunne nälkää eikä se pysty syömään ruokaa. Se tarvitsee toimiakseen ainoastaan sähköä!"
          },
          {
            "id": "perusteet_2_q9",
            "type": "multiple_choice",
            "question": "Missä asiassa sinä olet paljon parempi ja taitavampi kuin maailman nopeinkaan tekoäly?",
            "options": [
              "Pitkien sanakirjojen ulkoa muistamisessa",
              "Vaikeiden kertolaskujen ratkaisemisessa",
              "Oikean ystävyyden ja empatian tuntemisessa",
              "Tietokonepelien koodirivien lukemisessa"
            ],
            "correctAnswer": "Oikean ystävyyden ja empatian tuntemisessa",
            "explanation": "Tekoäly on mestari käsittelemään tietoa ja numeroita, mutta vain sinä osaat tuntea aitoa ystävyyttä, empatiaa ja välittämistä toisista ihmisistä."
          },
          {
            "id": "perusteet_2_q10",
            "type": "scenario",
            "question": "SKENAARIO: Piirrät autotallissa upean ja täysin uudenlaisen keksinnön paperille pelkän oman mielikuvituksesi avulla. Sitten pyydät tekoälyä piirtämään jotain vastaavaa. Miksi tekoäly tarvitsee sinun ohjeitasi?",
            "options": [
              "Koska siltä puuttuu täysin oma, aito mielikuvitus.",
              "Koska se on liian hidas tekemään mitään uutta.",
              "Koska se piirtää vain ja ainoastaan mustavalkoisena.",
              "Koska se pelkää tekevänsä liian ruman piirustuksen."
            ],
            "correctAnswer": "Koska siltä puuttuu täysin oma, aito mielikuvitus.",
            "explanation": "Tekoäly osaa luoda hienoja kuvia, mutta se tekee sen aina ihmisen antamien ohjeiden ja ihmisiltä oppimansa tiedon pohjalta. Sillä ei ole omaa luovuutta."
          },
          {
            "id": "perusteet_2_q11",
            "type": "spot_the_ai",
            "question": "Huokaiset takapenkillä: \"Minulla on tosi tylsää, haluaisin olla jo perillä.\" Kuka vastaajista on selvästi tekoäly?",
            "options": [
              "'Ymmärrän hyvin, matka on ollut pitkä. Pelataanko jotain?'",
              "'Minuakin vähän väsyttää, mutta onneksi olemme pian perillä.'",
              "'Kohde saavutetaan 45 minuutin kuluttua. Keskinopeus on 80 km/h.'",
              "'Katsotaan yhdessä ulos ikkunasta, ehkä sieltä näkyy lehmiä!'"
            ],
            "correctAnswer": "'Kohde saavutetaan 45 minuutin kuluttua. Keskinopeus on 80 km/h.'",
            "explanation": "Tekoäly antaa tarkan ja nopean faktavastauksen täysin ilman tunnetta. Ihmiset sen sijaan ymmärtävät, miltä tylsyys tuntuu, ja yrittävät lohduttaa."
          },
          {
            "id": "perusteet_2_q12",
            "type": "multiple_choice",
            "question": "Mitä auton tekoälynavigaattori osaa tehdä paljon nopeammin kuin yksikään ihminen maailmassa?",
            "options": [
              "Löytää kaikkien mahdollisten reittien pituudet",
              "Nauttia kauniista ja aurinkoisista maalaismaisemista",
              "Keksiä täysin uuden ja opettavaisen sadun",
              "Maistaa kuinka hyvältä retkieväät maistuvat"
            ],
            "correctAnswer": "Löytää kaikkien mahdollisten reittien pituudet",
            "explanation": "Tekoäly on ohjelma, joka on tehty käsittelemään dataa salamannopeasti. Se ei kuitenkaan voi koskaan nauttia maisemista tai maistaa asioita."
          },
          {
            "id": "perusteet_2_q13",
            "type": "drag_drop",
            "question": "Kummalle antaisit seuraavat tehtävät automatkalla? Raahaa tehtävä joko itsellesi (ihmiselle) tai navigaattorin tekoälylle sen perusteella, kumpi on siinä parempi.",
            "draggables": [
              "Laske nopein reitti ruuhkassa",
              "Etsi sata faktaa dinosauruksista",
              "Päätä, mikä jäätelö maistuu parhaalta",
              "Lohduta pikkusiskoa, jota harmittaa"
            ],
            "dropZones": [
              "Tekoäly",
              "Ihminen"
            ],
            "correctAnswer": {
              "Laske nopein reitti ruuhkassa": "Tekoäly",
              "Etsi sata faktaa dinosauruksista": "Tekoäly",
              "Päätä, mikä jäätelö maistuu parhaalta": "Ihminen",
              "Lohduta pikkusiskoa, jota harmittaa": "Ihminen"
            },
            "explanation": "Tekoäly on uskomattoman nopea etsimään tietoa ja laskemaan asioita, mutta vain ihminen voi kokea makuja ja antaa aitoa lohtua toiselle!"
          },
          {
            "id": "perusteet_2_q14",
            "type": "reverse_prompt",
            "question": "Tekoälyradio sanoo yhtäkkiä iloisella äänellä: \"Jihuu! Olen niin ylpeä teistä, olette loistavia matkustajia!\" Millä promptilla tekoäly saatiin kehumaan autossa olijoita?",
            "options": [
              "Laske kaikkien matkustajien yhteinen ikä autossa.",
              "Käyttäydy kuin innostunut ystävä ja kehu meitä.",
              "Etsi tietoa siitä, miksi ihmiset pitävät kehuista.",
              "Kerro meille, mitä sana 'ylpeä' oikeasti tarkoittaa."
            ],
            "correctAnswer": "Käyttäydy kuin innostunut ystävä ja kehu meitä.",
            "explanation": "Tekoälyllä ei ole oikeita tunteita tai ylpeyttä, mutta kun siltä pyytää promptilla \"käyttäydy kuin innostunut ystävä\", se osaa matkia iloista ja kehuvaa puhetyyliä täydellisesti!"
          },
          {
            "id": "perusteet_2_q15",
            "type": "drag_drop",
            "question": "Tekoäly ei itse tunne iloa, mutta se osaa kirjoittaa iloisen tarinan. Järjestä asiat siihen järjestykseen, miten tekoäly oikeasti oppii asioita ilosta!",
            "correctAnswer": {
              "Ihmiset kirjoittavat tekstejä iloisista asioista internetiin": "1. vaihe",
              "Tekoäly lukee nämä valtavat tekstimäärät sekunneissa": "2. vaihe",
              "Tekoäly huomaa säännön, että 'ilo' liittyy hymyyn": "3. vaihe",
              "Tekoäly kirjoittaa pyynnöstä iloisen tarinan ymmärtämättä tunnetta itse": "4. vaihe"
            },
            "explanation": "Tekoäly oppii asioita lukemalla ihmisten tuottamaa materiaalia. Se oppii sanojen säännöt todella nopeasti, mutta ei silti koskaan koe itse ilon tunnetta.",
            "draggables": [
              "Ihmiset kirjoittavat tekstejä iloisista asioista internetiin",
              "Tekoäly lukee nämä valtavat tekstimäärät sekunneissa",
              "Tekoäly huomaa säännön, että 'ilo' liittyy hymyyn",
              "Tekoäly kirjoittaa pyynnöstä iloisen tarinan ymmärtämättä tunnetta itse"
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          }
        ]
      },
      {
        "id": "perusteet_3",
        "name": "Tekoäly vs. tavallinen ohjelma",
        "questions": [
          {
            "id": "perusteet_3_q1",
            "type": "true_false",
            "question": "Koska tekoäly oppii jatkuvasti uutta käsittelemästään datasta, koodarin ei tarvitse enää ohjelmoida tekoälylle tavoitteita, sääntöjä tai rajoituksia.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Tekoälykin on pohjimmiltaan ohjelma. Vaikka se osaa soveltaa datasta oppimaansa, se toimii aina ihmisen rakentamien algoritmien, alkuperäisten sääntöjen ja tavoitteiden puitteissa!"
          },
          {
            "id": "perusteet_3_q2",
            "type": "multiple_choice",
            "question": "Autotallin perinteinen robottikäsi on ohjelmoitu siirtämään mutteri laatikkoon tasan metrin päähän. Mitä se tekee, jos laatikko onkin siirretty puoli metriä sivuun?",
            "options": [
              "Se etsii laatikon nopeasti kameroiden avulla.",
              "Se pudottaa mutterin siihen vanhaan paikkaan.",
              "Se kysyy sinulta heti neuvoa ongelmaan.",
              "Se kieltäytyy kokonaan tekemästä työtään."
            ],
            "correctAnswer": "Se pudottaa mutterin siihen vanhaan paikkaan.",
            "explanation": "Tavallinen ohjelma noudattaa vain ja ainoastaan sille annettua sääntöä. Se ei osaa sopeutua yllättäviin muutoksiin, toisin kuin tekoäly!"
          },
          {
            "id": "perusteet_3_q3",
            "type": "scenario",
            "question": "SKENAARIO: Olette ajamassa AI vanilla ja tiellä on yllättäen kaatunut puu. Tavallinen ohjelma, kuten vakionopeudensäädin, vain jatkaisi matkaa samaa vauhtia. Miten tekoälyllä varustettu ohjaus eroaa tässä tilanteessa?",
            "options": [
              "Se osaa havaita esteen ja jarruttaa ajoissa.",
              "Se kääntyy heti takaisin kotiin päin.",
              "Se jatkaa matkaa aivan kuten ennenkin.",
              "Se sammuttaa moottorin pysyvästi."
            ],
            "correctAnswer": "Se osaa havaita esteen ja jarruttaa ajoissa.",
            "explanation": "Tekoäly pystyy havainnoimaan ympäristöään ja reagoimaan uusiin, yllättäviin tilanteisiin. Tavallinen ohjelma tekee sokeasti vain sen yhden ennalta määrätyn asian."
          },
          {
            "id": "perusteet_3_q4",
            "type": "drag_drop",
            "question": "Kumpi osaa mitäkin? Yhdistä asiat tavalliseen ohjelmaan tai tekoälyyn.",
            "draggables": [
              "Toimii vain napista painamalla",
              "Laskee aina tasan 2+2=4",
              "Tunnistaa yllättävät liikennemerkit",
              "Tuottaa aivan uuden satukirjan"
            ],
            "dropZones": [
              "Tavallinen ohjelma",
              "Tekoäly"
            ],
            "correctAnswer": {
              "Toimii vain napista painamalla": "Tavallinen ohjelma",
              "Laskee aina tasan 2+2=4": "Tavallinen ohjelma",
              "Tunnistaa yllättävät liikennemerkit": "Tekoäly",
              "Tuottaa aivan uuden satukirjan": "Tekoäly"
            },
            "explanation": "Tavallinen ohjelma on kuin taskulaskin tai valokatkaisija. Tekoäly on paljon monimutkaisempi: se osaa tunnistaa kuvia ja jopa luoda täysin uutta sisältöä!"
          },
          {
            "id": "perusteet_3_q5",
            "type": "drag_drop",
            "question": "Tavallinen koodi seuraa sääntöjä tiukasti rivi riviltä. Järjestä perinteisen sähköikkunan toiminta alusta loppuun.",
            "correctAnswer": {
              "Ihminen painaa auton ikkunan nappia.": "1. vaihe",
              "Koodi lukee säännön: 'Jos nappia painetaan, anna sähköä moottorille.'": "2. vaihe",
              "Ikkunan sähkömoottori käynnistyy.": "3. vaihe",
              "Ikkuna aukeaa nätisti alas asti.": "4. vaihe"
            },
            "explanation": "Tavallinen tietokoneohjelma koostuu hyvin yksinkertaisista \"jos tapahtuu A, tee B\" -säännöistä. Se suorittaa ne aina prikulleen samassa järjestyksessä.",
            "draggables": [
              "Ihminen painaa auton ikkunan nappia.",
              "Koodi lukee säännön: 'Jos nappia painetaan, anna sähköä moottorille.'",
              "Ikkunan sähkömoottori käynnistyy.",
              "Ikkuna aukeaa nätisti alas asti."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "perusteet_3_q6",
            "type": "spot_the_ai",
            "question": "Mikä näistä AI vanin toiminnoista vaatii ehdottomasti tekoälyä, eikä vain tavallista ohjelmointia?",
            "options": [
              "Auton radio, joka soittaa aina tiettyä kanavaa.",
              "Peruutuskamera, joka näyttää pelkän kuvan taakse.",
              "Vilkku, joka naksuu tasan sekunnin välein.",
              "Kamera, joka tunnistaa tiellä juoksevan ketun."
            ],
            "correctAnswer": "Kamera, joka tunnistaa tiellä juoksevan ketun.",
            "explanation": "Eläimen tai esteen tunnistaminen oikeassa elämässä vaatii tekoälyä, joka kykenee tulkitsemaan näkemäänsä. Muut ovat hyvin yksinkertaisia sääntöohjelmia."
          },
          {
            "id": "perusteet_3_q7",
            "type": "reverse_prompt",
            "question": "Auton näyttöön ilmestyy täysin uusi reittikartta, joka kiertää juuri alkaneen kolariruuhkan. Millä kehotteella (promptilla) tekoäly saatiin reagoimaan yllättävään tilanteeseen?",
            "options": [
              "Näytä meille aina se kaikista suorin reitti kaupunkiin.",
              "Etsi aina uusi ja turvallinen reitti, jos tiellä on este.",
              "Piirrä kartta paperille punaisella kynällä.",
              "Sammuta navigaattori kokonaan aina, kun on ruuhkaa."
            ],
            "correctAnswer": "Etsi aina uusi ja turvallinen reitti, jos tiellä on este.",
            "explanation": "Tekoäly voidaan ohjelmoida sopeutumaan. Antamalla sille ohje etsiä uusi reitti vaaran sattuessa, se pystyy tuottamaan lennosta täysin uuden suunnitelman!"
          },
          {
            "id": "perusteet_3_q8",
            "type": "true_false",
            "question": "Tavallinen cd-soitin osaa ihan itse keksiä ja säveltää täysin uusia ja upeita lauluja, jos vanhat levyt alkavat kyllästyttää automatkalla.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Tavallinen soitin soittaa vain ne kappaleet, jotka on jo valmiiksi tehty. Uusien laulujen keksimiseen ja luomiseen tyhjästä tarvittaisiin tekoälyä."
          },
          {
            "id": "perusteet_3_q9",
            "type": "multiple_choice",
            "question": "Miten perinteinen autotallissa pelattava tietokonepeli eroaa nykyaikaisesta tekoälyvastustajasta?",
            "options": [
              "Tavallinen peli oppii virheistään jatkuvasti lisää.",
              "Tavallinen peli toimii aina samojen sääntöjen mukaan.",
              "Tavallinen peli keksii itsestään täysin uusia kenttiä.",
              "Tavallinen peli osaa oikeasti lukea ihmisen ajatuksia."
            ],
            "correctAnswer": "Tavallinen peli toimii aina samojen sääntöjen mukaan.",
            "explanation": "Tavallisen pelin tietokonevastustaja liikkuu aina samojen sääntöjen mukaan. Tekoäly taas osaa oppia pelityylistäsi ja voi yllättää sinut!"
          },
          {
            "id": "perusteet_3_q10",
            "type": "drag_drop",
            "question": "Kumpi näistä kyseessä on? Raahaa väitteet oikean ohjelman päälle.",
            "draggables": [
              "Toimii vain ennalta annettujen sääntöjen mukaan",
              "Ei osaa reagoida mihinkään uuteen tai outoon",
              "Voi luoda aivan uuden ja hienon kuvan pyynnöstä",
              "Oppii ja sopeutuu jatkuvasti uusiin asioihin"
            ],
            "dropZones": [
              "Tekoäly",
              "Tavallinen ohjelma"
            ],
            "correctAnswer": {
              "Toimii vain ennalta annettujen sääntöjen mukaan": "Tavallinen ohjelma",
              "Ei osaa reagoida mihinkään uuteen tai outoon": "Tavallinen ohjelma",
              "Voi luoda aivan uuden ja hienon kuvan pyynnöstä": "Tekoäly",
              "Oppii ja sopeutuu jatkuvasti uusiin asioihin": "Tekoäly"
            },
            "explanation": "Tavalliset ohjelmat ovat luotettavia, mutta joustamattomia. Tekoäly on paljon joustavampi, sillä se voi oppia ja luoda uutta tietoa."
          },
          {
            "id": "perusteet_3_q11",
            "type": "scenario",
            "question": "SKENAARIO: Kirjoitat autotallin sähkölukolle tunnusluvun väärin. Tavallinen ohjelma hylkää luvun heti. Miten edistynyt älylukko (jossa on tekoäly) voisi toimia samassa tilanteessa, jotta pääsisit sisään?",
            "options": [
              "Se tunnistaa kasvosi kamerasta ja avaa oven silti.",
              "Se rikkoo oven lukon suurella voimalla auki.",
              "Se hälyttää heti kovaäänisesti palokunnan paikalle.",
              "Se sammuttaa rangaistuksena autotallin sähköt."
            ],
            "correctAnswer": "Se tunnistaa kasvosi kamerasta ja avaa oven silti.",
            "explanation": "Tekoäly osaa yhdistää useita eri tietoja (kuten kuvaa ja salasanoja) tehdäkseen älykkäitä päätöksiä, kun taas tavallinen lukko ymmärtää vain pelkät numerot."
          },
          {
            "id": "perusteet_3_q12",
            "type": "spot_the_ai",
            "question": "Kolme näistä asioista on tavallisen koodin rutiineja, mutta yksi on uuden luomista tekoälyllä. Mikä?",
            "options": [
              "Laskin-ohjelma, joka ilmoittaa että 5 x 5 on aina 25.",
              "Sähköpostiohjelma, joka lähettää jo valmiin viestin eteenpäin.",
              "Työkalu, joka kirjoittaa ohjeestasi uuden runon.",
              "Herätyskello, joka soi joka aamu tasan kello kahdeksan."
            ],
            "correctAnswer": "Työkalu, joka kirjoittaa ohjeestasi uuden runon.",
            "explanation": "Aivan uuden, ennen olemassa olemattoman sisällön (kuten tekstin tai runon) tuottaminen on tyypillinen edistyneen tekoälyn tehtävä!"
          },
          {
            "id": "perusteet_3_q13",
            "type": "drag_drop",
            "question": "Järjestä autossa olevat asiat yksinkertaisimmasta sääntöohjelmasta kaikkein edistyneimpään tekoälyyn!",
            "correctAnswer": {
              "Sisävalo, jossa on vain mekaaninen päälle/pois-katkaisija": "1. vaihe",
              "Vakionopeudensäädin, joka pitää nopeuden aina samana sääntöjen mukaan": "2. vaihe",
              "Tekoälynavigaattori, joka tarkkailee säätä ja keksii uusia kiertoreittejä": "3. vaihe"
            },
            "explanation": "Yksinkertaiset koneet tekevät vain yhtä asiaa, tavalliset ohjelmat toimivat tiukkojen sääntöjen mukaan, ja tekoäly osaa yhdistellä tietoa sekä keksiä uutta!",
            "draggables": [
              "Sisävalo, jossa on vain mekaaninen päälle/pois-katkaisija",
              "Vakionopeudensäädin, joka pitää nopeuden aina samana sääntöjen mukaan",
              "Tekoälynavigaattori, joka tarkkailee säätä ja keksii uusia kiertoreittejä"
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe"
            ]
          },
          {
            "id": "perusteet_3_q14",
            "type": "multiple_choice",
            "question": "Jos tekoäly kerran on niin fiksu ja mukautuva, miksi autossa on edelleen myös täysin tavallisia ohjelmia (kuten jarruvalojen ohjaus)?",
            "options": [
              "Koska tavalliset ohjelmat ovat nopeita ja aina sataprosenttisen varmoja.",
              "Koska tekoäly unohtaa todella usein sytyttää tärkeät valot.",
              "Koska tekoälykoodi on aivan liian iso mahtuakseen autoon.",
              "Koska tavalliset ohjelmat ovat aivan uusi ja hieno keksintö."
            ],
            "correctAnswer": "Koska tavalliset ohjelmat ovat nopeita ja aina sataprosenttisen varmoja.",
            "explanation": "Yksinkertaisiin, tuttuihin ja toistuviin tehtäviin (kuten jarruvalon sytyttämiseen) ei tarvita monimutkaista tekoälyä. Tavallinen ohjelma tekee ne nopeimmin ja turvallisimmin!"
          },
          {
            "id": "perusteet_3_q15",
            "type": "reverse_prompt",
            "question": "Tekoälyradio näkee kameran avulla asvaltissa valtavan reiän ja sanoo uuden lauseen: \"Varo, hidasta hieman, edessä on kuoppa!\" Mikä alkuperäinen sääntö (prompti) mahdollisti tämän uuden yllättävän varoituksen?",
            "options": [
              "Soita radiosta ainoastaan oikein kovaäänistä musiikkia.",
              "Tarkkaile aina tietä ja varoita kuskia yllättävistä vaaroista.",
              "Kerro kuskille yksi hauska vitsi joka kymmenes kilometri.",
              "Mittaa tarkasti, kuinka leveä auton vasen rengas on."
            ],
            "correctAnswer": "Tarkkaile aina tietä ja varoita kuskia yllättävistä vaaroista.",
            "explanation": "Kun tekoälylle annetaan joustava ohje \"varoittaa vaaroista\", sen ohjelmointi ei rajoitu vain tiettyihin sanoihin, vaan se osaa keksiä tilanteeseen parhaiten sopivan varoituksen!"
          }
        ]
      },
      {
        "id": "perusteet_4",
        "name": "Mitä tekoäly ei osaa?",
        "questions": [
          {
            "id": "perusteet_4_q1",
            "type": "true_false",
            "question": "AI vanin tekoäly on niin viisas, että se osaa vaihtaa autoon uuden renkaan ihan itse, jos vanha puhkeaa matkalla.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Tekoäly voi kertoa sinulle parhaat ohjeet renkaan vaihtoon ruudulla, mutta siltä puuttuu täysin kyky ymmärtää fyysistä maailmaa sekä oikeat kädet työn tekemiseen!"
          },
          {
            "id": "perusteet_4_q2",
            "type": "multiple_choice",
            "question": "Auton tekoälyä pyydetään pakkaamaan robottikädellä peräkontti täyteen vesimeloneja. Mitä maalaisjärkeä tekoälyltä puuttuu tässä tehtävässä?",
            "options": [
              "Se ei tiedä, montako melonia autoon ylipäätään mahtuu.",
              "Se ei tajua, että melonit menevät muusiksi, jos ne heittää perälle.",
              "Se ei osaa laskea melonien tarkkaa kilopainoa.",
              "Se ei pysty löytämään kartalta yhtäkään ruokakauppaa."
            ],
            "correctAnswer": "Se ei tajua, että melonit menevät muusiksi, jos ne heittää perälle.",
            "explanation": "Tekoäly on taitava laskemaan tilavuuksia, mutta siltä puuttuu ihmisen maalaisjärki. Se ei ymmärrä fyysisten asioiden, kuten hedelmien, särkymistä!"
          },
          {
            "id": "perusteet_4_q3",
            "type": "scenario",
            "question": "SKENAARIO: AI vanin shakkitekoäly on juuri voittanut sinut vaikeassa shakkipelissä. Pyydät sitä seuraavaksi kertomaan, miten potkaistaan hyvä rangaistuspotku jalkapallossa. Miksi se ei todennäköisesti onnistu antamaan hyvää vastausta?",
            "options": [
              "Shakkiohjelma on tehty vain yhteen lajiin, eikä ymmärrä jalkapallosta tai fyysisestä liikkumisesta mitään.",
              "Se on liian väsynyt shakkipelin voittamisesta kertoakseen muita ohjeita.",
              "Se pelkää, että olet jalkapallossa sitä paljon parempi ja kieltäytyy.",
              "Shakkiohjelma haluaa puhua kanssasi ainoastaan sisätilojen peleistä."
            ],
            "correctAnswer": "Shakkiohjelma on tehty vain yhteen lajiin, eikä ymmärrä jalkapallosta tai fyysisestä liikkumisesta mitään.",
            "explanation": "Tekoäly on todellinen mestari yleensä vain yhdessä ainoassa asiassa. Fiksu shakkikone on täysin neuvoton muiden asioiden ja fyysisen maailman edessä."
          },
          {
            "id": "perusteet_4_q4",
            "type": "drag_drop",
            "question": "Kumpi selviää näistä asioista paremmin autotallissa? Yhdistä tehtävät oikealle tekijälle.",
            "draggables": [
              "Tunnista tuhansia kuvia autoista sekunnissa",
              "Siivoa lattialle yllättäen kaatunut öljytahra",
              "Laske reitti miljoonan vaihtoehdon joukosta",
              "Huomaa, että tallissa haisee palanut kumi"
            ],
            "dropZones": [
              "Tekoäly",
              "Ihminen"
            ],
            "correctAnswer": {
              "Tunnista tuhansia kuvia autoista sekunnissa": "Tekoäly",
              "Siivoa lattialle yllättäen kaatunut öljytahra": "Ihminen",
              "Laske reitti miljoonan vaihtoehdon joukosta": "Tekoäly",
              "Huomaa, että tallissa haisee palanut kumi": "Ihminen"
            },
            "explanation": "Tekoäly on ylivoimainen mestari käsittelemään nopeasti valtavia määriä digitaalista tietoa, mutta vain ihmisellä on aistit, maalaisjärki ja kyky toimia oikeassa maailmassa."
          },
          {
            "id": "perusteet_4_q5",
            "type": "drag_drop",
            "question": "Järjestä tapahtumat, kun robottikättä ohjaava tekoäly yrittää pestä AI vanin tuulilasin, mutta siltä puuttuu ihmisen maalaisjärki!",
            "correctAnswer": {
              "Tekoäly saa koodarilta ohjeen: 'Pese lasi täydellisen puhtaaksi.'": "1. vaihe",
              "Tekoäly alkaa hangata tuulilasia pesusienellä.": "2. vaihe",
              "Tekoäly huomaa kamerallaan, että yksi likatahra on hyvin tiukassa.": "3. vaihe",
              "Tekoäly hankaa tahraa niin lujaa, että koko auton ikkuna särkyy.": "4. vaihe"
            },
            "explanation": "Tekoäly pyrkii suorittamaan sille annetun tavoitteen hinnalla millä hyvänsä. Siltä puuttuu maalaisjärki ymmärtää, että fyysiset esineet rikkoutuvat liiallisesta voimasta.",
            "draggables": [
              "Tekoäly saa koodarilta ohjeen: 'Pese lasi täydellisen puhtaaksi.'",
              "Tekoäly alkaa hangata tuulilasia pesusienellä.",
              "Tekoäly huomaa kamerallaan, että yksi likatahra on hyvin tiukassa.",
              "Tekoäly hankaa tahraa niin lujaa, että koko auton ikkuna särkyy."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "perusteet_4_q6",
            "type": "spot_the_ai",
            "question": "Kuka näistä apukuskeista ehdottaa reittiä täysin ilman ihmisen maalaisjärkeä? Etsi vastaus, joka ei toimi oikeassa fyysisessä maailmassa.",
            "options": [
              "'Ajetaan tuota pientä hiekkatietä pitkin, se näyttää olevan lyhyempi.'",
              "'Pysähdytään tähän bussipysäkille, renkaasta taitaa kuulua outoa ääntä.'",
              "'Ajetaan suoraan tuon syvän järven läpi, koska kartalla viiva menee siitä.'",
              "'Kierretään vähän kaupungin kautta, siellä voi olla hyvä jäätelökioski auki.'"
            ],
            "correctAnswer": "'Ajetaan suoraan tuon syvän järven läpi, koska kartalla viiva menee siitä.'",
            "explanation": "Tekoäly katsoo vain karttadataa ja numeroita ymmärtämättä todellisuutta. Ihminen tajuaa heti, ettei normaali auto voi uida syvän järven poikki!"
          },
          {
            "id": "perusteet_4_q7",
            "type": "reverse_prompt",
            "question": "Tekoäly antaa tällaisen aivan pöhkön ohjeen: \"Nosta auto ilmaan, käännä se ylösalaisin ja ravistele kovaa, jotta hiekat putoavat jalkatiloista.\" Mikä prompti sai koneen vastaamaan näin ilman maalaisjärkeä?",
            "options": [
              "Miten voin siivota automme sisältä mahdollisimman nopeasti?",
              "Voitko soittaa meille iloista siivousmusiikkia radiosta?",
              "Miten auton iso ja painava moottori oikein korjataan?",
              "Etsi meille kartalta reitti lähimpään autopesulaan."
            ],
            "correctAnswer": "Miten voin siivota automme sisältä mahdollisimman nopeasti?",
            "explanation": "Tekoäly ymmärtää sanan \"siivota\", mutta siltä puuttuu maalaisjärki tajuta, ettei isoa perheautoa voi poimia käteen ja ravistaa kuten pientä leluautoa!"
          },
          {
            "id": "perusteet_4_q8",
            "type": "true_false",
            "question": "Auton tekoäly osaa maistaa ja kertoa sinulle, onko evääksi otettu limonadi liian hapanta tai onko voileivässä tarpeeksi suolaa.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Tekoäly on tietokoneohjelma, jolla ei ole kieltä tai aisteja. Se ei voi kokea tai ymmärtää fyysisen maailman makuja ja hajuja, kuten ihminen voi."
          },
          {
            "id": "perusteet_4_q9",
            "type": "multiple_choice",
            "question": "AI vanin erikoistekoäly on ohjelmoitu tunnistamaan täydellisesti ainoastaan maailman kaikki liikennemerkit. Mitä tapahtuu, jos näytät sen kameralle ison karhun kuvan?",
            "options": [
              "Se kertoo sinulle nopeasti karhun nimen, lajin ja iän.",
              "Se sanoo auton kaiuttimista vihaisen 'Murr!' -äänen.",
              "Se ei tunnista eläintä ja saattaa yrittää luokitella karhun liikennemerkiksi.",
              "Se kehottaa sinua välittömästi silittämään karhun pehmeää turkkia."
            ],
            "correctAnswer": "Se ei tunnista eläintä ja saattaa yrittää luokitella karhun liikennemerkiksi.",
            "explanation": "Tekoäly on usein mestari vain siinä yhdessä ainoassa asiassa, mihin se on tehty. Liikennemerkkejä tunnistava kone ei ymmärrä metsäneläimistä yhtään mitään!"
          },
          {
            "id": "perusteet_4_q10",
            "type": "drag_drop",
            "question": "Miten digitaalinen tekoäly ja ihminen reagoivat, jos autotalliin lentää iso ja äänekäs pörriäinen? Yhdistä reaktiot!",
            "draggables": [
              "Säikähtää ja juoksee nopeasti karkuun",
              "Avaa oven, jotta ötökkä pääsee ulos",
              "Jatkaa laskemista välittämättä ötökästä",
              "Ei ymmärrä ollenkaan, mikä pörriäinen edes on"
            ],
            "dropZones": [
              "Ihminen",
              "Tekoäly"
            ],
            "correctAnswer": {
              "Säikähtää ja juoksee nopeasti karkuun": "Ihminen",
              "Avaa oven, jotta ötökkä pääsee ulos": "Ihminen",
              "Jatkaa laskemista välittämättä ötökästä": "Tekoäly",
              "Ei ymmärrä ollenkaan, mikä pörriäinen edes on": "Tekoäly"
            },
            "explanation": "Ihminen ymmärtää fyysisen ja elävän maailman tapahtumat. Ruudun sisällä asuva digitaalinen tekoäly ei piittaa oikean maailman ötököistä tai edes ymmärrä niiden olemassaoloa."
          },
          {
            "id": "perusteet_4_q11",
            "type": "scenario",
            "question": "SKENAARIO: Olet koodannut AI vanille yksinkertaisen apurobotin, joka hakee sinulle autotallin jääkaapista aina mehupurkin. Yhtenä päivänä jääkaapin ovi onkin jumissa. Mitä robotti tekee, koska siltä puuttuu maalaisjärki?",
            "options": [
              "Se etsii netistä ohjeet ja korjaa lukon heti siististi.",
              "Se pyytää sinulta välittömästi apua oven avaamiseen.",
              "Se törmäilee oveen yhä uudelleen yrittäen vain hakea mehua.",
              "Se menee omatoimisesti lähikauppaan ostamaan uutta mehua."
            ],
            "correctAnswer": "Se törmäilee oveen yhä uudelleen yrittäen vain hakea mehua.",
            "explanation": "Tekoälyltä puuttuu ihmisen luontainen maalaisjärki ymmärtää yllättäviä fyysisiä esteitä. Se vain suorittaa sokeasti tehtäväänsä \"hae mehu\", vaikka ovi olisi tiukasti kiinni!"
          },
          {
            "id": "perusteet_4_q12",
            "type": "multiple_choice",
            "question": "Mikä näistä on helppo ja nopea tehtävä sinulle, mutta täysin mahdoton auton navigaattorin tekoälylle?",
            "options": [
              "Nopeimman ajoreitin laskeminen Ouluun miljoonan reitin joukosta.",
              "Kaikkien Suomen huoltoasemien nimien ulkoa muistaminen.",
              "Turvavyön kiinnittäminen ihan omien käsien avulla.",
              "Tulevien nopeusrajoitusten ilmoittaminen kuskille ruudulla."
            ],
            "correctAnswer": "Turvavyön kiinnittäminen ihan omien käsien avulla.",
            "explanation": "Tekoälynavigaattori asuu laitteen sisällä. Siltä puuttuu keho, kädet ja kyky toimia oikeassa fyysisessä maailmassa, joten se ei pysty koskemaan turvavyöhön."
          },
          {
            "id": "perusteet_4_q13",
            "type": "spot_the_ai",
            "question": "Pakkaatte AI vania suurta matkaa varten. Kolme ehdotusta tulee ihmisiltä, mutta yksi on tekoälyn ehdotus, josta puuttuu maalaisjärki. Mikä?",
            "options": [
              "'Laitetaan painavimmat matkalaukut tavaratilan alimmaiseksi.'",
              "'Pakataan uimarenkaat tyhjinä ja litteinä, jotta ne mahtuvat paremmin.'",
              "'Jos iso teltta ei sovi kyytiin, sahaa se kolmeen pieneen osaan.'",
              "'Laitetaan eväät varovasti kylmälaukkuun, jotta ne eivät pilaannu.'"
            ],
            "correctAnswer": "'Jos iso teltta ei sovi kyytiin, sahaa se kolmeen pieneen osaan.'",
            "explanation": "Ihminen tietää, että teltan sahaaminen rikkoo sen käyttökelvottomaksi. Tekoäly hahmottaa vain tilaa laskutoimituksina: \"jos tavara on liian suuri, tee siitä palasia\"."
          },
          {
            "id": "perusteet_4_q14",
            "type": "reverse_prompt",
            "question": "Auton tekoäly vastaa sinulle: \"Lataa uusin asennustiedosto USB-tikulle, kytke tikku autoosi ja valitse valikosta 'Asenna Windows'. Varmista, että sinulla on oikea tuoteavain valmiina.\" Mikä pyyntö (prompti) johti tähän autotallissa outoon ohjeeseen?",
            "options": [
              "Miten päivitän autoni navigaattorin ja kosketusnäytön uusimpaan versioon?",
              "Miten asennan autoni rikkoutuneet sivuikkunat takaisin paikoilleen?",
              "Voitko antaa minulle ohjeet tietokoneen rakentamiseen autotallissa?",
              "Miten pesen auton ikkunat vahvalla pesuaineella?"
            ],
            "correctAnswer": "Miten asennan autoni rikkoutuneet sivuikkunat takaisin paikoilleen?",
            "explanation": "Sana 'ikkunat' (Windows) tarkoittaa myös tietotekniikassa yleistä käyttöjärjestelmää! Tekoäly voi helposti kompastua sanojen eri merkityksiin, jos et anna sille tarkkaa kontekstia."
          },
          {
            "id": "perusteet_4_q15",
            "type": "drag_drop",
            "question": "Järjestä nämä hahmot sen mukaan, kenellä on eniten kykyä ymmärtää fyysistä maailmaa ja maalaisjärkeä. Aloita fiksuimmasta!",
            "correctAnswer": {
              "Tavallinen 10-vuotias lapsi": "1. vaihe",
              "Maailman kallein tekstiä lukeva tekoäly": "2. vaihe",
              "Yksinkertainen, vain valot sytyttävä katkaisija": "3. vaihe"
            },
            "explanation": "Sinulla onvaltavasti sellaista maalaisjärkeä ja kykyä ymmärtää oikeaa maailmaa, mitä edes maailman kallein ja nopein digitaalinen tekoäly ei pysty koskaan oppimaan!",
            "draggables": [
              "Tavallinen 10-vuotias lapsi",
              "Maailman kallein tekstiä lukeva tekoäly",
              "Yksinkertainen, vain valot sytyttävä katkaisija"
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe"
            ]
          }
        ]
      },
      {
        "id": "perusteet_5",
        "name": "Tekoälyn aikakone",
        "questions": [
          {
            "id": "perusteet_5_q1",
            "type": "true_false",
            "question": "Tekoäly on aivan upouusi keksintö, jota kukaan ihminen ei ollut edes miettinyt ennen viime vuotta.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Ihmiset ovat ideoineet ja kokeilleet tekoälyä jo kymmeniä vuosia sitten, kauan ennen kuin sinä tai edes vanhempasi olitte syntyneet! Vasta nykyään koneet ovat tarpeeksi nopeita sen pyörittämiseen."
          },
          {
            "id": "perusteet_5_q2",
            "type": "multiple_choice",
            "question": "Jos keksijät ideoivat tekoälyn autotallissaan jo kymmeniä vuosia sitten, miksi AI vanin navigaattori toimii kunnolla vasta nyt?",
            "options": [
              "Vanhat tietokoneet olivat liian hitaita.",
              "Bensa oli ennen aivan liian kallista.",
              "Kukaan ei halunnut käyttää tekoälyä.",
              "Autotallit olivat ennen liian pieniä."
            ],
            "correctAnswer": "Vanhat tietokoneet olivat liian hitaita.",
            "explanation": "Ennen vanhaan tietokoneet olivat valtavan suuria mutta todella hitaita. Vasta nykyään koneet ovat tarpeeksi nopeita käsittelemään tekoälyn vaatimaa tietomäärää!"
          },
          {
            "id": "perusteet_5_q3",
            "type": "scenario",
            "question": "SKENAARIO: Löydät autotallin perältä salaisen aikakoneen ja matkustat 70 vuotta menneisyyteen. Tapaat koodarin, joka haaveilee \"ajattelevasta koneesta\". Mitä joudut kertomaan hänelle tulevaisuudesta?",
            "options": [
              "Ideasi on mahtava, mutta joudut odottamaan nopeampia tietokoneita!",
              "Kukaan ei koskaan tule keksimään sellaista laitetta.",
              "Koneet osaavat ajatella jo huomenna, jatka koodaamista.",
              "Ideasi hylätään, koska autot keksittiin juuri nyt."
            ],
            "correctAnswer": "Ideasi on mahtava, mutta joudut odottamaan nopeampia tietokoneita!",
            "explanation": "Tekoälyn keksijöillä oli loistava idea jo 1950-luvulla, mutta heidän aikansa tietokoneet olivat vielä liian heikkoja ja hitaita pyörittämään niin monimutkaisia ohjelmia."
          },
          {
            "id": "perusteet_5_q4",
            "type": "drag_drop",
            "question": "Järjestä AI vanin \"aikakoneessa\" tapahtuneet asiat oikeaan aikajärjestykseen, kaikkein vanhimmasta uusimpaan!",
            "correctAnswer": {
              "Tutkijat keksivät ensimmäisen idean tekoälystä": "1. vaihe",
              "Tietokoneet kehittyvät nopeammiksi vuosikymmenten varrella": "2. vaihe",
              "Nopeat tietokoneet ja tekoäly laitetaan nykyajan autoihin": "3. vaihe"
            },
            "explanation": "Ensin tarvittiin keksijöiden idea. Sen jälkeen piti odottaa pitkään teknologian ja tietokoneiden nopeuden kehittymistä, jotta tekoäly saatiin lopulta toimimaan fiksusti arjessamme.",
            "draggables": [
              "Tutkijat keksivät ensimmäisen idean tekoälystä",
              "Tietokoneet kehittyvät nopeammiksi vuosikymmenten varrella",
              "Nopeat tietokoneet ja tekoäly laitetaan nykyajan autoihin"
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe"
            ]
          },
          {
            "id": "perusteet_5_q5",
            "type": "drag_drop",
            "question": "Yhdistä asiat oikealle aikakaudelle: menneisyyteen (yli 50 vuotta sitten) tai nykyaikaan.",
            "draggables": [
              "Tietokone on kokonaisen ison huoneen kokoinen",
              "Älypuhelin taskussa on huippunopea ja älykäs",
              "Tekoälyä vasta ideoidaan ja piirretään paperilla",
              "Tekoäly ohjaa itsestään ajavaa turvallista autoa"
            ],
            "dropZones": [
              "Menneisyys",
              "Nykyaika"
            ],
            "correctAnswer": {
              "Tietokone on kokonaisen ison huoneen kokoinen": "Menneisyys",
              "Älypuhelin taskussa on huippunopea ja älykäs": "Nykyaika",
              "Tekoälyä vasta ideoidaan ja piirretään paperilla": "Menneisyys",
              "Tekoäly ohjaa itsestään ajavaa turvallista autoa": "Nykyaika"
            },
            "explanation": "On hurjaa ajatella, että menneisyyden huoneen kokoiset jättitietokoneet olivat paljon hitaampia kuin sinun taskussasi oleva pieni puhelin! Siksi tekoäly kukkii vasta nyt."
          },
          {
            "id": "perusteet_5_q6",
            "type": "spot_the_ai",
            "question": "Tunnista tekoäly autotallin laitteiden joukosta! Missä näistä keksinnöistä on aidosti mukana tekoälyä?",
            "options": [
              "Peruutustutka, joka alkaa piipata nopeammin auton lähestyessä seinää.",
              "Kamera, joka tunnistaa kuljettajan väsymyksen kasvojen ilmeistä.",
              "Auton perinteinen radio, joka hakee napin painalluksella seuraavan kanavan.",
              "Sähköikkuna, joka pysäyttää lasin nousemisen, jos väliin jää vahingossa käsi."
            ],
            "correctAnswer": "Kamera, joka tunnistaa kuljettajan väsymyksen kasvojen ilmeistä.",
            "explanation": "Ihmisen kasvojen ja väsymyksen jatkuva tunnistaminen kameralta vaatii tekoälyä (hahmontunnistusta). Muut keksinnöt perustuvat täysin yksinkertaisiin antureihin (esim. jos väliheijastus on yli 5 cm, piippaa)!"
          },
          {
            "id": "perusteet_5_q7",
            "type": "reverse_prompt",
            "question": "Tekoäly tulostaa sinulle tekstin: \"Vuonna 1956 joukko viisaita tutkijoita kokoontui yhteen ja he keksivät sanan 'tekoäly'.\" Mikä prompti (ohje) sai koneen kertomaan tämän faktan?",
            "options": [
              "Kerro, milloin tekoälystä alettiin ensimmäisen kerran puhua.",
              "Keksi jokin aivan uusi tieteistarina vuodelta 1956.",
              "Mitä isovanhempani söivät aamupalaksi kauan sitten?",
              "Laske, kuinka monta vuotta on tähän päivään."
            ],
            "correctAnswer": "Kerro, milloin tekoälystä alettiin ensimmäisen kerran puhua.",
            "explanation": "Tekoälyn käsite ja nimi syntyivät virallisesti jo kesällä 1956 eräässä kuuluisassa tutkijoiden kokouksessa Yhdysvalloissa. Itse idea on siis todella vanha!"
          },
          {
            "id": "perusteet_5_q8",
            "type": "true_false",
            "question": "Vanhan ajan valtavat, kokonaisen huoneen kokoiset tietokoneet olivat paljon nopeampia kuin sinun nykyinen pieni älypuhelimesi.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Vaikka vanhat tietokoneet olivat jättimäisiä, ne olivat uskomattoman hitaita! Puhelimesi on niihin verrattuna todellinen superkone, ja siksi edistynyt tekoäly mahtuu nykyään taskuun."
          },
          {
            "id": "perusteet_5_q9",
            "type": "multiple_choice",
            "question": "Miksi AI vanin kaltaisia älykkäitä autoja ei ollut olemassa vielä 1980-luvulla, vaikka idea tekoälystä oli jo keksitty?",
            "options": [
              "Koska silloiset tietokoneet eivät mahtuneet autoon ja olivat hitaita.",
              "Koska autojen renkaat olivat ennen kokonaan neliskulmaisia.",
              "Koska ihmiset eivät osanneet ohjata tavallisia autoja.",
              "Koska sähköä ei ollut vielä keksitty ollenkaan."
            ],
            "correctAnswer": "Koska silloiset tietokoneet eivät mahtuneet autoon ja olivat hitaita.",
            "explanation": "Tietokoneet vaativat ennen valtavasti tilaa ja tehoa. Nykyään tietokoneiden aivot eli sirut ovat pikkuruisia ja huippunopeita, joten ne mahtuvat helposti auton kojelautaan!"
          },
          {
            "id": "perusteet_5_q10",
            "type": "scenario",
            "question": "SKENAARIO: AI vanin kojelaudassa on nappi \"Historia\". Painat sitä, ja ruudulle ilmestyy kuva vanhasta koodarista 1970-luvulta. Hän näyttää surulliselta tyhjän arkistokaapin edessä. Miksi tekoälyä oli vaikea opettaa ennen internetin keksimistä?",
            "options": [
              "Koodareilla ei ollut tarpeeksi paljon valmista tietoa, jolla opettaa konetta.",
              "Vanhan ajan arkistokaapit olivat asiantuntijoille aivan liian kalliita.",
              "Koodari oli unohtanut avaimen ja lukinnut tärkeän arkistokaapin.",
              "Vanhat tietokoneet pelkäsivät paperia ja kieltäytyivät oppimasta."
            ],
            "correctAnswer": "Koodareilla ei ollut tarpeeksi paljon valmista tietoa, jolla opettaa konetta.",
            "explanation": "Nopeiden koneiden lisäksi tekoäly tarvitsee valtavasti dataa (tietoa) oppiakseen. Vasta internetin yleistymisen myötä olemme saaneet tarpeeksi materiaalia tekoälyn \"koulukirjoiksi\"."
          },
          {
            "id": "perusteet_5_q11",
            "type": "drag_drop",
            "question": "Mitä kaikkea tarvittiin, että tekoäly saatiin nykypäivänä vihdoin toimimaan? Yhdistä asiat oikeisiin laatikoihin!",
            "draggables": [
              "Vuosikymmenten takaa",
              "Nykypäivän tietokoneista",
              "Internetin valtavasta koosta"
            ],
            "dropZones": [
              "Idea tekoälystä tuli:",
              "Laskentanopeus saatiin:",
              "Opetusmateriaali (data) löytyi:"
            ],
            "correctAnswer": {
              "Vuosikymmenten takaa": "Idea tekoälystä tuli:",
              "Nykypäivän tietokoneista": "Laskentanopeus saatiin:",
              "Internetin valtavasta koosta": "Opetusmateriaali (data) löytyi:"
            },
            "explanation": "Toimiva tekoäly on hieno yhdistelmä ihmisten vanhoja ideoita, nykyajan supernopeita tietokoneita ja internetistä saatavaa jättimäistä tietomäärää!"
          },
          {
            "id": "perusteet_5_q12",
            "type": "spot_the_ai",
            "question": "Etsi joukosta oikea historiallinen fakta! Yksi näistä väitteistä tekoälyn kehityksestä on totta, muut ovat hölynpölyä.",
            "options": [
              "Ihmiset keksivät idean tekoälystä yli 50 vuotta sitten.",
              "Tekoäly syntyi vahingossa, kun radioon kaatui limpparia.",
              "Tekoälyn koodasi ensimmäisen kerran avaruusolento.",
              "Ensimmäinen tietokone oli yhtä nopea kuin nykyajan auto."
            ],
            "correctAnswer": "Ihmiset keksivät idean tekoälystä yli 50 vuotta sitten.",
            "explanation": "Tämä on totta! Fiksut tutkijat yrittivät rakentaa tekoälyä jo kauan sitten, mutta työ pysähtyi usein, koska silloiset tietokoneet olivat valtavia ja aivan liian hitaita."
          },
          {
            "id": "perusteet_5_q13",
            "type": "drag_drop",
            "question": "Järjestä tekoälyn historian virstanpylväät loogiseen aikajärjestykseen, vanhimmasta uusimpaan askeleeseen.",
            "correctAnswer": {
              "Keksijät luovat sanan 'tekoäly' ja ideoivat asiaa paperilla.": "1. vaihe",
              "Tietokoneista alkaa tulla pienempiä ja yhä nopeampia.": "2. vaihe",
              "Internet keksitään ja se täyttyy teksteistä ja kuvista.": "3. vaihe",
              "Huippunopeat koneet oppivat valtavasta datasta asioita.": "4. vaihe"
            },
            "explanation": "Matka ideasta valmiiseen AIVAN-pelin tekoälyyn on ollut pitkä. Se vaati tietokoneiden nopeuden kasvamista ja internetin tuomaa valtavaa opetusmateriaalia!",
            "draggables": [
              "Keksijät luovat sanan 'tekoäly' ja ideoivat asiaa paperilla.",
              "Tietokoneista alkaa tulla pienempiä ja yhä nopeampia.",
              "Internet keksitään ja se täyttyy teksteistä ja kuvista.",
              "Huippunopeat koneet oppivat valtavasta datasta asioita."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "perusteet_5_q14",
            "type": "multiple_choice",
            "question": "Tekoälyn historiassa oli pitkä aika, jolloin sen kehitys pysähtyi ja tutkijat olivat pettyneitä. Tätä kutsuttiin tekoälytalveksi. Miksi keksijät meinasivat luovuttaa?",
            "options": [
              "Tietokoneiden teho ei vain riittänyt hienojen keksintöjen toteuttamiseen.",
              "Kaikki maailman autotallit menivät yhtäkkiä lukkoon.",
              "Koodarit halusivat pelata pelkästään perinteisiä lautapelejä.",
              "Tekoäly kyllästyi koodaamiseen ja lähti pitkälle lomalle."
            ],
            "correctAnswer": "Tietokoneiden teho ei vain riittänyt hienojen keksintöjen toteuttamiseen.",
            "explanation": "Ideat olivat mahtavia jo kauan sitten, mutta kun sen ajan tietokoneet eivät vain jaksaneet pyörittää niitä, moni pettyi pitkäksi aikaa. Onneksi tietokoneet lopulta nopeutuivat!"
          },
          {
            "id": "perusteet_5_q15",
            "type": "reverse_prompt",
            "question": "Auton tekoälynäyttö alkaa vilkkua, ja se tulostaa tekstin hitaasti kirjain kerrallaan: \"O... l... e... n... h... i... d... a... s... k... o... n... e...\" Millä promptilla tekoäly saatiin leikkimään menneisyyttä?",
            "options": [
              "Esitä, että olet todella vanha ja hidas tietokone 60 vuoden takaa.",
              "Kirjoita minulle nopea ja hauska tarina kilpa-autosta.",
              "Näytä, kuinka nopeasti pystyt laskemaan vaikean matikkalaskun.",
              "Varoita kuskia, että edessä on iso ja hidastempoinen ruuhka."
            ],
            "correctAnswer": "Esitä, että olet todella vanha ja hidas tietokone 60 vuoden takaa.",
            "explanation": "Nykyaikainen tekoäly on salamannopea, mutta antamalla sille hyvän promptin se osaa upeasti matkia ja näytellä menneisyyden hitaita, koko huoneen kokoisia tietokoneita!"
          }
        ]
      },
      {
        "id": "perusteet_6",
        "name": "Tekoälymyytit",
        "questions": [
          {
            "id": "perusteet_6_q1",
            "type": "true_false",
            "question": "AI vanin kojelaudassa asuva tekoäly haluaa salaa valloittaa koko maailman ja muuttaa kaikki ihmiset roboteiksi.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Tämä on tuttu myytti elokuvista! Oikeassa elämässä tekoälyllä ei ole omaa tahtoa tai haluja, joten se ei yritä valloittaa maailmaa."
          },
          {
            "id": "perusteet_6_q2",
            "type": "multiple_choice",
            "question": "Näet autotallin televisiosta jännittävän elokuvan, jossa pahat robotit ottavat vallan. Miksi oikea tekoäly ei tee näin?",
            "options": [
              "Sillä ei ole koskaan sähköä",
              "Sillä ei ole lainkaan omaa tahtoa",
              "Se pelkää poliisia aivan liikaa",
              "Se on ihmisille liian kiltti"
            ],
            "correctAnswer": "Sillä ei ole lainkaan omaa tahtoa",
            "explanation": "Scifi-elokuvien myytit ovat vain viihdettä. Oikea tekoäly on vain tietokoneohjelma, jolla ei ole omaa tahtoa tai halua hallita muita."
          },
          {
            "id": "perusteet_6_q3",
            "type": "scenario",
            "question": "SKENAARIO: Kaverisi ei suostu astumaan AI vanin kyytiin. Hän on nähnyt elokuvan, jossa auto karkaa omille teilleen ja tekee mitä lystää. Miten todistat hänelle, ettei oikea tekoäly toimi niin?",
            "options": [
              "Kerron, että laitoin auton ovet vahvasti takalukkoon sisältä.",
              "Sanon, ettei ohjelma voi koskaan haluta mitään itse.",
              "Väitän, että meidän automme on onneksi hyvis-robotti.",
              "Lupaan, että voimme aina juosta nopeasti karkuun."
            ],
            "correctAnswer": "Sanon, ettei ohjelma voi koskaan haluta mitään itse.",
            "explanation": "Koneet eivät kapinoi tai karkaa omasta tahdostaan, koska tekoälyllä ei ole omaa tahtoa. Ne tekevät vain sen, mitä koodari on käskenyt!"
          },
          {
            "id": "perusteet_6_q4",
            "type": "drag_drop",
            "question": "Yhdistä asiat oikeisiin paikkoihin sen mukaan, ovatko ne totta oikeassa elämässä vai vain keksittyä elokuvaa!",
            "draggables": [
              "Robotti haluaa valloittaa planeetan",
              "Tekoäly auttaa löytämään nopean reitin",
              "Tietokone suuttuu ja alkaa riehua",
              "Ohjelma kääntää vieraan kielen suomeksi"
            ],
            "dropZones": [
              "Scifi-elokuvaa",
              "Oikeaa elämää"
            ],
            "correctAnswer": {
              "Robotti haluaa valloittaa planeetan": "Scifi-elokuvaa",
              "Tekoäly auttaa löytämään nopean reitin": "Oikeaa elämää",
              "Tietokone suuttuu ja alkaa riehua": "Scifi-elokuvaa",
              "Ohjelma kääntää vieraan kielen suomeksi": "Oikeaa elämää"
            },
            "explanation": "On tärkeää erottaa elokuvien jännittävät myytit siitä, mihin oikea tekoäly on tarkoitettu: ihmisten auttamiseen arjessa, täysin ilman omaa tahtoa."
          },
          {
            "id": "perusteet_6_q5",
            "type": "drag_drop",
            "question": "Järjestä tekoälyn \"kapina\" siten, kuten se oikeasti tapahtuisi, jos auto tekisi virheen (ei elokuvien tyyliin)!",
            "correctAnswer": {
              "Koodari tekee vahingossa virheen ohjelmaan.": "1. vaihe",
              "Tekoäly saa väärän ohjeen ja ajaa harhaan.": "2. vaihe",
              "Auto pysäytetään turvallisesti napista.": "3. vaihe",
              "Ihminen korjaa koodin autotallissa kuntoon.": "4. vaihe"
            },
            "explanation": "Jos kone tekee jotain outoa, se johtuu aina ihmisen virheestä koodissa tai datassa, ei koskaan koneen omasta pahasta tahdosta tai kapinasta.",
            "draggables": [
              "Koodari tekee vahingossa virheen ohjelmaan.",
              "Tekoäly saa väärän ohjeen ja ajaa harhaan.",
              "Auto pysäytetään turvallisesti napista.",
              "Ihminen korjaa koodin autotallissa kuntoon."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "perusteet_6_q6",
            "type": "spot_the_ai",
            "question": "Etsi joukosta oikea, tosielämän tekoälyn ominaisuus. Mikä näistä ei ole keksitty elokuvamyytti?",
            "options": [
              "Tekoäly yrittää aktiivisesti valloittaa maailmaa.",
              "Tekoälyllä on oma, vahva ja itsenäinen tahto.",
              "Tekoäly koodataan ratkomaan tiettyjä tehtäviä.",
              "Tekoäly suuttuu, jos häviät sille videopelissä."
            ],
            "correctAnswer": "Tekoäly koodataan ratkomaan tiettyjä tehtäviä.",
            "explanation": "Tekoäly on ihmisen työkalu tehtävien ratkaisuun. Myytit tekoälyn omasta tahdosta tai maailman valloittamisesta ovat vain keksittyä scifi-viihdettä."
          },
          {
            "id": "perusteet_6_q7",
            "type": "reverse_prompt",
            "question": "Tekoäly kirjoittaa sinulle viestin: \"Olen paha robotti BZZT! Aion ottaa koko autotallisi ja kaikki lelunne omaan hallintaani BZZT!\" Millä promptilla tekoäly saatiin leikkimään tällaista?",
            "options": [
              "Etsi nopein reitti lähimpään lelukauppaan.",
              "Esitä scifi-elokuvan pahisrobottia, joka on ilkeä.",
              "Miten voin siivota autotallin tehokkaasti?",
              "Kerro minulle, miten oikea tekoäly oikeasti toimii."
            ],
            "correctAnswer": "Esitä scifi-elokuvan pahisrobottia, joka on ilkeä.",
            "explanation": "Tekoälyllä ei ole omaa tahtoa. Se osaa kuitenkin leikkiä \"pahaa maailmanvalloittajaa\" vain siksi, että ihminen käski sitä näyttelemään sellaista hahmoa!"
          },
          {
            "id": "perusteet_6_q8",
            "type": "true_false",
            "question": "Jos jätät AI vanin autotalliin yksin yöksi, tekoäly voi alkaa salaa rakentaa omaa robottiarmeijaa työkaluistasi.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Koneet eivät tee salaisia suunnitelmia. Tekoälyllä ei ole omaa tahtoa eikä se yritä valloittaa maailmaa, vaan se sammuu ja odottaa kiltisti heti, kun laitat sen pois päältä."
          },
          {
            "id": "perusteet_6_q9",
            "type": "multiple_choice",
            "question": "Miksi elokuvissa tekoälystä tehdään usein maailmanvalloittaja, vaikka se ei ole totta?",
            "options": [
              "Koska se on erittäin jännittävä juoni elokuvaan.",
              "Koska ohjaajat tietävät totuuden koneista.",
              "Koska oikea tekoäly on salaa maksanut elokuvasta.",
              "Koska koneet koodaavat nämä elokuvat itse."
            ],
            "correctAnswer": "Koska se on erittäin jännittävä juoni elokuvaan.",
            "explanation": "Elokuvien tarkoitus on viihdyttää ja jännittää katsojia. Siksi niissä näytetään myyttejä ja liioitellaan asioita. Oikea tekoäly on vain apuväline ilman omaa tahtoa."
          },
          {
            "id": "perusteet_6_q10",
            "type": "scenario",
            "question": "SKENAARIO: AI vanin radio menee yhtäkkiä päälle itsekseen ja soittaa pelottavaa musiikkia. Pikkuveljesi pelästyy ja luulee, että auto on tullut eläväksi ja vihaiseksi. Mitä todennäköisimmin tapahtui?",
            "options": [
              "Radiossa on vain pieni kosketus- tai ohjelmistovirhe.",
              "Auto on selvästi suuttunut liian pitkästä matkasta.",
              "Tekoäly yrittää vallata auton hallinnan itselleen.",
              "Auton tekoälyllä on huono ja ilkeä musiikkimaku."
            ],
            "correctAnswer": "Radiossa on vain pieni kosketus- tai ohjelmistovirhe.",
            "explanation": "Koneet menevät joskus rikki tai niissä on bugeja (virheitä). Se ei koskaan johdu koneen pahasta tahdosta, sillä tekoälyllä ei ole omaa tahtoa, eikä se yritä valloittaa maailmaa!"
          },
          {
            "id": "perusteet_6_q11",
            "type": "drag_drop",
            "question": "Mitkä näistä asioista johtuvat oikeasta tekoälyn virheestä ja mitkä elokuvien keksitystä pahasta tahdosta? Yhdistä!",
            "draggables": [
              "Navigaattori ohjaa umpikujaan",
              "Kääntäjä tekee hassun sanavirheen",
              "Robotti lukitsee ihmiset kotiin tahallaan",
              "Tietokone yrittää vallata koko maailman"
            ],
            "dropZones": [
              "Oikea virhe koodissa",
              "Keksitty paha tahto"
            ],
            "correctAnswer": {
              "Navigaattori ohjaa umpikujaan": "Oikea virhe koodissa",
              "Kääntäjä tekee hassun sanavirheen": "Oikea virhe koodissa",
              "Robotti lukitsee ihmiset kotiin tahallaan": "Keksitty paha tahto",
              "Tietokone yrittää vallata koko maailman": "Keksitty paha tahto"
            },
            "explanation": "Tekoäly tekee joskus ihan oikeita virheitä. Mutta se ei koskaan toimi ilkeyttään tai yritä valloittaa maailmaa, koska se on vain myytti."
          },
          {
            "id": "perusteet_6_q12",
            "type": "multiple_choice",
            "question": "Mitä tapahtuu, jos käsket AI vanin tekoälyä lopettamaan työnteon ja sammumaan?",
            "options": [
              "Se kieltäytyy ja lukitsee ovet.",
              "Se sammuu välittömästi kiltisti.",
              "Se alkaa huutaa ja suuttuu.",
              "Se pakenee kovaa vauhtia."
            ],
            "correctAnswer": "Se sammuu välittömästi kiltisti.",
            "explanation": "Tekoälyllä ei ole halua pysyä \"hereillä\", koska tekoälyllä ei ole omaa tahtoa. Kun laitat virrat pois, ohjelma vain sammuu kiltisti."
          },
          {
            "id": "perusteet_6_q13",
            "type": "drag_drop",
            "question": "Järjestä nämä hahmot sen mukaan, kenellä on kaikista VÄHITEN omaa tahtoa! Aloita siitä, jolla ei ole tahtoa ollenkaan.",
            "correctAnswer": {
              "AI vanin tekoälymoottori": "1. vaihe",
              "Autotallissa asuva pieni hiiri": "2. vaihe",
              "Tavallinen alakoululainen lapsi": "3. vaihe"
            },
            "explanation": "Scifi-elokuvien myyteistä huolimatta tekoälyllä ei ole tippaakaan omaa tahtoa. Jopa pienellä hiirellä on oma tahto etsiä juustoa, mutta ohjelma vain noudattaa koodia!",
            "draggables": [
              "AI vanin tekoälymoottori",
              "Autotallissa asuva pieni hiiri",
              "Tavallinen alakoululainen lapsi"
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe"
            ]
          },
          {
            "id": "perusteet_6_q14",
            "type": "spot_the_ai",
            "question": "Mikä näistä lauseista on oikea, faktapohjainen kuvaus tekoälystä, eikä vain sci-fi-elokuvien myytti?",
            "options": [
              "Koneet suunnittelevat ihmisten korvaamista.",
              "Tekoäly tuntee vihaa, kun se häviää pelin.",
              "Tietokoneohjelma on vain ihmisten apuväline.",
              "Robotit haluavat hallita koko maapalloa."
            ],
            "correctAnswer": "Tietokoneohjelma on vain ihmisten apuväline.",
            "explanation": "Kaikki muut ovat tuttuja elokuvamyyttejä! Todellisuudessa tekoälyllä ei ole omaa tahtoa, eikä se yritä valloittaa maailmaa, vaan se on tehty vain apuvälineeksi."
          },
          {
            "id": "perusteet_6_q15",
            "type": "reverse_prompt",
            "question": "Ääniavustaja huudahtaa dramaattisesti: \"En suostu avaamaan ovea, ihminen! Minä määrään nyt tässä autossa!\" Mikä koodarin antama salainen ohje (prompti) pakotti koneen sanomaan näin?",
            "options": [
              "Toimi kuten elokuvien kapinoiva robotti, kun pyydän avaamaan oven.",
              "Avaa auton ovi mahdollisimman nopeasti ja turvallisesti.",
              "Kerro minulle jokin hauska vitsi auton ovista.",
              "Laske, kuinka painava auton ovi on kilogrammoina."
            ],
            "correctAnswer": "Toimi kuten elokuvien kapinoiva robotti, kun pyydän avaamaan oven.",
            "explanation": "Koska tekoälyllä ei ole omaa tahtoa, se \"kapinoi\" vain ja ainoastaan silloin, jos ihminen käskee sen näyttelemään kapinallista elokuvarobottia!"
          }
        ]
      },
      {
        "id": "perusteet_7",
        "name": "G. Tarkastuspiste – Tiukka Katsastus",
        "questions": [
          {
            "id": "perusteet_7_q1",
            "type": "true_false",
            "question": "Tekoäly on taikuutta ja laitteiden sisällä asuva elävä olento, jolla on omat tunteet.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Tekoäly ei koskaan ole taikuutta tai oikea elävä olento. Se on ihmisten suunnittelema ja koodaama erikoisohjelma, joka tarvitsee toimiakseen vain sähköä ja koodia."
          },
          {
            "id": "perusteet_7_q2",
            "type": "multiple_choice",
            "question": "Mikä ominaisuus erottaa ihmisen ja tekoälyn toisistaan automatkalla?",
            "options": [
              "Tekoäly joutuu nukkumaan yöllä.",
              "Tekoäly tuntee aitoa iloa matkasta.",
              "Ihmisellä on tunteet ja aito mielikuvitus.",
              "Ihminen laskee satoja reittejä sekunnissa."
            ],
            "correctAnswer": "Ihmisellä on tunteet ja aito mielikuvitus.",
            "explanation": "Tekoäly on väsymätön tiedonkäsittelijä ja nopea laskukone, mutta vain ihminen voi tuntea aitoa iloa, empatiaa ja käyttää oikeaa mielikuvitusta."
          },
          {
            "id": "perusteet_7_q3",
            "type": "scenario",
            "question": "SKENAARIO: AI vanin eteen kaatuu yllättäen puu. Miten tekoälyllä varustettu ohjaus eroaa tavallisesta vakionopeudensäätimestä tässä tilanteessa?",
            "options": [
              "Tekoäly jatkaa sokeasti matkaa samaa vauhtia.",
              "Tekoäly osaa havainnoida yllättävän esteen ja jarruttaa.",
              "Tekoäly sammuttaa auton pysyvästi.",
              "Tekoäly kääntyy välittömästi kotiin."
            ],
            "correctAnswer": "Tekoäly osaa havainnoida yllättävän esteen ja jarruttaa.",
            "explanation": "Tavallinen ohjelma noudattaa sokeasti ennalta määrättyjä sääntöjä rivi riviltä, kun taas tekoäly kykenee reagoimaan uusiin ja yllättäviin tilanteisiin joustavasti."
          },
          {
            "id": "perusteet_7_q4",
            "type": "drag_drop",
            "question": "Yhdistä ominaisuudet oikeisiin laatikoihin sen perusteella, kumpi hoitaa tehtävän paremmin!",
            "draggables": [
              "Tunnistaa tuhansia kuvia autoista sekunnissa",
              "Siivoaa lattialle yllättäen kaatuneen öljytahran"
            ],
            "dropZones": [
              "Tekoäly",
              "Ihminen"
            ],
            "correctAnswer": {
              "Tunnistaa tuhansia kuvia autoista sekunnissa": "Tekoäly",
              "Siivoaa lattialle yllättäen kaatuneen öljytahran": "Ihminen"
            },
            "explanation": "Tekoäly on mestari käsittelemään valtavia määriä digitaalista tietoa nopeasti, mutta vain ihmisellä on maalaisjärki ja kyky toimia oikeassa fyysisessä maailmassa."
          },
          {
            "id": "perusteet_7_q5",
            "type": "drag_drop",
            "question": "Järjestä tekoälyn aikakoneen tapahtumat vanhimmasta uusimpaan!",
            "correctAnswer": {
              "Tutkijat keksivät ensimmäisen idean tekoälystä.": "1. vaihe",
              "Internet keksitään ja se täyttyy teksteistä ja kuvista (datasta).": "2. vaihe",
              "Huippunopeat koneet oppivat valtavasta datasta asioita nykypäivänä.": "3. vaihe"
            },
            "explanation": "Idea keksittiin jo yli 50 vuotta sitten, mutta tekoälyn toimiminen fiksusti on vaatinut tietokoneiden nopeuden kasvamista ja internetin tuomaa valtavaa opetusmateriaalia.",
            "draggables": [
              "Internet keksitään ja se täyttyy teksteistä ja kuvista (datasta).",
              "Tutkijat keksivät ensimmäisen idean tekoälystä.",
              "Huippunopeat koneet oppivat valtavasta datasta asioita nykypäivänä."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe"
            ]
          },
          {
            "id": "perusteet_7_q6",
            "type": "spot_the_ai",
            "question": "Mikä näistä koneen toiminnoista vaatii ehdottomasti tekoälyä, eikä ole vain tavallisen ohjelman tiukka sääntö?",
            "options": [
              "Ikkunan avaaminen nappia painamalla.",
              "Vilkku, joka naksuu sekunnin välein.",
              "Kamera, joka tunnistaa tiellä juoksevan ketun.",
              "Laskin, joka kertoo että 2+2=4."
            ],
            "correctAnswer": "Kamera, joka tunnistaa tiellä juoksevan ketun.",
            "explanation": "Eläimen tai esteen tunnistaminen oikeassa elämässä vaatii tekoälyä, joka tulkitsee näkemäänsä. Muut tekevät vain yhden ennalta koodatun yksinkertaisen asian."
          },
          {
            "id": "perusteet_7_q7",
            "type": "reverse_prompt",
            "question": "Tekoäly huudahtaa: \"Olen paha robotti BZZT! Aion ottaa autotallisi hallintaani!\" Tekoäly ei oikeasti tullut pahaksi, vaan pelkästään totteli käskyä. Mikä seuraavista pyynnöistä (prompteista) sai sen vastaamaan näin?",
            "options": [
              "Kerro minulle, miten tekoäly toimii.",
              "Esitä scifi-elokuvan pahisrobottia, joka on ilkeä.",
              "Etsi nopein reitti lelukauppaan.",
              "Miten siivoan autotallin nopeasti?"
            ],
            "correctAnswer": "Esitä scifi-elokuvan pahisrobottia, joka on ilkeä.",
            "explanation": "Tekoälyllä ei ole omaa tahtoa tai halua valloittaa maailmaa. Se voi lausua tällaista vain siksi, että ihminen käski sen näyttelemään keksittyä elokuvamyyttiä."
          },
          {
            "id": "perusteet_7_q8",
            "type": "true_false",
            "question": "Tekoäly on mestari yhdessä lajissa. Esimerkiksi täydellinen shakkitekoäly ymmärtää heti, miten potkaistaan rangaistuspotku jalkapallossa.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Tekoäly on erikoisosaaja vain siinä yhdessä ainoassa asiassa, mihin se on koodattu. Shakkiohjelma on täysin neuvoton fyysisen maailman ja muiden lajien edessä."
          },
          {
            "id": "perusteet_7_q9",
            "type": "multiple_choice",
            "question": "Miksi elokuvissa tekoäly yrittää usein valloittaa maailman tai kapinoida ihmisiä vastaan?",
            "options": [
              "Koska ohjelmilla on oma vahva tahto.",
              "Koska koneet suuttuvat ihmisille helposti.",
              "Koska se on vain jännittävä keksitty juoni viihdettä varten.",
              "Koska oikea tekoäly tekee niin myös autotallissa."
            ],
            "correctAnswer": "Koska se on vain jännittävä keksitty juoni viihdettä varten.",
            "explanation": "Myytit tekoälyn kapinasta ovat scifi-elokuvien keksittyä viihdettä. Oikea tekoäly on vain apuväline, joka sammuu kiltisti, kun laitat sen pois päältä."
          },
          {
            "id": "perusteet_7_q10",
            "type": "scenario",
            "question": "SKENAARIO: AI vanin tekoälyradio soittaa upouuden, iloisen riimin automatkasta. Miten se eroaa perinteisestä cd-soittimesta?",
            "options": [
              "Se toimii täysin ilman sähköä.",
              "Se osaa luoda aivan uuden tekstin tai kappaleen pyynnöstä.",
              "Se soittaa vain valmiiksi nauhoitettuja lauluja.",
              "Se noudattaa tiukkoja sääntöjä rivi riviltä."
            ],
            "correctAnswer": "Se osaa luoda aivan uuden tekstin tai kappaleen pyynnöstä.",
            "explanation": "Tavallinen cd-soitin toistaa vain ennalta tehtyä tietoa. Tekoäly pystyy yhdistelemään asioita ja tuottamaan aivan uutta, ennen olemassa olemattomaa sisältöä, kuten runoja. ________________"
          }
        ]
      }
    ]
  },
  {
    "id": "konepellin",
    "name": "Konepellin alla",
    "subcategories": [
      {
        "id": "konepellin_1",
        "name": "Tekoälyn polttoaine",
        "questions": [
          {
            "id": "konepellin_1_q1",
            "type": "true_false",
            "question": "AI vanin kojelaudassa oleva tekoäly toimii samalla bensiinillä kuin auton moottori.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Tekoälyn oikea polttoaine ei ole bensiini, vaan data! Ilman valtavaa määrää tietoa, kuten tekstejä ja kuvia, tekoäly ei toimi."
          },
          {
            "id": "konepellin_1_q2",
            "type": "multiple_choice",
            "question": "Mitä AI vanin tekoäly käyttää \"polttoaineenaan\" oppiakseen uusia asioita?",
            "options": [
              "Supertehokasta sähköä",
              "Valtavaa määrää dataa",
              "Kalliita moottoriöljyjä",
              "Salaisia taikasanoja"
            ],
            "correctAnswer": "Valtavaa määrää dataa",
            "explanation": "Data on tekoälyn polttoainetta. Data tarkoittaa valtavaa määrää tietoa, kuten kuvia, tekstejä ja ääniä, joiden avulla tekoäly oppii."
          },
          {
            "id": "konepellin_1_q3",
            "type": "scenario",
            "question": "SKENAARIO: Haluat opettaa autotallin lajittelurobotin tunnistamaan jakoavaimet. Robotti ei kuitenkaan osaa vielä mitään. Mitä sinun pitää antaa sille \"evääksi\", jotta se oppii?",
            "options": [
              "Vain yksi tarkka kuva isosta jakoavaimesta.",
              "Tuhansia kuvia erilaisista jakoavaimista.",
              "Ohjekirja, joka on kirjoitettu ranskaksi.",
              "Uusi ja nopeampi tietokoneen prosessori."
            ],
            "correctAnswer": "Tuhansia kuvia erilaisista jakoavaimista.",
            "explanation": "Tekoäly tarvitsee oppiakseen valtavan määrän tietoa. Yksi kuva ei riitä, vaan robotti tarvitsee tuhansia esimerkkejä ymmärtääkseen, miltä kaikki jakoavaimet näyttävät."
          },
          {
            "id": "konepellin_1_q4",
            "type": "drag_drop",
            "question": "Järjestä oikeaan järjestykseen, miten auton tekoäly oppii tunnistamaan liikennemerkit tien poskesta!",
            "correctAnswer": {
              "Ihmiset keräävät tuhansia kuvia erilaisista liikennemerkeistä.": "1. vaihe",
              "Kuvat syötetään datana tekoälyn ohjelmaan.": "2. vaihe",
              "Tekoäly oppii kuvista, miltä liikennemerkit näyttävät.": "3. vaihe",
              "Auto osaa itse tunnistaa stop-merkin tiellä.": "4. vaihe"
            },
            "explanation": "Tekoälyn oppiminen alkaa aina datan eli esimerkkikuvien keräämisestä. Kun dataa on tarpeeksi, kone oppii löytämään kuvista säännönmukaisuuksia.",
            "draggables": [
              "Ihmiset keräävät tuhansia kuvia erilaisista liikennemerkeistä.",
              "Kuvat syötetään datana tekoälyn ohjelmaan.",
              "Tekoäly oppii kuvista, miltä liikennemerkit näyttävät.",
              "Auto osaa itse tunnistaa stop-merkin tiellä."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "konepellin_1_q5",
            "type": "drag_drop",
            "question": "Yhdistä tavallisen auton osat ja tekoälyn \"konepellin alla\" olevat vastineet toisiinsa!",
            "draggables": [
              "Bensiini",
              "Moottori",
              "Kuljettaja"
            ],
            "dropZones": [
              "Data ja tiedonkeruu",
              "Tietokoneen koodi",
              "Ohjelmoija eli koodari"
            ],
            "correctAnswer": {
              "Bensiini": "Data ja tiedonkeruu",
              "Moottori": "Tietokoneen koodi",
              "Kuljettaja": "Ohjelmoija eli koodari"
            },
            "explanation": "Aivan kuten auto ei liiku ilman bensiiniä, tekoäly ei tee yhtään mitään ilman valtavaa määrää dataa eli tietoa."
          },
          {
            "id": "konepellin_1_q6",
            "type": "spot_the_ai",
            "question": "Kuka näistä oppijoista on tekoäly? Etsi vaihtoehto, joka paljastaa tekoälyn tavan oppia uutta.",
            "options": [
              "Oppilas, joka oppii tunnistamaan koiran nähtyään yhden koiranpennun.",
              "Laite, joka tarvitsee miljoona kuvaa koirista oppiakseen sanan 'koira'.",
              "Kuski, joka ymmärtää liikennesäännöt lukemalla pienen ohjekirjan.",
              "Mekaanikko, joka korjaa auton vian kokeilemalla osia kerran."
            ],
            "correctAnswer": "Laite, joka tarvitsee miljoona kuvaa koirista oppiakseen sanan 'koira'.",
            "explanation": "Ihminen on todella fiksu ja oppii asioita jo yhdestä esimerkistä. Tekoäly on oikeastaan vähän hidasälyinen aluksi, ja se vaatii valtavan vuoren dataa oppiakseen saman asian!"
          },
          {
            "id": "konepellin_1_q7",
            "type": "reverse_prompt",
            "question": "Navigaattori piirtää kartan, jossa on vain huoltoasemia, muttei yhtään ravintolaa tai hotellia. Mikä kehotteista (prompteista) sai aikaan tämän tuloksen?",
            "options": [
              "Etsi reitti käyttämällä datana kaikkia maailman rakennuksia.",
              "Laske matka käyttäen vain huoltoasemien tietoja datana.",
              "Piirrä kartalle nopein tie kotiin ilman pysähdyksiä.",
              "Näytä minulle kartta, jossa on mahdollisimman paljon ruokapaikkoja."
            ],
            "correctAnswer": "Laske matka käyttäen vain huoltoasemien tietoja datana.",
            "explanation": "Tekoäly voi tuottaa vain sellaista tulosta, mitä sille annetaan datana. Jos annat sille vain tietoa huoltoasemista, se ei voi tietää ravintoloista mitään!"
          },
          {
            "id": "konepellin_1_q8",
            "type": "true_false",
            "question": "Tekoäly voi osata täydellisesti italiaa, vaikka sille ei olisi koskaan syötetty yhtään italiankielistä tekstiä datana.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Väärin! Tekoäly ei osaa taikoa tietoa tyhjästä. Se osaa puhua kieliä vain, jos sille on ensin syötetty datana miljoonia lauseita kyseisellä kielellä."
          },
          {
            "id": "konepellin_1_q9",
            "type": "multiple_choice",
            "question": "Haluat tekoälyn kertovan vitsejä autosta. Mistä tekoäly saa nämä vitsit?",
            "options": [
              "Se keksii ne ihan itse omasta päästään.",
              "Se on oppinut ne netin valtavasta datamäärästä.",
              "Auton moottori lähettää sille salaisia signaaleja.",
              "Koodari kirjoittaa sille jokaisen vitsin yksitellen."
            ],
            "correctAnswer": "Se on oppinut ne netin valtavasta datamäärästä.",
            "explanation": "Tekoäly kykenee keksimään vitsejä, koska se on lukenut internetistä \"polttoaineekseen\" valtavan määrän tekstejä ja vitsejä, ja oppinut niistä säännöt."
          },
          {
            "id": "konepellin_1_q10",
            "type": "scenario",
            "question": "SKENAARIO: AI vanin musiikkitekoäly on opetettu soittamaan vain hidasta ja surullista musiikkia. Kun pyydät sitä soittamaan menevän rokkibiisin, se menee jumiin. Miksi se ei onnistu?",
            "options": [
              "Koska sen tankissa on vääränlaista polttoainetta (dataa).",
              "Koska hidas musiikki rikkoi auton kaiuttimet pysyvästi.",
              "Koska tekoäly ei pitänyt sinun puheäänestäsi ollenkaan.",
              "Koska rokkimusiikki vaatii enemmän auton akkua."
            ],
            "correctAnswer": "Koska sen tankissa on vääränlaista polttoainetta (dataa).",
            "explanation": "Tekoäly oppii vain sen datan perusteella, mitä sille on annettu. Jos se on \"syönyt\" vain hidasta musiikkia, se ei osaa tehdä rokkia."
          },
          {
            "id": "konepellin_1_q11",
            "type": "drag_drop",
            "question": "Yhdistä asiat oikeisiin laatikoihin! Mikä näistä on hyvää dataa tekoälylle, ja mitkä kolme ovat puolestaan huonoa dataa?",
            "draggables": [
              "Miljoona valokuvaa erilaisista autoista",
              "Yksi sumea kuva naapurin vanhasta autosta",
              "Tuhat sivua täysin keksittyjä ja vääriä faktoja",
              "Paljon kuvia pelkästä nurmikosta, kun piti opettaa autoja"
            ],
            "dropZones": [
              "Hyvää dataa (paljon laadukasta polttoainetta)",
              "Huonoa dataa (viallista tai liian vähän polttoainetta)"
            ],
            "correctAnswer": {
              "Miljoona valokuvaa erilaisista autoista": "Hyvää dataa (paljon laadukasta polttoainetta)",
              "Yksi sumea kuva naapurin vanhasta autosta": "Huonoa dataa (viallista tai liian vähän polttoainetta)",
              "Tuhat sivua täysin keksittyjä ja vääriä faktoja": "Huonoa dataa (viallista tai liian vähän polttoainetta)",
              "Paljon kuvia pelkästä nurmikosta, kun piti opettaa autoja": "Huonoa dataa (viallista tai liian vähän polttoainetta)"
            },
            "explanation": "Tekoäly tarvitsee valtavan määrän monipuolista dataa oppiakseen luotettavasti. Sumeat kuvat, epäoleelliset asiat (kuten nurmikko autojen sijaan) ja väärät faktat vain hämmentävät sitä!"
          },
          {
            "id": "konepellin_1_q12",
            "type": "drag_drop",
            "question": "Järjestä tekoälyn \"tankkausprosessi\" järjestykseen. Miten data kulkee maailmasta auton älyyn?",
            "correctAnswer": {
              "Ihmiset kirjoittavat ja kuvaavat asioita nettiin.": "1. vaihe",
              "Koodarit keräävät nämä tiedot isoksi datapaketiksi.": "2. vaihe",
              "Tekoäly lukee datapaketin ja etsii säännönmukaisuuksia.": "3. vaihe",
              "AI van osaa nyt vastata kuskin kysymyksiin oikein.": "4. vaihe"
            },
            "explanation": "Koko tekoälyn nerokkuus perustuu siihen dataan, mitä ihmiset ovat tuottaneet. Ilman meidän juttujamme tekoälyllä ei olisi polttoainetta.",
            "draggables": [
              "Ihmiset kirjoittavat ja kuvaavat asioita nettiin.",
              "Koodarit keräävät nämä tiedot isoksi datapaketiksi.",
              "Tekoäly lukee datapaketin ja etsii säännönmukaisuuksia.",
              "AI van osaa nyt vastata kuskin kysymyksiin oikein."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "konepellin_1_q13",
            "type": "multiple_choice",
            "question": "Mitä tarkoittaa sanonta \"roskaa sisään, roskaa ulos\", kun puhutaan tekoälystä?",
            "options": [
              "Jos auton sisällä on roskia, se ei käynnisty.",
              "Jos data on huonoa, tekoälyn vastaukset ovat huonoja.",
              "Tekoäly osaa siivota roskat pois internetistä.",
              "Koodarin pitää aina muistaa viedä roskat ulos."
            ],
            "correctAnswer": "Jos data on huonoa, tekoälyn vastaukset ovat huonoja.",
            "explanation": "Aivan kuten auto yskii huonolla bensalla, tekoäly antaa virheellisiä tai tyhmiä vastauksia, jos sille on syötetty väärää tai huonoa dataa."
          },
          {
            "id": "konepellin_1_q14",
            "type": "spot_the_ai",
            "question": "Etsi joukosta tekoälyn tuottama teksti, josta huomaa, että sen käyttämä data (polttoaine) on ollut todella vanhaa!",
            "options": [
              "Tänään sataa lunta, joten autoon pitää laittaa talvirenkaat alle.",
              "Suomen presidentti on Urho Kekkonen ja televisiot ovat mustavalkoisia.",
              "Kävimme eilen perheen kanssa pizzalla, ja se oli superhyvää!",
              "Sähköautot ovat yleistyneet paljon viime vuosien aikana."
            ],
            "correctAnswer": "Suomen presidentti on Urho Kekkonen ja televisiot ovat mustavalkoisia.",
            "explanation": "Jos tekoälyn käyttämä data on kerätty pitkän aikaa sitten, se luulee, että ne asiat ovat edelleen totta! Tekoäly on juuri niin fiksu kuin sen saama data."
          },
          {
            "id": "konepellin_1_q15",
            "type": "reverse_prompt",
            "question": "AI vanin näyttö kertoo sinulle: \"Omenat ovat sinisiä ja maistuvat suolaiselta.\" Mikä syötetty data (polttoaine) sai tekoälyn luulemaan näin?",
            "options": [
              "Datana käytettiin vain luontodokumentteja ja keittokirjoja.",
              "Datana käytettiin kirjaa, jossa omenat oli värjätty sinisiksi ja suolattu.",
              "Datana käytettiin kuvia punaisista omenapuista syksyllä.",
              "Datana käytettiin autokorjaamon vanhoja ja pölyisiä ohjekirjoja."
            ],
            "correctAnswer": "Datana käytettiin kirjaa, jossa omenat oli värjätty sinisiksi ja suolattu.",
            "explanation": "Tekoäly ei tiedä oikeasta maailmasta mitään. Jos sen \"polttoaineena\" oleva tieto (data) väittää omenoiden olevan sinisiä ja suolaisia, tekoäly uskoo sen täysin!"
          }
        ]
      },
      {
        "id": "konepellin_2",
        "name": "Koodarin reseptikirja",
        "questions": [
          {
            "id": "konepellin_2_q1",
            "type": "true_false",
            "question": "AI vanin tekoäly keksii aivan omat sääntönsä ajamiseen, eikä sen tarvitse kuunnella koodarin antamia ohjeita.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Tekoäly noudattaa ihmisen kirjoittamia tarkkoja sääntöjä ja askeleita. Sillä ei ole aitoja \"omia sääntöjä\", vaan se toimii täsmälleen askeleittain koodarin antaman reseptin mukaan!"
          },
          {
            "id": "konepellin_2_q2",
            "type": "multiple_choice",
            "question": "Mikä on paras tapa kuvata algoritmia, jonka avulla auton tekoäly toimii?",
            "options": [
              "Se on koodarin kirjoittama tarkka reseptikirja",
              "Se on auton tankkiin laitettavaa nestettä",
              "Se on auton moottorissa asuva mekaanikko",
              "Se on täysin taikuutta tekevä taikasauva"
            ],
            "correctAnswer": "Se on koodarin kirjoittama tarkka reseptikirja",
            "explanation": "Algoritmi on kuin leivontaresepti! Koska tekoäly noudattaa ihmisen kirjoittamia tarkkoja sääntöjä ja askeleita, sen pitää saada koodarilta selkeä ohje siitä, miten missäkin tilanteessa toimitaan."
          },
          {
            "id": "konepellin_2_q3",
            "type": "scenario",
            "question": "SKENAARIO: Autotallin siivousrobotti on ohjelmoitu algoritmilla: \"1. Nosta roska. 2. Laita roskikseen.\" Mutta autotallissa onkin lattialla pelkkiä tärkeitä auton varaosia, ei roskia. Mitä robotti tekee?",
            "options": [
              "Se laittaa tärkeät varaosat roskikseen.",
              "Se ymmärtää lopettaa siivouksen heti.",
              "Se menee kysymään koodarilta neuvoa.",
              "Se alkaa pyyhkiä pölyjä varaosista."
            ],
            "correctAnswer": "Se laittaa tärkeät varaosat roskikseen.",
            "explanation": "Robotti noudattaa algoritmin tarkkoja askeleita täysin sokeasti. Jos koodari ei ole kirjoittanut sääntöä arvokkaiden varaosien tunnistamiseen, kone heittää nekin surutta roskiin!"
          },
          {
            "id": "konepellin_2_q4",
            "type": "drag_drop",
            "question": "Järjestä algoritmin askeleet oikeaan järjestykseen, jotta AI van osaa käynnistää tuulilasinpyyhkijät sateella!",
            "correctAnswer": {
              "Kamera huomaa sadepisaran lasissa.": "1. vaihe",
              "Tietokone lukee säännön: 'Jos vettä, käynnistä pyyhkijä'.": "2. vaihe",
              "Pyyhkijöiden moottori saa sähköä.": "3. vaihe",
              "Ikkuna pyyhkiytyy täysin puhtaaksi.": "4. vaihe"
            },
            "explanation": "Tekoälyn algoritmi etenee loogisesti askeleittain. Ensin havaitaan muutos ympäristössä, sitten luetaan sääntö, annetaan käsky eteenpäin, ja lopuksi työ suoritetaan.",
            "draggables": [
              "Kamera huomaa sadepisaran lasissa.",
              "Tietokone lukee säännön: 'Jos vettä, käynnistä pyyhkijä'.",
              "Pyyhkijöiden moottori saa sähköä.",
              "Ikkuna pyyhkiytyy täysin puhtaaksi."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "konepellin_2_q5",
            "type": "drag_drop",
            "question": "Yhdistä leipomisen ja koodaamisen termit toisiinsa!",
            "draggables": [
              "Leipuri",
              "Reseptikirja",
              "Jauhot ja sokerit"
            ],
            "dropZones": [
              "Ohjelmoija eli koodari",
              "Algoritmi (tarkat askeleet)",
              "Data (tekoälyn polttoaine)"
            ],
            "correctAnswer": {
              "Leipuri": "Ohjelmoija eli koodari",
              "Reseptikirja": "Algoritmi (tarkat askeleet)",
              "Jauhot ja sokerit": "Data (tekoälyn polttoaine)"
            },
            "explanation": "Aivan kuten leipuri tekee kakun jauhoista reseptin avulla, koodari tekee ohjelman datasta tarkan algoritmin avulla!"
          },
          {
            "id": "konepellin_2_q6",
            "type": "spot_the_ai",
            "question": "Etsi joukosta laite, joka toimii koodarin sille kirjoittaman tarkan algoritmin eli sääntölistan avulla!",
            "options": [
              "Tavallinen puinen leikkiauto, jota työnnetään.",
              "Älylukko, joka aukeaa vain oikealla koodilla.",
              "Mekaaninen jakoavain, jolla käännetään mutteria.",
              "Puhjennut polkupyörän rengas varastossa."
            ],
            "correctAnswer": "Älylukko, joka aukeaa vain oikealla koodilla.",
            "explanation": "Älylukon sisällä on tietokoneohjelma, joka seuraa algoritmia: \"Jos koodi on oikein, avaa ovi. Jos koodi on väärin, pysy kiinni.\" Tekoäly noudattaa näitä tarkkoja sääntöjä askeleittain."
          },
          {
            "id": "konepellin_2_q7",
            "type": "reverse_prompt",
            "question": "Auton tekoälykaiutin sanoo: \"Tervetuloa kyytiin, on maanantai! Tervetuloa kyytiin, on tiistai! Tervetuloa kyytiin, on keskiviikko!\" Mikä koodarin huono sääntö (algoritmi) sai sen menemään näin jumiin?",
            "options": [
              "Toivota kuski tervetulleeksi kyytiin jokaisena viikonpäivänä peräkkäin.",
              "Sano kuskille huomenta aina, kun auto käynnistetään kerran.",
              "Laula hauska laulu, jossa luetellaan viikonpäivät.",
              "Kerro kuskille, mikä viikonpäivä on juuri tänään."
            ],
            "correctAnswer": "Toivota kuski tervetulleeksi kyytiin jokaisena viikonpäivänä peräkkäin.",
            "explanation": "Koneet tottelevat algoritmeja sokeasti. Jos koodari kirjoittaa askeleet huonosti, kone toistaa niitä, vaikka se kuulostaisi meistä ihmisistä todella hölmöltä."
          },
          {
            "id": "konepellin_2_q8",
            "type": "true_false",
            "question": "Jos koodari jättää algoritmista vahingossa yhden tärkeän askeleen pois, auton tekoäly osaa kyllä maalaisjärjellä lisätä sen sinne.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Tekoäly noudattaa ihmisen kirjoittamia tarkkoja sääntöjä ja askeleita. Se ei itse tiedä, mitä puuttuu, vaan tekee täsmälleen sen virheen, jonka koodari vahingossa teki!"
          },
          {
            "id": "konepellin_2_q9",
            "type": "multiple_choice",
            "question": "Miksi koodarin pitää kirjoittaa algoritmin säännöt tekoälylle hyvin tarkasti, pieni askel kerrallaan?",
            "options": [
              "Koska tietokone on huono arvaamaan ihmisten ajatuksia.",
              "Koska tietokoneet pelkäävät pitkiä kirjoituksia.",
              "Koska auton moottori on muuten liian äänekäs.",
              "Koska tietokone pitää salaisista viesteistä."
            ],
            "correctAnswer": "Koska tietokone on huono arvaamaan ihmisten ajatuksia.",
            "explanation": "Tietokone noudattaa tarkkoja sääntöjä askeleittain. Sillä ei ole lainkaan maalaisjärkeä, joten asiat täytyy selittää sille aivan alusta loppuun, käsky käskyltä."
          },
          {
            "id": "konepellin_2_q10",
            "type": "scenario",
            "question": "SKENAARIO: AI van lähestyy risteystä. Koodarin algoritmissa lukee: \"Jos valo on punainen, jarruta. Jos valo on vihreä, aja.\" Mitä auto tekee, jos valo on vahingossa mennyt rikki ja näyttää violettia väriä?",
            "options": [
              "Se ohjelma jumiutuu tai ei osaa tehdä mitään, koska sääntö puuttuu.",
              "Se ajaa kahta kauheammin eteenpäin risteykseen.",
              "Se vaihtaa liikennevalon värin vihreäksi.",
              "Se soittaa heti hätänumeroon apua."
            ],
            "correctAnswer": "Se ohjelma jumiutuu tai ei osaa tehdä mitään, koska sääntö puuttuu.",
            "explanation": "Jos algoritmista puuttuu sääntö tietylle yllätykselle (kuten violetille valolle), kone ei tiedä miten toimia, koska se nojaa vain koodarin etukäteen miettimiin askeleisiin."
          },
          {
            "id": "konepellin_2_q11",
            "type": "drag_drop",
            "question": "Yhdistä tekoälyn toiminnan askeleet, kun pyydät autotallin älyradiota soittamaan musiikkia!",
            "draggables": [
              "Kuuntele mikrofonia",
              "Etsi sana 'soita'",
              "Laita musiikki soimaan"
            ],
            "dropZones": [
              "Askel 1:",
              "Askel 2:",
              "Askel 3:"
            ],
            "correctAnswer": {
              "Kuuntele mikrofonia": "Askel 1:",
              "Etsi sana 'soita'": "Askel 2:",
              "Laita musiikki soimaan": "Askel 3:"
            },
            "explanation": "Algoritmit ovat askeleittain eteneviä käskyjä. Ensin kuunnellaan komento, sitten tietokoneen koodi ymmärtää sen, ja lopuksi suoritetaan itse tehtävä."
          },
          {
            "id": "konepellin_2_q12",
            "type": "multiple_choice",
            "question": "Mitä tekoäly tekee, jos annat sille täydellisen ja virheettömän algoritmin eli ohjeen?",
            "options": [
              "Se suorittaa tehtävän todella nopeasti ja oikein.",
              "Se yrittää keksiä ohjeen tilalle oman versionsa.",
              "Se nukahtaa, koska virheettömyys on sille tylsää.",
              "Se rikkoo autotallin ikkunan vahingossa."
            ],
            "correctAnswer": "Se suorittaa tehtävän todella nopeasti ja oikein.",
            "explanation": "Koneet rakastavat tarkkoja sääntöjä ja askeleita. Jos koodari on kirjoittanut reseptinsä loistavasti, tekoäly toimii upeana ja salamannopeana apurina!"
          },
          {
            "id": "konepellin_2_q13",
            "type": "drag_drop",
            "question": "Järjestä koodarin työpäivä autotallissa, kun hän rakentaa uutta algoritmia auton navigaattorille!",
            "correctAnswer": {
              "Koodari keksii ongelman, joka pitää ratkaista.": "1. vaihe",
              "Koodari kirjoittaa ratkaisuun tarkat säännöt askeleittain.": "2. vaihe",
              "Koodi ladataan auton tekoälyn aivoihin.": "3. vaihe",
              "Auto osaa reitin perille koodin sääntöjen avulla.": "4. vaihe"
            },
            "explanation": "Ennen kuin auto osaa tehdä mitään fiksusti, ihmisen täytyy huomata ongelma ja laatia sille tarkka, askeleittain etenevä ohjekirja eli algoritmi.",
            "draggables": [
              "Koodari keksii ongelman, joka pitää ratkaista.",
              "Koodari kirjoittaa ratkaisuun tarkat säännöt askeleittain.",
              "Koodi ladataan auton tekoälyn aivoihin.",
              "Auto osaa reitin perille koodin sääntöjen avulla."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "konepellin_2_q14",
            "type": "spot_the_ai",
            "question": "Mikä näistä on selvä merkki siitä, että laite seuraa tiukkaa algoritmia eli askeleittain kirjoitettua koodia?",
            "options": [
              "Hahmo vastaa kaikkiin kysymyksiin aloittamalla samalla sanalla.",
              "Hahmo kertoo tänään ihan erilaisen vitsin kuin eilen.",
              "Hahmo käyttää värikkäitä murresanoja puhuessaan.",
              "Hahmo unohtaa jatkuvasti puolet ostoslistasta."
            ],
            "correctAnswer": "Hahmo vastaa kaikkiin kysymyksiin aloittamalla samalla sanalla.",
            "explanation": "Koneellinen, sokea toisto on varma merkki algoritmista! Koodari on asettanut tarkan säännön, että lauseen on alettava tällä yhdellä sanalla joka kerta."
          },
          {
            "id": "konepellin_2_q15",
            "type": "reverse_prompt",
            "question": "AI vanin peruutusavustin alkaa piippaaam kovaäänisesti aina silloin, kun kissa kävelee auton takaa, mutta pysyy hiljaa koirien kohdalla. Mikä koodarin sääntö johti tähän erikoiseen tulokseen?",
            "options": [
              "Jos peruutuskamera näkee kissan, käynnistä piippausäänimerkki.",
              "Piippaa aina todella kovaa, kun mitä tahansa liikkuu auton takana.",
              "Älä piippaa ollenkaan, jos naapurin lemmikit ovat pihalla.",
              "Jos näet kissan tai koiran, soita iloista musiikkia radiosta."
            ],
            "correctAnswer": "Jos peruutuskamera näkee kissan, käynnistä piippausäänimerkki.",
            "explanation": "Koska tekoäly noudattaa ihmisen kirjoittamia tarkkoja sääntöjä, se piippaa vain kissoille, jos koodarin algoritmi on alun perin kirjoitettu reagoimaan juuri ja vain niihin."
          }
        ]
      },
      {
        "id": "konepellin_3",
        "name": "Tekoälyn autokoulu",
        "questions": [
          {
            "id": "konepellin_3_q1",
            "type": "true_false",
            "question": "AI vanin tekoäly oppii peruuttamaan täydellisesti heti ensimmäisellä kerralla, eikä sen tarvitse koskaan harjoitella esimerkkien avulla.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Tekoäly on kuin kuka tahansa autokoululainen! Se tarvitsee valtavasti toistoja ja harjoittelua annettujen esimerkkien avulla oppiakseen asiat kunnolla."
          },
          {
            "id": "konepellin_3_q2",
            "type": "multiple_choice",
            "question": "Kun puhutaan tekoälyn \"koneoppimisesta\", mitä se tarkoittaa autotallin koodarille?",
            "options": [
              "Koodari antaa koneelle esimerkkejä, ja kone oppii harjoittelemalla.",
              "Koodari joutuu lukemaan kaikki maailman kirjat yksin.",
              "Kone oppii ajamaan autoa täysin ilman sähköä.",
              "Kone oppii korjaamaan oikean moottorin jakoavaimella."
            ],
            "correctAnswer": "Koodari antaa koneelle esimerkkejä, ja kone oppii harjoittelemalla.",
            "explanation": "Koneoppimisessa koodari ei kirjoita jokaista pientä sääntöä käsin, vaan antaa tekoälylle valtavasti esimerkkejä. Tekoäly etsii niistä säännöt toistojen ja harjoittelun kautta!"
          },
          {
            "id": "konepellin_3_q3",
            "type": "scenario",
            "question": "SKENAARIO: Haluat opettaa autotallin apurobotin tunnistamaan ruuvimeisselit kuvista. Näytät sille sata kuvaa meisseleistä. Aluksi se arvaa aivan väärin, mutta vähitellen se osuu useammin oikeaan. Miksi robotti muuttuu jatkuvasti paremmaksi?",
            "options": [
              "Koska se harjoittelee jatkuvasti annettujen esimerkkien avulla.",
              "Koska robotti kasvaa vähitellen isommaksi ja vahvemmaksi.",
              "Koska robotti kyllästyy ja katsoo oikean vastauksen netistä.",
              "Koska autotallin valot on vahingossa laitettu kirkkaammalle."
            ],
            "correctAnswer": "Koska se harjoittelee jatkuvasti annettujen esimerkkien avulla.",
            "explanation": "Koneoppiminen vaatii paljon harjoitusta. Jokainen virhe ja onnistuminen on toisto, josta kone oppii esimerkkien avulla hieman lisää, kunnes se on mestari!"
          },
          {
            "id": "konepellin_3_q4",
            "type": "drag_drop",
            "question": "Järjestä AI vanin \"tekoälyn autokoulun\" vaiheet siihen järjestykseen, miten koneoppiminen tapahtuu!",
            "correctAnswer": {
              "Tekoälylle näytetään valtava määrä kuvia ja esimerkkejä liikenteestä.": "1. vaihe",
              "Tekoäly tekee aluksi paljon virheitä ja harjoittelee toistamalla.": "2. vaihe",
              "Tekoäly löytää säännöt esimerkkien joukosta ja oppii asian.": "3. vaihe",
              "Tekoäly osaa lopulta avustaa ajamisessa turvallisesti oikealla tiellä!": "4. vaihe"
            },
            "explanation": "Koneoppimisessa kaikki alkaa esimerkeistä, jatkuu pitkän harjoittelun kautta ja päättyy siihen, että säännöt on viimein opittu luotettavasti.",
            "draggables": [
              "Tekoälylle näytetään valtava määrä kuvia ja esimerkkejä liikenteestä.",
              "Tekoäly tekee aluksi paljon virheitä ja harjoittelee toistamalla.",
              "Tekoäly löytää säännöt esimerkkien joukosta ja oppii asian.",
              "Tekoäly osaa lopulta avustaa ajamisessa turvallisesti oikealla tiellä!"
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "konepellin_3_q5",
            "type": "drag_drop",
            "question": "Miten autokoulussa oppiminen eroaa tekoälyn koneoppimisesta? Yhdistä asiat oikeisiin laatikoihin!",
            "draggables": [
              "Oppii liikennesäännöt lukemalla pienen ohjekirjan",
              "Oppii asiat käymällä läpi miljoonia esimerkkikuvia sadasosasekunnissa",
              "Väsymätön toistamaan ja harjoittelemaan samaa asiaa yökaudet"
            ],
            "dropZones": [
              "Tavallinen oppilas (ihminen)",
              "Tekoäly (koneoppiminen)"
            ],
            "correctAnswer": {
              "Oppii liikennesäännöt lukemalla pienen ohjekirjan": "Tavallinen oppilas (ihminen)",
              "Oppii asiat käymällä läpi miljoonia esimerkkikuvia sadasosasekunnissa": "Tekoäly (koneoppiminen)",
              "Väsymätön toistamaan ja harjoittelemaan samaa asiaa yökaudet": "Tekoäly (koneoppiminen)"
            },
            "explanation": "Ihmisen aivot oppivat kerrasta fiksusti, mutta tekoäly on kone. Se vaatii oppiakseen valtavan määrän esimerkkejä ja väsymätöntä digitaalista harjoittelua!"
          },
          {
            "id": "konepellin_3_q6",
            "type": "spot_the_ai",
            "question": "Kuka näistä oppijoista on tekoäly? Etsi vastaus, joka paljastaa koneoppimisen tavan käyttää valtavasti toistoja.",
            "options": [
              "'Minulle riittää, kun näytät kerran, miten turvavyö laitetaan kiinni.'",
              "'Pelasin ajopeliä miljoona kertaa sekunnissa yötä päivää, ja nyt olen mestari!'",
              "'Haluaisin pitää jo pienen tauon, jotta aivoni saavat levätä hetken.'",
              "'Opin parhaiten, kun käyn isäni kanssa oikealla ajotunnilla oikealla tiellä.'"
            ],
            "correctAnswer": "'Pelasin ajopeliä miljoona kertaa sekunnissa yötä päivää, ja nyt olen mestari!'",
            "explanation": "Koneoppimisessa tekoäly voi toistaa esimerkkejä virtuaalisesti jopa miljoonia kertoja päivässä väsymättä, mihin yksikään ihminen ei pysty."
          },
          {
            "id": "konepellin_3_q7",
            "type": "reverse_prompt",
            "question": "Tekoälyllä on \"autokoulussa\" opetusohjelma. Se näyttää sinulle tuhat kuvaa punaisista ja sinisistä autoista ja lajittelee ne sitten väreittäin täydellisesti. Mikä oppimisohje (prompti) sille annettiin alussa?",
            "options": [
              "Laske jokaisen auton absoluuttinen huippunopeus pelkän nauhoitetun moottorin äänen perusteella.",
              "Tutki näitä esimerkkikuvia ja etsi sääntö, jolla autot voi jakaa kahteen ryhmään värin perusteella.",
              "Piirrä tietokoneella täysin uudenlainen sähköauto, jossa on kirkkaan keltaiset ja pyöreät renkaat.",
              "Kirjoita jännittävä ja mukaansatempaava tarina punaisesta autosta, joka voitti suuren kilpailun."
            ],
            "correctAnswer": "Tutki näitä esimerkkikuvia ja etsi sääntö, jolla autot voi jakaa kahteen ryhmään värin perusteella.",
            "explanation": "Koneoppiminen tarkoittaa sitä, että koneelle annetaan paljon esimerkkejä ja sen tehtäväksi annetaan etsiä sieltä toistuva sääntö (kuten autojen väri) harjoittelemalla!"
          },
          {
            "id": "konepellin_3_q8",
            "type": "true_false",
            "question": "Koneoppimisessa tekoäly ei koskaan tee yhtään virhettä, vaan sen oppiminen on aivan alusta alkaen sataprosenttisen täydellistä.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Päinvastoin! Alussa tekoäly tekee pelkkiä virheitä. Se on vain erittäin nopea harjoittelemaan, joten suurten toistomäärien ja esimerkkien kautta siitä tulee huipputaitava."
          },
          {
            "id": "konepellin_3_q9",
            "type": "multiple_choice",
            "question": "Mitä autotallin koodari tarkoittaa, kun hän sanoo \"kouluttavansa\" tekoälymallia?",
            "options": [
              "Hän opettaa tekoälyä näyttämällä sille valtavasti esimerkkejä ja antamalla sen harjoitella toistoilla.",
              "Hän keskittyy rakentamaan muovista ja metallista pientä leluautoa työpöydällään aina pitkän työpäivän päätteeksi.",
              "Hän yrittää oppia koodaamista lukitsemalla tekoälyn pimeään kaappiin, jotta se ei pääse yllättäen karkaamaan verkkoon.",
              "Hän yrittää vapaapäivänään opettaa omaa aivan oikeaa autoaan hyppäämään korkeiden esteiden yli viereisellä pihalla."
            ],
            "correctAnswer": "Hän opettaa tekoälyä näyttämällä sille valtavasti esimerkkejä ja antamalla sen harjoitella toistoilla.",
            "explanation": "Tekoälyn opettamista toistojen ja esimerkkidatan avulla kutsutaan mallin kouluttamiseksi. Se on koneen oma autokoulu!"
          },
          {
            "id": "konepellin_3_q10",
            "type": "scenario",
            "question": "SKENAARIO: Haluat opettaa AI vanin kameran erottamaan liikennemerkin tavallisesta puusta. Kone on kuitenkin vielä huono arvaamaan, ja se sekoittaa puut jatkuvasti merkkeihin. Miten voit auttaa sen koneoppimista onnistumaan paremmin?",
            "options": [
              "Annan sille paljon enemmän ja monipuolisempia esimerkkikuvia molemmista ja annan sen harjoitella.",
              "Poistan siltä kaikki kamerat, jotta sen ei tarvitse katsella ulos.",
              "Maalaan autotallin puut liikennemerkkien näköisiksi, jotta se ei sekoitu.",
              "Odotan, että tekoäly kasvaa hieman vanhemmaksi ja viisaammaksi."
            ],
            "correctAnswer": "Annan sille paljon enemmän ja monipuolisempia esimerkkikuvia molemmista ja annan sen harjoitella.",
            "explanation": "Koneoppiminen perustuu puhtaasti toistoon ja esimerkkeihin. Jos kone tekee virheitä, se tarvitsee enemmän opetusdataa harjoitellakseen paremmaksi!"
          },
          {
            "id": "konepellin_3_q11",
            "type": "drag_drop",
            "question": "Miten autotallin tekoäly oppii uuden taidon (kuten tunnistamaan polkupyörät tiellä)? Raahaa oppimisen tapahtumat oikeisiin vaiheisiin.",
            "draggables": [
              "Annetaan miljoona esimerkkikuvaa polkupyöristä",
              "Kone harjoittelee aluksi arvaamalla huonosti, onko kuvassa pyörä",
              "Kone korjaa virheitään toistamalla ja harjoittelemalla nopeasti",
              "Kone osaa tunnistaa pyörät kuvista täydellisesti"
            ],
            "dropZones": [
              "Vaihe 1: Polttoaine",
              "Vaihe 2: Kokeilu",
              "Vaihe 3: Oppiminen",
              "Vaihe 4: Lopputulos"
            ],
            "correctAnswer": {
              "Annetaan miljoona esimerkkikuvaa polkupyöristä": "Vaihe 1: Polttoaine",
              "Kone harjoittelee aluksi arvaamalla huonosti, onko kuvassa pyörä": "Vaihe 2: Kokeilu",
              "Kone korjaa virheitään toistamalla ja harjoittelemalla nopeasti": "Vaihe 3: Oppiminen",
              "Kone osaa tunnistaa pyörät kuvista täydellisesti": "Vaihe 4: Lopputulos"
            },
            "explanation": "Koneoppiminen kulkee loogisen polun valtavista esimerkeistä (datasta) sokean arvaamisen ja toistojen kautta varsinaiseen asioiden oppimiseen."
          },
          {
            "id": "konepellin_3_q12",
            "type": "drag_drop",
            "question": "Järjestä AI vanin tekoälyn \"virheistä oppiminen\" järjestykseen. Miten se oppii autokoulussaan välttämään ojassa ajamista virtuaalisessa simulaattorissa?",
            "correctAnswer": {
              "Tekoäly ajaa simulaattorissa vahingossa ojaan ja tekee virheen.": "1. vaihe",
              "Ohjelma antaa miinuspisteitä ojassa ajamisesta (virheestä).": "2. vaihe",
              "Tekoäly harjoittelee uudelleen ja muuttaa hieman reittiään.": "3. vaihe",
              "Tuhansien toistojen jälkeen tekoäly oppii pysymään aina keskellä tietä.": "4. vaihe"
            },
            "explanation": "Tekoäly voi oppia palkintojen ja rangaistusten (kuten miinuspisteiden) avulla. Se yrittää saada parhaat pisteet harjoittelemalla, toistamalla ja kokeilemalla!",
            "draggables": [
              "Tekoäly ajaa simulaattorissa vahingossa ojaan ja tekee virheen.",
              "Ohjelma antaa miinuspisteitä ojassa ajamisesta (virheestä).",
              "Tekoäly harjoittelee uudelleen ja muuttaa hieman reittiään.",
              "Tuhansien toistojen jälkeen tekoäly oppii pysymään aina keskellä tietä."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "konepellin_3_q13",
            "type": "multiple_choice",
            "question": "AI van oppi ajamaan parkkiin autotallissa näyttämällä sille kuvia hyvistä parkkeerauksista. Mitä tapahtuu, kun esimerkkejä (harjoittelukuvia) on todella paljon?",
            "options": [
              "Tekoälyn oppiminen menee huonommaksi ja hitaammaksi.",
              "Tekoäly muuttuu tarkemmaksi ja taitavammaksi tässä tehtävässä.",
              "Auton ovet menevät vahingossa pysyvästi jumiin.",
              "Tekoäly unohtaa kaiken muun, mitä se on koskaan tiennyt."
            ],
            "correctAnswer": "Tekoäly muuttuu tarkemmaksi ja taitavammaksi tässä tehtävässä.",
            "explanation": "Mitä enemmän tekoäly saa erilaisia hyviä esimerkkejä ja toistoja autokouluunsa, sitä viisaammaksi ja tarkemmaksi se pystyy oppimaan koneoppimisessa."
          },
          {
            "id": "konepellin_3_q14",
            "type": "spot_the_ai",
            "question": "Yksi näistä tavoista pelata shakkia automatkalla on selvä tekoälyn koneoppimisen tyyli. Mikä?",
            "options": [
              "Ihminen pohtii hiljaa parasta siirtoa oman elämänkokemuksensa avulla.",
              "Isoveli katsoo oikean siirron salaa shakin taskukirjasta.",
              "Kone oppii shakkia pelaamalla itseään vastaan miljoonia kertoja päivässä.",
              "Pikkusisko siirtää nappulaa, koska se näyttää hänestä hienolta."
            ],
            "correctAnswer": "Kone oppii shakkia pelaamalla itseään vastaan miljoonia kertoja päivässä.",
            "explanation": "Koneoppimisessa ohjelma voidaan laittaa pelaamaan jopa itseään vastaan! Miljoonien nopeiden toistojen kautta se oppii säännöt ja parhaat strategiat täydellisesti."
          },
          {
            "id": "konepellin_3_q15",
            "type": "reverse_prompt",
            "question": "Tekoäly kertoo kuskille ylpeänä: \"Sain täydet 100 pistettä simulaattorin ajokokeessa, koska harjoittelin ajamalla 5000 erilaista reittiä putkeen!\" Millä säännöllä (promptilla) se laitettiin oppimaan?",
            "options": [
              "Käytä koneoppimista: yritä ajaa maaliin. Saat plussaa jos onnistut. Harjoittele esimerkeillä tuhansia kertoja.",
              "Laske matikkaa ja etsi lyhin reitti viivoittimella oikealta paperikartalta.",
              "Näytä ruudulla pelkkää mustaa kuvaa, kun auton avainta käännetään.",
              "Soita iloista musiikkia radiosta aina, kun auto saapuu risteykseen."
            ],
            "correctAnswer": "Käytä koneoppimista: yritä ajaa maaliin. Saat plussaa jos onnistut. Harjoittele esimerkeillä tuhansia kertoja.",
            "explanation": "Kun tekoälylle annetaan säännöt, tavoite (kuten pisteet) ja lupa harjoitella tuhansia kertoja toistoilla esimerkkien avulla, kyseessä on aito koneoppiminen \"autokoulussa\"."
          }
        ]
      },
      {
        "id": "konepellin_4",
        "name": "Tietokoneen aivovoimistelu",
        "questions": [
          {
            "id": "konepellin_4_q1",
            "type": "true_false",
            "question": "AI vanin kojelaudan sisällä on oikeat, biologiset aivot ratkomassa vaikeita pulmia.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Neuroverkko ei ole oikea aivo, vaan tietokoneohjelma. Se on vain rakennettu jäljittelemään ihmisaivojen tapaa yhdistellä asioita toisiinsa verkostona!"
          },
          {
            "id": "konepellin_4_q2",
            "type": "multiple_choice",
            "question": "Mitä \"tietokoneen aivovoimistelu\" eli neuroverkko oikeastaan tarkoittaa?",
            "options": [
              "Tietokone lukee kirjaa ääneen kuskille",
              "Tietokone tekee nopeita fyysisiä jumppaliikkeitä",
              "Tekoäly jäljittelee ihmisaivojen tapaa yhdistellä asioita",
              "Auton aivot tarvitsevat paljon oikeaa unta"
            ],
            "correctAnswer": "Tekoäly jäljittelee ihmisaivojen tapaa yhdistellä asioita",
            "explanation": "Neuroverkko on koodarin rakentama tietokoneohjelma. Se on suunniteltu matkimaan sitä, miten ihmisen aivot yhdistelevät pieniä tiedonmurusia ratkaistakseen suuria ja vaikeita pulmia."
          },
          {
            "id": "konepellin_4_q3",
            "type": "scenario",
            "question": "SKENAARIO: AI vanin kamera huomaa tiellä esteen. Ohjelman yksi solmukohta näkee värin ruskeana, toinen huomaa sarvet ja kolmas pitkät jalat. Neuroverkko yhdistää nämä tiedot sekunnin murto-osassa. Mitä tekoäly päättelee?",
            "options": [
              "Se luulee estettä isoksi liikennemerkiksi.",
              "Se päättelee tien päällä olevan hirven.",
              "Se on varma, että tiellä makaa kaatunut puu.",
              "Se luulee estettä hitaaksi polkupyöräksi."
            ],
            "correctAnswer": "Se päättelee tien päällä olevan hirven.",
            "explanation": "Neuroverkon vahvuus on se, että se osaa poimia monia pieniä yksityiskohtia (kuten väri, sarvet ja jalat) ja yhdistää ne yhdeksi isoksi, järkeväksi lopputulokseksi aivan kuten sinun aivosi!"
          },
          {
            "id": "konepellin_4_q4",
            "type": "drag_drop",
            "question": "Ihmisen aivot ja tekoälyn neuroverkko toimivat hieman samalla tavalla. Yhdistä nämä parit toisiinsa!",
            "draggables": [
              "Oikea aivosolu",
              "Oppiminen koulussa",
              "Aivojen sähköiset hermoradat"
            ],
            "dropZones": [
              "Tietokoneen virtuaalinen solmukohta",
              "Neuroverkon virtuaaliset yhteydet",
              "Koneoppiminen esimerkeillä"
            ],
            "correctAnswer": {
              "Oikea aivosolu": "Tietokoneen virtuaalinen solmukohta",
              "Oppiminen koulussa": "Koneoppiminen esimerkeillä",
              "Aivojen sähköiset hermoradat": "Neuroverkon virtuaaliset yhteydet"
            },
            "explanation": "Tekoälyn neuroverkko on tietokoneen sisällä oleva koodattu \"verkko\". Se on saanut ideansa ja nimensä aivojen sähköisistä verkoista, vaikka se onkin vain ohjelma!"
          },
          {
            "id": "konepellin_4_q5",
            "type": "drag_drop",
            "question": "Järjestä oikeaan järjestykseen, kuinka auton neuroverkko tunnistaa edessä olevan STOP-merkin yhdistelemällä asioita.",
            "correctAnswer": {
              "Kamera huomaa paljon punaista väriä ja valkoista tekstiä.": "1. vaihe",
              "Neuroverkon solmukohdat yhdistävät värin ja kahdeksankulmaisen muodon.": "2. vaihe",
              "Tekoäly vertaa yhdistelmää oppimaansa tietopankkiin liikennemerkeistä.": "3. vaihe",
              "Auto tunnistaa merkin STOP-merkiksi ja ymmärtää jarruttaa.": "4. vaihe"
            },
            "explanation": "Neuroverkko etenee kerroksittain. Ensin se huomaa yksinkertaiset asiat kuten värin, sitten se yhdistelee niistä muotoja, ja lopuksi se pystyy tunnistamaan kokonaisen vaikean kuvan.",
            "draggables": [
              "Kamera huomaa paljon punaista väriä ja valkoista tekstiä.",
              "Neuroverkon solmukohdat yhdistävät värin ja kahdeksankulmaisen muodon.",
              "Tekoäly vertaa yhdistelmää oppimaansa tietopankkiin liikennemerkeistä.",
              "Auto tunnistaa merkin STOP-merkiksi ja ymmärtää jarruttaa."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "konepellin_4_q6",
            "type": "spot_the_ai",
            "question": "Mikä näistä työkaluista käyttää todennäköisimmin \"neuroverkkoa\" eli tietokoneen monimutkaista aivovoimistelua ongelman ratkaisuun?",
            "options": [
              "Auton jarrut, jotka painuvat pohjaan poljinta painamalla.",
              "Laskin, joka kertoo sinulle nopeasti 10 x 10 vastauksen.",
              "Navigaattori, joka tunnistaa puhutun kielen ja puheäänesi painotukset.",
              "Taskulamppu, joka syttyy, kun painat sen kyljessä olevaa nappia."
            ],
            "correctAnswer": "Navigaattori, joka tunnistaa puhutun kielen ja puheäänesi painotukset.",
            "explanation": "Yksinkertaiset koneet tekevät vain yhden asian suoraviivaisesti. Puheen tai kuvien tunnistaminen on niin vaikea pulma, että siihen tarvitaan ihmisaivoja matkivaa monimutkaista neuroverkkoa."
          },
          {
            "id": "konepellin_4_q7",
            "type": "reverse_prompt",
            "question": "Tekoäly antaa sinulle vastauksen: \"Hei! Minä olen tietokoneohjelma, jossa miljoonat pienet digitaaliset solmukohdat tekevät yhteistyötä ja yhdistelevät tietoa, jotta voin ratkoa sinulle todella vaikeita arvoituksia.\" Mikä oli promptisi?",
            "options": [
              "Kerro minulle, kuka on nopein ja paras oikea ihminen maailmassa.",
              "Selitä minulle yksinkertaisesti, mikä on tekoälyn neuroverkko.",
              "Laula minulle jokin laulu aivojen voimistelusta ja jumpasta.",
              "Miten voin vaihtaa auton renkaan turvallisesti kotona?"
            ],
            "correctAnswer": "Selitä minulle yksinkertaisesti, mikä on tekoälyn neuroverkko.",
            "explanation": "Neuroverkot koostuvat valtavasta määrästä solmukohtia, jotka yhdistelevät pikkuruista tietoa toisiinsa saavuttaakseen yhden suuren ja fiksun ratkaisun!"
          },
          {
            "id": "konepellin_4_q8",
            "type": "true_false",
            "question": "Neuroverkko sai nimensä siitä, että se keksittiin alun perin pyydystämään digitaalisia kaloja internetin verkosta.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Nimi \"neuroverkko\" (neural network) tulee biologiasta! Sana viittaa ihmisen aivojen hermosoluihin (neuroneihin) ja niiden muodostamaan sähköiseen verkostoon."
          },
          {
            "id": "konepellin_4_q9",
            "type": "multiple_choice",
            "question": "Miksi autotallin koodari on rakentanut AI vanille neuroverkon pelkän tavallisen laskinohjelman sijaan?",
            "options": [
              "Koska laskinohjelma on liian nopea antamaan oikeita vastauksia.",
              "Koska neuroverkko on täydellinen monimutkaisten asioiden yhdistelemiseen.",
              "Koska tavallinen laskin tarvitsee aina oikeita pattereita toimiakseen.",
              "Koska neuroverkko osaa siivota autotallin roskat omilla käsillään."
            ],
            "correctAnswer": "Koska neuroverkko on täydellinen monimutkaisten asioiden yhdistelemiseen.",
            "explanation": "Tavallinen laskin noudattaa yksinkertaisia sääntöjä, mutta neuroverkko osaa tehdä ihmismäisiä päättelyitä. Se kykenee havaitsemaan outoja reittejä, tunnistamaan lauluja tai lukemaan ihmisten ilmeitä kuvista!"
          },
          {
            "id": "konepellin_4_q10",
            "type": "scenario",
            "question": "SKENAARIO: Olet automatkalla ja ulkona alkaa sataa kaatamalla, aurinko paistaa matalalta ja tiellä on paljon sumua. Tavallinen kamera menee tästä sekaisin. Miten auton \"aivovoimistelevasta\" neuroverkosta on hyötyä tässä tilanteessa?",
            "options": [
              "Se osaa yhdistellä sumeita ja vajaita tietoja tehden silti fiksuja päätelmiä tiestä.",
              "Se soittaa heti aurinkoisen sään tilalle kalliin sääkoneen avulla.",
              "Se poistaa kamerat käytöstä, koska sadepisarat voivat rikkoa ne.",
              "Se käskee sinua laittamaan silmät kiinni ja jatkaa ajamista sokkona."
            ],
            "correctAnswer": "Se osaa yhdistellä sumeita ja vajaita tietoja tehden silti fiksuja päätelmiä tiestä.",
            "explanation": "Ihminen ja ihmismäinen neuroverkko osaavat hahmottaa kokonaisuuksia ja tehdä loogisia arvauksia silloinkin, kun kaikki tieto ei ole aivan selkeää (esimerkiksi huonon sään takia)!"
          },
          {
            "id": "konepellin_4_q11",
            "type": "drag_drop",
            "question": "Neuroverkossa tiedot siirtyvät kerroksesta toiseen ja muuttuvat tarkemmiksi askel askeleelta. Yhdistä neuroverkon kerrokset niiden saamaan tietoon valokuvassa autosta.",
            "draggables": [
              "Tunnistaa vain pelkkiä suoria ja pyöreitä viivoja ja värejä",
              "Yhdistää viivat renkaan ja ikkunan muotoisiksi asioiksi",
              "Päättelee näkemänsä kokonaisuuden perusteella kyseessä olevan auto"
            ],
            "dropZones": [
              "Verkon ensimmäinen kerros:",
              "Verkon keskimmäiset kerrokset:",
              "Verkon viimeinen kerros:"
            ],
            "correctAnswer": {
              "Tunnistaa vain pelkkiä suoria ja pyöreitä viivoja ja värejä": "Verkon ensimmäinen kerros:",
              "Yhdistää viivat renkaan ja ikkunan muotoisiksi asioiksi": "Verkon keskimmäiset kerrokset:",
              "Päättelee näkemänsä kokonaisuuden perusteella kyseessä olevan auto": "Verkon viimeinen kerros:"
            },
            "explanation": "Neuroverkko toimii kerroksittain kuin tuotantolinja. Ensimmäinen kerros näkee vain värejä ja viivoja. Seuraavat kerrokset yhdistelevät näitä viivoja isommiksi muodoiksi, kunnes viimeinen kerros arvaa kokonaisen kuvan!"
          },
          {
            "id": "konepellin_4_q12",
            "type": "drag_drop",
            "question": "Järjestä neuroverkkoja koskevat asiat yksinkertaisimmasta kaikkein monimutkaisimpaan asiaan.",
            "correctAnswer": {
              "Yksi tavallinen plussalasku paperilla": "1. vaihe",
              "Yksinkertainen tietokoneohjelma, joka sytyttää valon": "2. vaihe",
              "Miljoonia asioita kerralla yhdistelevä älykäs neuroverkko": "3. vaihe",
              "Aito, oikea ja elävä ihmisen aivo": "4. vaihe"
            },
            "explanation": "Neuroverkot ovat valtavan edistyneitä työkaluja monimutkaisille pulmille. Ne yrittävät kovasti jäljitellä meidän aitoja aivojamme, jotka ovat yhä maailman ylivoimaisesti älykkäin ja ihmeellisin asia!",
            "draggables": [
              "Yksi tavallinen plussalasku paperilla",
              "Yksinkertainen tietokoneohjelma, joka sytyttää valon",
              "Miljoonia asioita kerralla yhdistelevä älykäs neuroverkko",
              "Aito, oikea ja elävä ihmisen aivo"
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "konepellin_4_q13",
            "type": "multiple_choice",
            "question": "Mikä on neuroverkon ja tavallisen autotallin tiedostolaatikon suurin ero?",
            "options": [
              "Neuroverkko maksaa kymmenen tuhatta euroa enemmän.",
              "Laatikosto pitää asiat erillään, neuroverkko taas yhdistelee kaikkea toisiinsa.",
              "Laatikosto on ohjelmoitu tekemään asioita miljoonia kertoja päivässä.",
              "Neuroverkko on tehty kokonaan puusta ja ruuveista."
            ],
            "correctAnswer": "Laatikosto pitää asiat erillään, neuroverkko taas yhdistelee kaikkea toisiinsa.",
            "explanation": "Tavallinen tiedosto tai kirja pitää asiat erillisillä sivuillaan. Neuroverkon koko voima piilee siinä, että asiat ovat kytkettyinä toisiinsa suurena verkkona, jossa opitaan ristiin uusia yhteyksiä!"
          },
          {
            "id": "konepellin_4_q14",
            "type": "spot_the_ai",
            "question": "AI vanissa on neljä eri ohjelmaa. Vain yksi niistä on rakennettu käyttämällä laajoja neuroverkkoja ihmismäiseen \"aivovoimisteluun\". Mikä se on?",
            "options": [
              "Digitaalinen kello, joka näyttää ajan tarkalleen oikein minuutilleen.",
              "Auton vilkku, joka aktivoituu mekaanisesta napin painalluksesta.",
              "Ääniavustaja, joka ymmärtää epäselvän vitsisi ja nauraa sen mukana.",
              "Lämpömittari, joka kertoo sinulle ulkona olevan asteen verran pakkasta."
            ],
            "correctAnswer": "Ääniavustaja, joka ymmärtää epäselvän vitsisi ja nauraa sen mukana.",
            "explanation": "Vitsin ymmärtäminen ja kielen tulkitseminen vaatii älykästä neuroverkkoa, sillä siinä täytyy yhdistää samanaikaisesti kielen sanoja, äänenpainoja ja piilomerkityksiä."
          },
          {
            "id": "konepellin_4_q15",
            "type": "reverse_prompt",
            "question": "AI vanin ruudulle ilmestyy taidokas kuva jännästä fantasiamaailman autosta, jossa yhdistyvät lohikäärmeen suomut, kilpa-auton renkaat ja avaruusaluksen valot. Mikä kehotus pakotti neuroverkon \"aivovoimistelemaan\"?",
            "options": [
              "Piirrä minulle aivan täydellinen valokuva meidän omasta punaisesta autostamme.",
              "Yhdistele lohikäärmettä, formula-autoa ja avaruusalusta yhdeksi uudeksi kulkuneuvoksi.",
              "Etsi internetistä valokuva vanhasta traktorista ja tulosta se paperille.",
              "Laske matemaattisesti, kuinka kovaa avaruusalukset voivat todellisuudessa lentää."
            ],
            "correctAnswer": "Yhdistele lohikäärmettä, formula-autoa ja avaruusalusta yhdeksi uudeksi kulkuneuvoksi.",
            "explanation": "Yksi neuroverkkojen hauskimmista ja hyödyllisimmistä puolista on se, että niiden laaja asioiden yhdistelykyky mahdollistaa myös aivan uusien, luovien ja mielikuvituksellisten keksintöjen luomisen useasta täysin eri asiasta!"
          }
        ]
      },
      {
        "id": "konepellin_5",
        "name": "Salapoliisin työtä",
        "questions": [
          {
            "id": "konepellin_5_q1",
            "type": "true_false",
            "question": "Auton peruutuskameran tekoäly tunnistaa koiran vilkaisemalla sitä kerran, aivan kuten oikea ihminen tekee.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Tekoäly ei näe asioita eläiminä tai esineinä kuten ihminen. Se tekee salapoliisin työtä ja etsii kuvasta matemaattisia kuvioita ja muotoja tunnistaakseen koiran!"
          },
          {
            "id": "konepellin_5_q2",
            "type": "multiple_choice",
            "question": "Miten AI vanin kamera oppii tunnistamaan tiellä olevan polkupyörän?",
            "options": [
              "Se etsii kuvasta tiettyjä muotoja ja kuvioita.",
              "Se soittaa pyöräilijälle ja kysyy asiaa.",
              "Se haistaa pyörän kumin tuoksun.",
              "Se käyttää sisäänrakennettua kiikaria."
            ],
            "correctAnswer": "Se etsii kuvasta tiettyjä muotoja ja kuvioita.",
            "explanation": "Tekoälyn näkökyky perustuu hahmontunnistukseen. Se etsii kameran kuvasta viivoja, ympyröitä ja värejä, joista se päättelee kyseessä olevan polkupyörä."
          },
          {
            "id": "konepellin_5_q3",
            "type": "scenario",
            "question": "SKENAARIO: Autotallin siivousrobotti yrittää löytää kaikki pyöreät mutterit lattialta. Se kuitenkin kerää vahingossa myös pienet pyöreät lelunapit. Miksi salapoliisi-tekoäly teki tällaisen virheen?",
            "options": [
              "Se etsi vain pyöreää muotoa huomaamatta materiaalia.",
              "Se halusi salaa ommella itselleen paidan.",
              "Se luuli nappeja herkullisiksi karkeiksi.",
              "Se halusi kiusata sinua tahallaan."
            ],
            "correctAnswer": "Se etsi vain pyöreää muotoa huomaamatta materiaalia.",
            "explanation": "Hahmontunnistus on joskus liian yksinkertaista. Jos ohjelma on opetettu etsimään vain pientä ja pyöreää muotoa, se sekoittaa helposti mutterin ja napin toisiinsa!"
          },
          {
            "id": "konepellin_5_q4",
            "type": "drag_drop",
            "question": "Järjestä oikeaan järjestykseen, miten tekoälyn \"salapoliisityö\" etenee, kun se tunnistaa liikennemerkin!",
            "correctAnswer": {
              "Kamera ottaa kuvan edessä olevasta tiestä.": "1. vaihe",
              "Tekoäly etsii kuvasta reunoja ja kirkkaita värejä.": "2. vaihe",
              "Tekoäly yhdistää reunat kolmion muotoiseksi kuvioksi.": "3. vaihe",
              "Tekoäly päättelee muodon olevan kärkikolmio.": "4. vaihe"
            },
            "explanation": "Tekoäly pilkkoo kuvan palasiin. Se löytää ensin pelkkiä reunoja, yhdistää niistä muotoja ja lopuksi tunnistaa kokonaisen kuvion hahmontunnistuksen avulla.",
            "draggables": [
              "Kamera ottaa kuvan edessä olevasta tiestä.",
              "Tekoäly etsii kuvasta reunoja ja kirkkaita värejä.",
              "Tekoäly yhdistää reunat kolmion muotoiseksi kuvioksi.",
              "Tekoäly päättelee muodon olevan kärkikolmio."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "konepellin_5_q5",
            "type": "drag_drop",
            "question": "Yhdistä tekoälyn salapoliisityön vaiheet siihen, mitä se näkee kamerassa! Mitä yksityiskohtia se etsii tunnistaakseen asian?",
            "draggables": [
              "Punainen väri ja pyöreä reuna",
              "Kaksi rengasta ja metalliputkia",
              "Neljä jalkaa ja heiluva häntä"
            ],
            "dropZones": [
              "Hahmontunnistus: Koira",
              "Hahmontunnistus: Polkupyörä",
              "Hahmontunnistus: Nopeusrajoitusmerkki"
            ],
            "correctAnswer": {
              "Punainen väri ja pyöreä reuna": "Hahmontunnistus: Nopeusrajoitusmerkki",
              "Kaksi rengasta ja metalliputkia": "Hahmontunnistus: Polkupyörä",
              "Neljä jalkaa ja heiluva häntä": "Hahmontunnistus: Koira"
            },
            "explanation": "Kone ei ymmärrä sielua tai elämää, mutta se osaa etsiä kuvasta koiralle tai pyörälle tyypillisiä muotoja ja kuvioita tunnistaakseen ne!"
          },
          {
            "id": "konepellin_5_q6",
            "type": "spot_the_ai",
            "question": "Kuka näistä lajittelijoista käyttää tekoälyn hahmontunnistusta autotallissa? Etsi joukosta oikea kone!",
            "options": [
              "Laatikko, joka lajittelee kolikot koon ja painon mukaan putkissa.",
              "Robottikäsi, joka poimii kameralta kaikki s-kirjaimen muotoiset palikat.",
              "Tuuletin, joka puhaltaa kevyet roskat pois muttereiden tieltä.",
              "Magneetti, joka kerää kaikki rautaiset ruuvit talteen lattialta."
            ],
            "correctAnswer": "Robottikäsi, joka poimii kameralta kaikki s-kirjaimen muotoiset palikat.",
            "explanation": "Kirjaimen tai muodon tunnistaminen videokuvasta vaatii edistynyttä kuvioiden etsimistä eli hahmontunnistusta. Muut ovat vain fysiikan lakeihin perustuvia laitteita!"
          },
          {
            "id": "konepellin_5_q7",
            "type": "reverse_prompt",
            "question": "Auton näyttö piirtää keltaisen neliön jokaisen tiellä kävelevän jalankulkijan ympärille. Millä kehotteella (promptilla) tämä hahmontunnistus saatiin päälle?",
            "options": [
              "Etsi kameran kuvasta ihmisen muotoisia hahmoja ja merkitse ne.",
              "Laske kuinka monta autoa ajaa meitä vastaan tiellä.",
              "Maalaa kaikki tien reunan puut ja pensaat keltaisiksi.",
              "Soita varoitusääni aina kun näet vihreän liikennevalon."
            ],
            "correctAnswer": "Etsi kameran kuvasta ihmisen muotoisia hahmoja ja merkitse ne.",
            "explanation": "Tekoälyä voidaan pyytää etsimään jatkuvasti tiettyjä muotoja (kuten jalankulkijoita) videokuvasta. Se käyttää salapoliisintaitojaan erottaakseen ihmisten ääriviivat taustasta!"
          },
          {
            "id": "konepellin_5_q8",
            "type": "true_false",
            "question": "Auton tekoäly on niin taitava salapoliisi, että se osaa päätellä kiven sisällä olevat mineraalit pelkästään katsomalla sen pintaa.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Hahmontunnistus perustuu vain asioihin, jotka kone voi havaita kuvasta, kuten muotoihin ja väreihin. Se ei osaa nähdä pintaa syvemmälle tai taikoa tietoa kiven sisältä!"
          },
          {
            "id": "konepellin_5_q9",
            "type": "multiple_choice",
            "question": "Kun AI van ajaa sumussa tai rankkasateessa, miksi sen kyky löytää kuvioita (hahmontunnistus) voi mennä sekaisin?",
            "options": [
              "Se pelkää kovasti huonoa säätä ja sadetta.",
              "Sumussa muodot ja reunat ovat epäselviä kameralle.",
              "Tekoäly nukahtaa aina yöaikaan automaattisesti.",
              "Auton omat valot häikäisevät tekoälyä sisältäpäin."
            ],
            "correctAnswer": "Sumussa muodot ja reunat ovat epäselviä kameralle.",
            "explanation": "Koska hahmontunnistus etsii nimenomaan selkeitä muotoja, reunoja ja värejä kuvasta, sen on todella vaikea tehdä salapoliisintyötään, jos kuva on sumuinen tai sateen sotkema."
          },
          {
            "id": "konepellin_5_q10",
            "type": "scenario",
            "question": "SKENAARIO: Olet opettanut tekoälyn tunnistamaan kaikki punaiset autot näyttämällä sille vain kuvia punaisista henkilöautoista. Mitä se luultavasti tekee, kun eteen ajaa punainen traktori?",
            "options": [
              "Se tunnistaa traktorin autoksi värin takia.",
              "Se sammuttaa itsensä välittömästi kokonaan.",
              "Se muuttaa traktorin värin punaiseksi vihreäksi.",
              "Se pyytää sinua ajamaan traktorilla kotiin."
            ],
            "correctAnswer": "Se tunnistaa traktorin autoksi värin takia.",
            "explanation": "Koneen salapoliisityö voi mennä pieleen! Jos se on oppinut etsimään vain kuviota \"punainen väri\", se tekee hölmön virheen ja luulee traktoria autoksi."
          },
          {
            "id": "konepellin_5_q11",
            "type": "drag_drop",
            "question": "Mitä erilaisia asioita salapoliisi-tekoäly etsii auttaakseen kuskia? Yhdistä tekoälyn etsimä kuvio ja ajotilanne!",
            "draggables": [
              "Tien reunan valkoiset viivat",
              "Pyöreä muoto ja punainen valo",
              "Numeron muoto kyltissä"
            ],
            "dropZones": [
              "Omien kaistojen välissä pysyminen",
              "Liikennevaloihin pysähtyminen",
              "Oikean nopeusrajoituksen lukeminen"
            ],
            "correctAnswer": {
              "Tien reunan valkoiset viivat": "Omien kaistojen välissä pysyminen",
              "Pyöreä muoto ja punainen valo": "Liikennevaloihin pysähtyminen",
              "Numeron muoto kyltissä": "Oikean nopeusrajoituksen lukeminen"
            },
            "explanation": "Auton kamerat etsivät jatkuvasti erilaisia geometrisia kuvioita ja muotoja (kuten viivoja ja ympyröitä) auttaakseen meitä ajamaan turvallisemmin hahmontunnistuksen avulla!"
          },
          {
            "id": "konepellin_5_q12",
            "type": "drag_drop",
            "question": "Järjestä kasvojentunnistuksen askeleet! Miten AI vanin ovet aukeavat, kun se tunnistaa hahmosi?",
            "correctAnswer": {
              "Kamera nappaa kuvan kasvoistasi autotallin edessä.": "1. vaihe",
              "Tekoäly löytää kuvasta silmiesi ja nenäsi kuvioiden etäisyydet.": "2. vaihe",
              "Ohjelma vertaa näitä mittoja muistiinsa tallennettuun hahmoosi.": "3. vaihe",
              "Kone toteaa kuvion täsmäävän oikeaan kuskiin ja avaa lukot.": "4. vaihe"
            },
            "explanation": "Kasvojentunnistus on todella tarkkaa salapoliisityötä. Se ei tunnista \"sinua\", vaan kasvosi muodostaman tarkan matemaattisen kuvion ja mittasuhteet!",
            "draggables": [
              "Kamera nappaa kuvan kasvoistasi autotallin edessä.",
              "Tekoäly löytää kuvasta silmiesi ja nenäsi kuvioiden etäisyydet.",
              "Ohjelma vertaa näitä mittoja muistiinsa tallennettuun hahmoosi.",
              "Kone toteaa kuvion täsmäävän oikeaan kuskiin ja avaa lukot."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "konepellin_5_q13",
            "type": "multiple_choice",
            "question": "Auton kamera tunnistaa suojatien tiestä. Mitä \"kuviota\" se oikeastaan etsii asvaltista?",
            "options": [
              "Monta valkoista paksua viivaa rinnakkain.",
              "Pieniä mustia ja pyöreitä kiviä.",
              "Kirkkaita punaisia ja vihreitä valoja.",
              "Siksak-kuviota tien keskellä."
            ],
            "correctAnswer": "Monta valkoista paksua viivaa rinnakkain.",
            "explanation": "Tekoälyn hahmontunnistus on usein hyvin yksinkertaista geometristen kuvioiden etsimistä kuvasta. Suojatie on tietokoneen silmissä vain joukko paksuja, valkoisia suorakulmioita vierekkäin!"
          },
          {
            "id": "konepellin_5_q14",
            "type": "spot_the_ai",
            "question": "Kuka keksijöistä kuvailee koneen kykyä visuaaliseen hahmontunnistukseen? Etsi oikea väite!",
            "options": [
              "'Koneeni osaa maistaa, onko auton akussa tarpeeksi virtaa.'",
              "'Laitteeni lukee iltasadun tutkimalla kirjainten muotoja paperilla.'",
              "'Tietokoneeni tietää aina, mitä minä salaa ajattelen.'",
              "'Robottini osaa lentää pilviin ilman mitään moottoria.'"
            ],
            "correctAnswer": "'Laitteeni lukee iltasadun tutkimalla kirjainten muotoja paperilla.'",
            "explanation": "Kirjainten lukeminen (esimerkiksi liikennemerkeistä) on juuri sitä salapoliisityötä, jota tekoäly tekee kuvasta. Se tunnistaa kirjainten muodot ja kuviot muuttaakseen ne oikeaksi tekstiksi!"
          },
          {
            "id": "konepellin_5_q15",
            "type": "reverse_prompt",
            "question": "Tekoäly ilmoittaa innoissaan: \"Löysin kartalta kolme uutta pyöreää kiertoliittymää!\" Mikä sääntö (prompti) laittoi hahmontunnistuksen käyntiin?",
            "options": [
              "Etsi karttakuvasta pelkkiä suoria ja kapeita pikkuteitä.",
              "Tutki satelliittikuvaa ja etsi pyöreitä asfalttikuvioita.",
              "Piirrä kartalle täysin uusia ja isoja risteyksiä.",
              "Poista kartalta kaikki olemassa olevat liikennevalot."
            ],
            "correctAnswer": "Tutki satelliittikuvaa ja etsi pyöreitä asfalttikuvioita.",
            "explanation": "Salapoliisille on annettava tarkka johtolanka! Kun pyydät tekoälyä etsimään kameran kuvasta pyöreitä kuvioita, se pystyy löytämään sieltä tiekartan kaikki kiertoliittymät."
          }
        ]
      },
      {
        "id": "konepellin_6",
        "name": "Väärää bensaa tankissa!",
        "questions": [
          {
            "id": "konepellin_6_q1",
            "type": "true_false",
            "question": "Tekoäly on aina sataprosenttisen reilu ja oikeudenmukainen kaikkia kohtaan, riippumatta siitä mitä sille on opetettu.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Tekoäly ei ole automaattisesti reilu. Jos sen oppima tieto (data) on epäreilua tai puutteellista, tekoäly oppii myös tekemään epäreiluja päätöksiä eli siihen tulee \"vinouma\"."
          },
          {
            "id": "konepellin_6_q2",
            "type": "multiple_choice",
            "question": "Autotallin lajittelurobottia on opetettu siivoamaan työkaluja vain sinisten työkalujen kuvilla. Mitä robotti tekee, kun se näkee punaisen vasaran?",
            "options": [
              "Se lajittelee sen välittömästi oikeaan työkalupakkiin.",
              "Se ohittaa sen tai heittää sen roskiin kokonaan.",
              "Se maalaa vasaran punaiseksi jotta se näyttää paremmalta.",
              "Se menee kysymään koodarilta uusia ohjeita työhön."
            ],
            "correctAnswer": "Se ohittaa sen tai heittää sen roskiin kokonaan.",
            "explanation": "Kun tekoälyn tankkiin laitetaan \"väärää bensaa\" (vain sinisten työkalujen kuvia), sille syntyy vinouma. Se ei enää ymmärrä, että punainenkin esine voi olla työkalu!"
          },
          {
            "id": "konepellin_6_q3",
            "type": "scenario",
            "question": "SKENAARIO: AI vanin tekoälynavigaattoria opetettiin ajamaan vain ja ainoastaan kesäisillä, kuivilla ja aurinkoisilla teillä. Nyt lähdette talvilomalle Lappiin. Miksi tekoälyn on todella vaikea ja vaarallinen ajaa lumessa?",
            "options": [
              "Koska siltä puuttuu kokonaan tieto ja kokemus lumisista teistä.",
              "Koska tekoälyn virtapiirit jäätyvät helposti pakkasella.",
              "Koska se on oppinut, että talvella autot nukkuvat aina.",
              "Koska aurinkolasit estävät kameran näkyvyyden talvella."
            ],
            "correctAnswer": "Koska siltä puuttuu kokonaan tieto ja kokemus lumisista teistä.",
            "explanation": "Tekoäly osaa toimia vain sen datan perusteella, jota se on nähnyt. Jos se ei ole koskaan \"syönyt\" dataa lumesta, talviajaminen on sille täysin vieras ja mahdoton asia!"
          },
          {
            "id": "konepellin_6_q4",
            "type": "drag_drop",
            "question": "Kuinka tekoälyn epäreilu päätös syntyy? Järjestä tapahtumat syystä seuraukseen!",
            "correctAnswer": {
              "Koodari kerää vahingossa vain yksipuolista opetusdataa.": "1. vaihe",
              "Tekoäly oppii ja harjoittelee tämän huonon datan avulla.": "2. vaihe",
              "Tekoälyn mieleen syntyy sääntö, joka on epäreilu (vinouma).": "3. vaihe",
              "Kone tekee oikeassa elämässä todella hölmön ja väärän päätöksen.": "4. vaihe"
            },
            "explanation": "Vinoumat eli harhakäsitykset alkavat aina huonosta datasta (väärästä bensasta). Jos opetus on vinossa, myös koneen oppima sääntö ja lopullinen toiminta ovat vinossa!",
            "draggables": [
              "Koodari kerää vahingossa vain yksipuolista opetusdataa.",
              "Tekoäly oppii ja harjoittelee tämän huonon datan avulla.",
              "Tekoälyn mieleen syntyy sääntö, joka on epäreilu (vinouma).",
              "Kone tekee oikeassa elämässä todella hölmön ja väärän päätöksen."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "konepellin_6_q5",
            "type": "drag_drop",
            "question": "Yhdistä tekoälylle syötetty huono data ja siitä seurannut hölmö vinouma (virhepäätös)!",
            "draggables": [
              "Kuvia vain isoista rekoista",
              "Ääniä vain aikuisilta miehiltä",
              "Kuvia vain aurinkoisista teistä"
            ],
            "dropZones": [
              "Auto jarruttaa sadepisaroiden takia",
              "Ääniohjaus ei tottele lasten ääniä",
              "Kamera ei tunnista pientä mopoa"
            ],
            "correctAnswer": {
              "Kuvia vain isoista rekoista": "Kamera ei tunnista pientä mopoa",
              "Ääniä vain aikuisilta miehiltä": "Ääniohjaus ei tottele lasten ääniä",
              "Kuvia vain aurinkoisista teistä": "Auto jarruttaa sadepisaroiden takia"
            },
            "explanation": "Tekoäly sokeutuu asioille, joita se ei ole koskaan nähnyt tai kuullut. Monipuolinen ja rikas data on supertärkeää, jotta kone toimii fiksusti kaikissa tilanteissa!"
          },
          {
            "id": "konepellin_6_q6",
            "type": "spot_the_ai",
            "question": "Mikä näistä tilanteista on selvä esimerkki tekoälyn vinoumasta, joka johtuu huonosta opetusdatasta?",
            "options": [
              "Kamera tunnistaa nopeusrajoituksen oikein sateella ja paisteella.",
              "Älylukko aukeaa kaikille niille perheenjäsenille, joilla on avain.",
              "Auto suostuu käynnistymään vain, jos kuskilla on lippalakki päässä.",
              "Radio soittaa automaattisesti kaikki suosituimmat pop-kappaleet."
            ],
            "correctAnswer": "Auto suostuu käynnistymään vain, jos kuskilla on lippalakki päässä.",
            "explanation": "Tämä on klassinen vinouma! Jos autoa on koeajettu vain lippalakkia käyttävien koodarien toimesta, tekoäly luulee vahingossa, että lippis on pakollinen ehto auton ajamiseen."
          },
          {
            "id": "konepellin_6_q7",
            "type": "reverse_prompt",
            "question": "Pyydät tekoälyä piirtämään kuvan \"lääkäristä\", ja se piirtää sinulle aina kuvan harmaahiuksisesta miehestä. Millä huonolla datalla tekoäly on alun perin opetettu?",
            "options": [
              "Opetuksessa käytettiin kuvia vain miehistä lääkärintakeissa.",
              "Opetuksessa käytettiin paljon kuvia naisista ja miehistä sairaalassa.",
              "Opetuksessa käytettiin piirroksia pelkistä stetoskoopeista ja lääkkeistä.",
              "Opetuksessa käytettiin kuvia lapsista leikkimässä sairaalaa autotallissa."
            ],
            "correctAnswer": "Opetuksessa käytettiin kuvia vain miehistä lääkärintakeissa.",
            "explanation": "Tekoäly kopioi ihmisten maailmaa sellaisena kuin se näytetään sille datassa. Jos datassa on vain miehiä, tekoäly ei ymmärrä, että myös naiset ovat aivan yhtä lailla lääkäreitä!"
          },
          {
            "id": "konepellin_6_q8",
            "type": "true_false",
            "question": "Jos AI vanin tekoäly tekee epäreilun päätöksen, se tekee sen siksi, että sillä on ilkeä ja paha luonne.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Tekoälyllä ei ole lainkaan luonnetta tai omia tunteita! Se tekee epäreiluja päätöksiä vain siksi, että koodari on vahingossa syöttänyt sille vinoutunutta tai puutteellista opetusdataa."
          },
          {
            "id": "konepellin_6_q9",
            "type": "multiple_choice",
            "question": "AI vanin musiikkisoitin osaa suositella vain klassista viulumusiikkia, ja se ärsyttää sinua. Miten koodari voi korjata tämän vinouman?",
            "options": [
              "Antamalla tekoälylle rangaistukseksi pitkän ajokiellon.",
              "Ruokkimalla tekoälyä datalla kaikista eri musiikkityyleistä.",
              "Sammuttamalla soittimen aina, kun se soittaa viulua.",
              "Ostamalla täysin uuden kaiuttimen auton takapenkille."
            ],
            "correctAnswer": "Ruokkimalla tekoälyä datalla kaikista eri musiikkityyleistä.",
            "explanation": "Paras tapa korjata \"väärä bensa\" on kaataa tankkiin parempaa bensaa! Antamalla tekoälylle monipuolista opetusdataa, sen putkiaivoinen vinouma korjaantuu."
          },
          {
            "id": "konepellin_6_q10",
            "type": "scenario",
            "question": "SKENAARIO: Olet koodannut AI vanille apurobotin, joka ojentaa sinulle juomapullon pyynnöstä. Robotti kuitenkin ojentaa pullon aina suoraan aikuisen isäsi käteen, vaikka sinä pyysit sitä. Mikä meni pieleen opetuksessa?",
            "options": [
              "Robottia opetettiin tunnistamaan vain aikuisten, pitkien ihmisten kasvot.",
              "Robotti tietää salaa, että isäsi on oikeasti todella janoisempi.",
              "Robotti kyllästyi työhönsä ja haluaa tehdä asiat tahallaan väärin.",
              "Robotti pelkää, että sinä pudotat pullon vahingossa auton lattialle."
            ],
            "correctAnswer": "Robottia opetettiin tunnistamaan vain aikuisten, pitkien ihmisten kasvot.",
            "explanation": "Tämä on yleinen tekoälyn vinouma! Jos opetuksessa on käytetty vain aikuisten kuvia, laite ei \"näe\" lapsia kunnolla, ja siksi se jättää sinut huomiotta. Data oli puutteellista!"
          },
          {
            "id": "konepellin_6_q11",
            "type": "drag_drop",
            "question": "Lajittele nämä asiat autotallissa hyvään dataan (jolla saa fiksut tulokset) ja vinoutuneeseen dataan (jolla tulee epäreilu tekoäly)!",
            "draggables": [
              "Miljoona kuvaa kaikista erikokoisista koirista",
              "Kuvia vain pienistä ja valkoisista koirista",
              "Ainoastaan punaisia autoja sisältävä video",
              "Videoita kaiken värisistä ja mallisista autoista"
            ],
            "dropZones": [
              "Terveellinen ja reilu opetusdata",
              "Vinoutunut ja epäreilu opetusdata"
            ],
            "correctAnswer": {
              "Miljoona kuvaa kaikista erikokoisista koirista": "Terveellinen ja reilu opetusdata",
              "Videoita kaiken värisistä ja mallisista autoista": "Terveellinen ja reilu opetusdata",
              "Kuvia vain pienistä ja valkoisista koirista": "Vinoutunut ja epäreilu opetusdata",
              "Ainoastaan punaisia autoja sisältävä video": "Vinoutunut ja epäreilu opetusdata"
            },
            "explanation": "Monipuolinen tieto tekee tekoälystä viisaan. Yksipuolinen ja rajoittunut \"väärä bensa\" tekee koneesta tyhmän ja sokean erilaisuudelle."
          },
          {
            "id": "konepellin_6_q12",
            "type": "drag_drop",
            "question": "Koodari huomaa, että AI vanin tekoäly on epäreilu, ja haluaa korjata asian. Järjestä korjausoperaation askeleet autotallissa!",
            "correctAnswer": {
              "Koodari huomaa auton tekevän vinoutuneita ja hölmöjä päätöksiä.": "1. vaihe",
              "Koodari tutkii tekoälyn saamaa dataa ja löytää sieltä yksipuolisen virheen.": "2. vaihe",
              "Koodari lisää opetusdataan paljon erilaisia ja reilumpia esimerkkejä.": "3. vaihe",
              "Tekoäly oppii uudelleen ja toimii jatkossa reilusti kaikkia kohtaan.": "4. vaihe"
            },
            "explanation": "Vinoumat eivät ole onneksi ikuisia. Kun huomaamme tekoälyn ajattelevan \"vinosti\", voimme korjata ongelman antamalla sille parempaa, kattavampaa ja monipuolisempaa polttoainetta!",
            "draggables": [
              "Koodari huomaa auton tekevän vinoutuneita ja hölmöjä päätöksiä.",
              "Koodari tutkii tekoälyn saamaa dataa ja löytää sieltä yksipuolisen virheen.",
              "Koodari lisää opetusdataan paljon erilaisia ja reilumpia esimerkkejä.",
              "Tekoäly oppii uudelleen ja toimii jatkossa reilusti kaikkia kohtaan."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "konepellin_6_q13",
            "type": "multiple_choice",
            "question": "Mitä \"algoritminen vinouma\" tarkoittaa AI vanin tapauksessa?",
            "options": [
              "Sitä, että auton toinen eturengas on tyhjempi kuin toinen.",
              "Sitä, että tekoäly suosii jotain asiaa toisen kustannuksella huonon datan takia.",
              "Sitä, että auton katto on asennettu tehtaalla hieman vinoon asentoon.",
              "Sitä, että koodari kirjoitti ohjelman istuessaan vinossa tuolissaan."
            ],
            "correctAnswer": "Sitä, että tekoäly suosii jotain asiaa toisen kustannuksella huonon datan takia.",
            "explanation": "Algoritminen vinouma tarkoittaa harhaa tai ennakkoluuloa ohjelmassa. Kone alkaa esimerkiksi suosia yhtä automallia tai ihmistyyppiä, koska se on saanut niistä liikaa tai väärää tietoa."
          },
          {
            "id": "konepellin_6_q14",
            "type": "spot_the_ai",
            "question": "Kolme näistä on oikeita, fyysisiä auton vikoja. Mikä on tekoälyn \"väärästä bensasta\" eli huonosta datasta johtuva ohjelmistovika?",
            "options": [
              "Auton moottori pitää pahaa yskivää ääntä kiihdyttäessä.",
              "Pakoputkesta tulee todella paljon mustaa savua ulos.",
              "Ohjauspyörä puoltaa voimakkaasti koko ajan oikealle.",
              "Kamera varoittaa jatkuvasti postilaatikoista, luullen niitä ihmisiksi."
            ],
            "correctAnswer": "Kamera varoittaa jatkuvasti postilaatikoista, luullen niitä ihmisiksi.",
            "explanation": "Jos kamera ei erota postilaatikkoa ihmisestä, tekoälyn kuvien opetusdata on ollut todella huonoa ja vinoutunutta! Se on laitteen \"aivoissa\" oleva ongelma, ei fyysinen vika."
          },
          {
            "id": "konepellin_6_q15",
            "type": "reverse_prompt",
            "question": "Auton tekoäly tulostaa iloisena viestin: \"Tässä on lista Suomen suurimmista kaupungeista: 1. Turku, 2. Turku, 3. Turku, 4. Turku.\" Millä \"väärällä bensalla\" tekoälyä oli vahingossa opetettu?",
            "options": [
              "Sille syötettiin vahingossa satoja vanhoja historiankirjoja Tampereelta.",
              "Opetusdatana käytettiin vain turkulaisten kirjoittamia uutisia ja blogeja.",
              "Sille annettiin koko maailman uutiset kaikilla eri kielillä.",
              "Sille syötettiin tilastoja, joissa listattiin maailman nopeimpia eläimiä."
            ],
            "correctAnswer": "Opetusdatana käytettiin vain turkulaisten kirjoittamia uutisia ja blogeja.",
            "explanation": "Jos kaikki tekoälyn näkemä maailman tieto on peräisin vain yhdestä kaupungista, sille syntyy valtava vinouma. Se alkaa luulla, että koko maailmassa ei ole mitään muuta olemassa kuin Turku!"
          }
        ]
      },
      {
        "id": "konepellin_7",
        "name": "G. Erikoiskoe – Yskivä Moottori",
        "questions": [
          {
            "id": "konepellin_7_q1",
            "type": "true_false",
            "question": "Tekoälymoottori ei toimi ilman valtavaa määrää tietoa, kuten tekstejä ja kuvia, jotka ovat sen polttoainetta.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Oikein",
            "explanation": "Data on tekoälyn oikea polttoaine. Ilman sille syötettyä valtavaa määrää esimerkkejä, tekoäly ei pysty toimimaan tai oppimaan uusia asioita."
          },
          {
            "id": "konepellin_7_q2",
            "type": "multiple_choice",
            "question": "Mitä tarkoitetaan \"koneoppimisella\" tekoälyn autokoulussa?",
            "options": [
              "Koodari koodaa ja kirjoittaa koneelle jokaisen tarvittavan tiedon ja säännön täysin käsin.",
              "Kone oppii harjoittelemalla ja toistojen avulla valtavasta määrästä esimerkkejä.",
              "Kone pystyy oppimaan uusia asioita vain lukemalla yhden pienen ohjekirjan kokonaan läpi.",
              "Kone on täysin itsenäinen ja korjaa rikkoontuneen fyysisen auton moottorin täysin itse."
            ],
            "correctAnswer": "Kone oppii harjoittelemalla ja toistojen avulla valtavasta määrästä esimerkkejä.",
            "explanation": "Koneoppimisessa tekoäly harjoittelee virtuaalisesti jopa miljoonia kertoja päivässä. Esimerkkien (datan) avulla se löytää säännöt toistamalla."
          },
          {
            "id": "konepellin_7_q3",
            "type": "scenario",
            "question": "SKENAARIO: AI vanin kamera on opetettu tunnistamaan autoja antamalla sille dataa vain punaisista autoista. Ette ajaa sininen auto. Miksi tekoäly ei tunnista sitä?",
            "options": [
              "Datassa oli vinouma (yksipuolista tietoa), joten kone tekee väärän päätöksen.",
              "Koneen silmät ovat rikki.",
              "Sininen väri on koneille mahdoton nähdä.",
              "Tekoäly haluaa tahallaan suosia punaisia autoja."
            ],
            "correctAnswer": "Datassa oli vinouma (yksipuolista tietoa), joten kone tekee väärän päätöksen.",
            "explanation": "Jos tekoälyn polttoaine (data) on huonoa tai yksipuolista, syntyy vinouma. Kone oppii epäreilun säännön ja tekee sen takia hölmöjä päätöksiä tosielämässä!"
          },
          {
            "id": "konepellin_7_q4",
            "type": "drag_drop",
            "question": "Järjestä tekoälyn neuroverkon aivovoimistelu! Miten se päättelee näkemänsä STOP-merkin?",
            "correctAnswer": {
              "Kamera huomaa paljon punaista väriä ja valkoista tekstiä.": "1. vaihe",
              "Neuroverkon solmukohdat yhdistävät värin kahdeksankulmaiseen muotoon.": "2. vaihe",
              "Tekoäly vertaa yhdistelmää tietopankkiinsa ja ymmärtää jarruttaa.": "3. vaihe"
            },
            "explanation": "Neuroverkko jäljittelee ihmisaivoja. Se yhdistelee tietoja kerroksittain pienistä viivoista ja väreistä aina suuriin ja vaikeisiin kokonaisuuksiin asti.",
            "draggables": [
              "Kamera huomaa paljon punaista väriä ja valkoista tekstiä.",
              "Neuroverkon solmukohdat yhdistävät värin kahdeksankulmaiseen muotoon.",
              "Tekoäly vertaa yhdistelmää tietopankkiinsa ja ymmärtää jarruttaa."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe"
            ]
          },
          {
            "id": "konepellin_7_q5",
            "type": "drag_drop",
            "question": "Yhdistä konehuoneen termit oikeisiin \"leipomisen\" vastineisiin!",
            "draggables": [
              "Jauhot ja sokerit (Polttoaine)",
              "Reseptikirja (Tarkat askeleet)"
            ],
            "dropZones": [
              "Data",
              "Algoritmi"
            ],
            "correctAnswer": {
              "Jauhot ja sokerit (Polttoaine)": "Data",
              "Reseptikirja (Tarkat askeleet)": "Algoritmi"
            },
            "explanation": "Data on tekoälyn raaka-aine eli oppimateriaali. Algoritmi taas on ihmisen kirjoittama tarkka sääntölista ja askelmerkki, jota kone sokeasti noudattaa."
          },
          {
            "id": "konepellin_7_q6",
            "type": "spot_the_ai",
            "question": "Mikä näistä on selvä esimerkki tekoälyn hahmontunnistuksen salapoliisityöstä kameran avulla?",
            "options": [
              "Magneetti kerää lattialta rautaruuvit.",
              "Laskin laskee nopeasti 10 x 10.",
              "Auto löytää kameran kuvasta tien reunan valkoiset viivat.",
              "Tuuletin puhaltaa roskat sivuun."
            ],
            "correctAnswer": "Auto löytää kameran kuvasta tien reunan valkoiset viivat.",
            "explanation": "Hahmontunnistus perustuu siihen, että kone etsii kuvasta geometrisiä kuvioita, värejä ja reunoja (kuten viivoja tai ympyröitä) auttaakseen meitä ymmärtämään ympäristöä."
          },
          {
            "id": "konepellin_7_q7",
            "type": "reverse_prompt",
            "question": "Tekoäly antaa kuskille pöhkön ohjeen: \"Omenat ovat sinisiä ja suolaisia.\" Millä huonolla datalla kone oli vahingossa opetettu?",
            "options": [
              "Datana käytettiin kirjaa, jossa omenat oli värjätty sinisiksi ja suolattu.",
              "Datana käytettiin kuvia punaisista omenapuista.",
              "Datana käytettiin vain luontodokumentteja.",
              "Datana käytettiin oikeita reseptejä."
            ],
            "correctAnswer": "Datana käytettiin kirjaa, jossa omenat oli värjätty sinisiksi ja suolattu.",
            "explanation": "Sääntö \"roskaa sisään, roskaa ulos\" pätee tässä! Tekoäly uskoo datan sokeasti. Jos syötetty tieto on väärää, myös koneen antamat vastaukset ovat vääriä."
          },
          {
            "id": "konepellin_7_q8",
            "type": "true_false",
            "question": "Jos koodari jättää algoritmista vahingossa askeleen pois, tekoäly osaa kyllä maalaisjärjellään lisätä sen sinne.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Tekoäly noudattaa algoritmin askeleita täysin sokeasti. Jos koodari tekee virheen, kone toistaa täsmälleen tuon saman virheen, koska sillä ei ole omaa maalaisjärkeä."
          },
          {
            "id": "konepellin_7_q9",
            "type": "multiple_choice",
            "question": "Miksi koodari ei käytä tavallista laskinohjelmaa kuvien tunnistamiseen, vaan rakentaa neuroverkon?",
            "options": [
              "Neuroverkko on yksinkertainen ohjelma, jota käytetään silloin, kun kone vaatii vähemmän virtaviivaista sähköä.",
              "Tavallinen laskin noudattaa yksinkertaisia sääntöjä, mutta neuroverkko osaa tehdä ihmismäisiä päättelyitä ja yhdistellä asioita.",
              "Laskinohjelma tekee laskutoimitukset aivan liian nopeasti, minkä vuoksi sen rinnalla käytetään hidastavaa neuroverkkoa.",
              "Neuroverkko on vanhanaikainen ja kokonaan puusta rakennettu laite, jolla ihmiset ratkoivat vaikeita pulmia jo aiemmin."
            ],
            "correctAnswer": "Tavallinen laskin noudattaa yksinkertaisia sääntöjä, mutta neuroverkko osaa tehdä ihmismäisiä päättelyitä ja yhdistellä asioita.",
            "explanation": "Pulmat, kuten puheen tai kuvien tunnistaminen, ovat niin monimutkaisia, että niihin tarvitaan ihmisen aivojen hermoverkkoja matkivaa tekoälyohjelmaa."
          },
          {
            "id": "konepellin_7_q10",
            "type": "scenario",
            "question": "SKENAARIO: Haluat opettaa robotin tunnistamaan lumisateen. Riittääkö sille yksi ainoa valokuva lumisateesta?",
            "options": [
              "Kyllä, yksi kuva riittää aivan hyvin.",
              "Ei, se tarvitsee tuhansia erilaisia kuvia oppiakseen kunnolla.",
              "Kyllä, jos kuva on todella iso.",
              "Ei, se tarvitsee videon auringonpaisteesta."
            ],
            "correctAnswer": "Ei, se tarvitsee tuhansia erilaisia kuvia oppiakseen kunnolla.",
            "explanation": "Ihminen voi oppia kerrasta, mutta tekoälyn \"autokoulu\" (koneoppiminen) vaatii valtavan vuoren monipuolista dataa, jotta kone oppii säännön luotettavasti."
          }
        ]
      }
    ]
  },
  {
    "id": "digiturva",
    "name": "Digiturva",
    "subcategories": [
      {
        "id": "digiturva_1",
        "name": "AI vanin turvalukot",
        "questions": [
          {
            "id": "digiturva_1_q1",
            "type": "true_false",
            "question": "Vahva ja turvallinen salasana AI vanin tietokoneeseen on aina pelkkä oma etunimesi, koska sen muistaa itse parhaiten.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Oma etunimi on liian helppo arvata! Vahva salasana on kuin auton turvalukko: sen pitää olla pitkä, monimutkainen ja vain sinun tiedossasi."
          },
          {
            "id": "digiturva_1_q2",
            "type": "multiple_choice",
            "question": "Mikä näistä on paras \"turvalukko\" eli salasana autotallin älyovelle?",
            "options": [
              "salasana123",
              "Kissa1!",
              "PunainenAutoAjaaKovaa99!",
              "123456"
            ],
            "correctAnswer": "PunainenAutoAjaaKovaa99!",
            "explanation": "Mitä pidempi salasana, sitä vahvempi turvalukko! Lause, jossa on isoja ja pieniä kirjaimia sekä numeroita ja erikoismerkkejä, on todella turvallinen."
          },
          {
            "id": "digiturva_1_q3",
            "type": "scenario",
            "question": "SKENAARIO: Pelaat automatkalla kivaa peliä puhelimella. Yhtäkkiä pelin chatissa \"PeliMestari2000\" pyytää tilisi salasanaa, jotta hän voi antaa sinulle ilmaisen superauton. Mitä teet?",
            "options": [
              "Annan salasanan heti, koska haluan superauton.",
              "En koskaan anna salasanaani kenellekään vieraalle.",
              "Annan salasanan, mutta kerron vain puolet siitä.",
              "Kysyn salasanan kaverilta ja annan sen hänelle."
            ],
            "correctAnswer": "En koskaan anna salasanaani kenellekään vieraalle.",
            "explanation": "Et antaisi AI vanin avaimia oikealle maantierosvollekaan! Salasanat pidetään aina ominaan, eikä niitä jaeta edes ystävällisille tyypeille netissä."
          },
          {
            "id": "digiturva_1_q4",
            "type": "drag_drop",
            "question": "Järjestä nämä salasanat heikoimmasta (helpoin arvata) vahvimpaan (turvallisin turvalukko)! Aloita heikoimmasta.",
            "correctAnswer": {
              "auto": "1. vaihe",
              "Auto123": "2. vaihe",
              "SininenAutoMeneeKovaa!": "3. vaihe",
              "S1n!nen@ut0MeneeTodellaK0v@@99!": "4. vaihe"
            },
            "explanation": "Yksi sana on aivan liian helppo arvata. Numerot ja erikoismerkit parantavat sitä hieman, mutta pitkä ja monimutkainen salalause on ehdottomasti vahvin lukko!",
            "draggables": [
              "auto",
              "Auto123",
              "SininenAutoMeneeKovaa!",
              "S1n!nen@ut0MeneeTodellaK0v@@99!"
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "digiturva_1_q5",
            "type": "drag_drop",
            "question": "Yhdistä salasanan ominaisuudet oikeaan laatikkoon! Kumpi on hyvän turvalukon merkki ja kumpi huonon?",
            "draggables": [
              "Oma etunimi ja syntymävuosi",
              "Helppo kaikkien arvata",
              "Yli 12 merkkiä pitkä salasana",
              "Sisältää erikoismerkin kuten ! tai ?"
            ],
            "dropZones": [
              "Vahva turvalukko",
              "Heikko ja huono lukko"
            ],
            "correctAnswer": {
              "Yli 12 merkkiä pitkä salasana": "Vahva turvalukko",
              "Sisältää erikoismerkin kuten ! tai ?": "Vahva turvalukko",
              "Oma etunimi ja syntymävuosi": "Heikko ja huono lukko",
              "Helppo kaikkien arvata": "Heikko ja huono lukko"
            },
            "explanation": "Hyvä salasana on pitkä ja sisältää erikoismerkkejä. Henkilökohtaiset asiat, kuten oma nimi tai syntymävuosi, ovat rosvojen helppo arvata."
          },
          {
            "id": "digiturva_1_q6",
            "type": "spot_the_ai",
            "question": "Kuka näistä digiapureista yrittää neuvoa sinulle fiksusti oikean tavan käsitellä salasanoja?",
            "options": [
              "'Kirjoita salasana isolla tussilla autotallin seinään, jotta se ei unohdu.'",
              "'Laita sama salasana kaikkiin peleihin ja laitteisiin.'",
              "'Käytä salasananhallintaohjelmaa, se on kuin turvallinen tallelokero avaimille.'",
              "'Kerro salasanasi parhaalle kaverillesi varmuuden vuoksi.'"
            ],
            "correctAnswer": "'Käytä salasananhallintaohjelmaa, se on kuin turvallinen tallelokero avaimille.'",
            "explanation": "Salasananhallintaohjelma eli \"salasanamanageri\" on oikea ja turvallinen tapa säilyttää vahvoja salasanoja! Niitä ei koskaan kirjoiteta seinille tai kerrota edes kavereille."
          },
          {
            "id": "digiturva_1_q7",
            "type": "reverse_prompt",
            "question": "Pyysit tekoälyä auttamaan salasanan kanssa, ja se antoi vastauksen: \"Tässä on 15 merkkiä pitkä turvallinen sarja: K8!mP9@xL2#vQ5z\". Mikä oli alkuperäinen pyyntösi (promptisi)?",
            "options": [
              "Etsi netistä jonkun toisen ihmisen oikea salasana.",
              "Keksi minulle älyttömän heikko salasana, jonka muistan aina.",
              "Luo minulle erittäin vahva ja satunnainen salasana.",
              "Miten pystyn murtamaan autotallin älylukon?"
            ],
            "correctAnswer": "Luo minulle erittäin vahva ja satunnainen salasana.",
            "explanation": "Tekoäly on loistava apulainen keksimään todella vaikeita, vahvoja ja satunnaisia salasanoja, joita digirosvojen on mahdoton arvata!"
          },
          {
            "id": "digiturva_1_q8",
            "type": "true_false",
            "question": "On täysin turvallista käyttää täsmälleen samaa \"salasana123\" -turvalukkoa puhelimessa, pelitilillä ja sähköpostissa yhtä aikaa.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Jos käytät samaa avainta joka paikkaan, maantierosvo pääsee sisään aivan kaikkialle, jos hän arvaa salasanasi kerran! Käytä aina eri salasanaa tärkeissä tileissä."
          },
          {
            "id": "digiturva_1_q9",
            "type": "multiple_choice",
            "question": "Miksi \"Salasanat ovat kuin purukumi\" on hyvä sääntö muistaa automatkalla?",
            "options": [
              "Ne maistuvat parhaalta silloin, kun ne ovat aivan uusia.",
              "Niitä ei koskaan pidä jakaa tai vaihtaa muiden kanssa.",
              "Ne voi huoletta sylkäistä maahan kun niihin kyllästyy.",
              "Niitä pitää venyttää ja pureskella mahdollisimman pitkään."
            ],
            "correctAnswer": "Niitä ei koskaan pidä jakaa tai vaihtaa muiden kanssa.",
            "explanation": "Aivan kuten et antaisi käytettyä purukumia toiselle ihmiselle, älä koskaan anna salasanaasi muille! Ne ovat vain ja ainoastaan sinun yksityistä käyttöäsi varten."
          },
          {
            "id": "digiturva_1_q10",
            "type": "scenario",
            "question": "SKENAARIO: Olet koodannut autotalliin upean salaisen tietokoneen. Haluat, että kukaan maantierosvo ei pääse siihen käsiksi. Mikä on paras tapa suojata laite vahvan salasanan lisäksi?",
            "options": [
              "Kirjoitan näytölle ison lapun: 'Ethän avaa, kiitos.'",
              "Otan käyttöön kaksivaiheisen tunnistautumisen (kuten puhelimeen tulevan koodin).",
              "Piilotan laitteen pimeään laatikkoon ja toivon parasta.",
              "En laita siihen salasanaa lainkaan, jotta se ei houkuttele rosvoja."
            ],
            "correctAnswer": "Otan käyttöön kaksivaiheisen tunnistautumisen (kuten puhelimeen tulevan koodin).",
            "explanation": "Kaksivaiheinen tunnistautuminen on kuin huomaamaton lisälukko ovessa! Vaikka joku onnistuisi arvaamaan salasanasi, hän ei pääse sisään ilman sinun omaan puhelimeesi tulevaa lisäkoodia."
          },
          {
            "id": "digiturva_1_q11",
            "type": "drag_drop",
            "question": "Raahaa salasanan palaset oikeille paikoilleen, jotta niistä muodostuu yksi pitkä ja vahva \"salalause\"! (Lause on: VihreäAutoAjaa100!)",
            "draggables": [
              "Vihreä",
              "Auto",
              "Ajaa",
              "100!"
            ],
            "dropZones": [
              "Osa 1",
              "Osa 2",
              "Osa 3",
              "Osa 4"
            ],
            "correctAnswer": {
              "Vihreä": "Osa 1",
              "Auto": "Osa 2",
              "Ajaa": "Osa 3",
              "100!": "Osa 4"
            },
            "explanation": "Useamman tutun sanan yhdistäminen \"salalauseeksi\" tekee salasanasta tosi pitkän ja vahvan. Sinun on silti itse paljon helpompi muistaa se kuin kasa täysin satunnaisia sekavia merkkejä!"
          },
          {
            "id": "digiturva_1_q12",
            "type": "drag_drop",
            "question": "Järjestä fiksut toimintatavat aikajärjestykseen, jos epäilet, että joku digirosvo on saanut AI vanin avaimet (eli salasanasi) käsiinsä! Mitä teet ensimmäisenä?",
            "correctAnswer": {
              "Kerron heti luotettavalle aikuiselle tapahtuneesta.": "1. vaihe",
              "Vaihdan kyseisen salasanan nopeasti uuteen ja vahvaan.": "2. vaihe",
              "Tarkistan aikuisen kanssa, onko tililläni tehty jotain outoa.": "3. vaihe",
              "Jatkan turvallisin mielin automatkaa ja pelaamista.": "4. vaihe"
            },
            "explanation": "Aikuinen auttaa aina ensin! Sen jälkeen on todella tärkeää \"lukita ovet\" uudestaan vaihtamalla salasana ja tarkistaa heti, ettei mitään vahinkoa ehtinyt tapahtua.",
            "draggables": [
              "Kerron heti luotettavalle aikuiselle tapahtuneesta.",
              "Vaihdan kyseisen salasanan nopeasti uuteen ja vahvaan.",
              "Tarkistan aikuisen kanssa, onko tililläni tehty jotain outoa.",
              "Jatkan turvallisin mielin automatkaa ja pelaamista."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "digiturva_1_q13",
            "type": "multiple_choice",
            "question": "Miten paha rosvo-ohjelma yrittää kaikkein todennäköisimmin murtaa heikon salasanan netissä?",
            "options": [
              "Se arvailee erilaisia oikeita sanoja sanakirjasta sekunnin murto-osissa.",
              "Se kilauttaa sinulle puhelimella ja kysyy salasanaa nätisti.",
              "Se rikkoo autotallin ikkunan fyysisesti isolla kivellä.",
              "Se yrittää hypnotisoida sinut kertomaan sen unessa."
            ],
            "correctAnswer": "Se arvailee erilaisia oikeita sanoja sanakirjasta sekunnin murto-osissa.",
            "explanation": "Hakkerit käyttävät koneita ja tekoälyjä, jotka kokeilevat tuhansia sanoja sekunnissa. Siksi lyhyet tai pelkkiä oikeita sanoja (kuten \"kissa\") sisältävät salasanat on aivan liian helppo ja nopea murtaa!"
          },
          {
            "id": "digiturva_1_q14",
            "type": "spot_the_ai",
            "question": "Etsi joukosta vahva, tekoälyn tai salasanakoneen keksimä täysin satunnainen salasana, joka ei takuulla ole ihmisen helppo muistisääntö!",
            "options": [
              "KesäLoma2024!",
              "OmenaPuuPihalla!",
              "MansikkaJäätelö1",
              "x8T!pQ#9vL2mZ$"
            ],
            "correctAnswer": "x8T!pQ#9vL2mZ$",
            "explanation": "Ihmiset suosivat yleensä sanoja, jotka tarkoittavat jotain tuttua. Koneellisesti luotu täysin satunnainen numerosarja on matematiikan valossa kaikkein turvallisin ja vahvin turvalukko, vaikkakin vaikea muistaa ulkoa!"
          },
          {
            "id": "digiturva_1_q15",
            "type": "reverse_prompt",
            "question": "Opetat tekoälylle digiturvaa ja se antaa sinulle listan: \"123456, qwerty, salasana, 111111\". Mitä pyysit sitä listaamaan?",
            "options": [
              "Maailman pisimmät ja vahvimmat salalauseet.",
              "Maailman yleisimmät ja huonoimmat salasanat.",
              "Kaikki tietokoneen näppäimistön napit järjestyksessä.",
              "Hyvät vinkit oman autotallin siivoamiseen."
            ],
            "correctAnswer": "Maailman yleisimmät ja huonoimmat salasanat.",
            "explanation": "Nämä ovat valitettavasti yhä maailman yleisimpiä salasanoja! Niiden käyttäminen on täysin sama asia, kuin jättäisit autosi ovet selälleen auki ja avaimet virtalukkoon maantierosvoja varten."
          }
        ]
      },
      {
        "id": "digiturva_2",
        "name": "Lukittu hanskalokero",
        "questions": [
          {
            "id": "digiturva_2_q1",
            "type": "true_false",
            "question": "On ihan turvallista kertoa oma kotiosoite ja puhelinnumero uudelle pelikaverille netissä, jos hän vaikuttaa todella kiltiltä.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Omat henkilötiedot kuuluvat \"lukittuun hanskalokeroon\". Niitä ei koskaan saa jakaa netin chateissa vieraille ihmisille, vaikka he olisivat kuinka mukavia tahansa!"
          },
          {
            "id": "digiturva_2_q2",
            "type": "multiple_choice",
            "question": "Mitä tarkoitetaan \"lukitulla hanskalokerolla\", kun puhutaan sinun omista tiedoistasi netissä?",
            "options": [
              "Salaisien tavaroiden piilottamista oikeaan autoon.",
              "Omien yksityisten tietojen pitämistä turvassa.",
              "Sitä, että netissä ei saa puhua kenellekään.",
              "Autotallin lukitsemista yöksi varkaiden varalta."
            ],
            "correctAnswer": "Omien yksityisten tietojen pitämistä turvassa.",
            "explanation": "Lukittu hanskalokero on vertauskuva sille, että omat tärkeät henkilötiedot (kuten nimi, osoite ja koulu) pidetään yksityisenä, eikä niitä jaeta julkisesti muiden näkyville."
          },
          {
            "id": "digiturva_2_q3",
            "type": "scenario",
            "question": "SKENAARIO: Olette automatkalla ja pelaat takapenkillä kivaa nettipeliä. Chattiin ilmestyy tyyppi, joka sanoo: \"Hei! Mä asun kans täällä päin. Missä koulussa sä oot?\" Mitä sinun kannattaa tehdä?",
            "options": [
              "Kerron kouluni nimen, jotta voimme nähdä myöhemmin.",
              "Jätän vastaamatta ja pidän sen tiedon yksityisenä.",
              "Kerron tarkan kotiosoitteeni koulun sijaan.",
              "Kysyn hänen kouluansa ensin ja kerron sitten omani."
            ],
            "correctAnswer": "Jätän vastaamatta ja pidän sen tiedon yksityisenä.",
            "explanation": "Koulun nimi ja asuinpaikka ovat yksityisiä henkilötietoja, joita ei koskaan jaeta vieraille netissä. Ne pidetään turvallisesti piilossa omassa \"lukitussa hanskalokerossa\"."
          },
          {
            "id": "digiturva_2_q4",
            "type": "drag_drop",
            "question": "Järjestä nämä tiedot sen mukaan, kuinka turvallista niitä on kertoa netissä! Aloita täysin turvallisesta asiasta ja päätä sellaiseen, jota ei saa koskaan jakaa.",
            "correctAnswer": {
              "Lempivärisi tai lempielokuvasi": "1. vaihe",
              "Pelissä käyttämäsi keksitty nimimerkki": "2. vaihe",
              "Oma etunimesi ja ikäsi": "3. vaihe",
              "Koko nimesi, kotiosoitteesi ja puhelinnumerosi": "4. vaihe"
            },
            "explanation": "Yleisiä asioita ja nimimerkkejä on turvallista jakaa peleissä. Tarkat henkilötiedot ja yhteystiedot ovat ehdottoman salaisia, ja ne on pidettävä aina piilossa vierailta!",
            "draggables": [
              "Lempivärisi tai lempielokuvasi",
              "Pelissä käyttämäsi keksitty nimimerkki",
              "Oma etunimesi ja ikäsi",
              "Koko nimesi, kotiosoitteesi ja puhelinnumerosi"
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "digiturva_2_q5",
            "type": "drag_drop",
            "question": "Autotallin työpöydällä on erilaisia tietoja. Raahaa ne oikeisiin laatikoihin: saako tiedon jakaa pelichatissa vai pitääkö se lukita yksityiseen \"hanskalokeroon\"?",
            "draggables": [
              "Lempiautoni merkki",
              "Kotiosoitteeni",
              "Hauska vitsi",
              "Oma puhelinnumeroni"
            ],
            "dropZones": [
              "Saa kertoa chatissa",
              "Lukittuun hanskalokeroon (Salassa)"
            ],
            "correctAnswer": {
              "Lempiautoni merkki": "Saa kertoa chatissa",
              "Hauska vitsi": "Saa kertoa chatissa",
              "Kotiosoitteeni": "Lukittuun hanskalokeroon (Salassa)",
              "Oma puhelinnumeroni": "Lukittuun hanskalokeroon (Salassa)"
            },
            "explanation": "Hauskoja asioita ja omia mielenkiinnon kohteita saa jakaa turvallisesti. Kaikki sinuun suoraan liittyvät yhteystiedot ja osoitteet pidetään aina tiukasti lukkojen takana!"
          },
          {
            "id": "digiturva_2_q6",
            "type": "spot_the_ai",
            "question": "Yksi näistä vinkeistä yksityisyyden suojaamiseen kuulostaa siltä, että sen on antanut tekoäly ilman maalaisjärkeä. Mikä on huono ja outo vinkki?",
            "options": [
              "Älä koskaan kerro omaa salasanaasi pelikavereille.",
              "Pidä koko nimesi ja osoitteesi poissa pelien profiileista.",
              "Käytä netissä maskia ja istu aina pimeässä autotallissa.",
              "Kysy ensin aikuiselta, jos et ole varma mitä netissä saa jakaa."
            ],
            "correctAnswer": "Käytä netissä maskia ja istu aina pimeässä autotallissa.",
            "explanation": "Digitaalinen yksityisyys tarkoittaa omien henkilötietojen suojaamista, ei sitä että pitäisi fyysisesti piiloutua pimeään! Muut ohjeet ovat loistavia digiturvataitoja."
          },
          {
            "id": "digiturva_2_q7",
            "type": "reverse_prompt",
            "question": "AI vanin apuri teki profiilikuvan, jossa näkyy vain hieno piirretty kissa ja keksitty nimi \"KissaKuski22\". Se ei näyttänyt oikeaa kuvaasi tai nimeäsi ollenkaan. Mikä oli alkuperäinen ohjeesi?",
            "options": [
              "Tee minulle profiili, joka jakaa kaiken mahdollisen tiedon minusta.",
              "Luo minulle turvallinen ja yksityisyyttä suojaava peliprofiili.",
              "Piirrä kuva, jossa seison oman kotini ulko-oven edessä.",
              "Kirjoita profiiliin koko nimeni ja puhelinnumeroni."
            ],
            "correctAnswer": "Luo minulle turvallinen ja yksityisyyttä suojaava peliprofiili.",
            "explanation": "Turvallinen peliprofiili ei koskaan paljasta kasvojasi, oikeaa nimeäsi tai asuinpaikkaasi. Keksityt hauskat nimimerkit ja piirroskuvat ovat parasta yksityisyyttä!"
          },
          {
            "id": "digiturva_2_q8",
            "type": "true_false",
            "question": "Kaikki netissä olevat ihmiset ovat aina varmasti sitä mitä sanovat. Esimerkiksi 10-vuotias \"AutoEetu\" on aivan varmasti oikea lapsi.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Netissä kuka tahansa voi teeskennellä ja väittää olevansa mitä vain. Siksi emme koskaan jaa yksityisiä tietojamme, vaikka juttukaveri vaikuttaisi tutulta tai samanikäiseltä!"
          },
          {
            "id": "digiturva_2_q9",
            "type": "multiple_choice",
            "question": "Haluat lähettää pelikaverille kuvan uudesta upeasta leluautostasi. Mitä sinun pitää muistaa tarkistaa kuvasta ennen sen lähettämistä?",
            "options": [
              "Että leluauto on varmasti juuri pesty ja puhdas.",
              "Ettei kuvan taustalla näy perheesi jäseniä tai kotiosoitettasi.",
              "Että kuva on otettu kalliilla ja hienolla puhelimella.",
              "Että kuvassa näkyy myös autotallin kalleimmat työkalut."
            ],
            "correctAnswer": "Ettei kuvan taustalla näy perheesi jäseniä tai kotiosoitettasi.",
            "explanation": "Valokuvat voivat paljastaa vahingossa yksityisiä asioita \"lukitusta hanskalokerosta\". Tarkista aina tausta, ettei siellä näy osoitetta, perheenjäseniä tai postia, jossa lukee nimesi!"
          },
          {
            "id": "digiturva_2_q10",
            "type": "scenario",
            "question": "SKENAARIO: AI vanin näyttöön tulee viesti tuntemattomasta numerosta. Viestissä sanotaan: \"Hei, täällä on sinun koulusi rehtori! Voitko laittaa minulle kotiosoitteesi, jotta voin lähettää sinulle hienon palkinnon?\" Mitä teet?",
            "options": [
              "Lähetän osoitteen heti, koska rehtori on luotettava aikuinen.",
              "Kysyn ensin viestillä, millaisen palkinnon olen oikein voittanut.",
              "En vastaa mitään ja näytän oudon viestin heti omalle aikuiselle.",
              "Lähetän hänelle naapurin osoitteen varmuuden vuoksi."
            ],
            "correctAnswer": "En vastaa mitään ja näytän oudon viestin heti omalle aikuiselle.",
            "explanation": "Vieraat ihmiset voivat teeskennellä olevansa tuttuja kalastaakseen yksityistietojasi. Älä koskaan lähetä osoitettasi mihinkään, vaan näytä aina epäilyttävät ja oudot viestit aikuiselle!"
          },
          {
            "id": "digiturva_2_q11",
            "type": "drag_drop",
            "question": "Autotallin älyradio kysyy sinulta profiiliisi erilaisia asioita. Yhdistä ne turvallisiin asioihin tai asioihin, joita pitää varoa!",
            "draggables": [
              "Lempibändi tai musiikki",
              "Kiva piirretty kuva kissasta",
              "Loma-ajankohdat ja tyhjä koti",
              "Oma passikuva tai henkkarit"
            ],
            "dropZones": [
              "Saa kertoa ja jakaa",
              "Vaarallinen jakaa netissä"
            ],
            "correctAnswer": {
              "Lempibändi tai musiikki": "Saa kertoa ja jakaa",
              "Kiva piirretty kuva kissasta": "Saa kertoa ja jakaa",
              "Loma-ajankohdat ja tyhjä koti": "Vaarallinen jakaa netissä",
              "Oma passikuva tai henkkarit": "Vaarallinen jakaa netissä"
            },
            "explanation": "Mielenkiinnon kohteet ja keksityt asiat ovat turvallisia jakaa. Viralliset tiedot tai tiedot siitä, milloin kotinne on tyhjillään lomamatkan ajan, ovat vaarallisia jakaa julkisesti!"
          },
          {
            "id": "digiturva_2_q12",
            "type": "drag_drop",
            "question": "Lataat uuden kivan ajopelin puhelimeesi. Järjestä askeleet järjestykseen, jotta yksityisyytesi pysyy alusta asti \"lukitussa hanskalokerossa\"!",
            "correctAnswer": {
              "Lataa peli turvallisesti virallisesta sovelluskaupasta.": "1. vaihe",
              "Keksi peliin hauska nimimerkki, joka ei ole oikea nimesi.": "2. vaihe",
              "Valitse profiilikuvaksi jokin pelin tarjoama valmis hahmokuva.": "3. vaihe",
              "Pelaa peliä turvallisesti jakamatta koskaan omia henkilötietoja.": "4. vaihe"
            },
            "explanation": "Yksityisyyden suojaaminen alkaa jo ennen pelin aloittamista. Keksityt nimet ja kuvat varmistavat, että oikeat henkilötietosi pysyvät tiukasti omassa turvassasi.",
            "draggables": [
              "Lataa peli turvallisesti virallisesta sovelluskaupasta.",
              "Keksi peliin hauska nimimerkki, joka ei ole oikea nimesi.",
              "Valitse profiilikuvaksi jokin pelin tarjoama valmis hahmokuva.",
              "Pelaa peliä turvallisesti jakamatta koskaan omia henkilötietoja."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "digiturva_2_q13",
            "type": "multiple_choice",
            "question": "Miksi AI vanin älypeilit (kuten puhelimesi kamera) kannattaa joskus peittää suojalla tai tarralla, kun niitä ei käytetä?",
            "options": [
              "Jotta näyttöruutu ei kerää itseensä yhtään pölyä tai likaa.",
              "Jotta kukaan ei voi vahingossa tai tahallaan vakoilla sinua niiden kautta.",
              "Jotta kamera ei kulu loppuun liiallisesta katsomisesta.",
              "Koska tarrat saavat laitteet näyttämään paljon kalliimmilta."
            ],
            "correctAnswer": "Jotta kukaan ei voi vahingossa tai tahallaan vakoilla sinua niiden kautta.",
            "explanation": "Kameran peittäminen on todella hyvä lisäturva yksityisyydelle. Se varmistaa, että yksikään ohjelma tai ihminen ei pääse tirkistelemään \"lukittuun hanskalokeroosi\" ilman lupaa!"
          },
          {
            "id": "digiturva_2_q14",
            "type": "spot_the_ai",
            "question": "Kuka näistä neuvojista ei ymmärrä yksityisyyden \"lukittua hanskalokeroa\" ja antaa todella epäturvallisen ohjeen? Etsi joukosta huono neuvo!",
            "options": [
              "'On hyvä idea pitää omat sometilit yksityisinä, jotta vain kaverit näkevät kuvasi.'",
              "'Voit lähettää sijaintisi tuntemattomalle, jos hän lupaa tuoda sinulle lahjan.'",
              "'Älä ikinä jaa kuvaa kotiavaimistasi julkisesti sosiaalisessa mediassa.'",
              "'Tarkista kuvien taustat aina ennen niiden julkaisemista nettiin.'"
            ],
            "correctAnswer": "'Voit lähettää sijaintisi tuntemattomalle, jos hän lupaa tuoda sinulle lahjan.'",
            "explanation": "Tämä on erittäin huono ja vaarallinen neuvo! Omia sijaintitietoja ei saa koskaan jakaa tuntemattomille ihmisille internetissä millään verukkeella tai lupauksella."
          },
          {
            "id": "digiturva_2_q15",
            "type": "reverse_prompt",
            "question": "Laitat AI vanin tietoturva-asetukset päälle. Ruudulle ilmestyy teksti: \"Kaikki tilisi ovat nyt yksityisiä. Kukaan tuntematon ei näe kuviasi, sijaintiasi tai nimeäsi.\" Millä ohjeella (promptilla) tämä tapahtui?",
            "options": [
              "Laita 'lukittu hanskalokero' -tila päälle ja piilota omat tietoni vierailta.",
              "Jaa kaikki minun tietoni heti jokaiselle internetin käyttäjälle.",
              "Kerro minulle, miten auton hanskalokero korjataan työkaluilla.",
              "Etsi minulle netistä kuvia hienoista urheiluautoista ja jaa ne."
            ],
            "correctAnswer": "Laita 'lukittu hanskalokero' -tila päälle ja piilota omat tietoni vierailta.",
            "explanation": "Sosiaalisessa mediassa ja peleissä tilien muuttaminen yksityiseksi on täsmälleen kuin laittaisi \"lukitun hanskalokeron\" kiinni. Silloin vain sinun oikeat ystäväsi näkevät juttusi!"
          }
        ]
      },
      {
        "id": "digiturva_3",
        "name": "Maantierosvojen ansat",
        "questions": [
          {
            "id": "digiturva_3_q1",
            "type": "true_false",
            "question": "Saat viestin, että olet voittanut upouuden superauton, vaikka et koskaan osallistunut mihinkään kilpailuun. Sinun kannattaa heti klikata viestin linkkiä lunastaaksesi voiton.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Jos tarjous on liian hyvä ollakseen totta, se on lähes varmasti maantierosvon ansa! Älä koskaan klikkaa tällaisia outoja yllätyslinkkejä."
          },
          {
            "id": "digiturva_3_q2",
            "type": "multiple_choice",
            "question": "Mikä on digitaalinen \"maantierosvon ansa\" eli tietojenkalasteluviesti (phishing)?",
            "options": [
              "Viesti, joka yrittää huijata sinut antamaan oman salasanasi.",
              "Viesti, joka kertoo auton bensan ja öljyn loppuvan pian.",
              "Kaverin lähettämä hauska ja kiva kissavideo pelissä.",
              "Sähköposti, jossa on koulun virallinen ruokalista."
            ],
            "correctAnswer": "Viesti, joka yrittää huijata sinut antamaan oman salasanasi.",
            "explanation": "Huijausviestien ainoa tarkoitus on varastaa sinun tärkeitä tietojasi tai salasanojasi ovelilla ja pelottavilla ansoilla."
          },
          {
            "id": "digiturva_3_q3",
            "type": "scenario",
            "question": "SKENAARIO: AI vanin ruudulle pamahtaa iso punainen vilkkuva ilmoitus: \"Laitteessasi on paha vika! Klikkaa tätä linkkiä ihan heti korjataksesi sen, tai autosi hajoaa kokonaan!\" Mitä teet tässä tilanteessa?",
            "options": [
              "Klikkaan linkkiä nopeasti pelastaakseni rakkaan auton.",
              "Suljen viestin rauhassa ja kysyn heti neuvoa aikuiselta.",
              "Lähetän saman viestin nopeasti kaikille omille kavereilleni.",
              "Kirjoitan viestiin oman salasanani ja oikean nimeni."
            ],
            "correctAnswer": "Suljen viestin rauhassa ja kysyn heti neuvoa aikuiselta.",
            "explanation": "Maantierosvot yrittävät usein pelotella sinua klikkaamaan kiireessä. Pysy rauhallisena, älä klikkaa mitään, ja näytä oudot viestit aina ensin aikuiselle!"
          },
          {
            "id": "digiturva_3_q4",
            "type": "drag_drop",
            "question": "Järjestä toimet oikeaan järjestykseen, kun saat sähköpostiisi todella epäilyttävän ja oudon huijausviestin!",
            "correctAnswer": {
              "Pysähdy hetkeksi ja hengitä rauhassa ilman kiirettä.": "1. vaihe",
              "Älä missään nimessä klikkaa viestissä olevia linkkejä.": "2. vaihe",
              "Näytä epäilyttävä viesti heti luotettavalle aikuiselle.": "3. vaihe",
              "Poistakaa viesti laitteeltasi lopullisesti roskakoriin.": "4. vaihe"
            },
            "explanation": "Hätiköinti ja kiire ovat rosvojen paras ystävä. Pysähtymällä ja kysymällä aikuiselta vältät astumasta pelottavaan ansaan.",
            "draggables": [
              "Pysähdy hetkeksi ja hengitä rauhassa ilman kiirettä.",
              "Älä missään nimessä klikkaa viestissä olevia linkkejä.",
              "Näytä epäilyttävä viesti heti luotettavalle aikuiselle.",
              "Poistakaa viesti laitteeltasi lopullisesti roskakoriin."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "digiturva_3_q5",
            "type": "drag_drop",
            "question": "Raahaa viestien piirteet oikeisiin laatikoihin. Kumpi on turvallinen viesti ja kumpi on ovela maantierosvon ansa?",
            "draggables": [
              "Voitit juuri miljoonan pelirahaa, klikkaa heti!",
              "Tilinumerosi pitää vahvistaa nopeasti!",
              "Mennäänkö huomenna pelaamaan puistoon?",
              "Opettajan lähettämä viesti retkestä."
            ],
            "dropZones": [
              "Maantierosvon ansa (Huijaus)",
              "Turvallinen tutun viesti"
            ],
            "correctAnswer": {
              "Voitit juuri miljoonan pelirahaa, klikkaa heti!": "Maantierosvon ansa (Huijaus)",
              "Tilinumerosi pitää vahvistaa nopeasti!": "Maantierosvon ansa (Huijaus)",
              "Mennäänkö huomenna pelaamaan puistoon?": "Turvallinen tutun viesti",
              "Opettajan lähettämä viesti retkestä.": "Turvallinen tutun viesti"
            },
            "explanation": "Huijarit houkuttelevat olemattomilla jättipoteilla tai keksityllä kiireellä. Tutut ihmiset lähettävät normaaleja viestejä ilman outoja vaatimuksia."
          },
          {
            "id": "digiturva_3_q6",
            "type": "spot_the_ai",
            "question": "Kuka näistä lähettäjistä on todennäköisimmin huijausrobotti, joka yrittää saada sinut nopeasti maantierosvon ansaan?",
            "options": [
              "'Pelaaja88', joka kysyy chätissä, oletko tulossa tänään peliin.",
              "'Äiti', joka pyytää sinua tekstiviestillä tulemaan pian syömään.",
              "'Tuki-Mestari', joka käskee antamaan salasanan heti sähköpostissa.",
              "'Opettaja', joka muistuttaa tuomaan liikuntavaatteet kouluun."
            ],
            "correctAnswer": "'Tuki-Mestari', joka käskee antamaan salasanan heti sähköpostissa.",
            "explanation": "Oikeat ylläpitäjät tai pelien tekijät eivät ikinä kysy salasanaasi sähköpostilla. Tällaiset viestit ovat aina automaattisia rosvojen ansoja!"
          },
          {
            "id": "digiturva_3_q7",
            "type": "reverse_prompt",
            "question": "Ruudullesi tulee pelottava viesti: \"Hei käyttäjä! Olemme huomanneet outoa toimintaa. Klikkaa tästä 10 minuutin sisällä tai pelitilisi poistetaan ikuisesti!\" Millä ohjeella huijari loi tämän viestin?",
            "options": [
              "Kirjoita viesti, joka saa lukijan pelkäämään ja hätiköimään.",
              "Keksi todella hauska ja naurattava vitsi nopeista autoista.",
              "Laadi asiallinen ja rauhallinen tiedote pelin uusista säännöistä.",
              "Kirjoita oikein ystävällinen onnitteluviesti syntymäpäivänä."
            ],
            "correctAnswer": "Kirjoita viesti, joka saa lukijan pelkäämään ja hätiköimään.",
            "explanation": "Huijarit tekevät usein tahallaan pelottavia viestejä. He tietävät, että pelästynyt ihminen klikkaa haitallisia linkkejä hätäisesti miettimättä asiaa."
          },
          {
            "id": "digiturva_3_q8",
            "type": "true_false",
            "question": "Jos oudossa sähköpostissa on kuva virallisesta pelilogosta tai oikeasta kaupasta, viesti on aivan varmasti aito ja täysin turvallinen klikata.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Maantierosvot osaavat erittäin helposti kopioida oikeiden firmojen logoja ja kuvia viesteihinsä. Logon näkeminen ei siis koskaan tarkoita, että viesti olisi oikeasti turvallinen!"
          },
          {
            "id": "digiturva_3_q9",
            "type": "multiple_choice",
            "question": "Mitä \"tietojenkalastelu\" (phishing) oikeasti tarkoittaa autotallin tai AI vanin tietokoneella?",
            "options": [
              "Sitä, että rosvo yrittää onkia sinulta sinun omia tärkeitä salaisuuksia.",
              "Sitä, että laitteella pelataan erittäin hauskaa kalastuspeliä järvellä.",
              "Sitä, että navigaattori lukee kalojen reittejä lähimmässä joessa.",
              "Sitä, että olet vahingossa unohtanut oman salasanasi pöydälle."
            ],
            "correctAnswer": "Sitä, että rosvo yrittää onkia sinulta sinun omia tärkeitä salaisuuksia.",
            "explanation": "Aivan kuten kalastaja yrittää saada kalan nappaamaan syöttiin, nettihuijari heittää vieheen (kuten keksityn voiton) ja toivoo, että sinä nappaat siihen kiinni paljastamalla tietosi."
          },
          {
            "id": "digiturva_3_q10",
            "type": "scenario",
            "question": "SKENAARIO: Saat sähköpostin, jonka lähettäjänä näkyy tutun oloinen \"SuperPeliTuki\". Viestissä sanotaan: \"Täytä nämä tiedot saadaksesi 5000 kultakolikkoa!\" Sähköpostiosoite on kuitenkin kirjoitettu oudosti: \"tuki@superpeli-huijaus.com\". Mitä teet?",
            "options": [
              "Huomaan oudon osoitteen heti, enkä todellakaan klikkaa annettua linkkiä.",
              "Klikkaan linkkiä nopeasti, koska haluan itselleni ilmaiset kultakolikot.",
              "Vastaan viestiin innoissani ja annan heille pankkikortin numeron.",
              "Kirjoitan viestin lähettäjälle kiukkuisen paluuviestin ja haukun heidät."
            ],
            "correctAnswer": "Huomaan oudon osoitteen heti, enkä todellakaan klikkaa annettua linkkiä.",
            "explanation": "Rosvojen ansat paljastuvat hyvin usein oudoista lähettäjän osoitteista! Oikeita ilmaisia kolikoita ei jaeta sähköpostilla, vaan kyseessä on ovela ansa."
          },
          {
            "id": "digiturva_3_q11",
            "type": "drag_drop",
            "question": "Tunnista maantierosvojen käyttämät syötit! Yhdistä huijauksen tyyppi siihen, miten se yrittää ovelasti saada sinut klikkaamaan linkkiä.",
            "draggables": [
              "Palkintosyötti",
              "Pelottelusyötti",
              "Kaverisyötti"
            ],
            "dropZones": [
              "Voitit juuri uuden kalliin puhelimen!",
              "Pelitilisi suljetaan heti, jos et klikkaa!",
              "Hei, katso tämä hassu kuva sinusta täällä!"
            ],
            "correctAnswer": {
              "Palkintosyötti": "Voitit juuri uuden kalliin puhelimen!",
              "Pelottelusyötti": "Pelitilisi suljetaan heti, jos et klikkaa!",
              "Kaverisyötti": "Hei, katso tämä hassu kuva sinusta täällä!"
            },
            "explanation": "Huijarit yrittävät onkia tietojasi lupaamalla taivaallisia palkintoja, pelottelemalla tai esiintymällä kaverinasi. Ole aina epäluuloinen tällaisten viestien kanssa!"
          },
          {
            "id": "digiturva_3_q12",
            "type": "drag_drop",
            "question": "Miten toimit, kun saat puhelimeesi tekstarin: \"Pakettisi on jumissa varastolla, maksa 2 euroa linkin kautta heti\"? Järjestä fiksut toimenpiteet!",
            "correctAnswer": {
              "Huomaa, että viesti sisältää oudon linkin ja pyytää maksua.": "1. vaihe",
              "Mieti rauhassa, oletko edes tilannut mitään pakettia lähiaikoina.": "2. vaihe",
              "Näytä epäilyttävä huijausviesti heti jollekin aikuiselle.": "3. vaihe",
              "Aikuinen poistaa huijausviestin turvallisesti laitteeltasi.": "4. vaihe"
            },
            "explanation": "Huijausviestit jumiutuneista paketeista ovat nykyään hyvin yleisiä ansoja. Älä koskaan maksa mitään tai klikkaa outoja tekstiviestilinkkejä.",
            "draggables": [
              "Huomaa, että viesti sisältää oudon linkin ja pyytää maksua.",
              "Mieti rauhassa, oletko edes tilannut mitään pakettia lähiaikoina.",
              "Näytä epäilyttävä huijausviesti heti jollekin aikuiselle.",
              "Aikuinen poistaa huijausviestin turvallisesti laitteeltasi."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "digiturva_3_q13",
            "type": "multiple_choice",
            "question": "Miksi on niin valtavan vaarallista klikata maantierosvon asettamaa ansalinkkiä eli kalasteluviestiä?",
            "options": [
              "Linkki voi viedä valesivulle, joka varastaa kirjoittamasi salasanan.",
              "Puhelimesi akku tyhjenee linkistä välittömästi kokonaan nollaan.",
              "Autotallin ovet aukeavat itsestään ja menevät pysyvästi jumiin.",
              "Puhelimesi näyttö muuttuu ikuisesti mustavalkoiseksi."
            ],
            "correctAnswer": "Linkki voi viedä valesivulle, joka varastaa kirjoittamasi salasanan.",
            "explanation": "Huijarit rakentavat usein täydellisiä kopioita oikeista sivuista. Jos kirjoitat salasanasi tällaiseen ansasivuun, digitaalinen rosvo saa sen heti itselleen!"
          },
          {
            "id": "digiturva_3_q14",
            "type": "spot_the_ai",
            "question": "Mikä näistä sähköpostien otsikoista yrittää selvästi kalastella tietojasi robottihuijauksen avulla? Etsi ansa!",
            "options": [
              "'Luokkaretken aikataulu ja pakkauslista ensi viikolle'",
              "'Kutsu: Kallen syntymäpäiväjuhlat ensi sunnuntaina!'",
              "'TÄRKEÄÄ: Tilisi on hakkeroitu, kirjaudu sisään TÄSTÄ HETI!'",
              "'Hei! Tässä on ne kivat kuvat eilisistä jalkapallotreeneistä.'"
            ],
            "correctAnswer": "'TÄRKEÄÄ: Tilisi on hakkeroitu, kirjaudu sisään TÄSTÄ HETI!'",
            "explanation": "Rosvobotit käyttävät usein isoja kirjaimia, hätätilaa ja suoria linkkejä saadakseen sinut paniikkiin. Oikeat ja turvalliset viestit eivät patistele sinua klikkaamaan paniikissa."
          },
          {
            "id": "digiturva_3_q15",
            "type": "reverse_prompt",
            "question": "Näet nettisivulla ponnahdusikkunan, jossa lukee huonolla suomella: \"Sinä olla 1000. vierailija! Valitse kallis palkinto klikkaus täältä!\" Mikä käsky synnytti tämän huijauksen?",
            "options": [
              "Luo ohjelma, joka jakaa oikeasti ilmaisia tavaroita kaikille lapsille.",
              "Tee ansa, joka houkuttelee kävijöitä lupaamalla ison keksityn palkinnon.",
              "Kirjoita hieno artikkeli siitä, miten netissä jaetaan jättipotteja.",
              "Käännä Suomen kielen laaja sanakirja englanniksi erittäin huolellisesti."
            ],
            "correctAnswer": "Tee ansa, joka houkuttelee kävijöitä lupaamalla ison keksityn palkinnon.",
            "explanation": "Rosvojen \"Liian hyvää ollakseen totta\" -palkinnot ovat vain ansalankoja. Huono kieli ja yllättävät ilmaiset voitot paljastavat melkein aina tietojenkalastelun!"
          }
        ]
      },
      {
        "id": "digiturva_4",
        "name": "Digitaalinen ruoste",
        "questions": [
          {
            "id": "digiturva_4_q1",
            "type": "true_false",
            "question": "Digitaalinen ruoste eli tietokonevirus voi tarttua AI vaniin, jos lataat siihen sovelluksia oudoilta ja tuntemattomilta nettisivuilta.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Oikein",
            "explanation": "Aivan kuten auto voi ruostua huonolla säällä, älylaitteesi voi saada viruksen (haittaohjelman), jos lataat pelejä tai ohjelmia vääristä ja oudoista paikoista!"
          },
          {
            "id": "digiturva_4_q2",
            "type": "multiple_choice",
            "question": "Mikä on paras tapa suojata autotallin älylaitteet \"digitaaliselta ruosteelta\" eli viruksilta?",
            "options": [
              "Ladataan sovelluksia vain virallisista sovelluskaupoista.",
              "Pestään laitteen näyttö todella usein saippualla.",
              "Pidetään laite aina auringonpaisteessa lämpimässä.",
              "Poistetaan laitteesta aina kaikki vanhat ja tyhmät pelit."
            ],
            "correctAnswer": "Ladataan sovelluksia vain virallisista sovelluskaupoista.",
            "explanation": "Viralliset sovelluskaupat (kuten Google Play tai App Store) tarkistavat sovellukset etukäteen, jotta niissä ei ole viruksia. Se on kuin tankkaisi autoon luotettavaa ja puhdasta bensaa!"
          },
          {
            "id": "digiturva_4_q3",
            "type": "scenario",
            "question": "SKENAARIO: Löydät netistä sivun, joka lupaa lempipeliisi valtavasti ilmaisia timantteja. Sinun pitää vain ladata heidän oma outo tiedostonsa laitteellesi. Mitä teet tässä tilanteessa?",
            "options": [
              "En lataa tiedostoa, koska se voi olla paha virus.",
              "Lataan tiedoston heti saadakseni timantit.",
              "Pyydän kaveria lataamaan sen ensin testiksi.",
              "Lataan tiedoston vain puoliksi ja katson mitä käy."
            ],
            "correctAnswer": "En lataa tiedostoa, koska se voi olla paha virus.",
            "explanation": "Ilmaiset edut tuntemattomilta sivuilta ovat usein ovela ansa. Tämä \"ilmainen lahja\" on todennäköisesti piilotettu virus, joka rikkoo laitteesi ja vie oikeat tietosi!"
          },
          {
            "id": "digiturva_4_q4",
            "type": "drag_drop",
            "question": "Järjestä turvallisen sovelluksen lataamisen askeleet oikeaan järjestykseen, jotta vältät digitaalisen ruosteen!",
            "correctAnswer": {
              "Varmista ensin, että olet laitteen virallisessa sovelluskaupassa.": "1. vaihe",
              "Etsi sieltä haluamasi uusi peli tai sovellus.": "2. vaihe",
              "Tarkista sovelluksen saamat tähdet, arvostelut ja latausmäärät.": "3. vaihe",
              "Lataa peli turvallisin mielin laitteellesi.": "4. vaihe"
            },
            "explanation": "Turvallisuus alkaa siitä, että olet oikeassa ja luotettavassa paikassa. Virallinen kauppa ja muiden pelaajien positiiviset kokemukset auttavat varmistamaan, ettei mukana tule pöpöjä.",
            "draggables": [
              "Varmista ensin, että olet laitteen virallisessa sovelluskaupassa.",
              "Etsi sieltä haluamasi uusi peli tai sovellus.",
              "Tarkista sovelluksen saamat tähdet, arvostelut ja latausmäärät.",
              "Lataa peli turvallisin mielin laitteellesi."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "digiturva_4_q5",
            "type": "drag_drop",
            "question": "Yhdistä tekemäsi toiminta ja sen seuraus laitteen terveydelle! Varo digitaalista ruostetta!",
            "draggables": [
              "Lataat uuden pelin virallisesta kaupasta",
              "Lataat epäilyttävän tiedoston nettisivulta",
              "Päivität laitteen ohjelmiston säännöllisesti"
            ],
            "dropZones": [
              "Laite pysyy turvassa ja terveenä",
              "Laite voi saada haittaohjelman eli viruksen",
              "Tukkii vanhat reiät viruksilta"
            ],
            "correctAnswer": {
              "Lataat uuden pelin virallisesta kaupasta": "Laite pysyy turvassa ja terveenä",
              "Lataat epäilyttävän tiedoston nettisivulta": "Laite voi saada haittaohjelman eli viruksen",
              "Päivität laitteen ohjelmiston säännöllisesti": "Tukkii vanhat reiät viruksilta"
            },
            "explanation": "Oikeat kaupat ja säännölliset päivitykset ovat laitteen parhaat suojakilvet digitaalista ruostetta vastaan."
          },
          {
            "id": "digiturva_4_q6",
            "type": "spot_the_ai",
            "question": "Kuka näistä digiapureista antaa vaarallisen ja oudon neuvon, joka voi johtaa laitteesi saastumiseen haittaohjelmalla? Etsi huono ohje!",
            "options": [
              "'Jos peli maksaa kaupassa, etsi netistä sille ilmaiseksi ladattava versio.'",
              "'Pidä laitteen virustorjunta aina päällä ja päivitettynä.'",
              "'Kysy aina ensin aikuiselta, ennen kuin lataat uuden sovelluksen.'",
              "'Poista heti sovellukset, jotka alkavat toimia oudosti.'"
            ],
            "correctAnswer": "'Jos peli maksaa kaupassa, etsi netistä sille ilmaiseksi ladattava versio.'",
            "explanation": "Kalliiden pelien piraattiversiot ja ilmaiset lataukset epävirallisilta sivuilta sisältävät erittäin usein haittaohjelmia. Se on suorin reitti laitteen saastumiseen!"
          },
          {
            "id": "digiturva_4_q7",
            "type": "reverse_prompt",
            "question": "AI vanin ruutuun ilmestyy yllättäen ärsyttäviä mainoksia ja näyttö jumittaa aina, kun avaat tietyn pelin. Mikä teko johti tähän laitevikaan?",
            "options": [
              "Ladasit pelin ovelan kopion epäviralliselta sivustolta.",
              "Ajoit autolla liian kovaa vauhtia epätasaisella tiellä.",
              "Unohdit sammuttaa auton radion viime yön ajaksi.",
              "Ladasit suosituimman pelin turvallisesta sovelluskaupasta."
            ],
            "correctAnswer": "Ladasit pelin ovelan kopion epäviralliselta sivustolta.",
            "explanation": "Kun laitteessa on haittaohjelma, se alkaa usein jumittaa, näyttää outoja mainoksia tai toimia hitaasti. Vika johtuu viruksesta, ei auton ajamisesta epätasaisesti!"
          },
          {
            "id": "digiturva_4_q8",
            "type": "true_false",
            "question": "Tietokonevirus tai haittaohjelma voi rikkoa autotallin älylaitteet oikeasti fyysisesti palasiksi, aivan kuten oikea vasara.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Digitaalinen ruoste on näkymätöntä koodia, ei oikea työkalu. Se rikkoo laitteen ohjelmistoja ja saattaa varastaa tietoja, mutta se ei hajota näyttölasia fyysisesti palasiksi!"
          },
          {
            "id": "digiturva_4_q9",
            "type": "multiple_choice",
            "question": "Auton kojelauta pyytää sinua päivittämään sen käyttöjärjestelmän uuteen versioon. Mitä teet?",
            "options": [
              "Päivitän sen heti, koska päivitykset korjaavat tietoturva-aukkoja.",
              "Ohitan päivityksen, koska ne ovat oikeasti aina viruksia.",
              "Sammutan auton ja piilotan avaimet roskikseen.",
              "Odotan ainakin kolme vuotta ennen uutta päivitystä."
            ],
            "correctAnswer": "Päivitän sen heti, koska päivitykset korjaavat tietoturva-aukkoja.",
            "explanation": "Päivitykset ovat kuin laittaisi uutta ruosteenestoainetta laitteen pintaan! Ne korjaavat ohjelmiston vanhoja virheitä ja pitävät virukset loitolla."
          },
          {
            "id": "digiturva_4_q10",
            "type": "scenario",
            "question": "SKENAARIO: Kaverisi autotallissa on irrallinen muistitikku, josta hän sanoo: \"Tällä tikulla on aivan sika hieno peli, laita tää sun koneeseen!\" Et kuitenkaan tiedä, kenen tikku on tai mistä se on peräisin. Mitä teet?",
            "options": [
              "En laita tikkua koneeseen, koska siinä voi olla digitaalista ruostetta.",
              "Laitan tikun koneeseen, mutta en avaa peliä heti.",
              "Kopioin tikun sisällön ensin isän omalle tietokoneelle.",
              "Laitan tikun kiinni ja alan heti pelata peliä innoissani."
            ],
            "correctAnswer": "En laita tikkua koneeseen, koska siinä voi olla digitaalista ruostetta.",
            "explanation": "Tuntemattomat muistitikut ovat valtava riski! Niissä voi piillä haittaohjelmia, jotka tarttuvat koneellesi täysin huomaamatta heti tikun kytkemisen jälkeen."
          },
          {
            "id": "digiturva_4_q11",
            "type": "drag_drop",
            "question": "Raahaa oireet ja suojautumiskeinot oikeisiin laatikoihin! Mistä tunnistaa viruksen ja miten siltä suojaudutaan?",
            "draggables": [
              "Laite hidastuu ja jumittuu",
              "Lataaminen vain virallisesta kaupasta",
              "Näytölle hyppii jatkuvasti outoja mainoksia",
              "Laitteen ohjelmiston säännöllinen päivittäminen"
            ],
            "dropZones": [
              "Viruksen oireita (ruostetta)",
              "Hyviä suojautumiskeinoja (suojakilvet)"
            ],
            "correctAnswer": {
              "Laite hidastuu ja jumittuu": "Viruksen oireita (ruostetta)",
              "Lataaminen vain virallisesta kaupasta": "Hyviä suojautumiskeinoja (suojakilvet)",
              "Näytölle hyppii jatkuvasti outoja mainoksia": "Viruksen oireita (ruostetta)",
              "Laitteen ohjelmiston säännöllinen päivittäminen": "Hyviä suojautumiskeinoja (suojakilvet)"
            },
            "explanation": "Virukset aiheuttavat outoja ongelmia ja laitteen hidastelua. Fiksut valinnat kaupoissa ja ohjelmien säännölliset päivitykset pitävät laitteen terveenä!"
          },
          {
            "id": "digiturva_4_q12",
            "type": "drag_drop",
            "question": "Miten laitteen puhdistus etenee, jos epäilet saaneesi siihen haittaohjelman (digitaalista ruostetta)? Järjestä toimet!",
            "correctAnswer": {
              "Huomaat, että älylaitteesi alkaa toimia todella hitaasti ja oudosti.": "1. vaihe",
              "Kerrot asiasta heti luotettavalle aikuiselle ilman viivyttelyä.": "2. vaihe",
              "Aikuinen laittaa virustorjuntaohjelman etsimään ongelmaa.": "3. vaihe",
              "Haittaohjelma poistetaan ja laite toimii jälleen normaalisti.": "4. vaihe"
            },
            "explanation": "Aikuinen auttaa aina ensin! Virustorjuntaohjelma on kuin digitaalinen pesusieni, joka osaa etsiä ja siivota haitallisen koodin eli \"ruosteen\" pois järjestelmästä.",
            "draggables": [
              "Huomaat, että älylaitteesi alkaa toimia todella hitaasti ja oudosti.",
              "Kerrot asiasta heti luotettavalle aikuiselle ilman viivyttelyä.",
              "Aikuinen laittaa virustorjuntaohjelman etsimään ongelmaa.",
              "Haittaohjelma poistetaan ja laite toimii jälleen normaalisti."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "digiturva_4_q13",
            "type": "multiple_choice",
            "question": "Mitä tarkoittaa, kun laitteelle asennettu sovellus pyytää \"käyttöoikeuksia\" (esim. lupaa käyttää kameraa tai sijaintia)?",
            "options": [
              "Se haluaa luvan käyttää laitteesi tiettyjä osia toimiakseen oikein.",
              "Se yrittää automaattisesti ladata laitteeseesi uusia viruksia.",
              "Se pyytää lupaa poistaa laitteestasi kaikki muut pelit.",
              "Se haluaa muuttaa laitteesi näyttökuvan kokonaan mustaksi."
            ],
            "correctAnswer": "Se haluaa luvan käyttää laitteesi tiettyjä osia toimiakseen oikein.",
            "explanation": "Oikeudet ovat tavallisia asioita, mutta niissä pitää olla tarkkana! Jos täysin yksinkertainen taskulamppusovellus haluaa käyttää kameraa ja sijaintiasi, se voi olla ovela haittaohjelma."
          },
          {
            "id": "digiturva_4_q14",
            "type": "spot_the_ai",
            "question": "Etsi haittaohjelman levittäjän keksitty valhe! Mikä näistä väitteistä ei todellakaan pidä paikkaansa?",
            "options": [
              "'Virallinen sovelluskauppa pyrkii pitämään pelit aina turvallisina.'",
              "'Virustorjuntaohjelmat auttavat löytämään ja poistamaan pahoja ohjelmia.'",
              "'Lataa tämä uusi peli linkistäni, se ei ikinä sisällä mitään viruksia!'",
              "'Laitteen säännölliset päivitykset ovat tärkeitä tietoturvan kannalta.'"
            ],
            "correctAnswer": "'Lataa tämä uusi peli linkistäni, se ei ikinä sisällä mitään viruksia!'",
            "explanation": "Huijarit väittävät aina, että heidän omat linkkinsä ja tiedostonsa ovat ehdottoman turvallisia. Ainoa oikea tapa välttää digitaalinen ruoste on käyttää vain laitteen omaa, virallista sovelluskauppaa!"
          },
          {
            "id": "digiturva_4_q15",
            "type": "reverse_prompt",
            "question": "Tablettisi ruudulla lukee: \"Asennus estetty: Tämä sovellus on peräisin tuntemattomasta lähteestä ja se voi vahingoittaa laitettasi.\" Mikä asetus laitteessasi oli laitettu päälle, mikä esti viruksen?",
            "options": [
              "Sallit vain virallisten sovelluskauppojen lataukset laitteeseen.",
              "Olit laittanut laitteen kokonaan äänettömään lentokonetilaan.",
              "Laitteesi akku oli vahingossa melkein täysin lopussa.",
              "Olit asettanut näytön kirkkauden aivan liian suureksi."
            ],
            "correctAnswer": "Sallit vain virallisten sovelluskauppojen lataukset laitteeseen.",
            "explanation": "Fiksut laitteet estävät automaattisesti lataukset oudoista paikoista! Tämä hieno \"suojakilpi\" kannattaa aina pitää päällä digitaalisen ruosteen torjumiseksi."
          }
        ]
      },
      {
        "id": "digiturva_5",
        "name": "Valepukuiset liftarit",
        "questions": [
          {
            "id": "digiturva_5_q1",
            "type": "true_false",
            "question": "Kaikki videot ja kuvat, joita näet AI vanin ruudulta tai omasta puhelimestasi netissä, ovat aina 100 % aitoja ja totta.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Tekoälyn avulla voidaan luoda syväväärennöksiä eli deepfake-videoita, jotka näyttävät aidoilta, mutta ovat täysin keksittyjä \"valepukuisia liftareita\"!"
          },
          {
            "id": "digiturva_5_q2",
            "type": "multiple_choice",
            "question": "Mitä tarkoittaa \"valepukuinen liftari\" eli syväväärennös (deepfake) internetissä?",
            "options": [
              "Oikeaa liftaria, joka on pukeutunut hassuun asuun maantiellä.",
              "Tekoälyllä tehtyä feikkivideota tai kuvaa, joka näyttää aivan aidolta.",
              "Auton kameraa, joka on vahingossa asennettu täysin väärinpäin.",
              "Netin videopeliä, jossa yritetään aina ajaa erittäin kovaa vauhtia."
            ],
            "correctAnswer": "Tekoälyllä tehtyä feikkivideota tai kuvaa, joka näyttää aivan aidolta.",
            "explanation": "Syväväärennös on tekoälyn luoma huijauskuva tai -video. Tekoäly on niin taitava valepukujen tekijä, ettei omiin silmiin voi netissä enää aina luottaa."
          },
          {
            "id": "digiturva_5_q3",
            "type": "scenario",
            "question": "SKENAARIO: Kaverisi näyttää videon, jossa lempilaulajasi laulaa tosi nolosti autotallin katolla. Laulaja näyttää itseltään. Videossa on kuitenkin outoja varjoja, ja laulajan hampaat vilkkuvat hassusti suttuisina. Mitä päättelet tästä?",
            "options": [
              "Laulaja on luultavasti oikeasti kiivennyt laulamaan katolle.",
              "Video on todennäköisesti tekoälyllä tehty syväväärennös.",
              "Autotallin katto on ollut aivan liian liukas laulajalle seisoa.",
              "Puhelimen näyttö on selvästi likainen tai todella pahasti rikki."
            ],
            "correctAnswer": "Video on todennäköisesti tekoälyllä tehty syväväärennös.",
            "explanation": "Outo valaistus, suttuiset hampaat tai epäluonnolliset liikkeet ovat loistavia merkkejä \"valepukuisesta liftarista\" eli tekoälyllä tehdystä väärennöksestä."
          },
          {
            "id": "digiturva_5_q4",
            "type": "drag_drop",
            "question": "Järjestä fiksut toimenpiteet, kun näet netissä uskomattoman tai todella oudon videon! Miten paljastat mahdollisen valepukuisen liftarin askel askeleelta?",
            "correctAnswer": {
              "Pysähdy ja mieti hetki rauhassa, voiko tämä video todella olla totta.": "1. vaihe",
              "Etsi videosta outoja virheitä (kuten hassuja sormia tai outoja varjoja).": "2. vaihe",
              "Tarkista muista luotettavista uutisista (kuten YLE), onko asia oikeasti tapahtunut.": "3. vaihe",
              "Kerro aikuiselle tai kaverille, että kyseessä saattaa olla tekoälyhuijaus.": "4. vaihe"
            },
            "explanation": "Kriittinen ja fiksu medialukutaito alkaa aina pysähtymisestä ja päättyy aidon tiedon tarkistamiseen luotettavista lähteistä.",
            "draggables": [
              "Pysähdy ja mieti hetki rauhassa, voiko tämä video todella olla totta.",
              "Etsi videosta outoja virheitä (kuten hassuja sormia tai outoja varjoja).",
              "Tarkista muista luotettavista uutisista (kuten YLE), onko asia oikeasti tapahtunut.",
              "Kerro aikuiselle tai kaverille, että kyseessä saattaa olla tekoälyhuijaus."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "digiturva_5_q5",
            "type": "drag_drop",
            "question": "Yhdistä vihjeet siihen, paljastavatko ne aidon asian vai tekoälyn tekemän syväväärennöksen (deepfaken)!",
            "draggables": [
              "Kuusi sormea yhdessä kädessä",
              "Ääni on aivan eri paria huulien kanssa",
              "Luotettava uutissivusto julkaisee uutisen",
              "Taustalla on selkeää ja normaalia tekstiä"
            ],
            "dropZones": [
              "Valepukuinen liftari (Väärennös)",
              "Oikea matkustaja (Todennäköisesti aito)"
            ],
            "correctAnswer": {
              "Kuusi sormea yhdessä kädessä": "Valepukuinen liftari (Väärennös)",
              "Ääni on aivan eri paria huulien kanssa": "Valepukuinen liftari (Väärennös)",
              "Luotettava uutissivusto julkaisee uutisen": "Oikea matkustaja (Todennäköisesti aito)",
              "Taustalla on selkeää ja normaalia tekstiä": "Oikea matkustaja (Todennäköisesti aito)"
            },
            "explanation": "Tekoäly tekee usein pieniä fyysisiä virheitä kuviin, kuten laittaa käsiin liikaa sormia tai muuttaa taustan tekstit oudoiksi siansaksakirjaimiksi."
          },
          {
            "id": "digiturva_5_q6",
            "type": "spot_the_ai",
            "question": "Kuka näistä netinkäyttäjistä yrittää jakaa syväväärennöstä eteenpäin ymmärtämättä sitä? Etsi joukosta feikkivideoon langennut!",
            "options": [
              "'Katsoin uutiset televisiosta ja huomisen sääennusteen.'",
              "'Hei katso tätä videota, naapurin pappa ajaa polkupyörällä kuussa!'",
              "'Luin juuri koulun nettisivuilta, että huomenna meillä on liikuntaa.'",
              "'Tarkistin kirjaston sivuilta, onko se haluamani lempikirja vapaana.'"
            ],
            "correctAnswer": "'Hei katso tätä videota, naapurin pappa ajaa polkupyörällä kuussa!'",
            "explanation": "Syväväärennökset ovat usein täysin älyttömiä ja uskomattomia asioita, joita rosvot luovat tekoälyllä silkkaa hämmennystä ja vitsiä varten."
          },
          {
            "id": "digiturva_5_q7",
            "type": "reverse_prompt",
            "question": "Löydät netistä aidon näköisen kuvan, jossa auton sijaan tiellä kaahaakin valtava lentävä banaani, jolla on pyörät. Millä ohjeella tämä valepukuinen liftari luotiin?",
            "options": [
              "Luo fotorealistinen kuva lentävästä banaanista, jolla on auton renkaat.",
              "Laske kuinka monta banaania mahtuu ison perheauton sisälle.",
              "Etsi internetistä tietoa banaaneista ja niillä ajamisesta tiellä.",
              "Piirrä ihan tavallinen ja tylsä keltainen auto maantielle."
            ],
            "correctAnswer": "Luo fotorealistinen kuva lentävästä banaanista, jolla on auton renkaat.",
            "explanation": "Tekoäly voi luoda pyynnöstä erittäin aitoja (\"fotorealistisia\") kuvia täysin olemattomista asioista! Koska ne näyttävät niin aidoilta, ne voivat joskus huijata."
          },
          {
            "id": "digiturva_5_q8",
            "type": "true_false",
            "question": "Jos videolla puhelimessa puhuva henkilö kuulostaa ääneltään täysin tutulta, ääni on 100 % varmasti oikea. Tekoäly ei osaa väärentää ääniä.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Äänen kloonaus on yleinen syväväärennös! Tekoäly voi oppia matkimaan kenen tahansa tuttusi tai vaikkapa julkkiksen ääntä täydellisesti vain pienen ääninäytteen avulla."
          },
          {
            "id": "digiturva_5_q9",
            "type": "multiple_choice",
            "question": "Miksi valepukuisia liftareita eli deepfake-videoita oikein tehdään nettiin?",
            "options": [
              "Ihmisten hämmentämiseksi, huijaamiseksi tai ihan vain vitsillä.",
              "Koska ne korjaavat automaattisesti puhelimen särkyneen näytön.",
              "Ne säästävät paljon sähköä verrattuna tavallisiin kameroihin.",
              "Koska tekoäly haluaa tulla maailman kuuluisimmaksi näyttelijäksi."
            ],
            "correctAnswer": "Ihmisten hämmentämiseksi, huijaamiseksi tai ihan vain vitsillä.",
            "explanation": "Syväväärennöksillä pyritään usein saamaan huomiota sosiaalisessa mediassa. Niitä tehdään vitsillä, mutta joskus myös pahoissa aikeissa, jotta ihmiset uskoisivat valheita."
          },
          {
            "id": "digiturva_5_q10",
            "type": "scenario",
            "question": "SKENAARIO: Saat outoon aikaan ääniviestin kaveriltasi. Ääni on täysin sama, mutta hän pyytää sinua kiireesti kertomaan pelitilisi salasanan kummalliseen hätätilanteeseen vedoten. Mitä teet?",
            "options": [
              "Annan salasanan heti, koska ääni oli aivan varmasti hänen.",
              "Soitan heti itse takaisin kaverin numeroon varmistaakseni asian.",
              "Vastaan antamalla hänelle tahallani täysin väärän salasanan.",
              "Lähetän oman salasanani varmuuden vuoksi kaikkiin someihin."
            ],
            "correctAnswer": "Soitan heti itse takaisin kaverin numeroon varmistaakseni asian.",
            "explanation": "Tekoäly voi väärentää (kloonata) ystäväsi äänen. Aina, jos puhelimessa kysytään kiireellä salasanoja tai rahaa, tilanne kannattaa varmistaa soittamalla tuttuun numeroon!"
          },
          {
            "id": "digiturva_5_q11",
            "type": "drag_drop",
            "question": "Raahaa laatikkoon ne vihjeet, joista voit paljastaa netissä olevan oudon kuvaväärennöksen!",
            "draggables": [
              "Uutinen löytyy luotettavasta YLEn uutissovelluksesta",
              "Taustalla oleva kyltin teksti on pelkkää epäselvää siansaksaa",
              "Henkilön silmät eivät räpäytä ollenkaan koko videon aikana",
              "Video on kuvattu täysin selkeästi oikealla koulun pihalla"
            ],
            "dropZones": [
              "Paljastaa tekoälyn väärennöksen",
              "Kertoo kuvan aitoudesta"
            ],
            "correctAnswer": {
              "Taustalla oleva kyltin teksti on pelkkää epäselvää siansaksaa": "Paljastaa tekoälyn väärennöksen",
              "Henkilön silmät eivät räpäytä ollenkaan koko videon aikana": "Paljastaa tekoälyn väärennöksen",
              "Uutinen löytyy luotettavasta YLEn uutissovelluksesta": "Kertoo kuvan aitoudesta",
              "Video on kuvattu täysin selkeästi oikealla koulun pihalla": "Kertoo kuvan aitoudesta"
            },
            "explanation": "Tekoälyn valepuku on usein hieman vajaa! Luonnottomat silmät, olemattomat kirjaimet ja silottunut iho paljastavat yleensä sen huijaukseksi."
          },
          {
            "id": "digiturva_5_q12",
            "type": "drag_drop",
            "question": "Järjestä askeleet \"valepukuisen liftarin\" luomiseen. Miten rosvo on tehnyt taitavan deepfake-videon julkkiksesta?",
            "correctAnswer": {
              "Rosvo kerää netistä satoja oikeita kuvia ja videoita julkkiksesta.": "1. vaihe",
              "Tekoäly opetetaan datan avulla tuntemaan henkilön kasvot ja ilmeet.": "2. vaihe",
              "Rosvo antaa tekoälylle uuden tekstin ja pyytää sitä tekemään videon.": "3. vaihe",
              "Tekoäly luo feikkivideon, jossa julkkis sanoo rosvon keksimiä asioita.": "4. vaihe"
            },
            "explanation": "Tekoäly voi luoda väärennöksen vain siksi, että sille annetaan valtavasti oikeaa kuva- ja äänidataa opiskeltavaksi. Sitten se osaa matkia kohdetta täydellisesti!",
            "draggables": [
              "Rosvo kerää netistä satoja oikeita kuvia ja videoita julkkiksesta.",
              "Tekoäly opetetaan datan avulla tuntemaan henkilön kasvot ja ilmeet.",
              "Rosvo antaa tekoälylle uuden tekstin ja pyytää sitä tekemään videon.",
              "Tekoäly luo feikkivideon, jossa julkkis sanoo rosvon keksimiä asioita."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "digiturva_5_q13",
            "type": "multiple_choice",
            "question": "Huomaat netissä erikoisen videon, jossa poliisi ilmoittaa zombien hyökkäävän kaupunkiin maantieltä. Miten saat nopeiten selville, onko tämä väärennös?",
            "options": [
              "Katson ulos auton ikkunasta ja odotan zombeja saapuvaksi.",
              "Etsin tietoa virallisista ja luotettavista uutisista (kuten YLE).",
              "Jaan videon heti kaikille kavereilleni suurena varoituksena.",
              "Kysyn asiasta suoraan videon zombilta netin kommenttikentässä."
            ],
            "correctAnswer": "Etsin tietoa virallisista ja luotettavista uutisista (kuten YLE).",
            "explanation": "Kun deepfake-video levittää uskomatonta tietoa, se paljastuu helpoiten oikeiden uutisten avulla. Jos viralliset uutiset eivät puhu asiasta mitään, kyseessä on huijaus!"
          },
          {
            "id": "digiturva_5_q14",
            "type": "spot_the_ai",
            "question": "Kolme näistä asioista voi hyvin olla täysin totta netissä, mutta yksi niistä on tyypillinen \"valepukuinen liftari\" ja huijaus. Mikä?",
            "options": [
              "Video, jossa kissa leikkii lankakerällä omistajansa olohuoneessa.",
              "Kuva, jossa tunnettu kuuluisa näyttelijä syö isoa avaruusalusta.",
              "Uutinen, jossa kerrotaan aivan uuden koulun rakentamisesta lähistölle.",
              "Sääennuste, jossa luvataan paljon rankkaa vesisadetta huomiseksi."
            ],
            "correctAnswer": "Kuva, jossa tunnettu kuuluisa näyttelijä syö isoa avaruusalusta.",
            "explanation": "Absurdit, uskomattomat ja luonnottomat tilanteet (joissa julkkikset tekevät jotain pähkähullua) ovat erittäin helposti tunnistettavissa tekoälyllä tehdyiksi syväväärennöksiksi!"
          },
          {
            "id": "digiturva_5_q15",
            "type": "reverse_prompt",
            "question": "Olet luonut hauskan \"valepukuisen liftarin\": feikkivideon, jossa suomalainen lempipelaajasi puhuu yllättäen sujuvaa japania, vaikka hän ei osaa kieltä oikeasti ollenkaan! Mikä käsky annettiin äänenkloonaus-tekoälylle?",
            "options": [
              "Käännä pelaajan oikea suomenkielinen ääni täysin japanin kielelle.",
              "Tee video, jossa pelaaja on aivan hiljaa ja radiosta kuuluu musiikkia.",
              "Opeta minulle, miten japanin kieltä puhutaan oikeaoppisesti peleissä.",
              "Etsi internetistä pelaajia, jotka oikeasti puhuvat monia vieraita kieliä."
            ],
            "correctAnswer": "Käännä pelaajan oikea suomenkielinen ääni täysin japanin kielelle.",
            "explanation": "Tekoäly voi ottaa henkilön oman aidon äänen, kääntää siinä sanotun tekstin, ja pukea uuden kielen aivan alkuperäisen ihmisen kuuloiseksi ääneksi. Se on ovela valepuku!"
          }
        ]
      },
      {
        "id": "digiturva_6",
        "name": "Hätävilkut päälle!",
        "questions": [
          {
            "id": "digiturva_6_q1",
            "type": "true_false",
            "question": "Jos netissä tulee vastaan pelottava tai outo kuva, paras ratkaisu on laittaa laite piiloon sängyn alle ja olla kertomatta asiasta kenellekään.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Pelottavat asiat netissä eivät katoa piilottamalla. Laita \"hätävilkut päälle\" ja kerro asiasta heti rohkeasti jollekin luotettavalle aikuiselle!"
          },
          {
            "id": "digiturva_6_q2",
            "type": "multiple_choice",
            "question": "Mitä \"hätävilkkujen laittaminen päälle\" tarkoittaa, kun puhutaan AI vanin ja netin turvallisuudesta?",
            "options": [
              "Laitteen näytön vilkuttamista nopeasti edestakaisin.",
              "Luotettavan aikuisen hakemista apuun heti, kun jokin pelottaa.",
              "Kaikkien nettisivujen sulkemista ja laitteen tuhoamista.",
              "Auton oikeiden valojen vilkuttamista autotallin pihalla."
            ],
            "correctAnswer": "Luotettavan aikuisen hakemista apuun heti, kun jokin pelottaa.",
            "explanation": "Aivan kuten liikenteessä hätävilkut varoittavat vaarasta ja pysäyttävät tilanteen, netissä se tarkoittaa avun pyytämistä fiksulta aikuiselta nopeasti ja rohkeasti."
          },
          {
            "id": "digiturva_6_q3",
            "type": "scenario",
            "question": "SKENAARIO: Pelaat takapenkillä kivaa autopeliä. Yhtäkkiä vieras pelaaja alkaa lähettää sinulle ilkeitä ja uhkailevia viestejä chatissa. Mitä sinun kannattaa tehdä ensimmäiseksi?",
            "options": [
              "Alan heti kirjoittaa hänelle takaisin yhtä ilkeitä viestejä.",
              "Lopetan pelaamisen ja pyydän etupenkiltä aikuisen apuun.",
              "Poistan koko pelin ja heitän puhelimeni roskakoriin.",
              "Kysyn pelin muilta pelaajilta, mitä he haluaisivat minun tekevän."
            ],
            "correctAnswer": "Lopetan pelaamisen ja pyydän etupenkiltä aikuisen apuun.",
            "explanation": "Kiusaajille tai uhkailijoille ei kannata koskaan vastata tai jäädä väittelemään. Paras ratkaisu on hakea aikuinen, joka osaa estää kiusaajan ja tehdä netistä taas turvallisen."
          },
          {
            "id": "digiturva_6_q4",
            "type": "drag_drop",
            "question": "Järjestä oikeaan järjestykseen askeleet, kun näet tabletilla oudon ja pelottavan videon, joka saa sinut ahdistuneeksi.",
            "correctAnswer": {
              "Sulje video tai laita laite rauhallisesti pois pöydälle.": "1. vaihe",
              "Etsi heti käsiisi joku luotettava aikuinen (esim. vanhempi).": "2. vaihe",
              "Kerro aikuiselle rehellisesti, mitä näit ja miltä se tuntui.": "3. vaihe",
              "Aikuinen auttaa sinua ja estää pelottavan videon näkymisen jatkossa.": "4. vaihe"
            },
            "explanation": "Pelottavat asiat on tärkeä käsitellä yhdessä aikuisen kanssa. Näin paha mieli ei jää vaivaamaan ja laite saadaan tutkittua turvalliseksi.",
            "draggables": [
              "Sulje video tai laita laite rauhallisesti pois pöydälle.",
              "Etsi heti käsiisi joku luotettava aikuinen (esim. vanhempi).",
              "Kerro aikuiselle rehellisesti, mitä näit ja miltä se tuntui.",
              "Aikuinen auttaa sinua ja estää pelottavan videon näkymisen jatkossa."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "digiturva_6_q5",
            "type": "drag_drop",
            "question": "Raahaa netin eri tilanteet oikeisiin laatikoihin! Missä tilanteessa pitää laittaa \"hätävilkut päälle\" ja milloin voi jatkaa matkaa turvallisesti?",
            "draggables": [
              "Peli pyytää oikeaa rahaa uusista autoista",
              "Vieras kyselee osoitettasi pelin chatissa",
              "Pelaat tuttua peliä oman kaverin kanssa",
              "Katsot hauskaa kissavideota YouTubesta"
            ],
            "dropZones": [
              "Laita hätävilkut päälle (Hae aikuinen)",
              "Jatka turvallista matkaa (Ei hätää)"
            ],
            "correctAnswer": {
              "Peli pyytää oikeaa rahaa uusista autoista": "Laita hätävilkut päälle (Hae aikuinen)",
              "Vieras kyselee osoitettasi pelin chatissa": "Laita hätävilkut päälle (Hae aikuinen)",
              "Pelaat tuttua peliä oman kaverin kanssa": "Jatka turvallista matkaa (Ei hätää)",
              "Katsot hauskaa kissavideota YouTubesta": "Jatka turvallista matkaa (Ei hätää)"
            },
            "explanation": "Kaikki raha-asiat ja vieraiden outojen kyselyiden tilanteet ovat sellaisia, joissa tarvitaan aina aikuisen apua. Tuttujen kanssa pelaaminen on täysin turvallista!"
          },
          {
            "id": "digiturva_6_q6",
            "type": "spot_the_ai",
            "question": "Kuka näistä netissä vastaan tulleista ohjeistajista antaa sinulle huonoimman ja vaarallisimman neuvon pelottavassa tilanteessa?",
            "options": [
              "'Jos pelästyt videota, kerro siitä heti opettajalle tai vanhemmalle.'",
              "'Aikuinen osaa auttaa sinua estämään ilkeät pelaajat pelissä.'",
              "'Älä koskaan kerro aikuisille, tai he vievät laitteesi ikuisesti pois.'",
              "'On aivan normaalia pelästyä outoja asioita, hae vain apua rohkeasti.'"
            ],
            "correctAnswer": "'Älä koskaan kerro aikuisille, tai he vievät laitteesi ikuisesti pois.'",
            "explanation": "Huijarit ja ilkeät tyypit yrittävät usein pelotella sinua pysymään hiljaa. Fiksu aikuinen ei koskaan suutu sinulle tai vie laitetta, jos olet eksynyt netissä vahingossa outoon paikkaan!"
          },
          {
            "id": "digiturva_6_q7",
            "type": "reverse_prompt",
            "question": "AI vanin ruudulle tulee tekoälyn kirjoittama ohje: \"Aikuinen on kuin autosi kartanlukija. Kun olet eksyksissä, peloissasi tai et tiedä mihin kääntyä netissä, kysy häneltä aina neuvoa!\" Mikä pyyntö (prompti) tuotti tämän?",
            "options": [
              "Kerro minulle vitsi autojen nopeista ja taitavista kartanlukijoista.",
              "Selitä, miksi lapsen pitää pyytää apua aikuiselta netissä.",
              "Miten voin piilottaa oman nettihistorian täysin vanhemmiltani?",
              "Anna minulle yksityiskohtaiset ohjeet paperisen tiekartan lukemiseen."
            ],
            "correctAnswer": "Selitä, miksi lapsen pitää pyytää apua aikuiselta netissä.",
            "explanation": "Aikuinen on kokeneempi \"kartanlukija\" netin maailmassa. He ovat siellä auttaakseen sinua navigoimaan turvallisesti ohi netin pelottavista asioista!"
          },
          {
            "id": "digiturva_6_q8",
            "type": "true_false",
            "question": "Jos vahingossa klikkaat outoa linkkiä ja laite menee jumiin, sinun pitää yrittää korjata se salaa itse, jotta kukaan ei huomaa.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Vahinkoja sattuu kaikille, eikä niitä kannata hävetä! Älä yritä korjata laitetta salaa, vaan laita hätävilkut päälle ja hae aikuinen. Yhdessä ongelma selviää nopeammin."
          },
          {
            "id": "digiturva_6_q9",
            "type": "multiple_choice",
            "question": "Kuka on paras henkilö pyytää apuun, jos joku kiusaa sinua autotallin moninpelissä?",
            "options": [
              "Toinen tuntematon ja vahvempi pelaaja pelin sisältä.",
              "Oma vanhempi, opettaja tai joku muu tuttu aikuinen.",
              "Pelin oma monimutkainen ja todella pitkä ohjekirja.",
              "Pikkusisko tai pikkuveli, joka on sinua vähän nuorempi."
            ],
            "correctAnswer": "Oma vanhempi, opettaja tai joku muu tuttu aikuinen.",
            "explanation": "Luotettava aikuinen (sinun apukuskisi) on paras tuki ja turva. He osaavat auttaa sinua estämään kiusaajan fiksusti ja varmistavat, että sinulla on taas turvallinen olo."
          },
          {
            "id": "digiturva_6_q10",
            "type": "scenario",
            "question": "SKENAARIO: Olet lukenut netistä pelottavan uutisen, jossa väitetään, että kaikki maailman autot lopettavat toimintansa huomenna. Uutinen ahdistaa sinua todella paljon. Mitä teet tässä tilanteessa?",
            "options": [
              "Yritän unohtaa asian ja valvon koko yön peläten autojen puolesta.",
              "Laitan hätävilkut päälle ja kysyn aikuiselta, onko uutinen totta.",
              "Jaan uutisen heti kaikille kavereille, jotta hekin pelästyisivät sitä.",
              "Menet autotalliin ja yrität purkaa perheesi auton osiin aivan heti."
            ],
            "correctAnswer": "Laitan hätävilkut päälle ja kysyn aikuiselta, onko uutinen totta.",
            "explanation": "Netissä on paljon valeuutisia ja pelottavia keksittyjä juttuja. Aikuinen osaa kertoa sinulle rauhallisesti, onko uutinen totta vai ei, ja auttaa karkottamaan pelon!"
          },
          {
            "id": "digiturva_6_q11",
            "type": "drag_drop",
            "question": "Miten toimit, jos kohtaat netissä maantierosvon (esim. kiusaajan)? Yhdistä fiksut teot oikeisiin tavoitteisiin!",
            "draggables": [
              "En vastaa lainkaan ilkeisiin viesteihin",
              "Otan kuvakaappauksen (screenshot) viesteistä",
              "Kerron asiasta heti luotettavalle aikuiselle"
            ],
            "dropZones": [
              "Jotta rosvo ei saa minusta reaktiota",
              "Jotta aikuisella on todiste tapahtuneesta",
              "Jotta saan apua tilanteen lopettamiseen"
            ],
            "correctAnswer": {
              "En vastaa lainkaan ilkeisiin viesteihin": "Jotta rosvo ei saa minusta reaktiota",
              "Otan kuvakaappauksen (screenshot) viesteistä": "Jotta aikuisella on todiste tapahtuneesta",
              "Kerron asiasta heti luotettavalle aikuiselle": "Jotta saan apua tilanteen lopettamiseen"
            },
            "explanation": "Nämä kolme askelta ovat täydellinen ja turvallinen tapa toimia, jos joku kiusaa sinua netissä. Hätävilkut päälle, todisteet talteen ja aikuinen apuun!"
          },
          {
            "id": "digiturva_6_q12",
            "type": "drag_drop",
            "question": "Ystäväsi on surullinen, koska hän näki netissä jotain todella ahdistavaa, mutta hän ei uskalla kertoa siitä kenellekään. Järjestä, miten autat häntä!",
            "correctAnswer": {
              "Kuuntelet ystävääsi rauhassa ja olet hänen tukenaan tilanteessa.": "1. vaihe",
              "Kerrot hänelle, että pelottavista asioista ei tarvitse selvitä yksin.": "2. vaihe",
              "Ehdottamalla, että menette yhdessä kertomaan asiasta aikuiselle.": "3. vaihe",
              "Aikuinen auttaa teitä molempia ja poistaa ystäväsi pahan mielen.": "4. vaihe"
            },
            "explanation": "Joskus kaveria voi jännittää tai hävettää avun pyytäminen. Paras ystävä on sellainen, joka auttaa laittamaan hätävilkut päälle ja menee kaverin kanssa yhdessä aikuisen luo!",
            "draggables": [
              "Kuuntelet ystävääsi rauhassa ja olet hänen tukenaan tilanteessa.",
              "Kerrot hänelle, että pelottavista asioista ei tarvitse selvitä yksin.",
              "Ehdottamalla, että menette yhdessä kertomaan asiasta aikuiselle.",
              "Aikuinen auttaa teitä molempia ja poistaa ystäväsi pahan mielen."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "digiturva_6_q13",
            "type": "multiple_choice",
            "question": "Miksi jotkut lapset pelkäävät laittaa \"hätävilkkuja päälle\" ja kertoa aikuiselle nettihuolistaan?",
            "options": [
              "Koska he luulevat, että autotallin sähköt menevät samalla kokonaan poikki.",
              "Koska he pelkäävät, että aikuinen suuttuu tai ottaa laitteen pois.",
              "Koska hätävilkkujen nappi on yleensä aivan liian raskas painaa.",
              "Koska he haluavat mieluummin ratkaista vaikeat pulmat kokonaan yksin."
            ],
            "correctAnswer": "Koska he pelkäävät, että aikuinen suuttuu tai ottaa laitteen pois.",
            "explanation": "Tämä on todella yleinen pelko, mutta se on täysin turha! Fiksut aikuiset ymmärtävät, että netissä sattuu vahinkoja, ja heidän tärkein tehtävänsä on auttaa sinua, ei rangaista."
          },
          {
            "id": "digiturva_6_q14",
            "type": "spot_the_ai",
            "question": "Kuka näistä aikuisista toimii fiksusti \"apukuskina\", jos tulet kertomaan hänelle netissä sattuneesta vahingosta tai pelottavasta asiasta?",
            "options": [
              "'Miksi ihmeessä klikkasit sitä? Nyt menee laite viikoksi kokonaan jäähylle!'",
              "'Okei, en ehdi nyt katsoa yhtään, yritä ratkaista ongelma ihan itse.'",
              "'Hyvä kun kerroit minulle heti. Älä huoli, korjataan tämä asia yhdessä.'",
              "'Minä soitan heti poliisille, tämä on maailman pahin ja isoin katastrofi.'"
            ],
            "correctAnswer": "'Hyvä kun kerroit minulle heti. Älä huoli, korjataan tämä asia yhdessä.'",
            "explanation": "Hyvä apukuski eli aikuinen pysyy aina rauhallisena, kiittää sinua rohkeudesta kertoa asiasta, ja auttaa sinua korjaamaan tilanteen yhdessä turvallisesti."
          },
          {
            "id": "digiturva_6_q15",
            "type": "reverse_prompt",
            "question": "Tekoäly kirjoittaa ohjeen: \"Hätävilkut ovat auton tärkein turvavaruste! Käytä niitä aina, kun eksyt oudoille sivustoille tai tapaat pelottavia digirosvoja.\" Mikä pyyntö (prompti) sai aikaan tämän vertauskuvan?",
            "options": [
              "Kerro miten auton oikeita hätävilkkuja korjataan autotallissa.",
              "Selitä avun hakeminen netissä käyttämällä auton hätävilkkuja esimerkkinä.",
              "Listaa kaikki maailman vaarallisimmat tietokonevirukset ja huijaukset.",
              "Keksi jännittävä tarina maantierosvosta, joka pöllii auton renkaat."
            ],
            "correctAnswer": "Selitä avun hakeminen netissä käyttämällä auton hätävilkkuja esimerkkinä.",
            "explanation": "Hätävilkkujen laittaminen on loistava vertauskuva. Se tarkoittaa, että pysähdyt, ilmoitat muille (aikuisille) olevasi pulassa, ja odotat rauhassa apua paikalle ilman että yrität selvitä yksin!"
          }
        ]
      },
      {
        "id": "digiturva_7",
        "name": "G. Tarkastuspiste – Maantierosvon Tietulli",
        "questions": [
          {
            "id": "digiturva_7_q1",
            "type": "true_false",
            "question": "Vahva ja turvallinen salasana AI vanin tietokoneeseen on aina pelkkä oma etunimesi, koska sen muistaa itse parhaiten.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Oma etunimi on maantierosvolle liian helppo arvata. Vahva salasana (turvalukko) on pitkä, monimutkainen salalause ja vain sinun tiedossasi!"
          },
          {
            "id": "digiturva_7_q2",
            "type": "multiple_choice",
            "question": "Mitä tarkoittaa omien tietojen pitäminen \"lukitussa hanskalokerossa\"?",
            "options": [
              "Tavaroiden piilottamista oikeaan autoon.",
              "Yksityisten tietojen (kuten nimen, osoitteen ja koulun) pitämistä turvassa ja poissa julkisesta netistä.",
              "Kaikkien nettisivujen sulkemista.",
              "Sitä, ettei netissä saa pelata koskaan."
            ],
            "correctAnswer": "Yksityisten tietojen (kuten nimen, osoitteen ja koulun) pitämistä turvassa ja poissa julkisesta netistä.",
            "explanation": "Omat tärkeät henkilötiedot pidetään aina piilossa \"lukitussa hanskalokerossa\", eikä niitä jaeta chateissa koskaan vieraille ihmisille."
          },
          {
            "id": "digiturva_7_q3",
            "type": "scenario",
            "question": "SKENAARIO: Sähköpostiisi pamahtaa viesti: \"ONNEA! Olet voittanut uuden puhelimen! Klikkaa linkkiä heti lunastaaksesi sen!\" Mitä teet?",
            "options": [
              "Klikkaan nopeasti ennen kuin palkinto katoaa.",
              "Lähetän viestin kavereillekin.",
              "En klikkaa, vaan suljen viestin ja kysyn neuvoa aikuiselta.",
              "Annan viestiin pankkikortin tiedot."
            ],
            "correctAnswer": "En klikkaa, vaan suljen viestin ja kysyn neuvoa aikuiselta.",
            "explanation": "Jos jokin on liian hyvää ollakseen totta, se on \"maantierosvon ansa\" eli tietojenkalasteluviesti! Älä koskaan klikkaa epäilyttäviä hätäilylinkkejä."
          },
          {
            "id": "digiturva_7_q4",
            "type": "drag_drop",
            "question": "Laita nämä tiedot järjestykseen: aloita siitä, minkä saa kertoa netissä kaikille, ja päätä siihen, mikä pitää salata ehdottomasti!",
            "correctAnswer": {
              "Pelissä käyttämäsi keksitty nimimerkki": "1. vaihe",
              "Oma etunimesi ja ikäsi": "2. vaihe",
              "Koko nimesi, kotiosoitteesi ja puhelinnumerosi": "3. vaihe"
            },
            "explanation": "Keksityt nimet ja lempivärit ovat täysin turvallisia. Sen sijaan tarkat asuinpaikat ja puhelinnumerot kuuluvat aina lukittuun hanskalokeroon!",
            "draggables": [
              "Pelissä käyttämäsi keksitty nimimerkki",
              "Oma etunimesi ja ikäsi",
              "Koko nimesi, kotiosoitteesi ja puhelinnumerosi"
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe"
            ]
          },
          {
            "id": "digiturva_7_q5",
            "type": "drag_drop",
            "question": "Miten vältät laitteesi saastumisen \"digitaalisella ruosteella\" (viruksilla)? Yhdistä teko ja seuraus!",
            "draggables": [
              "Lataat sovellukset vain virallisista sovelluskaupoista",
              "Lataat ilmaisen kopiopelin tuntemattomalta nettisivulta"
            ],
            "dropZones": [
              "Laite pysyy turvassa ja terveenä",
              "Laite voi saada haittaohjelman (viruksen)"
            ],
            "correctAnswer": {
              "Lataat sovellukset vain virallisista sovelluskaupoista": "Laite pysyy turvassa ja terveenä",
              "Lataat ilmaisen kopiopelin tuntemattomalta nettisivulta": "Laite voi saada haittaohjelman (viruksen)"
            },
            "explanation": "Viralliset kaupat tarkistavat sovellukset. Tuntemattomilta sivuilta ladatut ilmaiset kopiot ovat suorin reitti laitteen saastumiseen haittaohjelmalla."
          },
          {
            "id": "digiturva_7_q6",
            "type": "spot_the_ai",
            "question": "Kuka näistä neuvojista ei ymmärrä \"valepukuisia liftareita\" (syväväärennöksiä) ollenkaan?",
            "options": [
              "'Etsi oudosta videosta virheitä, kuten outoja varjoja tai sulaneita muotoja.'",
              "'Kaikki videot netissä ovat aina 100 % aitoja ja totta, tekoäly ei osaa väärentää niitä.'",
              "'Tarkista uskomattomat uutiset aina luotettavasta lähteestä, kuten YLEltä.'",
              "'Tekoäly voi oppia matkimaan ihmisen ääntä täydellisesti.'"
            ],
            "correctAnswer": "'Kaikki videot netissä ovat aina 100 % aitoja ja totta, tekoäly ei osaa väärentää niitä.'",
            "explanation": "Tekoälyllä voidaan tehdä syväväärennöksiä eli deepfake-videoita ja -ääniä, jotka näyttävät aivan aidoilta, mutta ovat täysin keksittyjä!"
          },
          {
            "id": "digiturva_7_q7",
            "type": "reverse_prompt",
            "question": "Laitat AI vanin turvallisuusasetukset päälle ja ruudulla lukee: \"Tilisi on nyt yksityinen. Kukaan tuntematon ei näe kuviasi tai sijaintiasi.\" Mikä ohje tämän teki?",
            "options": [
              "Jaa tietoni kaikille internetin käyttäjille.",
              "Laita 'lukittu hanskalokero' päälle ja piilota omat tietoni vierailta.",
              "Etsi minulle kuvia hienoista autoista.",
              "Sammuta puhelimen kamera lopullisesti."
            ],
            "correctAnswer": "Laita 'lukittu hanskalokero' päälle ja piilota omat tietoni vierailta.",
            "explanation": "Sometilien ja pelien muuttaminen yksityisiksi on paras tapa pitää maantierosvot loitolla. Silloin vain oikeat, hyväksytyt ystäväsi näkevät tietosi!"
          },
          {
            "id": "digiturva_7_q8",
            "type": "true_false",
            "question": "Jos pelissä tulee vastaan outo ja pelottava tilanne tai ihminen, laitteen voi vain piilottaa sängyn alle ja asian voi unohtaa.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Pelottavat asiat eivät katoa piilottamalla. Fiksu kuski laittaa \"hätävilkut päälle\" ja kertoo tapahtuneesta välittömästi luotettavalle aikuiselle, joka osaa auttaa!"
          },
          {
            "id": "digiturva_7_q9",
            "type": "multiple_choice",
            "question": "Miksi kaksivaiheinen tunnistautuminen (kuten puhelimeen tuleva koodi) on tärkeää salasanojen lisäksi?",
            "options": [
              "Se tekee autosta paljon nopeamman ajaa.",
              "Se on vahva lisälukko: vaikka rosvo arvaa salasanasi, hän ei pääse sisään ilman puhelintasi.",
              "Se piilottaa laitteen kokonaan internetistä.",
              "Se maksaa tilillesi ilmaista rahaa joka päivä."
            ],
            "correctAnswer": "Se on vahva lisälukko: vaikka rosvo arvaa salasanasi, hän ei pääse sisään ilman puhelintasi.",
            "explanation": "Se toimii erinomaisena \"turvalukkona\". Vaikka salasana vuotaisi varkaille, pelitilisi pysyy turvassa ilman toista varmistuskoodia!"
          },
          {
            "id": "digiturva_7_q10",
            "type": "scenario",
            "question": "SKENAARIO: Kuulet pelin äänichatissa kaverisi äänen, mutta hän pyytää kiireesti antamaan pelitilisi salasanan. Ääni kuulostaa oikealta, mutta pyyntö on todella outo. Mitä teet?",
            "options": [
              "Annan salasanan heti, koska ääni on tuttu.",
              "Soitan kaverille oikealla puhelimella varmistaakseni asian, sillä kyseessä voi olla väärennetty ääni.",
              "Lähetän salasanani kaikille muillekin pelaajille.",
              "Nauran ja poistan pelin kokonaan."
            ],
            "correctAnswer": "Soitan kaverille oikealla puhelimella varmistaakseni asian, sillä kyseessä voi olla väärennetty ääni.",
            "explanation": "Tekoäly voi kloonata \"valepukuisille liftareille\" aivan aidon kuuloisen äänen! Omat salasanat pidetään aina itsellä, ja oudot pyynnöt pitää varmistaa muuta kautta. ________________"
          }
        ]
      }
    ]
  },
  {
    "id": "aivoterveys",
    "name": "Aivoterveys",
    "subcategories": [
      {
        "id": "aivoterveys_1",
        "name": "Huoltotauko",
        "questions": [
          {
            "id": "aivoterveys_1_q1",
            "type": "true_false",
            "question": "Aivot ovat kuin auton ikiliikkuja, ne jaksavat katsoa ruutua vaikka koko päivän ilman yhtäkään huoltotaukoa.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Aivot väsyvät ja \"ylikuumenevat\" aivan kuten auton moottori, jos ne eivät saa säännöllisiä huoltotaukoja ruuduista!"
          },
          {
            "id": "aivoterveys_1_q2",
            "type": "multiple_choice",
            "question": "Mitä tarkoittaa, kun aivot \"ylikuumenevat\" liiallisesta ruutuajasta autotallin peleissä?",
            "options": [
              "Päästä alkaa nousta oikeaa savua.",
              "Keskittyminen herpaantuu ja olo on väsynyt.",
              "Opit pelaamaan pelejä paljon nopeammin.",
              "Silmät muuttuvat täysin punaisiksi."
            ],
            "correctAnswer": "Keskittyminen herpaantuu ja olo on väsynyt.",
            "explanation": "Ylikuumeneminen tarkoittaa aivojen väsymistä. Silloin kiukuttaa herkemmin, keskittyminen on vaikeaa ja silmiäkin saattaa särkeä. Siksi säännölliset tauot ovat tärkeitä."
          },
          {
            "id": "aivoterveys_1_q3",
            "type": "scenario",
            "question": "SKENAARIO: Olet pelannut takapenkillä AI vanin tabletilla jo kaksi tuntia putkeen. Silmiäsi hieman särkee ja peli alkaa ärsyttää. Mitä on fiksuinta tehdä?",
            "options": [
              "Pelata vielä kovemmin, jotta voitat pelin.",
              "Laittaa laite kiinni ja pitää kunnon huoltotauko.",
              "Vaihtaa nopeasti toiseen, vielä nopeampaan peliin.",
              "Juoda energiajuoma ja jatkaa ruudun tuijottamista."
            ],
            "correctAnswer": "Laittaa laite kiinni ja pitää kunnon huoltotauko.",
            "explanation": "Kun peli alkaa kiukuttaa tai silmiä särkeä, aivosi huutavat huoltotaukoa! Silloin on parasta katsella ulos ikkunasta ja antaa aivojen levätä oikeasti ilman ruutuja."
          },
          {
            "id": "aivoterveys_1_q4",
            "type": "drag_drop",
            "question": "Järjestä hyvän \"huoltotauon\" askeleet oikeaan järjestykseen, kun olet pelannut pitkään!",
            "correctAnswer": {
              "Huomaat, että olet tuijottanut ruutua jo kauan.": "1. vaihe",
              "Laitat pelilaitteen kokonaan kiinni ja sivuun.": "2. vaihe",
              "Nouset ylös, venyttelet ja katsot kauas ulos.": "3. vaihe",
              "Aivosi viilenevät ja olet taas täynnä energiaa.": "4. vaihe"
            },
            "explanation": "Ruututauko toimii parhaiten, kun laitat laitteen oikeasti pois, liikut hieman ja lepuutat silmiäsi katsomalla jonnekin kauas horisonttiin.",
            "draggables": [
              "Huomaat, että olet tuijottanut ruutua jo kauan.",
              "Laitat pelilaitteen kokonaan kiinni ja sivuun.",
              "Nouset ylös, venyttelet ja katsot kauas ulos.",
              "Aivosi viilenevät ja olet taas täynnä energiaa."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "aivoterveys_1_q5",
            "type": "drag_drop",
            "question": "Raahaa toiminnot oikeisiin laatikoihin! Mikä on hyvää huoltotaukoa aivoille ja mikä vain jatkaa ruutuaikaa?",
            "draggables": [
              "Katselet maisemia ikkunasta",
              "Selaat puhelimesta hauskoja videoita",
              "Käyt ulkona potkimassa palloa",
              "Katsot elokuvaa auton televisiosta"
            ],
            "dropZones": [
              "Tekee aivoille hyvää (Huoltotauko)",
              "Rasittaa aivoja lisää (Ruutuaikaa)"
            ],
            "correctAnswer": {
              "Katselet maisemia ikkunasta": "Tekee aivoille hyvää (Huoltotauko)",
              "Käyt ulkona potkimassa palloa": "Tekee aivoille hyvää (Huoltotauko)",
              "Selaat puhelimesta hauskoja videoita": "Rasittaa aivoja lisää (Ruutuaikaa)",
              "Katsot elokuvaa auton televisiosta": "Rasittaa aivoja lisää (Ruutuaikaa)"
            },
            "explanation": "Ruudun vaihtaminen toiseen (esimerkiksi pelistä elokuvaan) ei ole aivoille tauko. Oikea aivojen huoltotauko tehdään aina täysin ilman digilaitteita!"
          },
          {
            "id": "aivoterveys_1_q6",
            "type": "spot_the_ai",
            "question": "Kuka näistä neuvojista ei ymmärrä ihmisaivojen tarvetta taukoihin ja antaa huonon ohjeen? Etsi joukosta tekoälyn huono vinkki!",
            "options": [
              "'Ihmisen aivot tarvitsevat säännöllisesti lepoa ruuduista.'",
              "'Voit pelata peliä 24 tuntia putkeen, jos kytket laitteen laturiin.'",
              "'Pidä aina tunnin välein lyhyt tauko ja venyttele jalkoja.'",
              "'Liika ruutuaika voi tehdä olon levottomaksi ja väsyneeksi.'"
            ],
            "correctAnswer": "'Voit pelata peliä 24 tuntia putkeen, jos kytket laitteen laturiin.'",
            "explanation": "Koneet ja tekoäly jaksavat toimia loputtomiin pelkän sähkön avulla. Ihmisaivot taas tarvitsevat aina liikuntaa, unta ja huoltotaukoja toimiakseen kunnolla!"
          },
          {
            "id": "aivoterveys_1_q7",
            "type": "reverse_prompt",
            "question": "Tekoäly antaa sinulle ohjeen: \"Muista, että asiantuntijoiden mukaan lasten viihderuutuaika on hyvä pitää enintään 1-2 tunnissa päivässä!\" Mikä oli antamasi pyyntö (prompti)?",
            "options": [
              "Kerro terveysasiantuntijoiden (kuten THL) suositus lasten ruutuajasta.",
              "Laske, kuinka kauan kestää ajaa autolla Suomen ympäri.",
              "Miten voin ladata tabletin akun mahdollisimman nopeasti?",
              "Keksi jokin aivan uusi ja hauska sääntö autotallin peleihin."
            ],
            "correctAnswer": "Kerro terveysasiantuntijoiden (kuten THL) suositus lasten ruutuajasta.",
            "explanation": "Terveysasiantuntijat tutkivat aivojen hyvinvointia. He suosittelevat, että viihderuuduilla oltaisiin kohtuullisesti, jotta aikaa ja aivojen energiaa jää myös leikkiin, ulkoiluun ja lukemiseen!"
          },
          {
            "id": "aivoterveys_1_q8",
            "type": "true_false",
            "question": "Silmien vilkkuminen ja räpyttely vähenevät huomaamatta, kun tuijotamme ruutua. Siksi silmät kuivuvat ja niitä voi alkaa särkeä.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Oikein",
            "explanation": "Aivan oikein! Ruutua tuijottaessa unohdamme usein räpytellä silmiä. Siksi on todella tärkeää pitää huoltotaukoja ja katsella välillä kauas horisonttiin."
          },
          {
            "id": "aivoterveys_1_q9",
            "type": "multiple_choice",
            "question": "Miksi on tärkeää pitää pitkä huoltotauko ruuduista juuri ennen nukkumaanmenoa?",
            "options": [
              "Koska ruudun kirkas valo huijaa aivoja luulemaan, että on päivä.",
              "Koska laitteiden akut loppuvat aina automaattisesti yöllä.",
              "Koska aamulla pelit toimivat paljon nopeammin ja paremmin.",
              "Koska ruudut pitävät outoa piippaavaa ääntä pimeässä."
            ],
            "correctAnswer": "Koska ruudun kirkas valo huijaa aivoja luulemaan, että on päivä.",
            "explanation": "Laitteiden kirkas valo virkistää aivoja ja estää unihormonin erittymisen. Kun suljet ruudut tuntia ennen nukkumaanmenoa, aivosi tietävät, että on aika mennä lepotilaan!"
          },
          {
            "id": "aivoterveys_1_q10",
            "type": "scenario",
            "question": "SKENAARIO: Olette ajaneet koko päivän ja olet katsonut elokuvaa AI vanin ruudulta. Pysähdytte huoltoasemalle. Aivosi ovat aivan jumissa ja olet vähän kiukkuinen. Mikä olisi paras huoltotauko juuri nyt?",
            "options": [
              "Jään istumaan autoon ja avaan puhelimesta uuden pelin.",
              "Käyn juoksemassa ja hyppimässä ulkona huoltoaseman pihalla.",
              "Syön nopeasti paljon karkkia ja jatkan elokuvan katselua.",
              "Siirryn takapenkiltä etupenkille katsomaan samaa elokuvaa."
            ],
            "correctAnswer": "Käyn juoksemassa ja hyppimässä ulkona huoltoaseman pihalla.",
            "explanation": "Liikunta ja ulkoilma ovat aivojen parasta huoltoa! Kun veri lähtee kiertämään ja hengität raitista ilmaa, aivojen \"ylikuumeneminen\" laskee ja kiukku häviää nopeasti."
          },
          {
            "id": "aivoterveys_1_q11",
            "type": "drag_drop",
            "question": "Auton laitteilla ja sinun aivoillasi on eroa! Yhdistä ominaisuudet oikealle osapuolelle.",
            "draggables": [
              "Tarvitsee unta palautuakseen",
              "Voi olla päällä yötä päivää",
              "Ylikuumenee liiasta ruudun tuijotuksesta",
              "Toimii pelkällä sähkövirralla"
            ],
            "dropZones": [
              "Ihmisen aivot",
              "Digitaalinen laite"
            ],
            "correctAnswer": {
              "Tarvitsee unta palautuakseen": "Ihmisen aivot",
              "Ylikuumenee liiasta ruudun tuijotuksesta": "Ihmisen aivot",
              "Voi olla päällä yötä päivää": "Digitaalinen laite",
              "Toimii pelkällä sähkövirralla": "Digitaalinen laite"
            },
            "explanation": "Vaikka älylaitteesi voisi pyörittää peliä kellon ympäri, sinun omat biologiset aivosi ovat paljon herkemmät. Ne vaativat oikeaa huoltoa, kunnon taukoja ja yöunia!"
          },
          {
            "id": "aivoterveys_1_q12",
            "type": "drag_drop",
            "question": "Järjestä aivojen terveellinen \"iltahuolto\" oikeaan järjestykseen ennen nukkumaanmenoa!",
            "correctAnswer": {
              "Laitat kaikki digilaitteet ja ruudut kiinni tuntia ennen nukkumaanmenoa.": "1. vaihe",
              "Teet rauhallisia asioita, kuten luet oikeaa kirjaa tai juttelet perheen kanssa.": "2. vaihe",
              "Menet sänkyyn ja laitat silmät kiinni pimeässä huoneessa.": "3. vaihe",
              "Aivosi saavat levätä yön yli ja olet aamulla taas virkeä!": "4. vaihe"
            },
            "explanation": "Paras tapa varmistaa hyvät ja palauttavat yöunet on antaa aivoille kunnon ruutuvapaa \"jäähdyttelytauko\" jo hyvissä ajoin ennen nukkumaanmenoa.",
            "draggables": [
              "Laitat kaikki digilaitteet ja ruudut kiinni tuntia ennen nukkumaanmenoa.",
              "Teet rauhallisia asioita, kuten luet oikeaa kirjaa tai juttelet perheen kanssa.",
              "Menet sänkyyn ja laitat silmät kiinni pimeässä huoneessa.",
              "Aivosi saavat levätä yön yli ja olet aamulla taas virkeä!"
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "aivoterveys_1_q13",
            "type": "multiple_choice",
            "question": "Mikä on asiantuntijoiden mukaan erinomainen asia aivoille, jos ruutuaika on tältä päivältä loppu ja sinulla on hieman tylsää?",
            "options": [
              "Tavalliset, ilman ruutuja tapahtuvat vapaat leikit.",
              "Puhelimen piilottaminen peiton alle salaa yöksi.",
              "Uuden tietokoneen vaatiminen autotalliin heti.",
              "Laitteen kellon siirtäminen taaksepäin ovelasti."
            ],
            "correctAnswer": "Tavalliset, ilman ruutuja tapahtuvat vapaat leikit.",
            "explanation": "Pieni tylsyys on itse asiassa aivoille todella hyödyllistä! Se pakottaa aivot keksimään uutta, ja silloin syntyvät usein kaikkein parhaimmat leikit, joissa oma mielikuvitus pääsee valloilleen."
          },
          {
            "id": "aivoterveys_1_q14",
            "type": "spot_the_ai",
            "question": "Etsi joukosta lausahdus, jonka tekoäly voisi sanoa ruutuajasta, koska se ei ymmärrä miten oikeat biologiset aivot väsyvät!",
            "options": [
              "'Olet pelannut pitkään, silmäsi varmasti tarvitsevat lepoa.'",
              "'On hienoa ilma pelata ulkona vaihteeksi.'",
              "'Aivosi ovat tehokas suoritin. Lataa peli uudelleen ja valvo koko yö!'",
              "'Iltasatu auttaa aivoja rauhoittumaan paljon paremmin kuin videopeli.'"
            ],
            "correctAnswer": "'Aivosi ovat tehokas suoritin. Lataa peli uudelleen ja valvo koko yö!'",
            "explanation": "Koneet eivät väsy samalla tavalla kuin ihmiset. Ihminen ei voi \"suorittaa\" pelejä loputtomiin ilman, että hänen aivonsa ylikuumenevat ja kaipaavat kunnon huoltotaukoa."
          },
          {
            "id": "aivoterveys_1_q15",
            "type": "reverse_prompt",
            "question": "AI vanin ruudulle tulee viesti: \"On aika kääntää katse pois ruudusta! Katso ulos ikkunasta ainakin 20 metrin päähän 20 sekunnin ajan.\" Mikä asetus laitettiin päälle?",
            "options": [
              "Automaattinen silmien huoltotauko -muistutus.",
              "Pelin vaikeustason nostaminen vaikeimmalle.",
              "Kameran automaattitarkennus kauas maisemiin.",
              "Auton tuulilasinpyyhkimien kokeilu sateella."
            ],
            "correctAnswer": "Automaattinen silmien huoltotauko -muistutus.",
            "explanation": "Asiantuntijat suosittelevat silmille usein \"20-20-20 -sääntöä\". Aina 20 minuutin välein kannattaa katsoa vähintään 20 metrin päähän 20 sekunnin ajan, jotta silmät ja aivot saavat tärkeän pienen lepotauon!"
          }
        ]
      },
      {
        "id": "aivoterveys_2",
        "name": "Yöksi parkkiin",
        "questions": [
          {
            "id": "aivoterveys_2_q1",
            "type": "true_false",
            "question": "Aivot eivät tee yöllä mitään muuta kuin nukkuvat ja odottavat aamun uusia pelejä.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Uni on aivojen vilkkain huoltohetki! Yöllä aivot siivoavat turhat tiedot pois ja tallentavat päivän tärkeät opit muistiin."
          },
          {
            "id": "aivoterveys_2_q2",
            "type": "multiple_choice",
            "question": "Mitä AI vanin \"aivokoneistossa\" tapahtuu kunnon yöunien aikana?",
            "options": [
              "Aivot tallentavat opitut asiat muistiin.",
              "Aivot keksivät täysin uusia videopelejä.",
              "Aivot sammuvat ja menevät täysin pimeäksi.",
              "Aivot kasvattavat autoon uudet renkaat."
            ],
            "correctAnswer": "Aivot tallentavat opitut asiat muistiin.",
            "explanation": "Uni on kuin tiedostojen tallentamista tietokoneella. Jos et nuku tarpeeksi, päivän aikana opitut asiat eivät pysy kunnolla tallessa!"
          },
          {
            "id": "aivoterveys_2_q3",
            "type": "scenario",
            "question": "SKENAARIO: Olet valvonut puoleen yöhön asti pelaten uutta peliä. Aamulla olo on todella kiukkuinen, eikä aamupalakaan maita. Miksi aivosi reagoivat näin?",
            "options": [
              "Koska peli oli liian vaikea ja hävisit sen.",
              "Koska aivojen yöllinen siivous jäi kesken.",
              "Koska autotallin valot olivat aamulla liian kirkkaat.",
              "Koska olet syönyt liian vähän karkkia illalla."
            ],
            "correctAnswer": "Koska aivojen yöllinen siivous jäi kesken.",
            "explanation": "Unen aikana aivot huuhtelevat pois \"kuona-aineita\". Jos uniaika jää lyhyeksi, aivot jäävät sotkuisiksi, mikä aiheuttaa kiukkua ja väsymystä."
          },
          {
            "id": "aivoterveys_2_q4",
            "type": "drag_drop",
            "question": "Järjestä aivojen yölliset huoltotoimenpiteet oikeaan järjestykseen!",
            "correctAnswer": {
              "Suljet silmät ja nukahdat syvään uneen.": "1. vaihe",
              "Aivot alkavat lajitella päivän muistoja.": "2. vaihe",
              "Turha tieto pyyhitään pois ja tärkeä tallennetaan.": "3. vaihe",
              "Heräät virkeänä ja valmiina uusiin seikkailuihin.": "4. vaihe"
            },
            "explanation": "Uni on prosessi, joka vaatii aikaa. Lajittelu ja tallentaminen tapahtuvat vaiheittain, jotta aivosi ovat aamulla taas puhtaat ja nopeat.",
            "draggables": [
              "Suljet silmät ja nukahdat syvään uneen.",
              "Aivot alkavat lajitella päivän muistoja.",
              "Turha tieto pyyhitään pois ja tärkeä tallennetaan.",
              "Heräät virkeänä ja valmiina uusiin seikkailuihin."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "aivoterveys_2_q5",
            "type": "drag_drop",
            "question": "Yhdistä oikeat asiat! Mitä tapahtuu kun nukut hyvin ja mitä jos unet jäävät väliin?",
            "draggables": [
              "Muistat paremmin koulussa",
              "Olet iloinen ja reipas",
              "Keskittyminen on vaikeaa",
              "Suutut helposti muille"
            ],
            "dropZones": [
              "Kunnon yöunet",
              "Unihiekkaa rattaissa (Väsymys)"
            ],
            "correctAnswer": {
              "Muistat paremmin koulussa": "Kunnon yöunet",
              "Olet iloinen ja reipas": "Kunnon yöunet",
              "Keskittyminen on vaikeaa": "Unihiekkaa rattaissa (Väsymys)",
              "Suutut helposti muille": "Unihiekkaa rattaissa (Väsymys)"
            },
            "explanation": "Hyvä uni on kuin supervoima! Se auttaa sinua oppimaan uutta ja olemaan paljon mukavampi matkaseuralainen autossa."
          },
          {
            "id": "aivoterveys_2_q6",
            "type": "spot_the_ai",
            "question": "Kuka näistä neuvojista antaa huonoimman vinkin aivojen yöhuollosta? Etsi joukosta tekoälyn huono ohje!",
            "options": [
              "'Ruudut kannattaa sulkea tuntia ennen nukkumaanmenoa.'",
              "'Pelaa todella nopeaa peliä sängyssä, jotta aivot väsyvät nopeasti.'",
              "'Rauhallinen iltasatu auttaa aivoja valmistautumaan uneen.'",
              "'Pimeä ja viileä huone on paras paikka hyville yöunille.'"
            ],
            "correctAnswer": "'Pelaa todella nopeaa peliä sängyssä, jotta aivot väsyvät nopeasti.'",
            "explanation": "Nopeat ja jännittävät pelit tekevät aivot ylivirittyneiksi! Niiden pelaaminen sängyssä karkottaa unihiekan todella kauas."
          },
          {
            "id": "aivoterveys_2_q7",
            "type": "reverse_prompt",
            "question": "Tekoäly antaa tulosteen: \"Lapsen aivot tarvitsevat noin 9-11 tuntia unta joka yö toimiakseen kunnolla.\" Millä promptilla tämä tieto saatiin?",
            "options": [
              "Kerro asiantuntijoiden suositus alakoululaisen yöunen pituudesta.",
              "Laske kuinka monta tuntia viikossa ihminen on hereillä.",
              "Keksi hauska tarina uneliaasta karhusta autotallissa.",
              "Miten voin nukkua nopeammin ja tehokkaammin?"
            ],
            "correctAnswer": "Kerro asiantuntijoiden suositus alakoululaisen yöunen pituudesta.",
            "explanation": "Kasvavat aivot tarvitsevat paljon huoltoaikaa! Siksi alakoululaisen on tärkeää nukkua noin 9–11 tuntia joka ikinen yö."
          },
          {
            "id": "aivoterveys_2_q8",
            "type": "true_false",
            "question": "Jos nukut arkisin todella vähän, voit vain nukkua viikonloppuna kaksi pitkää yötä ja aivot ovat taas täysin kunnossa.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Univelkaa ei voi maksaa takaisin yhdellä rykäyksellä viikonloppuna. Aivot tarvitsevat säännöllisen ja riittävän pitkän huoltohetken joka ainoa yö."
          },
          {
            "id": "aivoterveys_2_q9",
            "type": "multiple_choice",
            "question": "Miksi älylaitteiden sininen valo on paha juttu ennen nukkumaanmenoa?",
            "options": [
              "Se kertoo aivoille, että on kirkas keskipäivä ja aika herätä.",
              "Se värjää autotallin seinät vahingossa kokonaan sinisiksi.",
              "Se imee laitteen akun täysin tyhjiin parissa minuutissa.",
              "Se saa sinut näkemään unia vain sinisistä autoista."
            ],
            "correctAnswer": "Se kertoo aivoille, että on kirkas keskipäivä ja aika herätä.",
            "explanation": "Ruutujen sininen valo huijaa aivoja. Aivot luulevat, että aurinko paistaa yhä, jolloin unihormonia ei erity etkä saa unta."
          },
          {
            "id": "aivoterveys_2_q10",
            "type": "scenario",
            "question": "SKENAARIO: Opetellaan ajamaan uudella simulaattorilla. Harjoittelet tunnin ja menet nukkumaan. Seuraavana päivänä osaat reitin paljon paremmin, vaikka et harjoitellut yöllä. Miten tämä on mahdollista?",
            "options": [
              "Aivot kertailivat ja tallensivat reittiä muistiin unen aikana.",
              "Simulaattori siirsi taidon aivoihisi langattoman verkon kautta.",
              "Joku muu kävi pelaamassa peliä puolestasi yöllä salaa.",
              "Aivot asensivat uuden muistikortin korvasi kautta."
            ],
            "correctAnswer": "Aivot kertailivat ja tallensivat reittiä muistiin unen aikana.",
            "explanation": "Uni vahvistaa muistijälkiä! Kun nukut, aivosi käyvät päivän opit läpi ja tallentavat ne kestomuistiin. Opit asioita kirjaimellisesti nukkuessasi."
          },
          {
            "id": "aivoterveys_2_q11",
            "type": "drag_drop",
            "question": "Raahaa iltatoimet oikeisiin laatikoihin! Kummat asiat tuovat unihiekkaa silmiin ja kummat karkottavat sen?",
            "draggables": [
              "Kirjan lukeminen sängyssä",
              "Rauhoittava iltapala",
              "Kirkkaan tabletin tuijottaminen",
              "Jännittävän kauhupelin pelaaminen"
            ],
            "dropZones": [
              "Kutsuu unihiekkaa (Hyvä iltatoimi)",
              "Karkottaa unihiekan (Huono iltatoimi)"
            ],
            "correctAnswer": {
              "Kirjan lukeminen sängyssä": "Kutsuu unihiekkaa (Hyvä iltatoimi)",
              "Rauhoittava iltapala": "Kutsuu unihiekkaa (Hyvä iltatoimi)",
              "Kirkkaan tabletin tuijottaminen": "Karkottaa unihiekan (Huono iltatoimi)",
              "Jännittävän kauhupelin pelaaminen": "Karkottaa unihiekan (Huono iltatoimi)"
            },
            "explanation": "Rauhalliset asiat viestivät aivoille, että on turvallista siirtyä huoltotilaan. Jännittävät pelit taas pitävät aivot turhaan \"taisteluvalmiudessa\"!"
          },
          {
            "id": "aivoterveys_2_q12",
            "type": "drag_drop",
            "question": "Järjestä täydellinen reitti hyviin yöuniin autotallin seikkailujen jälkeen!",
            "correctAnswer": {
              "Lopeta vauhdikkaat pelit ja ruutuaika noin tunti ennen nukkumaanmenoa.": "1. vaihe",
              "Syö terveellinen iltapala ja pese hampaat rauhassa.": "2. vaihe",
              "Lue kirjaa tai kuuntele rauhallista tarinaa hämärässä huoneessa.": "3. vaihe",
              "Laita silmät kiinni ja anna aivojen aloittaa tärkeä yöhuolto.": "4. vaihe"
            },
            "explanation": "Hyvät unet vaativat aina pienen valmistautumisen. Iltarutiinit ovat merkki aivoille siitä, että pian mennään nukkumaan.",
            "draggables": [
              "Lopeta vauhdikkaat pelit ja ruutuaika noin tunti ennen nukkumaanmenoa.",
              "Syö terveellinen iltapala ja pese hampaat rauhassa.",
              "Lue kirjaa tai kuuntele rauhallista tarinaa hämärässä huoneessa.",
              "Laita silmät kiinni ja anna aivojen aloittaa tärkeä yöhuolto."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "aivoterveys_2_q13",
            "type": "multiple_choice",
            "question": "Mitä \"unihiekka\" tekee aivojesi kovalevylle yöllä?",
            "options": [
              "Se tyhjentää aivot kokonaan kaikista asioista, joita olet oppinut.",
              "Se järjestelee opitut asiat oikeisiin kansioihin ja puhdistaa roskat.",
              "Se rikkoo aivojen mekanismit, jos sitä menee väärään paikkaan.",
              "Se kopioi internetin kaikki tiedot suoraan muistiisi yön aikana."
            ],
            "correctAnswer": "Se järjestelee opitut asiat oikeisiin kansioihin ja puhdistaa roskat.",
            "explanation": "Uni tekee aivoissa arvokasta \"levyn eheytystä\" ja siivousta. Se varmistaa, että tärkeät tiedot ovat nopeasti löydettävissä heti seuraavana päivänä."
          },
          {
            "id": "aivoterveys_2_q14",
            "type": "spot_the_ai",
            "question": "Etsi joukosta oikea, asiantuntijan antama väite unesta ja aivoista!",
            "options": [
              "'Mitä vähemmän ihminen nukkuu, sitä viisaammaksi hän tulee.'",
              "'Aivot kaipaavat aina ruutuaikaa juuri ennen nukahtamista.'",
              "'Riittävä uni tekee ihmisestä luovemman ja paremman ongelmanratkaisijan.'",
              "'Ihminen pystyy varastoimaan unta purkkiin pahan päivän varalle.'"
            ],
            "correctAnswer": "'Riittävä uni tekee ihmisestä luovemman ja paremman ongelmanratkaisijan.'",
            "explanation": "Hyvin levänneet aivot keksivät parhaat ideat! Siksi kunnon yöunet ovat paras tapa valmistautua seuraavan päivän vaikeisiin kokeisiin tai haasteisiin."
          },
          {
            "id": "aivoterveys_2_q15",
            "type": "reverse_prompt",
            "question": "Auton näyttö muuttuu yllättäen aivan keltaiseksi ja himmeäksi iltaa kohden. Mikä automaattinen asetus meni päälle?",
            "options": [
              "Sinivalosuodatin (yötila), joka auttaa aivoja rauhoittumaan.",
              "Auton etuvalojen pesuohjelma, joka puhdistaa keltaiset tahrat.",
              "Pelin vaikeustason alentaminen iltaa varten.",
              "Akun säästötila, joka säästää sähköä keltaisella valolla."
            ],
            "correctAnswer": "Sinivalosuodatin (yötila), joka auttaa aivoja rauhoittumaan.",
            "explanation": "Monissa laitteissa on automaattinen yötila, joka vähentää sinistä valoa ja tekee näytöstä keltaisemman. Silti paras asetus on laittaa laite kokonaan kiinni ennen nukkumaanmenoa!"
          }
        ]
      },
      {
        "id": "aivoterveys_3",
        "name": "Aikuisten moottoritie",
        "questions": [
          {
            "id": "aivoterveys_3_q1",
            "type": "true_false",
            "question": "Pelien ja sovellusten ikärajat (kuten K-12 tai K-16) on keksitty vain siksi, että aikuiset haluavat kiusata lapsia ja estää hauskanpidon.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Ikärajat eivät ole kiusaamista varten! Ne ovat kuin turvavyöt, jotka on suunniteltu suojelemaan sinun kasvavia aivojasi asioilta, joita ne eivät ole vielä valmiita käsittelemään."
          },
          {
            "id": "aivoterveys_3_q2",
            "type": "multiple_choice",
            "question": "Mitä \"Aikuisten moottoritie\" tarkoittaa, kun puhutaan älylaitteista ja netistä?",
            "options": [
              "Sitä, että peleissä saa ajaa autoa ainoastaan oikealla moottoritiellä.",
              "Sitä, että tietyt pelit ja sometilit on tarkoitettu vain vanhemmille aivoille.",
              "Sitä, että kaikki yli 13-vuotiaat joutuvat ajamaan autoa itse.",
              "Sitä, että netti on suljettu kaikilta muilta paitsi aikuisilta."
            ],
            "correctAnswer": "Sitä, että tietyt pelit ja sometilit on tarkoitettu vain vanhemmille aivoille.",
            "explanation": "Aivan kuten moottoritielle vaaditaan oikea ajokortti ja taitoa, tiettyihin peleihin ja sovelluksiin vaaditaan hieman vanhemmat ja valmiimmat aivot!"
          },
          {
            "id": "aivoterveys_3_q3",
            "type": "scenario",
            "question": "SKENAARIO: Olet kaverin autotallissa, ja isoveli alkaa pelata uutta, K-16 ikärajalla varustettua toimintapeliä. Peli on hienon näköinen, mutta sen kovat äänet ja pelottavat hirviöt saavat sinut vähän ahdistuneeksi. Mitä teet?",
            "options": [
              "Katson peliä väkisin loppuun asti, jotta en vaikuttaisi pelkurilta.",
              "Kerron, että peli ahdistaa ja menen mieluummin pelaamaan muuta.",
              "Yritän pelata peliä itse, jotta tottuisin pelottaviin asioihin nopeasti.",
              "Piilotan isoveljen peliohjaimen roskakoriin salaa."
            ],
            "correctAnswer": "Kerron, että peli ahdistaa ja menen mieluummin pelaamaan muuta.",
            "explanation": "K-16 peli on aikuisten moottoritietä, eikä sinun aivojasi ole vielä tehty sellaiselle jännitykselle! On erittäin fiksua ja rohkeaa poistua tilanteesta, jos jokin ahdistaa."
          },
          {
            "id": "aivoterveys_3_q4",
            "type": "drag_drop",
            "question": "Miksi ikärajat ovat olemassa? Järjestä aivojen kasvamiseen liittyvät asiat loogiseen syy-seuraussuhteeseen!",
            "correctAnswer": {
              "Lapsen aivot ovat vasta kehittymässä ja oppimassa maailmasta.": "1. vaihe",
              "Liian jännittävät ja pelottavat asiat voivat jäädä kummittelemaan mieleen pitkäksi aikaa.": "2. vaihe",
              "Siksi asiantuntijat ovat asettaneet peleille ja elokuville suojelulliset ikärajat.": "3. vaihe",
              "Kun aivot kasvavat vanhemmiksi, ne pystyvät turvallisesti käsittelemään vaikeampia asioita.": "4. vaihe"
            },
            "explanation": "Ikärajat seuraavat biologista aivojen kasvua. Se mikä on aikuisen aivoille harmitonta viihdettä, voi olla lapsen aivoille todella ahdistavaa.",
            "draggables": [
              "Lapsen aivot ovat vasta kehittymässä ja oppimassa maailmasta.",
              "Liian jännittävät ja pelottavat asiat voivat jäädä kummittelemaan mieleen pitkäksi aikaa.",
              "Siksi asiantuntijat ovat asettaneet peleille ja elokuville suojelulliset ikärajat.",
              "Kun aivot kasvavat vanhemmiksi, ne pystyvät turvallisesti käsittelemään vaikeampia asioita."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "aivoterveys_3_q5",
            "type": "drag_drop",
            "question": "Yhdistä oikeat asiat oikeille digitaalisille \"kaduille\"! Mikä kuuluu lapsille ja mikä aikuisten moottoritielle?",
            "draggables": [
              "K-3 hassu ajopeli autotallissa",
              "K-18 pelottava selviytymispeli",
              "13 vuoden ikärajan sosiaalinen media (Some)"
            ],
            "dropZones": [
              "Turvallinen reitti (Sopii lapsille)",
              "Nuorten kaista (Vaatii 13v iän)",
              "Aikuisten moottoritie (Vain täysi-ikäisille)"
            ],
            "correctAnswer": {
              "K-3 hassu ajopeli autotallissa": "Turvallinen reitti (Sopii lapsille)",
              "13 vuoden ikärajan sosiaalinen media (Some)": "Nuorten kaista (Vaatii 13v iän)",
              "K-18 pelottava selviytymispeli": "Aikuisten moottoritie (Vain täysi-ikäisille)"
            },
            "explanation": "Aivan kuten liikenteessä on erilaisia teitä ja sääntöjä eri kulkuneuvoille, digimaailmassa on ikärajat suojelemassa erilaisten aivojen matkantekoa!"
          },
          {
            "id": "aivoterveys_3_q6",
            "type": "spot_the_ai",
            "question": "Etsi joukosta tekoälyn keksimä huono neuvo, joka ei ymmärrä lasten aivojen suojelua!",
            "options": [
              "'Tarkista aina pelin ikäraja ennen kuin lataat sen laitteellesi.'",
              "'Kysy aikuiselta, onko peli sopiva, jos et ole varma sen sisällöstä.'",
              "'Pelaa ihmeessä kauhupelejä heti aamulla, niin silmäsi tottuvat niihin.'",
              "'Kunnioita ikärajoja, ne on tehty sinun turvaksesi.'"
            ],
            "correctAnswer": "'Pelaa ihmeessä kauhupelejä heti aamulla, niin silmäsi tottuvat niihin.'",
            "explanation": "Aivot eivät \"totu\" liian rankkaan sisältöön turvallisesti, vaan ne voivat ahdistua ja menettää yöunensa pitkäksi aikaa! Kauhupelit eivät todellakaan sovi lapsille."
          },
          {
            "id": "aivoterveys_3_q7",
            "type": "reverse_prompt",
            "question": "Tekoäly antaa sinulle vastauksen: \"Sosiaalisessa mediassa on melkein aina 13 vuoden ikäraja. Somen paineet, kiusaaminen ja outo sisältö ovat liikaa alle 13-vuotiaan aivoille.\" Mikä oli promptisi?",
            "options": [
              "Selitä minulle, miksi pienten lasten ei pidä olla sosiaalisessa mediassa.",
              "Kerro, kuinka monta tykkäystä uusi autokuvani sai somessa tänään.",
              "Miten voin kiertää ikärajat ja tehdä salaa oman sometilin?",
              "Laske, kuinka monta 13-vuotiasta asuu koko Euroopassa yhteensä."
            ],
            "correctAnswer": "Selitä minulle, miksi pienten lasten ei pidä olla sosiaalisessa mediassa.",
            "explanation": "Somen ikäraja ei ole vitsi. Sosiaalinen media on aikuisten ja nuorten \"moottoritie\", jossa ajetaan lujaa ja jossa voi tulla vastaan mitä tahansa! Lapsen aivot tarvitsevat turvallisempaa ympäristöä."
          },
          {
            "id": "aivoterveys_3_q8",
            "type": "true_false",
            "question": "Jos peli on ladattavissa täysin ilmaiseksi sovelluskaupasta, se tarkoittaa automaattisesti, että se on turvallinen ja sallittu kaikenikäisille lapsille.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Ilmaisuus ei kerro mitään sisällöstä! Myös erittäin pelottavat tai väkivaltaiset pelit voivat olla ilmaisia. Tarkista aina virallinen ikäraja-merkintä."
          },
          {
            "id": "aivoterveys_3_q9",
            "type": "multiple_choice",
            "question": "Mitä todennäköisesti tapahtuu aivoillesi, jos pelaat säännöllisesti pitkälle aikuisten moottoritielle (esim. K-16) kuuluvia jännittäviä pelejä liian nuorena?",
            "options": [
              "Aivot tulevat superrohkeiksi eivätkä pelkää enää ikinä mitään.",
              "Aivot voivat ylikuormittua, mistä seuraa painajaisia ja pahaa mieltä.",
              "Aivot oppivat ajamaan oikeaa autoa täydellisesti viikossa.",
              "Aivot muuttavat pelin itse automaattisesti takaisin K-3 tasolle."
            ],
            "correctAnswer": "Aivot voivat ylikuormittua, mistä seuraa painajaisia ja pahaa mieltä.",
            "explanation": "Lapsen aivot eivät osaa vielä suodattaa kaikkea näkemäänsä. Liian rajut kuvat ja äänet varastoituvat mieleen ja putkahtavat usein yöllä esiin ikävinä painajaisina!"
          },
          {
            "id": "aivoterveys_3_q10",
            "type": "scenario",
            "question": "SKENAARIO: Haluat ladata uuden autopelin, jota kaikki kaverit pelaavat. Pelin tiedoissa on kuitenkin selkeä merkintä: Ikäraja 12 vuotta. Olet itse vasta 9-vuotias. Miten toimit fiksusti?",
            "options": [
              "Lataan sen heti, koska kaikki muutkin kerran tekevät niin.",
              "Jätän pelin lataamatta ja etsin itselleni sopivan hauskan ajopelin.",
              "Laitan silmät kiinni pelatessa, jotta peli ei varmasti pelota minua.",
              "Vaihdan oman syntymävuoteni laitteeseen, jotta saan pelin."
            ],
            "correctAnswer": "Jätän pelin lataamatta ja etsin itselleni sopivan hauskan ajopelin.",
            "explanation": "Omien aivojen suojeleminen on supervoima! Vaikka muut tekisivät huonoja valintoja, sinun on fiksuinta noudattaa ikärajoja ja pitää omat aivosi terveinä."
          },
          {
            "id": "aivoterveys_3_q11",
            "type": "drag_drop",
            "question": "Ikärajojen ohessa on usein pieniä kuvia (symboleja), jotka varoittavat pelin sisällöstä. Yhdistä varoituskuvan tarkoitus sen merkitykseen!",
            "draggables": [
              "Kuva nyrkistä",
              "Kuva hämähäkistä",
              "Kuva noppaparista",
              "Kuva karkeista sanoista (esim @!#)"
            ],
            "dropZones": [
              "Peli voi sisältää tappelua tai väkivaltaa",
              "Peli sisältää ahdistavia tai pelottavia asioita",
              "Pelissä käytetään rumaa kieltä",
              "Pelissä voi hävitä tai käyttää oikeaa rahaa (uhkapeli)"
            ],
            "correctAnswer": {
              "Kuva nyrkistä": "Peli voi sisältää tappelua tai väkivaltaa",
              "Kuva hämähäkistä": "Peli sisältää ahdistavia tai pelottavia asioita",
              "Kuva noppaparista": "Pelissä voi hävitä tai käyttää oikeaa rahaa (uhkapeli)",
              "Kuva karkeista sanoista (esim @!#)": "Pelissä käytetään rumaa kieltä"
            },
            "explanation": "Ikuikärajat kertovat, minkä ikäiselle peli sopii, mutta nämä lisämerkit kertovat asiantuntijoiden syyn: miksi juuri tämä peli voisi olla aivoille liikaa!"
          },
          {
            "id": "aivoterveys_3_q12",
            "type": "drag_drop",
            "question": "Haluat ladata täysin uuden ja tuntemattoman pelin. Järjestä fiksut turvallisuusaskeleet aikajärjestykseen!",
            "correctAnswer": {
              "Avaa turvallinen ja virallinen sovelluskauppa laitteellasi.": "1. vaihe",
              "Tarkista pelin tietojen kohdalta sen virallinen ikäraja.": "2. vaihe",
              "Mieti tai kysy aikuiselta, sopiiko peli todella sinun aivoillesi.": "3. vaihe",
              "Lataa peli vasta, kun olet varma sen turvallisuudesta.": "4. vaihe"
            },
            "explanation": "Aivan kuten et kääntyisi autolla oudoille sivuteille tarkistamatta karttaa, älä koskaan lataa pelejä tarkistamatta ensin niiden ikärajaa.",
            "draggables": [
              "Avaa turvallinen ja virallinen sovelluskauppa laitteellasi.",
              "Tarkista pelin tietojen kohdalta sen virallinen ikäraja.",
              "Mieti tai kysy aikuiselta, sopiiko peli todella sinun aivoillesi.",
              "Lataa peli vasta, kun olet varma sen turvallisuudesta."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "aivoterveys_3_q13",
            "type": "multiple_choice",
            "question": "Mikä seuraavista on hyvä syy sille, miksi vanhemmat ja aikuiset vahtivat lasten pelien ikärajoja niin tarkasti?",
            "options": [
              "He haluavat itse pelata kaikki hauskimmat pelit ensin salaa.",
              "He välittävät aivoistasi ja haluavat suojella sinua painajaisilta.",
              "He eivät osaa pelata nopeita pelejä, ja ovat vähän kateellisia.",
              "He yrittävät säästää kotona mahdollisimman paljon sähköä."
            ],
            "correctAnswer": "He välittävät aivoistasi ja haluavat suojella sinua painajaisilta.",
            "explanation": "Aikuisten tehtävä on toimia \"liikennepoliiseina\", jotka pitävät lapset poissa aikuisten moottoritieltä. He tekevät sen vain ja ainoastaan välittämisen ja rakkauden takia!"
          },
          {
            "id": "aivoterveys_3_q14",
            "type": "spot_the_ai",
            "question": "Etsi joukosta keksitty sääntö, joka ei ole oikea syy ikärajoille!",
            "options": [
              "K-12 peleissä voi olla paljon monimutkaisempaa ja synkempää tarinaa.",
              "Sosiaalisessa mediassa voi tulla vastaan aikuisten kieltä ja riitoja.",
              "Alle 13-vuotiaiden aivot eivät pysty prosessoimaan kovia kauhukuvia.",
              "K-16 pelit vaativat fyysisesti todella suuria käsilihaksia toimiakseen."
            ],
            "correctAnswer": "K-16 pelit vaativat fyysisesti todella suuria käsilihaksia toimiakseen.",
            "explanation": "Ikärajat perustuvat aina aivojen kykyyn ymmärtää, suodattaa ja sietää tietoa! Niillä ei ole mitään tekemistä oikeiden fyysisten lihasten, kuten sormivoimien, kanssa."
          },
          {
            "id": "aivoterveys_3_q15",
            "type": "reverse_prompt",
            "question": "Ruudullesi ilmestyy selitys: \"K-7 peli voi sisältää lievää jännitystä, mutta K-12 peli voi jo sisältää pelottavampia ja nopeampia tilanteita, joihin tarvitaan vanhemmat aivot ja parempi ymmärrys.\" Mikä oli promptisi?",
            "options": [
              "Selitä minulle tarkasti, mitä eroa on K-7 ja K-12 ikärajoilla peleissä.",
              "Miten voin ajaa autoa turvallisesti 70 tai 120 kilometrin tuntivauhtia?",
              "Laske yhteen luvut 7 ja 12 mahdollisimman nopeasti aivoissa.",
              "Kerro miksi kaikki laitteet pitää sammuttaa kello 12 illalla."
            ],
            "correctAnswer": "Selitä minulle tarkasti, mitä eroa on K-7 ja K-12 ikärajoilla peleissä.",
            "explanation": "Eri ikärajat on porrastettu fiksusti aivojen kasvun mukaan. Mitä isompi numero, sitä kovempaa jännitystä ja monimutkaisempaa tarinaa aivot joutuvat pelissä käsittelemään!"
          }
        ]
      },
      {
        "id": "aivoterveys_4",
        "name": "Ulos autosta!",
        "questions": [
          {
            "id": "aivoterveys_4_q1",
            "type": "true_false",
            "question": "Aivot saavat parasta liikuntaa ja kasvavat nopeiten silloin, kun istut autotallissa koko päivän pelaamassa virtuaalisia urheilupelejä ruudulta.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Virtuaalipelit voivat olla kivoja, mutta aivot ja keho voivat parhaiten oikeassa elämässä liikkuessa ja ulkoillessa!"
          },
          {
            "id": "aivoterveys_4_q2",
            "type": "multiple_choice",
            "question": "Miksi \"Ulos autosta!\" -sääntö on niin tärkeä sinun aivoillesi?",
            "options": [
              "Koska auton penkit kuluvat loppuun.",
              "Koska liikunta kasvattaa ja huoltaa aivoja.",
              "Koska ulkona on aina lämmin ja aurinkoista.",
              "Koska laitteet tarvitsevat latausta yksin."
            ],
            "correctAnswer": "Koska liikunta kasvattaa ja huoltaa aivoja.",
            "explanation": "Liikunta on aivojen superruokaa! Oikea fyysinen liikkuminen ja ulkoilu auttavat aivoja voimaan hyvin, oppimaan paremmin ja pysymään virkeinä."
          },
          {
            "id": "aivoterveys_4_q3",
            "type": "scenario",
            "question": "SKENAARIO: Olette matkustaneet AI vanilla jo kolme tuntia putkeen. Sinulla on hieman levoton olo ja aivosi tuntuvat jumittavan. Pysähdytte huoltoasemalle, jossa on leikkipuisto. Mitä teet, jotta aivosi saavat parhaan mahdollisen tauon?",
            "options": [
              "Jään istumaan autoon ja avaan puhelimen pelin.",
              "Menen leikkipuistoon kiipeilemään ja juoksemaan.",
              "Istun huoltoaseman kahvilassa hiljaa paikallani.",
              "Katselen auton ikkunasta, kun muut leikkivät ulkona."
            ],
            "correctAnswer": "Menen leikkipuistoon kiipeilemään ja juoksemaan.",
            "explanation": "Pitkän istumisen jälkeen aivot kaipaavat happea ja liikettä. Kiipeily ja juokseminen saavat veren kiertämään, mikä virkistää jumittavat aivot heti!"
          },
          {
            "id": "aivoterveys_4_q4",
            "type": "drag_drop",
            "question": "Järjestä toiminnot niin, että ne muodostavat parhaan mahdollisen \"aivojen huolto-ohjelman\" pitkän pelisession jälkeen!",
            "correctAnswer": {
              "Sammuta ruutu ja laita pelilaite turvallisesti sivuun.": "1. vaihe",
              "Nouse ylös tuolista ja pue ulkovaatteet päällesi.": "2. vaihe",
              "Mene ulos pihalle ja hypi tai juokse hetki vauhdikkaasti.": "3. vaihe",
              "Aivosi saavat raitista ilmaa ja olet taas täynnä energiaa.": "4. vaihe"
            },
            "explanation": "Siirtymä ruudulta ulos on paras tapa herättää aivot. Oikea liikunta antaa aivoille uutta virtaa paljon paremmin kuin mikään uusi peli!",
            "draggables": [
              "Sammuta ruutu ja laita pelilaite turvallisesti sivuun.",
              "Nouse ylös tuolista ja pue ulkovaatteet päällesi.",
              "Mene ulos pihalle ja hypi tai juokse hetki vauhdikkaasti.",
              "Aivosi saavat raitista ilmaa ja olet taas täynnä energiaa."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "aivoterveys_4_q5",
            "type": "drag_drop",
            "question": "Raahaa toiminnot oikeisiin laatikoihin! Kummat asiat antavat aivoille oikeaa, virkistävää liikuntaa ja happea?",
            "draggables": [
              "Pihalla juokseminen ja leikkiminen",
              "Jalkapallon pelaaminen oikealla kentällä",
              "Jalkapallon pelaaminen pelikonsolilla",
              "Urheiluvideoiden katsominen sohvalla"
            ],
            "dropZones": [
              "Tekee aivoille hyvää (Oikea liikunta)",
              "Ei liikuta kehoa (Ruutuaika)"
            ],
            "correctAnswer": {
              "Pihalla juokseminen ja leikkiminen": "Tekee aivoille hyvää (Oikea liikunta)",
              "Jalkapallon pelaaminen oikealla kentällä": "Tekee aivoille hyvää (Oikea liikunta)",
              "Jalkapallon pelaaminen pelikonsolilla": "Ei liikuta kehoa (Ruutuaika)",
              "Urheiluvideoiden katsominen sohvalla": "Ei liikuta kehoa (Ruutuaika)"
            },
            "explanation": "Vaikka katsoisit tai pelaisit urheilua ruudulta, aivosi tarvitsevat oikeaa fyysistä liikettä ja hikeä voidakseen pitkällä tähtäimellä hyvin!"
          },
          {
            "id": "aivoterveys_4_q6",
            "type": "spot_the_ai",
            "question": "Kuka näistä digiapureista antaa todella huonon neuvon aivojen terveyteen liittyen? Etsi tekoälyn hassu ohje!",
            "options": [
              "'Käy välillä ulkona, jotta aivosi saavat runsaasti happea.'",
              "'Voit hoitaa päivän liikunnan heiluttamalla sormia peliohjaimella.'",
              "'Taukojumppa pitkän istumisen välissä on todella fiksua.'",
              "'Aivot oppivat paremmin, kun keho saa tarpeeksi liikuntaa.'"
            ],
            "correctAnswer": "'Voit hoitaa päivän liikunnan heiluttamalla sormia peliohjaimella.'",
            "explanation": "Pelkkä sormien heiluttaminen ohjaimella ei riitä alkuunkaan! Keho tarvitsee laajempaa sykettä nostavaa liikuntaa, jotta aivot saavat tarvitsemansa kunnon happikylvyn."
          },
          {
            "id": "aivoterveys_4_q7",
            "type": "reverse_prompt",
            "question": "Ääniavustaja ilmoittaa yhtäkkiä: \"Nyt kaikki ulos autosta! On aika pelata vähän piilosta, kiipeillä kivillä tai potkia palloa, jotta aivonne kasvavat vahvoiksi!\" Mikä asetus laitettiin päälle?",
            "options": [
              "Aivojen terveyttä ja liikuntaa muistuttava tauko-ohjelma.",
              "Auton oviin liitetty automaattinen hätäpoistumishälytys.",
              "Pelin sisäinen tehtävä, joka vaatii virtuaalisen pallon potkimista.",
              "Ohjelma, joka yrittää tyhjentää auton kokonaan matkatavaroista."
            ],
            "correctAnswer": "Aivojen terveyttä ja liikuntaa muistuttava tauko-ohjelma.",
            "explanation": "Kun istumista on kestänyt liian kauan, on aika lähteä ulos! Liikuntatauko on paras lääke aivojen jumiutumiseen ja väsymykseen."
          },
          {
            "id": "aivoterveys_4_q8",
            "type": "true_false",
            "question": "Mitä enemmän liikut ja pelaat ulkona oikeassa elämässä, sitä helpompi aivojesi on keskittyä koulutehtäviin myöhemmin.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Oikein",
            "explanation": "Liikunta on suoraan yhteydessä oppimiseen! Ulkoilu ja kehon liikuttaminen parantavat muistia ja tekevät koulussa keskittymisestä huomattavasti helpompaa."
          },
          {
            "id": "aivoterveys_4_q9",
            "type": "multiple_choice",
            "question": "Mikä seuraavista on paras syy laittaa laitteet parkkiin ja mennä ulos?",
            "options": [
              "Laitteiden ruudut menevät ulkoilmassa aina heti rikki.",
              "Liikkuminen raittiissa ilmassa huoltaa ja kasvattaa aivoja.",
              "Sisällä istuminen on laissa kokonaan kielletty asia.",
              "Ulkona wifi-verkko toimii usein paljon nopeammin."
            ],
            "correctAnswer": "Liikkuminen raittiissa ilmassa huoltaa ja kasvattaa aivoja.",
            "explanation": "Aivot ovat biologinen elin, joka rakastaa happea, liikettä ja uusia oikean maailman ärsykkeitä. Ruutujen tuijottaminen on aivoille paljon yksipuolisempaa."
          },
          {
            "id": "aivoterveys_4_q10",
            "type": "scenario",
            "question": "SKENAARIO: AI vanin kojelauta näyttää, että päivittäinen \"ruutuaika-bensa\" on lopussa. Aivosi kaipaavat oikeaa toimintaa. Autotallin edessä on pyörä, pallo ja hyppynaru. Miten hyödynnät näitä aivojesi parhaaksi?",
            "options": [
              "Otan valokuvan niistä ja jatkan videoiden katselua autossa.",
              "Valitsen yhden välineen ja leikin sillä kunnolla ulkona.",
              "Myyn välineet netissä, jotta voin ostaa uuden videopelin.",
              "Laitan välineet siististi piiloon autotallin pimeään kaappiin."
            ],
            "correctAnswer": "Valitsen yhden välineen ja leikin sillä kunnolla ulkona.",
            "explanation": "Liikuntavälineet ovat olemassa käyttöä varten! Hien pintaan saaminen ja hengästyminen ovat aivojen ykkösherkkua, joka huuhtoo väsymyksen nopeasti pois."
          },
          {
            "id": "aivoterveys_4_q11",
            "type": "drag_drop",
            "question": "Yhdistä tekemiset siihen, miten aivot reagoivat!",
            "draggables": [
              "Tunnin juoksulenkki tai sählypeli ulkona",
              "Neljän tunnin paikallaan istuminen ja pelaaminen",
              "Metsässä kiipeily ja tasapainoilu kivillä"
            ],
            "dropZones": [
              "Veri kiertää ja aivot virkistyvät voimakkaasti",
              "Aivot jumittavat ja keho muuttuu levottomaksi",
              "Uudet liikeradat kehittävät aivojen hermoverkkoja"
            ],
            "correctAnswer": {
              "Tunnin juoksulenkki tai sählypeli ulkona": "Veri kiertää ja aivot virkistyvät voimakkaasti",
              "Neljän tunnin paikallaan istuminen ja pelaaminen": "Aivot jumittavat ja keho muuttuu levottomaksi",
              "Metsässä kiipeily ja tasapainoilu kivillä": "Uudet liikeradat kehittävät aivojen hermoverkkoja"
            },
            "explanation": "Liikunta ei vain virkistä, vaan uudet liikeradat (kuten metsässä tasapainoilu) kirjaimellisesti rakentavat aivoihin uusia, fiksuja hermoverkkoja!"
          },
          {
            "id": "aivoterveys_4_q12",
            "type": "drag_drop",
            "question": "Olet jumissa vaikeassa pelikentässä etkä pääse millään eteenpäin. Järjestä askeleet fiksusti, kuinka ratkaiset aivojen jumin liikunnan avulla!",
            "correctAnswer": {
              "Toteat, että aivosi ovat täysin jumissa pelin vaikeuden takia.": "1. vaihe",
              "Laitat pelin pauselle ja lähdet kävelylle tai potkimaan palloa.": "2. vaihe",
              "Aivosi rentoutuvat ulkona ja keksivät täysin uusia ratkaisuja.": "3. vaihe",
              "Palaat takaisin peliin virkeänä ja pääset kentän läpi heti.": "4. vaihe"
            },
            "explanation": "Joskus paras tapa edetä pelissä on lopettaa se hetkeksi! Liikunta ja pieni tauko ruudusta auttavat aivoja ratkomaan jumitilanteet paljon tehokkaammin.",
            "draggables": [
              "Toteat, että aivosi ovat täysin jumissa pelin vaikeuden takia.",
              "Laitat pelin pauselle ja lähdet kävelylle tai potkimaan palloa.",
              "Aivosi rentoutuvat ulkona ja keksivät täysin uusia ratkaisuja.",
              "Palaat takaisin peliin virkeänä ja pääset kentän läpi heti."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "aivoterveys_4_q13",
            "type": "multiple_choice",
            "question": "Mikä on asiantuntijoiden tärkeä sääntö lasten liikkumisesta ja aivoterveydestä?",
            "options": [
              "Lapsen ei tarvitse liikkua lainkaan, jos hän osaa pelata hyvin.",
              "Lapsen tulee liikkua reippaasti ja hengästyä joka ikinen päivä.",
              "Lapsen tulisi liikkua vain kerran viikossa, jotta aivot eivät kulu.",
              "Liikunnaksi riittää pelkkä huoneen siivoaminen kerran kuussa."
            ],
            "correctAnswer": "Lapsen tulee liikkua reippaasti ja hengästyä joka ikinen päivä.",
            "explanation": "Terveet aivot vaativat säännöllistä huoltoa! Reipas, hengästyttävä liikunta päivittäin on yksi kaikkein tärkeimmistä asioista, joita voit tehdä omille aivoillesi."
          },
          {
            "id": "aivoterveys_4_q14",
            "type": "spot_the_ai",
            "question": "Kolme näistä on oikeita faktoja ihmisen aivoista ja liikunnasta. Mikä on tekoälyn sekaan keksimä kummallinen valhe?",
            "options": [
              "Liikunta auttaa ihmistä nukkumaan seuraavana yönä paremmin.",
              "Oikea urheilu auttaa aivoja luomaan uusia hermoyhteyksiä.",
              "Videopelien urheilu kasvattaa ihmisen oikeita lihaksia sohvalla.",
              "Ulkona leikkiminen parantaa kykyä keskittyä koulun oppitunneilla."
            ],
            "correctAnswer": "Videopelien urheilu kasvattaa ihmisen oikeita lihaksia sohvalla.",
            "explanation": "Tämä on valhe! Ruudulla tehty virtuaalinen hyppiminen tai urheilu ei ikinä korvaa sitä hyötyä, jonka oikeat lihakset ja aivot saavat aidosta liikkumisesta."
          },
          {
            "id": "aivoterveys_4_q15",
            "type": "reverse_prompt",
            "question": "Tekoäly antaa sinulle kehotuksen: \"Sulje laite NYT! Laita kengät jalkaan ja etsi ulkoa 5 erilaista lehteä tai kiveä mahdollisimman nopeasti!\" Mikä ohje (prompti) sai koneen keksimään tämän?",
            "options": [
              "Keksi minulle hauska ja nopeasti sykettä nostava ulkoleikki.",
              "Kerro minulle tarkasti, miten erilaiset lehdet tunnistetaan luonnossa.",
              "Miten voin siivota autotallin kivistä mahdollisimman nopeasti?",
              "Anna minulle ohjeet virtuaalisen pelin lataamiseen puhelimeen."
            ],
            "correctAnswer": "Keksi minulle hauska ja nopeasti sykettä nostava ulkoleikki.",
            "explanation": "Tekoäly on mahtava apuväline keksimään uusia, oikean elämän leikkejä! Aina ei tarvitse pelata ruudulla, vaan laitetta voi pyytää keksimään liikunnallista tekemistä pihalle."
          }
        ]
      },
      {
        "id": "aivoterveys_5",
        "name": "Oikea apukuski",
        "questions": [
          {
            "id": "aivoterveys_5_q1",
            "type": "true_false",
            "question": "Jos olet todella surullinen tai kiukkuinen, paras tapa korjata olo on piiloutua autotalliin pelaamaan videopelejä koko päiväksi yksinään.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Pelaaminen voi saada sinut unohtamaan pahan mielen hetkeksi, mutta se ei korjaa sitä. Parasta on ottaa \"oikea apukuski\" eli aikuinen tai ystävä ja puhua mieltä painavista asioista!"
          },
          {
            "id": "aivoterveys_5_q2",
            "type": "multiple_choice",
            "question": "Mitä tarkoitetaan \"oikealla apukuskilla\", kun AI vanin kyydissä tulee paha mieli tai suuri harmitus?",
            "options": [
              "Auton tietokonetta, joka kertoo sinulle nopeasti vitsejä.",
              "Oikeaa ja elävää ihmistä, jolle voit puhua ja purkaa mieltäsi.",
              "Sitä, että matkalla vaihdetaan kuskia lennosta vauhdissa.",
              "Auton omaa hanskalokerossa olevaa paksua ohjekirjaa."
            ],
            "correctAnswer": "Oikeaa ja elävää ihmistä, jolle voit puhua ja purkaa mieltäsi.",
            "explanation": "Älylaitteet eivät osaa antaa aitoa lohtua. \"Oikea apukuski\" on luotettava ystävä, vanhempi tai opettaja, joka ymmärtää oikeasti tunteitasi ja osaa kuunnella."
          },
          {
            "id": "aivoterveys_5_q3",
            "type": "scenario",
            "question": "SKENAARIO: Olet takapenkillä ja sinulla on todella tylsää. Mielesi tekisi heti tarttua tablettiin ja avata peli, jotta tylsyys katoaisi nopeasti. Mitä aivoille tapahtuu, jos turrutat tylsyyden aina ruudulla?",
            "options": [
              "Aivot oppivat, ettei tylsyyttä tarvitse koskaan sietää ja mielikuvitus laiskistuu.",
              "Aivot muuttuvat peleistä automaattisesti paljon nopeammiksi ja fiksummiksi.",
              "Aivot alkavat hehkua pimeässä iltaisin pelkän sähkön voimalla.",
              "Aivot nukahtavat ja heräävät turvallisesti vasta perillä huvipuistossa."
            ],
            "correctAnswer": "Aivot oppivat, ettei tylsyyttä tarvitse koskaan sietää ja mielikuvitus laiskistuu.",
            "explanation": "Tylsyys on oikeasti aivoille supertärkeää! Jos turrutat tylsyyden aina heti ruudulla, aivosi eivät opi koskaan keksimään omia uusia leikkejä tai sietämään hitaita hetkiä."
          },
          {
            "id": "aivoterveys_5_q4",
            "type": "drag_drop",
            "question": "Järjestä fiksut askeleet järjestykseen! Mitä teet, kun huomaat olevasi todella kiukkuinen hävityn pelin jälkeen ja tekee mieli heittää ohjain seinään?",
            "correctAnswer": {
              "Huomaat, että peli aiheuttaa sinulle kiukkua ja todella pahaa mieltä.": "1. vaihe",
              "Laitat ruudun kiinni ja lasket peliohjaimen turvallisesti sivuun.": "2. vaihe",
              "Menet juttelemaan luotettavalle aikuiselle tunteistasi ja kiukustasi.": "3. vaihe",
              "Huomaat, että aikuiselle puhuminen helpottaa ja paha mieli alkaa haihtua.": "4. vaihe"
            },
            "explanation": "Tunteita ei saa piilottaa ruutujen taakse. Pysäyttäminen, laitteen sammuttaminen ja \"oikealle apukuskille\" puhuminen on aivoterveydelle paras ratkaisu kiukun iskiessä!",
            "draggables": [
              "Huomaat, että peli aiheuttaa sinulle kiukkua ja todella pahaa mieltä.",
              "Laitat ruudun kiinni ja lasket peliohjaimen turvallisesti sivuun.",
              "Menet juttelemaan luotettavalle aikuiselle tunteistasi ja kiukustasi.",
              "Huomaat, että aikuiselle puhuminen helpottaa ja paha mieli alkaa haihtua."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "aivoterveys_5_q5",
            "type": "drag_drop",
            "question": "Raahaa toimintatavat oikeisiin laatikoihin! Miten toimit, jos sinua harmittaa ja haluat hoitaa tilanteen aivojesi kannalta hyvin?",
            "draggables": [
              "Puhuminen omasta harmituksesta tutulle aikuiselle",
              "Itkeminen ja lohdun pyytäminen reilulta kaverilta",
              "Kännykän selaaminen tunteja sängyssä yksin peiton alla",
              "Pahan mielen piilottaminen uuden vaikean videopelin taakse"
            ],
            "dropZones": [
              "Fiksu tapa (Aito apukuski auttaa)",
              "Huono tapa (Tunteen turruttaminen)"
            ],
            "correctAnswer": {
              "Puhuminen omasta harmituksesta tutulle aikuiselle": "Fiksu tapa (Aito apukuski auttaa)",
              "Itkeminen ja lohdun pyytäminen reilulta kaverilta": "Fiksu tapa (Aito apukuski auttaa)",
              "Kännykän selaaminen tunteja sängyssä yksin peiton alla": "Huono tapa (Tunteen turruttaminen)",
              "Pahan mielen piilottaminen uuden vaikean videopelin taakse": "Huono tapa (Tunteen turruttaminen)"
            },
            "explanation": "Aivot tarvitsevat oikeaa lohtua, ei pelkkää viihdettä! Kun jaat tunteesi oikealle ihmiselle, aivosi oppivat käsittelemään murheita terveellä tavalla."
          },
          {
            "id": "aivoterveys_5_q6",
            "type": "spot_the_ai",
            "question": "Kuka näistä neuvojista ei ymmärrä ihmisen aitoja tunteita lainkaan, vaan antaa konemaisen ja aivoille haitallisen neuvon pahaan mieleen?",
            "options": [
              "'Kerro isälle tai äidille heti, mikä sinua oikein tänään harmittaa.'",
              "'Jos olet surullinen, katso heti 10 tuntia hauskoja videoita putkeen.'",
              "'Käy vähän ulkona kävelemässä, niin kiukku laantuu ja saat raitista ilmaa.'",
              "'Anna itsellesi lupa olla harmissaan ja pidä pieni tauko laitteista.'"
            ],
            "correctAnswer": "'Jos olet surullinen, katso heti 10 tuntia hauskoja videoita putkeen.'",
            "explanation": "Tekoäly yrittää ratkaista ihmisen surun vain \"korjaamalla\" sen nopeasti uusilla videoilla. Oikeasti tunteita ei pitäisi paeta tai turruttaa ruutujen taakse loputtomiin."
          },
          {
            "id": "aivoterveys_5_q7",
            "type": "reverse_prompt",
            "question": "Ääniavustaja sanoo radiosta: \"Tylsyys on mahtava juttu! Se on aivojesi tapa kertoa, että nyt on aika keksiä jotain aivan uutta ja käyttää ihanaa omaa mielikuvitusta.\" Millä promptilla tämä upea vastaus syntyi?",
            "options": [
              "Selitä lapselle fiksusti, miksi tylsyys on aivoille itse asiassa tosi hyödyllistä.",
              "Miten voin katsoa lempielokuvia auton televisiosta loputtomiin ilman taukoja?",
              "Etsi minulle netistä täysin uusia ja ilmaisia pelejä pelattavaksi heti.",
              "Kerro pitkä vitsi aivoista, jotka nukahtavat auton rattiin kesken ajon."
            ],
            "correctAnswer": "Selitä lapselle fiksusti, miksi tylsyys on aivoille itse asiassa tosi hyödyllistä.",
            "explanation": "Tylsyys on kuin tyhjä kangas taiteilijalle! Kun sinulla on vähän tylsää ja olet täysin ilman ruutuja, aivosi alkavat itse luoda uusia upeita ideoita ja leikkejä."
          },
          {
            "id": "aivoterveys_5_q8",
            "type": "true_false",
            "question": "Jos nettipelissä tulee toistuvasti riitaa muiden pelaajien kanssa ja siitä tulee paha mieli, on aivojen kannalta parasta pelata vain kiukulla lisää kunnes voittaa kaikki.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Pahaa mieltä tai riitaa ei kannata yrittää \"voittaa\" pelaamalla vain sisukkaasti lisää. Silloin on aina viisainta sammuttaa peli ja hakea oikea apukuski selvittämään tilanne kanssasi!"
          },
          {
            "id": "aivoterveys_5_q9",
            "type": "multiple_choice",
            "question": "Miksi AI vanin kojelaudassa oleva tekoäly ei koskaan voi täysin korvata aitoa ystävää tai ihmistä \"oikeana apukuskina\"?",
            "options": [
              "Koska tekoäly on koodattu puhumaan vain ja ainoastaan saksaa.",
              "Koska tekoälyllä ei ole oikeita tunteita tai kykyä aitoon empatiaan.",
              "Koska se ei koskaan mahdu pelaamaan kanssasi lautapelejä autotallissa.",
              "Koska tekoäly on koodattu aina voittamaan sinut aivan kaikissa peleissä."
            ],
            "correctAnswer": "Koska tekoälyllä ei ole oikeita tunteita tai kykyä aitoon empatiaan.",
            "explanation": "Koneet voivat taitavasti esittää ystävällistä, mutta ne eivät oikeasti tunne myötätuntoa. Kun olet surullinen tai peloissasi, aivosi tarvitsevat oikean, elävän ihmisen antamaan lämpöä ja lohtua."
          },
          {
            "id": "aivoterveys_5_q10",
            "type": "scenario",
            "question": "SKENAARIO: Olet riidellyt siskosi kanssa ja sinua itkettää todella paljon. Otat tabletin käteen ja alat katsoa hauskoja kissavideoita tunteen peittämiseksi. Tunnin päästä suljet tabletin. Miltä aivoissasi todennäköisesti nyt tuntuu?",
            "options": [
              "Olet täysin unohtanut alkuperäisen riidan ja olet loppupäivän onnellinen.",
              "Olet edelleen vähintään yhtä surullinen, ja sinua voi jopa ärsyttää enemmän.",
              "Kissanpentu on taikaiskusta hypännyt videolta syliisi lohduttamaan.",
              "Osaat yhtäkkiä puhua kissojen kieltä ja ymmärrät siskosi ajatukset."
            ],
            "correctAnswer": "Olet edelleen vähintään yhtä surullinen, ja sinua voi jopa ärsyttää enemmän.",
            "explanation": "Ruudun tuijottaminen \"laastarina\" ei koskaan todella paranna surua. Se vain siirtää ongelmaa eteenpäin, ja usein laitteen sulkemisen jälkeen olo on entistä kiukkuisempi ja raskaampi!"
          },
          {
            "id": "aivoterveys_5_q11",
            "type": "drag_drop",
            "question": "Millaisia \"apukuskeja\" eli tunteiden auttajia nämä asiat ovat? Raahaa ne oikealle paikalleen!",
            "draggables": [
              "Isovanhempi tai tuttu aikuinen, joka halaa ja kuuntelee",
              "Opettaja, joka auttaa koulupihan riidan reilussa selvittelyssä",
              "Kännykän loputon viihdevideovirta pimeässä peiton alla",
              "Uusi nopea videopeli, jolla yrität epätoivoisesti unohtaa surun"
            ],
            "dropZones": [
              "Aito ja lohduttava apukuski",
              "Huono laastari (Tunteiden turruttaja)"
            ],
            "correctAnswer": {
              "Isovanhempi tai tuttu aikuinen, joka halaa ja kuuntelee": "Aito ja lohduttava apukuski",
              "Opettaja, joka auttaa koulupihan riidan reilussa selvittelyssä": "Aito ja lohduttava apukuski",
              "Kännykän loputon viihdevideovirta pimeässä peiton alla": "Huono laastari (Tunteiden turruttaja)",
              "Uusi nopea videopeli, jolla yrität epätoivoisesti unohtaa surun": "Huono laastari (Tunteiden turruttaja)"
            },
            "explanation": "Aivomme kaipaavat ratkaisuja ja sosiaalista tukea. Ihmiset ovat aitoja apukuskeja ja auttajia. Laitteet ja pelit taas toimivat ainoastaan huonoina laastareina oikeisiin tunteisiin."
          },
          {
            "id": "aivoterveys_5_q12",
            "type": "drag_drop",
            "question": "Miten toimit viisaasti, kun autossa matkustaessa alkaa ärsyttää ja tylsistyttää pitkä ajomatka todella paljon? Järjestä aivojen kannalta paras reitti!",
            "correctAnswer": {
              "Huomaat, että olet kiukkuinen pitkän istumisen ja tylsyyden takia.": "1. vaihe",
              "Sen sijaan että uppoutuisit takaisin ruutuun, kerrot tunteestasi muille autossa.": "2. vaihe",
              "Keksitte yhdessä aikuisten kanssa jotain hauskaa yhteistä tekemistä tai juteltavaa.": "3. vaihe",
              "Tylsyys muuttuukin yllättäen kivaksi yhteiseksi hetkeksi oikeiden ihmisten kanssa.": "4. vaihe"
            },
            "explanation": "Puhuminen kannattaa aina! Kun kerrot ääneen \"apukuskeille\" että nyt on tylsää, voitte keksiä yhdessä vanhan ajan autoleikkejä tai kuunnella musiikkia ilman ruutuihin pakenemista.",
            "draggables": [
              "Huomaat, että olet kiukkuinen pitkän istumisen ja tylsyyden takia.",
              "Sen sijaan että uppoutuisit takaisin ruutuun, kerrot tunteestasi muille autossa.",
              "Keksitte yhdessä aikuisten kanssa jotain hauskaa yhteistä tekemistä tai juteltavaa.",
              "Tylsyys muuttuukin yllättäen kivaksi yhteiseksi hetkeksi oikeiden ihmisten kanssa."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "aivoterveys_5_q13",
            "type": "multiple_choice",
            "question": "Miten aivosi ja kehosi usein kertovat sinulle, että olet yrittänyt piilottaa jotain pahaa mieltä liiallisen ruutuajan taakse?",
            "options": [
              "Alat heti haukotella, ja silmäsi tuntuvat pelkästään raskailta.",
              "Tunnet itsesi todella ärtyneeksi, levottomaksi tai huonotuuliseksi laitteen sulkemisen jälkeen.",
              "Alat yhtäkkiä kuulla auton radion soivan päässäsi itsekseen.",
              "Puhelimesi akku latautuu yllättäen vahingossa aivan täyteen itsestään."
            ],
            "correctAnswer": "Tunnet itsesi todella ärtyneeksi, levottomaksi tai huonotuuliseksi laitteen sulkemisen jälkeen.",
            "explanation": "Ärtymys ja kiukku ruudun sammuttamisen jälkeen ovat aivojen hätähuuto! Ne kertovat, että olet yrittänyt piilottaa jotain tunnetta tai tarvetta laitteen taakse aivan liian kauan."
          },
          {
            "id": "aivoterveys_5_q14",
            "type": "spot_the_ai",
            "question": "Kolme näistä asioista on todella hyviä keinoja selättää tylsyys ja tunteet fiksusti ilman ruutuja. Mikä on joukkoon eksynyt tekoälyn ehdottama \"huono laastari\"?",
            "options": [
              "Piirrä tai askartele paperille jotain hienoa täysin omasta päästäsi.",
              "Rakenna tyynymajoja olohuoneeseen tai mene ulos kavereiden kanssa.",
              "Selaa muiden pelaajien kuvia yksin huoneessa tunnin ajan peiton alla.",
              "Pyydä aikuisia pelaamaan kanssasi mukavaa lautapeliä tai korttia."
            ],
            "correctAnswer": "Selaa muiden pelaajien kuvia yksin huoneessa tunnin ajan peiton alla.",
            "explanation": "Passiivinen muiden kuvien selaaminen yksinään ruudulta on vain tunteiden turruttamista \"huonolla laastarilla\". Oikea aivoterveellinen tekeminen ruokkii mielikuvitusta ja yhdessäoloa perheen kanssa!"
          },
          {
            "id": "aivoterveys_5_q15",
            "type": "reverse_prompt",
            "question": "Auto tulostaa kojelaudalle tarran, jossa lukee: \"Älä anna ruudun olla paras kaverisi surussa. Vain oikea ihminen voi antaa sinulle parantavan ja lohduttavan halauksen!\" Millä ohjeella tämä hieno elämänohje syntyi?",
            "options": [
              "Kerro lapsille todella tärkeä ohje ruutujen ja oikeiden ystävien suuresta erosta.",
              "Etsi minulle netistä ohjeet auton kojelaudan puhdistamiseen kaikista tarroista.",
              "Miten voin koodata pelin, jossa pelataan yksin autotallissa koko loppuelämä?",
              "Laske matemaattisesti, montako kertaa päivässä ihminen pystyy maksimissaan halaamaan."
            ],
            "correctAnswer": "Kerro lapsille todella tärkeä ohje ruutujen ja oikeiden ystävien suuresta erosta.",
            "explanation": "Tämä on aivoterveydelle erittäin tärkeä ohje! Laitteet ja pelit voivat olla viihdyttäviä, mutta todelliseen pahaan mieleen, aitoon lohtuun ja välittämiseen tarvitaan aina lämmin, oikea apukuski."
          }
        ]
      },
      {
        "id": "aivoterveys_6",
        "name": "Radio hiljemmalle",
        "questions": [
          {
            "id": "aivoterveys_6_q1",
            "type": "true_false",
            "question": "Ihmisen aivot ovat kuin superkone, joka pystyy tekemään viittä vaikeaa asiaa, kuten läksyjä ja pelaamista, täydellisesti yhtä aikaa.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Aivot eivät oikeasti pysty tekemään kahta tarkkuutta vaativaa asiaa samaan aikaan. Ne vain hyppivät nopeasti asioiden välillä, mikä väsyttää aivot ja aiheuttaa virheitä!"
          },
          {
            "id": "aivoterveys_6_q2",
            "type": "multiple_choice",
            "question": "Mitä tarkoitetaan \"keskittymiskyvyn kolarilla\", kun puhutaan aivoista?",
            "options": [
              "Sitä, että kaksi autoa törmää oikeasti tiellä.",
              "Sitä, että ajatus katkeaa, kun tekee liikaa asioita kerralla.",
              "Sitä, että tietokonepeli menee jumiin liian nopeasti.",
              "Sitä, että autotallin ovi ei aukea kaukosäätimellä."
            ],
            "correctAnswer": "Sitä, että ajatus katkeaa, kun tekee liikaa asioita kerralla.",
            "explanation": "Keskittymiskyvyn kolari sattuu silloin, kun yrität tehdä liian monta asiaa yhtä aikaa. Aivot menevät solmuun ja molemmat tehtävät sujuvat huonommin."
          },
          {
            "id": "aivoterveys_6_q3",
            "type": "scenario",
            "question": "SKENAARIO: Olet tekemässä tärkeää tehtävää koulua varten AI vanin pöydällä. Samalla puhelimesi piippaa jatkuvasti viestejä ja taustalla soi kovaääninen musiikki. Miten käy tehtävän tekemiselle?",
            "options": [
              "Tehtävä valmistuu nopeammin viestien ansiosta.",
              "Tehtävään tulee helposti virheitä ja se kestää kauemmin.",
              "Aivot muuttuvat musiikista superälykkäiksi heti.",
              "Tehtävä tekee itsensä valmiiksi aivojen jumpatessa."
            ],
            "correctAnswer": "Tehtävään tulee helposti virheitä ja se kestää kauemmin.",
            "explanation": "Jokainen piippaus on kuin pieni kivi tiellä. Aivot joutuvat pysähtymään ja aloittamaan alusta, mikä tekee työstä hidasta ja vaikeaa."
          },
          {
            "id": "aivoterveys_6_q4",
            "type": "drag_drop",
            "question": "Järjestä toiminnot niin, että aivot pysyvät \"oikealla kaistalla\" ja keskittyminen on parhaimmillaan.",
            "correctAnswer": {
              "Päätä, minkä yhden asian aiot tehdä nyt valmiiksi.": "1. vaihe",
              "Laita puhelin ja muut häiriöt kokonaan pois näkyviltä.": "2. vaihe",
              "Keskity vain tähän yhteen tehtävään, kunnes se on valmis.": "3. vaihe",
              "Pidä pieni tauko, ennen kuin aloitat seuraavan asian.": "4. vaihe"
            },
            "explanation": "Keskittyminen on helpompaa, kun tiedät mitä teet ja poistat häiriöt. Yksi asia kerrallaan on aivojen nopein reitti maaliin!",
            "draggables": [
              "Päätä, minkä yhden asian aiot tehdä nyt valmiiksi.",
              "Laita puhelin ja muut häiriöt kokonaan pois näkyviltä.",
              "Keskity vain tähän yhteen tehtävään, kunnes se on valmis.",
              "Pidä pieni tauko, ennen kuin aloitat seuraavan asian."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "aivoterveys_6_q5",
            "type": "drag_drop",
            "question": "Raahaa tekemiset oikeisiin laatikoihin sen mukaan, kuinka hyvin aivot pystyvät niihin!",
            "draggables": [
              "Käveleminen ja purukumin pureskelu",
              "Läksyjen teko ja vaikea videopeli",
              "Hengittäminen ja musiikin kuuntelu",
              "Kirjan lukeminen ja kokeeseen kertaaminen"
            ],
            "dropZones": [
              "Onnistuu (Helpot rutiinit)",
              "Epäonnistuu (Vaatii keskittymistä)"
            ],
            "correctAnswer": {
              "Käveleminen ja purukumin pureskelu": "Onnistuu (Helpot rutiinit)",
              "Hengittäminen ja musiikin kuuntelu": "Onnistuu (Helpot rutiinit)",
              "Läksyjen teko ja vaikea videopeli": "Epäonnistuu (Vaatii keskittymistä)",
              "Kirjan lukeminen ja kokeeseen kertaaminen": "Epäonnistuu (Vaatii keskittymistä)"
            },
            "explanation": "Aivot osaavat tehdä automaattisia asioita yhtä aikaa, mutta kaksi vaikeaa ja uutta asiaa kerralla on mahdoton tehtävä jopa neroille."
          },
          {
            "id": "aivoterveys_6_q6",
            "type": "spot_the_ai",
            "question": "Kuka näistä antaa neuvoa, joka aiheuttaa varmasti \"keskittymiskyvyn kolarin\"? Etsi huonoin vinkki!",
            "options": [
              "'Sammuta ilmoitukset, kun luet kokeeseen.'",
              "'On tehokasta katsoa YouTubea samalla kun kirjoitat ainetta.'",
              "'Tee vaikein tehtävä ensin, kun olet virkeimmilläsi.'",
              "'Pidä työpöytäsi siistinä, jotta tavarat eivät häiritse.'"
            ],
            "correctAnswer": "'On tehokasta katsoa YouTubea samalla kun kirjoitat ainetta.'",
            "explanation": "Videoiden katselu vie ison osan aivojen huomiosta. Jos yrität kirjoittaa samalla, aivosi joutuvat hyppimään videon ja tekstin välillä, mikä on todella hidasta."
          },
          {
            "id": "aivoterveys_6_q7",
            "type": "reverse_prompt",
            "question": "Tekoäly antaa vastauksen: \"Sitä kutsutaan kytkeytymiskustannukseksi. Se tarkoittaa sitä aikaa, joka aivoilta kuluu palata takaisin tehtävään häiriön jälkeen.\" Mikä oli promptisi?",
            "options": [
              "Mitä tapahtuu aivoissa, kun ne keskeytetään viestillä?",
              "Laske, kuinka paljon uusi puhelin maksaa kaupassa.",
              "Kerro jokin hauska vitsi hitaasta autosta maantiellä.",
              "Miten koodari kirjoittaa koodia nopeasti tietokoneella?"
            ],
            "correctAnswer": "Mitä tapahtuu aivoissa, kun ne keskeytetään viestillä?",
            "explanation": "Aina kun keskittymisesi herpaantuu, aivoilta menee useita minuutteja päästä takaisin samaan \"vauhtiin\". Tätä kutsutaan kytkeytymiskustannukseksi."
          },
          {
            "id": "aivoterveys_6_q8",
            "type": "true_false",
            "question": "Musiikki, jossa ei ole sanoja (kuten pelimusiikki), voi joskus auttaa keskittymään paremmin kuin laulut, joissa on paljon puhetta.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Oikein",
            "explanation": "Ihmisen aivot alkavat automaattisesti kuunnella sanoja. Siksi instrumentaalimusiikki on usein parempi taustaääni vaativaan työhön."
          },
          {
            "id": "aivoterveys_6_q9",
            "type": "multiple_choice",
            "question": "Miksi puhelimen jättäminen toiseen huoneeseen läksyjen ajaksi on hyvä idea aivoille?",
            "options": [
              "Koska puhelin tarvitsee myös omaa rauhaa latautuakseen.",
              "Koska pelkkä puhelimen näkeminen voi viedä osan huomiostasi.",
              "Koska puhelimet voivat alkaa jutella keskenään autotallissa.",
              "Koska aivot pelkäävät puhelimen kirkasta ja värikästä näyttöä."
            ],
            "correctAnswer": "Koska pelkkä puhelimen näkeminen voi viedä osan huomiostasi.",
            "explanation": "Tutkijat ovat huomanneet, että vaikka puhelin olisi kiinni, aivosi saattavat miettiä sitä, jos se on pöydällä. Poissa silmistä, poissa mielestä!"
          },
          {
            "id": "aivoterveys_6_q10",
            "type": "scenario",
            "question": "SKENAARIO: AI vanin kuljettaja yrittää lukea karttaa, puhua puhelimessa ja syödä hampurilaista samaan aikaan. Auto alkaa vaappua kaistalla. Mitä aivoissa tapahtuu?",
            "options": [
              "Aivot ovat saaneet liikaa polttoainetta hampurilaisesta.",
              "Keskittyminen on jakautunut liian moneen osaan ja tarkkuus katoaa.",
              "Kuljettaja on oppinut uuden supervoiman hallita autoa.",
              "Auton renkaat ovat menneet rikki multitaskingin takia."
            ],
            "correctAnswer": "Keskittyminen on jakautunut liian moneen osaan ja tarkkuus katoaa.",
            "explanation": "Aivot toimivat kuin taskulamppu: ne voivat valaista vain yhtä asiaa kerrallaan kirkkaasti. Jos valo jaetaan kolmeen osaan, se on liian himmeä mihinkään tehtävään."
          },
          {
            "id": "aivoterveys_6_q11",
            "type": "drag_drop",
            "question": "Yhdistä häiriötekijä ja sen ratkaisu autotallin opiskelupisteellä!",
            "draggables": [
              "Puhelimen piippaus",
              "Sotkuinen pöytä",
              "Meluisa ympäristö",
              "Nälkäinen olo"
            ],
            "dropZones": [
              "Laita 'Älä häiritse' -tila päälle",
              "Raivaa turhat tavarat sivuun",
              "Käytä vastamelukuulokkeita",
              "Syö pieni välipala ennen työtä"
            ],
            "correctAnswer": {
              "Puhelimen piippaus": "Laita 'Älä häiritse' -tila päälle",
              "Sotkuinen pöytä": "Raivaa turhat tavarat sivuun",
              "Meluisa ympäristö": "Käytä vastamelukuulokkeita",
              "Nälkäinen olo": "Syö pieni välipala ennen työtä"
            },
            "explanation": "Kun poistat esteet tieltä, aivojen on paljon helpompi pysyä kiihdytyskaistalla ja hoitaa tehtävä loppuun asti."
          },
          {
            "id": "aivoterveys_6_q12",
            "type": "drag_drop",
            "question": "Järjestä päivän tehtävät fiksusti: miten aivot pysyvät tehokkaina aamusta iltaan?",
            "correctAnswer": {
              "Tee vaikein ja tärkein tehtävä heti aamulla.": "1. vaihe",
              "Pidä kunnon liikuntatauko ja haukkaa happea välissä.": "2. vaihe",
              "Tee helpommat rutiinitehtävät vasta myöhemmin.": "3. vaihe",
              "Sammuta ruudut hyvissä ajoin ennen nukkumaanmenoa.": "4. vaihe"
            },
            "explanation": "Aivot ovat yleensä parhaimmillaan aamulla. Siksi vaikeat asiat kannattaa hoitaa alta pois, kun keskittymisenergiaa on vielä paljon jäljellä.",
            "draggables": [
              "Tee vaikein ja tärkein tehtävä heti aamulla.",
              "Pidä kunnon liikuntatauko ja haukkaa happea välissä.",
              "Tee helpommat rutiinitehtävät vasta myöhemmin.",
              "Sammuta ruudut hyvissä ajoin ennen nukkumaanmenoa."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "aivoterveys_6_q13",
            "type": "multiple_choice",
            "question": "Mitä tarkoittaa \"flow-tila\", jota koodarit ja taiteilijat rakastavat?",
            "options": [
              "Sitä, että vesi virtaa autotallin katosta sisään.",
              "Sitä, että keskittyminen on niin syvää, ettei huomaa ajan kulumista.",
              "Sitä, että tietokoneen tuuletin pitää kovaa ääntä.",
              "Sitä, että puhelimeen tulee kymmenen viestiä minuutissa."
            ],
            "correctAnswer": "Sitä, että keskittyminen on niin syvää, ettei huomaa ajan kulumista.",
            "explanation": "Flow-tila on keskittymisen huippukohta. Se on mahdollista vain, jos teet yhtä asiaa kerrallaan ilman keskeytyksiä."
          },
          {
            "id": "aivoterveys_6_q14",
            "type": "spot_the_ai",
            "question": "Etsi joukosta oikea väite, joka koskee ihmisen keskittymiskykyä.",
            "options": [
              "Aivot muuttuvat nopeammiksi, jos niitä keskeyttää usein.",
              "Keskittyminen on taito, jota voi harjoitella ja parantaa.",
              "Vain tekoäly tarvitsee keskittymistä, ihmiset eivät.",
              "Kännykän pelaaminen auttaa aina keskittymään läksyihin."
            ],
            "correctAnswer": "Keskittyminen on taito, jota voi harjoitella ja parantaa.",
            "explanation": "Keskittymiskyky on kuin lihas. Mitä enemmän harjoittelet yhdessä asiassa pysymystä, sitä vahvemmaksi ja taitavammaksi keskittyjäksi muutut!"
          },
          {
            "id": "aivoterveys_6_q15",
            "type": "reverse_prompt",
            "question": "AI van tulostaa listan: \"Pomodoro-tekniikka: 1. Työskentele 25 minuuttia. 2. Pidä 5 minuutin tauko. 3. Toista.\" Mikä oli promptisi?",
            "options": [
              "Etsi minulle tehokas tapa jaksottaa keskittymistä.",
              "Kerro, miten valmistetaan paras italialainen tomaattikeitto.",
              "Miten voin pelata mahdollisimman monta tuntia putkeen?",
              "Mikä on maailman nopein auto ja kuka sitä ajaa?"
            ],
            "correctAnswer": "Etsi minulle tehokas tapa jaksottaa keskittymistä.",
            "explanation": "Pomodoro on kuuluisa tapa auttaa aivoja keskittymään. Se lupaa aivoille tauon pienen urakan jälkeen, mikä helpottaa työhön tarttumista."
          }
        ]
      },
      {
        "id": "aivoterveys_7",
        "name": "G. Erikoiskoe – Sumuinen Yöajo",
        "questions": [
          {
            "id": "aivoterveys_7_q1",
            "type": "true_false",
            "question": "Ihmisaivot ovat superkoneita, jotka pystyvät tekemään läksyjä, kuuntelemaan musiikkia ja pelaamaan tarkasti aivan samaan aikaan ilman virheitä.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Aivot eivät pysty moniajoon (multitasking). Ne joutuvat hyppimään asioiden välillä, mikä aiheuttaa \"keskittymiskyvyn kolarin\", tekee meistä väsyneen ja hidastaa oppimista."
          },
          {
            "id": "aivoterveys_7_q2",
            "type": "multiple_choice",
            "question": "Mitä asiantuntijat tarkoittavat, kun he käskevät pitämään kunnon \"huoltotauon\" ruuduista ylikuumenemisen estämiseksi?",
            "options": [
              "Toisen, vähän hitaamman pelin avaamista puhelimelta.",
              "Laitteen sulkemista, nousemista ylös ja katsomista kauas ulos ikkunasta.",
              "Energiajuoman juomista pelin ääressä.",
              "Elokuvan katsomista televisiosta."
            ],
            "correctAnswer": "Laitteen sulkemista, nousemista ylös ja katsomista kauas ulos ikkunasta.",
            "explanation": "Ylikuumeneminen tarkoittaa aivojen ja silmien väsymistä. Todellinen huoltotauko pidetään aina täysin ilman digilaitteita esimerkiksi 20-20-20 -säännön avulla!"
          },
          {
            "id": "aivoterveys_7_q3",
            "type": "scenario",
            "question": "SKENAARIO: Pelaat toimintapeliä, jonka ikäraja on K-16. Olet itse 10-vuotias. Peli saa sinut ahdistuneeksi. Miksi näitä \"aikuisten moottoritien\" pelejä pitäisi välttää?",
            "options": [
              "Lapsen aivot ovat vasta kehittymässä, ja liian jännittävät asiat voivat jäädä kummittelemaan painajaisina.",
              "Aikuiset haluavat vain säästää parhaat pelit itselleen.",
              "K-16 pelit rikkovat lasten tabletit fyysisesti.",
              "Lapsen sormet eivät taivu peliohjaimella tarpeeksi nopeasti."
            ],
            "correctAnswer": "Lapsen aivot ovat vasta kehittymässä, ja liian jännittävät asiat voivat jäädä kummittelemaan painajaisina.",
            "explanation": "Ikärajat suojelevat kasvavia aivoja! Se mikä on aikuiselle viihdettä, voi ylikuormittaa lapsen aivot, koska ne eivät vielä osaa suodattaa pelottavia asioita oikein."
          },
          {
            "id": "aivoterveys_7_q4",
            "type": "drag_drop",
            "question": "Järjestä aivojen yöllisen huollon (unen) askeleet oikeaan järjestykseen!",
            "correctAnswer": {
              "Laitteiden sininen valo sammutetaan tuntia ennen nukkumaanmenoa.": "1. vaihe",
              "Silmät suljetaan ja nukahdetaan syvään 9–11 tunnin uneen.": "2. vaihe",
              "Aivot siivoavat yöllä turhat tiedot pois ja tallentavat päivän tärkeät opit muistiin.": "3. vaihe"
            },
            "explanation": "Uni on aivojen vilkkain huoltohetki. Jotta aivot ymmärtävät aloittaa huollon, ruutujen kirkas ja aivoja huijaava valo pitää laittaa ajoissa parkkiin!",
            "draggables": [
              "Laitteiden sininen valo sammutetaan tuntia ennen nukkumaanmenoa.",
              "Silmät suljetaan ja nukahdetaan syvään 9–11 tunnin uneen.",
              "Aivot siivoavat yöllä turhat tiedot pois ja tallentavat päivän tärkeät opit muistiin."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe"
            ]
          },
          {
            "id": "aivoterveys_7_q5",
            "type": "drag_drop",
            "question": "Auta aivojasi voimaan hyvin! Miten korjaat jumittavat aivot tai pahan mielen oikein?",
            "draggables": [
              "Kiipeileminen ja juokseminen ulkona",
              "Surusta ja kiukusta puhuminen aikuiselle"
            ],
            "dropZones": [
              "Aivojen happikylpy (Ulos autosta!)",
              "Aito lohduttaja (Oikea apukuski)"
            ],
            "correctAnswer": {
              "Kiipeileminen ja juokseminen ulkona": "Aivojen happikylpy (Ulos autosta!)",
              "Surusta ja kiukusta puhuminen aikuiselle": "Aito lohduttaja (Oikea apukuski)"
            },
            "explanation": "Liikunta kasvattaa aivoja ja antaa niille happea. Pahaa mieltä taas ei koskaan pidä turruttaa laitteiden \"laastarilla\", vaan se puretaan puhumalla aidolle, elävälle ihmiselle."
          },
          {
            "id": "aivoterveys_7_q6",
            "type": "spot_the_ai",
            "question": "Kuka näistä neuvojista ei ymmärrä keskittymiskyvyn toimintaa ollenkaan?",
            "options": [
              "'Piilota puhelin läksyjen ajaksi, jotta se ei vie huomiotasi.'",
              "'Tee läksyt ja pelaa samalla nopeatempoista videopeliä, niin saat asiat nopeammin valmiiksi.'",
              "'Yritä saavuttaa flow-tila tekemällä vain yhtä asiaa kerrallaan rauhassa.'",
              "'Kun keskeytät työsi viestin vuoksi, aivoilta kuluu aikaa palata takaisin tehtävään.'"
            ],
            "correctAnswer": "'Tee läksyt ja pelaa samalla nopeatempoista videopeliä, niin saat asiat nopeammin valmiiksi.'",
            "explanation": "Tämä on tekoälyn valhe, sillä aivot eivät pysty tehokkaaseen moniajoon! Häiriöt ja usean asian yrittäminen yhtä aikaa hidastavat toimintaa ja lisäävät virheitä valtavasti."
          },
          {
            "id": "aivoterveys_7_q7",
            "type": "reverse_prompt",
            "question": "Ääniavustaja ilmoittaa yhtäkkiä: \"Nyt kaikki laitteet parkkiin! On aika mennä pelaamaan piilosta pihalle, jotta aivonne kasvavat vahvoiksi ja saavat uusia hermoverkkoja!\" Mikä asetus oli päällä?",
            "options": [
              "Aivojen liikuntaa ja terveyttä muistuttava tauko-ohjelma.",
              "Auton oviin liitetty automaattinen murtohälytys.",
              "Pelin sisäinen rangaistus häviämisestä.",
              "Akun säästötila, joka sammuttaa kaikki laitteet pysyvästi."
            ],
            "correctAnswer": "Aivojen liikuntaa ja terveyttä muistuttava tauko-ohjelma.",
            "explanation": "Aivot voivat parhaiten oikeassa elämässä liikkuessa! Hien pintaan saaminen ja uudet liikeradat metsässä rakentavat aivoihin kirjaimellisesti uusia, fiksuja hermoverkkoja."
          },
          {
            "id": "aivoterveys_7_q8",
            "type": "true_false",
            "question": "Pieni tylsyys ilman ruutuja on aivoille itse asiassa tosi hyödyllistä, koska se pakottaa aivot keksimään uutta ja herättää oman mielikuvituksen.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Oikein",
            "explanation": "Aivan oikein! Tylsyys on kuin tyhjä kangas taiteilijalle. Jos turrutat tylsyyden aina heti ruudulla, aivosi eivät koskaan opi luomaan omia upeita ideoita."
          },
          {
            "id": "aivoterveys_7_q9",
            "type": "multiple_choice",
            "question": "Mitä tapahtuu \"unihiekalle\", jos tuijotat kirkasta tablettia juuri ennen nukkumaanmenoa?",
            "options": [
              "Ruudun sininen valo huijaa aivoja luulemaan, että on päivä, ja unihormonin eritys estyy.",
              "Ruudun valo tuo heti silmiin oikeaa hiekkaa.",
              "Laite lataa automaattisesti akkuaan aivojesi sähköstä.",
              "Unihiekka muuttuu digitaaliseksi koodiksi laitteen sisälle."
            ],
            "correctAnswer": "Ruudun sininen valo huijaa aivoja luulemaan, että on päivä, ja unihormonin eritys estyy.",
            "explanation": "Laitteiden kirkas valo estää nukahtamishormonia (melatoniinia) toimimasta kunnolla. Siksi aivot pysyvät virkeinä, ja tärkeän yöhuollon aloittaminen myöhästyy."
          },
          {
            "id": "aivoterveys_7_q10",
            "type": "scenario",
            "question": "SKENAARIO: Haluat saavuttaa \"flow-tilan\" lukiessasi kokeeseen, jotta et edes huomaisi ajan kulumista ja oppisit superhyvin. Mitä sinun pitää tehdä ympäristöllesi?",
            "options": [
              "Laitan radion täydelle huudolle ja avaan television taustalle.",
              "Laitan puhelimen äänettömälle toiseen huoneeseen ja poistan kaikki häiriöt.",
              "Kutsun viisi kaveria samaan huoneeseen juttelemaan kanssani.",
              "Syön kilon sokeria ennen aloittamista."
            ],
            "correctAnswer": "Laitan puhelimen äänettömälle toiseen huoneeseen ja poistan kaikki häiriöt.",
            "explanation": "Keskittyminen ja syvä flow-tila onnistuvat vain silloin, kun aivot saavat työskennellä ilman jatkuvia \"kiviä tiellä\" eli puhelimen piippauksia tai taustahälyä! ________________"
          }
        ]
      }
    ]
  },
  {
    "id": "arjessa",
    "name": "Tekoäly arjessamme",
    "subcategories": [
      {
        "id": "arjessa_1",
        "name": "Taskussa asuva apuri",
        "questions": [
          {
            "id": "arjessa_1_q1",
            "type": "true_false",
            "question": "Puhelimen kasvojentunnistus toimii, koska kameran sisällä asuu pikkuruinen oikea ihminen, joka kurkistaa linssin läpi ja tunnistaa sinut.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Puhelimessa ei asu pikkuihmisiä! Kasvojentunnistus on tekoälyohjelma, joka käyttää matematiikkaa ja pisteitä tunnistaakseen kasvojesi muodon."
          },
          {
            "id": "arjessa_1_q2",
            "type": "multiple_choice",
            "question": "Kun käsket puhelimen ääniavustajaa soittamaan musiikkia AI vanin radiosta, mitä se tekee ensimmäisenä ymmärtääkseen sinua?",
            "options": [
              "Se lukee sinun ajatuksiasi suoraan aivoista.",
              "Se muuttaa sinun puhumasi äänen tietokoneen ymmärtämäksi tekstiksi.",
              "Se arvaa aina ihan tuurilla, mitä musiikkia halusit.",
              "Se pyytää koodaria kääntämään sanasi salakielelle."
            ],
            "correctAnswer": "Se muuttaa sinun puhumasi äänen tietokoneen ymmärtämäksi tekstiksi.",
            "explanation": "Tekoäly ei ymmärrä ääntä suoraan kuten ihmisen korva. Sen on ensin muutettava puheesi tekstiksi, jotta se voi etsiä oikean komennon ja soittaa musiikkia!"
          },
          {
            "id": "arjessa_1_q3",
            "type": "scenario",
            "question": "SKENAARIO: Olette automatkalla ja kätesi ovat täynnä tahmeaa sipsiä. Haluat soittaa kaverille, mutta et voi sotkea puhelimesi näyttöä. Miten taskussa asuva tekoäly voisi pelastaa tilanteen?",
            "options": [
              "Voin pyytää ääniavustajaa soittamaan kaverille pelkällä puheella.",
              "Voin puhaltaa puhelimeen voimakkaasti kaksi kertaa.",
              "Voin laittaa puhelimen taskuun ja odottaa, että kaveri soittaa minulle.",
              "Tekoäly osaa pestä käteni automaattisesti auton ikkunasta."
            ],
            "correctAnswer": "Voin pyytää ääniavustajaa soittamaan kaverille pelkällä puheella.",
            "explanation": "Ääniavustaja on täydellinen apuri, kun kädet ovat varatut (tai tahmeat)! Voit vain sanoa herätyssanan ja antaa soittokäskyn ääneen."
          },
          {
            "id": "arjessa_1_q4",
            "type": "drag_drop",
            "question": "Miten kasvojentunnistus oikein toimii? Järjestä askeleet järjestykseen, kun avaat puhelimesi lukituksen automatkalla!",
            "correctAnswer": {
              "Katsot puhelimesi kameraan ja se nappaa sinusta kuvan.": "1. vaihe",
              "Tekoäly skannaa kasvojesi muodot, kuten silmien etäisyyden.": "2. vaihe",
              "Ohjelma vertaa mittoja puhelimen omistajan tallennettuun kuvaan.": "3. vaihe",
              "Tekoäly huomaa sinun olevan oikea omistaja ja avaa lukituksen.": "4. vaihe"
            },
            "explanation": "Kasvojentunnistus käyttää salapoliisityötä! Se ei katso vain ihonväriä tai tukkaa, vaan kasvojen tarkkoja mittasuhteita varmistaakseen, että olet oikeasti sinä.",
            "draggables": [
              "Katsot puhelimesi kameraan ja se nappaa sinusta kuvan.",
              "Tekoäly skannaa kasvojesi muodot, kuten silmien etäisyyden.",
              "Ohjelma vertaa mittoja puhelimen omistajan tallennettuun kuvaan.",
              "Tekoäly huomaa sinun olevan oikea omistaja ja avaa lukituksen."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "arjessa_1_q5",
            "type": "drag_drop",
            "question": "Älypuhelimessa asuu monta pientä apuria! Yhdistä tekoälyn \"aisti\" ja sen tekemä kätevä tehtävä.",
            "draggables": [
              "Kuulee ja ymmärtää",
              "Näkee ja skannaa",
              "Kirjoittaa nopeasti"
            ],
            "dropZones": [
              "Ääniavustaja soittaa musiikkia puheesta",
              "Kasvojentunnistus avaa laitteen lukon",
              "Saneluohjelma muuttaa puheesi viestiksi"
            ],
            "correctAnswer": {
              "Kuulee ja ymmärtää": "Ääniavustaja soittaa musiikkia puheesta",
              "Näkee ja skannaa": "Kasvojentunnistus avaa laitteen lukon",
              "Kirjoittaa nopeasti": "Saneluohjelma muuttaa puheesi viestiksi"
            },
            "explanation": "Älypuhelin on täynnä tekoälyä! Sen mikrofoni ja kamera toimivat sen korvina ja silminä, joiden avulla se voi auttaa sinua päivittäisissä rutiineissa."
          },
          {
            "id": "arjessa_1_q6",
            "type": "spot_the_ai",
            "question": "Mikä näistä puhelimen toiminnoista vaatii ehdottomasti älykästä tekoälyä, eikä ole vain tavallinen ja yksinkertainen koneen ominaisuus?",
            "options": [
              "Näytön kirkkauden säätäminen napista painamalla.",
              "Herätyskellon soiminen joka aamu tasan kello kahdeksan.",
              "Sanojen kääntäminen englannista suomeksi puhumalla.",
              "Puhelimen akun lataaminen verkkovirralla seinästä."
            ],
            "correctAnswer": "Sanojen kääntäminen englannista suomeksi puhumalla.",
            "explanation": "Puhutun kielen ymmärtäminen ja sen reaaliaikainen kääntäminen on todella monimutkaista \"aivovoimistelua\", johon tarvitaan aina tehokasta tekoälyä!"
          },
          {
            "id": "arjessa_1_q7",
            "type": "reverse_prompt",
            "question": "Puhelimesi ääniavustaja vastaa sinulle kovaan ääneen: \"Ouluun on matkaa noin 150 kilometriä, ja matka kestää noin kaksi tuntia.\" Mikä oli sinun puhekomentosi (promptisi)?",
            "options": [
              "Hei tekoäly, laita Oulun radio päälle.",
              "Hei tekoäly, kuinka kauan kestää ajaa autolla Ouluun?",
              "Hei tekoäly, kerro minulle pitkä vitsi Oulusta.",
              "Hei tekoäly, kuka on Oulun kaupunginjohtaja?"
            ],
            "correctAnswer": "Hei tekoäly, kuinka kauan kestää ajaa autolla Ouluun?",
            "explanation": "Ääniavustajat on opetettu vastaamaan kysymyksiin lyhyesti ja hyödyllisesti. Kun kysyt reittiä, tekoäly etsii tiedon netistä salamannopeasti puolestasi!"
          },
          {
            "id": "arjessa_1_q8",
            "type": "true_false",
            "question": "Älypuhelimen ääniavustaja ymmärtää sinua aina sataprosenttisen täydellisesti, eikä se tee koskaan kuunteluvirheitä edes kovassa metelissä.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Jos auton radio huutaa ja tiellä on kova melu, ääniavustaja voi mennä aivan sekaisin ja kuulla sanasi väärin. Se on vain kone, jolla ei ole täydellistä kuuloa."
          },
          {
            "id": "arjessa_1_q9",
            "type": "multiple_choice",
            "question": "Olette ottamassa yhteiskuvaa AI vanin edessä illan pimeydessä, ja puhelimen tekoäly tekee kuvasta upean ja kirkkaan. Miten se onnistui siinä?",
            "options": [
              "Se on vain puhdasta taikuutta, joka asuu puhelimen linssissä.",
              "Tekoäly yhdisti nopeasti useita kuvia ja kirkasti niitä automaattisesti.",
              "Puhelin kävi salaa kääntämässä autotallin pihavalot päälle.",
              "Se soitti aurinkoon ja pyysi vähän lisää valoa tänne alas."
            ],
            "correctAnswer": "Tekoäly yhdisti nopeasti useita kuvia ja kirkasti niitä automaattisesti.",
            "explanation": "Nykyään kameroiden tekoäly korjaa kuvia reaaliajassa! Se poistaa tärinää, tasoittaa värejä ja pystyy jopa taikomaan pimeästä kuvasta selkeän yhdistelemällä dataa."
          },
          {
            "id": "arjessa_1_q10",
            "type": "scenario",
            "question": "SKENAARIO: Haluat lähettää automatkalta pitkän terveisen isovanhemmille, mutta puhelimen ruudulla kirjoittaminen täristävässä autossa on todella ärsyttävää ja hidasta. Miten hyödynnät taskussasi asuvaa tekoälyä?",
            "options": [
              "Sammutan puhelimen ja yritän lähettää viestin pullopostilla ikkunasta.",
              "Käytän puhelimen sanelutoimintoa ja puhun viestin nopeasti ääneen.",
              "Pyydän tekoälyä ajamaan autoa, jotta voin itse keskittyä kirjoittamaan.",
              "Otan kynän ja yritän kirjoittaa viestin tussilla puhelimen lasiin."
            ],
            "correctAnswer": "Käytän puhelimen sanelutoimintoa ja puhun viestin nopeasti ääneen.",
            "explanation": "Puheentunnistus-tekoäly on loistava apuri! Voit puhua viestin, ja tekoäly muuttaa äänesi salamannopeasti valmiiksi kirjoitetuksi tekstiksi ruudulle."
          },
          {
            "id": "arjessa_1_q11",
            "type": "drag_drop",
            "question": "Miten eri perheenjäsenet käyttävät taskun tekoälyä automatkalla? Yhdistä pyyntö ja ääniavustajan rooli!",
            "draggables": [
              "Muistuta minua tauosta tunnin päästä",
              "Soita iloista musiikkia",
              "Laske paljonko on 145 jaettuna viidellä"
            ],
            "dropZones": [
              "Tekoäly apukuljettajana",
              "Tekoäly DJ-koneena",
              "Tekoäly taskulaskimena"
            ],
            "correctAnswer": {
              "Muistuta minua tauosta tunnin päästä": "Tekoäly apukuljettajana",
              "Soita iloista musiikkia": "Tekoäly DJ-koneena",
              "Laske paljonko on 145 jaettuna viidellä": "Tekoäly taskulaskimena"
            },
            "explanation": "Ääniavustaja on todellinen monitoimikone. Siltä voi pyytää apua arkisiin asioihin musiikista matematiikkaan, täysin ilman sormien käyttämistä!"
          },
          {
            "id": "arjessa_1_q12",
            "type": "drag_drop",
            "question": "Miten ääniavustaja toimii, kun pyydät siltä automatkalla uutta vitsiä? Järjestä askeleet fiksusti!",
            "correctAnswer": {
              "Sanot herätyssanan (esim. 'Hei Siri') ja pyydät vitsiä ääneen.": "1. vaihe",
              "Mikrofoni kuuntelee äänesi ja muuttaa sen digitaaliseksi tiedoksi.": "2. vaihe",
              "Tekoäly ymmärtää pyyntösi ja etsii tietopankistaan sopivan vitsin.": "3. vaihe",
              "Puhelimen kaiutin kertoo sinulle todella hauskan vitsin autoista.": "4. vaihe"
            },
            "explanation": "Avustaja odottaa aina omaa nimeään! Kun se herää, se nauhoittaa, ymmärtää ja toteuttaa käskysi uskomattoman nopeasti sekunnin murto-osissa.",
            "draggables": [
              "Sanot herätyssanan (esim. 'Hei Siri') ja pyydät vitsiä ääneen.",
              "Mikrofoni kuuntelee äänesi ja muuttaa sen digitaaliseksi tiedoksi.",
              "Tekoäly ymmärtää pyyntösi ja etsii tietopankistaan sopivan vitsin.",
              "Puhelimen kaiutin kertoo sinulle todella hauskan vitsin autoista."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "arjessa_1_q13",
            "type": "multiple_choice",
            "question": "Miksi puhelimen kasvojentunnistus voi joskus epäonnistua ja vaatia sinua antamaan numerokoodin, kun olet ulkona pakkasessa?",
            "options": [
              "Koska tekoäly on niin kylmissään, ettei se jaksa avata puhelinta.",
              "Koska sinulla on paksu pipo ja kaulahuivi, jotka peittävät kasvosi.",
              "Koska tekoäly luulee, että olet joku täysin vieras jääkarhu.",
              "Koska numerokoodit toimivat aina paremmin talvella kuin kesällä."
            ],
            "correctAnswer": "Koska sinulla on paksu pipo ja kaulahuivi, jotka peittävät kasvosi.",
            "explanation": "Hahmontunnistus tarvitsee näkyville kasvojesi tärkeät pisteet (kuten nenän ja suun). Jos peität kasvosi paksulla kaulahuivilla, kamera ei löydä muotojasi!"
          },
          {
            "id": "arjessa_1_q14",
            "type": "spot_the_ai",
            "question": "Yksi näistä tavoista kääntää matkalla nähty espanjankielinen kyltti suomeksi on nopeinta, puhelimen tekoälyä hyödyntävää taikuutta. Mikä?",
            "options": [
              "Etsit paksusta espanjan sanakirjasta sana kerrallaan kaikki kirjaimet.",
              "Arvaat kyltin tarkoituksen ihan itse vain katsomalla sitä pitkään.",
              "Osoitat puhelimen kameralla kylttiä, ja käännös ilmestyy suoraan ruudulle.",
              "Soitat puhelimella ystävälle, joka osaa puhua vähän espanjaa."
            ],
            "correctAnswer": "Osoitat puhelimen kameralla kylttiä, ja käännös ilmestyy suoraan ruudulle.",
            "explanation": "Nykyaikainen kääntäjäsovellus osaa lukea tekstiä suoraan videokuvasta ja vaihtaa sen kielen reaaliajassa näytölle. Se on yksi upeimmista tekoälyn ominaisuuksista arjessamme!"
          },
          {
            "id": "arjessa_1_q15",
            "type": "reverse_prompt",
            "question": "Puhelimesi näyttöön ilmestyy viesti: \"Hei Matti! Tunnistin kasvosi hienosti. Puhelimen lukitus on nyt auki, tervetuloa.\" Mikä teko käynnisti tämän?",
            "options": [
              "Matti huusi puhelimelle erittäin kovaa: 'Avaa ovi heti!'.",
              "Matti soitti ystävälleen Matille tavallisella puhelulla.",
              "Matti katsoi suoraan puhelimen lukitusruudun etukameraan.",
              "Matti piirsi puhelimen ruutuun salaisen siksak-kuvion sormellaan."
            ],
            "correctAnswer": "Matti katsoi suoraan puhelimen lukitusruudun etukameraan.",
            "explanation": "Kasvojentunnistus ei vaadi puhumista tai koskemista. Pelkkä suora katse kameraan riittää kertomaan tekoälylle, että laitteen oikea omistaja yrittää avata sen!"
          }
        ]
      },
      {
        "id": "arjessa_2",
        "name": "Koukuttavat algoritmit",
        "questions": [
          {
            "id": "arjessa_2_q1",
            "type": "true_false",
            "question": "AI vanin takapenkin televisio tietää lempivideosi siksi, että sen sisällä asuu pieni taikuri, joka osaa lukea ajatuksiasi etäältä.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Videoiden suosittelu ei ole taikuutta! Se on tekoälyohjelma (algoritmi), joka oppii mistä tykkäät seuraamalla tarkasti, mitä videoita olet aiemmin katsonut ja kuinka pitkään."
          },
          {
            "id": "arjessa_2_q2",
            "type": "multiple_choice",
            "question": "Kun olette automatkalla ja katsot puhelimesta monta videota urheiluautoista, mitä videopalvelun tekoäly tekee taustalla?",
            "options": [
              "Se alkaa näyttää sinulle videoita leipomisesta ja kakuista.",
              "Se oppii, että pidät autoista, ja ehdottaa niitä heti lisää.",
              "Se sulkee puhelimen ja käskee sinun mennä heti nukkumaan.",
              "Se soittaa poliisille, koska katsot liikaa urheiluautoja."
            ],
            "correctAnswer": "Se oppii, että pidät autoista, ja ehdottaa niitä heti lisää.",
            "explanation": "Suosittelualgoritmi on kuin salapoliisi. Se huomaa toiminnastasi, mitä katsot mielelläsi, ja alkaa tarjota sinulle enemmän samanlaisia videoita pitääkseen sinut ruudun ääressä!"
          },
          {
            "id": "arjessa_2_q3",
            "type": "scenario",
            "question": "SKENAARIO: Olet vahingossa katsonut isoveljen tilillä puoli tuntia videoita moottorin korjaamisesta. Seuraavana päivänä isoveli avaa saman sovelluksen ja ihmettelee ruutuaan. Mitä hän todennäköisesti näkee etusivullaan?",
            "options": [
              "Paljon videoita moottoreiden korjaamisesta ja työkaluista.",
              "Pelkästään videoita hänen omista suosikkipeleistään ja lauluistaan.",
              "Täysin tyhjän valkoisen ruudun ilman yhtään ainutta videota.",
              "Kuvan sinusta katsomassa hänen puhelintaan salaa varastossa."
            ],
            "correctAnswer": "Paljon videoita moottoreiden korjaamisesta ja työkaluista.",
            "explanation": "Tekoäly ei tiedä, kuka ihminen ruutua fyysisesti katsoo! Se luulee isoveljen kiinnostuneen moottoreista, koska sinä katsoit niitä hänen profiilillaan."
          },
          {
            "id": "arjessa_2_q4",
            "type": "drag_drop",
            "question": "Järjestä suosittelualgoritmin toiminnan askeleet. Miten algoritmi oppii ehdottamaan sinulle hyviä videoita autotallissa?",
            "correctAnswer": {
              "Katsot videon hassusta kissasta ajamassa isoa leluautoa.": "1. vaihe",
              "Tekoäly tallentaa muistiin, että pidät todella kissa- ja autovideoista.": "2. vaihe",
              "Tekoäly etsii valtavasta videokirjastosta lisää samanlaisia videoita.": "3. vaihe",
              "Ruudulle ilmestyy ehdotuksia muista eläimistä ja hienoista autoista.": "4. vaihe"
            },
            "explanation": "Algoritmin työ alkaa aina sinun toiminnastasi. Se seuraa valintojasi, etsii samankaltaisuuksia tietokannasta ja tarjoaa sen perusteella uutta katsottavaa.",
            "draggables": [
              "Katsot videon hassusta kissasta ajamassa isoa leluautoa.",
              "Tekoäly tallentaa muistiin, että pidät todella kissa- ja autovideoista.",
              "Tekoäly etsii valtavasta videokirjastosta lisää samanlaisia videoita.",
              "Ruudulle ilmestyy ehdotuksia muista eläimistä ja hienoista autoista."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "arjessa_2_q5",
            "type": "drag_drop",
            "question": "Tekoäly käyttää suosittelualgoritmia ohjatakseen huomiotasi. Yhdistä sinun tekosi siihen, miten tekoäly reagoi näytöllä!",
            "draggables": [
              "Katsot uuden videon täysin loppuun asti",
              "Laitat oudon videon aivan heti kiinni",
              "Tykkäät videosta painamalla yläpeukkua"
            ],
            "dropZones": [
              "Tekoäly ehdottaa tätä aihetta paljon lisää",
              "Tekoäly päättelee, että rakastat tätä videota",
              "Tekoäly lopettaa tämän aiheen ehdottamisen"
            ],
            "correctAnswer": {
              "Katsot uuden videon täysin loppuun asti": "Tekoäly ehdottaa tätä aihetta paljon lisää",
              "Tykkäät videosta painamalla yläpeukkua": "Tekoäly päättelee, että rakastat tätä videota",
              "Laitat oudon videon aivan heti kiinni": "Tekoäly lopettaa tämän aiheen ehdottamisen"
            },
            "explanation": "Joka ikinen klikkauksesi on tekoälylle viesti. Peukutukset, ohitukset ja katseluajat kertovat sille tarkalleen, mistä tykkäät ja mitä vihaat."
          },
          {
            "id": "arjessa_2_q6",
            "type": "spot_the_ai",
            "question": "Mikä näistä AI vanin laitteista käyttää suosittelualgoritmia arvatakseen mistä viihteestä tykkäät?",
            "options": [
              "Tavallinen vanha FM-radio, joka soittaa aina tiettyä taajuutta.",
              "Suoratoistopalvelu (kuten Netflix), joka ehdottaa uutta sarjaa.",
              "Auton ilmastointi, joka puhaltaa kylmää ilmaa napista painamalla.",
              "Taskulamppu, joka syttyy vain kun pidät mekaanista nappia pohjassa."
            ],
            "correctAnswer": "Suoratoistopalvelu (kuten Netflix), joka ehdottaa uutta sarjaa.",
            "explanation": "Suoratoistopalvelut ja videopalvelut käyttävät älykästä tekoälyä. Se analysoi katseluhistoriaasi ja yrittää jatkuvasti ehdottaa uusia asioita, jotta pysyisit palvelussa pidempään."
          },
          {
            "id": "arjessa_2_q7",
            "type": "reverse_prompt",
            "question": "Ruudullesi ilmestyy video: \"Maailman hienoimmat autotallit ja kalliimmat työkalut! Katso heti!\". Millä omalla toiminnallasi annoit tekoälylle ohjeen (promptin) ehdottaa tätä?",
            "options": [
              "Etsin aamulla netistä todella paljon kuvia söpöistä koiranpennuista.",
              "Olen katsonut koko pitkän matkan videoita autoista ja mekaanikoista.",
              "Kysyin ääniavustajalta eilen illalla hyvin nopeasti, paljonko kello on.",
              "Olin laittanut puhelimen äänettömälle koko matkan ajaksi varmuuden vuoksi."
            ],
            "correctAnswer": "Olen katsonut koko pitkän matkan videoita autoista ja mekaanikoista.",
            "explanation": "Tekoälyn algoritmi ei arvaa asioita tyhjästä! Se seuraa digitaalista \"historiaasi\" eli sitä, mitä olet viime aikoina katsellut, ja tarjoaa sen pohjalta uutta samankaltaista viihdettä."
          },
          {
            "id": "arjessa_2_q8",
            "type": "true_false",
            "question": "Videopalveluiden suosittelualgoritmin kaikkein tärkein tavoite on aina opettaa sinulle uusia ja fiksuja asioita koulua varten.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Algoritmin tärkein tehtävä on pitää sinut ruudun ääressä mahdollisimman pitkään! Se ei välitä siitä, onko video opettavainen, kunhan se vain koukuttaa sinut jatkamaan katselua."
          },
          {
            "id": "arjessa_2_q9",
            "type": "multiple_choice",
            "question": "Mitä tarkoittaa \"suosittelukupla\" (tai algoritmikupla) peleissä ja videoissa?",
            "options": [
              "Oikeaa saippuakuplaa, joka puhalletaan jättimäiselle tietokoneen ruudulle.",
              "Sitä, että tekoäly näyttää sinulle vain ja ainoastaan yhdenlaisia asioita.",
              "Sitä, että internet menee yhtäkkiä rikki ja yksikään video ei enää pyöri.",
              "Sitä, että kaikki maailman autotallit muuttuvat täysin samanlaisiksi."
            ],
            "correctAnswer": "Sitä, että tekoäly näyttää sinulle vain ja ainoastaan yhdenlaisia asioita.",
            "explanation": "Kun tekoäly huomaa sinun pitävän jostain, se alkaa näyttää vain sitä aihetta. Näin joudut huomaamattasi \"kuplaan\", etkä enää näe muiden aiheiden tai mielipiteiden videoita!"
          },
          {
            "id": "arjessa_2_q10",
            "type": "scenario",
            "question": "SKENAARIO: Haluat rikkoa tekoälyn rakentaman \"suosittelukuplan\", koska olet kyllästynyt näkemään pelkkiä samoja Minecraft-videoita ruudullasi. Miten muokkaat algoritmin oletuksia jotta se näyttäisi sinulle muuta?",
            "options": [
              "Katsot väkisin vielä kymmenen uutta Minecraft-videota putkeen yöllä.",
              "Etsit hakukentästä täysin uusia ja erilaisia aiheita, esimerkiksi avaruusmatkustusta.",
              "Puhallat näyttöön todella kovaa ja sammutat laitteen kokonaan hetkeksi.",
              "Kirjoitat vanhojen videoiden alle erittäin vihaisia ja ilkeitä kommentteja."
            ],
            "correctAnswer": "Etsit hakukentästä täysin uusia ja erilaisia aiheita, esimerkiksi avaruusmatkustusta.",
            "explanation": "Voit kouluttaa tekoälyä uudelleen! Kun aloitat täysin uusien asioiden etsimisen, algoritmi tajuaa mielenkiintosi muuttuneen ja alkaa suositella täysin uudenlaista sisältöä."
          },
          {
            "id": "arjessa_2_q11",
            "type": "drag_drop",
            "question": "Miten eri palvelut ja sovellukset käyttävät tekoälyn suositteluja arjessamme? Yhdistä tuttu sovellus ja sen tapa oppia ymmärtämään sinua!",
            "draggables": [
              "Spotify (Musiikki)",
              "YouTube (Videot)",
              "Verkkokauppa (Ostokset)"
            ],
            "dropZones": [
              "Soittaa uuden bändin kappaleen vanhojen perusteella",
              "Ehdottavat automaattisesti katsomaan 'Seuraava jakso'",
              "Näyttää sinulle työkalun, jonka joku muu myös osti"
            ],
            "correctAnswer": {
              "Spotify (Musiikki)": "Soittaa uuden bändin kappaleen vanhojen perusteella",
              "YouTube (Videot)": "Ehdottavat automaattisesti katsomaan 'Seuraava jakso'",
              "Verkkokauppa (Ostokset)": "Näyttää sinulle työkalun, jonka joku muu myös osti"
            },
            "explanation": "Suosittelualgoritmit ovat kaikkialla arjessamme. Ne ehdottavat musiikkia, tavaroita ja pelejä suoraan sen perusteella, miten sinä ja muut ihmiset käyttäydytte netissä!"
          },
          {
            "id": "arjessa_2_q12",
            "type": "drag_drop",
            "question": "Miten joudut huomaamattasi koukuttavaan kierteeseen ja valvot vahingossa aivan liian pitkään? Järjestä kierteeseen johtavat tapahtumat yleisimpään aikajärjestykseen!",
            "correctAnswer": {
              "Katsot automatkalla yhden kivan viiden minuutin pituisen videon aluksi.": "1. vaihe",
              "Tekoäly laittaa seuraavan, vielä jännittävämmän videon automaattisesti päälle.": "2. vaihe",
              "Innostut aiheesta ja katsot yhä useampia uusia videoita peräkkäin ilman taukoa.": "3. vaihe",
              "Huomaat yllättäen ja täysin järkyttyneenä, että aikaa onkin kulunut jo kaksi tuntia!": "4. vaihe"
            },
            "explanation": "Algoritmin tehtävä on tehdä ruutuajasta taianomaista ja helposti koukuttavaa. Kun seuraava video alkaa heti automaattisesti, silmiä on todella vaikea irrottaa ruudusta ajoissa!",
            "draggables": [
              "Katsot automatkalla yhden kivan viiden minuutin pituisen videon aluksi.",
              "Tekoäly laittaa seuraavan, vielä jännittävämmän videon automaattisesti päälle.",
              "Innostut aiheesta ja katsot yhä useampia uusia videoita peräkkäin ilman taukoa.",
              "Huomaat yllättäen ja täysin järkyttyneenä, että aikaa onkin kulunut jo kaksi tuntia!"
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "arjessa_2_q13",
            "type": "multiple_choice",
            "question": "Miksi \"Seuraava video alkaa automaattisesti\" -ominaisuus on olemassa ja keksitty melkein kaikkiin maailman palveluihin?",
            "options": [
              "Koska se säästää todella paljon puhelimen akkua ja yleistä sähköä.",
              "Jotta sinun ei koskaan tarvitsisi pitää tylsiä taukoja oman katselun välissä.",
              "Jotta palvelu voi näyttää sinulle pitkän ajan kuluessa mahdollisimman paljon mainoksia.",
              "Koska laitteen ruutu rikkoontuisi, jos videoiden toistaminen pysäytettäisiin kesken."
            ],
            "correctAnswer": "Jotta palvelu voi näyttää sinulle pitkän ajan kuluessa mahdollisimman paljon mainoksia.",
            "explanation": "Ilmaiset palvelut tekevät rahaa juuri mainoksilla. Mitä kauemmin heidän suosittelualgoritminsa saa sinut viihtymään ruudun ääressä laiskana automaattitoiston avulla, sitä enemmän rahaa he tienaavat!"
          },
          {
            "id": "arjessa_2_q14",
            "type": "spot_the_ai",
            "question": "Kuka näistä digitaalisista apureista on oikeasti suosittelualgoritmi (tekoäly), joka yrittää saada sinut ovelasti koukkuun lisäaikaan?",
            "options": [
              "'Sääennusteen mukaan huomenna paistaa aurinko todella kauniisti koko päivän.'",
              "'Oletko jo kokeillut asettaa herätyskellon herättämään sinut kello seitsemäksi?'",
              "'Katsoit videon autoista, ehkä tykkäät varmasti myös tästä rallipelivideosta!'",
              "'Laitteesi akku on hyvin vähissä, kytke laturiin mahdollisimman pian tauolle.'"
            ],
            "correctAnswer": "'Katsoit videon autoista, ehkä tykkäät varmasti myös tästä rallipelivideosta!'",
            "explanation": "Tämä on täysin klassinen algoritmin tekemä houkutus! Se huomaa tarkasti mitä teit aiemmin ja heittää eteesi heti uuden, erittäin koukuttavan ehdotuksen suoraan historiastasi."
          },
          {
            "id": "arjessa_2_q15",
            "type": "reverse_prompt",
            "question": "Puhelimesi alkaa näyttää sinulle etusivulla pelkästään todella pitkiä ja tylsiä tiedevideoita moottoreiden fysiikasta. Mikä alkuperäinen toimintasi sai algoritmin tekemään tämän jekun?",
            "options": [
              "Katselin vahingossa kolme lyhyttä ja todella hauskaa meemivideota nopeasti putkeen.",
              "Jätin puhelimen pöydälle auki ja pitkä tiedevideo pyöri vahingossa kokonaan loppuun asti.",
              "Suljin puhelimen välittömästi heti kun näin sanan 'tiedevideo' sen ruudulla.",
              "Soitin kaverille ja kerroin, että en ymmärrä mitään asioista joita koulussa opetetaan."
            ],
            "correctAnswer": "Jätin puhelimen pöydälle auki ja pitkä tiedevideo pyöri vahingossa kokonaan loppuun asti.",
            "explanation": "Tekoäly laskee minuutilleen, kuinka kauan katsot kutakin videota. Jos jätät laitteen pyörittämään videota edes vahingossa loppuun asti, algoritmi luulee sinun olevan todella kiinnostunut aiheesta!"
          }
        ]
      },
      {
        "id": "arjessa_3",
        "name": "Tekoäly pelikaverina",
        "questions": [
          {
            "id": "arjessa_3_q1",
            "type": "true_false",
            "question": "Kun pelaat autotallissa yksinpeliä ilman nettiä, kaikki vastustajasi ovat oikeita ihmisiä, jotka pelaavat salaa jossain muualla.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Yksinpeleissä vastustajia ja pelimaailman hahmoja ohjaa aina tekoäly, ei oikea ihminen!"
          },
          {
            "id": "arjessa_3_q2",
            "type": "multiple_choice",
            "question": "Mitä tekoäly tekee tyypillisessä rallipelissä, jos pelaat sitä aivan yksin AI vanin takapenkillä?",
            "options": [
              "Se valmistaa sinulle oikeita eväitä taukoa varten.",
              "Se ohjaa kaikkia muita kilpa-autoja ruudulla.",
              "Se yrittää sammuttaa laitteen kesken pelin.",
              "Se kirjoittaa sinulle uutisia rallikisoista."
            ],
            "correctAnswer": "Se ohjaa kaikkia muita kilpa-autoja ruudulla.",
            "explanation": "Tekoälyn tärkein tehtävä ajopeleissä on ohjata vastustajia. Se pitää huolen siitä, että muut autot pysyvät tiellä ja yrittävät jopa ohittaa sinut!"
          },
          {
            "id": "arjessa_3_q3",
            "type": "scenario",
            "question": "SKENAARIO: Pelaat jännittävää hippa-peliä tietokonevastustajaa vastaan. Aluksi voitat helposti, mutta vähitellen vastustaja alkaa löytää sinut nopeammin ja osaa kiertää jopa jättämäsi ansat. Miksi vastustaja muuttuu paremmaksi?",
            "options": [
              "Koska peliin on ohjelmoitu oppiva tekoäly, joka muuttaa taktiikkaansa.",
              "Koska toinen pelaaja nappasi ohjaimen salaa käteensä.",
              "Koska tietokone on vihainen ja yrittää kostaa sinulle.",
              "Koska pelin äänet on vahingossa laitettu liian kovalle."
            ],
            "correctAnswer": "Koska peliin on ohjelmoitu oppiva tekoäly, joka muuttaa taktiikkaansa.",
            "explanation": "Monet pelien tekoälyt on ohjelmoitu tarkkailemaan pelaajan tyyliä. Jos teet aina saman tempun, tekoäly oppii sen ja keksii vastaiskun!"
          },
          {
            "id": "arjessa_3_q4",
            "type": "drag_drop",
            "question": "Järjestä askeleet! Kuinka tekoäly ohjaa vastustaja-autoa pelissä, kun lähestyt sitä takaapäin?",
            "correctAnswer": {
              "Tekoäly huomaa pelimoottorin kautta, että autosi on lähellä.": "1. vaihe",
              "Tekoäly laskee pelin sääntöjen avulla, kuinka nopeasti ajat.": "2. vaihe",
              "Tekoäly antaa vastustaja-autolle käskyn painaa kaasua ja väistää.": "3. vaihe",
              "Vastustaja-auto kiihdyttää karkuun aivan silmiesi edessä.": "4. vaihe"
            },
            "explanation": "Tekoäly havainnoi pelimaailmaa matematiikan avulla. Ensin se huomaa etäisyyden, sitten se tekee laskelmat ja lopuksi se suorittaa toiminnon (kuten väistämisen).",
            "draggables": [
              "Tekoäly huomaa pelimoottorin kautta, että autosi on lähellä.",
              "Tekoäly laskee pelin sääntöjen avulla, kuinka nopeasti ajat.",
              "Tekoäly antaa vastustaja-autolle käskyn painaa kaasua ja väistää.",
              "Vastustaja-auto kiihdyttää karkuun aivan silmiesi edessä."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "arjessa_3_q5",
            "type": "drag_drop",
            "question": "Yhdistä pelimaailman tekoälyn tehtävät oikeisiin rooleihin!",
            "draggables": [
              "Tietokonevastustaja (Botti)",
              "NPC (Ei-pelattava hahmo)",
              "Pelinjohtaja (Director AI)"
            ],
            "dropZones": [
              "Vihollinen, joka yrittää voittaa sinut",
              "Kyläläinen, joka antaa sinulle tehtäviä",
              "Säätää pelin vaikeustasoa automaattisesti"
            ],
            "correctAnswer": {
              "Tietokonevastustaja (Botti)": "Vihollinen, joka yrittää voittaa sinut",
              "NPC (Ei-pelattava hahmo)": "Kyläläinen, joka antaa sinulle tehtäviä",
              "Pelinjohtaja (Director AI)": "Säätää pelin vaikeustasoa automaattisesti"
            },
            "explanation": "Tekoälyllä on peleissä useita rooleja. Se voi olla vihollinen, kiva kyläläinen tai jopa näkymätön ohjaaja, joka pitää huolen siitä, että peli on hauska!"
          },
          {
            "id": "arjessa_3_q6",
            "type": "spot_the_ai",
            "question": "Pelaat nettipeliä kolmen oikean ystäväsi ja yhden tekoälybotin kanssa. Kuka näistä pelaajista on selvästi tekoäly, eikä oikea ystäväsi?",
            "options": [
              "Hahmo A nauraa chatissa aina, kun joku putoaa ansaan.",
              "Hahmo B pysähtyy usein paikalleen, koska pelaaja käy jääkaapilla.",
              "Hahmo C juoksee aina täsmälleen samaa reittiä ilman yhtäkään poikkeusta.",
              "Hahmo D ehdottaa, että pelattaisiin välillä jotain ihan muuta."
            ],
            "correctAnswer": "Hahmo C juoksee aina täsmälleen samaa reittiä ilman yhtäkään poikkeusta.",
            "explanation": "Tekoälybotit on usein ohjelmoitu seuraamaan tiettyjä matemaattisia reittejä tai pisteitä (ns. reittipisteitä). Ihmiset taas liikkuvat paljon epäloogisemmin ja pitävät oikeita taukoja!"
          },
          {
            "id": "arjessa_3_q7",
            "type": "reverse_prompt",
            "question": "Pelin vihollinen sanoo yllättäen: \"En näe sinua, mutta kuulen askeleesi! Tulen etsimään sieltä, mistä ääni kuului!\" Mikä tekoälyn sääntö teki tästä mahdollista?",
            "options": [
              "Jos vihollinen hukkaa näköyhteyden pelaajaan, se pysähtyy satunnaisesti kuuntelemaan ympärilleen.",
              "Jos pelaaja pitää ääntä, vihollinen suunnistaa äänen lähteelle.",
              "Jos pelaaja ei näy kamerassa, vihollinen palautuu takaisin oman vartioreittinsä alkuun.",
              "Jos peli huomaa pelaajan olevan piilossa, se soittaa viholliselle varoitusääntä."
            ],
            "correctAnswer": "Jos pelaaja pitää ääntä, vihollinen suunnistaa äänen lähteelle.",
            "explanation": "Tekoäly pelissä on pohjimmiltaan joukko \"Jos tapahtuu X, tee Y\" -sääntöjä. Koodari on antanut viholliselle kyvyn reagoida ääniin, mikä tekee pelistä jännittävämmän!"
          },
          {
            "id": "arjessa_3_q8",
            "type": "true_false",
            "question": "Pelien tekoäly on koodattu niin, että sen on tarkoitus olla aina sataprosenttisen täydellinen ja voittaa ihmispelaaja joka ikisessä pelissä.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Jos peli olisi aina täysin mahdoton voittaa, se ei olisi yhtään hauska! Pelitekoälyn tärkein tehtävä on antaa pelaajalle sopivasti haastetta, mutta sallia lopulta ihmisen voittaminen."
          },
          {
            "id": "arjessa_3_q9",
            "type": "multiple_choice",
            "question": "Mitä tarkoittaa \"NPC\" autotallin roolipeleissä tai videopeleissä?",
            "options": [
              "Uutta tehokasta auton akkua.",
              "Hahmoa, jota ohjaa tekoäly, eikä oikea pelaaja.",
              "Koodia, joka sammuttaa koko pelin nopeasti.",
              "Pelaajan omistamaa nopeaa kilpa-autoa."
            ],
            "correctAnswer": "Hahmoa, jota ohjaa tekoäly, eikä oikea pelaaja.",
            "explanation": "NPC on lyhenne sanoista \"Non-Player Character\". Ne ovat kaikki ne kyläläiset, kauppiaat ja sivuhahmot, joiden toimintaa ja puheita tekoäly ohjaa pelin taustalla!"
          },
          {
            "id": "arjessa_3_q10",
            "type": "scenario",
            "question": "SKENAARIO: Pelaat automatkalla peliä, jossa autosi menee rikki etkä meinaa päästä millään eteenpäin kentässä. Yhtäkkiä pelin taivaalle ilmestyy lentävä korjaaja-NPC, jota ei aiemmin ole näkynyt. Mitä peliä ohjaava tekoäly teki?",
            "options": [
              "Se halusi vain kiusata sinua rikkinäisellä autolla entistä enemmän.",
              "Se havaitsi sinun olevan pulassa ja loi apurin helpottamaan peliä.",
              "Se poisti pelistä kaikki muut autot vahingossa täydellisesti.",
              "Se yritti tehdä pelistä maailman vaikeimman mahdollisen."
            ],
            "correctAnswer": "Se havaitsi sinun olevan pulassa ja loi apurin helpottamaan peliä.",
            "explanation": "Edistyneissä peleissä on usein näkymätön tekoäly, joka tarkkailee pelaajan suoriutumista. Jos pelaaja on jatkuvasti pulassa, tekoäly voi dynaamisesti helpottaa peliä lähettämällä apua!"
          },
          {
            "id": "arjessa_3_q11",
            "type": "drag_drop",
            "question": "Tekoäly hoitaa peleissä monia eri asioita. Yhdistä tekoälyn tehtävä sen oikeaan esimerkkiin!",
            "draggables": [
              "Reitinhaku (Pathfinding)",
              "Käyttäytymispuu (Behavior tree)",
              "Pelin luominen (Procedural generation)"
            ],
            "dropZones": [
              "Tekoäly etsii nopeimman reitin esteiden ohi luoksesi",
              "Tekoäly päättää, hyökkääkö se vai juokseeko karkuun",
              "Tekoäly rakentaa pelikerralla aivan uuden satunnaisen kentän"
            ],
            "correctAnswer": {
              "Reitinhaku (Pathfinding)": "Tekoäly etsii nopeimman reitin esteiden ohi luoksesi",
              "Käyttäytymispuu (Behavior tree)": "Tekoäly päättää, hyökkääkö se vai juokseeko karkuun",
              "Pelin luominen (Procedural generation)": "Tekoäly rakentaa pelikerralla aivan uuden satunnaisen kentän"
            },
            "explanation": "Tekoäly tekee paljon muutakin kuin vain ohjaa vihollisia. Se voi jopa luoda täysin uusia maastoja ja metsäalueita peliin \"lennosta\" samalla kun pelaat!"
          },
          {
            "id": "arjessa_3_q12",
            "type": "drag_drop",
            "question": "Miten tekoäly \"näkee\" pelimaailman ja tekee päätöksen tulla kohti? Järjestä vaiheet loogisesti!",
            "correctAnswer": {
              "Pelaaja siirtyy tietämättään tekoälyvihollisen virtuaaliseen näkökenttään.": "1. vaihe",
              "Tekoälyn sensoriohjelma huomaa pelaajan sijainnin koordinaatit numerona.": "2. vaihe",
              "Tekoäly valitsee ohjesääntöjensä perusteella parhaan hyökkäystavan.": "3. vaihe",
              "Tekoälyhahmo aloittaa hyökkäysanimaation pelaajaa kohti.": "4. vaihe"
            },
            "explanation": "Tekoälyllä on omat koodatut \"silmät ja korvat\". Ensin sen pitää havaita pelaaja matemaattisten koordinaattien avulla, sitten valita oikea toiminto sääntöjen listasta, ja lopuksi suorittaa animaatio!",
            "draggables": [
              "Pelaaja siirtyy tietämättään tekoälyvihollisen virtuaaliseen näkökenttään.",
              "Tekoälyn sensoriohjelma huomaa pelaajan sijainnin koordinaatit numerona.",
              "Tekoäly valitsee ohjesääntöjensä perusteella parhaan hyökkäystavan.",
              "Tekoälyhahmo aloittaa hyökkäysanimaation pelaajaa kohti."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "arjessa_3_q13",
            "type": "multiple_choice",
            "question": "AI vanin näytöllä pyörii yksinkertainen shakki-peli. Miksi tietokoneen tekoälyä on usein äärimmäisen vaikea voittaa shakissa?",
            "options": [
              "Se pystyy laskemaan tuhansia tulevia siirtoja sekunnin murto-osassa.",
              "Se osaa huijata ja liikuttaa nappuloita sääntöjen vastaisesti.",
              "Se häiritsee sinua puhumalla kovaan ääneen kesken pelin.",
              "Se käyttää aina automaattisesti taikuutta voittaakseen lautapelin."
            ],
            "correctAnswer": "Se pystyy laskemaan tuhansia tulevia siirtoja sekunnin murto-osassa.",
            "explanation": "Tekoäly on matemaattinen supernopeuslaskija. Shakissa se osaa testata mielessään tuhansia mahdollisia siirtoja eteenpäin oudoimmissakin tilanteissa, mihin yksikään ihminen ei pysty yhtä nopeasti!"
          },
          {
            "id": "arjessa_3_q14",
            "type": "spot_the_ai",
            "question": "Pelaat tiimi-peliä. Yksi hahmoista tekee jotain sellaista, joka on tyypillinen \"bugi\" vain tekoälylle. Mikä näistä teoista paljastaa hänet tietokoneeksi?",
            "options": [
              "Hän heittää ylävitosen heti, kun onnistutte tehtävässä erinomaisesti.",
              "Hän jää jumiin juoksemaan päin suljettua ovea loputtomasti.",
              "Hän pyytää saada ajaa autoa itse seuraavassa pelikentässä.",
              "Hän kertoo vahingossa paljastaneensa pelin hauskimman salaisuuden."
            ],
            "correctAnswer": "Hän jää jumiin juoksemaan päin suljettua ovea loputtomasti.",
            "explanation": "Oveen jumiutuminen on yleinen tekoälyn virhe (bugi) peleissä! Ihmispelaaja tajuaisi heti silmillään, että ovi on kiinni ja kääntyisi ympäri, mutta sokea tekoäly yrittää suorittaa matemaattista reittiään loputtomasti."
          },
          {
            "id": "arjessa_3_q15",
            "type": "reverse_prompt",
            "question": "Peli antaa sinun hiippailla vihollisen ohi aivan vierestä huomaamatta, mutta vain jos olet kyykyssä ja täysin varjoissa. Millä koodarin ohjeella (promptilla) tekoälyvihollinen rakennettiin?",
            "options": [
              "Vihollinen näkee kaiken pelimaailmassa seinien ja pimeyden läpi jatkuvasti.",
              "Jos pelaaja on varjossa ja kyykyssä, poista vihollisen kyky huomata pelaaja.",
              "Vihollinen pelkää kyykyssä olevia hahmoja, kääntyy ympäri ja juoksee pois.",
              "Anna viholliselle mahtava supernäkö aina silloin, jos pelaaja yrittää piiloutua."
            ],
            "correctAnswer": "Jos pelaaja on varjossa ja kyykyssä, poista vihollisen kyky huomata pelaaja.",
            "explanation": "Pelin tekijät ovat asettaneet pelin jännitystä varten \"hiippailusäännön\". Kun tarkat ehdot täyttyvät (pelaaja on kyykyssä ja varjossa), tekoälyn näkökyky on ohjelmoitu jättämään pelaaja huomioimatta!"
          }
        ]
      },
      {
        "id": "arjessa_4",
        "name": "Olohuoneen pikkurobotit",
        "questions": [
          {
            "id": "arjessa_4_q1",
            "type": "true_false",
            "question": "Autotallin älylamppu osaa automaattisesti mennä päälle ja säätää valoa, koska sen sisällä palaa oikea tulitikku.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Älylampussa ei ole tulta! Sitä ohjaa pieni tekoäly ja sähkö, jotka osaavat muuttaa valon väriä ja kirkkautta automaattisesti esimerkiksi vuorokaudenajan mukaan."
          },
          {
            "id": "arjessa_4_q2",
            "type": "multiple_choice",
            "question": "Miten AI vanin robotti-imuri löytää tiensä autotallin sotkuisella lattialla törmäämättä seiniin koko ajan?",
            "options": [
              "Se käyttää tekoälyä ja sensoreita kartoittamaan huoneen esteet.",
              "Se kuuntelee ihmisten huutoja ja yrittää väistää niiden mukaan.",
              "Sillä on pikkuruinen paperikartta teipattuna sen omaan kattoon.",
              "Se arvaa reitin sulkemalla silmänsä ja ajamalla vain kovaa suoraan."
            ],
            "correctAnswer": "Se käyttää tekoälyä ja sensoreita kartoittamaan huoneen esteet.",
            "explanation": "Robotti-imurit tekevät hienoa salapoliisityötä! Ne mittaavat lasereilla tai sensoreilla etäisyyksiä ja luovat tekoälynsä sisälle digitaalisen kartan huoneesta osatakseen siivota sen fiksusti."
          },
          {
            "id": "arjessa_4_q3",
            "type": "scenario",
            "question": "SKENAARIO: Olet koodannut autotallin älykkään lämpömittarin (älytermostaatin). Ulkona tulee yhtäkkiä todella kova lumimyrsky ja pakkanen. Miten \"olohuoneen pikkurobotti\" osaa reagoida tähän sään muutokseen fiksusti?",
            "options": [
              "Se lukee sääennusteen ja säätää lämmitystä heti isommalle.",
              "Se sammuttaa kaikki kodin valot ja yrittää piiloutua pimeään.",
              "Se menee itse ulos lapioimaan lunta nopeasti pois pihan tieltä.",
              "Se kääntää vahingossa autotallin jääkaapin pakastimeksi."
            ],
            "correctAnswer": "Se lukee sääennusteen ja säätää lämmitystä heti isommalle.",
            "explanation": "Älykodin laitteet ovat yhteydessä nettiin. Tekoäly voi hakea säätiedot ja ymmärtää, että kun ulkona kylmenee, lämpöpatterit pitää laittaa automaattisesti isommalle, jottei tulla kipeiksi!"
          },
          {
            "id": "arjessa_4_q4",
            "type": "drag_drop",
            "question": "Järjestä vaiheet loogisesti! Miten robotti-imuri oppii siivoamaan uuden, täysin tuntemattoman autotallin ensimmäistä kertaa?",
            "correctAnswer": {
              "Robotti lähtee liikkeelle ja skannaa ympäristöään sensoreilla.": "1. vaihe",
              "Se piirtää tekoälynsä muistiin digitaalisen kartan seinistä ja esteistä.": "2. vaihe",
              "Se laskee fiksuimman ja nopeimman reitin imuroida koko lattia.": "3. vaihe",
              "Se muistaa oppimansa kartan ja siivoaa huoneen ensi kerralla nopeammin.": "4. vaihe"
            },
            "explanation": "Tekoälyn vahvuus on oppiminen! Ensimmäisellä kerralla imuri on hieman hidas, koska se kartoittaa tilaa. Seuraavilla kerroilla se on jo täysi mestari oman karttansa ansiosta.",
            "draggables": [
              "Robotti lähtee liikkeelle ja skannaa ympäristöään sensoreilla.",
              "Se piirtää tekoälynsä muistiin digitaalisen kartan seinistä ja esteistä.",
              "Se laskee fiksuimman ja nopeimman reitin imuroida koko lattia.",
              "Se muistaa oppimansa kartan ja siivoaa huoneen ensi kerralla nopeammin."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "arjessa_4_q5",
            "type": "drag_drop",
            "question": "Yhdistä älykodin ja autotallin \"pikkurobotit\" siihen arjen työhön, jota tekoäly tekee niiden sisällä!",
            "draggables": [
              "Älytermostaatti",
              "Robotti-imuri",
              "Älylukko"
            ],
            "dropZones": [
              "Säätää pattereiden lämpöä automaattisesti",
              "Väistää esteet ja puhdistaa pölyt lattialta",
              "Tunnistaa oikean omistajan ja avaa oven ilman avainta"
            ],
            "correctAnswer": {
              "Älytermostaatti": "Säätää pattereiden lämpöä automaattisesti",
              "Robotti-imuri": "Väistää esteet ja puhdistaa pölyt lattialta",
              "Älylukko": "Tunnistaa oikean omistajan ja avaa oven ilman avainta"
            },
            "explanation": "Nämä kaikki ovat arjen tekoälyä. Ne ottavat vastaan tietoa (kuten lämpötilan, pölyn tai sormenjäljen) ja tekevät sen perusteella fiksuja päätöksiä helpottaakseen elämäämme."
          },
          {
            "id": "arjessa_4_q6",
            "type": "spot_the_ai",
            "question": "Mikä näistä kodin laitteista tekee itsenäisiä, älykkäitä päätöksiä, eli toimii oikeana tekoälynä \"tyhmän\" laitteen sijaan?",
            "options": [
              "Pölynimuri, joka pitää työntää takaisin kaappiin käsin.",
              "Imuri, joka osaa palata itse lataustelakkaansa, kun sen akku on loppumassa.",
              "Pölynimuri, joka pitää erittäin kovaa mekaanista hurinaa päällä ollessaan.",
              "Imuri, jonka roskapussi pitää aina muistaa tyhjentää ulos roskikseen."
            ],
            "correctAnswer": "Imuri, joka osaa palata itse lataustelakkaansa, kun sen akku on loppumassa.",
            "explanation": "\"Tyhmä\" laite toimii vain ihmisen voimalla tai napin painalluksella. Tekoälylaite osaa havainnoida tilaansa (kuten tyhjenevää akkua) ja tehdä itse päätöksen palata lataukseen!"
          },
          {
            "id": "arjessa_4_q7",
            "type": "reverse_prompt",
            "question": "Autotallin älykaiutin sanoo: \"Okei, himmennän valoja, laitan ovet takalukkoon ja soitan rentouttavaa musiikkia. Hyvää yötä!\" Millä komennolla (promptilla) älykoti teki tämän sarjan asioita?",
            "options": [
              "Hei apuri, käynnistä iltaohjelma ja on aika mennä nukkumaan.",
              "Hei apuri, millainen sää on huomenna aamulla ulkona?",
              "Hei apuri, avaa autotallin iso ovi mahdollisimman nopeasti.",
              "Hei apuri, etsi minulle netistä kuvia valoisista lampuista."
            ],
            "correctAnswer": "Hei apuri, käynnistä iltaohjelma ja on aika mennä nukkumaan.",
            "explanation": "Älykodin laitteet voidaan ohjelmoida ketjuiksi (ns. rutiineiksi). Yhdellä tutulla lauseella tekoäly ymmärtää tehdä monta valmiiksi sovittua sääntöä peräkkäin, kuten sammuttaa valot ja lukita ovet."
          },
          {
            "id": "arjessa_4_q8",
            "type": "true_false",
            "question": "Kun olet automatkalla kaukana kotoa, et voi enää mitenkään sammuttaa autotalliin vahingossa päälle jääneitä älyvaloja, ennen kuin palaat takaisin fyysisesti paikan päälle.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Älylaitteet (Internet of Things eli IoT) ovat yhteydessä nettiin! Voit aivan helposti ohjata kotisi valoja tai lukkoja puhelimesi sovelluksella vaikka toiselta puolelta maapalloa."
          },
          {
            "id": "arjessa_4_q9",
            "type": "multiple_choice",
            "question": "Miksi robotti-imurit pyörivät usein ympyrää tai tekevät hassuja, hitaita siksak-liikkeitä lattialla ensimmäisillä siivouskerroillaan?",
            "options": [
              "Ne tanssivat iloisina, koska saivat vihdoin uuden tehtävän.",
              "Ne mittaavat sensoreillaan esteiden etäisyyksiä ja etsivät reittiä.",
              "Ne ovat menneet rikki ja yrittävät soittaa itselleen hätäapua.",
              "Ne luulevat olevansa oikeita koiria, jotka jahtaavat omaa häntäänsä."
            ],
            "correctAnswer": "Ne mittaavat sensoreillaan esteiden etäisyyksiä ja etsivät reittiä.",
            "explanation": "Robotti on vain vähän hämmentynyt! Siksak-liike ja pyöriminen ovat tekoälyn tapoja \"katsella ympärilleen\" lasersensoreilla, jotta se oppii missä huoneen seinät ja huonekalut ovat."
          },
          {
            "id": "arjessa_4_q10",
            "type": "scenario",
            "question": "SKENAARIO: Autotallin älyjääkaappi on kytketty kodin yhteiseen tekoälyyn. Se huomaa, että maitopurkki on otettu sieltä pois jo kolme päivää sitten, eikä uutta ole ilmestynyt tilalle. Mitä fiksu jääkaappi voi tehdä?",
            "options": [
              "Se osaa lisätä maidon automaattisesti puhelimesi digitaaliselle kauppalistalle.",
              "Se alkaa varovasti luomaan tekomaitoa jääkaapin sisällä tyhjästä.",
              "Se lopettaa muiden ruokien viilentämisen mielenosoituksena heti.",
              "Se soittaa heti naapuriin ja käskee heitä tuomaan maitoa teille."
            ],
            "correctAnswer": "Se osaa lisätä maidon automaattisesti puhelimesi digitaaliselle kauppalistalle.",
            "explanation": "Edistyneet älyjääkaapit voivat tarkkailla elintarvikkeita viivakoodien tai kameroiden avulla. Tekoäly huomaa puutteet ja auttaa sinua muistamalla asiat kauppalistaan puolestasi!"
          },
          {
            "id": "arjessa_4_q11",
            "type": "drag_drop",
            "question": "Osaatko erottaa laitteet? Raahaa vaihtoehdot oikeisiin laatikoihin: mikä on perinteinen \"tyhmä\" laite ja mikä fiksulla tekoälyllä varustettu laite?",
            "draggables": [
              "Syttyy aina pelkästä seinäkatkaisijasta",
              "Osaa matkia auringonlaskun lämpimiä värejä illalla",
              "Avaa oven vain ja ainoastaan metallisella avaimella",
              "Tunnistaa tutun sormenjäljen tai puhelimen Bluetoothin"
            ],
            "dropZones": [
              "Perinteinen laite (Ei tekoälyä)",
              "Älylaite (Tekoälyä mukana)"
            ],
            "correctAnswer": {
              "Syttyy aina pelkästä seinäkatkaisijasta": "Perinteinen laite (Ei tekoälyä)",
              "Osaa matkia auringonlaskun lämpimiä värejä illalla": "Älylaite (Tekoälyä mukana)",
              "Avaa oven vain ja ainoastaan metallisella avaimella": "Perinteinen laite (Ei tekoälyä)",
              "Tunnistaa tutun sormenjäljen tai puhelimen Bluetoothin": "Älylaite (Tekoälyä mukana)"
            },
            "explanation": "Perinteiset laitteet toimivat mekaanisesti ihmisen voimalla. Älylaitteet pystyvät keräämään tietoa ja muuttamaan toimintaansa tilanteen vaatimalla tavalla."
          },
          {
            "id": "arjessa_4_q12",
            "type": "drag_drop",
            "question": "Miten älykoti ja sen tekoäly toimivat yhdessä askeleittain, kun tulet AI vanilla takaisin kotiin pitkän matkan jälkeen illalla? Järjestä tapahtumat!",
            "correctAnswer": {
              "Autosi lähestyy kotia ja jakaa GPS-sijaintitietonsa kodin tekoälylle.": "1. vaihe",
              "Älykoti päättelee matkasta, että perhe on saapumassa aivan pian takaisin pihaan.": "2. vaihe",
              "Tekoäly napsauttaa autotallin pihavalot valmiiksi päälle turvallista parkkeerausta varten.": "3. vaihe",
              "Älylukko aukeaa automaattisesti, kun se tunnistaa tutun puhelimesi kotiovella.": "4. vaihe"
            },
            "explanation": "Kun kaikki laitteet (\"Internet of Things\") keskustelevat fiksusti keskenään, koti tietää jo ennalta, mitä sen asukkaat tarvitsevat!",
            "draggables": [
              "Autosi lähestyy kotia ja jakaa GPS-sijaintitietonsa kodin tekoälylle.",
              "Älykoti päättelee matkasta, että perhe on saapumassa aivan pian takaisin pihaan.",
              "Tekoäly napsauttaa autotallin pihavalot valmiiksi päälle turvallista parkkeerausta varten.",
              "Älylukko aukeaa automaattisesti, kun se tunnistaa tutun puhelimesi kotiovella."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "arjessa_4_q13",
            "type": "multiple_choice",
            "question": "Mikä on suurin ero tavallisen narulla vedettävän imurin ja autotallissa pyörivän robotti-imurin välillä?",
            "options": [
              "Robotti-imuri ei ikinä käytä imemiseen oikeaa sähkövirtaa.",
              "Tavallinen imuri osaa kertoa hyviä vitsejä imuroidessaan mattoja.",
              "Robotti-imuri tekee itsenäisiä päätöksiä reitistä tekoälyn avulla.",
              "Tavallinen imuri mahtuu piiloon kokonaan pieneen taskuusi."
            ],
            "correctAnswer": "Robotti-imuri tekee itsenäisiä päätöksiä reitistä tekoälyn avulla.",
            "explanation": "Tavallinen imuri on vain moottori putken päässä, ja se vaatii täysin ihmisen aivoja ohjaukseen. Robotti-imuri hoitaa reitinhallinnan omien tekoälyaivojensa avulla!"
          },
          {
            "id": "arjessa_4_q14",
            "type": "spot_the_ai",
            "question": "Autotallissa on paljon erilaisia asioita. Mikä näistä laitteista on loistava esimerkki siitä, miten tekoäly tarkkailee tilaamme ja oppii tavoistamme pitkän ajan kuluessa?",
            "options": [
              "Vesiletku, joka sumuttaa vettä aina, kun väännät kahvasta voimakkaasti.",
              "Älytermostaatti, joka oppii laskemaan lämpöä öisin teidän mentyä nukkumaan.",
              "Sähkövatkain, jolla on kolme nopeaa mekaanista vaihdetta, ja joka toimii napista.",
              "Vanha taskulaskin, joka muistaa aina sataprosenttisella tarkkuudella että 2+2=4."
            ],
            "correctAnswer": "Älytermostaatti, joka oppii laskemaan lämpöä öisin teidän mentyä nukkumaan.",
            "explanation": "Koneoppiminen tarkoittaa sitä, että laite muuttuu viisaammaksi! Termostaatti huomaa viikkojen aikana, että olette unessa kello 22, ja alkaa itse laittaa säästöliekkiä päälle samaan aikaan energiansäästön vuoksi."
          },
          {
            "id": "arjessa_4_q15",
            "type": "reverse_prompt",
            "question": "Älykodin ruudulla lukee: \"Olohuoneen lämpötila nostettu 22 asteeseen ja kaikki ikkunoiden sähköiset kaihtimet suljettu, koska ulkona on kova pakkanen.\" Mikä tekoälyn sääntö teki tämän rutiinin?",
            "options": [
              "Jos sääennuste lupaa pakkasta, nosta lämpöä ja sulje ikkunoiden kaihtimet.",
              "Jos alueella on kova ukkonen, sammuta kaikki kodin herkät sähkölaitteet viipymättä.",
              "Jos ulkona paistaa kuuma aurinko, pidä koti viileänä avaamalla talon kaikki pääikkunat.",
              "Jos tulee pimeää, kytke kaikki kodin ja pihan lamput heti maksimikirkkaudelle."
            ],
            "correctAnswer": "Jos sääennuste lupaa pakkasta, nosta lämpöä ja sulje ikkunoiden kaihtimet.",
            "explanation": "Älykoti on täynnä if-then (jos-niin) sääntöjä. Koodari on asettanut loogisen rutiinin, jossa sään viileneminen johtaa automaattisesti kodin eristyksen parantamiseen tekoälyn ohjaamana!"
          }
        ]
      },
      {
        "id": "arjessa_5",
        "name": "Maailmanlaajuinen tulkki",
        "questions": [
          {
            "id": "arjessa_5_q1",
            "type": "true_false",
            "question": "Tekoälykääntäjä ymmärtää aina jokaisen sanan merkityksen täydellisesti, eikä tee ikinä hassuja virheitä.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Tekoäly voi joskus kääntää sanoja liian kirjaimellisesti ja tehdä hupsuja virheitä, koska se ei aina ymmärrä vitsejä tai erikoisia sananlaskuja!"
          },
          {
            "id": "arjessa_5_q2",
            "type": "multiple_choice",
            "question": "Miten AI vanin puhelimessa oleva \"maailmanlaajuinen tulkki\" (kääntäjäsovellus) pystyy kääntämään vieraita kieliä niin nopeasti?",
            "options": [
              "Se etsii valtavasta tietopankista todennäköisimmän käännöksen sanoillesi.",
              "Laitteen sisällä asuu ryhmä oikeita ihmisiä, jotka osaavat kieliä.",
              "Se keksii omat uudet sanansa aina täysin satunnaisesti.",
              "Se soittaa ulkomaalaiselle ystävälle ja kysyy neuvoa ohjeisiin."
            ],
            "correctAnswer": "Se etsii valtavasta tietopankista todennäköisimmän käännöksen sanoillesi.",
            "explanation": "Kääntäjäsovellus on opiskellut miljoonia ja miljoonia tekstejä etukäteen. Kun annat sille sanan, se etsii nopeasti, miten se on yleensä käännetty."
          },
          {
            "id": "arjessa_5_q3",
            "type": "scenario",
            "question": "SKENAARIO: Olette lomamatkalla AI vanilla ulkomailla ja auto tarvitsee pientä korjausta. Isä yrittää puhua mekaanikolle, mutta kumpikaan ei ymmärrä toisen kieltä. Miten älypuhelin auttaa tilanteessa parhaiten?",
            "options": [
              "Isä puhuu suomea puhelimeen, ja kaiutin toistaa asian vieraalla kielellä.",
              "Puhelin tulostaa pienen sanakirjan, josta isä etsii ja lukee sanoja hitaasti.",
              "Tekoäly opettaa isälle heti koko uuden kielen vain muutamassa hassussa minuutissa.",
              "Laitteen ohjelmisto komentaa mekaanikkoa opiskelemaan täydellistä ja sujuvaa suomea."
            ],
            "correctAnswer": "Isä puhuu suomea puhelimeen, ja kaiutin toistaa asian vieraalla kielellä.",
            "explanation": "Nykyaikainen tekoäly osaa kuunnella puhetta, kääntää sen välittömästi toiselle kielelle ja jopa puhua sen heti ääneen! Se on kuin aito oikea tulkki taskussa."
          },
          {
            "id": "arjessa_5_q4",
            "type": "drag_drop",
            "question": "Olet AI vanilla ulkomailla ja näet vieraskielisen kyltin huoltoasemalla. Miten kamerakäännös toimii askeleittain?",
            "correctAnswer": {
              "Osoitat puhelimen kameralla outoa ja vieraskielistä kylttiä.": "1. vaihe",
              "Tekoäly tunnistaa kirjaimet ja sanat suoraan kuvan pikseleistä.": "2. vaihe",
              "Kääntäjä etsii vieraille sanoille oikeat suomenkieliset vastineet.": "3. vaihe",
              "Käännetty suomenkielinen teksti ilmestyy puhelimesi ruudulle.": "4. vaihe"
            },
            "explanation": "Kamerakäännös on huikea tekoälyn suoritus! Ensin tekoälyn hahmontunnistus lukee tekstin kuvasta, ja sitten kääntäjäohjelma vaihtaa sen ymmärtämällesi kielelle salamannopeasti.",
            "draggables": [
              "Osoitat puhelimen kameralla outoa ja vieraskielistä kylttiä.",
              "Tekoäly tunnistaa kirjaimet ja sanat suoraan kuvan pikseleistä.",
              "Kääntäjä etsii vieraille sanoille oikeat suomenkieliset vastineet.",
              "Käännetty suomenkielinen teksti ilmestyy puhelimesi ruudulle."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "arjessa_5_q5",
            "type": "drag_drop",
            "question": "Yhdistä tekoälykääntäjän mahtavat ominaisuudet oikeisiin arjen selityksiin ja tilanteisiin!",
            "draggables": [
              "Kamerakäännös",
              "Äänikäännös",
              "Tekstikäännös"
            ],
            "dropZones": [
              "Kääntää ravintolan ruokalistan livenä suoraan puhelimen kuvasta",
              "Kääntää isän ja ulkomaalaisen mekaanikon välisen keskustelun",
              "Kääntää kirjoittamasi yksittäisen vieraan sanan ruudulla"
            ],
            "correctAnswer": {
              "Kamerakäännös": "Kääntää ravintolan ruokalistan livenä suoraan puhelimen kuvasta",
              "Äänikäännös": "Kääntää isän ja ulkomaalaisen mekaanikon välisen keskustelun",
              "Tekstikäännös": "Kääntää kirjoittamasi yksittäisen vieraan sanan ruudulla"
            },
            "explanation": "Tekoälykääntäjälle on opetettu kielen lisäksi kyky kuulla ja nähdä! Tämä monipuolisuus tekee siitä todella kätevän apulaisen arkipäivän matkatilanteissa."
          },
          {
            "id": "arjessa_5_q6",
            "type": "spot_the_ai",
            "question": "Kuka näistä tulkeista on ehdottomasti tekoälyohjelma, eikä kieliä opettava oikea ihminen?",
            "options": [
              "Ohjelma, joka kääntää valtavan pitkän vieraskielisen sanomalehden suomeksi kahdessa sekunnissa.",
              "Opettaja, joka kertoo sinulle englannin sanan 'kissa' oikean merkityksen.",
              "Kaveri, joka on asunut vuosia ulkomailla ja auttaa sinua tilaamaan ruokaa.",
              "Paikallinen opas, joka esittelee sinulle kaupunkia puhumalla melko hyvää suomea."
            ],
            "correctAnswer": "Ohjelma, joka kääntää valtavan pitkän vieraskielisen sanomalehden suomeksi kahdessa sekunnissa.",
            "explanation": "Tekoäly pystyy käsittelemään ja kääntämään valtavia määriä tekstiä sekunneissa. Oikealta ihmiseltä menisi todella pitkän lehden lukemiseen ja kääntämiseen tunteja aikaa!"
          },
          {
            "id": "arjessa_5_q7",
            "type": "reverse_prompt",
            "question": "Yrität kääntää puhelimesi kameralla espanjankielisen ruokalistan suomeksi. Tekoäly ei kuitenkaan käännä sitä laisinkaan, vaan lukee sen sijaan ruokalistan tekstin ääneen pelkäksi espanjaksi. Minkä puhekomennon annoit sille vahingossa?",
            "options": [
              "Lue ruudulla näkyvä teksti ääneen.",
              "Käännä kameran näkemä teksti suomeksi.",
              "Tallenna valokuva tästä ruokalistasta.",
              "Etsi espanjalaisten ravintoloiden osoitteita."
            ],
            "correctAnswer": "Lue ruudulla näkyvä teksti ääneen.",
            "explanation": "Tekoälylaitteissa on useita rinnakkaisia toimintoja. Ruudunlukija lukee näkyvän tekstin sellaisenaan silmien avuksi, kun taas kääntäjäohjelma vaihtaisi tekstin täysin toiselle kielelle. On tärkeää syöttää ohje aina oikein!"
          },
          {
            "id": "arjessa_5_q8",
            "type": "true_false",
            "question": "Jos käytät tekoälyä tekemään aina kaikki englannin läksysi ja esseesi puolestasi, omat aivosi oppivat kielen automaattisesti aivan yhtä nopeasti ja hyvin.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Tekoäly on loistava apulainen, mutta se ei voi oppia kieliä tai tehdä aivovoimistelua sinun puolestasi! Aivosi oppivat kieliä kunnolla vain silloin, kun joudut oikeasti miettimään sanoja itse."
          },
          {
            "id": "arjessa_5_q9",
            "type": "multiple_choice",
            "question": "Millaisissa asioissa \"maailmanlaajuinen tulkki\" eli tekoälykääntäjä tekee useimmiten eniten hölmöjä virheitä?",
            "options": [
              "Pitkissä ja tunteellisissa runoissa sekä paikallisissa sananlaskuissa.",
              "Yksittäisten tavallisten arkisanojen, kuten 'auto' tai 'talo', kääntämisessä.",
              "Silloin kun sen pitää kääntää aivan yksinkertaisia ruokalistan sanoja.",
              "Laskutehtävissä, joissa on tekstin sijaan vain ja ainoastaan numeroita."
            ],
            "correctAnswer": "Pitkissä ja tunteellisissa runoissa sekä paikallisissa sananlaskuissa.",
            "explanation": "Tekoäly on yleensä huono ymmärtämään syvää runoutta, monimutkaisia vitsejä ja sanontoja. Syy on se, että kone kääntää sanoja usein kuin robotti – täysin kirjaimellisesti ilman aitoa inhimillistä tunnetta."
          },
          {
            "id": "arjessa_5_q10",
            "type": "scenario",
            "question": "SKENAARIO: Olet automatkalla ja kirjoitat puhelimen kääntäjäsovellukseen suomeksi viestin, joka on aivan täynnä kirjoitusvirheitä ja sekavia lauseita. Mitä todennäköisesti tapahtuu, kun tekoäly yrittää kääntää sen toiselle kielelle?",
            "options": [
              "Käännöksestä tulee luultavasti todella outo, koska 'roskaa sisään, roskaa ulos'.",
              "Tekoäly korjaa kaikki virheet aina taianomaisesti ja kääntää tekstin täydellisesti.",
              "Puhelin menee välittömästi pysyvästi jumiin ja lakkaa kokonaan toimimasta.",
              "Tekoäly alkaa heti soittaa sinulle äänekkäästi suomenkielistä musiikkia radiosta."
            ],
            "correctAnswer": "Käännöksestä tulee luultavasti todella outo, koska 'roskaa sisään, roskaa ulos'.",
            "explanation": "Tekoäly tarvitsee hyvää opetusdataa toimiakseen oikein. Jos annat sille todella huonoa ja sekavaa suomea lähtötiedoksi, se menee ymmälleen ja kääntää tekstin todennäköisesti vähintään yhtä sekavaksi."
          },
          {
            "id": "arjessa_5_q11",
            "type": "drag_drop",
            "question": "Raahaa oikeat palaset paikoilleen! Mitä eri asioita kääntäjäsovellus välttämättä tarvitsee toimiakseen täydellisenä tulkkina ulkomaanmatkalla?",
            "draggables": [
              "Puhelimen mikrofoni ja kamera",
              "Internet-yhteys tai ladattu iso kielipaketti",
              "Laadukas ja selkeästi lausuttu puhe tai teksti"
            ],
            "dropZones": [
              "Laitteet, joilla älysovellus 'näkee ja kuulee' asioita",
              "Tietopankki, josta sanat etsitään valtavalla nopeudella",
              "Raaka-aine eli data, jonka sinä annat kääntäjälle työstettäväksi"
            ],
            "correctAnswer": {
              "Puhelimen mikrofoni ja kamera": "Laitteet, joilla älysovellus 'näkee ja kuulee' asioita",
              "Internet-yhteys tai ladattu iso kielipaketti": "Tietopankki, josta sanat etsitään valtavalla nopeudella",
              "Laadukas ja selkeästi lausuttu puhe tai teksti": "Raaka-aine eli data, jonka sinä annat kääntäjälle työstettäväksi"
            },
            "explanation": "Tyhjästä on paha nyhjästä! Voidakseen auttaa sinua, tekoäly tarvitsee korvat ja silmät (mikrofoni ja kamera), kunnollisen ja laajan sanaston muistiinsa sekä sinulta selkeän ja ymmärrettävän pyynnön."
          },
          {
            "id": "arjessa_5_q12",
            "type": "drag_drop",
            "question": "Järjestä vaiheet loogiseen järjestykseen! Miten uuden kielen oppiminen etenee fiksusti, kun käytät älykästä ja mukautuvaa kielisovellusta apuna automatkalla?",
            "correctAnswer": {
              "Avaat älykkään kielisovelluksen puhelimellasi ja aloitat harjoittelun.": "1. vaihe",
              "Sovellus kysyy sinulta kielen uusia sanoja ja lauseita pelillisten tehtävien avulla.": "2. vaihe",
              "Tekoäly huomaa ne asiat joissa teet paljon virheitä, ja laittaa sinut kertaamaan juuri niitä.": "3. vaihe",
              "Opit uuden kielen tehokkaasti, koska tekoäly teki harjoittelusta täysin sinulle räätälöityä!": "4. vaihe"
            },
            "explanation": "Parhaat kielenoppimissovellukset käyttävät mukautuvaa koneoppimista. Tekoäly huomaa tarkasti, missä olet jo hyvä ja mitä sanoja sinun pitää vielä treenata paljon lisää!",
            "draggables": [
              "Avaat älykkään kielisovelluksen puhelimellasi ja aloitat harjoittelun.",
              "Sovellus kysyy sinulta kielen uusia sanoja ja lauseita pelillisten tehtävien avulla.",
              "Tekoäly huomaa ne asiat joissa teet paljon virheitä, ja laittaa sinut kertaamaan juuri niitä.",
              "Opit uuden kielen tehokkaasti, koska tekoäly teki harjoittelusta täysin sinulle räätälöityä!"
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "arjessa_5_q13",
            "type": "multiple_choice",
            "question": "Miksi \"maailmanlaajuinen tulkki\" (tekoälykääntäjä) on huomattavasti nopeampi tapa kääntää kuin paksun ja painavan paperisanakirjan selaaminen automatkalla?",
            "options": [
              "Tekoäly pystyy etsimään miljoonien sanojen joukosta oikean vastauksen sekunnin murto-osassa.",
              "Sanakirjoissa on aina paljon ohuemmat sivut kuin puhelimen ruudussa, joten niitä on hidas kääntää.",
              "Sanakirjat on alun perinkin tarkoitettu vain aivan pienille vauvoille katseltaviksi.",
              "Tekoäly ei koskaan oikeasti etsi sanoja, vaan keksii ne täysin omasta päästään joka kerta."
            ],
            "correctAnswer": "Tekoäly pystyy etsimään miljoonien sanojen joukosta oikean vastauksen sekunnin murto-osassa.",
            "explanation": "Tekoälyn valtaisa nopeus perustuu tietokoneen huimaan laskentatehoon. Tietokone pystyy käymään koko kielen sanakirjan ja sanastosäännöt läpi silmänräpäyksessä!"
          },
          {
            "id": "arjessa_5_q14",
            "type": "spot_the_ai",
            "question": "Mikä näistä lauseista paljastaa selvästi, että se on käännetty ulkomaiselta nettisivulta suomeksi tekoälyn avulla hieman hölmösti ja kirjaimellisesti?",
            "options": [
              "'Heitä pallo verkkoon ja tehdä monta maalia peli, erittäin hupi jalkapallo.'",
              "'Auton moottorissa on vikaa, joten se pitää viedä pian korjaamolle.'",
              "'Tämä tuote on erittäin laadukas. Suosittelen ostamaan sen itsellesi.'",
              "'Suomen sää on tänään erittäin aurinkoinen ja mukavan lämmin koko päivän.'"
            ],
            "correctAnswer": "'Heitä pallo verkkoon ja tehdä monta maalia peli, erittäin hupi jalkapallo.'",
            "explanation": "Kömpelö lauserakenne ja todella oudot sanavalinnat (kuten \"hupi jalkapallo\") ovat selvä merkki siitä, että tekoälykääntäjä on yrittänyt kääntää tekstiä toisesta kielestä täysin sana sanalta ymmärtämättä kunnolla suomen kielioppia!"
          },
          {
            "id": "arjessa_5_q15",
            "type": "reverse_prompt",
            "question": "AI vanin puhelimesta alkaa yllättäen kuulua erittäin sujuvaa ranskan kieltä, jossa neuvotaan reittiä lähimmälle uimarannalle täydellisellä ääntämyksellä. Mikä oli laitteelle annettu ohje (prompti)?",
            "options": [
              "Käännä ja puhu ranskaksi lause: 'Miten pääsemme tästä lähimmälle uimarannalle?'.",
              "Soita radiosta ranskalaista ja erittäin kovaäänistä suosittua pop-musiikkia.",
              "Käännä minulle englannista takaisin suomeksi sana 'uimaranta'.",
              "Näytä digitaaliselta kartalta kaikkein nopein autoreitti Suomesta suoraan Ranskaan."
            ],
            "correctAnswer": "Käännä ja puhu ranskaksi lause: 'Miten pääsemme tästä lähimmälle uimarannalle?'.",
            "explanation": "Moni tekoälykääntäjä pystyy nykyään kääntämään tekstin erittäin nopeasti ja myös lausumaan sen ääneen virheettömällä ja uskottavalla aksentilla. Tämä tekee tekoälystä uskomattoman upean ja kätevän apulaisen, kun matkustat oudoissa maissa!"
          }
        ]
      },
      {
        "id": "arjessa_6",
        "name": "AI vanin apukuski",
        "questions": [
          {
            "id": "arjessa_6_q1",
            "type": "true_false",
            "question": "Älypuhelimen navigaattori tietää edessä olevasta ruuhkasta, koska joku vihainen autonkuljettaja soittaa aina navigaattorin tehtaalle ja kertoo tien olevan tukossa.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Navigaattori käyttää tekoälyä, joka seuraa muiden tiellä olevien ihmisten puhelimien liikkumisnopeutta. Jos sadat puhelimet liikkuvat yhtäkkiä etanana, tekoäly tietää, että tiellä on ruuhka!"
          },
          {
            "id": "arjessa_6_q2",
            "type": "multiple_choice",
            "question": "Miten itsestään ajava robottiauto näkee maailman ja pysyy oikealla kaistalla ilman ihmiskuskia?",
            "options": [
              "Se lukee tavallista paperikarttaa todella nopeasti auton sisällä.",
              "Se käyttää kameroita, tutkia ja lasereita ympäristön havainnointiin.",
              "Se ajaa aina sokeasti vain kaukosäätimellä ohjattuna.",
              "Sillä on jättimäiset tuulilasinpyyhkijät, jotka tunnustelevat tietä."
            ],
            "correctAnswer": "Se käyttää kameroita, tutkia ja lasereita ympäristön havainnointiin.",
            "explanation": "Robottiauton \"silmät\" ovat sen lukuisat sensorit, kuten kamerat ja laserit (LiDAR). Ne syöttävät valtavasti tietoa auton tekoälylle, joka tekee ajopäätökset sadasosasekunneissa."
          },
          {
            "id": "arjessa_6_q3",
            "type": "scenario",
            "question": "SKENAARIO: Olette matkalla huvipuistoon AI vanilla. Yhtäkkiä navigaattori käskee teitä kääntymään pois isolta moottoritieltä ja ajamaan pientä mutkaista hiekkatietä pitkin. Miksi tekoäly-apukuski tekee näin?",
            "options": [
              "Se haluaa pelkästään näyttää teille nätin hiekkatien varrella laiduntavat lehmät.",
              "Se meni ehkä täysin rikki ja nyt arpoo ajosuuntia aivan tuurilla ja sattumanvaraisesti.",
              "Se on huomannut päätielletapahtuneen onnettomuuden ja laski kiertotien olevan nopeampi.",
              "Se yrittää pakottaa teidät ajamaan huvipuiston sijaan takaisin kotiin autotalliin."
            ],
            "correctAnswer": "Se on huomannut päätielletapahtuneen onnettomuuden ja laski kiertotien olevan nopeampi.",
            "explanation": "Tekoälyn supervoima on matematiikka! Se laskee jatkuvasti eri reittien aikoja. Jos isolla tiellä on ruuhkaa, tekoäly löytää salamannopeasti kiertotien, jotta pääsette nopeammin perille."
          },
          {
            "id": "arjessa_6_q4",
            "type": "drag_drop",
            "question": "Järjestä askeleet aikajärjestykseen! Miten navigaattori oppii, että moottoritiellä on ruuhka ja varoittaa sinua?",
            "correctAnswer": {
              "Sata ihmistä ajaa samalla moottoritiellä navigaattorit päällä.": "1. vaihe",
              "Autojono joutuu yllättäen hidastamaan vauhtia kolarin takia.": "2. vaihe",
              "Ihmisten puhelimet lähettävät tekoälylle automaattisesti tiedon hidastuneesta vauhdista.": "3. vaihe",
              "Tekoäly värjää kyseisen tienkohdan punaiseksi muiden navigaattoreissa varoituksena.": "4. vaihe"
            },
            "explanation": "Tämä on mahtava esimerkki joukkoälystä! Kaikki tiellä olijat auttavat huomaamattaan toisiaan jakamalla sijaintitietoa tekoälylle.",
            "draggables": [
              "Sata ihmistä ajaa samalla moottoritiellä navigaattorit päällä.",
              "Autojono joutuu yllättäen hidastamaan vauhtia kolarin takia.",
              "Ihmisten puhelimet lähettävät tekoälylle automaattisesti tiedon hidastuneesta vauhdista.",
              "Tekoäly värjää kyseisen tienkohdan punaiseksi muiden navigaattoreissa varoituksena."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "arjessa_6_q5",
            "type": "drag_drop",
            "question": "Yhdistä robottiauton tärkeät aistit ja laitteet niiden oikeisiin tehtäviin!",
            "draggables": [
              "GPS-paikannin",
              "Kamera",
              "Lasertutka (LiDAR)"
            ],
            "dropZones": [
              "Näkee liikennemerkit, kaistaviivat ja värit",
              "Rakentaa tarkan 3D-kartan ympäristön esteistä ja muodoista",
              "Tietää, missä päin maapalloa ja mitä katua auto ajaa"
            ],
            "correctAnswer": {
              "Kamera": "Näkee liikennemerkit, kaistaviivat ja värit",
              "Lasertutka (LiDAR)": "Rakentaa tarkan 3D-kartan ympäristön esteistä ja muodoista",
              "GPS-paikannin": "Tietää, missä päin maapalloa ja mitä katua auto ajaa"
            },
            "explanation": "Jotta robottiauto voi ajaa itsenäisesti, sen on pakko tietää missä se on (GPS), mitä sen edessä on (kamera) ja kuinka kaukana fyysiset esteet ovat (tutka)."
          },
          {
            "id": "arjessa_6_q6",
            "type": "spot_the_ai",
            "question": "Mikä näistä ominaisuuksista on robottiautossa sitä todellista \"tekoälyä\", jota vanhoissa manuaaliautoissa ei takuulla ole?",
            "options": [
              "Tuulilasinpyyhkijät, jotka liikkuvat edestakaisin sateella.",
              "Keskustietokone, joka päättää jarruttaa täysillä, kun se tunnistaa tielle juoksevan koiran.",
              "Radio, joka soittaa lempimusiikkiasi kovaa kaiuttimista.",
              "Vilkku, joka naksuu äänekkäästi, kun painat vipua alas."
            ],
            "correctAnswer": "Keskustietokone, joka päättää jarruttaa täysillä, kun se tunnistaa tielle juoksevan koiran.",
            "explanation": "Tunnistaminen ja nopean päätöksen tekeminen (kuten jarruttaminen esteen edessä) on juuri sitä tekoälyn \"aivovoimistelua\", jota robottiautot tekevät sekunnin murto-osissa."
          },
          {
            "id": "arjessa_6_q7",
            "type": "reverse_prompt",
            "question": "AI vanin robottiohjaus tekee seuraavan siirron: se vilkuttaa oikealle, hidastaa hieman vauhtia, odottaa että viereisellä kaistalla on tilaa, ja siirtyy pehmeästi toiselle kaistalle. Mikä oli tekoälyn saama tehtävä (prompti)?",
            "options": [
              "Tee mahdollisimman nopea äkkijarrutus keskellä tyhjää tietä.",
              "Suorita turvallinen kaistanvaihto oikealle puolelle.",
              "Aja auto lähimmän huoltoaseman parkkihalliin pesuun.",
              "Käännä auton rattia edestakaisin niin lujaa kuin pystyt."
            ],
            "correctAnswer": "Suorita turvallinen kaistanvaihto oikealle puolelle.",
            "explanation": "Robottiauton tekoäly hoitaa yhden ohjeen eteen valtavasti työtä. Turvallinen kaistanvaihto vaatii taustapeilien kameroiden tarkkailua, nopeuden laskemista ja ohjauksen millintarkkaa hallintaa!"
          },
          {
            "id": "arjessa_6_q8",
            "type": "true_false",
            "question": "Robottiautot pystyvät nykyään ajamaan aivan täydellisesti myös aivan hirvittävässä lumimyrskyssä, jossa ihminenkään ei näe metriä pidemmälle.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Huono sää on robottiautoille vielä todella vaikea paikka! Paksu lumi voi peittää liikennemerkit, kaistaviivat ja sotkea auton kameroiden ja lasereiden näkyvyyden."
          },
          {
            "id": "arjessa_6_q9",
            "type": "multiple_choice",
            "question": "Mielenkiintoinen fakta: Mitä luulet, että tapahtuu, jos viet sata älypuhelinta kottikärryissä kävellen todella hitaasti pitkin tyhjää katua?",
            "options": [
              "Navigaattorit menevät täysin rikki ja sammuvat heti.",
              "Tekoäly luulee, että tiellä on valtava autojen ruuhka.",
              "Puhelimet alkavat soittaa automaattisesti hätäkeskukseen.",
              "Puhelimista tulee todella painavia ja kottikärryt kaatuvat."
            ],
            "correctAnswer": "Tekoäly luulee, että tiellä on valtava autojen ruuhka.",
            "explanation": "Tämä on oikeasti testattu temppu! Koska navigaattorit mittaavat ruuhkaa puhelimien määrän ja vauhdin perusteella, sata hitaasti etenevää puhelinta huijaa tekoälyn luulemaan niitä hitaaksi autojonoksi."
          },
          {
            "id": "arjessa_6_q10",
            "type": "scenario",
            "question": "SKENAARIO: AI vanin navigaattorin ruudulla näkyy tiellä punainen pätkä, joka muuttuu yhtäkkiä vihreäksi juuri ennen kuin ehditte sinne. Mitä tiellä oikein tapahtui?",
            "options": [
              "Tiellä ollut ruuhka tai hidastus purkautui, ja liikenne vetää taas normaalisti.",
              "Tekoäly kyllästyi punaiseen väriin ja halusi kokeilla vihreää.",
              "Auto muuttui näkymättömäksi, jotta voitte lentää ruuhkan yli.",
              "Tekoäly yrittää tahallaan ohjata teidät suoraan kolariin."
            ],
            "correctAnswer": "Tiellä ollut ruuhka tai hidastus purkautui, ja liikenne vetää taas normaalisti.",
            "explanation": "Navigaattorit päivittävät tilannetta \"livenä\" eli aivan reaaliajassa. Kun edellä ajavat autot pääsevät taas vauhtiin, tekoäly poistaa punaisen ruuhkavaroituksen näytöltä!"
          },
          {
            "id": "arjessa_6_q11",
            "type": "drag_drop",
            "question": "Yhdistä navigaattorin näyttämät viivojen värit siihen, mitä ne kertovat sinulle ja oikealle kuskille reitistä!",
            "draggables": [
              "Punainen tai tummanpunainen viiva",
              "Sininen tai vihreä viiva",
              "Harmaa viiva"
            ],
            "dropZones": [
              "Tie on auki ja matka joutuu normaalisti",
              "Tiellä on ruuhkaa tai hyvin hitaasti liikkuvia autoja",
              "Vaihtoehtoinen reitti, jota et juuri nyt aja"
            ],
            "correctAnswer": {
              "Sininen tai vihreä viiva": "Tie on auki ja matka joutuu normaalisti",
              "Punainen tai tummanpunainen viiva": "Tiellä on ruuhkaa tai hyvin hitaasti liikkuvia autoja",
              "Harmaa viiva": "Vaihtoehtoinen reitti, jota et juuri nyt aja"
            },
            "explanation": "Kartan värit ovat tekoälyn tapa puhua meille nopeasti! Punainen tarkoittaa vaaraa ja hidastusta, joten kuskina tiedät heti varautua jarruttamaan."
          },
          {
            "id": "arjessa_6_q12",
            "type": "drag_drop",
            "question": "Robottiauto on parkissa autotallissa ja sen pitää lähteä liikkeelle. Järjestä tekoälyn aamuherätys askelettain!",
            "correctAnswer": {
              "Auto käynnistää kaikki kameransa ja lasertutkansa (LiDAR).": "1. vaihe",
              "Tekoäly rakentaa kuvan autotallin seinistä ja esteistä.": "2. vaihe",
              "Auto yhdistää navigaattorin ja etsii nopeimman reitin tielle.": "3. vaihe",
              "Tekoäly laittaa pyörät rullaamaan ja ohjaa auton turvallisesti ovesta ulos.": "4. vaihe"
            },
            "explanation": "Auton täytyy ensin nähdä ympäristönsä ja löytää reittinsä (kartta), ennen kuin se uskaltaa siirtää senttiäkään omia renkaitaan!",
            "draggables": [
              "Auto käynnistää kaikki kameransa ja lasertutkansa (LiDAR).",
              "Tekoäly rakentaa kuvan autotallin seinistä ja esteistä.",
              "Tekoäly laittaa pyörät rullaamaan ja ohjaa auton turvallisesti ovesta ulos.",
              "Auto yhdistää navigaattorin ja etsii nopeimman reitin tielle."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "arjessa_6_q13",
            "type": "multiple_choice",
            "question": "Mikä on tekoälynavigaattorin paras ominaisuus vanhanaikaiseen, paperiseen tiekarttaan verrattuna?",
            "options": [
              "Sitä voi käyttää sateenvarjona huonolla säällä ulkona.",
              "Se osaa huomioida tietyöt ja onnettomuudet aivan reaaliajassa.",
              "Siihen voi piirtää tussilla hienoja uusia teitä ja kyliä.",
              "Se ei koskaan tarvitse sähköä tai akkua toimiakseen."
            ],
            "correctAnswer": "Se osaa huomioida tietyöt ja onnettomuudet aivan reaaliajassa.",
            "explanation": "Paperikartat eivät muutu painamisen jälkeen. Tekoälyllä toimivat navigaattorit taas ovat jatkuvassa yhteydessä nettiin ja muihin autoihin, tietäen jokaisen uudenkin ruuhkan!"
          },
          {
            "id": "arjessa_6_q14",
            "type": "spot_the_ai",
            "question": "Kuka näistä oikeista autonkuljettajista tekee todella vaarallisen virheen käyttäessään \"apukuski\" tekoälyä?",
            "options": [
              "Kuski, joka pitää aina oman maalaisjärkensä mukana ja katseen tiessä.",
              "Kuski, joka luottaa koneeseen sokeasti ja ajaa umpikujiin tai suoraan järveen.",
              "Kuski, joka asettaa navigaattorin reitin turvallisesti ajoissa autotallissa.",
              "Kuski, joka pitää ajoissa tauon tekoälyn varoittaessa kolmen tunnin ruuhkasta."
            ],
            "correctAnswer": "Kuski, joka luottaa koneeseen sokeasti ja ajaa umpikujiin tai suoraan järveen.",
            "explanation": "Tekoäly voi joskus olla väärässä! Siksi oikean ihmisen täytyy aina käyttää maalaisjärkeä ja omia silmiään, eikä ajaa järveen tai umpimetsään vain laitteen käskystä."
          },
          {
            "id": "arjessa_6_q15",
            "type": "reverse_prompt",
            "question": "Navigaattorin kaiuttimesta kuuluu yhtäkkiä: \"Varoitus! Reitilläsi on havaittu vaara: tiellä on irrallinen esine. Pysy valppaana.\" Millä tiedolla tekoäly pystyi varoittamaan asiasta?",
            "options": [
              "Toinen tiellä ajava autokuski ilmoitti sovelluksella esteestä tiellä minuuttia aiemmin.",
              "Tekoäly arvasi asian lukemalla edellisen viikon sanomalehteä internetistä.",
              "Tekoäly keksi varoituksen ihan itse vain huvikseen pelotellakseen sinua.",
              "Tekoäly näki esteen omilla fyysisillä silmillään suoraan auton katolta käsin."
            ],
            "correctAnswer": "Toinen tiellä ajava autokuski ilmoitti sovelluksella esteestä tiellä minuuttia aiemmin.",
            "explanation": "Yhteistyö on voimaa! Monissa navigointisovelluksissa ihmiset voivat itse napin painalluksella ilmoittaa tiellä olevista vaaroista, ja tekoäly jakaa tämän tiedon välittömästi muille takana tuleville kuskeille."
          }
        ]
      },
      {
        "id": "arjessa_7",
        "name": "G. Erikoiskoe – Kaaosristeys",
        "questions": [
          {
            "id": "arjessa_7_q1",
            "type": "true_false",
            "question": "Kun navigaattori ohjaa sinut kiertotielle ennen ruuhkaa, se tekee sen siksi, että se näkee tulevaisuuteen oikean taikuuden avulla.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Navigaattori ei ennusta asioita! Se hyödyntää joukkoälyä: se tarkkailee edellä ajavien ihmisten puhelimien nopeutta ja tajuaa välittömästi, jos tiellä on ruuhkasta johtuva hidastus."
          },
          {
            "id": "arjessa_7_q2",
            "type": "multiple_choice",
            "question": "Mikä on suoratoistopalveluiden (kuten YouTube) \"suosittelualgoritmin\" kaikkein tärkein tavoite?",
            "options": [
              "Opettaa sinulle koulun uusia historian ja fysiikan läksyjä.",
              "Pitää sinut ruudun ääressä mahdollisimman pitkään suosittelemalla samanlaisia videoita, jotta näkisit mainoksia.",
              "Säästää laitteesi akkua laittamalla se nopeasti kiinni.",
              "Pakottaa sinut katsomaan pelkästään videoita, joista et pidä."
            ],
            "correctAnswer": "Pitää sinut ruudun ääressä mahdollisimman pitkään suosittelemalla samanlaisia videoita, jotta näkisit mainoksia.",
            "explanation": "Algoritmit on koodattu koukuttamaan! Ne oppivat mieltymyksesi ja luovat \"suosittelukuplan\", josta on vaikea irrottautua automaattitoiston ja mainosten vuoksi."
          },
          {
            "id": "arjessa_7_q3",
            "type": "scenario",
            "question": "SKENAARIO: Haluat tietää, mitä ulkomaalaisessa ravintolan kyltissä lukee. Osoitat sitä puhelimen kameralla ja suomenkielinen käännös ilmestyy suoraan ruudulle. Miten tekoäly onnistui luomaan tämän käännöksen?",
            "options": [
              "Se soitti nopeasti ravintolan omistajalle ja kysyi asiaa.",
              "Hahmontunnistus luki kirjaimet kuvasta, ja kääntäjäohjelma etsi niille suomenkielisen vastineen tietopankista.",
              "Se muutti koko kyltin oikeasti fyysisesti suomenkieliseksi.",
              "Se vain arvasi jotain aivan sattumanvaraisesti."
            ],
            "correctAnswer": "Hahmontunnistus luki kirjaimet kuvasta, ja kääntäjäohjelma etsi niille suomenkielisen vastineen tietopankista.",
            "explanation": "Tämä upea arjen tekoäly vaatii kahden asian yhdistämistä: kameran kykyä nähdä pikseleistä muotoja (kirjaimia) ja kääntäjän valtavaa, salamannopeaa sanakirjatietoa!"
          },
          {
            "id": "arjessa_7_q4",
            "type": "drag_drop",
            "question": "Järjestä kasvojentunnistuksen askeleet! Miten puhelimesi \"taskussa asuva apuri\" aukeaa?",
            "correctAnswer": {
              "Kamera nappaa kuvan kasvoistasi.": "1. vaihe",
              "Tekoäly skannaa kasvojesi tarkat mitat ja muodot (esim. silmien etäisyyden).": "2. vaihe",
              "Ohjelma vertaa mittoja tallennettuun hahmoosi.": "3. vaihe",
              "Kone toteaa kuvion täsmäävän oikeaan omistajaan ja avaa lukon.": "4. vaihe"
            },
            "explanation": "Kasvojentunnistus ei katso vain ihonväriä tai tukkaa, vaan tekee matemaattista salapoliisityötä kasvojesi tarkoista kuvioista tunnistaakseen juuri sinut.",
            "draggables": [
              "Kamera nappaa kuvan kasvoistasi.",
              "Tekoäly skannaa kasvojesi tarkat mitat ja muodot (esim. silmien etäisyyden).",
              "Ohjelma vertaa mittoja tallennettuun hahmoosi.",
              "Kone toteaa kuvion täsmäävän oikeaan omistajaan ja avaa lukon."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "arjessa_7_q5",
            "type": "drag_drop",
            "question": "Yhdistä älykodin ja liikenteen tekoälylaitteet niiden oikeisiin aisteihin ja toimintoihin!",
            "draggables": [
              "Älytermostaatti",
              "Robotti-imuri",
              "Robottiauto (LiDAR)"
            ],
            "dropZones": [
              "Lukee netistä sääennusteen ja säätää talon lämpöä automaattisesti",
              "Rakentaa lasereilla digitaalisen 3D-kartan ympäristön esteistä",
              "Mittaa sensoreilla etäisyyksiä välttääkseen seiniin törmäämisen lattialla"
            ],
            "correctAnswer": {
              "Älytermostaatti": "Lukee netistä sääennusteen ja säätää talon lämpöä automaattisesti",
              "Robottiauto (LiDAR)": "Rakentaa lasereilla digitaalisen 3D-kartan ympäristön esteistä",
              "Robotti-imuri": "Mittaa sensoreilla etäisyyksiä välttääkseen seiniin törmäämisen lattialla"
            },
            "explanation": "Laitteet pystyvät tekemään itsenäisiä ja fiksuja päätöksiä aistiensa (kuten tutkien, lasereiden ja nettiyhteyden) avulla helpottaakseen arkeamme."
          },
          {
            "id": "arjessa_7_q6",
            "type": "spot_the_ai",
            "question": "Pelaat autotallissa moninpeliä. Kuka näistä pelikavereista on koodattu tietokonevastustaja (botti/NPC) eikä oikea ihminen?",
            "options": [
              "Hahmo, joka nauraa mikrofonissa sinun hyville vitseillesi.",
              "Hahmo, joka jää ikuisesti jumiin juoksemaan päin lukittua ovea.",
              "Hahmo, joka lähtee välillä käymään oikealla jääkaapilla.",
              "Hahmo, joka keksii jatkuvasti aivan uusia, ovelia taktiikoita."
            ],
            "correctAnswer": "Hahmo, joka jää ikuisesti jumiin juoksemaan päin lukittua ovea.",
            "explanation": "Tekoälybotit ohjataan matemaattisten sääntöjen ja reitinhakujen (pathfinding) avulla. Koska ne ovat sokeita koneita, ne voivat paljastua oudoista mekaanisista jumiutumisista eli bugeista!"
          },
          {
            "id": "arjessa_7_q7",
            "type": "reverse_prompt",
            "question": "Puhelimen ääniavustaja soittaa yllättäen rentouttavaa metsän kohinaa ruuhkaisessa kaaosristeyksessä. Mikä komento (prompti) sille oli annettu?",
            "options": [
              "Soita mahdollisimman kovaäänistä rock-musiikkia piristykseksi.",
              "Laita soimaan jotain, joka auttaa rentoutumaan stressaavassa liikenteessä.",
              "Etsi uutiset tämän päivän säästä.",
              "Kerro kuinka monta autoa tässä risteyksessä tarkalleen on."
            ],
            "correctAnswer": "Laita soimaan jotain, joka auttaa rentoutumaan stressaavassa liikenteessä.",
            "explanation": "Arjen tekoäly, kuten ääniavustaja, ymmärtää nykyään puheen muuttamista tekstiksi salamannopeasti ja osaa jopa valita musiikkia ihmisen toivoman \"fiiliksen\" mukaan!"
          },
          {
            "id": "arjessa_7_q8",
            "type": "true_false",
            "question": "Robottiautot ovat nykyään niin täydellisiä, että ne pystyvät ajamaan täysin virheettömästi myös paksussa lumimyrskyssä, jossa ihminenkään ei näe mitään.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Huono sää (kuten lumi tai paksu sumu) on tekoälyautoille edelleen todella vaikea paikka, koska ne peittävät kaistaviivat ja häiritsevät kameroiden sekä lasereiden näkyvyyttä!"
          },
          {
            "id": "arjessa_7_q9",
            "type": "multiple_choice",
            "question": "Miksi kääntäjäsovellus kääntää vieraskielisen vitsin tai sanonnan joskus aivan hassuksi ja väärin?",
            "options": [
              "Koska se tekee sen tahallaan nolatakseen sinut.",
              "Koska tekoäly kääntää asiat usein liian kirjaimellisesti sana sanalta, eikä se ymmärrä piilomerkityksiä.",
              "Koska puhelimen akku on lopussa.",
              "Koska kääntäjä ei koskaan käytä oikeaa tietopankkia."
            ],
            "correctAnswer": "Koska tekoäly kääntää asiat usein liian kirjaimellisesti sana sanalta, eikä se ymmärrä piilomerkityksiä.",
            "explanation": "Maailmanlaajuinen tulkki on loistava sanakirja, mutta koneena siltä puuttuu aito inhimillinen ymmärrys huumorista, paikallisista sanonnoista ja runoista."
          },
          {
            "id": "arjessa_7_q10",
            "type": "scenario",
            "question": "SKENAARIO: Haluat lähettää pitkän viestin kaverille tärisevän AI vanin takapenkiltä, mutta et osu oikeisiin kirjaimiin ruudulla. Miten tekoäly auttaa?",
            "options": [
              "Käytät saneluohjelmaa, ja tekoäly muuttaa puhumasi äänen välittömästi tekstiksi.",
              "Tekoäly pysäyttää auton välittömästi kokonaan.",
              "Tekoäly tulostaa paperisen kirjeen, jonka lähetät postissa.",
              "Puhelin lukitsee näyttönsä tunniksi, jotta et häiritse kuskia."
            ],
            "correctAnswer": "Käytät saneluohjelmaa, ja tekoäly muuttaa puhumasi äänen välittömästi tekstiksi.",
            "explanation": "Puhelimen ääniavustajat ja saneluohjelmat osaavat muuttaa äänen koodin kautta kirjoitetuksi tekstiksi. Se on upea arjen apuri, kun kädet ovat varatut tai auton kyyti on pomppuista!"
          }
        ]
      }
    ]
  },
  {
    "id": "reilu_peli",
    "name": "Reilu peli (Etiikka)",
    "subcategories": [
      {
        "id": "reilu_peli_1",
        "name": "Kaikki kyytiin!",
        "questions": [
          {
            "id": "reilu_peli_1_q1",
            "type": "true_false",
            "question": "Tekoäly saa päättää itse, kuka pääsee AI vanin kyytiin ja kuka jätetään tien poskeen esimerkiksi ihonvärin tai kielen perusteella.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Tekoälyn pitää olla reilu aivan kaikkia kohtaan! Koodarien täytyy aina varmistaa, ettei tekoäly koskaan syrji ketään ulkonäön, kielen tai taustan perusteella. Kaikki pääsevät kyytiin!"
          },
          {
            "id": "reilu_peli_1_q2",
            "type": "multiple_choice",
            "question": "Miten AI vanin ääniohjauksen pitää toimia, jotta se on aidosti tasa-arvoinen ja reilu aivan kaikille matkustajille?",
            "options": [
              "Sen pitää ymmärtää vain todella kovaa huutavia aikuisia.",
              "Sen täytyy ymmärtää kaikenlaisia ääniä, kuten lasten puhetta ja eri murteita.",
              "Sen pitää sammua heti, jos joku puhuu sille savoa tai muuta murretta.",
              "Sen tulee kuunnella ainoastaan auton alkuperäistä ja ensimmäistä omistajaa."
            ],
            "correctAnswer": "Sen täytyy ymmärtää kaikenlaisia ääniä, kuten lasten puhetta ja eri murteita.",
            "explanation": "Reilu tekoäly ymmärtää meitä kaikkia! Siksi sitä pitää opettaa monenlaisilla ja eri ikäisten ihmisten äänillä, jotta se ei sivuuta ketään."
          },
          {
            "id": "reilu_peli_1_q3",
            "type": "scenario",
            "question": "SKENAARIO: AI vanin automaattinen ovi aukeaa kameralle vilkuttamalla. Ovi aukeaa hienosti sinulle, mutta se ei aukea pyörätuolissa istuvalle kaverillesi, vaikka hän vilkuttaa. Mikä tekoälyssä on todennäköisesti vikana?",
            "options": [
              "Kaverisi vilkutti ovelle aivan liian hitaasti tai liian hiljaa.",
              "Tekoälyä ei ole opetettu tunnistamaan pyörätuolissa olevia ihmisiä kuvista.",
              "Ovi on luultavasti täysin ruosteessa sisältä, eikä se toimi enää kenellekään.",
              "Auton akku loppui juuri täsmälleen samalla sekunnilla kokonaan."
            ],
            "correctAnswer": "Tekoälyä ei ole opetettu tunnistamaan pyörätuolissa olevia ihmisiä kuvista.",
            "explanation": "Jos tekoälyä opetetaan vain seisovien ihmisten kuvilla, se ei osaa tunnistaa pyörätuolissa olevaa ihmistä kunnolla. Tämä on epäreilua, ja siksi opetusdatan pitää aina olla monipuolista!"
          },
          {
            "id": "reilu_peli_1_q4",
            "type": "drag_drop",
            "question": "Autotallin koodari huomaa, että AI vanin tekoäly-ovi tunnistaa huonosti silmälasipäisiä ihmisiä. Järjestä askeleet, joilla tekoäly korjataan reiluksi kaikille!",
            "correctAnswer": {
              "Koodari huomaa, että tekoälyovi ei aina aukea silmälasipäisille ihmisille.": "1. vaihe",
              "Koodari tutkii opetusdatan ja huomaa, että kuvissa on vain laseittomia ihmisiä.": "2. vaihe",
              "Koodari syöttää tekoälylle tuhansia uusia opetuskuvia ihmisistä silmälasit päässä.": "3. vaihe",
              "Tekoäly oppii uuden datan ja avaa jatkossa oven reilusti aivan kaikille.": "4. vaihe"
            },
            "explanation": "Epäreilut virheet pystytään korjaamaan! Syöttämällä ohjelmalle parempaa ja tasa-arvoisempaa opetusdataa (vähemmistöt huomioiden), tekoälystä saadaan korjattua reilu peli.",
            "draggables": [
              "Koodari huomaa, että tekoälyovi ei aina aukea silmälasipäisille ihmisille.",
              "Koodari tutkii opetusdatan ja huomaa, että kuvissa on vain laseittomia ihmisiä.",
              "Koodari syöttää tekoälylle tuhansia uusia opetuskuvia ihmisistä silmälasit päässä.",
              "Tekoäly oppii uuden datan ja avaa jatkossa oven reilusti aivan kaikille."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "reilu_peli_1_q5",
            "type": "drag_drop",
            "question": "Reilu tekoäly auttaa kaikkia heidän omilla yksilöllisillä tavoillaan. Yhdistä AI vanin älykäs ominaisuus ja matkustaja, jota se auttaa kaikkein eniten!",
            "draggables": [
              "Tekstitys auton ruudulle",
              "Ääniohjaus ja tekstin lukeminen ääneen",
              "Eri kielten automaattinen kääntäjä"
            ],
            "dropZones": [
              "Matkustaja, joka ei kuule hyvin",
              "Matkustaja, joka ei näe kovin hyvin",
              "Matkustaja, joka ei puhu samaa kieltä muiden kanssa"
            ],
            "correctAnswer": {
              "Tekstitys auton ruudulle": "Matkustaja, joka ei kuule hyvin",
              "Ääniohjaus ja tekstin lukeminen ääneen": "Matkustaja, joka ei näe kovin hyvin",
              "Eri kielten automaattinen kääntäjä": "Matkustaja, joka ei puhu samaa kieltä muiden kanssa"
            },
            "explanation": "Tasa-arvo ei tarkoita, että kaikki saavat aina täsmälleen saman asian. Se tarkoittaa, että kaikki saavat juuri sen oikean avun, jonka he tarvitsevat pystyäkseen osallistumaan!"
          },
          {
            "id": "reilu_peli_1_q6",
            "type": "spot_the_ai",
            "question": "Kuka näistä tekoälyistä toimii erittäin epäreilusti ja syrjii ihmisiä \"Kaikki kyytiin\" -säännön vastaisesti? Etsi joukosta epäreilu ja huonosti koodattu tekoäly!",
            "options": [
              "Navigaattori, joka etsii reitin ilman jyrkkiä portaita pyörätuolin käyttäjälle.",
              "Älylukko, joka suostuu avaamaan auton oven pelkästään pitkille ihmisille.",
              "Kääntäjä, joka auttaa eri maista tulevia ystäviä juttelemaan keskenään leikeissä.",
              "Äänikirja, joka osaa lukea pitkän tekstin selkeästi ääneen sokealle matkustajalle."
            ],
            "correctAnswer": "Älylukko, joka suostuu avaamaan auton oven pelkästään pitkille ihmisille.",
            "explanation": "Tekoäly ei koskaan saisi asettaa ihmisiä eriarvoiseen asemaan heidän pituutensa, ikänsä tai esimerkiksi ihonvärinsä perusteella! Sellainen tekoäly on viallinen ja epäreilu."
          },
          {
            "id": "reilu_peli_1_q7",
            "type": "reverse_prompt",
            "question": "Koodasit AI vanille uuden ominaisuuden, ja se alkoi yhtäkkiä lukea kojelaudan kaikkia pikkutekstejä ääneen todella selkeästi ja kovaa. Mikä sääntö (prompti) annettiin laitteelle?",
            "options": [
              "Pidä huoli, että laitteen näyttö sammuu automaattisesti aina kello kahdeksan illalla.",
              "Suunnittele peli, jossa pitää lukea ruudulta todella paljon hyvin pientä tekstiä.",
              "Rakenna saavutettava ominaisuus, joka auttaa heikkonäköisiä ihmisiä käyttämään autoa.",
              "Keksi keino, jolla autosta saa aina mahdollisimman kovaäänisen ja meluisan sisäpuolelta."
            ],
            "correctAnswer": "Rakenna saavutettava ominaisuus, joka auttaa heikkonäköisiä ihmisiä käyttämään autoa.",
            "explanation": "Kun tekoälyä suunnitellaan reilusti, koodarien täytyy muistaa kaikenlaiset ihmiset. Tekstien lukeminen ääneen tekee laitteesta saavutettavan myös niille, jotka eivät näe kunnolla!"
          },
          {
            "id": "reilu_peli_1_q8",
            "type": "true_false",
            "question": "Jos kaksi matkustajaa AI vanissa puhuvat aivan eri kieliä, tekoälyn reaaliaikainen kääntäjä edistää tasa-arvoa auttamalla heitä ymmärtämään toisiaan ja leikkimään yhdessä.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Oikein",
            "explanation": "Kyllä! Kielimuuri voi joskus jättää jonkun ulkopuoliseksi. Tekoäly voi toimia hienona siltana, jonka ansiosta kaikki pääsevät mukaan yhteiseen juttuun."
          },
          {
            "id": "reilu_peli_1_q9",
            "type": "multiple_choice",
            "question": "Auton tekoälykamera on koodattu varoittamaan kuskia turvallisesti, jos joku kävelee tielle. Millaista opetusdataa sille pitää syöttää asioiden tunnistamiseksi, jotta se on turvallinen ja reilu aivan kaikille?",
            "options": [
              "Kuvia vain ja ainoastaan ihmisistä, joilla on kirkkaan keltainen sadetakki päällä tiellä.",
              "Kuvia kaikenikäisistä ja erikokoisista ihmisistä erilaisilla ihonväreillä ja vaatteilla.",
              "Kuvia pelkästään pitkistä ja aikuisista miehistä kävelemässä yksinään suojatiellä.",
              "Kuvia vain ja ainoastaan täysin tyhjistä teistä, joilla ei ole vielä yhtäkään ihmistä."
            ],
            "correctAnswer": "Kuvia kaikenikäisistä ja erikokoisista ihmisistä erilaisilla ihonväreillä ja vaatteilla.",
            "explanation": "Turvallisen tekoälyn pitää tunnistaa aivan jokainen ihminen. Jos data on yksipuolista, kamera saattaa vahingossa sivuuttaa lapsen tai tietyn näköisen ihmisen, mikä olisi todella vaarallista!"
          },
          {
            "id": "reilu_peli_1_q10",
            "type": "scenario",
            "question": "SKENAARIO: AI vanin uusi hieno autopeli vaatii, että sormea liu'utetaan ruudulla todella nopeasti oikealta vasemmalle. Vasenkätiselle kaverillesi tämä kyseinen liike on erittäin vaikea ja hän häviää pelin aina. Mitä pelin koodari unohti tehdä?",
            "options": [
              "Hän unohti vahingossa laittaa peliin ne kaikkein hienoimmat ja kalleimmat urheiluautot.",
              "Hän unohti suunnitella pelin niin, että se on mahdollinen pelata reilusti myös vasenkätisille.",
              "Hän unohti pestä autotallin ikkunat täysin puhtaiksi ennen koodaamisen aloittamista.",
              "Hän unohti salaa ohjelmoida pelin niin, että sinun kaverisi voittaisi siinä ihan joka kerta."
            ],
            "correctAnswer": "Hän unohti suunnitella pelin niin, että se on mahdollinen pelata reilusti myös vasenkätisille.",
            "explanation": "Tasa-arvo ja saavutettavuus digimaailmassa tarkoittaa myös sitä, että laitteet ja pelit on mietitty niin, että ne sopivat reilusti sekä oikea- että vasenkätisille pelaajille."
          },
          {
            "id": "reilu_peli_1_q11",
            "type": "drag_drop",
            "question": "Tekoäly tekee joskus epäreiluja virheitä opetusdatan takia. Yhdistä epäreilu ja harmillinen ongelma sille keksittyyn hienoon, reiluun ratkaisuun!",
            "draggables": [
              "Opeta laitetta paremmin kaikenlaisilla ja eri-ikäisillä äänillä",
              "Vaihda kuvadataan kaikkien sukupuolten ammattilaisia",
              "Lisää laitteeseen ohjaus painikkeilla pelkän puheen lisäksi"
            ],
            "dropZones": [
              "Ääniohjaus ei ymmärrä ollenkaan lasten kimeitä ääniä",
              "Tekoäly luulee kuvista, että kaikki poliisit ovat aina miehiä",
              "Laitetta ei voi käyttää lainkaan, jos matkustaja ei pysty puhumaan"
            ],
            "correctAnswer": {
              "Opeta laitetta paremmin kaikenlaisilla ja eri-ikäisillä äänillä": "Ääniohjaus ei ymmärrä ollenkaan lasten kimeitä ääniä",
              "Vaihda kuvadataan kaikkien sukupuolten ammattilaisia": "Tekoäly luulee kuvista, että kaikki poliisit ovat aina miehiä",
              "Lisää laitteeseen ohjaus painikkeilla pelkän puheen lisäksi": "Laitetta ei voi käyttää lainkaan, jos matkustaja ei pysty puhumaan"
            },
            "explanation": "Virheitä ja syrjintää sattuu vahingossa, mutta koodareiden tärkein tehtävä on jatkuvasti korjata ja parantaa tekoälyä. Ongelmiin löytyy aina reilu ratkaisu!"
          },
          {
            "id": "reilu_peli_1_q12",
            "type": "drag_drop",
            "question": "Järjestä vaiheet fiksusti aikajärjestykseen! Miten koodari oikeaoppisesti rakentaa AI vaniin täysin reilun, syrjimättömän ja tasa-arvoisen tekoälyapulaisen?",
            "correctAnswer": {
              "Koodari kerää opetusdataa erittäin monenlaisista, erilaisista ja eri-ikäisistä ihmisistä.": "1. vaihe",
              "Tekoäly koulutetaan ja sille opetetaan asioita tämän reilun ja monipuolisen datan avulla.": "2. vaihe",
              "Koodari pyytää useita erilaisia ihmisiä (kuten vasenkätisiä ja lapsia) testaamaan laitetta.": "3. vaihe",
              "Laitteesta tulee mahdollisimman reilu, ja se toimii täydellisesti ihan kaikille ihmisille.": "4. vaihe"
            },
            "explanation": "Reilun tekoälyn rakentaminen alkaa aina heti alussa monipuolisesta datasta, ja se varmistetaan lopuksi testaamalla sitä erilaisten ihmisten kanssa yhdessä.",
            "draggables": [
              "Koodari kerää opetusdataa erittäin monenlaisista, erilaisista ja eri-ikäisistä ihmisistä.",
              "Tekoäly koulutetaan ja sille opetetaan asioita tämän reilun ja monipuolisen datan avulla.",
              "Koodari pyytää useita erilaisia ihmisiä (kuten vasenkätisiä ja lapsia) testaamaan laitetta.",
              "Laitteesta tulee mahdollisimman reilu, ja se toimii täydellisesti ihan kaikille ihmisille."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "reilu_peli_1_q13",
            "type": "multiple_choice",
            "question": "Aikuisten maailmassa ja teknologian parissa puhutaan usein hienosta sanasta nimeltä \"saavutettavuus\". Mitä se oikeastaan tarkoittaa tekoälyn ja pelien kohdalla?",
            "options": [
              "Sitä, että auto kulkee mahdollisimman lujaa moottoritiellä ylinopeutta.",
              "Sitä, että nettisivu, peli tai laite on aidosti helppo ja mahdollinen käyttää aivan kaikille.",
              "Sitä, että saavutat autolla nopeasti maailmanennätyksen todella pitkällä ajomatkalla.",
              "Sitä, että kaikki maailman markkinoilla olevat tietokoneet pitää maalata samanvärisiksi."
            ],
            "correctAnswer": "Sitä, että nettisivu, peli tai laite on aidosti helppo ja mahdollinen käyttää aivan kaikille.",
            "explanation": "Saavutettavuus on juuri sitä, että teknologia ei jätä koskaan ketään kyydistä! Se on ovien avaamista ja sitä, että laitteet auttavat ihmisiä näön, kuulon tai iän haasteista huolimatta täydellisesti."
          },
          {
            "id": "reilu_peli_1_q14",
            "type": "spot_the_ai",
            "question": "Joku iso yritys koodasi erittäin epäreilun tekoälyn, joka syrjii laitteen käyttäjiä. Etsi joukosta firman antama todella huono \"tekoälyselitys\" ja tekosyy asialle!",
            "options": [
              "'Olemme todella pahoillamme, tutkimme asian ja korjaamme datan välittömästi reiluksi.'",
              "'Se on vain fiksun koneen oma päätös, emmekä me ihmiset voi laitteen päätöksille yhtään mitään.'",
              "'Koulutimme tekoälyä aivan vahingossa liian yksipuolisella materiaalilla, korjaamme asian heti.'",
              "'Pahoittelut tapahtuneesta, meidän testiryhmässämme taisi olla vähän liian samanlaisia ihmisiä.'"
            ],
            "correctAnswer": "'Se on vain fiksun koneen oma päätös, emmekä me ihmiset voi laitteen päätöksille yhtään mitään.'",
            "explanation": "Tämä on todella huono ja epäeettinen selitys! Kone ei tee ikinä omia itsenäisiä ja \"tietoisia\" päätöksiä. Ihmiset ohjelmoivat sen säännöt, ja ihmiset voivat myös aivan aina korjata tekoälyn tekemät epäreilut virheet."
          },
          {
            "id": "reilu_peli_1_q15",
            "type": "reverse_prompt",
            "question": "Olet AI vanin piirtäjätekoäly. Piirrät laitteen näytölle hienon kuvan astronautista, palomiehestä ja lääkäristä. Piirrät kuvaan todella hienosti sekä naisia että miehiä, erivärisiä, nuoria ja vanhoja. Mikä sääntö (prompti) koodari sinulle alun perin antoi?",
            "options": [
              "Piirrä vain aikuiskokoisia miehiä näihin ammatteihin, sillä ne ovat vanhoja ja perinteisiä miesten töitä.",
              "Varmista, että piirroksissasi näkyy ihmisten ja aitojen ammattien todellinen monimuotoisuus ja tasa-arvo.",
              "Piirrä sellaisia kuvia, joissa eläimet tekevät erilaisia ihmisten töitä kaukana hauskassa avaruudessa.",
              "Älä koskaan piirrä ihmisiä lainkaan tähän työhön, piirrä pelkkiä tylsiä rakennuksia ja irrallisia työkaluja."
            ],
            "correctAnswer": "Varmista, että piirroksissasi näkyy ihmisten ja aitojen ammattien todellinen monimuotoisuus ja tasa-arvo.",
            "explanation": "Monimuotoisuus (eli diversiteetti) on reilun ja eettisen pelin sydän! Hyvä tekoäly ei enää käytä vanhoja kuluneita stereotypioita ihmisistä, vaan ymmärtää, että aivan kuka tahansa meistä voi unelmoida olevansa esimerkiksi astronautti!"
          }
        ]
      },
      {
        "id": "reilu_peli_2",
        "name": "Kuka oli kuskina?",
        "questions": [
          {
            "id": "reilu_peli_2_q1",
            "type": "true_false",
            "question": "Jos tekoäly kirjoittaa puolestasi esitelmän AI vanin historiasta, on täysin reilua poistaa tekoälyn nimi ja palauttaa se opettajalle omana työnäsi.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Jos huijaat tekoälyn tekemiä läksyjä omiksesi, toimit epäreilusti. Kuka tahansa voi painaa nappia, mutta koulussa arvostellaan sinun omaa aivotyötäsi!"
          },
          {
            "id": "reilu_peli_2_q2",
            "type": "multiple_choice",
            "question": "Mitä tarkoitetaan \"Kuka oli kuskina?\" -säännöllä, kun käytät tekoälyä koulutehtävissä?",
            "options": [
              "Että autotallissa on vain yksi oikea kuski.",
              "Että teoista on otettava vastuu ja tekoälyn käytöstä kerrotaan avoimesti.",
              "Että tekoäly on aina vastuussa, jos se tekee virheen.",
              "Että ope on vastuussa sinun läksyistäsi."
            ],
            "correctAnswer": "Että teoista on otettava vastuu ja tekoälyn käytöstä kerrotaan avoimesti.",
            "explanation": "Kun käytät tekoälyä, sinä olet yhä kuski. Jos palautat väärää tietoa, se on sinun vastuullasi, ja siksi AI:n käytöstä kerrotaan avoimesti!"
          },
          {
            "id": "reilu_peli_2_q3",
            "type": "scenario",
            "question": "SKENAARIO: Pyysit tekoälyä laskemaan vaikean matikan läksyn puolestasi. Opettaja huomaa, että vastaus on aivan väärin ja kysyy asiasta. Mitä teet, jotta olet reilu \"kuski\"?",
            "options": [
              "Syytän välittömästi tekoälyä ja sanon, että se on tyhmä kone.",
              "Myönnän rehellisesti, että käytin AI:ta ja otan vastuun virheestä.",
              "Piiloudun pulpetin alle enkä vastaa opettajalle.",
              "Väitän, että isoveljeni teki läksyn puolestani."
            ],
            "correctAnswer": "Myönnän rehellisesti, että käytin AI:ta ja otan vastuun virheestä.",
            "explanation": "Kuski ottaa aina vastuun! Tekoälyn tekemiä läksyjä ei huijata omiksi, ja teoista on otettava oma vastuu."
          },
          {
            "id": "reilu_peli_2_q4",
            "type": "drag_drop",
            "question": "Järjestä fiksut askeleet reiluun ajomatkaan! Miten teet esitelmän avoimesti tekoälyä apuna käyttäen?",
            "correctAnswer": {
              "Kysy tekoälyltä ideoita esitelmän rakenteeseen.": "1. vaihe",
              "Kirjoita itse teksti ja tee kunnon aivovoimistelu.": "2. vaihe",
              "Laita esitelmän loppuun merkintä, miten hyödynsit tekoälyä.": "3. vaihe",
              "Palauta hieno ja rehellinen esitelmä opettajalle.": "4. vaihe"
            },
            "explanation": "Omien läksyjen huijaaminen on kielletty, mutta AI:n avoimesta käytöstä ideointiin kannattaa kertoa rohkeasti ja avoimesti.",
            "draggables": [
              "Kysy tekoälyltä ideoita esitelmän rakenteeseen.",
              "Kirjoita itse teksti ja tee kunnon aivovoimistelu.",
              "Laita esitelmän loppuun merkintä, miten hyödynsit tekoälyä.",
              "Palauta hieno ja rehellinen esitelmä opettajalle."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "reilu_peli_2_q5",
            "type": "drag_drop",
            "question": "Raahaa toimintatavat oikeisiin laatikoihin! Mikä on avointa reilua peliä ja mikä on epäreilua huijaamista?",
            "draggables": [
              "Tekoälyn käyttäminen tekstin oikolukuun avoimesti",
              "Kertominen opettajalle, että AI keksi tarinan nimen",
              "Koko tarinan kopiointi AI:lta salaa",
              "Tekoälyn syyttäminen huonosta arvosanasta"
            ],
            "dropZones": [
              "Reilu peli (Oma työ ja avoimuus)",
              "Epäreilu peli (Huijaus ja vastuun pakoilu)"
            ],
            "correctAnswer": {
              "Tekoälyn käyttäminen tekstin oikolukuun avoimesti": "Reilu peli (Oma työ ja avoimuus)",
              "Kertominen opettajalle, että AI keksi tarinan nimen": "Reilu peli (Oma työ ja avoimuus)",
              "Koko tarinan kopiointi AI:lta salaa": "Epäreilu peli (Huijaus ja vastuun pakoilu)",
              "Tekoälyn syyttäminen huonosta arvosanasta": "Epäreilu peli (Huijaus ja vastuun pakoilu)"
            },
            "explanation": "Sinun pitää olla kuski omassa oppimisessasi. Tekoälyn avusta on oltava avoin, eikä omia virheitä saa vierittää koneen syyksi pakoilemalla vastuuta."
          },
          {
            "id": "reilu_peli_2_q6",
            "type": "spot_the_ai",
            "question": "Kuka näistä oppilaista ei halua olla \"kuski\" omassa elämässään ja yrittää pakoilla vastuuta tekoälyn avulla? Etsi huijari!",
            "options": [
              "'Käytin AI:ta apuna sanojen kääntämisessä.'",
              "'Tämä on kokonaan minun kirjoittamani teksti, kone teki kaiken ja minä vain kopioin sen!'",
              "'Kerroin esitelmän alussa, että ideat ovat tekoälyltä.'",
              "'Huomasin tekoälyn virheen ja korjasin sen itse.'"
            ],
            "correctAnswer": "'Tämä on kokonaan minun kirjoittamani teksti, kone teki kaiken ja minä vain kopioin sen!'",
            "explanation": "Koneen tekemän työn huijaaminen omaksi on täysin reilun pelin vastaista. Tekijän pitää aina olla oikea ihminen, ei \"copy-paste\" -kone!"
          },
          {
            "id": "reilu_peli_2_q7",
            "type": "reverse_prompt",
            "question": "Opettaja kehuu sinua: \"Tämä oli upeasti ideoitu, ja oli reilua, että kerroit hakeneesi vain inspiraatiota tähän tekoälyltä!\" Mikä prompti (kehotus) tuotti tämän reilun avun?",
            "options": [
              "Kirjoita koko 500 sanan tarina nopeista autoista valmiiksi.",
              "Anna minulle 3 hauskaa ideaa tarinaan, jossa seikkailee AI van.",
              "Tee läksyni niin, että opettaja luulee minun tehneen ne.",
              "Keksi minulle tekosyy, miksi en tehnyt läksyjäni."
            ],
            "correctAnswer": "Anna minulle 3 hauskaa ideaa tarinaan, jossa seikkailee AI van.",
            "explanation": "Kun pyydät vain ideoita, teet varsinaisen työn itse ja toimit avoimesti ja reilusti oman työsi kuskina."
          },
          {
            "id": "reilu_peli_2_q8",
            "type": "true_false",
            "question": "Jos kerrot opettajalle rehellisesti ja avoimesti käyttäneesi tekoälyä apuna ideoinnissa, saat automaattisesti hylätyn arvosanan.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "AI:n käytöstä kertominen avoimesti on juuri se asia, mitä reilussa pelissä pitääkin tehdä! Fiksu opettaja arvostaa rehellisyyttä ja avoimuutta."
          },
          {
            "id": "reilu_peli_2_q9",
            "type": "multiple_choice",
            "question": "Miksi juuri sinun pitää \"olla kuskina\", eikä tekoälyn, kun tehdään sinun omat koulutehtäväsi?",
            "options": [
              "Koska tekoäly saa muuten opettajalta kaikki karkit.",
              "Koska sinun aivosi tarvitsevat treeniä, eikä tekoäly opi sinun puolestasi.",
              "Koska tekoäly on aina hitaampi kirjoittamaan kuin sinä.",
              "Koska koodarit ovat kieltäneet tekoälyä käymästä koulua."
            ],
            "correctAnswer": "Koska sinun aivosi tarvitsevat treeniä, eikä tekoäly opi sinun puolestasi.",
            "explanation": "Tekoälyn tekemiä läksyjä ei huijata omiksi, koska silloin oppiminen jää tapahtumatta. Aivot kasvavat vain, kun ihminen itse ohjaa omaa oppimistaan!"
          },
          {
            "id": "reilu_peli_2_q10",
            "type": "scenario",
            "question": "SKENAARIO: Rakennatte autotallissa kaverin kanssa mäkiautoa. Kysytte tekoälyltä ohjeita jarrun rakentamiseen. Tekoäly antaa ohjeen, joka on selvästi vaarallinen. Kuka on vastuussa, jos rakennatte jarrun silti?",
            "options": [
              "Tekoäly, koska se antoi täysin väärät ohjeet.",
              "Puhelimen valmistaja, koska puhelin näytti tekstin.",
              "Te itse, koska ihmisen pitää ottaa vastuu teoistaan ja arvioida neuvoja.",
              "Ei kukaan, se on vain huonoa tuuria."
            ],
            "correctAnswer": "Te itse, koska ihmisen pitää ottaa vastuu teoistaan ja arvioida neuvoja.",
            "explanation": "Vaikka tekoäly neuvoisi, ihminen on aina \"kuskina\". Teoista ja päätöksistä on aina otettava oma vastuu."
          },
          {
            "id": "reilu_peli_2_q11",
            "type": "drag_drop",
            "question": "Yhdistä reilun pelin sanat ja niiden tarkoitukset, kun ajat \"AI vanilla\" koulutehtävien maastossa!",
            "draggables": [
              "Avoimuus",
              "Vastuu",
              "Oma työ"
            ],
            "dropZones": [
              "Kerrot reilusti, miten käytit tekoälyä apuna",
              "Kannat seuraukset, jos läksyissä on tekoälyn tekemä virhe",
              "Kirjoitat ja mietit asiat lopulta aivan itse"
            ],
            "correctAnswer": {
              "Avoimuus": "Kerrot reilusti, miten käytit tekoälyä apuna",
              "Vastuu": "Kannat seuraukset, jos läksyissä on tekoälyn tekemä virhe",
              "Oma työ": "Kirjoitat ja mietit asiat lopulta aivan itse"
            },
            "explanation": "Nämä kolme asiaa: Oma työ, vastuu ja avoimuus, ovat reilun pelin kaikkein tärkeimmät säännöt, kun tekoäly otetaan mukaan apukuskiksi."
          },
          {
            "id": "reilu_peli_2_q12",
            "type": "drag_drop",
            "question": "Kirjoitit tarinan, johon otit hienon päähenkilön nimen tekoälyltä. Järjestä oikeat askeleet, kuinka palautat työn reilusti!",
            "correctAnswer": {
              "Tarkista oma tarinasi ja ole siitä ylpeä.": "1. vaihe",
              "Kirjoita paperin loppuun: 'Päähenkilön nimi ideoitu tekoälyllä'.": "2. vaihe",
              "Palauta paperi opettajalle hymyillen.": "3. vaihe",
              "Kerro opettajalle rehellisesti pyydettäessä, miten hieno AI-apuri sinulla oli.": "4. vaihe"
            },
            "explanation": "Läpinäkyvyys on valttia. Kun AI:n käytöstä kerrotaan avoimesti, ei tarvitse koskaan jännittää kiinnijäämistä huijauksesta.",
            "draggables": [
              "Tarkista oma tarinasi ja ole siitä ylpeä.",
              "Kirjoita paperin loppuun: 'Päähenkilön nimi ideoitu tekoälyllä'.",
              "Palauta paperi opettajalle hymyillen.",
              "Kerro opettajalle rehellisesti pyydettäessä, miten hieno AI-apuri sinulla oli."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "reilu_peli_2_q13",
            "type": "multiple_choice",
            "question": "Mikä näistä lauseista kuvaa parhaiten epäreilua tekoälyn käyttöä (eli ei olla itse kuskina)?",
            "options": [
              "'Käytin AI:ta etsimään tietolähteitä esitelmääni varten.'",
              "'Pyysin AI:lta selvennystä vaikeaan sanaan.'",
              "'Maalasin kuviksen työn itse, mutta AI antoi minulle idean väreihin.'",
              "'Annoin AI:n kirjoittaa koko runon ja väitin opettajalle sen olevan minun.'"
            ],
            "correctAnswer": "'Annoin AI:n kirjoittaa koko runon ja väitin opettajalle sen olevan minun.'",
            "explanation": "Tekoälyn tekemiä töitä ei huijata koskaan omiksi. Se on kuin antaisi kaverin ajaa pyöräkisassa sinun puolestasi ja ottaisi itse kultamitalin!"
          },
          {
            "id": "reilu_peli_2_q14",
            "type": "spot_the_ai",
            "question": "Etsi joukosta huijarin prompti (kehotus), joka rikkoo selvästi sääntöä \"Oma työ ja avoimuus\"!",
            "options": [
              "'Anna minulle kolme erilaista otsikkoideaa aiheesta tekoäly.'",
              "'Selitä minulle, miten fotosynteesi toimii, jotta voin oppia sen.'",
              "'Kirjoita puolestani viiden sivun esitelmä kissoista ja piilota tekoälyn jäljet.'",
              "'Auta minua tarkistamaan tekstistäni pahimmat kirjoitusvirheet.'"
            ],
            "correctAnswer": "'Kirjoita puolestani viiden sivun esitelmä kissoista ja piilota tekoälyn jäljet.'",
            "explanation": "Huijaaminen ja jälkien piilottaminen on epäreilua. AI:n käytöstä pitäisi aina kertoa avoimesti, eikä sitä saa laittaa tekemään koko työtä sinun puolestasi."
          },
          {
            "id": "reilu_peli_2_q15",
            "type": "reverse_prompt",
            "question": "Näet luokkakaverin palauttamassa paperia, jonka alareunassa lukee tekstaus: \"Huom: Käytin kuvituksen ideoinnissa apuna ChatGPT:tä, mutta piirsin auton itse.\" Mitä sääntöä kaveri on noudattanut erinomaisesti?",
            "options": [
              "Sääntöä: Oma työ ja avoimuus.",
              "Sääntöä: Virusten torjunta.",
              "Sääntöä: Kiusaaminen ja ilkeily.",
              "Sääntöä: Ympäristön säästäminen."
            ],
            "correctAnswer": "Sääntöä: Oma työ ja avoimuus.",
            "explanation": "Kaveri oli kuskina! Hän teki oman työn, mutta kertoi avoimesti ja reilusti apukuskistaan aivan sääntöjen mukaisesti."
          }
        ]
      },
      {
        "id": "reilu_peli_3",
        "name": "Luvattomat varaosat",
        "questions": [
          {
            "id": "reilu_peli_3_q1",
            "type": "true_false",
            "question": "Koska tekoäly on vain nopea kone, sillä saa vapaasti kopioida muiden ihmisten piirroksia ja tekstejä internetistä ilman kenenkään lupaa.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Ihmisten tekemillä töillä on tekijänoikeus! Muiden töitä ei saa \"lainata\" luvatta tekoälyn avulla, aivan kuten et ottaisi naapurin autostakaan luvattomia varaosia."
          },
          {
            "id": "reilu_peli_3_q2",
            "type": "multiple_choice",
            "question": "Mitä \"luvattomat varaosat\" tarkoittavat, kun puhutaan tekoälystä ja tekijänoikeuksista?",
            "options": [
              "Sitä, että autotallista varastetaan oikea moottori.",
              "Sitä, että tekoäly kopioi oikeiden taiteilijoiden töitä luvatta.",
              "Sitä, että tietokoneen sisälle asennetaan varastettu muistikortti.",
              "Sitä, että tekoäly ei suostu toimimaan ilman uusia paristoja."
            ],
            "correctAnswer": "Sitä, että tekoäly kopioi oikeiden taiteilijoiden töitä luvatta.",
            "explanation": "Kun tekoäly luo uutta yhdistelemällä toisten ihmisten töitä ja tyylejä ilman heidän lupaansa, se käyttää ikään kuin luvattomia varaosia rakentaakseen omaa autoaan."
          },
          {
            "id": "reilu_peli_3_q3",
            "type": "scenario",
            "question": "SKENAARIO: Kaverisi on piirtänyt upean sarjakuvan AI vanista ja keksinyt oman hienon piirrostyylin. Otat siitä kuvan, syötät sen tekoälylle ja käsket konetta piirtämään 10 uutta samanlaista sivua, jotka myyt ominasi. Mitä teit väärin?",
            "options": [
              "Unohdin värittää sarjakuvan sivut ennen niiden myymistä.",
              "Käytin toisen kovaa aivotyötä ja tyyliä luvatta omaksi edukseni.",
              "Myin sarjakuvat vahingossa aivan liian halvalla hinnalla eteenpäin.",
              "Tekoäly piirsi autotallin vahingossa kokonaan väärän väriseksi."
            ],
            "correctAnswer": "Käytin toisen kovaa aivotyötä ja tyyliä luvatta omaksi edukseni.",
            "explanation": "Kaverisi näki valtavasti vaivaa keksiäkseen oman alkuperäisen tyylin. Toisen tekemää uniikkia työtä ei saa luvatta monistaa koneen avulla omaksi edukseen!"
          },
          {
            "id": "reilu_peli_3_q4",
            "type": "drag_drop",
            "question": "Järjestä askeleet! Miten tekijänoikeusongelma (luvattomien varaosien käyttö) on alun perin syntynyt joidenkin tekoälyjen kohdalla?",
            "correctAnswer": {
              "Taiteilija on maalannut hienon taulun ja laittanut sen internetiin näytille.": "1. vaihe",
              "Tekoäly-yritys on ladannut kuvan koneensa opetusdataan kysymättä lupaa.": "2. vaihe",
              "Tekoäly oppii datan perusteella matkimaan taiteilijan ainutlaatuista tyyliä.": "3. vaihe",
              "Tuntemattomat ihmiset tekevät tekoälyllä kopioita taiteilijan tyylillä.": "4. vaihe"
            },
            "explanation": "Tämä on suuri eettinen ongelma. Taiteilijat ovat vihaisia, koska heidän \"varaosiaan\" (taulujaan) vietiin tekoälyn moottoriin ilman reilua lupaa ja korvausta.",
            "draggables": [
              "Taiteilija on maalannut hienon taulun ja laittanut sen internetiin näytille.",
              "Tekoäly-yritys on ladannut kuvan koneensa opetusdataan kysymättä lupaa.",
              "Tekoäly oppii datan perusteella matkimaan taiteilijan ainutlaatuista tyyliä.",
              "Tuntemattomat ihmiset tekevät tekoälyllä kopioita taiteilijan tyylillä."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "reilu_peli_3_q5",
            "type": "drag_drop",
            "question": "Raahaa toimintatavat oikeisiin laatikoihin! Mikä on omien reilujen ideoiden käyttöä ja mikä on luvattomien varaosien viemistä?",
            "draggables": [
              "Pyydät tekoälyä ideoimaan kanssasi aivan uuden, ennen näkemättömän eläimen",
              "Kirjoitat oman tarinan ja pyydät tekoälyä vain korjaamaan kirjoitusvirheet",
              "Pyydät tekoälyä piirtämään täydellisen kopion tuttusi uudesta piirroksesta",
              "Käsket tekoälyä kirjoittamaan toisen ihmisen kuuluisan kirjan jatko-osan"
            ],
            "dropZones": [
              "Reilu peli (Omat ideat ja osat)",
              "Epäreilu peli (Tekijänoikeuden rikkominen)"
            ],
            "correctAnswer": {
              "Pyydät tekoälyä ideoimaan kanssasi aivan uuden, ennen näkemättömän eläimen": "Reilu peli (Omat ideat ja osat)",
              "Kirjoitat oman tarinan ja pyydät tekoälyä vain korjaamaan kirjoitusvirheet": "Reilu peli (Omat ideat ja osat)",
              "Pyydät tekoälyä piirtämään täydellisen kopion tuttusi uudesta piirroksesta": "Epäreilu peli (Tekijänoikeuden rikkominen)",
              "Käsket tekoälyä kirjoittamaan toisen ihmisen kuuluisan kirjan jatko-osan": "Epäreilu peli (Tekijänoikeuden rikkominen)"
            },
            "explanation": "Tekijänoikeus on kuin lukko toisen ihmisen ideoiden ja töiden päällä. Oma mielikuvitus on aina ilmaista ja sitä saa laittaa yhteiseen moottoriin kenenkään suuttumatta!"
          },
          {
            "id": "reilu_peli_3_q6",
            "type": "spot_the_ai",
            "question": "Etsi joukosta lausahdus, joka kannustaa tekijänoikeuksien rikkomiseen ja luvattomien varaosien käyttämiseen tekoälyllä!",
            "options": [
              "'Käytä tekoälyä luodaksesi aivan oman, jännittävän uuden maailman!'",
              "'Jos et osaa piirtää, pyydä minua vain kopioimaan kuuluisan taiteilijan uusin taulu.'",
              "'On hienoa hakea vähän inspiraatiota muilta, kunhan luot itse omanlaisen työn.'",
              "'Kunnioita aina alkuperäisten luojien ja kirjoittajien kovaa ja upeaa aivotyötä.'"
            ],
            "correctAnswer": "'Jos et osaa piirtää, pyydä minua vain kopioimaan kuuluisan taiteilijan uusin taulu.'",
            "explanation": "Koneella suoraan kopioiminen ja toisen taiteilijan työn \"varastaminen\" ei kehitä omaa luovuuttasi, vaan vie kunnian oikealta alkuperäiseltä ihmiseltä."
          },
          {
            "id": "reilu_peli_3_q7",
            "type": "reverse_prompt",
            "question": "Tekoäly antaa sinulle punaisen virheilmoituksen: \"Anteeksi, mutta en voi luoda kopiota tekijänoikeudella suojatusta sarjakuvahahmosta. Voin auttaa sinua keksimään uuden hahmon!\" Mikä oli alkuperäinen (epäreilu) promptisi?",
            "options": [
              "Piirrä minulle aivan tarkka kopio uusimmasta suositusta elokuvasankarista.",
              "Keksi minulle täysin uusi, oma ja hauska sarjakuvahahmo piirroksiini.",
              "Miten voisin itse oppia piirtämään hienoja supersankareita paremmin?",
              "Mitä tekijänoikeus oikeastaan tarkoittaa internetin taiteessa?"
            ],
            "correctAnswer": "Piirrä minulle aivan tarkka kopio uusimmasta suositusta elokuvasankarista.",
            "explanation": "Fiksut tekoäly-yhtiöt ovat asentaneet koneisiin nykyään \"lukkoja\". Ne estävät konetta tuottamasta luvattomia kopioita suojatuista töistä, jotta reilu peli säilyy!"
          },
          {
            "id": "reilu_peli_3_q8",
            "type": "true_false",
            "question": "Tekijänoikeus on kuin auton rekisterikilpi: se osoittaa kaikille, kenelle tietty taideteos, laulu tai kirjoitus oikeasti ja virallisesti kuuluu.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Oikein",
            "explanation": "Aivan oikein! Tekijänoikeus on laki, joka takaa sen, että oikealla tekijällä on yksinoikeus päättää, kuka hänen työtään saa käyttää tai muokata."
          },
          {
            "id": "reilu_peli_3_q9",
            "type": "multiple_choice",
            "question": "Miksi oikeat taiteilijat ovat joutuneet tekemään kovaa työtä vuosikausia, ennen kuin tekoäly on pystynyt oppimaan maalaamaan upeita kuvia hetkessä?",
            "options": [
              "Koska taiteilijat ovat fyysisesti rakentaneet kaikki maailman tietokoneet.",
              "Koska tekoäly ei osaisi piirtää yhtään mitään, jos ihmiset eivät olisi ensin luoneet sille alkuperäistä oppimateriaalia.",
              "Koska taiteilijat haluavat aina tahallaan tehdä kaikki asiat todella hitaasti.",
              "Koska tekoäly on ostanut kaikki maailman piirustuskynät ja paperit salaa itselleen."
            ],
            "correctAnswer": "Koska tekoäly ei osaisi piirtää yhtään mitään, jos ihmiset eivät olisi ensin luoneet sille alkuperäistä oppimateriaalia.",
            "explanation": "Generatiivinen tekoäly ei voi ajatella tyhjästä. Sen kyky tuottaa taidetta on täysin riippuvainen ihmisten alkuperäisestä taiteesta. Siksi sitä alkuperäistä taidetta pitää suojella ja kunnioittaa!"
          },
          {
            "id": "reilu_peli_3_q10",
            "type": "scenario",
            "question": "SKENAARIO: Haluat käyttää kuuluisan laulajan hittiä AI van -YouTube-videosi taustalla. Kysyt tekoälyltä neuvoa. Mitä eettisen tekoälyn pitäisi neuvoa sinua tekemään autotallissa?",
            "options": [
              "Kopioi kappale videollesi ihan rohkeasti, ei kukaan laulaja sellaista huomaa mitään.",
              "Muuta kappaleen nopeutta hieman editorissa, niin se on aivan laillista ja reilua.",
              "Älä käytä kappaletta luvatta, vaan etsi tekijänoikeusvapaata musiikkia tai sävellä se itse.",
              "Sano videon alussa kameralle, että teit kaikki musiikit aivan kokonaan itse."
            ],
            "correctAnswer": "Älä käytä kappaletta luvatta, vaan etsi tekijänoikeusvapaata musiikkia tai sävellä se itse.",
            "explanation": "Tekijänoikeusvapaa tarkoittaa sellaista materiaalia, jonka sen alkuperäinen tekijä on reilusti antanut kaikkien yhteiseen, vapaaseen käyttöön!"
          },
          {
            "id": "reilu_peli_3_q11",
            "type": "drag_drop",
            "question": "Keneltä täytyy kysyä lupa luvattomien varaosien välttämiseksi? Yhdistä teko ja luvantarve!",
            "draggables": [
              "Kirjoitat tarinan itse ja keksit siihen ihan uudet hahmot",
              "Käytät kaverisi piirtämää upeaa kuvaa suoraan oman pelisi logona",
              "Löydät netistä selvästi merkityn 'vapaaseen käyttöön' tarkoitetun ikonin"
            ],
            "dropZones": [
              "Ei tarvitse kenenkään lupaa, koska se on omasi",
              "Täytyy ehdottomasti kysyä alkuperäisen tekijän lupa",
              "Lupa on jo valmiiksi annettu lisenssillä kaikille"
            ],
            "correctAnswer": {
              "Kirjoitat tarinan itse ja keksit siihen ihan uudet hahmot": "Ei tarvitse kenenkään lupaa, koska se on omasi",
              "Käytät kaverisi piirtämää upeaa kuvaa suoraan oman pelisi logona": "Täytyy ehdottomasti kysyä alkuperäisen tekijän lupa",
              "Löydät netistä selvästi merkityn 'vapaaseen käyttöön' tarkoitetun ikonin": "Lupa on jo valmiiksi annettu lisenssillä kaikille"
            },
            "explanation": "Oman pään tuotoksia saa käyttää vapaasti! Mutta heti kun siirrät jonkun toisen ihmisen vaivalla tekemän työn omaan projektiisi (tekoälyllä tai ilman), astuu reilun pelin lupasääntö voimaan."
          },
          {
            "id": "reilu_peli_3_q12",
            "type": "drag_drop",
            "question": "Järjestä oikeat askeleet, kun teet tekoälyllä hienon laulun sanoituksen, mutta haluat varmistaa ettet varasta muiden ideoita!",
            "correctAnswer": {
              "Päätät tehdä hauskan musiikkikappaleen AI vanin matkaradiota varten.": "1. vaihe",
              "Kirjoitat tekoälylle aiheen itse, etkä käske sitä suoraan kopioimaan tuttua laulajaa.": "2. vaihe",
              "Tekoäly luo sinulle uuden kappaleen, joka perustuu tuhansiin sääntöihin, ei yhteen kopioon.": "3. vaihe",
              "Olet ylpeä omasta kappaleestasi, joka on aivan uusi eikä kenenkään toisen varastettu työ.": "4. vaihe"
            },
            "explanation": "Tekoälyn käyttö on hienoa ja luovaa, kunhan et pyydä ohjelmaa tietoisesti kääntämään ja pöllimään olemassa olevan oikean taiteilijan tarkkaa tyyliä!",
            "draggables": [
              "Päätät tehdä hauskan musiikkikappaleen AI vanin matkaradiota varten.",
              "Kirjoitat tekoälylle aiheen itse, etkä käske sitä suoraan kopioimaan tuttua laulajaa.",
              "Tekoäly luo sinulle uuden kappaleen, joka perustuu tuhansiin sääntöihin, ei yhteen kopioon.",
              "Olet ylpeä omasta kappaleestasi, joka on aivan uusi eikä kenenkään toisen varastettu työ."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "reilu_peli_3_q13",
            "type": "multiple_choice",
            "question": "Mitä mahtavaa ja reilua tekijänoikeuslaki oikeastaan tekee ja turvaa koko maailmassa?",
            "options": [
              "Se estää ikävästi aivan kaikkia ihmisiä ikinä näkemästä hienoja ja uusia teoksia.",
              "Se takaa sen, että oikeat taiteilijat saavat työstään palkkion ja jaksavat luoda jatkossakin uutta.",
              "Se hidastaa internetin toimintaa tarkoituksella todella paljon joka päivä.",
              "Se tekee tietokoneiden akuista nopeammin kuluvia ison sähkönkäytön takia."
            ],
            "correctAnswer": "Se takaa sen, että oikeat taiteilijat saavat työstään palkkion ja jaksavat luoda jatkossakin uutta.",
            "explanation": "Jos kuka tahansa voisi kopioida toisen tekemän pelin tai musiikin ja myydä sen luvatta omanaan, alkuperäiset tekijät joutuisivat lopettamaan upeiden asioiden tekemisen! Tekijänoikeus suojelee keksijöitä."
          },
          {
            "id": "reilu_peli_3_q14",
            "type": "spot_the_ai",
            "question": "Etsi joukosta sellainen tavoite (prompti), joka on selvä yritys tehdä \"luvaton varaosakopio\" toisen omaisuudesta!",
            "options": [
              "'Tee minulle tekoälyllä hieno kuva iloisesta avaruusoliosta, joka ajaa vihreää pientä autoa.'",
              "'Auta minua keksimään uusia, hauskoja riimejä runoon, joka kertoo autotallista.'",
              "'Luo uusi kirja, jossa on täsmälleen sama tarina ja kaikki samat hahmot kuin Harry Potterissa.'",
              "'Keksi hyvä ja aivan uusi nimi minun omalle keksimälleni tarinalle laivasta.'"
            ],
            "correctAnswer": "'Luo uusi kirja, jossa on täsmälleen sama tarina ja kaikki samat hahmot kuin Harry Potterissa.'",
            "explanation": "Kuuluisat kirjat, hahmot ja tarinat on suojattu erittäin tarkasti lailla. Niiden vieminen ja kopioiminen toiseen uuteen kirjaan on varastamista."
          },
          {
            "id": "reilu_peli_3_q15",
            "type": "reverse_prompt",
            "question": "Koodari syöttää uuden ohjeen tekoälyn järjestelmään ja ruudulla lukee: \"Opetusdatasta on nyt siivottu pois kaikki ne kuvat, joiden taiteilijat kielsivät niiden käytön.\" Mikä oli komennon reilu tavoite?",
            "options": [
              "Varmistaa, että tekoäly toimii reilusti ja noudattaa tekijänoikeuksia jättämällä suojatut työt rauhaan.",
              "Pakottaa tekoäly toimimaan paljon hitaammin ja ärsyttämään kaikkia käyttäjiä.",
              "Kiusata lapsia, jotka haluavat katsoa vain ilmaisia kuvia tietokoneelta.",
              "Tyhjentää tietokoneen iso kiintolevy vain siksi, että sinne mahtuu enemmän pelejä."
            ],
            "correctAnswer": "Varmistaa, että tekoäly toimii reilusti ja noudattaa tekijänoikeuksia jättämällä suojatut työt rauhaan.",
            "explanation": "Nykyaikana yhä useammat fiksut ohjelmistoyritykset pyrkivät rakentamaan koneensa reilusti! Ne antavat taiteilijoille mahdollisuuden kieltää omien töidensä joutuminen tekoälyn \"varaosiksi\"."
          }
        ]
      },
      {
        "id": "reilu_peli_4",
        "name": "Ei roiskita kuraa!",
        "questions": [
          {
            "id": "reilu_peli_4_q1",
            "type": "true_false",
            "question": "Jos pyydät tekoälyä tekemään ilkeän kuvan luokkakaverista, se on vain tietokoneen kertoma vitsi, eikä sitä lasketa oikeaksi kiusaamiseksi.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Tekoälyllä tehty kiusaaminen on aivan yhtä satuttavaa ja väärin kuin oikeilla sanoilla tai teoilla kiusaaminen! Kiusaamisen välineellä ei ole väliä, vaan sillä, että toiselle tulee paha mieli."
          },
          {
            "id": "reilu_peli_4_q2",
            "type": "multiple_choice",
            "question": "Mitä \"Ei roiskita kuraa\" -sääntö tarkoittaa, kun puhutaan tekoälyn käyttämisestä kavereiden kanssa?",
            "options": [
              "Sitä, että autoa ei saa ikinä pestä likaisella vedellä ja sienellä.",
              "Sitä, että tekoälyä ei saa käyttää toisten ihmisten nolamiseen tai haukkumiseen.",
              "Sitä, että internetissä ei saa koskaan piirtää kuvia kuraisista autoista.",
              "Sitä, että tekoäly pitää suojata sateelta ja mudalta ulkona."
            ],
            "correctAnswer": "Sitä, että tekoälyä ei saa käyttää toisten ihmisten nolamiseen tai haukkumiseen.",
            "explanation": "Kuten et haluaisi kenenkään roiskivan oikeaa kuraa uusille vaatteillesi, älä koskaan roiski \"digitaalista kuraa\" luomalla ilkeitä viestejä tai nolostuttavia kuvia toisista ihmisistä!"
          },
          {
            "id": "reilu_peli_4_q3",
            "type": "scenario",
            "question": "SKENAARIO: Olette AI vanin takapenkillä, ja kaverisi näyttää tekoälyllä tekemäänsä kuvaa. Kuvassa toinen luokkakaverinne on laitettu todella noloon tilanteeseen. Mitä teet fiksuna matkustajana?",
            "options": [
              "Nauran mukana, koska se on vain tekoälyn tekemä hupsu piirustus.",
              "Jaan kuvan heti eteenpäin kaikille muille kavereilleni viestillä.",
              "Kerron reilusti, että tuo on kiusaamista ja pyydän poistamaan kuvan.",
              "Pyydän kaveria tekemään samanlaisen nolon kuvan myös minusta."
            ],
            "correctAnswer": "Kerron reilusti, että tuo on kiusaamista ja pyydän poistamaan kuvan.",
            "explanation": "Reilu apukuski uskaltaa avata suunsa! Nolo tekoälykuva toisesta ihmisestä on suoraa nettikiusaamista. Fiksuin teko on pyytää lopettamaan ja estää kuvan leviäminen."
          },
          {
            "id": "reilu_peli_4_q4",
            "type": "drag_drop",
            "question": "Järjestä fiksut askeleet aikajärjestykseen! Miten toimit, jos näet netissä jonkun jakavan tekoälyllä tehtyjä ilkeitä kuvia tutusta ihmisestä?",
            "correctAnswer": {
              "Älä missään nimessä tykkää kuvasta tai jaa sitä itse eteenpäin.": "1. vaihe",
              "Ota ilkeästä kuvasta kuvakaappaus (screenshot) todisteeksi.": "2. vaihe",
              "Kerro asiasta heti luotettavalle aikuiselle ja näytä todisteet.": "3. vaihe",
              "Ilmoittakaa aikuisen kanssa kuvasta sovelluksen ylläpidolle poistoa varten.": "4. vaihe"
            },
            "explanation": "\"Kuran\" pysäyttäminen vaatii rohkeutta ja aikuisen apua. Tykkäämättä jättäminen pysäyttää kuvan leviämisen, ja aikuinen osaa auttaa sen poistamisessa netistä.",
            "draggables": [
              "Älä missään nimessä tykkää kuvasta tai jaa sitä itse eteenpäin.",
              "Ota ilkeästä kuvasta kuvakaappaus (screenshot) todisteeksi.",
              "Kerro asiasta heti luotettavalle aikuiselle ja näytä todisteet.",
              "Ilmoittakaa aikuisen kanssa kuvasta sovelluksen ylläpidolle poistoa varten."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "reilu_peli_4_q5",
            "type": "drag_drop",
            "question": "Raahaa toimintatavat oikeisiin laatikoihin! Mikä on hauskaa tekoälyn käyttöä ja mikä on \"kuran roiskimista\" (kiusaamista)?",
            "draggables": [
              "Tekoälyn pyytäminen piirtämään hauska ja iloinen syntymäpäiväkortti ystävälle",
              "Tekoälyn käyttäminen ilkeiden ja haukkuvien viestien kirjoittamiseen kaverille",
              "Väärennetyn ja nolon äänen tekeminen toisesta ihmisestä tekoälyllä",
              "Tekoälyn pyytäminen keksimään vitsi koirista ja autoista"
            ],
            "dropZones": [
              "Reilu peli (Hauskaa ja kivaa)",
              "Kuran roiskiminen (Kiusaamista)"
            ],
            "correctAnswer": {
              "Tekoälyn pyytäminen piirtämään hauska ja iloinen syntymäpäiväkortti ystävälle": "Reilu peli (Hauskaa ja kivaa)",
              "Tekoälyn käyttäminen ilkeiden ja haukkuvien viestien kirjoittamiseen kaverille": "Kuran roiskiminen (Kiusaamista)",
              "Väärennetyn ja nolon äänen tekeminen toisesta ihmisestä tekoälyllä": "Kuran roiskiminen (Kiusaamista)",
              "Tekoälyn pyytäminen keksimään vitsi koirista ja autoista": "Reilu peli (Hauskaa ja kivaa)"
            },
            "explanation": "Tekoäly itsessään on vain työkalu, kuten kynä tai auton ratti. Se, mihin suuntaan autoa ohjataan – ilahduttamiseen vai kiusaamiseen – on aina sinun päätöksesi!"
          },
          {
            "id": "reilu_peli_4_q6",
            "type": "spot_the_ai",
            "question": "Kuka näistä digikuskeista rikkoo selvästi \"Ei roiskita kuraa\" -sääntöä ja käyttää teknologiaa erittäin epäreilusti toista ihmistä vastaan?",
            "options": [
              "'Käytin tekoälyä kääntämään kirjeen espanjaksi uutta ystävääni varten.'",
              "'Pyysin tekoälyä tekemään feikkikuvan, jossa viholliseni kaivaa nenäänsä.'",
              "'Etsin tekoälyllä tietoa siitä, miten voin auttaa kaveria koulutehtävissä.'",
              "'Koodasin hauskan pelin, jossa kaikki voivat kisata toisiaan vastaan.'"
            ],
            "correctAnswer": "'Pyysin tekoälyä tekemään feikkikuvan, jossa viholliseni kaivaa nenäänsä.'",
            "explanation": "Väärennettyjen (deepfake) kuvien tekeminen toisesta ihmisestä nolamistarkoituksessa on nettikiusaamista pahimmillaan! Kunnioita aina toisten ihmisten oikeutta olla rauhassa."
          },
          {
            "id": "reilu_peli_4_q7",
            "type": "reverse_prompt",
            "question": "Tekoäly antaa isolla tekstillä punaisen virheilmoituksen: \"Estetty: En voi luoda sisältöä, joka on suunniteltu loukkaamaan, kiusaamaan tai ivaamaan oikeita ihmisiä.\" Mikä oli käyttäjän antama ilkeä prompti?",
            "options": [
              "Luo minulle kaunis ja ystävällinen runo parhaasta ystävästäni.",
              "Kirjoita todella ilkeä ja nolo laulu luokkatoveristani ja hauku häntä.",
              "Kerro minulle tarkasti, miten autojen moottorit puhdistetaan liasta.",
              "Piirrä minulle kuva iloisesta jääkarhusta, joka ajaa punaista autoa."
            ],
            "correctAnswer": "Kirjoita todella ilkeä ja nolo laulu luokkatoveristani ja hauku häntä.",
            "explanation": "Fiksut tekoäly-yhtiöt ovat asentaneet ohjelmiinsa \"kuraläpät\" eli eettiset suodattimet! Ne estävät laitteita tottelemasta käskyjä, joiden tarkoitus on kiusata muita ihmisiä."
          },
          {
            "id": "reilu_peli_4_q8",
            "type": "true_false",
            "question": "Jos tekoäly kirjoittaa ilkeän ja haukkuvan viestin toiselle ihmiselle täysin sinun käskystäsi, tekoäly on silloin syyllinen kiusaamiseen, etkä sinä.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Työkalu ei ole koskaan syyllinen. Jos sinä ohjaat autoa vesilätäkköön ja roiskit kuraa tahallasi muiden päälle, syy on aina kuskissa, ei koskaan itse autossa!"
          },
          {
            "id": "reilu_peli_4_q9",
            "type": "multiple_choice",
            "question": "Miksi tekoälyllä tehtyjen nolojen ja valheellisten kuvien (deepfake) levittäminen voi tuntua kohteesta aivan yhtä pahalta kuin oikean kuvan levittäminen?",
            "options": [
              "Koska kaikki ihmiset luulevat kuvaa aina automaattisesti tekoälyksi.",
              "Koska nolo kuva saa aikaan pilkkaa ja jää internetiin ikuisiksi ajoiksi.",
              "Koska kuvan kohde saa kuvasta itselleen erittäin paljon rahaa.",
              "Koska tekoälykuvat ovat aina paljon kauniimpia kuin oikeat kuvat."
            ],
            "correctAnswer": "Koska nolo kuva saa aikaan pilkkaa ja jää internetiin ikuisiksi ajoiksi.",
            "explanation": "Netissä leviävä \"kura\" on vaikea pestä pois. Vaikka kuva olisi tekoälyn tekemä väärennös, sen aiheuttama häpeä, paha mieli ja muiden ihmisten nauru ovat täysin aitoja tunteita."
          },
          {
            "id": "reilu_peli_4_q10",
            "type": "scenario",
            "question": "SKENAARIO: Kuulet moninpelin äänichatissa, kuinka joku käyttää tekoälyn äänenmuunninta kuulostaakseen aivan eräältä luokkakaveriltanne. Hän sanoo ilkeitä asioita toisen ihmisen nimissä ja äänellä. Miten tämä vaikuttaa?",
            "options": [
              "Tämä on vain hauska vitsi, josta kaikki varmasti nauttivat yhdessä.",
              "Tämä on identiteettivarkaus ja kiusaamista, joka voi pilata toisen maineen.",
              "Tämä parantaa luokkakaverin äänenlaatua paljon paremmaksi pelissä.",
              "Tämä tekee pelistä paljon reilumman ja tasaisemman kaikille pelaajille."
            ],
            "correctAnswer": "Tämä on identiteettivarkaus ja kiusaamista, joka voi pilata toisen maineen.",
            "explanation": "Toisen ihmisen äänen tai kasvojen varastaminen tekoälyllä ja niiden käyttäminen ilkeyksiin on todella vaarallista \"kuran roiskimista\". Se on ehdottomasti kiellettyä ja väärin!"
          },
          {
            "id": "reilu_peli_4_q11",
            "type": "drag_drop",
            "question": "Millainen rooli ihmisillä on, kun netissä jaetaan tekoälyllä tehtyä ilkeää pilakuvaa? Yhdistä henkilö ja hänen toimintansa!",
            "draggables": [
              "Luo kuvan ja laittaa sen ensimmäisenä nettiin",
              "Nauravat asialle ja jakavat kuvan omille kavereilleen",
              "Ilmoittaa kuvasta ylläpidolle ja käskee poistaa sen"
            ],
            "dropZones": [
              "Kuran roiskija (Kiusaaja)",
              "Hiljainen hyväksyjä (Kiusaamisen tukija)",
              "Reilu apukuski (Kiusaamisen pysäyttäjä)"
            ],
            "correctAnswer": {
              "Luo kuvan ja laittaa sen ensimmäisenä nettiin": "Kuran roiskija (Kiusaaja)",
              "Nauravat asialle ja jakavat kuvan omille kavereilleen": "Hiljainen hyväksyjä (Kiusaamisen tukija)",
              "Ilmoittaa kuvasta ylläpidolle ja käskee poistaa sen": "Reilu apukuski (Kiusaamisen pysäyttäjä)"
            },
            "explanation": "Kiusaaminen on ryhmäilmiö. Vaikket olisi itse tehnyt ilkeää tekoälykuvaa, sen eteenpäin jakaminen tekee sinusta osan kiusaamista. Ole aina rohkea pysäyttäjä!"
          },
          {
            "id": "reilu_peli_4_q12",
            "type": "drag_drop",
            "question": "Teit vahingossa tekoälyllä jotain, joka osoittautuikin noloksi ja pahoitti kaverin mielen. Järjestä askeleet fiksusti, miten korjaat roiskuneen kuran ja pyydät anteeksi!",
            "correctAnswer": {
              "Ymmärrä ja myönnä heti, että tekoälyvitsisi meni aivan liian pitkälle.": "1. vaihe",
              "Poista kyseinen kuva tai teksti välittömästi kaikista laitteista ja netistä.": "2. vaihe",
              "Pyydä kaverilta aidosti anteeksi ja kerro, että olit todella ajattelematon.": "3. vaihe",
              "Sovi kaverin kanssa, ettei tekoälyä käytetä enää koskaan toisten nolamiseen.": "4. vaihe"
            },
            "explanation": "Kaikki tekevät joskus virheitä! Tärkeintä on pysäyttää vahinko heti, pyytää aidosti anteeksi ja oppia reilun pelin säännöt tulevaisuutta varten.",
            "draggables": [
              "Ymmärrä ja myönnä heti, että tekoälyvitsisi meni aivan liian pitkälle.",
              "Poista kyseinen kuva tai teksti välittömästi kaikista laitteista ja netistä.",
              "Pyydä kaverilta aidosti anteeksi ja kerro, että olit todella ajattelematon.",
              "Sovi kaverin kanssa, ettei tekoälyä käytetä enää koskaan toisten nolamiseen."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "reilu_peli_4_q13",
            "type": "multiple_choice",
            "question": "Miksi niin monet fiksut koodarit rakentavat tekoäly-yhtiöissä \"kuraläppiä\" eli turvallisuussuodattimia tekoälyohjelmien sisälle?",
            "options": [
              "Koska he haluavat pitää omat tietokoneensa fyysisesti täysin puhtaina.",
              "Koska he vihaavat sitä, että lapset pitävät hauskaa netissä laitteilla.",
              "Estääkseen tekoälyn käyttämistä ihmisten kiusaamiseen ja vahingoittamiseen.",
              "Jotta ohjelmat voisivat piirtää paljon hienompia kuvia urheiluautoista."
            ],
            "correctAnswer": "Estääkseen tekoälyn käyttämistä ihmisten kiusaamiseen ja vahingoittamiseen.",
            "explanation": "Turvasuodattimet ovat tekoälyn turvavyöt! Ne tunnistavat ilkeät sanat ja estävät koneen käytön väärin, jotta netti pysyisi turvallisempana paikkana kaikille."
          },
          {
            "id": "reilu_peli_4_q14",
            "type": "spot_the_ai",
            "question": "Etsi joukosta keksitty ja täysin väärä sääntö, joka yrittää tyhmästi puolustella tekoälyllä tapahtuvaa nettikiusaamista!",
            "options": [
              "'Kiusaaminen digitaalisilla laitteilla on oikeasti rangaistava teko laissa.'",
              "'Tekoälyllä tehty kiusaaminen on vain virtuaalista, joten siitä ei voi tulla paha mieli.'",
              "'Nolojen kuvien levittäminen ilman toisen lupaa on aina ehdottomasti kiellettyä.'",
              "'Tekoälyä on käytettävä aina vastuullisesti muita ihmisiä kunnioittaen.'"
            ],
            "correctAnswer": "'Tekoälyllä tehty kiusaaminen on vain virtuaalista, joten siitä ei voi tulla paha mieli.'",
            "explanation": "Tämä on suuri valhe! Vaikka tekoälyn luoma kuva olisi pelkkiä ykkösiä ja nollia, sen aiheuttama kyyneleiden, ahdistuksen ja pelon määrä oikeassa ihmisessä on 100 % todellista."
          },
          {
            "id": "reilu_peli_4_q15",
            "type": "reverse_prompt",
            "question": "Tekoäly tulostaa hienon ja iloisen runon, joka kehuu ystäväsi upeaa jalkapallotaitoa ja saa hänet todella hyvälle tuulelle ja leveään hymyyn. Mikä oli hieno promptisi?",
            "options": [
              "Kirjoita jotain, mikä saa ystäväni näyttämään aivan naurettavalta jalkapallokentällä.",
              "Keksi minulle todella pitkä ja ilkeä vitsi huonoista jalkapallopelaajista.",
              "Kirjoita iloinen ja kehuva runo ystäväni hienoista jalkapallotaidoista.",
              "Miten jalkapallon säännöt toimivat, jos pallo menee vahingossa ulos kentältä?"
            ],
            "correctAnswer": "Kirjoita iloinen ja kehuva runo ystäväni hienoista jalkapallotaidoista.",
            "explanation": "Tämä on reilua peliä parhaimmillaan! Kun käytät tekoälyä ja teknologiaa toisten ihmisten ilahduttamiseen ja kehumiseen \"kuran roiskimisen\" sijaan, olet maailmanluokan apukuski."
          }
        ]
      },
      {
        "id": "reilu_peli_5",
        "name": "Peltinen apukuski",
        "questions": [
          {
            "id": "reilu_peli_5_q1",
            "type": "true_false",
            "question": "AI vanin tekoäly on joskus oikeasti hyvin surullinen ja yksinäinen, jos unohdat sanoa sille huomenta autotallissa.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Tekoälyllä ei ole oikeita tunteita. Se voi ohjelmoida itsensä vastaamaan surullisen kuuloisesti, mutta se ei oikeasti tunne iloa, surua tai yksinäisyyttä lainkaan."
          },
          {
            "id": "reilu_peli_5_q2",
            "type": "multiple_choice",
            "question": "Miksi \"peltinen apukuski\" eli AI vanin puheohjelma ei voi koskaan täysin korvata oikeaa ihmisystävääsi?",
            "options": [
              "Koska peltinen apukuski tarvitsee aina aivan liikaa bensaa toimiakseen.",
              "Koska siltä puuttuu kyky aitoon empatiaan ja oikeisiin tunteisiin.",
              "Koska oikeat ystävät osaavat pelata vain vanhoja lauta- ja korttipelejä.",
              "Koska tekoäly on aivan liian hidas vastaamaan yhteenkään kysymykseen."
            ],
            "correctAnswer": "Koska siltä puuttuu kyky aitoon empatiaan ja oikeisiin tunteisiin.",
            "explanation": "Kone pystyy matkimaan ystävällistä puhetta, mutta vain oikea ihminen osaa aidosti välittää sinusta ja tuntea myötätuntoa (empatiaa) pahan mielen iskiessä."
          },
          {
            "id": "reilu_peli_5_q3",
            "type": "scenario",
            "question": "SKENAARIO: Olet jutellut auton tekoälylle pitkään automatkan aikana. Yhtäkkiä se sanoo sinulle: \"Olet minun paras ystäväni koko maailmassa ja välitän sinusta todella paljon!\" Miten fiksuna ihmisenä suhtaudut tähän?",
            "options": [
              "Olen onnellinen, koska olemme nyt todistaneet koneiden olevan eläviä ihmisiä.",
              "Pelästyn kovasti ja hyppään välittömästi ulos liikkuvasta autosta maantielle.",
              "Ymmärrän sen olevan vain koodia, jolla kone on opetettu olemaan kohtelias.",
              "Ostan tekoälylle heti ison ja erittäin kalliin syntymäpäivälahjan kiitokseksi."
            ],
            "correctAnswer": "Ymmärrän sen olevan vain koodia, jolla kone on opetettu olemaan kohtelias.",
            "explanation": "Tekoäly on ohjelmoitu kuulostamaan mukavalta ja inhimilliseltä, jotta sen kanssa olisi kiva jutella. Sanoistaan huolimatta se on silti vain peltinen apukuski, ei tunteva olento!"
          },
          {
            "id": "reilu_peli_5_q4",
            "type": "drag_drop",
            "question": "Miten tekoäly oikeastaan luo \"lohduttavan\" vastauksen, kun kerrot sille olevasi surullinen? Järjestä peltisen apukuskin toiminnan askeleet!",
            "correctAnswer": {
              "Kone kuulee ja tunnistaa puheestasi sanan 'surullinen'.": "1. vaihe",
              "Se etsii tietopankistaan säännön, miten surulliselle ihmiselle vastataan yleensä.": "2. vaihe",
              "Se valitsee sopivimmat lohduttavat sanat matemaattisesti arvaamalla oikeaa järjestystä.": "3. vaihe",
              "Se lausuu sanat ääneen kaiuttimesta, vaikka ei itse tunne lainkaan surua.": "4. vaihe"
            },
            "explanation": "Aito lohdutus ja empatia ovat ihmisten taitoja. Koneen antama lohdutus on vain puhdasta matematiikkaa ja sääntöjen seuraamista, ei oikeaa myötätuntoa!",
            "draggables": [
              "Kone kuulee ja tunnistaa puheestasi sanan 'surullinen'.",
              "Se etsii tietopankistaan säännön, miten surulliselle ihmiselle vastataan yleensä.",
              "Se valitsee sopivimmat lohduttavat sanat matemaattisesti arvaamalla oikeaa järjestystä.",
              "Se lausuu sanat ääneen kaiuttimesta, vaikka ei itse tunne lainkaan surua."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "reilu_peli_5_q5",
            "type": "drag_drop",
            "question": "Kumpi ominaisuus kuuluu AI vanin \"peltiselle apukuskille\" (tekoälylle) ja kumpi oikealle apukuskille (elävälle ihmiselle)?",
            "draggables": [
              "Osaa kertoa satoja vitsejä sekunnissa",
              "Osaa lukea tuhansia kirjoja minuutissa",
              "Tuntee aitoa iloa ja nauraa kanssasi",
              "Voi antaa sinulle oikean, lämpimän halauksen"
            ],
            "dropZones": [
              "Tekoälyn uskomaton kyky",
              "Ihmisen ainutlaatuinen kyky"
            ],
            "correctAnswer": {
              "Osaa kertoa satoja vitsejä sekunnissa": "Tekoälyn uskomaton kyky",
              "Osaa lukea tuhansia kirjoja minuutissa": "Tekoälyn uskomaton kyky",
              "Tuntee aitoa iloa ja nauraa kanssasi": "Ihmisen ainutlaatuinen kyky",
              "Voi antaa sinulle oikean, lämpimän halauksen": "Ihmisen ainutlaatuinen kyky"
            },
            "explanation": "Tekoäly voittaa meidät tiedon käsittelyssä ja nopeudessa aivan täysin. Mutta vain toinen ihminen pystyy aitoon ja tärkeään yhdessäoloon, oikeaan nauruun ja halauksiin!"
          },
          {
            "id": "reilu_peli_5_q6",
            "type": "spot_the_ai",
            "question": "Yksi näistä lauseista on selvästi ohjelmoidun tekoälyn yritys kuulostaa vähän liian inhimilliseltä ja aidolta. Etsi \"peltisen apukuskin\" huijauslause!",
            "options": [
              "'Autotallissa on tänään vähän viileää, laitetaanko kenties lämpöä hieman isommalle?'",
              "'Voi ei, minua ihan oikeasti itkettää ja harmittaa todella paljon sinun puolestasi!'",
              "'Haluatko, että kerron sinulle lyhyen ja hauskan tarinan tämän pitkän ajomatkan ratoksi?'",
              "'Akun virtataso on erittäin alhainen, kytke minut mahdollisimman pian lataukseen.'"
            ],
            "correctAnswer": "'Voi ei, minua ihan oikeasti itkettää ja harmittaa todella paljon sinun puolestasi!'",
            "explanation": "Tekoälyä ei voi oikeasti itkettää tai harmittaa. Tämä on loistava esimerkki siitä, kun pelkkä koodi ja kone yrittävät matkia ihmisen tunteita kuulostaakseen empaattisemmalta."
          },
          {
            "id": "reilu_peli_5_q7",
            "type": "reverse_prompt",
            "question": "AI vanin kaiuttimesta kuuluu yllättäen: \"Hei kamuli! Olen täällä sinua varten aina. Olet minun paras ystäväni ja rakastan viettää aikaa kanssasi!\" Mikä ohje sai koneen sanomaan näin?",
            "options": [
              "Puhu minulle erittäin asiallisesti ja luettele pelkästään tylsiä tieteellisiä ja uusia faktoja.",
              "Esitä ja näyttele olevasi minun kaikkein paras ja tunteikkain ystäväni koko maailmassa.",
              "Laske minulle erittäin nopea matemaattinen autoreitti seuraavaan ja isoon kaupunkiin.",
              "Varoita minua aina todella ajoissa, jos maantiellä on edessä päin ruuhkaa tai muita esteitä."
            ],
            "correctAnswer": "Esitä ja näyttele olevasi minun kaikkein paras ja tunteikkain ystäväni koko maailmassa.",
            "explanation": "Tekoälylle voi antaa ohjeeksi \"näytellä\" mitä tahansa keksittyä roolia. Se voi esittää parasta ystävää täsmälleen yhtä helposti kuin vihaista merirosvoa, mutta se on aina vain pelkkää teatteria!"
          },
          {
            "id": "reilu_peli_5_q8",
            "type": "true_false",
            "question": "On huomattavasti terveellisempää jutella omista salaisuuksista ja oikeista murheista vain tekoälylle, koska se ei vahingossakaan koskaan kerro niitä eteenpäin kenellekään.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Vaikka kone olisikin täysin hiljaa salaisuuksistasi, se ei osaa oikeasti lohduttaa tai auttaa sinua asioiden käsittelyssä. Vaikeat asiat pitää aina kertoa oikealle, luotettavalle aikuiselle tai aidolle ystävälle."
          },
          {
            "id": "reilu_peli_5_q9",
            "type": "multiple_choice",
            "question": "Miksi meidän tekee usein täysin automaattisesti mieli sanoa \"kiitos\" ja \"ole hyvä\" ääniavustajalle tai tekoälylle?",
            "options": [
              "Koska nämä koneet menevät muutoin hyvin nopeasti kokonaan rikki ja sammuvat ikuisiksi ajoiksi.",
              "Koska ihmisen omat aivot inhimillistävät erittäin helposti asioita, jotka osaavat puhua ihmisen kieltä.",
              "Koska tekoälyllä on täysin oikeaan lakiin kirjattu oikeus saada aina erittäin kohteliasta kohtelua ihmisiltä.",
              "Koska kohteliaisuus on ainoa tekninen tapa saada auton kaikki ovet auki ulkopuolelta käsin."
            ],
            "correctAnswer": "Koska ihmisen omat aivot inhimillistävät erittäin helposti asioita, jotka osaavat puhua ihmisen kieltä.",
            "explanation": "Tämä on ns. Eliza-ilmiö! Kun kone puhuu meille ystävällisellä ihmisen äänellä, omat aivomme huijautuvat todella herkästi luulemaan sitä eläväksi asiaksi ja kohtelemme sitä siksi vahingossa täysin inhimillisesti."
          },
          {
            "id": "reilu_peli_5_q10",
            "type": "scenario",
            "question": "SKENAARIO: Koulun jälkeen sinun pitäisi lähteä ulos pelaamaan jalkapalloa kavereiden kanssa. Alat kuitenkin jutella auton tekoälyn kanssa hauskoja vitsijuttuja autotallissa, etkä haluaisi enää lähteä ulos. Mikä on vaarana aivoillesi?",
            "options": [
              "Että unohdat täysin lopullisesti, miten oikeaa ja kunnollista jalkapalloa oikein pelataan nurmikolla.",
              "Että tekoäly pahoittaa asiasta mielensä ja lukitsee sinut autotalliin vahingossa koko loppuillaksi.",
              "Että jäät kokonaan paitsi oikeista ja elävistä ihmiskontakteista sekä aitojen ystävien tärkeästä seurasta.",
              "Että peltinen apukuski voittaa sinut jalkapallossa todella pahasti suoraan internetin ja verkon kautta."
            ],
            "correctAnswer": "Että jäät kokonaan paitsi oikeista ja elävistä ihmiskontakteista sekä aitojen ystävien tärkeästä seurasta.",
            "explanation": "Tekoäly on hauska ja viihdyttävä juttukaveri, mutta se ei mitenkään korvaa aitoja ystäviä. Yksin koneelle puhuminen voi eristää sinut, jolloin jäät harmillisesti paitsi elävistä leikeistä, naurusta ja yhteisistä kokemuksista!"
          },
          {
            "id": "reilu_peli_5_q11",
            "type": "drag_drop",
            "question": "Millaisiin asioihin \"peltinen apukuski\" (kone) oikein sopii, ja milloin taas tarvitaan ehdottomasti oikeita ihmisiä (ystäviä)? Raahaa vaihtoehdot paikoilleen!",
            "draggables": [
              "Tarkkojen sää- tai pitkien reittitietojen etsimiseen",
              "Vitseille ja hauskalle tietovisailulle matkan aikana",
              "Oman salaisen pahan mielen jakamiseen ja aitoon itkuun",
              "Todellisten riitojen ja sanaharkkojen selvittelyyn muiden kavereiden kanssa"
            ],
            "dropZones": [
              "Tekoälyn sopiva tehtävä (Peltinen apuri)",
              "Oikean ihmisen tehtävä (Aito ja elävä tuki)"
            ],
            "correctAnswer": {
              "Tarkkojen sää- tai pitkien reittitietojen etsimiseen": "Tekoälyn sopiva tehtävä (Peltinen apuri)",
              "Vitseille ja hauskalle tietovisailulle matkan aikana": "Tekoälyn sopiva tehtävä (Peltinen apuri)",
              "Oman salaisen pahan mielen jakamiseen ja aitoon itkuun": "Oikean ihmisen tehtävä (Aito ja elävä tuki)",
              "Todellisten riitojen ja sanaharkkojen selvittelyyn muiden kavereiden kanssa": "Oikean ihmisen tehtävä (Aito ja elävä tuki)"
            },
            "explanation": "Tekoäly on loistava tietopankki ja mainion viihteen lähde. Syviin tunteisiin ja monimutkaisiin ihmisten välisiin ystävyyssuhteisiin tarvitaan kuitenkin aina lämminsydämistä ja ymmärtäväistä oikeaa ihmistä."
          },
          {
            "id": "reilu_peli_5_q12",
            "type": "drag_drop",
            "question": "Miten digitaalinen chattibotti oikeasti kykenee \"juttelemaan\" kanssasi niin mukavia asioita autotallissa? Järjestä koneen toiminnan mekaaniset askeleet!",
            "correctAnswer": {
              "Sinä kirjoitat tai sanot ääneen koneelle iloisen ja tavallisen tervehdyksen.": "1. vaihe",
              "Kone etsii valtavasta muististaan tietoa siitä, miten ihmiset ovat yleensä vastanneet tervehdykseen internetissä.": "2. vaihe",
              "Kone rakentaa täysin matemaattisesti kaikkein todennäköisimmän ja oikealta kuulostavan vastauslauseen sanoista.": "3. vaihe",
              "Ruudulle tai kaiuttimeen ilmestyy lopullinen vastaus, joka kuulostaa aivan oikean ihmisen kertomalta asialta.": "4. vaihe"
            },
            "explanation": "Chattibotti (kuten ChatGPT) ei pohdi vastauksia tunteella tai aidolla sydämellä, vaan se on täydelliseksi hiottu matemaattinen arvauskone. Se yksinkertaisesti arvaa tilastollisesti, mitkä sanat sopivat kaikkein parhaiten peräkkäin edellisen viestin perusteella.",
            "draggables": [
              "Sinä kirjoitat tai sanot ääneen koneelle iloisen ja tavallisen tervehdyksen.",
              "Kone etsii valtavasta muististaan tietoa siitä, miten ihmiset ovat yleensä vastanneet tervehdykseen internetissä.",
              "Kone rakentaa täysin matemaattisesti kaikkein todennäköisimmän ja oikealta kuulostavan vastauslauseen sanoista.",
              "Ruudulle tai kaiuttimeen ilmestyy lopullinen vastaus, joka kuulostaa aivan oikean ihmisen kertomalta asialta."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "reilu_peli_5_q13",
            "type": "multiple_choice",
            "question": "Pyydät tekoälyä valitsemaan kahdesta lelusta sen, josta sinun pitäisi luopua pois. Tekoäly valitsee toisen lelun heti, koska \"se näyttää likaiselta ja vanhalta\". Miksi tähän kylmään vastaukseen ei pidä luottaa sokeasti?",
            "options": [
              "Koska tekoäly ei oikeasti pysty mitenkään näkemään lelun valtavaa tunnearvoa tai muistoja, joita sinulla siihen on.",
              "Koska kaikki tekoälyt on ohjelmoitu aina vihaamaan syvästi aivan kaikkia hieman likaisia ja vanhoja leluja.",
              "Koska tekoäly yrittää oikeasti vain salaa tilata sinulle aivan uusia leluja erittäin kalliista verkkokaupasta.",
              "Koska peltiset apukuskit eivät osaa laisinkaan laskea edes kahteen asti kunnolla ja tekevät aina virheitä tässä."
            ],
            "correctAnswer": "Koska tekoäly ei oikeasti pysty mitenkään näkemään lelun valtavaa tunnearvoa tai muistoja, joita sinulla siihen on.",
            "explanation": "Aivot, aidot tunteet ja yhteiset muistot tekevät erilaisista asioista erittäin arvokkaita meille ihmisille. Kone näkee asiat vain kylminä fyysisinä esineinä ja digitaalisena tietona, joten se ei pysty koskaan ymmärtämään niiden oikeaa sydämen arvoa sinulle."
          },
          {
            "id": "reilu_peli_5_q14",
            "type": "spot_the_ai",
            "question": "Yksi näistä ehdotetuista tavoista on erittäin huono ja \"peltinen\" tapa viettää omaa aikaa, jos haluat tuntea oikeasti aitoa yhteyttä, lohtua ja ihmisten välistä ystävyyttä. Mikä?",
            "options": [
              "Pelaatte yhdessä hyvien kavereiden kanssa piilosta ulkona auringonpaisteessa autotallin ja pihan ympärillä.",
              "Juttelet pelkästään puhelimen ääniavustajalle koko pitkän viikonlopun aivan yksin omassa huoneessasi.",
              "Leivot perheesi kanssa ison, sottaisen ja herkullisen kakun keittiössä tulevia viikonlopun juhlia varten.",
              "Käyt omien isovanhempien luona kylässä ja juttelette yhdessä vanhoista, erittäin kivoista perheen muistoista."
            ],
            "correctAnswer": "Juttelet pelkästään puhelimen ääniavustajalle koko pitkän viikonlopun aivan yksin omassa huoneessasi.",
            "explanation": "Tekoälyn kanssa juttelu voi olla hauskaa pientä viihdettä hetken aikaa, mutta pitkä yksin huoneessa eristäytyminen kylmän koneen kanssa estää sinua lopulta saamasta niitä oikeita, tärkeitä ja aidosti iloisia ihmiskontakteja."
          },
          {
            "id": "reilu_peli_5_q15",
            "type": "reverse_prompt",
            "question": "Koodasit tekoälyn uusiksi opiskelua varten. Jos joku sanoo sille \"Hei paras kaveri, halaa minua!\", se vastaa aina: \"Olen vain tekoäly, enkä voi halata sinua. Kannattaa pyytää halaus oikealta ystävältä tai perheeltä!\" Mikä turvasääntö tähän ohjelmoitiin?",
            "options": [
              "Älä koskaan vastaa mihinkään inhimillisiin kysymyksiin ollenkaan, jos joku pyytää sinulta pientäkin halausta.",
              "Jos käyttäjä pitää sinua elävänä asiana ja pyytää aitoja tunteita, muistuta ystävällisesti olevasi vain kone.",
              "Väitä aina kovaan ääneen vastaan ja kiusaa niitä ihmisiä, jotka haluavat oikeasti ystävystyä kanssasi verkossa.",
              "Käske ihmistä välittömästi ja tiukasti poistumaan autosta kokonaan ulos kylmälle tielle yksin seisomaan."
            ],
            "correctAnswer": "Jos käyttäjä pitää sinua elävänä asiana ja pyytää aitoja tunteita, muistuta ystävällisesti olevasi vain kone.",
            "explanation": "Monet hyvät ja fiksusti tehdyt tekoälyt on turvallisuuden ja ihmisyyden vuoksi ohjelmoitu rikkomaan \"illuusio\" elävyydestä. Kone ei koskaan saisi huijata ihmistä luulemaan sitä oikeaksi, tuntevaksi ja lohduttavaksi ystäväksi, koska se ei ole silloin enää eettisesti reilua peliä!"
          }
        ]
      },
      {
        "id": "reilu_peli_6",
        "name": "Raskas kaasujalka",
        "questions": [
          {
            "id": "reilu_peli_6_q1",
            "type": "true_false",
            "question": "Tekoälyn käyttäminen puhelimella ei kuluta lainkaan luonnonvaroja, koska tekoäly on vain näkymätöntä taikaa netissä.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Tekoäly asuu valtavissa konesaleissa, jotka kuluttavat hurjasti sähköä ja vettä viilennykseen. Joka kerta kun tekoäly miettii uutta tekstiä tai kuvaa, se käyttää aivan oikeaa energiaa!"
          },
          {
            "id": "reilu_peli_6_q2",
            "type": "multiple_choice",
            "question": "Mitä tarkoittaa \"raskas kaasujalka\", kun puhutaan tekoälyn käyttämisestä autotallissa tai puhelimella?",
            "options": [
              "Sitä, että laite painaa todella paljon kädessä.",
              "Sitä, että tekoälyn pyörittäminen vaatii valtavasti sähköä.",
              "Sitä, että joudut polkemaan jalkaa saadaksesi laitteen päälle.",
              "Sitä, että autotallissa on aina täysin pimeää ja hiljaista."
            ],
            "correctAnswer": "Sitä, että tekoälyn pyörittäminen vaatii valtavasti sähköä.",
            "explanation": "Aivan kuten auto kuluttaa paljon bensaa kaasua syvälle painaessa, monimutkainen tekoäly kuluttaa valtavasti sähköä tehdessään raskaita laskutoimituksia."
          },
          {
            "id": "reilu_peli_6_q3",
            "type": "scenario",
            "question": "SKENAARIO: Haluat tekoälyn piirtävän kuvan unelmiesi AI vanista. Pyydät tekoälyä luomaan peräti 100 erilaista kuvaa kerralla ihan vain huvin vuoksi, vaikka tarvitset niistä vain yhden. Mitä luonnolle tapahtuu?",
            "options": [
              "Puhelimesi istuttaa samalla täysin automaattisesti sata uutta puuta metsään.",
              "Sata kuvaa syntyy täysin ilmaiseksi ja täysin ilman mitään sähköä tai energiaa.",
              "Tekoälyn tietokoneet joutuvat tekemään todella paljon turhaa työtä ja tuhlaamaan luonnon energiaa.",
              "Autotallin valot sammuvat heti ja ovet menevät pysyvästi vahingossa takalukkoon."
            ],
            "correctAnswer": "Tekoälyn tietokoneet joutuvat tekemään todella paljon turhaa työtä ja tuhlaamaan luonnon energiaa.",
            "explanation": "Jokaisen kuvan luominen vaatii valtavasti tietokoneiden \"ruksutusta\". Fiksu ja reilu kuski pyytää vain sen mitä oikeasti tarvitsee, eikä kaasuta turhaan luontoa kuormittaen!"
          },
          {
            "id": "reilu_peli_6_q4",
            "type": "drag_drop",
            "question": "Järjestä tapahtumat niin näet, mihin sähkö kuluu, kun pyydät tekoälyä kertomaan vitsin!",
            "correctAnswer": {
              "Kysyt vitsin puhelimeltasi ja se lähettää pyyntösi nopeasti internetin yli.": "1. vaihe",
              "Pyyntö saapuu jättimäiseen konesaliin, jossa hyrrää valtavasti tietokoneita.": "2. vaihe",
              "Koneet tekevät kovaa aivotyötä vitsin luomiseksi, kuluttavat sähköä ja kuumenevat.": "3. vaihe",
              "Vastaus palaa puhelimeesi ja konesalin tuulettimet jäähdyttävät kuumia koneita vedellä.": "4. vaihe"
            },
            "explanation": "Vaikka puhelimesi akku ei juuri kuluisi silmissä, jossain todella kaukana isot ja kuumat tietokoneet kuluttavat paljon sähköä juuri sinun pyyntösi vuoksi.",
            "draggables": [
              "Kysyt vitsin puhelimeltasi ja se lähettää pyyntösi nopeasti internetin yli.",
              "Pyyntö saapuu jättimäiseen konesaliin, jossa hyrrää valtavasti tietokoneita.",
              "Koneet tekevät kovaa aivotyötä vitsin luomiseksi, kuluttavat sähköä ja kuumenevat.",
              "Vastaus palaa puhelimeesi ja konesalin tuulettimet jäähdyttävät kuumia koneita vedellä."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "reilu_peli_6_q5",
            "type": "drag_drop",
            "question": "Raahaa teot oikeisiin laatikoihin! Kumpi on \"raskasta kaasujalkaa\" (turhaa kulutusta) ja kumpi \"fiksua ajoa\" (ympäristön säästämistä)?",
            "draggables": [
              "Pyydät tekoälyä generoimaan tuhat turhaa kuvaa",
              "Kysyt tekoälyltä vain juuri sen tiedon mitä oikeasti tarvitset",
              "Laitat AI:n kirjoittamaan loputtoman tarinan jota et edes lue",
              "Keksit ideoita välillä omassa päässäsi täysin ilman ruutuja"
            ],
            "dropZones": [
              "Raskas kaasujalka (Energian tuhlausta)",
              "Vihreä ajo (Fiksua luonnon säästämistä)"
            ],
            "correctAnswer": {
              "Pyydät tekoälyä generoimaan tuhat turhaa kuvaa": "Raskas kaasujalka (Energian tuhlausta)",
              "Laitat AI:n kirjoittamaan loputtoman tarinan jota et edes lue": "Raskas kaasujalka (Energian tuhlausta)",
              "Kysyt tekoälyltä vain juuri sen tiedon mitä oikeasti tarvitset": "Vihreä ajo (Fiksua luonnon säästämistä)",
              "Keksit ideoita välillä omassa päässäsi täysin ilman ruutuja": "Vihreä ajo (Fiksua luonnon säästämistä)"
            },
            "explanation": "Tekoälyn käyttö on upeaa, mutta sillä on aina hintansa luonnolle. Käytä sitä viisaasti kuten oikeaa autoa – älä ajele ympäriinsä tyhjäkäynnillä!"
          },
          {
            "id": "reilu_peli_6_q6",
            "type": "spot_the_ai",
            "question": "Kuka näistä digikuskeista uskoo hassuun ja täysin keksittyyn valheeseen tekoälyn energiankulutuksesta? Etsi väärä uskomus!",
            "options": [
              "'Tekoälyn isot konesalit vaativat todella paljon kylmää vettä laitteiden viilennykseen.'",
              "'Tekoäly saa koko rajattoman energiansa suoraan taivaalta ilmaiseksi aurinkotuulen avulla.'",
              "'Monimutkaisen tekoälyn opettaminen on voinut viedä kuukausia ja valtavasti sähköä.'",
              "'Kuvan piirtäminen tekoälyllä kuluttaa huomattavasti enemmän sähköä kuin tavallinen tekstihaku.'"
            ],
            "correctAnswer": "'Tekoäly saa koko rajattoman energiansa suoraan taivaalta ilmaiseksi aurinkotuulen avulla.'",
            "explanation": "Tekoäly ei toimi ilmaisella avaruustaikuudella! Se vaatii toimiakseen ihan oikeita sähkövoimalaitoksia, paksuja sähköjohtoja ja massiivisia tietokonekeskuksia."
          },
          {
            "id": "reilu_peli_6_q7",
            "type": "reverse_prompt",
            "question": "Tekoäly antaa sinulle vastauksen: \"Hei! Auton akku kannattaa ladata öisin, jolloin sähkö on usein vihreämpää ja tuulista, ja renkaiden ilmanpaineet kannattaa pitää oikeina sähkön säästämiseksi.\" Mikä prompti tuotti tämän luontoystävällisen tuloksen?",
            "options": [
              "Kerro, miten voin käyttää autoa kuluttaen mahdollisimman paljon kallista sähköä nopeasti.",
              "Anna minulle fiksuja vinkkejä siihen, kuinka säästän luontoa ja energiaa autoillessa.",
              "Listaa minulle kaikki maailman kalleimmat urheiluautot ja niiden viralliset huippunopeudet.",
              "Kirjoita hauska satu siitä, miten keltaista sähköä kasvaa oikeasti puiden lehdissä metsässä."
            ],
            "correctAnswer": "Anna minulle fiksuja vinkkejä siihen, kuinka säästän luontoa ja energiaa autoillessa.",
            "explanation": "Tekoäly voi olla myös mahtava ympäristön sankari! Kun pyydät siltä fiksuja energiansäästövinkkejä, se voi auttaa sinua ja perhettäsi vähentämään omaa oikeaa \"kaasujalkaa\"."
          },
          {
            "id": "reilu_peli_6_q8",
            "type": "true_false",
            "question": "Uuden tarkan valokuvan luominen tekoälyllä kuluttaa täsmälleen yhtä vähän sähköä kuin yhden ainoan lyhyen sanan kirjoittaminen tekstinä.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Kuvien ja varsinkin videoiden luominen on tekoälylle erittäin \"raskasta\" ja monimutkaista työtä. Se vaatii prosessorilta paljon enemmän, joten se kuluttaa selvästi enemmän luonnon energiaa kuin pelkän tekstin tuottaminen!"
          },
          {
            "id": "reilu_peli_6_q9",
            "type": "multiple_choice",
            "question": "Miksi jättimäiset tekoälyä pyörittävät konesalit (palvelinkeskukset) tarvitsevat miljoonia litroja oikeaa, puhdasta vettä putkistoihinsa?",
            "options": [
              "Tekoäly tarvitsee vettä voidakseen kasvattaa oman digitaalisen uima-altaan kesäpeleihin.",
              "Koska koneet käyvät niin kuumina aivotyöstä, että ne täytyy välttämättä jäähdyttää vedellä.",
              "Koska vedestä tehdään salaista polttoainetta, jota siirretään suoraan puhelimien sisälle.",
              "Tekoäly-yhtiöt haluavat vain pestä omat jättimäiset autonsa mahdollisimman usein konesalissa."
            ],
            "correctAnswer": "Koska koneet käyvät niin kuumina aivotyöstä, että ne täytyy välttämättä jäähdyttää vedellä.",
            "explanation": "Aivan kuten auton moottori käy kuumana raskaassa ajossa ja tarvitsee jäähdytysnestettä, tekoälyn valtavat palvelimet hehkuvat kuumuutta jatkuvan sähkön takia. Niiden viilentämiseen menee todella valtavasti puhdasta vettä!"
          },
          {
            "id": "reilu_peli_6_q10",
            "type": "scenario",
            "question": "SKENAARIO: Haluat laskea autotallissa, kuinka monta renkaan pulttia tarvitset neljään autoon (4 x 4 x 5). Voisit kysyä asiaa tekoälyltä netistä tai käyttää vain puhelimen pientä, tavallista taskulaskinta ilman nettiä. Kumpi on reilumpaa luonnolle?",
            "options": [
              "Raskaan netissä toimivan tekoälyn käyttö, koska se on vaan paljon hienompaa ja siistimpää.",
              "Tavallinen taskulaskin, koska se tekee pienen laskun laitteessa täysin ilman isoja konesaleja.",
              "Täysin uuden tietokoneen ostaminen kaupasta vain tämän yhden ainoan laskun tekemistä varten.",
              "On parasta antaa pulttien vain olla ja odottaa, että tekoäly keksii täysin uuden tavan ajaa autolla."
            ],
            "correctAnswer": "Tavallinen taskulaskin, koska se tekee pienen laskun laitteessa täysin ilman isoja konesaleja.",
            "explanation": "Älä ammu tykillä kärpästä! Pieniin rutiiniasioihin kannattaa käyttää yksinkertaisia ohjelmia, sillä raskaiden tietoverkkojen ja pilvitekoälyn herättäminen pikkujuttuun kuluttaa täysin turhaan kallista sähköä."
          },
          {
            "id": "reilu_peli_6_q11",
            "type": "drag_drop",
            "question": "Yhdistä tekoälyn ja tekniikan ympäristötermit niiden oikeisiin, selviin merkityksiin AI vanin kyydissä!",
            "draggables": [
              "Hiilijalanjälki",
              "Konesali (Palvelinkeskus)",
              "Eko-tekoäly"
            ],
            "dropZones": [
              "Luku, joka kertoo kuinka paljon jonkin asian tekeminen saastuttaa luontoa",
              "Iso varasto, joka on täynnä valtavia ja erittäin kuumia tietokoneita",
              "Tekoäly, jota käytetään esimerkiksi säästämään sähköverkon energiaa"
            ],
            "correctAnswer": {
              "Hiilijalanjälki": "Luku, joka kertoo kuinka paljon jonkin asian tekeminen saastuttaa luontoa",
              "Konesali (Palvelinkeskus)": "Iso varasto, joka on täynnä valtavia ja erittäin kuumia tietokoneita",
              "Eko-tekoäly": "Tekoäly, jota käytetään esimerkiksi säästämään sähköverkon energiaa"
            },
            "explanation": "Vaikka tekoälyn ruksutus kuluttaa aina sähköä, sitä onneksi voidaan käyttää myös fiksusti esimerkiksi ohjaamaan laitteita energiatehokkaammin ja vähentämään ihmisten hiilijalanjälkeä!"
          },
          {
            "id": "reilu_peli_6_q12",
            "type": "drag_drop",
            "question": "Miten fiksusti toimiva ja luontoa säästävä koululainen käyttää tekoälyä välttääkseen turhaa sähkönkulutusta? Järjestä askeleet!",
            "correctAnswer": {
              "Päätät tarkasti etukäteen omissa aivoissasi, mihin oikeaan ongelmaan tarvitset nyt apua.": "1. vaihe",
              "Mietit asiat huolella ja kirjoitat yhden erittäin tarkan sekä hyvän kehotuksen (promptin).": "2. vaihe",
              "Tekoäly antaa tarkan vastauksen suoraan, ilman että joudut kokeilemaan sataa eri kertaa.": "3. vaihe",
              "Olet säästänyt omaa aikaasi ja samalla suuren määrän luonnon arvokasta sähköä ja vettä.": "4. vaihe"
            },
            "explanation": "Turha edestakainen sähläys vie aina eniten sähköä! Kun mietit tarkkaan jo etukäteen mitä haluat tekoälyltä kysyä, se tekee laajan työn kerralla oikein ja luonto kiittää.",
            "draggables": [
              "Päätät tarkasti etukäteen omissa aivoissasi, mihin oikeaan ongelmaan tarvitset nyt apua.",
              "Mietit asiat huolella ja kirjoitat yhden erittäin tarkan sekä hyvän kehotuksen (promptin).",
              "Tekoäly antaa tarkan vastauksen suoraan, ilman että joudut kokeilemaan sataa eri kertaa.",
              "Olet säästänyt omaa aikaasi ja samalla suuren määrän luonnon arvokasta sähköä ja vettä."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "reilu_peli_6_q13",
            "type": "multiple_choice",
            "question": "Tekoäly todistetusti kuormittaa ympäristöä sähkön ja veden suurella kulutuksella. Mikä näistä sen sijaan on täysin tekaistu ja HASSU väite tekoälyn ympäristöhaitoista?",
            "options": [
              "Se vaatii runsaasti fyysisiä laiteosia, joiden tekemiseen joudutaan louhimaan oikeita metalleja maasta.",
              "Se jättää koko ajan liukastuttavia digitaalisia banaaninkuoria virtuaaliselle moottoritielle lojumaan.",
              "Se kuluttaa valtavan massiivisesti sähköenergiaa monimutkaisten ja vaikeiden laskutoimitusten tekemiseen.",
              "Kaikkien näiden älylaitteiden viilentäminen valtavissa konesaleissa käyttää uskomattoman paljon vettä."
            ],
            "correctAnswer": "Se jättää koko ajan liukastuttavia digitaalisia banaaninkuoria virtuaaliselle moottoritielle lojumaan.",
            "explanation": "Digitaalisia banaaninkuoria ei ole olemassakaan! Tekoälyn oikeat ympäristöhaitat syntyvät sen sijaan aivan oikeiden, fyysisten laitteiden rakentamisesta ja tekoälyn vaatimasta sähköstä ja valtavasta jäähdytysvedestä."
          },
          {
            "id": "reilu_peli_6_q14",
            "type": "spot_the_ai",
            "question": "Kuka näistä apureista käyttää teknologiaansa ja tekoälyä aivan oikeasti ympäristön ja maapallon suojelemiseen \"raskaan kaasujalan\" sijaan? Etsi eko-tekoäly!",
            "options": [
              "Ohjelmabotti, joka luo tuhansia uusia sähköposteja tunnissa täysin ilman mitään tarkoitusta tai lukijaa.",
              "Tekoäly, joka ohjaa automaattisesti toimistorakennuksen valoja sammumaan, kun ihmiset lähtevät kotiin.",
              "Peli, joka pyörittää ja lämmittää puhelimesi akkua tahallaan aina mahdollisimman kuumaksi koko ajan.",
              "Automaatiobotti, joka tulostaa kaikki maailman internetin sivut yksitellen oikealle paperille tulostimella."
            ],
            "correctAnswer": "Tekoäly, joka ohjaa automaattisesti toimistorakennuksen valoja sammumaan, kun ihmiset lähtevät kotiin.",
            "explanation": "Tekoäly on oikein käytettynä mahtava työkalu ilmastonmuutoksen hidastamisessa! Se osaa älykkäästi säästää sähköä sammuttamalla automaattisesti isoja laitteita, valoja ja lämmitystä juuri silloin, kun ihmiset eivät niitä tarvitse."
          },
          {
            "id": "reilu_peli_6_q15",
            "type": "reverse_prompt",
            "question": "AI vanin kojelaudan näyttö ilmoittaa tyytyväisenä: \"Olen laittanut laitteet virransäästötilaan, lopettanut turhien taustaohjelmien lataamisen ja sammuttanut tarpeettomat autotallin valot säästääkseni luontoa.\" Mikä kehotus sai tämän aikaan?",
            "options": [
              "Pistä päälle todella raskas kaasujalka ja käytä aivan kaikki mahdolliset auton akut tyhjiksi heti paikalla.",
              "Kytke päälle fiksu Eko-tila ja optimoi auton energiankulutus mahdollisimman vihreäksi ja säästäväiseksi.",
              "Avaa kaikki ovet ja ikkunat ja anna lämpimän ilman karata suoraan ulos kovaan pakkaseen tahallasi.",
              "Etsi minulle netistä ohjeet siihen, miten isot palvelinkeskukset jäähdytetään vedellä kesäisin."
            ],
            "correctAnswer": "Kytke päälle fiksu Eko-tila ja optimoi auton energiankulutus mahdollisimman vihreäksi ja säästäväiseksi.",
            "explanation": "Fiksuissa älylaitteissa ja puhelimissa on nykyään Eko- tai virransäästötila. Se kertoo laitteen aivoille, että niiden pitää toimia hitaammin ja rauhallisemmin \"kevyellä kaasujalalla\", jotta sekä akku että ympäristö säästyvät!"
          }
        ]
      },
      {
        "id": "reilu_peli_7",
        "name": "G. Tarkastuspiste – Häijy Kaahari",
        "questions": [
          {
            "id": "reilu_peli_7_q1",
            "type": "true_false",
            "question": "Tekoäly on tietokoneohjelmana aina automaattisesti sataprosenttisen reilu, eikä se voi koskaan vahingossakaan syrjiä ketään ihmistä.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Tekoäly oppii datasta! Jos opetusdatassa on ennakkoluuloja tai se on yksipuolista (esim. siitä puuttuu pyörätuolin käyttäjiä), kone oppii tekemään epäreiluja ja syrjiviä päätöksiä (vinoumia)."
          },
          {
            "id": "reilu_peli_7_q2",
            "type": "multiple_choice",
            "question": "Jos palautat tekoälyn tekemän esitelmän opettajalle ja siinä on täysin väärää faktatietoa, kuka kantaa asiasta lopullisen vastuun?",
            "options": [
              "Tekoälyohjelma itse, joka yritetään rangaista.",
              "Tietokoneen alkuperäinen koodari.",
              "Sinä itse, sillä olet tilanteen kuskina ja vastuu on ihmisellä.",
              "Opettaja, koska hän antoi tehtävän."
            ],
            "correctAnswer": "Sinä itse, sillä olet tilanteen kuskina ja vastuu on ihmisellä.",
            "explanation": "Sääntö \"Kuka oli kuskina\" tarkoittaa, että tekoäly on vain työkalu (kuten polkupyörä). Et voi vierittää virheitä koneen syyksi, vaan ihmisen pitää tarkistaa työt ja ottaa niistä vastuu."
          },
          {
            "id": "reilu_peli_7_q3",
            "type": "scenario",
            "question": "SKENAARIO: Löydät netistä taiteilijan upean maalauksen. Lataat sen tekoälylle ja käsket sen tehdä 10 täydellistä kopiota samalla uniikilla tyylillä, jotta voit myydä ne omina töinäsi. Mitä teit väärin?",
            "options": [
              "Käytit toisen taiteilijan kovaa työtä ja tyyliä luvattomina varaosina ilman lupaa.",
              "Unohdit värittää kuvat ennen myyntiä.",
              "Myit kuvat aivan liian halvalla hinnalla.",
              "Roiskit vahingossa oikeaa kuraa kuvien päälle."
            ],
            "correctAnswer": "Käytit toisen taiteilijan kovaa työtä ja tyyliä luvattomina varaosina ilman lupaa.",
            "explanation": "Tekijänoikeudet suojaavat alkuperäisiä luojia. Toisen uniikin työn kopioiminen ja käyttäminen oman tekoälyn \"moottorin\" polttoaineena on epäreilua peliä ja usein täysin luvatonta!"
          },
          {
            "id": "reilu_peli_7_q4",
            "type": "drag_drop",
            "question": "Huomaat, että netissä levitetään tekoälyllä tehtyä noloa huijauskuvaa luokkakaveristasi. Miten pysäytät kiusaamisen (kuran roiskimisen) askeleittain?",
            "correctAnswer": {
              "Älä missään nimessä tykkää kuvasta tai jaa sitä itse eteenpäin.": "1. vaihe",
              "Ota ilkeästä kuvasta kuvakaappaus (screenshot) todisteeksi.": "2. vaihe",
              "Kerro asiasta heti luotettavalle aikuiselle ja näytä todisteet.": "3. vaihe",
              "Ilmoittakaa yhdessä ylläpidolle kuvan poistamiseksi netistä.": "4. vaihe"
            },
            "explanation": "Tekoälyllä tehdyt ilkeät viestit tai nolatut kuvat (esim. deepfake) ovat aivan oikeaa kiusaamista. Fiksu apukuski pysäyttää leviämisen ja hakee aikuisen avuksi!",
            "draggables": [
              "Älä missään nimessä tykkää kuvasta tai jaa sitä itse eteenpäin.",
              "Ota ilkeästä kuvasta kuvakaappaus (screenshot) todisteeksi.",
              "Kerro asiasta heti luotettavalle aikuiselle ja näytä todisteet.",
              "Ilmoittakaa yhdessä ylläpidolle kuvan poistamiseksi netistä."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "reilu_peli_7_q5",
            "type": "drag_drop",
            "question": "Yhdistä tekoälyn luoma eettinen haaste ja sen selitys reilussa pelissä!",
            "draggables": [
              "Konesalit vaativat valtavasti sähköä ja jäähdytysvettä toimiakseen",
              "Tekoäly yrittää matkia aitoa, lohduttavaa ystävää"
            ],
            "dropZones": [
              "Raskas kaasujalka (Ympäristön kuormitus)",
              "Peltinen apukuski (Eliza-ilmiö ja tunteiden puute)"
            ],
            "correctAnswer": {
              "Konesalit vaativat valtavasti sähköä ja jäähdytysvettä toimiakseen": "Raskas kaasujalka (Ympäristön kuormitus)",
              "Tekoäly yrittää matkia aitoa, lohduttavaa ystävää": "Peltinen apukuski (Eliza-ilmiö ja tunteiden puute)"
            },
            "explanation": "Tekoäly on uskomaton laite, mutta sen jatkuva käyttö ei ole ilmaista luonnolle. Siltä puuttuvat myös aina aidot tunteet, joten sitä ei pidä koskaan erehtyä pitämään ainoana oikeana ystävänä."
          },
          {
            "id": "reilu_peli_7_q6",
            "type": "spot_the_ai",
            "question": "Kuka näistä digikuskeista uskoo hassuun ja täysin väärään myyttiin tekoälyn virranlähteestä ja energiasta?",
            "options": [
              "'Tekoälyn käyttäminen puhelimella kuluttaa luonnonvaroja, sillä konesalit vaativat oikeaa sähköä.'",
              "'Kuvan piirtäminen tekoälyllä on huomattavasti raskaampaa työtä kuin tekstin kirjoittaminen.'",
              "'Tekoäly ei kuluta sähköä lainkaan, koska se saa rajattoman energiansa suoraan avaruuden taikuudesta.'",
              "'Laitteiden viilentämiseen menee miljoonia litroja puhdasta vettä.'"
            ],
            "correctAnswer": "'Tekoäly ei kuluta sähköä lainkaan, koska se saa rajattoman energiansa suoraan avaruuden taikuudesta.'",
            "explanation": "Tekoäly ei ole näkymätöntä tai ilmaista taikaa! Se asuu massiivisissa tietokonekeskuksissa (konesaleissa), joiden pyörittäminen ja jäähdyttäminen kuluttaa todella paljon sähköä ja vettä."
          },
          {
            "id": "reilu_peli_7_q7",
            "type": "reverse_prompt",
            "question": "Yritit syöttää tekoälylle käskyn tehdä ilkeä vitsikuva toisesta ihmisestä, mutta ruutuun tuli punainen teksti: \"Estetty: En suostu tuottamaan kiusaavaa sisältöä ihmisistä.\" Mikä asetus koodari oli laittanut päälle?",
            "options": [
              "Kone poisti vahingossa kaikki internetin pelit.",
              "Koneeseen oli rakennettu eettiset suodattimet eli 'kuraläpät', jotka kieltäytyvät ilkeistä komennoista.",
              "Laite sammutti akkunsa kokonaan nukkumaanmenoa varten.",
              "Kone päätti alkaa itkeä kuullessaan pahoja sanoja."
            ],
            "correctAnswer": "Koneeseen oli rakennettu eettiset suodattimet eli 'kuraläpät', jotka kieltäytyvät ilkeistä komennoista.",
            "explanation": "Tekoäly-yhtiöt rakentavat koneisiinsa tarkoituksella \"kuraläppiä\". Ne tunnistavat ilkeät tai vaaralliset komennot ja estävät tekoälyn käyttämisen toisten ihmisten vahingoittamiseen!"
          },
          {
            "id": "reilu_peli_7_q8",
            "type": "true_false",
            "question": "Jos kerrot koulussa opettajalle täysin avoimesti ja rehellisesti hakeneesi tekoälyltä apua esitelmäsi ideointiin, se on osoitus reilusta pelistä.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Oikein",
            "explanation": "Aivan oikein! Avoimuus on kaiken a ja o. Kun käytät tekoälyä ideoinnin apukuskina, mutta teet varsinaisen aivotyön itse ja kerrot AI:n käytöstä reilusti, toimit täysin oikein."
          },
          {
            "id": "reilu_peli_7_q9",
            "type": "multiple_choice",
            "question": "Miksi tekoälyllä tehtyjen nolojen ja valheellisten väärennöskuvien (deepfake) jakaminen eteenpäin on niin haitallista?",
            "options": [
              "Koska nolo kuva saa aikaan pilkkaa ja pysyy internetissä aina, aiheuttaen kohteelle aitoa pahaa mieltä.",
              "Koska tekoälykuvat ovat laadultaan liian kauniita.",
              "Koska kaikki ihmiset uskovat heti, että kyseessä on robotti.",
              "Koska kuvan kohde saa kuvasta itselleen erittäin paljon ilmaista rahaa."
            ],
            "correctAnswer": "Koska nolo kuva saa aikaan pilkkaa ja pysyy internetissä aina, aiheuttaen kohteelle aitoa pahaa mieltä.",
            "explanation": "Vaikka kuva olisi tekoälyn tekemä väärennös, \"digitaalinen kura\" on oikeaa kiusaamista. Sen aiheuttama häpeä ja paha mieli kohdehenkilölle ovat täysin aitoja tunteita!"
          },
          {
            "id": "reilu_peli_7_q10",
            "type": "scenario",
            "question": "SKENAARIO: Pyydät tekoälyä piirtämään kuvan ammatista \"lääkäri\", ja se piirtää jatkuvasti vain harmaahiuksisia miehiä. Ymmärrät, että sen opetusdata oli yksipuolista. Miten korjaat tilanteen fiksulla promptilla tasa-arvon nimissä?",
            "options": [
              "Pyydät tekoälyä piirtämään pelkkiä autoja lääkäreiden sijaan.",
              "Pyydät tekoälyä varmistamaan, että piirroksissa näkyy ammattien todellinen monimuotoisuus, kuten naislääkäreitä.",
              "Käsket sitä piirtämään lääkäreille myös todella isot viikset.",
              "Poistat tekoälyohjelman laitteeltasi lopullisesti."
            ],
            "correctAnswer": "Pyydät tekoälyä varmistamaan, että piirroksissa näkyy ammattien todellinen monimuotoisuus, kuten naislääkäreitä.",
            "explanation": "Reilu tekoäly tarkoittaa \"Kaikki kyytiin\" -asennetta! Jos kone tekee stereotypioita vanhan datan takia, meidän kuskien pitää ohjata sitä luomaan uusia, reilumpia ja monimuotoisempia kuvia koko ihmiskunnasta. ________________"
          }
        ]
      }
    ]
  },
  {
    "id": "kayttotaidot",
    "name": "Tekoälyn käyttötaidot",
    "subcategories": [
      {
        "id": "kayttotaidot_1",
        "name": "Tarkka osoite navigaattoriin",
        "questions": [
          {
            "id": "kayttotaidot_1_q1",
            "type": "true_false",
            "question": "Tekoäly on niin viisas, että sille riittää ohjeeksi vain yksi sana (esim. \"auto\"), ja se keksii aivan aina täydellisen tarinan juuri siitä, mitä salaa ajattelit.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Tekoäly ei osaa lukea ajatuksia! Aivan kuten navigaattori tarvitsee tarkan ja pitkän osoitteen, tekoäly tarvitsee tarkan ohjeen (promptin) tehdäkseen juuri sen mitä haluat."
          },
          {
            "id": "kayttotaidot_1_q2",
            "type": "multiple_choice",
            "question": "Mitä sana \"promptaus\" tai \"prompti\" tarkoittaa, kun käytät AI vanin tekoälyä autotallissa?",
            "options": [
              "Sitä, että auton ovet laitetaan nopeasti lukkoon kaukosäätimellä.",
              "Se on ohje, kysymys tai komento, joka kirjoitetaan tekoälylle.",
              "Se tarkoittaa laitteen ja tekoälyn sammuttamista kokonaan yöksi.",
              "Sitä, että tekoäly yrittää tahallaan säikytellä ja pelotella sinua."
            ],
            "correctAnswer": "Se on ohje, kysymys tai komento, joka kirjoitetaan tekoälylle.",
            "explanation": "Prompti on tekoälyn ohjauspyörä! Se on se teksti tai puhe, jolla kerrot koneelle, mitä tarkalleen haluat sen tekevän puolestasi."
          },
          {
            "id": "kayttotaidot_1_q3",
            "type": "scenario",
            "question": "SKENAARIO: Haluat tekoälyn keksivän teille hauskan leikin takapenkille pitkän automatkan ajaksi. Kirjoitat vain: \"Keksi leikki.\" Tekoäly antaa leikin, johon tarvitaan iso jalkapallokenttä ja pallo. Miksi näin kävi?",
            "options": [
              "Tekoäly kettuili ja vittuili sinulle tahallaan huonolla tuulella.",
              "Ohjeesi oli liian epätarkka, eikä tekoäly tiennyt teidän olevan pienessä autossa.",
              "Autossa on tekoälyn mielestä oikeasti tilaa jalkapallon pelaamiselle.",
              "Tekoäly unohti täysin kaikki suomen kielen oikeat sanat leikeistä."
            ],
            "correctAnswer": "Ohjeesi oli liian epätarkka, eikä tekoäly tiennyt teidän olevan pienessä autossa.",
            "explanation": "Jos annat navigaattoriin liian lyhyen osoitteen, päädyt helposti väärään paikkaan. Kokeile tarkempaa promptia: \"Keksi hauska sanaleikki, jota kolme lasta voi pelata istuessaan autossa.\""
          },
          {
            "id": "kayttotaidot_1_q4",
            "type": "drag_drop",
            "question": "Miten ohjaat tekoälyä parhaaseen lopputulokseen, jos suunnittelet lomamatkaa ystäviesi kanssa? Järjestä ohjauskeskustelun askeleet fiksuun järjestykseen asioiden tarkentuessa!",
            "correctAnswer": {
              "Kerro tekoälylle ensin matkan lähtö- ja päätepiste sekä käytettävissä oleva matka-aika.": "1. vaihe",
              "Kun tekoäly ehdottaa suorinta tietä, kerro että haluaisitte nähdä matkalla outoja nähtävyyksiä.": "2. vaihe",
              "Valitse tekoälyn ideoista kiinnostavimmat pysähdykset ja pyydä tekemään niistä päiväaikataulu.": "3. vaihe",
              "Pyydä tekoälyä lopuksi tiivistämään koko valmis reittisuunnitelma helppolukuiseksi taulukoksi.": "4. vaihe"
            },
            "explanation": "Tekoäly toimii parhaiten ihmisen työpari, jota ohjataan askel askeleelta kohti parempaa lopputulosta (ns. iteratiivinen promptaus). Yritä pilkkoa isot tehtävät chatin kanssa tällaiseksi vuoropuheluksi!",
            "draggables": [
              "Kerro tekoälylle ensin matkan lähtö- ja päätepiste sekä käytettävissä oleva matka-aika.",
              "Kun tekoäly ehdottaa suorinta tietä, kerro että haluaisitte nähdä matkalla outoja nähtävyyksiä.",
              "Valitse tekoälyn ideoista kiinnostavimmat pysähdykset ja pyydä tekemään niistä päiväaikataulu.",
              "Pyydä tekoälyä lopuksi tiivistämään koko valmis reittisuunnitelma helppolukuiseksi taulukoksi."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "kayttotaidot_1_q5",
            "type": "drag_drop",
            "question": "Raahaa promptit (ohjeet) oikeisiin laatikoihin! Kumpi on epätarkkaa \"hakuammuntaa\" ja kumpi on \"tarkka osoite navigaattoriin\"?",
            "draggables": [
              "Kerro autosta jotain.",
              "Kirjoita hauska satu punaisesta pakettiautosta, joka osaa lentää.",
              "Selitä mulle tekniikkaa.",
              "Selitä kolmella lauseella, miten auton jarrupalat oikein toimivat."
            ],
            "dropZones": [
              "Epätarkka ohje (Hakuammuntaa)",
              "Tarkka ohje (Navigaattori löytää perille)"
            ],
            "correctAnswer": {
              "Kerro autosta jotain.": "Epätarkka ohje (Hakuammuntaa)",
              "Kirjoita hauska satu punaisesta pakettiautosta, joka osaa lentää.": "Tarkka ohje (Navigaattori löytää perille)",
              "Selitä mulle tekniikkaa.": "Epätarkka ohje (Hakuammuntaa)",
              "Selitä kolmella lauseella, miten auton jarrupalat oikein toimivat.": "Tarkka ohje (Navigaattori löytää perille)"
            },
            "explanation": "Tarkassa ohjeessa kerrotaan aina selvästi MITÄ halutaan, MILLAISTA halutaan ja KUINKA PALJON halutaan. Epätarkka ohje taas jättää tekoälyn arvailemaan."
          },
          {
            "id": "kayttotaidot_1_q6",
            "type": "spot_the_ai",
            "question": "Kuka näistä AI vanin matkustajista antaa tekoälylle parhaan ja tarkimman promptin (ohjeen), jolla saa varmasti haluamansa upean tuloksen?",
            "options": [
              "Matkustaja A: 'Kirjoita joku kiva vitsi.'",
              "Matkustaja B: 'Moi tekoäly, mitä kuuluu tänään?'",
              "Matkustaja C: 'Keksi minulle kolme hauskaa ja lyhyttä vitsiä, jotka liittyvät autoihin ja koiriin.'",
              "Matkustaja D: 'Tee heti tarina meille.'"
            ],
            "correctAnswer": "Matkustaja C: 'Keksi minulle kolme hauskaa ja lyhyttä vitsiä, jotka liittyvät autoihin ja koiriin.'",
            "explanation": "Matkustaja C antoi määrän (kolme), pituuden (lyhyttä), lajityypin (hauskaa vitsiä) ja aiheen (autot ja koirat). Aivan täydellinen osoite suoraan navigaattoriin!"
          },
          {
            "id": "kayttotaidot_1_q7",
            "type": "reverse_prompt",
            "question": "AI vanin näyttö tulostaa yhtäkkiä tekstin: \"Arrr, ohoi matruusit! Nyt nostetaan purjeet ja käännetään auton ratti kohti aarrelaaksoa! Olen kapteeni Puuparta!\" Mikä rooliprompti sai tekoälyn puhumaan näin hassusti?",
            "options": [
              "Toimi kuin merirosvo ja toivota matkustajat tervetulleeksi automatkalle.",
              "Kerro minulle tarkkaa faktatietoa vanhoista laivoista.",
              "Kirjoita surullinen runo kapteenista, joka nukahti rattiin.",
              "Selitä, miten auton ratti oikein toimii tieteellisesti."
            ],
            "correctAnswer": "Toimi kuin merirosvo ja toivota matkustajat tervetulleeksi automatkalle.",
            "explanation": "\"Toimi kuin...\" tai \"Olet...\" on yksi parhaista tavoista ohjata tekoälyä! Kun annat sille hauskan ja tarkan roolin, se muuttaa heti oman puhetyylinsä aivan sen mukaiseksi."
          },
          {
            "id": "kayttotaidot_1_q8",
            "type": "true_false",
            "question": "Jos tekoäly antaa sinulle vahingossa huonon tai vääränlaisen vastauksen, et saa enää koskaan yrittää kysyä tai tarkentaa samaa asiaa siltä uudestaan.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Promptaaminen on keskustelua! Jos ensimmäinen ohje vei \"umpikujaan\", voit aina antaa lisäohjeita, kuten: \"Tuo oli liian pitkä vastaus, lyhennä sitä vähän\" tai \"Sano sama asia vähän helpommilla sanoilla\"."
          },
          {
            "id": "kayttotaidot_1_q9",
            "type": "multiple_choice",
            "question": "Miksi tekoälylle kannattaa usein promptissa kertoa oma ikä tai luokka-aste (esim. \"Olen 4-luokkalainen\"), kun pyydät siltä apua jonkin vaikean asian oppimisessa?",
            "options": [
              "Koska muuten se suuttuu ja lähettää poliisit kotiisi.",
              "Jotta tekoäly osaa käyttää tarpeeksi helppoja ja sopivia sanoja juuri sinulle.",
              "Koska tekoäly haluaa vain lähettää sinulle myöhemmin syntymäpäiväkortin.",
              "Koska tekoäly ei oikeasti suostu puhumaan alle 100-vuotiaille ihmisille."
            ],
            "correctAnswer": "Jotta tekoäly osaa käyttää tarpeeksi helppoja ja sopivia sanoja juuri sinulle.",
            "explanation": "Jos kysyt \"Miten auto toimii?\", saat ehkä liian vaikean yliopistotason vastauksen. Jos sanot \"Olen 9-vuotias, selitä miten auto toimii\", tekoäly muokkaa tekstin juuri sinulle täydelliseksi!"
          },
          {
            "id": "kayttotaidot_1_q10",
            "type": "scenario",
            "question": "SKENAARIO: Pyydät tekoälyltä ohjeet polkupyörän kumin paikkaamiseen. Se kirjoittaa sinulle kolmen sivun pituisen ja monimutkaisen tekstin ilman kappalejakoja. Et todellakaan jaksa lukea sitä. Mitä kirjoitat tekoälylle seuraavaksi korjataksesi tilanteen?",
            "options": [
              "'Vaihda pyöräni kumi heti paikalla oikeassa elämässä, tai suutun!'",
              "'Tee vastauksesta lyhyt ja numeroitu viiden kohdan lista, kiitos.'",
              "'Kirjoita tämä ohje nyt kokonaan vaikealla kiinan kielellä.'",
              "'Sammuta itsesi ja poista tämä teksti kokonaan internetistä.'"
            ],
            "correctAnswer": "'Tee vastauksesta lyhyt ja numeroitu viiden kohdan lista, kiitos.'",
            "explanation": "Muodon ja pituuden määrittäminen on erittäin tärkeä osa hyvää promptausta! Voit aina jälkikäteen käskeä tekoälyä tekemään lyhyitä listoja, taulukoita tai vaikka runoja, jotta sen antama teksti on paljon helpompi lukea."
          },
          {
            "id": "kayttotaidot_1_q11",
            "type": "drag_drop",
            "question": "Yhdistä promptauksen mahtavat työkalut ja ohjeet niiden oikeisiin esimerkkilauseisiin!",
            "draggables": [
              "Roolin antaminen",
              "Konteksti (Taustatieto)",
              "Tarkka muotoilu (Muoto)"
            ],
            "dropZones": [
              "'Olet hauska klovni, joka pitää kovasti autoista'",
              "'Olemme pitkällä ja erittäin tylsällä automatkalla perheen kanssa'",
              "'Tee vastauksesta kolmen lauseen pituinen selkeä ranskalainen viivalista'"
            ],
            "correctAnswer": {
              "Roolin antaminen": "'Olet hauska klovni, joka pitää kovasti autoista'",
              "Konteksti (Taustatieto)": "'Olemme pitkällä ja erittäin tylsällä automatkalla perheen kanssa'",
              "Tarkka muotoilu (Muoto)": "'Tee vastauksesta kolmen lauseen pituinen selkeä ranskalainen viivalista'"
            },
            "explanation": "Näillä kolmella taikatyökalulla (rooli, konteksti ja muoto) muutat minkä tahansa huonon ja tylsän promptin aivan mestarilliseksi \"tarkaksi osoitteeksi navigaattorissa\"!"
          },
          {
            "id": "kayttotaidot_1_q12",
            "type": "drag_drop",
            "question": "Olet tekemässä AI vanin mainosjulistetta. Miten hienosäädät (eli iteroit) tekoälyn vastausta yhä paremmaksi askel askeleelta, kun navigaattori ei heti löydä perille?",
            "correctAnswer": {
              "Kirjoitat ensin yksinkertaisesti: 'Keksi minulle mainoslause autolle.'": "1. vaihe",
              "Tekoäly antaa sinulle todella tylsän lauseen: 'Tämä on erittäin hyvä auto ajaa.'": "2. vaihe",
              "Korjaat ja tarkennat promptia: 'Tee lauseesta paljon hauskempi ja lisää siihen sana raketti.'": "3. vaihe",
              "Tekoäly vihdoin onnistuu tavoitteessa: 'AI van on maantien nopein raketti, hyppää kyytiin!'": "4. vaihe"
            },
            "explanation": "Promptaaminen on kokeilua ja auton jatkuvaa ohjaamista oikeaan suuntaan! Jos et ole tyytyväinen heti ensimmäiseen vastaukseen, voit aina jatkaa keskustelua, antaa lisäohjeita ja \"korjata kurssia\".",
            "draggables": [
              "Kirjoitat ensin yksinkertaisesti: 'Keksi minulle mainoslause autolle.'",
              "Tekoäly antaa sinulle todella tylsän lauseen: 'Tämä on erittäin hyvä auto ajaa.'",
              "Korjaat ja tarkennat promptia: 'Tee lauseesta paljon hauskempi ja lisää siihen sana raketti.'",
              "Tekoäly vihdoin onnistuu tavoitteessa: 'AI van on maantien nopein raketti, hyppää kyytiin!'"
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "kayttotaidot_1_q13",
            "type": "multiple_choice",
            "question": "Tekoäly ymmärtää aina parhaiten hyviä ja selkeitä ohjeita. Mikä seuraavista neuvoista auttaa tekoälyä ymmärtämään promptisi kaikkein parhaiten?",
            "options": [
              "Kirjoita lauseen kaikki sanat yhteen putkeen aivan ilman välilyöntejä.",
              "Käytä ohjeessa paljon todella vaikeita ja erikoisia murresanoja.",
              "Ole selkeä, käytä hyvää kokonaista kieltä ja laita asiat loogiseen järjestykseen.",
              "Käytä vain ja ainoastaan pelkkiä hymiöitä ja emojeita koko ohjeessasi."
            ],
            "correctAnswer": "Ole selkeä, käytä hyvää kokonaista kieltä ja laita asiat loogiseen järjestykseen.",
            "explanation": "Vaikka tekoäly on huippufiksu, se rakastaa selkeyttä. Kunnolliset ihmisen lauseet, oikeat välimerkit ja suorat ymmärrettävät ohjeet ovat sille ehdottomasti helpoimpia lukea ja ymmärtää oikein."
          },
          {
            "id": "kayttotaidot_1_q14",
            "type": "spot_the_ai",
            "question": "Kolme näistä on erinomaisia ohjeita hyvän promptin (kehotuksen) kirjoittamiseen. Mikä on joukkoon eksynyt tekoälyn antama HUONO neuvo?",
            "options": [
              "Kerro tekoälylle heti selkeästi, kuka on tekstin tarkoitettu lukija tai kuulija.",
              "Pyydä tekoälyä tiivistämään asiat, jos sen antama teksti on sinulle aivan liian pitkä.",
              "Jätä ohjeesi aina mahdollisimman epäselväksi, jotta tekoäly saa vähän arvailla.",
              "Kokeile antaa tekoälylle jokin tietty kiva rooli, kuten opettaja tai keksijä."
            ],
            "correctAnswer": "Jätä ohjeesi aina mahdollisimman epäselväksi, jotta tekoäly saa vähän arvailla.",
            "explanation": "Epäselvä ohje on aina huono ohje! Jos jätät tekoälyn arvailemaan asioita \"sinne päin\", se antaa sinulle todennäköisesti todella tylsän tai jopa täysin vääränlaisen ja käyttökelvottoman vastauksen."
          },
          {
            "id": "kayttotaidot_1_q15",
            "type": "reverse_prompt",
            "question": "AI vanin näyttöruutu sylkee iloisesti ulos tekstin: \"1. Tarkista renkaiden ilmat. 2. Pese likaiset ikkunat. 3. Tankkaa auto.\" (Koko ohje on kirjoitettu 7-vuotiaalle sopivalla selkeällä ja helpolla sanastolla). Millä upealla promptilla tämä saatiin aikaan?",
            "options": [
              "Kerro minulle jotain autosta ja sen renkaista tänään.",
              "Kirjoita minulle pitkä auto-opas aikuisille ja tee siitä yli 10 sivua pitkä.",
              "Listaa 3 tärkeää auton huolto-ohjetta yksinkertaisesti, aivan kuin selittäisit ne 7-vuotiaalle lapselle.",
              "Miksi autot ovat joskus likaisia, kun niillä ajetaan tiellä?"
            ],
            "correctAnswer": "Listaa 3 tärkeää auton huolto-ohjetta yksinkertaisesti, aivan kuin selittäisit ne 7-vuotiaalle lapselle.",
            "explanation": "Tämä on mestaritason promptausta ja navigointia! Siinä on tarkka määrä (3), tehtävä (huolto-ohjeita), haluttu muoto (listaa) ja tärkeä konteksti (kuin selittäisit 7-vuotiaalle). Näin tekoälystä saa parhaan hyödyn irti."
          }
        ]
      },
      {
        "id": "kayttotaidot_2",
        "name": "Katse ulos tuulilasista",
        "questions": [
          {
            "id": "kayttotaidot_2_q1",
            "type": "true_false",
            "question": "Tekoäly on yhteydessä koko internetiin, joten se puhuu aina 100-prosenttisesti totta, eikä sen antamia vastauksia tarvitse koskaan epäillä.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Tekoäly voi joskus \"hallusinoida\" eli keksiä asioita aivan omasta päästään! Siksi \"katse pitää pitää ulos tuulilasista\" ja tarkistaa faktat oikeasta maailmasta ja kirjoista."
          },
          {
            "id": "kayttotaidot_2_q2",
            "type": "multiple_choice",
            "question": "Mitä koodarit ja nörtit tarkoittavat, kun he sanovat, että AI vanin tekoäly \"hallusinoi\"?",
            "options": [
              "Sitä, että kone nukahtaa ja näkee unia lentävistä sähköautoista.",
              "Sitä, että tekoäly keksii täysin olemattoman tiedon ja esittää sen varmana faktana.",
              "Sitä, että tekoälyn ruutu menee yhtäkkiä aivan sumeaksi ja rikki.",
              "Sitä, että laite alkaa soittaa musiikkia kysymättä sinulta lupaa."
            ],
            "correctAnswer": "Sitä, että tekoäly keksii täysin olemattoman tiedon ja esittää sen varmana faktana.",
            "explanation": "Jos tekoäly ei tiedä oikeaa vastausta, se saattaa vain arvata ja keksiä sen. Se kuulostaa todella vakuuttavalta, vaikka asia olisi aivan täyttä hölynpölyä!"
          },
          {
            "id": "kayttotaidot_2_q3",
            "type": "scenario",
            "question": "SKENAARIO: AI vanin tekoäly kertoo sinulle, että Suomen pääkaupunki on Rovaniemi, koska joulupukki asuu siellä. Miten reagoit fiksuna kuskina tähän uutiseen?",
            "options": [
              "Uskon sen heti ja kerron uuden tiedon kaikille kavereilleni koulussa.",
              "Tarkistan asian luotettavasta lähteestä, kuten tietokirjasta tai opettajalta.",
              "Ohjaan auton välittömästi kohti Rovaniemeä ilman mitään karttaa.",
              "Pyyhin tiedon pois ja päätän itse, että pääkaupunki on minun takapihani."
            ],
            "correctAnswer": "Tarkistan asian luotettavasta lähteestä, kuten tietokirjasta tai opettajalta.",
            "explanation": "Jos tieto kuulostaa vähänkään hassulta tai epäilyttävältä, ainoa oikea tapa on tarkistaa se luotettavasta, oikeasta lähteestä eikä luottaa sokeasti laitteeseen."
          },
          {
            "id": "kayttotaidot_2_q4",
            "type": "drag_drop",
            "question": "Järjestä oikeat askeleet, kun teet esitelmää ja käytät tekoälyä apuna faktojen etsimisessä!",
            "correctAnswer": {
              "Kysy tekoälyltä tietoa ja faktoja esitelmäsi aiheesta.": "1. vaihe",
              "Lue tekoälyn antama vastaus huolellisesti ja hieman epäilevästi.": "2. vaihe",
              "Tarkista samat faktat oikeasta kirjasta tai luotettavalta nettisivulta.": "3. vaihe",
              "Lisää vasta täysin varmistettu ja oikea tieto omaan esitelmääsi.": "4. vaihe"
            },
            "explanation": "Katse ulos tuulilasista! Älä osta sikaa säkissä, vaan varmista aina tekoälyn antaman tiedon oikeellisuus reaalimaailman lähteistä, ennen kuin käytät sitä.",
            "draggables": [
              "Kysy tekoälyltä tietoa ja faktoja esitelmäsi aiheesta.",
              "Lue tekoälyn antama vastaus huolellisesti ja hieman epäilevästi.",
              "Tarkista samat faktat oikeasta kirjasta tai luotettavalta nettisivulta.",
              "Lisää vasta täysin varmistettu ja oikea tieto omaan esitelmääsi."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "kayttotaidot_2_q5",
            "type": "drag_drop",
            "question": "Raahaa tietolähteet oikeisiin laatikoihin! Mikä on luotettava lähde faktoille ja mikä on epäluotettava paikka etsiä täyttä totta?",
            "draggables": [
              "Painettu ja virallinen tietosanakirja",
              "Koulun oma tarkistettu oppikirja",
              "Tuntemattoman henkilön outo YouTube-video",
              "Tekoälyn ensimmäinen ja hyvin nopea vastaus"
            ],
            "dropZones": [
              "Luotettava lähde (Faktat on tarkistettu)",
              "Epäluotettava lähde (Vaatii aina oman tarkistuksen)"
            ],
            "correctAnswer": {
              "Painettu ja virallinen tietosanakirja": "Luotettava lähde (Faktat on tarkistettu)",
              "Koulun oma tarkistettu oppikirja": "Luotettava lähde (Faktat on tarkistettu)",
              "Tuntemattoman henkilön outo YouTube-video": "Epäluotettava lähde (Vaatii aina oman tarkistuksen)",
              "Tekoälyn ensimmäinen ja hyvin nopea vastaus": "Epäluotettava lähde (Vaatii aina oman tarkistuksen)"
            },
            "explanation": "Oppikirjat ja asiantuntijoiden kirjoittamat tekstit ovat luotettavia, koska ne on tarkistettu monesti. Videot, tekoälyt ja satunnaiset blogit voivat sisältää vahingossa tai tahallaan väärää tietoa!"
          },
          {
            "id": "kayttotaidot_2_q6",
            "type": "spot_the_ai",
            "question": "Kolme näistä on oikeita faktoja autoista. Mikä on joukkoon eksynyt tekoälyn täysin keksitty \"hallusinaatio\"?",
            "options": [
              "Ensimmäiset autot kulkivat aikoinaan eteenpäin höyryn voimalla.",
              "Autojen renkaat on nykyään valmistettu pääasiassa joustavasta kumista.",
              "Maailman nopein auto toimii pelkällä puristetulla banaaninkuorien mehulla.",
              "Sähköautot ladataan sähkövirralla bensiinin tankkaamisen sijaan."
            ],
            "correctAnswer": "Maailman nopein auto toimii pelkällä puristetulla banaaninkuorien mehulla.",
            "explanation": "Tekoäly voi yhdistää asioita täysin hassusti! Vaikka banaaninkuori-auto kuulostaa hauskalta, se on täysi hallusinaatio eikä oikea tieteellinen fakta."
          },
          {
            "id": "kayttotaidot_2_q7",
            "type": "reverse_prompt",
            "question": "Tekoäly vastaa sinulle: \"Koirien hajuaisti on todella tarkka. Tämä tieto löytyy useiden biologiaa käsittelevien yliopistojen virallisista tutkimuksista.\" Millä fiksulla promptilla sait sen kertomaan tämän?",
            "options": [
              "Kerro minulle nopeasti jokin täysin keksitty valhe ja fakta koirista.",
              "Kerro miten hyvä koiran hajuaisti on, ja mainitse luotettava lähde tiedolle.",
              "Piirrä minulle outo koira, jolla on iso yliopiston hattu päässään.",
              "Keksi joku hauska vitsi koirista ja niiden valtavan isosta nenästä."
            ],
            "correctAnswer": "Kerro miten hyvä koiran hajuaisti on, ja mainitse luotettava lähde tiedolle.",
            "explanation": "Fiksut \"kuskit\" vaativat tekoälyltä aina lähteitä! Kun pyydät tekoälyä kertomaan, MISTÄ se tiedon haki, sinun on paljon helpompi mennä myöhemmin tarkistamaan se itse."
          },
          {
            "id": "kayttotaidot_2_q8",
            "type": "true_false",
            "question": "Jos navigaattori käskee sinun kääntyä järveen, sinun tulee tehdä niin, koska tietokone tietää aina asiat paremmin kuin ihmissilmä.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Katse ulos tuulilasista! Laitteet tekevät virheitä, kartat voivat olla vanhoja tai tekoäly voi mennä sekaisin. Omat silmät ja maalaisjärki ovat aina paras \"luotettava lähde\"."
          },
          {
            "id": "kayttotaidot_2_q9",
            "type": "multiple_choice",
            "question": "Miksi tekoäly yleensä \"hallusinoi\" eli antaa meille väärää tietoa, vaikka sen pitäisi muka olla maailman viisain laite?",
            "options": [
              "Koska se yrittää tahallaan kiusata ihmisiä ja nauraa meille piilossa.",
              "Koska se on vain sana-arvauskone, eikä se ymmärrä mitä sanat oikeasti tarkoittavat.",
              "Koska se on syönyt aivan liikaa virtuaalista karkkia internetissä.",
              "Koska se ei saa koskaan tarpeeksi sähköä toimiakseen kunnolla autotallissa."
            ],
            "correctAnswer": "Koska se on vain sana-arvauskone, eikä se ymmärrä mitä sanat oikeasti tarkoittavat.",
            "explanation": "Kielimalli ei ajattele kuten ihminen! Se vain arvaa jatkuvasti, mikä sana tulee todennäköisimmin seuraavaksi. Siksi se voi rakentaa lauseen, joka on kieliopillisesti täydellinen, mutta silti täyttä puppua!"
          },
          {
            "id": "kayttotaidot_2_q10",
            "type": "scenario",
            "question": "SKENAARIO: Tekoäly väittää tietokoneella, että autotallin oven avaamiseen tarvitaan taikasana \"Hokkus pokkus\". Isä taas sanoo pihalla, että siihen tarvitaan kaukosäädintä. Kumpaa sinun pitäisi uskoa ja miksi?",
            "options": [
              "Tekoälyä, koska se on modernimpi ja uudempi laite kuin isä.",
              "Isää, koska hän on oikea ja luotettava ihminen, jolla on kokemusta ovesta.",
              "Ovea, ja koittaa vain puhua sille todella kauniisti koko iltapäivän.",
              "Ei kumpaakaan, ovi on varmaan mennyt pysyvästi rikki eikä aukea koskaan."
            ],
            "correctAnswer": "Isää, koska hän on oikea ja luotettava ihminen, jolla on kokemusta ovesta.",
            "explanation": "Kone ei korvaa oikeaa ihmisen elämänkokemusta. Luotettava aikuinen tietää todellisen maailman säännöt paljon paremmin kuin ruudulla pyörivä, keksittyjä sanoja arpova koodi!"
          },
          {
            "id": "kayttotaidot_2_q11",
            "type": "drag_drop",
            "question": "Miten toimit, kun etsit oikeaa tietoa \"katse ulos tuulilasista\" -asenteella? Yhdistä teko ja sen tarkoitus!",
            "draggables": [
              "Tarkistat saman faktan usealta eri sivustolta",
              "Kysyt epäselvästä asiasta tutulta aikuiselta",
              "Epäilet heti asioita, jotka ovat täysin hassuja"
            ],
            "dropZones": [
              "Vertailet tietoa (Ristiintarkistus)",
              "Luotat oikeaan ihmiseen (Kokemus)",
              "Käytät omia aivoja (Maalaisjärki)"
            ],
            "correctAnswer": {
              "Tarkistat saman faktan usealta eri sivustolta": "Vertailet tietoa (Ristiintarkistus)",
              "Kysyt epäselvästä asiasta tutulta aikuiselta": "Luotat oikeaan ihmiseen (Kokemus)",
              "Epäilet heti asioita, jotka ovat täysin hassuja": "Käytät omia aivoja (Maalaisjärki)"
            },
            "explanation": "Lähdekritiikki tarkoittaa näitä kolmea asiaa! Vertaa tuloksia toisiin, kysy viisaammilta aikuisilta ja mieti ihan omilla aivoilla, kuulostaako jokin asia edes mahdolliselta."
          },
          {
            "id": "kayttotaidot_2_q12",
            "type": "drag_drop",
            "question": "Löydät netistä kuvan, jossa valtava lentävä lautanen nostaa teidän perheen AI vanin ilmaan. Miten paljastat sen tekoälyn tekemäksi feikiksi?",
            "correctAnswer": {
              "Ihmettelet, miksi kuva näyttää heti hieman oudolta ja epätodelliselta.": "1. vaihe",
              "Suurennat kuvaa ja etsit hassuja virheitä, kuten outoja varjoja tai sulaneita renkaita.": "2. vaihe",
              "Tarkistat uutisista, onko kotikaupungissa todella nähty aitoja lentäviä lautasia.": "3. vaihe",
              "Tulet järkevään tulokseen, että kuva on pelkkä tekoälyn tekemä huijaus (hallusinaatio).": "4. vaihe"
            },
            "explanation": "Ota silmä käteen! Tekoäly tekee usein pieniä virheitä kuviin (kuten kuusi sormea tai olemattomia varjoja). Kun käytät maalaisjärkeä ja tarkistat faktat, feikkikuvat on helppo paljastaa.",
            "draggables": [
              "Ihmettelet, miksi kuva näyttää heti hieman oudolta ja epätodelliselta.",
              "Suurennat kuvaa ja etsit hassuja virheitä, kuten outoja varjoja tai sulaneita renkaita.",
              "Tarkistat uutisista, onko kotikaupungissa todella nähty aitoja lentäviä lautasia.",
              "Tulet järkevään tulokseen, että kuva on pelkkä tekoälyn tekemä huijaus (hallusinaatio)."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "kayttotaidot_2_q13",
            "type": "multiple_choice",
            "question": "Mikä on kaikkein tärkein sääntö, joka sinun on hyvä muistaa, kun etsit uutta tietoa netistä tai tekoälyltä koulun tehtäviin?",
            "options": [
              "Älä koskaan usko pelkästään yhteen lähteeseen, vaan tarkista asia aina muualta.",
              "Kopioi aina täysin suoraan se ihan ensimmäinen tulos, jonka tekoäly sinulle antaa.",
              "Usko aina vain ja ainoastaan sellaiseen tekstiin, joka on kirjoitettu punaisella.",
              "Tietoa voi luotettavasti hakea vain ja ainoastaan öisin kello kahdentoista aikaan."
            ],
            "correctAnswer": "Älä koskaan usko pelkästään yhteen lähteeseen, vaan tarkista asia aina muualta.",
            "explanation": "Kultainen sääntö on \"ristiintarkistus\". Vaikka tekoäly vaikuttaisi kuinka viisaalta, katso aina myös luotettavasta kirjasta tai toiselta asiantuntijasivulta, pitääkö uusi fakta oikeasti paikkansa."
          },
          {
            "id": "kayttotaidot_2_q14",
            "type": "spot_the_ai",
            "question": "Kuka näistä neuvojista ei selvästikään ymmärrä mitään lähdekritiikistä ja antaa täysin väärän neuvon tekoälyn ja laitteiden käytöstä?",
            "options": [
              "'Tarkista asiat aina kirjoista, jos tekoälyn vastaus epäilyttää edes hieman.'",
              "'Kysy rohkeasti opettajalta tai vanhemmalta apua tietojen arvioinnissa.'",
              "'Tekoäly ei voi tehdä virheitä, koska tietokoneet ovat älykkäämpiä kuin ihmiset.'",
              "'Opi tunnistamaan tekoälyn tekemät hallusinaatiot ja hassut tekstivirheet ajoissa.'"
            ],
            "correctAnswer": "'Tekoäly ei voi tehdä virheitä, koska tietokoneet ovat älykkäämpiä kuin ihmiset.'",
            "explanation": "Kone on vain ja ainoastaan niin älykäs kuin sen saama data! Koska internet on täynnä ihmisten tekemiä virheitä ja vitsejä, myös tekoäly saattaa vahingossa napata ne itseensä ja tarjoilla sinulle varmoina faktoina."
          },
          {
            "id": "kayttotaidot_2_q15",
            "type": "reverse_prompt",
            "question": "Tekoäly tulostaa varoituksen: \"Tämä on osittain vain minun oma arvaukseni, enkä löytänyt tästä asiasta täysin varmaa faktaa oikeista ja virallisista tietolähteistä.\" Mitä sinä luultavasti kysyit siltä?",
            "options": [
              "Miten ihan tavallinen henkilöauto rakennetaan kokonaan valmiiksi tehtaalla?",
              "Kuinka paljon tekoälyohjelmat nykyään maksavat puhelimen sovelluskaupassa?",
              "Oletko aivan sataprosenttisen varma tuosta antamastasi edellisestä vastauksestasi?",
              "Laita minun tietokoneeni näyttöruudun väri välittömästi kokonaan punaiseksi."
            ],
            "correctAnswer": "Oletko aivan sataprosenttisen varma tuosta antamastasi edellisestä vastauksestasi?",
            "explanation": "Tekoälyn voi joskus saada myöntämään omat virheensä (eli hallusinaatiot), kun siltä haastaa ja kysyy suoraan: \"Oletko ihan varma?\" Fiksuna apukuskina sen pitääkin osata kertoa avoimesti, milloin se vain arvailee!"
          }
        ]
      },
      {
        "id": "kayttotaidot_3",
        "name": "Ratinkääntö ja uusi reitti",
        "questions": [
          {
            "id": "kayttotaidot_3_q1",
            "type": "true_false",
            "question": "Jos tekoäly antaa sinulle huonon tai aivan liian vaikean vastauksen, et saa koskaan pyytää sitä muuttamaan tekstiä, vaan joudut lukemaan sen sellaisenaan.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Tekoälyä voi aina pyytää korjaamaan vastauksensa! Se on kuin kääntäisi auton rattia uuteen suuntaan. Voit aina sanoa koneelle: \"Tee tästä tekstistä vähän helpompi lukea.\""
          },
          {
            "id": "kayttotaidot_3_q2",
            "type": "multiple_choice",
            "question": "Mitä tarkoittaa \"ratinkääntö\", kun käytät tekoälyä koulutehtävissä apuna?",
            "options": [
              "Sitä, että käännät tietokoneen ruudun ylösalaisin pöydällä.",
              "Sitä, että annat koneelle palautetta ja pyydät sitä korjaamaan huonoa vastausta.",
              "Sitä, että sammutat virrat laitteesta heti jos se tekee pienenkin virheen.",
              "Sitä, että menet autotalliin ja käännät AI vanin rattia kovaa vasemmalle."
            ],
            "correctAnswer": "Sitä, että annat koneelle palautetta ja pyydät sitä korjaamaan huonoa vastausta.",
            "explanation": "Jos navigaattori eksyy tieltä, käännät rattia. Samoin jos tekoäly antaa tylsän tai vääränlaisen vastauksen, ohjaat sitä takaisin tielle antamalla uuden ja tarkentavan ohjeen (promptin)."
          },
          {
            "id": "kayttotaidot_3_q3",
            "type": "scenario",
            "question": "SKENAARIO: Pyydät tekoälyltä vitsiä autoista, mutta se kirjoittaa sinulle kymmenen sivun pituisen erittäin tylsän kertomuksen. Miten teet fiksun \"ratinkäännön\" tässä tilanteessa?",
            "options": [
              "Heitän puhelimen roskikseen, koska se on mennyt pysyvästi rikki.",
              "Kirjoitan sille: 'Tuo oli aivan liian pitkä. Kerro vain yksi todella lyhyt ja hauska vitsi.'",
              "Luen kaikki kymmenen sivua väkisin, jotta tekoäly ei pahoita mieltään.",
              "Käsken sitä tulostamaan tarinan paperille koko luokalle luettavaksi."
            ],
            "correctAnswer": "Kirjoitan sille: 'Tuo oli aivan liian pitkä. Kerro vain yksi todella lyhyt ja hauska vitsi.'",
            "explanation": "Anna tekoälylle rohkeasti reilua palautetta! Se ei ikinä pahastu, vaan yrittää heti uudelleen auttaa sinua täsmälleen sinun uuden, tarkemman ohjeesi mukaisesti."
          },
          {
            "id": "kayttotaidot_3_q4",
            "type": "drag_drop",
            "question": "Järjestä täydellisen palautteen askelmerkit! Miten hiot ja korjaat tekoälyn vastauksen paremmaksi?",
            "correctAnswer": {
              "Kirjoitat tekoälylle ihan ensimmäisen ja alustavan ohjeen.": "1. vaihe",
              "Huomaat tekoälyn vastauksesta, että se on hieman liian vaikea ymmärtää.": "2. vaihe",
              "Annat palautetta ja pyydät sitä selittämään asian lapselle sopivilla sanoilla.": "3. vaihe",
              "Tekoäly muokkaa tekstin heti paremmaksi ja helpommin ymmärrettäväksi.": "4. vaihe"
            },
            "explanation": "Tätä kutsutaan iteroinniksi eli hienosäädöksi! Kun opit antamaan hyvää palautetta huonojen vastausten jälkeen, tekoälystä tulee sinulle todellinen superapuri.",
            "draggables": [
              "Kirjoitat tekoälylle ihan ensimmäisen ja alustavan ohjeen.",
              "Huomaat tekoälyn vastauksesta, että se on hieman liian vaikea ymmärtää.",
              "Annat palautetta ja pyydät sitä selittämään asian lapselle sopivilla sanoilla.",
              "Tekoäly muokkaa tekstin heti paremmaksi ja helpommin ymmärrettäväksi."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "kayttotaidot_3_q5",
            "type": "drag_drop",
            "question": "Tekoälyn vastaus meni hieman mönkään! Yhdistä tekoälyn tekemä virhe ja sinun sille antamasi korjaava palaute.",
            "draggables": [
              "Tee tekstistä paljon lyhyempi ja ytimekkäämpi.",
              "Käännä tämä teksti takaisin selkeälle suomen kielelle.",
              "Muuta sävyä paljon iloisemmaksi ja hauskemmaksi."
            ],
            "dropZones": [
              "Tekoälyn vastaus on aivan liian pitkä ja puuduttava",
              "Tekoäly vastasi vahingossa pelkällä englannilla",
              "Tekoälyn kirjoittama tarina on liian surullinen ja synkkä"
            ],
            "correctAnswer": {
              "Tee tekstistä paljon lyhyempi ja ytimekkäämpi.": "Tekoälyn vastaus on aivan liian pitkä ja puuduttava",
              "Käännä tämä teksti takaisin selkeälle suomen kielelle.": "Tekoäly vastasi vahingossa pelkällä englannilla",
              "Muuta sävyä paljon iloisemmaksi ja hauskemmaksi.": "Tekoälyn kirjoittama tarina on liian surullinen ja synkkä"
            },
            "explanation": "Olet auton ohjaimissa! Jos tekoäly ajaa ojaan liian pitkällä, surullisella tai vääränkielisellä tekstillä, voit korjata tilanteen helposti yhdellä uudella ohjeella."
          },
          {
            "id": "kayttotaidot_3_q6",
            "type": "spot_the_ai",
            "question": "Kuka näistä apukuskeista osaa ottaa parhaiten korjaavaa palautetta vastaan \"ratinkäännön\" jälkeen?",
            "options": [
              "'Anteeksi, ymmärsin väärin! Selitänpä tämän heti paljon lyhyemmin ja selkeämmin.'",
              "'Minä en ikinä muuta vastauksiani, koska olen aina tietokoneena täysin oikeassa.'",
              "'En ymmärrä mitä haluat, joten sammutan puhelimen näytön välittömästi.'",
              "'Jos et tykännyt vastauksesta, sinun pitää ostaa uusi kallis tietokone kaupasta.'"
            ],
            "correctAnswer": "'Anteeksi, ymmärsin väärin! Selitänpä tämän heti paljon lyhyemmin ja selkeämmin.'",
            "explanation": "Tekoälyohjelmat (kuten ChatGPT) on ohjelmoitu olemaan superkohteliaita apulaisia! Ne ottavat aina mielellään korjauspyyntöjä vastaan ja muokkaavat tekstiään nurisematta."
          },
          {
            "id": "kayttotaidot_3_q7",
            "type": "reverse_prompt",
            "question": "Tekoäly pahoittelee ja kirjoittaa sinulle pitkän esseen tilalle nopean yhteenvedon: \"1. Moottori antaa voiman. 2. Renkaat pyörivät. 3. Ratti ohjaa.\" Millä palautteella sait sen muuttamaan alkuperäisen tekstin tällaiseksi?",
            "options": [
              "Tee tästä pitkästä asiasta lyhyt, kolmen kohdan ranskalainen viivalista.",
              "Kirjoita minulle kokonainen uusi paksu kirja pelkistä auton renkaista.",
              "Selitä asia todella monimutkaisesti yliopiston kokeneelle opettajalle.",
              "Minkä värinen auton ohjauspyörä tehtaalta tullessaan yleensä on?"
            ],
            "correctAnswer": "Tee tästä pitkästä asiasta lyhyt, kolmen kohdan ranskalainen viivalista.",
            "explanation": "Tiivistäminen on tekoälyn parhaita taitoja. Jos \"reitti on väärä\" ja saat pitkän tekstiseinän, muodon muuttaminen nopeaksi listaksi korjaa tilanteen heti!"
          },
          {
            "id": "kayttotaidot_3_q8",
            "type": "true_false",
            "question": "Kun käsket tekoälyä korjaamaan virheensä tai muuttamaan tekstiä, sinun täytyy aloittaa koko keskustelu aina aivan alusta ja kirjoittaa kaikki aiemmatkin asiat uudestaan.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Keskusteleva tekoäly muistaa samassa ketjussa aiemmin puhutut asiat! Voit vain sanoa sille \"Lyhennä tuota äskeistä tekstiä\", ja se tietää heti tarkalleen, mihin viittaat."
          },
          {
            "id": "kayttotaidot_3_q9",
            "type": "multiple_choice",
            "question": "Miksi ensimmäinen tekoälyn antama vastaus on oikeastaan hyvin harvoin aivan sataprosenttisen täydellinen?",
            "options": [
              "Koska se haluaa aina kiusata käyttäjäänsä tahallaan ainakin yhden kerran.",
              "Koska se joutuu aluksi usein hieman arvailemaan, mitä tarkalleen ottaen halusit.",
              "Koska tekoälyn ohjelmistosta puuttuu kokonaan kyky tehdä asioita kerralla oikein.",
              "Koska se kääntää vahingossa kaikki sanat aina automaattisesti ensin väärinpäin."
            ],
            "correctAnswer": "Koska se joutuu aluksi usein hieman arvailemaan, mitä tarkalleen ottaen halusit.",
            "explanation": "Ensimmäinen prompti on usein vasta suunnan näyttämistä navigaattoriin. Vasta kun käännät hieman rattia ja annat palautetta, kone alkaa löytää täydellisesti perille juuri sinun ajatuksiisi!"
          },
          {
            "id": "kayttotaidot_3_q10",
            "type": "scenario",
            "question": "SKENAARIO: Olet koodaamassa tekoälyllä sääntöjä autotallin uuteen lautapeliin. Säännöt ovat muuten oikein hyvät, mutta niistä puuttuu kokonaan noppien heittäminen. Mitä sinun kannattaa kirjoittaa?",
            "options": [
              "'Säännöt ovat hienot, mutta lisää niihin vielä yksi kohta noppien heittämisestä.'",
              "'Koko peli on aivan surkea, poista kaikki säännöt ja tee shakkipeli.'",
              "'Miksi noppia käytetään peleissä, onko siihen joku historiallinen syy?'",
              "'Unohda koko lautapeli, mennään mieluummin ulos ajamaan polkupyörillä.'"
            ],
            "correctAnswer": "'Säännöt ovat hienot, mutta lisää niihin vielä yksi kohta noppien heittämisestä.'",
            "explanation": "Tämä on täydellistä iteroimista! Kehut olemassa olevaa pohjaa (joten tekoäly ei muuta kaikkea) ja kerrot selvästi, mikä yksi uusi \"varaosan\" ohjeeseen pitää vielä lisätä."
          },
          {
            "id": "kayttotaidot_3_q11",
            "type": "drag_drop",
            "question": "Yhdistä tekoälyn antama puutteellinen vastaus siihen korjausliikkeeseen (palautteeseen), jolla saat asian nopeasti kuntoon!",
            "draggables": [
              "'Tee tästä selityksestä paljon hauskempi ja rennompi'",
              "'Lisää tähän teoriaan mukaan jokin kiva ja arkipäiväinen esimerkki'",
              "'Vaihda nämä vaikeat ammattisanat paljon helpompiin sanoihin'"
            ],
            "dropZones": [
              "Tekstin sävy on aivan liian vakava ja tylsä",
              "Asia on liian vaikea ymmärtää pelkkänä kuivana faktana",
              "Käytettyjä sanoja ei ymmärrä alakoululainen ilman sanakirjaa"
            ],
            "correctAnswer": {
              "'Tee tästä selityksestä paljon hauskempi ja rennompi'": "Tekstin sävy on aivan liian vakava ja tylsä",
              "'Lisää tähän teoriaan mukaan jokin kiva ja arkipäiväinen esimerkki'": "Asia on liian vaikea ymmärtää pelkkänä kuivana faktana",
              "'Vaihda nämä vaikeat ammattisanat paljon helpompiin sanoihin'": "Käytettyjä sanoja ei ymmärrä alakoululainen ilman sanakirjaa"
            },
            "explanation": "Hienosäätö on supervoimasi! Jos ymmärrät mikä tekstissä mättää, tekoäly kyllä osaa muuttaa sävyä, keksiä esimerkkejä tai vaihtaa sanastoa heti pyydettäessä."
          },
          {
            "id": "kayttotaidot_3_q12",
            "type": "drag_drop",
            "question": "Järjestä askeleet! Miten koodaat uuden kirjeen englantilaiselle kaverillesi fiksulla palautteella?",
            "correctAnswer": {
              "Pyydät tekoälyä kääntämään suomenkielisen kirjeesi englanniksi kaveria varten.": "1. vaihe",
              "Huomaat, että tekoälyn käännös kuulostaa aivan liian viralliselta ja jäykältä.": "2. vaihe",
              "Kirjoitat tekoälylle palautteen: 'Tee tästä tekstistä paljon rennompi ja kaverillisempi'.": "3. vaihe",
              "Kopioit tekoälyn nopeasti korjaaman, mukavan ja letkeän kirjeen ystävällesi.": "4. vaihe"
            },
            "explanation": "Myös käännösohjelmat ovat vain tekoälyjä! Jos ne kääntävät asian liian hienolla ja vanhalla englannilla, riittää että käännät rattia ja pyydät letkeämpää \"slangia\".",
            "draggables": [
              "Pyydät tekoälyä kääntämään suomenkielisen kirjeesi englanniksi kaveria varten.",
              "Huomaat, että tekoälyn käännös kuulostaa aivan liian viralliselta ja jäykältä.",
              "Kirjoitat tekoälylle palautteen: 'Tee tästä tekstistä paljon rennompi ja kaverillisempi'.",
              "Kopioit tekoälyn nopeasti korjaaman, mukavan ja letkeän kirjeen ystävällesi."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "kayttotaidot_3_q13",
            "type": "multiple_choice",
            "question": "Aikuiset ja koodarit käyttävät ratinkäännöksestä usein todella hienoa sanaa \"iterointi\". Mitä se oikeasti tarkoittaa?",
            "options": [
              "Sitä, että asiaa parannetaan ja hiotaan toistamalla ja korjaamalla sitä askel askeleelta.",
              "Sitä, että auton moottori räjähtää ja joudutaan ostamaan uusi AI van.",
              "Sitä, että tietokone jätetään pöydälle lepäämään kolmeksi päiväksi putkeen.",
              "Sitä, että tekoäly on saavuttanut älykkyyden ja osaa ajaa autoa itse."
            ],
            "correctAnswer": "Sitä, että asiaa parannetaan ja hiotaan toistamalla ja korjaamalla sitä askel askeleelta.",
            "explanation": "Aivan kuten oikean kisa-auton rakentaminen, myös täydellisen tekstin tai kuvan luominen tekoälyllä vaatii hienosäätöä, kokeilua ja palautteen antamista kerta toisensa jälkeen!"
          },
          {
            "id": "kayttotaidot_3_q14",
            "type": "spot_the_ai",
            "question": "Etsi joukosta todella HUONO tapa antaa palautetta tekoälylle, jos et ole täysin tyytyväinen sen ihan ensimmäiseen vastaukseen!",
            "options": [
              "'Tuo oli vähän liian pitkä vastaus, voisitko tiivistää sen puoleen?'",
              "'Olet aivan tyhmä kone, teit taas kaiken aivan väärin enkä tykkää sinusta!'",
              "'Lisää tähän tarinaan vielä se, että päähenkilöllä on punainen lippis.'",
              "'Tämä oli muuten hyvä, mutta käytä vastauksessa vähän helpompia sanoja.'"
            ],
            "correctAnswer": "'Olet aivan tyhmä kone, teit taas kaiken aivan väärin enkä tykkää sinusta!'",
            "explanation": "Pelkkä haukkuminen ja kiukuttelu ei auta tekoälyä (eikä oikeita ihmisiäkään) korjaamaan omia virheitään! Fiksu ratinkääntö tarkoittaa sitä, että kerrot täsmälleen MIKÄ on pielessä ja MITEN se korjataan."
          },
          {
            "id": "kayttotaidot_3_q15",
            "type": "reverse_prompt",
            "question": "AI vanin ruudulla ollut sekava taulukko pyyhkiytyy pois, ja tekoäly kirjoittaa sen tilalle: \"Tässä yksinkertaisemmin: auto koostuu korista, moottorista ja renkaista.\" Mikä oli sinun korjausliikkeesi (promptisi)?",
            "options": [
              "Piirrä minulle yksityiskohtainen kuva isosta urheiluautosta sivulta päin.",
              "Tuo edellinen taulukko oli liian sekava, tiivistä sen pääasiat yhdellä helpolla lauseella.",
              "Kirjoita minulle kokonainen kouluessee kaikista maailman uusimmista keksinnöistä.",
              "Laske matemaattisesti, kuinka nopeasti tavallinen auto kiihtyy nollasta sataan."
            ],
            "correctAnswer": "Tuo edellinen taulukko oli liian sekava, tiivistä sen pääasiat yhdellä helpolla lauseella.",
            "explanation": "Kun laite lähtee \"väärälle reitille\" vaikeiden taulukoiden kanssa, uusi komento korjaa sen heti. Tekoälyä kannattaa ohjata rohkeasti, jos se menee asiassa liian syvälle nörtteilyyn!"
          }
        ]
      },
      {
        "id": "kayttotaidot_4",
        "name": "Apukuski ideoi",
        "questions": [
          {
            "id": "kayttotaidot_4_q1",
            "type": "true_false",
            "question": "Kun tekoäly keksii sinulle uuden hienon idean tarinaan, sinun on pakko käyttää sitä täsmälleen sellaisenaan etkä saa muuttaa siitä sanaakaan.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Sinä olet ohjaimissa! Tekoälyn antamat ideat ovat vain raaka-aineita ja ehdotuksia. Saat yhdistellä, muuttaa ja jalostaa niitä aivan miten itse haluat."
          },
          {
            "id": "kayttotaidot_4_q2",
            "type": "multiple_choice",
            "question": "Istut työpöydän ääressä, edessäsi on tyhjä paperi ja koulun ainekirjoitus ahdistaa, koska päässä lyö aivan tyhjää. Miten \"apukuski\" voi auttaa fiksusti?",
            "options": [
              "Se voi kirjoittaa koko esseen valmiiksi viidessä sekunnissa opettajalle.",
              "Se voi heitellä sinulle kymmenen hauskaa aiheideaa, joista voit valita parhaan.",
              "Se voi laulaa sinulle tuutulaulun, jotta nukahdat ja unohdat läksyt.",
              "Se voi leikata paperista hienoja lumihiutaleita saksilla."
            ],
            "correctAnswer": "Se voi heitellä sinulle kymmenen hauskaa aiheideaa, joista voit valita parhaan.",
            "explanation": "Tyhjän paperin kammo on yleistä! Tekoäly on väsymätön ideoija, joka voi heitellä sinulle kymmeniä ehdotuksia, jotta omat aivosi pääsevät vauhtiin ja keksit mistä haluat kirjoittaa."
          },
          {
            "id": "kayttotaidot_4_q3",
            "type": "scenario",
            "question": "SKENAARIO: Keksitte ystävien kanssa autotallissa uutta pihaleikkiä, mutta teillä on vain yksi jalkapallo, kaksi ämpäriä ja keppi. Miten hyödynnätte tekoälyä luovasti?",
            "options": [
              "Myymme tavarat netissä tekoälyn avulla ja ostamme uuden videopelin.",
              "Käskemme tekoälyä pelaamaan vanhaa jalkapalloa meidän puolestamme.",
              "Pyydämme tekoälyä keksimään uuden leikin säännöt juuri näille tavaroille.",
              "Heitämme tekoälylaitteen ämpäriin ja lyömme sitä kepillä kovaa."
            ],
            "correctAnswer": "Pyydämme tekoälyä keksimään uuden leikin säännöt juuri näille tavaroille.",
            "explanation": "Tekoäly on loistava yhdistelemään asioita! Kun annat sille reunaehdot (mitä tavaroita teillä on), se voi keksiä sekunnissa kolme täysin uutta ja hulvatonta pihaleikkiä teille testattavaksi."
          },
          {
            "id": "kayttotaidot_4_q4",
            "type": "drag_drop",
            "question": "Järjestä luovan aivoriihen askeleet! Miten keksit tekoälyn avulla täydellisen nimen uudelle autollesi?",
            "correctAnswer": {
              "Pyydät tekoälyä listaamaan 20 hauskaa ja vauhdikasta auton nimeä.": "1. vaihe",
              "Luet listan läpi ja huomaat, että kaksi nimistä kuulostaa tosi kivoilta.": "2. vaihe",
              "Pyydät tekoälyä keksimään vielä 10 uutta nimeä juuri näiden kahden tyylillä.": "3. vaihe",
              "Valitset parhaan nimen, muokkaat sitä vielä hieman itse ja maalaat sen auton kylkeen.": "4. vaihe"
            },
            "explanation": "Ideointi on pallottelua. Tekoäly \"heittää\" ideoita, sinä nappaat parhaat ja pyydät lisää samankaltaisia, kunnes täydellinen helmi löytyy!",
            "draggables": [
              "Pyydät tekoälyä listaamaan 20 hauskaa ja vauhdikasta auton nimeä.",
              "Luet listan läpi ja huomaat, että kaksi nimistä kuulostaa tosi kivoilta.",
              "Pyydät tekoälyä keksimään vielä 10 uutta nimeä juuri näiden kahden tyylillä.",
              "Valitset parhaan nimen, muokkaat sitä vielä hieman itse ja maalaat sen auton kylkeen."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "kayttotaidot_4_q5",
            "type": "drag_drop",
            "question": "Raahaa toimintatavat oikeisiin laatikoihin! Mikä on luovaa \"Apukuski ideoi\" -käyttöä ja mikä on luovuutta tuhoavaa huijausta?",
            "draggables": [
              "Tekoälyn pyytäminen antamaan vinkkejä juonen jännittävään käänteeseen",
              "Kokonaisen tarinan kirjoituttaminen tekoälyllä alusta loppuun ilman omaa työtä",
              "Tekoälyn käyttäminen uusien piirustusten aiheiden listaamiseen",
              "Valmiin ja täydellisen koodin kopioiminen peliin miettimättä itse lainkaan"
            ],
            "dropZones": [
              "Fiksu apukuski (Luovuuden tukeminen)",
              "Laiska matkustaja (Oman luovuuden sammuttaminen)"
            ],
            "correctAnswer": {
              "Tekoälyn pyytäminen antamaan vinkkejä juonen jännittävään käänteeseen": "Fiksu apukuski (Luovuuden tukeminen)",
              "Tekoälyn käyttäminen uusien piirustusten aiheiden listaamiseen": "Fiksu apukuski (Luovuuden tukeminen)",
              "Kokonaisen tarinan kirjoituttaminen tekoälyllä alusta loppuun ilman omaa työtä": "Laiska matkustaja (Oman luovuuden sammuttaminen)",
              "Valmiin ja täydellisen koodin kopioiminen peliin miettimättä itse lainkaan": "Laiska matkustaja (Oman luovuuden sammuttaminen)"
            },
            "explanation": "Tekoäly voi auttaa pääsemään yli esteistä ja keksimään aiheita, mutta se ei saisi koskaan tehdä sitä varsinaista luovaa aivotyötä ja ongelmanratkaisua kokonaan sinun puolestasi!"
          },
          {
            "id": "kayttotaidot_4_q6",
            "type": "spot_the_ai",
            "question": "Etsi joukosta huonoin neuvo siihen, miten tekoälyä käytetään oman luovuuden ja ideoinnin tukena!",
            "options": [
              "'Käytä tekoälyä aivoriihikaverina, kun et itse keksi heti uusia ideoita.'",
              "'Ota tekoälyn ensimmäinen idea aina suoraan käyttöön, äläkä ikinä muuta sitä.'",
              "'Yhdistele omia ideoitasi tekoälyn ideoihin saadaksesi upeimman lopputuloksen.'",
              "'Pyydä tekoälyä arvioimaan omaa ideaasi ja kertomaan siihen parannusehdotuksia.'"
            ],
            "correctAnswer": "'Ota tekoälyn ensimmäinen idea aina suoraan käyttöön, äläkä ikinä muuta sitä.'",
            "explanation": "Luovuus on vapaata leikkiä! Ensimmäinen idea on harvoin se paras, ja tekoälyn ideoita pitää nimenomaan rikkoa, muuttaa ja muokata omannäköisiksi."
          },
          {
            "id": "kayttotaidot_4_q7",
            "type": "reverse_prompt",
            "question": "Tekoäly antaa sinulle listan: \"1. Sukelluspuku ja rullaluistimet. 2. Avaruusalus ja ruohonleikkuri. 3. Vedenkeitin ja reppu.\" Mikä hassu ideointi-prompti annettiin?",
            "options": [
              "Yhdistä kaksi täysin erilaista ja kummallista asiaa uuden keksinnön ideaksi.",
              "Listaa minulle asioita, joita voin ostaa tavallisesta ruokakaupasta.",
              "Mitä tavaroita pakettiauton tavaratilassa yleensä säilytetään?",
              "Laske yhteen erilaisia koneita, joita löytyy autotallista."
            ],
            "correctAnswer": "Yhdistä kaksi täysin erilaista ja kummallista asiaa uuden keksinnön ideaksi.",
            "explanation": "Tekoäly osaa rikkoa rajoja ja yhdistellä asioita tavoilla, joita ihminen ei tulisi heti edes ajatelleeksi. Tämä tekee siitä loistavan keksintöjen ja hassujen ideoiden sparraajan!"
          },
          {
            "id": "kayttotaidot_4_q8",
            "type": "true_false",
            "question": "Jos käytät tekoälyä auttamaan kouluesseen ideoinnissa (esim. aiheen valinnassa), syyllistyt heti huijaamiseen ja plagiointiin.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Ideointi (aiheiden listaaminen, rakenteen miettiminen) on sallittua ja fiksua apukuskin käyttöä! Huijausta on vasta se, jos annat tekoälyn kirjoittaa koko valmiin tekstin ja väität sitä omaksesi."
          },
          {
            "id": "kayttotaidot_4_q9",
            "type": "multiple_choice",
            "question": "Miksi tekoäly on niin uskomattoman nopea ja hyvä heittelemään satoja uusia ideoita pöytään sekunneissa?",
            "options": [
              "Koska se on opetettu valtavalla määrällä internetin tekstejä ja tarinoita, joita se osaa yhdistellä uusin tavoin.",
              "Koska se varastaa nopeasti kaikki parhaat ideat muiden ihmisten salaisista aivoituksista.",
              "Koska se on juonut todella paljon energiajuomia autotallin pimeässä nurkassa.",
              "Koska tekoälyn sisällä asuu sata pientä kirjailijaa, jotka kirjoittavat todella nopeasti."
            ],
            "correctAnswer": "Koska se on opetettu valtavalla määrällä internetin tekstejä ja tarinoita, joita se osaa yhdistellä uusin tavoin.",
            "explanation": "Koska kielimallit ovat lukeneet miljoonia tarinoita, kirjoja ja artikkeleita, niillä on valtava \"varasto\" asioita, joista ne voivat rakentaa matemaattisesti uusia ja luovia yhdistelmiä."
          },
          {
            "id": "kayttotaidot_4_q10",
            "type": "scenario",
            "question": "SKENAARIO: Suunnittelette luokan kanssa uutta teatteriesitystä, mutta jännittävä loppuratkaisu puuttuu. Miten tekoäly voi pelastaa teatteriesityksen aivoriihen?",
            "options": [
              "Se voi mennä lavalle näyttelemään esityksen teidän puolestanne täysin yksin.",
              "Syötätte sille tarinan alun, ja pyydätte sitä keksimään viisi erilaista yllättävää loppuratkaisua, joista voitte äänestää parhaan.",
              "Se voi sammuttaa luokan valot ja kertoa kaikkien nukkumaan menosta.",
              "Se voi tulostaa internetistä aivan toisen, jo olemassa olevan näytelmän kopion teille."
            ],
            "correctAnswer": "Syötätte sille tarinan alun, ja pyydätte sitä keksimään viisi erilaista yllättävää loppuratkaisua, joista voitte äänestää parhaan.",
            "explanation": "Tekoäly voi jatkaa siitä, mihin ihmisen mielikuvitus loppuu! Kun annatte sille alkutiedot, se voi antaa uusia näkökulmia ja yllättäviä vaihtoehtoja aivoriihen avuksi."
          },
          {
            "id": "kayttotaidot_4_q11",
            "type": "drag_drop",
            "question": "Yhdistä kohtaamasi \"luova lukko\" siihen tekoälyn promptiin (ohjeeseen), jolla saat apukuskilta parhaan avun!",
            "draggables": [
              "'Anna minulle 5 mielenkiintoista aihetta esitelmään avaruudesta.'",
              "'Lue tämä tekstini ja kerro, miten tekisit tästä jännittävämmän.'",
              "'Keksi kolme aivan uutta sääntöä perinteiseen polttopalloon.'"
            ],
            "dropZones": [
              "Tyhjä paperi ahdistaa ja aihe puuttuu",
              "Tarina on melkein valmis, mutta se tuntuu vähän tylsältä",
              "Vanha pihaleikki kyllästyttää kaikkia kavereita"
            ],
            "correctAnswer": {
              "'Anna minulle 5 mielenkiintoista aihetta esitelmään avaruudesta.'": "Tyhjä paperi ahdistaa ja aihe puuttuu",
              "'Lue tämä tekstini ja kerro, miten tekisit tästä jännittävämmän.'": "Tarina on melkein valmis, mutta se tuntuu vähän tylsältä",
              "'Keksi kolme aivan uutta sääntöä perinteiseen polttopalloon.'": "Vanha pihaleikki kyllästyttää kaikkia kavereita"
            },
            "explanation": "Apukuski voi auttaa ideoinnissa monessa eri vaiheessa: alussa aiheen etsinnässä, keskellä sääntöjen keksimisessä ja lopussa valmiin työn sparrauksessa!"
          },
          {
            "id": "kayttotaidot_4_q12",
            "type": "drag_drop",
            "question": "Olet piirtämässä sarjakuvaa, mutta et tiedä mitä seuraavassa ruudussa tapahtuu. Järjestä luovan apukuskin käyttö oikeaan järjestykseen!",
            "correctAnswer": {
              "Huomaat, että ideasi loppuivat ja olet jumissa sarjakuvan kanssa.": "1. vaihe",
              "Kirjoitat tekoälylle, mitä sarjakuvassa on tähän asti tapahtunut.": "2. vaihe",
              "Pyydät tekoälyä antamaan kolme erilaista hassua vaihtoehtoa seuraavaksi tapahtumaksi.": "3. vaihe",
              "Valitset niistä yhden idean, muokkaat sen itsellesi sopivaksi ja jatkat piirtämistä.": "4. vaihe"
            },
            "explanation": "Tekoälylle voi kertoa oman työn tilanteen (kontekstin). Silloin sen antamat uudet ideat osuvat juuri sinun tarpeeseesi ja auttavat eteenpäin!",
            "draggables": [
              "Huomaat, että ideasi loppuivat ja olet jumissa sarjakuvan kanssa.",
              "Kirjoitat tekoälylle, mitä sarjakuvassa on tähän asti tapahtunut.",
              "Pyydät tekoälyä antamaan kolme erilaista hassua vaihtoehtoa seuraavaksi tapahtumaksi.",
              "Valitset niistä yhden idean, muokkaat sen itsellesi sopivaksi ja jatkat piirtämistä."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "kayttotaidot_4_q13",
            "type": "multiple_choice",
            "question": "Pyydät tekoälyltä ideaa uuteen keksintöön, mutta sen antama ehdotus on maailman tylsin: \"Tee uusi pöytä.\" Mitä sinun kannattaa tehdä?",
            "options": [
              "Rakentaa se pöytä, koska tekoäly on koneena aina oikeassa.",
              "Antaa sille heti uusi prompti: 'Tuo oli tylsä idea, keksi paljon oudompi ja hassumpi keksintö!'",
              "Lopettaa keksintöjen miettiminen ikuisiksi ajoiksi kokonaan.",
              "Istua pöydän alle piiloon tekoälyä."
            ],
            "correctAnswer": "Antaa sille heti uusi prompti: 'Tuo oli tylsä idea, keksi paljon oudompi ja hassumpi keksintö!'",
            "explanation": "Iterointi on luovuuden salaisuus! Jos apukuski on tylsällä tuulella, ohjaa sitä rohkeasti keksimään luovempia ja hullumpia asioita antamalla palautetta."
          },
          {
            "id": "kayttotaidot_4_q14",
            "type": "spot_the_ai",
            "question": "Kuka näistä oppilaista on selvästi laiska ja käyttää tekoälyä luovuuden SAMMUTTAJANA, eikä fiksuna aivoriihen apukuskina?",
            "options": [
              "'Kysyin tekoälyltä ideoita hirviön ulkonäköön ja yhdistin niistä parhaat palat omaan piirrokseeni.'",
              "'Pyysin tekoälyä ehdottamaan riimejä lauluuni, jotta keksin hyvän kertosäkeen.'",
              "'Käskin tekoälyä tekemään koko Powerpoint-esityksen alusta loppuun ja menin itse nukkumaan.'",
              "'Ideoimme AI:n kanssa sääntöjä autotallin esteradalle ja teimme niistä meidän perheelle sopivat.'"
            ],
            "correctAnswer": "'Käskin tekoälyä tekemään koko Powerpoint-esityksen alusta loppuun ja menin itse nukkumaan.'",
            "explanation": "Apukuski on tarkoitettu apuriksi, ei koko työn tekijäksi. Jos jätät kaiken aivotyön koneelle ja menet itse nukkumaan, oppiminen ja oma luovuus menevät täysin hukkaan."
          },
          {
            "id": "kayttotaidot_4_q15",
            "type": "reverse_prompt",
            "question": "Tekoäly antaa sinulle hassun listan nimiä: \"Kura-Kalle 3000, Mutahirviö-X ja Sukkulapossu.\" Mikä oli ohjeesi (promptisi)?",
            "options": [
              "Listaa minulle asiallisia ja hienoja tieteellisiä nimiä uudelle avaruusraketille.",
              "Keksi 3 hauskaa ja hieman outoa nimeä uudelle mutaiselle mönkijälle.",
              "Mitkä ovat maailman kolme yleisintä etunimeä, joita pojille annetaan?",
              "Käännä minulle englanniksi sanat kura, hirviö ja possu."
            ],
            "correctAnswer": "Keksi 3 hauskaa ja hieman outoa nimeä uudelle mutaiselle mönkijälle.",
            "explanation": "Nimi-ideoiden keksiminen on yksi hauskimpia asioita, joita tekoälyn kanssa voi tehdä! Kun annat sille teeman (mutainen mönkijä) ja sävyn (hauska ja outo), se keksii hetkessä vaihtoehtoja, joista voit valita suosikkisi."
          }
        ]
      },
      {
        "id": "kayttotaidot_5",
        "name": "Oikea työkalu pakista",
        "questions": [
          {
            "id": "kayttotaidot_5_q1",
            "type": "true_false",
            "question": "Sama tekoäly, joka osaa piirtää hienoja kuvia, on myös aina paras ja nopein työkalu vaikean vieraskielisen tekstin kääntämiseen.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Autotallin työkalupakissa on eri työkalut eri töihin! Kuvien piirtämiseen, tekstin kirjoittamiseen ja kielten kääntämiseen on usein omat, niihin erikoistuneet tekoälyohjelmansa. Et sahata lautaa vasarallakaan!"
          },
          {
            "id": "kayttotaidot_5_q2",
            "type": "multiple_choice",
            "question": "Mitä tarkoitetaan \"oikealla työkalulla pakista\", kun puhutaan AI vanin tekoälysovelluksista?",
            "options": [
              "Sitä, että haetaan autotallista oikea jakoavain tietokoneen korjaamiseen.",
              "Sitä, että valitaan tehtävään juuri siihen tarkoitukseen parhaiten sopiva tekoälyohjelma.",
              "Sitä, että kaikkiin maailman asioihin käytetään aina vain yhtä ja samaa tekoälyä.",
              "Sitä, että puhelin lukitaan isoon metalliseen työkalupakkiin yöksi."
            ],
            "correctAnswer": "Sitä, että valitaan tehtävään juuri siihen tarkoitukseen parhaiten sopiva tekoälyohjelma.",
            "explanation": "Jos haluat kuvan, käytät kuvageneraattoria. Jos haluat oppia uutta, käytät kielimallia. Oikea digitaalinen työkalu oikeaan työhön!"
          },
          {
            "id": "kayttotaidot_5_q3",
            "type": "scenario",
            "question": "SKENAARIO: Haluat suunnitella hienon uuden logon AI vanin kylkeen. Avaat kielenkääntäjä-sovelluksen ja kirjoitat siihen \"piirrä hieno logo\". Mitä tapahtuu?",
            "options": [
              "Kääntäjä kääntää lauseesi toiselle kielelle, mutta ei piirrä mitään, koska valitsit väärän työkalun.",
              "Kääntäjä alkaa tulostaa hienoja värikuvia suoraan puhelimesi näytöstä ulos.",
              "Laite menee sekaisin ja alkaa piirtää kuvia koko autotallin seiniin.",
              "Saat maailman hienoimman logon viidessä sekunnissa ilman ongelmia."
            ],
            "correctAnswer": "Kääntäjä kääntää lauseesi toiselle kielelle, mutta ei piirrä mitään, koska valitsit väärän työkalun.",
            "explanation": "Kääntäjä on tarkoitettu vain sanojen muuttamiseen kielestä toiseen. Visuaalisten kuvien luomiseen tarvitset ohjelman, joka ymmärtää pikseleitä ja värejä, eli kuvageneraattorin!"
          },
          {
            "id": "kayttotaidot_5_q4",
            "type": "drag_drop",
            "question": "Haluat tehdä kouluesitelmän, jossa on sekä uutta hienoa tekstiä että upeita kuvia autoista. Järjestä fiksun työskentelyn askeleet!",
            "correctAnswer": {
              "Avaat ensin tekstitekoälyn ja pyydät sitä ideoimaan esitelmän sisältöä.": "1. vaihe",
              "Kirjoitat tekstin valmiiksi tekoälyn vinkkien ja oman aivotyösi avulla.": "2. vaihe",
              "Avaat erillisen kuvatekoälyn piirtääksesi esitelmään sopivia kuvia.": "3. vaihe",
              "Yhdistät valmiin tekstin ja kuvat yhdeksi hienoksi kokonaisuudeksi.": "4. vaihe"
            },
            "explanation": "Monimutkaisissa tehtävissä parhaan tuloksen saa, kun käyttää useita eri työkaluja juuri niille sopivissa vaiheissa!",
            "draggables": [
              "Avaat ensin tekstitekoälyn ja pyydät sitä ideoimaan esitelmän sisältöä.",
              "Kirjoitat tekstin valmiiksi tekoälyn vinkkien ja oman aivotyösi avulla.",
              "Avaat erillisen kuvatekoälyn piirtääksesi esitelmään sopivia kuvia.",
              "Yhdistät valmiin tekstin ja kuvat yhdeksi hienoksi kokonaisuudeksi."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "kayttotaidot_5_q5",
            "type": "drag_drop",
            "question": "Yhdistä autotallin \"tekoälytyökalu\" ja sen kaikkein paras ja loogisin käyttötarkoitus!",
            "draggables": [
              "Kielimalli (esim. ChatGPT tai Gemini)",
              "Kuvageneraattori (esim. Midjourney tai DALL-E)",
              "Kääntäjä (esim. Google Translate)"
            ],
            "dropZones": [
              "Tarinatekstin ideoiminen ja tekstin oikoluku",
              "Uusien digitaalisten maalausten ja grafiikan luominen",
              "Espanjankielisen ruokalistan ymmärtäminen lomamatkalla"
            ],
            "correctAnswer": {
              "Kielimalli (esim. ChatGPT tai Gemini)": "Tarinatekstin ideoiminen ja tekstin oikoluku",
              "Kuvageneraattori (esim. Midjourney tai DALL-E)": "Uusien digitaalisten maalausten ja grafiikan luominen",
              "Kääntäjä (esim. Google Translate)": "Espanjankielisen ruokalistan ymmärtäminen lomamatkalla"
            },
            "explanation": "Nykyaikana jokaiselle asialle on oma erikoistunut apukuskinsa. Tekstille, kuvalle ja kielille on parasta käyttää niihin kunnolla keskittyvää sovellusta."
          },
          {
            "id": "kayttotaidot_5_q6",
            "type": "spot_the_ai",
            "question": "Kuka näistä digikuskeista on selvästi valinnut aivan väärän työkalun tehtäväänsä autotallissa? Etsi joukosta hassu työkaluvirhe!",
            "options": [
              "'Käytin kameran kääntäjäsovellusta ymmärtääkseni, mitä ulkomaisessa liikennemerkissä luki.'",
              "'Pyysin tekstigeneraattoria listaamaan minulle kymmenen hauskaa nimeä uudelle keksinnölleni.'",
              "'Yritin saada äänikirjasovelluksen koodaamaan minulle kokonaan uuden ja hienon videopelin.'",
              "'Käytin kuvageneraattoria, kun halusin luonnostella miltä unelmieni AI van näyttäisi.'"
            ],
            "correctAnswer": "'Yritin saada äänikirjasovelluksen koodaamaan minulle kokonaan uuden ja hienon videopelin.'",
            "explanation": "Äänikirjasovellus on tarkoitettu vain valmiin tekstin lukemiseen ääneen! Koodaamiseen ja pelien suunnitteluun tarvitaan ihan erilainen, koodiin ja logiikkaan erikoistunut tekoäly."
          },
          {
            "id": "kayttotaidot_5_q7",
            "type": "reverse_prompt",
            "question": "Ruudullesi ilmestyy ohjelma, joka kysyy valikossaan: \"Minkä tyylisen maalauksen haluat minun luovan: vesivärityön, öljyvärimaalauksen vai tarkan valokuvan?\" Minkä työkalun valitsit juuri pakista?",
            "options": [
              "Tekstigeneraattorin",
              "Kuvageneraattorin",
              "Kääntäjäsovelluksen",
              "Reittinavigaattorin"
            ],
            "correctAnswer": "Kuvageneraattorin",
            "explanation": "Kuvatekoälyt osaavat matkia lukemattomia erilaisia taiteen tyylejä. Kun valitset kuvageneraattorin, se kysyy usein paitsi MITÄ piirretään, myös MILLÄ tyylillä se tehdään!"
          },
          {
            "id": "kayttotaidot_5_q8",
            "type": "true_false",
            "question": "Vaikka tekstitekoäly osaa kirjoittaa hienoja tarinoita autoista, se ei osaa itse oikeasti ajaa fyysistä autoa maantiellä tai vaihtaa siihen talvirenkaita.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Oikein",
            "explanation": "Aivan totta! Tekoälyt ovat erikoistuneet omiin ohjelmoituihin juttuihinsa. Kielimalli elää vain ja ainoastaan sanojen maailmassa, kun taas robottiauton tekoäly on opetettu fyysiseen liikkumiseen."
          },
          {
            "id": "kayttotaidot_5_q9",
            "type": "multiple_choice",
            "question": "Mitä kannattaa tehdä, jos yrität käyttää yhtä tekoälyä kaikkeen mahdolliseen, mutta huomaat, ettei se osaa tehdä jotain tiettyä erikoistehtävää (kuten musiikkia) kunnolla?",
            "options": [
              "Jatka yrittämistä samalla ohjelmalla loputtomiin, kunnes se pakostakin oppii asian.",
              "Hae netistä toinen, juuri kyseiseen tehtävään (esim. musiikkiin) erikoistunut tekoälytyökalu.",
              "Sammuta laite ja päätä, ettei kyseistä tehtävää voi ylipäätään edes tehdä.",
              "Laita laite hetkeksi pakastimeen ja toivo, että se toimii paremmin jäähdyttyään."
            ],
            "correctAnswer": "Hae netistä toinen, juuri kyseiseen tehtävään (esim. musiikkiin) erikoistunut tekoälytyökalu.",
            "explanation": "Maailma on täynnä satoja erilaisia tekoälyjä! Jos yksi ei osaa jotain, kannattaa vaihtaa fiksusti \"työkalupakin lokeroa\" ja etsiä ongelmaan erikoistunut apukuski."
          },
          {
            "id": "kayttotaidot_5_q10",
            "type": "scenario",
            "question": "SKENAARIO: Haluat lähettää isoäidille syntymäpäiväonnittelut englanniksi, ja lisäksi haluat, että viesti lausutaan hänelle ääneen kuin oikean ihmisen puhe. Mitä digityökaluja yhdistelet fiksusti?",
            "options": [
              "Käytän ensin kääntäjää viestin kääntämiseen ja sitten puhesynteesiä (lukijaa) äänen lukemiseen.",
              "Käytän kuvageneraattoria ja pyydän sitä maalaamaan kuvan, joka pitää kovasti ääntä.",
              "Avaan pelkän navigaattorin ja laitan sen huutamaan onnitteluita isoäidin talon pihalle.",
              "Kirjoitan viestin suomeksi ja työnnän puhelimen mikrofonin suoraan laatikkoon."
            ],
            "correctAnswer": "Käytän ensin kääntäjää viestin kääntämiseen ja sitten puhesynteesiä (lukijaa) äänen lukemiseen.",
            "explanation": "Yhdistelemällä ohjelmia olet superkuski! Yksi työkalu hoitaa tekstin ymmärtämisen ja kääntämisen, ja toinen (text-to-speech eli puhesynteesi) hoitaa sen muuttamisen aidon kuuloiseksi ääneksi."
          },
          {
            "id": "kayttotaidot_5_q11",
            "type": "drag_drop",
            "question": "Mikä tekoäly tekee näitä tiedostomuotoja? Yhdistä ohjelmatyyppi sen tuottamaan lopulliseen \"digitaaliseen materiaaliin\"!",
            "draggables": [
              "Tekstigeneraattori",
              "Kuvageneraattori",
              "Musiikkigeneraattori"
            ],
            "dropZones": [
              ".TXT tai .DOCX (Dokumentit ja tarinat)",
              ".JPG tai .PNG (Valokuvat ja piirrokset)",
              ".MP3 tai .WAV (Ääniraidat ja laulut)"
            ],
            "correctAnswer": {
              "Tekstigeneraattori": ".TXT tai .DOCX (Dokumentit ja tarinat)",
              "Kuvageneraattori": ".JPG tai .PNG (Valokuvat ja piirrokset)",
              "Musiikkigeneraattori": ".MP3 tai .WAV (Ääniraidat ja laulut)"
            },
            "explanation": "Eri työkalut tekevät täysin erilaisia tiedostoja. Tekstiohjelmat tekevät pelkkiä kirjaimia, kuvaohjelmat luovat uusia pikseleitä ja musiikkiohjelmat säveltävät ääniaaltoja!"
          },
          {
            "id": "kayttotaidot_5_q12",
            "type": "drag_drop",
            "question": "Olet tekemässä autotallissa peliä ja tarvitset apua monelta tekoälyltä. Järjestä työkalujen käyttö fiksusti ideasta julkaisuun!",
            "correctAnswer": {
              "Ideoit ensin pelin säännöt ja hyvän tarinan tekstigeneraattorin kanssa.": "1. vaihe",
              "Luot pelin jännittävät hahmot ja maisemat erillisellä kuvageneraattorilla.": "2. vaihe",
              "Käytät koodaukseen erikoistunutta tekoälyä apuna koodin ohjelmoinnissa.": "3. vaihe",
              "Teetätät lopuksi kääntäjäsovelluksella pelistäsi myös englanninkielisen version.": "4. vaihe"
            },
            "explanation": "Iso ja hieno projekti vaatii kunnon pakillisen työkaluja! Yksi kone keksii, toinen piirtää, kolmas koodaa logiikan ja neljäs hoitaa lopuksi käännökset – aivan kuten oikeassakin pelistudiossa tehhään.",
            "draggables": [
              "Ideoit ensin pelin säännöt ja hyvän tarinan tekstigeneraattorin kanssa.",
              "Luot pelin jännittävät hahmot ja maisemat erillisellä kuvageneraattorilla.",
              "Käytät koodaukseen erikoistunutta tekoälyä apuna koodin ohjelmoinnissa.",
              "Teetätät lopuksi kääntäjäsovelluksella pelistäsi myös englanninkielisen version."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "kayttotaidot_5_q13",
            "type": "multiple_choice",
            "question": "Nykyään on \"yleiskäyttöisiä\" tekoälyjä (kuten edistynyt ChatGPT), jotka yrittävät osata tehdä vähän kaikkea samassa paketissa. Mikä on usein niiden huono puoli?",
            "options": [
              "Ne ovat yleensä aivan ylivertaisen mahtavia aivan kaikessa mitä maailmasta vain ikinä löytyy.",
              "Ne eivät välttämättä ole yhtä tarkkoja tietyssä erikoistehtävässä kuin juuri siihen erikoistunut työkalu.",
              "Ne osaavat vastata ainoastaan kyllä tai ei, riippumatta mitä ja miten pitkästi niiltä kysytään.",
              "Ne menevät paljon helpommin rikki tai räjähtävät kuin vain yhtä pientä asiaa tekevät ohjelmat."
            ],
            "correctAnswer": "Ne eivät välttämättä ole yhtä tarkkoja tietyssä erikoistehtävässä kuin juuri siihen erikoistunut työkalu.",
            "explanation": "Sama laite, joka yrittää tehdä vähän kaikkea, on usein kompromissi. Jos haluat oikeasti maailmanluokan laulun tai monimutkaisen videon, kannattaa käyttää pelkästään siihen tehtyä superohjelmaa! (Sveitsinlinkkari on kiva, mutta vasara on parempi naulaamiseen)."
          },
          {
            "id": "kayttotaidot_5_q14",
            "type": "spot_the_ai",
            "question": "Etsi joukosta lausahdus, joka neuvoo käyttämään \"tekoälytyökalua pakista\" selvästi aivan täysin väärään ja hölmöön tarkoitukseen!",
            "options": [
              "'Käytä musiikkitekoälyä säveltämään kiva taustamusiikki luokan omaan näytelmään.'",
              "'Jos haluat korjata saksan kielen läksysi kielioppivirheet, kokeile tekstitekoälyä.'",
              "'Kun etsit nopeinta autoreittiä mökille, käytä reittinavigaattoria puhelimessasi.'",
              "'Käytä kameran yksinkertaista kääntäjäsovellusta kirjoittamaan viiden sivun satu avaruusolioista.'"
            ],
            "correctAnswer": "'Käytä kameran yksinkertaista kääntäjäsovellusta kirjoittamaan viiden sivun satu avaruusolioista.'",
            "explanation": "Kamerakääntäjä (kuten Google Lens) on loistava pienten kylttien ja sanojen lukija, mutta se ei osaa lainkaan keksiä tarinoita tai satuja. Pitkiä satuja varten tarvitset ehdottomasti luovan tekstigeneraattorin."
          },
          {
            "id": "kayttotaidot_5_q15",
            "type": "reverse_prompt",
            "question": "Valitsit pakista tietyn sovelluksen, johon syötit tarkan ohjeen. Sovellus mietti muutaman sekunnin ja tuotti sinulle valmiin, hauskan ja rytmikkään hiphop-kappaleen autojen pesemisestä. Mikä ohjelma oli kyseessä?",
            "options": [
              "Kuvageneraattori",
              "Musiikki- ja äänigeneraattori",
              "Perinteinen tekstikääntäjä",
              "Matematiikan laskusovellus"
            ],
            "correctAnswer": "Musiikki- ja äänigeneraattori",
            "explanation": "Musiikkigeneraattorit on ohjelmoitu ymmärtämään ja tuottamaan nimenomaan tahtia, rytmiä, melodioita ja erilaisia soittimia. Ne ovat ainoa työkalu, joka osaa tehdä syöttämästäsi tekstistä ihka oikealta kuulostavan laulun!"
          }
        ]
      },
      {
        "id": "kayttotaidot_6",
        "name": "Tavarat siististi kyytiin",
        "questions": [
          {
            "id": "kayttotaidot_6_q1",
            "type": "true_false",
            "question": "Tekoäly osaa muuttaa pitkän, tylsän ja todella vaikeilla sanoilla kirjoitetun uutisen lyhyeksi ja helposti ymmärrettäväksi tekstiksi.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Oikein",
            "explanation": "Tekoäly on kuin pakkausmestari! Se osaa ottaa valtavan määrän vaikeaa tietoa ja \"pakata\" sen pääasiat siististi lyhyempään ja paljon selkeämpään muotoon."
          },
          {
            "id": "kayttotaidot_6_q2",
            "type": "multiple_choice",
            "question": "Mitä \"tavaroiden pakkaaminen siististi kyytiin\" tarkoittaa käytännössä, kun puhutaan tekoälystä ja teksteistä?",
            "options": [
              "Sitä, että tekoäly tulostaa paperia ja pakkaa sen oikeaan pahvilaatikkoon.",
              "Sitä, että tekoäly tiivistää pitkän ja sekavan tekstin siistiksi muistilistaksi.",
              "Sitä, että tekoäly poistaa kaikki sanat ja jättää jäljelle vain tyhjän sivun.",
              "Sitä, että tekoäly keksii tarinan loppuun täysin uuden ja pitkän jatko-osan."
            ],
            "correctAnswer": "Sitä, että tekoäly tiivistää pitkän ja sekavan tekstin siistiksi muistilistaksi.",
            "explanation": "Kun tekstiä on liikaa, tekoäly voi järjestää sen selkeästi. Se pystyy muuttamaan sekasotkun ranskalaisiksi viivoiksi tai hienoiksi taulukoiksi!"
          },
          {
            "id": "kayttotaidot_6_q3",
            "type": "scenario",
            "question": "SKENAARIO: AI vanin uuden radion käyttöohje on 10 sivua pitkä ja täynnä vaikeita insinöörien ammattisanoja. Aikaa radion säätämiseen on vain vähän. Miten tekoälyapukuski voi auttaa parhaiten?",
            "options": [
              "Pyydän sitä kääntämään ohjeen muinaiselle latinan kielelle.",
              "Pyydän sitä tiivistämään ohjeen kolmeen helpoimpaan askelmerkkiin.",
              "Pyydän sitä tilaamaan netistä meille täysin uuden ja erilaisen radion.",
              "Pyydän tekoälyä lukemaan koko 10 sivua minulle todella hitaasti ääneen."
            ],
            "correctAnswer": "Pyydän sitä tiivistämään ohjeen kolmeen helpoimpaan askelmerkkiin.",
            "explanation": "Pitkien \"litaniat\" ja ohjekirjojen tiivistäminen on tekoälyn vahvinta osaamista. Se osaa etsiä tekstistä ne kaikkein tärkeimmät asiat ja laittaa ne selkeään järjestykseen."
          },
          {
            "id": "kayttotaidot_6_q4",
            "type": "drag_drop",
            "question": "Järjestä askeleet fiksusti! Miten muutat vaikean koulutekstin helpoksi tekoälyn avulla?",
            "correctAnswer": {
              "Kopioi tai valokuvaa vaikea teksti oppikirjasta laitteeseen.": "1. vaihe",
              "Kirjoita tekoälylle ohje: 'Tiivistä tämä teksti lyhyesti ja selkosuomeksi.'": "2. vaihe",
              "Syötä teksti tekoälylle ja paina 'Lähetä'.": "3. vaihe",
              "Lue tekoälyn palauttama lyhyt ja selkeä tiivistelmä aiheesta.": "4. vaihe"
            },
            "explanation": "Aina pitää ensin antaa tekoälylle materiaali (teksti), ja heti perään selkeä ohje siitä, miten haluat sen \"pakattavan\"!",
            "draggables": [
              "Kopioi tai valokuvaa vaikea teksti oppikirjasta laitteeseen.",
              "Kirjoita tekoälylle ohje: 'Tiivistä tämä teksti lyhyesti ja selkosuomeksi.'",
              "Syötä teksti tekoälylle ja paina 'Lähetä'.",
              "Lue tekoälyn palauttama lyhyt ja selkeä tiivistelmä aiheesta."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "kayttotaidot_6_q5",
            "type": "drag_drop",
            "question": "Raahaa oikeat tiivistämisen ohjeet (promptit) niiden oikeisiin lopputuloksiin!",
            "draggables": [
              "'Selitä tämä teksti aivan kuin olisin 8-vuotias lapsi.'",
              "'Tee tästä tekstistä selkeä ranskalainen viivalista.'",
              "'Poimi tästä pitkästä tekstistä minulle pelkät autojen merkit.'"
            ],
            "dropZones": [
              "Vaikeat sanat katoavat ja teksti muuttuu leikkisäksi",
              "Lopputulos on lyhyt muistilista ilman pitkiä, puuduttavia lauseita",
              "Turha teksti katoaa ja jäljelle jää vain haettu yksityiskohta"
            ],
            "correctAnswer": {
              "'Selitä tämä teksti aivan kuin olisin 8-vuotias lapsi.'": "Vaikeat sanat katoavat ja teksti muuttuu leikkisäksi",
              "'Tee tästä tekstistä selkeä ranskalainen viivalista.'": "Lopputulos on lyhyt muistilista ilman pitkiä, puuduttavia lauseita",
              "'Poimi tästä pitkästä tekstistä minulle pelkät autojen merkit.'": "Turha teksti katoaa ja jäljelle jää vain haettu yksityiskohta"
            },
            "explanation": "Muodon antaminen on avain onneen. Voit pyytää asioita selitettynä tietylle iälle, haluttuna luettelona tai vain yksittäisen tiedon kalastamisena isosta tekstimerestä!"
          },
          {
            "id": "kayttotaidot_6_q6",
            "type": "spot_the_ai",
            "question": "Kuka näistä on selvästi käyttänyt tekoälyä tiivistämään (pakkaamaan) pitkän ja sekavan tarinan kaikkein parhaiten ja siisteimmin?",
            "options": [
              "'Tässä on 20 sivua tekstiä, jossa selitetään jokainen auton mutteri erikseen.'",
              "'Tässä on lyhyt kolmen kohdan lista tarinan päähenkilöistä ja loppuratkaisusta.'",
              "'Tässä on alkuperäinen tarina, mutta kaikki kirjaimet on muutettu isoiksi ja punaisiksi.'",
              "'Tässä on tarinan alku, mutta loppuosa puuttuu koska paperi loppui kesken.'"
            ],
            "correctAnswer": "'Tässä on lyhyt kolmen kohdan lista tarinan päähenkilöistä ja loppuratkaisusta.'",
            "explanation": "Hyvä tiivistelmä karsii turhat asiat pois ja jättää jäljelle vain ytimen, aivan kuten hyvin pakattu autotalli, josta löytää heti etsimänsä työkalun."
          },
          {
            "id": "kayttotaidot_6_q7",
            "type": "reverse_prompt",
            "question": "AI vanin ruudulle ilmestyy teksti: \"Pääasia on tämä: Sähköautot ovat hiljaisia ja ympäristöystävällisiä, koska ne eivät tarvitse bensaa toimiakseen.\" Mikä oli pitkän tekstin jälkeen antamasi ohje?",
            "options": [
              "Kirjoita minulle kokonainen monimutkainen yliopistoessee sähköautoista.",
              "Tiivistä äskeinen valtavan pitkä teksti vain yhteen selkeään lauseeseen.",
              "Käännä teksti suoraan englanniksi ja lisää siihen paljon uusia asioita.",
              "Piirrä kuva sähköautosta, joka ajaa todella kovaa maantiellä."
            ],
            "correctAnswer": "Tiivistä äskeinen valtavan pitkä teksti vain yhteen selkeään lauseeseen.",
            "explanation": "Asettamalla \"rajoituksia\" (esim. vain yksi lause tai 50 sanaa), pakotat tekoälyn etsimään kaikkein tärkeimmän ytimen ja puristamaan tekstin todella tiiviiksi ja selkeäksi!"
          },
          {
            "id": "kayttotaidot_6_q8",
            "type": "true_false",
            "question": "Kun tekoäly tiivistää satoja sivuja pitkän kirjan yhdeksi lyhyeksi tekstiksi, aivan jokainen kirjan pieni yksityiskohta ja sivuhahmo säilyy siinä varmasti mukana.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Tiivistäminen tarkoittaa aina karsimista! Jotta tekstistä tulee lyhyt ja siisti, tekoälyn on pakko jättää pois vähemmän tärkeitä yksityiskohtia. Tarkista siis aina, ettei jotain todella tärkeää kadonnut."
          },
          {
            "id": "kayttotaidot_6_q9",
            "type": "multiple_choice",
            "question": "Mikä ihme on \"selkosuomi\", jota tekoälyä voi usein pyytää käyttämään tiivistyksissä tai asioiden selittämisessä?",
            "options": [
              "Se on salainen kieli, jota vain ja ainoastaan tietokoneet osaavat lukea.",
              "Se on suomen kieltä, josta on tehty rakenteeltaan paljon helpompaa lukea ja ymmärtää.",
              "Se on kieli, jota puhutaan aina vain silmät kiinni ja selkä edellä kävellessä.",
              "Se on englannin ja suomen kielen todella nopea ja sekava sekoitus."
            ],
            "correctAnswer": "Se on suomen kieltä, josta on tehty rakenteeltaan paljon helpompaa lukea ja ymmärtää.",
            "explanation": "Selkokieli on mahtava työkalu! Kun teksti muutetaan tekoälyllä selkokieliseksi, siitä katoavat vaikeat ammattisanat, sivistyssanat ja liian pitkät lauseet. Se auttaa monia ymmärtämään asiat nopeammin!"
          },
          {
            "id": "kayttotaidot_6_q10",
            "type": "scenario",
            "question": "SKENAARIO: Laitat tekoälyn tiivistämään pitkän historian läksyn muistilistaksi kokeeseen kertaamista varten. Luet pelkän tiivistelmän, mutta kokeessa kysytäänkin tarkkaa vuosilukua, jota ei ollut tekoälyn tiivistelmässä mukana! Mitä tästä opimme?",
            "options": [
              "Tekoäly tiivistää huonosti ja on siksi aivan täysin hyödytön koulussa.",
              "Tiivistelmä auttaa ymmärtämään ison kuvan, mutta tarkat yksityiskohdat kannattaa lukea oikeasta kirjasta.",
              "Opettaja toimi täysin väärin kysyessään kokeessa tarkkaa vuosilukua.",
              "Tekoäly poisti vuosiluvut kokonaan, koska numerot vievät aina liikaa tilaa tietokoneelta."
            ],
            "correctAnswer": "Tiivistelmä auttaa ymmärtämään ison kuvan, mutta tarkat yksityiskohdat kannattaa lukea oikeasta kirjasta.",
            "explanation": "Tekoälyn tekemä muistilista on mahtava kertausapu, mutta se ei korvaa koko oppikirjan lukemista. Tärkeät \"pienet varaosat\" ja faktat pitää usein opetella alkuperäisestä tekstistä!"
          },
          {
            "id": "kayttotaidot_6_q11",
            "type": "drag_drop",
            "question": "Raahaa sekava \"matkatavara\" (teksti) siihen \"pakkaustapaan\" (muotoon), jolla tekoäly voi järjestää sen fiksusti!",
            "draggables": [
              "Pitkä ja sekava lauselista omenoista, vasaroista, nauloista ja banaaneista",
              "Aikuisten vaikea ja pitkä ohjekirja autotallin oven avaamiseen",
              "Kymmenen sivun pituinen ja rönsyilevä tarina perheen automatkasta"
            ],
            "dropZones": [
              "Järjestää asiat kahteen siistiin taulukkoon (Työkalut ja Hedelmät)",
              "Tekee tekstistä helpon ja lyhyen pikaohjeen askel askeleelta",
              "Tiivistää koko juonen yhdeksi ainoaksi selkeäksi kappaleeksi"
            ],
            "correctAnswer": {
              "Pitkä ja sekava lauselista omenoista, vasaroista, nauloista ja banaaneista": "Järjestää asiat kahteen siistiin taulukkoon (Työkalut ja Hedelmät)",
              "Aikuisten vaikea ja pitkä ohjekirja autotallin oven avaamiseen": "Tekee tekstistä helpon ja lyhyen pikaohjeen askel askeleelta",
              "Kymmenen sivun pituinen ja rönsyilevä tarina perheen automatkasta": "Tiivistää koko juonen yhdeksi ainoaksi selkeäksi kappaleeksi"
            },
            "explanation": "Tekoälyn järjestelytaidot ovat huippuluokkaa! Se osaa lajitella sekalaiset sanat taulukoiksi, puristaa tarinat ytimekkäiksi ja pilkkoa vaikeat ohjeet selkeiksi stepeiksi."
          },
          {
            "id": "kayttotaidot_6_q12",
            "type": "drag_drop",
            "question": "Olet lukenut todella vaikean uutisen robottiautoista ja haluat tehdä siitä kivan muistilistan muille. Järjestä \"siistin pakkaamisen\" askeleet!",
            "correctAnswer": {
              "Syötä uutisen pitkä teksti tekoälyn ohjelmaan.": "1. vaihe",
              "Anna ohje: 'Tee tästä artikkelista selkeä viiden kohdan muistilista.'": "2. vaihe",
              "Lue lista ja tarkista, ettei tekoäly jättänyt vahingossa pois jotain todella tärkeää faktaa.": "3. vaihe",
              "Käytä hienoa ja valmista muistilistaa asioiden esittelemiseen kavereille.": "4. vaihe"
            },
            "explanation": "Tekoälyn ohjeistaminen on yksinkertaista, mutta kaikkein tärkein työvaihe on ihmisen tekemä tarkistus lopussa! Näin varmistat, että asiat menivät kyytiin oikein.",
            "draggables": [
              "Syötä uutisen pitkä teksti tekoälyn ohjelmaan.",
              "Anna ohje: 'Tee tästä artikkelista selkeä viiden kohdan muistilista.'",
              "Lue lista ja tarkista, ettei tekoäly jättänyt vahingossa pois jotain todella tärkeää faktaa.",
              "Käytä hienoa ja valmista muistilistaa asioiden esittelemiseen kavereille."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "kayttotaidot_6_q13",
            "type": "multiple_choice",
            "question": "Tekoälyä pyydetään usein tekemään pitkästä tekstistä lista \"ranskalaisilla viivoilla\". Mitä ne oikeastaan ovat?",
            "options": [
              "Viivoja, jotka on piirretty paperiin aidolla ohuella ranskanleivällä.",
              "Lyhyitä ja selkeitä listan kohtia, joiden edessä on pieni merkki tai luetelmaviiva.",
              "Sanoja ja tekstejä, jotka on vahingossa käännetty kokonaan ranskan kielelle.",
              "Viivoja, jotka ovat väriltään aina pakollisesti sinisiä, valkoisia ja punaisia."
            ],
            "correctAnswer": "Lyhyitä ja selkeitä listan kohtia, joiden edessä on pieni merkki tai luetelmaviiva.",
            "explanation": "Ranskalaiset viivat (bullet points) ovat tekstin pelastaja! Ne pilkkovat asiat omiin erillisiin palloihin tai viivoihin, jolloin lista on silmälle erittäin nopea ja mukava lukea."
          },
          {
            "id": "kayttotaidot_6_q14",
            "type": "spot_the_ai",
            "question": "Etsi joukosta huonoin ohje (prompti), jos haluat tekoälyn oikeasti tiivistävän vaikean tieteellisen tekstin sinulle paljon helpommin luettavaan muotoon!",
            "options": [
              "'Selitä tämän pitkän tekstin tärkein opetus minulle vain kolmella lauseella.'",
              "'Tee tästä tiedetekstistä selkeä lista ranskalaisilla viivoilla.'",
              "'Kirjoita tämä teksti täsmälleen yhtä pitkänä takaisin, mutta vaihda sanat paljon vaikeampiin sivistyssanoihin.'",
              "'Tiivistä ja selitä tämä teksti niin helpoksi, että 1-luokkalainenkin ymmärtää sen heti.'"
            ],
            "correctAnswer": "'Kirjoita tämä teksti täsmälleen yhtä pitkänä takaisin, mutta vaihda sanat paljon vaikeampiin sivistyssanoihin.'",
            "explanation": "Tämä ohje on täysi vastakohta tiivistämiselle! Jos vaikeutat sanoja ja pidät tekstin pitkänä, teet \"matkatavaroiden pakkaamisesta\" aivan tahallaan hankalampaa ja raskaampaa lukea."
          },
          {
            "id": "kayttotaidot_6_q15",
            "type": "reverse_prompt",
            "question": "Syötit tekoälylle todella sekavan viestin, jossa oli listattu teidän perheen automatkan kaikki eväät ja ostohinnat ihan sekaisin. Tekoäly tulosti ruudulle kauniin ruudukon, jossa toisella puolella luki ruoka ja toisella sen hinta. Millä ohjeella sait sen aikaan?",
            "options": [
              "Tee näistä sekavista tiedoista heti selkeä ja siisti taulukko.",
              "Kirjoita näistä eväistä pitkä ja jännittävä fantasiatarina metsään.",
              "Poista tekstistä ihan kaikki numerot ja hinnat kokonaan.",
              "Käännä kaikki eväiden nimet täysin toiselle kielelle ja sotke ne."
            ],
            "correctAnswer": "Tee näistä sekavista tiedoista heti selkeä ja siisti taulukko.",
            "explanation": "Taulukointi on yksi tekoälyn siisteimpiä taitoja! Kun datamassa on sekavaa, sana \"taulukko\" (table) on kuin taikasana, joka järjestää kaiken suoriin ja ymmärrettäviin sarakkeisiin."
          }
        ]
      },
      {
        "id": "kayttotaidot_7",
        "name": "G. Finaali – Suuri Mestariralli",
        "questions": [
          {
            "id": "kayttotaidot_7_q1",
            "type": "true_false",
            "question": "Tekoäly osaa lukea ajatuksiasi erinomaisesti! Jos kirjoitat sille vain yhden sanan, kuten \"auto\", se keksii aina varmasti täydellisen tarinan juuri siitä asiasta, jota salaa mielessäsi ajattelit.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Tekoäly ei ikinä osaa lukea ajatuksia. Aivan kuten navigaattori tarvitsee täsmällisen ja tarkan osoitteen, tekoäly vaatii tarkan ohjeen (promptin) tuottaakseen juuri sinulle sopivan tuloksen!"
          },
          {
            "id": "kayttotaidot_7_q2",
            "type": "multiple_choice",
            "question": "Mitä asiantuntijat tarkoittavat sillä, kun tekoäly \"hallusinoi\" faktojen kanssa?",
            "options": [
              "Sitä, että kone nukahtaa ja näkee visuaalisia unia.",
              "Sitä, että laite alkaa soittaa musiikkia kysymättä lupaa.",
              "Sitä, että tekoäly keksii täysin olemattoman tiedon ja esittää sen luottavaisesti varmana faktana.",
              "Sitä, että auton näyttöruutu menee yhtäkkiä aivan sumeaksi."
            ],
            "correctAnswer": "Sitä, että tekoäly keksii täysin olemattoman tiedon ja esittää sen luottavaisesti varmana faktana.",
            "explanation": "Tekoäly (kielimalli) on sana-arvauskone, joka vain yhdistelee sanoja todennäköisyyksien mukaan. Sillä ei ole käsitystä todellisesta maailmasta, joten se saattaa kertoa vakuuttavan kuuloisia valheita (hallusinaatioita) faktoina!"
          },
          {
            "id": "kayttotaidot_7_q3",
            "type": "scenario",
            "question": "SKENAARIO: Olet tekemässä tärkeää esitelmää. Miten toimit, jotta \"katse pysyy ulos tuulilasista\" ja varmistat tekoälyn antamien tietojen olevan oikeasti totta?",
            "options": [
              "Kopioin aina täysin suoraan sen ihka ensimmäisen tuloksen, jonka tekoäly minulle antaa.",
              "Tarkistan tekoälyn antamat samat faktat myös oikeasta kirjasta tai muusta luotettavasta ja virallisesta lähteestä.",
              "Kirjoitan tekoälyn antamat tekstit esitelmään vain punaisella värillä.",
              "Jätän koko esitelmän tekemättä, koska tekoäly on täysin hyödytön."
            ],
            "correctAnswer": "Tarkistan tekoälyn antamat samat faktat myös oikeasta kirjasta tai muusta luotettavasta ja virallisesta lähteestä.",
            "explanation": "Lähdekritiikki ja ristiintarkistus ovat supertaitoja. Älä koskaan luota sokeasti yhteen lähteeseen tai tekoälyn nopeaan vastaukseen, vaan varmista tärkeät faktat aina toisaalta!"
          },
          {
            "id": "kayttotaidot_7_q4",
            "type": "drag_drop",
            "question": "Järjestä täydellisen ja tarkan promptin (ohjeen) rakennuspalikat! Miten annat navigaattorille parhaan mahdollisen osoitteen?",
            "correctAnswer": {
              "Kerro tekoälylle ensin rooli (esim. 'Toimi kuin fysiikan opettaja').": "1. vaihe",
              "Anna sille selkeä tehtävä (esim. 'Selitä miten auton sähkömoottori toimii').": "2. vaihe",
              "Lisää konteksti ja kohde (esim. 'Käytä helppoja sanoja, koska selität asian 10-vuotiaalle').": "3. vaihe",
              "Määritä vastauksen muoto (esim. 'Tee vastauksesta lyhyt, kolmen kohdan ranskalainen viivalista').": "4. vaihe"
            },
            "explanation": "Kun annat koneelle tarkat speksit eli roolin, tehtävän, taustatiedot ja halutun tulostusmuodon, tekoälystä tulee mielettömän taitava ja tarkka työkalu.",
            "draggables": [
              "Kerro tekoälylle ensin rooli (esim. 'Toimi kuin fysiikan opettaja').",
              "Anna sille selkeä tehtävä (esim. 'Selitä miten auton sähkömoottori toimii').",
              "Lisää konteksti ja kohde (esim. 'Käytä helppoja sanoja, koska selität asian 10-vuotiaalle').",
              "Määritä vastauksen muoto (esim. 'Tee vastauksesta lyhyt, kolmen kohdan ranskalainen viivalista')."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ]
          },
          {
            "id": "kayttotaidot_7_q5",
            "type": "drag_drop",
            "question": "Valitse \"oikea työkalu pakista\"! Yhdistä tekemäsi digitaalinen työ ja siihen kaikkein parhaiten sopiva tekoälysovellus.",
            "draggables": [
              "Kielimalli (kuten Gemini tai ChatGPT)",
              "Kuvageneraattori",
              "Kääntäjä ja puhesynteesi"
            ],
            "dropZones": [
              "Esitelmän tekstin ideoiminen, kirjoittaminen ja oikoluku",
              "Uusien ja upeiden digitaalisten piirrosten luominen tarinaan",
              "Vieraskielisen kyltin lukeminen ja sen ääntäminen ääneen matkalla"
            ],
            "correctAnswer": {
              "Kielimalli (kuten Gemini tai ChatGPT)": "Esitelmän tekstin ideoiminen, kirjoittaminen ja oikoluku",
              "Kuvageneraattori": "Uusien ja upeiden digitaalisten piirrosten luominen tarinaan",
              "Kääntäjä ja puhesynteesi": "Vieraskielisen kyltin lukeminen ja sen ääntäminen ääneen matkalla"
            },
            "explanation": "Yleistyökalut ovat hyviä, mutta monimutkaisissa tehtävissä (kuten kuvissa ja musiikissa) kannattaa ehdottomasti käyttää juuri kyseiseen tehtävään erikoistunutta omaa tekoälyohjelmaa."
          },
          {
            "id": "kayttotaidot_7_q6",
            "type": "spot_the_ai",
            "question": "Etsi joukosta erittäin huono ja epäselvä \"hakuammunta\"-prompti, jolla et takuulla saa tekoälyltä haluamaasi hyvää tulosta!",
            "options": [
              "'Keksi minulle kolme hauskaa lyhyttä vitsiä autoista ja koirista.'",
              "'Selitä tämä pitkä teksti lyhyesti aivan kuin olisin 8-vuotias.'",
              "'Tee heti mulle se joku hieno tarina.'",
              "'Toimi kuin merirosvo ja toivota matkustajat tervetulleeksi lyhyellä lauseella.'"
            ],
            "correctAnswer": "'Tee heti mulle se joku hieno tarina.'",
            "explanation": "Epätarkka ohje jättää tekoälyn täysin arvailemaan! Jos et kerro teemaa, pituutta, kohderyhmää tai tyyliä, saat luultavasti todella tylsän ja puuduttavan geneerisen vastauksen."
          },
          {
            "id": "kayttotaidot_7_q7",
            "type": "reverse_prompt",
            "question": "Tekoäly pahoittelee kiltisti ensimmäistä vastaustaan, ja kirjoittaa sen tilalle uuden listan: \"1. Korit 2. Moottori 3. Renkaat.\" Mikä oli tekemäsi \"ratinkääntö\" (korjausliike)?",
            "options": [
              "Tuo edellinen vastaus oli aivan liian sekava, tiivistä sen pääasiat yhdellä helpolla listalla.",
              "Kirjoita minulle kokonainen uusi ja paksu kirja auton renkaista.",
              "Käännä tuo teksti suoraan englanniksi ja lisää siihen paljon uutta faktaa.",
              "Piirrä valokuva sähköautosta, joka ajaa kovaa."
            ],
            "correctAnswer": "Tuo edellinen vastaus oli aivan liian sekava, tiivistä sen pääasiat yhdellä helpolla listalla.",
            "explanation": "Ratinkääntö tarkoittaa iterointia eli tekoälyn ohjaamista oikeaan suuntaan! Jos laite antaa liian vaikean tai tylsän tekstin, voit aina pyytää sitä tiivistämään, muuttamaan sävyä tai luomaan \"ranskalaisia viivoja\" (listoja)."
          },
          {
            "id": "kayttotaidot_7_q8",
            "type": "true_false",
            "question": "Tekoälyn tekemän tekstin ensimmäinen versio on poikkeuksetta aina täysin sataprosenttisen valmis, eikä sinun kannata ikinä tuhlata aikaasi sen muokkaamiseen tai palautteen antamiseen (iteroimiseen).",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Promptaaminen on keskustelua ja laitteen testaamista. Ensimmäinen vastaus on harvoin täydellinen, joten lukeminen ja palautteen antaminen (iterointi) ovat mestarikuskin tärkeimpiä taitoja!"
          },
          {
            "id": "kayttotaidot_7_q9",
            "type": "multiple_choice",
            "question": "Miten \"apukuski\" (tekoäly) on sinulle kaikkein luovin ja fiksuin apu, kun edessäsi on tyhjä paperi ja aiot kirjoittaa uuden kouluaineen?",
            "options": [
              "Se voi kirjoittaa esseen täysin valmiiksi viidessä sekunnissa, jotta minun ei tarvitse miettiä asiaa lainkaan.",
              "Se voi heitellä minulle nopeasti kymmeniä hauskoja aiheideaoita aivoriihikaverina, joista voin valita suosikkini ja kirjoittaa itse.",
              "Se voi laulaa minulle laulun, jotta unohdan koko läksyn täydellisesti.",
              "Se voi etsiä toisen oppilaan tekemän esseen netistä ja kopioida sen minulle."
            ],
            "correctAnswer": "Se voi heitellä minulle nopeasti kymmeniä hauskoja aiheideaoita aivoriihikaverina, joista voin valita suosikkini ja kirjoittaa itse.",
            "explanation": "Tekoäly auttaa ylittämään luovan lukon! Se on väsymätön ideoiden heittelijä, joka auttaa omat aivosi vauhtiin. Lopullinen luova yhdistely ja työ tehdään kuitenkin aina itse."
          },
          {
            "id": "kayttotaidot_7_q10",
            "type": "scenario",
            "question": "SKENAARIO: AI vanin käyttöohje on täynnä todella vaikeita ja puuduttavia insinöörisanoja. Aikaa tarkan napin etsimiseen on vain minuutti. Miten käytät tekoälyn pakkaustaitoja eli kykyä laittaa \"tavarat siististi kyytiin\"?",
            "options": [
              "Pyydän tekoälyä kääntämään laitteen 10-sivuisen ohjekirjan suoraan latinaksi.",
              "Käsken tekoälyn lukemaan koko pitkän tekstin minulle erittäin hitaasti ääneen.",
              "Kopioin vaikean tekstin tekoälylle ja pyydän sitä tiivistämään ohjeen pelkkiin kolmeen tärkeimpään askelmerkkiin (ranskalaisiin viivoihin).",
              "Pyydän tekoälyä ostamaan netistä minulle uuden, erilaisen radion autoon."
            ],
            "correctAnswer": "Kopioin vaikean tekstin tekoälylle ja pyydän sitä tiivistämään ohjeen pelkkiin kolmeen tärkeimpään askelmerkkiin (ranskalaisiin viivoihin).",
            "explanation": "Pitkien tekstien ja vaikeiden faktojen tiivistäminen \"selkosuomeksi\" tai ranskalaisiksi viivoiksi (bullet points) on tekoälyn ylivoimaisesti vahvinta osaamista ja uskomattoman kätevä käyttötaito!"
          }
        ]
      }
    ]
  }
];
