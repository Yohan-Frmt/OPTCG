# OPTCG - One Piece Trading Card Game

OPTCG est une application dédiée aux passionnés du jeu de cartes à collectionner One Piece. Avec OPTCG, les joueurs peuvent se rassembler pour consulter les dernières sorties du jeu, gérer leurs cartes favorites, créer leurs decks en ligne et effectuer des simulations de pioche.

## Abandon du Projet

Le déclin rapide de la fanbase du jeu One Piece a entraîné l'annulation du projet OPTCG. Malgré les efforts pour maintenir l'application, il n'était plus viable de continuer à investir des ressources dans un projet pour un jeu dont l'engouement diminuait.

## Fonctionnalités

- **Consultation des dernières sorties** : Les joueurs pouvaient consulter les dernières cartes ajoutées au jeu, y compris les nouvelles éditions et les extensions.
  
- **Gestion des cartes favorites** : Les utilisateurs pouvaient marquer leurs cartes préférées et les organiser dans des listes pour un accès rapide.
  
- **Création de decks en ligne** : Un deckbuilder original était disponible pour permettre aux joueurs de créer, éditer et sauvegarder leurs decks en ligne ou sous forme de chaine de caractère.

- **Simulation de pioche** : Les joueurs pouvaient simuler des pioches aléatoires pour tester la probabilité de tirer des cartes spécifiques dans leur deck.

## Installation

1. Clonez ce dépôt sur votre machine locale :

    ```
    [git clone https://github.com/votre-utilisateur/OPTCG.git](https://github.com/Yohan-Frmt/OPTCG.git)
    ```

2. Accédez au répertoire du projet :

    ```
    cd OPTCG
    ```

3. Construisez l'image Docker :

    ```
    docker build -t optcg-app .
    ```

4. Lancez un conteneur Docker à partir de l'image construite :

    ```
    docker run -d -p 3000:3000 --name optcg-container optcg-app
    ```

5. Accédez à l'application dans votre navigateur à l'adresse [http://localhost:3000](http://localhost:3000).

6. Pour arrêter et supprimer le conteneur Docker :
    ```
    docker stop optcg-container
    docker rm optcg-container
    ```
    
## Utilisation

Une fois l'application lancée, vous pouvez naviguer à travers les différentes fonctionnalités à l'aide de l'interface utilisateur conviviale. Suivez les instructions à l'écran pour consulter les cartes, créer des decks et effectuer des simulations de pioche.

## Contributeurs

- [Yohan-Frmt](https://github.com/Yohan-Frmt)
- [CakyChan](https://github.com/CakyChan)

## Licence

Ce projet est sous licence [MIT](LICENSE).
