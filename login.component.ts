import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputOtpModule } from 'primeng/inputotp';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule,SidebarModule,ButtonModule,DialogModule,FloatLabelModule,InputOtpModule,InputTextModule,ToastModule],
  providers:[MessageService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent { 
  sidebarVisible2:boolean=false;
  loginObj:any={
     mobNo:'',
     otp:''
  }

otpinputDisplay:boolean=false;
visible: boolean = false;


constructor(private route:Router,private msgService:MessageService){

}

showDialog() {
    this.visible = true;
}

scrollToSection(section: string): void {
  document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
}

  optVerification(){
   this.otpinputDisplay=true;
  }

  verify(){
    debugger;
    if(this.loginObj.mobNo == '1234567890' && this.loginObj.otp == '1234'){
      // alert("Login Successfull")
      this.msgService.add({ severity: 'success', summary: 'Login Sucessfully', detail: 'Message Content',life: 20000 });
      this.route.navigateByUrl('/Profiles/selected_Profile'); 
    }else{
      this.msgService.add({ severity: 'error', summary: 'Error', detail: 'Message Content' });
    }
  }
}
