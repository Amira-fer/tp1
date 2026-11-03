
import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit';

@Component({
  imports: [DatePipe],
  selector: 'app-produits',
  templateUrl: './produits.html',
})
export class Produits implements OnInit {

  produits: Produit[] = [];

  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {
    this.chargerProduits();
  }

  chargerProduits() {
    this.produits = this.produitService.listeProduit();
  }

}
