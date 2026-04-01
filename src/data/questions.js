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
            "id": "q3_a1guc",
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
            "id": "q2_iul98",
            "type": "drag_drop",
            "question": "Raahaa \"AIvanin\" kyytiin ne laitteet ja sovellukset, jotka käyttävät nykyaikaista koneoppimista, ja jätä tien sivuun ne, jotka toimivat vain perinteisellä koodilla.",
            "options": [
              { "item": "Spotify-suositukset", "target": "AIvanin kyytiin" },
              { "item": "TikTok-feedi", "target": "AIvanin kyytiin" },
              { "item": "Kasvojentunnistus", "target": "AIvanin kyytiin" },
              { "item": "Digitaalinen paistomittari", "target": "Jätä tien sivuun" },
              { "item": "Perinteinen taskulaskin", "target": "Jätä tien sivuun" }
            ],
            "explanation": "Esimerkiksi laskimet ja peruspaistomittarit on ohjelmoitu tekemään yhä uudelleen täsmälleen sama tietty matemaattinen tai fyysinen asia (perinteinen koodi), kun taas suosittelualgoritmit ja kuvantunnistus oppivat valtavasta datamäärästä (koneoppiminen)."
          }
        ]
      },
      {
        "id": "perusteet_2",
        "name": "Taso 2: Perusteita",
        "questions": [
          {
            "id": "q1_0kotr",
            "type": "true_false",
            "question": "ChatGPT ja muut kielimallit ymmärtävät lukemaansa tekstiä täysin samalla tavalla kuin ihminen.",
            "options": ["Totta", "Tarua"],
            "correctAnswer": "Tarua",
            "explanation": "Tekoäly ei ymmärrä sanojen merkitystä kuten ihminen, vaan se perustuu valtavaan tilastotieteeseen ja todennäköisyyksiin siitä, mikä sana tulee seuraavaksi."
          }
        ]
      },
      {
        "id": "perusteet_3",
        "name": "Taso 3: Mestari",
        "questions": []
      },
      { "id": "perusteet_4", "name": "Taso 4: Tutkija", "questions": [] },
      { "id": "perusteet_5", "name": "Taso 5: Innovaattori", "questions": [] },
      { "id": "perusteet_6", "name": "Taso 6: Visionääri", "questions": [] },
      { "id": "perusteet_7", "name": "Taso 7: Legenda", "questions": [] }
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
            "id": "q5_rtgsi",
            "type": "multiple_choice",
            "question": "Koodarit puhuvat usein säännöstä \"Roskaa sisään, roskaa ulos\" (Garbage in, garbage out). Mitä se tarkoittaa tekoälyn kehityksessä?",
            "options": [
              "Tekoäly täyttää tietokoneen muistin roskatiedostoilla ajan myötä automaattisesti.",
              "Jos tekoälyä opetetaan huonolaatuisella tai valheellisella datalla, sen antamat vastaukset ovat myös huonoja.",
              "Tekoäly osaa lajitella roskasähköpostit ja roskapostikansiot, muttei poistaa niitä fyysisesti.",
              "Mitä enemmän kyselet tekoälyltä samassa keskusteluketjussa asioita, sitä huonompia vastauksia alat ylikuormittumisen vuoksi saamaan."
            ],
            "correctAnswer": "Jos tekoälyä opetetaan huonolaatuisella tai valheellisella datalla, sen antamat vastaukset ovat myös huonoja.",
            "explanation": "Tekoäly heijastaa aina vain sille syötetyn opetusdatan laatua. Virheistä tai yksipuolisesta datasta oppiva malli tekee ja tuottaa automaattisesti virheellisiä ja yksipuolisia vastauksia."
          },
          {
            "id": "q4_ngs00",
            "type": "ordering",
            "question": "JÄRJESTÄMINEN: Tekoäly on kuin auton moottori, joka pitää ensin rakentaa ja opettaa. Laita tekoälyn kouluttamisen vaiheet oikeaan, loogiseen järjestykseen.",
            "options": [
              "Kerätään valtava määrä esimerkkidataa (kuvia, tekstejä tai numeroita).",
              "Syötetään kerätty data koneoppimisalgoritmille työstettäväksi.",
              "Tekoälymalli etsii datasta kaavoja ja itsenäisiä sääntöjä.",
              "Testataan oppineen tekoälyn toimivuus uudella, ennennäkemättömällä datalla."
            ],
            "correctAnswer": [
              "Kerätään valtava määrä esimerkkidataa (kuvia, tekstejä tai numeroita).",
              "Syötetään kerätty data koneoppimisalgoritmille työstettäväksi.",
              "Tekoälymalli etsii datasta kaavoja ja itsenäisiä sääntöjä.",
              "Testataan oppineen tekoälyn toimivuus uudella, ennennäkemättömällä datalla."
            ],
            "explanation": "Koulutusprosessi alkaa aina datan keräämisellä ja päättyy testidatalla tehtyyn arviointiin."
          }
        ]
      },
      {
        "id": "konepellin_2",
        "name": "Taso 2: Syvä",
        "questions": [
          {
            "id": "q6_hrlu7",
            "type": "true_false",
            "question": "Analyyttinen tekoäly tunnistaa kaavoja lajittelemalla dataa, kun taas generatiivinen tekoäly luo aivan uutta sisältöä.",
            "options": ["Totta", "Tarua"],
            "correctAnswer": "Totta",
            "explanation": "Generatiivinen tekoäly yhdistelee asioita rakentaen uutta lopputulosta, kun taas analyyttinen tekoäly arvioi tai luokittelee sille syötettyä aineistoa."
          }
        ]
      },
      { "id": "konepellin_3", "name": "Taso 3: Mestari", "questions": [] },
      { "id": "konepellin_4", "name": "Taso 4: Tutkija", "questions": [] },
      { "id": "konepellin_5", "name": "Taso 5: Innovaattori", "questions": [] },
      { "id": "konepellin_6", "name": "Taso 6: Visionääri", "questions": [] },
      { "id": "konepellin_7", "name": "Taso 7: Legenda", "questions": [] }
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
            "id": "q7_8knus",
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
      {
        "id": "arjessa_2",
        "name": "Taso 2: Syvä",
        "questions": [
          {
            "id": "q8_mxezu",
            "type": "spot_the_ai",
            "question": "TUNNISTA TEKOÄLY: Kuvassa henkilöllä on kuusi sormea ja siansaksaa olevaa tekstiä taustalla. Onko kyseessä aito tilanne?",
            "options": ["Aito", "Tekoälyn generoima"],
            "correctAnswer": "Tekoälyn generoima",
            "explanation": "Omituiset sormet ja taustan sotkuinen teksti ovat klassisimpia paljastavia virheitä tekoälykuvissa."
          }
        ]
      },
      {
        "id": "arjessa_3",
        "name": "Taso 3: Mestari",
        "questions": [
          {
            "id": "q9_ln2nk",
            "type": "multiple_choice",
            "question": "Mikä on EETTISIN tapaus hyödyntää kielimallia koulutehtävässä?",
            "options": [
              "Kopioi vastaus kokonaisuudessaan",
              "Käytä sparraajana rakenteen parantamiseen ja aivoriihen tueksi",
              "Muunna teksti plagiointitarkastimen ohittavalla sovelluksella",
              "Palauta tekoälyn tekemä tiivistelmä omanasi"
            ],
            "correctAnswer": "Käytä sparraajana rakenteen parantamiseen ja aivoriihen tueksi",
            "explanation": "Tekoäly on loistava 'työkaveri' ja sparraaja oppimisen tueksi."
          }
        ]
      },
      { "id": "arjessa_4", "name": "Taso 4: Tutkija", "questions": [] },
      { "id": "arjessa_5", "name": "Taso 5: Innovaattori", "questions": [] },
      { "id": "arjessa_6", "name": "Taso 6: Visionääri", "questions": [] },
      { "id": "arjessa_7", "name": "Taso 7: Legenda", "questions": [] }
    ]
  },
  {
    "id": "etiikka",
    "name": "Tekoäly ja etiikka",
    "subcategories": [
      { "id": "etiikka_1", "name": "Taso 1", "questions": [] },
      { "id": "etiikka_2", "name": "Taso 2", "questions": [] },
      { "id": "etiikka_3", "name": "Taso 3", "questions": [] },
      { "id": "etiikka_4", "name": "Taso 4", "questions": [] },
      { "id": "etiikka_5", "name": "Taso 5", "questions": [] },
      { "id": "etiikka_6", "name": "Taso 6", "questions": [] },
      { "id": "etiikka_7", "name": "Taso 7", "questions": [] }
    ]
  },
  {
    "id": "kayttotaidot",
    "name": "Tekoälyn käyttötaidot",
    "subcategories": [
      { "id": "kayttotaidot_1", "name": "Taso 1", "questions": [] },
      { "id": "kayttotaidot_2", "name": "Taso 2", "questions": [] },
      { "id": "kayttotaidot_3", "name": "Taso 3", "questions": [] },
      { "id": "kayttotaidot_4", "name": "Taso 4", "questions": [] },
      { "id": "kayttotaidot_5", "name": "Taso 5", "questions": [] },
      { "id": "kayttotaidot_6", "name": "Taso 6", "questions": [] },
      { "id": "kayttotaidot_7", "name": "Taso 7", "questions": [] }
    ]
  },
  {
    "id": "viidakko",
    "name": "AI-viidakko",
    "subcategories": [
      { "id": "viidakko_1", "name": "Taso 1", "questions": [] },
      { "id": "viidakko_2", "name": "Taso 2", "questions": [] },
      { "id": "viidakko_3", "name": "Taso 3", "questions": [] },
      { "id": "viidakko_4", "name": "Taso 4", "questions": [] },
      { "id": "viidakko_5", "name": "Taso 5", "questions": [] },
      { "id": "viidakko_6", "name": "Taso 6", "questions": [] },
      { "id": "viidakko_7", "name": "Taso 7", "questions": [] }
    ]
  }
];
