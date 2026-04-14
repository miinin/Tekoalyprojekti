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
            "id": "q_p1_1",
            "type": "true_false",
            "question": "AI vanin kojelaudassa asuu pieni oikea keksijä, joka vastaa kaikkiin kysymyksiin.",
            "options": ["Oikein", "Väärin"],
            "correctAnswer": "Väärin",
            "explanation": "Tekoäly ei ole oikea elävä ihminen tai olento, vaan ihmisen koodaama erikoisohjelma. Se asuu laitteissa koodin muodossa!"
          },
          {
            "id": "q_p1_2",
            "type": "multiple_choice",
            "question": "Mikä tekoäly oikeastaan on?",
            "options": ["Taikuutta autotallissa", "Elävä robottieläin", "Koodattu ohjelma", "Avaruudesta tullut kone"],
            "correctAnswer": "Koodattu ohjelma",
            "explanation": "Tekoäly ei ole taikuutta, vaan se on ihmisten suunnittelema ja koodaama erikoisohjelma, joka suorittaa sille annettuja tehtäviä."
          },
          {
            "id": "q_p1_3",
            "type": "scenario",
            "question": "SKENAARIO: Olet automatkalla ja kysyt puhelimesi ääniavustajalta reittiä huvipuistoon. Kaverisi takapenkillä huutaa: \"Vau, puhelimen sisällä on taikuri!\" Mitä vastaat hänelle?",
            "options": ["Niin on, se osaa taikoa reitin!", "Ei, se on koodattu ohjelma.", "Se on taikuutta ja tiedettä.", "Puhelimessa asuu pieni robotti."],
            "correctAnswer": "Ei, se on koodattu ohjelma.",
            "explanation": "Ääniavustaja käyttää tekoälyä, joka on ihmisten tekemä ohjelma, ei taikuutta tai taikuri."
          },
          {
            "id": "q_p1_4",
            "type": "ordering",
            "question": "Järjestä, miten AI vanin tekoäly oikeasti syntyy ja toimii, ensimmäisestä askeleesta viimeiseen.",
            "options": ["Ihmiset keksivät hyvän idean", "Koodarit kirjoittavat ohjelman", "Tekoäly ladataan auton tietokoneeseen", "Auto osaa etsiä reitit koodin avulla"],
            "correctAnswer": ["Ihmiset keksivät hyvän idean", "Koodarit kirjoittavat ohjelman", "Tekoäly ladataan auton tietokoneeseen", "Auto osaa etsiä reitit koodin avulla"],
            "explanation": "Koska tekoäly ei synny taikaiskusta, ihmisen täytyy ensin keksiä idea ja koodata se valmiiksi ohjelmaksi."
          },
          {
            "id": "q_p1_5",
            "type": "spot_the_ai",
            "question": "Mikä näistä autotallin tai auton asioista käyttää todennäköisimmin tekoälyä?",
            "options": ["Mekaaninen jakoavain", "Perinteinen polkupyörä", "Reittejä ehdottava navigaattori", "Puhjennut autonrengas"],
            "correctAnswer": "Reittejä ehdottava navigaattori",
            "explanation": "Navigaattori käyttää tietokoneohjelmaa eli tekoälyä laskeakseen nopeimman reitin. Muut ovat perinteisiä tavaroita ilman koodia."
          },
          {
            "id": "q_p1_6",
            "type": "reverse_prompt",
            "question": "Auton tekoälyradio soittaa tällaisen laulun: \"Auto kulkee, kumit laulaa, tekoäly karttaa kantaa!\" Millä kehotteella (promptilla) tämä saatiin aikaan?",
            "options": ["Kirjoita pitkä uutinen nopeasta autosta.", "Tee todella surullinen runo sateesta.", "Keksi lyhyt ja iloinen riimi automatkasta.", "Kerro yksityiskohtaisesti kuinka moottori korjataan."],
            "correctAnswer": "Keksi lyhyt ja iloinen riimi automatkasta.",
            "explanation": "Tekoäly ei toimi omasta tahdostaan, vaan se suorittaa täsmälleen ihmisen sille antaman ohjeen eli promptin mukaisen tehtävän."
          },
          {
            "id": "q_p1_7",
            "type": "multiple_choice",
            "question": "Kun tekoäly antaa sinulle vastauksen tai ajaa AI vania, kuka sen alun perin on opettanut ja koodannut tekemään niin?",
            "options": ["Toinen tekoäly", "Tietokone ihan itse", "Ihminen", "Taikuri"],
            "correctAnswer": "Ihminen",
            "explanation": "Tekoäly on aina ihmisen koodaama erikoisohjelma. Se ei osaa tehdä yhtään mitään ilman, että ihminen on sen ensin rakentanut."
          },
          {
            "id": "q_p1_8",
            "type": "true_false",
            "question": "Tekoälyn toiminta on puhdasta taikuutta, jota edes sen keksijät ja koodarit eivät ymmärrä.",
            "options": ["Oikein", "Väärin"],
            "correctAnswer": "Väärin",
            "explanation": "Tekoäly ei ole taikuutta. Se perustuu koodiin, jonka fiksut asiantuntijat ovat huolellisesti kirjoittaneet tietokoneelle."
          },
          {
            "id": "q_p1_9",
            "type": "drag_drop",
            "question": "Yhdistä asiat oikeisiin laatikoihin sen perusteella, mitä ne oikeasti ovat.",
            "draggables": ["Tekoäly", "Ihminen", "Taikasauva"],
            "dropZones": ["Koodattu ohjelma", "Elävä olento", "Taikuutta"],
            "correctAnswer": {"Tekoäly": "Koodattu ohjelma", "Ihminen": "Elävä olento", "Taikasauva": "Taikuutta"},
            "explanation": "Muista tärkeä sääntö: tekoäly on vain koodattu ohjelma, ei koskaan taikuutta tai oikea elävä olento!"
          },
          {
            "id": "q_p1_10",
            "type": "multiple_choice",
            "question": "Voiko AI vanin tekoäly olla sinulle oikea, elävä ystävä?",
            "options": ["Kyllä, se on täysin elossa", "Ei, se on vain ohjelma", "Kyllä, jos sille paljon juttelee", "Ei, koska se on vain hidas auto"],
            "correctAnswer": "Ei, se on vain ohjelma",
            "explanation": "Vaikka tekoäly voi jutella kivasti ja auttaa tehtävissä, se on silti vain tietokoneohjelma, ei koskaan elävä olento."
          },
          {
            "id": "q_p1_11",
            "type": "scenario",
            "question": "SKENAARIO: AI vanin näyttö menee yhtäkkiä pimeäksi ja radio lakkaa kuulumasta. Pikkuveljesi pelästyy ja luulee, että auton henki karkasi. Miten rauhoitat hänet?",
            "options": ["Kerron, että tekoäly taisi vain mennä unille.", "Sanon, että ohjelma taisi kaatua tai virta loppua.", "Alan etsiä karannutta henkeä heti autotallista.", "Soitan heti poliisille, koska henki on kadonnut."],
            "correctAnswer": "Sanon, että ohjelma taisi kaatua tai virta loppua.",
            "explanation": "Koska tekoäly on vain tietokoneohjelma, sillä ei ole sielua tai henkeä. Se tarvitsee toimiakseen vain sähköä ja koodia."
          },
          {
            "id": "q_p1_12",
            "type": "true_false",
            "question": "Ensimmäiset tekoälyt syntyivät aivan itsekseen autotallin perällä lojuneista vanhoista varaosista.",
            "options": ["Oikein", "Väärin"],
            "correctAnswer": "Väärin",
            "explanation": "Ohjelmat eivät synny itsekseen. Tekoäly on aina ihmisen rakentama ja koodaama erikoisohjelma."
          },
          {
            "id": "q_p1_13",
            "type": "ordering",
            "question": "Järjestä asiat elävästä olennosta keksittyyn taikuuteen. Aseta tekoäly oikealle paikalleen näiden väliin!",
            "options": ["Oikea ihminen (Elävä olento)", "Tekoäly (Koodattu ohjelma)", "Lentävä matto (Taikuutta)"],
            "correctAnswer": ["Oikea ihminen (Elävä olento)", "Tekoäly (Koodattu ohjelma)", "Lentävä matto (Taikuutta)"],
            "explanation": "Ihminen on elävä olento, tekoäly on tietokoneella toimiva ohjelma, ja lentävät matot ovat olemassa vain saduissa ja taikuudessa."
          },
          {
            "id": "q_p1_14",
            "type": "spot_the_ai",
            "question": "Yksi näistä tavoista ohjata ja liikuttaa AI vania käyttää tekoälyä. Mikä se on?",
            "options": ["Kääntämällä mekaanista rattia omilla käsillä.", "Painaen kaasupoljinta oikealla jalalla.", "Auton tietokone väistää estettä kameroilla ja koodilla.", "Vetämällä käsijarrusta voimakkaasti alamäessä."],
            "correctAnswer": "Auton tietokone väistää estettä kameroilla ja koodilla.",
            "explanation": "Kun tietokoneohjelma on koodattu tekemään itsenäisiä päätöksiä (kuten väistämään estettä), kyseessä on tekoäly. Muut ovat ihmisen tekemiä mekaanisia toimintoja."
          },
          {
            "id": "q_p1_15",
            "type": "reverse_prompt",
            "question": "Tekoälyavustaja vastasi kuskille näin: \"Hei! Olen ihmisen tekemä tietokoneohjelma, jonka tarkoitus on auttaa sinua!\" Mikä seuraavista oli ihmisen antama ohje (prompt)?",
            "options": ["Kerro, mikä on paras lempiruokasi.", "Selitä lyhyesti, mikä ihme sinä oikein olet.", "Tee taikatemppu taikasauvalla.", "Kuka voitti jalkapallopelin eilen illalla?"],
            "correctAnswer": "Selitä lyhyesti, mikä ihme sinä oikein olet.",
            "explanation": "Tekoäly vastaa kysymykseen rehellisesti: se ei ole taikuri tai ihminen, vaan koodattu ohjelma, jonka tarkoitus on auttaa meitä."
          }
        ]
      },
      { "id": "perusteet_2", "name": "Ihmisäly vs. tekoäly", "questions": [
          {
            "id": "q_p2_1",
            "type": "true_false",
            "question": "AI vanin navigaattori on ollut päällä koko päivän. Sille pitää antaa välillä tauko, jotta se ei väsy ja tule vihaiseksi.",
            "options": ["Oikein", "Väärin"],
            "correctAnswer": "Väärin",
            "explanation": "Tekoäly on tietokoneohjelma, jolla ei ole tunteita. Se ei väsy, kyllästy tai suutu, vaikka se tekisi töitä kellon ympäri!"
          },
          {
            "id": "q_p2_2",
            "type": "multiple_choice",
            "question": "Puhutte autossa siitä, kuinka kivaa perillä huvipuistossa tulee olemaan. Miten tekoäly suhtautuu tähän automatkaan?",
            "options": ["Se odottaa innolla tulevia laitteita", "Se laskee ahkerasti nopeinta reittiä", "Se pelkää hurjia vuoristoratoja", "Se toivoo saavansa ison hattaran"],
            "correctAnswer": "Se laskee ahkerasti nopeinta reittiä",
            "explanation": "Ihmisillä on tunteita ja mielikuvitusta, mutta tekoäly on nopea laskukone. Se ei tunne iloa tai pelkoa, vaan keskittyy suorittamaan tehtäväänsä."
          },
          {
            "id": "q_p2_3",
            "type": "scenario",
            "question": "SKENAARIO: Olette ajaneet pitkään ja alat keksiä takapenkillä hauskoja vitsejä ohikiitävistä autoista. Pyydät auton tekoälyä mukaan leikkiin. Miten tekoälyn \"mielikuvitus\" eroaa sinun mielikuvituksestasi?",
            "options": ["Tekoäly osaa nauraa vitsille oikeasti", "Tekoäly keksii asioita omasta päästään", "Tekoälyllä on täydellinen huumorintaju", "Tekoäly vain yhdistelee oppimaansa tietoa"],
            "correctAnswer": "Tekoäly vain yhdistelee oppimaansa tietoa",
            "explanation": "Ihmisellä on aito mielikuvitus. Tekoäly taas \"keksii\" vitsejä vain yhdistelemällä sanoja ja sääntöjä, joita ihmiset ovat sille aiemmin syöttäneet."
          },
          {
            "id": "q_p2_4",
            "type": "drag_drop",
            "question": "Yhdistä ominaisuudet oikeisiin laatikoihin sen mukaan, kuuluvatko ne ihmiselle vai tekoälylle.",
            "draggables": ["Tuntee iloa matkasta", "Laskee sekunnissa satoja reittejä", "Tylsistyy takapenkillä", "Ei tarvitse koskaan yöunia"],
            "dropZones": ["Ihminen", "Tekoäly"],
            "correctAnswer": {"Tuntee iloa matkasta": "Ihminen", "Laskee sekunnissa satoja reittejä": "Tekoäly", "Tylsistyy takapenkillä": "Ihminen", "Ei tarvitse koskaan yöunia": "Tekoäly"},
            "explanation": "Ihmiset tuntevat ja väsyvät. Tekoäly on väsymätön laskukone, jolla ei ole lainkaan omia tunteita tai tarpeita."
          },
          {
            "id": "q_p2_5",
            "type": "ordering",
            "question": "Järjestä ratkaisijat sen mukaan, kuka laskee valtavan matikkalaskun (esim. 5432 x 897) nopeimmin. Aloita nopeimmasta!",
            "options": ["Tietokoneen tekoäly", "Aikuinen laskimen kanssa", "Lapsi ruutupaperin kanssa"],
            "correctAnswer": ["Tietokoneen tekoäly", "Aikuinen laskimen kanssa", "Lapsi ruutupaperin kanssa"],
            "explanation": "Tekoäly ja tietokoneet ovat valtavan nopeita laskemaan numeroita. Ihmisen aivot ovat loistavat luovuudessa, mutta suurissa laskuissa kone on salamannopea voittaja."
          },
          {
            "id": "q_p2_6",
            "type": "spot_the_ai",
            "question": "Kumpi näistä automatkan lauluntekijöistä on todennäköisimmin tekoäly? Etsi vaihtoehto, josta puuttuu aito tunne ja elämänkokemus.",
            "options": ["'Tämä laulu kertoo siitä, kun söimme jäätelöä ja minua nauratti!'", "'Laulu aiheesta jäätelö. Jäätelö on kylmä jälkiruoka, joka sulaa nopeasti.'", "'Muistatko kun lauloimme tätä biisiä ukkosen aikana? Oli vähän jännää!'", "'Olin tosi surullinen kun eväsleipäni putosi maahan kuralätäkköön.'"],
            "correctAnswer": "'Laulu aiheesta jäätelö. Jäätelö on kylmä jälkiruoka, joka sulaa nopeasti.'",
            "explanation": "Tekoäly pystyy luettelemaan faktoja jäätelöstä nopeasti, mutta se ei voi muistella asioita, tuntea makua tai kokea iloa ja surua kuten ihminen."
          },
          {
            "id": "q_p2_7",
            "type": "reverse_prompt",
            "question": "Auton ääniavustaja sanoo: \"Voi ei, onpa todella harmillista, että sataa vettä. Olen niin pahoillani puolestanne!\" Millä kehotteella (promptilla) tekoäly saatiin sanomaan näin?",
            "options": ["Kerro meille sääennuste seuraavalle tunnille.", "Laske kuinka paljon vettä sataa millimetreinä.", "Esitä, että olet surullinen sateisen sään vuoksi.", "Keksi iloinen laulu sateenvarjoista ja lätäköistä."],
            "correctAnswer": "Esitä, että olet surullinen sateisen sään vuoksi.",
            "explanation": "Tekoäly ei oikeasti ole pahoillaan sateesta, koska se ei tunne sääliä. Se kuitenkin osaa hienosti matkia surullista puhetta, jos siltä pyydetään sitä promptilla!"
          },
          {
            "id": "q_p2_8",
            "type": "true_false",
            "question": "Pysähdytte huoltoasemalle tauolle. Auton tekoäly on ahkeroinut reittien kanssa monta tuntia, joten sillekin kannattaa ostaa oma hampurilainen.",
            "options": ["Oikein", "Väärin"],
            "correctAnswer": "Väärin",
            "explanation": "Toisin kuin ihminen, tekoäly ei tunne nälkää eikä se pysty syömään ruokaa. Se tarvitsee toimiakseen ainoastaan sähköä!"
          },
          {
            "id": "q_p2_9",
            "type": "multiple_choice",
            "question": "Missä asiassa sinä olet paljon parempi ja taitavampi kuin maailman nopeinkaan tekoäly?",
            "options": ["Pitkien sanakirjojen ulkoa muistamisessa", "Vaikeiden kertolaskujen ratkaisemisessa", "Oikean ystävyyden ja empatian tuntemisessa", "Tietokonepelien koodirivien lukemisessa"],
            "correctAnswer": "Oikean ystävyyden ja empatian tuntemisessa",
            "explanation": "Tekoäly on mestari käsittelemään tietoa ja numeroita, mutta vain sinä osaat tuntea aitoa ystävyyttä, empatiaa ja välittämistä toisista ihmisistä."
          },
          {
            "id": "q_p2_10",
            "type": "scenario",
            "question": "SKENAARIO: Piirrät autotallissa upean ja täysin uudenlaisen keksinnön paperille pelkän oman mielikuvituksesi avulla. Sitten pyydät tekoälyä piirtämään jotain vastaavaa. Miksi tekoäly tarvitsee sinun ohjeitasi?",
            "options": ["Koska siltä puuttuu täysin oma, aito mielikuvitus.", "Koska se on liian hidas tekemään mitään uutta.", "Koska se piirtää vain ja ainoastaan mustavalkoisena.", "Koska se pelkää tekevänsä liian ruman piirustuksen."],
            "correctAnswer": "Koska siltä puuttuu täysin oma, aito mielikuvitus.",
            "explanation": "Tekoäly osaa luoda hienoja kuvia, mutta se tekee sen aina ihmisen antamien ohjeiden ja ihmisiltä oppimansa tiedon pohjalta. Sillä ei ole omaa luovuutta."
          },
          {
            "id": "q_p2_11",
            "type": "spot_the_ai",
            "question": "Huokaiset takapenkillä: \"Minulla on tosi tylsää, haluaisin olla jo perillä.\" Kuka vastaajista on selvästi tekoäly?",
            "options": ["'Ymmärrän hyvin, matka on ollut pitkä. Pelataanko jotain?'", "'Minuakin vähän väsyttää, mutta onneksi olemme pian perillä.'", "'Kohde saavutetaan 45 minuutin kuluttua. Keskinopeus on 80 km/h.'", "'Katsotaan yhdessä ulos ikkunasta, ehkä sieltä näkyy lehmiä!'"],
            "correctAnswer": "'Kohde saavutetaan 45 minuutin kuluttua. Keskinopeus on 80 km/h.'",
            "explanation": "Tekoäly antaa tarkan ja nopean faktavastauksen täysin ilman tunnetta. Ihmiset sen sijaan ymmärtävät, miltä tylsyys tuntuu, ja yrittävät lohduttaa."
          },
          {
            "id": "q_p2_12",
            "type": "multiple_choice",
            "question": "Mitä auton tekoälynavigaattori osaa tehdä paljon nopeammin kuin yksikään ihminen maailmassa?",
            "options": ["Löytää kaikkien mahdollisten reittien pituudet", "Nauttia kauniista ja aurinkoisista maalaismaisemista", "Keksiä täysin uuden ja opettavaisen sadun", "Maistaa kuinka hyvältä retkieväät maistuvat"],
            "correctAnswer": "Löytää kaikkien mahdollisten reittien pituudet",
            "explanation": "Tekoäly on ohjelma, joka on tehty käsittelemään dataa salamannopeasti. Se ei kuitenkaan voi koskaan nauttia maisemista tai maistaa asioita."
          },
          {
            "id": "q_p2_13",
            "type": "drag_drop",
            "question": "Kummalle antaisit seuraavat tehtävät automatkalla? Raahaa tehtävä joko itsellesi (ihmiselle) tai navigaattorin tekoälylle sen perusteella, kumpi on siinä parempi.",
            "draggables": ["Laske nopein reitti ruuhkassa", "Etsi sata faktaa dinosauruksista", "Päätä, mikä jäätelö maistuu parhaalta", "Lohduta pikkusiskoa, jota harmittaa"],
            "dropZones": ["Tekoäly", "Ihminen"],
            "correctAnswer": {"Laske nopein reitti ruuhkassa": "Tekoäly", "Etsi sata faktaa dinosauruksista": "Tekoäly", "Päätä, mikä jäätelö maistuu parhaalta": "Ihminen", "Lohduta pikkusiskoa, jota harmittaa": "Ihminen"},
            "explanation": "Tekoäly on uskomattoman nopea etsimään tietoa ja laskemaan asioita, mutta vain ihminen voi kokea makuja ja antaa aitoa lohtua toiselle!"
          },
          {
            "id": "q_p2_14",
            "type": "reverse_prompt",
            "question": "Tekoälyradio sanoo yhtäkkiä iloisella äänellä: \"Jihuu! Olen niin ylpeä teistä, olette loistavia matkustajia!\" Millä promptilla tekoäly saatiin kehumaan autossa olijoita?",
            "options": ["Laske kaikkien matkustajien yhteinen ikä autossa.", "Käyttäydy kuin innostunut ystävä ja kehu meitä.", "Etsi tietoa siitä, miksi ihmiset pitävät kehuista.", "Kerro meille, mitä sana 'ylpeä' oikeasti tarkoittaa."],
            "correctAnswer": "Käyttäydy kuin innostunut ystävä ja kehu meitä.",
            "explanation": "Tekoälyllä ei ole oikeita tunteita tai ylpeyttä, mutta kun siltä pyytää promptilla \"käyttäydy kuin innostunut ystävä\", se osaa matkia iloista ja kehuvaa puhetyyliä täydellisesti!"
          },
          {
            "id": "q_p2_15",
            "type": "ordering",
            "question": "Tekoäly ei itse tunne iloa, mutta se osaa kirjoittaa iloisen tarinan. Järjestä asiat siihen järjestykseen, miten tekoäly oikeasti oppii asioita ilosta!",
            "options": ["Ihmiset kirjoittavat tekstejä iloisista asioista internetiin", "Tekoäly lukee nämä valtavat tekstimäärät sekunneissa", "Tekoäly huomaa säännön, että 'ilo' liittyy hymyyn", "Tekoäly kirjoittaa pyynnöstä iloisen tarinan ymmärtämättä tunnetta itse"],
            "correctAnswer": ["Ihmiset kirjoittavat tekstejä iloisista asioista internetiin", "Tekoäly lukee nämä valtavat tekstimäärät sekunneissa", "Tekoäly huomaa säännön, että 'ilo' liittyy hymyyn", "Tekoäly kirjoittaa pyynnöstä iloisen tarinan ymmärtämättä tunnetta itse"],
            "explanation": "Tekoäly oppii asioita lukemalla ihmisten tuottamaa materiaalia. Se oppii sanojen säännöt todella nopeasti, mutta ei silti koskaan koe itse ilon tunnetta."
          }
      ] },
      { "id": "perusteet_3", "name": "Tekoäly vs. tavallinen ohjelma", "questions": [
          { "id": "q_p3_1", "type": "multiple_choice", "question": "Mikä on tekoälyn neuroverkko?", "options": ["Siimaa ja lautoja", "Aivojen solujen toimintaa matkiva tietokoneohjelma", "Sähköverkko", "Internet-selain"], "correctAnswer": "Aivojen solujen toimintaa matkiva tietokoneohjelma", "explanation": "Neuroverkot on saaneet inspiraationsa ihmisaivojen hermosoluista ja niiden välisistä yhteyksistä." }
      ] },
      { "id": "perusteet_4", "name": "Mitä tekoäly ei osaa?", "questions": [
          { "id": "q_p4_1", "type": "multiple_choice", "question": "Mikä on algoritmi?", "options": ["Laskuresepti tai ohjesarja", "Tietokoneen osa", "Pelin nimi", "Salasana"], "correctAnswer": "Laskuresepti tai ohjesarja", "explanation": "Algoritmi on tarkka ohje siitä, miten jokin tehtävä suoritetaan vaihe vaiheelta." }
      ] },
      { "id": "perusteet_5", "name": "Tekoälyn aikakone", "questions": [
          { "id": "q_p5_1", "type": "scenario", "question": "SKENAARIO: Haluat opettaa tekoälyn tunnistamaan omenoita, mutta näytät sille vain kuvia punaisista omenoista. Mitä tapahtuu, kun näytät sille keltaisen omenan?", "options": ["Se tunnistaa sen heti", "Se ei todennäköisesti tunnista sitä omenaksi", "Se muuttuu keltaiseksi", "Se pyytää lisää dataa"], "correctAnswer": "Se ei todennäköisesti tunnista sitä omenaksi", "explanation": "Tekoäly on vain niin viisas kuin sille annettu opetusdata. Jos se on nähnyt vain punaisia omenoita, se luulee omenan olevan aina punainen." }
      ] },
      { "id": "perusteet_6", "name": "Tekoälymyytit", "questions": [
          { "id": "q_p6_1", "type": "multiple_choice", "question": "Milloin tekoälyn ajatus sai alkunsa?", "options": ["1950-luvulla", "2010-luvulla", "1800-luvulla", "2000-luvulla"], "correctAnswer": "1950-luvulla", "explanation": "Tekoälyn perusta luotiin jo 1950-luvulla, vaikka teknologia sen toteuttamiseen kehittyi vasta myöhemmin." }
      ] },
      { "id": "perusteet_7", "name": "Tarkastuspiste – Tiukka katsastus", "questions": [
          { "id": "q_p7_1", "type": "true_false", "question": "Voiko tekoäly joskus olla älykkäämpi kuin ihminen kaikissa asioissa?", "options": ["Tämä on hypoteettinen tilanne nimeltä AGI", "Ei ikinä"], "correctAnswer": "Tämä on hypoteettinen tilanne nimeltä AGI", "explanation": "Tiedemiehet puhuvat AGI:stä (Artificial General Intelligence), mutta olemme vielä kaukana siitä." }
      ] }
    ]
  },
  {
    "id": "konepellin",
    "name": "Konepellin alla",
    "subcategories": [
      {
        "id": "konepellin_1",
        "name": "Tekoälyn polttoaine (Data)",
        "questions": [
          {
            "id": "q_k1_1",
            "type": "multiple_choice",
            "question": "Mitä tarkoitetaan opetusdatalla?",
            "options": ["Tietoa josta tekoäly oppii", "Koneen sähköä", "Käyttöohjeita", "Koulukirjoja"],
            "correctAnswer": "Tietoa josta tekoäly oppii",
            "explanation": "Opetusdata on polttoainetta tekoälylle. Sen avulla se löytää kaavoja ja sääntöjä."
          }
        ]
      },
      { "id": "konepellin_2", "name": "Koodarin reseptikirja (Algoritmit)", "questions": [
          { "id": "q_k2_1", "type": "multiple_choice", "question": "Miksi tekoäly vaatii tehokkaita näytönohjaimia (GPU)?", "options": ["Ne osaavat laskea monta asiaa samaan aikaan", "Ne näyttävät parempia videoita", "Ne eivät kuumene", "Ne ovat halvempia"], "correctAnswer": "Ne osaavat laskea monta asiaa samaan aikaan", "explanation": "Tekoäly vaatii miljardeja pieniä laskutoimituksia kerralla, mihin näytönohjaimet ovat erinomaisia." }
      ] },
      { "id": "konepellin_3", "name": "Tekoälyn autokoulu (Koneoppiminen)", "questions": [
          { "id": "q_k3_1", "type": "true_false", "question": "Onko syväoppiminen sama asia kuin neuroverkko, jossa on monta kerrosta?", "options": ["Kyllä", "Ei"], "correctAnswer": "Kyllä", "explanation": "Syväoppiminen (Deep Learning) viittaa monikerroksisiin neuroverkkoihin." }
      ] },
      { "id": "konepellin_4", "name": "Tietokoneen aivovoimistelu (Neuroverkot)", "questions": [
          { "id": "q_k4_1", "type": "multiple_choice", "question": "Mitä tarkoittavat neuroverkon 'painoarvot' (weights)?", "options": ["Yhteyksien voimakkuuksia", "Koneen painoa", "Tiedoston kokoa", "Vastausnopeutta"], "correctAnswer": "Yhteyksien voimakkuuksia", "explanation": "Oppiminen on käytännössä näiden pienten numeroiden (painoarvojen) säätämistä oikeiksi." }
      ] },
      { "id": "konepellin_5", "name": "Salapoliisin työtä (Hahmontunnistus)", "questions": [
          { "id": "q_k5_1", "type": "multiple_choice", "question": "Mitä tarkoittaa NLP?", "options": ["Luonnollisen kielen käsittely", "Nopea lataus", "Uusi tietokone", "Väärä vastaus"], "correctAnswer": "Luonnollisen kielen käsittely", "explanation": "NLP (Natural Language Processing) on tekoälyn ala, joka keskittyy ihmiskielen ymmärtämiseen." }
      ] },
      { "id": "konepellin_6", "name": "Väärää bensaa tankissa! (Vinoumat ja huono data)", "questions": [
          { "id": "q_k6_1", "type": "multiple_choice", "question": "Mikä on backpropagation?", "options": ["Tapa jolla tekoäly korjaa virheitään oppiessaan", "Tietokoneen sammuttaminen", "Netin selaus", "Varmuuskopiointi"], "correctAnswer": "Tapa jolla tekoäly korjaa virheitään oppiessaan", "explanation": "Se on matemaattinen tapa siirtää virhetieto verkossa taaksepäin painoarvojen korjaamiseksi." }
      ] },
      { "id": "konepellin_7", "name": "Erikoiskoe – Yskivä moottori", "questions": [
          { "id": "q_k7_1", "type": "multiple_choice", "question": "Mikä on 'Transformer'-arkkitehtuuri?", "options": ["Modernien kielimallien perusta", "Muuttuva robotti", "Sähkölaite", "Auto-tekoäly"], "correctAnswer": "Modernien kielimallien perusta", "explanation": "Transfomerit mahdollistivat ChatGPT:n kaltaiset suuret kielimallit huomaamalla yhteydet sanojen välillä." }
      ] }
    ]
  },
  {
    "id": "arjessa",
    "name": "Tekoäly arjessamme",
    "subcategories": [
      {
        "id": "arjessa_1",
        "name": "Taskussa asuva apuri (Älypuhelimet)",
        "questions": [
          {
            "id": "q_a1_1",
            "type": "scenario",
            "question": "SKENAARIO: Katsoit TikTokissa pari hassua eläin-videota. Seuraavana päivänä huomaat, että koko feedisi on täynnä eläimiä. Miksi näin kävi?",
            "options": [
              "Asetusvirhe",
              "Suosittelualgoritmi huomasi sinun viihtyvän eläinvideoiden parissa",
              "Tekninen häiriö",
              "Sattumaa"
            ],
            "correctAnswer": "Suosittelualgoritmi huomasi sinun viihtyvän eläinvideoiden parissa",
            "explanation": "Olet opettanut algoritmille, mistä pidät katseluajalla."
          }
        ]
      },
      { "id": "arjessa_2", "name": "Ruutuajan taikatemput (Suositukset ja videot)", "questions": [
          { "id": "q_a2_1", "type": "true_false", "question": "Käyttääkö puhelimen lukituksen avaaminen kasvoilla tekoälyä?", "options": ["Kyllä", "Ei"], "correctAnswer": "Kyllä", "explanation": "Se vertaa kasvojasi aiemmin opituihin piirteisiin tekoälyn avulla." }
      ] },
      { "id": "arjessa_3", "name": "Tekoäly pelikaverina (Videopelit)", "questions": [
          { "id": "q_a3_1", "type": "multiple_choice", "question": "Miten Google käyttää tekoälyä?", "options": ["Ymmärtääkseen hakusi tarkoituksen paremmin", "Löytääkseen halvimmat hinnat", "Poistaakseen internetin", "Kysymällä muilta ihmisiltä"], "correctAnswer": "Ymmärtääkseen hakusi tarkoituksen paremmin", "explanation": "Tekoäly auttaa ymmärtämään mitä oikeasti etsit, vaikka et käyttäisi täsmälleen oikeita sanoja." }
      ] },
      { "id": "arjessa_4", "name": "Olohuoneen pikkurobotit (Älykoti)", "questions": [
          { "id": "q_a4_1", "type": "multiple_choice", "question": "Miten Netflix osaa suositella sinulle sopivia elokuvia?", "options": ["Analysoimalla muiden samankaltaisten käyttäjien valintoja", "He arvaavat", "Se on aina sama lista kaikille", "Katsomalla sinua kamerasta"], "correctAnswer": "Analysoimalla muiden samankaltaisten käyttäjien valintoja", "explanation": "Suosittelualgoritmit etsivät 'maku-profiileja' ja tarjoavat sisältöä niiden perusteella." }
      ] },
      { "id": "arjessa_5", "name": "Maailmanlaajuinen tulkki (Koulu ja kielet)", "questions": [
          { "id": "q_a5_1", "type": "true_false", "question": "Ennustaako Google Maps ruuhkia tekoälyn avulla?", "options": ["Kyllä", "Ei"], "correctAnswer": "Kyllä", "explanation": "Se analysoi historiadataa ja reaaliaikaista sijaintitietoa laskeakseen nopeimman reitin." }
      ] },
      { "id": "arjessa_6", "name": "AI vanin apukuski (Kartat ja liikenne)", "questions": [
          { "id": "q_a6_1", "type": "multiple_choice", "question": "Miten robotti-imuri tunnistaa esteet?", "options": ["Sensoreilla ja koneoppimisella", "Sattumanvaraisesti törmäilemällä", "Se näkee unia", "Siinä on ihminen sisällä"], "correctAnswer": "Sensoreilla ja koneoppimisella", "explanation": "Nykyaikaiset imurit oppivat kotisi kartan ja tunnistavat esineet (kuten sukat!) tekoälyn avulla." }
      ] },
      { "id": "arjessa_7", "name": "Erikoiskoe – kaaosristeys", "questions": [
          { "id": "q_a7_1", "type": "multiple_choice", "question": "Mikä on unelma 'älykodista'?", "options": ["Koti joka oppii rutiinisi ja säästää energiaa", "Koti joka puhuu koko ajan", "Koti jossa on paljon lamppuja", "Koti joka vaihtaa paikkaa"], "correctAnswer": "Koti joka oppii rutiinisi ja säästää energiaa", "explanation": "Tekoäly voi säädellä lämpöä ja valoja sen mukaan, milloin olet kotona." }
      ] }
    ]
  },
  {
    "id": "reilu_peli",
    "name": "Reilu peli",
    "subcategories": [
      { "id": "reilu_peli_1", "name": "Kaikki kyytiin! (Tasa-arvo ja syrjimättömyys)", "questions": [
          { "id": "q_e1_1", "type": "multiple_choice", "question": "Miksi tekoäly voi olla ennakkoluuloinen (bias)?", "options": ["Koska sen opetusdata on ollut yksipuolista", "Koska se on vihainen", "Se on mahdotonta", "Koska se on tehty koneella"], "correctAnswer": "Koska sen opetusdata on ollut yksipuolista", "explanation": "Jos mallille opetetaan vain tietynlaisia esimerkkejä, se oppii suosimaan niitä eettisesti väärin." }
      ] },
      { "id": "reilu_peli_2", "name": "Kuka oli kuskina? (Oma työ, vastuu ja avoimuus)", "questions": [
          { "id": "q_e2_1", "type": "true_false", "question": "Onko turvallista syöttää henkilötietoja julkiseen tekoälyyn?", "options": ["Ei, tiedot voivat päätyä osaksi opetusmateriaalia", "Kyllä, se on täysin salattua"], "correctAnswer": "Ei, tiedot voivat päätyä osaksi opetusmateriaalia", "explanation": "Monet tekoälyt tallentavat käydyt keskustelut kehitystä varten, joten varo salaisuuksia!" }
      ] },
      { "id": "reilu_peli_3", "name": "Luvattomat varaosat (Tekijänoikeudet)", "questions": [
          { "id": "q_e3_1", "type": "multiple_choice", "question": "Mikä on syväväärennös (Deepfake)?", "options": ["Tekoälyllä luotu aidolta näyttävä huijausvideo tai -kuva", "Hyvin syvä reikä", "Väärennetty passi", "Tietokonepeli"], "correctAnswer": "Tekoälyllä luotu aidolta näyttävä huijausvideo tai -kuva", "explanation": "Deepfaket voivat laittaa ihmiset sanomaan asioita, joita he eivät oikeasti ole sanoneet." }
      ] },
      { "id": "reilu_peli_4", "name": "Ei roiskita kuraa! (Kiusaaminen ja ystävällisyys)", "questions": [
          { "id": "q_e4_1", "type": "multiple_choice", "question": "Kuka omistaa tekoälyn luoman taideteoksen koodin?", "options": ["Tämä on monimutkainen ja uusi lakikysymys", "Aina tekoäly itse", "Aina ihminen joka painoi nappia", "Valtio"], "correctAnswer": "Tämä on monimutkainen ja uusi lakikysymys", "explanation": "Tällä hetkellä laki etsii vielä vastausta siihen, kuka omistaa 'koneen luovuuden'." }
      ] },
      { "id": "reilu_peli_5", "name": "Peltinen apukuski (Ihmisyys ja tunteet)", "questions": [
          { "id": "q_e5_1", "type": "true_false", "question": "Pitäisikö meidän aina tietää, puhummeko ihmisen vai tekoälyn kanssa?", "options": ["Kyllä, se on eettisesti suositeltavaa", "Ei se ole tärkeää"], "correctAnswer": "Kyllä, se on eettisesti suositeltavaa", "explanation": "Läpinäkyvyys rakentaa luottamusta teknologian ja ihmisten välille." }
      ] },
      { "id": "reilu_peli_6", "name": "Raskas kaasujalka (Tekoäly ja luonto)", "questions": [
          { "id": "q_e6_1", "type": "multiple_choice", "question": "Miten tekoäly vaikuttaa tulevaisuuden töihin?", "options": ["Se poistaa joitain töitä, mutta luo täysin uusia", "Kaikki työt loppuvat", "Mikään ei muutu", "Töitä on enemmän kaikille"], "correctAnswer": "Se poistaa joitain töitä, mutta luo täysin uusia", "explanation": "Rutiinitehtävät vähenevät, mutta tarve tekoälyä osaaville ihmisille kasvaa." }
      ] },
      { "id": "reilu_peli_7", "name": "Tarkastuspiste – Häijy kaahari", "questions": [
          { "id": "q_e7_1", "type": "multiple_choice", "question": "Mitä tarkoitetaan AI Alignmentilla?", "options": ["Tekoälyn tavoitteiden kohdistamista ihmiskunnan parhaaksi", "Tekoälyn asettamista riveihin", "Netin korjaamista", "Tiedon suodatusta"], "correctAnswer": "Tekoälyn tavoitteiden kohdistamista ihmiskunnan parhaaksi", "explanation": "Alignment on tavoite varmistaa, ettei tekoäly vahingossakaan toimi ihmisten arvoja vastaan." }
      ] }
    ]
  },
  {
    "id": "kayttotaidot",
    "name": "Tekoälyn käyttötaidot",
    "subcategories": [
      { "id": "kayttotaidot_1", "name": "Tarkka osoite navigaattoriin (Hyvän kysymyksen laatiminen / Promptaus)", "questions": [
          { "id": "q_kt1_1", "type": "multiple_choice", "question": "Mikä on 'prompt'?", "options": ["Ohje tai kysymys jolla ohjaat tekoälyä", "Salasana", "Tietokoneen merkki", "Uusi peli"], "correctAnswer": "Ohje tai kysymys jolla ohjaat tekoälyä", "explanation": "Kehote (prompt) on tärkein työkalusi tekoälyn komentamiseen." }
      ] },
      { "id": "kayttotaidot_2", "name": "Katse ulos tuulilasista (Tiedon tarkistaminen)", "questions": [
          { "id": "q_kt2_1", "type": "true_false", "question": "Voiko tekoäly joskus puhua täyttä pajunköyttä vakuuttavasti?", "options": ["Kyllä, tätä kutsutaan hallusinaatioksi", "Ei, se tietää aina totuuden"], "correctAnswer": "Kyllä, tätä kutsutaan hallusinaatioksi", "explanation": "Kielimallit yrittävät miellyttää ja voivat siksi keksiä faktoja tyhjästä." }
      ] },
      { "id": "kayttotaidot_3", "name": "Ratinkääntö ja uusi reitti (Ohjeiden tarkentaminen)", "questions": [
          { "id": "q_kt3_1", "type": "multiple_choice", "question": "Miten saat tekoälyltä parempia vastauksia?", "options": ["Antamalla sille taustatietoa eli kontekstia", "Kirjoittamalla lyhyemmin", "Kysymällä vain kerran", "Huutamalla ISOILLA KIRJAIMILLA"], "correctAnswer": "Antamalla sille taustatietoa eli kontekstia", "explanation": "Mitä enemmän tekoäly tietää tilanteesta, sitä osuvampia ohjeita se voi antaa." }
      ] },
      { "id": "kayttotaidot_4", "name": "Apukuski ideoi (Tekoäly luovana kaverina)", "questions": [
          { "id": "q_kt4_1", "type": "true_false", "question": "Pitäisikö tekoälyn vastaukset tarkistaa aina muista lähteistä?", "options": ["Kyllä, medialukutaito on tärkeää", "Ei, tekoäly on internettiä viisaampi"], "correctAnswer": "Kyllä, medialukutaito on tärkeää", "explanation": "Lähdekriittisyys on AI-ajalla tärkeämpi taito kuin koskaan." }
      ] },
      { "id": "kayttotaidot_5", "name": "Oikea työkalu pakista (Sopivan tekoälyn valinta)", "questions": [
          { "id": "q_kt5_1", "type": "multiple_choice", "question": "Millainen kehote tuottaa parhaita tekoälykuvia?", "options": ["Kuvaileva ja yksityiskohtainen", "Mahdollisimman lyhyt", "Sekava", "Tyhjä"], "correctAnswer": "Kuvaileva ja yksityiskohtainen", "explanation": "Kuvaile valo, tyyli, värit ja kohde tarkasti saadaksesi hyviä tuloksia." }
      ] },
      { "id": "kayttotaidot_6", "name": "Tavarat siististi kyytiin (Tiedon tiivistäminen ja muokkaus)", "questions": [
          { "id": "q_kt6_1", "type": "multiple_choice", "question": "Mitä tarkoitetaan multimodaalisella tekoälyllä?", "options": ["Se ymmärtää tekstiä, kuvaa, ääntä ja videoita samanaikaisesti", "Se on hyvin nopea", "Se toimii monessa maassa", "Se on kallis"], "correctAnswer": "Se ymmärtää tekstiä, kuvaa, ääntä ja videoita samanaikaisesti", "explanation": "Modernit mallit (kuten GPT-4o tai Gemini) osaavat katsella kuvia ja kuunnella kerralla." }
      ] },
      { "id": "kayttotaidot_7", "name": "Finaali:\nSuuri mestariralli", "questions": [
          { "id": "q_kt7_1", "type": "multiple_choice", "question": "Miten voit testata tekoälyn päättelyä?", "options": ["Pyytämällä sitä ajattelemaan 'askel kerrallaan'", "Kysymällä siltä kuka se on", "Antamalla sille nimen", "Sulkemalla sen"], "correctAnswer": "Pyytämällä sitä ajattelemaan 'askel kerrallaan'", "explanation": "Chain-of-thought eli ajatuksen ketjuttaminen pakottaa mallin välivaiheisiin, mikä parantaa logiikkaa." }
      ] }
    ]
  },
  {
    "id": "aivoterveys",
    "name": "Aivoterveys",
    "subcategories": [
      { "id": "aivoterveys_1", "name": "Huoltotauko (Ruutuaika ja tauot)", "questions": [
          { "id": "q_h1_1", "type": "multiple_choice", "question": "Mikä on Turingin testin tavoite?", "options": ["Katsoa voiko kone huijata ihmistä luulemaan sitä toiseksi ihmiseksi", "Testata koneen nopeutta", "Katsoa osaako kone uida", "Testata internet-yhteyttä"], "correctAnswer": "Katsoa voiko kone huijata ihmistä luulemaan sitä toiseksi ihmiseksi", "explanation": "Alan Turing kehitti tämän kokeen määritelläkseen, voiko kone ajatella." }
      ] },
      { "id": "aivoterveys_2", "name": "Yöksi parkkiin (Uni ja iltarutiinit)", "questions": [
          { "id": "q_h2_1", "type": "multiple_choice", "question": "Mitä tarkoittaa emergenssi tekoälyssä?", "options": ["Uusien, odottamattomien taitojen syntymistä mallin kasvaessa", "Koneen hajoamista", "Tiedon poistumista", "Hidastumista"], "correctAnswer": "Uusien, odottamattomien taitojen syntymistä mallin kasvaessa", "explanation": "Erittäin suuret mallit saattavat alkaa osata taitoja (kuten vitsit tai koodaus), joita niille ei suoraan opetettu." }
      ] },
      { "id": "aivoterveys_3", "name": "Aikuisten moottoritie (Ikärajat ja some)", "questions": [
          { "id": "q_h3_1", "type": "multiple_choice", "question": "Mikä on teknologinen singulariteetti?", "options": ["Hetki jolloin tekoäly ylittää ihmisälyn ja kehitys kiihtyy hallitsemattomaksi", "Avaruusmatka", "Pelin loppu", "Tekoälyn sammuminen"], "correctAnswer": "Hetki jolloin tekoäly ylittää ihmisälyn ja kehitys kiihtyy hallitsemattomaksi", "explanation": "Tämä on tulevaisuusfuturologien ennustus, jonka toteutumisesta kiistellään." }
      ] },
      { "id": "aivoterveys_4", "name": "Ulos autosta! (Liikunta ja oikea elämä)", "questions": [
          { "id": "q_h4_1", "type": "multiple_choice", "question": "Mitä oli 'AI Winter'?", "options": ["Aika jolloin tekoälyn rahoitus ja kiinnostus lopuivat vuosiksi", "Loma-aika", "Pohjoisnapa", "Varkaus"], "correctAnswer": "Aika jolloin tekoälyn rahoitus ja kiinnostus lopuivat vuosiksi", "explanation": "Historiassa on ollut useita jaksoja, jolloin tekoälyyn ei enää uskottu." }
      ] },
      { "id": "aivoterveys_5", "name": "Oikea apukuski (Tunteet ja aito kaveruus)", "questions": [
          { "id": "q_h5_1", "type": "true_false", "question": "Pidetäänkö superälyä potentiaalisena riskinä ihmiskunnalle?", "options": ["Kyllä, se on merkittävä tutkimuskohde", "Ei, se on mahdotonta"], "correctAnswer": "Kyllä, se on merkittävä tutkimuskohde", "explanation": "Superäly (Superintelligence) vaatii tarkat turvasäännöt toimiakseen ihmisen hyväksi." }
      ] },
      { "id": "aivoterveys_6", "name": "Radio hiljemmalle (Keskittyminen ja taustahäly)", "questions": [
          { "id": "q_h6_1", "type": "multiple_choice", "question": "Miten kvanttitietokoneet voisivat auttaa tekoälyä?", "options": ["Ne pystyisivät laskemaan valtavia määriä dataa silmänräpäyksessä", "Ne tekisivät niistä pienempiä", "Ne eivät auta", "Ne tekisivät niistä vihreitä"], "correctAnswer": "Ne pystyisivät laskemaan valtavia määriä dataa silmänräpäyksessä", "explanation": "Kvanttilaskenta voisi mullistaa sen, miten nopeasti ja monimutkaisia asioita tekoäly osaa." }
      ] },
      { "id": "aivoterveys_7", "name": "Erikoiskoe – Sumuinen yöajo", "questions": [
          { "id": "q_h7_1", "type": "true_false", "question": "Oletko nyt valmis kohtaamaan tekoälyn tulevaisuuden?", "options": ["Aina valmis oppimaan uutta", "En vielä"], "correctAnswer": "Aina valmis oppimaan uutta", "explanation": "Hienoa! Tekoälyn suurin taito on kyky pysyä uteliaana." }
      ] }
    ]
  },
  {
    "id": "digiturva",
    "name": "Digiturva",
    "subcategories": [
      { "id": "digiturva_1", "name": "AI vanin turvalukot (Salasanat)", "questions": [ { "id": "q_s1_1", "type": "multiple_choice", "question": "Mitä meri opettaa tekoälystä?", "options": ["Että tieto on syvää ja se kätkee paljon salaisuuksia", "Että siellä on kaloja", "Että vesi on märkää", "Ei mitään"], "correctAnswer": "Että tieto on syvää ja se kätkee paljon salaisuuksia", "explanation": "Digiturva edustaa tuntematonta ja uutta tietoa." } ] },
      { "id": "digiturva_2", "name": "Lukittu hanskalokero (Omat tiedot ja yksityisyys)", "questions": [ { "id": "q_s2_1", "type": "true_false", "question": "Onko tekoäly vain meidän ihmisten heijastus?", "options": ["Kyllä, se on oppinut kaiken meiltä", "Ei, se on itsenäinen olennto"], "correctAnswer": "Kyllä, se on oppinut kaiken meiltä", "explanation": "Tekoäly opiskelee meidän kirjoittamaa tekstiä ja historiaa." } ] },
      { "id": "digiturva_3", "name": "Maantierosvojen ansat (Huijausviestit ja oudot linkit)", "questions": [ { "id": "q_s3_1", "type": "multiple_choice", "question": "Voiko tekoäly olla todella luova?", "options": ["Se yhdistelee asioita uusilla tavoilla", "Ei koskaan", "Vain perjantaisin", "Kyllä se on ihminen"], "correctAnswer": "Se yhdistelee asioita uusilla tavoilla", "explanation": "Tekoälyn luovuus perustuu valtavien tietomäärien uudenlaiseen yhdistelyyn." } ] },
      { "id": "digiturva_4", "name": "Digitaalinen ruoste (Virukset ja haittaohjelmat)", "questions": [ { "id": "q_s4_1", "type": "true_false", "question": "Voiko koodi tuntea surua?", "options": ["Ei, se voi vain simuloida sitä", "Kyllä"], "correctAnswer": "Ei, se voi vain simuloida sitä", "explanation": "Koneilla ei ole biologista kehoa tai tunteita, vain matemaattisia malleja." } ] },
      { "id": "digiturva_5", "name": "Valepukuiset liftarit (Tekoälyn väärennökset eli deepfaket)", "questions": [ { "id": "q_s5_1", "type": "multiple_choice", "question": "Mikä on paras tapa käyttää tekoälyä?", "options": ["Ihmisen ja koneen yhteistyönä (Copilot)", "Antamalla koneen tehdä kaikki", "Välttämällä sitä", "Vain koodaamiseen"], "correctAnswer": "Ihmisen ja koneen yhteistyönä (Copilot)", "explanation": "Yhdessä ihminen ja tekoäly ovat vahvempia kuin kumpikaan yksin." } ] },
      { "id": "digiturva_6", "name": "Hätävilkut päälle! (Aikuisen apu ja ilmoittaminen)", "questions": [ { "id": "q_s6_1", "type": "multiple_choice", "question": "Kuka on viime kädessä vastuussa tekoälyn teoista?", "options": ["Ihminen joka sitä käyttää tai kehitti sen", "Tekoäly itse", "Tietokone", "Kukaan ei ole"], "correctAnswer": "Ihminen joka sitä käyttää tai kehitti sen", "explanation": "Vastuu on aina ihmisellä, vaikka työkalu olisi kuinka kehittynyt." } ] },
      { "id": "digiturva_7", "name": "Tarkastuspiste – Maantierosvon tietulli", "questions": [ { "id": "q_s7_1", "type": "multiple_choice", "question": "Mikä on tärkein oppi tästä matkasta?", "options": ["Uteliaisuus ja kriittisyys", "Että osaan vastata kysymyksiin", "Että auto osaa ajaa", "Pelin loppu"], "correctAnswer": "Uteliaisuus ja kriittisyys", "explanation": "Olet suorittanut AIVAN tien! Muista: maailma muuttuu, mutta oppiminen jatkuu." } ] }
    ]
  }
];
