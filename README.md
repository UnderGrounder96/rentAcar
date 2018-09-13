RentAcar!
-------------------------
This ExpressJS program simulates a car rental.

Getting Started
------------------
This ExpressJS program was created under Windows 10 (x64) Operative System, ExpressJS 4.16.3, NodeJS 8.11.1, npm 6.1.0 and MySQL 5.7.14.

Prerequisites
---------------
In order to use the ExpressJS program it is highly necessary to have an *internet connection* and install:
	- NodeJS v8.11+
	  - npm v6.1+
	- ExpressJS v4.16+
	- MySQL v5.7+

  i) Installing NodeJS v8.11+
    It is possible that NodeJS has been already installed, to check use the following code in the command line:

    $ node --version
    [v8.11.1]

    If errors occured or NodeJS has not yet been installed please visit their website www.nodejs.org/en/download/ and follow the instructions there.

    1) Installing MySQL v6.1+
      npm comes bundled with a successful NodeJS installation, to check use the following code in the command line: 

      $ npm --version
      [v6.1.0]


  ii) Installing MySQL v5.7+
    In order to install the MySQL server on Windows it is very important to follow the instructions on their website www.dev.mysql.com/downloads/windows/. On windows there are various variables involved about having the MySQL server, for example, to test the app the program MySQL Workbench was used to monitor the dataflow and a Wamp server was used to simulate the actual server.
    Therefore, no real instructions can be provided here! If the instructions under the website given were followed a MySQL server should be working on the desired machine.
    
    It is very important to run the file ./db/db.sql on the server after the installation is complete. Again, no example will be shown here but under Workbench everything should turn out great.

  
  iii) Testing
    In order to test the program it's necessary to run it and check if no errors were presented. The most common errors could be:
    
    1) NodeJS port error
      This happens when the program tries to run on a busy port, if that happens it is recommended to change the port number under the file ./bin/www on line 15 the code: 
        let port = normalizePort(process.env.PORT || '3000');
      
      Where 3000 is the default port used by the program.
  
    2) MySQL database errors
      - If the file ./db/db.sql was never ran against the server an error would be provided.
      - A port/password/locahost error could be given if the server has different configuration than provided by the ./db/db.js and each should be set appropriately.
      
    3) Any possible error
      Could be on the computer's end. Bad installation or wrong configuration. Besides the errors mentioned above everything should be working normally.
      

Deployment
--------------
The program was created to be easy to use and it is fool proof (to a dreggre). All user inputs return success or error messages.
In order to use please run NodeJS file below and follow the instructions.

	~/RentAcar/bin> node www
  [Database connected.]

Then opening the (default) website on Google Chrome:
  
  loccalhost:3000

Files
------
/Project:
	LICENSE.md - license
	main.py - main program
	README.md - this readme
	test.py - tester
	unused - additional non-used code
	Module - folder with additional files

/Project/Module:
	altrCrtDrp.py - alters, creates and drop tables
	classy.py - MyError user-defined class
	config.py - MySQL server configuration
	delInsUpd.py - deletes from, inserts (into) and updates tables
	__int__.py - redirects package
	select.py - reads from tables
	

Versioning
------------
Version 1.6 - Current version
Version 2.0(TBA) - GUI support

Author
---------
Lucio Afonso

License
---------
This project is licensed under the GPL License - see the LICENSE.md file for details

Acknowledgments
----------------------
Official sites:
	https://www.python.org/
	https://www.mysql.com/
	https://github.com/pypa/pip

Tutorials:
	https://www.w3schools.com/sql/
	http://mysqlclient.readthedocs.io/
	https://www.tutorialspoint.com/python/
	http://www.mikusa.com/python-mysql-docs/index.html
