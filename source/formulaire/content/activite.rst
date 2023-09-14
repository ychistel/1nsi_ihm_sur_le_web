Activité
========

.. _`le formulaire`: https://developer.mozilla.org/fr/docs/Web/HTML/Element/Form
.. _`le champ input`: https://developer.mozilla.org/fr/docs/Web/HTML/Element/Input"
.. _`le bouton radio`: https://developer.mozilla.org/fr/docs/Web/HTML/Element/Input/radio


Les formulaires dans les pages web permettent de recueillir des informations et sont très utilisés.

.. image:: ../img/formulaire_1.png
   :alt: formulaire
   :align: center
   :width: 480

Un formulaire est ajouté avec les balises ``<form>`` et ``</form>``. Les champs de saisies et les boutons sont créés avec les balises ``<input>``. Ces balises sont différenciées en affectant un attribut ``type``. Les différents types sont:

- le type ``text`` qui va permettre la saisie d'un texte.
- le type ``number`` qui va permettre la saisie d'un nombre.
- le type ``email`` qui permet de saisir une adresse mail.
- le type ``password`` qui permet de saisir un mot de passe.
- le type ``radio`` qui permet de sélectionner une seule valeur parmi plusieurs valeurs.
- le type ``checkbox`` qui permet de sélectionner plusieurs valeurs en cochant des cases.
- le type ``list`` qui permet de choisir une valeur dans une liste déroulante.

L'affichage d'un bouton de formulaire se fait avec le type ``button``.

Pour chaque champ, il est souvent utile d'associer un texte invitant à la saisie. Ces textes sont insérés avec les balises ``<label>``.

On donne le code html du formulaire représenté sur la figure ci-dessus.

.. code-block:: html
   
   <form>
         <label for="name">Saisir votre nom: </label>
         <input type="text" name="name" id="name" required>

         <label for="email">Saisir votre email: </label>
         <input type="email" name="email" id="email" required>

         <input class="bouton" type="submit" value="Envoyer!">
   </form>

.. warning::

   Pour obtenir exactement l'apparence du formulaire, des balises ``<div>`` et ``</div>`` ont été ajoutées avec des propriétés ``css`` comme le montre le code complet ci-dessous.

   .. code-block:: html
      
      <form action="" method="get" class="form-example">
         <div class="form-example">
            <label for="name">Saisir votre nom: </label>
            <input type="text" name="name" id="name" required>
         </div>
         <div class="form-example">
            <label for="email">Saisir votre email: </label>
            <input type="email" name="email" id="email" required>
         </div>
         <div class="form-example">
            <input class="bouton" type="submit" value="Envoyer!">
         </div>
      </form>

.. hint::

   Une documentation sur les formulaires existe sur le site de la fondation Mozilla:

   -  Les formulaires en html: `le formulaire`_
   -  Les champs ``input``: `le champ input`_
   -  Les boutons radios: `le bouton radio`_
  
Serveur web ou http
-------------------

Il faut au préalable récupérer sur l'ENT l’archive ``formulaire.zip`` et la décompresser dans votre espace de travail. Le dossier est organisé pour utiliser le module Pyhon ``Flask`` qui permet d'avoir un serveur web nécessaire au traitement des données d'un formulaire.

#. Dans le dossier ``serveur_HTTP``, faire un clic droit sur le fichier ``serveur.py`` puis ouvrir avec ``python``. Si tout se passe correctement, la fenêtre de commande exécute le script et on a l'affichage suivant:

.. figure:: ../img/serveur_HTTP_run.png
   :align: center

#. On peut se connecter au serveur web que l'on vient de lancer avec un navigateur en saisissant l'url ``localhost:5000/``.
#. Le formulaire à créer a pour adresse ``localhost:5000/formulaire``.
#. Le fichier html à modifier est placé dans le dossier ``templates``. Éditer le fichier ``formulaire.html`` et passer à la suite.

Créer un premier formulaire
---------------------------

#. Créer le formulaire ci-dessous qui contient un champ de type ``text`` et un bouton de validation:

   .. image:: ../img/formulaire_2.png
      :alt: image
      :align: center
      :width: 480

#. Ajouter au champ de saisie du prénom, les attributs suivants:
   -  l'attribut ``name`` qui a pour valeur ``prenom``
   -  l'attribut ``id`` qui a pour valeur ``prenom``

#. Ajouter au formulaire un champ de type ``number`` pour saisr un âge. On ajoutera aussi des attributs ``name`` et ``id``.

   .. image:: ../img/formulaire_3.png
      :alt: image
      :align: center
      :width: 480

#. Un formulaire peut contenir des boutons radios. L’ajout de ces boutons se fait avec des balises ``<input>`` de type ``radio``. Chaque ``input`` a les attributs suivants:

   - L’attribut ``name`` qui a la même valeur ``pet`` pour chaque bouton radio. 
   - L'attribut ``value`` qui a la valeur correspondant au type d'animal à sélectionner.

   De plus, le premier bouton radio contient la valeur ``checked`` dans sa balise ``input``.

   .. image:: ../img/formulaire_4.png
      :alt: image
      :align: center
      :width: 480

.. _partie-1:

Soumettre un formulaire
-----------------------

Les données du formulaire sont envoyées lorsque l'on clique sur le bouton ``valider``. Pour qu’un envoi soit un succès, il faut que le serveur qui héberge le formulaire et traite les données reçoivent les données. Deux points importants sont à considérer:

-  L'envoi des données d'un formulaire est une requête http. On dispose de 2 méthodes pour envoyer les données : ``GET`` ou ``POST``.
-  Lorsque le serveur reçoit les données du formulaire, elles sont transmises à un fichier sur le serveur qui traite les données et renvoie une réponse au client à l'origine de l'envoi. La réponse peut prendre différente forme comme une page html contenant les données envoyées.

.. image:: ../img/client_serveur.svg
   :alt: image
   :align: center

La méthode d'envoi et le fichier qui traite les données sont précisées dans le formulaire. Les attributs ``action`` et ``method`` sont ajoutés à la balise ``<form>``.

#. Ajouter au formulaire l'attribut ``action`` qui a pour valeur ``localhost:5000/reponse``.
#. Ajouter au formulaire la méthode ``get`` à votre formulaire puis valider celui-ci après l'avoir rempli. Que remarquez-vous au niveau de l'url ?
#. Modifier la méthode d’envoi par ``post`` puis soumettre à nouveau le formulaire. Quelle est la différence avec l’envoi précédent ?