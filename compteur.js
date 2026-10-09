// 1. Ajouter un article au panier (appelée depuis collection.html)
function ajouterAuPanier(nom, prix, bouton, categorie) {

    // On remonte au <div> parent du bouton pour trouver le <select> de taille
    const divParent = bouton.parentElement;
    const taille = divParent.querySelector('.taille-select').value; // On lit la taille choisie

    // On crée un objet avec les infos de l'article
    const article = {
        nom: nom,
        prix: prix,
        taille: taille,
        categorie: categorie  // "tshirt", "jeans", "sneakers" ou "accessoires"
    };

    // On récupère le panier déjà stocké, ou un tableau vide si c'est la première fois
    let panier = JSON.parse(localStorage.getItem('monPanier')) || [];

    // On ajoute l'article au tableau
    panier.push(article);

    // On re-sauvegarde le tableau mis à jour dans le localStorage
    localStorage.setItem('monPanier', JSON.stringify(panier));

    alert(`${nom} (Taille ${taille}) ajouté au panier !`);
}


// 2. Afficher le panier sur panier.html
function afficherPanier() {

    // On cherche la section "total" pour savoir si on est bien sur panier.html
    const sectionTotal = document.getElementById('total');
    
    // Si on n'est pas sur panier.html, on arrête la fonction immédiatement
    if (!sectionTotal) return;

    // On récupère le panier depuis le localStorage, ou tableau vide si rien de stocké
    let panier = JSON.parse(localStorage.getItem('monPanier')) || [];

    // On initialise les compteurs à 0 pour chaque catégorie
    let compteurs = { tshirt: 0, jeans: 0, sneakers: 0, accessoires: 0 };
    let total = 0;

    // On parcourt chaque article du panier
    panier.forEach(function(item) {

        // On incrémente le compteur de la catégorie de l'article (+1)
        if (compteurs[item.categorie] !== undefined) {
            compteurs[item.categorie]++;
        }

        // On ajoute le prix de l'article au total
        total += item.prix;
    });

    // On met à jour les chiffres affichés dans le HTML pour chaque catégorie
    document.getElementById('qty-tshirt').innerText = compteurs.tshirt;
    document.getElementById('qty-jeans').innerText = compteurs.jeans;
    document.getElementById('qty-sneakers').innerText = compteurs.sneakers;
    document.getElementById('qty-accessoires').innerText = compteurs.accessoires;

    // On affiche le total en euros
    document.getElementById('total-qty').innerText = total + ' €';

    // On affiche le bouton "Vider" seulement si le panier n'est pas vide
    const boutonVider = document.getElementById('bouton-vider');
    //if (boutonVider) {
		if (panier.length > 0){
			boutonVider.style.display = 'inline-block';
		} else{
			boutonVider.style.display = 'none';
		}
        //boutonVider.style.display = panier.length > 0 ? 'inline-block' : 'none';
    //}
}


// 3. Vider le panier
function viderPanier() {

    // On supprime complètement le panier du localStorage
    localStorage.removeItem('monPanier');

    // On recharge l'affichage pour remettre tout à 0
    afficherPanier();
}


// Dès que la page est chargée, on lance afficherPanier()
window.onload = afficherPanier;