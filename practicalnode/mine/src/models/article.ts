import mongoose = require('mongoose');

let articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        validate: [function (value: string) { return value.length <= 120 }, 'Title is too long (120 max)'],
        default: 'New Post'
    },
    text: String,
    published: {
        type: Boolean,
        default: false
    },
    slug: {
        type: String,
        set: function (value: string) { return value.toLowerCase().replace(' ', '-') }
    }
});

articleSchema.static({
    list: function (callback: Function) {
        this.find({}, null, { sort: { _id: -1 } }, callback);
    }
})
export default mongoose.model('Article', articleSchema);