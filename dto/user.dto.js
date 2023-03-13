class UserDTO {
    constructor({id, name, surname, birthdate, adresse, email, phonenumber}){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.birthdate = birthdate;
        this.adresse = adresse;
        this.email = email;
        this.phonenumber = phonenumber;

    }

}

module.exports = UserDTO