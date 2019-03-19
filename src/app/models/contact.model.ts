export class Contact {
  nom : string;
  prenom : string; 
  adresse : number;
  codePostal: number;
  tel : number;
  email: string;
  dateNaissance : Date;

  constructor(
    nom : string,
    prenom : string,
    adresse : number,
    codePostal: number,
    tel : number,
    email: string,
    dateNaissance : Date,
    ) 
  {
      this.nom = nom;
      this.prenom = prenom;
      this.adresse = adresse;
      this.codePostal = codePostal;
      this.tel = tel;
      this.email = email;
      this.dateNaissance = new Date();
  }
}

