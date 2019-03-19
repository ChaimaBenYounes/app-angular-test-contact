export class Contact {
  id : string;
  nom : string;
  prenom : string; 
  adresse : string;
  codePostal: number;
  tel : string;
  email: string;
  dateNaissance : Date;
  photo : string;

  constructor(
    id :string,
    nom : string,
    prenom : string,
    adresse : string,
    codePostal: number,
    tel : string,
    email: string,
    photo:string,
    ) 
  {
      this.id = id;
      this.nom = nom;
      this.prenom = prenom;
      this.adresse = adresse;
      this.codePostal = codePostal;
      this.tel = tel;
      this.email = email;
      this.dateNaissance = new Date();
      this.photo = photo;
  }
}

