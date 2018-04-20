# EXA_NODE

EXA_NODE ist eine "Out of the box"-Serverlösung und kommt in Form eines Boilerplates. Mit Hilfe von NodeJS, Express und JDBC verbinden sich eine Exasol-Datenbank mit einem Web-/Socketserver, welche dann z.B. für das World-Wide-Web oder sonstige Anwendungen benutzt werden kann.

### Prerequisites

* Exasol 5/6-Instanz
* Node 8
* JDK/JVM

## Getting Started

Dieser Leitfaden soll eine Startanleitung sein, welche dir die ersten Einblicke gibt und eine exemplarische Herangehensweise in die Schnittstelle aufzeigt.

### Clone the repository

* Klone oder lade das Repository herunter
* Entpacke es in einen beliebigen Pfad (sofern nicht geklont)
* Navigiere in das Projektverzeichnis, indem die die Kommandoconsole benutzt
* führe den Befehl "npm install" aus

### Settings

* Es wurde der aktuellste JDBC-Driver von Exasol benutzt. Sollte es notwendig sein, so kann dieser jederzeit angepasst und/oder ersetzt werden. Der Driver ("exajdbc.jar") muss sich im Order "./routes/" befinden um ordnungsgemäß zu funktionieren.
* Damit sich JDBC mit der Datenbank verbinden kann, müssen die Authentisierungsdaten hinterlegt werden, sofern es sich nicht um die Defaultsettings handelt. Hierzu muss das "config"-Objekt in der Datei "./routes/db.js" angepasst werden:

```
var config = {

    drivername: 'com.exasol.jdbc.EXADriver',
    url: 'jdbc:exa:192.168.56.101:8563;schema=SYS;user=sys;password=exasol',
    minpoolsize: 2,
    maxpoolsize: 50,
    properties: {}
};
```

### Prepare to fight

* Nun kann die Exasol-Instanz gestartet werden. 
* Starte den Node-Server indem du in das Projektverzeichnis navigierst und den Befehl "npm start" ausführst. Alternativ und zur Überwachung deines Codes wird aber die Verwendung von Nodemon empfohlen.

### Try it out

Standardgemäß sind bereits zwei Beispielaufrufe integriert, welche dir helfen sollen die Anwendung zu verstehen. Rufe hierzu einfach über deinen Browser die Seite http://localhost:3000/ auf. Wenn die Seite angezeigt wird, ist alles ordnungsgemäß installiert und eingerichtet worden.
Die Beispieldatenbankzugriffe könnt ihr mit Hilfe der Links aufrufen:
* http://localhost:3000/users
* http://localhost:3000/alltables


## Issues

Bei Problemen und Fragen bitte ich euch folgenden Link zu benutzen:
https://github.com/3HMonkey/EXA_NODE/issues



