let IS_PROD = true;

const server = IS_PROD ?
    
    "https://backend-d69t.onrender.com" :

    "http://localhost:8000"
    

export default server;