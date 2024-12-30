import {SafeUrl} from "@angular/platform-browser";

export class LinkModel {
  repository?: string;
  demo?: string;
  image?: string;

  constructor(
    repository?: string,
    demo?: string,
    image?: string,
  ) {
    this.repository = repository;
    this.demo = demo;
    this.image = image;
  }
}
