import { Component } from '@angular/core';
import { Storage } from '@capacitor/storage';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  items ={
    key: '',
    value: ''
  };

  key: string;
  value: string;
  ver: any;
  constructor() {}

  saveStorage() {
    Storage.set({
      key:this.key,
      value:this.value
    }).then(()=>{
      alert('Storage guardado con Exito');
    });
  }

  getStorage(){
    Storage.get({
      key:this.key
    }).then((value)=>{
      alert('Valor de Llave' + this.key + 'es: ' + value.value);
    });
  }

  removeStorage(){
    Storage.remove({
      key:this.key
    }).then(()=>{
      alert('Valor de Llave' + this.key + 'fue borrado: ');
    });
  }
}
