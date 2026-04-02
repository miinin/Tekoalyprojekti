export const categories = [
  {
    "id": "perusteet",
    "name": "Tekoälyn perusteet",
    "subcategories": [
      {
        "id": "perusteet_1",
        "name": "Taso 1: Alkeet",
        "questions": [
          {
            "id": "q_p1_1",
            "type": "multiple_choice",
            "question": "Mikä seuraavista kuvastaa parhaiten \"kapeaa tekoälyä\" (Narrow AI)?",
            "options": [
              "Se osaa ajatella ja tuntea kuten ihminen suurimmassa osassa tilanteista.",
              "Se on oppinut koko Internetin jokaisen tiedon sanasta sanaan ulkoa.",
              "Se on suunniteltu ja opetettu suoriutumaan erinomaisesti vain yhdestä tietystä tehtävästä.",
              "Se voi ottaa täyden hallinnan tietokoneestasi halutessaan ilman lupaasi."
            ],
            "correctAnswer": "Se on suunniteltu ja opetettu suoriutumaan erinomaisesti vain yhdestä tietystä tehtävästä.",
            "explanation": "Kaikki nykyinen ympärillämme oleva tekoäly on ns. kapeaa tekoälyä. Nämä mallit (esim. shakkikoneet, chatit, lääketieteen kuvantunnistajat) osaavat vain sen tehtävän mihin ne on opetettu."
          },
          {
            "id": "q_p1_2",
            "type": "true_false",
            "question": "Onko ChatGPT esimerkki yleisestä tekoälystä (AGI), joka ymmärtää maailmaa kuten ihminen?",
            "options": ["Oikein", "Väärin"],
            "correctAnswer": "Väärin",
            "explanation": "ChatGPT on kielimalli, joka ennustaa seuraavia sanoja datan perusteella. Se ei ole tietoinen tai omaa ihmisen kaltaista yleistä ymmärrystä."
          }
        ]
      },
      { "id": "perusteet_2", "name": "Taso 2: Koneoppiminen", "questions": [
          { "id": "q_p2_1", "type": "multiple_choice", "question": "Mitä tarkoitetaan 'koneoppimisella'?", "options": ["Kone oppii datasta ilman että sille annetaan sääntöjä etukäteen", "Kone menee kouluun", "Kone lukee kirjoja", "Kone päivittää itsensä"], "correctAnswer": "Kone oppii datasta ilman että sille annetaan sääntöjä etukäteen", "explanation": "Koneoppiminen on tekoälyn osa-alue, jossa algoritmit löytävät säännönmukaisuuksia datasta." },
          { "id": "q_p2_2", "type": "true_false", "question": "Tarvitseeko koneoppiminen suuria määriä dataa toimiakseen hyvin?", "options": ["Kyllä", "Ei välttämättä"], "correctAnswer": "Kyllä", "explanation": "Mitä enemmän ja laadukkaampaa dataa on, sitä paremmin malli yleensä oppii." }
      ] },
      { "id": "perusteet_3", "name": "Taso 3: Neuroverkot", "questions": [
          { "id": "q_p3_1", "type": "multiple_choice", "question": "Mikä on tekoälyn neuroverkko?", "options": ["Siimaa ja lautoja", "Aivojen solujen toimintaa matkiva tietokoneohjelma", "Sähköverkko", "Internet-selain"], "correctAnswer": "Aivojen solujen toimintaa matkiva tietokoneohjelma", "explanation": "Neuroverkot on saaneet inspiraationsa ihmisaivojen hermosoluista ja niiden välisistä yhteyksistä." }
      ] },
      { "id": "perusteet_4", "name": "Taso 4: Algoritmit", "questions": [
          { "id": "q_p4_1", "type": "multiple_choice", "question": "Mikä on algoritmi?", "options": ["Laskuresepti tai ohjesarja", "Tietokoneen osa", "Pelin nimi", "Salasana"], "correctAnswer": "Laskuresepti tai ohjesarja", "explanation": "Algoritmi on tarkka ohje siitä, miten jokin tehtävä suoritetaan vaihe vaiheelta." }
      ] },
      { "id": "perusteet_5", "name": "Taso 5: Datan merkitys", "questions": [
          { "id": "q_p5_1", "type": "scenario", "question": "SKENAARIO: Haluat opettaa tekoälyn tunnistamaan omenoita, mutta näytät sille vain kuvia punaisista omenoista. Mitä tapahtuu, kun näytät sille keltaisen omenan?", "options": ["Se tunnistaa sen heti", "Se ei todennäköisesti tunnista sitä omenaksi", "Se muuttuu keltaiseksi", "Se pyytää lisää dataa"], "correctAnswer": "Se ei todennäköisesti tunnista sitä omenaksi", "explanation": "Tekoäly on vain niin viisas kuin sille annettu opetusdata. Jos se on nähnyt vain punaisia omenoita, se luulee omenan olevan aina punainen." }
      ] },
      { "id": "perusteet_6", "name": "Taso 6: Tekoälyn historia", "questions": [
          { "id": "q_p6_1", "type": "multiple_choice", "question": "Milloin tekoälyn ajatus sai alkunsa?", "options": ["1950-luvulla", "2010-luvulla", "1800-luvulla", "2000-luvulla"], "correctAnswer": "1950-luvulla", "explanation": "Tekoälyn perusta luotiin jo 1950-luvulla, vaikka teknologia sen toteuttamiseen kehittyi vasta myöhemmin." }
      ] },
      { "id": "perusteet_7", "name": "Taso 7: Tulevaisuus", "questions": [
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
        "name": "Taso 1: Alkeet",
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
      { "id": "konepellin_2", "name": "Taso 2: Laskentateho", "questions": [
          { "id": "q_k2_1", "type": "multiple_choice", "question": "Miksi tekoäly vaatii tehokkaita näytönohjaimia (GPU)?", "options": ["Ne osaavat laskea monta asiaa samaan aikaan", "Ne näyttävät parempia videoita", "Ne eivät kuumene", "Ne ovat halvempia"], "correctAnswer": "Ne osaavat laskea monta asiaa samaan aikaan", "explanation": "Tekoäly vaatii miljardeja pieniä laskutoimituksia kerralla, mihin näytönohjaimet ovat erinomaisia." }
      ] },
      { "id": "konepellin_3", "name": "Taso 3: Syväoppiminen", "questions": [
          { "id": "q_k3_1", "type": "true_false", "question": "Onko syväoppiminen sama asia kuin neuroverkko, jossa on monta kerrosta?", "options": ["Kyllä", "Ei"], "correctAnswer": "Kyllä", "explanation": "Syväoppiminen (Deep Learning) viittaa monikerroksisiin neuroverkkoihin." }
      ] },
      { "id": "konepellin_4", "name": "Taso 4: Painoarvot", "questions": [
          { "id": "q_k4_1", "type": "multiple_choice", "question": "Mitä tarkoittavat neuroverkon 'painoarvot' (weights)?", "options": ["Yhteyksien voimakkuuksia", "Koneen painoa", "Tiedoston kokoa", "Vastausnopeutta"], "correctAnswer": "Yhteyksien voimakkuuksia", "explanation": "Oppiminen on käytännössä näiden pienten numeroiden (painoarvojen) säätämistä oikeiksi." }
      ] },
      { "id": "konepellin_5", "name": "Taso 5: Luonnollinen kieli", "questions": [
          { "id": "q_k5_1", "type": "multiple_choice", "question": "Mitä tarkoittaa NLP?", "options": ["Luonnollisen kielen käsittely", "Nopea lataus", "Uusi tietokone", "Väärä vastaus"], "correctAnswer": "Luonnollisen kielen käsittely", "explanation": "NLP (Natural Language Processing) on tekoälyn ala, joka keskittyy ihmiskielen ymmärtämiseen." }
      ] },
      { "id": "konepellin_6", "name": "Taso 6: Takaisinvirtaus", "questions": [
          { "id": "q_k6_1", "type": "multiple_choice", "question": "Mikä on backpropagation?", "options": ["Tapa jolla tekoäly korjaa virheitään oppiessaan", "Tietokoneen sammuttaminen", "Netin selaus", "Varmuuskopiointi"], "correctAnswer": "Tapa jolla tekoäly korjaa virheitään oppiessaan", "explanation": "Se on matemaattinen tapa siirtää virhetieto verkossa taaksepäin painoarvojen korjaamiseksi." }
      ] },
      { "id": "konepellin_7", "name": "Taso 7: Uudet arkkitehtuurit", "questions": [
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
        "name": "Taso 1: Alkeet",
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
      { "id": "arjessa_2", "name": "Taso 2: Kasvontunnistus", "questions": [
          { "id": "q_a2_1", "type": "true_false", "question": "Käyttääkö puhelimen lukituksen avaaminen kasvoilla tekoälyä?", "options": ["Kyllä", "Ei"], "correctAnswer": "Kyllä", "explanation": "Se vertaa kasvojasi aiemmin opituihin piirteisiin tekoälyn avulla." }
      ] },
      { "id": "arjessa_3", "name": "Taso 3: Hakukoneet", "questions": [
          { "id": "q_a3_1", "type": "multiple_choice", "question": "Miten Google käyttää tekoälyä?", "options": ["Ymmärtääkseen hakusi tarkoituksen paremmin", "Löytääkseen halvimmat hinnat", "Poistaakseen internetin", "Kysymällä muilta ihmisiltä"], "correctAnswer": "Ymmärtääkseen hakusi tarkoituksen paremmin", "explanation": "Tekoäly auttaa ymmärtämään mitä oikeasti etsit, vaikka et käyttäisi täsmälleen oikeita sanoja." }
      ] },
      { "id": "arjessa_4", "name": "Taso 4: Suoratoisto", "questions": [
          { "id": "q_a4_1", "type": "multiple_choice", "question": "Miten Netflix osaa suositella sinulle sopivia elokuvia?", "options": ["Analysoimalla muiden samankaltaisten käyttäjien valintoja", "He arvaavat", "Se on aina sama lista kaikille", "Katsomalla sinua kamerasta"], "correctAnswer": "Analysoimalla muiden samankaltaisten käyttäjien valintoja", "explanation": "Suosittelualgoritmit etsivät 'maku-profiileja' ja tarjoavat sisältöä niiden perusteella." }
      ] },
      { "id": "arjessa_5", "name": "Taso 5: Kartat ja reitit", "questions": [
          { "id": "q_a5_1", "type": "true_false", "question": "Ennustaako Google Maps ruuhkia tekoälyn avulla?", "options": ["Kyllä", "Ei"], "correctAnswer": "Kyllä", "explanation": "Se analysoi historiadataa ja reaaliaikaista sijaintitietoa laskeakseen nopeimman reitin." }
      ] },
      { "id": "arjessa_6", "name": "Taso 6: Robotti-imurit", "questions": [
          { "id": "q_a6_1", "type": "multiple_choice", "question": "Miten robotti-imuri tunnistaa esteet?", "options": ["Sensoreilla ja koneoppimisella", "Sattumanvaraisesti törmäilemällä", "Se näkee unia", "Siinä on ihminen sisällä"], "correctAnswer": "Sensoreilla ja koneoppimisella", "explanation": "Nykyaikaiset imurit oppivat kotisi kartan ja tunnistavat esineet (kuten sukat!) tekoälyn avulla." }
      ] },
      { "id": "arjessa_7", "name": "Taso 7: Älykodit", "questions": [
          { "id": "q_a7_1", "type": "multiple_choice", "question": "Mikä on unelma 'älykodista'?", "options": ["Koti joka oppii rutiinisi ja säästää energiaa", "Koti joka puhuu koko ajan", "Koti jossa on paljon lamppuja", "Koti joka vaihtaa paikkaa"], "correctAnswer": "Koti joka oppii rutiinisi ja säästää energiaa", "explanation": "Tekoäly voi säädellä lämpöä ja valoja sen mukaan, milloin olet kotona." }
      ] }
    ]
  },
  {
    "id": "reilu_peli",
    "name": "reilu_peli ja turvallisuus",
    "subcategories": [
      { "id": "reilu_peli_1", "name": "Taso 1: Puolueellisuus", "questions": [
          { "id": "q_e1_1", "type": "multiple_choice", "question": "Miksi tekoäly voi olla ennakkoluuloinen (bias)?", "options": ["Koska sen opetusdata on ollut yksipuolista", "Koska se on vihainen", "Se on mahdotonta", "Koska se on tehty koneella"], "correctAnswer": "Koska sen opetusdata on ollut yksipuolista", "explanation": "Jos mallille opetetaan vain tietynlaisia esimerkkejä, se oppii suosimaan niitä eettisesti väärin." }
      ] },
      { "id": "reilu_peli_2", "name": "Taso 2: Yksityisyys", "questions": [
          { "id": "q_e2_1", "type": "true_false", "question": "Onko turvallista syöttää henkilötietoja julkiseen tekoälyyn?", "options": ["Ei, tiedot voivat päätyä osaksi opetusmateriaalia", "Kyllä, se on täysin salattua"], "correctAnswer": "Ei, tiedot voivat päätyä osaksi opetusmateriaalia", "explanation": "Monet tekoälyt tallentavat käydyt keskustelut kehitystä varten, joten varo salaisuuksia!" }
      ] },
      { "id": "reilu_peli_3", "name": "Taso 3: Syväväärennökset", "questions": [
          { "id": "q_e3_1", "type": "multiple_choice", "question": "Mikä on syväväärennös (Deepfake)?", "options": ["Tekoälyllä luotu aidolta näyttävä huijausvideo tai -kuva", "Hyvin syvä reikä", "Väärennetty passi", "Tietokonepeli"], "correctAnswer": "Tekoälyllä luotu aidolta näyttävä huijausvideo tai -kuva", "explanation": "Deepfaket voivat laittaa ihmiset sanomaan asioita, joita he eivät oikeasti ole sanoneet." }
      ] },
      { "id": "reilu_peli_4", "name": "Taso 4: Tekijänoikeudet", "questions": [
          { "id": "q_e4_1", "type": "multiple_choice", "question": "Kuka omistaa tekoälyn luoman taideteoksen koodin?", "options": ["Tämä on monimutkainen ja uusi lakikysymys", "Aina tekoäly itse", "Aina ihminen joka painoi nappia", "Valtio"], "correctAnswer": "Tämä on monimutkainen ja uusi lakikysymys", "explanation": "Tällä hetkellä laki etsii vielä vastausta siihen, kuka omistaa 'koneen luovuuden'." }
      ] },
      { "id": "reilu_peli_5", "name": "Taso 5: Avoimuus", "questions": [
          { "id": "q_e5_1", "type": "true_false", "question": "Pitäisikö meidän aina tietää, puhummeko ihmisen vai tekoälyn kanssa?", "options": ["Kyllä, se on eettisesti suositeltavaa", "Ei se ole tärkeää"], "correctAnswer": "Kyllä, se on eettisesti suositeltavaa", "explanation": "Läpinäkyvyys rakentaa luottamusta teknologian ja ihmisten välille." }
      ] },
      { "id": "reilu_peli_6", "name": "Taso 6: Työelämän muutos", "questions": [
          { "id": "q_e6_1", "type": "multiple_choice", "question": "Miten tekoäly vaikuttaa tulevaisuuden töihin?", "options": ["Se poistaa joitain töitä, mutta luo täysin uusia", "Kaikki työt loppuvat", "Mikään ei muutu", "Töitä on enemmän kaikille"], "correctAnswer": "Se poistaa joitain töitä, mutta luo täysin uusia", "explanation": "Rutiinitehtävät vähenevät, mutta tarve tekoälyä osaaville ihmisille kasvaa." }
      ] },
      { "id": "reilu_peli_7", "name": "Taso 7: Kohdistaminen", "questions": [
          { "id": "q_e7_1", "type": "multiple_choice", "question": "Mitä tarkoitetaan AI Alignmentilla?", "options": ["Tekoälyn tavoitteiden kohdistamista ihmiskunnan parhaaksi", "Tekoälyn asettamista riveihin", "Netin korjaamista", "Tiedon suodatusta"], "correctAnswer": "Tekoälyn tavoitteiden kohdistamista ihmiskunnan parhaaksi", "explanation": "Alignment on tavoite varmistaa, ettei tekoäly vahingossakaan toimi ihmisten arvoja vastaan." }
      ] }
    ]
  },
  {
    "id": "kayttotaidot",
    "name": "Tekoälyn käyttötaidot",
    "subcategories": [
      { "id": "kayttotaidot_1", "name": "Taso 1: Kehotteet", "questions": [
          { "id": "q_kt1_1", "type": "multiple_choice", "question": "Mikä on 'prompt'?", "options": ["Ohje tai kysymys jolla ohjaat tekoälyä", "Salasana", "Tietokoneen merkki", "Uusi peli"], "correctAnswer": "Ohje tai kysymys jolla ohjaat tekoälyä", "explanation": "Kehote (prompt) on tärkein työkalusi tekoälyn komentamiseen." }
      ] },
      { "id": "kayttotaidot_2", "name": "Taso 2: Hallusinaatiot", "questions": [
          { "id": "q_kt2_1", "type": "true_false", "question": "Voiko tekoäly joskus puhua täyttä pajunköyttä vakuuttavasti?", "options": ["Kyllä, tätä kutsutaan hallusinaatioksi", "Ei, se tietää aina totuuden"], "correctAnswer": "Kyllä, tätä kutsutaan hallusinaatioksi", "explanation": "Kielimallit yrittävät miellyttää ja voivat siksi keksiä faktoja tyhjästä." }
      ] },
      { "id": "kayttotaidot_3", "name": "Taso 3: Konteksti", "questions": [
          { "id": "q_kt3_1", "type": "multiple_choice", "question": "Miten saat tekoälyltä parempia vastauksia?", "options": ["Antamalla sille taustatietoa eli kontekstia", "Kirjoittamalla lyhyemmin", "Kysymällä vain kerran", "Huutamalla ISOILLA KIRJAIMILLA"], "correctAnswer": "Antamalla sille taustatietoa eli kontekstia", "explanation": "Mitä enemmän tekoäly tietää tilanteesta, sitä osuvampia ohjeita se voi antaa." }
      ] },
      { "id": "kayttotaidot_4", "name": "Taso 4: Kritiikki", "questions": [
          { "id": "q_kt4_1", "type": "true_false", "question": "Pitäisikö tekoälyn vastaukset tarkistaa aina muista lähteistä?", "options": ["Kyllä, medialukutaito on tärkeää", "Ei, tekoäly on internettiä viisaampi"], "correctAnswer": "Kyllä, medialukutaito on tärkeää", "explanation": "Lähdekriittisyys on AI-ajalla tärkeämpi taito kuin koskaan." }
      ] },
      { "id": "kayttotaidot_5", "name": "Taso 5: Kuvien luonti", "questions": [
          { "id": "q_kt5_1", "type": "multiple_choice", "question": "Millainen kehote tuottaa parhaita tekoälykuvia?", "options": ["Kuvaileva ja yksityiskohtainen", "Mahdollisimman lyhyt", "Sekava", "Tyhjä"], "correctAnswer": "Kuvaileva ja yksityiskohtainen", "explanation": "Kuvaile valo, tyyli, värit ja kohde tarkasti saadaksesi hyviä tuloksia." }
      ] },
      { "id": "kayttotaidot_6", "name": "Taso 6: Monimuotoisuus", "questions": [
          { "id": "q_kt6_1", "type": "multiple_choice", "question": "Mitä tarkoitetaan multimodaalisella tekoälyllä?", "options": ["Se ymmärtää tekstiä, kuvaa, ääntä ja videoita samanaikaisesti", "Se on hyvin nopea", "Se toimii monessa maassa", "Se on kallis"], "correctAnswer": "Se ymmärtää tekstiä, kuvaa, ääntä ja videoita samanaikaisesti", "explanation": "Modernit mallit (kuten GPT-4o tai Gemini) osaavat katsella kuvia ja kuunnella kerralla." }
      ] },
      { "id": "kayttotaidot_7", "name": "Taso 7: Guruksi", "questions": [
          { "id": "q_kt7_1", "type": "multiple_choice", "question": "Miten voit testata tekoälyn päättelyä?", "options": ["Pyytämällä sitä ajattelemaan 'askel kerrallaan'", "Kysymällä siltä kuka se on", "Antamalla sille nimen", "Sulkemalla sen"], "correctAnswer": "Pyytämällä sitä ajattelemaan 'askel kerrallaan'", "explanation": "Chain-of-thought eli ajatuksen ketjuttaminen pakottaa mallin välivaiheisiin, mikä parantaa logiikkaa." }
      ] }
    ]
  },
  {
    "id": "aivoterveys",
    "name": "Tekoälyn aivoterveys",
    "subcategories": [
      { "id": "aivoterveys_1", "name": "Taso 1: Turingin testi", "questions": [
          { "id": "q_h1_1", "type": "multiple_choice", "question": "Mikä on Turingin testin tavoite?", "options": ["Katsoa voiko kone huijata ihmistä luulemaan sitä toiseksi ihmiseksi", "Testata koneen nopeutta", "Katsoa osaako kone uida", "Testata internet-yhteyttä"], "correctAnswer": "Katsoa voiko kone huijata ihmistä luulemaan sitä toiseksi ihmiseksi", "explanation": "Alan Turing kehitti tämän kokeen määritelläkseen, voiko kone ajatella." }
      ] },
      { "id": "aivoterveys_2", "name": "Taso 2: Emergenssi", "questions": [
          { "id": "q_h2_1", "type": "multiple_choice", "question": "Mitä tarkoittaa emergenssi tekoälyssä?", "options": ["Uusien, odottamattomien taitojen syntymistä mallin kasvaessa", "Koneen hajoamista", "Tiedon poistumista", "Hidastumista"], "correctAnswer": "Uusien, odottamattomien taitojen syntymistä mallin kasvaessa", "explanation": "Erittäin suuret mallit saattavat alkaa osata taitoja (kuten vitsit tai koodaus), joita niille ei suoraan opetettu." }
      ] },
      { "id": "aivoterveys_3", "name": "Taso 3: Singularity", "questions": [
          { "id": "q_h3_1", "type": "multiple_choice", "question": "Mikä on teknologinen singulariteetti?", "options": ["Hetki jolloin tekoäly ylittää ihmisälyn ja kehitys kiihtyy hallitsemattomaksi", "Avaruusmatka", "Pelin loppu", "Tekoälyn sammuminen"], "correctAnswer": "Hetki jolloin tekoäly ylittää ihmisälyn ja kehitys kiihtyy hallitsemattomaksi", "explanation": "Tämä on tulevaisuusfuturologien ennustus, jonka toteutumisesta kiistellään." }
      ] },
      { "id": "aivoterveys_4", "name": "Taso 4: Tekoälyn talvet", "questions": [
          { "id": "q_h4_1", "type": "multiple_choice", "question": "Mitä oli 'AI Winter'?", "options": ["Aika jolloin tekoälyn rahoitus ja kiinnostus lopuivat vuosiksi", "Loma-aika", "Pohjoisnapa", "Varkaus"], "correctAnswer": "Aika jolloin tekoälyn rahoitus ja kiinnostus lopuivat vuosiksi", "explanation": "Historiassa on ollut useita jaksoja, jolloin tekoälyyn ei enää uskottu." }
      ] },
      { "id": "aivoterveys_5", "name": "Taso 5: Superäly", "questions": [
          { "id": "q_h5_1", "type": "true_false", "question": "Pidetäänkö superälyä potentiaalisena riskinä ihmiskunnalle?", "options": ["Kyllä, se on merkittävä tutkimuskohde", "Ei, se on mahdotonta"], "correctAnswer": "Kyllä, se on merkittävä tutkimuskohde", "explanation": "Superäly (Superintelligence) vaatii tarkat turvasäännöt toimiakseen ihmisen hyväksi." }
      ] },
      { "id": "aivoterveys_6", "name": "Taso 6: Kvanteista tekoälyyn", "questions": [
          { "id": "q_h6_1", "type": "multiple_choice", "question": "Miten kvanttitietokoneet voisivat auttaa tekoälyä?", "options": ["Ne pystyisivät laskemaan valtavia määriä dataa silmänräpäyksessä", "Ne tekisivät niistä pienempiä", "Ne eivät auta", "Ne tekisivät niistä vihreitä"], "correctAnswer": "Ne pystyisivät laskemaan valtavia määriä dataa silmänräpäyksessä", "explanation": "Kvanttilaskenta voisi mullistaa sen, miten nopeasti ja monimutkaisia asioita tekoäly osaa." }
      ] },
      { "id": "aivoterveys_7", "name": "Taso 7: Suurmestari", "questions": [
          { "id": "q_h7_1", "type": "true_false", "question": "Oletko nyt valmis kohtaamaan tekoälyn tulevaisuuden?", "options": ["Aina valmis oppimaan uutta", "En vielä"], "correctAnswer": "Aina valmis oppimaan uutta", "explanation": "Hienoa! Tekoälyn suurin taito on kyky pysyä uteliaana." }
      ] }
    ]
  },
  {
    "id": "digiturva",
    "name": "Digiturva",
    "subcategories": [
      { "id": "digiturva_1", "name": "Taso 1: Syvyydet", "questions": [ { "id": "q_s1_1", "type": "multiple_choice", "question": "Mitä meri opettaa tekoälystä?", "options": ["Että tieto on syvää ja se kätkee paljon salaisuuksia", "Että siellä on kaloja", "Että vesi on märkää", "Ei mitään"], "correctAnswer": "Että tieto on syvää ja se kätkee paljon salaisuuksia", "explanation": "Digiturva edustaa tuntematonta ja uutta tietoa." } ] },
      { "id": "digiturva_2", "name": "Taso 2: Heijastus", "questions": [ { "id": "q_s2_1", "type": "true_false", "question": "Onko tekoäly vain meidän ihmisten heijastus?", "options": ["Kyllä, se on oppinut kaiken meiltä", "Ei, se on itsenäinen olennto"], "correctAnswer": "Kyllä, se on oppinut kaiken meiltä", "explanation": "Tekoäly opiskelee meidän kirjoittamaa tekstiä ja historiaa." } ] },
      { "id": "digiturva_3", "name": "Taso 3: Luovuus", "questions": [ { "id": "q_s3_1", "type": "multiple_choice", "question": "Voiko tekoäly olla todella luova?", "options": ["Se yhdistelee asioita uusilla tavoilla", "Ei koskaan", "Vain perjantaisin", "Kyllä se on ihminen"], "correctAnswer": "Se yhdistelee asioita uusilla tavoilla", "explanation": "Tekoälyn luovuus perustuu valtavien tietomäärien uudenlaiseen yhdistelyyn." } ] },
      { "id": "digiturva_4", "name": "Taso 4: Tunteet", "questions": [ { "id": "q_s4_1", "type": "true_false", "question": "Voiko koodi tuntea surua?", "options": ["Ei, se voi vain simuloida sitä", "Kyllä"], "correctAnswer": "Ei, se voi vain simuloida sitä", "explanation": "Koneilla ei ole biologista kehoa tai tunteita, vain matemaattisia malleja." } ] },
      { "id": "digiturva_5", "name": "Taso 5: Yhteistyö", "questions": [ { "id": "q_s5_1", "type": "multiple_choice", "question": "Mikä on paras tapa käyttää tekoälyä?", "options": ["Ihmisen ja koneen yhteistyönä (Copilot)", "Antamalla koneen tehdä kaikki", "Välttämällä sitä", "Vain koodaamiseen"], "correctAnswer": "Ihmisen ja koneen yhteistyönä (Copilot)", "explanation": "Yhdessä ihminen ja tekoäly ovat vahvempia kuin kumpikaan yksin." } ] },
      { "id": "digiturva_6", "name": "Taso 6: Vastuullisuus", "questions": [ { "id": "q_s6_1", "type": "multiple_choice", "question": "Kuka on viime kädessä vastuussa tekoälyn teoista?", "options": ["Ihminen joka sitä käyttää tai kehitti sen", "Tekoäly itse", "Tietokone", "Kukaan ei ole"], "correctAnswer": "Ihminen joka sitä käyttää tai kehitti sen", "explanation": "Vastuu on aina ihmisellä, vaikka työkalu olisi kuinka kehittynyt." } ] },
      { "id": "digiturva_7", "name": "Taso 7: Loppusanat", "questions": [ { "id": "q_s7_1", "type": "multiple_choice", "question": "Mikä on tärkein oppi tästä matkasta?", "options": ["Uteliaisuus ja kriittisyys", "Että osaan vastata kysymyksiin", "Että auto osaa ajaa", "Pelin loppu"], "correctAnswer": "Uteliaisuus ja kriittisyys", "explanation": "Olet suorittanut AIVAN tien! Muista: maailma muuttuu, mutta oppiminen jatkuu." } ] }
    ]
  }
];
