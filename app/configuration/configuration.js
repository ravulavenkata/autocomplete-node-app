

const configuration ={
  app:{
    ENVIRONMENT: process.env.ENVIRONMENT,
    SERVER_PORT_NUMBER: process.env.SERVER_PORT_NUMBER,
    API_URL: process.env.API_URL, 
    API_VERSION: process.env.API_VERSION, 
    ACCESS_KEY:process.env.ACCESS_KEY, 
    LANGUAGE:process.env.LANGUAGE,
    PAGE_NUMBER: process.env.PAGE_NUMBER,
    SEARCH_QUERY: process.env.SEARCH_QUERY
  },

  movies:{
    MOVIES_LIST:'/movie',
    SEARCH_MOVIES:'/search/movie'

  },
  
}


module.exports.configuration=configuration;
