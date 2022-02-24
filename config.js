var config = {
    style: 'mapbox://styles/henrydemarco/cl009pl79000315mpu7mpuw9v',
    accessToken: 'pk.eyJ1IjoiaGVucnlkZW1hcmNvIiwiYSI6ImNreTI5MmJhejBhb3IydW50OWljMmJrbzQifQ.H3yOJpf8uf_RspT_MfndoA',
    showMarkers: true,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'Berkeley, 94700',
    subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    byline: 'By a Digital Storyteller',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Staples',
            image: 'https://lh3.googleusercontent.com/fife/AAWUweVOmhXYglbTWlKR1Xv9xNfXZxhQrbrT7zQLDHxZICOZUt_C6RenLf_PGZVqVPYy17MSXpggPIa0NEsQFl0ahuaEv5xubkcpmtgPta8SoMFo2GCm3Ac3vcYz4IpkxrFwGUKHcvklPJRJTxKDWgkMjXYXZSpO05XiZ87r8x4iEyKmfE1ffgeYoX0FEe8NNjz7wxZ6bX-Qh8qP_FeYW2rl2_UYMsnB6N27xwetl6D7T651BWQ8KDQ49nVXHCvGlwmMm9EoFfuojd3DrV-v57-7prtWr9rID-VF2kgN1rEtylLJ68pgq8ZMOlYwu1yCU2d03NgQB2PmlEtTDWMSdBQX0zn24jyYumzaH5DLR6o6uqBXZNvD4Z0-SDnN7DtKRie6IPg3iGlkEQG2c7pPZ8V6Keojw2Nty3kMOCC6wJlUohQAvqKONbkdKOZL9i9sxylp35WgLjg2_10ZRC_oF1WL1yU1iiU-RjIAY8CV-Q9paMiZHSYOtbhODRFu4ZLgTFwVdmGddfdkM2CTNRd0D0o2kXwVw43jhW-OlMlwLkqLqbhdcg8WRlpiSSYxmWU3P3DBILBxbY83v_Dx_qlQg6cxU9p_QPDkxcT-Z0FybU-9DxY2koWMLJBJ8wmsLsmEbFZAvuVplvZgNvcCQpanAfSyB9J7c-TrpL6-LbWGQYcGCeptjUUPsHMJtkllnR60RXl8fK7UhVIAHsXz50l-Rjq1IDyxK77J9dWxlQ=w3000-h3000-ft',
            audio:  'https://www.allaboutbirds.org/guide/assets/sound/549157.mp3',
            description: 'The spirit of Occupy SF lived on in the East Bay, where Mike Zint and [TK] others were invited by postal workers [TK fact check] in 2014 to protest the outsourcing of US Postal Service duties to Staples. The group was an early incarnation of First They Came for the Homeless, and its first organized action since its conception in 2011. The Downtown Berkeley Staples was part of a US Postal Service pilot program to offload USPS duties to Staples, another corner cut in the sweeping austerity of the Obama administration. If successful, the program could help USPS eliminate costs by passing off key responsibilities to Staples workers, whose undervalued labor was more cost-effective than that of unionized postal workers. Zint and other protestors set up outside the Staples on 2352 Shattuck Avenue in Downtown Berkeley. The Staples occupation existed as a 24/7 protest against the pilot program, as well as a way to inform the public of the impending plan to sell the historic Berkeley Main Post Office on Allston Way.',
            location: {
                center: [-122.26813, 37.86637],
                zoom: 15,
                pitch: 70,
                bearing: 85
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'other-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Post Office Defense',
            image: './path/to/image/source.png',
            audio: 'wooo',
            description: 'I need to figure out how to add separate paragraphs in these descriptions...',
            location: {
                center: [-122.27005, 37.86889],
                zoom: 12,
                pitch: 30,
                bearing: 175
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
            {
                id: 'identifier2',
                alignment: 'right',
                hidden: false,
                title: 'City Council Meeting @ Longfellow',
                image: './path/to/image/source.png',
                audio: 'yay',
                description: 'Weeee',
                location: {
                    center: [-122.27833, 37.85861],
                    zoom: 15,
                    pitch: 50,
                    bearing: -95
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier1',
                alignment: 'right',
                hidden: false,
                title: 'Liberty City',
                image: './path/to/image/source.png',
                audio: 'yay',
                description: 'Hmm I think it might be cool to add building visualizations',
                location: {
                    center: [-122.27317, 37.86924],
                    zoom: 16,
                    pitch: 90,
                    bearing: -95
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier4',
                alignment: 'left',
                hidden: false,
                title: 'Roberton Benitas',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: 'Where Roberto Benitas passed',
                location: {
                    center: [-122.2912, 37.8664],
                    zoom: 14,
                    pitch: 60,
                    bearing: 85
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier5',
                alignment: 'left',
                hidden: false,
                title: 'Protest at the Hub',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: 'First Poor Tour Eviction',
                location: {
                    center: [-122.26982, 37.85105],
                    zoom: 15,
                    pitch: 50,
                    bearing: -175
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier6',
                alignment: 'left',
                hidden: false,
                title: 'Eviction #2',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: 'Second Poor Tour Location',
                location: {
                    center: [-122.26819, 37.86873],
                    zoom: 15,
                    pitch: 50,
                    bearing: -175
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier7',
                alignment: 'left',
                hidden: false,
                title: 'Third Poor Tour Location',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: 'Second Poor Tour Eviction',
                location: {
                    center: [-122.2679, 37.85837],
                    zoom: 15,
                    pitch: 50,
                    bearing: -175
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier8',
                alignment: 'left',
                hidden: false,
                title: 'Fourth Poor Tour Location',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: 'Third Poor Tour Eviction',
                location: {
                    center: [-122.26711, 37.86032],
                    zoom: 15,
                    pitch: 50,
                    bearing: -175
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier9',
                alignment: 'left',
                hidden: false,
                title: 'Fifth Poor Tour Location',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: 'Fourth Poor Tour Eviction',
                location: {
                    center: [-122.26982, 37.85105],
                    zoom: 15,
                    pitch: 50,
                    bearing: -175
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier10',
                alignment: 'left',
                hidden: false,
                title: 'Sixth Poor Tour Location',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: 'Fifth Poor Tour Eviction',
                location: {
                    center: [-122.27162, 37.86938],
                    zoom: 15,
                    pitch: 50,
                    bearing: -175
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier11',
                alignment: 'left',
                hidden: false,
                title: 'Seventh Poor Tour Location',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: 'Sixth Poor Tour Eviction',
                location: {
                    center: [-122.27045, 37.86905],
                    zoom: 15,
                    pitch: 50,
                    bearing: -175
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier12',
                alignment: 'left',
                hidden: false,
                title: '8th Poor Tour Location',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: '7th Poor Tour Eviction',
                location: {
                    center: [-122.27055, 37.86998],
                    zoom: 15,
                    pitch: 50,
                    bearing: -175
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier13',
                alignment: 'left',
                hidden: false,
                title: '9th Poor Tour Location',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: '8th Poor Tour Eviction',
                location: {
                    center: [-122.27162, 37.86938],
                    zoom: 15,
                    pitch: 50,
                    bearing: -175
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier14',
                alignment: 'left',
                hidden: false,
                title: '10th Poor Tour Location',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: '9th Poor Tour Eviction',
                location: {
                    center: [-122.27055, 37.86998],
                    zoom: 15,
                    pitch: 50,
                    bearing: -175
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier15',
                alignment: 'left',
                hidden: false,
                title: '11th Poor Tour Location',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: '10th Poor Tour Eviction',
                location: {
                    center: [-122.27317, 37.86924],
                    zoom: 15,
                    pitch: 50,
                    bearing: -175
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier16',
                alignment: 'left',
                hidden: false,
                title: '12th Poor Tour Location',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: '11th Poor Tour Eviction',
                location: {
                    center: [-122.28655, 37.86977],
                    zoom: 15,
                    pitch: 50,
                    bearing: -175
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier17',
                alignment: 'left',
                hidden: false,
                title: '13th Poor Tour Location',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: '12th Poor Tour Eviction',
                location: {
                    center: [-122.2705, 37.88191],
                    zoom: 15,
                    pitch: 50,
                    bearing: -175
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier18',
                alignment: 'left',
                hidden: false,
                title: '14th Poor Tour Location',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: 'Last Poor Tour Stop',
                location: {
                    center: [-122.26828, 37.85653],
                    zoom: 15,
                    pitch: 50,
                    bearing: -175
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier19',
                alignment: 'left',
                hidden: false,
                title: 'Old Lorin Station',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: 'Old Lorin Station',
                location: {
                    center: [-122.27125, 37.8488],
                    zoom: 10.25,
                    pitch: 0,
                    bearing: 0
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier20',
                alignment: 'left',
                hidden: false,
                title: 'Old Lorin Station',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: 'Old Lorin Station',
                location: {
                    center: [-122.27125, 37.8488],
                    zoom: 15,
                    pitch: 60,
                    bearing: -85
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier21',
                alignment: 'left',
                hidden: false,
                title: 'Invisible Red and Black Line',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: 'Old Lorin Station',
                location: {
                    center: [-122.27125, 37.8488],
                    zoom: 14,
                    pitch: 0,
                    bearing: -5
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier22',
                alignment: 'left',
                hidden: false,
                title: 'Old Wells Fargo',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: 'Old Lorin Station',
                location: {
                    center: [-122.27177, 37.84885],
                    zoom: 16,
                    pitch: 60,
                    bearing: -35
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier23',
                alignment: 'left',
                hidden: false,
                title: 'Lorin District',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: 'Lorin',
                location: {
                    center: [-122.27065, 37.85119],
                    zoom: 15,
                    pitch: 0,
                    bearing: -5
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier24',
                alignment: 'left',
                hidden: false,
                title: 'Friends of Adeline First Meeting',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: 'South Berkeley Senior Center',
                location: {
                    center: [-122.27291, 37.85436],
                    zoom: 16,
                    pitch: 60,
                    bearing: -187
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier25',
                alignment: 'left',
                hidden: false,
                title: 'Friends of Adeline Meetings',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: 'South Berkeley Community Chruch',
                location: {
                    center: [-122.27267, 37.85033],
                    zoom: 16,
                    pitch: 60,
                    bearing: -187
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier26',
                alignment: 'left',
                hidden: false,
                title: 'Youth Spirit Artworks',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: 'Youth Spirit Artworks',
                location: {
                    center: [-122.27232, 37.84843],
                    zoom: 16,
                    pitch: 60,
                    bearing: -5
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier27',
                alignment: 'left',
                hidden: false,
                title: 'Original Here / There Location',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: '!',
                location: {
                    center: [-122.27142, 37.84738],
                    zoom: 17,
                    pitch: 60,
                    bearing: 40
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier28',
                alignment: 'left',
                hidden: false,
                title: 'Sweet Adeline Bakeshop',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: 'Wee haw!',
                location: {
                    center: [-122.27223, 37.8476],
                    zoom: 17,
                    pitch: 60,
                    bearing: -45
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier29',
                alignment: 'left',
                hidden: false,
                title: 'Camp Infrastructure',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: 'So the map will stay on this point for this whole section. Is there a way to make it visually interesting?',
                location: {
                    center: [-122.27142, 37.84738],
                    zoom: 17,
                    pitch: 0,
                    bearing: -5
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier30',
                alignment: 'right',
                hidden: false,
                title: 'H/T Eviction: Unaffiliated Camp',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: 'Second camp where an eviction notice was posted',
                location: {
                    center: [-122.2709, 37.84806],
                    zoom: 18,
                    pitch: 0,
                    bearing: -5
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier31',
                alignment: 'right',
                hidden: false,
                title: 'Fence Installed',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: '.',
                location: {
                    center: [-122.27142, 37.84738],
                    zoom: 18,
                    pitch: 75,
                    bearing: 30
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier32',
                alignment: 'left',
                hidden: false,
                title: 'Old City Hall Camp',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: '.',
                location: {
                    center: [-122.27317, 37.86924],
                    zoom: 18,
                    pitch: 75,
                    bearing: -94
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier33',
                alignment: 'right',
                hidden: false,
                title: 'City Council Passes Sidewalk Ban Pt.2',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: '.',
                location: {
                    center: [-122.27088, 37.86946],
                    zoom: 18,
                    pitch: 75,
                    bearing: -94
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier34',
                alignment: 'left',
                hidden: false,
                title: 'Aquatic Park Camp',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: '.',
                location: {
                    center: [-122.29568, 37.85009],
                    zoom: 15.5,
                    pitch: 65,
                    bearing: -100
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier35',
                alignment: 'right',
                hidden: false,
                title: 'Here / There Camp (new location)',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: '.',
                location: {
                    center: [-122.27144, 37.8478],
                    zoom: 16,
                    pitch: 65,
                    bearing: -5
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier36',
                alignment: 'right',
                hidden: false,
                title: 'Expressions Gallery',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: '.',
                location: {
                    center: [-122.26801, 37.85521],
                    zoom: 16,
                    pitch: 65,
                    bearing: -5
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier37',
                alignment: 'right',
                hidden: false,
                title: 'The Camp Garden',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: '.',
                location: {
                    center: [-122.27136, 37.84788],
                    zoom: 18,
                    pitch: 70,
                    bearing: 75
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier38',
                alignment: 'right',
                hidden: false,
                title: 'Ben Bartlett Bathroom Meeting',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: '.',
                location: {
                    center: [-122.27267, 37.85033],
                    zoom: 17,
                    pitch: 70,
                    bearing: 75
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier39',
                alignment: 'right',
                hidden: false,
                title: 'South Berkeley Public Bathroom Opens',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: '.',
                location: {
                    center: [-122.27085, 37.84843],
                    zoom: 18,
                    pitch: 70,
                    bearing: 200
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'identifier40',
                alignment: 'left',
                hidden: false,
                title: 'Second Camp Bathroom',
                image: './path/to/image/source.png',
                audio: 'audio here',
                description: '.',
                location: {
                    center: [-122.27136, 37.84822],
                    zoom: 18,
                    pitch: 30,
                    bearing: -200
                },
                mapAnimation: 'flyTo',
                rotateAnimation: false,
                callback: '',
                onChapterEnter: [],
                onChapterExit: []
            },
    ]
};
var feature = features[0];
