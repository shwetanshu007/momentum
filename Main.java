class Car {
    String brand = "Maruti";

    void drive() {
        System.out.println("Car is not driving...");
    }
}

public class Main {
    public static void main(String[] args) {
        Car myCar = new Car();
        System.out.println("Brand: " + myCar.brand);
        myCar.drive();
    }
}
