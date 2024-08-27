Una empresa de colectivos de larga y media distancia necesita una app que permita cargar los viajes que realizan sus unidades para mostrarlos en su e-commerce de venta. En base a un listado de viajes se solicita la elaboración de un formulario para la edición de un viaje. Una vez elegido el viaje a editar se abrirá una pantalla que permite editar:
- Origen (combo en base a endpoint `/cities`) - Propiedad: `originId`
- Destino (combo en base a endpoint `/cities`, debe excluir el valor seleccionado en la ciudad de origen) - Propiedad: `destinationId`
- Fecha salida - Propiedad: `departureDate`
- Hora Salida (validar formato 24HS, es decir, 00:00 - 23:59, con un único control) - Propiedad: departureTime
- Precio (decimal, requerido, mayor a 0) - Propiedad: `price`
- Paradas: es un arreglo de valores que contienen información sobre las paradas que va a tener el vehículo y será accedido por medio de un botón "Modificar Paradas" debajo del formulario que mostrará un formulario con los siguientes datos: - Propiedad: `stops`
    + Lugar (cadena, mayor a 20 carac.) - Propiedad: `location`
    + Hora (misma validacion que la hora salida) - Propiedad: `time`
    + Tiempo (numérico, requerido, mayor a 0) - Propiedad: `stopTime`
A su vez aquellos viajes que ya tengan información sobre paradas deben ser mostrados con un acordeón que se podrá desplegar para ver la información sobre las paradas (solo lectura), el botón "Continuar" debe proveer el viaje cargado al componente con el formulario de paradas, el cual será el encargado de guardar todo por medio de la opción "Guardar" en caso de guardarlo exitosamente debe redirigir al listado de los viajes y de caso contrario tiene que mostrar un mensaje informando al usuario.

Los botones de cancelar deben tener la lógica para volver al componente anterior, en el caso del formulario del viaje debe volver al listado y en caso del formulario de las paradas del autobus debe volver al formulario de viaje (no es necesario routing para este último caso).

Los botones de "Continuar" y "Cancelar" deben tener una separación en el medio (espacio vacío) como asi también los botones Cancelar y Guardar del componente `trip-stop-edit`.
La pantalla del listado y la de los formularios deben estar centradas al medio de la pantalla y eliminar el scroll vertical que se ve en la versión actual.

Se deben respetar los nombres de las propiedades especificados en la documentación presentada más abajo.

Se evalua:
- Routing (listado, edición viaje)
- Reactive forms
- Validaciones (simples y personalizadas)
- Comunicación entre componentes
- HTTP
- Estilos

Rubrica:
- (1) Routing
- (2) Listado 
- (4) Edición
- (1) Validaciones simples
- (1) Validación personalizada
- (1) Estilos

Para la comunicación con la API se utilizará la librería JSON Server la cual ya viene pre instalada en el proyecto y está corriendo en el puerto 3200 al correr el comando npm run start que también corre la aplicación Angular.

Tiempo de examen: 3hs

## Aplicacion

Para correr la aplicacion ejecutar el comando `npm run start` la cual corre en el puerto 4200.

## API Server

Para correr la API ejecutar el comando `npm run start-server` el cual corre en el puerto 3200.

## Documentación API

### GET Ciudades (Obtener ciudades)
`GET http://localhost:3200/cities` 
``` JSON
[
    {
        "id": "15fc2a5e-0891-4474-8bad-ecc2d36332cf",
        "name": "Villa Maria"
    },
    {
        "id": "8b48c338-b08c-4c31-8d5f-963ef9feea9f",
        "name": "Campana"
    },
    {
        "id": "4562c463-8680-45aa-9a11-d7dd5b52bacf",
        "name": "San Nicolas"
    },
    {
        "id": "0aba3d2c-ca83-4f72-b226-a4942341841a",
        "name": "Rio Cuarto"
    },
    {
        "id": "1196b70b-8ad4-489f-b148-7d7a305dfff1",
        "name": "La Falda"
    }
]
```

### PUT Viaje (Actualizar Viaje) 
`PUT http://localhost:3200/trips/{id}`
``` JSON
{
    "id": "30e47bd9-0331-446a-bcdd-9780e496d77b",
    "originId": "15fc2a5e-0891-4474-8bad-ecc2d36332cf",
    "destinationId": "8b48c338-b08c-4c31-8d5f-963ef9feea9f",
    "departureDate": "27/11/2023",
    "departureTime": "22:00",
    "price": 16001,
    "stops": [
        {
            "location": "San Pedro",
            "time": "07:00",
            "stopTime": 30
        },
        {
            "location": "San Agustin",
            "time": "02:00",
            "stopTime": 45
        }
    ]
}
```