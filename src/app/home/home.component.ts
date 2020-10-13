import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
public isListening:boolean=false;
public note:any;
public savedNotes:any[]=[];
public sp=window.webkitSpeechRecognition ;
public mic=new this.sp();
public buttoncheck:boolean;
constructor() { }

  ngOnInit(): void {
 this.isListening=false;
 this.buttoncheck=false;
 this.mic.continuous = true
 this.mic.interimResults = true
 this.mic.lang = 'en-US'
  }
micFunc()
{
  if(this.isListening==false){
    this.isListening=true;
    this.mic.start();
    this.mic.addEventListener('result', (e) => {
      const transcript = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join('');
      this.note= transcript;
      console.log(transcript);
    });
 } else {
    this.isListening=false;
    this.mic.stop(event=>console.log('stopped'));
  }
}
saveNotes()
{
 let t=this.savedNotes.push(this.note);
  this.note='';
  console.log(this.savedNotes);
}
}
