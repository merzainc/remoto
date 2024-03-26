import 'package:flutter/material.dart';
import 'package:relative_scale/relative_scale.dart';
import 'package:remoto/core/colors.dart';
import 'package:remoto/gen/assets.gen.dart';

class ProfilePage extends StatefulWidget {
  const ProfilePage({super.key});

  @override
  State<ProfilePage> createState() => _ProfilePageState();
}

class _ProfilePageState extends State<ProfilePage> {
  @override
  Widget build(BuildContext context) {
    return RelativeBuilder(
      builder: (context, height, width, sy, sx) {
        return (Scaffold(
          appBar: AppBar(
              title: const Text(
            'Account',
            style: TextStyle(
                fontSize: 17, color: Colors.white, fontWeight: FontWeight.w700),
          )),
          body: Container(
              padding: EdgeInsets.symmetric(
                horizontal: sx(20),
                vertical: sy(10),
              ),
              decoration: BoxDecoration(
                color: Colors.white,
                // border: Border.all(
                //   color: RemotoColors.body,
                //   width: sy(1),
                // ),
                boxShadow: [
                  BoxShadow(
                    color: RemotoColors.black.withOpacity(0.1),
                    blurRadius: 1,
                    offset: const Offset(0, 1),
                  ),
                ],
                // borderRadius: BorderRadius.circular(10),
              ),
              child: Wrap(
                children: [
                  Container(
                    padding: EdgeInsets.only(bottom: sy(7)),
                    child: const Text(
                      'Patrol Orders',
                      style: TextStyle(
                          fontSize: 14,
                          color: RemotoColors.black,
                          fontWeight: FontWeight.w600),
                    ),
                  ),
                  Row(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Column(
                        children: [
                          ImageIcon(
                            AssetImage(Assets.icons.destination.path),
                            color: RemotoColors.secondary,
                            size: sy(10),
                          ),
                          SizedBox(
                            height: sy(23),
                          ),
                          ImageIcon(
                            AssetImage(Assets.icons.destination.path),
                            color: RemotoColors.secondary,
                            size: sy(10),
                          ),
                        ],
                      ),
                      SizedBox(
                        width: sx(10),
                      ),
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(
                                  'Patrol Location',
                                  style: TextStyle(
                                    color: RemotoColors.secondary,
                                    fontWeight: FontWeight.w400,
                                    fontSize: sy(7),
                                  ),
                                ),
                                Text(
                                  'S Block, 5:54 PM',
                                  style: TextStyle(
                                    color: RemotoColors.black,
                                    fontWeight: FontWeight.w700,
                                    fontSize: sy(9),
                                  ),
                                ),
                              ],
                            ),
                            SizedBox(
                              height: sy(10),
                            ),
                            Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(
                                  'Patrol Location',
                                  style: TextStyle(
                                    color: RemotoColors.secondary,
                                    fontWeight: FontWeight.w400,
                                    fontSize: sy(7),
                                  ),
                                ),
                                Text(
                                  'Small Gate, 10:30 AM',
                                  style: TextStyle(
                                    color: RemotoColors.black,
                                    fontWeight: FontWeight.w700,
                                    fontSize: sy(9),
                                  ),
                                ),
                              ],
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                ],
              )),
        ));
      },
    );
  }

  // @override
  // Widget build(BuildContext context) {
  //   return Scaffold(
  //     appBar: AppBar(
  //         title: const Text(
  //       'Account',
  //       style: TextStyle(
  //           fontSize: 17, color: Colors.white, fontWeight: FontWeight.w700),
  //     )),
  //     body: const Center(
  //       child: Text('Profile Page'),
  //     ),
  //   );
  // }
}
