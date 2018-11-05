export class DnstableElement {

  public ipDestination;
  public ipSource;
  public bytes;
  public percentage;

  constructor(ipDestination, ipSource, bytes, totalBytes) {
    this.ipDestination = ipDestination;
    this.ipSource = ipSource;
    this.bytes = bytes;
    this.percentage = 100 * (bytes / totalBytes);
    this.percentage = Math.round(this.percentage * 100) / 100;
  }
}
