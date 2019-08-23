const http = require('http');
//const axios = require('axios');
var rp = require('request-promise');
var bodyParser  =  require("body-parser");

const _utilities= require('../common/utilities/utilities');
const _movieRoutes= require('../../configuration/configuration.js').configuration.movies;


    function getMoviesById(req, res, next)
    {
        var _movieName =req.query.moviename;
        
        var _option= _utilities.buildAPIRequest(_movieRoutes.MOVIES_LIST + '/' + _movieName);

        rp.get(_option)
            .then(result=>{
                return res.send
                (   
                        JSON.parse(result)
                )
            })
            .catch(error=>{
                console.log(error);
            })
    }

    function getMovieTitlesByQuery(req, res, next)
    {
       
        var _searchQuery =req.query._searchQuery;
        var _option= _utilities.buildAPIRequestWithPagination(_movieRoutes.SEARCH_MOVIES,1,_searchQuery);

        rp.get(_option)
            .then(result=>{
                return res.send
                (   
                        JSON.parse(result).results.slice(1,10)
                )
            })
            .catch(error=>{
                console.log(error);
            })
    }


    module.exports = {
        getMoviesById,
        getMovieTitlesByQuery
     }
 
