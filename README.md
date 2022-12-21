# portfolio
Portfolio. First backend project

This APIRest intends to be our portfolio, including our CV, experiences and projects that we worked on.

The API has been thought to work with 6 HTTP requests and responses on diferent routes that will be described here.

  VERB            | RESOURCE                |REQUESTED FIELDS     |    DESCRIPTION
__________________|_________________________|_____________________|____________________________________________
  -GET            | /portfolio              | none                |    Returns the whole content of Portfolio
__________________|_________________________|_____________________|___________________________________________
  -GET            | /portfolio/project      | none                |    Returns all the projects listed
__________________|_________________________|_____________________|__________________________________________
  -GET            | /portfolio/project{id}  | none                |    Returns the content of one project
__________________|_________________________|_____________________|__________________________________________
  -POST           | /portfolio/project      | "name",             |    Will add one project to portfolio
                  |                         | "description",      |
                  |                         | "url"               |
                  |                         | "languages": [],    |
                  |                         | "githubUrl",        |
                  |                         | ”image”             |
__________________|_________________________|_____________________|__________________________________________
  -PUT            | /portfolio/project{id}  | "name"              |   Edit the content of one project
__________________|_________________________|_____________________|__________________________________________
  -DELETE         | /portfolio/project{id}  | none                |   Delete the entry listed on the url's id
                  |                         |                     |   to portfolio
                  
Express framework has been used to develop this API using MVC architecture with Typescript.
The port used to host the server is 3001. We developed at this route trying to avoid errors caused by other
aplications using this port.


Coders: Hel & Ema.
