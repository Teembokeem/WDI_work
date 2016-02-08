# Where in the World?

![This close.](https://i.ytimg.com/vi/hz43ZpZZG9U/hqdefault.jpg)

We're going to use what we've learned already about searching with SQL 
commands, and apply it to chase down and capture the elusive, world-reknowned 
thief [Carmen Sandiego][about].

Follow the clues and, using the database of world data provided, figure 
out where Carmen's headed, so we can catch her and bring her in!

### Setup

Copy the lab in to your working folder for the day. Then, **download the 
file [world_data.sql][data] and save it there as well.**

Run your `world_data.sql` file with the following commands to get the data 
you need for this lab:

```
createdb world_data_db
psql -d world_data_db -f world_data.sql
```

### Answer the Clues

From there you have to answer the clues in the file `clues.sql`. Write
SQL queries to solve the clues in `psql`, and then copy them in to that
file as your "answer sheet."

Test the output with the command:

```
psql -d world_data_db -f clues.sql
```

When you're finished, you can tell us where she's heading!

### Resources

- [PostgreSQL WHERE examples][tutorial-where]
- [PostgreSQL official documentation for SELECT][docs-select]


<!-- LINKS -->

[about]:          https://en.wikipedia.org/wiki/Carmen_Sandiego
[data]:           https://raw.githubusercontent.com/ga-instructors/lots_o_data/master/sql/world_data.sql
[tutorial]:       http://www.tutorialspoint.com/postgresql
[tutorial-where]: http://www.tutorialspoint.com/postgresql/postgresql_where_clause.htm
[docs]:           http://www.postgresql.org/docs
[docs-select]:    http://www.postgresql.org/docs/9.0/static/sql-select.html
