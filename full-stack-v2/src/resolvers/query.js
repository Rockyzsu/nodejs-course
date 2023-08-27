module.exports ={
    notes: async (parent,args,{ models }) => { // 这里不能省略了parent参数
        return await models.find()
    },
    note: async (parent, args,{ models }) => {
        return await models.findById(args.id);
    }
}