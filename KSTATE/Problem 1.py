def main():
    float width = 20;
    float height = 10;
    float a = 0;
    float area1 = 0;

    if (width < height) {
        area1 = (height/2) * (height/2) * 3.14159;
        a = area1 * 2;
    } else {
        area1 = (height / 2) * (height / 2) * 3.14159;
        a = area1 * 2;
    }
    println(a/(width*height));