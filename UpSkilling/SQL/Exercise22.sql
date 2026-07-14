SELECT
    user_id,
    event_id,
    COUNT(*) AS duplicate_registrations
FROM Registrations
GROUP BY
    user_id,
    event_id
HAVING
    COUNT(*) > 1;