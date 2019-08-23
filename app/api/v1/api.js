

//Load required business module
const operations= require('../../core/moviedb/moviedb.js');

//Set Routes for the API Service
module.exports = async function(app){


        //GET REQUESTS
        //Test API Service health
        app.get('/healthcheck',function(request,response){

            try{
                response.status(200).send('Service is Healthy');
            }
            catch(exception){
                console.log('Exception Occured in health check, ', exception);
            }
        });

        app.get('/movies',(request,response,next)=>{  return operations.getMovies(request,response,next) });

        app.get('/movies/search',(request,response,next)=>{return operations.getMovieTitlesByQuery(request,response,next) });

}
