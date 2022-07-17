EXERCÍCIOS INTRODUÇÃO SQL


~~~
USE `gebru-4211683-aline-franca`;

# Exercício 1

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY, # VARCHAR(255) = string com até 255 caracteres e PRIMARY KEY = chave primaria, não pode se repetir na tabela
    name VARCHAR (255) NOT NULL, # NOT NULL = não podemos deixar de passar o valor
    salary FLOAT NOT NULL, # FLOAT = Utilizado para escrever números não inteiros
    birth_date DATE NOT NULL, # DATE = representa data
    gender VARCHAR(6) NOT NULL 
);

SHOW DATABASES; # Exibe todos os bancos de dados disponíveis no sistema
SHOW TABLES; # Exibe a definição de uma tabela

# Exercício 2

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);

INSERT INTO Actor 
VALUES(
  "002", 
  "Will Smith",
  20000000,
  "1968-09-25", 
  "male"
);
# Error Code: 1062. Duplicate entry "002" for key "PRIMARY" 
# TRADUÇÃO: Códio de erro: 1062. Duplicado a entrada "002" para a chave "PRIMÁRIO". Uma PRIMARY KEY não pode ser repetida na tabela.

INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
# Error Code 1136 = Refere-se a quantidade de campos na tabela e a quantidade de campos a serem inseridos

# CORREÇÃO DA TABELA
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);
# Error code 1364. "name" não pode ser nulo

# CORREÇÃO DA TABELA
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004",
  "Fabio Acevedo",
  400000,
  "1949-04-18", 
  "male"
  );
  
  INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);
# Error code 1292

# CORREÇÃO DA TABELA
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
),
(
  "007", 
  "Antônio Fagundes",
  400000,
  "1949-04-18", 
  "male"
);

# EXERCÍCIO 3

SELECT * FROM Actor WHERE gender = "female";
SELECT salary FROM Actor WHERE name = "Tony Ramos";
SELECT * FROM Actor WHERE gender = "invalid"; # O resultado foi uma linha vazia, pois não existe linhas com este valor. Caso altere para qualquer string, retornara da mesma forma
SELECT id, name, salary from Actor WHERE salary < 500000;
SELECT id, name from Actor WHERE id = "002";  # Vai dar erro porque o nome da coluna está errado. É "name" e não "nome"

SELECT * FROM Actor;
~~~