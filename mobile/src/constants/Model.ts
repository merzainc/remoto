export class Activity {
  constructor(
    public id = 0,
    public start = '',
    public end = '',
    public distance = 0
  ) {}
}

export default class Point {
  constructor(
    public id = 0,
    public num = 0,
    public longitude = 0.0,
    public latitude = 0.0,
    public activity_id = 0
  ) {}
}
