import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import { date } from '../../node_modules/joi/lib/index';

const UserSchema = new Schema({
  username: String,
  hashedPassword: String,
});

UserSchema.methods.setPassword = async function (password) {
  const hash = await bcrypt.hash(password, 10);
  this.hashedPassword = hash;
};

UserSchema.methods.checkPassword = async function (password) {
  const result = await bcrypt.compare(password, this.hashedPassword);
  return result;
};

UserSchema.statics.findByUsername = function (username) {
  return this.findOne({ username });
};

UserSchema.methods.serialize = function () {
  const data = this.toJSON();
  delete date.hashedPassword;
  return data;
};

const User = mongoose.model('User', UserSchema);
export default User;
