export const AI_ROADMAP_DATA = {
  main: {
    nodes: [
      { id: 'perusteet', top: '35.2%', left: '21.5%' },   // 1: Forest
      { id: 'konepellin', top: '78.5%', left: '23.8%' },  // 2: Ruins (Konepellin alla)
      { id: 'arjessa', top: '83.2%', left: '52.4%' },     // 3: Desert
      { id: 'etiikka', top: '64.8%', left: '74.2%' },    // 4: Harbor (Etiikka ja turvallisuus)
      { id: 'kayttotaidot', top: '24.6%', left: '74.2%' }, // 5: Ice
      { id: 'huippu', top: '35.4%', left: '50.4%' },      // 6: Volcano (Tekoälyn huippu)
      { id: 'sea', top: '20.6%', left: '42.1%' },         // ?: Castle (Salainen meri)
      { id: 'start_point', top: '50%', left: '50%', isJunction: true },
      { id: 'junc_forest', top: '51%', left: '36%', isJunction: true },
      { id: 'junc_east', top: '53%', left: '62%', isJunction: true }
    ],
    paths: {
      'start_point-junc_forest': [{ top: '50%', left: '50%' }, { top: '51%', left: '36%' }],
      'start_point-arjessa': [{ top: '50%', left: '50%' }, { top: '65%', left: '51%' }, { top: '83.2%', left: '52.4%' }],
      'perusteet-konepellin': [{ top: '35.2%', left: '21.5%' }, { top: '45%', left: '24%' }, { top: '60%', left: '21%' }, { top: '78.5%', left: '23.8%' }],
      'perusteet-junc_forest': [{ top: '35.2%', left: '21.5%' }, { top: '42%', left: '32%' }, { top: '51%', left: '36%' }],
      'konepellin-junc_forest': [{ top: '78.5%', left: '23.8%' }, { top: '65%', left: '32%' }, { top: '51%', left: '36%' }],
      'junc_forest-huippu': [{ top: '51%', left: '36%' }, { top: '42%', left: '45%' }, { top: '35.4%', left: '50.4%' }],
      'junc_forest-arjessa': [{ top: '51%', left: '36%' }, { top: '65%', left: '42%' }, { top: '83.2%', left: '52.4%' }],
      'arjessa-etiikka': [{ top: '83.2%', left: '52.4%' }, { top: '75%', left: '65%' }, { top: '64.8%', left: '74.2%' }],
      'etiikka-junc_east': [{ top: '64.8%', left: '74.2%' }, { top: '58%', left: '68%' }, { top: '53%', left: '62%' }],
      'huippu-junc_east': [{ top: '35.4%', left: '50.4%' }, { top: '45%', left: '55%' }, { top: '53%', left: '62%' }],
      'junc_east-kayttotaidot': [{ top: '53%', left: '62%' }, { top: '40%', left: '68%' }, { top: '24.6%', left: '74.2%' }],
      'huippu-sea': [{ top: '35.4%', left: '50.4%' }, { top: '28%', left: '45%' }, { top: '20.6%', left: '42.1%' }],
      'sea-kayttotaidot': [{ top: '20.6%', left: '42.1%' }, { top: '22%', left: '58%' }, { top: '24.6%', left: '74.2%' }]
    }
  },
  sub: {
    perusteet: {
      entry: [{ top: '0%', left: '50%' }, { top: '20%', left: '40%' }, { top: '34.2%', left: '23.1%' }],
      exit: [{ top: '20%', left: '40%' }, { top: '0%', left: '50%' }],
      nodes: [
        { id: 'perusteet_1', top: '75.3%', left: '21.1%' },
        { id: 'perusteet_2', top: '34.2%', left: '23.1%' },
        { id: 'perusteet_3', top: '22.3%', left: '35.4%' },
        { id: 'perusteet_4', top: '48.5%', left: '48.2%' },
        { id: 'perusteet_5', top: '75.8%', left: '50.2%' },
        { id: 'perusteet_6', top: '65.4%', left: '74.1%' },
        { id: 'perusteet_7', top: '35.2%', left: '85.4%' }
      ],
      paths: {
        'perusteet_1-perusteet_2': [{ top: '75.3%', left: '21.1%' }, { top: '55%', left: '24%', tunnel: true }, { top: '34.2%', left: '23.1%' }],
        'perusteet_2-perusteet_3': [{ top: '34.2%', left: '23.1%' }, { top: '22.3%', left: '35.4%' }],
        'perusteet_3-perusteet_4': [{ top: '22.3%', left: '35.4%' }, { top: '48.5%', left: '48.2%' }],
        'perusteet_4-perusteet_5': [{ top: '48.5%', left: '48.2%' }, { top: '75.8%', left: '50.2%' }],
        'perusteet_5-perusteet_6': [{ top: '75.8%', left: '50.2%' }, { top: '65.4%', left: '74.1%' }],
        'perusteet_6-perusteet_7': [{ top: '65.4%', left: '74.1%' }, { top: '35.2%', left: '85.4%' }]
      }
    },
    arjessa: {
      entry: [{ top: '55%', left: '0%' }, { top: '88.5%', left: '24.1%' }],
      exit: [{ top: '55%', left: '0%' }],
      nodes: [
        { id: 'arjessa_1', top: '88.5%', left: '24.1%' },
        { id: 'arjessa_2', top: '56.4%', left: '43.1%' },
        { id: 'arjessa_3', top: '38.3%', left: '33.1%' },
        { id: 'arjessa_4', top: '45.1%', left: '60.1%' },
        { id: 'arjessa_5', top: '66.2%', left: '60.1%' },
        { id: 'arjessa_6', top: '33.3%', left: '76.2%' },
        { id: 'arjessa_7', top: '18.2%', left: '90.1%' }
      ],
      paths: {
        'arjessa_1-arjessa_2': [{ top: '88.5%', left: '24.1%' }, { top: '56.4%', left: '43.1%' }],
        'arjessa_2-arjessa_3': [{ top: '56.4%', left: '43.1%' }, { top: '38.3%', left: '33.1%' }],
        'arjessa_3-arjessa_4': [{ top: '38.3%', left: '33.1%' }, { top: '45.1%', left: '60.1%' }],
        'arjessa_4-arjessa_5': [{ top: '45.1%', left: '60.1%' }, { top: '66.2%', left: '60.1%' }],
        'arjessa_5-arjessa_6': [{ top: '66.2%', left: '60.1%' }, { top: '33.3%', left: '76.2%' }],
        'arjessa_6-arjessa_7': [{ top: '33.3%', left: '76.2%' }, { top: '18.2%', left: '90.1%' }]
      }
    },
    kayttotaidot: {
        entry: [{ top: '92%', left: '16%' }, { top: '76%', left: '35.5%' }],
        exit: [{ top: '92%', left: '16%' }],
        nodes: [
          { id: 'kayttotaidot_1', top: '76%', left: '35.5%' },
          { id: 'kayttotaidot_2', top: '50.5%', left: '42.8%' },
          { id: 'kayttotaidot_3', top: '48.2%', left: '52.3%' },
          { id: 'kayttotaidot_4', top: '49.8%', left: '63.5%' },
          { id: 'kayttotaidot_5', top: '65.8%', left: '68.2%' },
          { id: 'kayttotaidot_6', top: '82.8%', left: '74.2%' },
          { id: 'kayttotaidot_7', top: '24.5%', left: '51.5%' }
        ],
        paths: {
            'kayttotaidot_1-kayttotaidot_2': [{ top: '76%', left: '35.5%' }, { top: '50.5%', left: '42.8%' }],
            'kayttotaidot_2-kayttotaidot_3': [{ top: '50.5%', left: '42.8%' }, { top: '48.2%', left: '52.3%' }],
            'kayttotaidot_3-kayttotaidot_4': [{ top: '48.2%', left: '52.3%' }, { top: '49.8%', left: '63.5%' }],
            'kayttotaidot_4-kayttotaidot_5': [{ top: '49.8%', left: '63.5%' }, { top: '65.8%', left: '68.2%' }],
            'kayttotaidot_5-kayttotaidot_6': [{ top: '65.8%', left: '68.2%' }, { top: '82.8%', left: '74.2%' }],
            'kayttotaidot_6-kayttotaidot_7': [{ top: '82.8%', left: '74.2%' }, { top: '50%', left: '80%' }, { top: '24.5%', left: '51.5%' }]
        }
    },
    konepellin: {
        entry: [{ top: '10%', left: '85%' }, { top: '24.5%', left: '56.3%' }],
        exit: [{ top: '10%', left: '85%' }],
        nodes: [
          { id: 'konepellin_1', top: '77.5%', left: '79.2%' },
          { id: 'konepellin_2', top: '66.5%', left: '57.2%' },
          { id: 'konepellin_3', top: '45.5%', left: '59.2%' },
          { id: 'konepellin_4', top: '45.5%', left: '43.1%' },
          { id: 'konepellin_5', top: '66.5%', left: '36.1%' },
          { id: 'konepellin_6', top: '24.5%', left: '27.1%' },
          { id: 'konepellin_7', top: '24.5%', left: '56.3%' }
        ],
        paths: {
            'konepellin_7-konepellin_3': [{ top: '24.5%', left: '56.3%' }, { top: '45.5%', left: '59.2%' }],
            'konepellin_3-konepellin_2': [{ top: '45.5%', left: '59.2%' }, { top: '66.5%', left: '57.2%' }],
            'konepellin_2-konepellin_1': [{ top: '66.5%', left: '57.2%' }, { top: '77.5%', left: '79.2%' }],
            'konepellin_3-konepellin_4': [{ top: '45.5%', left: '59.2%' }, { top: '45.5%', left: '43.1%' }],
            'konepellin_4-konepellin_5': [{ top: '45.5%', left: '43.1%' }, { top: '66.5%', left: '36.1%' }],
            'konepellin_4-konepellin_6': [{ top: '45.5%', left: '43.1%' }, { top: '24.5%', left: '27.1%' }]
        }
    },
    etiikka: {
      entry: [{ top: '0%', left: '30%' }, { top: '42%', left: '52%' }],
      exit: [{ top: '0%', left: '30%' }],
      nodes: [
        { id: 'etiikka_1', top: '83%', left: '28%' },
        { id: 'etiikka_2', top: '70%', left: '37%' },
        { id: 'etiikka_3', top: '72%', left: '50%' },
        { id: 'etiikka_4', top: '42%', left: '52%' },
        { id: 'etiikka_5', top: '41%', left: '65%' },
        { id: 'etiikka_6', top: '79%', left: '72%' },
        { id: 'etiikka_7', top: '40%', left: '83%' }
      ],
      paths: {
        'etiikka_4-etiikka_5': [{ top: '42%', left: '52%' }, { top: '41%', left: '65%' }],
        'etiikka_5-etiikka_7': [{ top: '41%', left: '65%' }, { top: '40%', left: '83%' }],
        'etiikka_4-etiikka_2': [{ top: '42%', left: '52%' }, { top: '70%', left: '37%' }],
        'etiikka_2-etiikka_1': [{ top: '70%', left: '37%' }, { top: '83%', left: '28%' }],
        'etiikka_2-etiikka_3': [{ top: '70%', left: '37%' }, { top: '72%', left: '50%' }],
        'etiikka_5-etiikka_6': [{ top: '41%', left: '65%' }, { top: '79%', left: '72%' }]
      }
    },
    huippu: {
      entry: [{ top: '55%', left: '0%' }, { top: '49.3%', left: '42.4%' }],
      exit: [{ top: '55%', left: '0%' }],
      nodes: [
        { id: 'huippu_1', top: '83.5%', left: '45.4%' },
        { id: 'huippu_2', top: '49.3%', left: '42.4%' },
        { id: 'huippu_3', top: '32.5%', left: '50.4%' },
        { id: 'huippu_4', top: '42.5%', left: '67.4%' },
        { id: 'huippu_5', top: '85.5%', left: '60.4%' },
        { id: 'huippu_6', top: '77.5%', left: '78.4%' },
        { id: 'huippu_7', top: '55.5%', left: '88.4%' }
      ],
      paths: {
        'huippu_2-huippu_1': [{ top: '49.3%', left: '42.4%' }, { top: '83.5%', left: '45.4%' }],
        'huippu_2-huippu_3': [{ top: '49.3%', left: '42.4%' }, { top: '32.5%', left: '50.4%' }],
        'huippu_3-huippu_4': [{ top: '32.5%', left: '50.4%' }, { top: '42.5%', left: '67.4%' }],
        'huippu_4-huippu_6': [{ top: '42.5%', left: '67.4%' }, { top: '77.5%', left: '78.4%' }],
        'huippu_6-huippu_7': [{ top: '77.5%', left: '78.4%' }, { top: '55.5%', left: '88.4%' }],
        'huippu_6-huippu_5': [{ top: '77.5%', left: '78.4%' }, { top: '85.5%', left: '60.4%' }]
      }
    },
    sea: {
        entry: [{ top: '0%', left: '50%' }, { top: '34.2%', left: '23.1%' }],
        exit: [{ top: '0%', left: '50%' }],
        nodes: [
          { id: 'sea_1', top: '75.3%', left: '21.1%' },
          { id: 'sea_2', top: '34.2%', left: '23.1%' },
          { id: 'sea_3', top: '22.3%', left: '35.4%' },
          { id: 'sea_4', top: '48.5%', left: '48.2%' },
          { id: 'sea_5', top: '75.8%', left: '50.2%' },
          { id: 'sea_6', top: '65.4%', left: '74.1%' },
          { id: 'sea_7', top: '35.2%', left: '85.4%' }
        ],
        paths: {
          'sea_1-sea_2': [{ top: '75.3%', left: '21.1%' }, { top: '34.2%', left: '23.1%' }],
          'sea_2-sea_3': [{ top: '34.2%', left: '23.1%' }, { top: '22.3%', left: '35.4%' }],
          'sea_3-sea_4': [{ top: '22.3%', left: '35.4%' }, { top: '48.5%', left: '48.2%' }],
          'sea_4-sea_5': [{ top: '48.5%', left: '48.2%' }, { top: '75.8%', left: '50.2%' }],
          'sea_5-sea_6': [{ top: '75.8%', left: '50.2%' }, { top: '65.4%', left: '74.1%' }],
          'sea_6-sea_7': [{ top: '65.4%', left: '74.1%' }, { top: '35.2%', left: '85.4%' }]
        }
    }
  }
};
