export class OthertableElement {
  public inPort;
  public macDestination;
  public macSource;
  public bytes;
  public percentage;

  constructor(inPort, macDestination, macSource, bytes, totalBytes) {
    this.inPort = inPort;
    this.macDestination = macDestination;
    this.macSource = macSource;
    this.bytes = bytes;
    this.percentage = 100 * (bytes / totalBytes);
    this.percentage = Math.round(this.percentage * 100) / 100;
  }
}

