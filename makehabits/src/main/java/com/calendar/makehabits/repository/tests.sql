DROP DATABASE IF EXISTS makehabits_test;
CREATE DATABASE IF NOT EXISTS makehabits_test;

USE makehabits_test;

-- Tabla de Usuarios
CREATE TABLE IF NOT EXISTS Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- Tabla de Tareas
CREATE TABLE IF NOT EXISTS Tasks (
    task_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    task_name VARCHAR(255) NOT NULL,
    task_hourrange VARCHAR(255) NOT NULL,
    task_description TEXT,
    task_type ENUM('appointment', 'habit') NOT NULL,
    task_habitrepeated INT,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

-- Agrega una columna para el número del día de la semana en la tabla Calendar
ALTER TABLE Calendar ADD COLUMN day_of_week INT;

-- Actualiza el número del día de la semana en función de la fecha del evento (0: lunes, 1: martes, ..., 6: domingo)
UPDATE Calendar SET day_of_week = WEEKDAY(event_date);

-- Crear la tabla de Notificaciones para almacenar las notificaciones pendientes
CREATE TABLE IF NOT EXISTS Notifications (
    notification_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    task_id INT,
    notification_date DATETIME NOT NULL,
    is_sent BOOLEAN DEFAULT FALSE, -- Indica si la notificación ha sido enviada
    FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (task_id) REFERENCES Tasks(task_id)
);

-- Función para agregar una notificación al crear un evento en el calendario
DELIMITER //
CREATE PROCEDURE AddNotification(IN userId INT, IN taskId INT, IN eventDate DATETIME)
BEGIN
    INSERT INTO Notifications (user_id, task_id, notification_date)
    VALUES (userId, taskId, eventDate);
END //
DELIMITER ;

-- Función para enviar notificaciones pendientes
DELIMITER //
CREATE PROCEDURE SendNotifications()
BEGIN
    DECLARE done INT DEFAULT FALSE;
    DECLARE userId INT;
    DECLARE taskId INT;
    DECLARE eventDate DATETIME;
    DECLARE cur CURSOR FOR
        SELECT user_id, task_id, notification_date
        FROM Notifications
        WHERE is_sent = FALSE AND notification_date <= NOW();

    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;

    OPEN cur;

    read_loop: LOOP
        FETCH cur INTO userId, taskId, eventDate;
        IF done THEN
            LEAVE read_loop;
        END IF;

        -- Enviar la notificación aquí (puede ser un correo electrónico, mensaje push, etc.)
        -- ... Tu código de envío de notificaciones ...

        -- Marcar la notificación como enviada
        UPDATE Notifications SET is_sent = TRUE WHERE user_id = userId AND task_id = taskId;

    END LOOP;

    CLOSE cur;
END //
DELIMITER ;

-- Llamar al procedimiento de envío de notificaciones manualmente cuando se crea un evento en el calendario
DELIMITER //
CREATE TRIGGER CreateCalendarEvent
AFTER INSERT ON Calendar
FOR EACH ROW
BEGIN
    CALL AddNotification(NEW.user_id, NEW.task_id, NEW.event_date);
END //
DELIMITER ;

-- insertar un Usuario
INSERT INTO Users (username, email, password) VALUES ('nombre_usuario', 'correo@example.com', 'contraseña_segura');

-- insertar una tarea
INSERT INTO Tasks (user_id, task_name, task_description, task_type) VALUES (1, 'Tarea importante', 'Descripción de la tarea', 'tarea');

-- insertar un evento en el calendario
INSERT INTO Calendar (user_id, task_id, event_date, duration, is_recurring, days_of_week) VALUES (1, 1, '2023-08-10 14:00:00', 60, 0, NULL);

-- obtener tareas de un Usuario
SELECT * FROM Tasks WHERE user_id = 1;

-- Obtener Eventos del Calendario de un Usuario
SELECT * FROM Calendar WHERE user_id = 1;

-- Actualizar tarea
UPDATE Tasks SET task_name = 'Nuevo nombre', task_description = 'Nueva descripción' WHERE task_id = 1;

-- Eliminar tarea
DELETE FROM Tasks WHERE task_id = 1;

-- Eventos recurrentes
SELECT * FROM Calendar WHERE user_id = 1 AND is_recurring = 1;

-- Resuen de habitos
SELECT task_name, COUNT(*) AS total FROM Tasks INNER JOIN Calendar ON Tasks.task_id = Calendar.task_id WHERE user_id = 1 GROUP BY task_name;

-- Ordenar Tareas por Nombre
SELECT * FROM Tasks WHERE user_id = 1 ORDER BY task_name;

-- Filtrar Tareas por Tipo
SELECT * FROM Tasks WHERE user_id = 1 AND task_type = 'hábito';

-- Ordenar Eventos por Fecha
SELECT * FROM Calendar WHERE user_id = 1 ORDER BY event_date;

-- Filtrar Eventos por Fecha
SELECT * FROM Calendar WHERE user_id = 1 AND DATE(event_date) = '2023-08-10';
