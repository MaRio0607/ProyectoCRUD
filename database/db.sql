-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 06-06-2022 a las 01:19:37
-- Versión del servidor: 5.7.36
-- Versión de PHP: 7.4.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `crudnodejsmysql`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actividad`
--

DROP TABLE IF EXISTS `actividad`;
CREATE TABLE IF NOT EXISTS `actividad` (
  `id_actividad` int(6) UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre_actividad` varchar(50) NOT NULL,
  `dia_de_actividad` varchar(50) NOT NULL,
  `hora_actividad` varchar(50) NOT NULL,
  `id_instructor` int(11) DEFAULT NULL,
  `fechaActualizacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_actividad`),
  KEY `id_instructor` (`id_instructor`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `actividad`
--

INSERT INTO `actividad` (`id_actividad`, `nombre_actividad`, `dia_de_actividad`, `hora_actividad`, `id_instructor`, `fechaActualizacion`) VALUES
(1, 'Yoga', 'Viernes', '5:00PM', 1, '2022-06-05 00:50:34');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empleado`
--

DROP TABLE IF EXISTS `empleado`;
CREATE TABLE IF NOT EXISTS `empleado` (
  `id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `direccion` varchar(100) NOT NULL,
  `telefono` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `empleado`
--

INSERT INTO `empleado` (`id`, `nombre`, `direccion`, `telefono`) VALUES
(2, 'Martha Salgado', 'Cerrada Marruecos #44', '7774479958');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `instructor`
--

DROP TABLE IF EXISTS `instructor`;
CREATE TABLE IF NOT EXISTS `instructor` (
  `id_instructor` int(6) UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre_instructor` varchar(50) NOT NULL,
  `direccion_instructor` varchar(100) NOT NULL,
  `telefono_instructor` varchar(15) DEFAULT NULL,
  `fechaActualizacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_instructor`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `instructor`
--

INSERT INTO `instructor` (`id_instructor`, `nombre_instructor`, `direccion_instructor`, `telefono_instructor`, `fechaActualizacion`) VALUES
(1, 'Carlo villagran', 'Su casa', '21321312', '2022-06-05 00:49:58');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paciente`
--

DROP TABLE IF EXISTS `paciente`;
CREATE TABLE IF NOT EXISTS `paciente` (
  `id_paciente` int(6) UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre_paciente` varchar(50) NOT NULL,
  `edad` varchar(15) DEFAULT NULL,
  `fecha_de_ingreso` date DEFAULT NULL,
  `fecha_de_salida` date DEFAULT NULL,
  `familiar_acargo` varchar(50) NOT NULL,
  `telefono_familiar` varchar(15) DEFAULT NULL,
  `fechaActualizacion` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_paciente`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `paciente`
--

INSERT INTO `paciente` (`id_paciente`, `nombre_paciente`, `edad`, `fecha_de_ingreso`, `fecha_de_salida`, `familiar_acargo`, `telefono_familiar`, `fechaActualizacion`) VALUES
(5, 'Martin Castro', '34', '2019-04-27', '2022-06-15', 'Ema Torres', '97868', '2022-06-05 00:43:09');

--
-- Disparadores `paciente`
--
DROP TRIGGER IF EXISTS `cambioPaciente`;
DELIMITER $$
CREATE TRIGGER `cambioPaciente` AFTER UPDATE ON `paciente` FOR EACH ROW BEGIN
  IF OLD.fecha_de_salida <>NEW.fecha_de_salida THEN 
  INSERT INTO pacienteNotificacion(id_paciente,Fecha_Salida)
  VALUES(OLD.id_paciente,NEW.fecha_de_salida);
  END IF;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pacientenotificacion`
--

DROP TABLE IF EXISTS `pacientenotificacion`;
CREATE TABLE IF NOT EXISTS `pacientenotificacion` (
  `id_not` int(6) UNSIGNED NOT NULL AUTO_INCREMENT,
  `id_paciente` int(11) DEFAULT NULL,
  `Fecha_Salida` date DEFAULT NULL,
  PRIMARY KEY (`id_not`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `pacientenotificacion`
--

INSERT INTO `pacientenotificacion` (`id_not`, `id_paciente`, `Fecha_Salida`) VALUES
(1, NULL, '2022-06-30'),
(2, 5, '2022-06-07'),
(3, 5, '2022-06-15');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registroactividad`
--

DROP TABLE IF EXISTS `registroactividad`;
CREATE TABLE IF NOT EXISTS `registroactividad` (
  `id_actividad` int(11) DEFAULT NULL,
  `id_paciente` int(11) DEFAULT NULL,
  KEY `id_actividad` (`id_actividad`),
  KEY `id_paciente` (`id_paciente`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
