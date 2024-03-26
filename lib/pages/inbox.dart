import 'package:flutter/material.dart';
import 'package:remoto/core/colors.dart';

class MessagePage extends StatefulWidget {
  const MessagePage({super.key});

  @override
  State<MessagePage> createState() => _MessagePageState();
}

class _MessagePageState extends State<MessagePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: RemotoColors.gray3,
      appBar: AppBar(
          title: const Text(
        'Notifications',
        style: TextStyle(
            fontSize: 17, color: Colors.white, fontWeight: FontWeight.w700),
      )),
      body: const Center(
        child: Text('Notifications Page'),
      ),
    );
  }
}
