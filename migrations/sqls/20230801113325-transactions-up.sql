/* Replace with your SQL commands */
-- create transaction

CREATE TABLE t_accounts(
    id serial PRIMARY KEY,
    name VARCHAR not null,
    balance es(15,2) not null
);

-- Insert data into t_accounts
INSERT INTO t_accounts(name,BALANCE) 
VALUES ("Siva",100);

-- veiw the data

SELECT * FROM t_accounts;
