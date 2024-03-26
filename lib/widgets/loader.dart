import 'dart:io';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:relative_scale/relative_scale.dart';
import 'package:remoto/core/colors.dart';

class LoaderWidget extends StatelessWidget {
  const LoaderWidget({
    this.color = RemotoColors.secondary,
    super.key,
  });

  final Color color;

  @override
  Widget build(BuildContext context) {
    return RelativeBuilder(
      builder: (context, height, width, sy, sx) {
        return Platform.isAndroid
            ? SizedBox(
                height: sy(15),
                width: sy(15),
                child: CircularProgressIndicator(
                  valueColor: AlwaysStoppedAnimation(
                    color,
                  ),
                ),
              )
            : CupertinoActivityIndicator(
                radius: sy(8),
                color: color,
              );
      },
    );
  }
}
