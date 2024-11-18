CREATE TABLE usuarios (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    usu_nome VARCHAR(100) NOT NULL,
    usu_email VARCHAR(100) UNIQUE,
    usu_password VARCHAR(100) UNIQUE
);

CREATE TABLE agendamentos (
    id_agendamento INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
    data_hora DATETIME NOT NULL,
    numero_pessoas INT NOT NULL,
    observacoes TEXT,
    status ENUM('PENDENTE', 'CONFIRMADO', 'CANCELADO') DEFAULT 'PENDENTE',
    data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario),
);
