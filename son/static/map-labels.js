const states = [
    {
        'name': 'England',
        'latitude': 52.53102139908722,
        'longitude': -1.2649061999999998,
        'display': false
    },
    {
        'name': 'Scotland',
        'latitude': 56.786111200151275,
        'longitude': -4.1140518,
        'display': false
    },
    {
        'name': 'Wales',
        'latitude': 52.292811599096915,
        'longitude': -3.73893,
        'display': false
    },
    {
        'name': 'Northern Ireland',
        'latitude': 54.62,
        'longitude': -6.41,
        'display': false
    },
    {
        'name': 'Albania',
        'latitude': 41.153332,
        'longitude': 20.168331
    },
    {
        'name': 'Armenia',
        'latitude': 40.069099,
        'longitude': 45.038189
    },
    {
        'name': 'Austria',
        'latitude': 47.516231,
        'longitude': 14.550072
    },
    {
        'name': 'Bosnia and Herzegovina',
        'latitude': 43.915886,
        'longitude': 17.679076
    },
    {
        'name': 'Belgium',
        'latitude': 50.503887,
        'longitude': 4.469936
    },
    {
        'name': 'Bulgaria',
        'latitude': 42.733883,
        'longitude': 25.48583
    },
    {
        'name': 'Switzerland',
        'latitude': 46.818188,
        'longitude': 8.227512
    },
    {
        'name': 'Czech Republic',
        'latitude': 49.817492,
        'longitude': 15.472962
    },
    {
        'name': 'Germany',
        'latitude': 51.165691,
        'longitude': 10.451526
    },
    {
        'name': 'Denmark',
        'latitude': 56.26392,
        'longitude': 9.501785
    },
    {
        'name': 'Spain',
        'latitude': 40.463667,
        'longitude': -3.74922
    },
    {
        'name': 'Finland',
        'latitude': 61.92411,
        'longitude': 25.748151
    },
    {
        'name': 'Faroe Islands',
        'latitude': 61.892635,
        'longitude': -6.911806
    },
    {
        'name': 'France',
        'latitude': 46.227638,
        'longitude': 2.213749
    },
    {
        'name': 'United Kingdom',
        'latitude': 55.378051,
        'longitude': -3.435973,
        'display': false
    },
    {
        'name': 'Guernsey',
        'latitude': 49.465691,
        'longitude': -2.585278
    },
    {
        'name': 'Gibraltar',
        'latitude': 36.137741,
        'longitude': -5.345374
    },
    {
        'name': 'Greece',
        'latitude': 39.074208,
        'longitude': 21.824312
    },
    {
        'name': 'Croatia',
        'latitude': 45.1,
        'longitude': 15.2
    },
    {
        'name': 'Hungary',
        'latitude': 47.162494,
        'longitude': 19.503304
    },
    {
        'name': 'Ireland',
        'latitude': 53.41291,
        'longitude': -8.24389
    },
    {
        'name': 'Isle of Man',
        'latitude': 54.236107,
        'longitude': -4.548056,
        'display': false
    },
    {
        'name': 'Iceland',
        'latitude': 64.963051,
        'longitude': -19.020835
    },
    {
        'name': 'Italy',
        'latitude': 41.87194,
        'longitude': 12.56738
    },
    {
        'name': 'Jersey',
        'latitude': 49.214439,
        'longitude': -2.13125
    },
    {
        'name': 'Liechtenstein',
        'latitude': 47.166,
        'longitude': 9.555373
    },
    {
        'name': 'Lithuania',
        'latitude': 55.169438,
        'longitude': 23.881275
    },
    {
        'name': 'Luxembourg',
        'latitude': 49.815273,
        'longitude': 6.129583
    },
    {
        'name': 'Latvia',
        'latitude': 56.879635,
        'longitude': 24.603189
    },
    {
        'name': 'Monaco',
        'latitude': 43.750298,
        'longitude': 7.412841
    },
    {
        'name': 'Moldova',
        'latitude': 47.411631,
        'longitude': 28.369885
    },
    {
        'name': 'Montenegro',
        'latitude': 42.708678,
        'longitude': 19.37439
    },
    {
        'name': 'Malta',
        'latitude': 35.937496,
        'longitude': 14.375416
    },
    {
        'name': 'Netherlands',
        'latitude': 52.132633,
        'longitude': 5.291266
    },
    {
        'name': 'Norway',
        'latitude': 60.472024,
        'longitude': 8.468946
    },
    {
        'name': 'Poland',
        'latitude': 51.919438,
        'longitude': 19.145136
    },
    {
        'name': 'Portugal',
        'latitude': 39.399872,
        'longitude': -8.224454
    },
    {
        'name': 'Romania',
        'latitude': 45.943161,
        'longitude': 24.96676
    },
    {
        'name': 'Serbia',
        'latitude': 44.016521,
        'longitude': 21.005859
    },
    {
        'name': 'Sweden',
        'latitude': 60.128161,
        'longitude': 18.643501
    },
    {
        'name': 'Slovenia',
        'latitude': 46.151241,
        'longitude': 14.995463
    },
    {
        'name': 'Slovakia',
        'latitude': 48.669026,
        'longitude': 19.699024
    }
]

const counties = [
    {
        'name': 'Aberdeenshire',
        'latitude': 57.16666700034292,
        'longitude': -2.6666669999999995
    },
    {
        'name': 'Angus',
        'latitude': 56.66666700009285,
        'longitude': -2.9166669999999995
    },
    {
        'name': 'Argyllshire',
        'latitude': 56.25173329989839,
        'longitude': -5.251376399999999
    },
    {
        'name': 'Ayrshire',
        'latitude': 55.49999999958907,
        'longitude': -4.499999999999999
    },
    {
        'name': 'Banffshire',
        'latitude': 57.50000000051549,
        'longitude': -3.0833329999999997
    },
    {
        'name': 'Berwickshire',
        'latitude': 55.74999999968499,
        'longitude': -2.5
    },
    {
        'name': 'Buckinghamshire',
        'latitude': 51.749999999142,
        'longitude': -0.75
    },
    {
        'name': 'Buteshire',
        'latitude': 55.74999999968499,
        'longitude': -5.25
    },
    {
        'name': 'Caithness',
        'latitude': 58.430273682093144,
        'longitude': -3.464979481721419
    },
    {
        'name': 'Cambridgeshire',
        'latitude': 52.33333299909483,
        'longitude': 0.08333299999999999
    },
    {
        'name': 'Cardiganshire',
        'latitude': 52.24999999909935,
        'longitude': -3.999999999999999
    },
    {
        'name': 'Clackmannanshire',
        'latitude': 56.16639499986029,
        'longitude': -3.7513967999999998
    },
    {
        'name': 'Cornwall',
        'latitude': 50.41666699936132,
        'longitude': -4.75
    },
    {
        'name': 'County Durham',
        'latitude': 54.66666699932665,
        'longitude': -1.7499999999999998
    },
    {
        'name': 'Derbyshire',
        'latitude': 53.16666699909473,
        'longitude': -1.5833329999999999
    },
    {
        'name': 'Devon',
        'latitude': 50.74999999929483,
        'longitude': -3.7499999999999996
    },
    {
        'name': 'Dorset',
        'latitude': 50.74999999929483,
        'longitude': -2.333333
    },
    {
        'name': 'Dumfries and Galloway',
        'latitude': 55.0833329994464,
        'longitude': -3.8333330000000005
    },
    {
        'name': 'Dumfriesshire',
        'latitude': 55.16666699947314,
        'longitude': -3.4999999999999996
    },
    {
        'name': 'East Ayrshire',
        'latitude': 55.49999999958907,
        'longitude': -4.25
    },
    {
        'name': 'East Dunbartonshire',
        'latitude': 55.933332999759884,
        'longitude': -4.199999999999999
    },
    {
        'name': 'East Lothian',
        'latitude': 55.915796999752565,
        'longitude': -2.7511952
    },
    {
        'name': 'East Riding of Yorkshire',
        'latitude': 53.91123229917084,
        'longitude': -0.5813105
    },
    {
        'name': 'Fife',
        'latitude': 56.33333309993548,
        'longitude': -3.0000000999999994
    },
    {
        'name': 'Gloucestershire',
        'latitude': 51.83333129913313,
        'longitude': -2.1666673999999997
    },
    {
        'name': 'Gwent',
        'latitude': 51.666671699151536,
        'longitude': -3.0000069999999996
    },
    {
        'name': 'Hampshire',
        'latitude': 51.083332999235274,
        'longitude': -1.1666669999999997
    },
    {
        'name': 'Herefordshire',
        'latitude': 52.08333299911068,
        'longitude': -2.75
    },
    {
        'name': 'Highland',
        'latitude': 57.50663570051895,
        'longitude': -5.0038367
    },
    {
        'name': 'Inverclyde',
        'latitude': 55.899999999745994,
        'longitude': -4.75
    },
    {
        'name': 'Invernessshire',
        'latitude': 57.08333300030035,
        'longitude': -4.6666669999999995
    },
    {
        'name': 'Isle of Anglesey',
        'latitude': 53.249999999099536,
        'longitude': -4.333333
    },
    {
        'name': 'Kent',
        'latitude': 51.24748229920889,
        'longitude': 0.7105077
    },
    {
        'name': 'Kirkcudbrightshire',
        'latitude': 54.999999999420574,
        'longitude': -3.999999999999999
    },
    {
        'name': 'Lanarkshire',
        'latitude': 55.57529659961718,
        'longitude': -3.8333330000000005
    },
    {
        'name': 'Leicestershire',
        'latitude': 52.66666699908464,
        'longitude': -0.9999999999999998
    },
    {
        'name': 'Lincolnshire',
        'latitude': 53.16666699909473,
        'longitude': -0.24999999999999994
    },
    {
        'name': 'Mid Glamorgan',
        'latitude': 51.49999999917252,
        'longitude': -3.45
    },
    {
        'name': 'Midlothian',
        'latitude': 55.83333299971857,
        'longitude': -3.0833329999999997
    },
    {
        'name': 'Monmouthshire',
        'latitude': 51.750105799142,
        'longitude': -2.8333331
    },
    {
        'name': 'Moray',
        'latitude': 57.41666700047212,
        'longitude': -3.25
    },
    {
        'name': 'Norfolk',
        'latitude': 52.66666699908464,
        'longitude': 0.9999999999999998
    },
    {
        'name': 'Northamptonshire',
        'latitude': 52.24999999909935,
        'longitude': -0.833333
    },
    {
        'name': 'Northumberland',
        'latitude': 55.249999999500815,
        'longitude': -2.000559
    },
    {
        'name': 'Oxfordshire',
        'latitude': 51.833332999133155,
        'longitude': -1.25
    },
    {
        'name': 'Pembrokeshire',
        'latitude': 51.83392089913308,
        'longitude': -4.916667000000001
    },
    {
        'name': 'Perth and Kinross',
        'latitude': 56.500000000013024,
        'longitude': -3.7499999999999996
    },
    {
        'name': 'Renfrewshire',
        'latitude': 55.83333299971857,
        'longitude': -4.499999999999999
    },
    {
        'name': 'Selkirkshire',
        'latitude': 55.49999999958907,
        'longitude': -3
    },
    {
        'name': 'Shetland Islands',
        'latitude': 60.333333001695436,
        'longitude': -1.333333
    },
    {
        'name': 'Somerset',
        'latitude': 51.083332999235274,
        'longitude': -3
    },
    {
        'name': 'South Lanarkshire',
        'latitude': 55.583163399620155,
        'longitude': -3.8332212
    },
    {
        'name': 'Stirlingshire',
        'latitude': 56.07012079981813,
        'longitude': -3.9087351
    },
    {
        'name': 'Strathclyde Region',
        'latitude': 55.99999999978804,
        'longitude': -5.166667
    },
    {
        'name': 'Sutherland',
        'latitude': 58.250099900904374,
        'longitude': -4.5000946
    },
    {
        'name': 'Tayside Region',
        'latitude': 56.41666699997398,
        'longitude': -3.5333329999999994
    },
    {
        'name': 'The Scottish Borders',
        'latitude': 55.58333299962022,
        'longitude': -2.833333
    },
    {
        'name': 'Tyne and Wear',
        'latitude': 54.91666699939565,
        'longitude': -1.5666669999999998
    },
    {
        'name': 'West Dunbartonshire',
        'latitude': 55.9666669997739,
        'longitude': -4.533332999999999
    },
    {
        'name': 'West Glamorgan',
        'latitude': 51.58333299916172,
        'longitude': -3.7499999999999996
    },
    {
        'name': 'West Lothian',
        'latitude': 55.91666699975292,
        'longitude': -3.4999999999999996
    },
    {
        'name': 'West Sussex',
        'latitude': 50.99999999924944,
        'longitude': -0.41666699999999995
    },
    {
        'name': 'Western Isles',
        'latitude': 57.666667000602516,
        'longitude': -7.1666669999999995
    },
    {
        'name': 'Wiltshire',
        'latitude': 51.2499999992085,
        'longitude': -1.9166669999999997
    }
]

const cities = [
    {
        'name': 'Aberdeen',
        'latitude': 57.14824290033351,
        'longitude': -2.0928095,
        'zoom': [1, 2, 3, 4, 5, 6, 7, 8]
    },
    {
        'name': 'Bangor',
        'latitude': 53.22771869909819,
        'longitude': -4.1268822,
        'zoom': [2, 3, 4, 5, 6, 7, 8]
    },
    {
        'name': 'Bath',
        'latitude': 51.38138639918891,
        'longitude': -2.3596963
    },
    {
        'name': 'Belfast',
        'latitude': 54.607868,
        'longitude': -5.926437,
        'zoom': [1, 2, 3, 4, 5, 6, 7, 8]
    },
    {
        'name': 'Birmingham',
        'latitude': 52.479699199088735,
        'longitude': -1.9026910999999993,
        'zoom': [1, 2]
    },
    {
        'name': 'Bradford',
        'latitude': 53.79442289915391,
        'longitude': -1.7519185999999998,
        'zoom': [4, 5, 5, 6, 7, 8]
    },
    {
        'name': 'Brighton',
        'latitude': 50.841960378216214,
        'longitude': -0.127884119111502,
        'zoom': [5, 6, 7, 8]
    },
    {
        'name': 'Bristol',
        'latitude': 51.46699572508135,
        'longitude': -2.601367613196911,
        'zoom': [3, 4, 5, 6, 7, 8]
    },
    {
        'name': 'Cambridge',
        'latitude': 52.20348229910222,
        'longitude': 0.1235817,
        'zoom': [2, 3, 4, 5, 6, 7, 8]
    },
    {
        'name': 'Canterbury',
        'latitude': 51.28002749920391,
        'longitude': 1.0802532999999999
    },
    {
        'name': 'Cardiff',
        'latitude': 51.481654599174966,
        'longitude': -3.1791934
    },
    {
        'name': 'Carlisle',
        'latitude': 54.89484779938932,
        'longitude': -2.9362310999999996,
        'zoom': [3, 4, 5, 6, 7, 8]
    },
    {
        'name': 'Chelmsford',
        'latitude': 51.734539799143725,
        'longitude': 0.4724552999999999
    },
    {
        'name': 'Chester',
        'latitude': 53.19088729909604,
        'longitude': -2.8908955
    },
    {
        'name': 'Chichester',
        'latitude': 50.83648619927865,
        'longitude': -0.7791721000000001
    },
    {
        'name': 'City of London',
        'latitude': 51.51561769917048,
        'longitude': -0.09199829999999999
    },
    {
        'name': 'Coventry',
        'latitude': 52.40818119909141,
        'longitude': -1.510477
    },
    {
        'name': 'Derby',
        'latitude': 52.92126169908585,
        'longitude': -1.4761491,
        'zoom': [2, 3, 4, 5, 6, 7, 8]
    },
    {
        'name': 'Dundee',
        'latitude': 56.460593799994484,
        'longitude': -2.97019,
        'zoom': [2, 3, 4, 5, 6, 7, 8]
    },
    {
        'name': 'Durham',
        'latitude': 54.77641519935589,
        'longitude': -1.5758539
    },
    {
        'name': 'Edinburgh',
        'latitude': 55.9533455997683,
        'longitude': -3.1883749,
        'zoom': [1, 2, 3, 4, 5, 6, 7, 8]
    },
    {
        'name': 'Ely',
        'latitude': 52.39901989909177,
        'longitude': 0.262039
    },
    {
        'name': 'Exeter',
        'latitude': 50.72556199929949,
        'longitude': -3.5269108
    },
    {
        'name': 'Glasgow',
        'latitude': 55.86098249972988,
        'longitude': -4.2488787,
        'zoom': [4, 5, 6, 7, 8]
    },
    {
        'name': 'Gloucester',
        'latitude': 51.86537049912992,
        'longitude': -2.2458191999999997
    },
    {
        'name': 'Hereford',
        'latitude': 52.055381299112895,
        'longitude': -2.7151735
    },
    {
        'name': 'Hull',
        'latitude': 53.74357219914708,
        'longitude': -0.3394758
    },
    {
        'name': 'Inverness',
        'latitude': 57.479012400504566,
        'longitude': -4.225739,
        'zoom': [2, 3, 4, 5, 6, 7, 8]
    },
    {
        'name': 'Lancaster',
        'latitude': 54.04840679919319,
        'longitude': -2.7990344999999994
    },
    {
        'name': 'Leeds',
        'latitude': 53.797418499154304,
        'longitude': -1.5437941,
        'zoom': [2, 3]
    },
    {
        'name': 'Leicester',
        'latitude': 52.63613979908504,
        'longitude': -1.1330789
    },
    {
        'name': 'Lichfield',
        'latitude': 52.684369599084455,
        'longitude': -1.8275286
    },
    {
        'name': 'Lincoln',
        'latitude': 53.23363009909854,
        'longitude': -0.5392172
    },
    {
        'name': 'Liverpool',
        'latitude': 53.40719909911111,
        'longitude': -2.9916799999999997,
        'zoom': [4, 5, 6, 7, 8]
    },
    {
        'name': 'London',
        'latitude': 51.50732189917156,
        'longitude': -0.12764739999999997,
        'zoom': [1, 2]
    },
    {
        'name': 'Manchester',
        'latitude': 53.47948919911756,
        'longitude': -2.2451148,
        'zoom': [1, 2]
    },
    {
        'name': 'Newcastle upon Tyne',
        'latitude': 54.973847399412655,
        'longitude': -1.6131571999999998,
        'zoom': [2, 3, 4, 5, 6, 7, 8]
    },
    {
        'name': 'Newport',
        'latitude': 51.58823319916111,
        'longitude': -2.9974966999999997
    },
    {
        'name': 'Norwich',
        'latitude': 52.62860599908514,
        'longitude': 1.29227,
        'zoom': [2, 3, 4, 5, 6, 7, 8]
    },
    {
        'name': 'Nottingham',
        'latitude': 52.95341929908657,
        'longitude': -1.1496461
    },
    {
        'name': 'Oxford',
        'latitude': 51.75201309914178,
        'longitude': -1.2578498999999999,
        'zoom': [3, 4, 5, 6, 7, 8]
    },
    {
        'name': 'Perth',
        'latitude': 56.39576789996427,
        'longitude': -3.4335462999999997
    },
    {
        'name': 'Peterborough',
        'latitude': 52.572576899086194,
        'longitude': -0.24273360000000002,
        'zoom': [4, 5, 6, 7, 8]
    },
    {
        'name': 'Plymouth',
        'latitude': 50.37126589937084,
        'longitude': -4.1425658
    },
    {
        'name': 'Portsmouth',
        'latitude': 50.80368309928474,
        'longitude': -1.075614,
        'zoom': [3, 4, 5, 6, 7, 8]
    },
    {
        'name': 'Ripon',
        'latitude': 54.13687879920901,
        'longitude': -1.5213194,
        'zoom': [3, 4, 5, 6, 7, 8]
    },
    {
        'name': 'Salford',
        'latitude': 53.48774629911832,
        'longitude': -2.2891920999999997
    },
    {
        'name': 'Salisbury',
        'latitude': 51.06906129923767,
        'longitude': -1.7954134,
        'zoom': [3, 4, 5, 6, 7, 8]
    },
    {
        'name': 'Sheffield',
        'latitude': 53.38066259910893,
        'longitude': -1.4702278,
        'zoom': [3, 4, 5, 6, 7, 8]
    },
    {
        'name': 'Southampton',
        'latitude': 50.90253489926664,
        'longitude': -1.404189
    },
    {
        'name': 'St Albans',
        'latitude': 51.74513422196614,
        'longitude': -0.31790786593290354,
        'zoom': [4, 5, 6, 7, 8]
    },
    {
        'name': 'St Asaph',
        'latitude': 53.25756139910005,
        'longitude': -3.4438607
    },
    {
        'name': 'St Davids',
        'latitude': 51.88126099912836,
        'longitude': -5.266230299999999
    },
    {
        'name': 'Stirling',
        'latitude': 56.11812419983904,
        'longitude': -3.9360012
    },
    {
        'name': 'Stoke-on-Trent',
        'latitude': 53.01620139908838,
        'longitude': -2.1812607
    },
    {
        'name': 'Sunderland',
        'latitude': 54.9058511993925,
        'longitude': -1.3828727,
        'zoom': [7, 8]
    },
    {
        'name': 'Swansea',
        'latitude': 51.61959549915721,
        'longitude': -3.9459248,
        'zoom': [2, 3, 4, 5, 6, 7, 8]
    },
    {
        'name': 'Truro',
        'latitude': 50.26275149939403,
        'longitude': -5.0520467,
        'zoom': [1, 2, 3, 4, 5, 6, 7, 8]
    },
    {
        'name': 'Wakefield',
        'latitude': 53.682954099139465,
        'longitude': -1.4967285999999997
    },
    {
        'name': 'Wells',
        'latitude': 51.20945109921483,
        'longitude': -2.6451202999999994
    },
    {
        'name': 'Westminster',
        'latitude': 51.49732059917287,
        'longitude': -0.137149,
        'zoom': [5, 6, 7, 8]
    },
    {
        'name': 'Winchester',
        'latitude': 51.061276599238965,
        'longitude': -1.3131692
    },
    {
        'name': 'Wolverhampton',
        'latitude': 52.58476509908594,
        'longitude': -2.127567,
        'zoom': [3, 4, 5, 6, 7, 8]
    },
    {
        'name': 'Worcester',
        'latitude': 52.191184899103014,
        'longitude': -2.2206585
    },
    {
        'name': 'York',
        'latitude': 53.95905549917835,
        'longitude': -1.0815360999999997,
        'zoom': [3, 4, 5, 6, 7, 8]
    }
]

