import { Component,OnInit,AfterViewInit } from '@angular/core';
declare  var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit {
  title = 'Avro Bangla';
  fontType:any= true;
  myModel:any;
  username:string='';

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
     $('textarea, input[type=text]').avro({'bangla':true});
  }

  public ChangeFont(){
    var evt = $.Event("keypress");
    evt.keyCode = 109; // d
    evt.ctrlKey = true;
    $(document).trigger(evt);
    
   // $('textarea, input[type=text]').avro({'bangla':true});
     this.fontType = ! this.fontType;
  }
}
