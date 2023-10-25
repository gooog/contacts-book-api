import { Inject, Injectable, NotFoundException, Req } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { Contact } from './contacts.schema';
import { Request } from 'express';
import { REQUEST } from '@nestjs/core';

@Injectable()
export class ContactsService {

  constructor(@InjectModel(Contact.name) private contactModel: Model<Contact>,
              @Inject(REQUEST) private request) {}

  async create(createContactDto: CreateContactDto): Promise<Contact> {
    const createContact = {
        name: createContactDto.name,
        mobile: createContactDto.mobile,
        email: createContactDto.email,
        address: createContactDto.address,
        user: this.request.user.userId

    }

    return await this.contactModel.create(createContact);
  }

 async findAll(): Promise<Contact[]> { console.log(this.request.user.userId);
     return this.contactModel.find({user: this.request.user.userId}).exec();
  }

  update(id: string, updateContactDto: UpdateContactDto) { console.log(id);
    return this.contactModel.findOneAndUpdate({ _id: id, user:  this.request.user.userId }, updateContactDto);
  }
 
  remove(id: string) {
    return this.contactModel.deleteOne({ _id: id, user:  this.request.user.userId });
  }
}
