import mongoose from 'mongoose';

// An interface that describes the properties that are required to create a new post
interface PostAttrs {
    name: string;
    description: string;
    images: [string];
    location: string;
    category: string;
    subcategories: string;
    views: number;
    likes: number;
    review: number;
    review_count: number;
    posterId: string;
    posterUsername: string;
    // traffic: [number];
}

// An interface that describes the properties that an post model has
interface PostModel extends mongoose.Model<PostDoc> {
    build(attrs: PostAttrs): PostDoc;
}

// An interface that describes the properties that a Post Document has
interface PostDoc extends mongoose.Document {
    name: string;
    description: string;
    images: [string];
    location: string;
    category: string;
    subcategories: string;
    views: number;
    likes: number;
    review: number;
    review_count: number;
    posterId: string;
    posterUsername: string;
}

const postSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    images: {
        type: Array<String>(),
        required: true
    },
    location: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    subcategories: {
        type: String,
        required: true
    },
    views: {
        type: Number,
        required: true
    },
    likes: {
        type: Number,
        required: true
    },
    review: {
        type: Number,
        required: true
    },
    review_count: {
        type: Number,
        required: true
    },
    posterId: {
        type: String,
        required: true
    },
    posterUsername: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
});

postSchema.statics.build = (attrs: PostAttrs) => {
    return new Post(attrs);
};

const Post = mongoose.model<PostDoc, PostModel>('Post', postSchema);

export { Post };