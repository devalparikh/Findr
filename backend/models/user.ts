import mongoose from 'mongoose';
import { Password } from '../services/password';

// An interface that describes the properties that are required to create a new user
interface UserAttrs {
  email: string;
  username: string;
  password: string;
}

// An interface that describes the properties that an user model has
interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttrs): UserDoc;
}

// An interface that describes the properties that a User Document has
interface UserDoc extends mongoose.Document {
  email: string;
  username: string;
  password: string;
}

const userSchema = new mongoose.Schema({
  email: {
    type: String, // mongoose type, not for typescript
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
}, {
  toJSON: {
    // Reformat database schema upon retrieval
    transform(doc, ret) {
      ret.id = ret._id;
      delete ret._id;
      delete ret.password;
      delete ret.__v;
    }
  }
});

// Hashes password at the schema level
userSchema.pre('save', async function(done) {
  if (this.isModified('password')) {
    const hashed = await Password.toHash(this.get('password'));
    this.set('password', hashed);
  }
  done();
});

userSchema.statics.build = (attrs: UserAttrs) => {
  return new User(attrs);
};

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

export { User };