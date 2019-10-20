import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular Material Calculator";
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  operators = ["+", "0", "-", "*", "/", "%"];
  display = "";
  a = 0;
  b = 0;
  total = 0;

  clear() {
    this.display = "";
  }

  getValue(n: string) {
    this.display = this.display + n;
  }

  operation(operator: string) {
    switch (operator) {
      case "+":
        this.a += Number.parseFloat(this.display);
        this.clear();
        break;
      case "-":
        console.log(operator);
        break;
      case "*":
        console.log(operator);
        break;
      case "/":
        console.log(operator);
        break;
      case "%":
        console.log(operator);
        break;
      case "=":
        this.b = Number.parseFloat(this.display);
        this.total = this.a + this.b;
        this.display = ""+this.total; //""+ Cast number to string
    }
  }
}
