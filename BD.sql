CREATE database pi;
USE pi;

CREATE TABLE usuarios (
    usu_nome VARCHAR(100) NOT NULL,
    usu_email VARCHAR(100) UNIQUE PRIMARY KEY,
    usu_password VARCHAR(100) NOT NULL
);

CREATE TABLE agendamentos (
    id_agendamento INT AUTO_INCREMENT PRIMARY KEY,
    numero_pessoas INT NOT NULL,
    data_ag DATE NOT NULL,
    hora_ag TIME NOT NULL,
    nome_ag VARCHAR(50) NOT NULL,
    usu_email VARCHAR(100) NOT NULL,
    observacoes TEXT,
    status ENUM('PENDENTE', 'CONFIRMADO', 'CANCELADO') DEFAULT 'PENDENTE',
    FOREIGN KEY (usu_email) REFERENCES usuarios(usu_email)
);

SELECT * FROM usuarios;
SELECT * FROM agendamentos
