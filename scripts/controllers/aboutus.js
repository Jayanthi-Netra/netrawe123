if (typeof ActiveXObject != "undefined")                             // IE
        var req = new ActiveXObject("Microsoft.XMLHTTP");
    else                                                                             // Other browsers
        var req = new XMLHttpRequest();

    req.open('GET', 'hw1.txt', false);
    req.send(null);
    s = req.responseText;

    var myArray = s.split(","); //if images are comma(,) seperated then just split it from comma
    var index = 0;

    var position = 0;
    var result = '';
    function nextItem() {
    	for(i=0;i<myArray.length;i++){
/*             result = result + "<img style=\"float:left;width:300px;height:300px\"src=" + myArray[i] + "/>"; */
            result = result + "<div class=\"col-lg-4 col-md-6\"><div class=\"gallery-item wow fadeInUp\" id=\"images\"><a href=\"img/gallery/" + myArray[i] + "\" class=\"gallery-popup\"><img src=\"img/gallery/" + myArray[i] + "\" alt=\"\"></a></div></div>";

    }
        displayList.innerHTML = result;
        
        var request = new XMLHttpRequest();
        request.open('POST', 'https://krhke9v958.execute-api.us-west-2.amazonaws.com/production/netradownload', true);
        request.onload = function () {
          // Begin accessing JSON data here
          var data = JSON.parse(this.response);

          if (request.status >= 200 && request.status < 400) {
           // data.forEach(movie => {
              console.log(data.statusCode);
            //});
          } else {
            console.log('error');
          }
        }
        request.send();
    };