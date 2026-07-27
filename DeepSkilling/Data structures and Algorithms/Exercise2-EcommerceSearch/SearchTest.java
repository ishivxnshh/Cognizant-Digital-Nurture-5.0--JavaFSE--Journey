public class SearchTest {
    public static void main(String[] args) {

        Product[] products = {
            new Product(105, "Keyboard", "Electronics"),
            new Product(202, "Notebook", "Stationery"),
            new Product(311, "Headphones", "Electronics"),
            new Product(408, "Pen", "Stationery"),
            new Product(519, "Monitor", "Electronics")
        };

        // sorted by productId for binary search
        Product[] sortedProducts = {
            new Product(105, "Keyboard", "Electronics"),
            new Product(202, "Notebook", "Stationery"),
            new Product(311, "Headphones", "Electronics"),
            new Product(408, "Pen", "Stationery"),
            new Product(519, "Monitor", "Electronics")
        };

        int searchId = 311;

        System.out.println("Linear Search for id " + searchId + ":");
        Product r1 = LinearSearch.searchById(products, searchId);
        System.out.println(r1 != null ? r1 : "Not found");

        System.out.println();

        System.out.println("Binary Search for id " + searchId + ":");
        Product r2 = BinarySearch.searchById(sortedProducts, searchId);
        System.out.println(r2 != null ? r2 : "Not found");

        System.out.println();

        // search for something that isn't in the list
        System.out.println("Searching for id 999:");
        System.out.println("Linear: " + LinearSearch.searchById(products, 999));
        System.out.println("Binary: " + BinarySearch.searchById(sortedProducts, 999));
    }
}
