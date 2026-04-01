/**
 * ROADMAP_PATHS documentation:
 * Each category (main or sub-map slug) has:
 * - nodes: Precise coordinates of red dots (matching question.js subcategory IDs)
 * - entry: Path from edge of screen to Node 1 (used when arriving from main map)
 * - exit: Path from current node to edge of screen (used when returning to main map)
 * - paths: Waypoints between specific node IDs
 */

export const ROADMAP_PATHS = {
  main: {
    nodes: [
      { id: 'perusteet', top: '37.2%', left: '22.8%' },
      { id: 'konepellin', top: '76.5%', left: '23.5%' },
      { id: 'arjessa', top: '83.2%', left: '52.4%' },
      { id: 'etiikka', top: '64.8%', left: '74.2%' },
      { id: 'kayttotaidot', top: '24.6%', left: '74.2%' },
      { id: 'volcano', top: '35.4%', left: '50.4%' },
      { id: 'sea', top: '20.6%', left: '42.1%', isSecret: true }
    ],
    paths: {
      'perusteet-konepellin': [
        { top: '37.2%', left: '22.8%' },
        { top: '45%', left: '26%' },
        { top: '53%', left: '29%' },
        { top: '65%', left: '27%', tunnel: true },
        { top: '76.5%', left: '23.5%' }
      ],
      'konepellin-arjessa': [
        { top: '76.5%', left: '23.5%' },
        { top: '78%', left: '38%' },
        { top: '83.2%', left: '52.4%' }
      ],
      'arjessa-etiikka': [
        { top: '83.2%', left: '52.4%' },
        { top: '80%', left: '65%', tunnel: true },
        { top: '70%', left: '72%' },
        { top: '64.8%', left: '74.2%' }
      ],
      'etiikka-kayttotaidot': [
        { top: '64.8%', left: '74.2%' },
        { top: '52%', left: '80%', tunnel: true },
        { top: '38%', left: '81%' },
        { top: '24.6%', left: '74.2%' }
      ],
      'kayttotaidot-volcano': [
        { top: '24.6%', left: '74.2%' },
        { top: '27%', left: '62%', tunnel: true },
        { top: '35.4%', left: '50.4%' }
      ],
      'volcano-perusteet': [
        { top: '35.4%', left: '50.4%' },
        { top: '32%', left: '36%', tunnel: true },
        { top: '37.2%', left: '22.8%' }
      ],
      'volcano-sea': [
        { top: '35.4%', left: '50.4%' },
        { top: '28%', left: '42%' },
        { top: '20.6%', left: '42.1%' }
      ]
    }
  },
  sub: {
    perusteet: {
      entry: [
        { top: '0%', left: '50%' },
        { top: '20%', left: '40%' },
        { top: '34.2%', left: '23.1%' } // Node 2
      ],
      exit: [
        { top: '20%', left: '40%' },
        { top: '0%', left: '50%' }
      ],
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
        'perusteet_1-perusteet_2': [
          { top: '75.3%', left: '21.1%' },
          { top: '55%', left: '24%', tunnel: true },
          { top: '34.2%', left: '23.1%' }
        ],
        'perusteet_2-perusteet_3': [
          { top: '34.2%', left: '23.1%' },
          { top: '28%', left: '28%' },
          { top: '22.3%', left: '35.4%' }
        ],
        'perusteet_3-perusteet_4': [
          { top: '22.3%', left: '35.4%' },
          { top: '35%', left: '48%' },
          { top: '48.5%', left: '48.2%' }
        ],
        'perusteet_4-perusteet_5': [
          { top: '48.5%', left: '48.2%' },
          { top: '62%', left: '45%' },
          { top: '75.8%', left: '50.2%' }
        ],
        'perusteet_5-perusteet_6': [
          { top: '75.8%', left: '50.2%' },
          { top: '72%', left: '62%', tunnel: true },
          { top: '65.4%', left: '74.1%' }
        ],
        'perusteet_6-perusteet_7': [
          { top: '65.4%', left: '74.1%' },
          { top: '50%', left: '85%', tunnel: true },
          { top: '35.2%', left: '85.4%' }
        ]
      }
    },
    arjessa: {
      entry: [
        { top: '55%', left: '0%' },
        { top: '57%', left: '15%' },
        { top: '62%', left: '25%' },
        { top: '76%', left: '28%' },
        { top: '88.5%', left: '24.1%' } // Node 1 (Tent)
      ],
      exit: [
        { top: '62%', left: '25%' },
        { top: '57%', left: '15%' },
        { top: '55%', left: '0%' }
      ],
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
        'arjessa_1-arjessa_2': [
            { top: '88.5%', left: '24.1%' },
            { top: '75%', left: '32%' },
            { top: '64%', left: '32%' },
            { top: '56.4%', left: '43.1%' }
        ],
        'arjessa_2-arjessa_3': [
            { top: '56.4%', left: '43.1%' },
            { top: '48%', left: '43%' },
            { top: '38.3%', left: '33.1%' }
        ],
        'arjessa_3-arjessa_4': [
            { top: '38.3%', left: '33.1%' },
            { top: '42%', left: '42%' },
            { top: '48%', left: '50%', tunnel: true },
            { top: '45.1%', left: '60.1%' }
        ],
        'arjessa_4-arjessa_5': [
            { top: '45.1%', left: '60.1%' },
            { top: '55%', left: '55%' },
            { top: '66.2%', left: '60.1%' }
        ],
        'arjessa_5-arjessa_6': [
            { top: '66.2%', left: '60.1%' },
            { top: '62%', left: '78%' },
            { top: '45%', left: '81%' },
            { top: '33.3%', left: '76.2%' }
        ],
        'arjessa_6-arjessa_7': [
            { top: '33.3%', left: '76.2%' },
            { top: '22%', left: '85%' },
            { top: '18.2%', left: '90.1%' }
        ]
      }
    },
    konepellin: {
      entry: [
        { top: '0%', left: '30%' },
        { top: '20%', left: '35%' },
        { top: '42%', left: '52%' } // Node 4 (Top Hub)
      ],
      exit: [
        { top: '20%', left: '35%' },
        { top: '0%', left: '30%' }
      ],
      nodes: [
        { id: 'konepellin_1', top: '83%', left: '28%' },
        { id: 'konepellin_2', top: '70%', left: '37%' },
        { id: 'konepellin_3', top: '72%', left: '50%' },
        { id: 'konepellin_4', top: '42%', left: '52%' },
        { id: 'konepellin_5', top: '41%', left: '65%' },
        { id: 'konepellin_6', top: '79%', left: '72%' },
        { id: 'konepellin_7', top: '40%', left: '83%' }
      ],
      paths: {
        'konepellin_4-konepellin_5': [
            { top: '42%', left: '52%' },
            { top: '41%', left: '65%' }
        ],
        'konepellin_5-konepellin_7': [
            { top: '41%', left: '65%' },
            { top: '40.5%', left: '75%' },
            { top: '40%', left: '83%' }
        ],
        'konepellin_4-konepellin_2': [
            { top: '42%', left: '52%' },
            { top: '55%', left: '48%', tunnel: true },
            { top: '60%', left: '42%' },
            { top: '70%', left: '37%' }
        ],
        'konepellin_2-konepellin_1': [
            { top: '70%', left: '37%' },
            { top: '78%', left: '32%' },
            { top: '83%', left: '28%' }
        ],
        'konepellin_2-konepellin_3': [
            { top: '70%', left: '37%' },
            { top: '71%', left: '45%' },
            { top: '72%', left: '50%' }
        ],
        'konepellin_5-konepellin_6': [
            { top: '41%', left: '65%' },
            { top: '60%', left: '60%' },
            { top: '79%', left: '72%' }
        ]
      }
    },
    etiikka: {
      entry: [
        { top: '55%', left: '0%' },
        { top: '52%', left: '25%' },
        { top: '49.3%', left: '42.4%' } // Node 2
      ],
      exit: [
        { top: '52%', left: '25%' },
        { top: '55%', left: '0%' }
      ],
      nodes: [
        { id: 'etiikka_1', top: '83.5%', left: '45.4%' },
        { id: 'etiikka_2', top: '49.3%', left: '42.4%' },
        { id: 'etiikka_3', top: '32.5%', left: '50.4%' },
        { id: 'etiikka_4', top: '42.5%', left: '67.4%' },
        { id: 'etiikka_5', top: '85.5%', left: '60.4%' },
        { id: 'etiikka_6', top: '77.5%', left: '78.4%' },
        { id: 'etiikka_7', top: '55.5%', left: '88.4%' }
      ],
      paths: {
        'etiikka_2-etiikka_1': [
            { top: '49.3%', left: '42.4%' },
            { top: '65%', left: '43%', tunnel: true },
            { top: '83.5%', left: '45.4%' }
        ],
        'etiikka_2-etiikka_3': [
            { top: '49.3%', left: '42.4%' },
            { top: '40%', left: '48%' },
            { top: '32.5%', left: '50.4%' }
        ],
        'etiikka_3-etiikka_4': [
            { top: '32.5%', left: '50.4%' },
            { top: '35%', left: '65%', tunnel: true },
            { top: '42.5%', left: '67.4%' }
        ],
        'etiikka_4-etiikka_6': [
            { top: '42.5%', left: '67.4%' },
            { top: '60%', left: '72%' },
            { top: '77.5%', left: '78.4%' }
        ],
        'etiikka_6-etiikka_7': [
            { top: '77.5%', left: '78.4%' },
            { top: '68%', left: '85%' },
            { top: '55.5%', left: '88.4%' }
        ],
        'etiikka_6-etiikka_5': [
            { top: '77.5%', left: '78.4%' },
            { top: '88%', left: '72%' },
            { top: '85.5%', left: '60.4%' }
        ]
      }
    },
    kayttotaidot: {
        entry: [
          { top: '90%', left: '0%' },
          { top: '80%', left: '20%' },
          { top: '75.5%', left: '35.5%' } // Node 4
        ],
        exit: [
          { top: '80%', left: '20%' },
          { top: '90%', left: '0%' }
        ],
        nodes: [
          { id: 'kayttotaidot_1', top: '48.5%', left: '43%' },
          { id: 'kayttotaidot_2', top: '47%', left: '52%' },
          { id: 'kayttotaidot_3', top: '48.5%', left: '64.5%' },
          { id: 'kayttotaidot_4', top: '75.5%', left: '35.5%' },
          { id: 'kayttotaidot_5', top: '80.5%', left: '72%' },
          { id: 'kayttotaidot_6', top: '66%', left: '68%' },
          { id: 'kayttotaidot_7', top: '35%', left: '78%' }
        ],
        paths: {
            'kayttotaidot_4-kayttotaidot_1': [
                { top: '75.5%', left: '35.5%' },
                { top: '60%', left: '38%' },
                { top: '48.5%', left: '43%' }
            ],
            'kayttotaidot_1-kayttotaidot_2': [
                { top: '48.5%', left: '43%' },
                { top: '47%', left: '52%' }
            ],
            'kayttotaidot_2-kayttotaidot_3': [
                { top: '47%', left: '52%' },
                { top: '48.5%', left: '64.5%' }
            ],
            'kayttotaidot_3-kayttotaidot_5': [
                { top: '48.5%', left: '64.5%' },
                { top: '68%', left: '66%', tunnel: true },
                { top: '80.5%', left: '72%' }
            ],
            'kayttotaidot_5-kayttotaidot_6': [
                { top: '80.5%', left: '72%' },
                { top: '73%', left: '77%' },
                { top: '66%', left: '68%' }
            ],
            'kayttotaidot_6-kayttotaidot_7': [
                { top: '66%', left: '68%' },
                { top: '50%', left: '75%' },
                { top: '35%', left: '78%' }
            ]
        }
    },
    viidakko: {
        entry: [
          { top: '10%', left: '85%' },
          { top: '24.5%', left: '56.3%' } // Node 7
        ],
        exit: [
          { top: '10%', left: '85%' }
        ],
        nodes: [
          { id: 'viidakko_1', top: '77.5%', left: '79.2%' },
          { id: 'viidakko_2', top: '66.5%', left: '57.2%' },
          { id: 'viidakko_3', top: '45.5%', left: '59.2%' },
          { id: 'viidakko_4', top: '45.5%', left: '43.1%' },
          { id: 'viidakko_5', top: '66.5%', left: '36.1%' },
          { id: 'viidakko_6', top: '24.5%', left: '27.1%' },
          { id: 'viidakko_7', top: '24.5%', left: '56.3%' }
        ],
        paths: {
            'viidakko_7-viidakko_3': [
                { top: '24.5%', left: '56.3%' },
                { top: '35%', left: '50%', tunnel: true },
                { top: '45.5%', left: '59.2%' }
            ],
            'viidakko_3-viidakko_2': [
                { top: '45.5%', left: '59.2%' },
                { top: '66.5%', left: '57.2%' }
            ],
            'viidakko_2-viidakko_1': [
                { top: '66.5%', left: '57.2%' },
                { top: '65%', left: '75%' },
                { top: '77.5%', left: '79.2%' }
            ],
            'viidakko_3-viidakko_4': [
                { top: '45.5%', left: '59.2%' },
                { top: '45.5%', left: '43.1%' }
            ],
            'viidakko_4-viidakko_5': [
                { top: '45.5%', left: '43.1%' },
                { top: '66.5%', left: '36.1%' }
            ],
            'viidakko_4-viidakko_6': [
                { top: '45.5%', left: '43.1%' },
                { top: '35%', left: '35%', tunnel: true },
                { top: '24.5%', left: '27.1%' }
            ]
        }
    }
  }
};
