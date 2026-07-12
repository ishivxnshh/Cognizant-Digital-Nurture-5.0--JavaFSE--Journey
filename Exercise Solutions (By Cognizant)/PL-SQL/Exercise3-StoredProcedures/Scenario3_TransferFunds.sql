-- Scenario 3
-- Transfer funds between two accounts

CREATE OR REPLACE PROCEDURE TransferFunds(
    p_fromAccount IN NUMBER,
    p_toAccount IN NUMBER,
    p_amount IN NUMBER
)
IS
    v_balance NUMBER;
BEGIN
    SELECT Balance
    INTO v_balance
    FROM Accounts
    WHERE AccountID = p_fromAccount;

    IF v_balance >= p_amount THEN

        UPDATE Accounts
        SET Balance = Balance - p_amount
        WHERE AccountID = p_fromAccount;

        UPDATE Accounts
        SET Balance = Balance + p_amount
        WHERE AccountID = p_toAccount;

        COMMIT;

    ELSE
        DBMS_OUTPUT.PUT_LINE('Insufficient Balance');
    END IF;

END;
/

-- Execute the procedure
BEGIN
    TransferFunds(1, 2, 5000);
END;
/

-- Verify the result
SELECT * FROM Accounts;