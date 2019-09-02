import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html',
})
export class BodyComponent {

    mostrar = true;

    frase: any = {
        mensaje:"Un gran poder",
        autor: "ben Parker"
    };

    personajes: string[] = ['spiderman', 'venon', 'octupus']
}