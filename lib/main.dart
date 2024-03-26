import 'package:flutter/material.dart';
import './core/colors.dart';
import 'package:remoto/pages/home.dart';
import 'package:torch_controller/torch_controller.dart';

void main() {
  TorchController().initialize();
  runApp(const MyApp());
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
              backgroundColor: RemotoColors.primary,
              elevation: 0,
              iconTheme: IconThemeData(color: Colors.white)),
          scaffoldBackgroundColor: RemotoColors.body,
          drawerTheme: const DrawerThemeData(
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.zero)),
          iconTheme: const IconThemeData(color: Colors.white),
          colorScheme: ColorScheme.fromSeed(seedColor: RemotoColors.primary),
          useMaterial3: true,
          fontFamily: 'Inter'),
      home: const HomePage(title: 'Remoto'),
    );
  }
}
