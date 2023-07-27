class APIHandler {
    constructor(baseUrl) {
        this.api = axios.create({
            baseUrl: 'baseUrl'
        });
    }
    getAllCharacters = () => {
        return this.api.get('/characters'); 
    }; 
    getOneCharacter = (characterId) => {
        return this.api.get(`/characters/${characterId}`); 
    }; 
    createCharacter = (characterInfo) => {
        return this.api.post(`/characters`, characterInfo); 
    }; 
    deleteCharacter = () => {
        return this.api.delete(`/characters/${characterId}`, characterInfo); 
    }; 
    editCharacter = (characterId, characterInfo) => {
        return this.api.put(`/characters/${characterId}`, characterInfo); 
    } 
}

module.exports = ApiService;

/*
Get all the characters info from http://localhost:8000/characters
Get a single character info from http://localhost:8000/characters/:id
Create a single character posting the data to http://localhost:8000/characters
Delete a single character through his id in http://localhost:8000/characters/:id
Edit a single character through his id in http://localhost:8000/characters/:id

//to get all characters -> get
//to get one character -> get
//to create one character -> post 
//to delete a character -> delete 