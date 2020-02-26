import {
  fearPNG,
  terrorPNG,
  lodgePNG,
  preacherPNG,
  film1917PNG,
  BirdsOfPreyPNG,
  BombshelPNG,
  TheGentlemen,
  ankochHyur,
  grig,
  kamakorAxjik,
  noMen,
  vache,
  hamerg1,
  hamerg2,
  hamerg3,
  hamerg4,
  hamerg5,
  hamerg6,
  cirk,
  joker1,
  joker2,
  joker3,
  joker4,
  joker5,
  recentBuzz1,
  recentBuzz2,
  CriticsReviews1,
  CriticsReviews2,
  CriticsReviews3,
  CastAndCreative1,
  CastAndCreative2,
  CastAndCreative3,
  CastAndCreative4,
  CastAndCreative5,
  CastAndCreative6,
  CastAndCreative7,
  CastAndCreative8
} from '../assets'

export default {
  allDataForSingleEvent: {
    1: {
      id: 1,
      name: 'fear',
      year: 2019,
      mainImg: fearPNG,
      posterImg: fearPNG,
      rating: '18+',
      type: 'Cinema',
      place: 'Moscow cinema',
      duration: '2 hours',
      description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
      tickets: ['2020-02-20T13:30:00.000Z',
        '2020-02-04T15:30:00.000Z',
        '2020-02-06T17:30:00.000Z',
        '2020-02-08T15:30:00.000Z',
        '2020-02-10T15:30:00.000Z',
        '2020-02-12T16:30:00.000Z'
      ],
      media: [
        {
          id: 1,
          name: 'Joker 1',
          src: joker1
        },
        {
          id: 2,
          name: 'Joker 2',
          src: joker2
        },
        {
          id: 3,
          name: 'Joker 3',
          src: joker3
        },
        {
          id: 4,
          name: 'Joker 4',
          src: joker4
        },
        {
          id: 5,
          name: 'Joker 5',
          src: joker5
        }],
      recentBuzz: [
        {
          id: 1,
          title: 'Lorem Ipsum',
          description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
          src: recentBuzz1
        },
        {
          id: 2,
          title: 'Lorem Ipsum',
          description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
          src: recentBuzz2
        }
      ],
      reviews: [
        {
          id: 1,
          name: 'Eddie Vargas',
          position: 'movie critics',
          src: CriticsReviews1,
          review: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has'
        },
        {
          id: 2,
          name: 'Bill Gates',
          position: 'Founder of Microsoft',
          src: CriticsReviews3,
          review: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has'
        },
        {
          id: 3,
          name: 'Mark Zuckerberg',
          position: 'Founder of Facebook',
          src: CriticsReviews2,
          review: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has'
        }
      ],
      castAndCreatives: {
        cast: [
          {
            id: 9,
            name: 'first Cast',
            src: CastAndCreative1
          },
          {
            id: 10,
            name: 'second Cast',
            src: CastAndCreative2
          },
          {
            id: 11,
            name: 'third Cast',
            src: CastAndCreative3
          },
          {
            id: 12,
            name: 'fourth Cast',
            src: CastAndCreative4
          },
          {
            id: 13,
            name: 'fourth Cast',
            src: CastAndCreative5
          },
          {
            id: 14,
            name: 'fourth Cast',
            src: CastAndCreative6
          }
        ],
        creatives: [
          {
            id: 13,
            name: 'first Creative',
            src: CastAndCreative5
          },
          {
            id: 14,
            name: 'second Creative',
            src: CastAndCreative6
          },
          {
            id: 15,
            name: 'third Creative',
            src: CastAndCreative7
          },
          {
            id: 16,
            name: 'fourth Creative',
            src: CastAndCreative8
          }
        ]
      }
    },
    2: {
      id: 2,
      name: 'Terror',
      year: 2019,
      mainImg: terrorPNG,
      posterImg: terrorPNG,
      rating: '18+',
      type: 'Cinema',
      place: 'Moscow cinema',
      duration: '2 hours',
      description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
      tickets: ['2020-02-20T13:30:00.000Z',
        '2020-02-04T15:30:00.000Z',
        '2020-02-06T17:30:00.000Z',
        '2020-02-08T15:30:00.000Z',
        '2020-02-10T15:30:00.000Z',
        '2020-02-12T16:30:00.000Z'
      ],
      media: [
        {
          id: 1,
          name: 'Joker 1',
          src: joker1
        },
        {
          id: 2,
          name: 'Joker 2',
          src: joker2
        },
        {
          id: 3,
          name: 'Joker 3',
          src: joker3
        },
        {
          id: 4,
          name: 'Joker 4',
          src: joker4
        },
        {
          id: 5,
          name: 'Joker 5',
          src: joker5
        }],
      recentBuzz: [
        {
          id: 1,
          title: 'Lorem Ipsum',
          description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
          src: recentBuzz1
        },
        {
          id: 2,
          title: 'Lorem Ipsum',
          description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
          src: recentBuzz2
        }
      ],
      reviews: [
        {
          id: 1,
          name: 'Eddie Vargas',
          position: 'movie critics',
          src: CriticsReviews1,
          review: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has'
        },
        {
          id: 2,
          name: 'Bill Gates',
          position: 'Founder of Microsoft',
          src: CriticsReviews3,
          review: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has'
        },
        {
          id: 3,
          name: 'Mark Zuckerberg',
          position: 'Founder of Facebook',
          src: CriticsReviews2,
          review: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has'
        }
      ],
      castAndCreatives: {
        cast: [
          {
            id: 9,
            name: 'first Cast',
            src: CastAndCreative1
          },
          {
            id: 10,
            name: 'second Cast',
            src: CastAndCreative2
          },
          {
            id: 11,
            name: 'third Cast',
            src: CastAndCreative3
          },
          {
            id: 12,
            name: 'fourth Cast',
            src: CastAndCreative4
          },
          {
            id: 13,
            name: 'fourth Cast',
            src: CastAndCreative5
          },
          {
            id: 14,
            name: 'fourth Cast',
            src: CastAndCreative6
          }
        ],
        creatives: [
          {
            id: 13,
            name: 'first Creative',
            src: CastAndCreative5
          },
          {
            id: 14,
            name: 'second Creative',
            src: CastAndCreative6
          },
          {
            id: 15,
            name: 'third Creative',
            src: CastAndCreative7
          },
          {
            id: 1,
            name: 'fourth Creative',
            src: CastAndCreative8
          }
        ]
      }
    },
    3: {
      id: 3,
      name: 'lodge',
      year: 2019,
      mainImg: lodgePNG,
      posterImg: lodgePNG,
      rating: '18+',
      type: 'Cinema',
      place: 'Moscow cinema',
      duration: '2 hours',
      description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
      tickets: ['2020-02-20T13:30:00.000Z',
        '2020-02-04T15:30:00.000Z',
        '2020-02-06T17:30:00.000Z',
        '2020-02-08T15:30:00.000Z',
        '2020-02-10T15:30:00.000Z',
        '2020-02-12T16:30:00.000Z'
      ],
      media: [
        {
          id: 1,
          name: 'Joker 1',
          src: joker1
        },
        {
          id: 2,
          name: 'Joker 2',
          src: joker2
        },
        {
          id: 3,
          name: 'Joker 3',
          src: joker3
        },
        {
          id: 4,
          name: 'Joker 4',
          src: joker4
        },
        {
          id: 5,
          name: 'Joker 5',
          src: joker5
        }],
      recentBuzz: [
        {
          id: 1,
          title: 'Lorem Ipsum',
          description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
          src: recentBuzz1
        },
        {
          id: 2,
          title: 'Lorem Ipsum',
          description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
          src: recentBuzz2
        }
      ],
      reviews: [
        {
          id: 1,
          name: 'Eddie Vargas',
          position: 'movie critics',
          src: CriticsReviews1,
          review: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has'
        },
        {
          id: 2,
          name: 'Bill Gates',
          position: 'Founder of Microsoft',
          src: CriticsReviews3,
          review: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has'
        },
        {
          id: 3,
          name: 'Mark Zuckerberg',
          position: 'Founder of Facebook',
          src: CriticsReviews2,
          review: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has'
        }
      ],
      castAndCreatives: {
        cast: [
          {
            id: 9,
            name: 'first Cast',
            src: CastAndCreative1
          },
          {
            id: 10,
            name: 'second Cast',
            src: CastAndCreative2
          },
          {
            id: 11,
            name: 'third Cast',
            src: CastAndCreative3
          },
          {
            id: 12,
            name: 'fourth Cast',
            src: CastAndCreative4
          },
          {
            id: 13,
            name: 'fourth Cast',
            src: CastAndCreative5
          },
          {
            id: 14,
            name: 'fourth Cast',
            src: CastAndCreative6
          }
        ],
        creatives: [
          {
            id: 13,
            name: 'first Creative',
            src: CastAndCreative5
          },
          {
            id: 14,
            name: 'second Creative',
            src: CastAndCreative6
          },
          {
            id: 15,
            name: 'third Creative',
            src: CastAndCreative7
          },
          {
            id: 1,
            name: 'fourth Creative',
            src: CastAndCreative8
          }
        ]
      }
    },
    4: {
      id: 4,
      name: 'preacher',
      year: 2019,
      mainImg: preacherPNG,
      posterImg: preacherPNG,
      rating: '18+',
      type: 'Cinema',
      place: 'Moscow cinema',
      duration: '2 hours',
      description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
      tickets: ['2020-02-20T13:30:00.000Z',
        '2020-02-04T15:30:00.000Z',
        '2020-02-06T17:30:00.000Z',
        '2020-02-08T15:30:00.000Z',
        '2020-02-10T15:30:00.000Z',
        '2020-02-12T16:30:00.000Z'
      ],
      media: [
        {
          id: 1,
          name: 'Joker 1',
          src: joker1
        },
        {
          id: 2,
          name: 'Joker 2',
          src: joker2
        },
        {
          id: 3,
          name: 'Joker 3',
          src: joker3
        },
        {
          id: 4,
          name: 'Joker 4',
          src: joker4
        },
        {
          id: 5,
          name: 'Joker 5',
          src: joker5
        }],
      recentBuzz: [
        {
          id: 1,
          title: 'Lorem Ipsum',
          description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
          src: recentBuzz1
        },
        {
          id: 2,
          title: 'Lorem Ipsum',
          description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
          src: recentBuzz2
        }
      ],
      reviews: [
        {
          id: 1,
          name: 'Eddie Vargas',
          position: 'movie critics',
          src: CriticsReviews1,
          review: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has'
        },
        {
          id: 2,
          name: 'Bill Gates',
          position: 'Founder of Microsoft',
          src: CriticsReviews3,
          review: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has'
        },
        {
          id: 3,
          name: 'Mark Zuckerberg',
          position: 'Founder of Facebook',
          src: CriticsReviews2,
          review: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has'
        }
      ],
      castAndCreatives: {
        cast: [
          {
            id: 9,
            name: 'first Cast',
            src: CastAndCreative1
          },
          {
            id: 10,
            name: 'second Cast',
            src: CastAndCreative2
          },
          {
            id: 11,
            name: 'third Cast',
            src: CastAndCreative3
          },
          {
            id: 12,
            name: 'fourth Cast',
            src: CastAndCreative4
          },
          {
            id: 13,
            name: 'fourth Cast',
            src: CastAndCreative5
          },
          {
            id: 14,
            name: 'fourth Cast',
            src: CastAndCreative6
          }
        ],
        creatives: [
          {
            id: 13,
            name: 'first Creative',
            src: CastAndCreative5
          },
          {
            id: 14,
            name: 'second Creative',
            src: CastAndCreative6
          },
          {
            id: 15,
            name: 'third Creative',
            src: CastAndCreative7
          },
          {
            id: 16,
            name: 'fourth Creative',
            src: CastAndCreative8
          }
        ]
      }
    },
    5: {
      id: 5,
      name: 'film1917',
      year: 2019,
      mainImg: film1917PNG,
      posterImg: film1917PNG,
      rating: '18+',
      type: 'Cinema',
      place: 'Moscow cinema',
      duration: '2 hours',
      description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
      tickets: ['2020-02-20T13:30:00.000Z',
        '2020-02-04T15:30:00.000Z',
        '2020-02-06T17:30:00.000Z',
        '2020-02-08T15:30:00.000Z',
        '2020-02-10T15:30:00.000Z',
        '2020-02-12T16:30:00.000Z'
      ],
      media: [
        {
          id: 1,
          name: 'Joker 1',
          src: joker1
        },
        {
          id: 2,
          name: 'Joker 2',
          src: joker2
        },
        {
          id: 3,
          name: 'Joker 3',
          src: joker3
        },
        {
          id: 4,
          name: 'Joker 4',
          src: joker4
        },
        {
          id: 5,
          name: 'Joker 5',
          src: joker5
        }],
      recentBuzz: [
        {
          id: 1,
          title: 'Lorem Ipsum',
          description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
          src: recentBuzz1
        },
        {
          id: 2,
          title: 'Lorem Ipsum',
          description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
          src: recentBuzz2
        }
      ],
      reviews: [
        {
          id: 1,
          name: 'Eddie Vargas',
          position: 'movie critics',
          src: CriticsReviews1,
          review: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has'
        },
        {
          id: 2,
          name: 'Bill Gates',
          position: 'Founder of Microsoft',
          src: CriticsReviews3,
          review: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has'
        },
        {
          id: 3,
          name: 'Mark Zuckerberg',
          position: 'Founder of Facebook',
          src: CriticsReviews2,
          review: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has'
        }
      ],
      castAndCreatives: {
        cast: [
          {
            id: 9,
            name: 'first Cast',
            src: CastAndCreative1
          },
          {
            id: 10,
            name: 'second Cast',
            src: CastAndCreative2
          },
          {
            id: 11,
            name: 'third Cast',
            src: CastAndCreative3
          },
          {
            id: 12,
            name: 'fourth Cast',
            src: CastAndCreative4
          },
          {
            id: 13,
            name: 'fourth Cast',
            src: CastAndCreative5
          },
          {
            id: 14,
            name: 'fourth Cast',
            src: CastAndCreative6
          }
        ],
        creatives: [
          {
            id: 13,
            name: 'first Creative',
            src: CastAndCreative5
          },
          {
            id: 14,
            name: 'second Creative',
            src: CastAndCreative6
          },
          {
            id: 15,
            name: 'third Creative',
            src: CastAndCreative7
          },
          {
            id: 1,
            name: 'fourth Creative',
            src: CastAndCreative8
          }
        ]
      }
    },
    6: {
      id: 6,
      name: 'BirdsOfPrey',
      year: 2019,
      mainImg: BirdsOfPreyPNG,
      posterImg: BirdsOfPreyPNG,
      rating: '18+',
      type: 'Cinema',
      place: 'Moscow cinema',
      duration: '2 hours',
      description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
      tickets: ['2020-02-20T13:30:00.000Z',
        '2020-02-04T15:30:00.000Z',
        '2020-02-06T17:30:00.000Z',
        '2020-02-08T15:30:00.000Z',
        '2020-02-10T15:30:00.000Z',
        '2020-02-12T16:30:00.000Z'
      ],
      media: [
        {
          id: 1,
          name: 'Joker 1',
          src: joker1
        },
        {
          id: 2,
          name: 'Joker 2',
          src: joker2
        },
        {
          id: 3,
          name: 'Joker 3',
          src: joker3
        },
        {
          id: 4,
          name: 'Joker 4',
          src: joker4
        },
        {
          id: 5,
          name: 'Joker 5',
          src: joker5
        }],
      recentBuzz: [
        {
          id: 1,
          title: 'Lorem Ipsum',
          description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
          src: recentBuzz1
        },
        {
          id: 2,
          title: 'Lorem Ipsum',
          description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
          src: recentBuzz2
        }
      ],
      reviews: [
        {
          id: 1,
          name: 'Eddie Vargas',
          position: 'movie critics',
          src: CriticsReviews1,
          review: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has'
        },
        {
          id: 2,
          name: 'Bill Gates',
          position: 'Founder of Microsoft',
          src: CriticsReviews3,
          review: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has'
        },
        {
          id: 3,
          name: 'Mark Zuckerberg',
          position: 'Founder of Facebook',
          src: CriticsReviews2,
          review: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has'
        }
      ],
      castAndCreatives: {
        cast: [
          {
            id: 9,
            name: 'first Cast',
            src: CastAndCreative1
          },
          {
            id: 10,
            name: 'second Cast',
            src: CastAndCreative2
          },
          {
            id: 11,
            name: 'third Cast',
            src: CastAndCreative3
          },
          {
            id: 12,
            name: 'fourth Cast',
            src: CastAndCreative4
          },
          {
            id: 13,
            name: 'fourth Cast',
            src: CastAndCreative5
          },
          {
            id: 14,
            name: 'fourth Cast',
            src: CastAndCreative6
          }
        ],
        creatives: [
          {
            id: 13,
            name: 'first Creative',
            src: CastAndCreative5
          },
          {
            id: 14,
            name: 'second Creative',
            src: CastAndCreative6
          },
          {
            id: 15,
            name: 'third Creative',
            src: CastAndCreative7
          },
          {
            id: 1,
            name: 'fourth Creative',
            src: CastAndCreative8
          }
        ]
      }
    },
    7: {
      id: 7,
      name: 'Bombshel',
      year: 2019,
      mainImg: BombshelPNG,
      posterImg: BombshelPNG,
      rating: '18+',
      type: 'Cinema',
      place: 'Moscow cinema',
      duration: '2 hours',
      description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
      tickets: ['2020-02-20T13:30:00.000Z',
        '2020-02-04T15:30:00.000Z',
        '2020-02-06T17:30:00.000Z',
        '2020-02-08T15:30:00.000Z',
        '2020-02-10T15:30:00.000Z',
        '2020-02-12T16:30:00.000Z'
      ],
      media: [
        {
          id: 1,
          name: 'Joker 1',
          src: joker1
        },
        {
          id: 2,
          name: 'Joker 2',
          src: joker2
        },
        {
          id: 3,
          name: 'Joker 3',
          src: joker3
        },
        {
          id: 4,
          name: 'Joker 4',
          src: joker4
        },
        {
          id: 5,
          name: 'Joker 5',
          src: joker5
        }],
      recentBuzz: [
        {
          id: 1,
          title: 'Lorem Ipsum',
          description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
          src: recentBuzz1
        },
        {
          id: 2,
          title: 'Lorem Ipsum',
          description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
          src: recentBuzz2
        }
      ],
      reviews: [
        {
          id: 1,
          name: 'Eddie Vargas',
          position: 'movie critics',
          src: CriticsReviews1,
          review: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has'
        },
        {
          id: 2,
          name: 'Bill Gates',
          position: 'Founder of Microsoft',
          src: CriticsReviews3,
          review: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has'
        },
        {
          id: 3,
          name: 'Mark Zuckerberg',
          position: 'Founder of Facebook',
          src: CriticsReviews2,
          review: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has'
        }
      ],
      castAndCreatives: {
        cast: [
          {
            id: 9,
            name: 'first Cast',
            src: CastAndCreative1
          },
          {
            id: 10,
            name: 'second Cast',
            src: CastAndCreative2
          },
          {
            id: 11,
            name: 'third Cast',
            src: CastAndCreative3
          },
          {
            id: 12,
            name: 'fourth Cast',
            src: CastAndCreative4
          },
          {
            id: 13,
            name: 'fourth Cast',
            src: CastAndCreative5
          },
          {
            id: 14,
            name: 'fourth Cast',
            src: CastAndCreative6
          }
        ],
        creatives: [
          {
            id: 13,
            name: 'first Creative',
            src: CastAndCreative5
          },
          {
            id: 14,
            name: 'second Creative',
            src: CastAndCreative6
          },
          {
            id: 15,
            name: 'third Creative',
            src: CastAndCreative7
          },
          {
            id: 1,
            name: 'fourth Creative',
            src: CastAndCreative8
          }
        ]
      }
    },
    8: {
      id: 8,
      name: 'TheGentlemen',
      year: 2019,
      mainImg: TheGentlemen,
      posterImg: TheGentlemen,
      rating: '18+',
      type: 'Cinema',
      place: 'Moscow cinema',
      duration: '2 hours',
      description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
      tickets: ['2020-02-20T13:30:00.000Z',
        '2020-02-04T15:30:00.000Z',
        '2020-02-06T17:30:00.000Z',
        '2020-02-08T15:30:00.000Z',
        '2020-02-10T15:30:00.000Z',
        '2020-02-12T16:30:00.000Z'
      ],
      media: [
        {
          id: 1,
          name: 'Joker 1',
          src: joker1
        },
        {
          id: 2,
          name: 'Joker 2',
          src: joker2
        },
        {
          id: 3,
          name: 'Joker 3',
          src: joker3
        },
        {
          id: 4,
          name: 'Joker 4',
          src: joker4
        },
        {
          id: 5,
          name: 'Joker 5',
          src: joker5
        }],
      recentBuzz: [
        {
          id: 1,
          title: 'Lorem Ipsum',
          description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
          src: recentBuzz1
        },
        {
          id: 2,
          title: 'Lorem Ipsum',
          description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
          src: recentBuzz2
        }
      ],
      reviews: [
        {
          id: 1,
          name: 'Eddie Vargas',
          position: 'movie critics',
          src: CriticsReviews1,
          review: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has'
        },
        {
          id: 2,
          name: 'Bill Gates',
          position: 'Founder of Microsoft',
          src: CriticsReviews3,
          review: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has'
        },
        {
          id: 3,
          name: 'Mark Zuckerberg',
          position: 'Founder of Facebook',
          src: CriticsReviews2,
          review: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has'
        }
      ],
      castAndCreatives: {
        cast: [
          {
            id: 9,
            name: 'first Cast',
            src: CastAndCreative1
          },
          {
            id: 10,
            name: 'second Cast',
            src: CastAndCreative2
          },
          {
            id: 11,
            name: 'third Cast',
            src: CastAndCreative3
          },
          {
            id: 12,
            name: 'fourth Cast',
            src: CastAndCreative4
          },
          {
            id: 13,
            name: 'fourth Cast',
            src: CastAndCreative5
          },
          {
            id: 14,
            name: 'fourth Cast',
            src: CastAndCreative6
          }
        ],
        creatives: [
          {
            id: 13,
            name: 'first Creative',
            src: CastAndCreative5
          },
          {
            id: 14,
            name: 'second Creative',
            src: CastAndCreative6
          },
          {
            id: 15,
            name: 'third Creative',
            src: CastAndCreative7
          },
          {
            id: 1,
            name: 'fourth Creative',
            src: CastAndCreative8
          }
        ]
      }
    },
    9: {
      id: 9,
      name: 'ankochHyur',
      year: 2019,
      mainImg: ankochHyur,
      posterImg: ankochHyur,
      rating: '18+',
      type: 'Theatre',
      place: 'Kamerayin tatron',
      duration: '1 hours',
      description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
      tickets: ['2020-02-20T13:30:00.000Z',
        '2020-02-04T15:30:00.000Z',
        '2020-02-06T17:30:00.000Z',
        '2020-02-08T15:30:00.000Z',
        '2020-02-10T15:30:00.000Z',
        '2020-02-12T16:30:00.000Z'
      ],
      media: [
        {
          id: 1,
          name: 'Joker 1',
          src: joker1
        },
        {
          id: 2,
          name: 'Joker 2',
          src: joker2
        },
        {
          id: 3,
          name: 'Joker 3',
          src: joker3
        },
        {
          id: 4,
          name: 'Joker 4',
          src: joker4
        },
        {
          id: 5,
          name: 'Joker 5',
          src: joker5
        }],
      recentBuzz: [
        {
          id: 1,
          title: 'Lorem Ipsum',
          description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
          src: recentBuzz1
        },
        {
          id: 2,
          title: 'Lorem Ipsum',
          description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
          src: recentBuzz2
        }
      ],
      reviews: [
        {
          id: 1,
          name: 'Eddie Vargas',
          position: 'movie critics',
          src: CriticsReviews1,
          review: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has'
        },
        {
          id: 2,
          name: 'Bill Gates',
          position: 'Founder of Microsoft',
          src: CriticsReviews3,
          review: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has'
        },
        {
          id: 3,
          name: 'Mark Zuckerberg',
          position: 'Founder of Facebook',
          src: CriticsReviews2,
          review: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has'
        }
      ],
      castAndCreatives: {
        cast: [
          {
            id: 9,
            name: 'first Cast',
            src: CastAndCreative1
          },
          {
            id: 10,
            name: 'second Cast',
            src: CastAndCreative2
          },
          {
            id: 11,
            name: 'third Cast',
            src: CastAndCreative3
          },
          {
            id: 12,
            name: 'fourth Cast',
            src: CastAndCreative4
          },
          {
            id: 13,
            name: 'fourth Cast',
            src: CastAndCreative5
          },
          {
            id: 14,
            name: 'fourth Cast',
            src: CastAndCreative6
          }
        ],
        creatives: [
          {
            id: 13,
            name: 'first Creative',
            src: CastAndCreative5
          },
          {
            id: 14,
            name: 'second Creative',
            src: CastAndCreative6
          },
          {
            id: 15,
            name: 'third Creative',
            src: CastAndCreative7
          },
          {
            id: 1,
            name: 'fourth Creative',
            src: CastAndCreative8
          }
        ]
      }
    },
    10: {
      id: 10,
      name: 'grig',
      year: 2019,
      mainImg: grig,
      posterImg: grig,
      rating: '18+',
      type: 'Theatre',
      place: 'Kamerayin tatron',
      duration: '1 hours',
      description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
      tickets: ['2020-02-20T13:30:00.000Z',
        '2020-02-04T15:30:00.000Z',
        '2020-02-06T17:30:00.000Z',
        '2020-02-08T15:30:00.000Z',
        '2020-02-10T15:30:00.000Z',
        '2020-02-12T16:30:00.000Z'
      ],
      media: [
        {
          id: 1,
          name: 'Joker 1',
          src: joker1
        },
        {
          id: 2,
          name: 'Joker 2',
          src: joker2
        },
        {
          id: 3,
          name: 'Joker 3',
          src: joker3
        },
        {
          id: 4,
          name: 'Joker 4',
          src: joker4
        },
        {
          id: 5,
          name: 'Joker 5',
          src: joker5
        }],
      recentBuzz: [
        {
          id: 1,
          title: 'Lorem Ipsum',
          description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
          src: recentBuzz1
        },
        {
          id: 2,
          title: 'Lorem Ipsum',
          description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
          src: recentBuzz2
        }
      ],
      reviews: [
        {
          id: 1,
          name: 'Eddie Vargas',
          position: 'movie critics',
          src: CriticsReviews1,
          review: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has'
        },
        {
          id: 2,
          name: 'Bill Gates',
          position: 'Founder of Microsoft',
          src: CriticsReviews3,
          review: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has'
        },
        {
          id: 3,
          name: 'Mark Zuckerberg',
          position: 'Founder of Facebook',
          src: CriticsReviews2,
          review: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has'
        }
      ],
      castAndCreatives: {
        cast: [
          {
            id: 9,
            name: 'first Cast',
            src: CastAndCreative1
          },
          {
            id: 10,
            name: 'second Cast',
            src: CastAndCreative2
          },
          {
            id: 11,
            name: 'third Cast',
            src: CastAndCreative3
          },
          {
            id: 12,
            name: 'fourth Cast',
            src: CastAndCreative4
          },
          {
            id: 13,
            name: 'fourth Cast',
            src: CastAndCreative5
          },
          {
            id: 14,
            name: 'fourth Cast',
            src: CastAndCreative6
          }
        ],
        creatives: [
          {
            id: 13,
            name: 'first Creative',
            src: CastAndCreative5
          },
          {
            id: 14,
            name: 'second Creative',
            src: CastAndCreative6
          },
          {
            id: 15,
            name: 'third Creative',
            src: CastAndCreative7
          },
          {
            id: 1,
            name: 'fourth Creative',
            src: CastAndCreative8
          }
        ]
      }
    },
    11: {
      id: 11,
      name: 'kamakorAxjik',
      year: 2019,
      mainImg: kamakorAxjik,
      posterImg: kamakorAxjik,
      rating: '18+',
      type: 'Theatre',
      place: 'Kamerayin tatron',
      duration: '1 hours',
      description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
      tickets: ['2020-02-20T13:30:00.000Z',
        '2020-02-04T15:30:00.000Z',
        '2020-02-06T17:30:00.000Z',
        '2020-02-08T15:30:00.000Z',
        '2020-02-10T15:30:00.000Z',
        '2020-02-12T16:30:00.000Z'
      ],
      media: [
        {
          id: 1,
          name: 'Joker 1',
          src: joker1
        },
        {
          id: 2,
          name: 'Joker 2',
          src: joker2
        },
        {
          id: 3,
          name: 'Joker 3',
          src: joker3
        },
        {
          id: 4,
          name: 'Joker 4',
          src: joker4
        },
        {
          id: 5,
          name: 'Joker 5',
          src: joker5
        }],
      recentBuzz: [
        {
          id: 1,
          title: 'Lorem Ipsum',
          description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
          src: recentBuzz1
        },
        {
          id: 2,
          title: 'Lorem Ipsum',
          description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
          src: recentBuzz2
        }
      ],
      reviews: [
        {
          id: 1,
          name: 'Eddie Vargas',
          position: 'movie critics',
          src: CriticsReviews1,
          review: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has'
        },
        {
          id: 2,
          name: 'Bill Gates',
          position: 'Founder of Microsoft',
          src: CriticsReviews3,
          review: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has'
        },
        {
          id: 3,
          name: 'Mark Zuckerberg',
          position: 'Founder of Facebook',
          src: CriticsReviews2,
          review: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has'
        }
      ],
      castAndCreatives: {
        cast: [
          {
            id: 9,
            name: 'first Cast',
            src: CastAndCreative1
          },
          {
            id: 10,
            name: 'second Cast',
            src: CastAndCreative2
          },
          {
            id: 11,
            name: 'third Cast',
            src: CastAndCreative3
          },
          {
            id: 12,
            name: 'fourth Cast',
            src: CastAndCreative4
          },
          {
            id: 13,
            name: 'fourth Cast',
            src: CastAndCreative5
          },
          {
            id: 14,
            name: 'fourth Cast',
            src: CastAndCreative6
          }
        ],
        creatives: [
          {
            id: 13,
            name: 'first Creative',
            src: CastAndCreative5
          },
          {
            id: 14,
            name: 'second Creative',
            src: CastAndCreative6
          },
          {
            id: 15,
            name: 'third Creative',
            src: CastAndCreative7
          },
          {
            id: 1,
            name: 'fourth Creative',
            src: CastAndCreative8
          }
        ]
      }
    },
    12: {
      id: 12,
      name: 'noMen',
      year: 2019,
      mainImg: noMen,
      posterImg: noMen,
      rating: '18+',
      type: 'Theatre',
      place: 'Kamerayin tatron',
      duration: '1 hours',
      description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
      tickets: ['2020-02-20T13:30:00.000Z',
        '2020-02-04T15:30:00.000Z',
        '2020-02-06T17:30:00.000Z',
        '2020-02-08T15:30:00.000Z',
        '2020-02-10T15:30:00.000Z',
        '2020-02-12T16:30:00.000Z'
      ],
      media: [
        {
          id: 1,
          name: 'Joker 1',
          src: joker1
        },
        {
          id: 2,
          name: 'Joker 2',
          src: joker2
        },
        {
          id: 3,
          name: 'Joker 3',
          src: joker3
        },
        {
          id: 4,
          name: 'Joker 4',
          src: joker4
        },
        {
          id: 5,
          name: 'Joker 5',
          src: joker5
        }],
      recentBuzz: [
        {
          id: 1,
          title: 'Lorem Ipsum',
          description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
          src: recentBuzz1
        },
        {
          id: 2,
          title: 'Lorem Ipsum',
          description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
          src: recentBuzz2
        }
      ],
      reviews: [
        {
          id: 1,
          name: 'Eddie Vargas',
          position: 'movie critics',
          src: CriticsReviews1,
          review: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has'
        },
        {
          id: 2,
          name: 'Bill Gates',
          position: 'Founder of Microsoft',
          src: CriticsReviews3,
          review: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has'
        },
        {
          id: 3,
          name: 'Mark Zuckerberg',
          position: 'Founder of Facebook',
          src: CriticsReviews2,
          review: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has'
        }
      ],
      castAndCreatives: {
        cast: [
          {
            id: 9,
            name: 'first Cast',
            src: CastAndCreative1
          },
          {
            id: 10,
            name: 'second Cast',
            src: CastAndCreative2
          },
          {
            id: 11,
            name: 'third Cast',
            src: CastAndCreative3
          },
          {
            id: 12,
            name: 'fourth Cast',
            src: CastAndCreative4
          },
          {
            id: 13,
            name: 'fourth Cast',
            src: CastAndCreative5
          },
          {
            id: 14,
            name: 'fourth Cast',
            src: CastAndCreative6
          }
        ],
        creatives: [
          {
            id: 13,
            name: 'first Creative',
            src: CastAndCreative5
          },
          {
            id: 14,
            name: 'second Creative',
            src: CastAndCreative6
          },
          {
            id: 15,
            name: 'third Creative',
            src: CastAndCreative7
          },
          {
            id: 1,
            name: 'fourth Creative',
            src: CastAndCreative8
          }
        ]
      }
    },
    13: {
      id: 13,
      name: 'vache',
      year: 2019,
      mainImg: vache,
      posterImg: vache,
      rating: '18+',
      type: 'Theatre',
      place: 'Kamerayin tatron',
      duration: '1 hours',
      description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
      tickets: ['2020-02-20T13:30:00.000Z',
        '2020-02-04T15:30:00.000Z',
        '2020-02-06T17:30:00.000Z',
        '2020-02-08T15:30:00.000Z',
        '2020-02-10T15:30:00.000Z',
        '2020-02-12T16:30:00.000Z'
      ],
      media: [
        {
          id: 1,
          name: 'Joker 1',
          src: joker1
        },
        {
          id: 2,
          name: 'Joker 2',
          src: joker2
        },
        {
          id: 3,
          name: 'Joker 3',
          src: joker3
        },
        {
          id: 4,
          name: 'Joker 4',
          src: joker4
        },
        {
          id: 5,
          name: 'Joker 5',
          src: joker5
        }],
      recentBuzz: [
        {
          id: 1,
          title: 'Lorem Ipsum',
          description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
          src: recentBuzz1
        },
        {
          id: 2,
          title: 'Lorem Ipsum',
          description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
          src: recentBuzz2
        }
      ],
      reviews: [
        {
          id: 1,
          name: 'Eddie Vargas',
          position: 'movie critics',
          src: CriticsReviews1,
          review: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has'
        },
        {
          id: 2,
          name: 'Bill Gates',
          position: 'Founder of Microsoft',
          src: CriticsReviews3,
          review: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has'
        },
        {
          id: 3,
          name: 'Mark Zuckerberg',
          position: 'Founder of Facebook',
          src: CriticsReviews2,
          review: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has'
        }
      ],
      castAndCreatives: {
        cast: [
          {
            id: 9,
            name: 'first Cast',
            src: CastAndCreative1
          },
          {
            id: 10,
            name: 'second Cast',
            src: CastAndCreative2
          },
          {
            id: 11,
            name: 'third Cast',
            src: CastAndCreative3
          },
          {
            id: 12,
            name: 'fourth Cast',
            src: CastAndCreative4
          },
          {
            id: 13,
            name: 'fourth Cast',
            src: CastAndCreative5
          },
          {
            id: 14,
            name: 'fourth Cast',
            src: CastAndCreative6
          }
        ],
        creatives: [
          {
            id: 13,
            name: 'first Creative',
            src: CastAndCreative5
          },
          {
            id: 14,
            name: 'second Creative',
            src: CastAndCreative6
          },
          {
            id: 15,
            name: 'third Creative',
            src: CastAndCreative7
          },
          {
            id: 1,
            name: 'fourth Creative',
            src: CastAndCreative8
          }
        ]
      }
    },
    14: {
      id: 14,
      name: 'hamerg1',
      year: 2019,
      mainImg: hamerg1,
      posterImg: hamerg1,
      rating: '18+',
      type: 'Theatre',
      place: 'Kamerayin tatron',
      duration: '1 hours',
      description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
      tickets: ['2020-02-20T13:30:00.000Z',
        '2020-02-04T15:30:00.000Z',
        '2020-02-06T17:30:00.000Z',
        '2020-02-08T15:30:00.000Z',
        '2020-02-10T15:30:00.000Z',
        '2020-02-12T16:30:00.000Z'
      ],
      media: [
        {
          id: 1,
          name: 'Joker 1',
          src: joker1
        },
        {
          id: 2,
          name: 'Joker 2',
          src: joker2
        },
        {
          id: 3,
          name: 'Joker 3',
          src: joker3
        },
        {
          id: 4,
          name: 'Joker 4',
          src: joker4
        },
        {
          id: 5,
          name: 'Joker 5',
          src: joker5
        }],
      recentBuzz: [
        {
          id: 1,
          title: 'Lorem Ipsum',
          description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
          src: recentBuzz1
        },
        {
          id: 2,
          title: 'Lorem Ipsum',
          description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
          src: recentBuzz2
        }
      ],
      reviews: [
        {
          id: 1,
          name: 'Eddie Vargas',
          position: 'movie critics',
          src: CriticsReviews1,
          review: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has'
        },
        {
          id: 2,
          name: 'Bill Gates',
          position: 'Founder of Microsoft',
          src: CriticsReviews3,
          review: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has'
        },
        {
          id: 3,
          name: 'Mark Zuckerberg',
          position: 'Founder of Facebook',
          src: CriticsReviews2,
          review: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has'
        }
      ],
      castAndCreatives: {
        cast: [
          {
            id: 9,
            name: 'first Cast',
            src: CastAndCreative1
          },
          {
            id: 10,
            name: 'second Cast',
            src: CastAndCreative2
          },
          {
            id: 11,
            name: 'third Cast',
            src: CastAndCreative3
          },
          {
            id: 12,
            name: 'fourth Cast',
            src: CastAndCreative4
          },
          {
            id: 13,
            name: 'fourth Cast',
            src: CastAndCreative5
          },
          {
            id: 14,
            name: 'fourth Cast',
            src: CastAndCreative6
          }
        ],
        creatives: [
          {
            id: 13,
            name: 'first Creative',
            src: CastAndCreative5
          },
          {
            id: 14,
            name: 'second Creative',
            src: CastAndCreative6
          },
          {
            id: 15,
            name: 'third Creative',
            src: CastAndCreative7
          },
          {
            id: 1,
            name: 'fourth Creative',
            src: CastAndCreative8
          }
        ]
      }
    },
    15: {
      id: 15,
      name: 'hamerg2',
      year: 2019,
      mainImg: hamerg2,
      posterImg: hamerg2,
      rating: '18+',
      type: 'Theatre',
      place: 'Kamerayin tatron',
      duration: '1 hours',
      description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
      tickets: ['2020-02-20T13:30:00.000Z',
        '2020-02-04T15:30:00.000Z',
        '2020-02-06T17:30:00.000Z',
        '2020-02-08T15:30:00.000Z',
        '2020-02-10T15:30:00.000Z',
        '2020-02-12T16:30:00.000Z'
      ],
      media: [
        {
          id: 1,
          name: 'Joker 1',
          src: joker1
        },
        {
          id: 2,
          name: 'Joker 2',
          src: joker2
        },
        {
          id: 3,
          name: 'Joker 3',
          src: joker3
        },
        {
          id: 4,
          name: 'Joker 4',
          src: joker4
        },
        {
          id: 5,
          name: 'Joker 5',
          src: joker5
        }],
      recentBuzz: [
        {
          id: 1,
          title: 'Lorem Ipsum',
          description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
          src: recentBuzz1
        },
        {
          id: 2,
          title: 'Lorem Ipsum',
          description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
          src: recentBuzz2
        }
      ],
      reviews: [
        {
          id: 1,
          name: 'Eddie Vargas',
          position: 'movie critics',
          src: CriticsReviews1,
          review: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has'
        },
        {
          id: 2,
          name: 'Bill Gates',
          position: 'Founder of Microsoft',
          src: CriticsReviews3,
          review: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has'
        },
        {
          id: 3,
          name: 'Mark Zuckerberg',
          position: 'Founder of Facebook',
          src: CriticsReviews2,
          review: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has'
        }
      ],
      castAndCreatives: {
        cast: [
          {
            id: 9,
            name: 'first Cast',
            src: CastAndCreative1
          },
          {
            id: 10,
            name: 'second Cast',
            src: CastAndCreative2
          },
          {
            id: 11,
            name: 'third Cast',
            src: CastAndCreative3
          },
          {
            id: 12,
            name: 'fourth Cast',
            src: CastAndCreative4
          },
          {
            id: 13,
            name: 'fourth Cast',
            src: CastAndCreative5
          },
          {
            id: 14,
            name: 'fourth Cast',
            src: CastAndCreative6
          }
        ],
        creatives: [
          {
            id: 13,
            name: 'first Creative',
            src: CastAndCreative5
          },
          {
            id: 14,
            name: 'second Creative',
            src: CastAndCreative6
          },
          {
            id: 15,
            name: 'third Creative',
            src: CastAndCreative7
          },
          {
            id: 16,
            name: 'fourth Creative',
            src: CastAndCreative8
          }
        ]
      }
    },
    16: {
      id: 16,
      name: 'hamerg3',
      year: 2019,
      mainImg: hamerg3,
      posterImg: hamerg3,
      rating: '18+',
      type: 'Theatre',
      place: 'Kamerayin tatron',
      duration: '1 hours',
      description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
      tickets: ['2020-02-20T13:30:00.000Z',
        '2020-02-04T15:30:00.000Z',
        '2020-02-06T17:30:00.000Z',
        '2020-02-08T15:30:00.000Z',
        '2020-02-10T15:30:00.000Z',
        '2020-02-12T16:30:00.000Z'
      ],
      media: [
        {
          id: 1,
          name: 'Joker 1',
          src: joker1
        },
        {
          id: 2,
          name: 'Joker 2',
          src: joker2
        },
        {
          id: 3,
          name: 'Joker 3',
          src: joker3
        },
        {
          id: 4,
          name: 'Joker 4',
          src: joker4
        },
        {
          id: 5,
          name: 'Joker 5',
          src: joker5
        }],
      recentBuzz: [
        {
          id: 1,
          title: 'Lorem Ipsum',
          description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
          src: recentBuzz1
        },
        {
          id: 2,
          title: 'Lorem Ipsum',
          description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
          src: recentBuzz2
        }
      ],
      reviews: [
        {
          id: 1,
          name: 'Eddie Vargas',
          position: 'movie critics',
          src: CriticsReviews1,
          review: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has'
        },
        {
          id: 2,
          name: 'Bill Gates',
          position: 'Founder of Microsoft',
          src: CriticsReviews3,
          review: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has'
        },
        {
          id: 3,
          name: 'Mark Zuckerberg',
          position: 'Founder of Facebook',
          src: CriticsReviews2,
          review: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has'
        }
      ],
      castAndCreatives: {
        cast: [
          {
            id: 9,
            name: 'first Cast',
            src: CastAndCreative1
          },
          {
            id: 10,
            name: 'second Cast',
            src: CastAndCreative2
          },
          {
            id: 11,
            name: 'third Cast',
            src: CastAndCreative3
          },
          {
            id: 12,
            name: 'fourth Cast',
            src: CastAndCreative4
          },
          {
            id: 13,
            name: 'fourth Cast',
            src: CastAndCreative5
          },
          {
            id: 14,
            name: 'fourth Cast',
            src: CastAndCreative6
          }
        ],
        creatives: [
          {
            id: 13,
            name: 'first Creative',
            src: CastAndCreative5
          },
          {
            id: 14,
            name: 'second Creative',
            src: CastAndCreative6
          },
          {
            id: 15,
            name: 'third Creative',
            src: CastAndCreative7
          },
          {
            id: 1,
            name: 'fourth Creative',
            src: CastAndCreative8
          }
        ]
      }
    },
    17: {
      id: 17,
      name: 'hamerg4',
      year: 2019,
      mainImg: hamerg4,
      posterImg: hamerg4,
      rating: '18+',
      type: 'Theatre',
      place: 'Kamerayin tatron',
      duration: '1 hours',
      description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
      tickets: ['2020-02-20T13:30:00.000Z',
        '2020-02-04T15:30:00.000Z',
        '2020-02-06T17:30:00.000Z',
        '2020-02-08T15:30:00.000Z',
        '2020-02-10T15:30:00.000Z',
        '2020-02-12T16:30:00.000Z'
      ],
      media: [
        {
          id: 1,
          name: 'Joker 1',
          src: joker1
        },
        {
          id: 2,
          name: 'Joker 2',
          src: joker2
        },
        {
          id: 3,
          name: 'Joker 3',
          src: joker3
        },
        {
          id: 4,
          name: 'Joker 4',
          src: joker4
        },
        {
          id: 5,
          name: 'Joker 5',
          src: joker5
        }],
      recentBuzz: [
        {
          id: 1,
          title: 'Lorem Ipsum',
          description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
          src: recentBuzz1
        },
        {
          id: 2,
          title: 'Lorem Ipsum',
          description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
          src: recentBuzz2
        }
      ],
      reviews: [
        {
          id: 1,
          name: 'Eddie Vargas',
          position: 'movie critics',
          src: CriticsReviews1,
          review: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has'
        },
        {
          id: 2,
          name: 'Bill Gates',
          position: 'Founder of Microsoft',
          src: CriticsReviews3,
          review: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has'
        },
        {
          id: 3,
          name: 'Mark Zuckerberg',
          position: 'Founder of Facebook',
          src: CriticsReviews2,
          review: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has'
        }
      ],
      castAndCreatives: {
        cast: [
          {
            id: 9,
            name: 'first Cast',
            src: CastAndCreative1
          },
          {
            id: 10,
            name: 'second Cast',
            src: CastAndCreative2
          },
          {
            id: 11,
            name: 'third Cast',
            src: CastAndCreative3
          },
          {
            id: 12,
            name: 'fourth Cast',
            src: CastAndCreative4
          },
          {
            id: 13,
            name: 'fourth Cast',
            src: CastAndCreative5
          },
          {
            id: 14,
            name: 'fourth Cast',
            src: CastAndCreative6
          }
        ],
        creatives: [
          {
            id: 13,
            name: 'first Creative',
            src: CastAndCreative5
          },
          {
            id: 14,
            name: 'second Creative',
            src: CastAndCreative6
          },
          {
            id: 15,
            name: 'third Creative',
            src: CastAndCreative7
          },
          {
            id: 1,
            name: 'fourth Creative',
            src: CastAndCreative8
          }
        ]
      }
    },
    18: {
      id: 18,
      name: 'hamerg5',
      year: 2019,
      mainImg: hamerg5,
      posterImg: hamerg5,
      rating: '18+',
      type: 'Theatre',
      place: 'Kamerayin tatron',
      duration: '1 hours',
      description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
      tickets: ['2020-02-20T13:30:00.000Z',
        '2020-02-04T15:30:00.000Z',
        '2020-02-06T17:30:00.000Z',
        '2020-02-08T15:30:00.000Z',
        '2020-02-10T15:30:00.000Z',
        '2020-02-12T16:30:00.000Z'
      ],
      media: [
        {
          id: 1,
          name: 'Joker 1',
          src: joker1
        },
        {
          id: 2,
          name: 'Joker 2',
          src: joker2
        },
        {
          id: 3,
          name: 'Joker 3',
          src: joker3
        },
        {
          id: 4,
          name: 'Joker 4',
          src: joker4
        },
        {
          id: 5,
          name: 'Joker 5',
          src: joker5
        }],
      recentBuzz: [
        {
          id: 1,
          title: 'Lorem Ipsum',
          description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
          src: recentBuzz1
        },
        {
          id: 2,
          title: 'Lorem Ipsum',
          description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
          src: recentBuzz2
        }
      ],
      reviews: [
        {
          id: 1,
          name: 'Eddie Vargas',
          position: 'movie critics',
          src: CriticsReviews1,
          review: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has'
        },
        {
          id: 2,
          name: 'Bill Gates',
          position: 'Founder of Microsoft',
          src: CriticsReviews3,
          review: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has'
        },
        {
          id: 3,
          name: 'Mark Zuckerberg',
          position: 'Founder of Facebook',
          src: CriticsReviews2,
          review: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has'
        }
      ],
      castAndCreatives: {
        cast: [
          {
            id: 9,
            name: 'first Cast',
            src: CastAndCreative1
          },
          {
            id: 10,
            name: 'second Cast',
            src: CastAndCreative2
          },
          {
            id: 11,
            name: 'third Cast',
            src: CastAndCreative3
          },
          {
            id: 12,
            name: 'fourth Cast',
            src: CastAndCreative4
          },
          {
            id: 13,
            name: 'fourth Cast',
            src: CastAndCreative5
          },
          {
            id: 14,
            name: 'fourth Cast',
            src: CastAndCreative6
          }
        ],
        creatives: [
          {
            id: 13,
            name: 'first Creative',
            src: CastAndCreative5
          },
          {
            id: 14,
            name: 'second Creative',
            src: CastAndCreative6
          },
          {
            id: 15,
            name: 'third Creative',
            src: CastAndCreative7
          },
          {
            id: 1,
            name: 'fourth Creative',
            src: CastAndCreative8
          }
        ]
      }
    },
    19: {
      id: 19,
      name: 'hamerg6',
      year: 2019,
      mainImg: hamerg6,
      posterImg: hamerg6,
      rating: '18+',
      type: 'Theatre',
      place: 'Kamerayin tatron',
      duration: '1 hours',
      description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
      tickets: ['2020-02-20T13:30:00.000Z',
        '2020-02-04T15:30:00.000Z',
        '2020-02-06T17:30:00.000Z',
        '2020-02-08T15:30:00.000Z',
        '2020-02-10T15:30:00.000Z',
        '2020-02-12T16:30:00.000Z'
      ],
      media: [
        {
          id: 1,
          name: 'Joker 1',
          src: joker1
        },
        {
          id: 2,
          name: 'Joker 2',
          src: joker2
        },
        {
          id: 3,
          name: 'Joker 3',
          src: joker3
        },
        {
          id: 4,
          name: 'Joker 4',
          src: joker4
        },
        {
          id: 5,
          name: 'Joker 5',
          src: joker5
        }],
      recentBuzz: [
        {
          id: 1,
          title: 'Lorem Ipsum',
          description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
          src: recentBuzz1
        },
        {
          id: 2,
          title: 'Lorem Ipsum',
          description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
          src: recentBuzz2
        }
      ],
      reviews: [
        {
          id: 1,
          name: 'Eddie Vargas',
          position: 'movie critics',
          src: CriticsReviews1,
          review: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has'
        },
        {
          id: 2,
          name: 'Bill Gates',
          position: 'Founder of Microsoft',
          src: CriticsReviews3,
          review: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has'
        },
        {
          id: 3,
          name: 'Mark Zuckerberg',
          position: 'Founder of Facebook',
          src: CriticsReviews2,
          review: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has'
        }
      ],
      castAndCreatives: {
        cast: [
          {
            id: 9,
            name: 'first Cast',
            src: CastAndCreative1
          },
          {
            id: 10,
            name: 'second Cast',
            src: CastAndCreative2
          },
          {
            id: 11,
            name: 'third Cast',
            src: CastAndCreative3
          },
          {
            id: 12,
            name: 'fourth Cast',
            src: CastAndCreative4
          },
          {
            id: 13,
            name: 'fourth Cast',
            src: CastAndCreative5
          },
          {
            id: 14,
            name: 'fourth Cast',
            src: CastAndCreative6
          }
        ],
        creatives: [
          {
            id: 13,
            name: 'first Creative',
            src: CastAndCreative5
          },
          {
            id: 14,
            name: 'second Creative',
            src: CastAndCreative6
          },
          {
            id: 15,
            name: 'third Creative',
            src: CastAndCreative7
          },
          {
            id: 1,
            name: 'fourth Creative',
            src: CastAndCreative8
          }
        ]
      }
    },
    20: {
      id: 20,
      name: 'cirk',
      year: 2019,
      mainImg: cirk,
      posterImg: cirk,
      rating: '18+',
      type: 'Theatre',
      place: 'Kamerayin tatron',
      duration: '1 hours',
      description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
      tickets: ['2020-02-20T13:30:00.000Z',
        '2020-02-04T15:30:00.000Z',
        '2020-02-06T17:30:00.000Z',
        '2020-02-08T15:30:00.000Z',
        '2020-02-10T15:30:00.000Z',
        '2020-02-12T16:30:00.000Z'
      ],
      media: [
        {
          id: 1,
          name: 'Joker 1',
          src: joker1
        },
        {
          id: 2,
          name: 'Joker 2',
          src: joker2
        },
        {
          id: 3,
          name: 'Joker 3',
          src: joker3
        },
        {
          id: 4,
          name: 'Joker 4',
          src: joker4
        },
        {
          id: 5,
          name: 'Joker 5',
          src: joker5
        }],
      recentBuzz: [
        {
          id: 1,
          title: 'Lorem Ipsum',
          description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
          src: recentBuzz1
        },
        {
          id: 2,
          title: 'Lorem Ipsum',
          description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
          src: recentBuzz2
        }
      ],
      reviews: [
        {
          id: 1,
          name: 'Eddie Vargas',
          position: 'movie critics',
          src: CriticsReviews1,
          review: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has'
        },
        {
          id: 2,
          name: 'Bill Gates',
          position: 'Founder of Microsoft',
          src: CriticsReviews3,
          review: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has'
        },
        {
          id: 3,
          name: 'Mark Zuckerberg',
          position: 'Founder of Facebook',
          src: CriticsReviews2,
          review: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has'
        }
      ],
      castAndCreatives: {
        cast: [
          {
            id: 9,
            name: 'first Cast',
            src: CastAndCreative1
          },
          {
            id: 10,
            name: 'second Cast',
            src: CastAndCreative2
          },
          {
            id: 11,
            name: 'third Cast',
            src: CastAndCreative3
          },
          {
            id: 12,
            name: 'fourth Cast',
            src: CastAndCreative4
          },
          {
            id: 13,
            name: 'fourth Cast',
            src: CastAndCreative5
          },
          {
            id: 14,
            name: 'fourth Cast',
            src: CastAndCreative6
          }
        ],
        creatives: [
          {
            id: 13,
            name: 'first Creative',
            src: CastAndCreative5
          },
          {
            id: 14,
            name: 'second Creative',
            src: CastAndCreative6
          },
          {
            id: 15,
            name: 'third Creative',
            src: CastAndCreative7
          },
          {
            id: 1,
            name: 'fourth Creative',
            src: CastAndCreative8
          }
        ]
      }
    }
  },
  allEventDataForMainPages: {
    Cinema: [
      {
        id: 1,
        name: 'fear',
        src: fearPNG
      },
      {
        id: 2,
        name: 'terror',
        src: terrorPNG
      },
      {
        id: 3,
        name: 'lodge',
        src: lodgePNG
      },
      {
        id: 4,
        name: 'preacher',
        src: preacherPNG
      },
      {
        id: 5,
        name: 'film1917',
        src: film1917PNG
      },
      {
        id: 6,
        name: 'BirdsOfPrey',
        src: BirdsOfPreyPNG
      },
      {
        id: 7,
        name: 'Bombshel',
        src: BombshelPNG
      },
      {
        id: 8,
        name: 'TheGentlemen',
        src: TheGentlemen
      }
    ],
    Theatre: [
      {
        id: 9,
        name: 'ankochHyur',
        src: ankochHyur
      },
      {
        id: 10,
        name: 'grig',
        src: grig
      },
      {
        id: 11,
        name: 'kamakorAxjik',
        src: kamakorAxjik
      },
      {
        id: 12,
        name: 'noMen',
        src: noMen
      },
      {
        id: 13,
        name: 'vache',
        src: vache
      }
    ],
    Concert: [
      {
        id: 14,
        name: 'hamerg1',
        src: hamerg1
      },
      {
        id: 15,
        name: 'hamerg2',
        src: hamerg2
      },
      {
        id: 16,
        name: 'hamerg3',
        src: hamerg3
      },
      {
        id: 17,
        name: 'hamerg4',
        src: hamerg4
      },
      {
        id: 18,
        name: 'hamerg5',
        src: hamerg5
      },
      {
        id: 19,
        name: 'hamerg6',
        src: hamerg6
      }
    ],
    More: [
      {
        id: 20,
        name: 'cirk',
        src: cirk
      }
    ]
  }
}
