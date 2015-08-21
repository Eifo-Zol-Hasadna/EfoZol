var settings={
      connectionString: "pg://postgres@localhost:5432/efoZol",    
	connectionObject:{
      host: "localhost",
      port: "5432",
      user: "postgres",
      password: "",
      database: "efoZol"
    },
	secret:'oltu264785575MMadd',
	tokenExpiresInMinutes: 86829,
	adminHeader:"zolAdmin112200"
};



module.exports = settings;

//"host=postgresql:///efoZol?host=localhost&port=5433";
//"pg://postgres:1234@localhost:5432/efoZol"