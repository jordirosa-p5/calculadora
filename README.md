# calculadora que (encara) no calcula

Hem començat a fer a classe una calculadora, fent servir la maquetació que ens proporciona la pàgina https://freshman.tech/css-grid-calculator/https://freshman.tech/css-grid-calculator/

Al codi que ens vam descarregar, primer vam afegir un event 'onclick' als botons que mostren números i xifres. Aquest onclick crida a la mateixa funció 'afegeix', però passant cada vegada un paràmetre diferent (el caràcter que volem afegir a la pantalla).

Tenim al nostre codi una variable global que es diu 'cadena' i cada cop que cridem a la funció 'afegeix',  afegim el caràcter que s'ha passat per paràmetre. Si es prem el botó '5', enviem el paràmetre '5' i aquest caràcter és el què s'afegirà al final de la cadena. Si després es prem el botó '2', s'afegiria un 2 al final de la cadena, passant així a tenir un 52. Per concatenar cadenes de texte, fem servir l'operador de la suma, +:

         cadena = cadena + valor ;

A més de mantenir la nostra variable amb la cadena de caràcters que s'han apretat als botons, hem de mostrar-ho per la pantalla, això ho fem modificant l'element HTML que fa de pantalla, en aquest cas és un input de tipus text que s'ha posat 'disabled' per què mostri coses però no deixi a l'usuari escriure-hi a dins. Aquest input li hem posat l'identificador 'pantalla', pel què per mostrar la cadena per pantalla fem servir la instrucció:

         document.getElementById("pantalla").value = cadena;

Quan es premi el botó 'AC', volem resetejar el valor que estem calculant. Per fer això, vam crear una altra funció diferent: 'neteja'. A l'HTML li afegim, a l'element button de la tecla AC, un altre event onclick per què quan s'apreti aquest botó s'executi la funció 'neteja'. Aquest cop no cal que aquesta funció rebi cap paràmetre, sempre farem la mateixa cosa: netejar la pantalla (i la cadena on guardem els càlculs que haurem de fer). Això ho aconseguim dient-li que

         cadena = "0";

i mostrant el nou valor per pantalla de la mateixa manera d'abans, assignant el que volem mostrar per pantalla amb document.getElementById("pantalla").value = "0";
