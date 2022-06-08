import { model, Model, Schema } from 'mongoose';

export interface IUser {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  fullName: string;
}

const IUserSchema = new Schema<IUser>(
  {
    email: {
      type: String,
      required: true,
      lowercase: true,
      index: true,
      unique: true,
    },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    fullName: { type: String, required: true },
    password: { type: String, required: true },
  },
  { collection: 'user', timestamps: true }
);

IUserSchema.virtual('fullName').get(function () {
  return this.firstName + ' ' + this.lastName;
});

export const UserModel: Model<IUser> = model('user', IUserSchema);