const towns = [
    {
        'name': 'Aberaeron',
        'latitude': 52.2431766,
        'longitude': -4.2600153,
        'zoom': [7, 8]
    },
    {
        'name': 'Abercynon',
        'latitude': 51.6448956,
        'longitude': -3.3283645
    },
    {
        'name': 'Aberdare',
        'latitude': 51.713353,
        'longitude': -3.445555
    },
    {
        'name': 'Aberfeldy',
        'latitude': 56.6193213,
        'longitude': -3.86509
    },
    {
        'name': 'Abergavenny',
        'latitude': 51.8211308,
        'longitude': -3.014789
    },
    {
        'name': 'Abergele',
        'latitude': 53.2840692,
        'longitude': -3.5810655
    },
    {
        'name': 'Abertillery',
        'latitude': 51.7299485,
        'longitude': -3.1359867
    },
    {
        'name': 'Aberystwyth',
        'latitude': 52.4143113,
        'longitude': -4.0816846
    },
    {
        'name': 'Abingdon',
        'latitude': 51.6714842,
        'longitude': -1.2779715
    },
    {
        'name': 'Accrington',
        'latitude': 53.7541156,
        'longitude': -2.3655434
    },
    {
        'name': 'Acle',
        'latitude': 52.63859871,
        'longitude': 1.549136304
    },
    {
        'name': 'Acle',
        'latitude': 52.6392358,
        'longitude': 1.5481293
    },
    {
        'name': 'Addlestone',
        'latitude': 51.37144068,
        'longitude': -0.491373089
    },
    {
        'name': 'Addlestone',
        'latitude': 51.3710908,
        'longitude': -0.4895675
    },
    {
        'name': 'Airdrie',
        'latitude': 55.8657845,
        'longitude': -3.9795866
    },
    {
        'name': 'Alcester',
        'latitude': 52.2150202,
        'longitude': -1.8695764
    },
    {
        'name': 'Aldeburgh',
        'latitude': 52.1523617,
        'longitude': 1.6015476
    },
    {
        'name': 'Aldershot',
        'latitude': 51.2494169,
        'longitude': -0.7630148
    },
    {
        'name': 'Aldridge',
        'latitude': 52.6018672,
        'longitude': -1.9241987
    },
    {
        'name': 'Alexandria',
        'latitude': 55.9878736,
        'longitude': -4.5822088
    },
    {
        'name': 'Alford',
        'latitude': 53.2591409,
        'longitude': 0.1777346
    },
    {
        'name': 'Alfreton',
        'latitude': 53.0972537,
        'longitude': -1.3900241
    },
    {
        'name': 'Allendale',
        'latitude': 54.8972605,
        'longitude': -2.2590355
    },
    {
        'name': 'Alloa',
        'latitude': 56.1156137,
        'longitude': -3.7922423
    },
    {
        'name': 'Alloway',
        'latitude': 55.4316876,
        'longitude': -4.6292172
    },
    {
        'name': 'Alness',
        'latitude': 57.6959431,
        'longitude': -4.2541572
    },
    {
        'name': 'Alnwick',
        'latitude': 55.4134875,
        'longitude': -1.7073105,
        'zoom': [7, 8]
    },
    {
        'name': 'Alsager',
        'latitude': 53.0960614,
        'longitude': -2.3046307
    },
    {
        'name': 'Alston',
        'latitude': 54.8122881,
        'longitude': -2.4411172
    },
    {
        'name': 'Alton',
        'latitude': 51.1489036,
        'longitude': -0.9757677
    },
    {
        'name': 'Altrincham',
        'latitude': 53.3839662,
        'longitude': -2.3525463
    },
    {
        'name': 'Alva',
        'latitude': 56.1530267,
        'longitude': -3.8011222
    },
    {
        'name': 'Alyth',
        'latitude': 56.6225542,
        'longitude': -3.2302627
    },
    {
        'name': 'Amble',
        'latitude': 55.3337748,
        'longitude': -1.5839378
    },
    {
        'name': 'Ambleside',
        'latitude': 54.431954,
        'longitude': -2.9630528,
        'zoom': [7, 8]
    },
    {
        'name': 'Amersham',
        'latitude': 51.676685,
        'longitude': -0.607692
    },
    {
        'name': 'Amesbury',
        'latitude': 51.1726704,
        'longitude': -1.775107
    },
    {
        'name': 'Amlwch',
        'latitude': 53.4090317,
        'longitude': -4.342649
    },
    {
        'name': 'Ammanford',
        'latitude': 51.7926317,
        'longitude': -3.9887731
    },
    {
        'name': 'Ampthill',
        'latitude': 52.0282071,
        'longitude': -0.4955122
    },
    {
        'name': 'Andover',
        'latitude': 51.2078275,
        'longitude': -1.479355
    },
    {
        'name': 'Annan',
        'latitude': 54.9881816,
        'longitude': -3.2607383
    },
    {
        'name': 'Anstruther',
        'latitude': 56.2227638,
        'longitude': -2.7005643
    },
    {
        'name': 'Appleby-in-Westmorland',
        'latitude': 54.5771885,
        'longitude': -2.4893592
    },
    {
        'name': 'Appledore',
        'latitude': 51.0539772,
        'longitude': -4.1925211
    },
    {
        'name': 'Appledore',
        'latitude': 51.05197537,
        'longitude': -4.193878889
    },
    {
        'name': 'Arbroath',
        'latitude': 56.5586729,
        'longitude': -2.5815669
    },
    {
        'name': 'Ardrossan',
        'latitude': 55.6400848,
        'longitude': -4.814877
    },
    {
        'name': 'Arlesey',
        'latitude': 52.0076781,
        'longitude': -0.2617753
    },
    {
        'name': 'Arlesey',
        'latitude': 52.01560027,
        'longitude': -0.263233157
    },
    {
        'name': 'Armadale',
        'latitude': 55.898767,
        'longitude': -3.7001955
    },
    {
        'name': 'Arnold',
        'latitude': 53.0052605,
        'longitude': -1.1255532
    },
    {
        'name': 'Arundel',
        'latitude': 50.8540609,
        'longitude': -0.5534493
    },
    {
        'name': 'Ascot',
        'latitude': 51.4101286,
        'longitude': -0.6680194
    },
    {
        'name': 'Ashbourne',
        'latitude': 53.0173327,
        'longitude': -1.7342725
    },
    {
        'name': 'Ashburton',
        'latitude': 50.5175973,
        'longitude': -3.7560726
    },
    {
        'name': 'Ashby de la Zouch',
        'latitude': 52.7471344,
        'longitude': -1.4712148
    },
    {
        'name': 'Ashford',
        'latitude': 51.148555,
        'longitude': 0.8722566
    },
    {
        'name': 'Ashford',
        'latitude': 51.43383956,
        'longitude': -0.462133379
    },
    {
        'name': 'Ashington',
        'latitude': 55.1832364,
        'longitude': -1.57027
    },
    {
        'name': 'Ashton-in-Makerfield',
        'latitude': 53.4852134,
        'longitude': -2.6417771
    },
    {
        'name': 'Ashton-under-Lyne',
        'latitude': 53.4865407,
        'longitude': -2.098691
    },
    {
        'name': 'Askam-in-Furness',
        'latitude': 54.1887065,
        'longitude': -3.2039446
    },
    {
        'name': 'Askern',
        'latitude': 53.6167934,
        'longitude': -1.1531828
    },
    {
        'name': 'Aspatria',
        'latitude': 54.7626578,
        'longitude': -3.3270981
    },
    {
        'name': 'Astley',
        'latitude': 53.5009963,
        'longitude': -2.4496899
    },
    {
        'name': 'Aston',
        'latitude': 52.5006916,
        'longitude': -1.8841916
    },
    {
        'name': 'Atherstone',
        'latitude': 52.5772439,
        'longitude': -1.5433954
    },
    {
        'name': 'Atherton',
        'latitude': 53.5249679,
        'longitude': -2.4905799
    },
    {
        'name': 'Attleborough',
        'latitude': 52.5179648,
        'longitude': 1.0105931
    },
    {
        'name': 'Auchterarder',
        'latitude': 56.2949827,
        'longitude': -3.7066774
    },
    {
        'name': 'Auchtermuchty',
        'latitude': 56.2920848,
        'longitude': -3.2328277
    },
    {
        'name': 'Audenshaw',
        'latitude': 53.4704814,
        'longitude': -2.1240454
    },
    {
        'name': 'Aviemore',
        'latitude': 57.1937528,
        'longitude': -3.8287496,
        'zoom': [7, 8]
    },
    {
        'name': 'Axbridge',
        'latitude': 51.2871232,
        'longitude': -2.8172812
    },
    {
        'name': 'Axminster',
        'latitude': 50.7820966,
        'longitude': -2.9979915
    },
    {
        'name': 'Aylesbury',
        'latitude': 51.8161412,
        'longitude': -0.8130383
    },
    {
        'name': 'Aylsham',
        'latitude': 52.7950031,
        'longitude': 1.2511895
    },
    {
        'name': 'Ayr',
        'latitude': 55.4628044,
        'longitude': -4.6302502
    },
    {
        'name': 'Bacup',
        'latitude': 53.7024932,
        'longitude': -2.201046
    },
    {
        'name': 'Bagillt',
        'latitude': 53.2640966,
        'longitude': -3.1676296
    },
    {
        'name': 'Baildon',
        'latitude': 53.8526169,
        'longitude': -1.7656781
    },
    {
        'name': 'Bakewell',
        'latitude': 53.2148429,
        'longitude': -1.6758613
    },
    {
        'name': 'Bala',
        'latitude': 52.9112205,
        'longitude': -3.59947
    },
    {
        'name': 'Baldock',
        'latitude': 51.9889973,
        'longitude': -0.1882079
    },
    {
        'name': 'Balerno',
        'latitude': 55.8839143,
        'longitude': -3.3387606
    },
    {
        'name': 'Ballater',
        'latitude': 57.0495064,
        'longitude': -3.0405173
    },
    {
        'name': 'Ballingry',
        'latitude': 56.1640494,
        'longitude': -3.3308829
    },
    {
        'name': 'Balloch',
        'latitude': 56.0040003,
        'longitude': -4.5788823
    },
    {
        'name': 'Bampton',
        'latitude': 50.9908394,
        'longitude': -3.4865109
    },
    {
        'name': 'Banbury',
        'latitude': 52.0601807,
        'longitude': -1.3402795
    },
    {
        'name': 'Banchory',
        'latitude': 57.0513874,
        'longitude': -2.5044583
    },
    {
        'name': 'Banff',
        'latitude': 57.6647037,
        'longitude': -2.5232971
    },
    {
        'name': 'Bannockburn',
        'latitude': 56.0908921,
        'longitude': -3.9132272
    },
    {
        'name': 'Banstead',
        'latitude': 51.3230592,
        'longitude': -0.21027636
    },
    {
        'name': 'Banstead',
        'latitude': 51.3238969,
        'longitude': -0.1986813
    },
    {
        'name': 'Banstead',
        'latitude': 51.3230592,
        'longitude': -0.21027636
    },
    {
        'name': 'Bargoed',
        'latitude': 51.6911236,
        'longitude': -3.2290284
    },
    {
        'name': 'Barking',
        'latitude': 51.5389922,
        'longitude': 0.0804245
    },
    {
        'name': 'Barmouth',
        'latitude': 52.7210389,
        'longitude': -4.0535692
    },
    {
        'name': 'Barnard Castle',
        'latitude': 54.5448091,
        'longitude': -1.924642
    },
    {
        'name': 'Barnoldswick',
        'latitude': 53.9170798,
        'longitude': -2.187322
    },
    {
        'name': 'Barnsley',
        'latitude': 53.5527719,
        'longitude': -1.4827755
    },
    {
        'name': 'Barnstaple',
        'latitude': 51.0804057,
        'longitude': -4.0600467
    },
    {
        'name': 'Barrhead',
        'latitude': 55.8011027,
        'longitude': -4.3899826
    },
    {
        'name': 'Barrow-in-Furness',
        'latitude': 54.1113351,
        'longitude': -3.2289494,
        'zoom': [7, 8]
    },
    {
        'name': 'Barry',
        'latitude': 51.4043548,
        'longitude': -3.2690216,
        'zoom': [7, 8]
    },
    {
        'name': 'Barton-upon-Humber',
        'latitude': 53.6858065,
        'longitude': -0.4395216,
        'zoom': [7, 8]
    },
    {
        'name': 'Basildon',
        'latitude': 51.5754602,
        'longitude': 0.4757363
    },
    {
        'name': 'Basingstoke',
        'latitude': 51.262826,
        'longitude': -1.0861976
    },
    {
        'name': 'Basingstoke',
        'latitude': 51.26386257,
        'longitude': -1.099142741
    },
    {
        'name': 'Bathgate',
        'latitude': 55.9009224,
        'longitude': -3.6414828
    },
    {
        'name': 'Batley',
        'latitude': 53.716564,
        'longitude': -1.6363856
    },
    {
        'name': 'Battle',
        'latitude': 50.9173469,
        'longitude': 0.483904
    },
    {
        'name': 'Bawtry',
        'latitude': 53.4311798,
        'longitude': -1.0207327
    },
    {
        'name': 'Beaconsfield',
        'latitude': 51.6082881,
        'longitude': -0.6571233
    },
    {
        'name': 'Beaminster',
        'latitude': 50.8097736,
        'longitude': -2.7392749
    },
    {
        'name': 'Bearsden',
        'latitude': 55.920461,
        'longitude': -4.3332046
    },
    {
        'name': 'Bearwood',
        'latitude': 52.4765439,
        'longitude': -1.9703538
    },
    {
        'name': 'Beaumaris',
        'latitude': 53.262963,
        'longitude': -4.0920538
    },
    {
        'name': 'Bebington',
        'latitude': 53.3503775,
        'longitude': -3.005598
    },
    {
        'name': 'Beccles',
        'latitude': 52.4583779,
        'longitude': 1.5622924
    },
    {
        'name': 'Bedale',
        'latitude': 54.2872491,
        'longitude': -1.5914306
    },
    {
        'name': 'Bedford',
        'latitude': 52.1363806,
        'longitude': -0.4675041
    },
    {
        'name': 'Bedlington',
        'latitude': 55.1323903,
        'longitude': -1.5980826
    },
    {
        'name': 'Bedworth',
        'latitude': 52.4792826,
        'longitude': -1.4663202
    },
    {
        'name': 'Beeston',
        'latitude': 52.9257197,
        'longitude': -1.2161887
    },
    {
        'name': 'Beeston',
        'latitude': 52.92545535,
        'longitude': -1.209952765
    },
    {
        'name': 'Beith',
        'latitude': 55.7505107,
        'longitude': -4.6328296
    },
    {
        'name': 'Bellshill',
        'latitude': 55.8189311,
        'longitude': -4.0225794
    },
    {
        'name': 'Belper',
        'latitude': 53.0229029,
        'longitude': -1.4817414
    },
    {
        'name': 'Benfleet',
        'latitude': 51.5649501,
        'longitude': 0.555819
    },
    {
        'name': 'Berkeley',
        'latitude': 51.6913643,
        'longitude': -2.4585247
    },
    {
        'name': 'Berkhamsted',
        'latitude': 51.7607271,
        'longitude': -0.5652554
    },
    {
        'name': 'Berwick-upon-Tweed',
        'latitude': 55.7692442,
        'longitude': -2.0026472,
        'zoom': [7, 8]
    },
    {
        'name': 'Bethesda',
        'latitude': 53.1809093,
        'longitude': -4.0614444
    },
    {
        'name': 'Beverley',
        'latitude': 53.8425488,
        'longitude': -0.4315677
    },
    {
        'name': 'Bewdley',
        'latitude': 52.3754763,
        'longitude': -2.3162408
    },
    {
        'name': 'Bexhill-on-Sea',
        'latitude': 50.8424384,
        'longitude': 0.4675723
    },
    {
        'name': 'Bexleyheath',
        'latitude': 51.4634854,
        'longitude': 0.1480552
    },
    {
        'name': 'Bicester',
        'latitude': 51.8988832,
        'longitude': -1.1518287
    },
    {
        'name': 'Biddulph',
        'latitude': 53.1164587,
        'longitude': -2.1730905
    },
    {
        'name': 'Bideford',
        'latitude': 51.0181448,
        'longitude': -4.2064223
    },
    {
        'name': 'Biggar',
        'latitude': 55.6244917,
        'longitude': -3.5215795
    },
    {
        'name': 'Biggin Hill',
        'latitude': 51.3166288,
        'longitude': 0.0327167
    },
    {
        'name': 'Biggleswade',
        'latitude': 52.0882012,
        'longitude': -0.2589013
    },
    {
        'name': 'Billericay',
        'latitude': 51.6284395,
        'longitude': 0.4218142
    },
    {
        'name': 'Billingham',
        'latitude': 54.6071441,
        'longitude': -1.2912166
    },
    {
        'name': 'Billingham',
        'latitude': 54.60181774,
        'longitude': -1.284646346
    },
    {
        'name': 'Billingham',
        'latitude': 54.60181774,
        'longitude': -1.284646346
    },
    {
        'name': 'Billingshurst',
        'latitude': 51.0229148,
        'longitude': -0.4515772
    },
    {
        'name': 'Bilston',
        'latitude': 52.5700229,
        'longitude': -2.0822333
    },
    {
        'name': 'Bingham',
        'latitude': 52.9515683,
        'longitude': -0.9522445
    },
    {
        'name': 'Bingley',
        'latitude': 53.8479533,
        'longitude': -1.8384526
    },
    {
        'name': 'Birchington',
        'latitude': 51.3738021,
        'longitude': 1.3071248
    },
    {
        'name': 'Birkenhead',
        'latitude': 53.3943509,
        'longitude': -3.0191569
    },
    {
        'name': 'Birstall',
        'latitude': 53.7319746,
        'longitude': -1.6602524
    },
    {
        'name': 'Birtley',
        'latitude': 54.8985648,
        'longitude': -1.5795659
    },
    {
        'name': 'Bishop Auckland',
        'latitude': 54.6640762,
        'longitude': -1.6752864
    },
    {
        'name': 'Bishops Castle',
        'latitude': 52.4936325,
        'longitude': -2.9979204
    }, {
        'name': 'Bishops Cleeve ',
        'latitude': 51.9468176,
        'longitude': -2.0564818
    }, {
        'name': 'Bishops Stortford',
        'latitude': 51.8676279,
        'longitude': 0.1631961
    }, {
        'name': 'Bishopbriggs',
        'latitude': 55.9044088,
        'longitude': -4.226358
    },
    {
        'name': 'Bishopton',
        'latitude': 55.9101101,
        'longitude': -4.5101425
    },
    {
        'name': 'Bishop‚Äôs Waltham',
        'latitude': 50.954948,
        'longitude': -1.2139918
    },
    {
        'name': 'Blackburn',
        'latitude': 55.8712745,
        'longitude': -3.6227367
    },
    {
        'name': 'Blackburn',
        'latitude': 53.749326,
        'longitude': -2.4840566
    },
    {
        'name': 'Blackheath',
        'latitude': 52.4756169,
        'longitude': -2.0387525
    },
    {
        'name': 'Blackpool',
        'latitude': 53.8182212,
        'longitude': -3.0564845
    },
    {
        'name': 'Blackwater',
        'latitude': 51.3305637,
        'longitude': -0.77884
    },
    {
        'name': 'Blackwood',
        'latitude': 51.6663189,
        'longitude': -3.1974329
    },
    {
        'name': 'Blaenau Ffestiniog',
        'latitude': 52.9957103,
        'longitude': -3.9363166
    },
    {
        'name': 'Blaenavon',
        'latitude': 51.7728191,
        'longitude': -3.0843833
    },
    {
        'name': 'Blaina',
        'latitude': 51.76311223,
        'longitude': -3.159510717
    },
    {
        'name': 'Blaina',
        'latitude': 51.7645432,
        'longitude': -3.1602994
    },
    {
        'name': 'Blairgowrie and Rattray',
        'latitude': 56.5927172,
        'longitude': -3.3389425
    },
    {
        'name': 'Blandford Forum',
        'latitude': 50.8576197,
        'longitude': -2.1631125
    },
    {
        'name': 'Blantyre',
        'latitude': 55.7935224,
        'longitude': -4.0923109
    },
    {
        'name': 'Blaydon on Tyne',
        'latitude': 54.9637822,
        'longitude': -1.7210501
    },
    {
        'name': 'Bletchley',
        'latitude': 51.9944301,
        'longitude': -0.7315342
    },
    {
        'name': 'Bloxwich',
        'latitude': 52.6161194,
        'longitude': -2.0030496
    },
    {
        'name': 'Blyth',
        'latitude': 55.1270903,
        'longitude': -1.5099726
    },
    {
        'name': 'Bo ness',
        'latitude': 56.0176867,
        'longitude': -3.6073601
    }, {
        'name': 'Bodmin',
        'latitude': 50.470725,
        'longitude': -4.7243205
    },
    {
        'name': 'Bognor Regis',
        'latitude': 50.7834973,
        'longitude': -0.6730718
    },
    {
        'name': 'Bollington',
        'latitude': 53.29348,
        'longitude': -2.1107855
    },
    {
        'name': 'Bolsover',
        'latitude': 53.228666,
        'longitude': -1.2912756
    },
    {
        'name': 'Bolton',
        'latitude': 53.5782863,
        'longitude': -2.4300367
    },
    {
        'name': 'Bonhill',
        'latitude': 55.9816349,
        'longitude': -4.5733016
    },
    {
        'name': 'Bonnybridge',
        'latitude': 56.0014357,
        'longitude': -3.8876642
    },
    {
        'name': 'Bonnyrigg',
        'latitude': 55.8751189,
        'longitude': -3.1059076
    },
    {
        'name': 'Bootle',
        'latitude': 53.4506931,
        'longitude': -2.9948834
    },
    {
        'name': 'Bordon',
        'latitude': 51.1091184,
        'longitude': -0.8593356
    },
    {
        'name': 'Bordon',
        'latitude': 51.11374935,
        'longitude': -0.86346627
    },
    {
        'name': 'Borehamwood',
        'latitude': 51.6604863,
        'longitude': -0.2706506
    },
    {
        'name': 'Boroughbridge',
        'latitude': 54.0943398,
        'longitude': -1.3947113
    },
    {
        'name': 'Borth',
        'latitude': 52.4880991,
        'longitude': -4.0508057
    },
    {
        'name': 'Boston',
        'latitude': 52.97719473,
        'longitude': -0.030015577
    },
    {
        'name': 'Boston',
        'latitude': 52.97719473,
        'longitude': -0.030015577
    },
    {
        'name': 'Bothwell',
        'latitude': 55.8026551,
        'longitude': -4.0676955
    },
    {
        'name': 'Bourne',
        'latitude': 52.7682148,
        'longitude': -0.3771217
    },
    {
        'name': 'Bournemouth',
        'latitude': 50.7194784,
        'longitude': -1.8767712
    },
    {
        'name': 'Bourton-on-the-Water',
        'latitude': 51.8840725,
        'longitude': -1.7573118
    },
    {
        'name': 'Bovey Tracey',
        'latitude': 50.5924367,
        'longitude': -3.6761482
    },
    {
        'name': 'Bowmore',
        'latitude': 55.7568966,
        'longitude': -6.2882551,
        'zoom': [7, 8]
    },
    {
        'name': 'Bowness on Windermere',
        'latitude': 54.3647264,
        'longitude': -2.9195522
    },
    {
        'name': 'Bracebridge',
        'latitude': 53.2027459,
        'longitude': -0.554776
    },
    {
        'name': 'Brackley',
        'latitude': 52.0297607,
        'longitude': -1.1484577
    },
    {
        'name': 'Bracknell',
        'latitude': 51.4143513,
        'longitude': -0.7449925
    },
    {
        'name': 'Bradford on Avon',
        'latitude': 51.346715,
        'longitude': -2.2504329
    },
    {
        'name': 'Brading',
        'latitude': 50.6812083,
        'longitude': -1.1422319
    },
    {
        'name': 'Bradley Stoke',
        'latitude': 51.5375044,
        'longitude': -2.5460088
    },
    {
        'name': 'Bradninch',
        'latitude': 50.8264662,
        'longitude': -3.4237023
    },
    {
        'name': 'Braintree',
        'latitude': 51.8780637,
        'longitude': 0.5537161
    },
    {
        'name': 'Brampton',
        'latitude': 54.9422402,
        'longitude': -2.7344533
    },
    {
        'name': 'Brandon',
        'latitude': 52.4482313,
        'longitude': 0.6240803
    },
    {
        'name': 'Braunstone Town',
        'latitude': 52.615963,
        'longitude': -1.1826524
    },
    {
        'name': 'Braunton',
        'latitude': 51.1083317,
        'longitude': -4.161138,
        'zoom': [7, 8]
    },
    {
        'name': 'Brechin',
        'latitude': 56.7315854,
        'longitude': -2.6598989
    },
    {
        'name': 'Brecon',
        'latitude': 51.9472048,
        'longitude': -3.391696,
        'zoom': [7, 8]
    },
    {
        'name': 'Brentford',
        'latitude': 51.4863958,
        'longitude': -0.3216623
    },
    {
        'name': 'Brentwood',
        'latitude': 51.6201654,
        'longitude': 0.3018662
    },
    {
        'name': 'Bridge of Allan',
        'latitude': 56.1550362,
        'longitude': -3.9480672
    },
    {
        'name': 'Bridge of Earn',
        'latitude': 56.3483229,
        'longitude': -3.4040168
    },
    {
        'name': 'Bridgend',
        'latitude': 51.5049843,
        'longitude': -3.5756674
    },
    {
        'name': 'Bridgnorth',
        'latitude': 52.5345626,
        'longitude': -2.4194132
    },
    {
        'name': 'Bridgwater',
        'latitude': 51.1283378,
        'longitude': -3.0037046
    },
    {
        'name': 'Bridlington',
        'latitude': 54.0871383,
        'longitude': -0.1964511
    },
    {
        'name': 'Bridport',
        'latitude': 50.733785,
        'longitude': -2.7589005
    },
    {
        'name': 'Bridport',
        'latitude': 50.73320438,
        'longitude': -2.754054909
    },
    {
        'name': 'Brierfield',
        'latitude': 53.8252949,
        'longitude': -2.2330174
    },
    {
        'name': 'Brigg',
        'latitude': 53.5525329,
        'longitude': -0.4896411
    },
    {
        'name': 'Brighouse',
        'latitude': 53.702746,
        'longitude': -1.7803373
    },
    {
        'name': 'Brightlingsea',
        'latitude': 51.81094,
        'longitude': 1.0253239
    },
    {
        'name': 'Briton Ferry',
        'latitude': 51.6360419,
        'longitude': -3.8216718
    },
    {
        'name': 'Brixham',
        'latitude': 50.3952404,
        'longitude': -3.514544
    },
    {
        'name': 'Brixton',
        'latitude': 51.4568044,
        'longitude': -0.1167959
    },
    {
        'name': 'Broadstairs',
        'latitude': 51.3586758,
        'longitude': 1.4407855
    },
    {
        'name': 'Bromborough',
        'latitude': 53.3333672,
        'longitude': -2.9774612
    },
    {
        'name': 'Bromley',
        'latitude': 51.4028046,
        'longitude': 0.0148142
    },
    {
        'name': 'Bromsgrove',
        'latitude': 52.3353816,
        'longitude': -2.0597449
    },
    {
        'name': 'Bromyard',
        'latitude': 52.1884704,
        'longitude': -2.5107318
    },
    {
        'name': 'Broseley',
        'latitude': 52.6133558,
        'longitude': -2.4827324
    },
    {
        'name': 'Brotton',
        'latitude': 54.5689495,
        'longitude': -0.9364969
    },
    {
        'name': 'Broughton in Furness',
        'latitude': 54.2776901,
        'longitude': -3.2113968
    },
    {
        'name': 'Brownhills',
        'latitude': 52.6421956,
        'longitude': -1.927161
    },
    {
        'name': 'Broxbourne',
        'latitude': 51.7465723,
        'longitude': -0.0190782
    },
    {
        'name': 'Broxburn',
        'latitude': 55.9343917,
        'longitude': -3.4693866
    },
    {
        'name': 'Bruton',
        'latitude': 51.1121638,
        'longitude': -2.453328
    },
    {
        'name': 'Brynamman',
        'latitude': 51.8121781,
        'longitude': -3.8677246
    },
    {
        'name': 'Brynamman',
        'latitude': 51.81193345,
        'longitude': -3.868564162
    },
    {
        'name': 'Brynmawr',
        'latitude': 51.7982408,
        'longitude': -3.1740109
    },
    {
        'name': 'Buckfastleigh',
        'latitude': 50.4815994,
        'longitude': -3.7779904
    },
    {
        'name': 'Buckhaven',
        'latitude': 56.1710696,
        'longitude': -3.0333966
    },
    {
        'name': 'Buckhurst Hill',
        'latitude': 51.6268617,
        'longitude': 0.0415283
    },
    {
        'name': 'Buckie',
        'latitude': 57.6762821,
        'longitude': -2.9648973
    },
    {
        'name': 'Buckingham',
        'latitude': 51.9983175,
        'longitude': -0.9786725
    },
    {
        'name': 'Buckley',
        'latitude': 53.1702261,
        'longitude': -3.0799874
    },
    {
        'name': 'Bude',
        'latitude': 50.8285252,
        'longitude': -4.5469361
    },
    {
        'name': 'Budleigh Salterton',
        'latitude': 50.6296135,
        'longitude': -3.3271724
    },
    {
        'name': 'Builth Wells',
        'latitude': 52.1493287,
        'longitude': -3.4058015
    },
    {
        'name': 'Bungay',
        'latitude': 52.4562248,
        'longitude': 1.4373413
    },
    {
        'name': 'Buntingford',
        'latitude': 51.94672,
        'longitude': -0.0172746
    },
    {
        'name': 'Burford',
        'latitude': 51.8081927,
        'longitude': -1.6358183
    },
    {
        'name': 'Burgess Hill',
        'latitude': 50.9575365,
        'longitude': -0.1332853
    },
    {
        'name': 'Burnham on Crouch',
        'latitude': 51.6301754,
        'longitude': 0.8167808
    },
    {
        'name': 'Burnham-on-Sea',
        'latitude': 51.2377356,
        'longitude': -2.998695
    },
    {
        'name': 'Burnley',
        'latitude': 53.7907262,
        'longitude': -2.2439196
    },
    {
        'name': 'Burntisland',
        'latitude': 56.0593631,
        'longitude': -3.2330993
    },
    {
        'name': 'Burntisland',
        'latitude': 56.06286561,
        'longitude': -3.231453078
    },
    {
        'name': 'Burntwood',
        'latitude': 52.6791667,
        'longitude': -1.9154621
    },
    {
        'name': 'Burry Port',
        'latitude': 51.6858178,
        'longitude': -4.2502221
    },
    {
        'name': 'Burslem',
        'latitude': 53.0446287,
        'longitude': -2.1928235
    },
    {
        'name': 'Burton Latimer',
        'latitude': 52.3638663,
        'longitude': -0.6777104
    },
    {
        'name': 'Burton-on-Trent',
        'latitude': 52.802742,
        'longitude': -1.629917
    },
    {
        'name': 'Bury',
        'latitude': 53.5927543,
        'longitude': -2.2972827,
        'zoom': [7, 8]
    },
    {
        'name': 'Bury St Edmunds',
        'latitude': 52.2460367,
        'longitude': 0.7125173
    },
    {
        'name': 'Buxton',
        'latitude': 53.2594074,
        'longitude': -1.9100768
    },
    {
        'name': 'Buxton',
        'latitude': 53.25931824,
        'longitude': -1.908396496
    },
    {
        'name': 'Caernarfon',
        'latitude': 53.1394364,
        'longitude': -4.2769751
    },
    {
        'name': 'Caerphilly',
        'latitude': 51.5745432,
        'longitude': -3.2208487
    },
    {
        'name': 'Caister on Sea',
        'latitude': 52.6508309,
        'longitude': 1.72377
    },
    {
        'name': 'Caistor',
        'latitude': 53.4959171,
        'longitude': -0.3124269
    },
    {
        'name': 'Caldicot',
        'latitude': 51.5912466,
        'longitude': -2.7517629
    },
    {
        'name': 'Callander',
        'latitude': 56.2436941,
        'longitude': -4.2148033
    },
    {
        'name': 'Callington',
        'latitude': 50.5025663,
        'longitude': -4.3133635
    },
    {
        'name': 'Calne',
        'latitude': 51.437977,
        'longitude': -2.0050911
    },
    {
        'name': 'Camberley',
        'latitude': 51.3392845,
        'longitude': -0.7460981
    },
    {
        'name': 'Camborne',
        'latitude': 50.2138828,
        'longitude': -5.2990347
    },
    {
        'name': 'Cambourne',
        'latitude': 52.21789174,
        'longitude': -0.066536434
    },
    {
        'name': 'Cambourne',
        'latitude': 52.219984,
        'longitude': -0.0700777
    },
    {
        'name': 'Cambuslang',
        'latitude': 55.8191936,
        'longitude': -4.1685904
    },
    {
        'name': 'Camden Town',
        'latitude': 51.5423045,
        'longitude': -0.1395604
    },
    {
        'name': 'Camelford',
        'latitude': 50.6209791,
        'longitude': -4.6803323
    },
    {
        'name': 'Campbeltown',
        'latitude': 55.42524132,
        'longitude': -5.60476381,
        'zoom': [7, 8]
    },
    {
        'name': 'Cannock',
        'latitude': 52.688227,
        'longitude': -2.0324197
    },
    {
        'name': 'Canvey',
        'latitude': 51.5219987,
        'longitude': 0.5869665
    },
    {
        'name': 'Cardenden',
        'latitude': 56.1461978,
        'longitude': -3.2625895
    },
    {
        'name': 'Cardigan',
        'latitude': 52.0839973,
        'longitude': -4.6604224
    },
    {
        'name': 'Carluke',
        'latitude': 55.7343202,
        'longitude': -3.8382548
    },
    {
        'name': 'Carmarthen',
        'latitude': 51.8591257,
        'longitude': -4.3115907
    },
    {
        'name': 'Carnforth',
        'latitude': 54.1282092,
        'longitude': -2.7701207
    },
    {
        'name': 'Carnoustie',
        'latitude': 56.5010506,
        'longitude': -2.711403
    },
    {
        'name': 'Carshalton',
        'latitude': 51.3657883,
        'longitude': -0.1610857
    },
    {
        'name': 'Carterton',
        'latitude': 51.7592952,
        'longitude': -1.5945429
    },
    {
        'name': 'Castle Bromwich',
        'latitude': 52.5069138,
        'longitude': -1.7860432
    },
    {
        'name': 'Castle Cary',
        'latitude': 51.0883482,
        'longitude': -2.5105263
    },
    {
        'name': 'Castle Douglas',
        'latitude': 54.9401001,
        'longitude': -3.9305352
    },
    {
        'name': 'Castleford',
        'latitude': 53.722353,
        'longitude': -1.3512543
    },
    {
        'name': 'Caterham',
        'latitude': 51.2819693,
        'longitude': -0.0771032
    },
    {
        'name': 'Catford',
        'latitude': 51.4453215,
        'longitude': -0.0197534
    },
    {
        'name': 'Catterick',
        'latitude': 54.377023,
        'longitude': -1.6319342
    },
    {
        'name': 'Catterick Garrison',
        'latitude': 54.3734961,
        'longitude': -1.7209001
    },
    {
        'name': 'Chadderton',
        'latitude': 53.5500517,
        'longitude': -2.1463508
    },
    {
        'name': 'Chagford',
        'latitude': 50.6731209,
        'longitude': -3.8402721
    },
    {
        'name': 'Chandlers Ford',
        'latitude': 50.9828402,
        'longitude': -1.3833123
    }, {
        'name': 'Chapel St Leonards',
        'latitude': 53.2253833,
        'longitude': 0.3377771
    },
    {
        'name': 'Chapel-en-le-Frith',
        'latitude': 53.3232509,
        'longitude': -1.9148352
    },
    {
        'name': 'Chapelhall',
        'latitude': 55.8445286,
        'longitude': -3.948302
    },
    {
        'name': 'Chard',
        'latitude': 50.8736728,
        'longitude': -2.9597425
    },
    {
        'name': 'Charlbury',
        'latitude': 51.8726941,
        'longitude': -1.4823897
    },
    {
        'name': 'Chatham',
        'latitude': 51.35792066,
        'longitude': 0.534632361
    },
    {
        'name': 'Chatham',
        'latitude': 51.3804845,
        'longitude': 0.5292758
    },
    {
        'name': 'Chatteris',
        'latitude': 52.4549017,
        'longitude': 0.0504338
    },
    {
        'name': 'Cheadle',
        'latitude': 52.9884392,
        'longitude': -1.9937596
    },
    {
        'name': 'Chelmsley Wood',
        'latitude': 52.4799114,
        'longitude': -1.7392473
    },
    {
        'name': 'Cheltenham',
        'latitude': 51.8995685,
        'longitude': -2.0711559
    },
    {
        'name': 'Chepstow',
        'latitude': 51.6428466,
        'longitude': -2.6751258
    },
    {
        'name': 'Chertsey',
        'latitude': 51.392296,
        'longitude': -0.5038294
    },
    {
        'name': 'Chertsey',
        'latitude': 51.38763654,
        'longitude': -0.503006617
    },
    {
        'name': 'Chesham',
        'latitude': 51.7062914,
        'longitude': -0.6123113
    },
    {
        'name': 'Cheslyn Hay',
        'latitude': 52.6608908,
        'longitude': -2.03555
    },
    {
        'name': 'Chester-le-Street',
        'latitude': 54.8543237,
        'longitude': -1.5750431
    },
    {
        'name': 'Chester-le-Street',
        'latitude': 54.85380548,
        'longitude': -1.588982788
    },
    {
        'name': 'Chesterfield',
        'latitude': 53.2352134,
        'longitude': -1.4264097
    },
    {
        'name': 'Chickerell',
        'latitude': 50.6245176,
        'longitude': -2.5036124
    },
    {
        'name': 'Chippenham',
        'latitude': 51.4587621,
        'longitude': -2.1159032
    },
    {
        'name': 'Chipping Barnet',
        'latitude': 51.65309,
        'longitude': -0.2002261
    },
    {
        'name': 'Chipping Norton',
        'latitude': 51.9418212,
        'longitude': -1.5455303
    },
    {
        'name': 'Chipping Ongar',
        'latitude': 51.7094315,
        'longitude': 0.2453167
    },
    {
        'name': 'Chipping Sodbury',
        'latitude': 51.5382179,
        'longitude': -2.392653
    },
    {
        'name': 'Chirk',
        'latitude': 52.9320109,
        'longitude': -3.056386
    },
    {
        'name': 'Chiswick',
        'latitude': 51.4923137,
        'longitude': -0.263818
    },
    {
        'name': 'Chorley',
        'latitude': 53.6531915,
        'longitude': -2.6294313
    },
    {
        'name': 'Christchurch',
        'latitude': 50.7344198,
        'longitude': -1.76512
    },
    {
        'name': 'Chudleigh',
        'latitude': 50.6046345,
        'longitude': -3.6004981
    },
    {
        'name': 'Chulmleigh',
        'latitude': 50.912019,
        'longitude': -3.8675444
    },
    {
        'name': 'Church Stretton',
        'latitude': 52.5390725,
        'longitude': -2.8077658
    },
    {
        'name': 'Cinderford',
        'latitude': 51.8244586,
        'longitude': -2.4984934
    },
    {
        'name': 'Cirencester',
        'latitude': 51.717131,
        'longitude': -1.9680873
    },
    {
        'name': 'Clackmannan',
        'latitude': 56.1073509,
        'longitude': -3.752134
    },
    {
        'name': 'Clacton-on-Sea',
        'latitude': 51.7883997,
        'longitude': 1.1527865
    },
    {
        'name': 'Clapham',
        'latitude': 51.4622924,
        'longitude': -0.1388561
    },
    {
        'name': 'Clare',
        'latitude': 52.0801783,
        'longitude': 0.5829603
    },
    {
        'name': 'Clarkston',
        'latitude': 55.7892557,
        'longitude': -4.2762355
    },
    {
        'name': 'Clay Cross',
        'latitude': 53.1652765,
        'longitude': -1.4132383
    },
    {
        'name': 'Clayton-le-Moors',
        'latitude': 53.7734032,
        'longitude': -2.3892947
    },
    {
        'name': 'Cleator Moor',
        'latitude': 54.5196048,
        'longitude': -3.5101569
    },
    {
        'name': 'Cleckheaton',
        'latitude': 53.7264346,
        'longitude': -1.7140939
    },
    {
        'name': 'Cleethorpes',
        'latitude': 53.5572068,
        'longitude': -0.0289969
    },
    {
        'name': 'Cleobury Mortimer',
        'latitude': 52.3789643,
        'longitude': -2.4813544
    },
    {
        'name': 'Clevedon',
        'latitude': 51.4360625,
        'longitude': -2.8526531
    },
    {
        'name': 'Cleveleys',
        'latitude': 53.8781587,
        'longitude': -3.0428798
    },
    {
        'name': 'Clitheroe',
        'latitude': 53.8717465,
        'longitude': -2.3926783
    },
    {
        'name': 'Clowne',
        'latitude': 53.276098,
        'longitude': -1.2623326
    },
    {
        'name': 'Clun',
        'latitude': 52.4211807,
        'longitude': -3.0300584
    },
    {
        'name': 'Clydach',
        'latitude': 51.6964314,
        'longitude': -3.8916304
    },
    {
        'name': 'Clydebank',
        'latitude': 55.902607,
        'longitude': -4.4039569
    },
    {
        'name': 'Coalville',
        'latitude': 52.7257981,
        'longitude': -1.3741375
    },
    {
        'name': 'Coatbridge',
        'latitude': 55.8622848,
        'longitude': -4.0273166
    },
    {
        'name': 'Cobham',
        'latitude': 51.33213921,
        'longitude': -0.412808193
    },
    {
        'name': 'Cobham',
        'latitude': 51.3300079,
        'longitude': -0.4120821
    },
    {
        'name': 'Cockenzie and Port Seton',
        'latitude': 55.9715981,
        'longitude': -2.9527646
    },
    {
        'name': 'Cockermouth',
        'latitude': 54.6614392,
        'longitude': -3.3590111
    },
    {
        'name': 'Coggeshall',
        'latitude': 51.8754972,
        'longitude': 0.6863699
    },
    {
        'name': 'Colburn',
        'latitude': 54.3793525,
        'longitude': -1.685757
    },
    {
        'name': 'Colchester',
        'latitude': 51.8896903,
        'longitude': 0.8994651
    },
    {
        'name': 'Coldstream',
        'latitude': 55.6511811,
        'longitude': -2.252957
    },
    {
        'name': 'Coleford',
        'latitude': 51.7940629,
        'longitude': -2.6172688
    },
    {
        'name': 'Coleshill',
        'latitude': 52.4979219,
        'longitude': -1.7065851
    },
    {
        'name': 'Colne',
        'latitude': 53.8567728,
        'longitude': -2.1691238
    },
    {
        'name': 'Colwyn Bay',
        'latitude': 53.2953269,
        'longitude': -3.7262534
    },
    {
        'name': 'Congleton',
        'latitude': 53.1631463,
        'longitude': -2.2110691
    },
    {
        'name': 'Coningsby',
        'latitude': 53.1056488,
        'longitude': -0.1746758
    },
    {
        'name': 'Conisbrough',
        'latitude': 53.4810181,
        'longitude': -1.2327396
    },
    {
        'name': 'Connahs Quay',
        'latitude': 53.2199037,
        'longitude': -3.0661782
    }, {
        'name': 'Consett',
        'latitude': 54.8518781,
        'longitude': -1.8333741
    },
    {
        'name': 'Consett',
        'latitude': 54.85300713,
        'longitude': -1.841176089
    },
    {
        'name': 'Conwy',
        'latitude': 53.2811822,
        'longitude': -3.8287012
    },
    {
        'name': 'Corbridge',
        'latitude': 54.9740218,
        'longitude': -2.0175509
    },
    {
        'name': 'Corby',
        'latitude': 52.4877341,
        'longitude': -0.7032713
    },
    {
        'name': 'Corsham',
        'latitude': 51.4303211,
        'longitude': -2.1869766
    },
    {
        'name': 'Corwen',
        'latitude': 52.9804731,
        'longitude': -3.3731677
    },
    {
        'name': 'Coseley',
        'latitude': 52.5440905,
        'longitude': -2.0879793
    },
    {
        'name': 'Cotgrave',
        'latitude': 52.9108868,
        'longitude': -1.0375419
    },
    {
        'name': 'Coulsdon',
        'latitude': 51.3199716,
        'longitude': -0.1393506
    },
    {
        'name': 'Coupar Angus',
        'latitude': 56.546656,
        'longitude': -3.265605
    },
    {
        'name': 'Cowbridge',
        'latitude': 51.461761,
        'longitude': -3.4471936
    },
    {
        'name': 'Cowdenbeath',
        'latitude': 56.1110634,
        'longitude': -3.3438843
    },
    {
        'name': 'Cowes',
        'latitude': 50.7633176,
        'longitude': -1.2985186
    },
    {
        'name': 'Cradley Heath',
        'latitude': 52.4721362,
        'longitude': -2.0836126
    },
    {
        'name': 'Crail',
        'latitude': 56.2606771,
        'longitude': -2.6267118
    },
    {
        'name': 'Cramlington',
        'latitude': 55.0855893,
        'longitude': -1.59069
    },
    {
        'name': 'Cranbrook',
        'latitude': 50.7519342,
        'longitude': -3.4009931
    },
    {
        'name': 'Cranbrook',
        'latitude': 51.0965459,
        'longitude': 0.5321089
    },
    {
        'name': 'Craven Arms',
        'latitude': 52.439652,
        'longitude': -2.8356405
    },
    {
        'name': 'Crawley',
        'latitude': 51.1103444,
        'longitude': -0.1801094
    },
    {
        'name': 'Crediton',
        'latitude': 50.7895868,
        'longitude': -3.658963
    },
    {
        'name': 'Crewe',
        'latitude': 53.0996153,
        'longitude': -2.4414627
    },
    {
        'name': 'Crewkerne',
        'latitude': 50.8842116,
        'longitude': -2.7952478
    },
    {
        'name': 'Criccieth',
        'latitude': 52.9206106,
        'longitude': -4.2332414
    },
    {
        'name': 'Crickhowell',
        'latitude': 51.859112,
        'longitude': -3.138355
    },
    {
        'name': 'Cricklade',
        'latitude': 51.6414188,
        'longitude': -1.8579414
    },
    {
        'name': 'Crieff',
        'latitude': 56.372717,
        'longitude': -3.8397453
    },
    {
        'name': 'Cromarty',
        'latitude': 57.6807913,
        'longitude': -4.0346487
    },
    {
        'name': 'Cromer',
        'latitude': 52.9311367,
        'longitude': 1.3012758
    },
    {
        'name': 'Crook',
        'latitude': 54.71305062,
        'longitude': -1.749575094
    },
    {
        'name': 'Crook',
        'latitude': 54.7137956,
        'longitude': -1.7522528
    },
    {
        'name': 'Crosby',
        'latitude': 53.4844386,
        'longitude': -3.0291758
    },
    {
        'name': 'Crowborough',
        'latitude': 51.0590028,
        'longitude': 0.1635863
    },
    {
        'name': 'Crowland',
        'latitude': 52.675299,
        'longitude': -0.1685608
    },
    {
        'name': 'Crowle',
        'latitude': 53.6078121,
        'longitude': -0.832644
    },
    {
        'name': 'Croydon',
        'latitude': 51.3713049,
        'longitude': -0.101957
    },
    {
        'name': 'Cudworth',
        'latitude': 53.5733843,
        'longitude': -1.4196437
    },
    {
        'name': 'Cullen',
        'latitude': 57.6918029,
        'longitude': -2.8212567
    },
    {
        'name': 'Cullompton',
        'latitude': 50.8579128,
        'longitude': -3.392809
    },
    {
        'name': 'Cumbernauld',
        'latitude': 55.9477764,
        'longitude': -3.9882568
    },
    {
        'name': 'Cumnock',
        'latitude': 55.4541678,
        'longitude': -4.2660498
    },
    {
        'name': 'Cupar',
        'latitude': 56.3193913,
        'longitude': -3.0116545
    },
    {
        'name': 'Cwmbran',
        'latitude': 51.6513456,
        'longitude': -3.0276774
    },
    {
        'name': 'Dalbeattie',
        'latitude': 54.9307016,
        'longitude': -3.8200724
    },
    {
        'name': 'Dalgety Bay',
        'latitude': 56.0370788,
        'longitude': -3.3548735
    },
    {
        'name': 'Dalkeith',
        'latitude': 55.8943361,
        'longitude': -3.0700445
    },
    {
        'name': 'Dalmellington',
        'latitude': 55.3232537,
        'longitude': -4.3970298
    },
    {
        'name': 'Dalry',
        'latitude': 55.7084782,
        'longitude': -4.7200896
    },
    {
        'name': 'Dalton-in-Furness',
        'latitude': 54.1576246,
        'longitude': -3.1794018
    },
    {
        'name': 'Darlaston',
        'latitude': 52.5733189,
        'longitude': -2.0355619
    },
    {
        'name': 'Darlington',
        'latitude': 54.5242081,
        'longitude': -1.5555812
    },
    {
        'name': 'Dartford',
        'latitude': 51.4443059,
        'longitude': 0.21807
    },
    {
        'name': 'Dartmouth',
        'latitude': 50.3514839,
        'longitude': -3.583844
    },
    {
        'name': 'Darvel',
        'latitude': 55.6097195,
        'longitude': -4.2818359
    },
    {
        'name': 'Darwen',
        'latitude': 53.6960957,
        'longitude': -2.4665093
    },
    {
        'name': 'Daventry',
        'latitude': 52.2578681,
        'longitude': -1.1626569
    },
    {
        'name': 'Dawley',
        'latitude': 52.6638156,
        'longitude': -2.4651923
    },
    {
        'name': 'Dawlish',
        'latitude': 50.5797391,
        'longitude': -3.468931
    },
    {
        'name': 'Deal',
        'latitude': 51.2239544,
        'longitude': 1.4027344
    },
    {
        'name': 'Deeping St James',
        'latitude': 52.6725169,
        'longitude': -0.3001694
    },
    {
        'name': 'Deeping St James',
        'latitude': 52.6725169,
        'longitude': -0.3001694
    },
    {
        'name': 'Denbigh',
        'latitude': 53.1853776,
        'longitude': -3.4178289
    },
    {
        'name': 'Denny',
        'latitude': 56.0237411,
        'longitude': -3.9081978
    },
    {
        'name': 'Denton',
        'latitude': 53.4547745,
        'longitude': -2.1153406
    },
    {
        'name': 'Dereham',
        'latitude': 52.6802052,
        'longitude': 0.9386329
    },
    {
        'name': 'Desborough',
        'latitude': 52.4413539,
        'longitude': -0.812513
    },
    {
        'name': 'Devizes',
        'latitude': 51.3525027,
        'longitude': -1.9958302
    },
    {
        'name': 'Dewsbury',
        'latitude': 53.6909103,
        'longitude': -1.6302142
    },
    {
        'name': 'Didcot',
        'latitude': 51.6056908,
        'longitude': -1.2467923
    },
    {
        'name': 'Dinas Powys',
        'latitude': 51.4334895,
        'longitude': -3.213502
    },
    {
        'name': 'Dingwall',
        'latitude': 57.5954797,
        'longitude': -4.4284337
    },
    {
        'name': 'Dinnington',
        'latitude': 53.3692237,
        'longitude': -1.2035179
    },
    {
        'name': 'Diss',
        'latitude': 52.37662336,
        'longitude': 1.113689989
    },
    {
        'name': 'Diss',
        'latitude': 52.3769148,
        'longitude': 1.1088804
    },
    {
        'name': 'Diss',
        'latitude': 52.37662336,
        'longitude': 1.113689989
    },
    {
        'name': 'Dolgellau',
        'latitude': 52.7427116,
        'longitude': -3.8856291
    },
    {
        'name': 'Dollar',
        'latitude': 56.1628355,
        'longitude': -3.6740886
    },
    {
        'name': 'Doncaster',
        'latitude': 53.5227681,
        'longitude': -1.1335312
    },
    {
        'name': 'Dorchester',
        'latitude': 50.7132064,
        'longitude': -2.4371229
    },
    {
        'name': 'Dorking',
        'latitude': 51.22839927,
        'longitude': -0.335089397
    },
    {
        'name': 'Dorking',
        'latitude': 51.2325184,
        'longitude': -0.3306724
    },
    {
        'name': 'Dornoch',
        'latitude': 57.8796955,
        'longitude': -4.0278869,
        'zoom': [7, 8]
    },
    {
        'name': 'Dover',
        'latitude': 51.1251275,
        'longitude': 1.3134228
    },
    {
        'name': 'Dovercourt',
        'latitude': 51.9339114,
        'longitude': 1.2776636
    },
    {
        'name': 'Downham Market',
        'latitude': 52.6025283,
        'longitude': 0.3773258
    },
    {
        'name': 'Driffield',
        'latitude': 54.0060463,
        'longitude': -0.4388029,
        'zoom': [7, 8]
    },
    {
        'name': 'Droitwich Spa',
        'latitude': 52.26851,
        'longitude': -2.1486075
    },
    {
        'name': 'Dronfield',
        'latitude': 53.3006335,
        'longitude': -1.4659753
    },
    {
        'name': 'Droylsden',
        'latitude': 53.4786034,
        'longitude': -2.1491964
    },
    {
        'name': 'Dudley',
        'latitude': 52.5110832,
        'longitude': -2.0816813
    },
    {
        'name': 'Dufftown',
        'latitude': 57.4449043,
        'longitude': -3.1283484
    },
    {
        'name': 'Dukinfield',
        'latitude': 53.4757748,
        'longitude': -2.0930306
    },
    {
        'name': 'Dulverton',
        'latitude': 51.0401391,
        'longitude': -3.5501607
    },
    {
        'name': 'Dumbarton',
        'latitude': 55.9432443,
        'longitude': -4.5708479
    },
    {
        'name': 'Dumfries',
        'latitude': 55.069836,
        'longitude': -3.6092292,
        'zoom': [7, 8]
    },
    {
        'name': 'Dunbar',
        'latitude': 56.0021385,
        'longitude': -2.5158237
    },
    {
        'name': 'Dunblane',
        'latitude': 56.1883108,
        'longitude': -3.9640877
    },
    {
        'name': 'Dunfermline',
        'latitude': 56.06831299,
        'longitude': -3.437211531
    },
    {
        'name': 'Dunfermline',
        'latitude': 56.0713724,
        'longitude': -3.4616183
    },
    {
        'name': 'Dunkeld',
        'latitude': 56.5655711,
        'longitude': -3.5862546
    },
    {
        'name': 'Dunoon',
        'latitude': 55.9470831,
        'longitude': -4.924916
    },
    {
        'name': 'Duns',
        'latitude': 55.777842,
        'longitude': -2.3438476
    },
    {
        'name': 'Dunstable',
        'latitude': 51.8861316,
        'longitude': -0.5209341
    },
    {
        'name': 'Dursley',
        'latitude': 51.6811933,
        'longitude': -2.3551877
    },
    {
        'name': 'Dursley',
        'latitude': 51.68160117,
        'longitude': -2.353178072
    },
    {
        'name': 'Dyce',
        'latitude': 57.2053823,
        'longitude': -2.1895292
    },
    {
        'name': 'Eaglescliffe',
        'latitude': 54.5313007,
        'longitude': -1.3483509
    },
    {
        'name': 'Eaglesham',
        'latitude': 55.7393437,
        'longitude': -4.2770008
    },
    {
        'name': 'Ealing',
        'latitude': 51.5126553,
        'longitude': -0.3051952
    },
    {
        'name': 'Earby',
        'latitude': 53.9160366,
        'longitude': -2.1426716
    },
    {
        'name': 'Earl Shilton',
        'latitude': 52.5791017,
        'longitude': -1.3049367
    },
    {
        'name': 'Earlestown',
        'latitude': 53.4518979,
        'longitude': -2.6424988
    },
    {
        'name': 'Easingwold',
        'latitude': 54.1214102,
        'longitude': -1.1925879
    },
    {
        'name': 'East Calder',
        'latitude': 55.8949497,
        'longitude': -3.4642933
    },
    {
        'name': 'East Cowes',
        'latitude': 50.7594841,
        'longitude': -1.2852106
    },
    {
        'name': 'East Finchley',
        'latitude': 51.5890823,
        'longitude': -0.166091
    },
    {
        'name': 'East Grinstead',
        'latitude': 51.1322179,
        'longitude': -0.0117661
    },
    {
        'name': 'East Ham',
        'latitude': 51.5329628,
        'longitude': 0.0553201
    },
    {
        'name': 'East Kilbride',
        'latitude': 55.760176,
        'longitude': -4.179078
    },
    {
        'name': 'Eastbourne',
        'latitude': 50.7685761,
        'longitude': 0.2957854
    },
    {
        'name': 'Eastleigh',
        'latitude': 50.9675938,
        'longitude': -1.3528183
    },
    {
        'name': 'Eastwood',
        'latitude': 53.0171751,
        'longitude': -1.30386
    },
    {
        'name': 'Ebbw Vale',
        'latitude': 51.7812925,
        'longitude': -3.2084383
    },
    {
        'name': 'Eccles',
        'latitude': 53.4840887,
        'longitude': -2.3375175
    },
    {
        'name': 'Eccleshall',
        'latitude': 52.858059,
        'longitude': -2.2511202
    },
    {
        'name': 'Eckington',
        'latitude': 53.3089836,
        'longitude': -1.3557936
    },
    {
        'name': 'Edenbridge',
        'latitude': 51.1958271,
        'longitude': 0.0639341
    },
    {
        'name': 'Edgware',
        'latitude': 51.6108045,
        'longitude': -0.279305
    },
    {
        'name': 'Egham',
        'latitude': 51.4312585,
        'longitude': -0.5473085
    },
    {
        'name': 'Egham',
        'latitude': 51.42969201,
        'longitude': -0.549294749
    },
    {
        'name': 'Egremont',
        'latitude': 54.4838316,
        'longitude': -3.5327921
    },
    {
        'name': 'Elderslie',
        'latitude': 55.8354647,
        'longitude': -4.4905294
    },
    {
        'name': 'Elgin',
        'latitude': 57.6487891,
        'longitude': -3.3148459,
        'zoom': [7, 8]
    },
    {
        'name': 'Elland',
        'latitude': 53.6858377,
        'longitude': -1.8377141
    },
    {
        'name': 'Ellesmere',
        'latitude': 52.9074234,
        'longitude': -2.8938664
    },
    {
        'name': 'Ellesmere Port',
        'latitude': 53.2789347,
        'longitude': -2.9022507
    },
    {
        'name': 'Ellon',
        'latitude': 57.365049,
        'longitude': -2.0710305
    },
    {
        'name': 'Eltham',
        'latitude': 51.4505687,
        'longitude': 0.0541253
    },
    {
        'name': 'Emsworth',
        'latitude': 50.8473211,
        'longitude': -0.9371343
    },
    {
        'name': 'Emsworth',
        'latitude': 50.84767775,
        'longitude': -0.94515938
    },
    {
        'name': 'Emsworth',
        'latitude': 50.84767775,
        'longitude': -0.94515938
    },
    {
        'name': 'Enfield',
        'latitude': 51.6520851,
        'longitude': -0.0810175
    },
    {
        'name': 'Epping',
        'latitude': 51.6982689,
        'longitude': 0.1102918
    },
    {
        'name': 'Epsom',
        'latitude': 51.3326098,
        'longitude': -0.2678212
    },
    {
        'name': 'Epworth',
        'latitude': 53.5243031,
        'longitude': -0.8215111
    },
    {
        'name': 'Erdington',
        'latitude': 52.5232514,
        'longitude': -1.8395109
    },
    {
        'name': 'Erskine',
        'latitude': 55.9031562,
        'longitude': -4.4521616
    },
    {
        'name': 'Esher',
        'latitude': 51.37292164,
        'longitude': -0.364817256
    },
    {
        'name': 'Esher',
        'latitude': 51.3693929,
        'longitude': -0.3654406
    },
    {
        'name': 'Eton',
        'latitude': 51.4885287,
        'longitude': -0.6090899
    },
    {
        'name': 'Evesham',
        'latitude': 52.0940158,
        'longitude': -1.9483083
    },
    {
        'name': 'Ewloe',
        'latitude': 53.1874382,
        'longitude': -3.0505097
    },
    {
        'name': 'Exmouth',
        'latitude': 50.6190962,
        'longitude': -3.4146801,
        'zoom': [7, 8]
    },
    {
        'name': 'Eye',
        'latitude': 52.3226292,
        'longitude': 1.1463709
    },
    {
        'name': 'Eyemouth',
        'latitude': 55.8722469,
        'longitude': -2.0893924
    },
    {
        'name': 'Failsworth',
        'latitude': 53.5149749,
        'longitude': -2.1500325
    },
    {
        'name': 'Fairford',
        'latitude': 51.7079224,
        'longitude': -1.7773034
    },
    {
        'name': 'Fakenham',
        'latitude': 52.829919,
        'longitude': 0.8477322
    },
    {
        'name': 'Falkirk',
        'latitude': 55.9991959,
        'longitude': -3.784376
    },
    {
        'name': 'Falmouth',
        'latitude': 50.1552197,
        'longitude': -5.0688262
    },
    {
        'name': 'Fareham',
        'latitude': 50.8526637,
        'longitude': -1.1783134
    },
    {
        'name': 'Faringdon',
        'latitude': 51.6582582,
        'longitude': -1.5837123
    },
    {
        'name': 'Farnborough',
        'latitude': 51.2918693,
        'longitude': -0.7539836
    },
    {
        'name': 'Farnham',
        'latitude': 51.2151749,
        'longitude': -0.7984854
    },
    {
        'name': 'Farnworth',
        'latitude': 53.5485989,
        'longitude': -2.3969984
    },
    {
        'name': 'Farsley',
        'latitude': 53.8143915,
        'longitude': -1.6697743
    },
    {
        'name': 'Fauldhouse',
        'latitude': 55.8275611,
        'longitude': -3.7071618
    },
    {
        'name': 'Faversham',
        'latitude': 51.3144088,
        'longitude': 0.8911894
    },
    {
        'name': 'Fazeley',
        'latitude': 52.6149491,
        'longitude': -1.699458
    },
    {
        'name': 'Featherstone',
        'latitude': 53.6776918,
        'longitude': -1.3582713
    },
    {
        'name': 'Felixstowe',
        'latitude': 51.9639098,
        'longitude': 1.3515106
    },
    {
        'name': 'Felixstowe',
        'latitude': 51.96907198,
        'longitude': 1.34331175
    },
    {
        'name': 'Felpham',
        'latitude': 50.7904582,
        'longitude': -0.65412
    },
    {
        'name': 'Fenton',
        'latitude': 52.9982217,
        'longitude': -2.1566384
    },
    {
        'name': 'Ferndown',
        'latitude': 50.8053314,
        'longitude': -1.8909165
    },
    {
        'name': 'Filey',
        'latitude': 54.2096884,
        'longitude': -0.2888382
    },
    {
        'name': 'Filton',
        'latitude': 51.5117457,
        'longitude': -2.5720005
    },
    {
        'name': 'Finedon',
        'latitude': 52.3391456,
        'longitude': -0.6556148
    },
    {
        'name': 'Fishguard',
        'latitude': 51.9938353,
        'longitude': -4.97681,
        'zoom': [7, 8]
    },
    {
        'name': 'Fleet',
        'latitude': 51.2809935,
        'longitude': -0.8418324
    },
    {
        'name': 'Fleetwood',
        'latitude': 53.9246318,
        'longitude': -3.0076372
    },
    {
        'name': 'Flint',
        'latitude': 53.2492828,
        'longitude': -3.1345262
    },
    {
        'name': 'Flitwick',
        'latitude': 52.0043402,
        'longitude': -0.4937512
    },
    {
        'name': 'Folkestone',
        'latitude': 51.0791335,
        'longitude': 1.1794073
    },
    {
        'name': 'Foots Cray',
        'latitude': 51.4186732,
        'longitude': 0.1180187
    },
    {
        'name': 'Fordingbridge',
        'latitude': 50.926804,
        'longitude': -1.7916976
    },
    {
        'name': 'Fordwich',
        'latitude': 51.2953653,
        'longitude': 1.1256168
    },
    {
        'name': 'Forfar',
        'latitude': 56.6443013,
        'longitude': -2.888212
    },
    {
        'name': 'Formby',
        'latitude': 53.5563035,
        'longitude': -3.0656565
    },
    {
        'name': 'Forres',
        'latitude': 57.609864,
        'longitude': -3.613215
    },
    {
        'name': 'Fort William',
        'latitude': 56.8178285,
        'longitude': -5.110974,
        'zoom': [7, 8]
    },
    {
        'name': 'Fortrose',
        'latitude': 57.5817836,
        'longitude': -4.1305039
    },
    {
        'name': 'Fowey',
        'latitude': 50.3357786,
        'longitude': -4.6365952
    },
    {
        'name': 'Framlingham',
        'latitude': 52.2220579,
        'longitude': 1.3415864
    },
    {
        'name': 'Fraserburgh',
        'latitude': 57.6935974,
        'longitude': -2.0051497
    },
    {
        'name': 'Frimley',
        'latitude': 51.31596921,
        'longitude': -0.738313862
    },
    {
        'name': 'Frimley',
        'latitude': 51.3154908,
        'longitude': -0.7353134
    },
    {
        'name': 'Frinton-on-Sea',
        'latitude': 51.8293064,
        'longitude': 1.2462138
    },
    {
        'name': 'Frodsham',
        'latitude': 53.2963636,
        'longitude': -2.7114845
    },
    {
        'name': 'Frome',
        'latitude': 51.2270558,
        'longitude': -2.3192971
    },
    {
        'name': 'Fulham',
        'latitude': 51.4744221,
        'longitude': -0.2060772
    },
    {
        'name': 'Gainsborough',
        'latitude': 53.3968736,
        'longitude': -0.7739577
    },
    {
        'name': 'Galashiels',
        'latitude': 55.61454212,
        'longitude': -2.807424833
    },
    {
        'name': 'Galashiels',
        'latitude': 55.616418,
        'longitude': -2.8070791
    },
    {
        'name': 'Galston',
        'latitude': 55.6001857,
        'longitude': -4.3777801
    },
    {
        'name': 'Garforth',
        'latitude': 53.7904814,
        'longitude': -1.392516
    },
    {
        'name': 'Garstang',
        'latitude': 53.9015756,
        'longitude': -2.7734763
    },
    {
        'name': 'Gartcosh',
        'latitude': 55.888782,
        'longitude': -4.0826367
    },
    {
        'name': 'Gateshead',
        'latitude': 54.9625789,
        'longitude': -1.6019294
    },
    {
        'name': 'Gelli',
        'latitude': 51.6440878,
        'longitude': -3.476644
    },
    {
        'name': 'Gelligaer',
        'latitude': 51.6640292,
        'longitude': -3.2506937
    },
    {
        'name': 'Gerrards Cross',
        'latitude': 51.5878131,
        'longitude': -0.5537126
    },
    {
        'name': 'Giffnock',
        'latitude': 55.8048318,
        'longitude': -4.2946743
    },
    {
        'name': 'Gillingham',
        'latitude': 51.37734821,
        'longitude': 0.589019366
    },
    {
        'name': 'Gillingham',
        'latitude': 51.0385367,
        'longitude': -2.2766784
    },
    {
        'name': 'Gillingham',
        'latitude': 51.3876562,
        'longitude': 0.5457712
    },
    {
        'name': 'Girvan',
        'latitude': 55.2413151,
        'longitude': -4.8553579,
        'zoom': [7, 8]
    },
    {
        'name': 'Glastonbury',
        'latitude': 51.14804,
        'longitude': -2.716577
    },
    {
        'name': 'Glenrothes',
        'latitude': 56.1961905,
        'longitude': -3.1716324
    },
    {
        'name': 'Glossop',
        'latitude': 53.4433552,
        'longitude': -1.9499173
    },
    {
        'name': 'Glyn-neath',
        'latitude': 51.7484124,
        'longitude': -3.6169296
    },
    {
        'name': 'Godalming',
        'latitude': 51.1857892,
        'longitude': -0.6149074
    },
    {
        'name': 'Golborne',
        'latitude': 53.4756118,
        'longitude': -2.5994277
    },
    {
        'name': 'Gomersal',
        'latitude': 53.7330283,
        'longitude': -1.6867746
    },
    {
        'name': 'Goole',
        'latitude': 53.7035625,
        'longitude': -0.8715949
    },
    {
        'name': 'Gorebridge',
        'latitude': 55.843548,
        'longitude': -3.0478409
    },
    {
        'name': 'Gorseinon',
        'latitude': 51.6693797,
        'longitude': -4.0415918
    },
    {
        'name': 'Gosport',
        'latitude': 50.7952074,
        'longitude': -1.1210853
    },
    {
        'name': 'Gourock',
        'latitude': 55.9607584,
        'longitude': -4.8187835
    },
    {
        'name': 'Grange-over-Sands',
        'latitude': 54.1930633,
        'longitude': -2.9094791
    },
    {
        'name': 'Grangemouth',
        'latitude': 56.0189027,
        'longitude': -3.7230303
    },
    {
        'name': 'Grantham',
        'latitude': 52.90999623,
        'longitude': -0.646200479
    },
    {
        'name': 'Grantham',
        'latitude': 52.9133829,
        'longitude': -0.6426582
    },
    {
        'name': 'Grantown-on-Spey',
        'latitude': 57.3295089,
        'longitude': -3.6104018
    },
    {
        'name': 'Gravesend',
        'latitude': 51.43197597,
        'longitude': 0.391369765
    },
    {
        'name': 'Gravesend',
        'latitude': 51.4422972,
        'longitude': 0.3696206
    },
    {
        'name': 'Grays',
        'latitude': 51.4780898,
        'longitude': 0.3233131
    },
    {
        'name': 'Great Dunmow',
        'latitude': 51.8720219,
        'longitude': 0.3628331
    },
    {
        'name': 'Great Harwood',
        'latitude': 53.7867282,
        'longitude': -2.4067502
    },
    {
        'name': 'Great Missenden',
        'latitude': 51.7046508,
        'longitude': -0.7086592
    },
    {
        'name': 'Great Torrington',
        'latitude': 50.9520536,
        'longitude': -4.1428753
    },
    {
        'name': 'Great Wyrley',
        'latitude': 52.6570862,
        'longitude': -2.0152201
    },
    {
        'name': 'Great Yarmouth',
        'latitude': 52.6071742,
        'longitude': 1.7314845
    },
    {
        'name': 'Greenock',
        'latitude': 55.9473423,
        'longitude': -4.7564721
    },
    {
        'name': 'Greenwich',
        'latitude': 51.4820845,
        'longitude': -0.0045417
    },
    {
        'name': 'Gretna',
        'latitude': 54.9953097,
        'longitude': -3.0669404
    },
    {
        'name': 'Grimsby',
        'latitude': 53.5677371,
        'longitude': -0.0736289
    },
    {
        'name': 'Guildford',
        'latitude': 51.2356068,
        'longitude': -0.5732063
    },
    {
        'name': 'Guisborough',
        'latitude': 54.5359551,
        'longitude': -1.051085
    },
    {
        'name': 'Guiseley',
        'latitude': 53.8748297,
        'longitude': -1.707511
    },
    {
        'name': 'Hackney',
        'latitude': 51.5432402,
        'longitude': -0.0493621
    },
    {
        'name': 'Haddington',
        'latitude': 55.9556144,
        'longitude': -2.779317
    },
    {
        'name': 'Hadfield',
        'latitude': 53.46276807,
        'longitude': -1.973207738
    },
    {
        'name': 'Hadfield',
        'latitude': 53.46276807,
        'longitude': -1.973207738
    },
    {
        'name': 'Hadfield',
        'latitude': 53.4643526,
        'longitude': -1.9701694
    },
    {
        'name': 'Hadleigh',
        'latitude': 52.0441822,
        'longitude': 0.9542292
    },
    {
        'name': 'Hadleigh',
        'latitude': 51.553924,
        'longitude': 0.6086965
    },
    {
        'name': 'Hagley',
        'latitude': 52.4229627,
        'longitude': -2.1416743
    },
    {
        'name': 'Hailsham',
        'latitude': 50.8648011,
        'longitude': 0.2578904
    },
    {
        'name': 'Halesowen',
        'latitude': 52.4492074,
        'longitude': -2.0514646
    },
    {
        'name': 'Halesworth',
        'latitude': 52.3418147,
        'longitude': 1.5001649
    },
    {
        'name': 'Halewood',
        'latitude': 53.3681441,
        'longitude': -2.8185838
    },
    {
        'name': 'Halifax',
        'latitude': 53.7229229,
        'longitude': -1.8604874
    },
    {
        'name': 'Halstead',
        'latitude': 51.9437801,
        'longitude': 0.6391574
    },
    {
        'name': 'Haltwhistle',
        'latitude': 54.9705304,
        'longitude': -2.4582171
    },
    {
        'name': 'Hamilton',
        'latitude': 55.7759095,
        'longitude': -4.033442
    },
    {
        'name': 'Hammersmith',
        'latitude': 51.4920377,
        'longitude': -0.2236401
    },
    {
        'name': 'Hampstead',
        'latitude': 51.5580835,
        'longitude': -0.1737206
    },
    {
        'name': 'Hanley',
        'latitude': 53.0259916,
        'longitude': -2.1753695
    },
    {
        'name': 'Harborne',
        'latitude': 52.4595363,
        'longitude': -1.9503355
    },
    {
        'name': 'Harlech',
        'latitude': 52.8587665,
        'longitude': -4.10745
    },
    {
        'name': 'Harleston',
        'latitude': 52.4017973,
        'longitude': 1.2990762
    },
    {
        'name': 'Harlow',
        'latitude': 51.7676194,
        'longitude': 0.0974893
    },
    {
        'name': 'Harpenden',
        'latitude': 51.8214567,
        'longitude': -0.3515703
    },
    {
        'name': 'Harrogate',
        'latitude': 53.9921491,
        'longitude': -1.5391039
    },
    {
        'name': 'Harrow',
        'latitude': 51.581091,
        'longitude': -0.337475
    },
    {
        'name': 'Hartland',
        'latitude': 50.9927936,
        'longitude': -4.4800636
    },
    {
        'name': 'Hartlepool',
        'latitude': 54.6857276,
        'longitude': -1.2093696
    },
    {
        'name': 'Harwich',
        'latitude': 51.9445801,
        'longitude': 1.2898522
    },
    {
        'name': 'Haslemere',
        'latitude': 51.08836334,
        'longitude': -0.72162731
    },
    {
        'name': 'Haslemere',
        'latitude': 51.08836334,
        'longitude': -0.72162731
    },
    {
        'name': 'Haslemere',
        'latitude': 51.0876062,
        'longitude': -0.7097768
    },
    {
        'name': 'Haslemere',
        'latitude': 51.08836334,
        'longitude': -0.72162731
    },
    {
        'name': 'Haslingden',
        'latitude': 53.7049596,
        'longitude': -2.325692
    },
    {
        'name': 'Hastings',
        'latitude': 50.8553888,
        'longitude': 0.5824703
    },
    {
        'name': 'Hatfield',
        'latitude': 53.5745642,
        'longitude': -1.0052281
    },
    {
        'name': 'Hatfield',
        'latitude': 51.7634675,
        'longitude': -0.2258741
    },
    {
        'name': 'Hatherleigh',
        'latitude': 50.820154,
        'longitude': -4.0723781
    },
    {
        'name': 'Havant',
        'latitude': 50.8519351,
        'longitude': -0.9821263
    },
    {
        'name': 'Haverfordwest',
        'latitude': 51.8023297,
        'longitude': -4.9651074
    },
    {
        'name': 'Haverhill',
        'latitude': 52.0832721,
        'longitude': 0.4353932
    },
    {
        'name': 'Hawes',
        'latitude': 54.3039411,
        'longitude': -2.1965194
    },
    {
        'name': 'Hawick',
        'latitude': 55.422564,
        'longitude': -2.7866951
    },
    {
        'name': 'Haxby',
        'latitude': 54.0175196,
        'longitude': -1.0730544
    },
    {
        'name': 'Hay on Wye',
        'latitude': 52.0744595,
        'longitude': -3.1243132
    },
    {
        'name': 'Hayle',
        'latitude': 50.1871402,
        'longitude': -5.4178169
    },
    {
        'name': 'Haywards Heath',
        'latitude': 50.9999616,
        'longitude': -0.1049747
    },
    {
        'name': 'Heanor',
        'latitude': 53.0145821,
        'longitude': -1.3574966
    },
    {
        'name': 'Heathfield',
        'latitude': 50.96715866,
        'longitude': 0.251448578
    },
    {
        'name': 'Heathfield',
        'latitude': 50.9717443,
        'longitude': 0.2517025
    },
    {
        'name': 'Hebburn',
        'latitude': 54.9726376,
        'longitude': -1.5173449
    },
    {
        'name': 'Hebden Bridge',
        'latitude': 53.7406425,
        'longitude': -2.0092336
    },
    {
        'name': 'Heckmondwike',
        'latitude': 53.7074371,
        'longitude': -1.6754499
    },
    {
        'name': 'Hedge End',
        'latitude': 50.9154346,
        'longitude': -1.3071423
    },
    {
        'name': 'Hednesford',
        'latitude': 52.7113843,
        'longitude': -2.0025384
    },
    {
        'name': 'Hedon',
        'latitude': 53.7410681,
        'longitude': -0.2019029
    },
    {
        'name': 'Helensburgh',
        'latitude': 56.0033464,
        'longitude': -4.7342935
    },
    {
        'name': 'Helmsley',
        'latitude': 54.246172,
        'longitude': -1.0612597
    },
    {
        'name': 'Helston',
        'latitude': 50.1016731,
        'longitude': -5.273032
    },
    {
        'name': 'Hemel Hempstead',
        'latitude': 51.7511784,
        'longitude': -0.472528
    },
    {
        'name': 'Hemsworth',
        'latitude': 53.6131631,
        'longitude': -1.36018
    },
    {
        'name': 'Henley-in-Arden',
        'latitude': 52.290713,
        'longitude': -1.780685
    },
    {
        'name': 'Henley-on-Thames',
        'latitude': 51.5375786,
        'longitude': -0.9050287
    },
    {
        'name': 'Herne Bay',
        'latitude': 51.3719507,
        'longitude': 1.1306951
    },
    {
        'name': 'Herne Bay',
        'latitude': 51.3648019,
        'longitude': 1.13246858
    },
    {
        'name': 'Hertford',
        'latitude': 51.7957409,
        'longitude': -0.078521
    },
    {
        'name': 'Hessle',
        'latitude': 53.7231588,
        'longitude': -0.4349309
    },
    {
        'name': 'Heswall',
        'latitude': 53.3283218,
        'longitude': -3.1002176
    },
    {
        'name': 'Hetton-le-Hole',
        'latitude': 54.8212582,
        'longitude': -1.4527957
    },
    {
        'name': 'Hexham',
        'latitude': 54.971478,
        'longitude': -2.1017927
    },
    {
        'name': 'Heysham',
        'latitude': 54.0494955,
        'longitude': -2.890311
    },
    {
        'name': 'Heywood',
        'latitude': 53.5967685,
        'longitude': -2.2239715
    },
    {
        'name': 'High Bentham',
        'latitude': 54.1216955,
        'longitude': -2.5146032
    },
    {
        'name': 'High Wycombe',
        'latitude': 51.62717102,
        'longitude': -0.765381168
    },
    {
        'name': 'High Wycombe',
        'latitude': 51.627422,
        'longitude': -0.7484153
    },
    {
        'name': 'Higham Ferrers',
        'latitude': 52.3060303,
        'longitude': -0.5923318
    },
    {
        'name': 'Highbridge',
        'latitude': 51.2200079,
        'longitude': -2.9764141
    },
    {
        'name': 'Highcliffe-on-Sea',
        'latitude': 50.7409154,
        'longitude': -1.7058556
    },
    {
        'name': 'Highworth',
        'latitude': 51.6313857,
        'longitude': -1.7136365
    },
    {
        'name': 'Hinckley',
        'latitude': 52.5410591,
        'longitude': -1.3729379
    },
    {
        'name': 'Hindley',
        'latitude': 53.5335298,
        'longitude': -2.5778214
    },
    {
        'name': 'Hingham',
        'latitude': 52.5796849,
        'longitude': 0.9845613
    },
    {
        'name': 'Hitchin',
        'latitude': 51.9464129,
        'longitude': -0.2791646
    },
    {
        'name': 'Hoddesdon',
        'latitude': 51.7616709,
        'longitude': -0.0112898
    },
    {
        'name': 'Holbeach',
        'latitude': 52.80421,
        'longitude': 0.0180043
    },
    {
        'name': 'Holland-on-Sea',
        'latitude': 51.8058061,
        'longitude': 1.1888035
    },
    {
        'name': 'Holmfirth',
        'latitude': 53.5703517,
        'longitude': -1.7870301
    },
    {
        'name': 'Holsworthy',
        'latitude': 50.8123783,
        'longitude': -4.3526341
    },
    {
        'name': 'Holt',
        'latitude': 53.0784893,
        'longitude': -2.8824103
    },
    {
        'name': 'Holt',
        'latitude': 52.9054382,
        'longitude': 1.0928322
    },
    {
        'name': 'Holyhead',
        'latitude': 53.3106715,
        'longitude': -4.6330966,
        'zoom': [7, 8]
    },
    {
        'name': 'Holytown',
        'latitude': 55.8212588,
        'longitude': -3.9767761
    },
    {
        'name': 'Holywell',
        'latitude': 53.2714061,
        'longitude': -3.2212991
    },
    {
        'name': 'Honiton',
        'latitude': 50.7981119,
        'longitude': -3.1924599
    },
    {
        'name': 'Hook',
        'latitude': 51.2830718,
        'longitude': -0.9593648
    },
    {
        'name': 'Horley',
        'latitude': 51.1716895,
        'longitude': -0.1640754
    },
    {
        'name': 'Horncastle',
        'latitude': 53.2088239,
        'longitude': -0.1171111
    },
    {
        'name': 'Hornsea',
        'latitude': 53.9134596,
        'longitude': -0.1689412
    },
    {
        'name': 'Horsforth',
        'latitude': 53.8392125,
        'longitude': -1.6399896
    },
    {
        'name': 'Horsham',
        'latitude': 51.0630273,
        'longitude': -0.3295028
    },
    {
        'name': 'Horwich',
        'latitude': 53.5965362,
        'longitude': -2.5409992
    },
    {
        'name': 'Houghton Regis',
        'latitude': 51.90766986,
        'longitude': -0.514070306
    },
    {
        'name': 'Houghton Regis',
        'latitude': 51.904659,
        'longitude': -0.5198277
    },
    {
        'name': 'Houghton-le-Spring',
        'latitude': 54.8406536,
        'longitude': -1.4699279
    },
    {
        'name': 'Hounslow',
        'latitude': 51.4686132,
        'longitude': -0.3613471
    },
    {
        'name': 'Howden',
        'latitude': 53.7473189,
        'longitude': -0.8622549
    },
    {
        'name': 'Hoylake',
        'latitude': 53.3917719,
        'longitude': -3.1783429
    },
    {
        'name': 'Hoyland',
        'latitude': 53.5022442,
        'longitude': -1.4442458
    },
    {
        'name': 'Hucknall',
        'latitude': 53.0383633,
        'longitude': -1.2035443
    },
    {
        'name': 'Huddersfield',
        'latitude': 53.6466645,
        'longitude': -1.7822482
    },
    {
        'name': 'Hugh Town',
        'latitude': 49.9145586,
        'longitude': -6.3153609
    },
    {
        'name': 'Hungerford',
        'latitude': 51.4154718,
        'longitude': -1.518917
    },
    {
        'name': 'Hunstanton',
        'latitude': 52.9393841,
        'longitude': 0.4901743
    },
    {
        'name': 'Huntingdon',
        'latitude': 52.3314292,
        'longitude': -0.1847723
    },
    {
        'name': 'Huntly',
        'latitude': 57.4474193,
        'longitude': -2.7863399
    },
    {
        'name': 'Huyton',
        'latitude': 53.4114462,
        'longitude': -2.8382486
    },
    {
        'name': 'Hyde',
        'latitude': 53.4508687,
        'longitude': -2.0782603
    },
    {
        'name': 'Hythe',
        'latitude': 51.0691421,
        'longitude': 1.0841634
    },
    {
        'name': 'Hythe',
        'latitude': 50.8694502,
        'longitude': -1.4032588
    },
    {
        'name': 'Ilford',
        'latitude': 51.5582734,
        'longitude': 0.0711669
    },
    {
        'name': 'Ilfracombe',
        'latitude': 51.2076674,
        'longitude': -4.1254662
    },
    {
        'name': 'Ilkeston',
        'latitude': 52.9710869,
        'longitude': -1.307171
    },
    {
        'name': 'Ilkley',
        'latitude': 53.9257254,
        'longitude': -1.824441
    },
    {
        'name': 'Ilminster',
        'latitude': 50.9267192,
        'longitude': -2.9102756
    },
    {
        'name': 'Immingham',
        'latitude': 53.6159963,
        'longitude': -0.2136727
    },
    {
        'name': 'Ingatestone',
        'latitude': 51.6710667,
        'longitude': 0.3858842
    },
    {
        'name': 'Ingleby Barwick',
        'latitude': 54.5191542,
        'longitude': -1.3180803
    },
    {
        'name': 'Innerleithen',
        'latitude': 55.6190744,
        'longitude': -3.0633843
    },
    {
        'name': 'Inveraray',
        'latitude': 56.2303715,
        'longitude': -5.0760666,
        'zoom': [7, 8]
    },
    {
        'name': 'Inverbervie',
        'latitude': 56.844524,
        'longitude': -2.2806005
    },
    {
        'name': 'Invergordon',
        'latitude': 57.6884029,
        'longitude': -4.1692103
    },
    {
        'name': 'Inverkeithing',
        'latitude': 56.0308767,
        'longitude': -3.3977498
    },
    {
        'name': 'Inverurie',
        'latitude': 57.2838703,
        'longitude': -2.3742165
    },
    {
        'name': 'Ipswich',
        'latitude': 52.0579495,
        'longitude': 1.1526345
    },
    {
        'name': 'Irlam',
        'latitude': 53.4488075,
        'longitude': -2.4223799
    },
    {
        'name': 'Irthlingborough',
        'latitude': 52.3261928,
        'longitude': -0.6128414
    },
    {
        'name': 'Irvine',
        'latitude': 55.6143121,
        'longitude': -4.6655591
    },
    {
        'name': 'Islington',
        'latitude': 51.5384287,
        'longitude': -0.0999051
    },
    {
        'name': 'Ivybridge',
        'latitude': 50.3918419,
        'longitude': -3.9177668
    },
    {
        'name': 'Jarrow',
        'latitude': 54.9812514,
        'longitude': -1.4908447
    },
    {
        'name': 'Jedburgh',
        'latitude': 55.4776435,
        'longitude': -2.5553768
    },
    {
        'name': 'Johnstone',
        'latitude': 55.835337,
        'longitude': -4.5133122
    },
    {
        'name': 'Kearsley',
        'latitude': 53.5401383,
        'longitude': -2.3779588
    },
    {
        'name': 'Keighley',
        'latitude': 53.8684021,
        'longitude': -1.9020456
    },
    {
        'name': 'Keith',
        'latitude': 57.5427292,
        'longitude': -2.9523291,
        'zoom': [7, 8]
    },
    {
        'name': 'Kelso',
        'latitude': 55.5983788,
        'longitude': -2.4338366
    },
    {
        'name': 'Kelty',
        'latitude': 56.1331961,
        'longitude': -3.3797816
    },
    {
        'name': 'Kempston',
        'latitude': 52.1192011,
        'longitude': -0.4930154
    },
    {
        'name': 'Kendal',
        'latitude': 54.3289795,
        'longitude': -2.747183
    },
    {
        'name': 'Kenilworth',
        'latitude': 52.3450526,
        'longitude': -1.5816028
    },
    {
        'name': 'Kensington',
        'latitude': 51.4989948,
        'longitude': -0.1991229
    },
    {
        'name': 'Kesgrave',
        'latitude': 52.063084,
        'longitude': 1.2370836
    },
    {
        'name': 'Keswick',
        'latitude': 54.6009281,
        'longitude': -3.137609
    },
    {
        'name': 'Kettering',
        'latitude': 52.3994233,
        'longitude': -0.728004
    },
    {
        'name': 'Keynsham',
        'latitude': 51.4149818,
        'longitude': -2.5006001
    },
    {
        'name': 'Kidderminster',
        'latitude': 52.3880787,
        'longitude': -2.2478582
    },
    {
        'name': 'Kidsgrove',
        'latitude': 53.08778,
        'longitude': -2.2385489
    },
    {
        'name': 'Kidwelly',
        'latitude': 51.7363873,
        'longitude': -4.3062309
    },
    {
        'name': 'Kidwelly',
        'latitude': 51.73620056,
        'longitude': -4.306635016
    },
    {
        'name': 'Kilbirnie',
        'latitude': 55.7554205,
        'longitude': -4.6862454
    },
    {
        'name': 'Kilburn',
        'latitude': 51.541882,
        'longitude': -0.1979358
    },
    {
        'name': 'Killamarsh',
        'latitude': 53.3236263,
        'longitude': -1.318428
    },
    {
        'name': 'Kilmarnock',
        'latitude': 55.6100589,
        'longitude': -4.4964652
    },
    {
        'name': 'Kilsyth',
        'latitude': 55.9765389,
        'longitude': -4.0559704
    },
    {
        'name': 'Kilwinning',
        'latitude': 55.6540048,
        'longitude': -4.6992011
    },
    {
        'name': 'Kimberley',
        'latitude': 52.9980159,
        'longitude': -1.2595297
    },
    {
        'name': 'Kincardine',
        'latitude': 56.0683954,
        'longitude': -3.7184637
    },
    {
        'name': 'Kings Lynn',
        'latitude': 52.7538673,
        'longitude': 0.3954774
    }, {
        'name': 'Kinghorn',
        'latitude': 56.06973704,
        'longitude': -3.183278498
    },
    {
        'name': 'Kinghorn',
        'latitude': 56.0707374,
        'longitude': -3.1742285
    },
    {
        'name': 'Kings Heath',
        'latitude': 52.4341996,
        'longitude': -1.8915624
    },
    {
        'name': 'Kings Langley',
        'latitude': 51.7135573,
        'longitude': -0.4503027
    },
    {
        'name': 'Kingsbridge',
        'latitude': 50.2848555,
        'longitude': -3.7789738
    },
    {
        'name': 'Kingsbury',
        'latitude': 52.5644762,
        'longitude': -1.6829673
    },
    {
        'name': 'Kingston upon Thames',
        'latitude': 51.4096275,
        'longitude': -0.3062621
    },
    {
        'name': 'Kingswear',
        'latitude': 50.3483582,
        'longitude': -3.5729928
    },
    {
        'name': 'Kingswood',
        'latitude': 51.4627405,
        'longitude': -2.5083916
    },
    {
        'name': 'Kington',
        'latitude': 52.2029156,
        'longitude': -3.028878
    },
    {
        'name': 'Kingussie',
        'latitude': 57.0802761,
        'longitude': -4.051164
    },
    {
        'name': 'Kinmel Bay',
        'latitude': 53.3119503,
        'longitude': -3.5167389
    },
    {
        'name': 'Kinross',
        'latitude': 56.2033706,
        'longitude': -3.4214864
    },
    {
        'name': 'Kintore',
        'latitude': 57.2369921,
        'longitude': -2.3455269
    },
    {
        'name': 'Kippax',
        'latitude': 53.7701302,
        'longitude': -1.3701581
    },
    {
        'name': 'Kirkby',
        'latitude': 53.4851525,
        'longitude': -2.898906
    },
    {
        'name': 'Kirkby Lonsdale',
        'latitude': 54.2018452,
        'longitude': -2.5967366
    },
    {
        'name': 'Kirkby Lonsdale',
        'latitude': 54.2018452,
        'longitude': -2.5967366
    },
    {
        'name': 'Kirkby Stephen',
        'latitude': 54.4734508,
        'longitude': -2.3485894
    },
    {
        'name': 'Kirkby-in-Ashfield',
        'latitude': 53.098935,
        'longitude': -1.2449102
    },
    {
        'name': 'Kirkbymoorside',
        'latitude': 54.2705199,
        'longitude': -0.9324661
    },
    {
        'name': 'Kirkcaldy',
        'latitude': 56.1110218,
        'longitude': -3.1582296
    },
    {
        'name': 'Kirkcudbright',
        'latitude': 54.8352482,
        'longitude': -4.0543927
    },
    {
        'name': 'Kirkham',
        'latitude': 53.7827278,
        'longitude': -2.8714885
    },
    {
        'name': 'Kirkintilloch',
        'latitude': 55.9383914,
        'longitude': -4.1549049
    },
    {
        'name': 'Kirkliston',
        'latitude': 55.95747053,
        'longitude': -3.404998674
    },
    {
        'name': 'Kirkliston',
        'latitude': 55.9560901,
        'longitude': -3.4019208
    },
    {
        'name': 'Kirkmuirhill',
        'latitude': 55.6661502,
        'longitude': -3.9197243
    },
    {
        'name': 'Kirkwall',
        'latitude': 58.9816049,
        'longitude': -2.960369
    },
    {
        'name': 'Kirriemuir',
        'latitude': 56.6731057,
        'longitude': -3.0043927
    },
    {
        'name': 'Kirton in Lindsey',
        'latitude': 53.4762984,
        'longitude': -0.590984
    },
    {
        'name': 'Knaresborough',
        'latitude': 54.0099825,
        'longitude': -1.462186
    },
    {
        'name': 'Knighton',
        'latitude': 52.3443502,
        'longitude': -3.0495618
    },
    {
        'name': 'Knottingley',
        'latitude': 53.7092062,
        'longitude': -1.238314
    },
    {
        'name': 'Knutsford',
        'latitude': 53.3025402,
        'longitude': -2.3716001
    },
    {
        'name': 'Lakenheath',
        'latitude': 52.4175635,
        'longitude': 0.5180418
    },
    {
        'name': 'Lampeter',
        'latitude': 52.1130523,
        'longitude': -4.078761
    },
    {
        'name': 'Lanark',
        'latitude': 55.6736271,
        'longitude': -3.7780361
    },
    {
        'name': 'Lancing',
        'latitude': 50.83112002,
        'longitude': -0.325081049
    },
    {
        'name': 'Langholm',
        'latitude': 55.1505895,
        'longitude': -2.9983313
    },
    {
        'name': 'Langley Mill',
        'latitude': 53.0206084,
        'longitude': -1.3356727
    },
    {
        'name': 'Langport',
        'latitude': 51.0375727,
        'longitude': -2.8280084
    },
    {
        'name': 'Larbert',
        'latitude': 56.021417,
        'longitude': -3.8306342
    },
    {
        'name': 'Largs',
        'latitude': 55.7948829,
        'longitude': -4.8695014
    },
    {
        'name': 'Larkhall',
        'latitude': 55.7401064,
        'longitude': -3.9746052
    },
    {
        'name': 'Laugharne',
        'latitude': 51.770035,
        'longitude': -4.4647048
    },
    {
        'name': 'Launceston',
        'latitude': 50.6365062,
        'longitude': -4.3604432
    },
    {
        'name': 'Laurencekirk',
        'latitude': 56.8323266,
        'longitude': -2.4679922,
        'zoom': [7, 8]
    },
    {
        'name': 'Leatherhead',
        'latitude': 51.2955038,
        'longitude': -0.3293689
    },
    {
        'name': 'Leatherhead',
        'latitude': 51.29833536,
        'longitude': -0.330424195
    },
    {
        'name': 'Lechlade',
        'latitude': 51.6944942,
        'longitude': -1.6922057
    },
    {
        'name': 'Lechlade',
        'latitude': 51.6944942,
        'longitude': -1.6922057
    },
    {
        'name': 'Ledbury',
        'latitude': 52.0357457,
        'longitude': -2.4287821
    },
    {
        'name': 'Lee',
        'latitude': 51.4565827,
        'longitude': 0.0114959
    },
    {
        'name': 'Lee-on-the-Solent',
        'latitude': 50.8028983,
        'longitude': -1.2013355
    },
    {
        'name': 'Lee-on-the-Solent',
        'latitude': 50.80274996,
        'longitude': -1.196815002
    },
    {
        'name': 'Leek',
        'latitude': 53.1057636,
        'longitude': -2.0242837
    },
    {
        'name': 'Leigh',
        'latitude': 53.4960455,
        'longitude': -2.5171495
    },
    {
        'name': 'Leighton Buzzard',
        'latitude': 51.9165794,
        'longitude': -0.6620551
    },
    {
        'name': 'Leiston',
        'latitude': 52.20648,
        'longitude': 1.5764329
    },
    {
        'name': 'Lennoxtown',
        'latitude': 55.9731494,
        'longitude': -4.1992427
    },
    {
        'name': 'Lenzie',
        'latitude': 55.9219552,
        'longitude': -4.1528178
    },
    {
        'name': 'Leominster',
        'latitude': 52.2273558,
        'longitude': -2.7375333
    },
    {
        'name': 'Lerwick',
        'latitude': 60.1531357,
        'longitude': -1.1427296
    },
    {
        'name': 'Lesmahagow',
        'latitude': 55.6392231,
        'longitude': -3.8864651
    },
    {
        'name': 'Letchworth',
        'latitude': 51.9767243,
        'longitude': -0.2305199
    },
    {
        'name': 'Leuchars',
        'latitude': 56.381411,
        'longitude': -2.8838885
    },
    {
        'name': 'Leven',
        'latitude': 56.1954351,
        'longitude': -2.99692
    },
    {
        'name': 'Lewes',
        'latitude': 50.8741265,
        'longitude': 0.0121129
    },
    {
        'name': 'Lewisham',
        'latitude': 51.4624325,
        'longitude': -0.0101331
    },
    {
        'name': 'Leyburn',
        'latitude': 54.3105988,
        'longitude': -1.8270091
    },
    {
        'name': 'Leyland',
        'latitude': 53.6904813,
        'longitude': -2.6991336
    },
    {
        'name': 'Lightwater',
        'latitude': 51.3494743,
        'longitude': -0.6701098
    },
    {
        'name': 'Lightwater',
        'latitude': 51.3489986,
        'longitude': -0.677802946
    },
    {
        'name': 'Limpsfield',
        'latitude': 51.25626671,
        'longitude': 0.026585675
    },
    {
        'name': 'Linlithgow',
        'latitude': 55.977167,
        'longitude': -3.6006234
    },
    {
        'name': 'Linslade',
        'latitude': 51.9170607,
        'longitude': -0.6760072
    },
    {
        'name': 'Linwood',
        'latitude': 55.8471992,
        'longitude': -4.502098
    },
    {
        'name': 'Liskeard',
        'latitude': 50.4546303,
        'longitude': -4.4644227
    },
    {
        'name': 'Litherland',
        'latitude': 53.4720901,
        'longitude': -2.995685
    },
    {
        'name': 'Littleborough',
        'latitude': 53.6410537,
        'longitude': -2.0914019
    },
    {
        'name': 'Littlehampton',
        'latitude': 50.8095801,
        'longitude': -0.5424424
    },
    {
        'name': 'Liversedge',
        'latitude': 53.7125328,
        'longitude': -1.6942603
    },
    {
        'name': 'Livingston',
        'latitude': 55.8831932,
        'longitude': -3.5149461
    },
    {
        'name': 'Llanberis',
        'latitude': 53.1212762,
        'longitude': -4.1277481
    },
    {
        'name': 'Llandeilo',
        'latitude': 51.8853935,
        'longitude': -3.9925144
    },
    {
        'name': 'Llandovery',
        'latitude': 51.9954586,
        'longitude': -3.7977071
    },
    {
        'name': 'Llandrindod Wells',
        'latitude': 52.2405222,
        'longitude': -3.3793614
    },
    {
        'name': 'Llandudno',
        'latitude': 53.322475,
        'longitude': -3.8243251
    },
    {
        'name': 'Llandudno Junction',
        'latitude': 53.2871333,
        'longitude': -3.8105036
    },
    {
        'name': 'Llanelli',
        'latitude': 51.6797331,
        'longitude': -4.1620223
    },
    {
        'name': 'Llanerchymedd',
        'latitude': 53.3285599,
        'longitude': -4.3769903
    },
    {
        'name': 'Llanfairfechan',
        'latitude': 53.2531977,
        'longitude': -3.9750615
    },
    {
        'name': 'Llangefni',
        'latitude': 53.2560949,
        'longitude': -4.3114568
    },
    {
        'name': 'Llangollen',
        'latitude': 52.9694033,
        'longitude': -3.1711111,
        'zoom': [7, 8]
    },
    {
        'name': 'Llanidloes',
        'latitude': 52.4482359,
        'longitude': -3.5410891
    },
    {
        'name': 'Llanrwst',
        'latitude': 53.1415318,
        'longitude': -3.7939311
    },
    {
        'name': 'Llantrisant',
        'latitude': 51.5414953,
        'longitude': -3.3745538
    },
    {
        'name': 'Llantwit Major',
        'latitude': 51.4083212,
        'longitude': -3.4857779
    },
    {
        'name': 'Llanwrtyd Wells',
        'latitude': 52.1044825,
        'longitude': -3.6386676
    },
    {
        'name': 'Loanhead',
        'latitude': 55.8780811,
        'longitude': -3.1487772
    },
    {
        'name': 'Lochgelly',
        'latitude': 56.1293219,
        'longitude': -3.30984
    },
    {
        'name': 'Lochgilphead',
        'latitude': 56.0375069,
        'longitude': -5.433147,
        'zoom': [7, 8]
    },
    {
        'name': 'Lochmaben',
        'latitude': 55.1289851,
        'longitude': -3.4414288
    },
    {
        'name': 'Lockerbie',
        'latitude': 55.1274321,
        'longitude': -3.3542699
    },
    {
        'name': 'Locks Heath',
        'latitude': 50.862922,
        'longitude': -1.2724227
    },
    {
        'name': 'Loddon',
        'latitude': 52.5349806,
        'longitude': 1.4817432
    },
    {
        'name': 'Loftus',
        'latitude': 54.5537038,
        'longitude': -0.8852807
    },
    {
        'name': 'Long Eaton',
        'latitude': 52.89388287,
        'longitude': -1.272402434
    },
    {
        'name': 'Long Eaton',
        'latitude': 52.8985715,
        'longitude': -1.270813
    },
    {
        'name': 'Long Stratton',
        'latitude': 52.4878256,
        'longitude': 1.233093
    },
    {
        'name': 'Long Sutton',
        'latitude': 52.7862774,
        'longitude': 0.1201796
    },
    {
        'name': 'Longridge',
        'latitude': 53.8299124,
        'longitude': -2.6033483
    },
    {
        'name': 'Longton',
        'latitude': 52.9854852,
        'longitude': -2.1291025
    },
    {
        'name': 'Longtown',
        'latitude': 55.0091836,
        'longitude': -2.9713566
    },
    {
        'name': 'Looe',
        'latitude': 50.3508088,
        'longitude': -4.4548396
    },
    {
        'name': 'Lossiemouth',
        'latitude': 57.7220766,
        'longitude': -3.2814625
    },
    {
        'name': 'Lostwithiel',
        'latitude': 50.407478,
        'longitude': -4.6678178
    },
    {
        'name': 'Loughborough',
        'latitude': 52.7723859,
        'longitude': -1.2077985
    },
    {
        'name': 'Loughor',
        'latitude': 51.6654032,
        'longitude': -4.0677598
    },
    {
        'name': 'Loughton',
        'latitude': 51.6456263,
        'longitude': 0.0551751
    },
    {
        'name': 'Louth',
        'latitude': 53.3675163,
        'longitude': -0.0022381
    },
    {
        'name': 'Lowestoft',
        'latitude': 52.4766308,
        'longitude': 1.7537638
    },
    {
        'name': 'Ludgershall',
        'latitude': 51.256957,
        'longitude': -1.6233744
    },
    {
        'name': 'Ludlow',
        'latitude': 52.3679896,
        'longitude': -2.7193114
    },
    {
        'name': 'Luton',
        'latitude': 51.8784385,
        'longitude': -0.4152837
    },
    {
        'name': 'Lutterworth',
        'latitude': 52.4552224,
        'longitude': -1.1997815
    },
    {
        'name': 'Lydd',
        'latitude': 50.950968,
        'longitude': 0.9065381
    },
    {
        'name': 'Lydney',
        'latitude': 51.7259292,
        'longitude': -2.5313485
    },
    {
        'name': 'Lyme Regis',
        'latitude': 50.7252897,
        'longitude': -2.934559
    },
    {
        'name': 'Lyme Regis',
        'latitude': 50.7252897,
        'longitude': -2.934559
    },
    {
        'name': 'Lymington',
        'latitude': 50.75914303,
        'longitude': -1.544004583
    },
    {
        'name': 'Lymington',
        'latitude': 50.7583753,
        'longitude': -1.5426885
    },
    {
        'name': 'Lyndhurst',
        'latitude': 50.8727657,
        'longitude': -1.5748436
    },
    {
        'name': 'Lynton',
        'latitude': 51.2292415,
        'longitude': -3.837382379
    },
    {
        'name': 'Lynton',
        'latitude': 51.2294185,
        'longitude': -3.8365118
    },
    {
        'name': 'Lytham St Annes',
        'latitude': 53.7485046,
        'longitude': -2.9990745
    },
    {
        'name': 'Mablethorpe',
        'latitude': 53.33797758,
        'longitude': 0.257766443
    },
    {
        'name': 'Mablethorpe',
        'latitude': 53.3408271,
        'longitude': 0.2606772
    },
    {
        'name': 'Macclesfield',
        'latitude': 53.2606635,
        'longitude': -2.1255158,
        'zoom': [7, 8]
    },
    {
        'name': 'Macduff',
        'latitude': 57.6702105,
        'longitude': -2.4944375
    },
    {
        'name': 'Machynlleth',
        'latitude': 52.5905751,
        'longitude': -3.8517246
    },
    {
        'name': 'Madeley',
        'latitude': 52.6362494,
        'longitude': -2.4502069
    },
    {
        'name': 'Maesteg',
        'latitude': 51.6088841,
        'longitude': -3.6583848
    },
    {
        'name': 'Maidenhead',
        'latitude': 51.5237638,
        'longitude': -0.718806
    },
    {
        'name': 'Maidstone',
        'latitude': 51.2748258,
        'longitude': 0.5231646
    },
    {
        'name': 'Maldon',
        'latitude': 51.731198,
        'longitude': 0.6791849
    },
    {
        'name': 'Malmesbury',
        'latitude': 51.58447,
        'longitude': -2.0982042
    },
    {
        'name': 'Maltby',
        'latitude': 53.4264287,
        'longitude': -1.2070444
    },
    {
        'name': 'Malton',
        'latitude': 54.1349419,
        'longitude': -0.7965915
    },
    {
        'name': 'Malvern',
        'latitude': 52.1159559,
        'longitude': -2.3258985
    },
    {
        'name': 'Manningtree',
        'latitude': 51.9450866,
        'longitude': 1.0630218
    },
    {
        'name': 'Mansfield',
        'latitude': 53.1447678,
        'longitude': -1.1973365
    },
    {
        'name': 'Marazion',
        'latitude': 50.1239321,
        'longitude': -5.4727698
    },
    {
        'name': 'March',
        'latitude': 52.5505996,
        'longitude': 0.0880189
    },
    {
        'name': 'Margate',
        'latitude': 51.3878174,
        'longitude': 1.3819699
    },
    {
        'name': 'Margate',
        'latitude': 51.38212601,
        'longitude': 1.387651495
    },
    {
        'name': 'Market Deeping',
        'latitude': 52.6769366,
        'longitude': -0.3149877
    },
    {
        'name': 'Market Drayton',
        'latitude': 52.9042417,
        'longitude': -2.4838589
    },
    {
        'name': 'Market Harborough',
        'latitude': 52.4777114,
        'longitude': -0.9208575
    },
    {
        'name': 'Market Rasen',
        'latitude': 53.3874028,
        'longitude': -0.336659
    },
    {
        'name': 'Market Weighton',
        'latitude': 53.8643625,
        'longitude': -0.6679698
    },
    {
        'name': 'Markinch',
        'latitude': 56.202957,
        'longitude': -3.1324666
    },
    {
        'name': 'Marlborough',
        'latitude': 51.4209962,
        'longitude': -1.728952
    },
    {
        'name': 'Marlow',
        'latitude': 51.5718668,
        'longitude': -0.77695
    },
    {
        'name': 'Marple',
        'latitude': 53.3930149,
        'longitude': -2.0693132
    },
    {
        'name': 'Maryport',
        'latitude': 54.7129699,
        'longitude': -3.4998108
    },
    {
        'name': 'Masham',
        'latitude': 54.2220086,
        'longitude': -1.6564736
    },
    {
        'name': 'Matlock',
        'latitude': 53.1374514,
        'longitude': -1.5544694
    },
    {
        'name': 'Mauchline',
        'latitude': 55.5159992,
        'longitude': -4.3790696
    },
    {
        'name': 'Maybole',
        'latitude': 55.3550738,
        'longitude': -4.6801392
    },
    {
        'name': 'Mayfield',
        'latitude': 55.8725932,
        'longitude': -3.0393013
    },
    {
        'name': 'Melksham',
        'latitude': 51.3725919,
        'longitude': -2.13743
    },
    {
        'name': 'Melrose',
        'latitude': 55.5975944,
        'longitude': -2.7199682
    },
    {
        'name': 'Meltham',
        'latitude': 53.5918594,
        'longitude': -1.8504515
    },
    {
        'name': 'Melton Mowbray',
        'latitude': 52.7649964,
        'longitude': -0.887587
    },
    {
        'name': 'Menai Bridge',
        'latitude': 53.2259347,
        'longitude': -4.1631064
    },
    {
        'name': 'Mengham',
        'latitude': 50.7879226,
        'longitude': -0.97588
    },
    {
        'name': 'Mere',
        'latitude': 51.0894379,
        'longitude': -2.2684427
    },
    {
        'name': 'Merthyr Tydfil',
        'latitude': 51.7490624,
        'longitude': -3.3786183
    },
    {
        'name': 'Methil',
        'latitude': 56.1848771,
        'longitude': -3.0132612
    },
    {
        'name': 'Mexborough',
        'latitude': 53.4938865,
        'longitude': -1.2836514
    },
    {
        'name': 'Middleham',
        'latitude': 54.286721,
        'longitude': -1.8049483
    },
    {
        'name': 'Middlesbrough',
        'latitude': 54.54924023,
        'longitude': -1.221957238
    },
    {
        'name': 'Middlesbrough',
        'latitude': 54.5760419,
        'longitude': -1.2344047
    },
    {
        'name': 'Middlesbrough',
        'latitude': 54.54924023,
        'longitude': -1.221957238
    },
    {
        'name': 'Middleton',
        'latitude': 53.5484755,
        'longitude': -2.1972661
    },
    {
        'name': 'Middlewich',
        'latitude': 53.1927371,
        'longitude': -2.4453171
    },
    {
        'name': 'Middleyard',
        'latitude': 51.72643459,
        'longitude': -2.264642921
    },
    {
        'name': 'Midhurst',
        'latitude': 50.985523,
        'longitude': -0.7399644
    },
    {
        'name': 'Midsomer Norton',
        'latitude': 51.2857477,
        'longitude': -2.4771543
    },
    {
        'name': 'Mildenhall',
        'latitude': 52.3455998,
        'longitude': 0.5127653
    },
    {
        'name': 'Milford Haven',
        'latitude': 51.7117492,
        'longitude': -5.0293161
    },
    {
        'name': 'Millom',
        'latitude': 54.2106855,
        'longitude': -3.2719019
    },
    {
        'name': 'Millport',
        'latitude': 55.753958,
        'longitude': -4.9239794
    },
    {
        'name': 'Milngavie',
        'latitude': 55.9410791,
        'longitude': -4.3178027
    },
    {
        'name': 'Milnrow',
        'latitude': 53.6082511,
        'longitude': -2.1099476
    },
    {
        'name': 'Milnthorpe',
        'latitude': 54.2277188,
        'longitude': -2.7721074
    },
    {
        'name': 'Milton Keynes',
        'latitude': 52.0429797,
        'longitude': -0.7589607
    },
    {
        'name': 'Minehead',
        'latitude': 51.2057511,
        'longitude': -3.4783542
    },
    {
        'name': 'Minster',
        'latitude': 51.4217412,
        'longitude': 0.8120475
    },
    {
        'name': 'Mirfield',
        'latitude': 53.673216,
        'longitude': -1.6946052
    },
    {
        'name': 'Mitcheldean',
        'latitude': 51.864009,
        'longitude': -2.4876975
    },
    {
        'name': 'Modbury',
        'latitude': 50.35081396,
        'longitude': -3.886854293
    },
    {
        'name': 'Modbury',
        'latitude': 50.3495235,
        'longitude': -3.8881766
    },
    {
        'name': 'Moffat',
        'latitude': 55.3327838,
        'longitude': -3.4400839
    },
    {
        'name': 'Mold',
        'latitude': 53.1688711,
        'longitude': -3.1431489
    },
    {
        'name': 'Molesey',
        'latitude': 51.40229949,
        'longitude': -0.366445952
    },
    {
        'name': 'Molesey',
        'latitude': 51.4029006,
        'longitude': -0.3713094
    },
    {
        'name': 'Molesey',
        'latitude': 51.40229949,
        'longitude': -0.366445952
    },
    {
        'name': 'Monifieth',
        'latitude': 56.481792,
        'longitude': -2.8180319
    },
    {
        'name': 'Monmouth',
        'latitude': 51.8098882,
        'longitude': -2.7160441
    },
    {
        'name': 'Montgomery',
        'latitude': 52.562033,
        'longitude': -3.1474836
    },
    {
        'name': 'Montrose',
        'latitude': 56.7114295,
        'longitude': -2.4681544
    },
    {
        'name': 'Moodiesburn',
        'latitude': 55.9136347,
        'longitude': -4.0844767
    },
    {
        'name': 'Morecambe',
        'latitude': 54.0721085,
        'longitude': -2.8650938
    },
    {
        'name': 'Moreton',
        'latitude': 53.4009232,
        'longitude': -3.1132336
    },
    {
        'name': 'Moreton-in-Marsh',
        'latitude': 51.9906413,
        'longitude': -1.7023018
    },
    {
        'name': 'Moretonhampstead',
        'latitude': 50.6611666,
        'longitude': -3.766749
    },
    {
        'name': 'Morley',
        'latitude': 53.7440745,
        'longitude': -1.5988598
    },
    {
        'name': 'Morpeth',
        'latitude': 55.1675437,
        'longitude': -1.6907444
    },
    {
        'name': 'Morriston',
        'latitude': 51.6700114,
        'longitude': -3.929763
    },
    {
        'name': 'Mossley',
        'latitude': 53.5130582,
        'longitude': -2.0358291
    },
    {
        'name': 'Motherwell',
        'latitude': 55.7901843,
        'longitude': -3.9920902
    },
    {
        'name': 'Mountain Ash',
        'latitude': 51.6821033,
        'longitude': -3.3764418
    },
    {
        'name': 'Much Wenlock',
        'latitude': 52.5957012,
        'longitude': -2.5582016
    },
    {
        'name': 'Muir of Ord',
        'latitude': 57.5173183,
        'longitude': -4.456204
    },
    {
        'name': 'Musselburgh',
        'latitude': 55.9421202,
        'longitude': -3.0538516
    },
    {
        'name': 'Nailsea',
        'latitude': 51.4327135,
        'longitude': -2.7629303
    },
    {
        'name': 'Nailsworth',
        'latitude': 51.6952392,
        'longitude': -2.2185599
    },
    {
        'name': 'Nairn',
        'latitude': 57.5850133,
        'longitude': -3.8681503
    },
    {
        'name': 'Nantwich',
        'latitude': 53.0671376,
        'longitude': -2.5221184
    },
    {
        'name': 'Nantyglo',
        'latitude': 51.7894523,
        'longitude': -3.172733
    },
    {
        'name': 'Narberth',
        'latitude': 51.7980075,
        'longitude': -4.7428847
    },
    {
        'name': 'Neath',
        'latitude': 51.6628422,
        'longitude': -3.8039117
    },
    {
        'name': 'Needham Market',
        'latitude': 52.1528468,
        'longitude': 1.0528347
    },
    {
        'name': 'Neilston',
        'latitude': 55.7846716,
        'longitude': -4.4263461
    },
    {
        'name': 'Nelson',
        'latitude': 53.8363428,
        'longitude': -2.2116469
    },
    {
        'name': 'Neston',
        'latitude': 53.2905172,
        'longitude': -3.063792
    },
    {
        'name': 'New Alresford',
        'latitude': 51.0895586,
        'longitude': -1.1629772
    },
    {
        'name': 'New Brighton',
        'latitude': 53.4385649,
        'longitude': -3.043422
    },
    {
        'name': 'New Cumnock',
        'latitude': 55.3941167,
        'longitude': -4.1849737
    },
    {
        'name': 'New Ferry',
        'latitude': 53.3619442,
        'longitude': -2.9943509
    },
    {
        'name': 'New Mills',
        'latitude': 53.365432,
        'longitude': -2.0012794
    },
    {
        'name': 'New Milton',
        'latitude': 50.7531,
        'longitude': -1.65519
    },
    {
        'name': 'New Romney',
        'latitude': 50.9851198,
        'longitude': 0.9426566
    },
    {
        'name': 'New Stevenston',
        'latitude': 55.8123772,
        'longitude': -3.9771222
    },
    {
        'name': 'Newark on Trent',
        'latitude': 53.0761693,
        'longitude': -0.8092339
    },
    {
        'name': 'Newarthill',
        'latitude': 55.8149158,
        'longitude': -3.9376273
    },
    {
        'name': 'Newbiggin by the Sea',
        'latitude': 55.184529,
        'longitude': -1.517380422
    },
    {
        'name': 'Newbridge',
        'latitude': 51.6653714,
        'longitude': -3.1442293
    },
    {
        'name': 'Newburgh',
        'latitude': 56.3510044,
        'longitude': -3.237601
    },
    {
        'name': 'Newbury',
        'latitude': 51.4020055,
        'longitude': -1.3236425
    },
    {
        'name': 'Newcastle Emlyn',
        'latitude': 52.039014,
        'longitude': -4.4689141
    },
    {
        'name': 'Newcastle-under-Lyme',
        'latitude': 53.0117627,
        'longitude': -2.2273919
    },
    {
        'name': 'Newent',
        'latitude': 51.9308546,
        'longitude': -2.4053991
    },
    {
        'name': 'Newhaven',
        'latitude': 50.7945315,
        'longitude': 0.0483875
    },
    {
        'name': 'Newhaven',
        'latitude': 50.79079261,
        'longitude': 0.043944222
    },
    {
        'name': 'Newmains',
        'latitude': 55.7828371,
        'longitude': -3.8790785
    },
    {
        'name': 'Newmarket',
        'latitude': 52.2443103,
        'longitude': 0.4065503
    },
    {
        'name': 'Newmilns',
        'latitude': 55.6075216,
        'longitude': -4.3244825
    },
    {
        'name': 'Newport',
        'latitude': 50.7003707,
        'longitude': -1.2952039
    },
    {
        'name': 'Newport',
        'latitude': 52.7688594,
        'longitude': -2.3783676
    },
    {
        'name': 'Newport Pagnell',
        'latitude': 52.0863864,
        'longitude': -0.7237341
    },
    {
        'name': 'Newport-on-Tay',
        'latitude': 56.4397014,
        'longitude': -2.9416726
    },
    {
        'name': 'Newquay',
        'latitude': 50.4134414,
        'longitude': -5.0848836,
        'zoom': [7, 8]
    },
    {
        'name': 'Newsham',
        'latitude': 55.1122294,
        'longitude': -1.5298126
    },
    {
        'name': 'Newton Abbot',
        'latitude': 50.5296441,
        'longitude': -3.6112097
    },
    {
        'name': 'Newton Aycliffe',
        'latitude': 54.62393422,
        'longitude': -1.577221262
    },
    {
        'name': 'Newton Aycliffe',
        'latitude': 54.6218534,
        'longitude': -1.5663624
    },
    {
        'name': 'Newton Mearns',
        'latitude': 55.7726726,
        'longitude': -4.3342366
    },
    {
        'name': 'Newton Stewart',
        'latitude': 54.959045,
        'longitude': -4.4836737
    },
    {
        'name': 'Newton-le-Willows',
        'latitude': 53.4530667,
        'longitude': -2.6263483
    },
    {
        'name': 'Newtongrange',
        'latitude': 55.8664019,
        'longitude': -3.0666188
    },
    {
        'name': 'Newtonhill',
        'latitude': 57.0321018,
        'longitude': -2.1503377
    },
    {
        'name': 'Newtown',
        'latitude': 52.5135785,
        'longitude': -3.314371
    },
    {
        'name': 'Neyland',
        'latitude': 51.7099976,
        'longitude': -4.9511343
    },
    {
        'name': 'Normanton',
        'latitude': 53.6991226,
        'longitude': -1.4194401
    },
    {
        'name': 'North Berwick',
        'latitude': 56.0581178,
        'longitude': -2.7209129
    },
    {
        'name': 'North Hykeham',
        'latitude': 53.1870106,
        'longitude': -0.5877503
    },
    {
        'name': 'North Shields',
        'latitude': 55.0087655,
        'longitude': -1.4471035
    },
    {
        'name': 'North Tawton',
        'latitude': 50.799633,
        'longitude': -3.8955251
    },
    {
        'name': 'North Walsham',
        'latitude': 52.8213308,
        'longitude': 1.3861979
    },
    {
        'name': 'Northallerton',
        'latitude': 54.340482,
        'longitude': -1.4345459
    },
    {
        'name': 'Northam',
        'latitude': 51.0401128,
        'longitude': -4.2135986
    },
    {
        'name': 'Northampton',
        'latitude': 52.2381355,
        'longitude': -0.8963907
    },
    {
        'name': 'Northfield',
        'latitude': 52.4117187,
        'longitude': -1.9634301
    },
    {
        'name': 'Northfleet',
        'latitude': 51.42585814,
        'longitude': 0.343350459
    },
    {
        'name': 'Northfleet',
        'latitude': 51.4432937,
        'longitude': 0.3365303
    },
    {
        'name': 'Northleach',
        'latitude': 51.8299662,
        'longitude': -1.8371843
    },
    {
        'name': 'Northolt',
        'latitude': 51.5465937,
        'longitude': -0.369565
    },
    {
        'name': 'Northstowe',
        'latitude': 52.2870921,
        'longitude': 0.0552589
    },
    {
        'name': 'Northwich',
        'latitude': 53.2602539,
        'longitude': -2.5145104
    },
    {
        'name': 'Norton-on-Derwent',
        'latitude': 54.1324141,
        'longitude': -0.7854029
    },
    {
        'name': 'Nuneaton',
        'latitude': 52.5246182,
        'longitude': -1.4684488
    },
    {
        'name': 'Oadby',
        'latitude': 52.5983121,
        'longitude': -1.0810264
    },
    {
        'name': 'Oakengates',
        'latitude': 52.6952242,
        'longitude': -2.4520711
    },
    {
        'name': 'Oakham',
        'latitude': 52.6699351,
        'longitude': -0.7284623
    },
    {
        'name': 'Oban',
        'latitude': 56.415695,
        'longitude': -5.4734688,
        'zoom': [7, 8]
    },
    {
        'name': 'Okehampton',
        'latitude': 50.7376766,
        'longitude': -4.000319,
        'zoom': [7, 8]
    },
    {
        'name': 'Oldbury',
        'latitude': 52.5039074,
        'longitude': -2.0163917
    },
    {
        'name': 'Oldham',
        'latitude': 53.5415797,
        'longitude': -2.1147831
    },
    {
        'name': 'Olney',
        'latitude': 52.1539179,
        'longitude': -0.7013942
    },
    {
        'name': 'Orford',
        'latitude': 52.0949765,
        'longitude': 1.5344399
    },
    {
        'name': 'Ormskirk',
        'latitude': 53.5673603,
        'longitude': -2.8859603
    },
    {
        'name': 'Orpington',
        'latitude': 51.3805351,
        'longitude': 0.1062656
    },
    {
        'name': 'Ossett',
        'latitude': 53.6780539,
        'longitude': -1.5765949
    },
    {
        'name': 'Oswaldtwistle',
        'latitude': 53.7407791,
        'longitude': -2.3985152
    },
    {
        'name': 'Oswestry',
        'latitude': 52.8603096,
        'longitude': -3.0548201
    },
    {
        'name': 'Otley',
        'latitude': 53.9055083,
        'longitude': -1.6938874
    },
    {
        'name': 'Ottery St Mary',
        'latitude': 50.7512554,
        'longitude': -3.2783818
    },
    {
        'name': 'Oundle',
        'latitude': 52.4808725,
        'longitude': -0.4674161
    },
    {
        'name': 'Outwood',
        'latitude': 53.7097004,
        'longitude': -1.5042761
    },
    {
        'name': 'Oxted',
        'latitude': 51.2566507,
        'longitude': -0.0041977
    },
    {
        'name': 'Paddock Wood',
        'latitude': 51.1810484,
        'longitude': 0.3889964
    },
    {
        'name': 'Padiham',
        'latitude': 53.8003638,
        'longitude': -2.3134052
    },
    {
        'name': 'Padstow',
        'latitude': 50.5404863,
        'longitude': -4.9367329
    },
    {
        'name': 'Paignton',
        'latitude': 50.4377018,
        'longitude': -3.5632704
    },
    {
        'name': 'Painswick',
        'latitude': 51.7857347,
        'longitude': -2.1947188
    },
    {
        'name': 'Paisley',
        'latitude': 55.8455828,
        'longitude': -4.4239646
    },
    {
        'name': 'Pateley Bridge',
        'latitude': 54.0870914,
        'longitude': -1.7596404
    },
    {
        'name': 'Peacehaven',
        'latitude': 50.7962181,
        'longitude': -0.0027387
    },
    {
        'name': 'Peacehaven',
        'latitude': 50.796429,
        'longitude': 0.000222779
    },
    {
        'name': 'Peebles',
        'latitude': 55.6517553,
        'longitude': -3.1885456
    },
    {
        'name': 'Pembroke',
        'latitude': 51.6754422,
        'longitude': -4.9144858
    },
    {
        'name': 'Pembroke Dock',
        'latitude': 51.693539,
        'longitude': -4.9392016
    },
    {
        'name': 'Penarth',
        'latitude': 51.435968,
        'longitude': -3.1733023
    },
    {
        'name': 'Pencoed',
        'latitude': 51.524776,
        'longitude': -3.5032631
    },
    {
        'name': 'Pendlebury',
        'latitude': 53.5161631,
        'longitude': -2.3307066
    },
    {
        'name': 'Penicuik',
        'latitude': 55.8274348,
        'longitude': -3.2212058
    },
    {
        'name': 'Penistone',
        'latitude': 53.5247445,
        'longitude': -1.6294343
    },
    {
        'name': 'Penkridge',
        'latitude': 52.7246633,
        'longitude': -2.1127563
    },
    {
        'name': 'Penmaenmawr',
        'latitude': 53.2681395,
        'longitude': -3.9200268
    },
    {
        'name': 'Penrith',
        'latitude': 54.6639133,
        'longitude': -2.7522047,
        'zoom': [7, 8]
    },
    {
        'name': 'Penryn',
        'latitude': 50.1685495,
        'longitude': -5.1034063
    },
    {
        'name': 'Penwortham',
        'latitude': 53.7498033,
        'longitude': -2.7301703
    },
    {
        'name': 'Penyffordd',
        'latitude': 53.1454462,
        'longitude': -3.0477811
    },
    {
        'name': 'Penzance',
        'latitude': 50.1213173,
        'longitude': -5.5329266,
        'zoom': [2, 3]
    },
    {
        'name': 'Pershore',
        'latitude': 52.1096993,
        'longitude': -2.0754758
    },
    {
        'name': 'Peterhead',
        'latitude': 57.5052909,
        'longitude': -1.7813194,
        'zoom': [7, 8]
    },
    {
        'name': 'Peterlee',
        'latitude': 54.7618912,
        'longitude': -1.3321519
    },
    {
        'name': 'Petersfield',
        'latitude': 51.0024945,
        'longitude': -0.9392027
    },
    {
        'name': 'Petworth',
        'latitude': 50.98413383,
        'longitude': -0.608573032
    },
    {
        'name': 'Petworth',
        'latitude': 50.9862857,
        'longitude': -0.6101088
    },
    {
        'name': 'Pickering',
        'latitude': 54.2452377,
        'longitude': -0.7793593
    },
    {
        'name': 'Pitlochry',
        'latitude': 56.701969,
        'longitude': -3.7306846,
        'zoom': [7, 8]
    },
    {
        'name': 'Plympton',
        'latitude': 50.3898235,
        'longitude': -4.0585654
    },
    {
        'name': 'Pocklington',
        'latitude': 53.9315681,
        'longitude': -0.7761036
    },
    {
        'name': 'Polegate',
        'latitude': 50.8231619,
        'longitude': 0.245475
    },
    {
        'name': 'Polmont',
        'latitude': 55.9905901,
        'longitude': -3.7074588
    },
    {
        'name': 'Pontardawe',
        'latitude': 51.7219859,
        'longitude': -3.8488778
    },
    {
        'name': 'Pontarddulais',
        'latitude': 51.7150475,
        'longitude': -4.0403783
    },
    {
        'name': 'Pontefract',
        'latitude': 53.6917422,
        'longitude': -1.3105722
    },
    {
        'name': 'Ponteland',
        'latitude': 55.0498798,
        'longitude': -1.7435142
    },
    {
        'name': 'Pontycymer',
        'latitude': 51.6088629,
        'longitude': -3.5797523
    },
    {
        'name': 'Pontypool',
        'latitude': 51.7026571,
        'longitude': -3.0327511
    },
    {
        'name': 'Pontypridd',
        'latitude': 51.6001047,
        'longitude': -3.3449362
    },
    {
        'name': 'Poole',
        'latitude': 50.7179472,
        'longitude': -1.981521,
        'zoom': [7, 8]
    },
    {
        'name': 'Port Glasgow',
        'latitude': 55.9342865,
        'longitude': -4.689854
    },
    {
        'name': 'Port Talbot',
        'latitude': 51.5952119,
        'longitude': -3.782199
    },
    {
        'name': 'Porth',
        'latitude': 51.6124972,
        'longitude': -3.4084092
    },
    {
        'name': 'Porthcawl',
        'latitude': 51.4795563,
        'longitude': -3.7040704
    },
    {
        'name': 'Porthcawl',
        'latitude': 51.48295536,
        'longitude': -3.703271305
    },
    {
        'name': 'Porthleven',
        'latitude': 50.0849174,
        'longitude': -5.3166558
    },
    {
        'name': 'Porthmadog',
        'latitude': 52.9252682,
        'longitude': -4.1301929
    },
    {
        'name': 'Portishead',
        'latitude': 51.4806882,
        'longitude': -2.7768562
    },
    {
        'name': 'Portlethen',
        'latitude': 57.0618656,
        'longitude': -2.1285268
    },
    {
        'name': 'Portree',
        'latitude': 57.4130532,
        'longitude': -6.194446,
        'zoom': [7, 8]
    },
    {
        'name': 'Portslade by Sea',
        'latitude': 50.8329633,
        'longitude': -0.2070213
    },
    {
        'name': 'Potters Bar',
        'latitude': 51.702588,
        'longitude': -0.1955649
    },
    {
        'name': 'Poulton-le-Fylde',
        'latitude': 53.8461465,
        'longitude': -2.9904844
    },
    {
        'name': 'Poynton',
        'latitude': 53.3492505,
        'longitude': -2.1174396
    },
    {
        'name': 'Prescot',
        'latitude': 53.4275807,
        'longitude': -2.8042467
    },
    {
        'name': 'Prestatyn',
        'latitude': 53.3345598,
        'longitude': -3.4029487
    },
    {
        'name': 'Presteigne',
        'latitude': 52.2724167,
        'longitude': -3.0059756
    },
    {
        'name': 'Prestonpans',
        'latitude': 55.9593948,
        'longitude': -2.9842401
    },
    {
        'name': 'Prestwich',
        'latitude': 53.5304274,
        'longitude': -2.2960186
    },
    {
        'name': 'Prestwick',
        'latitude': 55.4982802,
        'longitude': -4.6113017
    },
    {
        'name': 'Princes Risborough',
        'latitude': 51.7221664,
        'longitude': -0.8337605
    },
    {
        'name': 'Princetown',
        'latitude': 50.5446011,
        'longitude': -3.9905326
    },
    {
        'name': 'Princetown',
        'latitude': 50.54682651,
        'longitude': -3.99401962
    },
    {
        'name': 'Prudhoe',
        'latitude': 54.9597895,
        'longitude': -1.8556112
    },
    {
        'name': 'Pudsey',
        'latitude': 53.796585,
        'longitude': -1.6629008
    },
    {
        'name': 'Putney',
        'latitude': 51.4625524,
        'longitude': -0.2167462
    },
    {
        'name': 'Pwllheli',
        'latitude': 52.8884749,
        'longitude': -4.4179146,
        'zoom': [7, 8]
    },
    {
        'name': 'Pyle',
        'latitude': 51.5287966,
        'longitude': -3.6932822
    },
    {
        'name': 'Radcliffe',
        'latitude': 53.5593382,
        'longitude': -2.3261546
    },
    {
        'name': 'Radstock',
        'latitude': 51.2919489,
        'longitude': -2.4476231
    },
    {
        'name': 'Rainham',
        'latitude': 51.3642835,
        'longitude': 0.6014889
    },
    {
        'name': 'Ramsbottom',
        'latitude': 53.648383,
        'longitude': -2.315696
    },
    {
        'name': 'Ramsey',
        'latitude': 52.4494068,
        'longitude': -0.1021136
    },
    {
        'name': 'Ramsgate',
        'latitude': 51.3334726,
        'longitude': 1.4196476
    },
    {
        'name': 'Raunds',
        'latitude': 52.3422233,
        'longitude': -0.5344753
    },
    {
        'name': 'Rawmarsh',
        'latitude': 53.4598936,
        'longitude': -1.3376657
    },
    {
        'name': 'Rawtenstall',
        'latitude': 53.7012824,
        'longitude': -2.2862723
    },
    {
        'name': 'Rayleigh',
        'latitude': 51.5884892,
        'longitude': 0.6012418
    },
    {
        'name': 'Reading',
        'latitude': 51.456659,
        'longitude': -0.9696512,
        'zoom': [7, 8]
    },
    {
        'name': 'Redcar',
        'latitude': 54.6179021,
        'longitude': -1.0687914
    },
    {
        'name': 'Redditch',
        'latitude': 52.3057655,
        'longitude': -1.9417444
    },
    {
        'name': 'Redhill',
        'latitude': 51.2404691,
        'longitude': -0.1682816
    },
    {
        'name': 'Redruth',
        'latitude': 50.233989,
        'longitude': -5.2276468
    },
    {
        'name': 'Reepham',
        'latitude': 52.7626491,
        'longitude': 1.1111114
    },
    {
        'name': 'Reigate',
        'latitude': 51.237387,
        'longitude': -0.2059492
    },
    {
        'name': 'Renfrew',
        'latitude': 55.8775733,
        'longitude': -4.3888761
    },
    {
        'name': 'Retford',
        'latitude': 53.3187417,
        'longitude': -0.9463982
    },
    {
        'name': 'Rhayader',
        'latitude': 52.2995285,
        'longitude': -3.5099938
    },
    {
        'name': 'Rhyl',
        'latitude': 53.3207425,
        'longitude': -3.4907258
    },
    {
        'name': 'Rhymney',
        'latitude': 51.7613231,
        'longitude': -3.2885172
    },
    {
        'name': 'Richmond',
        'latitude': 54.403068,
        'longitude': -1.7374542
    },
    {
        'name': 'Richmond',
        'latitude': 54.403068,
        'longitude': -1.7374542
    },
    {
        'name': 'Rickmansworth',
        'latitude': 51.6390009,
        'longitude': -0.4718406
    },
    {
        'name': 'Ringwood',
        'latitude': 50.8469344,
        'longitude': -1.7914166
    },
    {
        'name': 'Ripley',
        'latitude': 53.0515177,
        'longitude': -1.4026311
    },
    {
        'name': 'Ripponden',
        'latitude': 53.6730133,
        'longitude': -1.9425882
    },
    {
        'name': 'Risca',
        'latitude': 51.6119541,
        'longitude': -3.0964817
    },
    {
        'name': 'Rishton',
        'latitude': 53.7676749,
        'longitude': -2.4178321
    },
    {
        'name': 'Rochdale',
        'latitude': 53.6153659,
        'longitude': -2.1557561
    },
    {
        'name': 'Rochester',
        'latitude': 51.37144282,
        'longitude': 0.494233584
    },
    {
        'name': 'Rochester',
        'latitude': 51.389062,
        'longitude': 0.5049347
    },
    {
        'name': 'Rochford',
        'latitude': 51.5838691,
        'longitude': 0.7056174
    },
    {
        'name': 'Romford',
        'latitude': 51.5760462,
        'longitude': 0.1822646
    },
    {
        'name': 'Romsey',
        'latitude': 50.9891396,
        'longitude': -1.4999044
    },
    {
        'name': 'Ross-on-Wye',
        'latitude': 51.9140804,
        'longitude': -2.5838357,
        'zoom': [7, 8]
    },
    {
        'name': 'Rosyth',
        'latitude': 56.0397097,
        'longitude': -3.4194656
    },
    {
        'name': 'Rosyth',
        'latitude': 56.03051885,
        'longitude': -3.432867926
    },
    {
        'name': 'Rothbury',
        'latitude': 55.309632,
        'longitude': -1.9117293
    },
    {
        'name': 'Rotherham',
        'latitude': 53.4310417,
        'longitude': -1.355187
    },
    {
        'name': 'Rothesay',
        'latitude': 55.8373085,
        'longitude': -5.0522439
    },
    {
        'name': 'Rothwell',
        'latitude': 53.7493842,
        'longitude': -1.478151
    },
    {
        'name': 'Rothwell',
        'latitude': 53.7493842,
        'longitude': -1.478151
    },
    {
        'name': 'Rowley Regis',
        'latitude': 52.4833326,
        'longitude': -2.0674067
    },
    {
        'name': 'Royal Leamington Spa',
        'latitude': 52.2913394,
        'longitude': -1.536404
    },
    {
        'name': 'Royal Tunbridge Wells',
        'latitude': 51.1371483,
        'longitude': 0.2673446
    },
    {
        'name': 'Royal Wootton Bassett',
        'latitude': 51.5441829,
        'longitude': -1.8972078
    },
    {
        'name': 'Royston',
        'latitude': 52.0472741,
        'longitude': -0.0246467
    },
    {
        'name': 'Royston',
        'latitude': 53.5982976,
        'longitude': -1.4569413
    },
    {
        'name': 'Royton',
        'latitude': 53.5652485,
        'longitude': -2.1236085
    },
    {
        'name': 'Rugby',
        'latitude': 52.3726682,
        'longitude': -1.2620038,
        'zoom': [7, 8]
    },
    {
        'name': 'Rugeley',
        'latitude': 52.7589402,
        'longitude': -1.9362042
    },
    {
        'name': 'Ruislip',
        'latitude': 51.5775626,
        'longitude': -0.4278453
    },
    {
        'name': 'Runcorn',
        'latitude': 53.3421509,
        'longitude': -2.7334941
    },
    {
        'name': 'Rushden',
        'latitude': 52.2911567,
        'longitude': -0.5988177
    },
    {
        'name': 'Rutherglen',
        'latitude': 55.8283888,
        'longitude': -4.2116533
    },
    {
        'name': 'Ruthin',
        'latitude': 53.1115513,
        'longitude': -3.3052405
    },
    {
        'name': 'Ryde',
        'latitude': 50.7299865,
        'longitude': -1.1603699
    },
    {
        'name': 'Rye',
        'latitude': 50.9511871,
        'longitude': 0.7327667
    },
    {
        'name': 'Ryton',
        'latitude': 54.9737318,
        'longitude': -1.7635466
    },
    {
        'name': 'Ryton',
        'latitude': 54.97201113,
        'longitude': -1.763167111
    },
    {
        'name': 'Saffron Walden',
        'latitude': 52.021569,
        'longitude': 0.2411256
    },
    {
        'name': 'Salcombe',
        'latitude': 50.2388158,
        'longitude': -3.7726121
    },
    {
        'name': 'Sale',
        'latitude': 53.4244939,
        'longitude': -2.318415
    },
    {
        'name': 'Saltash',
        'latitude': 50.4086702,
        'longitude': -4.2112226
    },
    {
        'name': 'Saltburn by the Sea',
        'latitude': 54.5846769,
        'longitude': -0.9740921
    },
    {
        'name': 'Saltcoats',
        'latitude': 55.6332429,
        'longitude': -4.7887547
    },
    {
        'name': 'Sandbach',
        'latitude': 53.1439168,
        'longitude': -2.3622625,
        'zoom': [7, 8]
    },
    {
        'name': 'Sandhurst',
        'latitude': 51.3434698,
        'longitude': -0.7740001
    },
    {
        'name': 'Sandown',
        'latitude': 50.6530593,
        'longitude': -1.1536287
    },
    {
        'name': 'Sandwich',
        'latitude': 51.2752527,
        'longitude': 1.3408309
    },
    {
        'name': 'Sandy',
        'latitude': 52.1295713,
        'longitude': -0.2931657
    },
    {
        'name': 'Sanquhar',
        'latitude': 55.3688401,
        'longitude': -3.9267362
    },
    {
        'name': 'Saundersfoot',
        'latitude': 51.7108868,
        'longitude': -4.6997977
    },
    {
        'name': 'Sawbridgeworth',
        'latitude': 51.8153852,
        'longitude': 0.1485669
    },
    {
        'name': 'Saxilby',
        'latitude': 53.27022372,
        'longitude': -0.661374173
    },
    {
        'name': 'Saxmundham',
        'latitude': 52.2142535,
        'longitude': 1.4918009
    },
    {
        'name': 'Scalloway',
        'latitude': 60.1371374,
        'longitude': -1.275271
    },
    {
        'name': 'Scarborough',
        'latitude': 54.2820009,
        'longitude': -0.4011868,
        'zoom': [7, 8]
    },
    {
        'name': 'Scone',
        'latitude': 56.4204776,
        'longitude': -3.39916
    },
    {
        'name': 'Scunthorpe',
        'latitude': 53.5922488,
        'longitude': -0.6450841
    },
    {
        'name': 'Seaford',
        'latitude': 50.7722834,
        'longitude': 0.1022911
    },
    {
        'name': 'Seaford',
        'latitude': 50.77710473,
        'longitude': 0.109829811
    },
    {
        'name': 'Seaham',
        'latitude': 54.8372106,
        'longitude': -1.3355612
    },
    {
        'name': 'Seahouses',
        'latitude': 55.58039588,
        'longitude': -1.655725995
    },
    {
        'name': 'Seaton',
        'latitude': 50.7045566,
        'longitude': -3.0705105
    },
    {
        'name': 'Sedbergh',
        'latitude': 54.3227167,
        'longitude': -2.5287418
    },
    {
        'name': 'Selby',
        'latitude': 53.784012,
        'longitude': -1.0687806
    },
    {
        'name': 'Selkirk',
        'latitude': 55.5470714,
        'longitude': -2.8415411,
        'zoom': [7, 8]
    },
    {
        'name': 'Selsey',
        'latitude': 50.7327781,
        'longitude': -0.7922896
    },
    {
        'name': 'Settle',
        'latitude': 54.0694739,
        'longitude': -2.276127
    },
    {
        'name': 'Sevenoaks',
        'latitude': 51.2719654,
        'longitude': 0.1914386
    },
    {
        'name': 'Shaftesbury',
        'latitude': 51.0056195,
        'longitude': -2.1955975
    },
    {
        'name': 'Shanklin',
        'latitude': 50.6288132,
        'longitude': -1.1779031
    },
    {
        'name': 'Shaw',
        'latitude': 53.5818981,
        'longitude': -2.1039554
    },
    {
        'name': 'Sheerness',
        'latitude': 51.4391704,
        'longitude': 0.7585715
    },
    {
        'name': 'Shefford',
        'latitude': 52.0384063,
        'longitude': -0.3355203
    },
    {
        'name': 'Shepherds Bush',
        'latitude': 51.5053155,
        'longitude': -0.2229856
    }, {
        'name': 'Shepperton',
        'latitude': 51.3957695,
        'longitude': -0.448532
    },
    {
        'name': 'Shepperton',
        'latitude': 51.39551962,
        'longitude': -0.444214515
    },
    {
        'name': 'Shepton Mallet',
        'latitude': 51.1909451,
        'longitude': -2.5461298
    },
    {
        'name': 'Sherborne',
        'latitude': 50.9486876,
        'longitude': -2.5197693
    },
    {
        'name': 'Sherburn in Elmet',
        'latitude': 53.7965525,
        'longitude': -1.2499345
    },
    {
        'name': 'Sheringham',
        'latitude': 52.9438831,
        'longitude': 1.21262
    },
    {
        'name': 'Shifnal',
        'latitude': 52.6675866,
        'longitude': -2.3729864
    },
    {
        'name': 'Shildon',
        'latitude': 54.6351323,
        'longitude': -1.64795
    },
    {
        'name': 'Shipley',
        'latitude': 53.8321814,
        'longitude': -1.7779777
    },
    {
        'name': 'Shirebrook',
        'latitude': 53.2063042,
        'longitude': -1.2205319
    },
    {
        'name': 'Shirley',
        'latitude': 52.4112249,
        'longitude': -1.8277304
    },
    {
        'name': 'Shoeburyness',
        'latitude': 51.5297377,
        'longitude': 0.7961979
    },
    {
        'name': 'Shoreham-by-Sea',
        'latitude': 50.8322307,
        'longitude': -0.2746717
    },
    {
        'name': 'Shoreham-by-Sea',
        'latitude': 50.8331184,
        'longitude': -0.2754658
    },
    {
        'name': 'Shotton',
        'latitude': 53.2107285,
        'longitude': -3.0371565
    },
    {
        'name': 'Shotts',
        'latitude': 55.8196688,
        'longitude': -3.8073229
    },
    {
        'name': 'Shrewsbury',
        'latitude': 52.707755,
        'longitude': -2.7540658
    },
    {
        'name': 'Sidcup',
        'latitude': 51.4264002,
        'longitude': 0.101044
    },
    {
        'name': 'Sidford',
        'latitude': 50.70204654,
        'longitude': -3.228463052
    },
    {
        'name': 'Sidmouth',
        'latitude': 50.6790033,
        'longitude': -3.237657
    },
    {
        'name': 'Silloth',
        'latitude': 54.8692401,
        'longitude': -3.3869124
    },
    {
        'name': 'Sittingbourne',
        'latitude': 51.3397366,
        'longitude': 0.7342319
    },
    {
        'name': 'Skegness',
        'latitude': 53.1437506,
        'longitude': 0.3428958
    },
    {
        'name': 'Skelmersdale',
        'latitude': 53.5524745,
        'longitude': -2.7845229
    },
    {
        'name': 'Skelton-in-Cleveland',
        'latitude': 54.5611862,
        'longitude': -0.9877809
    },
    {
        'name': 'Skipton',
        'latitude': 53.9618497,
        'longitude': -2.0160287,
        'zoom': [7, 8]
    },
    {
        'name': 'Sleaford',
        'latitude': 52.9984193,
        'longitude': -0.4094529,
        'zoom': [7, 8]
    },
    {
        'name': 'Slough',
        'latitude': 51.5111014,
        'longitude': -0.5940682
    },
    {
        'name': 'Smethwick',
        'latitude': 52.4968157,
        'longitude': -1.9739174
    },
    {
        'name': 'Snaith',
        'latitude': 53.6922269,
        'longitude': -1.0297093
    },
    {
        'name': 'Snettisham',
        'latitude': 52.87620394,
        'longitude': 0.498921755
    },
    {
        'name': 'Snodland',
        'latitude': 51.3296235,
        'longitude': 0.4426322
    },
    {
        'name': 'Soham',
        'latitude': 52.3333453,
        'longitude': 0.3387475
    },
    {
        'name': 'Soham',
        'latitude': 52.32512944,
        'longitude': 0.348330459
    },
    {
        'name': 'Soham',
        'latitude': 52.32026236,
        'longitude': 0.356466629
    },
    {
        'name': 'Soham',
        'latitude': 52.32598644,
        'longitude': 0.346749042
    },
    {
        'name': 'Solihull',
        'latitude': 52.4130189,
        'longitude': -1.7768935
    },
    {
        'name': 'Somerton',
        'latitude': 51.0537141,
        'longitude': -2.7315544
    },
    {
        'name': 'South Cave',
        'latitude': 53.7693676,
        'longitude': -0.6022825
    },
    {
        'name': 'South Elmsall',
        'latitude': 53.5974902,
        'longitude': -1.2810057
    },
    {
        'name': 'South Molton',
        'latitude': 51.0170696,
        'longitude': -3.8330599
    },
    {
        'name': 'South Ockendon',
        'latitude': 51.5093771,
        'longitude': 0.2827942
    },
    {
        'name': 'South Queensferry',
        'latitude': 55.98731694,
        'longitude': -3.402622455
    },
    {
        'name': 'South Queensferry',
        'latitude': 55.9902293,
        'longitude': -3.3966999
    },
    {
        'name': 'South Shields',
        'latitude': 54.9987414,
        'longitude': -1.4321848
    },
    {
        'name': 'South Woodham Ferrers',
        'latitude': 51.6440357,
        'longitude': 0.6176655
    },
    {
        'name': 'Southall',
        'latitude': 51.5111461,
        'longitude': -0.3755169
    },
    {
        'name': 'Southam',
        'latitude': 52.253094,
        'longitude': -1.3884119
    },
    {
        'name': 'Southend-on-Sea',
        'latitude': 51.5388241,
        'longitude': 0.7128137
    },
    {
        'name': 'Southport',
        'latitude': 53.6475988,
        'longitude': -3.0041751,
        'zoom': [7, 8]
    },
    {
        'name': 'Southwell',
        'latitude': 53.0775498,
        'longitude': -0.954883
    },
    {
        'name': 'Southwick',
        'latitude': 50.8345258,
        'longitude': -0.2383308
    },
    {
        'name': 'Southwold',
        'latitude': 52.3266586,
        'longitude': 1.6794539
    },
    {
        'name': 'Sowerby Bridge',
        'latitude': 53.7097606,
        'longitude': -1.9088241
    },
    {
        'name': 'Spalding',
        'latitude': 52.7874935,
        'longitude': -0.1516271
    },
    {
        'name': 'Spalding',
        'latitude': 52.78069004,
        'longitude': -0.149092424
    },
    {
        'name': 'Spennymoor',
        'latitude': 54.699551,
        'longitude': -1.601153
    },
    {
        'name': 'Spilsby',
        'latitude': 53.1734361,
        'longitude': 0.094623
    },
    {
        'name': 'St Andrews',
        'latitude': 56.3403902,
        'longitude': -2.7955844
    },
    {
        'name': 'St Blazey',
        'latitude': 50.3630055,
        'longitude': -4.7156518
    },
    {
        'name': 'St Columb Major',
        'latitude': 50.43227416,
        'longitude': -4.94326266
    },
    {
        'name': 'St Columb Major',
        'latitude': 50.434461,
        'longitude': -4.9401617
    },
    {
        'name': 'St Helens',
        'latitude': 53.4535471,
        'longitude': -2.7343231
    },
    {
        'name': 'St Ives',
        'latitude': 52.3358157,
        'longitude': -0.0753866,
        'zoom': [7, 8]
    },
    {
        'name': 'St Just',
        'latitude': 50.12360276,
        'longitude': -5.68317107
    },
    {
        'name': 'St Leonards',
        'latitude': 50.8557256,
        'longitude': 0.5480144
    },
    {
        'name': 'St Neots',
        'latitude': 52.22371524,
        'longitude': -0.261926806
    },
    {
        'name': 'St Neots',
        'latitude': 52.22758,
        'longitude': -0.2703789
    },
    {
        'name': 'St Neots',
        'latitude': 52.22371524,
        'longitude': -0.261926806
    },
    {
        'name': 'St. Austell',
        'latitude': 50.338466,
        'longitude': -4.7882104
    },
    {
        'name': 'St. Clears',
        'latitude': 51.8206559,
        'longitude': -4.4946965
    },
    {
        'name': 'St. Ives',
        'latitude': 50.2148928,
        'longitude': -5.4795574
    },
    {
        'name': 'St. Just',
        'latitude': 50.1243787,
        'longitude': -5.6796789
    },
    {
        'name': 'Stafford',
        'latitude': 52.8063157,
        'longitude': -2.1163818
    },
    {
        'name': 'Staines-upon-Thames',
        'latitude': 51.434012,
        'longitude': -0.511044
    },
    {
        'name': 'Staines-upon-Thames',
        'latitude': 51.42702689,
        'longitude': -0.499888627
    },
    {
        'name': 'Stainforth',
        'latitude': 53.5960361,
        'longitude': -1.0279463
    },
    {
        'name': 'Stalbridge',
        'latitude': 50.9591163,
        'longitude': -2.3761683
    },
    {
        'name': 'Stalham',
        'latitude': 52.7718428,
        'longitude': 1.5151178
    },
    {
        'name': 'Stalybridge',
        'latitude': 53.4840214,
        'longitude': -2.0562536
    },
    {
        'name': 'Stamford',
        'latitude': 52.6520552,
        'longitude': -0.4804363
    },
    {
        'name': 'Stanford-le-Hope',
        'latitude': 51.5138172,
        'longitude': 0.4252037
    },
    {
        'name': 'Stanhope',
        'latitude': 54.7487932,
        'longitude': -2.009305,
        'zoom': [7, 8]
    },
    {
        'name': 'Stanley',
        'latitude': 54.8719691,
        'longitude': -1.6941696
    },
    {
        'name': 'Stanley',
        'latitude': 53.7132,
        'longitude': -1.4745
    },
    {
        'name': 'Stapleford',
        'latitude': 52.93048345,
        'longitude': -1.269221942
    },
    {
        'name': 'Stapleford',
        'latitude': 52.9293948,
        'longitude': -1.2740443
    },
    {
        'name': 'Staveley',
        'latitude': 53.2683482,
        'longitude': -1.3495224
    },
    {
        'name': 'Stechford',
        'latitude': 52.484208,
        'longitude': -1.8094013
    },
    {
        'name': 'Stenhousemuir',
        'latitude': 56.0258265,
        'longitude': -3.8163132
    },
    {
        'name': 'Stepps',
        'latitude': 55.8909701,
        'longitude': -4.1455449
    },
    {
        'name': 'Stevenage',
        'latitude': 51.9035099,
        'longitude': -0.2013368
    },
    {
        'name': 'Stevenston',
        'latitude': 55.6405878,
        'longitude': -4.756814
    },
    {
        'name': 'Stewarton',
        'latitude': 55.680265,
        'longitude': -4.5153023
    },
    {
        'name': 'Steyning',
        'latitude': 50.8902203,
        'longitude': -0.3302184
    },
    {
        'name': 'Steyning',
        'latitude': 50.88751752,
        'longitude': -0.326420936
    },
    {
        'name': 'Stockbridge',
        'latitude': 51.1140854,
        'longitude': -1.4929702
    },
    {
        'name': 'Stockport',
        'latitude': 53.407901,
        'longitude': -2.160243
    },
    {
        'name': 'Stocksbridge',
        'latitude': 53.4824835,
        'longitude': -1.5901625
    },
    {
        'name': 'Stockton-on-Tees',
        'latitude': 54.564094,
        'longitude': -1.3129164
    },
    {
        'name': 'Stockton-on-Tees',
        'latitude': 54.56795289,
        'longitude': -1.32801422
    },
    {
        'name': 'Stockton-on-Tees',
        'latitude': 54.56795289,
        'longitude': -1.32801422
    },
    {
        'name': 'Stoke',
        'latitude': 53.0035027,
        'longitude': -2.1809979
    },
    {
        'name': 'Stone',
        'latitude': 52.89687131,
        'longitude': -2.144771617
    },
    {
        'name': 'Stone',
        'latitude': 52.9033037,
        'longitude': -2.1477653
    },
    {
        'name': 'Stonehaven',
        'latitude': 56.9640234,
        'longitude': -2.2087993,
        'zoom': [7, 8]
    },
    {
        'name': 'Stonehouse',
        'latitude': 55.6982283,
        'longitude': -3.9813873
    },
    {
        'name': 'Stonehouse',
        'latitude': 51.7474678,
        'longitude': -2.283024
    },
    {
        'name': 'Stony Stratford',
        'latitude': 52.0565724,
        'longitude': -0.8501016
    },
    {
        'name': 'Stornoway',
        'latitude': 58.20842,
        'longitude': -6.3881077,
        'zoom': [7, 8]
    },
    {
        'name': 'Stourbridge',
        'latitude': 52.4577615,
        'longitude': -2.1474345
    },
    {
        'name': 'Stourport on Severn',
        'latitude': 52.339638,
        'longitude': -2.2811646
    },
    {
        'name': 'Stow-on-the-Wold',
        'latitude': 51.9303426,
        'longitude': -1.7230154
    },
    {
        'name': 'Stowmarket',
        'latitude': 52.1878147,
        'longitude': 0.9973428
    },
    {
        'name': 'Stranraer',
        'latitude': 54.9044332,
        'longitude': -5.026204,
        'zoom': [7, 8]
    },
    {
        'name': 'Stratford',
        'latitude': 51.5406878,
        'longitude': 0.0016208
    },
    {
        'name': 'Stratford-upon-Avon',
        'latitude': 52.1927885,
        'longitude': -1.7063668
    },
    {
        'name': 'Strathaven',
        'latitude': 55.676514,
        'longitude': -4.0658238
    },
    {
        'name': 'Streatham',
        'latitude': 51.429769,
        'longitude': -0.1311105
    },
    {
        'name': 'Street',
        'latitude': 51.1255803,
        'longitude': -2.7421725
    },
    {
        'name': 'Stretford',
        'latitude': 53.445428,
        'longitude': -2.3223051
    },
    {
        'name': 'Stromness',
        'latitude': 58.9614356,
        'longitude': -3.2993767,
        'zoom': [7, 8]
    },
    {
        'name': 'Strood',
        'latitude': 51.3958567,
        'longitude': 0.4950799
    },
    {
        'name': 'Strood',
        'latitude': 51.39394678,
        'longitude': 0.48008149
    },
    {
        'name': 'Stroud',
        'latitude': 51.745424,
        'longitude': -2.2198605
    },
    {
        'name': 'Stubbington',
        'latitude': 50.82291437,
        'longitude': -1.220728767
    },
    {
        'name': 'Stubbington',
        'latitude': 50.8259273,
        'longitude': -1.2139229
    },
    {
        'name': 'Sturminster Newton',
        'latitude': 50.9273968,
        'longitude': -2.3049206
    },
    {
        'name': 'Sudbury',
        'latitude': 52.0401524,
        'longitude': 0.7299495
    },
    {
        'name': 'Sunbury-on-Thames',
        'latitude': 51.41102096,
        'longitude': -0.414231951
    },
    {
        'name': 'Sunbury-on-Thames',
        'latitude': 51.4077066,
        'longitude': -0.4118589
    },
    {
        'name': 'Sunbury-on-Thames',
        'latitude': 51.41102096,
        'longitude': -0.414231951
    },
    {
        'name': 'Sutton',
        'latitude': 51.3612155,
        'longitude': -0.1921503
    },
    {
        'name': 'Sutton Coldfield',
        'latitude': 52.5623089,
        'longitude': -1.8239794
    },
    {
        'name': 'Sutton-in-Ashfield',
        'latitude': 53.1247546,
        'longitude': -1.2627979
    },
    {
        'name': 'Sutton-on-Sea',
        'latitude': 53.3134339,
        'longitude': 0.2809461
    },
    {
        'name': 'Swadlincote',
        'latitude': 52.7736624,
        'longitude': -1.5575555
    },
    {
        'name': 'Swaffham',
        'latitude': 52.6481171,
        'longitude': 0.6909259
    },
    {
        'name': 'Swanage',
        'latitude': 50.6086976,
        'longitude': -1.9571971
    },
    {
        'name': 'Swanley',
        'latitude': 51.3956843,
        'longitude': 0.1775761
    },
    {
        'name': 'Swindon',
        'latitude': 51.5613683,
        'longitude': -1.7856853
    },
    {
        'name': 'Swinton',
        'latitude': 53.4865039,
        'longitude': -1.3257893
    },
    {
        'name': 'Swinton',
        'latitude': 53.5095363,
        'longitude': -2.3417975
    },
    {
        'name': 'Sydenham',
        'latitude': 51.4267658,
        'longitude': -0.0523877
    },
    {
        'name': 'Syston',
        'latitude': 52.6992489,
        'longitude': -1.0729753
    },
    {
        'name': 'Tadcaster',
        'latitude': 53.8852975,
        'longitude': -1.2595975
    },
    {
        'name': 'Tadley',
        'latitude': 51.3528356,
        'longitude': -1.140092
    },
    {
        'name': 'Tain',
        'latitude': 57.8119372,
        'longitude': -4.0550663
    },
    {
        'name': 'Tamworth',
        'latitude': 52.6345819,
        'longitude': -1.6948438
    },
    {
        'name': 'Taunton',
        'latitude': 51.0147895,
        'longitude': -3.1029086
    },
    {
        'name': 'Tavistock',
        'latitude': 50.5496154,
        'longitude': -4.1446358
    },
    {
        'name': 'Tayport',
        'latitude': 56.4490878,
        'longitude': -2.8807193
    },
    {
        'name': 'Teddington',
        'latitude': 51.4277844,
        'longitude': -0.333653
    },
    {
        'name': 'Teignmouth',
        'latitude': 50.5463385,
        'longitude': -3.4957798
    },
    {
        'name': 'Telford',
        'latitude': 52.6780419,
        'longitude': -2.4514273
    },
    {
        'name': 'Tenbury Wells',
        'latitude': 52.3085197,
        'longitude': -2.5974349
    },
    {
        'name': 'Tenby',
        'latitude': 51.6726128,
        'longitude': -4.7050443
    },
    {
        'name': 'Tenterden',
        'latitude': 51.0700956,
        'longitude': 0.6888267,
        'zoom': [7, 8]
    },
    {
        'name': 'Tetbury',
        'latitude': 51.639272,
        'longitude': -2.1594783
    },
    {
        'name': 'Tewkesbury',
        'latitude': 51.9937857,
        'longitude': -2.1549574
    },
    {
        'name': 'Thame',
        'latitude': 51.7482733,
        'longitude': -0.9781805
    },
    {
        'name': 'Thatcham',
        'latitude': 51.4024177,
        'longitude': -1.257412
    },
    {
        'name': 'Thetford',
        'latitude': 52.4156001,
        'longitude': 0.748712
    },
    {
        'name': 'Thirsk',
        'latitude': 54.2327725,
        'longitude': -1.3423775
    },
    {
        'name': 'Thornaby',
        'latitude': 54.5437528,
        'longitude': -1.293820794
    },
    {
        'name': 'Thornaby',
        'latitude': 54.5392895,
        'longitude': -1.2938565
    },
    {
        'name': 'Thornaby',
        'latitude': 54.5437528,
        'longitude': -1.293820794
    },
    {
        'name': 'Thornbury',
        'latitude': 51.61044642,
        'longitude': -2.51862885
    },
    {
        'name': 'Thornbury',
        'latitude': 51.6078094,
        'longitude': -2.5254942
    },
    {
        'name': 'Thorne',
        'latitude': 53.6106824,
        'longitude': -0.9641152
    },
    {
        'name': 'Thornhill',
        'latitude': 55.240638,
        'longitude': -3.7649474,
        'zoom': [7, 8]
    },
    {
        'name': 'Thornliebank',
        'latitude': 55.8072481,
        'longitude': -4.316711
    },
    {
        'name': 'Thornton',
        'latitude': 53.8759203,
        'longitude': -3.0121987
    },
    {
        'name': 'Thrapston',
        'latitude': 52.3968605,
        'longitude': -0.5368916
    },
    {
        'name': 'Thurnscoe',
        'latitude': 53.5452474,
        'longitude': -1.3080234
    },
    {
        'name': 'Thurso',
        'latitude': 58.5928537,
        'longitude': -3.527821423,
        'zoom': [7, 8]
    },
    {
        'name': 'Tickhill',
        'latitude': 53.4347768,
        'longitude': -1.109477
    },
    {
        'name': 'Tidworth',
        'latitude': 51.2447456,
        'longitude': -1.6638893
    },
    {
        'name': 'Tilbury',
        'latitude': 51.4631174,
        'longitude': 0.3643896
    },
    {
        'name': 'Tillicoultry',
        'latitude': 56.1531387,
        'longitude': -3.7414782
    },
    {
        'name': 'Tipton',
        'latitude': 52.5290396,
        'longitude': -2.0693747
    },
    {
        'name': 'Tiverton',
        'latitude': 50.902735,
        'longitude': -3.4891945,
        'zoom': [7, 8]
    },
    {
        'name': 'Tobermory',
        'latitude': 56.6227872,
        'longitude': -6.0682243,
        'zoom': [7, 8]
    },
    {
        'name': 'Todmorden',
        'latitude': 53.7137251,
        'longitude': -2.097753,
        'zoom': [7, 8]
    },
    {
        'name': 'Tonbridge',
        'latitude': 51.1889529,
        'longitude': 0.2735876
    },
    {
        'name': 'Tonypandy',
        'latitude': 51.6246695,
        'longitude': -3.4595279
    },
    {
        'name': 'Tonyrefail',
        'latitude': 51.5832675,
        'longitude': -3.4311743
    },
    {
        'name': 'Tooting',
        'latitude': 51.4278214,
        'longitude': -0.1679667
    },
    {
        'name': 'Topsham',
        'latitude': 50.6850732,
        'longitude': -3.4658063
    },
    {
        'name': 'Torpoint',
        'latitude': 50.3757288,
        'longitude': -4.1991204
    },
    {
        'name': 'Torquay',
        'latitude': 50.4652392,
        'longitude': -3.5211361
    },
    {
        'name': 'Totnes',
        'latitude': 50.4322816,
        'longitude': -3.6871525
    },
    {
        'name': 'Totton',
        'latitude': 50.92458968,
        'longitude': -1.503549467
    },
    {
        'name': 'Totton',
        'latitude': 50.9196406,
        'longitude': -1.4894631
    },
    {
        'name': 'Towcester',
        'latitude': 52.1350273,
        'longitude': -0.9948465
    },
    {
        'name': 'Tranent',
        'latitude': 55.9444972,
        'longitude': -2.9534938
    },
    {
        'name': 'Tredegar',
        'latitude': 51.7732557,
        'longitude': -3.2469535
    },
    {
        'name': 'Treharris',
        'latitude': 51.6649488,
        'longitude': -3.3058374
    },
    {
        'name': 'Treorchy',
        'latitude': 51.6610568,
        'longitude': -3.5041501
    },
    {
        'name': 'Tring',
        'latitude': 51.7940357,
        'longitude': -0.6609205
    },
    {
        'name': 'Troon',
        'latitude': 55.5437893,
        'longitude': -4.663906
    },
    {
        'name': 'Trowbridge',
        'latitude': 51.3191947,
        'longitude': -2.2040788
    },
    {
        'name': 'Tullibody',
        'latitude': 56.135243,
        'longitude': -3.8361189
    },
    {
        'name': 'Tunstall',
        'latitude': 53.0621479,
        'longitude': -2.2140908
    },
    {
        'name': 'Turriff',
        'latitude': 57.537482,
        'longitude': -2.4640839
    },
    {
        'name': 'Tyldesley',
        'latitude': 53.5144859,
        'longitude': -2.4661714
    },
    {
        'name': 'Tynemouth',
        'latitude': 55.0177847,
        'longitude': -1.4256042
    },
    {
        'name': 'Tywyn',
        'latitude': 52.5861123,
        'longitude': -4.0855906
    },
    {
        'name': 'Uckfield',
        'latitude': 50.9709535,
        'longitude': 0.0963279
    },
    {
        'name': 'Uddingston',
        'latitude': 55.8189569,
        'longitude': -4.0824857
    },
    {
        'name': 'Ullapool',
        'latitude': 57.8978237,
        'longitude': -5.1586647,
        'zoom': [7, 8]
    },
    {
        'name': 'Ulverston',
        'latitude': 54.1959381,
        'longitude': -3.0962961
    },
    {
        'name': 'Uppingham',
        'latitude': 52.5887243,
        'longitude': -0.7234249
    },
    {
        'name': 'Upton-upon-Severn',
        'latitude': 52.0611191,
        'longitude': -2.2151396
    },
    {
        'name': 'Urmston',
        'latitude': 53.4453662,
        'longitude': -2.3525463
    },
    {
        'name': 'Usk',
        'latitude': 51.7045076,
        'longitude': -2.9026437
    },
    {
        'name': 'Uttoxeter',
        'latitude': 52.8980321,
        'longitude': -1.8649214
    },
    {
        'name': 'Uxbridge',
        'latitude': 51.5449509,
        'longitude': -0.4816672
    },
    {
        'name': 'Ventnor',
        'latitude': 50.594976,
        'longitude': -1.2029747
    },
    {
        'name': 'Verwood',
        'latitude': 50.8801244,
        'longitude': -1.8752368
    },
    {
        'name': 'Viewpark',
        'latitude': 55.8260244,
        'longitude': -4.0606131
    },
    {
        'name': 'Wadebridge',
        'latitude': 50.5171441,
        'longitude': -4.8340186
    },
    {
        'name': 'Wainfleet All Saints',
        'latitude': 53.1074468,
        'longitude': 0.2369499
    },
    {
        'name': 'Walderslade',
        'latitude': 51.3429452,
        'longitude': 0.5267802
    },
    {
        'name': 'Walkden',
        'latitude': 53.5242276,
        'longitude': -2.3984426
    },
    {
        'name': 'Wallasey',
        'latitude': 53.4241208,
        'longitude': -3.0394101
    },
    {
        'name': 'Wallingford',
        'latitude': 51.5982316,
        'longitude': -1.1252158
    },
    {
        'name': 'Wallsend',
        'latitude': 54.9911912,
        'longitude': -1.5342042
    },
    {
        'name': 'Walsall',
        'latitude': 52.5847949,
        'longitude': -1.9822687
    },
    {
        'name': 'Waltham Cross',
        'latitude': 51.6857829,
        'longitude': -0.0330001
    },
    {
        'name': 'Walthamstow',
        'latitude': 51.5844701,
        'longitude': -0.0188186
    },
    {
        'name': 'Walton-on-Thames',
        'latitude': 51.3828794,
        'longitude': -0.417526618
    },
    {
        'name': 'Walton-on-Thames',
        'latitude': 51.3856837,
        'longitude': -0.419814
    },
    {
        'name': 'Walton-on-the-Naze',
        'latitude': 51.84945172,
        'longitude': 1.264549635
    },
    {
        'name': 'Walton-on-the-Naze',
        'latitude': 51.848357,
        'longitude': 1.2725902
    },
    {
        'name': 'Wandsworth',
        'latitude': 51.4570271,
        'longitude': -0.1932607
    },
    {
        'name': 'Wantage',
        'latitude': 51.5878072,
        'longitude': -1.4249258
    },
    {
        'name': 'Ware',
        'latitude': 51.8103288,
        'longitude': -0.0328751
    },
    {
        'name': 'Wareham',
        'latitude': 50.6868972,
        'longitude': -2.1098377
    },
    {
        'name': 'Warley',
        'latitude': 52.48105,
        'longitude': -1.9902641
    },
    {
        'name': 'Warlingham',
        'latitude': 51.309559,
        'longitude': -0.0557157
    },
    {
        'name': 'Warminster',
        'latitude': 51.205366,
        'longitude': -2.1831682,
        'zoom': [7, 8]
    },
    {
        'name': 'Warrington',
        'latitude': 53.3899497,
        'longitude': -2.5943178
    },
    {
        'name': 'Warwick',
        'latitude': 52.2814519,
        'longitude': -1.5815742
    },
    {
        'name': 'Washington',
        'latitude': 54.90398877,
        'longitude': -1.526331138
    },
    {
        'name': 'Washington',
        'latitude': 54.898614,
        'longitude': -1.528827
    },
    {
        'name': 'Watchet',
        'latitude': 51.179924,
        'longitude': -3.3306406
    },
    {
        'name': 'Waterlooville',
        'latitude': 50.88388285,
        'longitude': -1.022947555
    },
    {
        'name': 'Waterlooville',
        'latitude': 50.8797911,
        'longitude': -1.0314789
    },
    {
        'name': 'Watford',
        'latitude': 51.6553875,
        'longitude': -0.3957425
    },
    {
        'name': 'Wath upon Dearne',
        'latitude': 53.5025235,
        'longitude': -1.3450651
    },
    {
        'name': 'Watlington',
        'latitude': 51.6451586,
        'longitude': -1.0043458
    },
    {
        'name': 'Watton',
        'latitude': 52.5699185,
        'longitude': 0.8253494
    },
    {
        'name': 'Wednesbury',
        'latitude': 52.5521806,
        'longitude': -2.0224441
    },
    {
        'name': 'Wednesfield',
        'latitude': 52.5998276,
        'longitude': -2.0813004
    },
    {
        'name': 'Wellesbourne',
        'latitude': 52.1947964,
        'longitude': -1.5911203
    },
    {
        'name': 'Wellingborough',
        'latitude': 52.30189,
        'longitude': -0.6937309
    },
    {
        'name': 'Wellington',
        'latitude': 52.7000357,
        'longitude': -2.5176603
    },
    {
        'name': 'Wellington',
        'latitude': 50.978376,
        'longitude': -3.2275504
    },
    {
        'name': 'Wells-next-the-Sea',
        'latitude': 52.9549725,
        'longitude': 0.8515402
    },
    {
        'name': 'Welshpool',
        'latitude': 52.6600742,
        'longitude': -3.1474212,
        'zoom': [7, 8]
    },
    {
        'name': 'Welwyn',
        'latitude': 51.8286869,
        'longitude': -0.2141752
    },
    {
        'name': 'Welwyn Garden City',
        'latitude': 51.8031083,
        'longitude': -0.2068872
    },
    {
        'name': 'Wem',
        'latitude': 52.8556312,
        'longitude': -2.7241167
    },
    {
        'name': 'Wembley',
        'latitude': 51.5531547,
        'longitude': -0.2957562
    },
    {
        'name': 'Wendover',
        'latitude': 51.7676884,
        'longitude': -0.7443215
    },
    {
        'name': 'West Bridgford',
        'latitude': 52.9310754,
        'longitude': -1.1256663
    },
    {
        'name': 'West Bridgford',
        'latitude': 52.92288999,
        'longitude': -1.128144894
    },
    {
        'name': 'West Bromwich',
        'latitude': 52.5186579,
        'longitude': -1.9923114
    },
    {
        'name': 'West Kilbride',
        'latitude': 55.6947934,
        'longitude': -4.8572629
    },
    {
        'name': 'West Kirby',
        'latitude': 53.3733229,
        'longitude': -3.1865608
    },
    {
        'name': 'West Malling',
        'latitude': 51.2954028,
        'longitude': 0.409461
    },
    {
        'name': 'Westbury',
        'latitude': 51.261079,
        'longitude': -2.1836535
    },
    {
        'name': 'Westerham',
        'latitude': 51.2671155,
        'longitude': 0.0706133
    },
    {
        'name': 'Westgate-on-Sea',
        'latitude': 51.3815773,
        'longitude': 1.3372108
    },
    {
        'name': 'Westhill',
        'latitude': 57.1536295,
        'longitude': -2.289498411
    },
    {
        'name': 'Westhill',
        'latitude': 57.1544136,
        'longitude': -2.2863821
    },
    {
        'name': 'Westhoughton',
        'latitude': 53.54759481,
        'longitude': -2.518509838
    },
    {
        'name': 'Westhoughton',
        'latitude': 53.5502444,
        'longitude': -2.522608
    },
    {
        'name': 'Weston-super-Mare',
        'latitude': 51.3471927,
        'longitude': -2.9778916,
        'zoom': [7, 8]
    },
    {
        'name': 'Wetherby',
        'latitude': 53.928397,
        'longitude': -1.3866664,
        'zoom': [7, 8]
    },
    {
        'name': 'Weybridge',
        'latitude': 51.3727175,
        'longitude': -0.4549297
    },
    {
        'name': 'Weybridge',
        'latitude': 51.3727175,
        'longitude': -0.4549297
    },
    {
        'name': 'Weymouth',
        'latitude': 50.6096257,
        'longitude': -2.4543424,
        'zoom': [7, 8]
    },
    {
        'name': 'Whaley Bridge',
        'latitude': 53.3300532,
        'longitude': -1.9834471
    },
    {
        'name': 'Whickham',
        'latitude': 54.9436482,
        'longitude': -1.6798674
    },
    {
        'name': 'Whiston',
        'latitude': 53.4169156,
        'longitude': -2.7905803
    },
    {
        'name': 'Whitburn',
        'latitude': 55.8667819,
        'longitude': -3.6849014
    },
    {
        'name': 'Whitby',
        'latitude': 54.4874141,
        'longitude': -0.6155111
    },
    {
        'name': 'Whitchurch',
        'latitude': 51.2298963,
        'longitude': -1.3384328
    },
    {
        'name': 'Whitchurch',
        'latitude': 52.9704092,
        'longitude': -2.6852137
    },
    {
        'name': 'Whitefield',
        'latitude': 53.5533682,
        'longitude': -2.2969019
    },
    {
        'name': 'Whitehaven',
        'latitude': 54.5474199,
        'longitude': -3.5885335
    },
    {
        'name': 'Whitland',
        'latitude': 51.82088265,
        'longitude': -4.608549429
    },
    {
        'name': 'Whitland',
        'latitude': 51.81644897,
        'longitude': -4.613403621
    },
    {
        'name': 'Whitland',
        'latitude': 51.81743836,
        'longitude': -4.612946544
    },
    {
        'name': 'Whitley Bay',
        'latitude': 55.0422091,
        'longitude': -1.4454353
    },
    {
        'name': 'Whitstable',
        'latitude': 51.3531002,
        'longitude': 1.037884903,
        'zoom': [7, 8]
    },
    {
        'name': 'Whittlesey',
        'latitude': 52.5550114,
        'longitude': -0.122643
    },
    {
        'name': 'Whitworth',
        'latitude': 53.6644268,
        'longitude': -2.1734056
    },
    {
        'name': 'Wick',
        'latitude': 58.4425516,
        'longitude': -3.0915827,
        'zoom': [7, 8]
    },
    {
        'name': 'Wickford',
        'latitude': 51.6113905,
        'longitude': 0.5244419
    },
    {
        'name': 'Widnes',
        'latitude': 53.3646888,
        'longitude': -2.7283328
    },
    {
        'name': 'Wigan',
        'latitude': 53.5457188,
        'longitude': -2.6264624,
        'zoom': [7, 8]
    },
    {
        'name': 'Wigston',
        'latitude': 52.586288,
        'longitude': -1.1059076
    },
    {
        'name': 'Wigton',
        'latitude': 54.8250263,
        'longitude': -3.1583101
    },
    {
        'name': 'Wigtown',
        'latitude': 54.8687022,
        'longitude': -4.4415694
    },
    {
        'name': 'Willenhall',
        'latitude': 52.5847624,
        'longitude': -2.0534738
    },
    {
        'name': 'Willesden',
        'latitude': 51.5466216,
        'longitude': -0.2358661
    },
    {
        'name': 'Wilmslow',
        'latitude': 53.3261292,
        'longitude': -2.2327511,
        'zoom': [7, 8]
    },
    {
        'name': 'Wilton',
        'latitude': 51.0805315,
        'longitude': -1.8607051
    },
    {
        'name': 'Wimbledon',
        'latitude': 51.4214787,
        'longitude': -0.2064027
    },
    {
        'name': 'Wimborne Minster',
        'latitude': 50.7995189,
        'longitude': -1.987339
    },
    {
        'name': 'Wincanton',
        'latitude': 51.0560417,
        'longitude': -2.4112309,
        'zoom': [7, 8]
    },
    {
        'name': 'Winchcombe',
        'latitude': 51.9529872,
        'longitude': -1.9654862
    },
    {
        'name': 'Winchelsea',
        'latitude': 50.9243896,
        'longitude': 0.7086362
    },
    {
        'name': 'Windermere',
        'latitude': 54.3794828,
        'longitude': -2.9061994
    },
    {
        'name': 'Windsor',
        'latitude': 51.4814958,
        'longitude': -0.6133183
    },
    {
        'name': 'Winsford',
        'latitude': 53.1920711,
        'longitude': -2.5313108
    },
    {
        'name': 'Winslow',
        'latitude': 51.9444134,
        'longitude': -0.8816234
    },
    {
        'name': 'Winterton',
        'latitude': 53.6555109,
        'longitude': -0.5990856
    },
    {
        'name': 'Wirksworth',
        'latitude': 53.0821999,
        'longitude': -1.5732089
    },
    {
        'name': 'Wisbech',
        'latitude': 52.6651733,
        'longitude': 0.1606824
    },
    {
        'name': 'Wishaw',
        'latitude': 55.7743458,
        'longitude': -3.9184134
    },
    {
        'name': 'Witham',
        'latitude': 51.8019608,
        'longitude': 0.6383746
    },
    {
        'name': 'Withernsea',
        'latitude': 53.7292374,
        'longitude': 0.0332759
    },
    {
        'name': 'Witney',
        'latitude': 51.7838848,
        'longitude': -1.4852861
    },
    {
        'name': 'Wiveliscombe',
        'latitude': 51.042145,
        'longitude': -3.3100475
    },
    {
        'name': 'Wivenhoe',
        'latitude': 51.8674915,
        'longitude': 0.9627477
    },
    {
        'name': 'Woking',
        'latitude': 51.3201891,
        'longitude': -0.5564726
    },
    {
        'name': 'Wokingham',
        'latitude': 51.4120318,
        'longitude': -0.8324037
    },
    {
        'name': 'Wolverton',
        'latitude': 52.060942,
        'longitude': -0.8118554
    },
    {
        'name': 'Wombwell',
        'latitude': 53.5209656,
        'longitude': -1.4032589
    },
    {
        'name': 'Wood Green',
        'latitude': 51.5972054,
        'longitude': -0.1099585
    },
    {
        'name': 'Woodbridge',
        'latitude': 52.0941323,
        'longitude': 1.3199383
    },
    {
        'name': 'Woodhall Spa',
        'latitude': 53.1519386,
        'longitude': -0.2180445
    },
    {
        'name': 'Woodstock',
        'latitude': 51.8474887,
        'longitude': -1.3545343
    },
    {
        'name': 'Wooler',
        'latitude': 55.5458505,
        'longitude': -2.0147556
    },
    {
        'name': 'Woolwich',
        'latitude': 51.4826696,
        'longitude': 0.0623335
    },
    {
        'name': 'Workington',
        'latitude': 54.6415716,
        'longitude': -3.5459287
    },
    {
        'name': 'Worksop',
        'latitude': 53.30488,
        'longitude': -1.123572
    },
    {
        'name': 'Worsley',
        'latitude': 53.4999331,
        'longitude': -2.3783778
    },
    {
        'name': 'Worthing',
        'latitude': 50.8116902,
        'longitude': -0.3703948
    },
    {
        'name': 'Wotton-under-Edge',
        'latitude': 51.6378241,
        'longitude': -2.3547251
    },
    {
        'name': 'Wragby',
        'latitude': 53.287009,
        'longitude': -0.3035517
    },
    {
        'name': 'Wrexham',
        'latitude': 53.0465084,
        'longitude': -2.9937869
    },
    {
        'name': 'Wymondham',
        'latitude': 52.5764773,
        'longitude': 1.117928
    },
    {
        'name': 'Wythenshawe',
        'latitude': 53.3803596,
        'longitude': -2.2632079
    },
    {
        'name': 'Yarm',
        'latitude': 54.5091419,
        'longitude': -1.3543412,
        'zoom': [7, 8]
    },
    {
        'name': 'Yarmouth',
        'latitude': 50.7055054,
        'longitude': -1.4986357
    },
    {
        'name': 'Yate',
        'latitude': 51.5403113,
        'longitude': -2.4134281
    },
    {
        'name': 'Yateley',
        'latitude': 51.3402679,
        'longitude': -0.8284067
    },
    {
        'name': 'Yaxley',
        'latitude': 52.5188785,
        'longitude': -0.2530088
    },
    {
        'name': 'Yeadon',
        'latitude': 53.8636612,
        'longitude': -1.6850787
    },
    {
        'name': 'Yeovil',
        'latitude': 50.9420451,
        'longitude': -2.6318629,
        'zoom': [7, 8]
    },
    {
        'name': 'Ystrad Mynach',
        'latitude': 51.63999789,
        'longitude': -3.23968042
    },
    {
        'name': 'Ystrad Mynach',
        'latitude': 51.6418098,
        'longitude': -3.2373987
    },
    {
        'name': 'Ystradgynlais',
        'latitude': 51.7819324,
        'longitude': -3.7571837
    }
]

const suberbs = [
    {
        'url': 'https://geokeo.com/database/suburb/gb/'
    }
]
