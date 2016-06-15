var election = new Datamap({
        scope: 'usa',
        element: document.getElementById('map'),
        geographyConfig: {
          highlightBorderColor: '#bada55',
         popupTemplate: function(geography, data) {
            return '<div class="hoverinfo"><strong>' + geography.properties.name + '</strong> <br />Homeless Youth: ' +  data.homelessTotal + ' </div>'
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
            "homelessTotal": 621
        },
        "CO": {
            "fillKey": "1% to 2.9%",
            "homelessTotal": 566
        },
        "DE": {
            "fillKey": " < 1%",
            "homelessTotal": 57
        },
        "FL": {
            "fillKey": "> 6%",
            "homelessTotal": 2371
        },
        "GA": {
            "fillKey": "1% to 2.9%",
            "homelessTotal": 575
        },
        "HI": {
            "fillKey": "1% to 2.9%",
            "homelessTotal": 303
        },
        "ID": {
            "fillKey": " < 1%",
            "homelessTotal": 129
        },
        "IL": {
            "fillKey": "1% to 2.9%",
            "homelessTotal": 832
        },
        "IN": {
            "fillKey": "1% to 2.9%",
            "homelessTotal": 373
        },
        "IA": {
            "fillKey": " < 1%",
            "homelessTotal": 179
        },
        "KS": {
            "fillKey": " < 1%",
            "homelessTotal": 89
        },
        "KY": {
            "fillKey": " < 1%",
            "homelessTotal": 248
        },
        "LA": {
            "fillKey": "1% to 2.9%",
            "homelessTotal": 389
        },
        "MD": {
            "fillKey": "1% to 2.9%",
            "homelessTotal": 481
        },
        "ME": {
            "fillKey": " < 1%",
            "homelessTotal": 146
        },
        "MA": {
            "fillKey": "1% to 2.9%",
            "homelessTotal": 415
        },
        "MN": {
            "fillKey": "1% to 2.9%",
            "homelessTotal": 733
        },
        "MI": {
            "fillKey": "1% to 2.9%",
            "homelessTotal": 975
        },
        "MS": {
            "fillKey": " < 1%",
            "homelessTotal": 93
        },
        "MO": {
            "fillKey": "1% to 2.9%",
            "homelessTotal": 474
        },
        "MT": {
            "fillKey": " < 1%",
            "homelessTotal": 171
        },
        "NC": {
            "fillKey": "1% to 2.9%",
            "homelessTotal": 631
        },
        "NE": {
            "fillKey": " < 1%",
            "homelessTotal": 238
        },
        "NV": {
            "fillKey": "> 6%",
            "homelessTotal": 2310
        },
        "NH": {
            "fillKey": " < 1%",
            "homelessTotal": 91
        },
        "NJ": {
            "fillKey": "1% to 2.9%",
            "homelessTotal": 643
        },
        "NY": {
            "fillKey": "> 6%",
            "homelessTotal": 2626
        },
        "ND": {
            "fillKey": " < 1%",
            "homelessTotal": 142
        },
        "NM": {
            "fillKey": " < 1%",
            "homelessTotal": 193
        },
        "OH": {
            "fillKey": "1% to 2.9%",
            "homelessTotal": 770
        },
        "OK": {
            "fillKey": "1% to 2.9%",
            "homelessTotal": 460
        },
        "OR": {
            "fillKey": "3% to 6%",
            "homelessTotal": 1350
        },
        "PA": {
            "fillKey": "1% to 2.9%",
            "homelessTotal": 871
        },
        "RI": {
            "fillKey": " < 1%",
            "homelessTotal": 47
        },
        "SC": {
            "fillKey": " < 1%",
            "homelessTotal": 195
        },
        "SD": {
            "fillKey": " < 1%",
            "homelessTotal": 108
        },
        "TN": {
            "fillKey": "1% to 2.9%",
            "homelessTotal": 673
        },
        "TX": {
            "fillKey": "3% to 6%",
            "homelessTotal": 1416
        },
        "UT": {
            "fillKey": " < 1%",
            "homelessTotal": 132
        },
        "WI": {
            "fillKey": " < 1%",
            "homelessTotal": 334
        },
        "VA": {
            "fillKey": " < 1%",
            "homelessTotal": 330
        },
        "VT": {
            "fillKey": " < 1%",
            "homelessTotal": 101
        },
        "WA": {
            "fillKey": "3% to 6%",
            "homelessTotal": 1341
        },
        "WV": {
            "fillKey": " < 1%",
            "homelessTotal": 145
        },
        "WY": {
            "fillKey": " < 1%",
            "homelessTotal": 37
        },
        "CA": {
            "fillKey": "> 6%",
            "homelessTotal": 10416
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
election.legend({legendTitle : "Distribution of Total Homeless Youth"});