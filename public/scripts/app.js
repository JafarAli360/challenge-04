// import Binar from "./binar.js";
// import Car from "./car.js";

// const Binar = require('./binar.js');
// const Car = require('./car.js');

let tipeDriver;
let waktuJemput;
//get tipe driver
const tipeDriverItem = document.getElementsByClassName("tipe-driver");
for (let i = 0; i < tipeDriverItem.length; i++) {
  tipeDriverItem[i].addEventListener("click", function () {
    tipeDriver = tipeDriverItem[i].innerHTML;
    document.getElementById("tipe-driver").innerHTML = tipeDriver;
  });
}
//get waktu jemput
const waktuJemputItem = document.getElementsByClassName("waktu-jemput");
for (let i = 0; i < waktuJemputItem.length; i++) {
  waktuJemputItem[i].addEventListener("click", function () {
    waktuJemput = waktuJemputItem[i].innerHTML;
  });
}

class App {
  constructor() {
    this.searchButton = document.getElementById("search-btn");
    this.formSearh = document.getElementById("search");
    this.carContainerElement = document.getElementById("cars-container");
    this.tanggal = document.getElementById("tanggalPilih");
    this.jumlahPenumpang = document.getElementById("jumlahPenumpang");
    this.tahun;
  }

  async init() {
    this.formSearh.onsubmit = this.search;
  }

  run = () => {
    if (Car.list.length > 0) {
      this.carContainerElement.style.display = "grid";
      Car.list.forEach((car) => {
        const node = document.createElement("div");
        node.innerHTML = car.render();
        node.classList.add("border", "rounded", "p-3", "m-2", "car-item");
        this.carContainerElement.classList.add("container", "p-3");
        this.carContainerElement.appendChild(node);
      });
    } else {
      const node = document.createElement("p");
      node.innerHTML = "Data tidak ada";
      node.setAttribute("class", "text-center");
      this.carContainerElement.classList.add("container", "p-3");
      this.carContainerElement.style.display = "block";
      this.carContainerElement.appendChild(node);
    }
  };

  load = () => {
    const cars = Binar.listCars(tipeDriver, this.tahun, waktuJemput, this.jumlahPenumpang.value);
    Car.init(cars);
  };

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };

  search = (e) => {
    e.preventDefault();
    this.clear();
    let tanggal = this.tanggal.value.split("-");
    this.tahun = tanggal[0];
    const tahun = this.tahun;
    const jumlahPenumpang = this.jumlahPenumpang.value;
    console.log(tipeDriver, tahun, waktuJemput, jumlahPenumpang);
    this.load();
    this.run();
  };
}

// export default App;
// module.exports = {App};
