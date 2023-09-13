// 定义表结构
require("dotenv").config();
const db = require("./mongodb");
const DB_URI = process.env.DB_URI;
db.connect(DB_URI);

const mongoose = require("mongoose");
const doc = new mongoose.Schema({
  id: {
    type: Number,
    unique: true,
  },
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  content_render: {
    type: Number,
  },
  url: {
    type: String,
  },
  created: {
    type: String,
  },
  last_modified: {
    type: String,
  },
  topic: {
    type: String,
  },
  crawled: {
    type: String,
  },
});

const v2Model = mongoose.model("v2ex_content", doc, "v2ex_content");

async function isExist(id) {
  ret = await v2Model.findOne({ id: id }, "id").exec();
  console.log("is exist return ", ret);
  return ret;
}

async function createDoc(obj) {
  if (await isExist(obj.id)) {
    //   console.log(obj.comment_id);
    console.log("same");
    return;
  }

  try {
    console.log("inserted", obj);
    await v2Model.create(obj);
  } catch (e) {
    console.log("dup");
    // console.log(e);
  }
}

async function v2Stop() {
  //   await mongoose.disconnect();
  await mongoose.connection.close();
}

module.exports = { v2Model, createDoc, v2Stop };
