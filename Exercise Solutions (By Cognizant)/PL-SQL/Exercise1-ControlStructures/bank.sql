CREATE TABLE Customers (
    CustomerID NUMBER PRIMARY KEY,
    CustomerName VARCHAR2(50),
    Age NUMBER,
    Balance NUMBER,
    IsVIP CHAR(1)
);

CREATE TABLE Loans (
    LoanID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    InterestRate NUMBER,
    DueDate DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

INSERT INTO Customers VALUES (101, 'Rahul', 65, 15000, 'N');
INSERT INTO Customers VALUES (102, 'Priya', 45, 9000, 'N');
INSERT INTO Customers VALUES (103, 'Amit', 70, 25000, 'N');

COMMIT;

INSERT INTO Loans VALUES (1, 101, 9, SYSDATE + 15);
INSERT INTO Loans VALUES (2, 102, 8, SYSDATE + 45);
INSERT INTO Loans VALUES (3, 103, 10, SYSDATE + 20);

COMMIT;

SELECT * FROM Customers;

SELECT * FROM Loans;