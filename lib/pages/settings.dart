import 'package:flutter/material.dart';
import 'package:remoto/core/colors.dart';

class SettingsPage extends StatefulWidget {
  const SettingsPage({super.key});

  @override
  State<SettingsPage> createState() => _SettingsPageState();
}

class _SettingsPageState extends State<SettingsPage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
            title: const Text(
          'Settings',
          style: TextStyle(
              fontSize: 17, color: Colors.white, fontWeight: FontWeight.w700),
        )),
        body: const SettingsList());
  }
}

class SettingsList extends StatelessWidget {
  const SettingsList({super.key});

  @override
  Widget build(BuildContext context) {
    return ListView(
      children: [
        ListTile(
          title: const Text('Account'),
          leading: const Icon(Icons.account_circle),
          onTap: () {
            // Handle account settings
          },
        ),
        const Divider(),
        ListTile(
          title: const Text('Notifications'),
          leading: const Icon(Icons.notifications),
          onTap: () {
            // Handle notification settings
          },
        ),
        const Divider(),
        ListTile(
          title: const Text('Privacy and Security'),
          leading: const Icon(Icons.lock),
          onTap: () {
            // Handle privacy and security settings
          },
        ),
        const Divider(),
        ListTile(
          title: const Text('Data and Storage'),
          leading: const Icon(Icons.data_usage),
          onTap: () {
            // Handle data and storage settings
          },
        ),
        const Divider(),
        ListTile(
          title: const Text('Help and Support'),
          leading: const Icon(Icons.help),
          onTap: () {
            // Handle help and support settings
          },
        ),
        const Divider(),
        ListTile(
          title: const Text('About'),
          leading: const Icon(Icons.info),
          onTap: () {
            // Handle about settings
          },
        ),
        const Divider(),
      ],
    );
  }
}
