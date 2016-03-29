<img src="http://s3.amazonaws.com/info-mongodb-com/_com_assets/media/mongodb-logo-rgb.jpeg" style="width:900px">

# Guide to Transferring a MongoDB Database
<hr>

## Use Case

Use this guide when you wish to transfer all of the data in a particular database from one MongoDB server to another.

For example:

- You have developed an application that uses a local MongoDB server (`mongod`) running on your development machine.

- Now you want to deploy your application on Heroku and transfer all of the data you've worked with locally, to a MongoDB server hosted in the cloud.

## Tools

There are a few different approaches available to backup and restore data.

In this guide, we will be using two command-line utilities provided by MongoDB: `mongodump` & `mongorestore`

>Although `mongodump` infers that data might be "dumped", rest assured the original data source will be unscathed.

## Dumping (exporting) the Source Data

We will be using the `mongodump` command in terminal to export data to our local filesystem.

Although it's possible to limit the data dump to certain collections, this guide is focused on transferring the entire contents of a specific database.

### Preparation

Before entering the command in terminal, do the following:

1. **Create a Directory**<br>Let's create a nifty directory to dump the data in:

  ```
  ? mkdir ~/datadump
  ```

2. **Identify the Server Host**<br>The default server host is `localhost` running on port `27017`. However, if you want to dump the contents of another server, perhaps one running on _mlab.com_, you will need the **url** and the **port number** of that server.

3. **Ensure `mongod` is Running**<br>If you are dumping data from your local MongoDB server, ensure that `mongod` is up and running.

4. **Credentials**<br>Again, if not dumping from your local server, you will need the **username** and **password** for a user account that belongs to the remote database (not the _mlab.com_ website).

### Dump the Data - Local DB Example

Here's the command to dump everything for a database named `ga-students`:

```
? mongodump -d ga-students -o ~/datadump
```

After the command executes, there will be a new directory, named the same as the database, with all of the contents of the database inside of it.

#### Options:

**-d**<br>Specifies the name of the _database_ to dump.

**-o**<br>Specifies the path to the _directory_ to dump to.

### Dump the Data - Remote DB Example

Here's the command to dump everything for a database named `ga-students` located on a fictitious remote server and credentials:

```
? mongodump -h ds012345.mlab.com:12345 -u the_user -p the_password -d ga-students -o ~/datadump
```

Just as in the local DB example, after the command executes, there will be a new directory, named the same as the database, with all of the contents of the database inside of it.

#### Additional Options:

**-h**<br>Specifies the URL and port of the remote _host_.

**-u**<br>Specifies the _username_ of a valid user for the specified database.

**-p**<br>Specifies the _password_ for the username.

## Restoring (importing) the Data Dump

We can use the `mongorestore` command in terminal to restore (import) data that was previously dumped to a local or remote MongoDB server.

### Preparation

1. **Source Path**<br>Ensure you have the path handy to the directory that contains all of the data files that were previously dumped.

2. **Destination Server**<br><br>If the destination server is remote, you will need the **url** and **port number** of ther server.<br><br>If you will be importing the data to a local MongoDB server, ensure that `mongod` is running.

3. **Credentials**<br>Again, if you are restoring data to a remote database, you will need the **username** and **password** for a user account that belongs to the remote database (not the _mlab.com_ website).

### Restore the Data - to a Local DB Example

Here's the command to restore (import) data to a local MongoDB server:

```
? mongorestore -d ga-students --drop ~/datadump/ga-students
```

If we don't specify the host with the `-u` option, the server will default to `localhost:27017`, so there's no reason to specify it.

After the command executes, all of the data that exists in the `~/datadump/ga-students` directory will have been imported to a database named `ga-students`.

>Note that the directory name and database name **do not have to match**.  The directory name is used only to point to where all of the individual data files are located. If you specify a database name that does not exist on the local MongoDB server, it will create it.  However, this will not apply to most hosted MongoDB accounts, which require databases to be specifically created.

#### Options:

**--drop**<br>Use this option to drop (delete) each collection that is going to be imported. This will prevent errors if any document being imported has the same id as an existing document - the imported data will not replace existing data, it will just trigger an error.

### Restore the Data - to a Remote DB Example

Here's the command to restore (import) data to a remote MongoDB server:

```
? mongorestore -h ds012345.mlab.com:12345 -u the_user -p the_password -d ga-students --drop ~/datadump/ga-students
```

As you can see, the difference between restoring to a remote server and a local server is that the host must be specified (`-h ds012345.mlab.com:12345`), along with a valid username (`-u the_user`) / password (`-p the_password`) for the specified database.

After the command executes, all of the data that exists in the `~/datadump/ga-students` directory will have been imported to the **existing** database named `ga-students`. Remember, you will not be able to create new databases on a remote server.

## Final Thoughts

This guide explains a straightforward way to transfer data between MongoDB servers. The technique we used can also be used to "copy" data from one db to another on the **same** server.

Lastly, we have seen how to dump/restore **all** of the collections, indexes, etc. within a database. However, it's also possible to transfer data for a **single collection** using the `-c` option.

To check all of the options available with `mongodump` and `mongorestore`, use the `--help` option in terminal.
