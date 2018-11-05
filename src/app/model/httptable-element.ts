export class HttptableElement {

  public ipDestination;
  public ipSource;
  public bytes;
  public percentage;
  public active;

  constructor(ipDestination, ipSource, bytes, totalBytes) {
    this.ipDestination = ipDestination;
    this.ipSource = ipSource;
    this.bytes = bytes;
    this.percentage = 100 * (bytes / totalBytes);
    this.percentage = Math.round(this.percentage * 100) / 100;
    this.active = true;
  }

  changeState() {
    this.active = !this.active;
  }
}
