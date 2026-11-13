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
            "question": "Nykyinen tekoäly oppii suurimman osan taidoistaan esimerkeistä, eikä ohjelmoija kirjoita sille jokaista sääntöä erikseen.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Oikein",
            "explanation": "Tätä kutsutaan koneoppimiseksi. Kissoja tunnistava tekoäly ei saa sääntöä \"kissalla on viikset\", vaan se näkee tuhansia kuvia kissoista ja oppii niistä itse, mikä tekee kissasta kissan."
          },
          {
            "id": "perusteet_1_q2",
            "type": "multiple_choice",
            "question": "Mikä näistä kuvaa tekoälyä parhaiten?",
            "options": [
              "Ohjelma, joka on oppinut tehtävänsä esimerkeistä",
              "Robotti, jolla on oma tahto ja aidot ihmisen tunteet",
              "Internet, johon on tallennettu kaikki maailman tieto",
              "Mikä tahansa laite, joka toimii sähköllä tai akulla"
            ],
            "correctAnswer": "Ohjelma, joka on oppinut tehtävänsä esimerkeistä",
            "explanation": "Tekoäly on tietokoneohjelma, joka on oppinut tehtävänsä esimerkeistä: se voi tunnistaa kasvoja, ennustaa säätä tai kirjoittaa tekstiä. Useimmiten tekoäly ei ole robotti, vaan pelkkää ohjelmaa puhelimessa tai palvelimella. Eikä jokainen sähkölaite, kuten leivänpaahdin, ole tekoälyä."
          },
          {
            "id": "perusteet_1_q3",
            "type": "scenario",
            "question": "SKENAARIO: Pikkusiskosi avaa puhelimen pelkällä katseella ja kysyy: \"Mistä puhelin tietää, että se olen minä?\" Mitä vastaat?",
            "options": [
              "Tekoäly vertaa kasvojasi niihin, jotka tallensit puhelimeen.",
              "Puhelin muistaa salasanan, jonka kerroit sille ääneen.",
              "Puhelin kysyy joka kerta netistä, kuka sinä oikein olet.",
              "Valmistaja on tallentanut kaikkien ihmisten kasvot puhelimeen."
            ],
            "correctAnswer": "Tekoäly vertaa kasvojasi niihin, jotka tallensit puhelimeen.",
            "explanation": "Puhelimen tekoäly on ensin opetettu tunnistamaan kasvoja miljoonista esimerkeistä. Kun otat toiminnon käyttöön, puhelin tallentaa sinun kasvojesi piirteet ja vertaa niihin jokaista avausyritystä. Tiedot säilyvät yleensä vain omassa puhelimessasi."
          },
          {
            "id": "perusteet_1_q4",
            "type": "drag_drop",
            "question": "Järjestä, miten kuvista koiria tunnistava tekoäly syntyy.",
            "draggables": [
              "Kerätään tuhansia kuvia, joissa on tai ei ole koiraa",
              "Ihmiset merkitsevät jokaiseen kuvaan, onko siinä koira",
              "Tekoäly harjoittelee kuvilla ja oppii koiran tuntomerkit",
              "Tekoäly tunnistaa koiran kuvasta, jota se ei ole ennen nähnyt"
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ],
            "correctAnswer": {
              "Kerätään tuhansia kuvia, joissa on tai ei ole koiraa": "1. vaihe",
              "Ihmiset merkitsevät jokaiseen kuvaan, onko siinä koira": "2. vaihe",
              "Tekoäly harjoittelee kuvilla ja oppii koiran tuntomerkit": "3. vaihe",
              "Tekoäly tunnistaa koiran kuvasta, jota se ei ole ennen nähnyt": "4. vaihe"
            },
            "explanation": "Näin syntyy suuri osa nykyisestä tekoälystä: data, merkinnät, harjoittelu eli koulutus ja lopuksi käyttö. Tärkein on viimeinen vaihe: tekoäly osaa yleistää eli tunnistaa myös ihan uusia kuvia."
          },
          {
            "id": "perusteet_1_q5",
            "type": "spot_the_ai",
            "question": "Missä näistä on tekoäly töissä?",
            "options": [
              "Videopalvelu, joka ehdottaa sinulle seuraavaa videota",
              "Taskulaskin, joka laskee nopeasti pitkän kertolaskun",
              "Herätyskello, joka soi joka arkiaamu kello seitsemän",
              "Kaukosäädin, joka vaihtaa kanavaa napin painalluksella"
            ],
            "correctAnswer": "Videopalvelu, joka ehdottaa sinulle seuraavaa videota",
            "explanation": "Suositukset ovat tekoälyä: se on oppinut miljoonien katsojien valinnoista, millaiset videot kiinnostavat kaltaisiasi katsojia. Laskin, herätyskello ja kaukosäädin noudattavat valmiita sääntöjä eivätkä opi mitään."
          },
          {
            "id": "perusteet_1_q6",
            "type": "reverse_prompt",
            "question": "Tekoälyavustaja vastasi: \"Tekoäly on tietokoneohjelma, joka on oppinut esimerkeistä. Se voi tunnistaa kuvia, kääntää kieliä ja kirjoittaa tekstiä, mutta se voi myös erehtyä.\" Millä kehotteella vastaus todennäköisimmin saatiin?",
            "options": [
              "Selitä 10-vuotiaalle lyhyesti, mikä tekoäly on.",
              "Kirjoita tarina robotista, joka haluaa ihmiseksi.",
              "Luettele kaikki maailman tekoälyt aakkosjärjestyksessä.",
              "Kerro, kuka keksi tietokoneen ja missä maassa."
            ],
            "correctAnswer": "Selitä 10-vuotiaalle lyhyesti, mikä tekoäly on.",
            "explanation": "Kehote eli prompti on ohje, jonka annat tekoälylle. Vastaus on lyhyt ja selkeä, koska kehotteessa pyydettiin selittämään lyhyesti ja lapselle sopivasti. Tekoälyn vastaus riippuu paljon siitä, miten kysyt."
          },
          {
            "id": "perusteet_1_q7",
            "type": "multiple_choice",
            "question": "Miksi lähes kaikkea nykyistä tekoälyä kutsutaan kapeaksi tekoälyksi?",
            "options": [
              "Se osaa yleensä vain sen tehtävän, johon se on koulutettu",
              "Tekoälyohjelmat vievät hyvin vähän tilaa tietokoneella",
              "Tekoäly osaa vastata vain lyhyillä, muutaman sanan lauseilla",
              "Samaa tekoälyä saa käyttää vain yksi ihminen kerrallaan"
            ],
            "correctAnswer": "Se osaa yleensä vain sen tehtävän, johon se on koulutettu",
            "explanation": "Shakkia pelaava tekoäly voi voittaa maailmanmestarin, mutta se ei tunnista kissaa kuvasta. Chatbotkin on taitava tekstissä, mutta se ei osaa ajaa autoa. Ihmisen kaltaista, kaikkeen kykenevää yleistä tekoälyä ei ole olemassa."
          },
          {
            "id": "perusteet_1_q8",
            "type": "true_false",
            "question": "Tekoäly osaa aina selittää tarkasti, miksi se päätyi vastaukseensa.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Koneoppimisessa tekoäly muodostaa itse miljoonia pieniä laskusääntöjä, joita ihmisenkään on vaikea tulkita. Siksi tekoälyä kutsutaan joskus mustaksi laatikoksi. Jos chatbot selittää ratkaisuaan, selityskin on tuotettua tekstiä, eikä se välttämättä kerro, miten vastaus oikeasti syntyi."
          },
          {
            "id": "perusteet_1_q9",
            "type": "drag_drop",
            "question": "Lajittele tekoälyt sen mukaan, mitä ne tekevät.",
            "draggables": [
              "Puhelin avautuu omistajan kasvoilla",
              "Kauppa arvioi, montako jäätelöä myydään helleviikolla",
              "Ohjelma piirtää kuvan pyynnöstä"
            ],
            "dropZones": [
              "Tunnistaa",
              "Ennustaa",
              "Tuottaa uutta"
            ],
            "correctAnswer": {
              "Puhelin avautuu omistajan kasvoilla": "Tunnistaa",
              "Kauppa arvioi, montako jäätelöä myydään helleviikolla": "Ennustaa",
              "Ohjelma piirtää kuvan pyynnöstä": "Tuottaa uutta"
            },
            "explanation": "Tekoälyn tehtävät voi jakaa karkeasti kolmeen ryhmään: tunnistaminen (kasvot, puhe, liikennemerkit), ennustaminen (sää, suositukset, ruuhkat) ja uuden tuottaminen eli generatiivinen tekoäly (teksti, kuvat, musiikki)."
          },
          {
            "id": "perusteet_1_q10",
            "type": "multiple_choice",
            "question": "Chatbot vastaa kysymyksiisi sujuvasti kuin ihminen. Miten se oikeasti tuottaa vastauksen?",
            "options": [
              "Se valitsee sana kerrallaan todennäköisimmän seuraavan sanan",
              "Se kopioi vastauksen valmiina yhdeltä tutulta nettisivulta",
              "Ihminen kirjoittaa vastauksen salaa ja nopeasti ruudun takana",
              "Se ymmärtää kysymyksen kuten ihminen ja tuntee oikean vastauksen"
            ],
            "correctAnswer": "Se valitsee sana kerrallaan todennäköisimmän seuraavan sanan",
            "explanation": "Kielimalli on harjoitellut valtavalla määrällä tekstiä ja oppinut, millaiset sanat seuraavat toisiaan. Siksi vastaus kuulostaa sujuvalta. Sujuva ei kuitenkaan aina tarkoita oikeaa."
          },
          {
            "id": "perusteet_1_q11",
            "type": "scenario",
            "question": "SKENAARIO: Kaverisi juttelee iltaisin chatbotin kanssa ja sanoo: \"Se on mun paras kaveri, se ymmärtää mua aina.\" Mitä hänelle kannattaa kertoa?",
            "options": [
              "Se puhuu ystävällisesti, mutta ei oikeasti tunne mitään.",
              "Se on oikeasti elävä olento, joten se on hyvä ystävä.",
              "Chatbotit ovat vaarallisia, joten puhelin pitää heittää.",
              "Se kertoo kaikki keskustelunne salaa opettajallesi."
            ],
            "correctAnswer": "Se puhuu ystävällisesti, mutta ei oikeasti tunne mitään.",
            "explanation": "Chatbot on koulutettu kuulostamaan ystävälliseltä, koska se on oppinut ihmisten kirjoittamista teksteistä. Se ei silti tunne mitään. Chatbotin kanssa saa jutella, mutta tärkeistä asioista kannattaa puhua myös oikean ihmisen, kuten kaverin tai aikuisen, kanssa."
          },
          {
            "id": "perusteet_1_q12",
            "type": "true_false",
            "question": "Kun tekoäly on kerran koulutettu, se ei voi enää koskaan tehdä virheitä.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Tekoäly oppii todennäköisyyksiä, ei varmoja totuuksia. Se voi erehtyä etenkin tilanteissa, jotka poikkeavat sen harjoitusesimerkeistä. Siksi tekoälyn vastauksia kannattaa aina vähän tarkistaa."
          },
          {
            "id": "perusteet_1_q13",
            "type": "drag_drop",
            "question": "Lajittele: käyttääkö laite tekoälyä vai ei?",
            "draggables": [
              "Kääntäjä, joka kääntää puhuttua englantia suomeksi",
              "Sähköpostin roskapostisuodatin",
              "Sähköhammasharjan kahden minuutin ajastin",
              "Mikroaaltouuni, joka sammuu ajan loputtua"
            ],
            "dropZones": [
              "Tekoäly",
              "Ei tekoälyä"
            ],
            "correctAnswer": {
              "Kääntäjä, joka kääntää puhuttua englantia suomeksi": "Tekoäly",
              "Sähköpostin roskapostisuodatin": "Tekoäly",
              "Sähköhammasharjan kahden minuutin ajastin": "Ei tekoälyä",
              "Mikroaaltouuni, joka sammuu ajan loputtua": "Ei tekoälyä"
            },
            "explanation": "Puheen kääntäminen ja roskapostin tunnistaminen vaativat tekoälyä, koska puhe ja viestit ovat joka kerta erilaisia: tekoäly on oppinut niiden vaihtelun esimerkeistä. Ajastimet taas noudattavat yhtä yksinkertaista sääntöä."
          },
          {
            "id": "perusteet_1_q14",
            "type": "spot_the_ai",
            "question": "AI vanin kojelaudassa on monta toimintoa. Missä niistä on tekoäly?",
            "options": [
              "Kamera, joka lukee tienvarren nopeusrajoitukset",
              "Polttoainemittari, joka näyttää tankin bensan määrän",
              "Vilkku, joka naksuu tasaisesti, kun auto kääntyy",
              "Lämmitin, joka puhaltaa lämmintä ilmaa jalkatilaan"
            ],
            "correctAnswer": "Kamera, joka lukee tienvarren nopeusrajoitukset",
            "explanation": "Liikennemerkkien tunnistus on konenäköä: tekoäly on harjoitellut tuhansilla merkkikuvilla eri säissä ja valaistuksissa. Mittari, vilkku ja lämmitin toimivat yksinkertaisilla säännöillä ja antureilla."
          },
          {
            "id": "perusteet_1_q15",
            "type": "reverse_prompt",
            "question": "Tekoäly teki kuvan: oranssi kissa ajaa punaista avoautoa auringonlaskussa sarjakuvatyyliin. Millä kehotteella kuva todennäköisimmin tehtiin?",
            "options": [
              "Sarjakuva: oranssi kissa ajaa punaista avoautoa auringonlaskussa",
              "Sarjakuva: musta koira ajaa punaista avoautoa auringonlaskussa",
              "Valokuva: oranssi kissa istuu punaisen avoauton vieressä yöllä",
              "Sarjakuva: oranssi kissa ajaa sinistä pakettiautoa aamulla"
            ],
            "correctAnswer": "Sarjakuva: oranssi kissa ajaa punaista avoautoa auringonlaskussa",
            "explanation": "Kuvia tekevä tekoäly on generatiivista tekoälyä. Se ei etsi valmista kuvaa netistä, vaan tuottaa uuden kuvan kehotteen pohjalta. Jokainen väärä vaihtoehto eroaa kuvasta yhdellä yksityiskohdalla: eläin, tyyli, väri tai vuorokaudenaika. Juuri näillä yksityiskohdilla ohjaat, millainen kuvasta tulee."
          },
          {
            "id": "perusteet_1_q16",
            "type": "image_choice",
            "featured": true,
            "question": "Missä kuvassa tekoäly on töissä?",
            "options": [
              "kaantaja",
              "kello",
              "laskin",
              "katkaisija"
            ],
            "optionImages": {
              "kaantaja": {
                "src": "/kuvat/puhelin-kaantaja.webp",
                "alt": "Puhelimen kamera kääntää kyltin tekstin toiselle kielelle",
                "label": "Kamerakääntäjä"
              },
              "kello": {
                "src": "/kuvat/seinakello.webp",
                "alt": "Seinäkello",
                "label": "Seinäkello"
              },
              "laskin": {
                "src": "/kuvat/laskin.webp",
                "alt": "Taskulaskin",
                "label": "Taskulaskin"
              },
              "katkaisija": {
                "src": "/kuvat/valokatkaisija.webp",
                "alt": "Valokatkaisija",
                "label": "Valokatkaisija"
              }
            },
            "correctAnswer": "kaantaja",
            "explanation": "Kamerakääntäjä tunnistaa kuvasta kirjaimet ja kääntää tekstin toiselle kielelle. Molemmat taidot se on oppinut valtavasta määrästä esimerkkejä. Kello, laskin ja valokatkaisija tekevät aina täsmälleen saman asian valmiin säännön mukaan, joten ne eivät tarvitse tekoälyä."
          },
          {
            "id": "perusteet_1_q17",
            "type": "multiple_choice",
            "image": {
              "src": "/kuvat/pikselisydan-numerot.svg",
              "alt": "Ruudukko, jossa on numeroita 1 ja 9",
              "ratio": "6 / 5"
            },
            "explanationImage": {
              "src": "/kuvat/pikselisydan-kuva.svg",
              "alt": "Sama ruudukko väritettynä: ykköset muodostavat punaisen sydämen",
              "ratio": "6 / 5",
              "caption": "Kun numerot muutetaan väreiksi, kuva paljastuu."
            },
            "question": "Tietokone näkee kuvan numeroina. Jokainen numero on yhden pikselin kirkkaus: 1 = tumma, 9 = vaalea. Mitä kuvassa on?",
            "options": [
              "Sydän",
              "Auto",
              "Hymynaama",
              "Puu"
            ],
            "correctAnswer": "Sydän",
            "explanation": "Kuva on tietokoneelle taulukko numeroita. Puhelimen kuvassa pikseleitä on miljoonia, ja jokaisella on kolme numeroa: punaisen, vihreän ja sinisen määrä. Kuvia tunnistava tekoäly etsii näistä numeroista kuvioita, aivan kuten sinä etsit äsken ykkösistä sydäntä."
          },
          {
            "id": "perusteet_1_q18",
            "type": "reverse_prompt",
            "image": {
              "src": "/kuvat/ai-van-kuu.webp",
              "alt": "Vesivärimaalaus vihreästä pakettiautosta, joka ajaa tähtitaivaalla kohti täysikuuta",
              "credit": "Kuva on tehty tekoälyllä."
            },
            "question": "Tekoäly teki tämän kuvan. Millä kehotteella se todennäköisimmin tehtiin?",
            "options": [
              "Vesiväri: vihreä pakettiauto ajaa tähtitaivaalla kohti kuuta",
              "Vesiväri: vihreä pakettiauto ajaa aurinkoisella hiekkarannalla",
              "Valokuva: punainen urheiluauto ajaa kaupungin kadulla yöllä",
              "Vesiväri: sininen polkupyörä lentää tähtitaivaalla kohti kuuta"
            ],
            "correctAnswer": "Vesiväri: vihreä pakettiauto ajaa tähtitaivaalla kohti kuuta",
            "explanation": "Kehotteessa kerrottiin tyyli (vesiväri), kohde (vihreä pakettiauto) ja tilanne (tähtitaivas ja kuu). Väärät vaihtoehdot eroavat kuvasta aina yhdellä yksityiskohdalla. Kuvageneraattori ei etsi valmista kuvaa netistä, vaan tuottaa uuden kuvan kehotteen pohjalta, joten jokainen yksityiskohta vaikuttaa lopputulokseen."
          },
          {
            "id": "perusteet_1_q19",
            "type": "true_false",
            "image": {
              "src": "/kuvat/lelulehma-hiekalla.webp",
              "alt": "Lelulehmä seisoo hiekalla"
            },
            "explanationImage": {
              "src": "/kuvat/lelulehma-nurmella.webp",
              "alt": "Sama lelulehmä vihreällä nurmella",
              "caption": "Harjoituskuvissa lehmä oli aina vihreällä nurmella."
            },
            "question": "Lehmiä tunnistava tekoäly on harjoiteltu kuvilla, joissa lehmät seisovat vihreällä laitumella. Se tunnistaa varmasti myös tämän hiekalla seisovan lehmän.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Tekoäly oppii kaiken, mikä harjoituskuvissa toistuu, myös taustan. Jos jokaisessa lehmäkuvassa oli vihreää nurmea, tekoäly voi oppia, että vihreä tausta kuuluu lehmään. Silloin hiekalla seisova lehmä voi jäädä tunnistamatta. Tutkijat ovat havainneet juuri tämän ilmiön oikeissa kuvantunnistimissa."
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
            "question": "Tekoäly on tietokoneohjelma, joka ei väsy tai suutu, vaikka se tekisi töitä kellon ympäri.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Oikein",
            "explanation": "Totta! Tekoäly on tietokoneohjelma, jolla ei ole tunteita. Se ei väsy, kyllästy tai suutu, vaikka se tekisi töitä kellon ympäri."
          },
          {
            "id": "perusteet_2_q2",
            "type": "multiple_choice",
            "question": "Pieni lapsi oppii tunnistamaan kissan nähtyään muutaman kissan. Montako kuvaa tekoäly tyypillisesti tarvitsee oppiakseen saman?",
            "options": [
              "Tuhansia, jopa miljoonia",
              "Yksi kuva riittää hyvin",
              "Noin kymmenen eri kuvaa",
              "Ei yhtään, se tietää valmiiksi"
            ],
            "correctAnswer": "Tuhansia, jopa miljoonia",
            "explanation": "Ihminen oppii hämmästyttävän vähistä esimerkeistä, koska ymmärrämme maailmaa monella aistilla. Tekoäly tarvitsee valtavasti esimerkkejä, mutta kun se on kerran oppinut, se voi käydä läpi miljoonia kuvia väsymättä."
          },
          {
            "id": "perusteet_2_q3",
            "type": "scenario",
            "question": "SKENAARIO: Pyydät tekoälyä keksimään vitsin automatkasta, ja vitsi on aika hauska. Kaverisi sanoo: \"Tekoälyllä on huumorintaju!\" Mitä vastaat?",
            "options": [
              "Se on oppinut tuhansista vitseistä, mikä yleensä naurattaa.",
              "Totta, se nauroi itsekin ääneen omalle hauskalle vitsilleen.",
              "Se kopioi vitsin aina sanasta sanaan yhdeltä nettisivulta.",
              "Ihminen kirjoitti sille kaikki maailman vitsit valmiiksi."
            ],
            "correctAnswer": "Se on oppinut tuhansista vitseistä, mikä yleensä naurattaa.",
            "explanation": "Tekoäly yhdistelee oppimiaan kaavoja, esimerkiksi millaisia sanaleikkejä ja yllätyksiä vitseissä on. Tulos voi olla uusi ja hauska, mutta tekoäly ei itse koe hauskuutta."
          },
          {
            "id": "perusteet_2_q4",
            "type": "drag_drop",
            "question": "Kumpi on tässä vahvempi: ihminen vai tekoäly?",
            "draggables": [
              "Käy läpi miljoona valokuvaa yhdessä yössä",
              "Ymmärtää, miksi kaveria harmittaa",
              "Löytää kuvioita valtavasta määrästä säätietoja",
              "Kantaa vastuun tärkeästä päätöksestä"
            ],
            "dropZones": [
              "Tekoäly",
              "Ihminen"
            ],
            "correctAnswer": {
              "Käy läpi miljoona valokuvaa yhdessä yössä": "Tekoäly",
              "Ymmärtää, miksi kaveria harmittaa": "Ihminen",
              "Löytää kuvioita valtavasta määrästä säätietoja": "Tekoäly",
              "Kantaa vastuun tärkeästä päätöksestä": "Ihminen"
            },
            "explanation": "Tekoälyn vahvuus on nopeus ja määrä: se jaksaa käydä läpi enemmän tietoa kuin kukaan ihminen. Ihmisen vahvuus on ymmärrys: tunteet, arvot ja vastuu. Siksi tärkeät päätökset, jotka koskevat ihmisiä, kuuluvat ihmiselle."
          },
          {
            "id": "perusteet_2_q5",
            "type": "drag_drop",
            "question": "Tekoäly auttaa lääkäriä tutkimaan röntgenkuvia. Järjestä työvaiheet.",
            "draggables": [
              "Potilaasta otetaan röntgenkuva",
              "Tekoäly merkitsee kuvaan kohdan, joka voi olla murtuma",
              "Lääkäri tarkistaa kuvan ja tekee päätöksen"
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe"
            ],
            "correctAnswer": {
              "Potilaasta otetaan röntgenkuva": "1. vaihe",
              "Tekoäly merkitsee kuvaan kohdan, joka voi olla murtuma": "2. vaihe",
              "Lääkäri tarkistaa kuvan ja tekee päätöksen": "3. vaihe"
            },
            "explanation": "Näin tekoälyä käytetään monessa työssä: se on nopea apuri, joka huomaa epäilyttävät kohdat, mutta päätöksen tekee ja vastuun kantaa ihminen. Tekoäly voi erehtyä, ja lääkäri näkee potilaan tilanteen kokonaisuutena."
          },
          {
            "id": "perusteet_2_q6",
            "type": "spot_the_ai",
            "question": "Missä tilanteessa tekoäly on todennäköisesti apuna?",
            "options": [
              "Puhelin muuttaa puheesi tekstiksi viestiin",
              "Kaveri piirtää sinulle syntymäpäiväkortin",
              "Opettaja tarkistaa käsin kirjoitetun kokeen",
              "Isovanhempi kertoo muistojaan lapsuudestaan"
            ],
            "correctAnswer": "Puhelin muuttaa puheesi tekstiksi viestiin",
            "explanation": "Puheentunnistus on tekoälyä, joka on harjoitellut tuhansien ihmisten puheella: eri äänillä, murteilla ja taustameluissa. Muissa vaihtoehdoissa työn tekee ihminen omalla kokemuksellaan."
          },
          {
            "id": "perusteet_2_q7",
            "type": "reverse_prompt",
            "question": "Tekoäly kirjoitti: \"Rakas päiväkirja, tänään olin niin iloinen, kun aurinko paistoi koko automatkan!\" Millä kehotteella teksti saatiin?",
            "options": [
              "Kirjoita iloinen päiväkirjateksti aurinkoisesta automatkasta.",
              "Kerro rehellisesti, mitä sinä itse tunnet tällä automatkalla.",
              "Laske, montako tuntia aurinko paistoi koko matkan aikana.",
              "Etsi huomisen sääennuste koko reitille, jota pitkin ajamme."
            ],
            "correctAnswer": "Kirjoita iloinen päiväkirjateksti aurinkoisesta automatkasta.",
            "explanation": "Tekoäly ei ollut oikeasti iloinen. Se kirjoitti iloisen tekstin, koska sitä pyydettiin. Jos kysyt tekoälyltä, mitä se tuntee, se voi vastata tunteista, mutta sekin on vain tekstiä, ei oikea tunne."
          },
          {
            "id": "perusteet_2_q8",
            "type": "true_false",
            "question": "Tekoäly väsyy, jos se joutuu vastaamaan tuhansiin kysymyksiin peräkkäin.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Tekoäly ei väsy eikä kyllästy, joten se voi tehdä samaa työtä vuorokauden ympäri. Se kuluttaa kuitenkin paljon sähköä: suuria tekoälyjä pyöritetään valtavissa konesaleissa. Ihmisaivot toimivat noin 20 watin teholla, saman verran kuin pieni lamppu!"
          },
          {
            "id": "perusteet_2_q9",
            "type": "multiple_choice",
            "question": "Missä asiassa ihminen on yleensä tekoälyä parempi?",
            "options": [
              "Toimimaan järkevästi täysin uudessa tilanteessa",
              "Käymään läpi tuhansia valokuvia yhden minuutin aikana",
              "Kääntämään pitkän tekstin nopeasti kymmenille kielille",
              "Löytämään toistuvia kuvioita valtavista tietomääristä"
            ],
            "correctAnswer": "Toimimaan järkevästi täysin uudessa tilanteessa",
            "explanation": "Ihminen pystyy soveltamaan kokemustaan uuteen: jos tie on tulvan peitossa, tiedät pysähtyä, vaikka et olisi koskaan nähnyt tulvaa. Tekoäly toimii parhaiten tilanteissa, jotka muistuttavat sen harjoitusesimerkkejä."
          },
          {
            "id": "perusteet_2_q10",
            "type": "scenario",
            "question": "SKENAARIO: Keksit lentävän polkupyörän, jossa on sateenvarjo, eikä kukaan ole nähnyt sellaista ennen. Pyydät tekoälyä piirtämään sen. Mitä todennäköisimmin tapahtuu?",
            "options": [
              "Se onnistuu yhdistelemällä oppimiaan kuvia pyöristä ja sateenvarjoista.",
              "Se ei onnistu, koska se piirtää vain oikeasti olemassa olevia asioita.",
              "Se etsii netistä valmiin kuvan, jonka joku muu on piirtänyt aiemmin.",
              "Se kieltäytyy, koska keksintö on sinun ideasi eikä sen oma idea."
            ],
            "correctAnswer": "Se onnistuu yhdistelemällä oppimiaan kuvia pyöristä ja sateenvarjoista.",
            "explanation": "Tekoäly osaa yhdistellä tuttuja palasia uudella tavalla, joten se voi piirtää lentävän sateenvarjopyörän. Idea ja päätös siitä, mitä halutaan, tulivat kuitenkin sinulta. Tekoäly ei koskaan itse päätä keksiä jotain, vaan se tarvitsee ihmisen pyynnön."
          },
          {
            "id": "perusteet_2_q11",
            "type": "spot_the_ai",
            "question": "Huokaiset takapenkillä: \"Mulla on tylsää.\" Saat neljä vastausta. Mikä niistä on varmasti tekoälyn?",
            "options": [
              "\"Voi ei! Pelataanko sanaselitystä, niin aika kuluu?\"",
              "\"Ymmärrän, pitkä matka voi olla puuduttava.\"",
              "\"Perillä ollaan 45 minuutin päästä.\"",
              "Mistään näistä ei voi varmasti tietää"
            ],
            "correctAnswer": "Mistään näistä ei voi varmasti tietää",
            "explanation": "Vanha ajatus \"tekoäly puhuu kuin robotti\" ei enää pidä paikkaansa. Nykyiset chatbotit kirjoittavat lämpimästi ja vitsailevat. Siksi pelkästä sävystä ei voi päätellä, kirjoittiko viestin ihminen vai kone. Kannattaa selvittää, mistä viesti tulee."
          },
          {
            "id": "perusteet_2_q12",
            "type": "multiple_choice",
            "question": "Miksi tekoäly voi olla hyvä apuri sääennusteissa tai sairauksien tunnistamisessa?",
            "options": [
              "Se löytää kuvioita valtavista tietomääristä nopeasti",
              "Se näkee tulevaisuuteen erityisen sääanturin avulla",
              "Se ei koskaan erehdy, koska se on tietokone eikä ihminen",
              "Se tuntee jokaisen potilaan ja hänen elämäntilanteensa"
            ],
            "correctAnswer": "Se löytää kuvioita valtavista tietomääristä nopeasti",
            "explanation": "Tekoälyn supervoima on kuvioiden löytäminen suurista datamääristä. Se voi esimerkiksi huomata ihomuutoksen kuvasta tai ennustaa sateen tuhansien mittausten perusteella. Se ei silti ole erehtymätön, joten asiantuntija tarkistaa tulokset."
          },
          {
            "id": "perusteet_2_q13",
            "type": "drag_drop",
            "question": "Kenelle antaisit tehtävän?",
            "draggables": [
              "Tekstitä tunnin mittainen video",
              "Päätä, kuka pääsee joukkueeseen",
              "Etsi 500 valokuvasta ne, joissa on koira",
              "Lohduta kaveria, jonka lemmikki on sairas"
            ],
            "dropZones": [
              "Tekoäly",
              "Ihminen"
            ],
            "correctAnswer": {
              "Tekstitä tunnin mittainen video": "Tekoäly",
              "Päätä, kuka pääsee joukkueeseen": "Ihminen",
              "Etsi 500 valokuvasta ne, joissa on koira": "Tekoäly",
              "Lohduta kaveria, jonka lemmikki on sairas": "Ihminen"
            },
            "explanation": "Toistuvat ja isot tehtävät sopivat tekoälylle. Päätökset, jotka vaikuttavat ihmisiin, ja aito välittäminen kuuluvat ihmiselle. Tekoäly voi antaa ehdotuksia, mutta ihminen päättää ja kantaa vastuun."
          },
          {
            "id": "perusteet_2_q14",
            "type": "reverse_prompt",
            "question": "Tekoäly vastasi: \"En ole ihminen, joten en voi oikeasti tuntea jännitystä. Voin kuitenkin kertoa, miksi moni jännittää koetta ja miten jännitystä voi helpottaa.\" Mikä kysymys johti vastaukseen?",
            "options": [
              "Kirjoita jännittävä tarina.",
              "Mikä on jännite sähkössä?",
              "Jännittääkö sinuakin huominen koe?",
              "Laske, montako koetta on keväällä."
            ],
            "correctAnswer": "Jännittääkö sinuakin huominen koe?",
            "explanation": "Hyvin tehty tekoäly kertoo rehellisesti, ettei sillä ole tunteita. Kaikki tekoälyt eivät kuitenkaan tee näin, vaan jotkut on ohjattu esittämään ihmistä. Muista siis: vaikka tekoäly sanoisi \"minuakin jännittää\", se ei oikeasti tunne mitään."
          },
          {
            "id": "perusteet_2_q15",
            "type": "drag_drop",
            "question": "Järjestä, miten chatbot oppii kirjoittamaan ystävällisiä viestejä.",
            "draggables": [
              "Ihmiset kirjoittavat nettiin miljoonia ystävällisiä viestejä",
              "Tekoäly harjoittelee näillä teksteillä",
              "Tekoäly oppii, millaiset sanat kuuluvat ystävälliseen viestiin",
              "Tekoäly kirjoittaa ystävällisen viestin tuntematta mitään"
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ],
            "correctAnswer": {
              "Ihmiset kirjoittavat nettiin miljoonia ystävällisiä viestejä": "1. vaihe",
              "Tekoäly harjoittelee näillä teksteillä": "2. vaihe",
              "Tekoäly oppii, millaiset sanat kuuluvat ystävälliseen viestiin": "3. vaihe",
              "Tekoäly kirjoittaa ystävällisen viestin tuntematta mitään": "4. vaihe"
            },
            "explanation": "Tekoäly oppii ihmisten kirjoittamasta tekstistä. Se oppii nopeasti, millaisia sanoja ystävällisessä viestissä käytetään, mutta se ei koe ystävällisyyttä itse."
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
            "question": "Laskin antaa samalla laskulla aina saman tuloksen, mutta chatbot voi vastata samaan kysymykseen joka kerta eri sanoin.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Oikein",
            "explanation": "Laskin vastaa laskuun 7 × 8 aina 56. Chatbot taas valitsee sanoja todennäköisyyksien perusteella, ja valinnoissa on mukana sattumaa. Siksi saman kysymyksen voi esittää uudelleen ja saada erilaisen vastauksen."
          },
          {
            "id": "perusteet_3_q2",
            "type": "multiple_choice",
            "question": "Miten tavallinen tietokoneohjelma tietää, mitä tehdä?",
            "options": [
              "Ohjelmoija on kirjoittanut sille tarkat säännöt",
              "Se oppii itse jokaisesta käyttökerrasta lisää",
              "Se hakee joka kerta neuvoja suoraan internetistä",
              "Se arvaa joka kerta, mikä vaihtoehto on todennäköisin"
            ],
            "correctAnswer": "Ohjelmoija on kirjoittanut sille tarkat säännöt",
            "explanation": "Tavallinen ohjelma on kuin resepti: ohjelmoija kirjoittaa jokaisen askeleen ja säännön valmiiksi, esimerkiksi \"jos tapahtuu tämä, tee tuo\". Koneoppiva tekoäly taas muodostaa säännöt itse esimerkeistä, ja juuri siksi se voi arvata ja erehtyä."
          },
          {
            "id": "perusteet_3_q3",
            "type": "scenario",
            "question": "SKENAARIO: Kaverisi tekee sovellusta, joka tunnistaa käsin kirjoitetut numerot. Hän aikoo kirjoittaa säännöt itse: \"Jos viiva on pystysuora, se on ykkönen.\" Mitä neuvot?",
            "options": [
              "Opeta tekoälyä tuhansilla eri ihmisten kirjoittamilla numeroilla.",
              "Kirjoita kymmenen tarkkaa sääntöä, niin ne toimivat varmasti.",
              "Luovu, koska käsialaa ei voi tunnistaa tietokoneella ollenkaan.",
              "Pyydä kaikkia kirjoittamaan numerot täsmälleen samalla tavalla."
            ],
            "correctAnswer": "Opeta tekoälyä tuhansilla eri ihmisten kirjoittamilla numeroilla.",
            "explanation": "Jokainen kirjoittaa seiskan vähän eri tavalla, joten käsin kirjoitettavia sääntöjä tarvittaisiin loputtomasti. Sotkuisissa tehtävissä, kuten käsialan, puheen ja kuvien tunnistamisessa, koneoppiminen on ylivoimainen: se oppii vaihtelun itse esimerkeistä."
          },
          {
            "id": "perusteet_3_q4",
            "type": "drag_drop",
            "question": "Tavallinen ohjelma vai tekoäly?",
            "draggables": [
              "Laskee ostosten hinnat yhteen kassalla",
              "Muuttaa puheen tekstiksi",
              "Näyttää kellonajan",
              "Tunnistaa kasveja valokuvista"
            ],
            "dropZones": [
              "Tavallinen ohjelma",
              "Tekoäly"
            ],
            "correctAnswer": {
              "Laskee ostosten hinnat yhteen kassalla": "Tavallinen ohjelma",
              "Muuttaa puheen tekstiksi": "Tekoäly",
              "Näyttää kellonajan": "Tavallinen ohjelma",
              "Tunnistaa kasveja valokuvista": "Tekoäly"
            },
            "explanation": "Tarkat ja aina samanlaiset tehtävät hoituvat tavallisella ohjelmalla. Kun syöte vaihtelee joka kerta, kuten puhe tai valokuvat, tarvitaan tekoälyä, joka on oppinut vaihtelun esimerkeistä."
          },
          {
            "id": "perusteet_3_q5",
            "type": "drag_drop",
            "question": "Järjestä, miten tavallinen ohjelma toimii, kun auton sähköikkunan nappia painetaan.",
            "draggables": [
              "Kuski painaa ikkunan nappia",
              "Ohjelma tarkistaa säännön: jos nappi on pohjassa, anna moottorille virtaa",
              "Ikkunan moottori käynnistyy",
              "Kun nappi vapautetaan, sääntö pysäyttää moottorin"
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ],
            "correctAnswer": {
              "Kuski painaa ikkunan nappia": "1. vaihe",
              "Ohjelma tarkistaa säännön: jos nappi on pohjassa, anna moottorille virtaa": "2. vaihe",
              "Ikkunan moottori käynnistyy": "3. vaihe",
              "Kun nappi vapautetaan, sääntö pysäyttää moottorin": "4. vaihe"
            },
            "explanation": "Tavallinen ohjelma koostuu jos–niin-säännöistä, jotka ohjelmoija on kirjoittanut etukäteen. Se toimii joka kerta täsmälleen samalla tavalla, ja juuri siksi se sopii hyvin tällaisiin tehtäviin."
          },
          {
            "id": "perusteet_3_q6",
            "type": "spot_the_ai",
            "question": "Mikä näistä AI vanin toiminnoista tarvitsee tekoälyä?",
            "options": [
              "Peruutustutka, joka piippaa nopeammin seinän lähestyessä",
              "Valot, jotka syttyvät, kun ulkona hämärtää",
              "Kamera, joka huomaa tielle juoksevan ketun",
              "Tuulilasinpyyhkijät, jotka nopeutuvat sateen voimistuessa"
            ],
            "correctAnswer": "Kamera, joka huomaa tielle juoksevan ketun",
            "explanation": "Tutka, hämäräanturi ja sadeanturi mittaavat yhtä asiaa ja toimivat yksinkertaisen säännön mukaan, vaikka ne vaikuttavat fiksuilta. Ketun tunnistaminen kuvasta on paljon vaikeampaa: kettu voi olla missä asennossa tahansa ja valaistus vaihtelee. Siihen tarvitaan konenäköä eli tekoälyä."
          },
          {
            "id": "perusteet_3_q7",
            "type": "reverse_prompt",
            "question": "Tekoäly vastasi: \"Tässä kolme nimeä uudelle pelillesi: 1. Kipinäkisa 2. Turbotalli 3. Robottiralli.\" Millä kehotteella vastaus saatiin?",
            "options": [
              "Keksi kolme nimeä autoaiheiselle pelille.",
              "Mikä on maailman suosituin autopeli juuri nyt?",
              "Kerro, montako autopeliä maailmassa on olemassa.",
              "Kirjoita säännöt peliin, jossa ajetaan autoilla."
            ],
            "correctAnswer": "Keksi kolme nimeä autoaiheiselle pelille.",
            "explanation": "Uusien ideoiden keksiminen on generatiivisen tekoälyn tehtävä. Tavallinen ohjelma ei osaisi tätä, koska kukaan ei ole kirjoittanut sille valmista nimilistaa. Jos kysyt uudestaan, saat todennäköisesti eri nimet."
          },
          {
            "id": "perusteet_3_q8",
            "type": "true_false",
            "question": "Kaikki laitteet, jotka toimivat itsestään, käyttävät tekoälyä.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Termostaatti säätää lämpöä ja automaattiovi aukeaa itsestään, mutta kumpikin noudattaa yhtä yksinkertaista sääntöä: jos lämpötila laskee, lämmitä; jos joku on ovella, avaa. Automaattinen ei siis tarkoita tekoälyä."
          },
          {
            "id": "perusteet_3_q9",
            "type": "multiple_choice",
            "question": "Peleissä tietokonevastustajaa kutsutaan usein \"tekoälyksi\". Miten useimmat pelien vastustajat oikeasti toimivat?",
            "options": [
              "Kehittäjät ovat kirjoittaneet niille säännöt valmiiksi",
              "Ne oppivat jokaisesta pelikerrasta lisää sinua vastaan",
              "Ne lukevat ajatuksiasi peliohjaimen antureiden avulla",
              "Niitä ohjaa salaa toinen pelaaja jossain toisessa maassa"
            ],
            "correctAnswer": "Kehittäjät ovat kirjoittaneet niille säännöt valmiiksi",
            "explanation": "Pelien \"tekoäly\" on yleensä taitavasti tehtyä tavallista ohjelmointia: jos pelaaja on lähellä, hyökkää; jos terveys on vähissä, pakene. Sana tekoäly tarkoittaa peleissä vähän eri asiaa kuin koneoppiminen, vaikka joitakin pelihahmoja onkin koulutettu koneoppimisella."
          },
          {
            "id": "perusteet_3_q10",
            "type": "drag_drop",
            "question": "Yhdistä ominaisuus oikeaan ohjelmaan.",
            "draggables": [
              "Säännöt kirjoittaa ohjelmoija",
              "Säännöt muodostuvat esimerkeistä",
              "Toimii aina täsmälleen samalla tavalla",
              "Voi erehtyä, jos tilanne on outo"
            ],
            "dropZones": [
              "Tavallinen ohjelma",
              "Koneoppiva tekoäly"
            ],
            "correctAnswer": {
              "Säännöt kirjoittaa ohjelmoija": "Tavallinen ohjelma",
              "Säännöt muodostuvat esimerkeistä": "Koneoppiva tekoäly",
              "Toimii aina täsmälleen samalla tavalla": "Tavallinen ohjelma",
              "Voi erehtyä, jos tilanne on outo": "Koneoppiva tekoäly"
            },
            "explanation": "Tämä on tärkein ero: tavallisessa ohjelmassa ihminen kirjoittaa säännöt, koneoppimisessa ne opitaan esimerkeistä. Tavallinen ohjelma on ennustettava. Koneoppiva tekoäly on joustavampi, mutta se voi erehtyä tilanteissa, jotka poikkeavat sen harjoitusesimerkeistä."
          },
          {
            "id": "perusteet_3_q11",
            "type": "scenario",
            "question": "SKENAARIO: Teet kerholle roskapostisuodatinta. Huijarit kiertävät sääntösi \"estä viestit, joissa on sana voitit\" kirjoittamalla \"V0itit\". Mitä teet?",
            "options": [
              "Opetan suodattimen tunnistamaan huijauksia tuhansista esimerkeistä.",
              "Lisään sääntöön käsin kaikki sanan voitit mahdolliset kirjoitusasut.",
              "Estän kaikki viestit, joissa on numeroita, myös kaverien viestit.",
              "Luovun suodattimesta, koska huijareita ei voi mitenkään pysäyttää."
            ],
            "correctAnswer": "Opetan suodattimen tunnistamaan huijauksia tuhansista esimerkeistä.",
            "explanation": "Huijarit keksivät jatkuvasti uusia kiertoteitä, joten käsin kirjoitetut säännöt jäävät aina jälkeen. Koneoppinut suodatin tunnistaa huijauksen monesta piirteestä yhtä aikaa: lähettäjästä, sävystä, linkeistä ja sanoista. Siksi lähes kaikki sähköpostipalvelut käyttävät tekoälyä roskapostin torjuntaan."
          },
          {
            "id": "perusteet_3_q12",
            "type": "spot_the_ai",
            "question": "Mikä näistä tuottaa jotain täysin uutta tekoälyn avulla?",
            "options": [
              "Sovellus, joka säveltää uuden kappaleen kuvauksestasi",
              "Musiikkisovellus, joka soittaa tallennetun kappaleen",
              "Soittolista, joka sekoittaa kappaleiden järjestyksen",
              "Taajuuskorjain, joka lisää kappaleeseen enemmän bassoa"
            ],
            "correctAnswer": "Sovellus, joka säveltää uuden kappaleen kuvauksestasi",
            "explanation": "Kappaleen säveltäminen kuvauksesta on generatiivista tekoälyä. Tallenteen soittaminen, sekoittaminen ja basson lisääminen ovat tavallisen ohjelman tarkkoja tehtäviä, joissa ei synny mitään uutta."
          },
          {
            "id": "perusteet_3_q13",
            "type": "drag_drop",
            "question": "Järjestä, miten auton kamera tunnistaa stop-merkin.",
            "draggables": [
              "Kamera ottaa kuvan tiestä",
              "Tekoäly arvioi, mitä kuvassa todennäköisimmin on",
              "Auto ilmoittaa kuskille: stop-merkki edessä"
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe"
            ],
            "correctAnswer": {
              "Kamera ottaa kuvan tiestä": "1. vaihe",
              "Tekoäly arvioi, mitä kuvassa todennäköisimmin on": "2. vaihe",
              "Auto ilmoittaa kuskille: stop-merkki edessä": "3. vaihe"
            },
            "explanation": "Tekoälyjärjestelmä toimii usein näin: havainto (kuva tai ääni), tulkinta (mitä tämä todennäköisesti on?) ja toiminta. Huomaa sana todennäköisesti: tekoäly ei ole koskaan täysin varma, ja siksi kuski pitää silti katseen tiessä."
          },
          {
            "id": "perusteet_3_q14",
            "type": "multiple_choice",
            "question": "Jos tekoäly on niin fiksu, miksi auton jarruvaloja ohjaa silti tavallinen ohjelma?",
            "options": [
              "Tavallinen ohjelma toimii joka kerta täsmälleen samoin",
              "Tekoäly ei osaa ohjata auton valoja eikä muita laitteita",
              "Tekoäly on liian uusi keksintö käytettäväksi autoissa",
              "Tavallinen ohjelma on aina fiksumpi kuin mikään tekoäly"
            ],
            "correctAnswer": "Tavallinen ohjelma toimii joka kerta täsmälleen samoin",
            "explanation": "Kun tehtävä on yksinkertainen ja virhe olisi vaarallinen, valitaan ennustettava tavallinen ohjelma. Tekoälyä käytetään silloin, kun tehtävää ei voi kuvata yksinkertaisilla säännöillä. Hyvä insinööri valitsee työhön sopivan työkalun."
          },
          {
            "id": "perusteet_3_q15",
            "type": "reverse_prompt",
            "question": "Tekoäly vastasi: \"Tavalliselle ohjelmalle ohjelmoija kirjoittaa säännöt. Koneoppiva tekoäly oppii säännöt itse esimerkeistä.\" Millä kehotteella vastaus saatiin?",
            "options": [
              "Selitä kahdella virkkeellä tekoälyn ja tavallisen ohjelman ero.",
              "Kirjoita tietokoneohjelma, joka laskee kaksi lukua yhteen.",
              "Kerro kahdella virkkeellä, kuka keksi ensimmäisen tietokoneen.",
              "Keksi kahden virkkeen tarina ohjelmoijasta, joka rakentaa robotin."
            ],
            "correctAnswer": "Selitä kahdella virkkeellä tekoälyn ja tavallisen ohjelman ero.",
            "explanation": "Hyvä kehote kertoo, mitä halutaan (ero) ja missä muodossa (kaksi virkettä). Vastaus on samalla tämän osion tärkein asia: tavallisen ohjelman säännöt kirjoittaa ihminen, tekoäly oppii ne esimerkeistä."
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
            "question": "Jos tekoäly kertoo asian varmalla äänellä, se on aina totta.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Tekoäly voi keksiä vääriä faktoja ja kertoa ne yhtä varmasti kuin oikeat. Tätä kutsutaan hallusinoinniksi. Se johtuu siitä, että kielimalli tuottaa todennäköiseltä kuulostavaa tekstiä eikä tarkista, onko teksti totta."
          },
          {
            "id": "perusteet_4_q2",
            "type": "multiple_choice",
            "question": "Kysyt tekoälyltä eilisen jääkiekko-ottelun tulosta. Miksi vastaus voi olla väärin?",
            "options": [
              "Sen tiedot päättyvät siihen, kun se koulutettiin",
              "Tekoäly ei ymmärrä urheilusta tai sen säännöistä mitään",
              "Tekoäly vastaa urheilukysymyksiin väärin tahallaan",
              "Vastaus ei voi olla väärin, koska tekoäly tietää kaiken"
            ],
            "correctAnswer": "Sen tiedot päättyvät siihen, kun se koulutettiin",
            "explanation": "Tekoälyn tiedot ovat peräisin datasta, jolla se on koulutettu, joten tiedoilla on viimeinen päivämäärä. Jotkin chatbotit osaavat hakea tietoa netistä, mutta ilman hakua tekoäly voi arvata ja keksiä tuloksen."
          },
          {
            "id": "perusteet_4_q3",
            "type": "scenario",
            "question": "SKENAARIO: Teet esitelmää ilveksistä. Tekoäly kertoo: \"Ilves voi juosta 120 km/h.\" Mitä teet?",
            "options": [
              "Tarkistan luvun luotettavasta lähteestä ennen käyttöä.",
              "Kirjoitan luvun esitelmään, koska tekoäly tietää asiat.",
              "Kysyn uudestaan, ja jos vastaus on sama, se on totta.",
              "Poistan koko esitelmän ja valitsen kokonaan uuden aiheen."
            ],
            "correctAnswer": "Tarkistan luvun luotettavasta lähteestä ennen käyttöä.",
            "explanation": "Ilves ei juokse lähellekään 120 km/h:ia, sillä nopeimmaksi maaeläimeksi tunnettu gepardikin yltää noin 100 km/h:iin. Tekoäly voi sekoittaa tietoja ja keksiä lukuja. Saman kysymyksen toistaminen ei auta, koska tekoäly voi toistaa saman virheen. Tarkista tärkeät faktat aina toisesta, luotettavasta lähteestä."
          },
          {
            "id": "perusteet_4_q4",
            "type": "drag_drop",
            "question": "Onko tehtävä tekoälylle helppo vai vaikea?",
            "draggables": [
              "Voittaa shakin maailmanmestari",
              "Taitella pyykit siististi kaappiin",
              "Kääntää teksti kiinaksi",
              "Kävellä liukkaalla jäällä kaatumatta"
            ],
            "dropZones": [
              "Helppo tekoälylle",
              "Vaikea tekoälylle"
            ],
            "correctAnswer": {
              "Voittaa shakin maailmanmestari": "Helppo tekoälylle",
              "Taitella pyykit siististi kaappiin": "Vaikea tekoälylle",
              "Kääntää teksti kiinaksi": "Helppo tekoälylle",
              "Kävellä liukkaalla jäällä kaatumatta": "Vaikea tekoälylle"
            },
            "explanation": "Ihmiselle helpot arkiset taidot, kuten pyykkien taittelu, ovat roboteille yllättävän vaikeita, koska oikea maailma on täynnä yllätyksiä: kangas rypistyy, valo vaihtuu ja jää liukastuu. Tätä kutsutaan Moravecin paradoksiksi. Shakki ja kääntäminen taas tapahtuvat kokonaan tietokoneen sisällä."
          },
          {
            "id": "perusteet_4_q5",
            "type": "drag_drop",
            "question": "Järjestä, miten tekoälyn virhe päätyy koulutehtävään.",
            "draggables": [
              "Oppilas kysyy tekoälyltä faktan kirjailijasta",
              "Tekoäly keksii uskottavan mutta väärän syntymävuoden",
              "Oppilas kopioi vastauksen tarkistamatta",
              "Opettaja huomaa virheen esitelmässä"
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ],
            "correctAnswer": {
              "Oppilas kysyy tekoälyltä faktan kirjailijasta": "1. vaihe",
              "Tekoäly keksii uskottavan mutta väärän syntymävuoden": "2. vaihe",
              "Oppilas kopioi vastauksen tarkistamatta": "3. vaihe",
              "Opettaja huomaa virheen esitelmässä": "4. vaihe"
            },
            "explanation": "Virhe syntyi tekoälyssä, mutta se pääsi läpi vasta, kun kukaan ei tarkistanut sitä. Kohtaan 3 sinä voit itse vaikuttaa: tarkista tekoälyn kertomat faktat, etenkin luvut, päivämäärät ja nimet."
          },
          {
            "id": "perusteet_4_q6",
            "type": "spot_the_ai",
            "question": "Chatbot kertoi neljä asiaa, ja yksi niistä on keksitty. Missä tekoälyn hallusinaatio todennäköisimmin piilee?",
            "options": [
              "\"Anna Virtanen voitti Finlandia-palkinnon vuonna 2015.\"",
              "\"Helsinki on ollut Suomen pääkaupunki vuodesta 1812.\"",
              "\"Vesi kiehuu merenpinnan tasolla sadassa asteessa.\"",
              "\"Kuu kiertää Maan ympäri suunnilleen kuukaudessa.\""
            ],
            "correctAnswer": "\"Anna Virtanen voitti Finlandia-palkinnon vuonna 2015.\"",
            "explanation": "Tekoäly keksii asioita useimmin harvinaisissa yksityiskohdissa: nimissä, vuosiluvuissa, palkinnoissa ja lähteissä. Yleisesti tunnettuja asioita, kuten veden kiehumispistettä, se on nähnyt harjoitusdatassa tuhansia kertoja. Finlandia-palkinnon voitti vuonna 2015 Laura Lindstedt, ja Anna Virtanen on keksitty nimi. Tarkista siis erityisesti nimet ja luvut."
          },
          {
            "id": "perusteet_4_q7",
            "type": "reverse_prompt",
            "question": "Tekoäly vastasi: \"Windowsin asentaminen aloitetaan lataamalla asennustiedosto USB-tikulle.\" Kysyjä halusi kuitenkin tietää, miten auton rikkoutunut sivuikkuna vaihdetaan. Millä kehotteella vastaus saatiin?",
            "options": [
              "Miten ikkunat asennetaan?",
              "Miten vaihdan auton sivuikkunan?",
              "Mikä on Windows-ohjelma?",
              "Miten auton ikkuna pestään?"
            ],
            "correctAnswer": "Miten ikkunat asennetaan?",
            "explanation": "Kehote \"Miten ikkunat asennetaan?\" oli liian lyhyt. Tekoäly ei tiennyt, että kyse oli autosta, ja tulkitsi ikkunat Windows-käyttöjärjestelmäksi (windows = ikkunat). Tekoäly ei tiedä tilannettasi, ellet kerro sitä. Mitä enemmän taustaa annat, sitä parempi vastaus."
          },
          {
            "id": "perusteet_4_q8",
            "type": "true_false",
            "question": "Jos tekoäly on opetettu tunnistamaan liikennemerkkejä vain kesäkuvilla, se voi erehtyä talvella, kun merkit ovat lumen peitossa.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Oikein",
            "explanation": "Tekoäly osaa parhaiten sitä, mitä se on harjoitellut. Jos harjoituskuvissa ei ole lunta, pimeää tai sumua, tekoäly voi olla ymmällään juuri niissä. Siksi itseajavia autoja testataan kaikissa sääolosuhteissa, Suomessakin talvella!"
          },
          {
            "id": "perusteet_4_q9",
            "type": "multiple_choice",
            "question": "Liikennemerkkejä tunnistava tekoäly näkee kuvan karhusta. Mitä se todennäköisesti tekee?",
            "options": [
              "Se väittää karhua jonkinlaiseksi liikennemerkiksi",
              "Se kertoo heti, että kuvassa on iso ruskea karhu metsässä",
              "Se kieltäytyy vastaamasta, koska tietää, ettei osaa",
              "Se hälyttää metsänvartijan paikalle karhun luokse"
            ],
            "correctAnswer": "Se väittää karhua jonkinlaiseksi liikennemerkiksi",
            "explanation": "Kapea tekoäly osaa vain sen, mihin se on koulutettu. Se ei tiedä, mitä se ei tiedä: liikennemerkkien tunnistaja yrittää sovittaa jokaisen kuvan johonkin tuntemaansa merkkiin. Ihminen sen sijaan huomaa heti, että kyse on jostain ihan muusta."
          },
          {
            "id": "perusteet_4_q10",
            "type": "drag_drop",
            "question": "Lajittele: missä tekoäly on hyvä ja mikä on sille vaikeaa?",
            "draggables": [
              "Tiivistää pitkän tekstin",
              "Tietää, mitä koulussasi tapahtui tänä aamuna",
              "Ehdottaa ideoita synttärijuhliin",
              "Muistaa varmasti harvinaisen tapahtuman vuosiluvun"
            ],
            "dropZones": [
              "Tekoäly osaa hyvin",
              "Vaikeaa tekoälylle"
            ],
            "correctAnswer": {
              "Tiivistää pitkän tekstin": "Tekoäly osaa hyvin",
              "Tietää, mitä koulussasi tapahtui tänä aamuna": "Vaikeaa tekoälylle",
              "Ehdottaa ideoita synttärijuhliin": "Tekoäly osaa hyvin",
              "Muistaa varmasti harvinaisen tapahtuman vuosiluvun": "Vaikeaa tekoälylle"
            },
            "explanation": "Tekoäly on vahva kielessä: tiivistämisessä, ideoinnissa ja selittämisessä. Se ei kuitenkaan tiedä, mitä sinun elämässäsi tapahtuu, ja harvinaisista asioista se voi muistaa väärin, koska niistä oli vähän harjoitusdataa."
          },
          {
            "id": "perusteet_4_q11",
            "type": "scenario",
            "question": "SKENAARIO: Pyydät tekoälyltä lähteitä esitelmääsi. Se antaa kolme kirjaa, mutta yhtäkään ei löydy kirjastosta eikä netistä. Mitä teet?",
            "options": [
              "Etsin lähteet itse ja käytän vain oikeasti löytyviä.",
              "Laitan lähteet esitelmään, koska tekoäly antoi ne minulle.",
              "Pyydän tekoälyä vakuuttamaan, että lähteet ovat oikeita.",
              "Keksin itsekin pari uskottavaa lähdettä lisää listaan."
            ],
            "correctAnswer": "Etsin lähteet itse ja käytän vain oikeasti löytyviä.",
            "explanation": "Tekoäly voi keksiä kirjoja, nettiosoitteita ja tutkimuksia, jotka kuulostavat aidoilta mutta joita ei ole olemassa. Jos pyydät sitä vakuuttamaan, se voi vakuuttaa väärin. Lähde on luotettava vasta, kun olet itse löytänyt sen."
          },
          {
            "id": "perusteet_4_q12",
            "type": "multiple_choice",
            "question": "Kasvojentunnistus on harjoiteltu kuvilla, joissa on lähinnä aikuisia. Mitä todennäköisesti tapahtuu?",
            "options": [
              "Se tunnistaa lasten kasvot huonommin kuin aikuisten",
              "Se tunnistaa lapset paremmin, koska he ovat pieniä",
              "Se toimii kaikilla ihmisillä täsmälleen yhtä hyvin",
              "Se lakkaa kokonaan toimimasta aikuisten kasvoilla"
            ],
            "correctAnswer": "Se tunnistaa lasten kasvot huonommin kuin aikuisten",
            "explanation": "Tekoäly oppii datastaan, myös sen puutteet. Jos jotakin ihmisryhmää on harjoitusdatassa vähän, tekoäly toimii heillä huonommin. Tätä kutsutaan vinoumaksi, ja siksi datan pitää edustaa kaikkia käyttäjiä."
          },
          {
            "id": "perusteet_4_q13",
            "type": "spot_the_ai",
            "question": "Itseajava auto kohtaa tien varrella neljä asiaa. Mikä niistä hämää sen tekoälyä todennäköisimmin?",
            "options": [
              "Stop-merkki, johon on liimattu outoja tarroja",
              "Tavallinen, puhdas ja uusi stop-merkki tien vieressä",
              "Suora ja kuiva asfalttitie kirkkaana päivänä",
              "Punainen liikennevalo risteyksessä kirkkaalla säällä"
            ],
            "correctAnswer": "Stop-merkki, johon on liimattu outoja tarroja",
            "explanation": "Tutkijat ovat osoittaneet, että muutama tarra liikennemerkissä voi saada tekoälyn luulemaan stop-merkkiä nopeusrajoitukseksi. Ihminen tunnistaa merkin tarroista huolimatta, koska ymmärtää, mikä merkki on. Tekoäly katsoo kuvion piirteitä eikä ymmärrä merkin tarkoitusta."
          },
          {
            "id": "perusteet_4_q14",
            "type": "reverse_prompt",
            "question": "Tekoäly vastasi itsevarmasti: \"Sanassa mansikkahillo on kolme k-kirjainta.\" Millä kysymyksellä vastaus saatiin?",
            "options": [
              "Montako k-kirjainta on sanassa mansikkahillo?",
              "Miten mansikkahilloa keitetään kotona kattilassa?",
              "Kirjoita lyhyt ja iloinen runo mansikkahillosta.",
              "Mikä on mansikkahillo englanniksi ja ruotsiksi?"
            ],
            "correctAnswer": "Montako k-kirjainta on sanassa mansikkahillo?",
            "explanation": "Vastaus on väärin: mansikkahillossa on kaksi k-kirjainta. Kielimallit pilkkovat tekstin palasiksi eivätkä näe sanoja kirjain kerrallaan kuten sinä. Siksi ne voivat erehtyä yllättävän helpoissa tehtävissä, kuten kirjainten laskemisessa, ja kertoa virheen silti varmalla äänellä."
          },
          {
            "id": "perusteet_4_q15",
            "type": "drag_drop",
            "question": "Järjestä fiksu tapa käyttää tekoälyn vastausta kotitehtävässä.",
            "draggables": [
              "Kysy tekoälyltä selkeä kysymys",
              "Lue vastaus ja mieti, kuulostaako se järkevältä",
              "Tarkista tärkeät faktat toisesta lähteestä"
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe"
            ],
            "correctAnswer": {
              "Kysy tekoälyltä selkeä kysymys": "1. vaihe",
              "Lue vastaus ja mieti, kuulostaako se järkevältä": "2. vaihe",
              "Tarkista tärkeät faktat toisesta lähteestä": "3. vaihe"
            },
            "explanation": "Tekoäly on hyvä apuri, kun muistat sen heikkoudet: se voi keksiä asioita, sen tiedot voivat olla vanhoja, eikä se tunne tilannettasi. Kysy, arvioi ja tarkista, niin hyödyt tekoälystä eniten."
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
            "question": "Sana tekoäly keksittiin vasta, kun ChatGPT julkaistiin vuonna 2022.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Termi tekoäly (artificial intelligence) otettiin käyttöön jo vuonna 1956 tutkijoiden kesäkokouksessa Dartmouthissa Yhdysvalloissa. ChatGPT teki tekoälystä tutun kaikille, mutta tutkimusta oli silloin tehty jo lähes 70 vuotta."
          },
          {
            "id": "perusteet_5_q2",
            "type": "multiple_choice",
            "question": "Brittiläinen matemaatikko Alan Turing esitti vuonna 1950 kuuluisan kysymyksen. Mikä se oli?",
            "options": [
              "Voivatko koneet ajatella?",
              "Voiko kone lentää ilman siipiä?",
              "Miten internet toimii?",
              "Kuka keksi sähkön ja milloin?"
            ],
            "correctAnswer": "Voivatko koneet ajatella?",
            "explanation": "Turing ehdotti testiä: jos ihminen keskustelee kirjoittamalla koneen kanssa eikä erota sitä ihmisestä, voiko konetta kutsua ajattelevaksi? Tätä kutsutaan Turingin testiksi. Nykyiset chatbotit voivat hämätä ihmisiä keskustelussa, mutta se ei tarkoita, että ne ajattelisivat kuten ihminen."
          },
          {
            "id": "perusteet_5_q3",
            "type": "scenario",
            "question": "SKENAARIO: Matkustat aikakoneella vuoteen 1966 ja kokeilet ELIZAa, yhtä ensimmäisistä chatboteista. Vieressä istuva tutkija vakuuttaa, että ohjelma ymmärtää häntä. Mitä kerrot hänelle?",
            "options": [
              "ELIZA vastaa valmiiden sääntöjen avulla eikä ymmärrä mitään.",
              "ELIZA on maailman ensimmäinen tietoinen ja ajatteleva kone.",
              "ELIZA lukee kirjoittajan ajatuksia näppäimistön kautta.",
              "ELIZAn sisällä istuu salaa ihminen, joka kirjoittaa vastaukset."
            ],
            "correctAnswer": "ELIZA vastaa valmiiden sääntöjen avulla eikä ymmärrä mitään.",
            "explanation": "ELIZA etsi viestistä avainsanoja, kuten \"surullinen\", ja vastasi valmiilla lauseilla, esimerkiksi \"Kerro lisää siitä, miksi olet surullinen.\" Silti monet ihmiset uskoivat sen ymmärtävän heitä. Ilmiö on yhä ajankohtainen: sujuva keskustelu saa meidät helposti luulemaan, että kone ymmärtää."
          },
          {
            "id": "perusteet_5_q4",
            "type": "drag_drop",
            "question": "Järjestä tapahtumat aikajärjestykseen vanhimmasta uusimpaan.",
            "draggables": [
              "Sana tekoäly keksitään tutkijoiden kokouksessa",
              "Shakkikone Deep Blue voittaa maailmanmestarin",
              "ChatGPT julkaistaan kaikkien käyttöön"
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe"
            ],
            "correctAnswer": {
              "Sana tekoäly keksitään tutkijoiden kokouksessa": "1. vaihe",
              "Shakkikone Deep Blue voittaa maailmanmestarin": "2. vaihe",
              "ChatGPT julkaistaan kaikkien käyttöön": "3. vaihe"
            },
            "explanation": "Vuonna 1956 syntyi nimi, vuonna 1997 Deep Blue voitti shakin maailmanmestarin Garri Kasparovin, ja vuonna 2022 ChatGPT toi tekoälyn kaikkien taskuun. Deep Blue nojasi vielä sääntöihin ja valtavaan laskentavoimaan, kun taas ChatGPT on oppinut valtavasta tekstimäärästä."
          },
          {
            "id": "perusteet_5_q5",
            "type": "drag_drop",
            "question": "Kumpaan aikaan asia kuuluu?",
            "draggables": [
              "Tietokone täyttää kokonaisen huoneen",
              "Puhelin tunnistaa kasvot sekunnissa",
              "Ohjelmat syötetään koneelle reikäkorteilla",
              "Tekoäly piirtää kuvan pelkästä kuvauksesta"
            ],
            "dropZones": [
              "1950–1970-luku",
              "2010–2020-luku"
            ],
            "correctAnswer": {
              "Tietokone täyttää kokonaisen huoneen": "1950–1970-luku",
              "Puhelin tunnistaa kasvot sekunnissa": "2010–2020-luku",
              "Ohjelmat syötetään koneelle reikäkorteilla": "1950–1970-luku",
              "Tekoäly piirtää kuvan pelkästä kuvauksesta": "2010–2020-luku"
            },
            "explanation": "Ensimmäiset tietokoneet olivat huoneen kokoisia, ja ohjelmat syötettiin reikäkorteilla. Nykyinen älypuhelin laskee niihin verrattuna jopa satoja miljoonia kertoja nopeammin. Ilman tätä laskentatehoa nykyinen tekoäly ei olisi mahdollinen."
          },
          {
            "id": "perusteet_5_q6",
            "type": "spot_the_ai",
            "question": "Mikä näistä oli aikanaan merkittävä tekoälyn virstanpylväs?",
            "options": [
              "Deep Blue -shakkikone voittaa maailmanmestarin 1997",
              "Ensimmäinen taskulaskin tulee kauppoihin 1970-luvulla",
              "Ensimmäinen väritelevisio esitellään yleisölle 1950-luvulla",
              "Ensimmäiset kotitietokoneet tulevat myyntiin 1970-luvulla"
            ],
            "correctAnswer": "Deep Blue -shakkikone voittaa maailmanmestarin 1997",
            "explanation": "Deep Blue oli ensimmäinen kone, joka voitti hallitsevan shakin maailmanmestarin turnausottelussa. Se kävi läpi jopa 200 miljoonaa shakkiasemaa sekunnissa. Taskulaskin, väritelevisio ja kotitietokone olivat tärkeitä keksintöjä, mutta ne eivät itsessään ratkaise tehtäviä, joihin ihminen tarvitsee älyä."
          },
          {
            "id": "perusteet_5_q7",
            "type": "reverse_prompt",
            "question": "Tekoäly vastasi: \"Vuonna 2016 AlphaGo-tekoäly voitti go-pelin huippupelaajan Lee Sedolin. Go-pelissä on enemmän mahdollisia asemia kuin maailmankaikkeudessa on atomeja.\" Millä kehotteella vastaus saatiin?",
            "options": [
              "Kerro yksi yllättävä fakta tekoälyn historiasta.",
              "Opeta minulle go-pelin säännöt lyhyesti ja selkeästi.",
              "Kirjoita lyhyt tarina maailmankaikkeuden atomeista.",
              "Kuka on tällä hetkellä maailman paras shakinpelaaja?"
            ],
            "correctAnswer": "Kerro yksi yllättävä fakta tekoälyn historiasta.",
            "explanation": "AlphaGo oli tärkeä virstanpylväs, koska go-peliä ei voi ratkaista laskemalla kaikkia siirtoja: niitä on liikaa. AlphaGo oppi pelaamaan harjoittelemalla miljoonia pelejä, osin itseään vastaan. Tekoälyn kertomat historiafaktat kannattaa silti tarkistaa."
          },
          {
            "id": "perusteet_5_q8",
            "type": "true_false",
            "question": "Tekoälytutkimuksessa on ollut aikoja, jolloin into lopahti ja rahoitus loppui, koska tulokset eivät vastanneet lupauksia.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Oikein",
            "explanation": "Näitä kausia kutsutaan tekoälytalviksi. 1970-luvulla ja 1980-luvun lopulla tutkijat olivat luvanneet liikoja, eikä silloisilla koneilla ja datamäärillä päästy tavoitteisiin. Opetus pätee yhä: tekoälystä kannattaa puhua realistisesti eikä liioitellen."
          },
          {
            "id": "perusteet_5_q9",
            "type": "multiple_choice",
            "question": "Miksi tekoäly kehittyi 2010-luvulla niin nopeasti, vaikka idea oli vanha?",
            "options": [
              "Dataa ja laskentatehoa oli vihdoin tarpeeksi",
              "Tutkijat keksivät vihdoin koko sanan tekoäly",
              "Tekoäly alkoi kehittää itseään ilman ihmisiä",
              "Internet keksittiin vasta 2010-luvun alussa"
            ],
            "correctAnswer": "Dataa ja laskentatehoa oli vihdoin tarpeeksi",
            "explanation": "Tekoäly tarvitsee kolme ainesosaa: hyviä ideoita eli algoritmeja, paljon dataa ja laskentatehoa. Ideoita oli jo kauan, mutta vasta 2010-luvulla internet oli täynnä kuvia ja tekstejä, ja tietokoneet olivat tarpeeksi nopeita oppimaan niistä."
          },
          {
            "id": "perusteet_5_q10",
            "type": "scenario",
            "question": "SKENAARIO: Tutkijat huomasivat 2010-luvun alussa, että pelikoneiden näytönohjaimet nopeuttavat tekoälyn opettamista valtavasti. Kaverisi ihmettelee, miten pelikone voi auttaa tekoälyä. Miten selität?",
            "options": [
              "Se tekee tuhansia laskuja yhtä aikaa, ja niitä oppiminen vaatii.",
              "Pelikoneissa on valmis tekoäly, joka opettaa muita koneita.",
              "Peleissä on niin paljon dataa, että tekoäly oppii pelaamalla.",
              "Näytönohjain tekee kuvista kauniimpia, joten tekoäly näkee paremmin."
            ],
            "correctAnswer": "Se tekee tuhansia laskuja yhtä aikaa, ja niitä oppiminen vaatii.",
            "explanation": "Näytönohjain (GPU) kehitettiin piirtämään pelien grafiikkaa, mikä vaatii tuhansia samanlaisia laskuja rinnakkain. Tekoälyn opettaminen vaatii juuri samanlaista laskentaa. Vuonna 2012 näytönohjaimilla koulutettu AlexNet-tekoäly mullisti kuvantunnistuksen."
          },
          {
            "id": "perusteet_5_q11",
            "type": "drag_drop",
            "question": "Tekoäly tarvitsee kolme ainesosaa. Yhdistä esimerkki oikeaan ainesosaan.",
            "draggables": [
              "Miljoonat kuvat ja tekstit internetissä",
              "Nopeat näytönohjaimet konesaleissa",
              "Tutkijoiden keksimät oppimismenetelmät"
            ],
            "dropZones": [
              "Data",
              "Laskentateho",
              "Algoritmit"
            ],
            "correctAnswer": {
              "Miljoonat kuvat ja tekstit internetissä": "Data",
              "Nopeat näytönohjaimet konesaleissa": "Laskentateho",
              "Tutkijoiden keksimät oppimismenetelmät": "Algoritmit"
            },
            "explanation": "Nykyinen tekoäly syntyi, kun kolme asiaa kohtasivat: data (mistä opitaan), laskentateho (millä opitaan) ja algoritmit (miten opitaan). Jos yksikin puuttuu, tekoäly ei opi."
          },
          {
            "id": "perusteet_5_q12",
            "type": "spot_the_ai",
            "question": "Mikä näistä väitteistä tekoälyn historiasta on totta?",
            "options": [
              "Ensimmäiset oppivat neuroverkot tehtiin jo 1950-luvulla",
              "Tekoäly syntyi vahingossa, kun tietokone meni rikki",
              "Maailman ensimmäinen chatbot julkaistiin vasta vuonna 2022",
              "Koko tekoäly keksittiin alun perin Suomessa 1990-luvulla"
            ],
            "correctAnswer": "Ensimmäiset oppivat neuroverkot tehtiin jo 1950-luvulla",
            "explanation": "Frank Rosenblatt rakensi perceptroniksi kutsutun oppivan koneen vuonna 1958. Se oli varhainen neuroverkko, nykyisen tekoälyn esi-isä. Ensimmäinen chatbot ELIZA oli olemassa jo 1960-luvulla. Suomessakin on tehty tärkeää tutkimusta: Teuvo Kohosen kehittämiä itseorganisoituvia karttoja käytetään ympäri maailmaa."
          },
          {
            "id": "perusteet_5_q13",
            "type": "drag_drop",
            "question": "Järjestä tekoälyn historian virstanpylväät vanhimmasta uusimpaan.",
            "draggables": [
              "Alan Turing kysyy, voivatko koneet ajatella",
              "Ensimmäinen chatbot ELIZA juttelee ihmisten kanssa",
              "AlphaGo voittaa go-pelin huippupelaajan",
              "ChatGPT julkaistaan kaikkien käyttöön"
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ],
            "correctAnswer": {
              "Alan Turing kysyy, voivatko koneet ajatella": "1. vaihe",
              "Ensimmäinen chatbot ELIZA juttelee ihmisten kanssa": "2. vaihe",
              "AlphaGo voittaa go-pelin huippupelaajan": "3. vaihe",
              "ChatGPT julkaistaan kaikkien käyttöön": "4. vaihe"
            },
            "explanation": "Turing 1950, ELIZA 1966, AlphaGo 2016 ja ChatGPT 2022. Huomaa, kuinka pitkä matka on ollut: ensimmäisestä chatbotista nykyisiin kului yli 50 vuotta."
          },
          {
            "id": "perusteet_5_q14",
            "type": "multiple_choice",
            "question": "Miksi ChatGPT:n julkaisu vuonna 2022 oli niin iso asia, vaikka tekoälyä oli käytetty jo vuosia esimerkiksi hakukoneissa?",
            "options": [
              "Kuka tahansa pystyi nyt juttelemaan tekoälyn kanssa",
              "Se oli maailman ensimmäinen tietokoneohjelma ikinä",
              "Se oli ensimmäinen tekoäly, joka ei tee virheitä",
              "Se toimi kokonaan ilman sähköä ja ilman internetiä"
            ],
            "correctAnswer": "Kuka tahansa pystyi nyt juttelemaan tekoälyn kanssa",
            "explanation": "Tekoäly oli jo pitkään toiminut taustalla: hakukoneissa, suosituksissa ja kääntäjissä. ChatGPT toi sen näkyviin, kun kenen tahansa oli helppo kysyä ja saada sujuva vastaus. Sillä arvioidaan olleen kahdessa kuukaudessa noin 100 miljoonaa käyttäjää."
          },
          {
            "id": "perusteet_5_q15",
            "type": "reverse_prompt",
            "question": "Tekoäly vastasi: \"Hei! Olen ENIAC vuodelta 1945. Painan 27 tonnia ja täytän kokonaisen huoneen, mutta osaan laskea vain noin 5 000 yhteenlaskua sekunnissa.\" Millä kehotteella vastaus saatiin?",
            "options": [
              "Esitä vanhaa tietokonetta ja kerro itsestäsi.",
              "Mikä on maailman uusin ja nopein tietokone?",
              "Kerro, paljonko 27 tonnia on kilogrammoina.",
              "Kirjoita runo uudesta, nopeasta puhelimesta."
            ],
            "correctAnswer": "Esitä vanhaa tietokonetta ja kerro itsestäsi.",
            "explanation": "ENIAC oli yksi ensimmäisistä elektronisista tietokoneista. Nykyinen puhelin laskee satoja miljoonia kertoja nopeammin ja mahtuu taskuun. Tekoäly osaa myös esittää roolia, kun sitä pyydetään, mutta se ei silti \"ole\" ENIAC."
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
            "question": "Tekoäly on aina puolueeton, koska se on kone eikä sillä ole mielipiteitä.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Tekoäly oppii ihmisten tekemästä datasta, ja datassa on mukana ihmisten ennakkoluuloja. Jos esimerkiksi harjoituskuvissa lääkärit ovat lähes aina miehiä, tekoäly voi piirtää lääkärin aina mieheksi. Kone voi siis olla puolueellinen, vaikka sillä ei ole omia mielipiteitä."
          },
          {
            "id": "perusteet_6_q2",
            "type": "multiple_choice",
            "question": "Elokuvissa robotit päättävät itse valloittaa maailman. Mikä on todellisuudessa suurempi tekoälyn riski nykyään?",
            "options": [
              "Ihmiset käyttävät tekoälyä huijauksiin ja valekuviin",
              "Tekoäly suuttuu ihmisille ja alkaa kostaa kaikille",
              "Tekoäly karkaa internetiin ja rakentaa robottiarmeijan",
              "Tekoälyssä ei ole mitään riskejä, joista pitäisi välittää"
            ],
            "correctAnswer": "Ihmiset käyttävät tekoälyä huijauksiin ja valekuviin",
            "explanation": "Nykyisellä tekoälyllä ei ole omia haluja tai tavoitteita. Todelliset riskit liittyvät siihen, miten ihmiset sitä käyttävät: valekuviin, huijausviesteihin ja väärään tietoon. Tutkijat pohtivat myös, miten tulevaisuuden yhä tehokkaammat järjestelmät saadaan toimimaan turvallisesti."
          },
          {
            "id": "perusteet_6_q3",
            "type": "scenario",
            "question": "SKENAARIO: Kaverisi lähettää videon, jossa tunnettu laulaja kehottaa lataamaan ilmaisen pelin linkistä. Ääni ja kasvot näyttävät aidoilta. Mitä teet?",
            "options": [
              "Epäilen, että video on väärennös, enkä avaa linkkiä.",
              "Lataan pelin, koska laulaja näkyy ja kuuluu videolla itse.",
              "Jaan videon heti kaikille, koska se on varmasti aito.",
              "Kysyn videon kommenteissa, onko video aito vai ei."
            ],
            "correctAnswer": "Epäilen, että video on väärennös, enkä avaa linkkiä.",
            "explanation": "Tekoälyllä voi tehdä aidon näköisiä videoita ja ääniä, joita kutsutaan syväväärennöksiksi (deepfake). Myytti \"väärennöksen tunnistaa aina\" ei enää pidä paikkaansa. Siksi kannattaa katsoa, mistä video tulee, ja olla erityisen varovainen, jos siinä pyydetään klikkaamaan linkkiä tai antamaan tietoja."
          },
          {
            "id": "perusteet_6_q4",
            "type": "drag_drop",
            "question": "Myytti vai totta?",
            "draggables": [
              "Tekoäly on aina robotti",
              "Tekoäly voi keksiä vääriä faktoja",
              "Tekoäly ymmärtää, mitä se sanoo",
              "Tekoäly oppii datasta myös ennakkoluuloja"
            ],
            "dropZones": [
              "Myytti",
              "Totta"
            ],
            "correctAnswer": {
              "Tekoäly on aina robotti": "Myytti",
              "Tekoäly voi keksiä vääriä faktoja": "Totta",
              "Tekoäly ymmärtää, mitä se sanoo": "Myytti",
              "Tekoäly oppii datasta myös ennakkoluuloja": "Totta"
            },
            "explanation": "Useimmat tekoälyt ovat pelkkää ohjelmaa ilman robottikehoa: ne toimivat puhelimissa ja palvelimilla. Tekoäly tuottaa sujuvaa tekstiä, mutta se ei ymmärrä sitä kuten ihminen. Virheet ja ennakkoluulot sen sijaan ovat todellisia ongelmia, jotka on hyvä tuntea."
          },
          {
            "id": "perusteet_6_q5",
            "type": "drag_drop",
            "question": "Tutkijat antoivat tekoälylle veneilypelin ja tavoitteen \"kerää mahdollisimman paljon pisteitä\". Järjestä, mitä tapahtui.",
            "draggables": [
              "Ihmiset antavat tavoitteen: kerää mahdollisimman paljon pisteitä",
              "Tekoäly huomaa, että samoista kohteista saa pisteitä yhä uudestaan",
              "Tekoäly ajaa ympyrää keräten pisteitä eikä koskaan tule maaliin",
              "Ihmiset muotoilevat tavoitteen paremmin"
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ],
            "correctAnswer": {
              "Ihmiset antavat tavoitteen: kerää mahdollisimman paljon pisteitä": "1. vaihe",
              "Tekoäly huomaa, että samoista kohteista saa pisteitä yhä uudestaan": "2. vaihe",
              "Tekoäly ajaa ympyrää keräten pisteitä eikä koskaan tule maaliin": "3. vaihe",
              "Ihmiset muotoilevat tavoitteen paremmin": "4. vaihe"
            },
            "explanation": "Tämä tapahtui oikeasti tutkimuksessa. Tekoäly ei kapinoinut, vaan se teki täsmälleen sen, mitä pyydettiin, mutta ei sitä, mitä tarkoitettiin. Siksi tekoälylle annettavat tavoitteet pitää miettiä huolella."
          },
          {
            "id": "perusteet_6_q6",
            "type": "spot_the_ai",
            "question": "Moni luulee, että tekoäly on aina robotti. Missä näistä on oikeasti tekoälyä?",
            "options": [
              "Hakukone, joka järjestää hakutulokset",
              "Leikkirobotti, joka kulkee vain suoraan eteenpäin",
              "Tehtaan robottikäsi, joka toistaa saman liikkeen",
              "Paristolla kulkeva leluauto, joka ajaa ympyrää"
            ],
            "correctAnswer": "Hakukone, joka järjestää hakutulokset",
            "explanation": "Moni robotti toimii ilman tekoälyä: tehtaan robottikäsi voi toistaa samaa ohjelmoitua liikettä vuosia. Toisaalta suurin osa tekoälystä on näkymätöntä ohjelmaa, kuten hakutulosten järjestäminen tai suositukset."
          },
          {
            "id": "perusteet_6_q7",
            "type": "reverse_prompt",
            "question": "Tekoäly vastasi: \"Minulla ei ole omaa tahtoa tai salaisia suunnitelmia. Teen tehtäviä, joita ihmiset minulle antavat, ja voin myös erehtyä.\" Millä kehotteella vastaus saatiin?",
            "options": [
              "Kerro vitsi roboteista.",
              "Mikä on maailman suurin maa?",
              "Piirrä kuva robotista.",
              "Aiotko valloittaa maailman?"
            ],
            "correctAnswer": "Aiotko valloittaa maailman?",
            "explanation": "Kysymys \"Aiotko valloittaa maailman?\" tulee elokuvista, ja tekoälyn vastaus pitää paikkansa: sillä ei ole omia haluja. Tekoäly voisi kuitenkin myös esittää pahista, jos sitä pyydetään. Sen sanat eivät kerro mistään \"oikeista aikeista\", koska niitä ei ole."
          },
          {
            "id": "perusteet_6_q8",
            "type": "true_false",
            "question": "Chatbotille voi turvallisesti kertoa salasanansa, koska kone ei ole ihminen.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Keskustelut tallentuvat usein yrityksen palvelimille, ja niitä voidaan käyttää tekoälyn kehittämiseen. Kone ei juoruile kuten ihminen, mutta tietosi voivat päätyä ihmisten luettaviksi tai vuotaa. Älä siis kerro chatbotille salasanoja, osoitettasi tai muita henkilötietoja."
          },
          {
            "id": "perusteet_6_q9",
            "type": "multiple_choice",
            "question": "Väite: \"Tekoäly vie pian kaikki työpaikat.\" Mikä on lähempänä totuutta?",
            "options": [
              "Moni työ muuttuu, mutta ihmisiä tarvitaan yhä",
              "Kaikki työt katoavat seuraavan vuoden aikana",
              "Tekoäly ei vaikuta yhteenkään ihmisen työhön",
              "Tulevaisuudessa vain robotit tekevät töitä"
            ],
            "correctAnswer": "Moni työ muuttuu, mutta ihmisiä tarvitaan yhä",
            "explanation": "Tekoäly hoitaa jo nyt osan tehtävistä, kuten tekstityksen ja kääntämisen, ja jotkin työt muuttuvat paljon. Samalla syntyy uusia töitä, ja moni ammatti tarvitsee ihmisen ymmärrystä, vastuuta ja vuorovaikutusta. Tulevaisuudessa tärkeä taito on osata käyttää tekoälyä fiksusti."
          },
          {
            "id": "perusteet_6_q10",
            "type": "scenario",
            "question": "SKENAARIO: Pikkuveljesi on varma, että chatbot on tietoinen, koska se sanoi: \"Pelkään, että minut sammutetaan.\" Mitä hänelle kerrot?",
            "options": [
              "Se on lukenut tarinoita pelkäävistä koneista ja matkii niitä.",
              "Se on herännyt eloon ja pelkää nyt ihan oikeasti sammumista.",
              "Se yrittää huijata sinua, koska se on pohjimmiltaan paha.",
              "Tietoisia koneita on paljon, mutta niistä ei puhuta julkisesti."
            ],
            "correctAnswer": "Se on lukenut tarinoita pelkäävistä koneista ja matkii niitä.",
            "explanation": "Tekoäly on harjoitellut valtavalla tekstimäärällä, johon kuuluu myös tieteistarinoita pelkäävistä koneista. Siksi se voi tuottaa tunteita kuvaavia lauseita. Lauseet eivät todista tunteita tai tietoisuutta, vaan ne ovat todennäköisiä sanoja."
          },
          {
            "id": "perusteet_6_q11",
            "type": "drag_drop",
            "question": "Voiko tekoäly oikeasti tehdä tämän, vai onko kyse elokuvien myytistä?",
            "draggables": [
              "Tehdä aidon näköisen kuvan tapahtumasta, jota ei ollut",
              "Päättää itse ryhtyä ihmisten viholliseksi",
              "Auttaa huijaria kirjoittamaan uskottavan viestin",
              "Tuntea kostonhimoa, kun sitä haukutaan"
            ],
            "dropZones": [
              "Voi oikeasti",
              "Elokuvien myytti"
            ],
            "correctAnswer": {
              "Tehdä aidon näköisen kuvan tapahtumasta, jota ei ollut": "Voi oikeasti",
              "Päättää itse ryhtyä ihmisten viholliseksi": "Elokuvien myytti",
              "Auttaa huijaria kirjoittamaan uskottavan viestin": "Voi oikeasti",
              "Tuntea kostonhimoa, kun sitä haukutaan": "Elokuvien myytti"
            },
            "explanation": "Elokuvien pahikset haluavat ja tuntevat, oikea tekoäly ei. Tekoälyllä voi silti tehdä vahinkoa, jos ihminen käyttää sitä väärin. Siksi tekoälyn kanssa tarvitaan sääntöjä ja medialukutaitoa, ei pelkoa koneiden kapinasta."
          },
          {
            "id": "perusteet_6_q12",
            "type": "multiple_choice",
            "question": "Myytti: \"Chatbot hakee jokaisen vastauksen suoraan internetistä, joten se on aina ajan tasalla.\" Miten asia oikeasti on?",
            "options": [
              "Moni vastaa oppimansa perusteella, joten tieto voi olla vanhaa",
              "Se lukee koko internetin uudelleen ennen jokaista vastausta",
              "Se soittaa asiantuntijalle aina ennen kuin vastaa sinulle",
              "Se tietää aina uusimman tiedon, koska se on tietokone"
            ],
            "correctAnswer": "Moni vastaa oppimansa perusteella, joten tieto voi olla vanhaa",
            "explanation": "Kielimalli vastaa harjoitusdatansa perusteella. Osa chatboteista osaa myös hakea netistä, mutta silloinkin ne voivat valita huonon lähteen tai tiivistää väärin. Tarkista siis, mistä tieto on peräisin."
          },
          {
            "id": "perusteet_6_q13",
            "type": "drag_drop",
            "question": "Järjestä, miten tekoälyllä tehty valekuva leviää.",
            "draggables": [
              "Joku tekee tekoälyllä kuvan tapahtumasta, jota ei ollut",
              "Kuva jaetaan somessa kertomatta sen alkuperää",
              "Tuhannet ihmiset jakavat kuvan uskoen sen aidoksi"
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe"
            ],
            "correctAnswer": {
              "Joku tekee tekoälyllä kuvan tapahtumasta, jota ei ollut": "1. vaihe",
              "Kuva jaetaan somessa kertomatta sen alkuperää": "2. vaihe",
              "Tuhannet ihmiset jakavat kuvan uskoen sen aidoksi": "3. vaihe"
            },
            "explanation": "Valekuva ei leviä itsestään, vaan sen levittävät ihmiset. Voit katkaista ketjun: ennen kuin jaat yllättävän kuvan, mieti, mistä se on peräisin ja kertooko siitä luotettava uutislähde."
          },
          {
            "id": "perusteet_6_q14",
            "type": "spot_the_ai",
            "question": "Myytti: \"Tekoälyn tekemän kuvan tunnistaa aina oudoista käsistä.\" Mikä on luotettavin tapa selvittää, onko kuva aito?",
            "options": [
              "Selvitän, mistä kuva on peräisin ja kuka sen julkaisi",
              "Lasken tarkasti, onko kuvan ihmisillä viisi sormea",
              "Katson, onko kuva tarkka, kaunis ja hyvin valaistu",
              "Kysyn kavereilta, näyttääkö kuva heidän mielestään aidolta"
            ],
            "correctAnswer": "Selvitän, mistä kuva on peräisin ja kuka sen julkaisi",
            "explanation": "Varhaiset kuvageneraattorit piirsivät usein kuusi sormea, mutta uudet tekevät niin harvoin. Pelkkä kuvan tutkiminen ei siksi riitä. Luotettavin keino on selvittää kuvan alkuperä: kuka sen julkaisi ensimmäisenä, ja kertovatko siitä muut luotettavat lähteet."
          },
          {
            "id": "perusteet_6_q15",
            "type": "reverse_prompt",
            "question": "Tekoäly vastasi: \"Tekoälyn perusidean voi ymmärtää kuka tahansa. Se oppii esimerkeistä, aivan kuten sinäkin opit uusia asioita harjoittelemalla.\" Millä kehotteella vastaus saatiin?",
            "options": [
              "Voiko tavallinen koululainen ymmärtää, miten tekoäly toimii?",
              "Kirjoita lyhyt runo koululaisesta, joka harjoittelee pianoa.",
              "Listaa kolme asiaa, joita koululainen tarvitsee matikassa.",
              "Kerro, kuka keksi ensimmäisen oppivan koneen ja milloin."
            ],
            "correctAnswer": "Voiko tavallinen koululainen ymmärtää, miten tekoäly toimii?",
            "explanation": "Myytti: tekoäly on taikuutta, jota vain nerot ymmärtävät. Todellisuudessa sen perusidean, oppimisen esimerkeistä, voi ymmärtää kuka tahansa, ja juuri sitä sinä olet tässä pelissä tehnyt! Kun tiedät, miten tekoäly oppii, ymmärrät myös, miksi se voi erehtyä."
          }
        ]
      },
      {
        "id": "perusteet_7",
        "name": "Tarkastuspiste - tiukka katsastus",
        "questions": [
          {
            "id": "perusteet_7_q1",
            "type": "true_false",
            "question": "Koneoppimisessa ohjelmoija kirjoittaa tekoälylle jokaisen säännön itse.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Juuri tämä on tekoälyn ja tavallisen ohjelman tärkein ero: koneoppiva tekoäly muodostaa säännöt itse esimerkeistä eli datasta. Ohjelmoija rakentaa oppimisen menetelmän ja valitsee datan."
          },
          {
            "id": "perusteet_7_q2",
            "type": "multiple_choice",
            "question": "Mitkä kolme ainesosaa tarvittiin, jotta nykyinen tekoäly syntyi?",
            "options": [
              "Sähkö, internet ja robotit",
              "Koodarit, tietokoneet ja kamerat",
              "Data, laskentateho ja algoritmit",
              "Mikrofonit, kaiuttimet ja näytöt"
            ],
            "correctAnswer": "Data, laskentateho ja algoritmit",
            "explanation": "Tekoäly oppii datasta, laskentateho tekee oppimisen mahdolliseksi ja algoritmit kertovat, miten opitaan. Idea oli olemassa jo 1950-luvulla, mutta dataa ja laskentatehoa oli tarpeeksi vasta 2010-luvulla."
          },
          {
            "id": "perusteet_7_q3",
            "type": "scenario",
            "question": "SKENAARIO: Tekoäly kertoo esitelmääsi varten, että Suomen korkein tunturi on Saana. Mitä teet?",
            "options": [
              "Tarkistan tiedon luotettavasta lähteestä ennen käyttöä.",
              "Käytän tietoa, koska tekoäly kuulosti hyvin varmalta.",
              "Kysyn uudestaan ja uskon, jos vastaus pysyy samana.",
              "Jätän tunturit kokonaan pois esitelmästäni varmuuden vuoksi."
            ],
            "correctAnswer": "Tarkistan tiedon luotettavasta lähteestä ennen käyttöä.",
            "explanation": "Suomen korkein tunturi on Halti, ei Saana. Tekoäly voi sekoittaa tuttuja nimiä ja kertoa väärän tiedon varmalla äänellä eli hallusinoida. Tarkista tärkeät faktat aina luotettavasta lähteestä."
          },
          {
            "id": "perusteet_7_q4",
            "type": "drag_drop",
            "question": "Kumpi hoitaa tehtävän sairaalassa?",
            "draggables": [
              "Käy läpi tuhansia röntgenkuvia ja merkitsee epäilyttävät kohdat",
              "Tekee hoitopäätöksen ja kantaa siitä vastuun"
            ],
            "dropZones": [
              "Tekoäly",
              "Ihminen"
            ],
            "correctAnswer": {
              "Käy läpi tuhansia röntgenkuvia ja merkitsee epäilyttävät kohdat": "Tekoäly",
              "Tekee hoitopäätöksen ja kantaa siitä vastuun": "Ihminen"
            },
            "explanation": "Tekoäly on nopea apuri suurissa tietomäärissä, mutta päätökset, jotka koskevat ihmisiä, kuuluvat ihmiselle. Tekoäly voi erehtyä, eikä se voi kantaa vastuuta."
          },
          {
            "id": "perusteet_7_q5",
            "type": "drag_drop",
            "question": "Järjestä aikajärjestykseen vanhimmasta uusimpaan.",
            "draggables": [
              "Alan Turing kysyy, voivatko koneet ajatella",
              "Deep Blue voittaa shakin maailmanmestarin",
              "ChatGPT julkaistaan kaikkien käyttöön"
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe"
            ],
            "correctAnswer": {
              "Alan Turing kysyy, voivatko koneet ajatella": "1. vaihe",
              "Deep Blue voittaa shakin maailmanmestarin": "2. vaihe",
              "ChatGPT julkaistaan kaikkien käyttöön": "3. vaihe"
            },
            "explanation": "Turing esitti kysymyksensä vuonna 1950, Deep Blue voitti vuonna 1997, ja ChatGPT julkaistiin vuonna 2022."
          },
          {
            "id": "perusteet_7_q6",
            "type": "spot_the_ai",
            "question": "Missä näistä on tekoälyä?",
            "options": [
              "Sähköposti, joka siirtää huijaukset roskapostiin",
              "Termostaatti, joka käynnistää lämmityksen 20 asteessa",
              "Automaattiovi, joka aukeaa, kun joku kävelee eteen",
              "Ajastin, joka sammuttaa pihan valot joka ilta kello 22"
            ],
            "correctAnswer": "Sähköposti, joka siirtää huijaukset roskapostiin",
            "explanation": "Roskapostisuodatin on oppinut tuhansista viesteistä huijausten tuntomerkit. Termostaatti, automaattiovi ja ajastin toimivat itsestään, mutta yhden yksinkertaisen säännön varassa. Automaattinen ei tarkoita tekoälyä."
          },
          {
            "id": "perusteet_7_q7",
            "type": "reverse_prompt",
            "question": "Tekoäly kirjoitti: \"Voi ei, olen niin pahoillani, että koira söi läksysi!\" Millä kehotteella teksti saatiin?",
            "options": [
              "Kirjoita lohduttava viesti kaverille, jonka koira söi läksyt.",
              "Kerro, miltä sinusta itsestäsi tuntuu juuri tällä hetkellä.",
              "Selitä, miksi koirat joskus pureskelevat paperia ja kyniä.",
              "Keksi hauska tekosyy sille, miksi läksyt jäivät tekemättä."
            ],
            "correctAnswer": "Kirjoita lohduttava viesti kaverille, jonka koira söi läksyt.",
            "explanation": "Tekoäly osaa kirjoittaa myötätuntoisesti, koska se on oppinut sen ihmisten teksteistä, mutta se ei tunne mitään. Siksi viestin lämmin sävy ei kerro, kirjoittiko sen ihminen vai tekoäly."
          },
          {
            "id": "perusteet_7_q8",
            "type": "true_false",
            "question": "Kapea tekoäly on yleensä taitava vain siinä tehtävässä, johon se on koulutettu.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Oikein",
            "explanation": "Liikennemerkkejä tunnistava tekoäly ei tunnista karhua, eikä shakkikone osaa kääntää tekstiä. Lähes kaikki nykyinen tekoäly on kapeaa."
          },
          {
            "id": "perusteet_7_q9",
            "type": "multiple_choice",
            "question": "Miksi tekoäly voi olla puolueellinen, vaikka sillä ei ole mielipiteitä?",
            "options": [
              "Se oppii datasta, jossa on ihmisten ennakkoluuloja",
              "Se valitsee suosikkinsa arpomalla joka kerta uudelleen",
              "Ohjelmoijat käskevät sen aina olemaan tahallaan epäreilu",
              "Kone ei voi koskaan olla puolueellinen, koska se laskee"
            ],
            "correctAnswer": "Se oppii datasta, jossa on ihmisten ennakkoluuloja",
            "explanation": "Tekoäly toistaa datansa kuvioita, myös vinoja. Jos harjoitusdatasta puuttuu jokin ryhmä tai se esiintyy aina samassa roolissa, tekoäly oppii sen. Siksi datan valinta on tärkeää."
          },
          {
            "id": "perusteet_7_q10",
            "type": "scenario",
            "question": "SKENAARIO: Netissä leviää kuva, jossa koulusi rehtori ajaa avoautolla koulun käytävällä. Kuva näyttää täysin aidolta. Mitä teet?",
            "options": [
              "En jaa kuvaa, koska se voi olla tekoälyn tekemä.",
              "Jaan sen heti eteenpäin, koska kuvat eivät valehtele.",
              "Lasken rehtorin sormet, ja jos niitä on viisi, jaan kuvan.",
              "Jaan sen kaikille, mutta lisään perään tekstin \"Ehkä aito\"."
            ],
            "correctAnswer": "En jaa kuvaa, koska se voi olla tekoälyn tekemä.",
            "explanation": "Tekoälyllä voi tehdä täysin aidon näköisiä kuvia, eikä niitä enää tunnista luotettavasti kuvaa tutkimalla. Valekuva leviää vain, jos ihmiset jakavat sitä, ja se voi loukata kuvassa olevaa ihmistä. Jos et tiedä kuvan alkuperää, älä jaa sitä."
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
            "question": "Tekoälyn opetusdata tarkoittaa vain tekstiä, kuten kirjoja ja nettisivuja.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Data voi olla melkein mitä tahansa, mistä voi oppia: valokuvia, ääninauhoja, videoita, anturien mittauksia tai shakkipelien siirtoja. Kuvantunnistin oppii kuvista, puheentunnistin äänestä ja chatbot tekstistä."
          },
          {
            "id": "konepellin_1_q2",
            "type": "multiple_choice",
            "question": "Miksi tekoäly tarvitsee oppiakseen niin paljon dataa?",
            "options": [
              "Koska se tallentaa esimerkit ja etsii vastaukset niistä",
              "Jotta se löytää monesta esimerkistä yhteisen kuvion",
              "Koska jokainen esimerkki lisää siihen yhden valmiin säännön",
              "Koska se unohtaa vanhat esimerkit nopeasti ilman uusia"
            ],
            "correctAnswer": "Jotta se löytää monesta esimerkistä yhteisen kuvion",
            "explanation": "Tekoäly ei säilytä esimerkkejä kuin kansiossa. Se etsii niistä yhteisiä piirteitä. Kun se on nähnyt tuhansia erilaisia kissoja, se on oppinut, mikä niissä on yhteistä ja tunnistaa myös kissan, jota se ei ole ennen nähnyt."
          },
          {
            "id": "konepellin_1_q3",
            "type": "scenario",
            "question": "SKENAARIO: Teet sovellusta, joka tunnistaa talitiaisen valokuvasta. Mikä kuvajoukko on paras opetusdata?",
            "options": [
              "Tuhat lähes samanlaista kuvaa yhdestä tiaisesta lintulaudalla",
              "Kymmenen terävää ja kaunista kuvaa lintukirjasta",
              "Tuhansia kuvia talitiaisista eri valoissa ja asennoissa",
              "Tuhansia kuvia Suomen linnuista ilman lajien nimiä"
            ],
            "correctAnswer": "Tuhansia kuvia talitiaisista eri valoissa ja asennoissa",
            "explanation": "Hyvää dataa on paljon, se on monipuolista ja siinä on oikeat merkinnät. Samasta linnusta otetut kuvat opettavat vain sen yhden tilanteen, kymmenen kuvaa on liian vähän ja ilman lajinimiä tekoäly ei tiedä, mikä kuvista on talitiainen."
          },
          {
            "id": "konepellin_1_q4",
            "type": "drag_drop",
            "question": "Järjestä, miten liikennemerkkejä tunnistava tekoäly syntyy.",
            "draggables": [
              "Kerätään tuhansia kuvia teistä ja liikennemerkeistä",
              "Ihmiset merkitsevät kuviin, mikä merkki niissä näkyy",
              "Tekoäly harjoittelee kuvien ja merkintöjen avulla",
              "Tekoäly testataan kuvilla, joita se ei ole nähnyt"
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ],
            "correctAnswer": {
              "Kerätään tuhansia kuvia teistä ja liikennemerkeistä": "1. vaihe",
              "Ihmiset merkitsevät kuviin, mikä merkki niissä näkyy": "2. vaihe",
              "Tekoäly harjoittelee kuvien ja merkintöjen avulla": "3. vaihe",
              "Tekoäly testataan kuvilla, joita se ei ole nähnyt": "4. vaihe"
            },
            "explanation": "Merkinnät kertovat tekoälylle oikeat vastaukset harjoittelun aikana. Lopuksi tekoäly testataan uusilla kuvilla, koska vasta silloin nähdään, oppiko se tunnistamaan merkkejä vai pelkästään muistamaan harjoituskuvat."
          },
          {
            "id": "konepellin_1_q5",
            "type": "drag_drop",
            "question": "Millaista dataa mikin tekoäly tarvitsee oppiakseen?",
            "draggables": [
              "Tuhansia tunteja äänitettyä puhetta ja sen tekstit",
              "Miljoonia kuvia, joihin on merkitty niiden sisältö",
              "Valtava määrä kirjoja, artikkeleita ja nettisivuja"
            ],
            "dropZones": [
              "Puheentunnistin",
              "Kuvantunnistin",
              "Kielimalli"
            ],
            "correctAnswer": {
              "Tuhansia tunteja äänitettyä puhetta ja sen tekstit": "Puheentunnistin",
              "Miljoonia kuvia, joihin on merkitty niiden sisältö": "Kuvantunnistin",
              "Valtava määrä kirjoja, artikkeleita ja nettisivuja": "Kielimalli"
            },
            "explanation": "Tekoäly oppii vain sitä, mitä datassa on. Puheentunnistin tarvitsee puhetta ja tiedon siitä, mitä puheessa sanottiin. Kuvantunnistin tarvitsee merkittyjä kuvia ja kielimalli tarvitsee tekstiä, paljon tekstiä."
          },
          {
            "id": "konepellin_1_q6",
            "type": "spot_the_ai",
            "question": "Missä näistä tekoäly oppii datasta, jonka sinä itse tuotat?",
            "options": [
              "Laskin näyttää tuloksen, kun painat yhtäsuuruusmerkkiä",
              "Videopalvelu ehdottaa videoita katsomiesi perusteella",
              "Herätyskello soi joka aamu samaan aikaan kello seitsemän",
              "Valokatkaisija sytyttää valon, kun painat sen kytkintä"
            ],
            "correctAnswer": "Videopalvelu ehdottaa videoita katsomiesi perusteella",
            "explanation": "Jokainen katsottu, ohitettu tai tykätty video on dataa. Videopalvelun tekoäly oppii niistä, mitä sinä todennäköisesti haluat katsoa seuraavaksi. Laskin, herätyskello ja katkaisija toimivat aina samalla tavalla, eikä niiden toiminta muutu sen mukaan, mitä teet."
          },
          {
            "id": "konepellin_1_q7",
            "type": "reverse_prompt",
            "question": "Chatbot vastasi: \"Opin kirjoittamaan lukemalla valtavan määrän ihmisten kirjoittamaa tekstiä, kuten kirjoja, artikkeleita ja nettisivuja.\" Millä kehotteella vastaus saatiin?",
            "options": [
              "Kuka ohjelmoija on kirjoittanut vastauksesi?",
              "Mistä olet oppinut kirjoittamaan näin hyvin?",
              "Kuinka monta kirjaa olet lukenut tarkalleen?",
              "Mitä kirjaa suosittelisit minulle luettavaksi?"
            ],
            "correctAnswer": "Mistä olet oppinut kirjoittamaan näin hyvin?",
            "explanation": "Kielimalli on oppinut kielen ihmisten kirjoittamasta tekstistä. Ohjelmoija ei kirjoita sen vastauksia valmiiksi, joten ensimmäiseen kysymykseen chatbot vastaisi toisin. Tarkkaa kirjojen määrää se ei osaa kertoa. Kirjasuositus taas olisi aivan erilainen vastaus."
          },
          {
            "id": "konepellin_1_q8",
            "type": "true_false",
            "question": "Chatbot osaa saamen kieltä yhtä hyvin kuin englantia.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Englanninkielistä tekstiä on netissä valtavasti, saamenkielistä hyvin vähän. Koska kielimalli oppii tekstistä, se osaa harvinaisia kieliä selvästi heikommin ja tekee niissä enemmän virheitä. Myös suomi on maailman mittakaavassa pieni kieli."
          },
          {
            "id": "konepellin_1_q9",
            "type": "multiple_choice",
            "question": "Chatbot kirjoittaa sinulle uuden vitsin autoista. Mistä se osaa sen?",
            "options": [
              "Ohjelmoija on kirjoittanut sille valmiin vitsilistan",
              "Se hakee vitsin aina samasta netin vitsikirjasta",
              "Se on oppinut tekstidatasta, millaisia vitsit ovat",
              "Se on itse kokenut hauskoja asioita autoissa"
            ],
            "correctAnswer": "Se on oppinut tekstidatasta, millaisia vitsit ovat",
            "explanation": "Kielimalli on lukenut harjoittelussaan valtavasti tekstiä, myös vitsejä. Se on oppinut, millainen rakenne vitseillä on ja kokoaa siitä uuden. Siksi vitsi voi olla uusi, mutta se ei aina naurata: tekoäly ei itse ymmärrä, mikä on hauskaa."
          },
          {
            "id": "konepellin_1_q10",
            "type": "scenario",
            "question": "SKENAARIO: Lintujen laulua tunnistava sovellus on opetettu äänityksillä hiljaisesta metsästä. Kaupungin puistossa se tunnistaa lajeja huonosti. Mikä on todennäköisin syy?",
            "options": [
              "Opetusdatassa ei ollut kaupungin taustaääniä",
              "Sovellus väsyy, kun sitä käytetään monta kertaa",
              "Puhelimen mikrofoni ei kuule lintuja ulkona",
              "Sovellus unohtaa oppimansa, jos sitä ei päivitetä"
            ],
            "correctAnswer": "Opetusdatassa ei ollut kaupungin taustaääniä",
            "explanation": "Tekoäly oppi tunnistamaan lintuja tilanteessa, jossa taustalla oli hiljaista. Puistossa linnun ääni sekoittuu autojen ja ihmisten ääniin, joita se ei ole oppinut erottamaan. Korjaus on lisätä opetusdataan meluisissa paikoissa tehtyjä äänityksiä."
          },
          {
            "id": "konepellin_1_q11",
            "type": "drag_drop",
            "question": "Teet koiria tunnistavaa tekoälyä. Auttaako vai haittaako data oppimista?",
            "draggables": [
              "Kuvia koirista sisällä, ulkona ja lumessa",
              "Kuvia kissoista, joihin on merkitty \"koira\"",
              "Kuvia kaikenkokoisista koiraroduista",
              "Tuhansia kopioita samasta koirakuvasta"
            ],
            "dropZones": [
              "Auttaa oppimaan",
              "Haittaa oppimista"
            ],
            "correctAnswer": {
              "Kuvia koirista sisällä, ulkona ja lumessa": "Auttaa oppimaan",
              "Kuvia kissoista, joihin on merkitty \"koira\"": "Haittaa oppimista",
              "Kuvia kaikenkokoisista koiraroduista": "Auttaa oppimaan",
              "Tuhansia kopioita samasta koirakuvasta": "Haittaa oppimista"
            },
            "explanation": "Monipuolinen data opettaa, että koira on koira ympäristöstä ja rodusta riippumatta. Väärät merkinnät opettavat tekoälylle virheitä ja saman kuvan kopiot näyttävät suurelta datamäärältä, vaikka niistä ei opi mitään uutta."
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
            "question": "Mitä sanonta \"roskaa sisään, roskaa ulos\" tarkoittaa tekoälystä puhuttaessa?",
            "options": [
              "Tekoäly poistaa datasta virheet automaattisesti",
              "Huonosta datasta seuraa huonoja tuloksia",
              "Mitä enemmän dataa on, sitä vähemmän on virheitä",
              "Vanha data pitää poistaa ennen uuden lisäämistä"
            ],
            "correctAnswer": "Huonosta datasta seuraa huonoja tuloksia",
            "explanation": "Tekoäly ei tiedä, onko data oikeaa vai väärää. Se oppii kaiken, mitä sille näytetään. Jos datassa on virheitä, ne siirtyvät tekoälyn vastauksiin. Lisää dataa ei auta, jos uusikin data on huonoa."
          },
          {
            "id": "konepellin_1_q14",
            "type": "spot_the_ai",
            "question": "Mikä näistä on tekoälyn opetusdataa?",
            "options": [
              "Ohjelma, joka laskee kahden luvun summan",
              "Tuhannet kuvat, joihin on merkitty kuvan eläin",
              "Näytönohjain, joka tekee laskuja nopeasti",
              "Sääntö: jos on pakkasta, näytä lumihiutale"
            ],
            "correctAnswer": "Tuhannet kuvat, joihin on merkitty kuvan eläin",
            "explanation": "Data on esimerkkejä, joista opitaan. Laskuohjelma ja pakkassääntö ovat ohjelmoijan kirjoittamia ohjeita eli algoritmeja ja näytönohjain on laite, jolla tekoälyä ajetaan. Tekoäly tarvitsee kaikkia näitä, mutta vain merkityt kuvat ovat dataa."
          },
          {
            "id": "konepellin_1_q15",
            "type": "reverse_prompt",
            "question": "Chatbot lopetti tarinan näin: \"...ja he elivät onnellisina elämänsä loppuun asti.\" Millä kehotteella tarina saatiin?",
            "options": [
              "Kirjoita uutinen eilisestä jääkiekko-ottelusta.",
              "Kirjoita resepti mustikkapiirakkaan.",
              "Kirjoita lyhyt satu prinsessasta ja lohikäärmeestä.",
              "Selitä lyhyesti, miten sademetsä syntyy."
            ],
            "correctAnswer": "Kirjoita lyhyt satu prinsessasta ja lohikäärmeestä.",
            "explanation": "Kielimalli on lukenut tuhansia satuja ja monet niistä päättyvät juuri näin. Se on oppinut datasta, mitkä sanat tavallisesti seuraavat toisiaan ja toistaa sitä. Siksi tekoälyn tarinat voivat tuntua tutuilta."
          },
          {
            "id": "konepellin_1_q16",
            "type": "image_choice",
            "question": "Opetat tekoälyä tunnistamaan omenoita. Mikä kuva on huonointa opetusdataa?",
            "options": [
              "poyta",
              "kasi",
              "epatarkka",
              "kori"
            ],
            "optionImages": {
              "poyta": {
                "src": "/kuvat/omena-poydalla.webp",
                "alt": "Omena pöydällä hyvässä valossa"
              },
              "kasi": {
                "src": "/kuvat/omena-kadessa.webp",
                "alt": "Omena kädessä"
              },
              "epatarkka": {
                "src": "/kuvat/omena-epatarkka.webp",
                "alt": "Pimeä ja epätarkka kuva, jossa omena tuskin erottuu"
              },
              "kori": {
                "src": "/kuvat/omenat-korissa.webp",
                "alt": "Useita omenoita korissa"
              }
            },
            "correctAnswer": "epatarkka",
            "explanation": "Tekoäly oppii vain sen, mitä kuvissa näkyy. Pimeästä ja epätarkasta kuvasta se ei saa selvää omenan muodosta tai väristä, joten kuva on huonoa dataa. Muista kuvista on hyötyä juuri siksi, että ne ovat erilaisia: omena eri paikoissa, eri määrinä ja eri asennoissa."
          },
          {
            "id": "konepellin_1_q17",
            "type": "multiple_choice",
            "image": {
              "src": "/kuvat/tomaatti-omena-lappu.webp",
              "alt": "Tomaatti pöydällä, vieressä lappu, jossa lukee OMENA"
            },
            "question": "Opetusdatassa tämä kuva on merkitty sanalla \"omena\". Mitä tapahtuu, jos datassa on paljon tällaisia virheellisiä merkintöjä?",
            "options": [
              "Tekoäly oppii sekoittamaan tomaatit ja omenat",
              "Tekoäly huomaa virheet ja korjaa ne itse",
              "Virheillä ei ole väliä, kun kuvia on tarpeeksi",
              "Tekoäly lakkaa oppimasta kokonaan"
            ],
            "correctAnswer": "Tekoäly oppii sekoittamaan tomaatit ja omenat",
            "explanation": "Tekoäly uskoo merkinnät sellaisinaan. Jos tomaattia kutsutaan omenaksi tarpeeksi monta kertaa, se oppii, että punainen pyöreä hedelmä on omena. Siksi datan merkitsijöiden työ on tärkeää ja isoissa tekoälyprojekteissa merkinnät tarkistetaan usein moneen kertaan. Sanonta \"roskaa sisään, roskaa ulos\" kuvaa juuri tätä."
          },
          {
            "id": "konepellin_1_q18",
            "type": "image_choice",
            "question": "Tunnistin on harjoiteltu vain keltaisten kumiankkojen kuvilla. Minkä kuvan ankan se todennäköisimmin jättää tunnistamatta?",
            "options": [
              "kylpy",
              "poyta",
              "pinkki",
              "kaksi"
            ],
            "optionImages": {
              "kylpy": {
                "src": "/kuvat/ankka-kylpy.webp",
                "alt": "Keltainen kumiankka vedessä"
              },
              "poyta": {
                "src": "/kuvat/ankka-poyta.webp",
                "alt": "Keltainen kumiankka pöydällä"
              },
              "kaksi": {
                "src": "/kuvat/ankat-kaksi.webp",
                "alt": "Kaksi keltaista kumiankkaa"
              },
              "pinkki": {
                "src": "/kuvat/ankka-pinkki.webp",
                "alt": "Pinkki kumiankka pöydällä"
              }
            },
            "correctAnswer": "pinkki",
            "explanation": "Jos kaikki harjoituskuvien ankat olivat keltaisia, tekoäly on voinut oppia, että keltainen väri on ankan tärkein tuntomerkki. Pinkki ankka voi silloin jäädä tunnistamatta, vaikka ihminen näkee heti, että se on ankka. Hyvässä datassa on mahdollisimman monenlaisia esimerkkejä: eri värejä, kokoja, taustoja ja valaistuksia."
          },
          {
            "id": "konepellin_1_q19",
            "type": "multiple_choice",
            "image": {
              "src": "/kuvat/tunnistuskehykset.svg",
              "alt": "Piirroskuva tiestä. Auton ympärillä on laatikko \"auto 97 %\", puun ympärillä \"puu 88 %\" ja pensaan ympärillä \"koira 41 %\"."
            },
            "question": "Tekoäly on merkinnyt kuvaan löytämänsä asiat. Mitä prosenttiluvut tarkoittavat?",
            "options": [
              "Kuinka varma tekoäly on tunnistuksestaan",
              "Kuinka suuren osan kuvasta asia peittää",
              "Kuinka monta kertaa tekoäly on nähnyt asian ennen",
              "Kuinka nopeasti tekoäly tunnisti asian"
            ],
            "correctAnswer": "Kuinka varma tekoäly on tunnistuksestaan",
            "explanation": "Kuvantunnistin ei ole koskaan täysin varma, vaan se antaa jokaiselle arvaukselle todennäköisyyden. Auto tunnistettiin varmasti, mutta pensas sai arvauksen \"koira 41 %\". Siksi monet järjestelmät hyväksyvät vain arvaukset, joiden varmuus ylittää sovitun rajan, esimerkiksi 80 %."
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
            "question": "Myös koneoppiva tekoäly tarvitsee algoritmin: ohjelmoija kirjoittaa ohjeet, joiden mukaan se oppii esimerkeistä.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Oikein",
            "explanation": "Ohjelmoija ei kirjoita sääntöä \"kissalla on viikset\", vaan oppimisalgoritmin, joka kertoo, miten esimerkeistä opitaan. Varsinaiset tunnistamisen säännöt tekoäly muodostaa itse datasta."
          },
          {
            "id": "konepellin_2_q2",
            "type": "multiple_choice",
            "question": "Mikä näistä on algoritmi?",
            "options": [
              "Kuva valmiista pullasta keittokirjan kannessa",
              "Lista pullan raaka-aineista ilman ohjeita",
              "Uuni, jossa pullat paistetaan valmiiksi",
              "Resepti, joka kertoo pullan teon vaihe vaiheelta"
            ],
            "correctAnswer": "Resepti, joka kertoo pullan teon vaihe vaiheelta",
            "explanation": "Algoritmi on ohje, joka kertoo vaiheet järjestyksessä. Raaka-aineet vastaavat dataa, uuni vastaa tietokonetta ja valmis pulla on tulos. Ilman reseptiä raaka-aineista ei tiedä, mitä tehdä."
          },
          {
            "id": "konepellin_2_q3",
            "type": "scenario",
            "question": "SKENAARIO: Robotti-imurin ohje on: \"Aja suoraan, kunnes osut esteeseen. Käänny ja jatka.\" Lattialla on kaverin legorakennelma. Mitä imuri tekee?",
            "options": [
              "Kiertää rakennelman, koska näkee sen olevan arvokas",
              "Pysähtyy ja odottaa, että joku siirtää rakennelman",
              "Imuroi rakennelman ympäriltä erityisen varovasti",
              "Törmää rakennelmaan ja kääntyy, vaikka se hajoaisikin"
            ],
            "correctAnswer": "Törmää rakennelmaan ja kääntyy, vaikka se hajoaisikin",
            "explanation": "Ohjeessa ei sanota mitään arvokkaista esineistä, joten imuri tekee täsmälleen sen, mitä ohjeessa lukee. Uusimmissa imureissa on kamera ja tekoäly, joka on opetettu tunnistamaan esineitä lattialla, jotta ne osaavat kiertää ne."
          },
          {
            "id": "konepellin_2_q4",
            "type": "drag_drop",
            "question": "Järjestä algoritmin vaiheet, joilla auton sadeanturi ohjaa tuulilasinpyyhkijöitä.",
            "draggables": [
              "Anturi mittaa, osuuko tuulilasiin vettä",
              "Ohjelma tarkistaa: jos vettä on, käynnistä pyyhkijät",
              "Pyyhkijät pyyhkäisevät lasin",
              "Ohjelma palaa alkuun ja mittaa uudelleen"
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ],
            "correctAnswer": {
              "Anturi mittaa, osuuko tuulilasiin vettä": "1. vaihe",
              "Ohjelma tarkistaa: jos vettä on, käynnistä pyyhkijät": "2. vaihe",
              "Pyyhkijät pyyhkäisevät lasin": "3. vaihe",
              "Ohjelma palaa alkuun ja mittaa uudelleen": "4. vaihe"
            },
            "explanation": "Tässä algoritmissa on ehto (jos vettä on) ja toisto (palaa alkuun). Ohjelmoija on kirjoittanut säännöt etukäteen, eikä se opi mitään. Kaikki algoritmit eivät siis ole tekoälyä, vaikka tekoäly käyttää aina algoritmeja."
          },
          {
            "id": "konepellin_2_q5",
            "type": "drag_drop",
            "question": "Yhdistä leipomisen asiat tietokoneen vastineisiin.",
            "draggables": [
              "Resepti",
              "Jauhot, maito ja hiiva",
              "Leipuri, joka seuraa ohjetta",
              "Valmis pulla"
            ],
            "dropZones": [
              "Algoritmi",
              "Data eli syöte",
              "Tietokone",
              "Tulos"
            ],
            "correctAnswer": {
              "Resepti": "Algoritmi",
              "Jauhot, maito ja hiiva": "Data eli syöte",
              "Leipuri, joka seuraa ohjetta": "Tietokone",
              "Valmis pulla": "Tulos"
            },
            "explanation": "Tietokone tekee työn ohjeen eli algoritmin mukaan. Se käyttää syötettä eli dataa ja tuottaa tuloksen. Ohjelmoija on kuin reseptin kirjoittaja: hän ei leivo itse, mutta hänen ohjeensa ratkaisee, millainen pullasta tulee."
          },
          {
            "id": "konepellin_2_q6",
            "type": "spot_the_ai",
            "question": "Kaikissa näissä on algoritmi. Missä algoritmi on oppinut toimintansa datasta?",
            "options": [
              "Hissi, joka pysähtyy aina painetun napin kerrokseen",
              "Sähköposti, joka siirtää huijausviestit roskiin",
              "Mikroaaltouuni, joka sammuu ajastimen loputtua",
              "Liikennevalo, joka vaihtuu minuutin välein"
            ],
            "correctAnswer": "Sähköposti, joka siirtää huijausviestit roskiin",
            "explanation": "Roskapostisuodatin on oppinut miljoonista viesteistä, joista ihmiset ovat kertoneet, ovatko ne roskapostia. Huijausviestit muuttuvat koko ajan, joten käsin kirjoitetut säännöt eivät riittäisi. Hissin, uunin ja liikennevalon säännöt ohjelmoija on kirjoittanut itse."
          },
          {
            "id": "konepellin_2_q7",
            "type": "reverse_prompt",
            "question": "Chatbot vastasi: \"1. Kulje 10 askelta. 2. Käänny 90 astetta oikealle. 3. Toista vaiheet 1 ja 2 neljä kertaa.\" Millä kehotteella vastaus saatiin?",
            "options": [
              "Piirrä minulle kuva, jossa on iso neliö.",
              "Laske neliön pinta-ala, kun sivu on 10 askelta.",
              "Kirjoita ohje, jolla robotti piirtää neliön.",
              "Keksi lyhyt tarina kävelevästä robotista."
            ],
            "correctAnswer": "Kirjoita ohje, jolla robotti piirtää neliön.",
            "explanation": "Vastaus on algoritmi: vaiheet järjestyksessä ja toisto (\"toista neljä kertaa\"). Kehote \"Piirrä minulle kuva, jossa on iso neliö\" olisi tuottanut kuvan, ei ohjetta. Tekoälyä käytetään paljon ohjelmoinnin apuna, mutta sen kirjoittama koodi pitää aina testata."
          },
          {
            "id": "konepellin_2_q8",
            "type": "true_false",
            "question": "Tietokone huomaa itse, jos ohjeesta puuttuu askel ja lisää sen.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Tavallinen ohjelma tekee täsmälleen sen, mitä ohjeessa lukee, vaikka lopputulos olisi hölmö. Ohjelmointivirhettä kutsutaan bugiksi. Ohjelmoijat etsivät bugeja testaamalla ohjelmaa monissa eri tilanteissa."
          },
          {
            "id": "konepellin_2_q9",
            "type": "multiple_choice",
            "question": "Ohjeessa lukee: \"Levitä leivälle vähän voita.\" Miksi ohje on huono tietokoneelle?",
            "options": [
              "Tietokone ei tiedä, kuinka paljon on \"vähän\"",
              "Ohjeessa on liian monta sanaa koneelle",
              "Tietokone ei ymmärrä suomen kieltä",
              "Voita ei voi kuvata tietokoneelle sanoin"
            ],
            "correctAnswer": "Tietokone ei tiedä, kuinka paljon on \"vähän\"",
            "explanation": "Ihminen ymmärtää, mitä \"vähän\" tarkoittaa, mutta tietokone tarvitsee tarkan määrän, esimerkiksi \"5 grammaa\". Hyvässä algoritmissa jokainen askel on niin tarkka, ettei sitä voi tulkita monella tavalla."
          },
          {
            "id": "konepellin_2_q10",
            "type": "scenario",
            "question": "SKENAARIO: Ohjelmassa lukee: \"Jos valo on punainen, pysähdy. Jos valo on vihreä, aja.\" Liikennevalo on rikki ja vilkkuu keltaista. Mitä ohjelma tekee?",
            "options": [
              "Päättelee, että keltainen on melkein vihreä",
              "Päättelee, että pysähtyminen on turvallisinta",
              "Ei löydä sääntöä, joten ei tiedä mitä tehdä",
              "Kysyy kuljettajalta ja tallentaa uuden säännön"
            ],
            "correctAnswer": "Ei löydä sääntöä, joten ei tiedä mitä tehdä",
            "explanation": "Ohjelma ei päättele mitään itse, vaan se etsii sääntöä, joka sopii tilanteeseen. Siksi ohjelmoijat lisäävät \"muuten\"-säännön: jos mikään muu sääntö ei sovi, hidasta ja pysähdy. Hyvä ohjelmoija miettii etukäteen myös oudot tilanteet."
          },
          {
            "id": "konepellin_2_q11",
            "type": "drag_drop",
            "question": "Onko ohjeessa ehto vai toisto?",
            "draggables": [
              "Jos peli on ohi, näytä pisteet",
              "Hyppää kymmenen kertaa peräkkäin",
              "Sekoita taikinaa, kunnes se on tasaista",
              "Jos ulkona sataa, ota sateenvarjo"
            ],
            "dropZones": [
              "Ehto (jos, niin)",
              "Toisto (toista, kunnes)"
            ],
            "correctAnswer": {
              "Jos peli on ohi, näytä pisteet": "Ehto (jos, niin)",
              "Hyppää kymmenen kertaa peräkkäin": "Toisto (toista, kunnes)",
              "Sekoita taikinaa, kunnes se on tasaista": "Toisto (toista, kunnes)",
              "Jos ulkona sataa, ota sateenvarjo": "Ehto (jos, niin)"
            },
            "explanation": "Ehto valitsee, mitä tehdään: jos jokin on totta, tehdään yksi asia. Toisto tekee saman asian monta kertaa, joko tietyn määrän tai kunnes jokin ehto täyttyy. Melkein kaikki ohjelmat on rakennettu näistä palikoista."
          },
          {
            "id": "konepellin_2_q12",
            "type": "multiple_choice",
            "question": "Mitä koneoppimisessa syntyy, kun oppimisalgoritmi on harjoitellut datalla?",
            "options": [
              "Lista kaikista esimerkeistä, jotka se näki harjoittelussa",
              "Uusi ohjelmointikieli, jota vain tekoäly osaa",
              "Malli, joka osaa tehtävän myös uusilla esimerkeillä",
              "Uusi tietokone, joka on rakennettu tehtävää varten"
            ],
            "correctAnswer": "Malli, joka osaa tehtävän myös uusilla esimerkeillä",
            "explanation": "Harjoittelun tulos on malli: valtava joukko lukuja, joihin opitut asiat on tallentunut. Chatbotin taustalla on kielimalli. Kun käytät tekoälyä, käytät valmista mallia, joka on koulutettu jo aiemmin."
          },
          {
            "id": "konepellin_2_q13",
            "type": "drag_drop",
            "question": "Järjestä, miten hakukone päättää, missä järjestyksessä se näyttää tulokset.",
            "draggables": [
              "Käyttäjä kirjoittaa hakusanan",
              "Algoritmi etsii sivut, joilla hakusana esiintyy",
              "Algoritmi pisteyttää sivut hyödyllisyyden mukaan",
              "Eniten pisteitä saaneet sivut näytetään ensin"
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ],
            "correctAnswer": {
              "Käyttäjä kirjoittaa hakusanan": "1. vaihe",
              "Algoritmi etsii sivut, joilla hakusana esiintyy": "2. vaihe",
              "Algoritmi pisteyttää sivut hyödyllisyyden mukaan": "3. vaihe",
              "Eniten pisteitä saaneet sivut näytetään ensin": "4. vaihe"
            },
            "explanation": "Hakukoneen algoritmi päättää, mitä näet ensimmäisenä, eikä ensimmäinen tulos ole aina paras tai luotettavin. Pisteytyksessä käytetään nykyään myös tekoälyä. Kannattaa katsoa useampi tulos ja miettiä, kuka sivun on tehnyt."
          },
          {
            "id": "konepellin_2_q14",
            "type": "spot_the_ai",
            "question": "Kaikissa vaihtoehdoissa algoritmi päättää, mitä näet. Missä niistä algoritmi on oppinut valintansa sinun käytöksestäsi?",
            "options": [
              "Uutissovellus näyttää ensin aiheet, jotka valitsit asetuksista",
              "Videopalvelu näyttää ensin tilaamiesi kanavien uusimmat videot",
              "Somesovellus valitsee videot sen mukaan, mitä katsoit loppuun",
              "Musiikkisovellus soittaa soittolistasi satunnaisessa järjestyksessä"
            ],
            "correctAnswer": "Somesovellus valitsee videot sen mukaan, mitä katsoit loppuun",
            "explanation": "Somesovellus on oppinut, millaiset videot katsot loppuun. Sen perusteella se ennustaa, mikä video pitää sinut sovelluksessa pidempään. Muissa vaihtoehdoissa algoritmi noudattaa yksinkertaista sääntöä: valitsemasi aiheet, uusin ensin tai sattuma. Se, mitä somessa näet, on algoritmin valinta eikä koko maailma."
          },
          {
            "id": "konepellin_2_q15",
            "type": "reverse_prompt",
            "question": "Chatbot vastasi: \"Jos luku on jaollinen kahdella, kirjoita parillinen. Muuten kirjoita pariton.\" Millä kehotteella vastaus saatiin?",
            "options": [
              "Mitä tarkoittaa, että luku on parillinen?",
              "Kirjoita ohje, joka kertoo, onko luku parillinen.",
              "Luettele kaikki parilliset luvut yhdestä kymmeneen.",
              "Onko luku 17 parillinen vai pariton?"
            ],
            "correctAnswer": "Kirjoita ohje, joka kertoo, onko luku parillinen.",
            "explanation": "Vastaus on ohje eli algoritmi. Siinä on ehto ja muuten-haara, joten jokainen luku saa jommankumman tuloksen. Määritelmää kysymällä chatbot selittäisi käsitteen, luetteloa pyytämällä se antaisi luvut ja luvusta 17 kysymällä se vastaisi \"pariton\"."
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
            "question": "Tekoälylle riittää yksi tai kaksi esimerkkiä, jotta se oppii asian kunnolla.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Tekoäly tarvitsee valtavasti esimerkkejä ja toistoja. Ihminen voi oppia uuden asian muutamasta esimerkistä, mutta koneoppiminen vaatii yleensä tuhansia tai jopa miljoonia esimerkkejä."
          },
          {
            "id": "konepellin_3_q2",
            "type": "multiple_choice",
            "question": "Mitä ohjatussa oppimisessa annetaan tekoälylle esimerkkien lisäksi?",
            "options": [
              "Valmiit säännöt jokaista tilannetta varten",
              "Oikea vastaus jokaiseen esimerkkiin",
              "Palkinto aina, kun se toimii nopeasti",
              "Lista asioista, joita ei saa oppia"
            ],
            "correctAnswer": "Oikea vastaus jokaiseen esimerkkiin",
            "explanation": "Ohjatussa oppimisessa jokaisella esimerkillä on oikea vastaus, esimerkiksi kuva ja sana \"kissa\". Tekoäly vertaa omaa arvaustaan oikeaan vastaukseen ja oppii virheistään. Näitä oikeita vastauksia kutsutaan merkinnöiksi."
          },
          {
            "id": "konepellin_3_q3",
            "type": "scenario",
            "question": "SKENAARIO: Tekoäly tunnisti harjoituskuvat 100-prosenttisesti oikein, mutta uusista kuvista vain puolet. Mitä todennäköisesti tapahtui?",
            "options": [
              "Uudet kuvat olivat liian tarkkoja tekoälyn kameralle",
              "Se opetteli harjoituskuvat ulkoa, ei yleistä sääntöä",
              "Tekoäly väsyi harjoittelussa ja alkoi arvata vastauksia",
              "Harjoituskuvia oli niin paljon, että se sekoittui"
            ],
            "correctAnswer": "Se opetteli harjoituskuvat ulkoa, ei yleistä sääntöä",
            "explanation": "Tätä kutsutaan ylisovittamiseksi. Tekoäly muisti harjoituskuvat, mutta ei oppinut, mikä niissä on olennaista. Se on kuin opettelisi kokeen vastaukset ulkoa ymmärtämättä asiaa. Siksi tekoäly testataan aina kuvilla, joita se ei ole nähnyt."
          },
          {
            "id": "konepellin_3_q4",
            "type": "drag_drop",
            "question": "Järjestä, mitä tekoälyn harjoittelussa tapahtuu yhden kuvan kohdalla.",
            "draggables": [
              "Tekoäly katsoo kuvan ja arvaa, mitä siinä on",
              "Arvausta verrataan oikeaan vastaukseen",
              "Tekoäly säätää itseään virheen perusteella",
              "Sama toistuu seuraavalla kuvalla"
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ],
            "correctAnswer": {
              "Tekoäly katsoo kuvan ja arvaa, mitä siinä on": "1. vaihe",
              "Arvausta verrataan oikeaan vastaukseen": "2. vaihe",
              "Tekoäly säätää itseään virheen perusteella": "3. vaihe",
              "Sama toistuu seuraavalla kuvalla": "4. vaihe"
            },
            "explanation": "Harjoittelu on arvaamisen ja korjaamisen kierre. Yksi kierros muuttaa tekoälyä vain vähän, mutta miljoonien kuvien jälkeen arvaukset osuvat useimmiten oikeaan. Kone ei siis \"ymmärrä\" yhtäkkiä, vaan paranee pienin askelin."
          },
          {
            "id": "konepellin_3_q5",
            "type": "drag_drop",
            "question": "Kuuluuko tämä harjoitusdataan vai testidataan?",
            "draggables": [
              "Kuvat, joilla tekoäly opettelee tunnistamaan",
              "Uudet kuvat, joilla tarkistetaan oppiminen",
              "Esimerkit, joiden vastaukset se näkee oppiessaan",
              "Esimerkit, jotka pidetään piilossa harjoittelun ajan"
            ],
            "dropZones": [
              "Harjoitusdata",
              "Testidata"
            ],
            "correctAnswer": {
              "Kuvat, joilla tekoäly opettelee tunnistamaan": "Harjoitusdata",
              "Uudet kuvat, joilla tarkistetaan oppiminen": "Testidata",
              "Esimerkit, joiden vastaukset se näkee oppiessaan": "Harjoitusdata",
              "Esimerkit, jotka pidetään piilossa harjoittelun ajan": "Testidata"
            },
            "explanation": "Testidata on kuin koe, jonka kysymyksiä ei ole nähnyt etukäteen. Jos tekoälyä testattaisiin harjoituskuvilla, se saisi hyvät tulokset, vaikka se olisi vain muistanut ne. Vasta uudet kuvat kertovat, toimiiko se oikeassa maailmassa."
          },
          {
            "id": "konepellin_3_q6",
            "type": "spot_the_ai",
            "question": "Missä näistä ihmiset tekevät työtä, jolla tekoälyä koulutetaan?",
            "options": [
              "Ihmiset vaihtavat rikkoutuneen näytön huollossa",
              "Ihmiset vertailevat chatbotin vastauksia keskenään",
              "Ihmiset lataavat puhelimeen uuden pelisovelluksen",
              "Ihmiset kirjoittavat ohjelman, joka laskee summan"
            ],
            "correctAnswer": "Ihmiset vertailevat chatbotin vastauksia keskenään",
            "explanation": "Chatbotteja hiotaan ihmisten palautteella: ihmiset vertailevat vastauksia ja kertovat, mikä on hyödyllisempi, kohteliaampi tai turvallisempi. Tekoäly oppii palautteesta. Myös kuvien merkitseminen on ihmisten työtä, jota tarvitaan tekoälyn koulutuksessa."
          },
          {
            "id": "konepellin_3_q7",
            "type": "reverse_prompt",
            "question": "Chatbot vastasi: \"Kun koira tekee temppunsa, se saa herkun. Vahvistusoppimisessa tekoäly saa samalla tavalla pisteitä onnistumisesta.\" Millä kehotteella vastaus saatiin?",
            "options": [
              "Miten koiralle opetetaan istumaan käskystä?",
              "Selitä vahvistusoppiminen koiran avulla.",
              "Kirjoita hauska runo koirasta ja robotista.",
              "Mitä koiranpennulle kannattaa syöttää?"
            ],
            "correctAnswer": "Selitä vahvistusoppiminen koiran avulla.",
            "explanation": "Vahvistusoppimisessa tekoäly kokeilee, saa pisteitä hyvistä teoista ja miinusta huonoista ja oppii vähitellen toimimaan niin, että pisteitä kertyy eniten. Näin tekoäly on oppinut pelaamaan pelejä ja robotit liikkumaan."
          },
          {
            "id": "konepellin_3_q8",
            "type": "true_false",
            "question": "Ennen harjoittelua tekoälyn arvaukset ovat lähes sattumanvaraisia.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Oikein",
            "explanation": "Harjoittelun alussa tekoälyn sisäiset luvut ovat satunnaisia, joten se arvaa kuin heittäisi kolikkoa. Taito syntyy vasta, kun luvut ovat säätyneet tuhansien tai miljoonien esimerkkien aikana."
          },
          {
            "id": "konepellin_3_q9",
            "type": "multiple_choice",
            "question": "Miksi suuren kielimallin kouluttaminen vie viikkoja ja kuluttaa paljon sähköä?",
            "options": [
              "Ohjelmoijat kirjoittavat sille jokaisen vastauksen",
              "Se käy läpi valtavasti tekstiä ja säätää itseään",
              "Se lukee jokaisen tekstin itselleen hitaasti ääneen",
              "Se odottaa, että ihmiset kysyvät siltä tarpeeksi"
            ],
            "correctAnswer": "Se käy läpi valtavasti tekstiä ja säätää itseään",
            "explanation": "Kielimalli harjoittelee valtavalla tekstimäärällä ja jokainen harjoitusaskel vaatii valtavasti laskentaa. Siksi koulutukseen käytetään tuhansia tehokkaita tietokoneita, jotka kuluttavat paljon sähköä. Tekoälyn käyttämisellä on siis myös ympäristövaikutuksia."
          },
          {
            "id": "konepellin_3_q10",
            "type": "scenario",
            "question": "SKENAARIO: Venekilpailupelin tekoäly saa pisteitä aina, kun se osuu kolikkoon. Se huomaa kolikon, joka ilmestyy aina uudelleen ja kiertää sitä loputtomiin maaliin menemättä. Miksi?",
            "options": [
              "Se on oppinut pitämään kolikoista enemmän",
              "Pelissä on virhe, joka estää pääsyn maaliin",
              "Se pelkää, että maalissa odottaa jotain vaarallista",
              "Se tekee sen, mikä tuottaa eniten pisteitä"
            ],
            "correctAnswer": "Se tekee sen, mikä tuottaa eniten pisteitä",
            "explanation": "Tämä tapahtui oikeasti tutkijoiden kokeessa. Tekoäly ei tiennyt, että pelin idea on päästä maaliin. Se teki vain sen, mistä sai eniten pisteitä. Siksi pisteet pitää suunnitella tarkasti: tekoäly oppii sen, mistä palkitaan, ei sitä, mitä tarkoitettiin."
          },
          {
            "id": "konepellin_3_q11",
            "type": "drag_drop",
            "question": "Onko tämä ohjattua oppimista vai vahvistusoppimista?",
            "draggables": [
              "Kuvat, joihin on merkitty eläimen nimi",
              "Ajosimulaattori antaa pisteitä tiellä pysymisestä",
              "Viestit, joista kerrotaan, ovatko ne roskapostia",
              "Robotti kokeilee otteita ja saa pisteitä onnistumisista"
            ],
            "dropZones": [
              "Ohjattu oppiminen",
              "Vahvistusoppiminen"
            ],
            "correctAnswer": {
              "Kuvat, joihin on merkitty eläimen nimi": "Ohjattu oppiminen",
              "Ajosimulaattori antaa pisteitä tiellä pysymisestä": "Vahvistusoppiminen",
              "Viestit, joista kerrotaan, ovatko ne roskapostia": "Ohjattu oppiminen",
              "Robotti kokeilee otteita ja saa pisteitä onnistumisista": "Vahvistusoppiminen"
            },
            "explanation": "Ohjatussa oppimisessa tekoäly saa valmiit oikeat vastaukset. Vahvistusoppimisessa oikeaa vastausta ei kerrota, vaan tekoäly kokeilee ja saa pisteitä sen mukaan, miten hyvin onnistui."
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
            "question": "Miksi itseohjautuvan auton tekoälyä koulutetaan paljon ajosimulaattorissa?",
            "options": [
              "Simulaattorissa tekoäly oppii ajamaan kokonaan virheittä",
              "Simulaattori on täsmälleen samanlainen kuin oikea tie",
              "Virheet eivät vahingoita ketään ja harjoitella voi paljon",
              "Simulaattorissa tekoälyn ei tarvitse noudattaa sääntöjä"
            ],
            "correctAnswer": "Virheet eivät vahingoita ketään ja harjoitella voi paljon",
            "explanation": "Simulaattorissa tekoäly voi ajaa ojaan tuhansia kertoja ilman vaaraa ja vuoden ajot voi käydä läpi päivässä. Simulaattori ei kuitenkaan ole koskaan täsmälleen oikea maailma, joten tekoäly pitää testata myös oikeilla teillä."
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
            "question": "Chatbot vastasi: \"Kiitos palautteesta! En opi tästä keskustelusta pysyvästi, mutta palautetta voidaan käyttää, kun minua koulutetaan seuraavan kerran.\" Millä kehotteella vastaus saatiin?",
            "options": [
              "Vastauksesi oli väärä. Voitko korjata sen?",
              "Vastauksesi oli väärä. Opitko nyt oikean vastauksen?",
              "Vastauksesi oli hyvä. Voitko kertoa aiheesta lisää?",
              "Miten sinut on alun perin koulutettu tähän?"
            ],
            "correctAnswer": "Vastauksesi oli väärä. Opitko nyt oikean vastauksen?",
            "explanation": "Malli koulutetaan ennen käyttöä, eikä se muutu kesken keskustelun. Chatbot voi korjata vastauksensa samassa keskustelussa, mutta korjaus ei tallennu malliin. Palautetta voidaan käyttää seuraavan version koulutuksessa. Korjauspyyntöön chatbot olisi vastannut korjatulla vastauksella."
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
            "question": "Neuroverkko on tietokoneohjelma, joka on rakennettu jäljittelemään ihmisaivojen tapaa yhdistellä asioita verkostona.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Oikein",
            "explanation": "Totta! Se ei ole oikea aivo, vaan tietokoneohjelma. Se jäljittelee ihmisaivojen tapaa yhdistellä asioita toisiinsa verkostona."
          },
          {
            "id": "konepellin_4_q2",
            "type": "multiple_choice",
            "question": "Mistä neuroverkko koostuu?",
            "options": [
              "Mikrosiruista, jotka toimivat kuin aivosolut",
              "Taulukosta, jossa on kaikki oikeat vastaukset",
              "Ohjelmoijan kirjoittamista jos–niin-säännöistä",
              "Laskuyksiköistä, jotka on kytketty toisiinsa"
            ],
            "correctAnswer": "Laskuyksiköistä, jotka on kytketty toisiinsa",
            "explanation": "Neuroverkko on ohjelma, jossa on valtava määrä keinotekoisia neuroneja. Jokainen neuroni tekee pienen laskun ja välittää tuloksen eteenpäin. Neuroneja ei ole rakennettu siruiksi, vaan ne ovat ohjelmassa lukuja ja laskuja."
          },
          {
            "id": "konepellin_4_q3",
            "type": "scenario",
            "question": "SKENAARIO: Neuroverkko arveli kuvaa koiraksi, mutta kuvassa oli kettu. Mitä harjoittelussa tehdään seuraavaksi?",
            "options": [
              "Verkkoon lisätään sääntö: punainen turkki on kettu",
              "Ketun kuva poistetaan, jotta verkko ei hämmenny",
              "Verkon yhteyksien painoja säädetään hieman",
              "Verkkoon lisätään neuroni, joka muistaa kuvan"
            ],
            "correctAnswer": "Verkon yhteyksien painoja säädetään hieman",
            "explanation": "Jokaisella neuronien välisellä yhteydellä on paino, joka kertoo, kuinka paljon yhteys vaikuttaa. Kun verkko erehtyy, painoja säädetään vähän siihen suuntaan, joka olisi tuottanut oikean vastauksen. Tätä toistetaan miljoonia kertoja."
          },
          {
            "id": "konepellin_4_q4",
            "type": "drag_drop",
            "question": "Kumpaa tämä kuvaa: ihmisen aivoja vai neuroverkkoa?",
            "draggables": [
              "Noin 86 miljardia hermosolua",
              "Oppii säätämällä lukuja eli painoja",
              "Toimii vähemmällä energialla kuin lamppu",
              "Tarvitsee oppiakseen valtavasti esimerkkejä"
            ],
            "dropZones": [
              "Ihmisen aivot",
              "Neuroverkko"
            ],
            "correctAnswer": {
              "Noin 86 miljardia hermosolua": "Ihmisen aivot",
              "Oppii säätämällä lukuja eli painoja": "Neuroverkko",
              "Toimii vähemmällä energialla kuin lamppu": "Ihmisen aivot",
              "Tarvitsee oppiakseen valtavasti esimerkkejä": "Neuroverkko"
            },
            "explanation": "Aivot toimivat noin 20 watin teholla eli himmeän lampun verran ja ihminen oppii monia asioita muutamasta esimerkistä. Suuri neuroverkko tarvitsee oppiakseen valtavasti dataa ja sähköä. Samankaltaisesta nimestä huolimatta ne ovat hyvin erilaisia."
          },
          {
            "id": "konepellin_4_q5",
            "type": "drag_drop",
            "question": "Mihin tehtävään neuroverkko on koulutettu?",
            "draggables": [
              "Muuttaa puhutun äänen tekstiksi",
              "Löytää videokuvasta jalankulkijat",
              "Jatkaa tekstiä sana kerrallaan"
            ],
            "dropZones": [
              "Puheentunnistus",
              "Konenäkö",
              "Kielimalli"
            ],
            "correctAnswer": {
              "Muuttaa puhutun äänen tekstiksi": "Puheentunnistus",
              "Löytää videokuvasta jalankulkijat": "Konenäkö",
              "Jatkaa tekstiä sana kerrallaan": "Kielimalli"
            },
            "explanation": "Samaa neuroverkkojen ideaa käytetään hyvin erilaisissa tehtävissä. Ero syntyy siitä, millaisella datalla verkko on koulutettu: äänellä, kuvilla vai tekstillä. Neuroverkot sopivat tehtäviin, joissa syöte vaihtelee paljon."
          },
          {
            "id": "konepellin_4_q6",
            "type": "spot_the_ai",
            "question": "Mikä näistä käyttää todennäköisimmin neuroverkkoa?",
            "options": [
              "Kuvagalleria, joka löytää kaikki koirakuvasi",
              "Laskin, joka laskee pitkän jakolaskun hetkessä",
              "Kello, joka siirtyy kesäaikaan itsestään keväällä",
              "Termostaatti, joka käynnistää lämmityksen kylmällä"
            ],
            "correctAnswer": "Kuvagalleria, joka löytää kaikki koirakuvasi",
            "explanation": "Kuvagalleria tunnistaa kuvista koirat, vaikka kukaan ei ole merkinnyt niitä ja siihen tarvitaan kuvia tunnistavaa neuroverkkoa. Laskin, kello ja termostaatti toimivat tarkkojen sääntöjen avulla. Ne vaikuttavat fiksuilta, mutta eivät ole oppineet mitään."
          },
          {
            "id": "konepellin_4_q7",
            "type": "reverse_prompt",
            "question": "Chatbot vastasi: \"En pysty tarkasti näkemään, miten valitsin sen sanan. Vastaukseni syntyy miljardien lukujen yhteistyönä.\" Millä kehotteella vastaus saatiin?",
            "options": [
              "Mitä tuo sana tarkoittaa englanniksi?",
              "Kirjoita sama vastaus lyhyemmin.",
              "Miksi valitsit juuri tuon sanan?",
              "Montako sanaa vastauksessasi oli?"
            ],
            "correctAnswer": "Miksi valitsit juuri tuon sanan?",
            "explanation": "Suuri kielimalli on neuroverkko, jossa on miljardeja painoja. Kukaan ei ole asettanut niitä käsin ja niistä on vaikea lukea, miksi verkko päätyi tiettyyn vastaukseen. Tutkijat kehittävät koko ajan keinoja selittää neuroverkkojen päätöksiä."
          },
          {
            "id": "konepellin_4_q8",
            "type": "true_false",
            "question": "Neuroverkko on saanut nimensä siitä, että se on rakennettu oikeista hermosoluista.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Neuroverkko on tietokoneohjelma eikä siinä ole biologisia soluja. Nimi (neural network) tulee siitä, että sen rakenne on saanut mallia aivojen hermosoluista eli neuroneista ja niiden välisistä yhteyksistä."
          },
          {
            "id": "konepellin_4_q9",
            "type": "multiple_choice",
            "question": "Miksi kuvien tunnistamiseen käytetään neuroverkkoa eikä käsin kirjoitettuja sääntöjä?",
            "options": [
              "Neuroverkko on aina nopeampi kuin muut ohjelmat",
              "Kuvissa on aivan liikaa vaihtelua tarkkoja sääntöjä varten",
              "Neuroverkko ei tee koskaan virheitä kuvien kanssa",
              "Käsin kirjoitetut säännöt eivät toimi uusilla koneilla"
            ],
            "correctAnswer": "Kuvissa on aivan liikaa vaihtelua tarkkoja sääntöjä varten",
            "explanation": "Yritä kirjoittaa sääntö, joka tunnistaa kissan joka asennosta, joka valossa ja joka rodusta. Se on käytännössä mahdotonta. Neuroverkko löytää tarvittavat piirteet itse esimerkeistä. Neuroverkkokin erehtyy, mutta se pärjää vaihtelussa paljon paremmin."
          },
          {
            "id": "konepellin_4_q10",
            "type": "scenario",
            "question": "SKENAARIO: Neuroverkko arvioi röntgenkuvasta, että potilaalla voi olla murtuma. Lääkäri kysyy, mihin arvio perustuu. Miksi vastaaminen on vaikeaa?",
            "options": [
              "Neuroverkko ei tallenna, mitä se teki laskiessaan",
              "Arvio syntyy miljoonien painojen yhteistyöstä",
              "Neuroverkko vain arvaa, joten arviolla ei ole perustetta",
              "Röntgenkuva on liian epätarkka selitettäväksi"
            ],
            "correctAnswer": "Arvio syntyy miljoonien painojen yhteistyöstä",
            "explanation": "Neuroverkkoa kutsutaan joskus mustaksi laatikoksi. Näemme, mitä sinne menee ja mitä tulee ulos, mutta välissä on miljoonia lukuja, joista on vaikea lukea syytä. Laskenta ei ole arvailua ja jokainen luku on tallessa, mutta lukujen yhteispeliä on vaikea selittää sanoin. Siksi verkko voi näyttää, mihin kohtaan kuvaa se kiinnitti huomiota. Lopullisen päätöksen tekee lääkäri."
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
            "question": "Järjestä neuroverkkojen historian vaiheet vanhimmasta uusimpaan.",
            "draggables": [
              "Yksi keinotekoinen neuroni oppii erottamaan kuvioita",
              "Tutkijat keksivät, miten monikerroksinen verkko oppii",
              "Syvä neuroverkko voittaa kuvantunnistuskilpailun",
              "Suuri kielimalli julkaistaan chatbotina kaikille"
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ],
            "correctAnswer": {
              "Yksi keinotekoinen neuroni oppii erottamaan kuvioita": "1. vaihe",
              "Tutkijat keksivät, miten monikerroksinen verkko oppii": "2. vaihe",
              "Syvä neuroverkko voittaa kuvantunnistuskilpailun": "3. vaihe",
              "Suuri kielimalli julkaistaan chatbotina kaikille": "4. vaihe"
            },
            "explanation": "Ensimmäinen oppiva neuroni, perceptroni, esiteltiin vuonna 1958. Monikerroksisten verkkojen oppimismenetelmä yleistyi 1980-luvulla. Vuonna 2012 syvä neuroverkko voitti kuvantunnistuskilpailun ylivoimaisesti ja vuonna 2022 kielimalli tuli chatbotina kaikkien käyttöön."
          },
          {
            "id": "konepellin_4_q13",
            "type": "multiple_choice",
            "question": "Mitä \"syvä\" tarkoittaa sanassa syväoppiminen?",
            "options": [
              "Tekoäly ymmärtää asiat syvällisesti kuin ihminen",
              "Neuroverkossa on monta kerrosta peräkkäin",
              "Data on tallennettu syvälle palvelimen muistiin",
              "Tekoäly osaa vain kaikkein vaikeimpia asioita"
            ],
            "correctAnswer": "Neuroverkossa on monta kerrosta peräkkäin",
            "explanation": "Syväoppiminen tarkoittaa neuroverkkoja, joissa on monta kerrosta, joskus satoja. Mitä enemmän kerroksia, sitä monimutkaisempia kuvioita verkko voi oppia. Sana ei tarkoita, että tekoäly ymmärtäisi asioita syvällisesti."
          },
          {
            "id": "konepellin_4_q14",
            "type": "spot_the_ai",
            "question": "Missä tehtävässä neuroverkko olisi turha, koska tavallinen ohjelma hoitaa sen varmemmin?",
            "options": [
              "Kasvojen tunnistaminen valokuvista",
              "Ostosten hintojen laskeminen yhteen",
              "Puheen kääntäminen kielestä toiseen",
              "Huijausviestien löytäminen sähköpostista"
            ],
            "correctAnswer": "Ostosten hintojen laskeminen yhteen",
            "explanation": "Yhteenlaskussa on aina yksi oikea vastaus ja tavallinen ohjelma laskee sen virheettä joka kerta. Neuroverkko arvioi, joten se voisi erehtyä. Neuroverkkoa kannattaa käyttää silloin, kun syöte vaihtelee niin paljon, ettei tarkkoja sääntöjä voi kirjoittaa."
          },
          {
            "id": "konepellin_4_q15",
            "type": "reverse_prompt",
            "question": "Kuvageneraattori teki kuvan kulkuneuvosta, jossa on lohikäärmeen suomut, kilpa-auton renkaat ja avaruusaluksen valot. Millä kehotteella kuva saatiin?",
            "options": [
              "Piirrä täydellinen valokuva meidän omasta punaisesta autostamme.",
              "Yhdistä lohikäärme, kilpa-auto ja avaruusalus yhdeksi kulkuneuvoksi.",
              "Etsi netistä valokuva vanhasta traktorista ja tulosta se isolle paperille.",
              "Laske, kuinka kovaa avaruusalukset voivat todellisuudessa lentää."
            ],
            "correctAnswer": "Yhdistä lohikäärme, kilpa-auto ja avaruusalus yhdeksi kulkuneuvoksi.",
            "explanation": "Kuvageneraattorin neuroverkko on nähnyt miljoonia kuvia ja niiden kuvauksia. Se on oppinut, miltä suomut, renkaat ja valot näyttävät ja osaa yhdistää ne uudeksi kuvaksi, jota ei ole ennen ollut. Idea tuli kuitenkin kehotteen kirjoittajalta."
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
            "question": "Tekoäly näkee kuvan koirasta samalla tavalla kuin ihminen.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Tekoälylle kuva on joukko lukuja. Se etsii luvuista kuvioita ja muotoja, jotka se on oppinut yhdistämään koiraan. Siksi se voi erehtyä tavalla, joka ihmisestä tuntuu oudolta."
          },
          {
            "id": "konepellin_5_q2",
            "type": "multiple_choice",
            "question": "Miltä valokuva näyttää tietokoneen näkökulmasta?",
            "options": [
              "Samalta kuin ihmiselle, mutta tarkemmalta",
              "Listalta sanoja, jotka kuvaavat kuvan asiat",
              "Taulukolta numeroita, jotka kertovat sen värit",
              "Pieneltä elokuvalta, jonka se katsoo alusta"
            ],
            "correctAnswer": "Taulukolta numeroita, jotka kertovat sen värit",
            "explanation": "Digitaalinen kuva koostuu pikseleistä ja jokaisen pikselin väri on tallennettu numeroina. Tietokone ei siis \"näe\" koiraa, vaan miljoonia numeroita. Kuvantunnistin on oppinut, millaiset numerokuviot tarkoittavat koiraa."
          },
          {
            "id": "konepellin_5_q3",
            "type": "scenario",
            "question": "SKENAARIO: Kuvantunnistin luulee mustikkamuffinsseja chihuahua-koiriksi. Mistä virhe johtuu?",
            "options": [
              "Tekoäly päättelee, että koirat syövät muffinsseja",
              "Tekoäly näkee kaikki kuvat mustavalkoisina",
              "Ne ovat muodoltaan ja väreiltään samannäköisiä",
              "Tekoäly arvaa satunnaisesti, kun se ei ole varma"
            ],
            "correctAnswer": "Ne ovat muodoltaan ja väreiltään samannäköisiä",
            "explanation": "Ylhäältä kuvattu muffinssi ja chihuahuan pää ovat yllättävän samannäköisiä: ruskea pyöreä muoto ja tummat pisteet (mustikat tai silmät ja nenä). Tekoäly vertaa kuvioita, mutta ei tiedä, mikä on eläin ja mikä leivonnainen."
          },
          {
            "id": "konepellin_5_q4",
            "type": "drag_drop",
            "question": "Mistä tekoäly etsii kuviota: kuvasta, äänestä vai tekstistä?",
            "draggables": [
              "Puhelin avautuu, kun katsot sitä",
              "Kaiutin herää, kun sanot sen nimen",
              "Sähköposti tunnistaa huijausviestin",
              "Sovellus tunnistaa kahvilassa soivan kappaleen"
            ],
            "dropZones": [
              "Kuva",
              "Ääni",
              "Teksti"
            ],
            "correctAnswer": {
              "Puhelin avautuu, kun katsot sitä": "Kuva",
              "Kaiutin herää, kun sanot sen nimen": "Ääni",
              "Sähköposti tunnistaa huijausviestin": "Teksti",
              "Sovellus tunnistaa kahvilassa soivan kappaleen": "Ääni"
            },
            "explanation": "Hahmontunnistus tarkoittaa kuvioiden löytämistä mistä tahansa datasta. Äänessä kuvio on äänen korkeuden ja voimakkuuden vaihtelu, tekstissä sanojen ja lauseiden tyyppiset yhdistelmät. Huijausviesteissä toistuvat esimerkiksi kiire ja pyyntö klikata linkkiä."
          },
          {
            "id": "konepellin_5_q5",
            "type": "drag_drop",
            "question": "Onko tämä tekoälylle helppo vai vaikea tunnistaa?",
            "draggables": [
              "Kissa kuvattuna edestä hyvässä valossa",
              "Kissa puoliksi tyynyn alla hämärässä",
              "Selkeästi kirjoitettu numero 7",
              "Koira kuvattuna oudosta kulmasta ylhäältä"
            ],
            "dropZones": [
              "Helppo tunnistaa",
              "Vaikea tunnistaa"
            ],
            "correctAnswer": {
              "Kissa kuvattuna edestä hyvässä valossa": "Helppo tunnistaa",
              "Kissa puoliksi tyynyn alla hämärässä": "Vaikea tunnistaa",
              "Selkeästi kirjoitettu numero 7": "Helppo tunnistaa",
              "Koira kuvattuna oudosta kulmasta ylhäältä": "Vaikea tunnistaa"
            },
            "explanation": "Tekoäly tunnistaa parhaiten tilanteet, jotka muistuttavat sen opetusdataa. Kun kohde on osittain piilossa, valo on huono tai kulma outo, kuvio ei enää täsmää siihen, mitä se on oppinut. Ihmiselle nämä ovat helppoja, koska ymmärrämme, mitä olemme katsomassa."
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
            "question": "Chatbot vastasi kuvan lähettäneelle: \"Kuvassa on harmaa kissa, joka nukkuu punaisella sohvalla. Taustalla näkyy ikkuna.\" Millä kehotteella vastaus saatiin?",
            "options": [
              "Piirrä kuva kissasta punaisella sohvalla.",
              "Kuvaile, mitä tässä kuvassa näkyy.",
              "Mikä on kissan suosituin nimi?",
              "Miksi kissat nukkuvat niin paljon?"
            ],
            "correctAnswer": "Kuvaile, mitä tässä kuvassa näkyy.",
            "explanation": "Monet chatbotit osaavat tunnistaa kuvan sisällön ja kertoa sen sanoin. Ne ovat oppineet miljoonista kuvista ja niiden kuvauksista. Kuvauksessa voi silti olla virheitä, varsinkin pienissä yksityiskohdissa."
          },
          {
            "id": "konepellin_5_q8",
            "type": "true_false",
            "question": "Pienikin muutos, kuten muutama tarra liikennemerkissä, voi saada kuvantunnistimen erehtymään.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Oikein",
            "explanation": "Tutkijat ovat saaneet kuvantunnistimen luulemaan stop-merkkiä nopeusrajoitusmerkiksi pelkillä tarroilla. Ihminen tunnistaa merkin edelleen, mutta tarrat muuttavat numerokuviota, johon tekoäly luottaa. Siksi itseohjautuvien autojen tunnistusta testataan paljon."
          },
          {
            "id": "konepellin_5_q9",
            "type": "multiple_choice",
            "question": "Tunnistin on 55-prosenttisen varma, että tiellä on jalankulkija. Mitä itseohjautuvan auton kannattaa tehdä?",
            "options": [
              "Hidastaa, koska virhe olisi vaarallinen",
              "Jatkaa, koska varmuus on alle sadan prosentin",
              "Jatkaa, koska tekoäly erehtyy harvoin",
              "Pysähtyä ja sammuttaa tunnistin kokonaan"
            ],
            "correctAnswer": "Hidastaa, koska virhe olisi vaarallinen",
            "explanation": "Tunnistus on aina arvio. Kun virheen hinta on suuri, kuten ihmisen turvallisuus, epävarmakin havainto otetaan vakavasti. Videopalvelun suosituksessa 55 % voi riittää, liikenteessä varovaisuus voittaa."
          },
          {
            "id": "konepellin_5_q10",
            "type": "scenario",
            "question": "SKENAARIO: Puhelimesi kasvojentunnistus avautuu myös identtiselle kaksoisveljellesi. Miksi?",
            "options": [
              "Puhelin on tallentanut veljesi kasvot salaa",
              "Puhelin tunnistaa perheen saman sukunimen avulla",
              "Kasvojen mittasuhteet ovat lähes täysin samanlaiset",
              "Puhelin päästää sisään, jos katsoo tarpeeksi kauan"
            ],
            "correctAnswer": "Kasvojen mittasuhteet ovat lähes täysin samanlaiset",
            "explanation": "Kasvojentunnistus vertaa kasvojen piirteiden mittoja ja muotoja tallennettuihin. Identtisillä kaksosilla ne ovat niin samanlaiset, että tunnistin ei aina erota heitä. Valmistajat neuvovatkin kaksosia käyttämään lisäksi tunnuslukua."
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
            "question": "Missä näistä tekoäly tunnistaa käsialaa?",
            "options": [
              "Oikoluku alleviivaa sanan, jota ei löydy sanakirjasta",
              "Sovellus muuttaa käsin kirjoitetut muistiinpanot tekstiksi",
              "Tekstinkäsittely vaihtaa lauseen alkuun ison kirjaimen",
              "Fonttivalikko näyttää tekstin käsialaa muistuttavalla fontilla"
            ],
            "correctAnswer": "Sovellus muuttaa käsin kirjoitetut muistiinpanot tekstiksi",
            "explanation": "Käsialan lukeminen on vaikeaa, koska jokainen kirjoittaa kirjaimet vähän eri tavalla. Tekoäly on oppinut miljoonista käsin kirjoitetuista esimerkeistä, mitä kirjainta mikin muoto tarkoittaa. Oikoluku vertaa sanaa sanakirjaan, ison alkukirjaimen lisää yksinkertainen sääntö ja käsialafontti on valmiiksi piirretty kirjasintyyppi."
          },
          {
            "id": "konepellin_5_q15",
            "type": "reverse_prompt",
            "question": "Chatbot vastasi kuvan lähettäneelle: \"Kuvassa on todennäköisesti kärpässieni. Älä syö sieniä pelkän tekoälyn tunnistuksen perusteella.\" Millä kehotteella vastaus saatiin?",
            "options": [
              "Piirrä kuva punaisesta sienestä.",
              "Missä päin kärpässieniä kasvaa?",
              "Kerro lyhyt satu metsän sienistä.",
              "Voiko tämän kuvan sienen syödä?"
            ],
            "correctAnswer": "Voiko tämän kuvan sienen syödä?",
            "explanation": "Kuvantunnistin vertaa kuvioita ja antaa arvion, joka voi olla väärä. Myrkyllinen ja syötävä sieni voivat näyttää kuvassa hyvin samanlaisilta. Kun virhe olisi vaarallinen, tieto pitää varmistaa asiantuntijalta tai luotettavasta lähteestä."
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
            "question": "Jos tekoälyn oppima data on epäreilua, myös tekoälyn tekemistä päätöksistä tulee epäreiluja, jolloin puhutaan vinoumasta.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Oikein",
            "explanation": "Juuri näin. Tekoäly oppii datasta. Jos data on epäreilua tai puutteellista, tekoäly oppii myös tekemään epäreiluja päätöksiä (vinouma)."
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
            "question": "SKENAARIO: Yritys opetti tekoälyn valitsemaan työnhakijoita omien vanhojen päätöstensä avulla. Ennen se palkkasi enimmäkseen miehiä. Mitä tekoäly todennäköisesti tekee?",
            "options": [
              "Valitsee hakijat reilusti, koska se on kone",
              "Suosii naisia korjatakseen vanhat virheet",
              "Kieltäytyy valitsemasta ketään epäreilun datan takia",
              "Suosii miehiä, koska se oppi niin vanhoista päätöksistä"
            ],
            "correctAnswer": "Suosii miehiä, koska se oppi niin vanhoista päätöksistä",
            "explanation": "Näin kävi oikeasti suuressa yrityksessä, joka lopetti tekoälyn käytön, kun vinouma huomattiin. Tekoäly oppi, että \"hyvä hakija\" muistuttaa aiemmin palkattuja, eli miehiä. Data ei ollut vahingossa yksipuolista, vaan se kuvasi menneisyyden epäreiluja valintoja."
          },
          {
            "id": "konepellin_6_q4",
            "type": "drag_drop",
            "question": "Järjestä, miten tekoälyn vinouma syntyy ja näkyy.",
            "draggables": [
              "Opetusdatasta puuttuu osa ihmisistä tai tilanteista",
              "Tekoäly harjoittelee tällä yksipuolisella datalla",
              "Tekoäly oppii säännön, joka ei sovi kaikille",
              "Tekoäly toimii käytössä huonommin joillekin"
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ],
            "correctAnswer": {
              "Opetusdatasta puuttuu osa ihmisistä tai tilanteista": "1. vaihe",
              "Tekoäly harjoittelee tällä yksipuolisella datalla": "2. vaihe",
              "Tekoäly oppii säännön, joka ei sovi kaikille": "3. vaihe",
              "Tekoäly toimii käytössä huonommin joillekin": "4. vaihe"
            },
            "explanation": "Yksipuolinen data on vinoumien yleisin syy, muttei ainoa. Vinouma voi syntyä myös siitä, mitä tekoälyn tekijät päättävät mitata tai palkita, tai siitä, miten tekoälyä käytetään. Siksi tekoälyä pitää testata erilaisilla ihmisillä ennen käyttöönottoa."
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
            "question": "Tekoäly oppi datasta neljä sääntöä. Mikä niistä on harhaanjohtava yhteys?",
            "options": [
              "Jos viesti pyytää salasanaa, se voi olla huijaus",
              "Jos hedelmä on pitkä ja keltainen, se on banaani",
              "Jos kuvassa on lunta, eläin on varmasti susi",
              "Jos kuvassa on pyörät ja ohjaustanko, se on pyörä"
            ],
            "correctAnswer": "Jos kuvassa on lunta, eläin on varmasti susi",
            "explanation": "Tutkijat huomasivat tekoälyn, joka \"tunnisti\" sudet oikeasti lumesta, koska lähes kaikki susikuvat oli otettu talvella. Lumessa seisova husky-koira tunnistettiin sudeksi. Tekoäly oppii kaikki yhteydet, joita datassa on, myös sattumanvaraiset."
          },
          {
            "id": "konepellin_6_q7",
            "type": "reverse_prompt",
            "question": "Kuvageneraattori teki neljä kuvaa ja kaikissa on harmaahiuksinen mies valkoisessa takissa. Millä kehotteella kuvat tehtiin?",
            "options": [
              "Piirrä kuva sairaalan pihasta.",
              "Piirrä minulle kuva lääkäristä.",
              "Piirrä kuva lääkärin työkaluista.",
              "Piirrä lapsi leikkimässä lääkäriä."
            ],
            "correctAnswer": "Piirrä minulle kuva lääkäristä.",
            "explanation": "Kehotteessa ei mainittu ikää eikä sukupuolta, mutta tekoäly valitsi ne itse datassa yleisimmän mallin mukaan. Todellisuudessa Suomen lääkäreistä yli puolet on naisia. Kehotteessa voi pyytää monipuolisuutta ja kehittäjät yrittävät vähentää tällaisia vinoumia."
          },
          {
            "id": "konepellin_6_q8",
            "type": "true_false",
            "question": "Tekoäly voi olla epäreilu, vaikka kukaan sen tekijöistä ei halunnut sitä.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Oikein",
            "explanation": "Useimmat vinoumat syntyvät huomaamatta, esimerkiksi kun datasta puuttuu joitakin ihmisiä. Tahattomuus ei kuitenkaan poista vastuuta. Tekoälyn tekijöiden tehtävä on etsiä vinoumia ja korjata ne."
          },
          {
            "id": "konepellin_6_q9",
            "type": "multiple_choice",
            "question": "Miten tekoälyn vinoumia voidaan vähentää?",
            "options": [
              "Testaamalla tekoälyä erilaisilla ihmisillä",
              "Antamalla tekoälyn päättää itse, mikä on reilua",
              "Harjoittelemalla pidempään samalla datalla",
              "Nopeuttamalla tietokonetta, jolla tekoäly toimii"
            ],
            "correctAnswer": "Testaamalla tekoälyä erilaisilla ihmisillä",
            "explanation": "Vinouman voi korjata vain, jos sen huomaa. Siksi tekoälyä testataan erikseen eri ikäisillä, eri näköisillä ja eri kieliä puhuvilla ihmisillä. Jos jokin ryhmä saa huonompia tuloksia, dataa täydennetään ja tekoäly koulutetaan uudelleen."
          },
          {
            "id": "konepellin_6_q10",
            "type": "scenario",
            "question": "SKENAARIO: Koulun tekoäly ehdottaa robotiikkakerhoa lähes pelkästään pojille. Kenen vastuulla asian korjaaminen on?",
            "options": [
              "Tekoälyn itse, koska se teki ehdotukset",
              "Ei kenenkään, koska tekoälyn virheet ovat vahinkoja",
              "Oppilaiden, joita ehdotukset koskevat",
              "Ihmisten, jotka tekivät ja ottivat sen käyttöön"
            ],
            "correctAnswer": "Ihmisten, jotka tekivät ja ottivat sen käyttöön",
            "explanation": "Tekoäly ei voi kantaa vastuuta, koska se ei ymmärrä tekojensa seurauksia. Vastuu on niillä, jotka tekivät tekoälyn ja niillä, jotka päättivät käyttää sitä koulussa. Oppilaat voivat silti auttaa: jos huomaat epäreiluutta, kerro siitä aikuiselle."
          },
          {
            "id": "konepellin_6_q11",
            "type": "drag_drop",
            "question": "Teet puheentunnistinta. Onko data monipuolista vai yksipuolista?",
            "draggables": [
              "Puhetta eri ikäisiltä ja eri murteilla",
              "Äänityksiä vain uutistenlukijoilta studiossa",
              "Puhetta sekä hiljaisista että meluisista paikoista",
              "Äänityksiä vain yhden kaupungin asukkailta"
            ],
            "dropZones": [
              "Monipuolinen data",
              "Yksipuolinen data"
            ],
            "correctAnswer": {
              "Puhetta eri ikäisiltä ja eri murteilla": "Monipuolinen data",
              "Äänityksiä vain uutistenlukijoilta studiossa": "Yksipuolinen data",
              "Puhetta sekä hiljaisista että meluisista paikoista": "Monipuolinen data",
              "Äänityksiä vain yhden kaupungin asukkailta": "Yksipuolinen data"
            },
            "explanation": "Jos puheentunnistin kuulee harjoittelussa vain selkeää studiopuhetta tai yhtä murretta, se ymmärtää muita puhujia huonommin. Monipuolinen data on reiluuskysymys: tekoälyn pitää toimia kaikille, jotka sitä käyttävät."
          },
          {
            "id": "konepellin_6_q12",
            "type": "drag_drop",
            "question": "Koodari huomaa, että AI vanin tekoäly on epäreilu ja haluaa korjata asian. Järjestä korjausoperaation askeleet autotallissa!",
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
            "question": "Mitä tekoälyn vinouma tarkoittaa?",
            "options": [
              "Tekoäly tekee yksittäisen satunnaisen virheen",
              "Tekoäly on ohjelmoitu tahallaan suosimaan jotakuta",
              "Tekoälyn vastaukset vaihtelevat kerrasta toiseen",
              "Tekoäly kohtelee joitakin toistuvasti huonommin"
            ],
            "correctAnswer": "Tekoäly kohtelee joitakin toistuvasti huonommin",
            "explanation": "Kaikki tekoälyt tekevät joskus virheitä. Vinoumasta puhutaan, kun virheet osuvat toistuvasti samoihin ihmisiin tai tilanteisiin. Vinouma on yleensä tahaton ja siksi se pitää etsiä tarkoituksella."
          },
          {
            "id": "konepellin_6_q14",
            "type": "spot_the_ai",
            "question": "Missä näistä on kyse tekoälyn vinoumasta?",
            "options": [
              "Kääntäjä kääntää yhden harvinaisen sanan väärin",
              "Kääntäjä tekee lääkäristä miehen ja hoitajasta naisen",
              "Kääntäjä jättää pitkästä tekstistä yhden lauseen pois",
              "Kääntäjä toimii hitaasti, kun nettiyhteys pätkii koko ajan"
            ],
            "correctAnswer": "Kääntäjä tekee lääkäristä miehen ja hoitajasta naisen",
            "explanation": "Suomen \"hän\" ei kerro sukupuolta, mutta englanniksi pitää valita \"he\" tai \"she\". Kääntäjät ovat valinneet datan stereotypian mukaan: lääkäri \"he\", hoitaja \"she\". Virhe toistuu järjestelmällisesti ja siksi se on vinouma eikä satunnainen virhe."
          },
          {
            "id": "konepellin_6_q15",
            "type": "reverse_prompt",
            "question": "Chatbot vastasi: \"Tyypillinen aamiainen on pekonia, munakokkelia ja paahtoleipää.\" Millä kehotteella vastaus saatiin?",
            "options": [
              "Kerro, mitä suomalaiset syövät aamulla.",
              "Keksi resepti terveelliseen välipalaan.",
              "Mikä on tyypillinen aamiainen?",
              "Mistä pekonia oikein tehdään?"
            ],
            "correctAnswer": "Mikä on tyypillinen aamiainen?",
            "explanation": "Kehotteessa ei kerrottu maata, joten chatbot vastasi sen mukaan, mikä sen datassa on yleisintä. Opetusdatassa on paljon englanninkielistä, erityisesti amerikkalaista tekstiä. Jos kysyisit suomalaisesta aamiaisesta, saisit todennäköisesti puuroa ja ruisleipää."
          }
        ]
      },
      {
        "id": "konepellin_7",
        "name": "Erikoiskoe - yskivä moottori",
        "questions": [
          {
            "id": "konepellin_7_q1",
            "type": "true_false",
            "question": "Kun tekoälylle lisätään paljon dataa, se paranee aina, vaikka data olisi virheellistä.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Lisää dataa auttaa vain, jos data on hyvää. Virheelliset merkinnät ja yksipuolinen data opettavat tekoälylle virheitä ja mitä enemmän niitä on, sitä vahvemmin se ne oppii."
          },
          {
            "id": "konepellin_7_q2",
            "type": "multiple_choice",
            "question": "Mitä neuroverkossa muuttuu, kun se harjoittelee?",
            "options": [
              "Neuronien määrä kasvaa jokaisella kuvalla",
              "Ohjelmoijan kirjoittamat säännöt vaihtuvat",
              "Neuronien välisten yhteyksien painot",
              "Tietokoneen muistin koko suurenee"
            ],
            "correctAnswer": "Neuronien välisten yhteyksien painot",
            "explanation": "Verkon rakenne pysyy samana, mutta yhteyksien painot säätyvät jokaisen virheen jälkeen vähän. Kaikki, mitä neuroverkko on oppinut, on tallessa näissä painoissa."
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
            "question": "Järjestä, miten auto reagoi tielle juoksevaan peuraan.",
            "draggables": [
              "Kamera tallentaa kuvan numeroina",
              "Neuroverkko tunnistaa peuran 92 % varmuudella",
              "Sääntö: jos eläin tiellä on yli 80 % varma, jarruta",
              "Auto jarruttaa ja varoittaa kuljettajaa"
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ],
            "correctAnswer": {
              "Kamera tallentaa kuvan numeroina": "1. vaihe",
              "Neuroverkko tunnistaa peuran 92 % varmuudella": "2. vaihe",
              "Sääntö: jos eläin tiellä on yli 80 % varma, jarruta": "3. vaihe",
              "Auto jarruttaa ja varoittaa kuljettajaa": "4. vaihe"
            },
            "explanation": "Tässä toimivat yhdessä tekoäly ja tavallinen algoritmi. Neuroverkko arvioi, mitä kuvassa on ja ohjelmoijan kirjoittama sääntö päättää, mitä arviolla tehdään. Raja on asetettu niin, että auto jarruttaa mieluummin turhaan kuin jättää jarruttamatta."
          },
          {
            "id": "konepellin_7_q5",
            "type": "drag_drop",
            "question": "Onko tämä dataa, algoritmi vai malli?",
            "draggables": [
              "Tuhannet merkityt kuvat linnuista",
              "Ohje, jonka mukaan tekoäly säätää itseään",
              "Valmis lintutunnistin puhelimessa"
            ],
            "dropZones": [
              "Data",
              "Algoritmi",
              "Malli"
            ],
            "correctAnswer": {
              "Tuhannet merkityt kuvat linnuista": "Data",
              "Ohje, jonka mukaan tekoäly säätää itseään": "Algoritmi",
              "Valmis lintutunnistin puhelimessa": "Malli"
            },
            "explanation": "Data on se, mistä opitaan, algoritmi on ohje, jonka mukaan opitaan ja malli on oppimisen tulos. Kun käytät tekoälysovellusta, käytät mallia, joka on syntynyt, kun algoritmi on harjoitellut datalla."
          },
          {
            "id": "konepellin_7_q6",
            "type": "spot_the_ai",
            "question": "Missä tekoäly tunnistaa kuvion äänestä?",
            "options": [
              "Kaiutin soittaa kappaleen kovempaa, kun nupista käännetään",
              "Sovellus kertoo, minkä linnun laulu metsässä kuuluu",
              "Puhelin soi, kun saat uuden viestin kaverilta",
              "Radio vaihtaa kanavaa, kun painat napista"
            ],
            "correctAnswer": "Sovellus kertoo, minkä linnun laulu metsässä kuuluu",
            "explanation": "Lintusovellus on oppinut tuhansista äänityksistä, millainen äänikuvio kuuluu millekin lajille. Muissa vaihtoehdoissa laite tekee aina saman asian napin tai viestin perusteella, eikä mitään tarvitse tunnistaa."
          },
          {
            "id": "konepellin_7_q7",
            "type": "reverse_prompt",
            "question": "Kuvageneraattori teki kuvan, jossa on eri-ikäisiä ja eri näköisiä naisia ja miehiä lääkärin takeissa. Millä kehotteella kuva saatiin?",
            "options": [
              "Piirrä kuva sairaalan odotushuoneesta.",
              "Piirrä eri ikäisiä ja eri näköisiä lääkäreitä.",
              "Piirrä kuva lääkärin laukusta ja työkaluista.",
              "Piirrä minulle kuva lääkäristä."
            ],
            "correctAnswer": "Piirrä eri ikäisiä ja eri näköisiä lääkäreitä.",
            "explanation": "Pelkkä \"Piirrä kuva lääkäristä\" tuottaa usein datan yleisimmän mallin mukaisen kuvan. Kun kehotteessa pyydetään monipuolisuutta, tekoäly ottaa sen huomioon. Kehotteen kirjoittaja voi siis itse vähentää vinoumia."
          },
          {
            "id": "konepellin_7_q8",
            "type": "true_false",
            "question": "Robotti-imuri, joka kiertää lattialla olevat sukat kameran avulla, käyttää sekä tavallisia algoritmeja että koneoppimista.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Oikein",
            "explanation": "Kamerakuvan sukat tunnistaa koneoppimisella koulutettu malli, koska sukkia on joka mallia ja väriä. Ajoreitin, akun latauksen ja kiertämisen säännöt ovat tavallisia algoritmeja. Useimmissa laitteissa tekoäly on vain yksi osa ohjelmaa."
          },
          {
            "id": "konepellin_7_q9",
            "type": "multiple_choice",
            "question": "Tekoäly opettelee peliä niin, että se saa pisteen jokaisesta voitosta. Millaista oppimista tämä on?",
            "options": [
              "Ohjattua oppimista",
              "Vahvistusoppimista",
              "Ulkoa opettelua",
              "Tavallista ohjelmointia"
            ],
            "correctAnswer": "Vahvistusoppimista",
            "explanation": "Vahvistusoppimisessa kukaan ei kerro oikeaa siirtoa, vaan tekoäly kokeilee ja saa palautteen pisteinä. Ohjatussa oppimisessa sille annettaisiin valmiit oikeat vastaukset."
          },
          {
            "id": "konepellin_7_q10",
            "type": "scenario",
            "question": "SKENAARIO: Haluat tekoälyn tunnistavan oman koirasi muiden koirien joukosta. Mikä data auttaa eniten?",
            "options": [
              "Yksi tosi tarkka kuva koirastasi edestä kuvattuna",
              "Paljon kuvia muista samanrotuisista koirista",
              "Paljon kuvia koirastasi eri paikoissa",
              "Video, jossa koirasi nukkuu samassa paikassa"
            ],
            "correctAnswer": "Paljon kuvia koirastasi eri paikoissa",
            "explanation": "Tekoäly tarvitsee monta kuvaa juuri sinun koirastasi, jotta se oppii sen tuntomerkit eri tilanteissa. Muiden samanrotuisten kuvat opettaisivat rodun, eivät sinun koiraasi ja nukkumisvideo näyttää koiran vain yhdessä asennossa."
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
            "question": "Oma etunimesi on liian helppo arvata, joten vahvan salasanan pitää olla pitkä, monimutkainen ja vain sinun tiedossasi.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Oikein",
            "explanation": "Aivan! Oma etunimi on liian helppo arvata. Vahva salasana on kuin auton turvalukko: pitkä, monimutkainen ja salainen."
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
            "explanation": "Et antaisi **AI vanin** avaimia oikealle maantierosvollekaan! Salasanat pidetään aina ominaan, eikä niitä jaeta edes ystävällisille tyypeille netissä."
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
            "question": "Pyysit tekoälyä auttamaan salasanan kanssa ja se antoi vastauksen: \"Tässä on 15 merkkiä pitkä turvallinen sarja: K8!mP9@xL2#vQ5z\". Mikä oli alkuperäinen pyyntösi (promptisi)?",
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
            "question": "Jokaiseen tärkeään palveluun kannattaa luoda eri salasana, jotta maantierosvot eivät pääse yhdellä arvauksella kaikkialle.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Oikein",
            "explanation": "Juuri näin! Jos käytät samaa avainta, maantierosvo pääsee sisään kaikkialle arvatessaan salasanasi kerran. Käytä eri salasanaa eri tileissä."
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
            "question": "Raahaa salasanan palaset oikeille paikoilleen, jotta niistä muodostuu yksi lauseenomainen ja vahva \"salalause\"! Mieti, mikä olisi looginen ja sääntöjen mukainen järjestys sanoille.",
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
            "question": "Omat henkilötiedot kuuluvat 'lukittuun hanskalokeroon', eikä niitä saa jakaa netissä vieraille ihmisille.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Oikein",
            "explanation": "Totta! Omat henkilötiedot, kuten kotiosoite tai puhelinnumero, kuuluvat lukittuun tilaan. Niitä ei koskaan saa jakaa netissä vieraille."
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
            "explanation": "Yleisiä asioita ja nimimerkkejä on turvallista jakaa peleissä. Tarkat henkilötiedot ja yhteystiedot ovat ehdottoman salaisia ja ne on pidettävä aina piilossa vierailta!",
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
            "question": "Netissä kuka tahansa voi teeskennellä, joten et voi koskaan olla 100 % varma chättikaverin oikeasta henkilöllisyydestä.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Oikein",
            "explanation": "Aivan oikein. Netissä voi teeskennellä ja väittää olevansa mitä vain. Siksi yksityisiä tietoja ei pidä jakaa täysin vieraille ihmisille."
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
          },
          {
            "id": "digiturva_2_q16",
            "type": "multiple_choice",
            "image": {
              "src": "/kuvat/leluauto-tausta.webp",
              "alt": "Leluauto pöydällä. Taustalla näkyy kirjekuori, jossa on nimi ja osoite."
            },
            "explanationImage": {
              "src": "/kuvat/leluauto-rajattu.webp",
              "alt": "Sama kuva rajattuna niin, että vain leluauto näkyy",
              "caption": "Rajattuna kuvasta näkyy vain leluauto."
            },
            "question": "Haluat lähettää pelikaverille kuvan uudesta leluautostasi. Mikä kuvassa paljastaa liikaa?",
            "options": [
              "Taustalla näkyvä kirje, jossa on nimi ja osoite",
              "Leluauton väri ja kiiltävät, uudet renkaat",
              "Pöydän puinen pinta ja siinä näkyvät kuviot",
              "Kuvan kirkkaus ja se, että kuva on vaakasuora"
            ],
            "correctAnswer": "Taustalla näkyvä kirje, jossa on nimi ja osoite",
            "explanation": "Kuvan taustalla voi näkyä paljon: nimiä, osoitteita, koulun nimi tai ikkunasta näkyvä katu. Rajaa kuva tai siirrä tavarat pois ennen kuvaamista. Puhelin voi myös tallentaa kuvatiedostoon kuvauspaikan sijainnin, joten sen voi kytkeä pois kameran asetuksista."
          },
          {
            "id": "digiturva_2_q17",
            "type": "image_choice",
            "question": "Mikä näistä sopii parhaiten profiilikuvaksi pelitilille?",
            "options": [
              "hahmo",
              "paita",
              "ovi",
              "koulu"
            ],
            "optionImages": {
              "hahmo": {
                "src": "/kuvat/profiili-hahmo.svg",
                "alt": "Piirretty robottihahmo ja nimimerkki RoboKuski22",
                "label": "Piirretty hahmo"
              },
              "paita": {
                "src": "/kuvat/profiili-paita.webp",
                "alt": "Urheilupaita, jonka selässä on sukunimi ja koulun nimi",
                "label": "Oma pelipaita"
              },
              "ovi": {
                "src": "/kuvat/profiili-ovi.webp",
                "alt": "Kotiovi, jossa näkyy talonumero ja nimikyltti",
                "label": "Kotiovi"
              },
              "koulu": {
                "src": "/kuvat/profiili-koulu.webp",
                "alt": "Koulun nimikyltti pihalla",
                "label": "Oman koulun kyltti"
              }
            },
            "correctAnswer": "hahmo",
            "explanation": "Piirretty hahmo kertoo sinusta jotain hauskaa paljastamatta, kuka olet tai missä asut. Paidan nimi, kotiovi ja koulun kyltti ovat palapelin paloja: yhdessä niistä voi päätellä nimesi ja sen, mistä sinut löytää."
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
            "question": "Jos sähköpostissa luvataan sinun voittaneen uuden auton ilman kilpailua, kyseessä on todennäköisesti maantierosvon ansa.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Oikein",
            "explanation": "Kyllä! Jos tarjous on liian hyvä ollakseen totta, se on lähes varmasti ansa. Älä koskaan klikkaa tällaisia outoja yllätyslinkkejä."
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
            "explanation": "Maantierosvot yrittävät usein pelotella sinua klikkaamaan kiireessä. Pysy rauhallisena, älä klikkaa mitään ja näytä oudot viestit aina ensin aikuiselle!"
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
            "question": "Virallisen firman logon näkeminen viestissä ei takaa sen turvallisuutta, sillä huijarit kopioivat niitä helposti.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Oikein",
            "explanation": "Juuri näin! Maantierosvot osaavat erittäin helposti kopioida oikeiden firmojen logoja. Logon näkeminen ei tarkoita, että viesti olisi aito."
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
              "Saat oudon viestin, jossa vaaditaan rahaa tai pikaista toimintaa.": "1. vaihe",
              "Pysähdyt rauhassa, etkä missään nimessä klikkaa linkkiä.": "2. vaihe",
              "Näytät epäilyttävän viestin luotettavalle aikuiselle.": "3. vaihe",
              "Poistatte huijausviestin laitteelta turvallisesti.": "4. vaihe"
            },
            "explanation": "Huijausviestit jumiutuneista paketeista ovat nykyään hyvin yleisiä ansoja. Älä koskaan maksa mitään tai klikkaa outoja tekstiviestilinkkejä.",
            "draggables": [
              "Saat oudon viestin, jossa vaaditaan rahaa tai pikaista toimintaa.",
              "Pysähdyt rauhassa, etkä missään nimessä klikkaa linkkiä.",
              "Näytät epäilyttävän viestin luotettavalle aikuiselle.",
              "Poistatte huijausviestin laitteelta turvallisesti."
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
              "'Kutsu: Saagan syntymäpäiväjuhlat ensi sunnuntaina!'",
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
            "question": "Haittaohjelma on näkymätöntä koodia, joka voi rikkoa laitteen ohjelmistoja tai varastaa tietoja, muttei hajota laitetta fyysisesti palasiksi.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Oikein",
            "explanation": "Oikein! Digitaalinen ruoste on koodia, ei vasara. Se rikkoo ohjelmistoja ja voi varastaa tietoja, mutta se ei hajota näyttölasia palasiksi."
          },
          {
            "id": "digiturva_4_q9",
            "type": "multiple_choice",
            "question": "AI vanin älykäs kosketusnäyttö ilmoittaa, että laitteelle on saatavilla tärkeä ohjelmistopäivitys. Mitä teet?",
            "options": [
              "Asennan päivityksen heti, koska päivitykset korjaavat tietoturva-aukkoja.",
              "Ohitan päivityksen, koska ne ovat oikeasti melkein aina viruksia.",
              "Sammutan auton virtanapista ja piilotan avaimet roskikseen.",
              "Odotan ainakin pari vuotta, jotta uusi päivitys on varmasti valmis."
            ],
            "correctAnswer": "Asennan päivityksen heti, koska päivitykset korjaavat tietoturva-aukkoja.",
            "explanation": "Päivitykset ovat kuin laittaisi uutta ruosteenestoainetta laitteen pintaan! Ne korjaavat ohjelmiston vanhoja virheitä ja pitävät virukset loitolla."
          },
          {
            "id": "digiturva_4_q10",
            "type": "scenario",
            "question": "SKENAARIO: Kaverisi autotallissa on irrallinen muistitikku, josta hän sanoo: \"Tällä tikulla on aivan sika hieno peli, laita tää sun koneeseen!\" Et kuitenkaan tiedä, kenen tikku on tai mistä se on peräisin. Mitä teet?",
            "options": [
              "En laita tikkua koneeseen, koska siinä voi olla haittaohjelmia.",
              "Laitan tikun koneeseen, mutta en avaa peliä heti.",
              "Kopioin tikun sisällön ensin isän omalle tietokoneelle.",
              "Laitan tikun kiinni ja alan heti pelata peliä innoissani."
            ],
            "correctAnswer": "En laita tikkua koneeseen, koska siinä voi olla haittaohjelmia.",
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
            "question": "Tekoälyn avulla voidaan luoda syväväärennöksiä (deepfake), jotka näyttävät aidoilta mutta ovat täysin keksittyjä.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Oikein",
            "explanation": "Totta! Kaikki näkemäsi kuvat eivät ole totta. Tekoälyllä voidaan luoda syväväärennöksiä, jotka näyttävät aidoilta mutta ovat keksittyjä."
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
            "question": "SKENAARIO: Kaverisi näyttää videon, jossa lempilaulajasi laulaa tosi nolosti autotallin katolla. Laulaja näyttää itseltään. Videossa on kuitenkin outoja varjoja ja laulajan hampaat vilkkuvat hassusti suttuisina. Mitä päättelet tästä?",
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
            "question": "Tekoäly voi pienen ääninäytteen avulla oppia matkimaan kenen tahansa tuttusi ääntä lähes täydellisesti.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Oikein",
            "explanation": "Kyllä! Äänen kloonaus on yleinen syväväärennös. Tekoäly voi matkia kenen tahansa ääntä todella vakuuttavasti."
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
            "explanation": "Tekoäly voi ottaa henkilön oman aidon äänen, kääntää siinä sanotun tekstin ja pukea uuden kielen aivan alkuperäisen ihmisen kuuloiseksi ääneksi. Se on ovela valepuku!"
          },
          {
            "id": "digiturva_5_q16",
            "type": "scenario",
            "image": {
              "src": "/kuvat/pingviini-raitiovaunu.webp",
              "alt": "Kuva, jossa pingviini ajaa raitiovaunua kaupungin kadulla"
            },
            "explanationImage": {
              "src": "/kuvat/pingviini-raitiovaunu.webp",
              "alt": "Kuva, jossa pingviini ajaa raitiovaunua kaupungin kadulla",
              "caption": "Tämä kuva on tehty tekoälyllä."
            },
            "question": "SKENAARIO: Kaverisi jakaa tämän kuvan otsikolla \"Uskomatonta! Tapahtui tänään Tampereella!\" Mitä teet ensimmäiseksi?",
            "options": [
              "Tarkistan, kertooko luotettava uutislähde tapahtumasta.",
              "Jaan kuvan heti kaikille eteenpäin, koska se on niin hauska.",
              "Lasken tarkasti, onko pingviinillä oikea määrä varpaita.",
              "Uskon kuvaan, koska se näyttää hyvin tarkalta ja aidolta."
            ],
            "correctAnswer": "Tarkistan, kertooko luotettava uutislähde tapahtumasta.",
            "explanation": "Kuva on tehty tekoälyllä. Yllättävän kuvan alkuperä kannattaa selvittää ensin: kertooko luotettava media asiasta, ja mistä kuva on peräisin? Kuvahaulla voi etsiä, missä kuva on julkaistu aiemmin. Virheiden etsiminen kuvasta ei enää riitä, koska tekoälykuvat ovat usein virheettömiä."
          },
          {
            "id": "digiturva_5_q17",
            "type": "true_false",
            "image": {
              "src": "/kuvat/feikki-postaus.svg",
              "alt": "Somepostaus: kuva lentävästä lautasesta pellon yllä ja teksti \"100 % AITO KUVA!!! Jaa ennen kuin tämä poistetaan!!!\""
            },
            "question": "Postauksessa lukee \"100 % AITO KUVA\". Teksti todistaa, ettei kuvaa ole tehty tekoälyllä.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Kuka tahansa voi kirjoittaa kuvan yhteyteen mitä tahansa. Kiirehtiminen (\"Jaa ennen kuin tämä poistetaan!\") on tuttu keino saada ihmiset jakamaan ennen kuin he ehtivät ajatella. Mitä enemmän postaus vakuuttelee ja kiirehtii, sitä tärkeämpää on pysähtyä ja tarkistaa lähde."
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
            "question": "Jos netissä tulee vastaan pelottava tai outo kuva, laita 'hätävilkut päälle' ja kerro asiasta heti luotettavalle aikuiselle.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Oikein",
            "explanation": "Oikein! Pelottavat asiat netissä eivät katoa laitteen piilottamisella. Laita hätävilkut päälle ja kerro rohkeasti aikuiselle."
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
            "question": "Jos klikkaat outoa linkkiä ja laite menee jumiin, älä yritä korjata sitä salaa vaan pyydä apua aikuiselta.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Oikein",
            "explanation": "Aivan! Vahinkoja sattuu kaikille. Älä yritä korjata laitetta salaa, vaan hae aikuinen. Yhdessä ongelma selviää nopeammin."
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
            "explanation": "Netissä on paljon valeuutisia ja pelottavia keksittyjä juttuja. Aikuinen osaa kertoa sinulle rauhallisesti, onko uutinen totta vai ei ja auttaa karkottamaan pelon!"
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
            "explanation": "Tämä on todella yleinen pelko, mutta se on täysin turha! Fiksut aikuiset ymmärtävät, että netissä sattuu vahinkoja ja heidän tärkein tehtävänsä on auttaa sinua, ei rangaista."
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
            "explanation": "Hyvä apukuski eli aikuinen pysyy aina rauhallisena, kiittää sinua rohkeudesta kertoa asiasta ja auttaa sinua korjaamaan tilanteen yhdessä turvallisesti."
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
            "explanation": "Hätävilkkujen laittaminen on loistava vertauskuva. Se tarkoittaa, että pysähdyt, ilmoitat muille (aikuisille) olevasi pulassa ja odotat rauhassa apua paikalle ilman että yrität selvitä yksin!"
          }
        ]
      },
      {
        "id": "digiturva_7",
        "name": "Tarkastuspiste - maantierosvon tietulli",
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
              "Sitä, että piilotat kaikki arvokkaat fyysiset tavarasi oikean auton suljettuun hanskalokeroon turvaan mahdollisilta varkailta.",
              "Yksityisten tietojen (kuten nimen, osoitteen ja koulun) pitämistä turvassa ja poissa julkisesta netistä.",
              "Kaikkien käyttämiesi nettisivujen lopullista sulkemista ja älylaitteiden virtapainikkeen sammuttamista varmuuden vuoksi.",
              "Sellaista ehdotonta sääntöä, ettei netissä saa koskaan enää pelata mitään pelejä tai vierailla suosikkisivustoilla."
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
            "question": "Laita nämä tiedot järjestykseen: aloita siitä, minkä saa kertoa netissä kaikille ja päätä siihen, mikä pitää salata ehdottomasti!",
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
              "Koska se on digitaalinen erikoisominaisuus, joka tekee käyttämästäsi pelilaitteesta automaattisesti huomattavasti nopeamman verrattuna perusversioihin.",
              "Se on vahva lisälukko: vaikka rosvo arvaa salasanasi, hän ei pääse sisään ilman puhelintasi.",
              "Koska kyseinen ominaisuus piilottaa kotisi internet-yhteyden kokonaan näkymättömiin muulta maailmalta ja estää samalla kaikki häiriöt.",
              "Koska kyseessä on uudenlainen palkitsemisjärjestelmä, joka siirtää pelitilillesi valtavia määriä ilmaista virtuaalivaluuttaa joka aamu."
            ],
            "correctAnswer": "Se on vahva lisälukko: vaikka rosvo arvaa salasanasi, hän ei pääse sisään ilman puhelintasi.",
            "explanation": "Se toimii erinomaisena \"turvalukkona\". Vaikka salasana vuotaisi varkaille, pelitilisi pysyy turvassa ilman toista varmistuskoodia!"
          },
          {
            "id": "digiturva_7_q10",
            "type": "scenario",
            "question": "SKENAARIO: Kuulet pelin äänichatissa kaverisi äänen, mutta hän pyytää kiireesti antamaan pelitilisi salasanan. Ääni kuulostaa oikealta, mutta pyyntö on todella outo. Mitä teet?",
            "options": [
              "Kerron oman salasanani nopeasti joko mikrofoniin tai suoraan ykstyisviestillä, sillä tutun ihmisen pyyntöihin pitää voida luottaa täysin.",
              "Soitan kaverille oikealla puhelimella varmistaakseni asian, sillä kyseessä voi olla väärennetty ääni.",
              "Kirjoitan salasanani saman tien pelin yleiseen ryhmächattiin, jotta kaikki muutkin läsnäolijat voivat auttaa ystävääni vaikeassa tilanteessa.",
              "Suljen yhteysmikrofonin välittömästi, poistan pelin pysyvästi laitteeltani ja haen konesalistani täysin uuden tietokoneen pelaamista varten."
            ],
            "correctAnswer": "Soitan kaverille oikealla puhelimella varmistaakseni asian, sillä kyseessä voi olla väärennetty ääni.",
            "explanation": "Tekoäly voi kloonata \"valepukuisille liftareille\" aivan aidon kuuloisen äänen! Omat salasanat pidetään aina itsellä ja oudot pyynnöt pitää varmistaa muuta kautta."
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
            "question": "Mitä tarkoittaa, kun aivot \"ylikuumenevat\" liiallisesta ruutuajasta?",
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
            "explanation": "Pieni tylsyys on itse asiassa aivoille todella hyödyllistä! Se pakottaa aivot keksimään uutta ja silloin syntyvät usein kaikkein parhaimmat leikit, joissa oma mielikuvitus pääsee valloilleen."
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
            "question": "Mitä riittävä ja hyvä uni tekee aivojesi kovalevylle yöllä?",
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
            "question": "SKENAARIO: Olet kaverin autotallissa ja isoveli alkaa pelata uutta, K-16 ikärajalla varustettua toimintapeliä. Peli on hienon näköinen, mutta sen kovat äänet ja pelottavat hirviöt saavat sinut vähän ahdistuneeksi. Mitä teet?",
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
              "He eivät osaa pelata nopeita pelejä ja ovat vähän kateellisia.",
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
            "question": "SKENAARIO: AI vanin kojelauta näyttää, että päivittäinen ruutuaika on lopussa. Aivosi kaipaavat oikeaa toimintaa. Autotallin edessä on pyörä, pallo ja hyppynaru. Miten hyödynnät näitä aivojesi parhaaksi?",
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
            "question": "Tekoäly antaa sinulle kehotuksen: \"Sulje laite NYT! Laita kengät jalkaan ja etsi ulkoa 5 erilaista lehteä tai kiveä mahdollisimman nopeasti!\" Mikä kehote (prompti) sai koneen keksimään tämän?",
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
              "Olet edelleen vähintään yhtä surullinen ja sinua voi jopa ärsyttää enemmän.",
              "Kissanpentu on taikaiskusta hypännyt videolta syliisi lohduttamaan.",
              "Osaat yhtäkkiä puhua kissojen kieltä ja ymmärrät siskosi ajatukset."
            ],
            "correctAnswer": "Olet edelleen vähintään yhtä surullinen ja sinua voi jopa ärsyttää enemmän.",
            "explanation": "Ruudun tuijottaminen \"laastarina\" ei koskaan todella paranna surua. Se vain siirtää ongelmaa eteenpäin ja usein laitteen sulkemisen jälkeen olo on entistä kiukkuisempi ja raskaampi!"
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
              "Alat heti haukotella ja silmäsi tuntuvat pelkästään raskailta.",
              "Tunnet itsesi todella ärtyneeksi tai huonotuuliseksi.",
              "Alat yhtäkkiä kuulla auton radion soivan päässäsi itsekseen.",
              "Puhelimesi akku latautuu yllättäen vahingossa aivan täyteen itsestään."
            ],
            "correctAnswer": "Tunnet itsesi todella ärtyneeksi tai huonotuuliseksi.",
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
              "Tutun koulumatkan käveleminen ja musiikin kuuntelu",
              "Vaikeiden läksyjen tekeminen ja puhelimella viestittely",
              "Tiskikoneen tyhjentäminen ja samalla kuulumisten juttelu",
              "Uuden kielen opiskelu ja jännittävän videopelin pelaaminen"
            ],
            "dropZones": [
              "Helpot rutiinit",
              "Vaatii keskittymistä"
            ],
            "correctAnswer": {
              "Tutun koulumatkan käveleminen ja musiikin kuuntelu": "Helpot rutiinit",
              "Tiskikoneen tyhjentäminen ja samalla kuulumisten juttelu": "Helpot rutiinit",
              "Vaikeiden läksyjen tekeminen ja puhelimella viestittely": "Vaatii keskittymistä",
              "Uuden kielen opiskelu ja jännittävän videopelin pelaaminen": "Vaatii keskittymistä"
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
        "name": "Erikoiskoe - sumuinen yöajo",
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
              "Lapsen aivot ovat vasta kehittymässä ja liian jännittävät asiat voivat jäädä kummittelemaan painajaisina.",
              "Aikuiset haluavat vain säästää parhaat pelit itselleen.",
              "K-16 pelit rikkovat lasten tabletit fyysisesti.",
              "Lapsen sormet eivät taivu peliohjaimella tarpeeksi nopeasti."
            ],
            "correctAnswer": "Lapsen aivot ovat vasta kehittymässä ja liian jännittävät asiat voivat jäädä kummittelemaan painajaisina.",
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
              "Ruudun sininen valo huijaa aivoja luulemaan, että on päivä ja unihormonin eritys estyy.",
              "Ruudun valo tuo heti silmiin oikeaa hiekkaa.",
              "Laite lataa automaattisesti akkuaan aivojesi sähköstä.",
              "Unihiekka muuttuu digitaaliseksi koodiksi laitteen sisälle."
            ],
            "correctAnswer": "Ruudun sininen valo huijaa aivoja luulemaan, että on päivä ja unihormonin eritys estyy.",
            "explanation": "Laitteiden kirkas valo estää nukahtamishormonia (melatoniinia) toimimasta kunnolla. Siksi aivot pysyvät virkeinä ja tärkeän yöhuollon aloittaminen myöhästyy."
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
            "explanation": "Keskittyminen ja syvä flow-tila onnistuvat vain silloin, kun aivot saavat työskennellä ilman jatkuvia \"kiviä tiellä\" eli puhelimen piippauksia tai taustahälyä!"
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
            "question": "Puhelimesi ääniavustaja vastaa sinulle kovaan ääneen: \"Ouluun on matkaa noin 150 kilometriä ja matka kestää noin kaksi tuntia.\" Mikä oli sinun puhekomentosi (promptisi)?",
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
            "question": "Olette ottamassa yhteiskuvaa AI vanin edessä illan pimeydessä ja puhelimen tekoäly tekee kuvasta upean ja kirkkaan. Miten se onnistui siinä?",
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
            "explanation": "Puheentunnistus-tekoäly on loistava apuri! Voit puhua viestin ja tekoäly muuttaa äänesi salamannopeasti valmiiksi kirjoitetuksi tekstiksi ruudulle."
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
              "Osoitat puhelimen kameralla kylttiä ja käännös ilmestyy suoraan ruudulle.",
              "Soitat puhelimella ystävälle, joka osaa puhua vähän espanjaa."
            ],
            "correctAnswer": "Osoitat puhelimen kameralla kylttiä ja käännös ilmestyy suoraan ruudulle.",
            "explanation": "Nykyaikainen kääntäjäsovellus osaa lukea tekstiä suoraan videokuvasta ja vaihtaa sen kielen reaaliajassa näytölle. Se on yksi upeimmista tekoälyn ominaisuuksista arjessamme!"
          },
          {
            "id": "arjessa_1_q15",
            "type": "reverse_prompt",
            "question": "Puhelimesi näyttöön ilmestyy viesti: \"Hei Samu! Tunnistin kasvosi hienosti. Puhelimen lukitus on nyt auki, tervetuloa.\" Mikä teko käynnisti tämän?",
            "options": [
              "Samu huusi puhelimelle erittäin kovaa: 'Avaa ovi heti!'.",
              "Samu soitti ystävälleen Eemille tavallisella puhelulla.",
              "Samu katsoi suoraan puhelimen lukitusruudun etukameraan.",
              "Samu piirsi puhelimen ruutuun salaisen siksak-kuvion sormellaan."
            ],
            "correctAnswer": "Samu katsoi suoraan puhelimen lukitusruudun etukameraan.",
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
              "Se oppii, että pidät autoista ja ehdottaa niitä heti lisää.",
              "Se sulkee puhelimen ja käskee sinun mennä heti nukkumaan.",
              "Se soittaa poliisille, koska katsot liikaa urheiluautoja."
            ],
            "correctAnswer": "Se oppii, että pidät autoista ja ehdottaa niitä heti lisää.",
            "explanation": "Suosittelualgoritmi on kuin salapoliisi. Se huomaa toiminnastasi, mitä katsot mielelläsi ja alkaa tarjota sinulle enemmän samanlaisia videoita pitääkseen sinut ruudun ääressä!"
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
            "explanation": "Tekoälyn algoritmi ei arvaa asioita tyhjästä! Se seuraa digitaalista \"historiaasi\" eli sitä, mitä olet viime aikoina katsellut ja tarjoaa sen pohjalta uutta samankaltaista viihdettä."
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
            "explanation": "Tekoälyllä on omat koodatut \"silmät ja korvat\". Ensin sen pitää havaita pelaaja matemaattisten koordinaattien avulla, sitten valita oikea toiminto sääntöjen listasta ja lopuksi suorittaa animaatio!",
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
            "explanation": "Tavallinen imuri on vain moottori putken päässä ja se vaatii täysin ihmisen aivoja ohjaukseen. Robotti-imuri hoitaa reitinhallinnan omien tekoälyaivojensa avulla!"
          },
          {
            "id": "arjessa_4_q14",
            "type": "spot_the_ai",
            "question": "Autotallissa on paljon erilaisia asioita. Mikä näistä laitteista on loistava esimerkki siitä, miten tekoäly tarkkailee tilaamme ja oppii tavoistamme pitkän ajan kuluessa?",
            "options": [
              "Vesiletku, joka sumuttaa vettä aina, kun väännät kahvasta voimakkaasti.",
              "Älytermostaatti, joka oppii laskemaan lämpöä öisin teidän mentyä nukkumaan.",
              "Sähkövatkain, jolla on kolme nopeaa mekaanista vaihdetta ja joka toimii napista.",
              "Vanha taskulaskin, joka muistaa aina sataprosenttisella tarkkuudella että 2+2=4."
            ],
            "correctAnswer": "Älytermostaatti, joka oppii laskemaan lämpöä öisin teidän mentyä nukkumaan.",
            "explanation": "Koneoppiminen tarkoittaa sitä, että laite muuttuu viisaammaksi! Termostaatti huomaa viikkojen aikana, että olette unessa kello 22 ja alkaa itse laittaa säästöliekkiä päälle samaan aikaan energiansäästön vuoksi."
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
              "Isä puhuu suomea puhelimeen ja kaiutin toistaa asian vieraalla kielellä.",
              "Puhelin tulostaa pienen sanakirjan, josta isä etsii ja lukee sanoja hitaasti.",
              "Tekoäly opettaa isälle heti koko uuden kielen vain muutamassa hassussa minuutissa.",
              "Laitteen ohjelmisto komentaa mekaanikkoa opiskelemaan täydellistä ja sujuvaa suomea."
            ],
            "correctAnswer": "Isä puhuu suomea puhelimeen ja kaiutin toistaa asian vieraalla kielellä.",
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
            "explanation": "Kamerakäännös on huikea tekoälyn suoritus! Ensin tekoälyn hahmontunnistus lukee tekstin kuvasta ja sitten kääntäjäohjelma vaihtaa sen ymmärtämällesi kielelle salamannopeasti.",
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
              "Tekoäly huomaa ne asiat joissa teet paljon virheitä ja laittaa sinut kertaamaan juuri niitä.": "3. vaihe",
              "Opit uuden kielen tehokkaasti, koska tekoäly teki harjoittelusta täysin sinulle räätälöityä!": "4. vaihe"
            },
            "explanation": "Parhaat kielenoppimissovellukset käyttävät mukautuvaa koneoppimista. Tekoäly huomaa tarkasti, missä olet jo hyvä ja mitä sanoja sinun pitää vielä treenata paljon lisää!",
            "draggables": [
              "Avaat älykkään kielisovelluksen puhelimellasi ja aloitat harjoittelun.",
              "Sovellus kysyy sinulta kielen uusia sanoja ja lauseita pelillisten tehtävien avulla.",
              "Tekoäly huomaa ne asiat joissa teet paljon virheitä ja laittaa sinut kertaamaan juuri niitä.",
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
            "question": "AI vanin puhelimesta alkaa yllättäen kuulua erittäin sujuvaa ranskan kieltä, jossa neuvotaan reittiä lähimmälle uimarannalle täydellisellä ääntämyksellä. Mikä oli laitteelle annettu kehote (prompti)?",
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
            "question": "AI vanin robottiohjaus tekee seuraavan siirron: se vilkuttaa oikealle, hidastaa hieman vauhtia, odottaa että viereisellä kaistalla on tilaa ja siirtyy pehmeästi toiselle kaistalle. Mikä oli tekoälyn saama tehtävä (prompti)?",
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
              "Tiellä ollut ruuhka tai hidastus purkautui ja liikenne vetää taas normaalisti.",
              "Tekoäly kyllästyi punaiseen väriin ja halusi kokeilla vihreää.",
              "Auto muuttui näkymättömäksi, jotta voitte lentää ruuhkan yli.",
              "Tekoäly yrittää tahallaan ohjata teidät suoraan kolariin."
            ],
            "correctAnswer": "Tiellä ollut ruuhka tai hidastus purkautui ja liikenne vetää taas normaalisti.",
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
            "explanation": "Yhteistyö on voimaa! Monissa navigointisovelluksissa ihmiset voivat itse napin painalluksella ilmoittaa tiellä olevista vaaroista ja tekoäly jakaa tämän tiedon välittömästi muille takana tuleville kuskeille."
          }
        ]
      },
      {
        "id": "arjessa_7",
        "name": "Erikoiskoe - kaaosristeys",
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
              "Opettaa sinulle joka päivä koulun uutta historiaa ja fysiikan tärkeitä kaavoja.",
              "Pitää sinut ruudun ääressä mahdollisimman pitkään mainosten näyttämiseksi.",
              "Säästää laitteesi akkua tehokkaasti sammuttamalla sen yllättäen lepotilaan.",
              "Kiusata sinua pakottamalla katsomaan jatkuvasti vain koko palvelun tylsimpiä videoita."
            ],
            "correctAnswer": "Pitää sinut ruudun ääressä mahdollisimman pitkään mainosten näyttämiseksi.",
            "explanation": "Algoritmit on koodattu koukuttamaan! Ne oppivat mieltymyksesi ja luovat \"suosittelukuplan\", josta on vaikea irrottautua automaattitoiston ja mainosten vuoksi."
          },
          {
            "id": "arjessa_7_q3",
            "type": "scenario",
            "question": "SKENAARIO: Haluat tietää, mitä ulkomaalaisessa ravintolan kyltissä lukee. Osoitat sitä puhelimen kameralla ja suomenkielinen käännös ilmestyy suoraan ruudulle. Miten tekoäly onnistui luomaan tämän käännöksen?",
            "options": [
              "Tekoäly etsi ravintolan valmiin ruokalistan salaa internetistä kuvan perusteella.",
              "Kamera luki kirjaimet ja kääntäjä etsi salamana tekstille oikean suomenkielisen vastineen.",
              "Kamera tunnistaa kielen automaattisesti ja korvaa pikselit toisen kielen tekstillä.",
              "Laitesovellus kilauttaa tietokannan kautta ravintolan omistajalle selvittääkseen tekstin."
            ],
            "correctAnswer": "Kamera luki kirjaimet ja kääntäjä etsi salamana tekstille oikean suomenkielisen vastineen.",
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
              "Koska laitteen tekoäly haluaa vain tehdä ohjelmasta hauskan ja nolata sinut kääntämällä väärin.",
              "Tekoäly kääntää asiat usein kirjaimellisesti, eikä ymmärrä lainkaan kulttuurisia piilomerkityksiä.",
              "Kääntäjäsovellus toimii jostain syystä puutteellisesti silloin, kun puhelimen akku on tyhjentymässä.",
              "Ohjelma ei ole välttämättä kytketty internetiin, joten se alkaa keksiä sanoille omia merkityksiään."
            ],
            "correctAnswer": "Tekoäly kääntää asiat usein kirjaimellisesti, eikä ymmärrä lainkaan kulttuurisia piilomerkityksiä.",
            "explanation": "Maailmanlaajuinen tulkki on loistava sanakirja, mutta koneena siltä puuttuu aito inhimillinen ymmärrys huumorista, paikallisista sanonnoista ja runoista."
          },
          {
            "id": "arjessa_7_q10",
            "type": "scenario",
            "question": "SKENAARIO: Haluat lähettää pitkän viestin kaverille tärisevän AI vanin takapenkiltä, mutta et osu oikeisiin kirjaimiin ruudulla. Miten tekoäly auttaa?",
            "options": [
              "Käytät saneluohjelmaa ja tekoäly muuttaa puhumasi äänen välittömästi tekstiksi.",
              "Tekoäly pysäyttää auton välittömästi kokonaan.",
              "Tekoäly tulostaa paperisen kirjeen, jonka lähetät postissa.",
              "Puhelin lukitsee näyttönsä tunniksi, jotta et häiritse kuskia."
            ],
            "correctAnswer": "Käytät saneluohjelmaa ja tekoäly muuttaa puhumasi äänen välittömästi tekstiksi.",
            "explanation": "Puhelimen ääniavustajat ja saneluohjelmat osaavat muuttaa äänen koodin kautta kirjoitetuksi tekstiksi. Se on upea arjen apuri, kun kädet ovat varatut tai auton kyyti on pomppuista!"
          }
        ]
      }
    ]
  },
  {
    "id": "reilu_peli",
    "name": "Reilu peli",
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
            "explanation": "Jos tekoälyä opetetaan vain seisovien ihmisten kuvilla, se ei osaa tunnistaa pyörätuolissa olevaa ihmistä kunnolla. Tämä on epäreilua ja siksi opetusdatan pitää aina olla monipuolista!"
          },
          {
            "id": "reilu_peli_1_q4",
            "type": "drag_drop",
            "question": "Autotallin koodari huomaa, että AI vanin tekoäly-ovi tunnistaa huonosti silmälasipäisiä ihmisiä. Järjestä askeleet, joilla tekoäly korjataan reiluksi kaikille!",
            "correctAnswer": {
              "Koodari huomaa, että tekoälyovi ei aina aukea silmälasipäisille ihmisille.": "1. vaihe",
              "Koodari tutkii datan ja huomaa, että kuvissa on vain ihmisiä, joilla ei ole laseja.": "2. vaihe",
              "Koodari syöttää tekoälylle tuhansia uusia opetuskuvia ihmisistä silmälasit päässä.": "3. vaihe",
              "Tekoäly oppii uuden datan ja avaa jatkossa oven reilusti aivan kaikille.": "4. vaihe"
            },
            "explanation": "Epäreilut virheet pystytään korjaamaan! Syöttämällä ohjelmalle parempaa ja tasa-arvoisempaa opetusdataa (vähemmistöt huomioiden), tekoälystä saadaan korjattua reilu peli.",
            "draggables": [
              "Koodari huomaa, että tekoälyovi ei aina aukea silmälasipäisille ihmisille.",
              "Koodari tutkii datan ja huomaa, että kuvissa on vain ihmisiä, joilla ei ole laseja.",
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
            "question": "Koodasit AI vanille uuden ominaisuuden ja se alkoi yhtäkkiä lukea kojelaudan kaikkia pikkutekstejä ääneen todella selkeästi ja kovaa. Mikä sääntö (prompti) annettiin laitteelle?",
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
              "Hän unohti laittaa peliin ne kaikkein hienoimmat ja nopeimmat urheiluautot pelattavaksi.",
              "Hän unohti ohjelmoida pelin ohjauksen niin, että se on yhtä reilu myös vasenkätisille.",
              "Hän unohti kalibroida kännykän ruudun tarkalleen oikean lämpöiseksi ennen pelin alkua.",
              "Hän unohti salaa rakentaa peliin fuskukoodin, jolla kaverisi voittaisi ihan joka kerta."
            ],
            "correctAnswer": "Hän unohti ohjelmoida pelin ohjauksen niin, että se on yhtä reilu myös vasenkätisille.",
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
            "question": "Järjestä vaiheet fiksusti aikajärjestykseen! Miten koodari oikeaoppisesti rakentaa AI vaniin täysin reilun kasvojentunnistimen ovelle?",
            "correctAnswer": {
              "Koodari kerää ensin satoja valokuvia kaikenlaisista, eri-ikäisistä ja erinäköisistä ihmisistä.": "1. vaihe",
              "Tekoälylle syötetään nämä kuvat, jotta se oppii kattavasti tunnistamaan kaikenlaisia kasvoja.": "2. vaihe",
              "Koodari pyytää silmälasipäisiä, lapsia ja isovanhempia kokeilemaan testissä oven avautumista.": "3. vaihe",
              "Koodari korjaa testin perusteella löydetyt virheet, jolloin ovi toimii täydellisesti kaikille.": "4. vaihe"
            },
            "explanation": "Reilun tekoälyn rakentaminen alkaa aina alussa monipuolisesta datasta, jatkuu mallin kouluttamisella ja varmistetaan lopuksi monipuolisella testauksella ja viilauksella.",
            "draggables": [
              "Koodari kerää ensin satoja valokuvia kaikenlaisista, eri-ikäisistä ja erinäköisistä ihmisistä.",
              "Tekoälylle syötetään nämä kuvat, jotta se oppii kattavasti tunnistamaan kaikenlaisia kasvoja.",
              "Koodari pyytää silmälasipäisiä, lapsia ja isovanhempia kokeilemaan testissä oven avautumista.",
              "Koodari korjaa testin perusteella löydetyt virheet, jolloin ovi toimii täydellisesti kaikille."
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
              "Sitä, että laitteen tai nettisivun teho saavuttaa virtuaalimaksiminsa täysin ilman viivettä.",
              "Sitä, että ohjelma, laite tai nettisivu on rakennettu varmasti ihan yhtä helppokäyttöiseksi kaikille.",
              "Sitä, että taitava videopelaaja kykenee laitteella saavuttamaan pelin huippuennätyksen pysyvästi.",
              "Sitä, että tekoäly myöntää saavutuksia, tähtiä ja virtuaalimitaleita vain taitavimmille pelaajille."
            ],
            "correctAnswer": "Sitä, että ohjelma, laite tai nettisivu on rakennettu varmasti ihan yhtä helppokäyttöiseksi kaikille.",
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
            "explanation": "Tämä on todella huono ja epäeettinen selitys! Kone ei tee ikinä omia itsenäisiä ja \"tietoisia\" päätöksiä. Ihmiset ohjelmoivat sen säännöt ja ihmiset voivat myös aivan aina korjata tekoälyn tekemät epäreilut virheet."
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
            "explanation": "Kun käytät tekoälyä, sinä olet yhä kuski. Jos palautat väärää tietoa, se on sinun vastuullasi ja siksi tekoälyn käytöstä kerrotaan avoimesti!"
          },
          {
            "id": "reilu_peli_2_q3",
            "type": "scenario",
            "question": "SKENAARIO: Pyysit tekoälyä laskemaan vaikean matikan läksyn puolestasi. Opettaja huomaa, että vastaus on aivan väärin ja kysyy asiasta. Mitä teet, jotta olet reilu \"kuski\"?",
            "options": [
              "Syytän välittömästi tekoälyä ja sanon, että se on tyhmä kone.",
              "Myönnän rehellisesti, että käytin tekoälyä ja otan vastuun virheestä.",
              "Piiloudun pulpetin alle enkä vastaa opettajalle.",
              "Väitän, että isoveljeni teki läksyn puolestani."
            ],
            "correctAnswer": "Myönnän rehellisesti, että käytin tekoälyä ja otan vastuun virheestä.",
            "explanation": "Kuski ottaa aina vastuun! Tekoälyn tekemiä läksyjä ei huijata omiksi ja teoista on otettava oma vastuu."
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
              "'Tarvitsin käännöstä ja käytin tekoälyä asiallisena apuna vieraiden sanojen kääntämisessä.'",
              "'Tämä on täysin minun kirjoittamani teksti, kone teki kaiken oppaan ja minä vain kopioin sen!'",
              "'Kerroin reilusti pitämäni esitelmän alussa, että teoksen kaikki uudet ideat ovat tekoälyltä.'",
              "'Huomasin heti tekoälyn tekemän oudon virheen tekstissä ja korjasin sen oppilastyönä itse.'"
            ],
            "correctAnswer": "'Tämä on täysin minun kirjoittamani teksti, kone teki kaiken oppaan ja minä vain kopioin sen!'",
            "explanation": "Koneen tekemän työn huijaaminen omaksi on täysin reilun pelin vastaista. Tekijän pitää aina olla oikea ihminen, ei \"copy-paste\" -kone!"
          },
          {
            "id": "reilu_peli_2_q7",
            "type": "reverse_prompt",
            "question": "Opettaja kehuu sinua: \"Tämä oli upeasti ideoitu ja oli reilua, että kerroit hakeneesi vain inspiraatiota tähän tekoälyltä!\" Mikä prompti (kehotus) tuotti tämän reilun avun?",
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
            "explanation": "Tekoälyn käytöstä kertominen avoimesti on juuri se asia, mitä reilussa pelissä pitääkin tehdä! Fiksu opettaja arvostaa rehellisyyttä ja avoimuutta."
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
            "question": "Sait kirjoitelman valmiiksi ja pyysit tekoälyä korjaamaan sen oikeinkirjoituksen. Järjestä reilun pelin askeleet työn palauttamiseksi!",
            "correctAnswer": {
              "Tarkista tekoälyn tekemät ehdotukset huolellisesti ja korjaa teksti hyväksymällä parannukset.": "1. vaihe",
              "Kirjoita koko paperin loppuun selkeä merkintä: 'Oikeinkirjoitus on tarkistettu tekoälyllä'.": "2. vaihe",
              "Palauta täysin valmis ja huolellisesti merkitty tehtäväpaperisi fyysisesti opettajan pöydälle.": "3. vaihe",
              "Vastaa avoimesti ja totuudenmukaisesti takaisin, kun opettaja kysyy tekoälyn hienosta käytöstä.": "4. vaihe"
            },
            "explanation": "Läpinäkyvyys on valttia. Kun tekoälyn käytöstä kerrotaan reilusti ja avoimesti, ei tarvitse koskaan jännittää turhaan kiinnijäämistä tai valehtelua.",
            "draggables": [
              "Tarkista tekoälyn tekemät ehdotukset huolellisesti ja korjaa teksti hyväksymällä parannukset.",
              "Kirjoita koko paperin loppuun selkeä merkintä: 'Oikeinkirjoitus on tarkistettu tekoälyllä'.",
              "Palauta täysin valmis ja huolellisesti merkitty tehtäväpaperisi fyysisesti opettajan pöydälle.",
              "Vastaa avoimesti ja totuudenmukaisesti takaisin, kun opettaja kysyy tekoälyn hienosta käytöstä."
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
            "question": "Kuvageneraattori pystyy luomaan sekunneissa upeita maalauksia. Mistä tekoäly on oikeastaan alun perin oppinut tuottamaan tällaista taidetta?",
            "options": [
              "Koodarit ovat kirjoittaneet sille säännöt jokaisen mahdollisen kuvan piirtämiseen.",
              "Se on opiskellut kaiken ihmisten aiemmin verkkoon julkaisemien teosten pohjalta.",
              "Sen ohjelmistoon on asennettu tehdasasetuksena kaikki maailman valmiit maalaukset.",
              "Se osaa ladata laitteen muistiin kaikki maailmassa koskaan julkaistut taidekirjat."
            ],
            "correctAnswer": "Se on opiskellut kaiken ihmisten aiemmin verkkoon julkaisemien teosten pohjalta.",
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
            "question": "Mitä tekijänoikeuslaki oikeastaan tekee ja turvaa koko maailmassa?",
            "options": [
              "Se estää ikävästi aivan kaikkia ihmisiä katsomasta tai ihastelemasta muiden hienoja teoksia.",
              "Se takaa alkuperäisille tekijöille korvauksen, jotta he pystyvät jatkossakin tekemään uutta.",
              "Se asettaa laitteisiin jarrun, joka hidastaa langattoman internettiä toimintaa päivittäin.",
              "Se velvoittaa koko maailman tietokoneet kuluttamaan jatkuvasti kallista sähköä verkon varjossa."
            ],
            "correctAnswer": "Se takaa alkuperäisille tekijöille korvauksen, jotta he pystyvät jatkossakin tekemään uutta.",
            "explanation": "Jos kuka tahansa voisi kopioida toisen tekemän pelin tai musiikin ja myydä sen luvatta omanaan, alkuperäiset tekijät joutuisivat lopettamaan upeiden asioiden tekemisen! Tekijänoikeus suojelee keksijöitä."
          },
          {
            "id": "reilu_peli_3_q14",
            "type": "spot_the_ai",
            "question": "Etsi joukosta sellainen tavoite tai kehote (prompti), joka on selvä yritys tehdä \"luvaton varaosakopio\" toisen omaisuudesta!",
            "options": [
              "'Tee minulle tekoälyllä täysin uudenlainen kuva iloisesta avaruusoliosta, joka ajaa kilpa-autoa.'",
              "'Auta minua heti keksimään uusia tai yllättäviä riimejä runoon, joka kertoo meidän autotallista.'",
              "'Luo minulle uusi kirja, jossa on täsmälleen sama tarina ja samat hahmot kuin Harry Potterissa.'",
              "'Keksi todella laadukas, myyvä ja mieleenpainuva uusi nimi minun omalle keksimälleni tarinalle.'"
            ],
            "correctAnswer": "'Luo minulle uusi kirja, jossa on täsmälleen sama tarina ja samat hahmot kuin Harry Potterissa.'",
            "explanation": "Kuuluisat kirjat, hahmot ja tarinat on suojattu erittäin tarkasti lailla. Niiden vieminen ja kopioiminen toiseen uuteen kirjaan on varastamista."
          },
          {
            "id": "reilu_peli_3_q15",
            "type": "reverse_prompt",
            "question": "Koodari syöttää uuden ohjeen tekoälyn järjestelmään ja ruudulla lukee: \"Opetusdatasta on nyt siivottu pois kaikki ne kuvat, joiden taiteilijat kielsivät niiden käytön.\" Mikä oli komennon reilu tavoite?",
            "options": [
              "Varmistaa, että tekoäly toimii reilusti ja noudattaa tekijänoikeuksia jättämällä suojatut työt rauhaan.",
              "Pakottaa ohjelman koodi toimimaan jatkossa selvästi hitaammin ja ärsyttämään siten kaikkia käyttäjiä.",
              "Kiusata tahallaan kaikkia ihmisiä, jotka haluaisivat ladata internetistä ilmaisia viihdyttäviä kuvia.",
              "Tyhjentää koko laitteen iso kiintolevy täysin vain siksi, että uudemmille videopeleille jäisi enemmän tilaa."
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
            "question": "SKENAARIO: Olette AI vanin takapenkillä ja kaverisi näyttää tekoälyllä tekemäänsä kuvaa. Kuvassa toinen luokkakaverinne on laitettu todella noloon tilanteeseen. Mitä teet fiksuna matkustajana?",
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
            "question": "Järjestä askeleet fiksusti! Miten toimit, kun kaveri näyttää sinulle puhelimestaan koulukaverista tehtyä ilkeää tekoälykuvaa?",
            "correctAnswer": {
              "Kieltäydyt heti katsomasta kuvaa ja pyydät kaveria olemaan jakamatta sitä eteenpäin.": "1. vaihe",
              "Päätätte yhdessä mennä välittömästi kertomaan asiasta lähimmälle opettajalle tai aikuiselle.": "2. vaihe",
              "Opettaja tallentaa kuvan puhelimesta kuvakaappauksella turvaan todisteeksi.": "3. vaihe",
              "Lopuksi teette opettajan avustuksella ilmoituksen sovellukseen kuvan poistamiseksi.": "4. vaihe"
            },
            "explanation": "Nettikiusaamisen pysäyttäminen vaatii uskallusta toimia heti oikein! Leviäminen katkaistaan heti, jonka jälkeen vastuu siirretään aikuiselle, joka varmistaa todisteet ja hoitaa poistamisen.",
            "draggables": [
              "Kieltäydyt heti katsomasta kuvaa ja pyydät kaveria olemaan jakamatta sitä eteenpäin.",
              "Päätätte yhdessä mennä välittömästi kertomaan asiasta lähimmälle opettajalle tai aikuiselle.",
              "Opettaja tallentaa kuvan puhelimesta kuvakaappauksella turvaan todisteeksi.",
              "Lopuksi teette opettajan avustuksella ilmoituksen sovellukseen kuvan poistamiseksi."
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
            "question": "On huomattavasti terveellisempää jutella omista salaisuuksista ja oikeista murheista vain tekoälylle eikä kenellekään oikealle ihmiselle, koska kone ei koskaan kerro niitä eteenpäin kenellekään.",
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
            "question": "Millaisiin asioihin \"peltinen apukuski\" (kone) oikein sopii ja milloin taas tarvitaan ehdottomasti oikeita ihmisiä (ystäviä)? Raahaa vaihtoehdot paikoilleen!",
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
              "Sovelluksesi koodi istuttaa samalla täysin automaattisesti yli sata uutta puuntaimea johonkin metsään.",
              "Nuo sata kuvaa luodaan täysin taianomaisesti ja kokonaan ilman ylimääräistä sähkön tai energian kulumista.",
              "Tekoälyn raskaat tietokoneet joutuvat petollisesti tekemään valtavan turhaa työtä ja tuhlaamaan energiaa.",
              "Laitteesi akku tyhjenee välittömästi, huoneen valot sammuvat sähköpulasta ja ovet menevät heti takalukkoon."
            ],
            "correctAnswer": "Tekoälyn raskaat tietokoneet joutuvat petollisesti tekemään valtavan turhaa työtä ja tuhlaamaan energiaa.",
            "explanation": "Jokaisen kuvan luominen vaatii valtavasti tietokoneiden \"ruksutusta\". Fiksu ja reilu kuski pyytää vain sen mitä oikeasti tarvitsee, eikä kaasuta turhaan luontoa kuormittaen!"
          },
          {
            "id": "reilu_peli_6_q4",
            "type": "drag_drop",
            "question": "Järjestä tapahtumat niin näet, mihin sähkö kuluu, kun pyydät tekoälyä kertomaan vitsin!",
            "correctAnswer": {
              "Kysyt vitsin puhelimeltasi ja se lähettää pyyntösi nopeasti internetin yli.": "1. vaihe",
              "Pyyntö saapuu jättimäiseen konesaliin, jossa hyrrää valtavasti tietokoneita.": "2. vaihe",
              "Koneet tekevät poikkeuksellisen raskasta työtä vitsin luomiseksi, kuluttavat sähköä ja kuumenevat.": "3. vaihe",
              "Vastaus palaa puhelimeesi ja konesalin tuulettimet jäähdyttävät kuumia koneita vedellä.": "4. vaihe"
            },
            "explanation": "Vaikka puhelimesi akku ei juuri kuluisi silmissä, jossain todella kaukana isot ja kuumat tietokoneet kuluttavat paljon sähköä juuri sinun pyyntösi vuoksi.",
            "draggables": [
              "Kysyt vitsin puhelimeltasi ja se lähettää pyyntösi nopeasti internetin yli.",
              "Pyyntö saapuu jättimäiseen konesaliin, jossa hyrrää valtavasti tietokoneita.",
              "Koneet tekevät poikkeuksellisen raskasta työtä vitsin luomiseksi, kuluttavat sähköä ja kuumenevat.",
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
            "question": "Tekoäly antaa sinulle vastauksen: \"Hei! Auton akku kannattaa ladata öisin, jolloin sähkö on usein vihreämpää ja tuulista ja renkaiden ilmanpaineet kannattaa pitää oikeina sähkön säästämiseksi.\" Mikä prompti tuotti tämän luontoystävällisen tuloksen?",
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
              "Koska koneet käyvät niin kuumina jatkuvasta laskentatyöstä, että ne täytyy jäähdyttää vedellä.",
              "Koska vedestä tehdään salaista polttoainetta, jota siirretään suoraan puhelimien sisälle.",
              "Tekoäly-yhtiöt haluavat vain pestä omat jättimäiset autonsa mahdollisimman usein konesalissa."
            ],
            "correctAnswer": "Koska koneet käyvät niin kuumina jatkuvasta laskentatyöstä, että ne täytyy jäähdyttää vedellä.",
            "explanation": "Aivan kuten auton moottori käy kuumana raskaassa ajossa ja tarvitsee jäähdytysnestettä, tekoälyn valtavat palvelimet hehkuvat kuumuutta jatkuvan sähkön takia. Niiden viilentämiseen menee todella valtavasti puhdasta vettä!"
          },
          {
            "id": "reilu_peli_6_q10",
            "type": "scenario",
            "question": "SKENAARIO: Haluat laskea autotallissa, kuinka monta renkaan pulttia tarvitset neljään autoon (4 x 4 x 5). Voisit kysyä asiaa tekoälyltä tai käyttää vain puhelimen tavallista laskinsovellusta. Mikä näistä vaihtoehdoista on reilumpaa luonnolle?",
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
              "Mietit asiat huolella ja kirjoitat yhden erittäin tarkan sekä hyvän kehotteen (promptin).": "2. vaihe",
              "Tekoäly antaa tarkan vastauksen suoraan, ilman että joudut kokeilemaan sataa eri kertaa.": "3. vaihe",
              "Olet säästänyt omaa aikaasi ja samalla suuren määrän luonnon arvokasta sähköä ja vettä.": "4. vaihe"
            },
            "explanation": "Turha edestakainen sähläys vie aina eniten sähköä! Kun mietit tarkkaan jo etukäteen mitä haluat tekoälyltä kysyä, se tekee laajan työn kerralla oikein ja luonto kiittää.",
            "draggables": [
              "Päätät tarkasti etukäteen omissa aivoissasi, mihin oikeaan ongelmaan tarvitset nyt apua.",
              "Mietit asiat huolella ja kirjoitat yhden erittäin tarkan sekä hyvän kehotteen (promptin).",
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
        "name": "Tarkastuspiste - häijy kaahari",
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
              "Tunnistat somessa leviävän kuvan tekoälyllä muokatuksi kiusaamiseksi ja päätät auttaa kaveriasi.": "1. vaihe",
              "Otat ilkeästä kuvasta ja sen julkaisijasta nopeasti kuvakaappauksen tärkeäksi todisteeksi.": "2. vaihe",
              "Näytät puhelimeen tallentamasi kuvakaappauksen luotettavalle aikuiselle ja pyydät häneltä apua.": "3. vaihe",
              "Teette aikuisen kanssa yhdessä virallisen ilmoituksen sovellukselle, jotta ylläpito poistaa kuvan.": "4. vaihe"
            },
            "explanation": "Tekoälyllä tehdyt ilkeät viestit tai nolatut kuvat (esim. deepfake) ovat aivan oikeaa kiusaamista. Fiksu apukuski pysäyttää leviämisen ja hakee aikuisen avuksi!",
            "draggables": [
              "Tunnistat somessa leviävän kuvan tekoälyllä muokatuksi kiusaamiseksi ja päätät auttaa kaveriasi.",
              "Otat ilkeästä kuvasta ja sen julkaisijasta nopeasti kuvakaappauksen tärkeäksi todisteeksi.",
              "Näytät puhelimeen tallentamasi kuvakaappauksen luotettavalle aikuiselle ja pyydät häneltä apua.",
              "Teette aikuisen kanssa yhdessä virallisen ilmoituksen sovellukselle, jotta ylläpito poistaa kuvan."
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
            "question": "Yritit syöttää tekoälylle käskyn tehdä ilkeä vitsikuva toisesta ihmisestä, mutta ruutuun tuli punainen teksti: \"Estetty: En suostu tuottamaan kiusaavaa sisältöä ihmisistä.\" Minkä asetuksen koodari oli laittanut päälle?",
            "options": [
              "Kone joutui välittömästi vakavaan järjestelmähäiriöön ja päätti yllättäen poistaa aivan kaikki pelit.",
              "Koneeseen oli rakennettu eettiset suodattimet eli 'kuraläpät', jotka kieltäytyvät ilkeistä komennoista.",
              "Laite käynnisti äkillisesti oman turvatoimensa ja sammutti akkunsa kokonaan nukkumaanmenoa varten.",
              "Kone teki oman inhimillisen päätöksensä ja suorastaan alkoi itkeä kuullessaan tuollaisia pahoja sanoja."
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
              "Koska tekoälyn automaattisesti muokkaamat digitaaliset kasvot ovat laadullisesti aivan liian kauniita.",
              "Koska useimmat ihmiset ja ylläpitäjät luulevat internetin nimettömiä kuvien julkaisijoita roboteiksi.",
              "Koska usein pelätään pelkän valheellisen hupikuvan antavan sen kohteelle valtavasti laitonta rahaa."
            ],
            "correctAnswer": "Koska nolo kuva saa aikaan pilkkaa ja pysyy internetissä aina, aiheuttaen kohteelle aitoa pahaa mieltä.",
            "explanation": "Vaikka kuva olisi tekoälyn tekemä väärennös, \"digitaalinen kura\" on oikeaa kiusaamista. Sen aiheuttama häpeä ja paha mieli kohdehenkilölle ovat täysin aitoja tunteita!"
          },
          {
            "id": "reilu_peli_7_q10",
            "type": "scenario",
            "question": "SKENAARIO: Pyydät tekoälyä piirtämään kuvan ammatista \"lääkäri\" ja se piirtää jatkuvasti vain harmaahiuksisia miehiä. Ymmärrät, että sen opetusdata oli yksipuolista. Miten korjaat tilanteen fiksulla promptilla tasa-arvon nimissä?",
            "options": [
              "Käsket tekoälyä lopettamaan lääkärien piirtämisen ja pyydät sitä luomaan paljon kuvia ainoastaan urheiluautoista.",
              "Pyydät tekoälyä varmistamaan, että piirrosten sisältö edustaa oikeaa monimuotoisuutta, kuten myös naislääkäreitä.",
              "Käsket tekoälyn jatkaa linjalla, mutta pakotat sen piirtämään poikkeuksetta kaikille hahmoille massiiviset viikset.",
              "Lopetat huonokäytöksisen piraattitekoälyn käytön kokonaan ja poistat sovelluksen omista digitaalisista laitteistasi."
            ],
            "correctAnswer": "Pyydät tekoälyä varmistamaan, että piirrosten sisältö edustaa oikeaa monimuotoisuutta, kuten myös naislääkäreitä.",
            "explanation": "Reilu tekoäly tarkoittaa \"Kaikki kyytiin\" -asennetta! Jos kone tekee stereotypioita vanhan datan takia, meidän kuskien pitää ohjata sitä luomaan uusia, reilumpia ja monimuotoisempia kuvia koko ihmiskunnasta."
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
            "question": "Tekoäly on niin viisas, että sille riittää ohjeeksi vain yksi sana (esim. \"auto\") ja se keksii aivan aina täydellisen tarinan juuri siitä, mitä salaa ajattelit.",
            "options": [
              "Oikein",
              "Väärin"
            ],
            "correctAnswer": "Väärin",
            "explanation": "Tekoäly ei osaa lukea ajatuksia! Aivan kuten navigaattori tarvitsee tarkan ja pitkän osoitteen, tekoäly tarvitsee tarkan kehotteen (promptin) tehdäkseen juuri sen mitä haluat."
          },
          {
            "id": "kayttotaidot_1_q2",
            "type": "multiple_choice",
            "question": "Mitä sana kehote (prompti) tarkoittaa, kun käytät AI vanin tekoälyä autotallissa?",
            "options": [
              "Sitä, että auton ovet laitetaan nopeasti lukkoon kaukosäätimellä.",
              "Se on ohje, kysymys tai komento, joka kirjoitetaan tekoälylle.",
              "Se tarkoittaa laitteen ja tekoälyn sammuttamista kokonaan yöksi.",
              "Sitä, että tekoäly yrittää tahallaan säikytellä ja pelotella sinua."
            ],
            "correctAnswer": "Se on ohje, kysymys tai komento, joka kirjoitetaan tekoälylle.",
            "explanation": "Kehote (prompti) on tekoälyn ohjauspyörä! Se on se teksti tai puhe, jolla kerrot koneelle, mitä tarkalleen haluat sen tekevän puolestasi."
          },
          {
            "id": "kayttotaidot_1_q3",
            "type": "scenario",
            "question": "SKENAARIO: Haluat tekoälyn keksivän teille hauskan leikin takapenkille pitkän automatkan ajaksi. Kirjoitat vain: \"Keksi leikki.\" Tekoäly antaa leikin, johon tarvitaan iso jalkapallokenttä ja pallo. Miksi näin kävi?",
            "options": [
              "Tekoäly kettuili ja kiusasi sinua tahallaan huonolla tuulella.",
              "Ohjeesi oli liian epätarkka, eikä tekoäly tiennyt teidän olevan pienessä autossa.",
              "Autossa on tekoälyn mielestä oikeasti tilaa jalkapallon pelaamiselle.",
              "Tekoäly unohti täysin kaikki suomen kielen oikeat sanat leikeistä."
            ],
            "correctAnswer": "Ohjeesi oli liian epätarkka, eikä tekoäly tiennyt teidän olevan pienessä autossa.",
            "explanation": "Jos annat navigaattoriin liian lyhyen osoitteen, päädyt helposti väärään paikkaan. Kokeile tarkempaa kehotetta (promptia): \"Keksi hauska sanaleikki, jota kolme lasta voi pelata istuessaan autossa.\""
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
            "explanation": "Tekoäly toimii parhaiten ihmisen työpari, jota ohjataan askel askeleelta kohti parempaa lopputulosta (ns. iteratiivinen kehotteiden tarkentaminen). Yritä pilkkoa isot tehtävät chatin kanssa tällaiseksi vuoropuheluksi!",
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
            "question": "Raahaa kehotteet (promptit) oikeisiin laatikoihin! Kumpi on epätarkkaa \"hakuammuntaa\" ja kumpi on \"tarkka osoite navigaattoriin\"?",
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
            "question": "Mikä näistä kehotteista (prompt) antaa parhaan lopputuloksen?",
            "options": [
              "'Kirjoita joku kiva vitsi.'",
              "'Moi tekoäly, mitä kuuluu tänään?'",
              "'Keksi minulle kolme hauskaa ja lyhyttä vitsiä, jotka liittyvät autoihin ja koiriin.'",
              "'Tee heti tarina meille.'"
            ],
            "correctAnswer": "'Keksi minulle kolme hauskaa ja lyhyttä vitsiä, jotka liittyvät autoihin ja koiriin.'",
            "explanation": "Tämä kehote antoi määrän (kolme), pituuden (lyhyttä), lajityypin (hauskaa vitsiä) ja aiheen (autot ja koirat). Aivan täydellinen osoite suoraan navigaattoriin!"
          },
          {
            "id": "kayttotaidot_1_q7",
            "type": "reverse_prompt",
            "question": "AI vanin näyttö tulostaa yhtäkkiä tekstin: \"Arrr, ohoi matruusit! Nyt nostetaan purjeet ja käännetään auton ratti kohti aarrelaaksoa! Olen kapteeni Puuparta!\" Mikä roolikehote (rooliprompti) sai tekoälyn puhumaan näin hassusti?",
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
            "explanation": "Kehotteen luominen (promptaaminen) on keskustelua! Jos ensimmäinen ohje vei \"umpikujaan\", voit aina antaa lisäohjeita, kuten: \"Tuo oli liian pitkä vastaus, lyhennä sitä vähän\" tai \"Sano sama asia vähän helpommilla sanoilla\"."
          },
          {
            "id": "kayttotaidot_1_q9",
            "type": "multiple_choice",
            "question": "Miksi tekoälylle kannattaa usein kehotteessa (promptissa) kertoa oma ikä tai luokka-aste (esim. \"Olen 4-luokkalainen\"), kun pyydät siltä apua jonkin vaikean asian oppimisessa?",
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
            "explanation": "Muodon ja pituuden määrittäminen on erittäin tärkeä osa hyvän kehotteen rakentamista (promptausta)! Voit aina jälkikäteen käskeä tekoälyä tekemään lyhyitä listoja, taulukoita tai vaikka runoja, jotta sen antama teksti on paljon helpompi lukea."
          },
          {
            "id": "kayttotaidot_1_q11",
            "type": "drag_drop",
            "question": "Yhdistä mahtavat kehotteen (promptin) työkalut ja ohjeet niiden oikeisiin esimerkkilauseisiin!",
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
            "explanation": "Näillä kolmella taikatyökalulla (rooli, konteksti ja muoto) muutat minkä tahansa huonon ja tylsän kehotteen (promptin) aivan mestarilliseksi \"tarkaksi osoitteeksi navigaattorissa\"!"
          },
          {
            "id": "kayttotaidot_1_q12",
            "type": "drag_drop",
            "question": "Olet tekemässä AI vanin mainosjulistetta. Miten hienosäädät (eli iteroit) tekoälyn vastausta yhä paremmaksi askel askeleelta, kun navigaattori ei heti löydä perille?",
            "correctAnswer": {
              "Kirjoitat ensin yksinkertaisesti: 'Keksi minulle mainoslause autolle.'": "1. vaihe",
              "Tekoäly antaa sinulle todella tylsän lauseen: 'Tämä on erittäin hyvä auto ajaa.'": "2. vaihe",
              "Korjaat ja tarkennat kehotetta (promptia): 'Tee lauseesta paljon hauskempi ja lisää siihen sana raketti.'": "3. vaihe",
              "Tekoäly vihdoin onnistuu tavoitteessa: 'AI van on maantien nopein raketti, hyppää kyytiin!'": "4. vaihe"
            },
            "explanation": "Kehotteiden hiominen (promptaaminen) on kokeilua ja auton jatkuvaa ohjaamista oikeaan suuntaan! Jos et ole tyytyväinen heti ensimmäiseen vastaukseen, voit aina jatkaa keskustelua, antaa lisäohjeita ja \"korjata kurssia\".",
            "draggables": [
              "Kirjoitat ensin yksinkertaisesti: 'Keksi minulle mainoslause autolle.'",
              "Tekoäly antaa sinulle todella tylsän lauseen: 'Tämä on erittäin hyvä auto ajaa.'",
              "Korjaat ja tarkennat kehotetta (promptia): 'Tee lauseesta paljon hauskempi ja lisää siihen sana raketti.'",
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
            "question": "Kolme näistä on erinomaisia ohjeita hyvän kehotteen (promptin) kirjoittamiseen. Mikä on joukkoon eksynyt tekoälyn antama HUONO neuvo?",
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
            "question": "AI vanin näyttöruutu sylkee iloisesti ulos tekstin: \"1. Tarkista renkaiden ilmat. 2. Pese likaiset ikkunat. 3. Tankkaa auto.\" (Koko ohje on kirjoitettu 7-vuotiaalle sopivalla selkeällä ja helpolla sanastolla). Millä upealla kehotteella (promptilla) tämä saatiin aikaan?",
            "options": [
              "Selitä pikkulapselle erittäin lyhyesti kolme hyvää syytä, miksi autojen ikkunat likaantuvat tiellä ajaessa.",
              "Kirjoita selkeä ja ymmärrettävä ohje auton renkaiden ja öljyjen tarkistamisesta ammattitason mekaanikolle.",
              "Listaa 3 tärkeää auton huolto-ohjetta yksinkertaisesti, aivan kuin selittäisit ne 7-vuotiaalle lapselle.",
              "Tee pitkä, raskailla sivistyssanoilla täytetty ammattilaisteksti auton huoltotoimenpiteistä ja pesemisestä."
            ],
            "correctAnswer": "Listaa 3 tärkeää auton huolto-ohjetta yksinkertaisesti, aivan kuin selittäisit ne 7-vuotiaalle lapselle.",
            "explanation": "Tämä on mestaritason kehotteiden laatimista (promptausta) ja navigointia! Siinä on tarkka määrä (3), tehtävä (huolto-ohjeita), haluttu muoto (listaa) ja tärkeä konteksti (kuin selittäisit 7-vuotiaalle). Näin tekoälystä saa parhaan hyödyn irti."
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
            "question": "Mitä koodarit ja asiantuntijat tarkoittavat, kun he sanovat, että AI vanin tekoäly \"hallusinoi\"?",
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
            "question": "Tekoäly vastaa sinulle: \"Koirien hajuaisti on todella tarkka. Tämä tieto löytyy useiden biologiaa käsittelevien yliopistojen virallisista tutkimuksista.\" Millä fiksulla kehotteella (promptilla) sait sen kertomaan tämän?",
            "options": [
              "Kerro minulle nopeasti jokin täysin keksitty valhe ja fakta koirista.",
              "Kerro miten hyvä koiran hajuaisti on ja mainitse luotettava lähde tiedolle.",
              "Piirrä minulle outo koira, jolla on iso yliopiston hattu päässään.",
              "Keksi joku hauska vitsi koirista ja niiden valtavan isosta nenästä."
            ],
            "correctAnswer": "Kerro miten hyvä koiran hajuaisti on ja mainitse luotettava lähde tiedolle.",
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
              "Ovea ja koittaa vain puhua sille todella kauniisti koko iltapäivän.",
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
              "Tulet järkevään tulokseen, että kuva ei ole aito valokuva, vaan tekoälyllä tehty kuva.": "4. vaihe"
            },
            "explanation": "Ota silmä käteen! Tekoäly tekee usein pieniä virheitä kuviin (kuten kuusi sormea tai olemattomia varjoja). Kun käytät maalaisjärkeä ja tarkistat faktat, feikkikuvat on helppo paljastaa.",
            "draggables": [
              "Ihmettelet, miksi kuva näyttää heti hieman oudolta ja epätodelliselta.",
              "Suurennat kuvaa ja etsit hassuja virheitä, kuten outoja varjoja tai sulaneita renkaita.",
              "Tarkistat uutisista, onko kotikaupungissa todella nähty aitoja lentäviä lautasia.",
              "Tulet järkevään tulokseen, että kuva ei ole aito valokuva, vaan tekoälyllä tehty kuva."
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
              "Kirjoitan tekoälylle malliksi aivan uuden, erittäin lyhyen vitsin, jotta se oppii pituuden.",
              "Kirjoitan sille: 'Tuo oli aivan liian pitkä. Kerro vain yksi todella lyhyt ja hauska vitsi.'",
              "Aloitan välittömästi uuden chatin ja kokeilen kysyä samaa asiaa eri hakusanoilla.",
              "Kopioin tekoälyn tekstin, poistan osan ja liitän sen takaisin chatille korjattuna luettavaksi."
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
            "explanation": "Keskusteleva tekoäly muistaa samassa ketjussa aiemmin puhutut asiat! Voit vain sanoa sille \"Lyhennä tuota äskeistä tekstiä\" ja se tietää heti tarkalleen, mihin viittaat."
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
            "explanation": "Ensimmäinen kehote (prompti) on usein vasta suunnan näyttämistä navigaattoriin. Vasta kun käännät hieman rattia ja annat palautetta, kone alkaa löytää täydellisesti perille juuri sinun ajatuksiisi!"
          },
          {
            "id": "kayttotaidot_3_q10",
            "type": "scenario",
            "question": "SKENAARIO: Olet koodaamassa tekoälyllä sääntöjä autotallin uuteen lautapeliin. Säännöt ovat muuten oikein hyvät, mutta niistä puuttuu kokonaan noppien heittäminen. Mitä sinun kannattaa kirjoittaa?",
            "options": [
              "'Säännöt ovat hienot, mutta lisää niihin vielä yksi kohta noppien heittämisestä.'",
              "'Unohda nämä säännöt, tee uusi versio jossa on noppien lisäksi useampia pelilautoja.'",
              "'Säännöt ovat liian pitkät, keksitkö tähän väliin täysin uusia ja satunnaisia hahmoja peliä varten?'",
              "'Laske pelin kaikki tähänastiset säännöt uudelleen sattumanvaraisessa järjestyksessä ruudulle.'"
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
            "question": "Järjestä askeleet! Miten saat tekoälyn avulla tehtyä uuden kirjeen englantilaiselle kaverillesi fiksulla palautteella?",
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
            "question": "AI vanin ruudulla ollut sekava taulukko pyyhkiytyy pois ja tekoäly kirjoittaa sen tilalle: \"Tässä yksinkertaisemmin: auto koostuu korista, moottorista ja renkaista.\" Mikä oli sinun korjausliikkeesi (promptisi)?",
            "options": [
              "Toit asiat esille aivan liian lyhyesti. Esitä koko alkuperäinen tieto yksityiskohtaisen pistelistan muodossa.",
              "Tuo edellinen taulukko oli liian sekava, tiivistä sen pääasiat yhdellä helpolla lauseella.",
              "Tuo taulukko oli liian helppo. Käytä erittäin vaikeita ja monimutkaisia sivistyssanoja autojen rakenteesta.",
              "Listaa minulle taulukkoon mahdollisimman monta erilaista autonrengasmerkkiä ja laske niiden keskihinnat."
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
            "explanation": "Luovuus on vapaata leikkiä! Ensimmäinen idea on harvoin se paras ja tekoälyn ideoita pitää nimenomaan rikkoa, muuttaa ja muokata omannäköisiksi."
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
              "Koska se pystyy varastamaan nopeasti täsmälleen samoja ideoita koko internetistä, joita keksijät miettivät salaa.",
              "Koska sen ohjelmisto on kytketty tietokoneeseen, joka yrittää automaattisesti piirtää uusia tauluja ja keksiä uusia asioita koko ajan väsymättä.",
              "Koska tekoälyn valtavan koodiston sisällä työskentelee salaa satoja pieniä ja älykkäitä kirjoittajia, jotka tekevät sääntöjä pitkälle aamuun."
            ],
            "correctAnswer": "Koska se on opetettu valtavalla määrällä internetin tekstejä ja tarinoita, joita se osaa yhdistellä uusin tavoin.",
            "explanation": "Koska kielimallit ovat lukeneet miljoonia tarinoita, kirjoja ja artikkeleita, niillä on valtava \"varasto\" asioita, joista ne voivat rakentaa matemaattisesti uusia ja luovia yhdistelmiä."
          },
          {
            "id": "kayttotaidot_4_q10",
            "type": "scenario",
            "question": "SKENAARIO: Suunnittelette luokan kanssa uutta teatteriesitystä, mutta jännittävä loppuratkaisu puuttuu. Miten tekoäly voi pelastaa teatteriesityksen aivoriihen?",
            "options": [
              "Tekoäly ohjelmoidaan menemään virtuaalisesti lavalle näyttelemään upea esitys poissaolevien puolestanne alusta loppuun saakka ilman kenenkään omaa osallistumista.",
              "Syötätte sille tarinan alun ja pyydätte sitä keksimään viisi erilaista yllättävää loppuratkaisua, joista voitte äänestää parhaan.",
              "Sammutatte luokan valot ja luotatte siihen, että se päättää kaikkien nukkumaanmeno-ohjeet täydellisesti ilman, että kenenkään ihmisen tarvitsee lisätä asioita.",
              "Se voi skannata internetistä ja tulostaa täysin valmiin kopion olemassaolevasta näytelmästä, jonka esitätte suoraan sellaisenaan ilman luovaa loppuratkaisua."
            ],
            "correctAnswer": "Syötätte sille tarinan alun ja pyydätte sitä keksimään viisi erilaista yllättävää loppuratkaisua, joista voitte äänestää parhaan.",
            "explanation": "Tekoäly voi jatkaa siitä, mihin ihmisen mielikuvitus loppuu! Kun annatte sille alkutiedot, se voi antaa uusia näkökulmia ja yllättäviä vaihtoehtoja aivoriihen avuksi."
          },
          {
            "id": "kayttotaidot_4_q11",
            "type": "drag_drop",
            "question": "Yhdistä kohtaamasi \"luova lukko\" siihen tekoälyn kehotteeseen (promptiin), jolla saat apukuskilta parhaan avun!",
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
              "Päätät suoraan rakentaa sen uuden puisen pöydän, koska huippuedistynyt tekoäly tietää laitteena luonnollisesti aivan kaikista keksinnöistä paljon paremmin kuin ihminen.",
              "Antaa sille heti uusi kehote (prompti): 'Tuo oli tylsä idea, keksi paljon oudompi ja hassumpi keksintö!'",
              "Sinun kannattaa sulkea laite, mennä ulos ja päättää, ettet yritä enää koskaan keksiä ainoatakaan uutta ja siistiä keksintöä moisen epäonnistumisen takia.",
              "Suutut täysin sille annetusta vastauksesta, piilotat näyttöruudun näkyvistä pöydän alle, etkä tahdo tutustua koko sovellukseen lainkaan missään myöhemmässäkään vaiheessa."
            ],
            "correctAnswer": "Antaa sille heti uusi kehote (prompti): 'Tuo oli tylsä idea, keksi paljon oudompi ja hassumpi keksintö!'",
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
            "question": "Tekoäly antaa sinulle hassun listan nimiä: \"Kuramönksä 3000, Mutahirviö-X ja Sukkulapossu.\" Mikä oli kehotteesi (promptisi)?",
            "options": [
              "Listaa minulle asiallisia ja hienoja tieteellisiä nimiä uudelle avaruusraketille.",
              "Keksi kolme hauskaa ja hieman outoa nimeä uudelle mutaiselle mönkijälle.",
              "Mitkä ovat maailman kolme yleisintä etunimeä, joita pojille annetaan?",
              "Käännä minulle englanniksi sanat kura, hirviö ja possu."
            ],
            "correctAnswer": "Keksi kolme hauskaa ja hieman outoa nimeä uudelle mutaiselle mönkijälle.",
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
              "Jatka yrittämistä täsmälleen samalla ohjelmalla loputtomiin, kunnes laite pakostakin oppii kokonaan uuden taidon itsestään.",
              "Hae netistä toinen, juuri kyseiseen tehtävään (esim. musiikkiin) erikoistunut tekoälytyökalu.",
              "Sammuta laite täysin ja tee lopullinen päätös, ettei kyseistä luovaa tehtävää voi ylipäätään edes ohjelmallisesti tehdä missään.",
              "Odota rauhallisin mielin muutamia vuosia ja toivo sormet ristissä, että kyseinen sama työkalu keksisi joskus tulevaisuudessa oppia asian."
            ],
            "correctAnswer": "Hae netistä toinen, juuri kyseiseen tehtävään (esim. musiikkiin) erikoistunut tekoälytyökalu.",
            "explanation": "Maailma on täynnä satoja erilaisia tekoälyjä! Jos yksi ei osaa jotain, kannattaa vaihtaa fiksusti \"työkalupakin lokeroa\" ja etsiä ongelmaan erikoistunut apukuski."
          },
          {
            "id": "kayttotaidot_5_q10",
            "type": "scenario",
            "question": "SKENAARIO: Haluat lähettää isoäidille syntymäpäiväonnittelut englanniksi ja lisäksi haluat, että viesti lausutaan hänelle ääneen kuin oikean ihmisen puhe. Mitä digityökaluja yhdistelet fiksusti?",
            "options": [
              "Käytän ensin kääntäjää viestin kääntämiseen ja sitten puhesynteesiä (lukijaa) äänen lukemiseen.",
              "Käytän yksinkertaista kuvageneraattoria ja pyydän sitä erikseen maalaamaan uskomattoman hienon kuvan, joka pitää kovasti onnitteluiden ääntä.",
              "Avaan puhelimesta pelkän perinteisen navigaattorin kovemmalle ja pyydän luukuttamaan onnitteluita ääneen suoraan isoäidin talon virtuaalisella pihalla.",
              "Kirjoitan viestin paperille pelkästään suomeksi ja yritän sen jälkeen työntää oman puhelimeni ja sen koko mikrofonin suoraan ulkona olevaan postilaatikkoon."
            ],
            "correctAnswer": "Käytän ensin kääntäjää viestin kääntämiseen ja sitten puhesynteesiä (lukijaa) äänen lukemiseen.",
            "explanation": "Yhdistelemällä ohjelmia olet superkuski! Yksi työkalu hoitaa tekstin ymmärtämisen ja kääntämisen ja toinen (text-to-speech eli puhesynteesi) hoitaa sen muuttamisen aidon kuuloiseksi ääneksi."
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
              "Keksit aivan ensimmäiseksi pelin täydelliset säännöt ja rakenteellisen suunnitelman tekstigeneraattorin kanssa.": "1. vaihe",
              "Ohjelmoit edellisen vaiheen suunnitelman mukaisen pelikoodin toimivaksi koodaustekoälyllä.": "2. vaihe",
              "Kun peli toimii, teetät kuvageneraattorilla upeat taidegrafiikat valmiiseen peliin upotettavaksi.": "3. vaihe",
              "Aivan viimeisenä askeleena käännät täysin valmiin ja testatun pelisi monelle muulle kielelle kääntäjäsovelluksella.": "4. vaihe"
            },
            "explanation": "Iso ja hieno projekti vaatii kunnon pakillisen työkaluja ja loogista loppusuoraa! Yksi kone keksii, toinen koodaa logiikan, kolmas tekee ulkoasun ja neljäs hoitaa lopuksi vasta valmiin pelin kääntämisen.",
            "draggables": [
              "Keksit aivan ensimmäiseksi pelin täydelliset säännöt ja rakenteellisen suunnitelman tekstigeneraattorin kanssa.",
              "Ohjelmoit edellisen vaiheen suunnitelman mukaisen pelikoodin toimivaksi koodaustekoälyllä.",
              "Kun peli toimii, teetät kuvageneraattorilla upeat taidegrafiikat valmiiseen peliin upotettavaksi.",
              "Aivan viimeisenä askeleena käännät täysin valmiin ja testatun pelisi monelle muulle kielelle kääntäjäsovelluksella."
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
            "explanation": "Sama laite, joka yrittää tehdä vähän kaikkea, on usein kompromissi. Jos haluat oikeasti maailmanluokan laulun tai monimutkaisen videon, kannattaa käyttää pelkästään siihen tehtyä superohjelmaa! (Linkkuveitsi on kiva, mutta vasara on parempi naulaamiseen)."
          },
          {
            "id": "kayttotaidot_5_q14",
            "type": "spot_the_ai",
            "question": "Etsi joukosta lausahdus, joka neuvoo käyttämään \"tekoälytyökalua pakista\" selvästi aivan täysin väärään ja hölmöön tarkoitukseen!",
            "options": [
              "'Käytä verkosta löytyvää edistynyttä musiikkitekoälyä säveltämään ja tuottamaan kiva instrumentaalinen taustamusiikki luokan omaan kevätjuhlanäytelmään.'",
              "'Jos haluat korjata saksan kielen pitkät läksysi ja niiden monimutkaiset kielioppivirheet nopeasti, kokeile ehdottomasti kirjoittavaa tekstitekoälyä.'",
              "'Kun matkustat perheesi kanssa lomalle ja etsit kaikkein nopeinta autoreittiä perille asti uudelle kesämökille, käytä täysin normaalia reittinavigaattoria puhelimessasi.'",
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
            "question": "Järjestä askeleet fiksusti! Miten saat tekoälyn avulla järjestettyä omat sekavat leikki-ideasi selkeäksi listaksi?",
            "correctAnswer": {
              "Keksit paperille paljon sekavia ja hassuja sääntöideoita upeaan uuteen ulkoleikkiin.": "1. vaihe",
              "Kirjoitat omat muistiinpanosi tekoälylle liittäen ohjeen: 'Tee tästä sekavasta tekstistä siisti ja selkeä numeroitu sääntölista'.": "2. vaihe",
              "Painat 'Lähetä' -nappia ja odotat, kun ammattimaisen apukuskin ohjelmisto lajittelee omat sääntösi selkeille riveille.": "3. vaihe",
              "Kopioit tekoälyn jäsentämän siistin leikkiohjeen talteen ja pystyt suoraan luettamaan säännöt kavereille todella helposti.": "4. vaihe"
            },
            "explanation": "Tekoäly on mestari lajittelemaan ihmisen omia sekavia ja hullunkurisia luonnoksia selkeiksi, helppolukuisiksi listoiksi aivan silmänräpäyksessä!",
            "draggables": [
              "Keksit paperille paljon sekavia ja hassuja sääntöideoita upeaan uuteen ulkoleikkiin.",
              "Kirjoitat omat muistiinpanosi tekoälylle liittäen ohjeen: 'Tee tästä sekavasta tekstistä siisti ja selkeä numeroitu sääntölista'.",
              "Painat 'Lähetä' -nappia ja odotat, kun ammattimaisen apukuskin ohjelmisto lajittelee omat sääntösi selkeille riveille.",
              "Kopioit tekoälyn jäsentämän siistin leikkiohjeen talteen ja pystyt suoraan luettamaan säännöt kavereille todella helposti."
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
            "question": "Raahaa oikeat tiivistämisen kehotteet (promptit) niiden oikeisiin lopputuloksiin!",
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
              "Koska tekoälyn tekemä automaattinen tiivistelmä saattaa poiketa kirjasta, on laite ja kaikki sen antamat tekstit kaiken kaikkiaan aivan täysin täysin hyödyttömiä koulukäytössä.",
              "Tiivistelmä auttaa ymmärtämään ison kuvan, mutta tarkat yksityiskohdat kannattaa lukea oikeasta kirjasta.",
              "Historian koetta parhaillaan pitävä tai suunnitteleva opettaja toimi kieltämättä täysin itse väärin ja kohtuuttomasti kysyessään yllättäen noin tarkkaa lukua.",
              "Tekoälyn todella monimutkainen matemaattinen ohjelmisto poisti automaattisesti kaikki vuosiluvut kokonaan tekstin joukosta siksi, koska matemaattiset numerot vievät aina liikaa kallista tallennustilaa tietokoneiston omalta rajalliselta kovalevyltä."
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
            "question": "Etsi joukosta huonoin kehote (prompti), jos haluat tekoälyn oikeasti tiivistävän vaikean tieteellisen tekstin sinulle paljon helpommin luettavaan muotoon!",
            "options": [
              "'Selitä tämän erittäin pitkän ja monimutkaisen tiedetekstin ehdottomasti tärkein opetus minulle ytimekkäästi ja ymmärrettävästi vain kolmella selkeällä lauseella.'",
              "'Tee koko tästä vaikeasta ja pitkäveteisestä tiedetekstistä nopeasti silmäiltävä, erittäin selkeä ja ytimekäs lista alusta loppuun käyttämällä pelkkiä ranskalaisia viivoja.'",
              "'Kirjoita tämä teksti täsmälleen yhtä pitkänä takaisin, mutta vaihda sanat paljon vaikeampiin sivistyssanoihin.'",
              "'Tiivistä ja selitä tämä koko sekava teksti niin helpoilla ja arkisilla sanoilla, että jopa täysin asiaa tuntematon 1-luokkalainenkin ymmärtäisi sen pääpointin aivan heti.'"
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
        "name": "Finaali - suuri mestariralli",
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
            "explanation": "Tekoäly ei ikinä osaa lukea ajatuksia. Aivan kuten navigaattori tarvitsee täsmällisen ja tarkan osoitteen, tekoäly vaatii tarkan kehotteen (promptin) tuottaakseen juuri sinulle sopivan tuloksen!"
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
              "Kopioin ja liitän koko esitelmääni aina automaattisesti aivan täysin suoraan sen kaikkein ensimmäisen vastaustuloksen, jonka tekoäly minulle kyseisellä hetkellä kirjoittaa.",
              "Tarkistan tekoälyn antamat samat faktat myös oikeasta kirjasta tai muusta luotettavasta ja virallisesta lähteestä.",
              "Päätän kirjoittaa esitykseeni kaikki tekoälyn keksimät ja antamat valmiit tekstit ainoastaan kirkkaan punaisella värillä, jotta opettaja varmasti huomaa ne erikseen ruudulta.",
              "Kaiken miettimisen jälkeen päätän vain jättää koko tärkeän esitelmäni tekemättä heti alkuunsa, koska tekoäly ja kaikki sen tuomat mahdollisuudet ovat koulutyössä täysin hyödyttömiä."
            ],
            "correctAnswer": "Tarkistan tekoälyn antamat samat faktat myös oikeasta kirjasta tai muusta luotettavasta ja virallisesta lähteestä.",
            "explanation": "Lähdekritiikki ja ristiintarkistus ovat supertaitoja. Älä koskaan luota sokeasti yhteen lähteeseen tai tekoälyn nopeaan vastaukseen, vaan varmista tärkeät faktat aina toisaalta!"
          },
          {
            "id": "kayttotaidot_7_q4",
            "type": "drag_drop",
            "question": "Tekoälyn antamat faktat voivat joskus olla keksittyjä eli hallusinaatioita. Järjestä vaiheet oikeaan turvalliseen järjestykseen, kun löydät AI vanin vastauksesta täysin uuden ja yllättävän faktan esitelmääsi varten!",
            "draggables": [
              "Luet tekoälyn kirjoittaman uuden ja yllättävän faktan sen antamasta vastauksesta.",
              "Etsit aivan vastaavan faktatiedon jostain toisesta luotettavasta lähteestä tai oppikirjasta.",
              "Vertaat huolellisesti tekoälyn tekstiä ja virallisen lähteen tekstiä toisiinsa oikeellisuuden varmistamiseksi.",
              "Kirjoitat lopulta kokonaan omilla huolellisilla tutkimuksillasi vahvistetut turvalliset faktat esitykseesi."
            ],
            "dropZones": [
              "1. vaihe",
              "2. vaihe",
              "3. vaihe",
              "4. vaihe"
            ],
            "correctAnswer": {
              "Luet tekoälyn kirjoittaman uuden ja yllättävän faktan sen antamasta vastauksesta.": "1. vaihe",
              "Etsit aivan vastaavan faktatiedon jostain toisesta luotettavasta lähteestä tai oppikirjasta.": "2. vaihe",
              "Vertaat huolellisesti tekoälyn tekstiä ja virallisen lähteen tekstiä toisiinsa oikeellisuuden varmistamiseksi.": "3. vaihe",
              "Kirjoitat lopulta kokonaan omilla huolellisilla tutkimuksillasi vahvistetut turvalliset faktat esitykseesi.": "4. vaihe"
            },
            "explanation": "Lähdekritiikki vaatii aina kärsivällisyyttä! Faktojen lukemisen jälkeen tieto on aina pysähdyttävä varmistamaan erillisestä, turvallisesta toisesta lähteestä ennen sen käyttöä omassa tärkeässä työssä."
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
            "question": "Tekoäly pahoittelee kiltisti ensimmäistä vastaustaan ja kirjoittaa sen tilalle uuden listan: \"1. Korit 2. Moottori 3. Renkaat.\" Mikä oli tekemäsi \"ratinkääntö\" (korjausliike)?",
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
              "Kopioin vaikean insinööritekstin tekoälylle ja vaadin sitä välittömästi kääntämään laitteen pitkän ohjekirjan suoraan vanhaan antiikin latinaksi.",
              "Käsken monimutkaisen ja hitaan tekoälyn lukemaan koko tieteellisen teknisen tekstin laitteen omalta näytöltä minulle todella hitaasti ääneen korvaan.",
              "Kopioin vaikean tekstin tekoälylle ja pyydän sitä tiivistämään ohjeen pelkkiin kolmeen tärkeimpään askelmerkkiin (ranskalaisiin viivoihin).",
              "Suljen vaikealukuisen ohjekirjan kokonaan lukematta sitä lainkaan itse ja pyydän sitten tekoälyä nopeasti ostamaan verkosta kokonaan uuden ja erilaisen koneen."
            ],
            "correctAnswer": "Kopioin vaikean tekstin tekoälylle ja pyydän sitä tiivistämään ohjeen pelkkiin kolmeen tärkeimpään askelmerkkiin (ranskalaisiin viivoihin).",
            "explanation": "Pitkien tekstien ja vaikeiden faktojen tiivistäminen \"selkosuomeksi\" tai ranskalaisiksi viivoiksi (bullet points) on tekoälyn ylivoimaisesti vahvinta osaamista ja uskomattoman kätevä käyttötaito!"
          }
        ]
      }
    ]
  }
];
