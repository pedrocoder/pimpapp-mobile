import { Observable } from 'rxjs/Observable';
import { Geolocation } from '@ionic-native/geolocation';
import { LatLng, Geocoder } from '@ionic-native/google-maps';
// import { LatLng, Geocoder, GeocoderResult } from '@ionic-native/google-maps';


export class MapUtils{
    private geolocation: Geolocation;
    public geocode: Geocoder;
    public location: any;

    constructor (){
        this.geocode = new Geocoder();
        this.geolocation = new Geolocation();
    }

    getCurrentLocation(){
        return Observable.create(observable =>{
            let options = {timeout: 1000, enableHightAccuracy: true};

            this.geolocation.getCurrentPosition(options)
                .then(
                    resp => {
                        let lat = resp.coords.latitude;
                        let lng = resp.coords.longitude;
                        let location: LatLng = new LatLng(lat, lng);
                        observable.next(location);
                    },
                    (error) => {
                        console.log('Error on getting current location: ' + error);
                    });
        });
    }

    getCurrentAddress(){
        
        this.getCurrentLocation().subscribe(location =>{
            let obj = { position: { lat: location.lat, lng: location.lng } };
            this.geocode.geocode(obj).then(data => {
                return data.locale;
            }).catch(err => {
                console.log(err);
            });
        });
    }
}