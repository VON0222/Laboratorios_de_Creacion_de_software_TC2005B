-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-03-2023 a las 18:05:16
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cajeroautomatico`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `ConsultarSaldo` (IN `uNoCuenta` INT)   SELECT Saldo 
FROM clientes
WHERE noCuenta = uNoCuenta$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `DepositarSaldo` (IN `uNoCuenta` INT, IN `uMonto` FLOAT)   BEGIN
INSERT INTO operaciones VALUES (uNoCuenta, 3, CURRENT_DATE, uMonto);
UPDATE clientes SET Saldo = Saldo + uMonto WHERE NoCuenta = uNoCuenta;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `RetirarSaldo` (IN `uNoCuenta` INT, IN `uMonto` FLOAT)   BEGIN
INSERT INTO operaciones VALUES (uNoCuenta, 2, CURRENT_DATE, uMonto);
UPDATE clientes SET Saldo = Saldo - uMonto WHERE noCuenta = uNoCuenta;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `noCuenta` int(11) NOT NULL,
  `Nombre` varchar(60) NOT NULL,
  `Saldo` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`noCuenta`, `Nombre`, `Saldo`) VALUES
(1, 'Gamaliel', 51000.5),
(2, 'Daniel', 100000),
(3, 'Diego', 1799.9);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `operaciones`
--

CREATE TABLE `operaciones` (
  `noCuenta` int(11) NOT NULL,
  `idMovimiento` int(11) NOT NULL,
  `Fecha` date NOT NULL,
  `Monto` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `operaciones`
--

INSERT INTO `operaciones` (`noCuenta`, `idMovimiento`, `Fecha`, `Monto`) VALUES
(1, 3, '2023-03-30', 1000.5),
(3, 2, '2023-03-30', 200.1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipomovimiento`
--

CREATE TABLE `tipomovimiento` (
  `idMovimiento` int(11) NOT NULL,
  `Nombre` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tipomovimiento`
--

INSERT INTO `tipomovimiento` (`idMovimiento`, `Nombre`) VALUES
(1, 'Consulta'),
(2, 'Retiro'),
(3, 'Deposito');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`noCuenta`);

--
-- Indices de la tabla `operaciones`
--
ALTER TABLE `operaciones`
  ADD PRIMARY KEY (`noCuenta`,`idMovimiento`),
  ADD KEY `idMovimiento` (`idMovimiento`);

--
-- Indices de la tabla `tipomovimiento`
--
ALTER TABLE `tipomovimiento`
  ADD PRIMARY KEY (`idMovimiento`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `noCuenta` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `tipomovimiento`
--
ALTER TABLE `tipomovimiento`
  MODIFY `idMovimiento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `operaciones`
--
ALTER TABLE `operaciones`
  ADD CONSTRAINT `operaciones_ibfk_1` FOREIGN KEY (`idMovimiento`) REFERENCES `tipomovimiento` (`idMovimiento`),
  ADD CONSTRAINT `operaciones_ibfk_2` FOREIGN KEY (`noCuenta`) REFERENCES `clientes` (`noCuenta`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
