var election = new Datamap({
        scope: 'usa',
        element: document.getElementById('map'),
        geographyConfig: {
          highlightBorderColor: '#bada55',
         popupTemplate: function(geography, data) {
            return '<div class="hoverinfo"><strong>' + geography.properties.name + '</strong> <br />Number of Homeless Veterans: ' +  data.electoralVotes + ' </div>'
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
            "electoralVotes": 1220
        },
        "CO": {
            "fillKey": "1% to 2.9%",
            "electoralVotes": 950
        },
        "DE": {
            "fillKey": " < 1%",
            "electoralVotes": 79
        },
        "FL": {
            "fillKey": "> 6%",
            "electoralVotes": 3926
        },
        "GA": {
            "fillKey": "3% to 6%",
            "electoralVotes": 1548
        },
        "HI": {
            "fillKey": "1% to 2.9%",
            "electoralVotes": 692
        },
        "ID": {
            "fillKey": " < 1%",
            "electoralVotes": 249
        },
        "IL": {
            "fillKey": "1% to 2.9%",
            "electoralVotes": 1226
        },
        "IN": {
            "fillKey": "1% to 2.9%",
            "electoralVotes": 790
        },
        "IA": {
            "fillKey": " < 1%",
            "electoralVotes": 207
        },
        "KS": {
            "fillKey": " < 1%",
            "electoralVotes": 311
        },
        "KY": {
            "fillKey": "1% to 2.9%",
            "electoralVotes": 591
        },
        "LA": {
            "fillKey": " < 1%",
            "electoralVotes": 392
        },
        "MD": {
            "fillKey": "1% to 2.9%",
            "electoralVotes": 714
        },
        "ME": {
            "fillKey": " < 1%",
            "electoralVotes": 151
        },
        "MA": {
            "fillKey": "1% to 2.9%",
            "electoralVotes": 1133
        },
        "MN": {
            "fillKey": " < 1%",
            "electoralVotes": 297
        },
        "MI": {
            "fillKey": "1% to 2.9%",
            "electoralVotes": 1067
        },
        "MS": {
            "fillKey": " < 1%",
            "electoralVotes": 206
        },
        "MO": {
            "fillKey": "1% to 2.9%",
            "electoralVotes": 540
        },
        "MT": {
            "fillKey": " < 1%",
            "electoralVotes": 277
        },
        "NC": {
            "fillKey": "1% to 2.9%",
            "electoralVotes": 1092
        },
        "NE": {
            "fillKey": " < 1%",
            "electoralVotes": 247
        },
        "NV": {
            "fillKey": "1% to 2.9%",
            "electoralVotes": 860
        },
        "NH": {
            "fillKey": " < 1%",
            "electoralVotes": 138
        },
        "NJ": {
            "fillKey": "1% to 2.9%",
            "electoralVotes": 696
        },
        "NY": {
            "fillKey": "3% to 6%",
            "electoralVotes": 2399
        },
        "ND": {
            "fillKey": " < 1%",
            "electoralVotes": 137
        },
        "NM": {
            "fillKey": " < 1%",
            "electoralVotes": 278
        },
        "OH": {
            "fillKey": "1% to 2.9%",
            "electoralVotes": 1183
        },
        "OK": {
            "fillKey": " < 1%",
            "electoralVotes": 351
        },
        "OR": {
            "fillKey": "3% to 6%",
            "electoralVotes": 1464
        },
        "PA": {
            "fillKey": "1% to 2.9%",
            "electoralVotes": 1375
        },
        "RI": {
            "fillKey": " < 1%",
            "electoralVotes": 107
        },
        "SC": {
            "fillKey": "1% to 2.9%",
            "electoralVotes": 681
        },
        "SD": {
            "fillKey": " < 1%",
            "electoralVotes": 177
        },
        "TN": {
            "fillKey": "1% to 2.9%",
            "electoralVotes": 945
        },
        "TX": {
            "fillKey": "3% to 6%",
            "electoralVotes": 2393
        },
        "UT": {
            "fillKey": " < 1%",
            "electoralVotes": 337
        },
        "WI": {
            "fillKey": "1% to 2.9%",
            "electoralVotes": 534
        },
        "VA": {
            "fillKey": "1% to 2.9%",
            "electoralVotes": 604
        },
        "VT": {
            "fillKey": " < 1%",
            "electoralVotes": 119
        },
        "WA": {
            "fillKey": "1% to 2.9%",
            "electoralVotes": 1293
        },
        "WV": {
            "fillKey": " < 1%",
            "electoralVotes": 305
        },
        "WY": {
            "fillKey": " < 1%",
            "electoralVotes": 112
        },
        "CA": {
            "fillKey": "> 6%",
            "electoralVotes": 11311
        },
        "CT": {
            "fillKey": " < 1%",
            "electoralVotes": 282
        },
        "AK": {
            "fillKey": " < 1%",
            "electoralVotes": 180
        },
        "AR": {
            "fillKey": "1% to 2.9%",
            "electoralVotes": 456
        },
        "AL": {
            "fillKey": "1% to 2.9%",
            "electoralVotes": 474
        }
    }
});

//add a map legend using the 'legend' plugin
election.legend({legendTitle : "Distribution of Total Homeless Veterans"});