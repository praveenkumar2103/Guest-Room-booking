import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-edit-room',
  templateUrl: './create-edit-room.component.html',
  styleUrls: ['./create-edit-room.component.scss']
})
export class CreateEditRoomComponent implements OnInit {
  id: number;
  alert: boolean;
  imageUrl: string | ArrayBuffer;
  editFile: boolean;
  removeUpload: boolean;
  cd: any;

  constructor(private route:ActivatedRoute,) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      console.log("room id : "+this.id);
  });
  }

  uploadFile(event) {
    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.target.files[0];
    if (event.target.files && event.target.files.length) {
      reader.readAsDataURL(file);

      // When file uploads set it to file formcontrol
      reader.onload = () => {
        this.imageUrl = reader.result;
        // size 512kb is 524288 bytes
        if (event.target.files[0].size < 524288){
          this.alert=false;
        }
        else{
          this.alert = true;
        }

        this.editFile = false;
        this.removeUpload = true;
      }
      // ChangeDetectorRef since file is loading outside the zone
      this.cd.markForCheck();
    }

  }

}
