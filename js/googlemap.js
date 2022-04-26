function mapInit(){
  var PathData  = [
    [30.262319, 120.248252],
    [30.246426, 120.235803],
    [30.224886, 120.263543],
    [30.249505, 120.280194],
  ];
  var mapobj = document.getElementById('googleMap');
  var hangzhou = new google.maps.LatLng(30.245560, 120.215357);
  var mapOptions = {
    zoom:10,
    center:hangzhou,
    mapTypeId: google.maps.MapTypeId.ROADMAP

  };
  var myMap =new google.maps.Map(mapobj,mapOptions);

  var marker = new google.maps.Marker({
    title:"Welcome Hangzhou",
    position:hangzhou,
    map:myMap,
    draggable:true,
    animation: null,
    icon:'./images/hangzhou.png'

  });
  var alertBody = "Welcome to Hangzhou!" ;
  var infowindow = new google.maps.InfoWindow({
    content:alertBody,
  });
  marker.addListener("click",() => {
    marker.getAnimation() !==null?marker.setAnimation(null):marker.setAnimation(google.maps.Animation.BOUNCE);
    infowindow.open({
      map:myMap,
      anchor:marker
    });
  });





  var path = [];
  var bounds = new google.maps.LatLngBounds();
  var center={lat:30.253714, lng:120.260108};
  console.log(center);
  bounds.extend(center);
  for (var i in PathData)
  {
      var p = PathData[i];
      var latlng = new google.maps.LatLng(p[0], p[1]);
      console.log(latlng);
      path.push(latlng);
      bounds.extend(latlng);
  }
  var poly = new google.maps.Polygon({
      paths: path,
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 3,
      fillColor: '#FF0000',
      fillOpacity: 0.1
  });
  poly.setMap(myMap);


  myMap.fitBounds(bounds);

}



google.maps.event.addDomListener(window, 'load', mapInit);

