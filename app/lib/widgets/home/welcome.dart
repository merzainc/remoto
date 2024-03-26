import 'package:flutter/material.dart';
import 'package:flutter_feather_icons/flutter_feather_icons.dart';
import 'package:relative_scale/relative_scale.dart';
import 'package:remoto/core/colors.dart';
import '../../../gen/assets.gen.dart';

class WelcomeBar extends StatelessWidget {
  const WelcomeBar({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return RelativeBuilder(
      builder: (context, height, width, sy, sx) {
        return GestureDetector(
          onTap: () {},
          child: Container(
            padding: EdgeInsets.symmetric(
              horizontal: sx(20),
              vertical: sy(5),
            ),
            decoration: BoxDecoration(
              color: Colors.white,
              // border: Border.all(
              //   color: RemotoColors.border,
              //   width: sy(2),
              // ),
              // borderRadius: BorderRadius.circular(15),
              boxShadow: [
                BoxShadow(
                  color: RemotoColors.black.withOpacity(0.1),
                  blurRadius: 1,
                  offset: const Offset(0, 1),
                ),
              ],
            ),
            child: Row(
              children: [
                ImageIcon(
                  AssetImage(Assets.icons.account.path),
                  color: RemotoColors.black,
                  size: sy(15),
                ),
                SizedBox(
                  width: sx(20),
                ),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Row(
                        children: [
                          Text(
                            'Good Morning, ',
                            style: TextStyle(
                              color: RemotoColors.black,
                              fontWeight: FontWeight.w600,
                              fontSize: sy(9),
                            ),
                          ),
                          Text(
                            'Eric Sander',
                            style: TextStyle(
                              color: RemotoColors.black,
                              fontWeight: FontWeight.w700,
                              fontSize: sy(9),
                            ),
                          ),
                        ],
                      ),
                      Text(
                        'Tap to update account privacy',
                        style: TextStyle(
                          color: RemotoColors.secondary,
                          fontWeight: FontWeight.w400,
                          fontSize: sy(7),
                        ),
                      ),
                    ],
                  ),
                ),
                SizedBox(
                  width: sx(20),
                ),
              ],
            ),
          ),
        );
      },
    );
  }
}
