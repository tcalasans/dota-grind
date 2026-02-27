export interface LaneTimings {
  '1': number;
  '2': number;
  '3': number;
}

export interface TeamTimings {
  safelane: LaneTimings;
  offlane: LaneTimings;
  midlane: LaneTimings;
}
