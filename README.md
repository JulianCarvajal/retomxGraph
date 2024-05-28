## Editor de Gráficos con mxGraph y React

Este proyecto consiste en el desarrollo de un editor de gráficos utilizando la librería mxGraph integrada con React.

### Descripción

El editor de gráficos permite a los usuarios crear diagramas mediante la colocación de figuras geométricas como rectángulos, elipses, triángulos, rombos y hexágonos. Además, facilita la conexión de estas figuras mediante aristas para representar relaciones entre ellas. El usuario puede manipular las figuras seleccionándolas, eliminándolas, agrupándolas y desagrupándolas según sea necesario. Además, al seleccionar las figuras estas pueden ser redimensionadas o rotadas.

### Funcionalidades Implementadas

1. **Creación de Figuras:** Permite insertar diferentes tipos de figuras geométricas en el lienzo del gráfico.
2. **Conexión de Figuras:** Permite conectar figuras mediante aristas para representar relaciones.
3. **Manipulación de Figuras:** Incluye opciones para eliminar figuras, agrupar varias figuras en un solo grupo y desagrupar figuras.
4. **Visualización de XML:** Muestra el código XML correspondiente al estado actual del gráfico en tiempo real.
5. **Exportar figuras:** Permite exportar el XML correspondiente al estado actual del gráfico en un archivo .xml
6. **Interfaz de Usuario Intuitiva:** Utiliza una barra de herramientas para acceder a las funcionalidades principales de manera sencilla.

### Tecnologías Utilizadas

- **React:** Framework de JavaScript para construir interfaces de usuario.
- **mxGraph:** Librería JavaScript para la creación de gráficos interactivos.
- **HTML y CSS:** Para estructurar y estilizar la aplicación.

### Consideraciones importantes y mejoras

1. **Ubicación por defecto de los nodos:** Al momento de crear un nodo estos siempre aparecen en la misma posición, y si el usuario crea dos o más nodos iguales a la vez puede generar confusiones visuales debido a que la superposición de los nodos hace parecer que solo existe una figura.
2. **Insertación de aristas:** La librería mxGraph posee una limitante con la creción de aristas debido a que estas siempre deben de estar ligadas a dos nodos y no pueden ser creadas libremente sobre el lienzo si no están relacionadas con dos nodos existentes. Por defecto se vinculan a los primeros dos nodos que han sido creados, luego el usuario puede editar el nodo de origen y destino de forma manual con los controles gráficos.
