
[SON State of the Nation data explorer](../README.md) >
[Developer documentation](README.md) >
Getting the code running

# Getting the code running

Get the code:
* Clone [this repo](https://github.com/cabinetoffice/smc-son)  
  If you're cloning with SSH / GitKraken, you want this link:  
  `git@github.com:cabinetoffice/smc-son.git`

* Open the Folder in your IDE  
  Note: in Python, you don't need to open a "Solution" file (like you would in C#)

Get and edit the config files:
* Ask an existing developer for a copy of the files listed below and
  save them to the root folder of your local repository
  (the files are git ignored, so they shouldn't get committed - **check this!**)
  * `.env`

Fetch the project dependencies:
* Ensure that Docker is installed

* Open a Bash terminal in the root folder of the project

* Run `pip install -r requirements.txt`  
  This installs the Python dependencies

* Run `npm install`  
  This installs the Javascript dependencies

Build (and run) the code:
* Open a Bash terminal in the root folder of the project

* Run `docker-compose up --build`

* The public-facing website should be visible at http://localhost:5000/

Just run the code:
* Open a Bash terminal in the root folder of the project

* Run `docker-compose up --build`  

* The public-facing website should be visible at http://localhost:5000/
