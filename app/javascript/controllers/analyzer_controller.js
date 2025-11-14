import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["left", "right", "analyzer"];

  randomize() {
    this.disableButton();
    this.randomAnimation();
  }

  disableButton() {
    this.analyzerTarget.disabled = true;
    this.analyzerTarget.classList.add("bg-gray-300");
    this.analyzerTarget.classList.add("text-gray-500");
    this.analyzerTarget.classList.add("border-gray-400");
  }

  randomAnimation() {
    this.initializeTargets();
    this.intervalId = setInterval(() => {
      this.leftTarget.classList.toggle("bg-red-400");
      this.leftTarget.classList.toggle("bg-green-400");
      this.rightTarget.classList.toggle("bg-red-400");
      this.rightTarget.classList.toggle("bg-green-400");
    }, 100);

    setTimeout(() => {
      clearInterval(this.intervalId);
      this.makeDecision();
      this.enableButton();
    }, 1000);
  }

  initializeTargets() {
    this.leftTarget.classList.add("bg-green-400");
    this.leftTarget.classList.remove("bg-red-400");
    this.rightTarget.classList.add("bg-red-400");
    this.rightTarget.classList.remove("bg-green-400");
  }

  makeDecision() {
    this.leftTarget.classList.remove("bg-red-400");
    this.leftTarget.classList.remove("bg-green-400");
    this.rightTarget.classList.remove("bg-red-400");
    this.rightTarget.classList.remove("bg-green-400");

    if (Math.random() >= 0.5) {
      this.leftTarget.classList.add("bg-green-400");
    } else {
      this.leftTarget.classList.add("bg-red-400");
    }

    if (Math.random() >= 0.5) {
      this.rightTarget.classList.add("bg-green-400");
    } else {
      this.rightTarget.classList.add("bg-red-400");
    }
  }

  enableButton() {
    this.analyzerTarget.classList.remove("bg-gray-300");
    this.analyzerTarget.classList.remove("text-gray-500");
    this.analyzerTarget.classList.remove("border-gray-400");
    this.analyzerTarget.disabled = false;
  }
}
