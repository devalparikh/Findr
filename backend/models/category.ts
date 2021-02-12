import mongoose from 'mongoose';

// An interface that describes the properties that are required to create a new category
interface CategoryAttrs {
    name: string;
    subcategories: [string]; // could be optional
    followers_count: number; // could be optional
}

// An interface that describes the properties that an Category model has
interface CategoryModel extends mongoose.Model<CategoryDoc> {
    build(attrs: CategoryAttrs): CategoryDoc;
}

// An interface that describes the properties that a Category Document has
interface CategoryDoc extends mongoose.Document {
    name: string;
    subcategories: [string];
    followers_count: number;
}

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    subcategories: {
        type: Array<String>(),
        required: true
    },
    followers_count: {
        type: Number,
        required: true
    }

}, {
    timestamps: true,
});

categorySchema.statics.build = (attrs: CategoryAttrs) => {
    return new Category(attrs);
};

const Category = mongoose.model<CategoryDoc, CategoryModel>('Category', categorySchema);

export { Category };