![Logo](art/Logo.png)

# disaster-map-backend

This lambda function serves as the backend of the client map. It provides first responders with location data collected from our SMS chatbot. This was built for the Call for Code hackathon. Powered by RCOS and IBM.

This repository was built for the 2018 IBM Call for Code hackathon.

### Diagram
![Diagram](art/Diagram.png)

### Contributers

- Shweta Burgus - Student at RPI
- Jake Billings - Freelance Developer and Student at RPI
- Aaron Hill - Student at RPI
- Michael Jones - Student at RP

### Using this repository

Use yarn commands to deploy and manage this repository on IBM Bluemix.

These commands require for you to have installed and logged in to the IBM Bluemix command line.

- `deploy:create` - Builds and creates the function on IBM Bluemix
- `deploy:update` - Builds then updates the function on IBM Bluemix
- `deploy:invoke` - Invokes the function on IBM Bluemix
- `deploy:upvoke` - Builds then updates then invokes the function on IBM Bluemix
- `deploy:delete` - Deletes the function on IBM Bluemix

### Submodules

The credentials for deploying and running this repository are stored in a Git submodule.


### More

Powered by [Rensselaer Center for Open Source](http://rcos.io) and IBM. See more at the RCOS [https://github.com/rcos](https://github.com/rcos).

