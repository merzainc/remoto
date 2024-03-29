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
      backgroundColor: RemotoColors.background,
      appBar: AppBar(
          title: const Text(
        'Notifications',
        style: TextStyle(
            fontSize: 17, color: Colors.white, fontWeight: FontWeight.w700),
      )),
      body: const Center(
        child: Text(
          'Create folders for different groups of chats and quickly switch between them.',
          style: TextStyle(color: RemotoColors.primaryText, fontSize: 14),
        ),
      ),
    );
  }
}
