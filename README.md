# Logical Delete Demo

This is a simple Grails 3 application which represents a very basic example of
 using the [GORM Logical Delete Plugin](https://github.com/grails-plugins/gorm-logical-delete).

The application may be run locally using the [Gradle](http://gradle.org/) `bootRun` task:

    ./gradlew bootRun --parallel
    
A [Docker](http://docker.com) image has been published which includes a version of this application.  To 
install the image and start the container the first time run the following:

    docker run --name logicaldelete_demo -d -p 8086:8080 grailssamples/logicaldeletedemo:0.1
    
Note that the argument after `-p` is a pair of port numbers.  The second number is the port inside the 
container and that needs to be 8080.  The first number is the port in the host environment that you would 
like mapped to the second port.  For example, if you use `-p 8086:8080` then port 8086 in your host
environment will be mapped to port 8080 in the container so http://localhost:8086/ could be used to
access the app in the host environment.

To stop the container:

    docker stop logicaldelete_demo
    
To start the container (after having installed and run it the first time with the first `docker` command above):

    docker start logicaldelete_demo
