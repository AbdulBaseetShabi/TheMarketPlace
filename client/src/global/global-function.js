const API_PREFIX = "http://localhost:5000";

async function makeAPICall(endpoint, db, data, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
      if (xmlHttp.readyState === 4) {
        if (xmlHttp.status === 201) {
          callback(JSON.parse(xmlHttp.responseText));
        } else {
          callback(null);
        }
      }
    };
    xmlHttp.open("POST", `${API_PREFIX}/${endpoint}?db=${db}`, true); // true for asynchronous
    xmlHttp.setRequestHeader("Content-Type", "application/json");
    xmlHttp.send(JSON.stringify(data));
    
  }

module.exports = {
    makeAPICall,
}