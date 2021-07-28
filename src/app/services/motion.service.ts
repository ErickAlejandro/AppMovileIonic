import { Injectable } from '@angular/core';
import { Motion } from '@capacitor/motion';

@Injectable({
  providedIn: 'root'
})
export class MotionService {

  x: number;
  y: number;
  z: number;

  alpha: number;
  beta: number;
  gamma: number;


  constructor() { }

  async movimientoAceleracion(){
    try {
      await Motion.addListener('accel', event => {
        this.x = event.acceleration.x;
        this.y = event.acceleration.y;
        this.z = event.acceleration.z;
        console.log(event);
      });
    }catch (e) {
      return;
    }
  }

  async movimientoRotation(){
    try {
      await DeviceMotionEvent.requestPermission();
    } catch (e) {
      // Handle error
      return;
    }

    // Once the user approves, can start listening:
    Motion.addListener('accel', event => {
      this.alpha = event.rotationRate.alpha;
      this.beta = event.rotationRate.beta;
      this.gamma = event.rotationRate.gamma;
    });
  }

}
