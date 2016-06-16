var election = new Datamap({
        scope: 'usa',
        element: document.getElementById('map'),
        geographyConfig: {
          highlightBorderColor: '#bada55',
         popupTemplate: function(geography, data) {
            return '<div class="hoverinfo"><strong>' + geography.properties.name + '</strong> <br />Total Homeless: ' +  data.homelessTotal + ' </div>'
          },
          highlightBorderWidth: 3
        },
        
        fills: {
        ' < 1%': '#cecdcb',
        '1% to 2.9%': '#b2bac6',
        '3% to 6%': '#6f86a0',
        '> 6%': '#486f91',
        },
        data:{
        "AZ": {
            "fillKey": "1% to 2.9%",
            "homelessTotal": 9896
        },
        "CO": {
            "fillKey": "1% to 2.9%",
            "homelessTotal": 9953
        },
        "DE": {
            "fillKey": " < 1%",
            "homelessTotal": 953
        },
        "FL": {
            "fillKey": "> 6%",
            "homelessTotal": 35900
        },
        "GA": {
            "fillKey": "1% to 2.9%",
            "homelessTotal": 13790
        },
        "HI": {
            "fillKey": "1% to 2.9%",
            "homelessTotal": 7620
        },
        "ID": {
            "fillKey": " < 1%",
            "homelessTotal": 1966
        },
        "IL": {
            "fillKey": "1% to 2.9%",
            "homelessTotal": 13177
        },
        "IN": {
            "fillKey": "1% to 2.9%",
            "homelessTotal": 5863
        },
        "IA": {
            "fillKey": " < 1%",
            "homelessTotal": 3081
        },
        "KS": {
            "fillKey": " < 1%",
            "homelessTotal": 2588
        },
        "KY": {
            "fillKey": " < 1%",
            "homelessTotal": 4538
        },
        "LA": {
            "fillKey": " < 1%",
            "homelessTotal": 4081
        },
        "MD": {
            "fillKey": "1% to 2.9%",
            "homelessTotal": 8390
        },
        "ME": {
            "fillKey": " < 1%",
            "homelessTotal": 2372
        },
        "MA": {
            "fillKey": "3% to 6%",
            "homelessTotal": 21135
        },
        "MN": {
            "fillKey": "1% to 2.9%",
            "homelessTotal": 7546
        },
        "MI": {
            "fillKey": "1% to 2.9%",
            "homelessTotal": 10516
        },
        "MS": {
            "fillKey": " < 1%",
            "homelessTotal": 1983
        },
        "MO": {
            "fillKey": "1% to 2.9%",
            "homelessTotal": 6482
        },
        "MT": {
            "fillKey": " < 1%",
            "homelessTotal": 1709
        },
        "NC": {
            "fillKey": "1% to 2.9%",
            "homelessTotal": 10685
        },
        "NE": {
            "fillKey": " < 1%",
            "homelessTotal": 2744
        },
        "NV": {
            "fillKey": "1% to 2.9%",
            "homelessTotal": 8743
        },
        "NH": {
            "fillKey": " < 1%",
            "homelessTotal": 1445
        },
        "NJ": {
            "fillKey": "1% to 2.9%",
            "homelessTotal": 10098
        },
        "NY": {
            "fillKey": "> 6%",
            "homelessTotal": 88250
        },
        "ND": {
            "fillKey": " < 1%",
            "homelessTotal": 1305
        },
        "NM": {
            "fillKey": " < 1%",
            "homelessTotal": 2629
        },
        "OH": {
            "fillKey": "1% to 2.9%",
            "homelessTotal": 11182
        },
        "OK": {
            "fillKey": " < 1%",
            "homelessTotal": 3777
        },
        "OR": {
            "fillKey": "1% to 2.9%",
            "homelessTotal": 13226
        },
        "PA": {
            "fillKey": "1% to 2.9%",
            "homelessTotal": 15421
        },
        "RI": {
            "fillKey": " < 1%",
            "homelessTotal": 1111
        },
        "SC": {
            "fillKey": "1% to 2.9%",
            "homelessTotal": 5354
        },
        "SD": {
            "fillKey": " < 1%",
            "homelessTotal": 1036
        },
        "TN": {
            "fillKey": "1% to 2.9%",
            "homelessTotal": 9123
        },
        "TX": {
            "fillKey": " < 1%",
            "homelessTotal": 23678
        },
        "UT": {
            "fillKey": " < 1%",
            "homelessTotal": 3025
        },
        "WI": {
            "fillKey": "1% to 2.9%",
            "homelessTotal": 6057
        },
        "VA": {
            "fillKey": "1% to 2.9%",
            "homelessTotal": 7001
        },
        "VT": {
            "fillKey": " < 1%",
            "homelessTotal": 1523
        },
        "WA": {
            "fillKey": "3% to 6%",
            "homelessTotal": 19419
        },
        "WV": {
            "fillKey": " < 1%",
            "homelessTotal": 1835
        },
        "WY": {
            "fillKey": " < 1%",
            "homelessTotal": 798
        },
        "CA": {
            "fillKey": "> 6%",
            "homelessTotal": 115738
        },
        "CT": {
            "fillKey": " < 1%",
            "homelessTotal": 4047
        },
        "AK": {
            "fillKey": " < 1%",
            "homelessTotal": 1956
        },
        "AR": {
            "fillKey": " < 1%",
            "homelessTotal": 1560
        },
        "AL": {
            "fillKey": " < 1%",
            "homelessTotal": 3970
        }
    }
});

//add a map legend using the 'legend' plugin
election.legend({legendTitle : "Distribution of Total Homeless"});