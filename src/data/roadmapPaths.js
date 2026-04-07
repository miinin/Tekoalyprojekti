export const AI_ROADMAP_DATA = {
  main: {
    nodes: [
      { id: 'perusteet', top: '41.2%', left: '21.9%' },
      { id: 'konepellin', top: '75.1%', left: '26.3%' },
      { id: 'arjessa', top: '82.1%', left: '54.4%' },
      { id: 'reilu_peli', top: '63.2%', left: '73.8%' },
      { id: 'kayttotaidot', top: '27.1%', left: '73.3%' },
      { id: 'aivoterveys', top: '36.6%', left: '50.1%' },
      { id: 'digiturva', top: '22.5%', left: '40.4%' },
      { id: 'start_point', top: '53.1%', left: '52.7%', isJunction: true }
    ],
    paths: {
      'start_point-kayttotaidot': [{top:"53.3%",left:"52.9%"},{top:"52.7%",left:"56.7%"},{top:"52.6%",left:"59.1%"},{top:"47.6%",left:"60.3%"},{top:"44.5%",left:"63.3%"},{top:"41.9%",left:"63.5%"},{top:"38.4%",left:"62.7%"},{top:"35.4%",left:"65.4%"},{top:"33.7%",left:"66.9%"},{top:"33.2%",left:"68.3%"},{top:"32.9%",left:"70.3%"},{top:"30.8%",left:"72.4%"},{top:"27.1%",left:"73.3%"}],
      'start_point-aivoterveys': [{top:"53.1%",left:"52.7%"},{top:"50.2%",left:"49.8%"},{top:"48.9%",left:"47.2%"},{top:"46.7%",left:"50.1%"},{top:"45.4%",left:"52.6%"},{top:"43.2%",left:"50.2%"},{top:"41.8%",left:"47.9%"},{top:"38.2%",left:"52.4%"},{top:"36.6%",left:"50.1%"}],
      'start_point-perusteet': [{top:"53.1%",left:"52.7%"},{top:"57.6%",left:"49.9%"},{top:"57.7%",left:"47.7%"},{top:"55.6%",left:"43.9%"},{top:"57.3%",left:"40.1%"},{top:"57.3%",left:"36.9%"},{top:"53.9%",left:"36.9%"},{top:"53.1%",left:"32.5%"},{top:"50.8%",left:"30.6%"},{top:"50.2%",left:"27.9%"},{top:"47.8%",left:"25.3%"},{top:"41.2%",left:"21.9%"}],
      'start_point-reilu_peli': [{top:"52.8%",left:"52.7%"},{top:"52.9%",left:"57.2%"},{top:"53.3%",left:"60.0%"},{top:"55.8%",left:"63.5%"},{top:"59.9%",left:"64.1%"},{top:"63.6%",left:"64.0%"},{top:"66.9%",left:"66.4%"},{top:"68.1%",left:"68.1%"},{top:"65.4%",left:"71.4%"},{top:"63.2%",left:"73.8%"}],
      'start_point-arjessa': [{top:"53.3%",left:"53.0%"},{top:"52.6%",left:"56.8%"},{top:"53.7%",left:"60.9%"},{top:"56.8%",left:"63.9%"},{top:"61.6%",left:"64.1%"},{top:"66.8%",left:"66.0%"},{top:"69.7%",left:"67.2%"},{top:"74.7%",left:"64.8%"},{top:"79.2%",left:"62.2%"},{top:"79.9%",left:"58.6%"},{top:"80.8%",left:"55.6%"},{top:"82.1%",left:"54.4%"}],
      'start_point-konepellin': [{top:"53.1%",left:"52.8%"},{top:"56.9%",left:"50.2%"},{top:"57.6%",left:"47.0%"},{top:"55.5%",left:"43.6%"},{top:"57.7%",left:"39.2%"},{top:"58.2%",left:"37.3%"},{top:"61.8%",left:"35.5%"},{top:"64.8%",left:"35.4%"},{top:"67.6%",left:"33.0%"},{top:"71.6%",left:"29.6%"},{top:"75.1%",left:"26.3%"}],
      'start_point-digiturva': [{top:"52.8%",left:"53.3%"},{top:"57.0%",left:"50.5%"},{top:"57.5%",left:"47.1%"},{top:"55.7%",left:"43.6%"},{top:"56.5%",left:"40.3%"},{top:"58.1%",left:"37.9%"},{top:"55.3%",left:"36.9%"},{top:"53.3%",left:"33.3%"},{top:"51.0%",left:"30.8%"},{top:"50.9%",left:"28.3%"},{top:"48.5%",left:"25.9%"},{top:"43.9%",left:"26.0%"},{top:"40.8%",left:"30.5%"},{top:"38.4%",left:"32.7%"},{top:"35.9%",left:"35.1%"},{top:"32.4%",left:"36.5%"},{top:"27.7%",left:"39.2%"},{top:"22.5%",left:"40.4%"}]
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
    reilu_peli: {
      entry: [{ top: '0%', left: '30%' }, { top: '42%', left: '52%' }],
      exit: [{ top: '0%', left: '30%' }],
      nodes: [
        { id: 'reilu_peli_1', top: '83%', left: '28%' },
        { id: 'reilu_peli_2', top: '70%', left: '37%' },
        { id: 'reilu_peli_3', top: '72%', left: '50%' },
        { id: 'reilu_peli_4', top: '42%', left: '52%' },
        { id: 'reilu_peli_5', top: '41%', left: '65%' },
        { id: 'reilu_peli_6', top: '79%', left: '72%' },
        { id: 'reilu_peli_7', top: '40%', left: '83%' }
      ],
      paths: {
        'reilu_peli_4-reilu_peli_5': [{ top: '42%', left: '52%' }, { top: '41%', left: '65%' }],
        'reilu_peli_5-reilu_peli_7': [{ top: '41%', left: '65%' }, { top: '40%', left: '83%' }],
        'reilu_peli_4-reilu_peli_2': [{ top: '42%', left: '52%' }, { top: '70%', left: '37%' }],
        'reilu_peli_2-reilu_peli_1': [{ top: '70%', left: '37%' }, { top: '83%', left: '28%' }],
        'reilu_peli_2-reilu_peli_3': [{ top: '70%', left: '37%' }, { top: '72%', left: '50%' }],
        'reilu_peli_5-reilu_peli_6': [{ top: '41%', left: '65%' }, { top: '79%', left: '72%' }]
      }
    },
    aivoterveys: {
      entry: [{ top: '55%', left: '0%' }, { top: '49.3%', left: '42.4%' }],
      exit: [{ top: '55%', left: '0%' }],
      nodes: [
        { id: 'aivoterveys_1', top: '83.5%', left: '45.4%' },
        { id: 'aivoterveys_2', top: '49.3%', left: '42.4%' },
        { id: 'aivoterveys_3', top: '32.5%', left: '50.4%' },
        { id: 'aivoterveys_4', top: '42.5%', left: '67.4%' },
        { id: 'aivoterveys_5', top: '85.5%', left: '60.4%' },
        { id: 'aivoterveys_6', top: '77.5%', left: '78.4%' },
        { id: 'aivoterveys_7', top: '55.5%', left: '88.4%' }
      ],
      paths: {
        'aivoterveys_2-aivoterveys_1': [{ top: '49.3%', left: '42.4%' }, { top: '83.5%', left: '45.4%' }],
        'aivoterveys_2-aivoterveys_3': [{ top: '49.3%', left: '42.4%' }, { top: '32.5%', left: '50.4%' }],
        'aivoterveys_3-aivoterveys_4': [{ top: '32.5%', left: '50.4%' }, { top: '42.5%', left: '67.4%' }],
        'aivoterveys_4-aivoterveys_6': [{ top: '42.5%', left: '67.4%' }, { top: '77.5%', left: '78.4%' }],
        'aivoterveys_6-aivoterveys_7': [{ top: '77.5%', left: '78.4%' }, { top: '55.5%', left: '88.4%' }],
        'aivoterveys_6-aivoterveys_5': [{ top: '77.5%', left: '78.4%' }, { top: '85.5%', left: '60.4%' }]
      }
    },
    digiturva: {
        entry: [{ top: '0%', left: '50%' }, { top: '34.2%', left: '23.1%' }],
        exit: [{ top: '0%', left: '50%' }],
        nodes: [
          { id: 'digiturva_1', top: '75.3%', left: '21.1%' },
          { id: 'digiturva_2', top: '34.2%', left: '23.1%' },
          { id: 'digiturva_3', top: '22.3%', left: '35.4%' },
          { id: 'digiturva_4', top: '48.5%', left: '48.2%' },
          { id: 'digiturva_5', top: '75.8%', left: '50.2%' },
          { id: 'digiturva_6', top: '65.4%', left: '74.1%' },
          { id: 'digiturva_7', top: '35.2%', left: '85.4%' }
        ],
        paths: {
          'digiturva_1-digiturva_2': [{ top: '75.3%', left: '21.1%' }, { top: '34.2%', left: '23.1%' }],
          'digiturva_2-digiturva_3': [{ top: '34.2%', left: '23.1%' }, { top: '22.3%', left: '35.4%' }],
          'digiturva_3-digiturva_4': [{ top: '22.3%', left: '35.4%' }, { top: '48.5%', left: '48.2%' }],
          'digiturva_4-digiturva_5': [{ top: '48.5%', left: '48.2%' }, { top: '75.8%', left: '50.2%' }],
          'digiturva_5-digiturva_6': [{ top: '75.8%', left: '50.2%' }, { top: '65.4%', left: '74.1%' }],
          'digiturva_6-digiturva_7': [{ top: '65.4%', left: '74.1%' }, { top: '35.2%', left: '85.4%' }]
        }
    }
  }
};
