import mongoose, {Document} from 'mongoose';

const {ObjectId} = mongoose.Types;

enum AnimalGenders {
  male = 'male',
  female = 'female',
}

enum AnimalTypes {
  dog = 'dog',
  cat = 'cat',
  other = 'other',
}

enum AnimalSizes {
  small = 'small',
  medium = 'medium',
  big = 'big',
}

export interface IAdoption {
  user: string;
  name: string;
  gender: AnimalGenders;
  breed: string;
  type: AnimalTypes;
  age: number;
  size: AnimalSizes;
  observations: string;
  photos: string[];
}

export type IAdoptionDocument = IAdoption & Document;

const AdoptionSchema = new mongoose.Schema(
  {
    user: {
      type: ObjectId,
      ref: 'User',
    },
    name: {
      type: String,
      description: 'Animal name',
      trim: true,
      index: true,
      required: true,
    },
    gender: {
      type: String,
      description: 'Animal gender',
      required: true,
    },
    breed: {
      type: String,
      description: 'Animal breed',
      trim: true,
      index: true,
      required: true,
    },
    type: {
      type: String,
      description: 'Animal type',
      required: true,
    },
    age: {
      type: Number,
      description: 'Animal age',
      required: true,
    },
    size: {
      type: String,
      description: 'Animal description',
      required: true,
    },
    photos: [
      {
        type: String,
        description: 'Photos of animal (min: 1)',
        required: true,
      },
    ],
    observations: {
      type: String,
      description: 'Any observation about the animal',
      maxlength: 200,
    },
  },
  {collection: 'Adoption', timestamps: true},
);

const AdoptModel = mongoose.model<IAdoptionDocument>('Adopt', AdoptionSchema);

export default AdoptModel;
