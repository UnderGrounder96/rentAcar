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
-- Table structure for table `brand`
--

DROP TABLE IF EXISTS `brand`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `brand` (
  `idBrand` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `details` mediumtext NOT NULL,
  PRIMARY KEY (`idBrand`),
  UNIQUE KEY `idBrand_UNIQUE` (`idBrand`),
  UNIQUE KEY `brand_UNIQUE` (`name`)
) ENGINE=MyISAM AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brand`
--

LOCK TABLES `brand` WRITE;
/*!40000 ALTER TABLE `brand` DISABLE KEYS */;
INSERT INTO `brand` VALUES (1,'Aston Martin','The Aston Martin Lagonda Limited has a long history filled with numerous difficulties. However, over the time, all efforts proved to be worth it and now the company exists as one of the world’s top automobile manufacturers. The Aston Martin history began with the efforts of Lionel Martin and Robert Bamford, who founded the ‘Bamford and Martin Limited Company’ in 1913. Let’s talk more about the Aston Martin logo, the company’s history, interesting news in their journey and the list of latest car models.'),(2,'BMW','BMW (originally an initialism for Bayerische Motoren Werke in German, or Bavarian Motor Works in English) is a German multinational company which currently produces luxury automobiles and motorcycles, and also produced aircraft engines until 1945.'),(3,'Bugatti','Automobiles Ettore Bugatti was a French car manufacturer of high-performance automobiles, founded in 1909 in the then German city of Molsheim, Alsace by Italian-born Ettore Bugatti. Bugatti cars were known for their design beauty (Ettore Bugatti was from a family of artists and considered himself to be both an artist and builder) and for their many race victories. Famous Bugattis include the Type 35 Grand Prix cars, the Type 41 \"Royale\", the Type 57 \"Atlantic\" and the Type 55 sports car.'),(4,'Chevrolet','Before being acquired by General Motors (GM) in 1918, the story began with Louis Chevrolet in 1911. Louis was an automotive engineer and Swiss race car driver and had a vision of creating his own company. Soon he became friends with William C. Durant who was the co-founder of General Motors. Upon William’s termination from his company, Louis and William founded the company in Detroit. This is how the Chevrolet history started, and how this company began to go towards success.'),(5,'Dodge','Dodge was founded in 1900 by Horace and John Dodge (The Dodge Brothers). It was initially known as the Dodge Brothers Company and used to sell bicycles, but then within two years it became a major supplier of axles, engines, and transmissions to the automobile industry. The company was incredibly successful from the outset and gained a good reputation even during its early stages in the timeline. That’s how the Dodge history beginning looks like, successful from the start.'),(6,'Ferrari','For car lovers, the ultimate in sports car pleasure is to slip behind the wheel of a Ferrari, a bright red, super-fast, highly sporty and exceptionally beautiful vehicle. While the imagery is correct in plenty of ways, only a few actually wonder ‘How did Ferrari get this far?’ So, here’s a brief history of Ferrari and how the cars came about. We’ll talk about the Ferrari Logo, their company’s history timeline and the list of latest models in this post.'),(7,'Ford','One of the world’s most popular automobile manufacturers, Ford was founded and incorporated in 1903. The company was created as a result of the efforts of Henry Ford, who even after facing disappointment with the Detroit Automobile Company and the Henry Ford Company managed to get back on his feet. In 1902, Henry Ford turned to an acquaintance, Alexander Y. Malcomson, for financial help in order to start a new company, which is how the Ford company began. Let’s talk more about the Ford Logo, the company’s history from beginning and their current models.'),(8,'Koenigsegg','The Swedish auto industry has some of the finest luxury cars to offer. What is really interesting is that they are on par with other rival car manufacturers like Ferrari, Lamborghini, Volvo and even Aston Martin. Koenigsegg is one such manufacturer that has exceeded expectations with the introduction of hyper-cars. The history of Koenigsegg started from nothing and now has made considerable contributions to the car market. Take a look at the Koenigsegg Logo, history timeline and list of latest models.'),(9,'Lamborghini','Lamborghini cars are much-loved by car aficionados around the world. These cars are known for their excellent performance in terms of speed and are built with incredible style. However, these cars didn’t just gain a high reputation on their own. In fact, there is a grand history of Lamborghini behind the company itself that designs vehicles exclusively for customer satisfaction. Learn more about the Lamborghini logo, history timeline and list of latest models in this article.'),(10,'Mazda','The history of Mazda began as the Toyo Cork Kogyo Co Ltd was founded by Jujiro Matsuda in 1920. The company manufactured machine tools for numerous industries in Japan. However, in 1931, due to low profits, the company decided to shift its attention to vehicles and introduced the famous three-wheel truck called the Mazda-Go. Let’s discuss more about the Mazda logo, the company’s history and their latest models.'),(11,'Mercedes-Benz','Mercedes-Benz is an automobile manufacturer that is known throughout the world as a symbol of class and wealth. But, you know what’s surprising? The history of Mercedes-Benz goes back almost 150 years ago. Yes, you read that right! The brand was created as a result of the efforts of Karl Benz (creator of the first ever automobile) and Gottlieb Daimler (inventor of the high-speed petrol engine). Check out the Mercedes-Benz Logo, history timeline and the list of latest models.'),(12,'Mitsubishi','Mitsubishi Motors Corporation is one of the world’s largest and the sixth-leading automobile manufacturer in Japan. The way how the history of Mistubishi started is very interesting. The company was founded by Yataro Iwasaki in 1870 and was originally incorporated as a shipping firm. It was first known as Mitsubishi Shipbuilding Co Ltd, but was renamed in 1873 to Mitsubishi Shokai and soon entered the coal-mining business for supply of coal for its ships. So let’s talk more about the Mitsubishi logo, the company’s history and list of latest models.'),(13,'Pagani','Pagani Automobili S.p.A is well-known for creating some of the best super cars in the world. The Pagani history started when the company was founded in 1992 by former Lamborghini Engineer, Horacio Pagani. So, how did he get the idea to start a company of his own? Horacio, from an early age, loved making cars using balsa wood. These designs can also be seen at the Pagani Showroom in Italy, Pagani being one of the biggest names in Italian cars. Continue reading to learn more about the Pagani logo, history timeline and latest models.'),(14,'Porsche','Porsche is a renowned automobile manufacturer that specializes mainly in producing sports cars. The German automobile maker has succeeded in producing sports cars that are known for performance, quality, and reliability. Above all, the Porsche is popular for producing prestigious sports cars that can be used for everyday driving. Continue reading to learn more about the Porsche logo, the company’s history, important events in its timeline and their newest models.'),(15,'Rolls Royce','The history of Rolls-Royce, the renowned luxury British car-manufacturing company goes way back to 1884, when Henry Royce started his mechanical and electrical business. By 1894, he started manufacturing electric cranes and dynamos and five years later, the company was registered as Royce Ltd. In 1904, Royce created his first car, known as the Royce 10. Let’s take a look at the Rolls-Royce Logo, the company’s history and their list of latest models.'),(16,'Toyota','TooThe famous Japanese car brand and now the world’s top automobile manufacturer, Toyota, was founded in 1937. The company was incorporated as a result of the efforts of Kiichiro Toyoda (Born in 1894). His interest in the automobile industry began in 1924 when he created his own engine. Let’s learn more about the Toyota logo and the company’s history below.'),(17,'Volkswagen','Volkswagen, one of the best automobile manufacturers in the world, traces its origins way back to 1904. It was during this time that word began to spread throughout Germany regarding a ‘people’s car’. Soon enough, the idea of this ‘people’s car’ reached other manufacturers around the world and Ford eventually began producing prototypes. This is how the Volkswagen history began, with a goal to make cars affordable for masses. Learn more about the Volkswagen Logo, history timeline and their latest models.');
/*!40000 ALTER TABLE `brand` ENABLE KEYS */;
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
