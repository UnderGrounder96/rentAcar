CREATE DATABASE  IF NOT EXISTS `app` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `app`;
-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: app
-- ------------------------------------------------------
-- Server version	8.0.18

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `brand`
--

DROP TABLE IF EXISTS `brand`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `brand` (
  `idBrand` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `details` mediumtext NOT NULL,
  PRIMARY KEY (`idBrand`),
  UNIQUE KEY `idBrand_UNIQUE` (`idBrand`),
  UNIQUE KEY `brand_UNIQUE` (`name`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brand`
--

LOCK TABLES `brand` WRITE;
/*!40000 ALTER TABLE `brand` DISABLE KEYS */;
INSERT INTO `brand` VALUES (1,'Aston Martin','The Aston Martin Lagonda Limited has a long history filled with numerous difficulties. However, over the time, all efforts proved to be worth it and now the company exists as one of the worldÃ¢ÂÂs top automobile manufacturers. The Aston Martin history began with the efforts of Lionel Martin and Robert Bamford, who founded the Ã¢ÂÂBamford and Martin Limited CompanyÃ¢ÂÂ in 1913. LetÃ¢ÂÂs talk more about the Aston Martin logo, the companyÃ¢ÂÂs history, interesting news in their journey and the list of latest car models.'),(2,'BMW','BMW (originally an initialism for Bayerische Motoren Werke in German, or Bavarian Motor Works in English) is a German multinational company which currently produces luxury automobiles and motorcycles, and also produced aircraft engines until 1945.'),(3,'Bugatti','Automobiles Ettore Bugatti was a French car manufacturer of high-performance automobiles, founded in 1909 in the then German city of Molsheim, Alsace by Italian-born Ettore Bugatti. Bugatti cars were known for their design beauty (Ettore Bugatti was from a family of artists and considered himself to be both an artist and builder) and for their many race victories. Famous Bugattis include the Type 35 Grand Prix cars, the Type 41 \"Royale\", the Type 57 \"Atlantic\" and the Type 55 sports car.'),(4,'Chevrolet','Before being acquired by General Motors (GM) in 1918, the story began with Louis Chevrolet in 1911. Louis was an automotive engineer and Swiss race car driver and had a vision of creating his own company. Soon he became friends with William C. Durant who was the co-founder of General Motors. Upon WilliamÃ¢ÂÂs termination from his company, Louis and William founded the company in Detroit. This is how the Chevrolet history started, and how this company began to go towards success.'),(5,'Dodge','Dodge was founded in 1900 by Horace and John Dodge (The Dodge Brothers). It was initially known as the Dodge Brothers Company and used to sell bicycles, but then within two years it became a major supplier of axles, engines, and transmissions to the automobile industry. The company was incredibly successful from the outset and gained a good reputation even during its early stages in the timeline. ThatÃ¢ÂÂs how the Dodge history beginning looks like, successful from the start.'),(6,'Ferrari','For car lovers, the ultimate in sports car pleasure is to slip behind the wheel of a Ferrari, a bright red, super-fast, highly sporty and exceptionally beautiful vehicle. While the imagery is correct in plenty of ways, only a few actually wonder Ã¢ÂÂHow did Ferrari get this far?Ã¢ÂÂ So, hereÃ¢ÂÂs a brief history of Ferrari and how the cars came about. WeÃ¢ÂÂll talk about the Ferrari Logo, their companyÃ¢ÂÂs history timeline and the list of latest models in this post.'),(7,'Ford','One of the worldÃ¢ÂÂs most popular automobile manufacturers, Ford was founded and incorporated in 1903. The company was created as a result of the efforts of Henry Ford, who even after facing disappointment with the Detroit Automobile Company and the Henry Ford Company managed to get back on his feet. In 1902, Henry Ford turned to an acquaintance, Alexander Y. Malcomson, for financial help in order to start a new company, which is how the Ford company began. LetÃ¢ÂÂs talk more about the Ford Logo, the companyÃ¢ÂÂs history from beginning and their current models.'),(8,'Koenigsegg','The Swedish auto industry has some of the finest luxury cars to offer. What is really interesting is that they are on par with other rival car manufacturers like Ferrari, Lamborghini, Volvo and even Aston Martin. Koenigsegg is one such manufacturer that has exceeded expectations with the introduction of hyper-cars. The history of Koenigsegg started from nothing and now has made considerable contributions to the car market. Take a look at the Koenigsegg Logo, history timeline and list of latest models.'),(9,'Lamborghini','Lamborghini cars are much-loved by car aficionados around the world. These cars are known for their excellent performance in terms of speed and are built with incredible style. However, these cars didnÃ¢ÂÂt just gain a high reputation on their own. In fact, there is a grand history of Lamborghini behind the company itself that designs vehicles exclusively for customer satisfaction. Learn more about the Lamborghini logo, history timeline and list of latest models in this article.'),(10,'Mazda','The history of Mazda began as the Toyo Cork Kogyo Co Ltd was founded by Jujiro Matsuda in 1920. The company manufactured machine tools for numerous industries in Japan. However, in 1931, due to low profits, the company decided to shift its attention to vehicles and introduced the famous three-wheel truck called the Mazda-Go. LetÃ¢ÂÂs discuss more about the Mazda logo, the companyÃ¢ÂÂs history and their latest models.'),(11,'Mercedes-Benz','Mercedes-Benz is an automobile manufacturer that is known throughout the world as a symbol of class and wealth. But, you know whatÃ¢ÂÂs surprising? The history of Mercedes-Benz goes back almost 150 years ago. Yes, you read that right! The brand was created as a result of the efforts of Karl Benz (creator of the first ever automobile) and Gottlieb Daimler (inventor of the high-speed petrol engine). Check out the Mercedes-Benz Logo, history timeline and the list of latest models.'),(12,'Mitsubishi','Mitsubishi Motors Corporation is one of the worldÃ¢ÂÂs largest and the sixth-leading automobile manufacturer in Japan. The way how the history of Mistubishi started is very interesting. The company was founded by Yataro Iwasaki in 1870 and was originally incorporated as a shipping firm. It was first known as Mitsubishi Shipbuilding Co Ltd, but was renamed in 1873 to Mitsubishi Shokai and soon entered the coal-mining business for supply of coal for its ships. So letÃ¢ÂÂs talk more about the Mitsubishi logo, the companyÃ¢ÂÂs history and list of latest models.'),(13,'Pagani','Pagani Automobili S.p.A is well-known for creating some of the best super cars in the world. The Pagani history started when the company was founded in 1992 by former Lamborghini Engineer, Horacio Pagani. So, how did he get the idea to start a company of his own? Horacio, from an early age, loved making cars using balsa wood. These designs can also be seen at the Pagani Showroom in Italy, Pagani being one of the biggest names in Italian cars. Continue reading to learn more about the Pagani logo, history timeline and latest models.'),(14,'Porsche','Porsche is a renowned automobile manufacturer that specializes mainly in producing sports cars. The German automobile maker has succeeded in producing sports cars that are known for performance, quality, and reliability. Above all, the Porsche is popular for producing prestigious sports cars that can be used for everyday driving. Continue reading to learn more about the Porsche logo, the companyÃ¢ÂÂs history, important events in its timeline and their newest models.'),(15,'Rolls Royce','The history of Rolls-Royce, the renowned luxury British car-manufacturing company goes way back to 1884, when Henry Royce started his mechanical and electrical business. By 1894, he started manufacturing electric cranes and dynamos and five years later, the company was registered as Royce Ltd. In 1904, Royce created his first car, known as the Royce 10. LetÃ¢ÂÂs take a look at the Rolls-Royce Logo, the companyÃ¢ÂÂs history and their list of latest models.'),(16,'Toyota','TooThe famous Japanese car brand and now the worldÃ¢ÂÂs top automobile manufacturer, Toyota, was founded in 1937. The company was incorporated as a result of the efforts of Kiichiro Toyoda (Born in 1894). His interest in the automobile industry began in 1924 when he created his own engine. LetÃ¢ÂÂs learn more about the Toyota logo and the companyÃ¢ÂÂs history below.'),(17,'Volkswagen','Volkswagen, one of the best automobile manufacturers in the world, traces its origins way back to 1904. It was during this time that word began to spread throughout Germany regarding a Ã¢ÂÂpeopleÃ¢ÂÂs carÃ¢ÂÂ. Soon enough, the idea of this Ã¢ÂÂpeopleÃ¢ÂÂs carÃ¢ÂÂ reached other manufacturers around the world and Ford eventually began producing prototypes. This is how the Volkswagen history began, with a goal to make cars affordable for masses. Learn more about the Volkswagen Logo, history timeline and their latest models.');
/*!40000 ALTER TABLE `brand` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cars`
--

DROP TABLE IF EXISTS `cars`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
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
) ENGINE=MyISAM AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cars`
--

LOCK TABLES `cars` WRITE;
/*!40000 ALTER TABLE `cars` DISABLE KEYS */;
INSERT INTO `cars` VALUES (1,'BMW','M3',500,'images/M3.jpg',NULL,2017,1,'Convertible'),(2,'Bugatti','Chiron',950,'images/Chiron.jpg','Height: 1.21 m, Power output: 1,103 kW (1,500 PS; 1,479 hp), Kerb weight: : 1,996 kg (4,400 lb)(est); 1,978 kg (4,360 lb)(est) (Chiron Sport);',2017,1,'Luxurious'),(3,'Koenigsegg','One 1',700,'images/One1.jpg','The Koenigsegg Agera has a power-to-weight ratio of 1.51 kg (3.33 lb) per horsepower.',2011,1,'Luxurious'),(4,'Lamborghini ','Centenario',800,'images/Centenario.jpg',NULL,2016,1,'Luxurious'),(5,'Pagani','Zonda 760 X',600,'images/Zonda760X.jpg',NULL,2015,1,'Luxurious'),(6,'Toyota','Corola',450,'images/Corolla.jpg',NULL,2017,1,'Convertible'),(7,'Chevrolet','Bolt',320,'images/Bolt.png',NULL,2017,1,'Compact'),(8,'Chevrolet','Impala',380,'images/Impala.jpg',NULL,2016,1,'Convertible'),(9,'Toyota','Highlander',500,'images/Highlander.png',NULL,2018,1,'SUV'),(10,'Ford','F-150',550,'images/F150.jpeg',NULL,2018,1,'Truck'),(11,'Mazda','RX-8',250,'images/RX8.jpg',NULL,2005,1,'Sport'),(12,'Aston Martin','DB9',300,'images/DB9.jpg',NULL,2016,1,'Sport'),(13,'Dodge','Viper',500,'images/Viper.jpg',NULL,2017,1,'Luxurious'),(14,'Ford','GT',650,'images/GT.jpg',NULL,2015,1,'Luxurious'),(15,'Lamborghini','Gallardo',480,'images/Gallardo.jpg',NULL,2016,1,'Sport'),(16,'Mazda','RX-7',350,'images/RX7.jpg',NULL,2008,1,'Sport'),(17,'Mercedes-Benz','SL 500',400,'images/SL500.jpg',NULL,2010,1,'Sport'),(18,'Mercedes-Benz','SLR McLaren',700,'images/SLRMcLaren.jpg',NULL,2015,1,'Luxurious'),(26,'Ferrari','Burago',800,'images/Burago.jpg',NULL,2015,1,'Luxurious'),(27,'Ferrari','Spider',850,'images/Spider.jpg',NULL,2016,1,'Luxurious'),(19,'Chevrolet','Cobalt SS',350,'images/ColbatSS.jpg','The Cobalt SS was GM\'s first foray into the tuner market, launching with a 205 hp (153 kW; 208 PS) supercharged 2.0 L engine in late 2004 as a 2005 model, paired only with the F35 manual transmission of Opel.',2010,1,'Sport'),(28,'Rolls Royce','Cullinan',650,'images/Cullinan.jpg',NULL,2015,1,'SUV'),(20,'BMW','M3 GTR',800,'images/M3GTR.jpg','Porsche claimed during the 2001 ALMS season that BMW had violated the ALMS entry rules and the spirit of Gran Turismo. This was based on the fact that the V8 engine in the M3 GTR was not available in any road legal BMW M3.',2016,1,'Luxurious'),(21,'Chevrolet','Corvette C6',480,'images/CorvetteC6.png','The Corvette C6 featured new bodywork with exposed headlamps, revised suspension geometry, a larger passenger compartment, a larger 6.0 L (364 cu in; 5967 cc) engine and a higher level of refinement.',2013,1,'Luxurious'),(22,'Mitsubishi','Lancer Evolution VIII',650,'images/LancerEvolutionVIII.jpg',NULL,2012,1,'Convertible'),(23,'Porsche','Carrera GT',750,'images/CarreraGT.jpg','t is the first Carrera S to be powered by the 3.8 litre flat-six producing 350 bhp at 6,600 rpm and 400 Nm (295 lb-ft.) of torque at 4,600 rpm.',2015,1,'Luxurious'),(24,'Bugatti','Divo',1000,'images/Divo.jpg','The car is 8.0 seconds quicker than the Chiron around the Nardo test track according to the manufacturer and generates 456 kg (1,005 lb) of downforce at top speed, 90 kg (198 lb) more than the Chiron.',2018,1,'Luxurious'),(25,'Bugatti','Veyron EB 16.4',850,'images/Veyron.jpeg','The Bugatti Veyron EB 16.4 is a mid-engined sports car, designed and developed in Germany by the Volkswagen Group and manufactured in Molsheim, France, by Bugatti. It was named after the racing driver Pierre Veyron.',2016,1,'Luxurious');
/*!40000 ALTER TABLE `cars` ENABLE KEYS */;

UNLOCK TABLES;

--
-- Table structure for table `reservations`
--

DROP TABLE IF EXISTS `reservations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reservations` (
  `idReservation` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `idCar` int(11) unsigned NOT NULL,
  `idUser` int(11) unsigned NOT NULL,
  `fullPrice` int(11) unsigned NOT NULL,
  `dateIn` date NOT NULL,
  `dateOut` date NOT NULL,
  `active` tinyint(1) NOT NULL,
  PRIMARY KEY (`idReservation`),
  UNIQUE KEY `idreservations_UNIQUE` (`idReservation`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reservations`
--

LOCK TABLES `reservations` WRITE;
/*!40000 ALTER TABLE `reservations` DISABLE KEYS */;
INSERT INTO `reservations` VALUES (1,26,1,4800,'2020-09-22','2020-09-27',1);
/*!40000 ALTER TABLE `reservations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `idUser` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `fullName` varchar(20) NOT NULL,
  `email` varchar(25) NOT NULL,
  `pass` varbinary(32) NOT NULL,
  `admin` tinyint(1) unsigned NOT NULL,
  `active` tinyint(1) unsigned NOT NULL,
  PRIMARY KEY (`idUser`),
  UNIQUE KEY `idUser_UNIQUE` (`idUser`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=MyISAM AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping routines for database 'app'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-05-11 15:40:38
