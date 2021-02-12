import mongoose from 'mongoose';

// An interface that describes the properties that are required to create a new Subcategory
interface SubcategoryAttrs {
    name: string;
    parentCategory: string; // could be optional
    followers_count: number; // could be optional
}

// An interface that describes the properties that an Category model has
interface SubcategoryModel extends mongoose.Model<SubcategoryDoc> {
    build(attrs: SubcategoryAttrs): SubcategoryDoc;
}

// An interface that describes the properties that a Category Document has
interface SubcategoryDoc extends mongoose.Document {
    name: string;
    parentCategory: string;
    followers_count: number;
}

const subcategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    parentCategory: {
        type: String,
        required: true
    },
    followers_count: {
        type: Number,
        required: true
    }

}, {
    timestamps: true,
});

subcategorySchema.statics.build = (attrs: SubcategoryAttrs) => {
    return new Subcategory(attrs);
};

const Subcategory = mongoose.model<SubcategoryDoc, SubcategoryModel>('Subcategory', subcategorySchema);

export { Subcategory };