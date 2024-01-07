# React + TypeScript + Vite

Ce projet est une application web de gestion de tâches développée avec React, TypeScript et Vite. Il offre une expérience de développement rapide avec le Hot Module Replacement (HMR) et intègre des règles ESLint pour assurer la qualité du code. L'application permet aux utilisateurs de créer, organiser et gérer des tâches dans une interface utilisateur interactive.

## Description du Projet

L'application est conçue pour offrir une expérience utilisateur fluide et réactive, permettant une gestion efficace des tâches. Elle utilise React pour une mise à jour dynamique de l'interface utilisateur et TypeScript pour un développement plus sûr et plus prévisible. Vite est utilisé pour un démarrage rapide du serveur de développement et un rechargement à chaud efficace.

## Caractéristiques

-   Création et gestion de tâches.
-   Organisation des tâches en conteneurs personnalisables.
-   Interface utilisateur réactive et interactive.
-   Utilisation de TypeScript pour une meilleure sécurité et maintenabilité du code.
-   Configuration ESLint pour assurer la cohérence et la qualité du code.

## Plugins Officiels

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) : Utilise [Babel](https://babeljs.io/) pour le Fast Refresh.
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) : Utilise [SWC](https://swc.rs/) pour le Fast Refresh.

## Configuration ESLint

Pour une application en production, nous recommandons de mettre à jour la configuration ESLint pour activer les règles de lint sensibles au type :

-   Configurez la propriété `parserOptions` au niveau supérieur comme suit :

    ```js
    export default {
        // autres règles...
        parserOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            project: ["./tsconfig.json", "./tsconfig.node.json"],
            tsconfigRootDir: __dirname,
        },
    };
    ```

-   Remplacez `plugin:@typescript-eslint/recommended` par `plugin:@typescript-eslint/recommended-type-checked` ou `plugin:@typescript-eslint/strict-type-checked`.
-   Ajoutez éventuellement `plugin:@typescript-eslint/stylistic-type-checked`.
-   Installez [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) et ajoutez `plugin:react/recommended` & `plugin:react/jsx-runtime` à la liste `extends`.

## Commandes Principales

-   `npm install` : Installe les dépendances du projet.
-   `npm run dev` : Lance le serveur de développement avec HMR.
-   `npm run build` : Construit l'application pour la production.
-   `npm run serve` : Lance un serveur local pour tester la build de production.

## Structure du Projet

-   `src/` : Contient tous les fichiers source de l'application, y compris les composants React, les styles et les tests.
-   `public/` : Contient les fichiers statiques tels que l'index HTML.

## Contribuer

Pour contribuer à ce projet, veuillez suivre les directives de contribution établies. Assurez-vous de respecter les conventions de codage et les bonnes pratiques de développement.
