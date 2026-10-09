B7N

Boutique en ligne de vêtements au style streetwear, réalisée pendant la 1re année du cycle ingénieur à l'ISEN Rennes (2025-2026).

Présentation

B7N est un site de vente de vêtements composé de trois pages : un accueil, une collection et un panier. L'identité visuelle est sombre, avec un fond noir et des accents jaune fluo. La structure et la mise en page ont d'abord été construites en HTML et CSS, puis le site a été enrichi en JavaScript pour gérer le panier.

Pages
Accueil (Accueil.html) : présentation de la boutique, lien vers la collection, section « À propos » et formulaire de contact. Le formulaire est un formulaire d'affichage : il n'est pas encore relié à un service d'envoi.
Collection (collection.html) : 12 articles répartis en 4 catégories, avec choix de la taille et bouton « Ajouter au panier ».
Panier (panier.html) : nombre d'articles par catégorie, total en euros et bouton pour vider le panier.
Collection
Catégorie	Articles	Tailles
T-shirts	T-shirt Oversize Blanc (39 €), T-shirt Washed Gris (42 €), T-shirt Washed Gris Délavé (42 €)	S, M, L, XL
Jeans	Jean Baggy Brut (89 €), Jean Slim Noir (79 €), Jean Cargo Kaki (95 €)	36, 38, 40, 42
Sneakers	Low Clean Blanc (110 €), High Black (125 €), Chunky Beige (135 €)	39 à 44
Accessoires	Casquette B7N (35 €), Tote Bag Canvas (22 €), Chaussettes Logo (18 €)	Taille unique
Fonctionnement du panier

Le panier est géré côté client, sans serveur, dans le fichier compteur.js :

ajouterAuPanier() lit la taille choisie dans le menu déroulant, crée un objet article (nom, prix, taille, catégorie) et l'ajoute à la liste enregistrée dans le localStorage du navigateur, sous la clé monPanier.
afficherPanier() relit cette liste sur la page panier, compte les articles par catégorie et calcule le total.
viderPanier() supprime le panier du localStorage et remet l'affichage à zéro.

Comme le panier est enregistré dans le navigateur, il est conservé quand on recharge la page ou qu'on la ferme.

Technologies
HTML : structure des trois pages
CSS : mise en page, thème sombre et version adaptée aux smartphones (écrans de 768 px et moins)
JavaScript : manipulation du DOM et gestion du panier avec le localStorage
Organisation du projet
B7N/
├── Accueil.html
├── collection.html
├── panier.html
├── style.css
├── compteur.js
└── images/

Le code est commenté ligne par ligne pour rester simple à lire et à expliquer.

Lancer le projet

Aucune installation n'est nécessaire : télécharge le dépôt et ouvre Accueil.html dans ton navigateur.

Auteur

Bastien, étudiant à l'ISEN Rennes (CIR1, 2025-2026)
