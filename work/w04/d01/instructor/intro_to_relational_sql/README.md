## Cheat Sheet

### In Your Shell (Bash)

* To create a database:
```
createdb YOUR_DATABASE_NAME
```

* To start Postgres:
```
postgres
```

* If that breaks, try 
```
postgres -D /usr/local/var/postgres
```
* To start a Postgres console (in a new window):
```
psql
```

* If that breaks:
```
psql -d YOUR_DATABASE_NAME
```
	
### In Postgres (`psql`)
* To create a table called `instructors` with an integer `ID`, a short string called `NAME`, an integer called `EXPERIENCE`, and a long string called `WEBSITE`:
	* Note that `ID` is our primary key (how the database looks up records), and `ID`, `NAME`, and `EXPERIENCE` have to have values

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
* INSERT INTO table_name VALUES (1, 'list', 'of', 'values')
```

* To read from a table:
	* Instead of `*`, you can also specify a list of columns.
```
SELECT * FROM table_name
```

* To order by a column name:
```
SELECT * FROM table_name ORDER_BY column_name
```

* To get records that match a condition:
```
SELECT * FROM table_name WHERE column LIKE '%string%'
```

* To update a record:
```
UPDATE table_name SET column = 'new value' WHERE id=1
```

* To delete a record: 
```
DELETE FROM table_name
```
