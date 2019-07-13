import React from 'react';
import { ResponsiveChoropleth } from '@nivo/geo';


// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
function GeoMap () {
    const data = [
        {
          "id": "AFG",
          "value": 0
        },
        {
          "id": "AGO",
          "value": 0
        },
        {
          "id": "ALB",
          "value": 811893
        },
        {
          "id": "ARE",
          "value": 233266
        },
        {
          "id": "ARG",
          "value": 270725
        },
        {
          "id": "ARM",
          "value": 457356
        },
        {
          "id": "ATA",
          "value": 428042
        },
        {
          "id": "ATF",
          "value": 53197
        },
        {
          "id": "AUT",
          "value": 521775
        },
        {
          "id": "AZE",
          "value": 296080
        },
        {
          "id": "BDI",
          "value": 382309
        },
        {
          "id": "BEL",
          "value": 991894
        },
        {
          "id": "BEN",
          "value": 256676
        },
        {
          "id": "BFA",
          "value": 328596
        },
        {
          "id": "BGD",
          "value": 74042
        },
        {
          "id": "BGR",
          "value": 778137
        },
        {
          "id": "BHS",
          "value": 88842
        },
        {
          "id": "BIH",
          "value": 58593
        },
        {
          "id": "BLR",
          "value": 312943
        },
        {
          "id": "BLZ",
          "value": 800031
        },
        {
          "id": "BOL",
          "value": 32388
        },
        {
          "id": "BRN",
          "value": 538898
        },
        {
          "id": "BTN",
          "value": 423207
        },
        {
          "id": "BWA",
          "value": 593772
        },
        {
          "id": "CAF",
          "value": 285159
        },
        {
          "id": "CAN",
          "value": 605864
        },
        {
          "id": "CHE",
          "value": 4365
        },
        {
          "id": "CHL",
          "value": 499941
        },
        {
          "id": "CHN",
          "value": 428419
        },
        {
          "id": "CIV",
          "value": 874926
        },
        {
          "id": "CMR",
          "value": 579033
        },
        {
          "id": "COG",
          "value": 292557
        },
        {
          "id": "COL",
          "value": 552535
        },
        {
          "id": "CRI",
          "value": 530803
        },
        {
          "id": "CUB",
          "value": 520781
        },
        {
          "id": "-99",
          "value": 610880
        },
        {
          "id": "CYP",
          "value": 196793
        },
        {
          "id": "CZE",
          "value": 137013
        },
        {
          "id": "DEU",
          "value": 711523
        },
        {
          "id": "DJI",
          "value": 8725
        },
        {
          "id": "DNK",
          "value": 583829
        },
        {
          "id": "DOM",
          "value": 886766
        },
        {
          "id": "DZA",
          "value": 402949
        },
        {
          "id": "ECU",
          "value": 444926
        },
        {
          "id": "EGY",
          "value": 351147
        },
        {
          "id": "ERI",
          "value": 652281
        },
        {
          "id": "ESP",
          "value": 267720
        },
        {
          "id": "EST",
          "value": 316092
        },
        {
          "id": "ETH",
          "value": 644704
        },
        {
          "id": "FIN",
          "value": 523099
        },
        {
          "id": "FJI",
          "value": 172519
        },
        {
          "id": "FLK",
          "value": 441742
        },
        {
          "id": "FRA",
          "value": 537914
        },
        {
          "id": "GAB",
          "value": 85954
        },
        {
          "id": "GBR",
          "value": 805971
        },
        {
          "id": "GEO",
          "value": 910386
        },
        {
          "id": "GHA",
          "value": 219656
        },
        {
          "id": "GIN",
          "value": 931645
        },
        {
          "id": "GMB",
          "value": 845464
        },
        {
          "id": "GNB",
          "value": 734017
        },
        {
          "id": "GNQ",
          "value": 263025
        },
        {
          "id": "GRC",
          "value": 151172
        },
        {
          "id": "GTM",
          "value": 961019
        },
        {
          "id": "GUY",
          "value": 228978
        },
        {
          "id": "HND",
          "value": 364040
        },
        {
          "id": "HRV",
          "value": 534468
        },
        {
          "id": "HTI",
          "value": 518469
        },
        {
          "id": "HUN",
          "value": 468222
        },
        {
          "id": "IDN",
          "value": 24064
        },
        {
          "id": "IND",
          "value": 812566
        },
        {
          "id": "IRL",
          "value": 3342
        },
        {
          "id": "IRN",
          "value": 473
        },
        {
          "id": "IRQ",
          "value": 639354
        },
        {
          "id": "ISL",
          "value": 187046
        },
        {
          "id": "ISR",
          "value": 47200
        },
        {
          "id": "ITA",
          "value": 436397
        },
        {
          "id": "JAM",
          "value": 944423
        },
        {
          "id": "JOR",
          "value": 335802
        },
        {
          "id": "JPN",
          "value": 839017
        },
        {
          "id": "KAZ",
          "value": 984022
        },
        {
          "id": "KEN",
          "value": 129216
        },
        {
          "id": "KGZ",
          "value": 802969
        },
        {
          "id": "KHM",
          "value": 795769
        },
        {
          "id": "OSA",
          "value": 333774
        },
        {
          "id": "KWT",
          "value": 686144
        },
        {
          "id": "LAO",
          "value": 581832
        },
        {
          "id": "LBN",
          "value": 962771
        },
        {
          "id": "LBR",
          "value": 383450
        },
        {
          "id": "LBY",
          "value": 14533
        },
        {
          "id": "LKA",
          "value": 417065
        },
        {
          "id": "LSO",
          "value": 176424
        },
        {
          "id": "LTU",
          "value": 537956
        },
        {
          "id": "LUX",
          "value": 666914
        },
        {
          "id": "LVA",
          "value": 46643
        },
        {
          "id": "MAR",
          "value": 700805
        },
        {
          "id": "MDA",
          "value": 575593
        },
        {
          "id": "MDG",
          "value": 973753
        },
        {
          "id": "MEX",
          "value": 985644
        },
        {
          "id": "MKD",
          "value": 137579
        },
        {
          "id": "MLI",
          "value": 913050
        },
        {
          "id": "MMR",
          "value": 756639
        },
        {
          "id": "MNE",
          "value": 50042
        },
        {
          "id": "MNG",
          "value": 32439
        },
        {
          "id": "MOZ",
          "value": 949252
        },
        {
          "id": "MRT",
          "value": 212793
        },
        {
          "id": "MWI",
          "value": 845256
        },
        {
          "id": "MYS",
          "value": 318320
        },
        {
          "id": "NAM",
          "value": 937515
        },
        {
          "id": "NCL",
          "value": 565444
        },
        {
          "id": "NER",
          "value": 745619
        },
        {
          "id": "NGA",
          "value": 467133
        },
        {
          "id": "NIC",
          "value": 353436
        },
        {
          "id": "NLD",
          "value": 980509
        },
        {
          "id": "NOR",
          "value": 453935
        },
        {
          "id": "NPL",
          "value": 491433
        },
        {
          "id": "NZL",
          "value": 98232
        },
        {
          "id": "OMN",
          "value": 594820
        },
        {
          "id": "PAK",
          "value": 855545
        },
        {
          "id": "PAN",
          "value": 645915
        },
        {
          "id": "PER",
          "value": 777266
        },
        {
          "id": "PHL",
          "value": 532138
        },
        {
          "id": "PNG",
          "value": 884361
        },
        {
          "id": "POL",
          "value": 136775
        },
        {
          "id": "PRI",
          "value": 149720
        },
        {
          "id": "PRT",
          "value": 184787
        },
        {
          "id": "PRY",
          "value": 607122
        },
        {
          "id": "QAT",
          "value": 186144
        },
        {
          "id": "ROU",
          "value": 804130
        },
        {
          "id": "RUS",
          "value": 288219
        },
        {
          "id": "RWA",
          "value": 414268
        },
        {
          "id": "ESH",
          "value": 224555
        },
        {
          "id": "SAU",
          "value": 498080
        },
        {
          "id": "SDN",
          "value": 599969
        },
        {
          "id": "SDS",
          "value": 83804
        },
        {
          "id": "SEN",
          "value": 111355
        },
        {
          "id": "SLB",
          "value": 668580
        },
        {
          "id": "SLE",
          "value": 872761
        },
        {
          "id": "SLV",
          "value": 36221
        },
        {
          "id": "ABV",
          "value": 40669
        },
        {
          "id": "SOM",
          "value": 780621
        },
        {
          "id": "SRB",
          "value": 475477
        },
        {
          "id": "SUR",
          "value": 52137
        },
        {
          "id": "SVK",
          "value": 213523
        },
        {
          "id": "SVN",
          "value": 137452
        },
        {
          "id": "SWZ",
          "value": 924606
        },
        {
          "id": "SYR",
          "value": 785038
        },
        {
          "id": "TCD",
          "value": 710752
        },
        {
          "id": "TGO",
          "value": 437891
        },
        {
          "id": "THA",
          "value": 800051
        },
        {
          "id": "TJK",
          "value": 303013
        },
        {
          "id": "TKM",
          "value": 843129
        },
        {
          "id": "TLS",
          "value": 803234
        },
        {
          "id": "TTO",
          "value": 443072
        },
        {
          "id": "TUN",
          "value": 664756
        },
        {
          "id": "TUR",
          "value": 705203
        },
        {
          "id": "TWN",
          "value": 810466
        },
        {
          "id": "TZA",
          "value": 558372
        },
        {
          "id": "UGA",
          "value": 681607
        },
        {
          "id": "UKR",
          "value": 763804
        },
        {
          "id": "URY",
          "value": 728901
        },
        {
          "id": "USA",
          "value": 651365
        },
        {
          "id": "UZB",
          "value": 222217
        },
        {
          "id": "VEN",
          "value": 186795
        },
        {
          "id": "VNM",
          "value": 704050
        },
        {
          "id": "VUT",
          "value": 904417
        },
        {
          "id": "PSE",
          "value": 245123
        },
        {
          "id": "YEM",
          "value": 248800
        },
        {
          "id": "ZAF",
          "value": 259109
        },
        {
          "id": "ZMB",
          "value": 50462
        },
        {
          "id": "ZWE",
          "value": 605527
        },
        {
          "id": "KOR",
          "value": 64778
        }
      ]
    return (
        <ResponsiveChoropleth
            data={data}
            features={[]}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            colors="nivo"
            domain={[ 0, 1000000 ]}
            unknownColor="#666666"
            label="properties.name"
            valueFormat=".2s"
            projectionTranslation={[ 0.5, 0.5 ]}
            projectionRotation={[ 0, 0, 0 ]}
            enableGraticule={true}
            graticuleLineColor="#dddddd"
            borderWidth={0.5}
            borderColor="#152538"
            legends={[
                {
                    anchor: 'bottom-left',
                    direction: 'column',
                    justify: true,
                    translateX: 20,
                    translateY: -100,
                    itemsSpacing: 0,
                    itemWidth: 94,
                    itemHeight: 18,
                    itemDirection: 'left-to-right',
                    itemTextColor: '#444444',
                    itemOpacity: 0.85,
                    symbolSize: 18,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: '#000000',
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
        />
    )
}

export default GeoMap;