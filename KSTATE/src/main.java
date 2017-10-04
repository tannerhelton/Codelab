import java.util.Scanner;

public class main {
	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);
		System.out.println("Enter Width");
		Double width = s.nextDouble();
		System.out.println("Enter Length");
		Double length = s.nextDouble();
		Double area = width * length;
		System.out.println(area);
		
		
	}
}