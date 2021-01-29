import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthService } from './auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  isLoading = false;
  isLogin = true;

  constructor(private authService: AuthService,private router: Router,private loadingController: LoadingController) { }

  ngOnInit() {
  }

  onLogin(){
    this.isLoading = true;
    this.authService.logIn();
    this.loadingController
     .create({ keyboardClose: true,message: 'Logando...'})
     .then(loadingEl =>{
      loadingEl.present();
      setTimeout(() => {
        this.isLoading = false;
        loadingEl.dismiss();
        this.router.navigateByUrl('/locais/tabs/busca');
      }, 1500);
    });
  }

  onSubmit(form: NgForm) {
    if (!form.valid){
      return;
    }
    const email = form.value.email;
    const senha = form.value.senha;
    console.log(email,senha);

    if (this.isLogin){
      // Enviar requisição para logar
    }else{
      // Enviar requisicao para cadastro
    }
  }

  trocarModoLogin(){
    this.isLogin = !this.isLogin;
  }
}
