import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:relative_scale/relative_scale.dart';
import 'package:remoto/core/colors.dart';

class HomeActions extends StatelessWidget {
  const HomeActions({
    super.key,
  });

  @override
  Widget build(BuildContext context) {
    return RelativeBuilder(
      builder: (context, height, width, sy, sx) {
        return SizedBox(
          height: sy(20),
          // width: context.width,
          child: ListView(
            scrollDirection: Axis.horizontal,
            children: [
              Container(
                padding: EdgeInsets.symmetric(
                  horizontal: sx(10),
                  vertical: sy(2),
                ),
                decoration: BoxDecoration(
                  color: RemotoColors.primary,
                  border: Border.all(
                    color: RemotoColors.primary,
                    width: sy(1),
                  ),
                  borderRadius: BorderRadius.circular(7),
                ),
                child: Row(
                  children: [
                    Icon(
                      CupertinoIcons.sort_down,
                      color: Colors.white.withOpacity(0.8),
                      size: sy(13),
                    ),
                    SizedBox(
                      width: sx(5),
                    ),
                    Text(
                      'Button 1',
                      style: TextStyle(
                        color: Colors.white,
                        fontWeight: FontWeight.w600,
                        fontSize: sy(9),
                      ),
                    ),
                  ],
                ),
              ),
              SizedBox(
                width: sx(20),
              ),

              // SizedBox(
              //   width: sx(20),
              // ),
              Container(
                padding: EdgeInsets.symmetric(
                  horizontal: sx(10),
                  vertical: sy(2),
                ),
                decoration: BoxDecoration(
                  color: RemotoColors.danger,
                  border: Border.all(
                    color: RemotoColors.danger,
                    width: sy(1),
                  ),
                  borderRadius: BorderRadius.circular(7),
                ),
                child: Row(
                  children: [
                    Icon(
                      Icons.call,
                      color: Colors.white.withOpacity(0.8),
                      size: sy(13),
                    ),
                    SizedBox(
                      width: sx(5),
                    ),
                    Text(
                      'Emergency',
                      style: TextStyle(
                        color: Colors.white,
                        fontWeight: FontWeight.w600,
                        fontSize: sy(9),
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        );
      },
    );
  }
}
