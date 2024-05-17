import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginService } from './login/login.service';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    LoginModule,
    RegisterModule,
    MongooseModule.forRoot('mongodb://localhost:27017/nest'),
  ],
  controllers: [AppController],
  providers: [AppService, LoginService],
})
export class AppModule {}
