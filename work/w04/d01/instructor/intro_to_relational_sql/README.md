## Cheat Sheet

### In Your CLI (Bash)

* To create a database from the CLI:
```
createdb YOUR_DATABASE_NAME
```

* To check if Postgres is running:
```
ps auxwww | grep postgres
```

* To start Postgres, if it's not running:
```
postgres
```

* If that breaks, try 
```
postgres -D /usr/local/var/postgres
```

* To start a `psql` console (in a new window):
```
psql
```

* Or to start it connected to a specific database:
```
psql -d YOUR_DATABASE_NAME
```
	
### In `psql`

```
\h         Get help with SQL commands.
\?         Get help with psql commands.
\q         Exit the psql shell.
\l         List all of the databases managed by Postgres.
\c DB_NAME Connect to a different database.
\d         List all of the tables, relations and sequences in the current database.
```

### SQL commands for Postgres

* To create a table called `instructors` with an integer `ID`, a short 
  string called `NAME`, an integer called `EXPERIENCE`, and a long 
  string called `WEBSITE`:
	* Note that `ID` is our primary key (how the database looks up 
      records), and `ID`, `NAME`, and `EXPERIENCE` have to have values

```
CREATE TABLE instructors (
  ID  INT PRIMARY KEY NOT NULL,
  NAME TEXT NOT NULL,
  EXPERIENCE INT NOT NULL,
  WEBSITE CHAR(50)
);
```

* To add a row to your table:
```
* INSERT INTO table_name VALUES (1, 'list', 'of', 'values');
```

* To read from a table:
	* Instead of `*`, you can also specify a list of columns.
```
SELECT * FROM table_name;
```

* To order by a column name:
```
SELECT * FROM table_name ORDER_BY column_name;
```

* To get records that match a condition:
```
SELECT * FROM table_name WHERE column LIKE '%string%';
```

* To update a record:
```
UPDATE table_name SET column = 'new value' WHERE id=1;
```

* To delete a record: 
```
DELETE FROM table_name;
```
