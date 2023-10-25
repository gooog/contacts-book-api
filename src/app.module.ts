import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ContactsModule } from './contacts/contacts.module';
import { ContactSchema } from './contacts/contacts.schema';
import { RegisterModule } from './register/register.module';
import { UserSchema } from './users/users.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27023/', {dbName: 'contacts_book'}),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    MongooseModule.forFeature([{ name: 'Contact', schema: ContactSchema }]),
    AuthModule, 
    UsersModule, 
    ContactsModule,
    RegisterModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
