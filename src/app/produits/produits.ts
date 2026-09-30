
import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Produit } from '../model/produit.model';

@Component({
  imports: [DatePipe],
  selector: 'app-produits',
  templateUrl: './produits.html',
})
export class Produits {
  produits! : Produit[]; 

constructor() {
  this.produits = [
    {idProduit : 1, nomProduit : "PC Asus", prixProduit : 3000.600, dateCreation : new Date("01/14/2011")},
    {idProduit : 2, nomProduit : "Imprimante Epson", prixProduit : 450, dateCreation : new Date("12/17/2010")},
    {idProduit : 3, nomProduit : "Tablette Samsung", prixProduit : 900.123, dateCreation : new Date("02/20/2020")}
    ];
 }
  
}
