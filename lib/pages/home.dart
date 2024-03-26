import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:remoto/pages/inbox.dart';
import 'package:remoto/widgets/navigation_drawer.dart';
import 'package:remoto/widgets/torch_light.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key, required this.title});

  final String title;

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> with WidgetsBindingObserver {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        drawer: const NavDrawer(),
        appBar: AppBar(
          title: Text(
            widget.title,
            style: const TextStyle(
                fontSize: 18, color: Colors.white, fontWeight: FontWeight.w700),
          ),
          actions: <Widget>[
            IconButton(
              icon: const Icon(CupertinoIcons.question_circle,
                  color: Colors.white, size: 24),
              onPressed: () {},
            ),
            IconButton(
              icon: const Icon(CupertinoIcons.bell,
                  color: Colors.white, size: 22),
              onPressed: () {
                Navigator.of(context).push(MaterialPageRoute(
                    builder: (context) => const MessagePage()));
              },
            )
          ],
        ),
        body: const Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: <Widget>[],
          ),
        ),
        floatingActionButton: const TorchLight());
  }
}
