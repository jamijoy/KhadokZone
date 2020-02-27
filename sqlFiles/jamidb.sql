-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 25, 2020 at 08:53 AM
-- Server version: 10.1.28-MariaDB
-- PHP Version: 7.1.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jamidb`
--

-- --------------------------------------------------------

--
-- Table structure for table `job`
--

CREATE TABLE `job` (
  `companyName` varchar(30) NOT NULL,
  `jobTitle` varchar(30) NOT NULL,
  `jobLocation` varchar(30) NOT NULL,
  `salary` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `job`
--

INSERT INTO `job` (`companyName`, `jobTitle`, `jobLocation`, `salary`) VALUES
('BizzBond', 'Asst. Prof. Manager', 'Dhanmondi', 25000),
('MediaSoft', 'Data Load Engr.', 'Kawran Bazar', 30000),
('BizzBond', 'Software Quality Assr. Officer', 'Dhanmondi', 45000),
('MediaSoft', 'Sr. Additive Engg.', 'Kawran Bazar', 50000);

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `mail` varchar(30) NOT NULL,
  `companyName` varchar(30) NOT NULL,
  `contact` int(12) NOT NULL,
  `userName` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `mail`, `companyName`, `contact`, `userName`, `password`) VALUES
(1, 'admin', 'admin@jobHorizon.com', 'JobHorizon', 111, 'admin', 'admin'),
(9, 'estaik', 'estiak@BizzBond.com', 'BizzBond', 1894567345, 'estiak', 'estiak'),
(10, 'ManasDatta', 'manas@MediaSoft.com', 'MediaSoft', 1532456908, 'manas', 'manas');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `job`
--
ALTER TABLE `job`
  ADD PRIMARY KEY (`jobTitle`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
