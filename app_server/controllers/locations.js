/* GET 'home' page */
module.exports.homelist = function(req, res) {
    res.render('locations-list', { 
        title: 'Loc8r - find a place to work with wifi',
        pageHeader: {
            title: 'Loc8r',
            strapline: 'Find places to work with wifi near you!'
        },
        locations: [{
            name: 'Starcups',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 3,
            facilities: ['Hot Drinks', 'Food', 'Premium Wifi'],
            distance: '100m'
        },{
            name: 'Cafe Hero',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 4,
            facilities: ['Hot Drinks', 'Food', 'Premium Wifi'],
            distance: '200m'
        },{
            name: 'Burger Queen',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 2,
            facilities: ['Food', 'Premium Wifi'],
            distance: '250m'
        }]
    });
};

/* GET 'location info' page */
module.exports.locationInfo = function(req, res) {
    res.render('locations-info', { 
        title: 'Starcups',
        pageHeader: { title: 'Startcups'},
        sidebar: {
            context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
            name: 'Starcups',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 3,
            facilities: ['Hot Drinks', 'Food', 'Premium Wifi'],
            coords: {lat: 51.455041, lng: -0.9690884},
            openingTimes: [{
                days: 'Monday - Friday',
                opening: '7:00am',
                closing: '7:00pm',
                closed: false
            },{
                days: 'Saturday',
                opening: '8:00am',
                closing: '5:00pm',
                closed: false
            },{
                days: 'Sunday',
                closed: true
            }],
            reviews: [{
                author: 'Greg Paradee',
                rating: 5,
                timestamp: '09 January 2016',
                reviewText: 'What a great place. It was awesome!'
            },{
                author: 'Charlie Chaplin',
                rating: 3,
                timestamp: '08 January 2016',
                reviewText: 'It was okay. Bad coffee, good wifi.'
            }]
        }
    });
};

/* GET 'add review' page */
module.exports.addReview = function(req, res) {
    res.render('locations-review-form', { 
        title: 'Review Starcups on Loc8r',
        pageHeader: { title: 'Review Starcups' }
    });
};