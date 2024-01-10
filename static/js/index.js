gtest = []
stest = []


$(document).ready(function () {
  gtest = GetData(sendData);
});

function GetData(sendData) {
  $.ajax({
    url: "/pull_sendData", // URL for Flask route
    method: "POST", // Use POST request to send data in the request body
    data: JSON.stringify({ JSData: sendData }), // Send the data as a JSON object
    contentType: "application/json", // Set content type to JSON
    success: function (data) {
      stest = data;
      console.log(data)
      //loadNews(data);
    },
  });
}