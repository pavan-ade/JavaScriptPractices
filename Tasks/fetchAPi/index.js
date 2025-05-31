let divTag = document.getElementById("restapi");
let restApi = "https://gorest.co.in/public/v2/posts";
let tableTag = `<table>
                    <tr>
                        <th>Id</th>
                        <th>User Id</th>
                        <th>Title</th>
                        <th>Body</th>
                        <th>Actions</th>
                    </tr>
                `;

fetch(restApi)
  .then((resp) => {
    if (resp.ok) {
      return resp.json();
    } else {
      throw new Error("'Network response was not ok");
    }
  })
  .then((data) => {
    console.log(typeof data);
    for (let user of data) {
      console.log(user.id);
      tableTag += "<tr>";
      for (let user_details in user) {
        tableTag += "<td>";
        tableTag += user[user_details];
        console.log(user[user_details]);
        tableTag += "</td>";
      }
      tableTag += ` <td>
      <i  class="material-icons add-icon ">add</i>
       <i class="material-icons" >delete</i>
       <i class="material-icons" >edit</i>
        </td>
        `;
      tableTag += "</tr>";
    }
    tableTag += "</table>";
    divTag.innerHTML = tableTag;
  })
  .catch((error) => {
    console.log(error);
  });
