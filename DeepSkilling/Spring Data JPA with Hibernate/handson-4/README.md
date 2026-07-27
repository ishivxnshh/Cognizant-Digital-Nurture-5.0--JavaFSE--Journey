# Hands-on 4 - Difference between JPA, Hibernate and Spring Data JPA

## Objective

Understand the differences between Java Persistence API (JPA), Hibernate, and Spring Data JPA.

---

## Java Persistence API (JPA)

- JPA stands for **Java Persistence API**.
- It is a **specification (JSR 338)** for persisting Java objects into relational databases.
- It defines a set of interfaces and annotations.
- JPA itself **does not provide any implementation**.
- An implementation such as Hibernate is required.

### Features

- Defines persistence standards.
- Uses annotations like:
  - `@Entity`
  - `@Table`
  - `@Id`
  - `@Column`
- Database independent.

---

## Hibernate

- Hibernate is an **ORM (Object Relational Mapping)** framework.
- It is one of the most popular implementations of JPA.
- Converts Java objects into database records and vice versa.

### Features

- Implements the JPA specification.
- Generates SQL queries automatically.
- Manages database connections.
- Supports caching and lazy loading.

---

## Spring Data JPA

- Spring Data JPA is built on top of JPA.
- It does **not** implement JPA itself.
- It reduces boilerplate code by providing ready-made repository interfaces.

### Features

- Uses `JpaRepository`.
- Provides built-in CRUD operations.
- Automatic query generation.
- Transaction management.
- Less code compared to Hibernate.

---

# Comparison

| Feature | JPA | Hibernate | Spring Data JPA |
|---------|-----|-----------|-----------------|
| Type | Specification | ORM Framework | Spring Module |
| Implementation | No | Yes | No |
| Provides ORM | No | Yes | Uses Hibernate/JPA |
| CRUD Operations | Interfaces only | Manual implementation | Ready-made through `JpaRepository` |
| Boilerplate Code | High | Medium | Low |
| Transaction Management | No | Yes | Yes |

---

# Hibernate Example

```java
public Integer addEmployee(Employee employee) {
    Session session = factory.openSession();
    Transaction tx = null;
    Integer employeeID = null;

    try {
        tx = session.beginTransaction();
        employeeID = (Integer) session.save(employee);
        tx.commit();
    } catch (HibernateException e) {
        if (tx != null)
            tx.rollback();
        e.printStackTrace();
    } finally {
        session.close();
    }
    return employeeID;
}
```

---

# Spring Data JPA Example

### EmployeeRepository

```java
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

}
```

### EmployeeService

```java
@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Transactional
    public void addEmployee(Employee employee) {
        employeeRepository.save(employee);
    }
}
```

---

# Conclusion

- **JPA** defines how persistence should work.
- **Hibernate** implements JPA and performs the actual database operations.
- **Spring Data JPA** sits on top of JPA/Hibernate and minimizes boilerplate code by providing repository interfaces and automatic CRUD operations.

---

## Learning Outcome

After completing this hands-on:

- Understand the role of JPA.
- Understand how Hibernate implements JPA.
- Understand why Spring Data JPA is preferred in Spring Boot applications.
- Learn the differences between JPA, Hibernate, and Spring Data JPA.