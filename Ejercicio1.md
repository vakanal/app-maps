# Ejercicio Teórico

## Problemas detectados
Siguiendo los principios SOLID, podemos ver como el método *`getTotal()`* de la clase `RegisterdUser` incumple con el principio **[principio de sustitución de Liskov](https://mauriciogc.medium.com/javascript-principios-solid-e93a17e950bb#af1b)** al tener que comprobar el tipo de servicio para realizar los calculos.
Ocurre lo mismo con la comprobación del tipo de `multimediaContent`.

## Solución propuesta - Teoría
* Crear un método abstracto para devolver el precio del servicio y que será implementado en cada clase hija de la clase `Service`.
* Utilizar el nuevo método creado en la clase `Service` dentro del método *`getTotal()`*.
* En la clase `MultimediaContent` los getters de los atributos `streamingPrice` y `downloadPrice` serán sobreescritos en la clase `PremiumContent` teniendo en cuenta, además, el atributo `additionalFee`.

## Solución propuesta - Pseudocódigo
```js
class RegisteredUser {
    constructor(services = []){
        this.services = services;
    }

    getTotal() {
        let total = 0;

        this.services.forEach(service, index => {
            total += service.getMultimediaPrice();
        });

        return total;
    }
}
```

```js
class Service {
    getMultimediaPrice() {}
}
```

```js
class StreamingService extends Service {
    getMultimediaPrice() {
        let multimediaContent = this.getMultimediaContent();

        return multimediaContent.streamingPrice;
    }
}
```

```js
class DownloadService extends Service {
    getMultimediaPrice() {
        let multimediaContent = this.getMultimediaContent();

        return multimediaContent.downloadPrice;
    }
}
```

```js
class MultimediaContent {
}
```

```js
class PremiumContent extends MultimediaContent {
    get streamingPrice() {
        return this._streamingPrice + this._additionalFee;
    }

    get downloadPrice() {
        return this._downloadPrice + this._additionalFee;
    }
}
```
