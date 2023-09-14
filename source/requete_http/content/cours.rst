Interaction client serveur
==========================

HTTP est un protocole qui permet de récupérer des ressources comme les documents HTML, des images ou autres médias. Il est à la base de tout échange de données sur le Web. C'est un protocole de type **client-serveur**.

.. figure:: ../img/modele_client_serveur_2.svg
   :align: center
   :width: 480

-  Le client initie la requête HTTP en demandant des ressources placées sur le serveur.
-  Le serveur reçoit la requête HTTP, cherche les ressources demandées et envoie une réponse au client.

Les principales applications qui réalisent des requêtes HTTP sont les navigateurs comme **edge**, **firefox** ou **chrome**.

D'autres applications peuvent effectuer des requêtes HTTP.

#. Le programme **CURL** s'utilise en ligne de commande (mode console) et permet de récupérer des ressources sous forme de fichier.

#. En Python, le module **requests** permet de programmer des requêtes HTTP afin de récupérer des données et de les exploiter à travers un programme.

La requête HTTP
---------------
   
Une requête HTTP possède deux méthodes d'envoi: GET et POST.

-  La methode **GET** permet de récupérer sur le client les ressources demandées au serveur;
-  La méthode **POST** permet d'envoyer au serveur des données pour qu'elles soient traitées par le serveur.

.. rubric:: La méthode GET

La méthode GET est celle utilisée par défaut. Elle est accompagnée du nom de la ressource demandée et du protocole HTTP utilisé ainsi que sa version.

.. admonition:: Exemple

   Dans un navigateur, on saisit une url : https://interstices.info/intelligence-artificielle-intelligence-humaine/

   Le navigateur envoie une requête HTTP au serveur qui héberge la page WEB demandée avec la méthode GET.

   .. image:: ../img/requete_interstices_1.png
      :align: center
      :width: 560

.. rubric:: Méthode GET avec des paramètres

Une requête HTTP peut envoyer des paramètres au serveur avec la méthode GET. Le serveur traite la requête et adapte sa réponse selon les valeurs données aux paramètres.

.. warning::

   Les paramètres sont prédéfinis sur le serveur sans quoi ils sont ignorés.

La syntaxe utilise d'une requête avec paramètres est la suivante:

-  le **point d'interrogation ?** pour séparer l'url des paramètres,
-  les paramètres et les valeurs reliées par le signe **égal =**,
-  les différents paramètres sont séparés par des **esperluettes &**.
-  les espaces entre les mots sont remplacés par les signes **plus +**

.. admonition:: Exemple

   Lorsqu'on effectue une recherche sur un moteur de recherche, on complète une zone de texte (formulaire) qui permet d'ajouter des paramètres à la requête envoyée au moteur de recherche.

   Si on fait une recherche sur les mots **python** et **requête**, le navigateur construit une requête avec la méthode **GET** en y ajoutant des paramètres.

   .. image:: ../img/requete_parametre_1.png
      :align: center
      :width: 560
      
   La requête contient l'url ``https://www.google.fr/search`` suivie du point d'interrogation ``?``, le paramètre ``client`` suivi de sa valeur puis le paramètre ``q`` et la valeur ``python+requête``. On remarque que les 2 paramètres sont séparés par le caractère ``&``.

.. rubric:: La méthode POST

La méthode POST permet d'envoyer des valeurs au serveur en utilisant des paramètres placés dans un tableau associatif. Ce tableau associatif est placé dans le **corps de la requête** et non dans l'url comme avec la méthode GET. Cela permet de sécuriser l'envoi de données vers un serveur.

L'usage d'un formulaire dans la page web est alors employé. Chaque champ de formulaire à compléter est associé à un paramètre. Un bouton d'envoi exécute la requête et l'envoi des données vers le serveur.

.. admonition:: Exemple

   Un blog contient une page d'authentification qui permet d'accéder à des contenus privés.

   La page web de connexion contient un formulaire avec 2 champs **login** et **mot de passe**.

   .. image:: ../img/login_blogs.png
      :align: center
      :width: 300

   Après avoir renseigné ces deux champs, on valide le formulaire et le navigateur effectue une requête avec la méthode **POST**. Les valeurs saisies sont envoyées au serveur sous la forme d'un tableau associatif (en JSON ici) :

   .. container:: highlight

      {'user_id' : 'bob', 'user_pwd':'lép0nGe'}

   Les données ne sont pas ajoutées à l'url ! Si tel était le cas, ce serait un problème pour la sécurité et la confidentialité des données. Les données de la requête **POST** sont placées dans le **corps de la requête**.


La réponse HTTP
---------------

Quelle que soit la méthode utilisée par le client, le serveur répond à la requête. Sa réponse contient un code d'état et un statut. Les codes d'état sont classés selon les statuts.

Les plus courants sont :

-  Si le statut de la requête est un succès, le code d'état vaut 200;
-  Si le statut de la requête a été redirigée vers un autre site web, le code d'état vaut 301;
-  Si le statut de la ressource n'est pas accessible, accès refusé, le code d'état vaut 403;
-  Si le statut de la ressource demandée n'est pas trouvée, le code vaut 404;
-  Si le serveur ne peut pas répondre (panne), le code vaut 500;


.. admonition:: Exemple

   Suite à la requête d'un client avec la méthode **GET**, le serveur traite la requête et répond. Si la ressource demandée est trouvée, il la renvoie avec le code d'état 200.

   Avec la ressource demandée, un en-tête de réponse est ajouté et contient les éléments suivants:

   -  Le type de contenu et son encodage : text/html; charset=UTF-8
   -  la taille du contenu : 28722 octets.
   -  La date et l'heure de l'envoi : 29 mars 2022
   -  Le serveur utilise l'application **Apache** qui est un serveur WEB,
   -  La connexion est fermée après l'envoi.


Les requêtes HTTP avec la méthode POST nécessitent un traitement des données et l'envoi d'une réponse vers le client.
On parle dans ce cas de **page web dynamique**.

Le serveur construit une ressource avec les valeurs passées en paramètre qu'il renvoie au client qui a initié la requête.


