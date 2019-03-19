export class Contact {
  nom : string;
  prenom : string; 
  adresse : string;
  codePostal: number;
  tel : string;
  email: string;
  dateNaissance : Date;

  constructor(
    nom : string,
    prenom : string,
    adresse : string,
    codePostal: number,
    tel : string,
    email: string
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

