import 'package:flutter/material.dart';

class ReportsPage extends StatelessWidget {
  const ReportsPage({super.key});
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          'Reports',
          style: TextStyle(
              fontSize: 17, color: Colors.white, fontWeight: FontWeight.w700),
        ),
      ),
    );
  }
}
