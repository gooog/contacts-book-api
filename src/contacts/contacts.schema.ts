import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument, Schema as MongooseSchema } from 'mongoose';
import { User } from "src/users/users.schema";

export type ContactDocument = HydratedDocument<Contact>;


@Schema()
export class Contact {
   @Prop({ required: true })
   name: string;   
   @Prop({ required: true })
   mobile: string;   
   @Prop()
   email: string;   
   @Prop()
   address: string;   
   @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User', required: true })
   user: User | MongooseSchema.Types.ObjectId;
}

export const ContactSchema = SchemaFactory.createForClass(Contact);