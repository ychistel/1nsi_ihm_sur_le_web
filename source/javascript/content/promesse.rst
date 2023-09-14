Programmation synchrone et asynchrone
=====================================

La programmation synchrone exécute des instructions d'un script les unes à la suite des autres. Si une des instructions provoquent un bug, le programme s'arrête.

La programmation asynchrone permet d'éxécuter des instructions en parallèle du programme principal. Le principal avantage se situe sur le risuqe de bug et la non interruption du programme principal.

.. admonition:: Exemple

   Une page web doit afficher des contenus provenant d'un autre site. Tant que ces contenus ne sont pas disponibles, la page ne s'afffiche pas. En réalisant une collecte des données de manière asynchrone, la page est affichée et les données sont ajoutées lorsqu'elles sont disponibles.

En javascript, il est possible (conseillé) d'écrire des parties de programme asynchrones pour ne pas bloquer l'exécution du programme principal. Pour ce faire, on utilise les **promesses**. Une **promesse** représente une valeur qui est soit immédiatement disponible, disponible dans un temps plus long ou même jamais disponible.

