var election = new Datamap({
        scope: 'usa',
        element: document.getElementById('map'),
        geographyConfig: {
          highlightBorderColor: '#bada55',
         popupTemplate: function(geography, data) {
            return '<div class="hoverinfo"><strong>' + geography.properties.name + '</strong> <br />Chronically Homeless: ' +  data.homelessTotal + ' </div>'
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
            "homelessTotal": 1246
        },
        "CO": {
            "fillKey": "1% to 2.9%",
            "homelessTotal": 1572
        },
        "DE": {
            "fillKey": " < 1%",
            "homelessTotal": 64
        },
        "FL": {
            "fillKey": "> 6%",
            "homelessTotal": 6021
        },
        "GA": {
            "fillKey": "1% to 2.9%",
            "homelessTotal": 1994
        },
        "HI": {
            "fillKey": "1% to 2.9%",
            "homelessTotal": 1372
        },
        "ID": {
            "fillKey": " < 1%",
            "homelessTotal": 164
        },
        "IL": {
            "fillKey": "1% to 2.9%",
            "homelessTotal": 1799
        },
        "IN": {
            "fillKey": " < 1%",
            "homelessTotal": 608
        },
        "IA": {
            "fillKey": " < 1%",
            "homelessTotal": 201
        },
        "KS": {
            "fillKey": " < 1%",
            "homelessTotal": 339
        },
        "KY": {
            "fillKey": " < 1%",
            "homelessTotal": 383
        },
        "LA": {
            "fillKey": " < 1%",
            "homelessTotal": 735
        },
        "MD": {
            "fillKey": "1% to 2.9%",
            "homelessTotal": 1634
        },
        "ME": {
            "fillKey": " < 1%",
            "homelessTotal": 193
        },
        "MA": {
            "fillKey": "1% to 2.9%",
            "homelessTotal": 1411
        },
        "MN": {
            "fillKey": "1% to 2.9%",
            "homelessTotal": 1124
        },
        "MI": {
            "fillKey": "1% to 2.9%",
            "homelessTotal": 830
        },
        "MS": {
            "fillKey": " < 1%",
            "homelessTotal": 233
        },
        "MO": {
            "fillKey": "1% to 2.9%",
            "homelessTotal": 875
        },
        "MT": {
            "fillKey": " < 1%",
            "homelessTotal": 154
        },
        "NC": {
            "fillKey": "1% to 2.9%",
            "homelessTotal": 1253
        },
        "NE": {
            "fillKey": " < 1%",
            "homelessTotal": 257
        },
        "NV": {
            "fillKey": " < 1%",
            "homelessTotal": 585
        },
        "NH": {
            "fillKey": " < 1%",
            "homelessTotal": 257
        },
        "NJ": {
            "fillKey": "1% to 2.9%",
            "homelessTotal": 1182
        },
        "NY": {
            "fillKey": "3% to 6%",
            "homelessTotal": 4327
        },
        "ND": {
            "fillKey": " < 1%",
            "homelessTotal": 70
        },
        "NM": {
            "fillKey": " < 1%",
            "homelessTotal": 621
        },
        "OH": {
            "fillKey": "1% to 2.9%",
            "homelessTotal": 1160
        },
        "OK": {
            "fillKey": " < 1%",
            "homelessTotal": 508
        },
        "OR": {
            "fillKey": "3% to 6%",
            "homelessTotal": 3521
        },
        "PA": {
            "fillKey": "1% to 2.9%",
            "homelessTotal": 1442
        },
        "RI": {
            "fillKey": " < 1%",
            "homelessTotal": 110
        },
        "SC": {
            "fillKey": "1% to 2.9%",
            "homelessTotal": 916
        },
        "SD": {
            "fillKey": " < 1%",
            "homelessTotal": 85
        },
        "TN": {
            "fillKey": "1% to 2.9%",
            "homelessTotal": 1492
        },
        "TX": {
            "fillKey": "3% to 6%",
            "homelessTotal": 3778
        },
        "UT": {
            "fillKey": " < 1%",
            "homelessTotal": 178
        },
        "WI": {
            "fillKey": "1% to 2.9%",
            "homelessTotal": 361
        },
        "VA": {
            "fillKey": "1% to 2.9%",
            "homelessTotal": 1041
        },
        "VT": {
            "fillKey": " < 1%",
            "homelessTotal": 139
        },
        "WA": {
            "fillKey": "1% to 2.9%",
            "homelessTotal": 2261
        },
        "WV": {
            "fillKey": " < 1%",
            "homelessTotal": 352
        },
        "WY": {
            "fillKey": " < 1%",
            "homelessTotal": 86
        },
        "CA": {
            "fillKey": "> 6%",
            "homelessTotal": 29178
        },
        "CT": {
            "fillKey": " < 1%",
            "homelessTotal": 124
        },
        "AK": {
            "fillKey": " < 1%",
            "homelessTotal": 155
        },
        "AR": {
            "fillKey": " < 1%",
            "homelessTotal": 188
        },
        "AL": {
            "fillKey": " < 1%",
            "homelessTotal": 228
        }
    }
});

//add a map legend using the 'legend' plugin
election.legend({legendTitle : "Distribution of Total Chronic Homeless"});