.. 1 NSI

.. _font google: https://fonts.google.com/

Feuille de style CSS
====================

L’image ci-dessous est notre premier document web écrit en langage html.
Nous n’avons pas encore obtenu le résultat final attendu.

.. figure:: ../img/style_css.png
   :alt: image
   :align: center
   :width: 100%

Les améliorations à apporter ne relèvent pas du langage html mais des règles de style en CSS (Cascading Style Sheet)
qui améliorent l’affichage graphique du document html.

Les règles de style CSS sont définies dans l’entête du document dans la balise ``<head></head>``. Toutes les règles CSS
seront comprises entre les balises ``<style>`` et ``</style>``. Cette balise doit contenir l’attribut ``type`` qui a
pour valeur ``text/css``.

Chaque règle CSS est définie sur une balise html appelée **sélecteur**. Le **sélecteur** contient des propriétés
auxquelles on associe des valeurs. Une règle CSS s’écrit toujours avec la même syntaxe:

.. code-block:: css
   :caption: Règle en CSS
   
   sélecteur{propriété 1: valeur 1; propriété 2: valeur 2; }

Nous allons compléter notre document html pour appliquer les règles CSS qui vont nous permettre d’obtenir l’affichage souhaité.

#. Ajouter la balise ``<style></style>`` dans votre document html.

#. Pour limiter la largeur de la page web et que celle-ci soit centrée, il faut ajouter les propriétés CSS suivantes
   sur le sélecteur ``body``.

   .. code-block:: css

      body{
         font-family: Verdana,sans-serif;
         font-size:1em;
         line-height:1.5em;
         width:1080px;
         margin:auto
      }

#. Le titre de la page "Fonctionnement du web" doit être centré et avoir une taille plus importante.

   Ajouter le sélecteur associé au titre de niveau 1, puis la propriété ``text-align`` qui a pour valeur ``center`` et
   la propriété ``font-size`` qui a pour valeur ``3em``.

#. Les titres de niveau 2 ont une couleur bleue. La propriété CSS appropriée à la couleur est ``color``. Les couleurs
   peuvent avoir plusieurs écritures.

   -  le nom de la couleur en anglais,
   -  le code couleur RGB en hexadécimal précédé du signe #,
   -  le code couleur RGB en décimal écrit entre parenthèses et précédé par rgb.

   a. Quelles sont les trois écritures possibles pour la couleur "bleu royal" ?
   b. Ajouter cette propriété CSS à votre document sous les trois formes d’écritures.
   c. Afficher les outils de développement du navigateur (F12) et inspecter l’un des titres de couleur bleue. Vérifier que la
      couleur ne change pas en activant ou désactivant les valeurs.

#. Pour centrer une image sur une page, on applique les règles CSS sur le sélecteur ``img`` suivantes:

   .. code-block:: css

      img{
         display:block;
         margin:16px auto;
      }

   Ajouter cette règle pour centrer les images dans le document.

#. La photo de toile d’araignée est encadrée avec un effet ombré. Pour obtenir cet effet, on applique les propriétés
   CSS suivantes:

   .. code-block:: css

      border:solid 1px #eee;
      box-shadow:4px 4px #aaa;
      padding:8px;

   a. Appliquer ces règles au sélecteur img. Que remarque-t-on ?
   b. Pour éviter que des propriétés s’appliquent à tous les sélecteurs, on ajoute des classes aux sélecteurs. Il faut:

      -  choisir un nom de classe qui regroupe les propriétés CSS,
      -  ajouter au document html la classe dans le sélecteur où elle s’applique avec la syntaxe: ``class="nom de la
         classe"`` (pas de "e" à class),
      -  ajouter dans la balise style la classe précédée d’un point avec toutes ces propriétés CSS.

      Ajouter la classe cadre avec les propriétés CSS créant un cadre à la photo de toile d’araignée.

#. Les styles CSS créés pour notre document ne sont applicables qu’à notre document. Si on souhaite appliquer les mêmes
   styles dans un autre document html, il faudra ajouter ces styles.

   C’est possible mais en cas de modification, il faudra modifier tous les documents html ce qui n’est pas optimal.

   Pour éviter cela, on peut rassembler les propriétés CSS dans un fichier externe. Ce fichier est appelé "feuille de
   style CSS" et son extension est ``.css``.

   a. Créer une feuille de style CSS qui comprend toutes les propriétés CSS de notre document et enregistrer cette
      feuille sous le nom ``mon_style.css``.

   b. Remplacer dans votre document html, la balise style par la balise vide suivante:

      .. code-block:: html

         <link type="text/css" href="mon_style.css" rel="stylesheet" />

#. Ajouter un lien vers une feuille de style permet de créer des liens vers des feuilles de style se trouvant sur le web.

   Un usage possible est l’application d’une police de style proposée par google.

   a. Rendez vous sur le site des `font google`_,
   b. Choisissez une police et copiez le lien de la feuille de style dans votre document.
   c. Ajouter dans le sélecteur body la propriété CSS font-family associée.
   d. Vérifiez que la police est bien appliquée à votre document html.

#. Lorsque les propriétés CSS ont été appliquées, votre document doit ressembler à la capture suivante.

   .. figure:: ../img/activite_html.png
      :alt: image
      :align: center
      :width: 100%
