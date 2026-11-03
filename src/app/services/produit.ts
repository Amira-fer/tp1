import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';
import { Categorie } from '../model/categorie.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  produits: Produit[] = [];

  categories: Categorie[] = [
    { idCat: 1, nomCat: 'Informatique' },
    { idCat: 2, nomCat: 'Electromenager' },
    { idCat: 3, nomCat: 'Autres' }
  ];

  listeProduit(): Produit[] {
    return this.produits;
  }

  ajouterProduit(prod: Produit) {
    this.produits.push(prod);
  }

  listeCategories(): Categorie[] {
    return this.categories;
  }
  consulterProduit(id: number): Produit {
  return this.produits.find(p => p.idProduit == id)!;
  }
  consulterCategorie(id: number): Categorie {
  return this.categories.find(cat => cat.idCat == id)!;
}

  updateProduit(prod: Produit) {
    let index = this.produits.findIndex(
      p => p.idProduit == prod.idProduit
    );

    this.produits[index] = prod;
  }
}

export { Produit };
