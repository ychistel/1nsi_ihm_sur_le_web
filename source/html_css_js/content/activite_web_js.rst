.. 1 NSI

Les événements en JAVASCRIPT
============================

Une page WEB s’affiche sur le navigateur d’une machine cliente. On rappelle que l’affichage de cette page WEB fait
suite à une requêtre HTTP de la machine cliente vers le serveur qui dispose de la page WEB.

Le serveur répond à la requête HTTP en renvoyant la page WEB demandée au format HTML et avec un code d’état égal à 200
et un statut OK.

La page WEB est au format HTML, contient des propriétés CSS pour l’affichage et aussi (éventuellement) des scripts en
langage "JAVASCRIPT".

.. figure:: ../img/requete_http.png
   :alt: image
   :align: center

Un script JAVASCRIPT chargé avec la page web est un programme exécuté par le navigateur du client qui permet d’agir sur
la page WEB affichée.

Un script JAVASCRIPT peut:

-  modifier le contenu de la page et les balises HTML.
-  modifier l’affichage en ajoutant ou modifiant les propriétés CSS,
-  interagir avec l’utilisateur avec les événements JAVASCRIPT.

Lorsqu’un script est chargé dans une fenêtre ou un onglet du navigateur, celui-ci s’exécute dans la fenêtre ou l’onglet
qui l’a chargé.

Nous allons à travers quelques exemples voir et appliquer quelques scripts sur une page web. On reprendra la page WEB
créée après les 2 activités précédentes sur les langages HTML et CSS.

Introduction au JAVASCRIPT
--------------------------

Un script JAVASCRIPT peut être chargé n’importe où dans la page HTML.
Néanmoins, il est préférable de l’ajouter soit entre les balises ``<head>`` et ``</head>`` soit en fin de document
juste avant la balise ``</html>`` ou la balise ``</body>``.

#. Un script JAVASCRIPT est toujours placé entre les balises ``<script type="text/javascript">`` et ``</script>``.

   Ajouter ces deux balises entre les  ``<head>`` et ``</head>`` de votre document HTML.

#. On donne un premier script JAVASCRIPT:

   .. code-block:: javascript

      alert('mon premier script');

   Placer ce script entre les balises "javascript" de votre document puis actualiser la page web.


#. On propose de compléter le script précédent avec l'instruction:

   .. code-block:: javascript

      console.log('mon premier script');

   Actualiser la page web puis ouvrir les outils de développement (F12 ou CTRL MAJ I) et sélectionner l’onglet "Console". Afficher les journaux et actualiser la page si nécessaire.

   .. important::

      Cette astuce utilisant l'instruction ``console.log()`` est très utile pour debugger les programmes !

#. On remplace notre script par les instructions suivantes:

   .. code-block:: javascript
   
      nom = prompt('Quel est ton nom ?');
      alert(nom);

   a. Modifier votre document HTML avec ce nouveau script puis actualiser votre page dans le navigateur.

      .. figure:: ../img/prompt_nom.png
         :alt: image
         :align: center
         :width: 400
         
   c. Compléter le script avec une troisième ligne de code pour afficher le nom en console.
   d. On peut améliorer l'affichage en concaténant la variable ``nom`` et un texte grâce au signe d’addition.

      Ajouter le texte "Votre nom est " pour obtenir l’affichage d’alerte ci-dessous.

      .. figure:: ../img/alert_nom.png
         :alt: image
         :align: center
         :width: 400

Gestion des événements en JAVASCRIPT
------------------------------------

Le langage JAVASCRIPT permet la gestion des événements. Il est à l’écoute des interactions de la personne avec la page WEB.

Les événements les plus courants sont:

-  Le clic de la souris,
-  le double-clic de la souris,
-  le survol par la souris d’une partie de l’écran, d’un mot, d’une image, etc
-  le focus ou la perte de focus d’un élément de la page,
-  le chargement complet de la page,
-  la fermeture de la fenêtre.

#. On peut utiliser des scripts javascript placés dans un fichier externe. Dans ce cas, on ajoute dans la balise ``<head>...</head>`` la balise suivante.

   .. code-block:: javascript

      <script type="text/javascript" src="script.js"></script>
      
   
#. Télécharger sur l'ENT le fichier ``script.js`` dans le même dossier que votre fichier html. Ce fichier contient de petites fonctions en javascript pour agir sur le document HTML.


#. L’événement ``onclick`` écoute le clic de souris dans le document WEB. Celui-ci est limité à une zone du document.

   a. Remplacer la balise ``<body>`` par la balise suivante:

      .. code-block:: javascript

         <body onclick="colorer()">

   b. Recharger la page puis tester votre événement en cliquant dans le corps de la page WEB. Vous pouvez supprimer cet événement après les tests.

#. Il n’y a qu’une seule balise ``<body>`` ! Mais certaines balises sont multiples comme les titres, les paragraphes ou les images. On peut identifier les balises d'un document html par un identifiant. Un identifiant est un mot unique du document HTML qui se note dans la balise par ``id="identifiant"``.

   a. Ajouter l’identifiant ``logo`` dans la balise ``<img>`` contenant le logo HTML de votre document.

   b. L’événement ``onmouseover`` écoute le survol d’un élément HTML du document pour exécuter la fonction associée.

      Ajouter dans la balise ``<img>`` de l’image qui a l’identifiant logo l’instruction ``onmouseover="encadrer()"``.

   c. Vérifier dans votre document web que le survol du logo ajoute un cadre à l'image.

#. En HTML, on peut ajouter des boutons qui permettent de créer de l’interactivité. Pour ajouter un bouton, il faut appliquer la syntaxe suivante:

   .. code-block:: javascript

      <button>Texte sur le bouton</button>

   a. Ajouter dans votre document HTML un bouton avec l'identifiant ``btn`` et contenant le texte "Cliquer".

   b. Ajouter l’événement ``onclick`` sur le bouton en associant une instruction d’alerte qui affiche le message "Tu as cliqué sur le bouton !".

#. Ouvrir avec l’éditeur notepad++ le fichier ``script.js``. Ce fichier contient des fonctions écrites en javascript qui vont nous servir de modèle.

   a. Compléter la fonction ``alerter`` pour afficher le message "Tu as cliqué sur le bouton !" puis associer cette fonction au bouton ``btn``.

   b. Modifier la fonction ``alerter`` pour afficher le message en console.

Agir sur le contenu du document
-------------------------------

Le langage javascript permet de modifier le contenu d'une page web. Nous allons écrire un script qui ajoute un message dans le document HTML.

#. Dans la page web, ajouter sous le bouton la balise ``<p id ="message"><\p>``. Actualiser la page web sur votre navigateur et vérifier que rien n'apparait puisque la balise est vide.
#. En javascript, on peut accéder à une balise de la page html grâce à son identifiant. L'instruction est la suivante:

   .. code-block:: javascript

      msg = document.getElementById('identifiant de balise');

   Ajouter dans la fonction ``saisir_nom()`` cette instruction pour accéder à la balise ``<p>`` d'identifiant ``message``.

#. On peut ajouter un contenu dans le document html par l'instruction suivante:

   .. code-block:: javascript

      msg.innerHTML = "nouveau contenu";

   Ajouter dans la fonction ``saisir_nom()`` cette instruction pour ajouter le contenu ``"Mon nom est Bob !"`` dans la page web.

#. Remplacer l'événement ``onclick='alerter();'`` pour obtenir l'affichage de notre message lorsqu'on clique sur le bouton.
#. Modifier le script de la fonction ``saisir_nom()`` pour provoquer la saisie d'un nom et afficher le message précédent en remplaçant "Bob" par le nom saisi.