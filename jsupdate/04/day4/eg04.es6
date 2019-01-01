class Computer {
    constructor(cpu, hhd) {
        this.cpu = cpu;
        this.hhd = hhd;
    }
    start() {
        console.log(this.cpu + ' start...');
    }
}