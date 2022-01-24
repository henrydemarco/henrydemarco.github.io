var config = {
    style: 'mapbox://styles/henrydemarco/cky1zj53x06cv15uozrhaiumq',
    accessToken: 'pk.eyJ1IjoiaGVucnlkZW1hcmNvIiwiYSI6ImNreTI5MmJhejBhb3IydW50OWljMmJrbzQifQ.H3yOJpf8uf_RspT_MfndoA',
    showMarkers: true,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'The Title Text of this Story',
    subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    byline: 'By a Digital Storyteller',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Display Title',
            image: 'https://lh3.googleusercontent.com/fife/AAWUweVOmhXYglbTWlKR1Xv9xNfXZxhQrbrT7zQLDHxZICOZUt_C6RenLf_PGZVqVPYy17MSXpggPIa0NEsQFl0ahuaEv5xubkcpmtgPta8SoMFo2GCm3Ac3vcYz4IpkxrFwGUKHcvklPJRJTxKDWgkMjXYXZSpO05XiZ87r8x4iEyKmfE1ffgeYoX0FEe8NNjz7wxZ6bX-Qh8qP_FeYW2rl2_UYMsnB6N27xwetl6D7T651BWQ8KDQ49nVXHCvGlwmMm9EoFfuojd3DrV-v57-7prtWr9rID-VF2kgN1rEtylLJ68pgq8ZMOlYwu1yCU2d03NgQB2PmlEtTDWMSdBQX0zn24jyYumzaH5DLR6o6uqBXZNvD4Z0-SDnN7DtKRie6IPg3iGlkEQG2c7pPZ8V6Keojw2Nty3kMOCC6wJlUohQAvqKONbkdKOZL9i9sxylp35WgLjg2_10ZRC_oF1WL1yU1iiU-RjIAY8CV-Q9paMiZHSYOtbhODRFu4ZLgTFwVdmGddfdkM2CTNRd0D0o2kXwVw43jhW-OlMlwLkqLqbhdcg8WRlpiSSYxmWU3P3DBILBxbY83v_Dx_qlQg6cxU9p_QPDkxcT-Z0FybU-9DxY2koWMLJBJ8wmsLsmEbFZAvuVplvZgNvcCQpanAfSyB9J7c-TrpL6-LbWGQYcGCeptjUUPsHMJtkllnR60RXl8fK7UhVIAHsXz50l-Rjq1IDyxK77J9dWxlQ=w3000-h3000-ft',
            audio:  src='https://www.allaboutbirds.org/guide/assets/sound/549157.mp3',
            description: 'Filler test bullshit description :)',
            location: {
                center: [-122.27, 37.87],
                zoom: 11,
                pitch: 60,
                bearing: 0
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
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-77.020636, 38.886900],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
var feature = features[0];
