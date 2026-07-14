SELECT
    e.event_id,
    e.title AS event_name,
    AVG(TIMESTAMPDIFF(MINUTE, s.start_time, s.end_time)) AS average_duration
FROM Events e
JOIN Sessions s
    ON e.event_id = s.event_id
GROUP BY
    e.event_id,
    e.title
ORDER BY
    e.event_id;