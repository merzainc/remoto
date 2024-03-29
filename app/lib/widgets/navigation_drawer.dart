
import 'package:flutter/material.dart';
import 'package:flutter_feather_icons/flutter_feather_icons.dart';
import 'package:heroicons/heroicons.dart';
import 'package:remoto/core/colors.dart';
import 'package:remoto/gen/assets.gen.dart';
import 'package:remoto/pages/account.dart';
import 'package:remoto/pages/inbox.dart';
import 'package:remoto/pages/patrol_orders.dart';
import 'package:remoto/pages/reports.dart';

class NavDrawer extends StatelessWidget {
  const NavDrawer({super.key});

  @override
  Widget build(BuildContext context) => Drawer(
        child: SingleChildScrollView(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: <Widget>[
              _buildHeader(context),
              _buildMenuItems(context),
            ],
          ),
        ),
      );
}

Widget _buildHeader(BuildContext context) => Container(
    padding: EdgeInsets.only(top: MediaQuery.of(context).padding.top),
    child: Padding(
        padding: const EdgeInsets.only(left: 16, top: 28, right: 16),
        child: GestureDetector(
          onTap: () {
            Navigator.pop(context);
            Navigator.of(context).push(
                MaterialPageRoute(builder: (context) => const PatrolOrders()));
          },
          child: Row(
            children: [
              Container(
                height: 35,
                width: 35,
                decoration: const BoxDecoration(
                    image: DecorationImage(
                        image: AssetImage('assets/images/user.png')),
                    shape: BoxShape.circle),
              ),
              const SizedBox(
                width: 20,
              ),
              const Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Row(
                      children: [
                        Text(
                          'Mataga Ralph',
                          style: TextStyle(
                              color: RemotoColors.bodyText,
                              fontWeight: FontWeight.w700,
                              fontSize: 16),
                        ),
                        Icon(
                          FeatherIcons.chevronRight,
                          color: RemotoColors.secondary,
                          size: 13,
                        ),
                      ],
                    ),
                    Padding(
                        padding: EdgeInsets.only(top: 6),
                        child: Row(
                          children: [
                            Text(
                              'Force ID: ',
                              style: TextStyle(
                                  fontSize: 12, fontWeight: FontWeight.w600),
                            ),
                            Text(
                              'HST172I',
                              style: TextStyle(
                                  fontSize: 12,
                                  fontWeight: FontWeight.w400,
                                  color: RemotoColors.secondary),
                            )
                          ],
                        ))
                  ],
                ),
              ),
            ],
          ),
        )));

Widget _buildMenuItems(BuildContext context) => Container(
    padding: const EdgeInsets.only(top: 14, left: 6),
    child: Wrap(
      children: [
        ListTile(
          visualDensity: const VisualDensity(horizontal: 0, vertical: -3),
          leading: ImageIcon(
            AssetImage(Assets.icons.messages.path),
            color: RemotoColors.secondary,
            size: 20,
          ),
          title: const Text(
            'Notifications',
            style: TextStyle(fontSize: 14, color: RemotoColors.bodyText),
          ),
          onTap: () {
            Navigator.pop(context);
            Navigator.of(context).push(
                MaterialPageRoute(builder: (context) => const MessagePage()));
          },
        ),
        ListTile(
          visualDensity: const VisualDensity(horizontal: 0, vertical: -3),
          leading: ImageIcon(
            AssetImage(Assets.icons.destination.path),
            size: 20,
            color: RemotoColors.secondary,
          ),
          title: const Text(
            'Patrol Orders',
            style: TextStyle(fontSize: 14, color: RemotoColors.bodyText),
          ),
          onTap: () {
            Navigator.pop(context);
            Navigator.of(context).push(
                MaterialPageRoute(builder: (context) => const PatrolOrders()));
          },
        ),
        ListTile(
          visualDensity: const VisualDensity(horizontal: 0, vertical: -3),
          leading: const HeroIcon(
            HeroIcons.documentText,
            style: HeroIconStyle.outline, // Outlined icons are used by default.
            color: RemotoColors.secondary,
            size: 20,
          ),
          title: const Text(
            'Reports',
            style: TextStyle(
              fontSize: 14,
            ),
          ),
          onTap: () {
            Navigator.pop(context);
            Navigator.of(context).push(
                MaterialPageRoute(builder: (context) => const ReportsPage()));
          },
        ),
        ListTile(
          visualDensity: const VisualDensity(horizontal: 0, vertical: -3),
          leading: const HeroIcon(
            HeroIcons.cog6Tooth,
            style: HeroIconStyle.outline, // Outlined icons are used by default.
            color: RemotoColors.secondary,
            size: 20,
          ),
          title: const Text(
            'Settings',
            style: TextStyle(fontSize: 14, color: RemotoColors.bodyText),
          ),
          onTap: () {
            //closes navigation before drawer
            Navigator.pop(context);
            Navigator.of(context).push(
                MaterialPageRoute(builder: (context) => const ProfilePage()));
          },
        ),
        ListTile(
          visualDensity: const VisualDensity(horizontal: 0, vertical: -3),
          leading: const HeroIcon(
            HeroIcons.arrowRightStartOnRectangle,
            style: HeroIconStyle.outline, // Outlined icons are used by default.
            color: RemotoColors.secondary,
            size: 20,
          ),
          title: const Text(
            'Sign out',
            style: TextStyle(
              fontSize: 14,
            ),
          ),
          onTap: () {},
        )
      ],
    ));
