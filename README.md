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
´´´




