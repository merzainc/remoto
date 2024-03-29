import 'package:flutter/material.dart';
import 'package:permission_handler/permission_handler.dart';
import './core/colors.dart';
import 'package:remoto/pages/home.dart';
import 'package:torch_controller/torch_controller.dart';

void main() {
  TorchController().initialize();
  requestNotificationPermissions();
  runApp(const MyApp());
}

Future<void> requestNotificationPermissions() async {
  final PermissionStatus status = await Permission.notification.status;
  if (status.isGranted) {
    return;
  } else if (status.isDenied) {
    await Permission.notification.request();
  } else if (status.isPermanentlyDenied) {
    // Notification permissions permanently denied, open app settings
    await openAppSettings();
  }
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Remoto',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
          appBarTheme: const AppBarTheme(
              backgroundColor: RemotoColors.primary3,
              elevation: 0,
              iconTheme: IconThemeData(color: Colors.white)),
          scaffoldBackgroundColor: RemotoColors.background,
          drawerTheme: const DrawerThemeData(
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.zero)),
          iconTheme: const IconThemeData(color: Colors.white),
          useMaterial3: true,
          fontFamily: 'Inter'),
      home: const HomePage(title: 'Remoto'),
    );
  }
}
