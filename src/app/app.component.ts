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
  fin = ["C", "=", "<-"];
  display = "";
  ope = "";
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
      case "0":
        this.getValue("0");
        break;
      case "+":
        this.a = Number.parseFloat(this.display);
        this.clear();
        this.ope = "+";
        break;
      case "-":
        this.a = Number.parseFloat(this.display);
        this.clear();
        this.ope = "-";
        break;
      case "*":
        this.a = Number.parseFloat(this.display);
        this.clear();
        this.ope = "*";
        break;
      case "/":
        this.a = Number.parseFloat(this.display);
        this.clear();
        this.ope = "/";
        break;
      case "%":
        this.a = Number.parseFloat(this.display);
        this.clear();
        this.ope = "%";
        break;
      case "C":
        this.clear();
        break;
      case "<-":
        this.display = this.display.slice(0, this.display.length - 1);
        break;
      case "=":
        if (this.ope === "+") {
          this.b = Number.parseFloat(this.display);
          this.total = this.a + this.b;
          this.display = "" + this.total; //""+ Cast number to string
          console.log(this.a, " - ", this.b);
        } else if (this.ope === "-") {
          this.total = this.a - this.b;
          this.display = "" + this.total; //""+ Cast number to string
        } else if (this.ope === "*") {
          this.total = this.a * this.b;
          this.display = "" + this.total; //""+ Cast number to string
        } else if (this.ope === "/") {
          this.total = this.a / this.b;
          this.display = "" + this.total; //""+ Cast number to string
        } else if (this.ope === "%") {
          this.total = this.a % this.b;
          this.display = "" + this.total; //""+ Cast number to string
        }
    }
  }
}
