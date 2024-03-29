import 'package:flutter/material.dart';
import 'package:relative_scale/relative_scale.dart';
import 'package:remoto/core/colors.dart';

class ProfilePage extends StatefulWidget {
  const ProfilePage({super.key});

  @override
  State<ProfilePage> createState() => _ProfilePageState();
}

class _ProfilePageState extends State<ProfilePage> {
  final bool _isSwitched = false;
  bool light = true;
  @override
  Widget build(BuildContext context) {
    return RelativeBuilder(
      builder: (context, height, width, sy, sx) {
        return (Scaffold(
          backgroundColor: RemotoColors.background,
          appBar: AppBar(
              title: const Text(
            'Settings',
            style: TextStyle(
                fontSize: 18, color: Colors.white, fontWeight: FontWeight.w700),
          )),
          body: Wrap(
            children: [
              Container(
                  padding: EdgeInsets.only(
                    left: sx(20),
                    top: sy(5),
                    bottom: sy(5),
                    // horizontal: sx(20),
                    // vertical: sy(5),
                  ),
                  decoration: BoxDecoration(
                    color: Colors.white,
                    boxShadow: [
                      BoxShadow(
                        color: RemotoColors.black.withOpacity(0.1),
                        blurRadius: 1,
                        offset: const Offset(0, 1),
                      ),
                    ],
                  ),
                  child: const Wrap(
                    children: [
                      Text(
                        'ACCOUNT',
                        style: TextStyle(
                            fontSize: 16,
                            color: RemotoColors.primaryText,
                            fontWeight: FontWeight.w600),
                      ),
                      ListTile(
                        dense: true,
                        visualDensity:
                            VisualDensity(horizontal: 0, vertical: -4),
                        contentPadding: EdgeInsets.only(left: 0.0, top: 0),
                        title: Text(
                          'Push Notifications',
                          style: TextStyle(
                            fontSize: 15,
                          ),
                        ),
                        subtitle: Text(
                          'Enable this option to avoid missing orders',
                          style: TextStyle(color: RemotoColors.primaryText),
                        ),
                      ),
                      Divider(
                        color: RemotoColors.border,
                      ),
                      ListTile(
                        dense: true,
                        visualDensity:
                            VisualDensity(horizontal: 0, vertical: -4),
                        contentPadding: EdgeInsets.only(left: 0.0, top: 0),
                        title: Text(
                          'Distance Units',
                          style: TextStyle(
                            fontSize: 15,
                          ),
                        ),
                        subtitle: Text(
                          'Prefer other distance metric units',
                          style: TextStyle(color: RemotoColors.primaryText),
                        ),
                      ),
                    ],
                  )),
              Padding(
                padding:
                    EdgeInsets.symmetric(horizontal: sx(10), vertical: sy(10)),
                child: const Text(
                  'We gather required diagnostic data to keep Remoto secure, up-to-date and performing as expected on the device it is installed.',
                  style: TextStyle(color: RemotoColors.primaryText),
                ),
              ),
              Container(
                  padding: EdgeInsets.only(
                    left: sx(20),
                    top: sy(5),
                    bottom: sy(5),
                    // horizontal: sx(20),
                    // vertical: sy(5),
                  ),
                  decoration: BoxDecoration(
                    color: Colors.white,
                    boxShadow: [
                      BoxShadow(
                        color: RemotoColors.black.withOpacity(0.1),
                        blurRadius: 1,
                        offset: const Offset(0, 1),
                      ),
                    ],
                  ),
                  child: const Wrap(
                    children: [
                      Text(
                        'GENERAL',
                        style: TextStyle(
                            fontSize: 16,
                            color: RemotoColors.primaryText,
                            fontWeight: FontWeight.w600),
                      ),
                      ListTile(
                        dense: true,
                        visualDensity:
                            VisualDensity(horizontal: 0, vertical: -4),
                        contentPadding: EdgeInsets.only(left: 0.0, top: 0),
                        title: Text(
                          'Push Notifications',
                          style: TextStyle(
                            fontSize: 15,
                          ),
                        ),
                        subtitle: Text(
                          'Enable this option to avoid missing orders',
                          style: TextStyle(color: RemotoColors.primaryText),
                        ),
                      ),
                      Divider(
                        color: RemotoColors.border,
                      ),
                      ListTile(
                        dense: true,
                        visualDensity:
                            VisualDensity(horizontal: 0, vertical: -4),
                        contentPadding: EdgeInsets.only(left: 0.0, top: 0),
                        title: Text(
                          'Distance Units',
                          style: TextStyle(
                            fontSize: 15,
                          ),
                        ),
                        subtitle: Text(
                          'Prefer other distance metric units',
                          style: TextStyle(color: RemotoColors.primaryText),
                        ),
                      ),
                    ],
                  ))
            ],
          ),
        ));
      },
    );
  }
}
