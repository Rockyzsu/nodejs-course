module.exports = {
    newNote: async (parent, args, { models }) => {
        return await models.create({
            content: args.content,
            author: "Harden",
        })
    },
    deleteNote: async (parent, args, { models }) => {
        try {
            await models.findByIdAndRemove(args.id);
            return true;
        } catch (err) {
            return false;
        }

    },
    updateNote: async (parent, {content,id}, { models }) => {
        return await models.findByIdAndUpdate(
            { _id: id },
            { $set: { content: content } },
            { new: true }
        )
    }
}