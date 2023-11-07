// 返回一个Promise对象的函数
function fetchUser(id) {
  return new Promise((resolve, reject) => {
    // 模拟网络请求
    console.log("start fetch user");
    setTimeout(() => {
      resolve({ id: id, name: `User ${id}` });
    }, 1000);
  });
}

function fetchPosts(userId) {
  return new Promise((resolve, reject) => {
    console.log("start fetch post");

    setTimeout(() => {
      resolve([
        { userId: userId, title: "Post 1" },
        { userId: userId, title: "Post 2" },
      ]);
    }, 5000);
  });
}

async function main() {
  // 需要等待完成的Promise对象
  const promises = [fetchUser(1), fetchUser(2), fetchPosts(1)];

  try {
    // Promise.all返回的结果是一个数组
    const [user1, user2, posts] = await Promise.all(promises);

    console.log("User 1:", user1);
    console.log("User 2:", user2);
    console.log("Posts:", posts);
  } catch (err) {
    console.error(err);
  }
}

main();
