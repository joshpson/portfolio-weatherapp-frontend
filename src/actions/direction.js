export const cardinalDirection = degree => {
  switch (true) {
    case degree < 11.25:
      return "North";
    case degree < 33.75:
      return "N Northeast";
    case degree < 56.25:
      return "Northeast";
    case degree < 78.75:
      return "E Northeast";
    case degree < 101.25:
      return "East";
    case degree < 123.75:
      return "E Southeast";
    case degree < 146.25:
      return "Southeast";
    case degree < 168.75:
      return "S Southeast";
    case degree < 191.25:
      return "South";
    case degree < 213.75:
      return "S Southwest";
    case degree < 236.25:
      return "Southwest";
    case degree < 258.75:
      return "W Southwest";
    case degree < 281.25:
      return "West";
    case degree < 303.75:
      return "W Northwest";
    case degree < 326.25:
      return "Northwest";
    case degree < 348.75:
      return "N Northwest";
    case degree <= 360:
      return "North";
    default:
      return "n/a";
  }
};

