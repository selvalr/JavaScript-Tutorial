function loadXMLDoc() {
    var xmlhttp = new XMLHttpRequest();
  
    xmlhttp.onreadystatechange = function () {
      console.log("xmlhttp.readyState", xmlhttp.readyState);
      if (xmlhttp.readyState == XMLHttpRequest.DONE) {
        // XMLHttpRequest.DONE == 4
        if (xmlhttp.status == 200) {
          console.log(xmlhttp.responseText);
          const responseData = JSON.parse(xmlhttp.responseText);
          const userData = responseData.data;
          let ul = "<ul>";
          userData.forEach((user) => {
            ul += `<li><img src='${user.avatar}'/><span>${
              user.first_name + " " + user.last_name
            }<span>,<span>${user.email}}</li>`;
          });
  
          ul += "</ul>";
  
          document.getElementById("myDiv").innerHTML = ul;
        } else if (xmlhttp.status == 400) {
          alert("There was an error 400");
        } else {
          alert("something else other than 200 was returned");
        }
      }
    };
  
    xmlhttp.open("GET", "https://reqres.in/api/users?page=1", true);
    xmlhttp.send();
  }