class UserDTO {
    constructor({id, name, surname, birtdate, adresse, email, phonenumber, role, avatar}){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.birthdate = birtdate;
        this.adresse = adresse;
        this.email = email;
        this.phonenumber = phonenumber;
        this.role = role;
        this.avatar = avatar;

    }

}

module.exports = UserDTO