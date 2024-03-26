import 'package:flutter/material.dart';
import 'package:remoto/widgets/loader.dart';

class PatrolOrders extends StatelessWidget {
  const PatrolOrders({super.key});

  @override
  Widget build(BuildContext context) {
    return (Scaffold(
        appBar: AppBar(
          title: const Text(
            'Patrol Orders',
            style: TextStyle(
                fontSize: 17, color: Colors.white, fontWeight: FontWeight.w700),
          ),
        ),
        body: const Center(
          child: LoaderWidget(),
        )));
  }
}
