function City (title, heading, images=4) {
    this.title = title;
    this.heading = heading;
    this.images = images
}

var cities = {};
cities["madrid"] = new City("Madrid", "Madrid: passion, guitar music :):):)");
cities["berlin"] = new City("Berlin", "Berlin: beer, sausage :):):)");
cities["paris"] = new City("Paris", "Paris: artistic, romantic, elegant :):):)");
cities["london"] = new City("London", "London: classy, majestic :):):)");
cities["newyork"] = new City("New York", "New York: fashion city :):):)", 6);

function city(request, response){

    var city = cities[request.params.city];
    response.render('city',{
        title:city.title,
        headline:city.heading,
        city:request.params.city,
        numberOfImages:city.images
    });
};

function home(request, response){
    response.render('home',{
        title: 'Home',
        headline: 'Every city has something to say :) :) :)'
    });
};

module.exports.city = city;
module.exports.home = home;
