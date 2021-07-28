import { Component, OnInit } from '@angular/core';
import { MotionService } from '../services/motion.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  x: number;
  y: number;
  z: number;

  constructor(private motion: MotionService) { }

  ngOnInit() {
  }

  public async movimiento(){
    this.getmotion();
    }

    getmotion()
    {
       this.motion.movimientoAceleracion().then(()=>{
        this.x=this.motion.x;
        this.y=this.motion.y;
        this.z=this.motion.z;
      });
    }
}
