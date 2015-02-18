MovieTickets.configuration = (function () {

    //var serviceUrl = "http://dva-1l8gfs1-l/movietickets.webapi/api/";
    var serviceUrl = "http://api.kendomobilebook.com/api/";
    

    return {            
        serviceUrl: serviceUrl,
        accountUrl: serviceUrl + "Account/",
        getMovieListUrl: serviceUrl + "Movies/GetMovieList/",        
        getTheaterListForMovieUrl: serviceUrl +
            "Theater/Get/",
        getTrailersUrl: serviceUrl + "Movies/GetTrailers/",
        purchaseTicketsUrl: serviceUrl + "Tickets"
    }
})();