import 'package:flutter/material.dart';
import 'package:relative_scale/relative_scale.dart';
import 'package:remoto/gen/assets.gen.dart';
import 'package:remoto/pages/inbox.dart';
import 'package:remoto/widgets/navigation_drawer.dart';
import 'package:remoto/widgets/torch_light.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';
import 'package:geolocator/geolocator.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key, required this.title});

  final String title;

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> with WidgetsBindingObserver {
  Future<Position> _determinePosition() async {
    bool serviceEnabled;
    LocationPermission permission;
    final LatLng position;

    serviceEnabled = await Geolocator.isLocationServiceEnabled();
    if (!serviceEnabled) {
      return Future.error('Location services are disabled');
    }
    permission = await Geolocator.checkPermission();
    if (permission == LocationPermission.denied) {
      permission = await Geolocator.requestPermission();
      if (permission == LocationPermission.denied) {
        return Future.error('Location permissions are denied');
      }
    }
    if (permission == LocationPermission.deniedForever) {
      return Future.error('Location permissions are required for this app');
    }
    return await Geolocator.getCurrentPosition();
  }

  // void _liveLocation() {
  //   LocationSettings locationSettings = const LocationSettings(
  //     accuracy: LocationAccuracy.bestForNavigation,
  //     distanceFilter: 5,
  //   );

  //   Geolocator.getPositionStream(locationSettings: locationSettings)
  //       .listen((Position position) {
  //     lat = position.latitude.toString();
  //     lng = position.longitude.toString();

  //     setState(() {
  //       position = LatLng(lat as double, lng as double) as Position;
  //     });
  //   });
  // }

  late String lat;
  late String lng;

  final Map<String, Marker> _markers = {};
  Future<void> _onMapCreated(GoogleMapController controller) async {
    final userLocation = await _determinePosition();
    // final googleOffices = await locations.getGoogleOffices();
    setState(() {
      _markers.clear();
      final marker = Marker(
          markerId: const MarkerId('ralph'),
          position: LatLng(userLocation.latitude, userLocation.longitude),
          infoWindow:
              const InfoWindow(title: 'Ralph Mataga', snippet: 'N Block'));
      _markers['Aarhus'] = marker;
    });
  }

  @override
  Widget build(BuildContext context) {
    return RelativeBuilder(builder: (context, height, width, sy, sx) {
      return (Scaffold(
          drawer: const NavDrawer(),
          appBar: AppBar(
            title: Text(
              'Home',
              style: const TextStyle(
                fontSize: 18,
                color: Colors.white,
              ),
            ),
            actions: <Widget>[
              IconButton(
                icon: ImageIcon(
                  AssetImage(Assets.icons.messages.path),
                  size: 22,
                  color: Colors.white,
                ),
                onPressed: () {
                  Navigator.of(context).push(MaterialPageRoute(
                      builder: (context) => const MessagePage()));
                },
              )
            ],
          ),
          body: GoogleMap(
            onMapCreated: _onMapCreated,
            initialCameraPosition: const CameraPosition(
              target: LatLng(0, 0),
              zoom: 2,
            ),
            markers: _markers.values.toSet(),
          ),
          floatingActionButton: const TorchLight()));
    });
  }
}
