
[SON State of the Nation data explorer](../README.md) >
Developer documentation

# Developer documentation

Information for new developers:
* [Accounts you will need to develop the service](Accounts_you_will_need_to_develop_the_service.md)
* [Software to install](Software_to_install.md)
* [Getting the code running](Getting_the_code_running.md)

Environments and deployments:
* [Our environments](Our_environments.md)
* [Deployments](Deployments.md)
* [HTTP Basic Authentication](HTTP_Basic_Authentication.md)

Website setup:
* [System architecture](System_architecture.md)
* [Data and content structure and editing](Data_and_content_structure_and_editing.md)
* [Charts](Charts.md)
* [Maps](Maps.md)
* [Data tables](Data_tables.md)

## Required software

The system has been build to run on Python 3.x, it currently runs Python 3.8 in a Docker virtual machine. Node is used to build the site.
Python packages can be found in *requirements.txt* and Node packages in *package.json*.

To run the site, install Docker and run:  
`docker-compose up --build`

To tear down the site, run:  
`docker-compose down`

After changing *.scss pages, run `npm run build` to compile static css files.

The site uses Google Analytics to track user behaviour, please ask your manager for access to the GA property.

## How-to:
* [How to put the service into Maintenance Mode / "Service unavailable"](Maintenance_mode.md)
