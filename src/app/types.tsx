export enum CoverStyle {
  CENTER = "Center",
  LEFT = "Left",
  RIGHT = "Right",
  TOP = "Top",
}

export enum CoverPosition {
  CENTER = "center",
  TOP = "top",
  BOTTOM = "bottom",
}
export type CoverImage = {
  name: string;
  url: string;
  style: CoverStyle;
  position: CoverPosition;
};

export type FontPolice = {
  font1: string;
  font2: string;
};
