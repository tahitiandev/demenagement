-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Client :  127.0.0.1
-- Généré le :  Mar 07 Avril 2020 à 03:57
-- Version du serveur :  5.6.17
-- Version de PHP :  5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données :  `demenagement`
--

-- --------------------------------------------------------

--
-- Structure de la table `carton`
--

CREATE TABLE IF NOT EXISTS `carton` (
  `idcarton` int(11) NOT NULL AUTO_INCREMENT,
  `num` int(255) NOT NULL,
  `type` int(11) NOT NULL,
  `contenu` text NOT NULL,
  `origine` int(11) NOT NULL,
  `destination` int(11) NOT NULL,
  `idusers` int(11) NOT NULL,
  PRIMARY KEY (`idcarton`),
  KEY `type` (`type`),
  KEY `origine` (`origine`,`destination`),
  KEY `destination` (`destination`),
  KEY `origine_2` (`origine`),
  KEY `type_2` (`type`),
  KEY `type_3` (`type`),
  KEY `type_4` (`type`),
  KEY `idusers` (`idusers`),
  KEY `num` (`num`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=15 ;

--
-- Contenu de la table `carton`
--

INSERT INTO `carton` (`idcarton`, `num`, `type`, `contenu`, `origine`, `destination`, `idusers`) VALUES
(12, 1, 2, 'Assiettes\r\nFourchette\r\nBol\r\nCouteau', 3, 4, 58),
(14, 1, 2, 'mm', 2, 4, 58);

-- --------------------------------------------------------

--
-- Structure de la table `destination`
--

CREATE TABLE IF NOT EXISTS `destination` (
  `iddestination` int(11) NOT NULL AUTO_INCREMENT,
  `lieudestination` varchar(255) NOT NULL,
  PRIMARY KEY (`iddestination`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=7 ;

--
-- Contenu de la table `destination`
--

INSERT INTO `destination` (`iddestination`, `lieudestination`) VALUES
(4, 'Cuisine'),
(5, 'Chambre'),
(6, 'Salon');

-- --------------------------------------------------------

--
-- Structure de la table `forum`
--

CREATE TABLE IF NOT EXISTS `forum` (
  `idforum` int(11) NOT NULL AUTO_INCREMENT,
  `expediteur` varchar(255) NOT NULL,
  `message` text NOT NULL,
  PRIMARY KEY (`idforum`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=8 ;

--
-- Contenu de la table `forum`
--

INSERT INTO `forum` (`idforum`, `expediteur`, `message`) VALUES
(1, 'gilles', 'Bonjour'),
(2, 'gilles', 'je m''appel<br />\nGiles'),
(3, 'mm', 'm'),
(4, 'mm', 'mmmmm'),
(5, 'mm', 'eure'),
(6, 'mm', 'hore'),
(7, 'mm', 'mahore');

-- --------------------------------------------------------

--
-- Structure de la table `image`
--

CREATE TABLE IF NOT EXISTS `image` (
  `idimage` int(11) NOT NULL AUTO_INCREMENT,
  `nomorigine` varchar(200) NOT NULL,
  `nommodifier` varchar(200) NOT NULL,
  `idcarton` int(11) NOT NULL,
  PRIMARY KEY (`idimage`),
  KEY `idcarton` (`idcarton`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=4 ;

--
-- Contenu de la table `image`
--

INSERT INTO `image` (`idimage`, `nomorigine`, `nommodifier`, `idcarton`) VALUES
(1, '300045054_1-meuble-de-cuisine-laquee-brillant-7-elements-neuve.jpg', 'carton-12.jpg', 12),
(2, '300045054_1-meuble-de-cuisine-laquee-brillant-7-elements-neuve.jpg', 'carton-13.jpg', 13),
(3, 'photo.JPG', 'carton-14.JPG', 14);

-- --------------------------------------------------------

--
-- Structure de la table `liason`
--

CREATE TABLE IF NOT EXISTS `liason` (
  `idcarton` int(11) NOT NULL,
  `idtype` int(11) NOT NULL,
  PRIMARY KEY (`idcarton`,`idtype`),
  KEY `idcarton` (`idcarton`,`idtype`),
  KEY `idtype` (`idtype`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `orgine`
--

CREATE TABLE IF NOT EXISTS `orgine` (
  `idorigine` int(11) NOT NULL AUTO_INCREMENT,
  `lieuorigine` varchar(255) NOT NULL,
  PRIMARY KEY (`idorigine`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- Contenu de la table `orgine`
--

INSERT INTO `orgine` (`idorigine`, `lieuorigine`) VALUES
(2, 'Salon'),
(3, 'Cuisine'),
(4, 'Chambre');

-- --------------------------------------------------------

--
-- Structure de la table `type`
--

CREATE TABLE IF NOT EXISTS `type` (
  `idtype` int(11) NOT NULL AUTO_INCREMENT,
  `nomtype` varchar(200) NOT NULL,
  PRIMARY KEY (`idtype`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=53 ;

--
-- Contenu de la table `type`
--

INSERT INTO `type` (`idtype`, `nomtype`) VALUES
(2, 'Vaisselle'),
(3, 'Produits ménagers'),
(4, 'Bouquins'),
(5, 'Appareils informatique'),
(37, 'ok'),
(38, 'test'),
(39, 'rretest');

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `idusers` int(11) NOT NULL AUTO_INCREMENT,
  `login` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `nom` varchar(100) NOT NULL,
  `prenom` varchar(100) NOT NULL,
  `telephone` int(15) DEFAULT NULL,
  `email` varchar(200) NOT NULL,
  `adresse` text NOT NULL,
  `avatar` varchar(255) NOT NULL,
  PRIMARY KEY (`idusers`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=121 ;

--
-- Contenu de la table `users`
--

INSERT INTO `users` (`idusers`, `login`, `password`, `nom`, `prenom`, `telephone`, `email`, `adresse`, `avatar`) VALUES
(58, 'test', 'test', 'test', 'test', 0, 'test', 'test', 'avatar-.jpg'),
(105, 'test', 'mama', 'dou', 'is', 65, 'the', 'only', 'one'),
(110, 'test', 'hello', 'word', 'my', 87, 'email', 'adresse', 'avatar'),
(118, 'sss', 'sss', 'ss', 'sssss', 0, 'ssss', 'sss', ''),
(120, 'gheitaa', 'mamadou', 'HEITAA', 'Gilles', 87714479, 'heitaa.gilles1@gmail.com', 'Fariipiti', 'bob-marley.jpg');

--
-- Contraintes pour les tables exportées
--

--
-- Contraintes pour la table `carton`
--
ALTER TABLE `carton`
  ADD CONSTRAINT `carton_ibfk_1` FOREIGN KEY (`origine`) REFERENCES `orgine` (`idorigine`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `carton_ibfk_2` FOREIGN KEY (`destination`) REFERENCES `destination` (`iddestination`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `carton_ibfk_3` FOREIGN KEY (`idusers`) REFERENCES `users` (`idusers`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `liason`
--
ALTER TABLE `liason`
  ADD CONSTRAINT `liason_ibfk_1` FOREIGN KEY (`idcarton`) REFERENCES `carton` (`idcarton`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `liason_ibfk_2` FOREIGN KEY (`idtype`) REFERENCES `type` (`idtype`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
