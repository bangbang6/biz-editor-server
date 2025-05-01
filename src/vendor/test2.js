const OSS = require("ali-oss");
const path = require("path");
const fs = require("fs");
const client = new OSS({
  regin: "oss-cn-hangzhou",
  accessKeyId: "LTAI5tCSUarydooXKw1SzvVM",
  accessKeySecret: "GUJmRrkrv05Ka3eFwicxPh9oaIn8h8",
  bucket: "mw-editor-server",
});

// 自定义请求头
const headers = {
  // 指定Object的存储类型。
  "x-oss-storage-class": "Standard",
  // 指定Object的访问权限。
  "x-oss-object-acl": "public-read",
  // 通过文件URL访问文件时，指定以附件形式下载文件，下载后的文件名称定义为example.txt。
  "Content-Disposition": 'attachment; filename="example.txt"',
  // 设置Object的标签，可同时设置多个标签。
  "x-oss-tagging": "Tag1=1&Tag2=2",
  // 指定PutObject操作时是否覆盖同名目标Object。此处设置为true，表示禁止覆盖同名Object。
  "x-oss-forbid-overwrite": "true",
};

async function put() {
  try {
    // 填写OSS文件完整路径和本地文件的完整路径。OSS文件完整路径中不能包含Bucket名称。
    // 如果本地文件的完整路径中未指定本地路径，则默认从示例程序所属项目对应本地路径中上传文件。
    const aaa = fs.createReadStream(path.resolve(__dirname, "./test.txt"));
    const result = await client.putStream(
      "exampleobject2.txt",
      aaa,
      // 自定义headers
      { headers }
    );
    console.log("success", result);
  } catch (e) {
    console.log(e);
  }
}

put();
