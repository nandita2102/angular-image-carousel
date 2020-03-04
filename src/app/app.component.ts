import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'image-carousel';
  currentselected: any = '../assets/img1.jpg';
  prevselected: any;

  images = ['../assets/img1.jpg', '../assets/img2.jpg', '../assets/img3.jpg', '../assets/img4.jpg', '../assets/img5.jpg'];

  constructor(private _snackBar: MatSnackBar) {

  }

  prevImage() {
    for (let i = 0; i < this.images.length; i++) {
      if (this.images[i] === this.currentselected && i > 0) {
        i--;
        this.currentselected = this.images[i];
        console.log(this.currentselected);
      } else if(this.images[i] === this.currentselected && i === 0) {
        this._snackBar.open('No more Images!', 'Navigate forward', {
          duration: 2000
        });
      }
    }
    const img = document.getElementsByClassName('image-container')[0] as HTMLImageElement;
    img.setAttribute('src', this.currentselected);
  }

  nextImage() {
    for (let i = 0; i < this.images.length; i++) {
      if (this.images[i] === this.currentselected && i < this.images.length - 1) {
        i++;
        this.currentselected = this.images[i];
        console.log(this.currentselected);
      } else if(this.images[i] === this.currentselected && i === this.images.length - 1) {
        this._snackBar.open('No more Images!', 'Navigate back', {
          duration: 2000
        });
      }
    }
    const img = document.getElementsByClassName('image-container')[0] as HTMLImageElement;
    img.setAttribute('src', this.currentselected);
    
  }

}
