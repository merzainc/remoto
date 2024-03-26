//https://github.com/ZHANGBADAO/flash_light/blob/master/lib/pages/home/index.dart
import 'package:flutter/material.dart';
import 'package:remoto/core/colors.dart';
import 'package:torch_controller/torch_controller.dart';

class TorchLight extends StatefulWidget {
  const TorchLight({super.key});

  @override
  State<TorchLight> createState() => _TorchLightState();
}

class _TorchLightState extends State<TorchLight> with WidgetsBindingObserver {
  final torchController = TorchController();
  bool isActive = false;

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addObserver(this);
    _switchFlashlight();
  }

  @override
  void dispose() {
    WidgetsBinding.instance.removeObserver(this);
    super.dispose();
  }

  @override
  void didChangeAppLifecycleState(AppLifecycleState state) async {
    debugPrint('=================state = $state');
  }

  void _switchFlashlight() async {
    bool? active = await torchController.toggle();

    setState(() {
      isActive = active == true ? true : false;
    });
  }

  @override
  Widget build(BuildContext context) {
    return (FloatingActionButton(
        shape: const CircleBorder(),
        backgroundColor: RemotoColors.primary3,
        onPressed: _switchFlashlight,
        tooltip: 'Flashlight',
        child: isActive
            ? const Icon(
                Icons.flashlight_on,
                color: Colors.white,
              )
            : const Icon(
                Icons.flashlight_off,
                color: Colors.white,
              )));
  }
}
