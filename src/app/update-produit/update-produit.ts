
import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../services/produit';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Categorie } from '../model/categorie.model';

@Component({
  imports: [FormsModule],
  selector: 'app-update-produit',
  styleUrl: './update-produit.css',
  templateUrl: './update-produit.html',
})
export class UpdateProduit implements OnInit {

  currentProduit!: Produit;
  categories!: Categorie[];
  updatedCatId!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private produitService: ProduitService,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.categories = this.produitService.listeCategories();

    this.currentProduit =
      this.produitService.consulterProduit(
        Number(this.activatedRoute.snapshot.params['id'])
      );

    this.updatedCatId = this.currentProduit.categorie.idCat;
  }

  updateProduit() {

    this.currentProduit.categorie =
      this.produitService.consulterCategorie(this.updatedCatId);

    this.produitService.updateProduit(this.currentProduit);

    this.router.navigate(['produits']);
  }
}
