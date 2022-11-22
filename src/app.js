/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let domainName = [];
  let pro = ["the", "our", "new"];
  let adj = ["great", "small", "awesome"];
  let noun = ["peasant", "king", "fool"];
  let dom = [".com", ".net", ".org"];
  for (let a = 0; a < pro.length; a++) {
    for (let b = 0; b < adj.length; b++) {
      for (let c = 0; c < noun.length; c++) {
        for (let d = 0; d < dom.length; d++) {
          domainName.push("  " + pro[a] + adj[b] + noun[c] + dom[d]);
        }
      }
    }
  }
  document.getElementById("domain").innerHTML = domainName;
};
