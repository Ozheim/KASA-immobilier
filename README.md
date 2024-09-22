# Kasa-immobilier - Application de Location d'Appartements

<p align="center">
  <img src="https://raw.githubusercontent.com/Ozheim/KASA-immobilier/master/src/assets/LOGO.png" alt="Logo Kasa">
</p>

## Description

Le projet Kasa est une application de location d'appartements entre particuliers. Cette application permet de naviguer entre différentes annonces de logements et d'afficher leurs détails. Ce projet a été développé avec React, en utilisant un fichier JSON pour simuler les données d'annonces.

Le but de ce projet est de mettre en place une interface utilisateur moderne et fonctionnelle, tout en respectant les principes de développement frontend et en utilisant des composants modulaires.

## Fonctionnalités

- **Affichage des annonces** : Une liste d'annonces de logements, récupérée à partir d'un fichier JSON.
- **Navigation par routes** : Utilisation de React Router pour une navigation fluide entre les différentes pages.
- **Détails des annonces** : Affichage des informations détaillées de chaque logement, y compris la galerie d'images, la description, et les équipements disponibles.
- **Gestion des erreurs** : Redirection automatique vers une page 404 en cas d'annonce non trouvée.
- **Interface responsive** : Adaptation automatique aux différentes tailles d'écran (mobile, tablette, desktop).

## Prérequis

Avant de démarrer le projet, assurez-vous d'avoir installé les éléments suivants :

- Node.js (version 14+)
- npm ou yarn

## Installation et Démarrage

1. - Cloner le dépôt :

```
git clone https://github.com/Ozheim/KASA-immobilier.git
```

2. Installer les dépendances :

```
npm install
```

3. Lancer L'application:

```
npm start
```

L'application sera accessible à l'adresse suivante : http://localhost:3000.

## Structure du Projet

```
kasa/
├── public/          # Fichiers publics (index.html, favicon, etc.)
├── src/             # Code source de l'application React
│   ├── components/  # Composants réutilisables
│   ├── pages/       # Pages principales (Accueil, Détail des annonces, 404)
│   ├── data/        # Fichier JSON avec les données des annonces
│   └── App.js       # Composant principal de l'application
├── .gitignore       # Fichiers à ignorer par Git
├── package.json     # Dépendances et scripts du projet
├── README.md        # Documentation du projet
```

## Auteurs:

Ce projet a été réalisé dans le cadre d'une mise en situation pour OpenClassrooms. Vous pouvez retrouver plus d'informations sur moi et mes projets sur mon GitHub.
