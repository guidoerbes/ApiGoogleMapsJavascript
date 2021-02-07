function iniciarMap(){
    var coord = {lat:-33.6757835 , lng:-59.6628664};
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom: 10,
        center: coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map: map
    });


}