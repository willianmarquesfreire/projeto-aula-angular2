import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'meuPipe'
})
export class MeuPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch (args) {
      case 'todasMaiscula':
        return value.toUpperCase()
      case 'todasMinuscula':
        return value.toLowerCase()
      case 'intercala':
        return this.intercala(value)
    }
  }

  intercala(str: String) {
    let strArray = str.split("");
    let novaString = ""

    strArray.forEach((letra, index) => {
      if (index % 2 === 0) {
        letra = letra.toUpperCase()
      }
      novaString += letra
    })

    return novaString;
  }

}
