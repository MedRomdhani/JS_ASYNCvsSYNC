// run();
async function run(link) {
  console.log("before");

  try {
    let user = await getUser(10);
    console.log("je suis là", user);

    let products = await getProduct(user.id);
    console.log(products);

    let btn = link
    let url = `https://jsonplaceholder.typicode.com/${btn}`
    await fetch(url)
      .then((res) => res.json())
      .then((posts) => {
        let table = document.createElement("table");
        let container = document.querySelector(".container")
        container.replaceChildren(table);
        // if(container.children){
        //   container.removeChild(table);
        //   container.appendChild(table);

        // } else {
        //   container.appendChild(table);
        // }
        
        let thead = document.createElement("thead");
        table.appendChild(thead);
        let tableHead = posts[0];
        for (let i = 0; i < Object.keys(tableHead).length; i++) {
          let th = document.createElement("th");
          th.innerText = Object.keys(tableHead)[i];
          thead.appendChild(th);
        }
        posts.forEach((element) => {
          let tr = document.createElement("tr");
          for (let i = 0; i < Object.keys(element).length; i++) {
            let td = document.createElement("td");
            td.innerText = Object.values(element)[i];
            tr.appendChild(td);
          }
          table.appendChild(tr);
        });
        console.log(posts);
      })
      .catch((error) => console.log(error));
  } catch (error) {
    console.log(error);
  }

  console.log("between");
  console.log("after");
}

function getUser(id) {
  return new Promise((resolve, reject) => {
    let status = true;
    setTimeout(() => {
      console.log("retreive data from database");
      if (status) {
        return resolve({ id: id, name: "Mohamed romdhani" });
      } else {
        return reject("user not found");
      }
    }, 2000);
  });
}

function getProduct(userId) {
  return new Promise((resolve, reject) => {
    let status = true;

    setTimeout(() => {
      console.log("retreive products from database");
      if (status) {
        return resolve(["p1", "p2"]);
      } else {
        return reject("Product not found");
      }
    }, 2000);
  });
}

//  let p = new Promise((resolve, reject) =>{
//   let status = false;
//   if(status){
//     resolve('Ok')
//   }
//   else{
//     reject('Non')
//   }
// })
// p
// .then(res =>{console.log(res)})
// .catch(error =>{console.error(error)})
