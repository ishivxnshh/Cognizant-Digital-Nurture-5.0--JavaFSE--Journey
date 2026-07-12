-- Scenario 2
-- Update employee salary based on department and bonus percentage

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
    p_department IN VARCHAR2,
    p_bonus IN NUMBER
)
IS
BEGIN
    UPDATE Employees
    SET Salary = Salary + (Salary * p_bonus / 100)
    WHERE Department = p_department;

    COMMIT;
END;
/

-- Execute the procedure
BEGIN
    UpdateEmployeeBonus('IT', 10);
END;
/

-- Verify the result
SELECT * FROM Employees;