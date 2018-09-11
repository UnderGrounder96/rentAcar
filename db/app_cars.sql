CREATE DATABASE  IF NOT EXISTS `app` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `app`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: app
-- ------------------------------------------------------
-- Server version	5.7.14

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cars`
--

DROP TABLE IF EXISTS `cars`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cars` (
  `idCar` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `brand` varchar(20) NOT NULL,
  `model` varchar(25) NOT NULL,
  `price` int(10) unsigned NOT NULL,
  `photo` varchar(45) NOT NULL,
  `details` varchar(250) DEFAULT NULL,
  `year` year(4) NOT NULL,
  `active` tinyint(1) unsigned NOT NULL,
  `type` varchar(15) NOT NULL,
  PRIMARY KEY (`idCar`),
  UNIQUE KEY `idCar_UNIQUE` (`idCar`)
) ENGINE=MyISAM AUTO_INCREMENT=49 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cars`
--

LOCK TABLES `cars` WRITE;
/*!40000 ALTER TABLE `cars` DISABLE KEYS */;
INSERT INTO `cars` VALUES (1,'BMW','M3',500,'images/M3.jpg',NULL,2017,1,'Convertible'),(2,'Bugatti','Chiron',950,'images/Chiron.jpg','Height: 1.21 m, Power output: 1,103 kW (1,500 PS; 1,479 hp), Kerb weight: : 1,996 kg (4,400 lb)(est); 1,978 kg (4,360 lb)(est) (Chiron Sport);',2017,1,'Luxurious'),(3,'Koenigsegg','One 1',700,'images/One1.jpg','The Koenigsegg Agera has a power-to-weight ratio of 1.51 kg (3.33 lb) per horsepower.',2011,1,'Luxurious'),(4,'Lamborghini ','Centenario',800,'images/Centenario.jpg',NULL,2016,1,'Luxurious'),(5,'Pagani','Zonda 760 X',600,'images/Zonda760X.jpg',NULL,2015,1,'Luxurious'),(6,'Toyota','Corola',450,'images/Corolla.jpg',NULL,2017,1,'Convertible'),(7,'Chevrolet','Bolt',320,'images/bolt.png',NULL,2017,1,'Compact'),(8,'Chevrolet','Impala',380,'images/Impala.jpg',NULL,2016,1,'Convertible'),(9,'Toyota','Highlander',500,'images/Highlander.png',NULL,2018,1,'SUV'),(10,'Ford','F-150',550,'images/F150.jpeg',NULL,2018,1,'Truck'),(11,'Mazda','RX-8',250,'images/RX8.jpg',NULL,2005,1,'Sport'),(12,'Aston Martin','DB9',300,'images/DB9.jpg',NULL,2016,1,'Sport'),(13,'Dodge','Viper',500,'images/Viper.jpg',NULL,2017,1,'Luxurious'),(14,'Ford','GT',650,'images/GT.jpg',NULL,2015,1,'Luxurious'),(15,'Lamborghini','Gallardo',480,'images/Gallardo.jpg',NULL,2016,1,'Sport'),(16,'Mazda','RX-7',350,'images/RX7.jpg',NULL,2008,1,'Sport'),(17,'Mercedes-Benz','SL 500',400,'images/SL500.jpg',NULL,2010,1,'Sport'),(18,'Mercedes-Benz','SLR McLaren',700,'images/SLRMcLaren.jpg',NULL,2015,1,'Luxurious'),(46,'Ferrari','Burago',800,'images/Burago.jpg',NULL,2015,1,'Luxurious'),(47,'Ferrari','Spider',850,'images/Spider.jpg',NULL,2016,1,'Luxurious'),(25,'Chevrolet','Cobalt SS',350,'images/ColbatSS.jpg','The Cobalt SS was GM\'s first foray into the tuner market, launching with a 205 hp (153 kW; 208 PS) supercharged 2.0 L engine in late 2004 as a 2005 model, paired only with the F35 manual transmission of Opel.',2010,1,'Sport'),(48,'Rolls Royce','Cullinan',650,'images/Cullinan.jpg',NULL,2015,1,'SUV'),(32,'BMW','M3 GTR',800,'images/M3GTR.jpg','Porsche claimed during the 2001 ALMS season that BMW had violated the ALMS entry rules and the spirit of Gran Turismo. This was based on the fact that the V8 engine in the M3 GTR was not available in any road legal BMW M3.',2016,1,'Luxurious'),(34,'Chevrolet','Corvette C6',480,'images/CorvetteC6.png','The Corvette C6 featured new bodywork with exposed headlamps, revised suspension geometry, a larger passenger compartment, a larger 6.0 L (364 cu in; 5967 cc) engine and a higher level of refinement.',2013,1,'Luxurious'),(41,'Mitsubishi','Lancer Evolution VIII',650,'images/LancerEvolutionVIII.jpg',NULL,2012,1,'Convertible'),(42,'Porsche','Carrera GT',750,'images/CarreraGT.jpg','t is the first Carrera S to be powered by the 3.8 litre flat-six producing 350 bhp at 6,600 rpm and 400 Nm (295 lb-ft.) of torque at 4,600 rpm.',2015,1,'Luxurious'),(44,'Bugatti','Divo',1000,'images/Divo.jpg','The car is 8.0 seconds quicker than the Chiron around the Nardo test track according to the manufacturer and generates 456 kg (1,005 lb) of downforce at top speed, 90 kg (198 lb) more than the Chiron.',2018,1,'Luxurious'),(45,'Bugatti','Veyron EB 16.4',850,'images/Veyron.jpeg','The Bugatti Veyron EB 16.4 is a mid-engined sports car, designed and developed in Germany by the Volkswagen Group and manufactured in Molsheim, France, by Bugatti. It was named after the racing driver Pierre Veyron.',2016,1,'Luxurious');
/*!40000 ALTER TABLE `cars` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-09-11 23:06:04
